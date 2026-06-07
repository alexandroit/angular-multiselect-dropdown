import fs from 'node:fs';
import path from 'node:path';
import process from 'node:process';
import { execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const matrixPath = path.join(rootDir, 'docs-src', 'line-matrix.json');
const distDir = path.join(rootDir, 'dist', '@stackline', 'angular-multiselect-dropdown');
const distPackageJsonPath = path.join(distDir, 'package.json');
const npmCommand = process.platform === 'win32' ? 'npm.cmd' : 'npm';

function parseArgs(argv) {
  const options = {
    line: 'latest',
    publish: false,
    skipBuild: false
  };

  for (let index = 0; index < argv.length; index += 1) {
    const arg = argv[index];

    if (arg === '--line') {
      const value = argv[index + 1];

      if (!value) {
        throw new Error('Missing value for --line. Example: --line 13');
      }

      options.line = value;
      index += 1;
      continue;
    }

    if (arg === '--publish') {
      options.publish = true;
      continue;
    }

    if (arg === '--skip-build') {
      options.skipBuild = true;
      continue;
    }

    if (arg === '--help' || arg === '-h') {
      printHelp();
      process.exit(0);
    }

    throw new Error(`Unknown argument: ${arg}`);
  }

  return options;
}

function printHelp() {
  console.log(`
Usage:
  node scripts/release-line.mjs [--line <angular-major>|latest] [--skip-build] [--publish]

Examples:
  npm run build-package
  npm run build-package:line -- --line 13
  npm run publish-npm:line -- --line 20
  npm run publish-npm -- --skip-build
`.trim());
}

function readJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

function writeJson(filePath, value) {
  fs.writeFileSync(filePath, `${JSON.stringify(value, null, 2)}\n`);
}

function getLatestLine(lines) {
  return [...lines].sort((left, right) => right.angular - left.angular)[0];
}

function getPeerRange(line) {
  const major = Number(line.angular);
  return `>=${major}.0.0 <${major + 1}.0.0`;
}

function getEffectivePeerRange(line) {
  return line.peerRange || getPeerRange(line);
}

function getPeerDependencies(line) {
  const range = getEffectivePeerRange(line);

  return {
    '@angular/core': range,
    '@angular/forms': range,
    '@angular/common': range
  };
}

function getLineDescription(line) {
  return [
    `Angular multiselect dropdown for Angular ${line.angular}`,
    'with maintained release lines, accessibility-focused and keyboard/ARIA tested interactions,',
    'dialog-safe body overlays, Stackline skins, search, grouping, templates, headless helpers, and forms support.'
  ].join(' ');
}

function getLineHomepage(line) {
  return `https://alexandro.net/docs/angular/multiselect/angular-${line.angular}/`;
}

function getLineNodeRange(line) {
  const nodeRanges = {
    21: '^20.19.0 || ^22.12.0 || >=24.0.0',
    22: '^22.22.3 || ^24.15.0 || >=26.0.0'
  };

  return nodeRanges[line.angular] || null;
}

function getLineKeywords(line, currentKeywords) {
  const keywords = (Array.isArray(currentKeywords) ? currentKeywords : [])
    .filter((keyword) => !/^angular(?: |-)?\d+$/.test(keyword));
  const lineKeywords = [
    `angular${line.angular}`,
    `angular ${line.angular}`,
    `angular-${line.angular}`
  ];

  return [...new Set([...keywords, ...lineKeywords])];
}

function resolveLine(selection, lines) {
  if (selection === 'latest') {
    return getLatestLine(lines);
  }

  const angularMajor = Number(selection);

  if (!Number.isInteger(angularMajor)) {
    throw new Error(`Invalid --line value: ${selection}`);
  }

  const line = lines.find((entry) => entry.angular === angularMajor);

  if (!line) {
    throw new Error(`Angular line ${angularMajor} is not defined in docs-src/line-matrix.json`);
  }

  return line;
}

function run(command, args, options = {}) {
  execFileSync(command, args, {
    cwd: options.cwd || rootDir,
    stdio: 'inherit'
  });
}

function buildRawPackage() {
  run(npmCommand, ['run', 'build-package:raw']);
}

function stampDistPackage(line) {
  if (!fs.existsSync(distPackageJsonPath)) {
    throw new Error(`Build output not found at ${distPackageJsonPath}`);
  }

  const packageJson = readJson(distPackageJsonPath);

  packageJson.version = line.packageVersion;
  packageJson.peerDependencies = getPeerDependencies(line);
  packageJson.description = getLineDescription(line);
  packageJson.homepage = getLineHomepage(line);
  packageJson.keywords = getLineKeywords(line, packageJson.keywords);

  const nodeRange = getLineNodeRange(line);
  if (nodeRange) {
    packageJson.engines = {
      ...(packageJson.engines || {}),
      node: nodeRange
    };
  }

  writeJson(distPackageJsonPath, packageJson);
}

function validateDistPackage(line) {
  const packageJson = readJson(distPackageJsonPath);
  const expectedPeers = getPeerDependencies(line);

  if (packageJson.version !== line.packageVersion) {
    throw new Error(
      `Expected dist version ${line.packageVersion}, found ${packageJson.version}`
    );
  }

  const actualPeers = JSON.stringify(packageJson.peerDependencies);
  const expectedPeersJson = JSON.stringify(expectedPeers);

  if (actualPeers !== expectedPeersJson) {
    throw new Error(
      `Expected dist peerDependencies ${expectedPeersJson}, found ${actualPeers}`
    );
  }
}

function publishDistPackage() {
  run(npmCommand, ['publish', '--access', 'public'], { cwd: distDir });
}

function main() {
  const { line: requestedLine, publish, skipBuild } = parseArgs(process.argv.slice(2));
  const matrix = readJson(matrixPath);
  const line = resolveLine(requestedLine, matrix.lines);

  if (!skipBuild) {
    buildRawPackage();
  }

  stampDistPackage(line);
  validateDistPackage(line);

  console.log(
    `Prepared dist package for Angular ${line.angular} as version ${line.packageVersion} with peer range ${getEffectivePeerRange(line)}.`
  );

  if (publish) {
    publishDistPackage();
  }
}

try {
  main();
} catch (error) {
  console.error(error instanceof Error ? error.message : error);
  process.exit(1);
}
