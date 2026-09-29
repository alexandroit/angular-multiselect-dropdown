import assert from 'node:assert/strict'
import {createHash} from 'node:crypto'
import {execFileSync} from 'node:child_process'
import {readFile, writeFile, readdir} from 'node:fs/promises'
import path from 'node:path'

const directory = path.resolve(process.argv[2])
const archives = (await readdir(directory)).filter(name => name.endsWith('.tgz'))
assert.equal(archives.length, 1)
const archive = archives[0]
const metadata = JSON.parse(execFileSync('tar', ['-xOf', path.join(directory, archive), 'package/package.json'], {encoding: 'utf8'}))
const evidence = JSON.parse(await readFile(path.join(directory, 'registry-verification.json'), 'utf8'))
assert.equal(evidence.status, 'PASS')
assert.equal(evidence.package, `${metadata.name}@${metadata.version}`)
assert.match(evidence.sourceCommit, /^[0-9a-f]{40}$/)
await writeFile(path.join(directory, 'package.json'), JSON.stringify(metadata, null, 2) + '\n')
await writeFile(path.join(directory, 'sbom.cdx.json'), JSON.stringify(evidence.consumers.find(item => item.kind === 'direct').sbom, null, 2) + '\n')
const notes = [
  `# ${evidence.package}`, '',
  'Independent Stackline maintenance fork. Original authors and licenses are retained.', '',
  `Source commit: ${evidence.sourceCommit}`,
  `Publication: ${evidence.publicationRun}`,
  `CI: https://github.com/${process.env.GITHUB_REPOSITORY}/actions/runs/${process.env.CI_RUN_ID}`, '',
  'The published tarball is the exact artifact tested in CI. Registry bytes, provenance,',
  'signatures, direct and aliased installs, and zero known production audit findings were verified.',
  'Audit results are a point-in-time check, not a guarantee of absolute security.', '',
  'See the repository changelog and notices for the focused fixes and upstream attribution.', ''
].join('\n')
await writeFile(path.join(directory, 'RELEASE_NOTES.md'), notes)
const names = (await readdir(directory)).filter(name => name !== 'SHA256SUMS').sort()
const checksums = await Promise.all(names.map(async name => `${createHash('sha256').update(await readFile(path.join(directory, name))).digest('hex')}  ${name}`))
await writeFile(path.join(directory, 'SHA256SUMS'), checksums.join('\n') + '\n')
