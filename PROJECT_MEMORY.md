# Project Memory

## 2026-05-24 - Angular 2 live documentation

Current package context:
- Package: `@stackline/angular-multiselect-dropdown`
- Tested Angular 2 documentation package version: `2.0.4`
- Angular runtime used by the live docs: `2.4.10`
- Public documentation URL: `https://alexandro.net/docs/angular/multiselect/angular-2/`
- Live iframe URL: `https://alexandro.net/docs/angular/multiselect/angular-2/live/`

What was changed:
- Reworked the Angular 2 documentation page to embed a real Angular 2.4.10 live app.
- Reworked the live app so each example renders as one row.
- In each row, the working dropdown appears on the left and generated live code appears on the right.
- The generated code panel includes `HTML`, `TS`, and `JSON`.
- The generated code is based on the same example object used by the live dropdown.
- `[(ngModel)]` keeps the selected model in sync, so the generated TS/JSON reflects current selections.
- The same functional test cases are shown for Classic and Material skins.
- The skin switcher remains functional and changes only `settings.theme` / `settings.skin`.

Important files:
- `docs/angular-2/index.html`
- `docs/angular-2/live/index.html`
- `docs/angular-2/live/systemjs.config.js`
- `docs/angular-2/live/styles.css`
- `docs/angular-2/live/app/main.ts`
- `docs/angular-2/live/app/app.module.ts`
- `docs/angular-2/live/app/app.component.ts`
- `docs/angular-2/live/tsconfig.json`
- `docs/angular-2/live/build-20260524-row-code/`

Build and cache note:
- A first publish still showed the old JS through Cloudflare cache.
- To avoid the cached file, the live app now loads a versioned build path:
  - `build-20260524-row-code/app`
  - `build-20260524-row-code/node_modules/@stackline/angular-multiselect-dropdown`
- `index.html` also loads:
  - `styles.css?v=20260524-row-code`
  - `systemjs.config.js?v=20260524-row-code`

Compilation:
- The live Angular 2 app was compiled with TypeScript 2.4.2 from the existing Angular 2 test project dependencies.
- Temporary local `node_modules` symlink was removed after compilation.
- Confirmed `docs/angular-2/live/node_modules` does not exist after the work.

Published paths:
- Local public path:
  - `/var/www/html/alexandro.net_docs/angular/angular-multiselect-dropdown/angular-2/`
  - `/var/www/html/alexandro.net_docs/angular/angular2-multiselect-dropdown/angular-2/`
- Remote server:
  - staged at `codex-server:/tmp/stackline-angular2-doc/`
  - copied into the same two `/var/www/html/alexandro.net_docs/angular/.../angular-2/` paths.

Validation completed:
- `https://alexandro.net/docs/angular/multiselect/angular-2/` returned HTTP 200.
- `https://alexandro.net/docs/angular/multiselect/angular-2/live/` returned HTTP 200.
- Public live DOM showed `ng-version="2.4.10"`.
- Public live DOM showed `@stackline/angular-multiselect-dropdown 2.0.4`.
- Public live DOM showed `example-row`, `code-cell`, `HTML`, `TS`, `JSON`, and generated examples such as `[data]="countries"` and `classicBasic =`.
- Checked that no `<body class="boot-error">` appeared.
- Screenshots were generated and visually checked for desktop and mobile.

What was not done:
- No npm publish was done for this documentation-only change.
- Existing unrelated dirty files in the worktree were not reverted.

## 2026-05-24 - English live docs and skin switch fix

Follow-up request:
- The Angular 2 live documentation needed to be fully English.
- The skin switcher needed to actually update the rendered dropdown skin, not only the preview text.

What was changed:
- Translated the live Angular 2 test app UI to English.
- Translated live example data, selected models, settings labels, empty states, search labels, select-all labels, event log text, and generated code examples to English.
- Updated `docs-src/angular-2/src/app/app.component.ts` so the future source docs do not regenerate Portuguese example text.
- Changed the skin switcher so each click creates a new settings object and replaces `skinSwitchCase`.
- This forces Angular 2 input change detection to pass the new `settings` reference to the dropdown.

New cache-busting build path:
- `docs/angular-2/live/build-20260524-english-switch/`
- `docs/angular-2/live/index.html` now loads `styles.css?v=20260524-english-switch`.
- `docs/angular-2/live/index.html` now loads `systemjs.config.js?v=20260524-english-switch`.
- `docs/angular-2/live/systemjs.config.js` now points to `build-20260524-english-switch`.

Validation completed:
- Recompiled the Angular 2 live app with TypeScript 2.4.2.
- Confirmed `docs/angular-2/live/node_modules` does not exist after compilation.
- Local DOM validation showed English text such as `Settings-only theme switch`, `Updates only settings.theme / settings.skin`, `Event log`, `United States`, `Select all`, `Clear all`, and `No records found`.
- Public DOM validation showed the same English text.
- Confirmed no Portuguese strings from the live app remained in the local or public live DOM.
- Confirmed no `<body class="boot-error">` appeared.
- Used Chrome DevTools Protocol to click all switcher buttons in production:
  - `Material` -> `stackline-dropdown theme-material`
  - `Dark` -> `stackline-dropdown theme-dark`
  - `Custom` -> `stackline-dropdown theme-custom`
  - `Brand` -> `stackline-dropdown theme-brand theme-custom`
  - `Classic` -> `stackline-dropdown theme-classic`
- Public URL remained `https://alexandro.net/docs/angular/multiselect/angular-2/`.

Published paths:
- Local public path:
  - `/var/www/html/alexandro.net_docs/angular/angular-multiselect-dropdown/angular-2/`
  - `/var/www/html/alexandro.net_docs/angular/angular2-multiselect-dropdown/angular-2/`
- Remote server:
  - staged at `codex-server:/tmp/stackline-angular2-doc/`
  - copied into the same two `/var/www/html/alexandro.net_docs/angular/.../angular-2/` paths.

What was not done:
- No npm publish was done.

## 2026-05-24 - Selector standard and npm 2.0.5

Follow-up request:
- Keep `<angular2-multiselect>` available for compatibility.
- Make `<angular-multiselect>` the standard selector used by all docs and examples.
- Document `<angular2-multiselect>` only as a legacy compatibility alias for apps migrating from the old outdated plugin.
- Publish the updated Angular 2 package to npm.

What was changed:
- Confirmed the component selector remains `angular-multiselect, angular2-multiselect`.
- Updated the Angular 2 live app templates and generated live HTML code to use `<angular-multiselect>`.
- Updated `docs/angular-2/index.html` setup and template examples to use `<angular-multiselect>`.
- Added a compatibility note that `<angular2-multiselect>` is legacy-only.
- Updated `README.md` and `projects/@stackline/angular-multiselect-dropdown-lib/README.md` to version `2.0.5` and the selector standard.
- Updated `docs-src/angular-2/src/app/app.component.ts` so future generated docs use `<angular-multiselect>`.
- Updated `docs-src/line-matrix.json` for Angular 2 from `2.0.4` to `2.0.5`.
- Added `CHANGELOG.md` entry for `2.0.5`.

Build and cache note:
- Recompiled the live Angular 2 app with TypeScript 2.4.2.
- New cache-busting build path:
  - `docs/angular-2/live/build-20260524-selector-standard/`
- `docs/angular-2/live/index.html` now loads:
  - `styles.css?v=20260524-selector-standard`
  - `systemjs.config.js?v=20260524-selector-standard`
- `docs/angular-2/live/systemjs.config.js` points to `build-20260524-selector-standard`.

Npm publication:
- Built the Angular 2 package with `npm run build-package:line -- --line 2`.
- Published `@stackline/angular-multiselect-dropdown@2.0.5`.
- Confirmed npm tags:
  - `latest: 2.0.5`
  - `angular-2: 2.0.5`
- Confirmed npm peer dependencies:
  - `@angular/core >=2.0.0 <3.0.0`
  - `@angular/forms >=2.0.0 <3.0.0`
  - `@angular/common >=2.0.0 <3.0.0`

Published docs paths:
- Local public path:
  - `/var/www/html/alexandro.net_docs/angular/angular-multiselect-dropdown/angular-2/`
  - `/var/www/html/alexandro.net_docs/angular/angular2-multiselect-dropdown/angular-2/`
