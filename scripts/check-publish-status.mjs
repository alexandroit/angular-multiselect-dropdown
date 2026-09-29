import assert from 'node:assert/strict'
import { execFileSync } from 'node:child_process'
import { appendFile, readFile } from 'node:fs/promises'
import { publishedArtifactExists, registryPackageExists } from './registry-requests.mjs'

const archive = process.argv[2]
const metadata = JSON.parse(execFileSync('tar', ['-xOf', archive, 'package/package.json'], { encoding: 'utf8' }))
assert.equal(metadata.name, '@stackline/angular-multiselect-dropdown')
const packageExists = await registryPackageExists(metadata.name)
const published = await publishedArtifactExists(metadata, await readFile(archive))
if (process.env.GITHUB_OUTPUT) {
  await appendFile(process.env.GITHUB_OUTPUT, `package_exists=${packageExists}\npublished=${published}\n`)
}
if (published) assert.equal(packageExists, true, 'a published version requires an existing package')
console.log(published ? 'Exact artifact already exists on npm; verification only.' : 'Version is absent from npm; publication is required.')
