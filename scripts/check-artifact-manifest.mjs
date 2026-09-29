import assert from 'node:assert/strict';
import fs from 'node:fs';
const packed = JSON.parse(fs.readFileSync(process.argv[2], 'utf8'));
const root = new URL('../', import.meta.url);
const source = JSON.parse(fs.readFileSync(new URL('projects/@stackline/angular-multiselect-dropdown-lib/package.json', root), 'utf8'));
const workspace = JSON.parse(fs.readFileSync(new URL('package.json', root), 'utf8'));
const matrix = JSON.parse(fs.readFileSync(new URL('docs-src/line-matrix.json', root), 'utf8'));
const line = [...matrix.lines].sort((a, b) => b.angular - a.angular)[0];
for (const field of ['name', 'version', 'dependencies', 'license', 'author', 'repository', 'bugs', 'description']) {
  assert.deepEqual(packed[field], source[field], `Compiled manifest differs in ${field}`);
}
assert.equal(packed.version, workspace.version);
assert.equal(packed.version, line.packageVersion);
const peerRange = line.peerRange || `>=${line.angular}.0.0 <${line.angular + 1}.0.0`;
assert.deepEqual(packed.peerDependencies, {'@angular/core': peerRange, '@angular/forms': peerRange, '@angular/common': peerRange});
assert.equal(packed.homepage, `https://alexandro.net/docs/angular/multiselect/angular-${line.angular}/`);
assert.equal(line.angular, 22, 'Review supported Node ranges before changing the current release line');
assert.deepEqual(packed.engines, {node: '^22.22.3 || ^24.15.0 || >=26.0.0'});
assert.equal(packed.module, 'fesm2022/stackline-angular-multiselect-dropdown.mjs');
assert.equal(packed.typings, 'types/stackline-angular-multiselect-dropdown.d.ts');
assert.equal(packed.sideEffects, false);
assert.ok(!packed.scripts && !packed.devDependencies, 'Development metadata must not ship in APF');
console.log('Compiled APF identity matches source metadata and the maintained release line.');