- Remote server:
  - staged at `codex-server:/tmp/stackline-angular2-doc/`
  - copied into the same two `/var/www/html/alexandro.net_docs/angular/.../angular-2/` paths.

Validation completed:
- Public docs show `@stackline/angular-multiselect-dropdown@2.0.5`.
- Public docs examples use `<angular-multiselect>`.
- Public docs mention `<angular2-multiselect>` only in the legacy compatibility note.
- Public live app loads the `20260524-selector-standard` cache-busted files.
- Public live bundle contains `<angular-multiselect>` templates and generated code.
- Npm README for `2.0.5` shows `<angular-multiselect>` as the documented standard and `<angular2-multiselect>` only as the compatibility alias.
- Fresh npm install of `@stackline/angular-multiselect-dropdown@2.0.5` succeeded in a temporary project with `--legacy-peer-deps`.

## 2026-05-24 - Angular 2 live boot fix

Problem found:
- The public Angular 2 live docs were stuck on `Loading Angular 2 test...`.
- The live app templates had been updated to `<angular-multiselect>`, but the Angular 2-compatible package embedded in the live test still had only `selector: 'angular2-multiselect'`.
- Angular 2 could not match the new element, so the live test did not boot.

Fix applied:
- Updated the Angular 2 test dependency source selector to `angular-multiselect, angular2-multiselect`.
- Recompiled the Angular 2 live app with TypeScript 2.4.2.
- Created a new cache-busting build path:
  - `docs/angular-2/live/build-20260524-selector-runtime/`
- Updated the live page to load:
  - `styles.css?v=20260524-selector-runtime`
  - `systemjs.config.js?v=20260524-selector-runtime`
- Updated the main docs iframe and "Open full app" link to `live/?v=20260524-selector-runtime` so browsers do not reuse the old live HTML.
- Deployed the corrected docs to both public doc paths.

Validation completed:
- Public live bundle now contains `selector: 'angular-multiselect, angular2-multiselect'`.
- Public app bundle uses `<angular-multiselect>` templates.
- Headless Chrome validation of `https://alexandro.net/docs/angular/multiselect/angular-2/live/` showed:
  - `<stackline-test ng-version="2.4.10">`
  - `@stackline/angular-multiselect-dropdown 2.0.5`
  - `Skin switcher`
  - `01. Basic multi`
- Confirmed no `<body class="boot-error">` in the rendered live DOM.

## 2026-05-24 - Angular 4 documentation and Verdaccio 4.0.0

Request:
- Create the Angular 4 documentation using the same functional pattern proven on Angular 2, but with Angular 4-specific runtime, snippets, package version, and validation.
- Publish the documentation.
- Publish `@stackline/angular-multiselect-dropdown@4.0.0` to Verdaccio.
- Save the process as memory for future Angular lines.

Future-line rule:
- Do not copy the Angular 2 docs verbatim for later lines.
- Keep the same documentation experience: setup, live tests, examples by row, generated HTML/TS/JSON, skin switcher, classic/material sections, and event log.
- Adapt each line to its own Angular runtime, package version, peer range, dependency versions, template syntax, and cache-busting build path.
- Use `<angular-multiselect>` as the documented standard selector for every new line.
- Keep `<angular2-multiselect>` only as a legacy compatibility alias.
- Validate the actual public live app with headless Chrome before calling the line done.

Angular 4 docs built:
- Public URL: `https://alexandro.net/docs/angular/multiselect/angular-4/`
- Live URL: `https://alexandro.net/docs/angular/multiselect/angular-4/live/?v=20260524-angular4-live`
- Package line shown: `4.0.0`
- Runtime used by live docs: Angular `4.4.7`
- Peer range shown: `>=4.0.0 <5.0.0`
- Angular 4 template examples use `<ng-template>`, not the Angular 2-era `<template>`.
- Main docs avoid Cloudflare email obfuscation by separating package name and version and using `&#64;` in the install command.

Build and cache note:
- Reused the proven live docs structure from Angular 2, then changed the Angular 4-specific runtime details.
- Recompiled the Angular 4 live app with TypeScript 2.4.2 from the legacy test dependency set.
- Created cache-busting build path:
  - `docs/angular-4/live/build-20260524-angular4-live/`
- `docs/angular-4/live/index.html` loads:
  - `styles.css?v=20260524-angular4-live`
  - `systemjs.config.js?v=20260524-angular4-live`
- `docs/angular-4/live/systemjs.config.js` points to Angular `4.4.7` UMD bundles and RxJS `5.5.12`.

Verdaccio package:
- Published `@stackline/angular-multiselect-dropdown@4.0.0` to Verdaccio.
- Verdaccio registry for local publish/install: `http://127.0.0.1:4873`
- Network Verdaccio URL for tests: `http://192.168.3.52:4873`
- Verdaccio tags:
  - `latest: 4.0.0`
  - `angular-4: 4.0.0`
  - `angular-2: 2.0.5`
- The Verdaccio package is the legacy-compatible Angular 4 source package, not the modern Angular 21 APF output.
- Verdaccio package peer dependencies:
  - `@angular/common >=4.0.0 <5.0.0`
  - `@angular/core >=4.0.0 <5.0.0`
  - `@angular/forms >=4.0.0 <5.0.0`
- Fresh Verdaccio install of `@stackline/angular-multiselect-dropdown@4.0.0` succeeded and contained `selector: 'angular-multiselect, angular2-multiselect'`.

Important npm registry note:
- The project `.npmrc` forces `@stackline:registry=https://registry.npmjs.org/`.
- To publish scoped packages to Verdaccio, always override both registry settings:
  - `--registry=http://127.0.0.1:4873`
  - `--@stackline:registry=http://127.0.0.1:4873`
- A publish attempt without the scoped override also published `4.0.0` to npmjs. The public npm `latest` tag was restored to `2.0.5` immediately afterward.

Published docs paths:
- Local public path:
  - `/var/www/html/alexandro.net_docs/angular/angular-multiselect-dropdown/angular-4/`
  - `/var/www/html/alexandro.net_docs/angular/angular2-multiselect-dropdown/angular-4/`
- Remote server:
  - staged at `codex-server:/tmp/stackline-angular4-doc/`
  - copied into the same two `/var/www/html/alexandro.net_docs/angular/.../angular-4/` paths.

Validation completed:
- Local static-server validation showed Angular 4 live app booting with `<stackline-test ng-version="4.4.7">`.
- Public live app validation showed:
  - `<stackline-test ng-version="4.4.7">`
  - `@stackline/angular-multiselect-dropdown 4.0.0`
  - `Skin switcher`
  - `01. Basic multi`
- Confirmed no `<body class="boot-error">` in the public rendered live DOM.
- Public docs show Angular 4 text, package `4.0.0`, runtime `4.4.7`, `ng-template`, and `live/?v=20260524-angular4-live`.
- Public docs no longer show Cloudflare `email-protection` rewrites for the package/version text.

## 2026-05-24 - Angular 4 registry correction

Problem:
- The request was Verdaccio-only for the Angular 4 test line.
- The repo `.npmrc` has `@stackline:registry=https://registry.npmjs.org/`.
- A publish command that only passed `--registry=http://127.0.0.1:4873` was not enough for a scoped package, so npm used the scoped registry and accidentally published `@stackline/angular-multiselect-dropdown@4.0.0` to npmjs.

Public npm cleanup:
- Removed the accidental public `@stackline/angular-multiselect-dropdown@4.0.0` with `npm unpublish`.
- Verified public npm versions are back to:
  - `2.0.3`
  - `2.0.4`
  - `2.0.5`
- Verified public npm dist-tags are back to:
  - `latest: 2.0.5`
  - `angular-2: 2.0.5`
- Verified public npm does not contain `4.0.0`.
- The public `2.0.5` tarball still contains the standard `README.md`.
- The public npm package README metadata is empty after the unpublish. Npm documentation says package-page README is updated only when publishing a new version, and no new public publish was done because the corrected instruction is Verdaccio-only.

Verdaccio correction:
- Unpublished the first wrong Verdaccio `4.0.0`.
- Repacked and republished the corrected Angular 4 package only to Verdaccio with both registry overrides:
  - `--registry=http://127.0.0.1:4873`
  - `--@stackline:registry=http://127.0.0.1:4873`
