# Changelog

All notable changes to this project will be documented in this file.

## [2.0.4] - 2026-05-23

### Changed
- Updated the npm README to the maintained Stackline documentation standard.
- Updated the package homepage to `https://alexandro.net/docs/angular/multiselect/`.
- Added the short documentation URL for the Angular multiselect docs.

## [2.0.3] - 2026-05-23

### Added
- Documented the Angular 2 release as compatible with Angular 2.x and tested on Angular 2.4.10.
- Added the `theme` option for `classic` and `material` skins in the Angular 2 package.

### Changed
- Published only the tested Angular 2 package version, `@stackline/angular-multiselect-dropdown@2.0.3`.
- Locked Angular peer dependencies for the package to `>=2.0.0 <3.0.0`.

### Fixed
- Removed the high `z-index` from selected item remove icons.
- Centered the overflow counter beside selected items.

## [13.0.4] - 2026-04-03

### Added
- Added a direct "Test Live on StackBlitz" link to the project READMEs

### Changed
- Updated maintainer credits in the documentation to point to Alexandro Paixao Marques
- Removed deprecated Sass `@import` usage from the demo styles
- Moved Bootstrap CSS loading to the Angular styles pipeline

### Fixed
- Removed Angular Sass deprecation warnings from the demo build

### See Also
- [GitHub Repository](https://github.com/alexandroit/angular-multiselect-dropdown)
- [NPM Package](https://www.npmjs.com/package/@stackline/angular-multiselect-dropdown)

## [13.0.3] - 2026-04-03

### Added
- Full support for **Angular 21**
- New English README and npm presentation for the Angular 21 release line
- New badges for npm version, total downloads, monthly downloads, license, Angular 21, TypeScript, and GitHub stars

### Changed
- Updated Angular packages to `21.2.7`
- Updated `@angular/cli` and `@angular-devkit/build-angular` to `21.2.6`
- Updated `ng-packagr` to `21.2.2`
- Updated `@angular/cdk` to `21.2.5`
- Updated `@ng-bootstrap/ng-bootstrap` to `20.0.0`
- Updated TypeScript to `~5.9.3`
- Updated `zone.js` to `~0.16.1` for test compatibility
- Corrected the GitHub Pages base href to `/angular-multiselect-dropdown/`
- Tightened library peer dependencies to Angular 21

### Fixed
- Updated pointer, touch, scroll, and Escape event typings for Angular 21 builds
- Removed the ZoneJS runtime import from the demo app polyfills because Angular 21 is zoneless by default
- Updated test imports to use the current `zone.js` entry points
- Replaced outdated or broken README links with working GitHub and demo URLs

### How to Upgrade
```bash
npm install @stackline/angular-multiselect-dropdown@^13.0.3
```

### See Also
- [Angular Version Compatibility](https://angular.dev/reference/versions)
- [Angular Zoneless Guide](https://angular.dev/guide/zoneless)
- [GitHub Repository](https://github.com/alexandroit/angular-multiselect-dropdown)
- [NPM Package](https://www.npmjs.com/package/@stackline/angular-multiselect-dropdown)

## [12.0.1] - 2026-04-03

### Added
- New English README content tailored for the Angular 20 release line
- Stronger npm keywords and package metadata for easier discovery
- Clean publishing links for documentation, demo, repository, and issue tracking

### Changed
- Refined the Angular 20 package presentation for npm and GitHub
- Updated package links to the active repository at `alexandroit/angular-multiselect-dropdown`
- Standardized the release messaging around the `12.0.1` Angular 20 line

### Fixed
- Removed broken or outdated README links before publishing

### See Also
- [GitHub Repository](https://github.com/alexandroit/angular-multiselect-dropdown)
- [NPM Package](https://www.npmjs.com/package/@stackline/angular-multiselect-dropdown)

## [12.0.0] - 2026-04-03

### Added
- Full support for **Angular 20**
- Updated Angular 20 documentation and examples in English
- Refreshed demo build output for the GitHub Pages site

### Changed
- Updated all Angular dependencies to the latest Angular 20 releases
- Upgraded the Angular toolchain to `@angular/cli 20.3.22`
- Upgraded `ng-packagr` to `20.3.2`
- Upgraded TypeScript to `~5.8.0`
- Updated package metadata for the Angular 20 release line

### Fixed
- Fixed the virtual scroll `document.scrollingElement` typing issue for Angular 20 builds
- Regenerated `package-lock.json` from a clean Angular 20 install

### How to Upgrade
```bash
npm install @stackline/angular-multiselect-dropdown@^12.0.0
```

### See Also
- [GitHub Repository](https://github.com/alexandroit/angular-multiselect-dropdown)
- [NPM Package](https://www.npmjs.com/package/@stackline/angular-multiselect-dropdown)

## [11.0.0] - 2026-04-01

### Added
- Full support for **Angular 19**
- Complete TypeScript strict mode support  
- Enhanced Reactive Forms support
- Improved accessibility features
- New examples and documentation

### Changed
- Updated all Angular dependencies to 19.x
- Refactored component internals for better performance
- Improved theme system with SCSS enhancements
- Updated package structure for scoped npm publishing

### Fixed
- Fixed TypeScript compilation warnings
- Improved change detection strategy
- Better handling of large datasets with lazy loading

### Breaking Changes
- Requires Node.js 18+ and npm 9+
- Package name changed from `angular2-multiselect-dropdown` to `@stackline/angular-multiselect-dropdown`

### How to Upgrade
```bash
npm uninstall angular2-multiselect-dropdown
npm install @stackline/angular-multiselect-dropdown@^11.0.0
```

Update your imports:
```typescript
// Before
import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown';

// After
import { AngularMultiSelectModule } from '@stackline/angular-multiselect-dropdown';
```

### Credits
- **Original Author**: Pradeep Terli ([CuppaLabs](https://github.com/CuppaLabs/angular2-multiselect-dropdown))
- **Current Maintainer**: Alexandro Paixao Marques ([Stackline](https://github.com/alexandroit))

### See Also
- [GitHub Repository](https://github.com/alexandroit/angular-multiselect-dropdown)
- [NPM Package](https://www.npmjs.com/package/@stackline/angular-multiselect-dropdown)
