import assert from 'node:assert/strict';
import {test} from 'node:test';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import {updatePackageJson, updateAngularJson} from './sync-doc-lines.mjs';
const root = new URL('../', import.meta.url);
const read = file => JSON.parse(fs.readFileSync(new URL(file, root), 'utf8'));
const line = read('docs-src/line-matrix.json').lines.find(line => line.angular === 22);
const current = read('docs-src/angular-22/package.json');
const workspace = read('package.json');
const config = read('docs-src/angular-22/angular.json');
function fixture(fn) {
  const temp = fs.mkdtempSync(path.join(os.tmpdir(), 'stackline-docs-sync-'));
  try {
    fs.copyFileSync(new URL('docs-src/base-modern/package.json', root), path.join(temp, 'package.json'));
    fs.copyFileSync(new URL('docs-src/base-modern/angular.json', root), path.join(temp, 'angular.json'));
    fn(temp);
  } finally { fs.rmSync(temp, {recursive:true, force:true}); }
}
test('current line retains current Angular dependencies, aliases, overrides and production scripts', () => fixture(temp => {
  updatePackageJson(temp, line, current, workspace);
  const result = JSON.parse(fs.readFileSync(path.join(temp, 'package.json')));
  assert.deepEqual(result.dependencies, {...current.dependencies, '@stackline/angular-multiselect-dropdown': line.packageRange});
  assert.deepEqual(result.devDependencies, current.devDependencies);
  assert.deepEqual(result.overrides, current.overrides);
  assert.deepEqual(result.scripts, current.scripts);
  assert.equal(result.dependencies.bootstrap, workspace.dependencies.bootstrap);
  assert.equal(result.dependencies.tslib, workspace.dependencies.tslib);
  assert.equal(result.dependencies['@angular/core'], workspace.dependencies['@angular/core']);
}));
test('current build configuration preserves its builder, production assets and live-directory safeguard', () => fixture(temp => {
  updateAngularJson(temp, line, config);
  const result = JSON.parse(fs.readFileSync(path.join(temp, 'angular.json')));
  assert.deepEqual(result, config);
  assert.equal(Object.values(result.projects)[0].architect.build.options.deleteOutputPath, false);
}));
test('historical fixture generation retains original base dependencies', () => fixture(temp => {
  const before = JSON.parse(fs.readFileSync(path.join(temp, 'package.json')));
  updatePackageJson(temp, {...line, angular:21, packageRange:'21.0.0'});
  const after = JSON.parse(fs.readFileSync(path.join(temp, 'package.json')));
  assert.deepEqual(after.dependencies, {...before.dependencies, '@stackline/angular-multiselect-dropdown':'21.0.0'});
  assert.deepEqual(after.devDependencies, before.devDependencies);
}));