- The corrected Verdaccio package README follows the standard package README structure, but clearly identifies the release as a Verdaccio test release for Angular 4.
- The Verdaccio README install command is:
  - `npm install @stackline/angular-multiselect-dropdown@4.0.0 --registry=http://192.168.3.52:4873 --@stackline:registry=http://192.168.3.52:4873 --save-exact`
- Verdaccio tags after correction:
  - `latest: 4.0.0`
  - `angular-4: 4.0.0`
  - `angular-2: 2.0.5`
- Fresh Verdaccio install of `@stackline/angular-multiselect-dropdown@4.0.0` succeeded.
- The installed package contains:
  - `version: 4.0.0`
  - peer range `>=4.0.0 <5.0.0`
  - `selector: 'angular-multiselect, angular2-multiselect'`
  - bundled `themes/default.theme.css`

Documentation correction:
- Updated the Angular 4 docs install command to Verdaccio only.
- Updated the docs navigation package link to Verdaccio, not npmjs.
- Published the corrected docs to both public Angular 4 doc paths.
- Public docs validation showed no `npmjs`, no `npm.com`, and no Cloudflare email-protection rewrite in the Angular 4 page.

Registry rule from now on:
- Never publish a scoped `@stackline/*` package to Verdaccio without both overrides:
  - `--registry=http://127.0.0.1:4873`
  - `--@stackline:registry=http://127.0.0.1:4873`
- For network installs from a test app, use:
  - `--registry=http://192.168.3.52:4873`
  - `--@stackline:registry=http://192.168.3.52:4873`
- Do not publish any new public npm version unless the user explicitly asks for npm production publication.

Clean Angular 4 test app:
- Path: `/storage/data/github/tests/angular-multiselect-dropdown/versao-4.0.0-angular-4`
- URL while local server is running: `http://192.168.3.52:4305/`
- Runtime dependencies installed in that app:
  - `@angular/core@4.4.7`
  - `@stackline/angular-multiselect-dropdown@4.0.0`
- Package install source:
  - `@stackline/angular-multiselect-dropdown@4.0.0` from Verdaccio
  - registry override used: `--@stackline:registry=http://127.0.0.1:4873`
- Build command in the app: `npm run build`
- Serve command in the app: `npm run serve`
- Headless Chrome validation rendered:
  - `<stackline-test ng-version="4.4.7">`
  - `@stackline/angular-multiselect-dropdown 4.0.0`
  - `Skin switcher`
  - `01. Basic multi`
- Confirmed rendered `<body>` did not have `boot-error`.

Test-app dependency rule:
- Every clean test app must follow the dependency pattern required by the Angular version being tested.
- Do not blindly carry old helper packages into newer Angular lines.
- Legacy helpers such as `core-js`, `reflect-metadata`, `rxjs`, and `systemjs` are acceptable only when that Angular/runtime setup needs them.
- When a later Angular version no longer requires a helper package, omit it from that line's clean test app.
- The goal of each test app is a clean, realistic install for that exact Angular major, not a shared dependency template copied across every version.

## 2026-05-24 - Angular 4 npm production publish

Request:
- Publish the Angular 4 line to public npm.

Important version note:
- Attempting to publish `@stackline/angular-multiselect-dropdown@4.0.0` to npm failed because npm does not allow reusing a previously published and unpublished `name@version`.
- The npm error was: `Cannot publish over previously published version "4.0.0"`.
- The production Angular 4 npm release therefore uses the next patch version: `4.0.1`.

Published npm package:
- Package: `@stackline/angular-multiselect-dropdown`
- Version: `4.0.1`
- Registry: `https://registry.npmjs.org`
- Tags after publish:
  - `latest: 4.0.1`
  - `angular-4: 4.0.1`
  - `angular-2: 2.0.5`
- Peer dependencies:
  - `@angular/common >=4.0.0 <5.0.0`
  - `@angular/core >=4.0.0 <5.0.0`
  - `@angular/forms >=4.0.0 <5.0.0`
- Homepage: `https://alexandro.net/docs/angular/multiselect/angular-4/`
- Production README uses npm links and install command only:
  - `npm install @stackline/angular-multiselect-dropdown@4.0.1 --save-exact`
- Production README has no Verdaccio registry command.

Validation:
- Fresh public npm install of `@stackline/angular-multiselect-dropdown@4.0.1` succeeded.
- Installed package contains:
  - `selector: 'angular-multiselect, angular2-multiselect'`
  - README section `Latest tested npm release: 4.0.1`
  - install command for `4.0.1`
- Public npm metadata shows `readmeFilename: README.md`.

Official npm clean test app:
- Path: `/storage/data/github/tests/angular-multiselect-dropdown/versao-4.0.1-angular-4`
- URL while local server is running: `http://192.168.3.52:4306/`
- Installed dependencies:
  - `@angular/core@4.4.7`
  - `@stackline/angular-multiselect-dropdown@4.0.1`
- Package source:
  - public npm, with `@stackline:registry=https://registry.npmjs.org/`
- Build command: `npm run build`
- Serve command: `npm run serve`
- Headless Chrome validation rendered:
  - `<stackline-test ng-version="4.4.7">`
  - `@stackline/angular-multiselect-dropdown 4.0.1`
  - `Skin switcher`
  - `01. Basic multi`
- Confirmed rendered `<body>` did not have `boot-error`.

Documentation update:
- Angular 4 docs now show package `4.0.1`.
- Angular 4 docs install command now uses npm:
  - `npm install @stackline/angular-multiselect-dropdown@4.0.1 --save-exact`
- Docs nav package link now points to npm, not Verdaccio.
- Live docs cache-busting path changed to:
  - `20260524-angular4-npm`
- Public docs URL:
  - `https://alexandro.net/docs/angular/multiselect/angular-4/`
- Public live validation rendered:
  - `<stackline-test ng-version="4.4.7">`
  - `@stackline/angular-multiselect-dropdown 4.0.1`
  - `Skin switcher`
  - `01. Basic multi`

## 2026-05-24 - Angular 5 npm production publish

Published npm package:
- Package: `@stackline/angular-multiselect-dropdown`
- Version: `5.0.0`
- Registry: `https://registry.npmjs.org`
- Tags after publish:
  - `latest: 5.0.0`
  - `angular-5: 5.0.0`
  - `angular-4: 4.0.1`
  - `angular-2: 2.0.5`
- Peer dependencies:
  - `@angular/common >=5.0.0 <6.0.0`
  - `@angular/core >=5.0.0 <6.0.0`
  - `@angular/forms >=5.0.0 <6.0.0`
- Homepage: `https://alexandro.net/docs/angular/multiselect/angular-5/`
- Production install command:
  - `npm install @stackline/angular-multiselect-dropdown@5.0.0 --save-exact`

Clean Angular 5 test app:
- Path: `/storage/data/github/tests/angular-multiselect-dropdown/versao-5.0.0-angular-5`
- URL while local server is running: `http://192.168.3.52:4307/`
- Runtime dependencies installed in that app:
  - `@angular/core@5.2.11`
  - `@stackline/angular-multiselect-dropdown@5.0.0`
- Package source:
  - public npm, with `@stackline:registry=https://registry.npmjs.org/`
- Build command: `npm run build`
- Serve command: `npm run serve`
- The test app must explicitly compile the package TypeScript files in `tsconfig.json`; TypeScript 2.6.2 did not emit imported package files from `node_modules` when only the entrypoint was listed.
- Headless Chrome validation rendered:
  - `<stackline-test ng-version="5.2.11">`
  - `@stackline/angular-multiselect-dropdown 5.0.0`
  - `Skin switcher`
  - `01. Basic multi`
- Confirmed rendered `<body>` did not have `boot-error`.

Documentation update:
- Angular 5 docs now show package `5.0.0`.
- Angular 5 docs install command uses npm:
  - `npm install @stackline/angular-multiselect-dropdown@5.0.0 --save-exact`
- Docs nav package link points to npm.
- Live docs cache-busting path:
  - `20260524-angular5-npm`
- Public docs URL:
  - `https://alexandro.net/docs/angular/multiselect/angular-5/`
- Public live validation rendered:
  - `<stackline-test ng-version="5.2.11">`
  - `@stackline/angular-multiselect-dropdown 5.0.0`
  - `Skin switcher`
  - `01. Basic multi`

## 2026-05-24 - Angular 6 npm production publish

