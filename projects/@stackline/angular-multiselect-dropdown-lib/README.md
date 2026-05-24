# @stackline/angular-multiselect-dropdown

> A maintained Angular multiselect dropdown for classic Angular forms workflows, with search, grouping, custom item and badge templates, lazy loading, custom CSS/SCSS theming, and support for both template-driven and reactive forms.

[![npm version](https://img.shields.io/npm/v/@stackline/angular-multiselect-dropdown.svg?style=flat-square)](https://www.npmjs.com/package/@stackline/angular-multiselect-dropdown)
[![npm downloads](https://img.shields.io/npm/dt/@stackline/angular-multiselect-dropdown.svg?style=flat-square)](https://www.npmjs.com/package/@stackline/angular-multiselect-dropdown)
[![npm monthly](https://img.shields.io/npm/dm/@stackline/angular-multiselect-dropdown.svg?style=flat-square)](https://www.npmjs.com/package/@stackline/angular-multiselect-dropdown)
[![license](https://img.shields.io/npm/l/@stackline/angular-multiselect-dropdown.svg?style=flat-square)](https://github.com/alexandroit/angular-multiselect-dropdown/blob/master/LICENSE)
[![Angular 2](https://img.shields.io/badge/Angular-2.x-red?style=flat-square&logo=angular)](https://alexandro.net/docs/angular/multiselect/angular-2/)
[![TypeScript](https://img.shields.io/badge/TypeScript-2.4-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org)
[![GitHub stars](https://img.shields.io/github/stars/alexandroit/angular-multiselect-dropdown.svg?style=flat-square)](https://github.com/alexandroit/angular-multiselect-dropdown/stargazers)

**[Documentation & Live Demos](https://alexandro.net/docs/angular/multiselect/)** | **[Angular 2 Demo](https://alexandro.net/docs/angular/multiselect/angular-2/)** | **[npm](https://www.npmjs.com/package/@stackline/angular-multiselect-dropdown)** | **[Issues](https://github.com/alexandroit/angular-multiselect-dropdown/issues)** | **[Repository](https://github.com/alexandroit/angular-multiselect-dropdown)**

**Latest tested npm release:** `2.0.4` for Angular `2.x`

---

> **Credits:** Original upstream copyright is preserved in the license. Current maintenance, Angular line stewardship, publishing, and documentation by [Alexandro Paixao Marques](https://github.com/alexandroit/angular-multiselect-dropdown).

---

## Why this library?

The original `angular2-multiselect-dropdown` package became difficult to keep current across multiple Angular generations. This maintained package keeps the classic API and template structure intact, introduces the new primary selector `<angular-multiselect>`, preserves the legacy alias `<angular2-multiselect>`, and publishes the project line by line so older applications can keep a predictable upgrade path.

The repository contains the full documentation matrix from Angular 2 through Angular 21. The current public npm release is `2.0.4` for Angular 2.x applications.

The Angular 2 package is compatible with Angular 2.x and was tested in a real Angular 2.4.10 application before publication.

## Features

| Feature | Supported |
| :--- | :---: |
| Angular 2 tested published release line | ✅ |
| Multi-select and single-select modes | ✅ |
| Search and filter | ✅ |
| Group by field | ✅ |
| Custom item templates (`<c-item>`) | ✅ |
| Custom badge templates (`<c-badge>`) | ✅ |
| Template-driven forms (`ngModel`) | ✅ |
| Reactive forms (`formControlName`) | ✅ |
| Lazy loading and remote-data hooks | ✅ |
| Theming via bundled CSS/SCSS | ✅ |
| Primary selector `<angular-multiselect>` | ✅ |
| Legacy selector `<angular2-multiselect>` | ✅ |
| Versioned docs builds per Angular line | ✅ |

## Table of Contents

1. [Rename Note](#rename-note)
2. [Angular Version Compatibility](#angular-version-compatibility)
3. [Installation](#installation)
4. [Setup](#setup)
5. [Custom CSS and SCSS Themes](#custom-css-and-scss-themes)
6. [Basic Usage](#basic-usage)
7. [Custom Templates](#custom-templates)
8. [Forms Integration](#forms-integration)
9. [Lazy Loading and Remote Data](#lazy-loading-and-remote-data)
10. [Events](#events)
11. [Run Locally](#run-locally)
12. [License](#license)

## Rename Note

- new package: `@stackline/angular-multiselect-dropdown`
- previous package: `@stackline/angular2-multiselect-dropdown`
- primary selector: `<angular-multiselect>`
- legacy alias still accepted: `<angular2-multiselect>`

## Angular Version Compatibility

Each package family only installs on its matching Angular family. Framework major and package major are not always the same package number, so use the package family column below.

| Package family | Framework family | Peer range | Tested release window | Demo link |
| :---: | :---: | :---: | :---: | :--- |
| **21.x** | **Angular 21 only** | **`>=21.0.0 <22.0.0`** | **21.0.0 -> 21.2.8** | [Angular 21 family docs](https://alexandro.net/docs/angular/multiselect/angular-21/) |
| **20.x** | **Angular 20 only** | **`>=20.0.0 <21.0.0`** | **20.0.0 -> 20.3.18** | [Angular 20 family docs](https://alexandro.net/docs/angular/multiselect/angular-20/) |
| **19.x** | **Angular 19 only** | **`>=19.0.0 <20.0.0`** | **19.0.0 -> 19.2.20** | [Angular 19 family docs](https://alexandro.net/docs/angular/multiselect/angular-19/) |
| **18.x** | **Angular 18 only** | **`>=18.0.0 <19.0.0`** | **18.0.0 -> 18.2.14** | [Angular 18 family docs](https://alexandro.net/docs/angular/multiselect/angular-18/) |
| **17.x** | **Angular 17 only** | **`>=17.0.0 <18.0.0`** | **17.0.0 -> 17.3.12** | [Angular 17 family docs](https://alexandro.net/docs/angular/multiselect/angular-17/) |
| **16.x** | **Angular 16 only** | **`>=16.0.0 <17.0.0`** | **16.0.0 -> 16.2.12** | [Angular 16 family docs](https://alexandro.net/docs/angular/multiselect/angular-16/) |
| **15.x** | **Angular 15 only** | **`>=15.0.0 <16.0.0`** | **15.0.0 -> 15.2.10** | [Angular 15 family docs](https://alexandro.net/docs/angular/multiselect/angular-15/) |
| **14.x** | **Angular 14 only** | **`>=14.0.0 <15.0.0`** | **14.0.0 -> 14.3.0** | [Angular 14 family docs](https://alexandro.net/docs/angular/multiselect/angular-14/) |
| **13.x** | **Angular 13 only** | **`>=13.0.0 <14.0.0`** | **13.0.0 -> 13.4.0** | [Angular 13 family docs](https://alexandro.net/docs/angular/multiselect/angular-13/) |
| **12.x** | **Angular 12 only** | **`>=12.0.0 <13.0.0`** | **12.0.0 -> 12.2.17** | [Angular 12 family docs](https://alexandro.net/docs/angular/multiselect/angular-12/) |
| **11.x** | **Angular 11 only** | **`>=11.0.0 <12.0.0`** | **11.0.0 -> 11.2.14** | [Angular 11 family docs](https://alexandro.net/docs/angular/multiselect/angular-11/) |
| **10.x** | **Angular 10 only** | **`>=10.0.0 <11.0.0`** | **10.0.0 -> 10.2.5** | [Angular 10 family docs](https://alexandro.net/docs/angular/multiselect/angular-10/) |
| **9.x** | **Angular 9 only** | **`>=9.0.0 <10.0.0`** | **9.0.0 -> 9.1.13** | [Angular 9 family docs](https://alexandro.net/docs/angular/multiselect/angular-9/) |
| **8.x** | **Angular 8 only** | **`>=8.0.0 <9.0.0`** | **8.0.0 -> 8.2.14** | [Angular 8 family docs](https://alexandro.net/docs/angular/multiselect/angular-8/) |
| **7.x** | **Angular 7 only** | **`>=7.0.0 <8.0.0`** | **7.0.0 -> 7.2.16** | [Angular 7 family docs](https://alexandro.net/docs/angular/multiselect/angular-7/) |
| **6.x** | **Angular 6 only** | **`>=6.0.0 <7.0.0`** | **6.0.0 -> 6.1.10** | [Angular 6 family docs](https://alexandro.net/docs/angular/multiselect/angular-6/) |
| **5.x** | **Angular 5 only** | **`>=5.0.0 <6.0.0`** | **5.0.0 -> 5.2.11** | [Angular 5 family docs](https://alexandro.net/docs/angular/multiselect/angular-5/) |
| **4.x** | **Angular 4 only** | **`>=4.0.0 <5.0.0`** | **4.0.0 -> 4.4.7** | [Angular 4 family docs](https://alexandro.net/docs/angular/multiselect/angular-4/) |
| **2.x** | **Angular 2 only** | **`>=2.0.0 <3.0.0`** | **compatible with 2.x; tested on 2.4.10** | [Angular 2 family docs](https://alexandro.net/docs/angular/multiselect/angular-2/) |


## Installation

```bash
npm install @stackline/angular-multiselect-dropdown@2.0.4
```

Install `2.0.4` for Angular 2.x applications. This patch keeps the tested Angular 2 behavior and updates the published README, package metadata, and documentation links.

## Setup

### 1. Import the module

```ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AngularMultiSelectModule } from '@stackline/angular-multiselect-dropdown';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AngularMultiSelectModule
  ]
})
export class AppModule {}
```

### 2. Add the default theme

```json
"styles": [
  "node_modules/@stackline/angular-multiselect-dropdown/themes/default.theme.css"
]
```

## Custom CSS and SCSS Themes

The package also ships a full custom starter theme in both formats:

- `node_modules/@stackline/angular-multiselect-dropdown/themes/custom.theme.scss`
- `node_modules/@stackline/angular-multiselect-dropdown/themes/custom.theme.css`

Use the `scss` file when you want to take over the component styles completely and keep the theme in your app source:

```json
"styles": [
  "src/styles.scss",
  "src/styles/multiselect-dropdown.theme.scss"
]
```

Start `src/styles/multiselect-dropdown.theme.scss` from the package file above and edit the selectors and tokens freely.

Use the `css` file when you want a plain compiled starter that can be copied and adjusted without a Sass pipeline.

## Basic Usage

```ts
dropdownList = [
  { id: 1, itemName: 'India' },
  { id: 2, itemName: 'Singapore' },
  { id: 3, itemName: 'Australia' },
  { id: 4, itemName: 'Canada' }
];

selectedItems = [{ id: 2, itemName: 'Singapore' }];

dropdownSettings = {
  singleSelection: false,
  text: 'Select Countries',
  selectAllText: 'Select All',
  unSelectAllText: 'UnSelect All',
  enableSearchFilter: true,
  tagToBody: false
};
```

```html
<angular-multiselect
  [data]="dropdownList"
  [(ngModel)]="selectedItems"
  [settings]="dropdownSettings"
  (onSelect)="onItemSelect($event)"
  (onDeSelect)="onItemDeSelect($event)"
  (onSelectAll)="onSelectAll($event)"
  (onDeSelectAll)="onDeSelectAll($event)">
</angular-multiselect>
```

## Custom Templates

```html
<angular-multiselect
  [data]="dropdownList"
  [(ngModel)]="selectedItems"
  [settings]="dropdownSettings">
  <c-item>
    <ng-template let-item="item">
      <label>{{ item.itemName }}</label>
      <img [src]="item.image" style="width: 24px; margin-left: 8px;" />
    </ng-template>
  </c-item>
</angular-multiselect>
```

The same template contract also works with the legacy selector:

```html
<angular2-multiselect></angular2-multiselect>
```

## Forms Integration

### Template-driven forms

```html
<form #form="ngForm">
  <angular-multiselect
    [data]="skills"
    [(ngModel)]="selectedSkills"
    [settings]="settings"
    name="skills"
    required>
  </angular-multiselect>
</form>
```

### Reactive forms

```html
<form [formGroup]="userForm">
  <angular-multiselect
    [data]="skills"
    [settings]="settings"
    formControlName="skills">
  </angular-multiselect>
</form>
```

## Lazy Loading and Remote Data

Enable lazy loading through the settings object and respond to the scroll event from your container logic:

```ts
settings = {
  text: 'Select Items',
  enableSearchFilter: true,
  lazyLoading: true,
  labelKey: 'name',
  primaryKey: 'id'
};
```

The versioned docs include working examples for lazy loading, remote data, grouping, templating, and forms usage.

For sticky cards, constrained containers, or dashboard layouts, keep `tagToBody: false` so the dropdown panel stays anchored to the field and does not jump across the page.

## Events

The classic output contract is preserved:

- `(onSelect)`
- `(onDeSelect)`
- `(onSelectAll)`
- `(onDeSelectAll)`
- `(onAddFilterNewItem)`

## Run Locally

```bash
npm install
npm run docs:sync
npm run build-package
cd docs-src/angular-21
npm install --ignore-scripts
npm run build
```

## License

MIT
