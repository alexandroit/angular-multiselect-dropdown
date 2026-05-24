import fs from 'node:fs';
import path from 'node:path';
import process from 'node:process';

const [packageDirArg, newVersionArg, angularMajorArg] = process.argv.slice(2);
const filesOnly = newVersionArg === '--files-only';
const newVersion = filesOnly ? null : newVersionArg;

if (!packageDirArg || (!filesOnly && !newVersion)) {
  console.error('Usage: node scripts/patch-clear-all-package.mjs <package-dir> <new-version> [angular-major]');
  console.error('       node scripts/patch-clear-all-package.mjs <directory> --files-only');
  process.exit(1);
}

const packageDir = path.resolve(packageDirArg);
const angularMajor = angularMajorArg ? Number(angularMajorArg) : null;
const packageJsonPath = path.join(packageDir, 'package.json');
const textExtensions = new Set(['.css', '.d.ts', '.html', '.js', '.json', '.md', '.mjs', '.scss', '.ts']);

function readJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

function writeJson(filePath, value) {
  fs.writeFileSync(filePath, `${JSON.stringify(value, null, 2)}\n`);
}

function walk(dirPath, files = []) {
  for (const entry of fs.readdirSync(dirPath, { withFileTypes: true })) {
    const entryPath = path.join(dirPath, entry.name);

    if (entry.isDirectory()) {
      if ((!filesOnly && entry.name === 'node_modules') || entry.name === '.git') {
        continue;
      }

      walk(entryPath, files);
      continue;
    }

    if (entry.isFile() && textExtensions.has(path.extname(entry.name))) {
      files.push(entryPath);
    }
  }

  return files;
}

function patchPackageJson() {
  if (!fs.existsSync(packageJsonPath)) {
    throw new Error(`package.json not found in ${packageDir}`);
  }

  const packageJson = readJson(packageJsonPath);
  const oldVersion = packageJson.version;

  packageJson.version = newVersion;

  if (angularMajor) {
    packageJson.description = `Angular ${angularMajor} compatible multiselect dropdown package for the Stackline Angular ${angularMajor} release line.`;
    packageJson.homepage = `https://alexandro.net/docs/angular/multiselect/angular-${angularMajor}/`;
  }

  writeJson(packageJsonPath, packageJson);

  return oldVersion;
}

function patchReadme(content, oldVersion) {
  if (!oldVersion || oldVersion === newVersion) {
    return content;
  }

  return content.split(oldVersion).join(newVersion);
}

function patchDropdownSettings(content) {
  if (content.includes('clearAll?:') || content.includes('clearAll: boolean')) {
    return content;
  }

  return content.replace(
    /(\n\s*skin\??:\s*string;\n)/,
    '$1    clearAll?: boolean;\n'
  ).replace(
    /(\n\s*labelKey\??:\s*string;\n)(?!\s*(theme|skin|clearAll)\??:)/,
    '$1    clearAll?: boolean;\n'
  );
}