Published npm package:
- Package: `@stackline/angular-multiselect-dropdown`
- Version: `6.0.0`
- Registry: `https://registry.npmjs.org`
- Tags after publish:
  - `latest: 6.0.0`
  - `angular-6: 6.0.0`
  - `angular-5: 5.0.0`
  - `angular-4: 4.0.1`
  - `angular-2: 2.0.5`
- Peer dependencies:
  - `@angular/common >=6.0.0 <7.0.0`
  - `@angular/core >=6.0.0 <7.0.0`
  - `@angular/forms >=6.0.0 <7.0.0`
- Homepage: `https://alexandro.net/docs/angular/multiselect/angular-6/`
- Production install command:
  - `npm install @stackline/angular-multiselect-dropdown@6.0.0 --save-exact`

Clean Angular 6 test app:
- Path: `/storage/data/github/tests/angular-multiselect-dropdown/versao-6.0.0-angular-6`
- URL while local server is running: `http://192.168.3.52:4308/`
- Runtime dependencies installed in that app:
  - `@angular/core@6.1.10`
  - `rxjs@6.6.7`
  - `@stackline/angular-multiselect-dropdown@6.0.0`
- Build command: `npm run build`
- Serve command: `npm run serve`
- The SystemJS loader needs an explicit `rxjs/operators` mapping for RxJS 6.
- Headless Chrome validation rendered:
  - `<stackline-test ng-version="6.1.10">`
  - `@stackline/angular-multiselect-dropdown 6.0.0`
  - `Skin switcher`
  - `01. Basic multi`
- Confirmed rendered `<body>` did not have `boot-error`.

Documentation update:
- Angular 6 docs now show package `6.0.0`.
- Angular 6 docs install command uses npm:
  - `npm install @stackline/angular-multiselect-dropdown@6.0.0 --save-exact`
- Live docs cache-busting path:
  - `20260524-angular6-npm`
- Public docs URL:
  - `https://alexandro.net/docs/angular/multiselect/angular-6/`
- Public live validation rendered:
  - `<stackline-test ng-version="6.1.10">`
  - `@stackline/angular-multiselect-dropdown 6.0.0`
  - `Skin switcher`
  - `01. Basic multi`

## 2026-05-24 - Angular 7 npm production publish

Published npm package:
- Package: `@stackline/angular-multiselect-dropdown`
- Version: `7.0.0`
- Registry: `https://registry.npmjs.org`
- Tags after publish:
  - `latest: 7.0.0`
  - `angular-7: 7.0.0`
  - `angular-6: 6.0.0`
  - `angular-5: 5.0.0`
  - `angular-4: 4.0.1`
  - `angular-2: 2.0.5`
- Peer dependencies:
  - `@angular/common >=7.0.0 <8.0.0`
  - `@angular/core >=7.0.0 <8.0.0`
  - `@angular/forms >=7.0.0 <8.0.0`
- Homepage: `https://alexandro.net/docs/angular/multiselect/angular-7/`
- Production install command:
  - `npm install @stackline/angular-multiselect-dropdown@7.0.0 --save-exact`

Clean Angular 7 test app:
- Path: `/storage/data/github/tests/angular-multiselect-dropdown/versao-7.0.0-angular-7`
- URL while local server is running: `http://192.168.3.52:4309/`
- Runtime dependencies installed in that app:
  - `@angular/core@7.2.16`
  - `rxjs@6.6.7`
  - `@stackline/angular-multiselect-dropdown@7.0.0`
- Build command: `npm run build`
- Serve command: `npm run serve`
- Headless Chrome validation rendered:
  - `<stackline-test ng-version="7.2.16">`
  - `@stackline/angular-multiselect-dropdown 7.0.0`
  - `Skin switcher`
  - `01. Basic multi`
- Confirmed rendered `<body>` did not have `boot-error`.

Documentation update:
- Angular 7 docs now show package `7.0.0`.
- Angular 7 docs install command uses npm:
  - `npm install @stackline/angular-multiselect-dropdown@7.0.0 --save-exact`
- Live docs cache-busting path:
  - `20260524-angular7-npm`
- Public docs URL:
  - `https://alexandro.net/docs/angular/multiselect/angular-7/`
- Public live validation rendered:
  - `<stackline-test ng-version="7.2.16">`
  - `@stackline/angular-multiselect-dropdown 7.0.0`
  - `Skin switcher`
  - `01. Basic multi`

## 2026-05-24 - Angular 8 npm production publish

Published npm package:
- Package: `@stackline/angular-multiselect-dropdown`
- Version: `8.0.0`
- Registry: `https://registry.npmjs.org`
- Tags after publish:
  - `latest: 8.0.0`
  - `angular-8: 8.0.0`
  - `angular-7: 7.0.0`
  - `angular-6: 6.0.0`
  - `angular-5: 5.0.0`
  - `angular-4: 4.0.1`
  - `angular-2: 2.0.5`
- Peer dependencies:
  - `@angular/common >=8.0.0 <9.0.0`
  - `@angular/core >=8.0.0 <9.0.0`
  - `@angular/forms >=8.0.0 <9.0.0`
- Homepage: `https://alexandro.net/docs/angular/multiselect/angular-8/`
- Production install command:
  - `npm install @stackline/angular-multiselect-dropdown@8.0.0 --save-exact`

Angular 8 package source note:
- Angular 8 / TypeScript 3.5 requires the query metadata second argument.
- The Angular 8 package line added:
  - `@ContentChild(..., { static: false })`
  - `@ViewChild(..., { static: false })`
- This patch is needed for Angular 8 and later legacy-source package lines.

Clean Angular 8 test app:
- Path: `/storage/data/github/tests/angular-multiselect-dropdown/versao-8.0.0-angular-8`
- URL while local server is running: `http://192.168.3.52:4318/`
- Runtime dependencies installed in that app:
  - `@angular/core@8.2.14`
  - `rxjs@6.6.7`
  - `zone.js@0.9.1`
  - `@stackline/angular-multiselect-dropdown@8.0.0`
- Build command: `npm run build`
- Serve command: `npm run serve`
- Headless Chrome validation rendered:
  - `<stackline-test ng-version="8.2.14">`
  - `@stackline/angular-multiselect-dropdown 8.0.0`
  - `Skin switcher`
  - `01. Basic multi`
- Confirmed rendered `<body>` did not have `boot-error`.

Documentation update:
- Angular 8 docs now show package `8.0.0`.
- Angular 8 docs install command uses npm:
  - `npm install @stackline/angular-multiselect-dropdown@8.0.0 --save-exact`
- Live docs cache-busting path:
  - `20260524-angular8-npm`
- Public docs URL:
  - `https://alexandro.net/docs/angular/multiselect/angular-8/`
- Public live validation rendered:
  - `<stackline-test ng-version="8.2.14">`
  - `@stackline/angular-multiselect-dropdown 8.0.0`
  - `Skin switcher`
  - `01. Basic multi`

## 2026-05-24 - Angular 9 npm production publish

Published npm package:
- Package: `@stackline/angular-multiselect-dropdown`
- Version: `9.0.0`
- Registry: `https://registry.npmjs.org`
- Tags after publish:
  - `latest: 9.0.0`
  - `angular-9: 9.0.0`
  - `angular-8: 8.0.0`
  - `angular-7: 7.0.0`
  - `angular-6: 6.0.0`
  - `angular-5: 5.0.0`
  - `angular-4: 4.0.1`
  - `angular-2: 2.0.5`
- Peer dependencies:
  - `@angular/common >=9.0.0 <10.0.0`
  - `@angular/core >=9.0.0 <10.0.0`
  - `@angular/forms >=9.0.0 <10.0.0`
- Homepage: `https://alexandro.net/docs/angular/multiselect/angular-9/`
- Production install command:
  - `npm install @stackline/angular-multiselect-dropdown@9.0.0 --save-exact`

Clean Angular 9 test app:
- Path: `/storage/data/github/tests/angular-multiselect-dropdown/versao-9.0.0-angular-9`
- URL while local server is running: `http://192.168.3.52:4320/`
- Runtime dependencies installed in that app:
  - `@angular/core@9.1.13`
  - `rxjs@6.6.7`
  - `zone.js@0.10.3`
  - `tslib@1.14.1`
  - `@stackline/angular-multiselect-dropdown@9.0.0`
