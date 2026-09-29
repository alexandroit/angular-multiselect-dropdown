import assert from 'node:assert/strict';
import { execFileSync } from 'node:child_process';
import { mkdtempSync, mkdirSync, writeFileSync, readFileSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import path from 'node:path';

const archive = path.resolve(process.argv[2]);
const workspace = mkdtempSync(path.join(tmpdir(), 'stackline-multiselect-packed-'));
try {
  for (const key of ['@stackline/angular-multiselect-dropdown', 'angular2-multiselect-dropdown']) {
    const cwd = path.join(workspace, key.includes('@') ? 'direct' : 'alias');
    mkdirSync(cwd);
    writeFileSync(path.join(cwd, 'package.json'), JSON.stringify({
      private: true, type: 'module', dependencies: {
        [key]: `file:${archive}`, '@angular/core': '22.1.3', '@angular/common': '22.1.3',
        '@angular/forms': '22.1.3', '@angular/compiler': '22.1.3'
      }
    }));
    execFileSync('npm', ['install', '--ignore-scripts', '--no-fund'], {cwd, stdio: 'pipe'});
    execFileSync('npm', ['ls', '--all'], {cwd, stdio: 'pipe'});
    execFileSync('npm', ['audit', '--audit-level=low'], {cwd, stdio: 'pipe'});
    const manifest = JSON.parse(readFileSync(path.join(cwd, 'node_modules', key, 'package.json')));
    assert.equal(manifest.name, '@stackline/angular-multiselect-dropdown');
    assert.equal(manifest.dependencies.tslib, 'npm:@stackline/tslib@1.0.0');
    writeFileSync(path.join(cwd, 'verify.mjs'), `
      import assert from 'node:assert/strict';
      import '@angular/compiler';
      import { AngularMultiSelect, AngularMultiSelectModule, createAngularMultiselectState } from ${JSON.stringify(key)};
      assert.equal(typeof AngularMultiSelect, 'function');
      assert.equal(typeof AngularMultiSelectModule, 'function');
      const data = [{id: 1, itemName: 'Canada'}, {id: 2, itemName: 'France'}, {id: 3, itemName: 'Disabled', disabled: true}];
      const changes = [];
      const state = createAngularMultiselectState({data, id: 'packed', onChange: values => changes.push(values)});
      state.open();
      assert.equal(state.getTriggerState().ariaExpanded, 'true');
      state.toggleItem(data[0]);
      assert.deepEqual(state.selectedItems, [data[0]]);
      assert.equal(state.getOptionState(data[0], 0).ariaSelected, 'true');
      state.toggleItem(data[2]);
      assert.deepEqual(state.selectedItems, [data[0]]);
      state.setFilter('fran');
      assert.deepEqual(state.getVisibleOptions(), [data[1]]);
      state.toggleItem(data[0]);
      assert.deepEqual(state.selectedItems, []);
      assert.equal(changes.length, 2);
      state.close();
      assert.equal(state.getTriggerState().ariaExpanded, 'false');
    `);
    execFileSync(process.execPath, ['verify.mjs'], {cwd, stdio: 'inherit'});
    console.log(`Packed API, selection/filter/ARIA, tree and audit passed: ${key}`);
  }
} finally {
  rmSync(workspace, {recursive: true, force: true});
}