function patchDefaultSettings(content) {
  if (content.includes('clearAll: true')) {
    return content;
  }

  const skinPattern = /(skin:\s*['"]classic['"])(,?)(\s*\n\s*[\};])/;

  if (skinPattern.test(content)) {
    return content.replace(skinPattern, (_match, skin, comma, closing) => {
      const separator = comma || ',';
      const indent = closing.match(/\n(\s*)[\};]/)?.[1] || '        ';
      return `${skin}${separator}\n${indent}clearAll: true${closing}`;
    });
  }

  return content.replace(
    /(labelKey:\s*['"]itemName['"])(,?)(\s*\n\s*[\};])/,
    (_match, labelKey, comma, closing) => {
      const separator = comma || ',';
      const indent = closing.match(/\n(\s*)[\};]/)?.[1] || '        ';
      return `${labelKey}${separator}\n${indent}clearAll: true${closing}`;
    }
  );
}

function patchTemplates(content) {
  if (content.includes('clear-all')) {
    return content;
  }

  const rawClearAll =
    '            <span class="fa fa-remove clear-all" *ngIf="settings.clearAll && selectedItems?.length > 0 && !settings.disabled" (click)="clearSelection($event);$event.stopPropagation()"></span>\n';
  const escapedClearAll =
    '            <span class=\\"fa fa-remove clear-all\\" *ngIf=\\"settings.clearAll && selectedItems?.length > 0 && !settings.disabled\\" (click)=\\"clearSelection($event);$event.stopPropagation()\\"></span>\\n';

  let patched = content.replace(
    /(\s*<span class="countplaceholder" \*ngIf="selectedItems\?\.length > settings\.badgeShowLimit">\+\{\{selectedItems\?\.length - settings\.badgeShowLimit \}\}<\/span>\n)(\s*<span class="fa" \[ngClass\]="\{'fa-angle-down': !isActive,'fa-angle-up':isActive\}"><\/span>)/g,
    (_match, count, arrow) => `${count}${rawClearAll}${arrow}`
  );

  patched = patched.replace(
    /(\\n\s*<span class=\\"countplaceholder\\" \*ngIf=\\"selectedItems\?\.length > settings\.badgeShowLimit\\">\+\{\{selectedItems\?\.length - settings\.badgeShowLimit \}\}<\/span>\\n)(\s*<span class=\\"fa\\" \[ngClass\]=\\"\{'fa-angle-down': !isActive,'fa-angle-up':isActive\}\\"><\/span>)/g,
    (_match, count, arrow) => `${count}${escapedClearAll}${arrow}`
  );

  return patched;
}

function patchClassMethod(content, filePath) {
  if (
    /\n\s*clearSelection\(/.test(content) ||
    /\n\s*clearSelection\(e\?: any\): void;/.test(content) ||
    /\n\s*AngularMultiSelect\.prototype\.clearSelection\s*=/.test(content)
  ) {
    return content;
  }

  const ext = path.extname(filePath);

  if (ext === '.d.ts') {
    return content.replace(
      /(\n\s*removeSelected\(clickedItem:[^;]+;\n)(\s*toggleDropdown\()/g,
      '$1    clearSelection(e?: any): void;\n$2'
    );
  }

  const isTypescript = ext === '.ts';
  const method = isTypescript
    ? [
        '    clearSelection(e?: any) {',
        '        this.selectedItems = [];',
        '        this.isSelectAll = false;',
        '        this.onChangeCallback(this.selectedItems);',
        '        this.onTouchedCallback(this.selectedItems);',
        '        this.onDeSelectAll.emit(this.selectedItems);',
        '    }',
        ''
      ].join('\n')
    : [
        '    clearSelection(e) {',
        '        this.selectedItems = [];',
        '        this.isSelectAll = false;',
        '        this.onChangeCallback(this.selectedItems);',
        '        this.onTouchedCallback(this.selectedItems);',
        '        this.onDeSelectAll.emit(this.selectedItems);',
        '    }',
        ''
      ].join('\n');

  let patched = content.replace(
    /(\n\s{4}removeSelected\([\s\S]*?\n\s{4}}\n)(\s{4}toggleDropdown\()/g,
    `$1${method}$2`
  );

  patched = patched.replace(
    /(\n(\s*)AngularMultiSelect\.prototype\.removeSelected = function \(clickedItem\) \{[\s\S]*?\n\2\};\n)(\2AngularMultiSelect\.prototype\.toggleDropdown = function \(evt\) \{)/g,
    (_match, before, indent, next) => {
      const prototypeMethod = [
        `${indent}AngularMultiSelect.prototype.clearSelection = function (e) {`,
        `${indent}    this.selectedItems = [];`,
        `${indent}    this.isSelectAll = false;`,
        `${indent}    this.onChangeCallback(this.selectedItems);`,
        `${indent}    this.onTouchedCallback(this.selectedItems);`,
        `${indent}    this.onDeSelectAll.emit(this.selectedItems);`,
        `${indent}};`,
        ''
      ].join('\n');

      return `${before}${prototypeMethod}${next}`;
    }
  );

  return patched;
}

function patchCss(content, filePath) {
  const ext = path.extname(filePath);

  if (ext !== '.css' && ext !== '.scss' && ext !== '.ts' && ext !== '.mjs' && ext !== '.js') {
    return content;
  }

  let patched = content
    .replace(/padding:\s*10px 36px 10px 10px/g, 'padding: 10px 68px 10px 10px')
    .replace(/padding:10px 36px 10px 10px/g, 'padding:10px 68px 10px 10px')
    .replace(/padding:\s*11px 54px 11px 16px/g, 'padding: 11px 84px 11px 16px')
    .replace(/padding:11px 54px 11px 16px/g, 'padding:11px 84px 11px 16px');

  if (patched.includes('.selected-list .clear-all')) {
    return patched;
  }

  const rawCss = [
    '',
    '.selected-list .clear-all {',
    '  font-size: 12pt;',
    '  position: absolute;',
    '  right: 42px;',
    '  top: 50%;',
    '  transform: translateY(-50%);',
    '  cursor: pointer;',
    '}',
    '',
    '.stackline-dropdown.theme-material .selected-list .clear-all,',
    '.stackline-dropdown.theme-dark .selected-list .clear-all,',
    '.stackline-dropdown.theme-custom .selected-list .clear-all {',
    '  position: absolute;',
    '  top: 50%;',
    '  right: 42px;',
    '  display: inline-flex;',
    '  align-items: center;',
    '  justify-content: center;',
    '  width: 20px;',
    '  height: 20px;',
    '  transform: translateY(-50%);',
    '  color: var(--ms-on-surface-muted);',
    '  cursor: pointer;',
    '}',
    ''
  ].join('\n');

  const escapedCss = rawCss.replace(/\\/g, '\\\\').replace(/"/g, '\\"').replace(/\n/g, '\\n');
  const minCss = '.selected-list .clear-all{font-size:12pt;position:absolute;right:42px;top:50%;transform:translateY(-50%);cursor:pointer}.stackline-dropdown.theme-material .selected-list .clear-all,.stackline-dropdown.theme-dark .selected-list .clear-all,.stackline-dropdown.theme-custom .selected-list .clear-all{position:absolute;top:50%;right:42px;display:inline-flex;align-items:center;justify-content:center;width:20px;height:20px;transform:translateY(-50%);color:var(--ms-on-surface-muted);cursor:pointer}';

  if (ext === '.ts' || ext === '.mjs' || ext === '.js') {
    if (patched.includes('styles: ["')) {
      return patched.replace(/(styles:\s*\["[^"]*)("\]\s*[,}])/g, `$1${escapedCss}$2`);
    }

    return patched.replace(/(styles:\s*\[`[\s\S]*?)(`\]\s*[,}])/g, `$1${rawCss}$2`);
  }

  if (patched.includes('.stackline-dropdown{') || patched.includes('.selected-list .c-btn{')) {
    return `${patched}\n${minCss}\n`;
  }

  return `${patched}\n${rawCss}`;
}

function patchFile(filePath, oldVersion) {
  const before = fs.readFileSync(filePath, 'utf8');
  let after = before;
  const ext = path.extname(filePath);

  if (path.basename(filePath) === 'README.md') {
    after = patchReadme(after, oldVersion);
  }

  if (ext === '.ts' || ext === '.d.ts') {
    after = patchDropdownSettings(after);
  }

  if (ext === '.ts' || ext === '.js' || ext === '.mjs') {
    after = patchDefaultSettings(after);
    after = patchTemplates(after);
    after = patchClassMethod(after, filePath);
  }

  if (ext === '.html') {
    after = patchTemplates(after);
  }

  if (ext === '.d.ts') {
    after = patchClassMethod(after, filePath);
  }

  after = patchCss(after, filePath);

  if (after !== before) {
    fs.writeFileSync(filePath, after);
    return true;
  }

  return false;
}

const oldVersion = filesOnly ? null : patchPackageJson();
let patchedCount = 0;

for (const filePath of walk(packageDir)) {
  if (patchFile(filePath, oldVersion)) {
    patchedCount += 1;
  }
}

const allText = walk(packageDir)
  .map((filePath) => fs.readFileSync(filePath, 'utf8'))
  .join('\n');

for (const required of ['clearAll', 'clearSelection', 'clear-all']) {
  if (!allText.includes(required)) {
    throw new Error(`Patch verification failed: ${required} was not found in ${packageDir}`);
  }
}

if (
  !/\n\s*clearSelection\(/.test(allText) &&
  !/\n\s*clearSelection\(e\?: any\): void;/.test(allText) &&
  !/\n\s*AngularMultiSelect\.prototype\.clearSelection\s*=/.test(allText)
) {
  throw new Error(`Patch verification failed: clearSelection method was not found in ${packageDir}`);
}

if (filesOnly) {
  console.log(`Patched ${patchedCount} files in ${packageDir}.`);
} else {
  console.log(`Patched ${patchedCount} files in ${packageDir} from ${oldVersion} to ${newVersion}.`);
}