- Build command: `npm run build`
- Serve command: `npm run serve`
- Headless Chrome validation rendered:
  - `<stackline-test ng-version="9.1.13">`
  - `@stackline/angular-multiselect-dropdown 9.0.0`
  - `Skin switcher`
  - `01. Basic multi`
- Confirmed rendered `<body>` did not have `boot-error`.

Documentation update:
- Angular 9 docs now show package `9.0.0`.
- Angular 9 docs install command uses npm:
  - `npm install @stackline/angular-multiselect-dropdown@9.0.0 --save-exact`
- Live docs cache-busting path:
  - `20260524-angular9-npm`
- Public docs URL:
  - `https://alexandro.net/docs/angular/multiselect/angular-9/`
- Public live validation rendered:
  - `<stackline-test ng-version="9.1.13">`
  - `@stackline/angular-multiselect-dropdown 9.0.0`
  - `Skin switcher`
  - `01. Basic multi`

## 2026-05-24 - Angular 10 npm production publish

Published npm package:
- Package: `@stackline/angular-multiselect-dropdown`
- Version: `10.0.0`
- Registry: `https://registry.npmjs.org`
- Tags after publish:
  - `latest: 10.0.0`
  - `angular-10: 10.0.0`
  - `angular-9: 9.0.0`
  - `angular-8: 8.0.0`
  - `angular-7: 7.0.0`
  - `angular-6: 6.0.0`
  - `angular-5: 5.0.0`
  - `angular-4: 4.0.1`
  - `angular-2: 2.0.5`
- Peer dependencies:
  - `@angular/common >=10.0.0 <11.0.0`
  - `@angular/core >=10.0.0 <11.0.0`
  - `@angular/forms >=10.0.0 <11.0.0`
- Homepage: `https://alexandro.net/docs/angular/multiselect/angular-10/`
- Production install command:
  - `npm install @stackline/angular-multiselect-dropdown@10.0.0 --save-exact`

Clean Angular 10 test app:
- Path: `/storage/data/github/tests/angular-multiselect-dropdown/versao-10.0.0-angular-10`
- URL while local server is running: `http://192.168.3.52:4322/`
- Runtime dependencies installed in that app:
  - `@angular/core@10.2.5`
  - `rxjs@6.6.7`
  - `zone.js@0.10.3`
  - `tslib@1.14.1`
  - `typescript@4.0.8`
  - `@stackline/angular-multiselect-dropdown@10.0.0`
- Build command: `npm run build`
- Serve command: `npm run serve`
- Headless Chrome validation rendered:
  - `<stackline-test ng-version="10.2.5">`
  - `@stackline/angular-multiselect-dropdown 10.0.0`
  - `Skin switcher`
  - `01. Basic multi`
- Confirmed rendered `<body>` did not have `boot-error`.

Documentation update:
- Angular 10 docs now show package `10.0.0`.
- Angular 10 docs install command uses npm:
  - `npm install @stackline/angular-multiselect-dropdown@10.0.0 --save-exact`
- Live docs cache-busting path:
  - `20260524-angular10-npm`
- Public docs URL:
  - `https://alexandro.net/docs/angular/multiselect/angular-10/`
- Public live validation rendered:
  - `<stackline-test ng-version="10.2.5">`
  - `@stackline/angular-multiselect-dropdown 10.0.0`
  - `Skin switcher`
  - `01. Basic multi`

## 2026-05-24 - Angular 11 npm production publish

Published npm package:
- Package: `@stackline/angular-multiselect-dropdown`
- Version: `11.0.0`
- Registry: `https://registry.npmjs.org`
- Tags after publish:
  - `latest: 11.0.0`
  - `angular-11: 11.0.0`
  - `angular-10: 10.0.0`
  - `angular-9: 9.0.0`
  - `angular-8: 8.0.0`
  - `angular-7: 7.0.0`
  - `angular-6: 6.0.0`
  - `angular-5: 5.0.0`
  - `angular-4: 4.0.1`
  - `angular-2: 2.0.5`
- Peer dependencies:
  - `@angular/common >=11.0.0 <12.0.0`
  - `@angular/core >=11.0.0 <12.0.0`
  - `@angular/forms >=11.0.0 <12.0.0`
- Homepage: `https://alexandro.net/docs/angular/multiselect/angular-11/`
- Production install command:
  - `npm install @stackline/angular-multiselect-dropdown@11.0.0 --save-exact`

Clean Angular 11 test app:
- Path: `/storage/data/github/tests/angular-multiselect-dropdown/versao-11.0.0-angular-11`
- URL while local server is running: `http://192.168.3.52:4324/`
- Runtime dependencies installed in that app:
  - `@angular/core@11.2.14`
  - `rxjs@6.6.7`
  - `zone.js@0.11.8`
  - `tslib@1.14.1`
  - `typescript@4.1.6`
  - `@stackline/angular-multiselect-dropdown@11.0.0`
- Build command: `npm run build`
- Serve command: `npm run serve`
- Headless Chrome validation rendered:
  - `<stackline-test ng-version="11.2.14">`
  - `@stackline/angular-multiselect-dropdown 11.0.0`
  - `Skin switcher`
  - `01. Basic multi`
- Confirmed rendered `<body>` did not have `boot-error`.

Documentation update:
- Angular 11 docs now show package `11.0.0`.
- Angular 11 docs install command uses npm:
  - `npm install @stackline/angular-multiselect-dropdown@11.0.0 --save-exact`
- Live docs cache-busting path:
  - `20260524-angular11-npm`
- Public docs URL:
  - `https://alexandro.net/docs/angular/multiselect/angular-11/`
- Public live validation rendered:
  - `<stackline-test ng-version="11.2.14">`
  - `@stackline/angular-multiselect-dropdown 11.0.0`
  - `Skin switcher`
  - `01. Basic multi`

## 2026-05-24 - Angular 12 npm production publish

Published npm package:
- Package: `@stackline/angular-multiselect-dropdown`
- Version: `12.0.0`
- Registry: `https://registry.npmjs.org`
- Tags after publish:
  - `latest: 12.0.0`
  - `angular-12: 12.0.0`
  - `angular-11: 11.0.0`
  - `angular-10: 10.0.0`
  - `angular-9: 9.0.0`
  - `angular-8: 8.0.0`
  - `angular-7: 7.0.0`
  - `angular-6: 6.0.0`
  - `angular-5: 5.0.0`
  - `angular-4: 4.0.1`
  - `angular-2: 2.0.5`
- Peer dependencies:
  - `@angular/common >=12.0.0 <13.0.0`
  - `@angular/core >=12.0.0 <13.0.0`
  - `@angular/forms >=12.0.0 <13.0.0`
- Homepage: `https://alexandro.net/docs/angular/multiselect/angular-12/`
- Production install command:
  - `npm install @stackline/angular-multiselect-dropdown@12.0.0 --save-exact`

Clean Angular 12 test app:
- Path: `/storage/data/github/tests/angular-multiselect-dropdown/versao-12.0.0-angular-12`
- URL while local server is running: `http://192.168.3.52:4326/`
- Runtime dependencies installed in that app:
  - `@angular/core@12.2.17`
  - `rxjs@6.6.7`
  - `zone.js@0.11.8`
  - `tslib@1.14.1`
  - `typescript@4.3.5`
  - `@stackline/angular-multiselect-dropdown@12.0.0`
- Build command: `npm run build`
- Serve command: `npm run serve`
- Headless Chrome validation rendered:
  - `<stackline-test ng-version="12.2.17">`
  - `@stackline/angular-multiselect-dropdown 12.0.0`
  - `Skin switcher`
  - `01. Basic multi`
- Confirmed rendered `<body>` did not have `boot-error`.

Documentation update:
- Angular 12 docs now show package `12.0.0`.
- Angular 12 docs install command uses npm:
  - `npm install @stackline/angular-multiselect-dropdown@12.0.0 --save-exact`
- Live docs cache-busting path:
  - `20260524-angular12-npm`
- Public docs URL:
  - `https://alexandro.net/docs/angular/multiselect/angular-12/`
- Public live validation rendered:
  - `<stackline-test ng-version="12.2.17">`
  - `@stackline/angular-multiselect-dropdown 12.0.0`
  - `Skin switcher`
  - `01. Basic multi`

## 2026-05-24 - Angular 13 npm production publish

