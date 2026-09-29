import assert from 'node:assert/strict'
import {createHash} from 'node:crypto'
import {spawnSync} from 'node:child_process'
import {readFile, readdir, mkdtemp, rm} from 'node:fs/promises'
import os from 'node:os'
import path from 'node:path'

const directory = path.resolve(process.argv[2])
const evidence = JSON.parse(await readFile(path.join(directory, 'registry-verification.json'), 'utf8'))
const metadata = JSON.parse(await readFile(path.join(directory, 'package.json'), 'utf8'))
const repository = process.env.GITHUB_REPOSITORY
assert.equal(metadata.repository.url, `git+https://github.com/${repository}.git`)
assert.equal(evidence.status, 'PASS')
assert.equal(evidence.package, `${metadata.name}@${metadata.version}`)
const tag = `stackline-v${metadata.version}`
function gh(args, {optional = false, input} = {}) {
  const result = spawnSync('gh', args, {encoding: 'utf8', input})
  if (optional && result.status !== 0 && /HTTP 404/.test(result.stderr)) return null
  assert.equal(result.status, 0, result.stderr || result.stdout)
  return result.stdout.trim() ? JSON.parse(result.stdout) : null
}
function api(route, options) { return gh(['api', `repos/${repository}/${route}`], options) }
// Repository immutability is enabled and verified by the owner during setup.
// Its settings endpoint requires Administration permission, which GITHUB_TOKEN
// intentionally does not have. The published release's immutable flag is checked below.
let ref = api(`git/ref/tags/${tag}`, {optional: true})
if (!ref) {
  ref = gh(['api', '--method', 'POST', `repos/${repository}/git/refs`, '--input', '-'], {
    input: JSON.stringify({ref: `refs/tags/${tag}`, sha: evidence.sourceCommit})
  })
}
let object = ref.object
while (object.type === 'tag') object = api(`git/tags/${object.sha}`).object
assert.equal(object.type, 'commit')
assert.equal(object.sha, evidence.sourceCommit, 'Existing release tag points to a different source commit')
let release = api(`releases/tags/${tag}`, {optional: true})
if (!release) {
  // The tag endpoint only returns published releases. Resume a prior draft
  // through the authenticated list instead of creating a duplicate release.
  const pages = gh(['api', '--paginate', '--slurp', `repos/${repository}/releases?per_page=100`])
  release = pages.flat().find(candidate => candidate.draft && candidate.tag_name === tag)
}
if (!release) {
  // The tag is already verified above. Do not pass target_commitish: GitHub
  // otherwise requires workflow-write permission for historical workflow files.
  release = gh(['api', '--method', 'POST', `repos/${repository}/releases`, '--input', '-'], {
    input: JSON.stringify({tag_name: tag,
      name: `${metadata.name} ${metadata.version}`, body: await readFile(path.join(directory, 'RELEASE_NOTES.md'), 'utf8'), draft: true})
  })
}
const names = (await readdir(directory)).sort()
if (!release.draft) {
  assert.equal(release.immutable, true)
  assert.deepEqual(release.assets.map(asset => asset.name).sort(), names)
  const stored = await mkdtemp(path.join(os.tmpdir(), 'stackline-release-check-'))
  try {
    const download = spawnSync('gh', ['release', 'download', tag, '--repo', repository, '--dir', stored], {encoding: 'utf8'})
    assert.equal(download.status, 0, download.stderr)
    for (const asset of release.assets) {
      assert.equal(path.basename(asset.name), asset.name)
      const digest = createHash('sha256').update(await readFile(path.join(stored, asset.name))).digest('hex')
      assert.equal(asset.digest, `sha256:${digest}`, `Stored release asset differs: ${asset.name}`)
    }
    const previous = JSON.parse(await readFile(path.join(stored, 'registry-verification.json'), 'utf8'))
    for (const key of ['package', 'sourceCommit', 'publicationRun', 'archive', 'sha256', 'integrity', 'status']) {
      assert.equal(previous[key], evidence[key], `Published release has a different ${key}`)
    }
    const archiveDigest = createHash('sha256').update(await readFile(path.join(stored, evidence.archive))).digest('hex')
    assert.equal(archiveDigest, evidence.sha256)
  } finally { await rm(stored, {recursive: true, force: true}) }
  console.log(JSON.stringify({release: release.html_url, immutable: true, sourceCommit: evidence.sourceCommit, status: 'VERIFIED_EXISTING'}))
  process.exit(0)
}
if (release.draft) {
  const uploaded = spawnSync('gh', ['release', 'upload', tag, ...names.map(name => path.join(directory, name)), '--repo', repository, '--clobber'], {encoding: 'utf8'})
  assert.equal(uploaded.status, 0, uploaded.stderr)
  gh(['api', '--method', 'PATCH', `repos/${repository}/releases/${release.id}`, '--input', '-'], {
    input: JSON.stringify({draft: false, make_latest: 'true'})
  })
}
release = api(`releases/tags/${tag}`)
assert.equal(release.draft, false)
assert.equal(release.immutable, true)
assert.deepEqual(release.assets.map(asset => asset.name).sort(), names)
for (const asset of release.assets) {
  const digest = createHash('sha256').update(await readFile(path.join(directory, asset.name))).digest('hex')
  assert.equal(asset.digest, `sha256:${digest}`, `Release asset differs: ${asset.name}`)
}
console.log(JSON.stringify({release: release.html_url, immutable: true, sourceCommit: evidence.sourceCommit, assets: names.length}))
