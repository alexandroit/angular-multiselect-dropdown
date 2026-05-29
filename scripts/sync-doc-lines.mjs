import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const docsSrcDir = path.join(rootDir, 'docs-src');
const docsDir = path.join(rootDir, 'docs');
const matrixPath = path.join(docsSrcDir, 'line-matrix.json');
const matrix = JSON.parse(fs.readFileSync(matrixPath, 'utf8'));

const baseDirs = {
  classic: path.join(docsSrcDir, 'base-classic'),
  modern: path.join(docsSrcDir, 'base-modern')
};

function ensureDir(dirPath) {
  fs.mkdirSync(dirPath, { recursive: true });
}

function resetDir(dirPath) {
  fs.rmSync(dirPath, { recursive: true, force: true });
  ensureDir(dirPath);
}

function copyDir(source, target) {
  fs.cpSync(source, target, {
    recursive: true,
    filter: (src) => {
      const relative = path.relative(source, src);

      if (!relative) {
        return true;
      }

      if (
        relative.startsWith('node_modules') ||
        relative.startsWith('.angular') ||
        relative === 'package-lock.json'
      ) {
        return false;
      }

      return true;
    }
  });
}

function writeJson(filePath, value) {
  fs.writeFileSync(filePath, `${JSON.stringify(value, null, 2)}\n`);
}

function replaceInFile(filePath, replacements) {
  let content = fs.readFileSync(filePath, 'utf8');

  for (const [pattern, replacement] of replacements) {
    content = content.replace(pattern, replacement);
  }

  fs.writeFileSync(filePath, content);
}

function writeDocsMeta(targetDir, line) {
  const docsMetaPath = path.join(targetDir, 'src', 'app', 'docs-meta.ts');
  const content = [
    'export const DOCS_META = {',
    `  badge: '${line.badge}',`,
    `  angularVersion: '${line.angularVersion}',`,
    `  packageVersion: '${line.packageVersion}',`,
    `  packageRange: '${line.packageRange}',`,
    `  docsPath: 'angular-${line.angular}'`,
    '};',
    ''
  ].join('\n');

  fs.writeFileSync(docsMetaPath, content);
}

function updatePackageJson(targetDir, line) {
  const packageJsonPath = path.join(targetDir, 'package.json');
  const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
  const port = 4200 + line.angular;

  packageJson.name = `@stackline/angular-multiselect-dropdown-docs-angular${line.angular}`;
  packageJson.scripts = {
    ng: 'ng',
    start: `ng serve --port ${port} --host 0.0.0.0`,
    build: 'ng build --configuration development --base-href ./'
  };

  if (packageJson.dependencies['@stackline/angular-multiselect-dropdown']) {
    packageJson.dependencies['@stackline/angular-multiselect-dropdown'] = line.packageRange;
  }

  writeJson(packageJsonPath, packageJson);
}

function updateAngularJson(targetDir, line) {
  const angularJsonPath = path.join(targetDir, 'angular.json');
  const angularJson = JSON.parse(fs.readFileSync(angularJsonPath, 'utf8'));
  const projectName = `@stackline/angular-multiselect-dropdown-docs-angular${line.angular}`;
  const currentProjectName = Object.keys(angularJson.projects)[0];
  const currentProject = angularJson.projects[currentProjectName];

  delete angularJson.projects[currentProjectName];
  angularJson.projects = {
    [projectName]: currentProject
  };

  currentProject.architect.build.options.outputPath = {
    base: `../../docs/angular-${line.angular}`,
    browser: ''
  };

  const styles = currentProject.architect.build.options.styles || [];
  currentProject.architect.build.options.styles = styles.map((entry) =>
    typeof entry === 'string'
      ? entry.replace(
          'node_modules/@stackline/angular-multiselect-dropdown/themes/default.theme.css',
          'node_modules/@stackline/angular-multiselect-dropdown/themes/default.theme.css'
        ).replace(
          'node_modules/@stackline/angular-multiselect-dropdown/themes/default.theme.css',
          'node_modules/@stackline/angular-multiselect-dropdown/themes/default.theme.css'
        )
      : entry
  );

  currentProject.architect.serve.options.buildTarget = `${projectName}:build:development`;
  currentProject.architect.serve.configurations.production.buildTarget = `${projectName}:build:production`;
  currentProject.architect.serve.configurations.development.buildTarget = `${projectName}:build:development`;

  writeJson(angularJsonPath, angularJson);
}