Published npm package:
- Package: `@stackline/angular-multiselect-dropdown`
- Version: `13.0.0`
- Registry: `https://registry.npmjs.org`
- Package format: Angular Package Format built with `ng-packagr@13.3.1`
- Tags after publish:
  - `latest: 13.0.0`
  - `angular-13: 13.0.0`
  - `angular-12: 12.0.0`
  - `angular-11: 11.0.0`
  - `angular-10: 10.0.0`
  - `angular-9: 9.0.0`
  - `angular-8: 8.0.0`
  - `angular-7: 7.0.0`
  - `angular-6: 6.0.0`
  - `angular-5: 5.0.0`
  - `angular-4: 4.0.1`
  - `angular-2: 2.0.5`
- Peer dependencies:
  - `@angular/common >=13.0.0 <14.0.0`
  - `@angular/core >=13.0.0 <14.0.0`
  - `@angular/forms >=13.0.0 <14.0.0`
- Homepage: `https://alexandro.net/docs/angular/multiselect/angular-13/`
- Production install command:
  - `npm install @stackline/angular-multiselect-dropdown@13.0.0 --save-exact`

Clean Angular 13 test app:
- Path: `/storage/data/github/tests/angular-multiselect-dropdown/versao-13.0.0-angular-13`
- URL while local server is running: `http://192.168.3.52:4328/`
- Runtime dependencies installed in that app:
  - `@angular/core@13.4.0`
  - `rxjs@7.5.7`
  - `zone.js@0.11.8`
  - `tslib@2.3.1`
  - `typescript@4.6.4`
  - `@stackline/angular-multiselect-dropdown@13.0.0`
- Build command: `npm run build`
- Serve command: `npm run start`
- Puppeteer validation rendered:
  - `Angular 13.4.0 runtime`
  - `@stackline/angular-multiselect-dropdown 13.0.0`
  - `Skin switcher`
  - `01. Basic multi`

Documentation update:
- Angular 13 docs now show package `13.0.0`.
- Angular 13 docs install command uses npm:
  - `npm install @stackline/angular-multiselect-dropdown@^13.0.0`
- Live docs cache-busting path:
  - `20260524-angular13-npm`
- Public docs URL:
  - `https://alexandro.net/docs/angular/multiselect/angular-13/`
- Public live validation rendered:
  - `Angular 13.4.0 runtime`
  - `@stackline/angular-multiselect-dropdown 13.0.0`
  - `Skin switcher`
  - `01. Basic multi`

Angular 13 packaging note for future versions:
- Do not publish Angular 13+ as source-only TypeScript under `node_modules`; Angular CLI/Webpack can emit empty modules and fail with `Cannot read properties of undefined (reading 'ɵmod')`.
- Use Angular Package Format through the matching `ng-packagr` major for Angular 13 and later release lines.

## 2026-05-24 - Angular 14 npm production publish

Published npm package:
- Package: `@stackline/angular-multiselect-dropdown`
- Version: `14.0.0`
- Registry: `https://registry.npmjs.org`
- Package format: Angular Package Format built with `ng-packagr@14.2.2`
- Tags after publish:
  - `latest: 14.0.0`
  - `angular-14: 14.0.0`
  - `angular-13: 13.0.0`
  - `angular-12: 12.0.0`
  - `angular-11: 11.0.0`
  - `angular-10: 10.0.0`
  - `angular-9: 9.0.0`
  - `angular-8: 8.0.0`
  - `angular-7: 7.0.0`
  - `angular-6: 6.0.0`
  - `angular-5: 5.0.0`
  - `angular-4: 4.0.1`
  - `angular-2: 2.0.5`
- Peer dependencies:
  - `@angular/common >=14.0.0 <15.0.0`
  - `@angular/core >=14.0.0 <15.0.0`
  - `@angular/forms >=14.0.0 <15.0.0`
- Homepage: `https://alexandro.net/docs/angular/multiselect/angular-14/`
- Production install command:
  - `npm install @stackline/angular-multiselect-dropdown@14.0.0 --save-exact`

Clean Angular 14 test app:
- Path: `/storage/data/github/tests/angular-multiselect-dropdown/versao-14.0.0-angular-14`
- URL while local server is running: `http://192.168.3.52:4330/`
- Runtime dependencies installed in that app:
  - `@angular/core@14.3.0`
  - `rxjs@7.5.7`
  - `zone.js@0.11.8`
  - `tslib@2.3.1`
  - `typescript@4.8.4`
  - `@stackline/angular-multiselect-dropdown@14.0.0`
- Build command: `npm run build`
- Serve command: `npm run start`
- Puppeteer validation rendered:
  - `Angular 14.3.0 runtime`
  - `@stackline/angular-multiselect-dropdown 14.0.0`
  - `Skin switcher`
  - `01. Basic multi`

Documentation update:
- Angular 14 docs now show package `14.0.0`.
- Angular 14 docs install command uses npm:
  - `npm install @stackline/angular-multiselect-dropdown@^14.0.0`
- Live docs cache-busting path:
  - `20260524-angular14-npm`
- Public docs URL:
  - `https://alexandro.net/docs/angular/multiselect/angular-14/`
- Public live validation rendered:
  - `Angular 14.3.0 runtime`
  - `@stackline/angular-multiselect-dropdown 14.0.0`
  - `Skin switcher`
  - `01. Basic multi`

## 2026-05-24 - Angular 15 npm production publish

Published npm package:
- Package: `@stackline/angular-multiselect-dropdown`
- Version: `15.0.0`
- Registry: `https://registry.npmjs.org`
- Package format: Angular Package Format built with `ng-packagr@15.2.2`
- Tags after publish:
  - `latest: 15.0.0`
  - `angular-15: 15.0.0`
  - `angular-14: 14.0.0`
  - `angular-13: 13.0.0`
  - `angular-12: 12.0.0`
  - `angular-11: 11.0.0`
  - `angular-10: 10.0.0`
  - `angular-9: 9.0.0`
  - `angular-8: 8.0.0`
  - `angular-7: 7.0.0`
  - `angular-6: 6.0.0`
  - `angular-5: 5.0.0`
  - `angular-4: 4.0.1`
  - `angular-2: 2.0.5`
- Peer dependencies:
  - `@angular/common >=15.0.0 <16.0.0`
  - `@angular/core >=15.0.0 <16.0.0`
  - `@angular/forms >=15.0.0 <16.0.0`
- Homepage: `https://alexandro.net/docs/angular/multiselect/angular-15/`
- Production install command:
  - `npm install @stackline/angular-multiselect-dropdown@15.0.0 --save-exact`

Clean Angular 15 test app:
- Path: `/storage/data/github/tests/angular-multiselect-dropdown/versao-15.0.0-angular-15`
- URL while local server is running: `http://192.168.3.52:4332/`
- Runtime dependencies installed in that app:
  - `@angular/core@15.2.10`
  - `rxjs@7.8.2`
  - `zone.js@0.12.0`
  - `tslib@2.8.1`
  - `typescript@4.9.5`
  - `@stackline/angular-multiselect-dropdown@15.0.0`
- Build command: `npm run build`
- Serve command: `npm run start`
- Puppeteer validation rendered:
  - `Angular 15.2.10 runtime`
  - `@stackline/angular-multiselect-dropdown 15.0.0`
  - `Skin switcher`
  - `01. Basic multi`

Documentation update:
- Angular 15 docs now show package `15.0.0`.
- Angular 15 docs install command uses npm:
  - `npm install @stackline/angular-multiselect-dropdown@^15.0.0`
- Live docs cache-busting path:
  - `20260524-angular15-npm`
- Public docs URL:
  - `https://alexandro.net/docs/angular/multiselect/angular-15/`
- Public live validation rendered:
  - `Angular 15.2.10 runtime`
  - `@stackline/angular-multiselect-dropdown 15.0.0`
  - `Skin switcher`
  - `01. Basic multi`

## 2026-05-24 - Angular 16 npm production publish

