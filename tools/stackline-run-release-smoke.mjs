import { existsSync, readFileSync, readdirSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { isDeepStrictEqual } from 'node:util';

const FIXTURE_MANIFEST = 'package.fixture.json';

function readJson(file) {
  return JSON.parse(readFileSync(file, 'utf8'));
}

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

function collectMetadata(directory, files = []) {
  for (const entry of readdirSync(directory, { withFileTypes: true })) {
    if (entry.name === '.git' || entry.name === 'node_modules') continue;
    const target = path.join(directory, entry.name);
    if (entry.isDirectory()) collectMetadata(target, files);
    else if (entry.name === 'stackline-release.json') files.push(target);
  }
  return files;
}

function frameworkDependencies(framework, dependencies) {
  if (framework === 'angular') {
    return Object.entries(dependencies)
      .filter(([name]) => name.startsWith('@angular/'));
  }
  if (framework === 'react') {
    return ['react', 'react-dom']
      .filter((name) => dependencies[name])
      .map((name) => [name, dependencies[name]]);
  }
  if (framework === 'vue') {
    return dependencies.vue ? [['vue', dependencies.vue]] : [];
  }
  return [];
}

function validateMaintainedDocs(repositoryRoot) {
  const packageMajor = Number.parseInt(
    readJson(path.join(repositoryRoot, 'package.json')).version,
    10
  );
  const docsRoot = path.join(repositoryRoot, 'docs-src', `angular-${packageMajor}`);
  const manifest = readJson(path.join(docsRoot, 'package.json'));
  const lock = readJson(path.join(docsRoot, 'package-lock.json'));
  const lockRoot = lock.packages?.[''];

  assert(manifest.private === true, 'Maintained documentation must stay private');
  assert(lock.lockfileVersion === 3, 'Maintained documentation must use npm lockfile v3');
  assert(lockRoot?.name === manifest.name, 'Maintained docs manifest and lock names differ');
  assert(
    isDeepStrictEqual(lockRoot.dependencies || {}, manifest.dependencies || {}),
    'Maintained docs runtime dependencies differ from the lockfile'
  );
  assert(
    isDeepStrictEqual(lockRoot.devDependencies || {}, manifest.devDependencies || {}),
    'Maintained docs development dependencies differ from the lockfile'
  );

  return packageMajor;
}

function validateArchivedExamples(repositoryRoot) {
  const examplesRoot = path.join(
    repositoryRoot,
    'examples',
    'stackblitz',
    'angular-21'
  );
  const exampleDirectories = readdirSync(examplesRoot, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((entry) => path.join(examplesRoot, entry.name));

  assert(exampleDirectories.length > 0, 'No archived StackBlitz examples were found');

  for (const exampleRoot of exampleDirectories) {
    const manifestFile = path.join(exampleRoot, FIXTURE_MANIFEST);
    const lockFile = path.join(exampleRoot, 'package-lock.fixture.json');

    assert(existsSync(manifestFile), `Missing archived manifest: ${exampleRoot}`);
    assert(existsSync(lockFile), `Missing archived lockfile: ${exampleRoot}`);
    assert(!existsSync(path.join(exampleRoot, 'package.json')),
      `Archived example must not expose package.json: ${exampleRoot}`);
    assert(!existsSync(path.join(exampleRoot, 'package-lock.json')),
      `Archived example must not expose package-lock.json: ${exampleRoot}`);

    const manifest = readJson(manifestFile);
    const lock = readJson(lockFile);
    const lockRoot = lock.packages?.[''];

    assert(manifest.private === true, 'Archived examples must stay private');
    assert(lock.lockfileVersion === 3, 'Archived examples must use npm lockfile v3');
    assert(lockRoot?.name === manifest.name, 'Archived manifest and lock names differ');
    assert(
      isDeepStrictEqual(lockRoot.dependencies || {}, manifest.dependencies || {}),
      `Archived runtime dependencies differ: ${exampleRoot}`
    );
    assert(
      isDeepStrictEqual(lockRoot.devDependencies || {}, manifest.devDependencies || {}),
      `Archived development dependencies differ: ${exampleRoot}`
    );

    for (const [name, version] of frameworkDependencies('angular', {
      ...(manifest.dependencies || {}),
      ...(manifest.devDependencies || {})
    })) {
      assert(
        /^21\./.test(version),
        `${name} must remain on the archived Angular 21 line, found ${version}`
      );
    }
  }

  return exampleDirectories.length;
}

export function validateRelease(releaseRoot) {
  const metadata = readJson(path.join(releaseRoot, 'stackline-release.json'));
  const manifestFile = path.join(releaseRoot, FIXTURE_MANIFEST);
  const legacyManifest = path.join(releaseRoot, 'package.json');
  const manifest = readJson(existsSync(manifestFile) ? manifestFile : legacyManifest);
  const dependencies = {
    ...(manifest.dependencies || {}),
    ...(manifest.devDependencies || {})
  };

  assert(manifest.private === true, 'Compatibility fixtures must stay private');
  assert(metadata.packageName, 'stackline-release.json must declare packageName');
  assert(metadata.framework, 'stackline-release.json must declare framework');
  assert(metadata.exactVersion, 'stackline-release.json must declare exactVersion');
  assert(
    metadata.family === `${metadata.framework}-${metadata.major}`,
    `Invalid framework family: ${metadata.family}`
  );
  assert(
    path.basename(releaseRoot) === metadata.exactVersion,
    `Fixture directory must match ${metadata.exactVersion}`
  );
  assert(
    Number.parseInt(metadata.exactVersion, 10) === metadata.major,
    `Fixture major does not match ${metadata.exactVersion}`
  );
  assert(
    dependencies[metadata.packageName] === `file:${metadata.localInstallSource}`,
    `Invalid local package source for ${metadata.packageName}`
  );
  assert(Array.isArray(metadata.expectedExports), 'expectedExports must be an array');

  for (const [name, version] of frameworkDependencies(metadata.framework, dependencies)) {
    assert(
      version === metadata.exactVersion,
      `${name} must be pinned to ${metadata.exactVersion}, found ${version}`
    );
  }

  return metadata;
}

export function validateCatalog(repositoryRoot) {
  const docsRoot = path.join(repositoryRoot, 'docs-src');
  const metadataFiles = collectMetadata(docsRoot);
  assert(metadataFiles.length > 0, 'No compatibility fixtures were found');

  for (const metadataFile of metadataFiles) {
    const releaseRoot = path.dirname(metadataFile);
    assert(existsSync(path.join(releaseRoot, FIXTURE_MANIFEST)),
      `Missing ${FIXTURE_MANIFEST}: ${releaseRoot}`);
    assert(!existsSync(path.join(releaseRoot, 'package.json')),
      `Historical fixture must not expose package.json: ${releaseRoot}`);
    assert(!existsSync(path.join(releaseRoot, 'package-lock.json')),
      `Historical fixture must not expose package-lock.json: ${releaseRoot}`);
    assert(existsSync(path.join(releaseRoot, 'stackline-validate.mjs')),
      `Missing fixture validator: ${releaseRoot}`);
    validateRelease(releaseRoot);
  }

  const maintainedMajor = validateMaintainedDocs(repositoryRoot);
  const archivedExamples = validateArchivedExamples(repositoryRoot);
  process.stdout.write(
    `Validated ${metadataFiles.length} compatibility fixtures and ` +
      `${archivedExamples} archived StackBlitz examples; Angular ` +
      `${maintainedMajor} docs are reproducible\n`
  );
}

const currentFile = fileURLToPath(import.meta.url);
if (process.argv[1] === currentFile && process.argv[2] === '--catalog') {
  validateCatalog(path.resolve(path.dirname(currentFile), '..'));
}