function updateIndexFiles(targetDir, line) {
  replaceInFile(path.join(targetDir, 'src', 'index.html'), [
    [/<title>.*?<\/title>/, `<title>@stackline/angular-multiselect-dropdown — Angular ${line.angular} docs</title>`]
  ]);

  const manifestPath = path.join(targetDir, 'src', 'manifest.webmanifest');
  if (fs.existsSync(manifestPath)) {
    const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
    manifest.name = '@stackline/angular-multiselect-dropdown';
    manifest.short_name = 'multiselect';
    manifest.theme_color = '#3f51b5';
    writeJson(manifestPath, manifest);
  }
}

function cleanGeneratedLine(line) {
  const targetDir = path.join(docsSrcDir, `angular-${line.angular}`);
  resetDir(targetDir);
  copyDir(baseDirs[line.base], targetDir);

  updatePackageJson(targetDir, line);
  updateAngularJson(targetDir, line);
  writeDocsMeta(targetDir, line);
  updateIndexFiles(targetDir, line);
}

function writeDocsIndex(lines) {
  ensureDir(docsDir);

  const groups = {
    classic: lines.filter((line) => line.base === 'classic'),
    modern: lines.filter((line) => line.base === 'modern')
  };
  const latestLine = lines.find((line) => line.angular === 21) || lines[0];
  const stackBlitzUrl = 'https://stackblitz.com/github/alexandroit/stackline-angular-multiselect-angular-21?startScript=start&initialpath=%2Fbasic';

  const renderGroup = (title, subtitle, items) => `
    <section class="group">
      <div class="group-head">
        <h2>${title}</h2>
        <p>${subtitle}</p>
      </div>
      <div class="cards">
        ${items
          .map(
            (line) => `
          <a class="card ${line.theme}" href="./angular-${line.angular}/">
            <span class="eyebrow">Angular ${line.angular}</span>
            <strong>${line.packageVersion}</strong>
            <span>${line.base === 'classic' ? 'Classic compatibility shell' : 'Material remodulated shell'}</span>
          </a>`
          )
          .join('')}
      </div>
    </section>
  `;

  const html = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>@stackline/angular-multiselect-dropdown docs</title>
    <style>
      :root {
        color-scheme: light;
        --bg: #f5f7fb;
        --surface: rgba(255,255,255,0.92);
        --outline: rgba(63,81,181,0.14);
        --text: #212121;
        --muted: #616161;
        --primary: #3f51b5;
        --primary-soft: #e8eaf6;
        --classic: #17324d;
        --classic-soft: #eef4fb;
      }
      * { box-sizing: border-box; }
      body {
        margin: 0;
        min-height: 100vh;
        font-family: Roboto, "Helvetica Neue", sans-serif;
        color: var(--text);
        background:
          radial-gradient(circle at top right, rgba(63,81,181,0.14), transparent 28%),
          linear-gradient(180deg, #f8f9fc 0%, #f5f7fb 44%, #eef2f8 100%);
      }
      main {
        max-width: 1240px;
        margin: 0 auto;
        padding: 32px 20px 56px;
        display: grid;
        gap: 24px;
      }
      .hero,
      .group {
        background: var(--surface);
        border: 1px solid var(--outline);
        border-radius: 28px;
        box-shadow: 0 1px 2px rgba(33,33,33,0.12), 0 10px 24px rgba(63,81,181,0.08);
        padding: 28px;
      }
      h1, h2 { margin: 0; letter-spacing: -0.03em; }
      .hero p, .group p { color: var(--muted); line-height: 1.7; }
      .eyebrow {
        display: inline-flex;
        border-radius: 999px;
        padding: 8px 14px;
        background: var(--primary-soft);
        color: var(--primary);
        font-size: 12px;
        font-weight: 700;
        letter-spacing: 0.08em;
        text-transform: uppercase;
      }
      .hero h1 { margin-top: 14px; font-size: clamp(1.9rem, 4vw, 3.1rem); }
      .cards {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
        gap: 16px;
        margin-top: 18px;
      }
      .card {
        display: grid;
        gap: 10px;
        text-decoration: none;
        padding: 18px;
        border-radius: 20px;
        border: 1px solid var(--outline);
        color: inherit;
        background: rgba(255,255,255,0.9);
      }
      .card.modern { background: linear-gradient(180deg, rgba(255,255,255,0.96), rgba(232,234,246,0.78)); }
      .card.classic { background: linear-gradient(180deg, rgba(255,255,255,0.98), rgba(238,244,251,0.96)); }
      .card.resource { background: linear-gradient(180deg, rgba(255,255,255,0.98), rgba(245,247,251,0.96)); }
      .card strong { font-size: 1.28rem; }
      .group-head { display: grid; gap: 8px; }
      @media (max-width: 720px) {
        .hero, .group { padding: 22px; border-radius: 22px; }
      }
    </style>
  </head>
  <body>
    <main>
      <section class="hero">
        <span class="eyebrow">Stackline version matrix</span>
        <h1>@stackline/angular-multiselect-dropdown</h1>
        <p>
          Release lines are organized from Angular 2 through Angular 21.
          Angular 2 through 13 follow the classic compatibility shell.
          Angular 14 through 21 use the remodulated Material-inspired shell.
        </p>
      </section>
      <section class="group">
        <div class="group-head">
          <h2>Current Angular 21 release</h2>
          <p>Fast entry points for the maintained package, live tests, editable StackBlitz playground, and npm install target.</p>
        </div>
        <div class="cards">
          <a class="card resource" href="./angular-21/">
            <span class="eyebrow">Docs</span>
            <strong>Angular 21</strong>
            <span>@stackline/angular-multiselect-dropdown ${latestLine.packageVersion}</span>
          </a>
          <a class="card resource" href="./angular-21/live/">
            <span class="eyebrow">Live tests</span>
            <strong>Full matrix</strong>
            <span>Skins, forms, dialogs, lazy loading, keyboard, and ADA checks.</span>
          </a>
          <a class="card resource" href="${stackBlitzUrl}" target="_blank" rel="noopener">
            <span class="eyebrow">StackBlitz</span>
            <strong>Editable examples</strong>
            <span>Dedicated GitHub-backed Angular 21 playground.</span>
          </a>
          <a class="card resource" href="https://www.npmjs.com/package/@stackline/angular-multiselect-dropdown" target="_blank" rel="noopener">
            <span class="eyebrow">npm</span>
            <strong>${latestLine.packageVersion}</strong>
            <span>Install the latest tested Angular 21 package line.</span>
          </a>
        </div>
      </section>
      ${renderGroup(
        'Angular 21 down to 14',
        'Remodulated documentation shell with the Material-inspired direction introduced from Angular 14 onward.',
        groups.modern
      )}
      ${renderGroup(
        'Angular 13 down to 2',
        'Classic presentation base, preserving the familiar compatibility flavor for the early release lines.',
        groups.classic
      )}
    </main>
  </body>
</html>
`;

  fs.writeFileSync(path.join(docsDir, 'index.html'), html);
}

for (const line of matrix.lines) {
  cleanGeneratedLine(line);
}

writeDocsIndex(matrix.lines);

console.log(`Synced ${matrix.lines.length} Angular doc lines.`);
