import { execFileSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const rootDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const distDir = path.join(rootDir, 'dist', '@stackline', 'angular-multiselect-dropdown');
const matrix = JSON.parse(fs.readFileSync(path.join(rootDir, 'docs-src', 'line-matrix.json'), 'utf8'));
const currentLine = [...matrix.lines].sort((left, right) => right.angular - left.angular)[0];
const packageJson = JSON.parse(fs.readFileSync(path.join(distDir, 'package.json'), 'utf8'));
const npmCommand = process.platform === 'win32' ? 'npm.cmd' : 'npm';
const packReport = JSON.parse(execFileSync(
    npmCommand,
    ['pack', '--dry-run', '--json', '--ignore-scripts'],
    { cwd: distDir, encoding: 'utf8' }
))[0];

if (packageJson.version !== currentLine.packageVersion) {
    throw new Error(`Expected package version ${currentLine.packageVersion}, found ${packageJson.version}`);
}

const expectedPeerRange = currentLine.peerRange || `>=${currentLine.angular}.0.0 <${currentLine.angular + 1}.0.0`;
for (const peer of ['@angular/common', '@angular/core', '@angular/forms']) {
    if (packageJson.peerDependencies[peer] !== expectedPeerRange) {
        throw new Error(`Unexpected ${peer} peer range: ${packageJson.peerDependencies[peer]}`);
    }
}

const files = new Set(packReport.files.map((entry) => entry.path));
for (const requiredFile of [
    'LICENSE',
    'README.md',
    'fesm2022/stackline-angular-multiselect-dropdown.mjs',
    'themes/default.theme.css',
    'types/stackline-angular-multiselect-dropdown.d.ts'
]) {
    if (!files.has(requiredFile)) {
        throw new Error(`Package archive is missing ${requiredFile}`);
    }
}

console.log(`Validated ${packageJson.name}@${packageJson.version}: ${packReport.entryCount} files, ${packReport.unpackedSize} unpacked bytes.`);
