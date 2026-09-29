import assert from 'node:assert/strict'
import { createHash } from 'node:crypto'
import { setTimeout as delay } from 'node:timers/promises'

export async function retryAttestationAudit(operation, { attempts = 24, wait = () => delay(5_000) } = {}) {
  for (let attempt = 0; attempt < attempts; attempt++) {
    try {
      return await operation()
    } catch (error) {
      const diagnostic = `${error.stderr || ''}\n${error.stdout || ''}`
      const pending = /\bE404\b/.test(diagnostic) &&
        diagnostic.includes('GET https://registry.npmjs.org/-/npm/v1/attestations/')
      if (!pending || attempt === attempts - 1) throw error
      console.log('npm attestation is still propagating; retrying signature verification.')
      await wait()
    }
  }
}

export async function retryRegistryInstall(operation, {
  packageName,
  version,
  attempts = 120,
  wait = () => delay(5_000)
} = {}) {
  assert.equal(typeof packageName, 'string')
  assert.equal(typeof version, 'string')
  const identity = `${packageName}@${version}`
  const registryPaths = [
    encodeURIComponent(packageName),
    encodeURIComponent(packageName).replaceAll('%40', '@')
  ].map((value) => `registry.npmjs.org/${value}`.toLowerCase())
  let result
  for (let attempt = 0; attempt < attempts; attempt++) {
    result = operation()
    if (result?.status === 0) return result
    const diagnostic = `${result?.stderr || ''}\n${result?.stdout || ''}`
    const normalizedDiagnostic = diagnostic.toLowerCase()
    const missingPackage = /\bE404\b/.test(diagnostic) && (
      registryPaths.some((registryPath) => normalizedDiagnostic.includes(registryPath)) ||
      normalizedDiagnostic.includes(`requested resource '${identity}'`.toLowerCase())
    )
    const missingVersion = `no matching version found for ${identity}`.toLowerCase()
    const stalePackument = /\bETARGET\b/.test(diagnostic) && normalizedDiagnostic
      .split(/\r?\n/)
      .map((line) => line.trim().replace(/^npm error (?:notarget )?/, ''))
      .some((line) => line === missingVersion || line === `${missingVersion}.`)
    const pending = missingPackage || stalePackument
    if (!pending || attempt === attempts - 1) return result
    console.log('npm package metadata is still propagating; retrying registry install.')
    await wait()
  }
  return result
}

export async function publishedArtifactExists(metadata, bytes, fetcher = globalThis.fetch) {
  const response = await fetcher(`https://registry.npmjs.org/${encodeURIComponent(metadata.name)}/${metadata.version}`,
    { signal: globalThis.AbortSignal.timeout(30_000) })
  if (response.status === 404) return false
  assert(response.ok, `registry status check failed: HTTP ${response.status}`)
  const official = await response.json()
  assert.equal(official.name, metadata.name)
  assert.equal(official.version, metadata.version)
  assert.equal(official.dist.integrity, `sha512-${createHash('sha512').update(bytes).digest('base64')}`,
    'published version differs from the CI artifact; never replace it')
  const url = new URL(official.dist.tarball)
  assert.equal(url.origin, 'https://registry.npmjs.org')
  const archive = await fetcher(url, { signal: globalThis.AbortSignal.timeout(30_000) })
  assert(archive.ok, `registry tarball check failed: HTTP ${archive.status}`)
  assert(bytes.equals(Buffer.from(await archive.arrayBuffer())), 'published tarball bytes differ from CI')
  return true
}

export async function registryPackageExists(name, fetcher = globalThis.fetch) {
  const response = await fetcher(`https://registry.npmjs.org/${encodeURIComponent(name)}`,
    { signal: globalThis.AbortSignal.timeout(30_000) })
  if (response.status === 404) return false
  assert(response.ok, `registry package check failed: HTTP ${response.status}`)
  const official = await response.json()
  assert.equal(official.name, name)
  return true
}

export function validateProvenanceStatement(statement, {
  identity,
  sha512,
  repository,
  workflowPath,
  expectedSourceCommit,
  expectedPublicationRun
}) {
  assert.equal(statement._type, 'https://in-toto.io/Statement/v1')
  assert.equal(statement.predicateType, 'https://slsa.dev/provenance/v1')
  assert.deepEqual(statement.subject, [{
    name: `pkg:npm/${identity.replace(/^@/, '%40')}`,
    digest: { sha512 }
  }])

  const definition = statement.predicate.buildDefinition
  assert.equal(definition.buildType, 'https://slsa-framework.github.io/github-actions-buildtypes/workflow/v1')
  assert.deepEqual(definition.externalParameters.workflow, {
    ref: 'refs/heads/master',
    repository: `https://github.com/${repository}`,
    path: workflowPath
  })
  assert.equal(definition.internalParameters.github.event_name, 'workflow_dispatch')

  const expectedUri = `git+https://github.com/${repository}@refs/heads/master`
  const dependencies = definition.resolvedDependencies.filter((entry) => entry.uri === expectedUri)
  assert.equal(dependencies.length, 1, 'provenance must resolve the main-branch source exactly once')
  const sourceCommit = dependencies[0].digest.gitCommit
  assert.match(sourceCommit, /^[0-9a-f]{40}$/)
  assert.equal(sourceCommit, expectedSourceCommit, 'provenance source commit differs from the approved commit')

  assert.equal(statement.predicate.runDetails.builder.id, 'https://github.com/actions/runner/github-hosted')
  const publicationRun = statement.predicate.runDetails.metadata.invocationId
  assert.match(publicationRun, new RegExp(`^https://github\\.com/${escapeRegExp(repository)}/actions/runs/[0-9]+/attempts/[0-9]+$`))
  assert.equal(publicationRun, expectedPublicationRun, 'provenance invocation differs from the approved workflow run')

  return { publicationRun, sourceCommit }
}

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
}