Published npm package:
- Package: `@stackline/angular-multiselect-dropdown`
- Version: `16.0.0`
- Registry: `https://registry.npmjs.org`
- Package format: Angular Package Format built with `ng-packagr@16.2.3`
- Tags after publish:
  - `latest: 16.0.0`
  - `angular-16: 16.0.0`
  - `angular-15: 15.0.0`
  - `angular-14: 14.0.0`
  - `angular-13: 13.0.0`
  - `angular-12: 12.0.0`
  - `angular-11: 11.0.0`
  - `angular-10: 10.0.0`
  - `angular-9: 9.0.0`
  - `angular-8: 8.0.0`
  - `angular-7: 7.0.0`
  - `angular-6: 6.0.0`
  - `angular-5: 5.0.0`
  - `angular-4: 4.0.1`
  - `angular-2: 2.0.5`
- Peer dependencies:
  - `@angular/common >=16.0.0 <17.0.0`
  - `@angular/core >=16.0.0 <17.0.0`
  - `@angular/forms >=16.0.0 <17.0.0`
- Homepage: `https://alexandro.net/docs/angular/multiselect/angular-16/`
- Production install command:
  - `npm install @stackline/angular-multiselect-dropdown@16.0.0 --save-exact`

Clean Angular 16 test app:
- Path: `/storage/data/github/tests/angular-multiselect-dropdown/versao-16.0.0-angular-16`
- URL while local server is running: `http://192.168.3.52:4334/`
- Runtime dependencies installed in that app:
  - `@angular/core@16.2.12`
  - `rxjs@7.8.2`
  - `zone.js@0.13.3`
  - `tslib@2.8.1`
  - `typescript@5.1.6`
  - `@stackline/angular-multiselect-dropdown@16.0.0`
- Build command: `npm run build`
- Serve command: `npm run start`
- Test app note: removed `defaultProject` from `angular.json` because Angular CLI 16 warns that this workspace extension is invalid.
- Puppeteer validation rendered:
  - `Angular 16.2.12 runtime`
  - `@stackline/angular-multiselect-dropdown 16.0.0`
  - `Skin switcher`
  - `01. Basic multi`

Documentation update:
- Angular 16 docs now show package `16.0.0`.
- Angular 16 docs install command uses npm:
  - `npm install @stackline/angular-multiselect-dropdown@^16.0.0`
- Live docs cache-busting path:
  - `20260524-angular16-npm`
- Public docs URL:
  - `https://alexandro.net/docs/angular/multiselect/angular-16/`
- Public live validation rendered:
  - `Angular 16.2.12 runtime`
  - `@stackline/angular-multiselect-dropdown 16.0.0`
  - `Skin switcher`
  - `01. Basic multi`

## 2026-05-24 - Angular 17 npm production publish

Published npm package:
- Package: `@stackline/angular-multiselect-dropdown`
- Version: `17.0.0`
- Registry: `https://registry.npmjs.org`
- Package format: Angular Package Format built with `ng-packagr@17.3.0`
- Tags after publish:
  - `latest: 17.0.0`
  - `angular-17: 17.0.0`
  - `angular-16: 16.0.0`
  - `angular-15: 15.0.0`
  - `angular-14: 14.0.0`
  - `angular-13: 13.0.0`
  - `angular-12: 12.0.0`
  - `angular-11: 11.0.0`
  - `angular-10: 10.0.0`
  - `angular-9: 9.0.0`
  - `angular-8: 8.0.0`
  - `angular-7: 7.0.0`
  - `angular-6: 6.0.0`
  - `angular-5: 5.0.0`
  - `angular-4: 4.0.1`
  - `angular-2: 2.0.5`
- Peer dependencies:
  - `@angular/common >=17.0.0 <18.0.0`
  - `@angular/core >=17.0.0 <18.0.0`
  - `@angular/forms >=17.0.0 <18.0.0`
- Homepage: `https://alexandro.net/docs/angular/multiselect/angular-17/`
- Production install command:
  - `npm install @stackline/angular-multiselect-dropdown@17.0.0 --save-exact`

Clean Angular 17 test app:
- Path: `/storage/data/github/tests/angular-multiselect-dropdown/versao-17.0.0-angular-17`
- URL while local server is running: `http://192.168.3.52:4336/`
- Runtime dependencies installed in that app:
  - `@angular/core@17.3.12`
  - `rxjs@7.8.2`
  - `zone.js@0.14.10`
  - `tslib@2.8.1`
  - `typescript@5.4.5`
  - `@stackline/angular-multiselect-dropdown@17.0.0`
- Build command: `npm run build`
- Serve command: `npm run start`
- Test app note: Angular 17 template control flow treats `@` as syntax, so literal `@stackline` in the live test header must be escaped as `&#64;stackline`.
- Puppeteer validation rendered:
  - `Angular 17.3.12 runtime`
  - `@stackline/angular-multiselect-dropdown 17.0.0`
  - `Skin switcher`
  - `01. Basic multi`

Documentation update:
- Angular 17 docs now show package `17.0.0`.
- Angular 17 docs install command uses npm:
  - `npm install @stackline/angular-multiselect-dropdown@^17.0.0`
- Live docs cache-busting path:
  - `20260524-angular17-npm`
- Public docs URL:
  - `https://alexandro.net/docs/angular/multiselect/angular-17/`
- Public live validation rendered:
  - `Angular 17.3.12 runtime`
  - `@stackline/angular-multiselect-dropdown 17.0.0`
  - `Skin switcher`
  - `01. Basic multi`

## 2026-05-24 - Angular 18 npm production publish

Published npm package:
- Package: `@stackline/angular-multiselect-dropdown`
- Version: `18.0.0`
- Registry: `https://registry.npmjs.org`
- Package format: Angular Package Format built with `ng-packagr@18.2.1`
- Tags after publish:
  - `latest: 18.0.0`
  - `angular-18: 18.0.0`
  - `angular-17: 17.0.0`
  - `angular-16: 16.0.0`
  - `angular-15: 15.0.0`
  - `angular-14: 14.0.0`
  - `angular-13: 13.0.0`
  - `angular-12: 12.0.0`
  - `angular-11: 11.0.0`
  - `angular-10: 10.0.0`
  - `angular-9: 9.0.0`
  - `angular-8: 8.0.0`
  - `angular-7: 7.0.0`
  - `angular-6: 6.0.0`
  - `angular-5: 5.0.0`
  - `angular-4: 4.0.1`
  - `angular-2: 2.0.5`
- Peer dependencies:
  - `@angular/common >=18.0.0 <19.0.0`
  - `@angular/core >=18.0.0 <19.0.0`
  - `@angular/forms >=18.0.0 <19.0.0`
- Homepage: `https://alexandro.net/docs/angular/multiselect/angular-18/`
- Production install command:
  - `npm install @stackline/angular-multiselect-dropdown@18.0.0 --save-exact`

Clean Angular 18 test app:
- Path: `/storage/data/github/tests/angular-multiselect-dropdown/versao-18.0.0-angular-18`
- URL while local server is running: `http://192.168.3.52:4338/`
- Runtime dependencies installed in that app:
  - `@angular/core@18.2.14`
  - `rxjs@7.8.2`
  - `zone.js@0.14.10`
  - `tslib@2.8.1`
  - `typescript@5.5.4`
  - `@stackline/angular-multiselect-dropdown@18.0.0`
- Build command: `npm run build`
- Serve command: `npm run start`
- Puppeteer validation rendered:
  - `Angular 18.2.14 runtime`
  - `@stackline/angular-multiselect-dropdown 18.0.0`
  - `Skin switcher`
  - `01. Basic multi`

Documentation update:
- Angular 18 docs now show package `18.0.0`.
- Angular 18 docs install command uses npm:
  - `npm install @stackline/angular-multiselect-dropdown@^18.0.0`
- Live docs cache-busting path:
  - `20260524-angular18-npm`
- Public docs URL:
  - `https://alexandro.net/docs/angular/multiselect/angular-18/`
- Public live validation rendered:
  - `Angular 18.2.14 runtime`
  - `@stackline/angular-multiselect-dropdown 18.0.0`
  - `Skin switcher`
  - `01. Basic multi`

## 2026-05-24 - Angular 19 npm production publish

Published npm package:
- Package: `@stackline/angular-multiselect-dropdown`
- Version: `19.0.0`
- Registry: `https://registry.npmjs.org`
- Package format: Angular Package Format built with `ng-packagr@19.2.2`
- Tags after publish:
  - `latest: 19.0.0`
  - `angular-19: 19.0.0`
