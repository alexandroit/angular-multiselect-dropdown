# NPM Publishing Guide for @stackline/angular-multiselect-dropdown

## Prerequisites

1. **NPM Account**: Create an account at [npmjs.com](https://www.npmjs.com)
2. **2FA Setup**: Enable Two-Factor Authentication (recommended for security)
3. **Credentials**: You need to be logged in to npm in your terminal

## Before Publishing

### 1. Choose the Angular Line
Pick the line you want to release from `docs-src/line-matrix.json`.

Examples:
- Angular 21 line: `21.0.1`
- Angular 20 line: `20.0.0`
- Angular 13 line: `13.0.0`

The repository source stays on the active Angular 21 workspace. Release metadata for older lines is now stamped into `dist/@stackline/angular-multiselect-dropdown/package.json` during the build step so the published package does not inherit Angular 21 peer dependencies by mistake.

### 2. Build the Library for a Specific Line
```bash
# Default: latest line from docs-src/line-matrix.json
npm run build-package

# Specific Angular line
npm run build-package:line -- --line 13
```

This will:
- Compile SASS themes
- Build with ng-packagr
- Generate distribution files in `dist/@stackline/angular-multiselect-dropdown`
- Stamp the target line `version` and Angular `peerDependencies` into the generated `package.json`

### 3. Validate Build Output
```bash
cd dist/@stackline/angular-multiselect-dropdown
npm pack
# This creates a .tgz file without uploading
cd ../..
```

Before publishing, confirm `dist/@stackline/angular-multiselect-dropdown/package.json` matches the target line:
- `version` must equal the line version from `docs-src/line-matrix.json`
- `peerDependencies` must target only that Angular major

## Publishing to NPM

Publish the maintained lines sequentially when doing a full release pass:

1. `2.x.x`
2. `4.x.x`
3. `5.x.x`
4. Continue one line at a time
5. Finish on `21.x.x`

Validate each line before publishing the next one.

### Option 1: Using npm script
```bash
# Publish the latest line
npm run publish-npm

# Publish a specific line
npm run publish-npm:line -- --line 13
```

### Option 2: Manual Publishing
```bash
# Build first
npm run build-package:line -- --line 13

# Navigate to dist folder
cd dist/@stackline/angular-multiselect-dropdown

# Publish
npm publish --access public

# Go back to root
cd ../..
```

## After Publishing

### 1. Verify Publication
```bash
npm view @stackline/angular-multiselect-dropdown
```

### 2. Create GitHub Release
- Go to [GitHub Releases](https://github.com/alexandroit/angular-multiselect-dropdown/releases)
- Create a new release with the version tag
- Add changelog details

### 3. Update Documentation
- Update README with new version info
- Add release notes
- Update examples if needed

## Troubleshooting

### "You must be logged in to publish"
```bash
npm login
# Enter your npm credentials and OTP if needed
```

### "Invalid package name"
Ensure the scoped name `@stackline/angular-multiselect-dropdown` matches exactly in all files.

### "Permission denied"
- Verify you are the package owner
- Check npm access: `npm owner ls @stackline/angular-multiselect-dropdown`

### Build Errors
```bash
# Clean and rebuild
rm -rf dist/
npm run build-package
```

## Configuration

The `.npmrc` file contains:
- Registry URL: `https://registry.npmjs.org/`
- Access level: `public` (allows public installations)
- Scope: `@stackline`

## Version Strategy

This repository follows a line-per-Angular-major strategy:
- **2.x.x** for Angular 2
- **4.x.x** through **13.x.x** for the classic compatibility lines
- **14.x.x** through **21.x.x** for the Material-refined lines

Use patch releases for fixes within a maintained Angular line.

Current tested public release: `@stackline/angular-multiselect-dropdown@2.0.3` for Angular 2.x. It is compatible with Angular `>=2.0.0 <3.0.0` and was tested in Angular `2.4.10`.

Only publish the version that has passed its real framework test app. For the Angular 2 line, publish `2.0.3` only.

## Release Safety

- Never publish an older line by editing only the version number.
- Always use `npm run build-package:line -- --line <major>` or `npm run publish-npm:line -- --line <major>`.
- npm versions are immutable, so any previously published line with wrong `peerDependencies` must be corrected with a new patch release for that same line.

## Angular Version Compatibility

| Package Version | Angular Versions |
|---|---|
| 21.x.x | 21 |
| 20.x.x | 20 |
| 19.x.x | 19 |
| 18.x.x | 18 |
| 17.x.x | 17 |
| 16.x.x | 16 |
| 15.x.x | 15 |
| 14.x.x | 14 |
| 13.x.x | 13 |
| 12.x.x | 12 |
| 11.x.x | 11 |
| 10.x.x | 10 |
| 9.x.x | 9 |
| 8.x.x | 8 |
| 7.x.x | 7 |
| 6.x.x | 6 |
| 5.x.x | 5 |
| 4.x.x | 4 |
| 2.x.x | 2.x, tested on 2.4.10 |

---

**Last Updated**: April 8, 2026  
**Maintainer**: [Alexandro Paixao Marques](https://github.com/alexandroit)

## Family Rule

Every published package family must lock `peerDependencies` to exactly one framework major.
Validate the family against every exact framework release under `docs-src/<family>/<release>/` using `npm install` before publishing.