- Peer dependencies:
  - `@angular/common >=19.0.0 <20.0.0`
  - `@angular/core >=19.0.0 <20.0.0`
  - `@angular/forms >=19.0.0 <20.0.0`
- Homepage: `https://alexandro.net/docs/angular/multiselect/angular-19/`
- Production install command:
  - `npm install @stackline/angular-multiselect-dropdown@19.0.0 --save-exact`
- Angular 19+ compatibility note:
  - Library components, directives, and pipes declared by the module need explicit `standalone: false`.

Clean Angular 19 test app:
- Path: `/storage/data/github/tests/angular-multiselect-dropdown/versao-19.0.0-angular-19`
- URL while local server is running: `http://192.168.3.52:4340/`
- Runtime dependencies installed in that app:
  - `@angular/core@19.2.22`
  - `rxjs@7.8.2`
  - `zone.js@0.15.1`
  - `tslib@2.8.1`
  - `typescript@5.8.3`
  - `@stackline/angular-multiselect-dropdown@19.0.0`
- Build command: `npm run build`
- Serve command: `npm run start`
- Puppeteer validation rendered:
  - `Angular 19.2.22 runtime`
  - `@stackline/angular-multiselect-dropdown 19.0.0`
  - `Skin switcher`
  - `01. Basic multi`

Documentation update:
- Angular 19 docs now show package `19.0.0`.
- Angular 19 docs install command uses npm:
  - `npm install @stackline/angular-multiselect-dropdown@^19.0.0`
- Live docs cache-busting path:
  - `20260524-angular19-npm`
- Public docs URL:
  - `https://alexandro.net/docs/angular/multiselect/angular-19/`
- Public live validation rendered:
  - `Angular 19.2.22 runtime`
  - `@stackline/angular-multiselect-dropdown 19.0.0`
  - `Skin switcher`
  - `01. Basic multi`

## 2026-05-24 - Angular 20 npm production publish

Published npm package:
- Package: `@stackline/angular-multiselect-dropdown`
- Version: `20.0.0`
- Registry: `https://registry.npmjs.org`
- Package format: Angular Package Format built with `ng-packagr@20.3.2`
- Tags after publish:
  - `latest: 20.0.0`
  - `angular-20: 20.0.0`
- Peer dependencies:
  - `@angular/common >=20.0.0 <21.0.0`
  - `@angular/core >=20.0.0 <21.0.0`
  - `@angular/forms >=20.0.0 <21.0.0`
- Homepage: `https://alexandro.net/docs/angular/multiselect/angular-20/`
- Production install command:
  - `npm install @stackline/angular-multiselect-dropdown@20.0.0 --save-exact`
- Angular 20 compatibility note:
  - Keep explicit `standalone: false` on module-declared library components, directives, and pipes.

Clean Angular 20 test app:
- Path: `/storage/data/github/tests/angular-multiselect-dropdown/versao-20.0.0-angular-20`
- URL while local server is running: `http://192.168.3.52:4342/`
- Runtime dependencies installed in that app:
  - `@angular/core@20.3.21`
  - `rxjs@7.8.2`
  - `zone.js@0.15.1`
  - `tslib@2.8.1`
  - `typescript@5.9.3`
  - `@stackline/angular-multiselect-dropdown@20.0.0`
- Build command: `npm run build`
- Serve command: `npm run start`
- Puppeteer validation rendered:
  - `Angular 20.3.21 runtime`
  - `@stackline/angular-multiselect-dropdown 20.0.0`
  - `Skin switcher`
  - `01. Basic multi`

Documentation update:
- Angular 20 docs now show package `20.0.0`.
- Angular 20 docs install command uses npm:
  - `npm install @stackline/angular-multiselect-dropdown@^20.0.0`
- Angular 20 release-family metadata was extended through `20.3.21`.
- Live docs cache-busting path:
  - `20260524-angular20-npm`
- Public docs URL:
  - `https://alexandro.net/docs/angular/multiselect/angular-20/`
- Public live validation rendered:
  - `Angular 20.3.21 runtime`
  - `@stackline/angular-multiselect-dropdown 20.0.0`
  - `Skin switcher`
  - `01. Basic multi`

## 2026-05-24 - Angular 21 npm production publish

Published npm package:
- Package: `@stackline/angular-multiselect-dropdown`
- Version: `21.0.0`
- Registry: `https://registry.npmjs.org`
- Package format: Angular Package Format built with `ng-packagr@21.2.3`
- Tags after publish:
  - `latest: 21.0.0`
  - `angular-21: 21.0.0`
- Peer dependencies:
  - `@angular/common >=21.0.0 <22.0.0`
  - `@angular/core >=21.0.0 <22.0.0`
  - `@angular/forms >=21.0.0 <22.0.0`
- Homepage: `https://alexandro.net/docs/angular/multiselect/angular-21/`
- Production install command:
  - `npm install @stackline/angular-multiselect-dropdown@21.0.0 --save-exact`
- Angular 21 package build notes:
  - Keep explicit `standalone: false` on module-declared library declarations.
  - Type document click/touch/scroll listeners as `Event` with `EventTarget | null` for Angular 21 template listener checking.

Clean Angular 21 test app:
- Path: `/storage/data/github/tests/angular-multiselect-dropdown/versao-21.0.0-angular-21`
- URL while local server is running: `http://192.168.3.52:4344/`
- Runtime dependencies installed in that app:
  - `@angular/core@21.2.14`
  - `rxjs@7.8.2`
  - `zone.js@0.16.0`
  - `tslib@2.8.1`
  - `typescript@5.9.3`
  - `@stackline/angular-multiselect-dropdown@21.0.0`
- CLI/test toolchain:
  - `@angular/cli@21.2.12`
  - `@angular-devkit/build-angular@21.2.12`
  - `@angular/compiler-cli@21.2.14`
- Build command: `npm run build`
- Serve command: `npm run start`
- Angular 21 test app note:
  - `moduleResolution: bundler` is required so TypeScript resolves Angular 21 subpath exports such as `@angular/core/primitives/di`.
- Puppeteer validation rendered:
  - `Angular 21.2.14 runtime`
  - `@stackline/angular-multiselect-dropdown 21.0.0`
  - `Skin switcher`
  - `01. Basic multi`

Documentation update:
- Angular 21 docs now show package `21.0.0`.
- Angular 21 docs install command uses npm:
  - `npm install @stackline/angular-multiselect-dropdown@^21.0.0`
- Angular 21 release-family metadata was extended through `21.2.14`.
- Live docs cache-busting path:
  - `20260524-angular21-npm`
- Public docs URL:
  - `https://alexandro.net/docs/angular/multiselect/angular-21/`
- Public live validation rendered:
  - `Angular 21.2.14 runtime`
  - `@stackline/angular-multiselect-dropdown 21.0.0`
  - `Skin switcher`
  - `01. Basic multi`

## 2026-05-24 - Docs shell fix for Angular 13 through Angular 21

Issue:
- Public docs from Angular 13 onward were still serving the older Angular docs shell at hash routes such as:
  - `https://alexandro.net/docs/angular/multiselect/angular-13/#/basic`
- Angular 12 already used the newer functional static documentation layout.

Fix:
- Replaced `docs/angular-13/index.html` through `docs/angular-21/index.html` with the same functional documentation layout used by Angular 12.
- Kept each version pointed at its real published package line and real embedded `live/` app:
  - Angular 13: `13.0.0`, runtime `13.4.0`
  - Angular 14: `14.0.0`, runtime `14.3.0`
  - Angular 15: `15.0.0`, runtime `15.2.10`
  - Angular 16: `16.0.0`, runtime `16.2.12`
  - Angular 17: `17.0.0`, runtime `17.3.12`
  - Angular 18: `18.0.0`, runtime `18.2.14`
  - Angular 19: `19.0.0`, runtime `19.2.22`
  - Angular 20: `20.0.0`, runtime `20.3.21`
  - Angular 21: `21.0.0`, runtime `21.2.14`

Validation:
- Local static docs validation passed for Angular 13 through Angular 21 at `/angular-X/#/basic`.
- Public validation passed for Angular 13 through Angular 21 at:
  - `https://alexandro.net/docs/angular/multiselect/angular-X/#/basic`
- Each public page rendered:
  - `Angular X functional docs`
  - `Real Angular runtime test application`
  - the correct npm install command
  - the embedded `live/` iframe with `Skin switcher`
