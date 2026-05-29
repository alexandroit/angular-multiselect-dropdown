# @stackline/angular-multiselect-dropdown

> A maintained Angular multiselect dropdown for classic Angular forms workflows, with search, grouping, custom item and badge templates, lazy loading, custom CSS/SCSS theming, ADA-compliant keyboard/ARIA support, and support for both template-driven and reactive forms.

[![npm version](https://img.shields.io/npm/v/@stackline/angular-multiselect-dropdown.svg?style=flat-square)](https://www.npmjs.com/package/@stackline/angular-multiselect-dropdown)
[![npm downloads](https://img.shields.io/npm/dt/@stackline/angular-multiselect-dropdown.svg?style=flat-square)](https://www.npmjs.com/package/@stackline/angular-multiselect-dropdown)
[![npm monthly](https://img.shields.io/npm/dm/@stackline/angular-multiselect-dropdown.svg?style=flat-square)](https://www.npmjs.com/package/@stackline/angular-multiselect-dropdown)
[![license](https://img.shields.io/npm/l/@stackline/angular-multiselect-dropdown.svg?style=flat-square)](https://github.com/alexandroit/angular-multiselect-dropdown/blob/master/LICENSE)
[![Angular 21](https://img.shields.io/badge/Angular-21.x-red?style=flat-square&logo=angular)](https://alexandro.net/docs/angular/multiselect/angular-21/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org)
[![GitHub stars](https://img.shields.io/github/stars/alexandroit/angular-multiselect-dropdown.svg?style=flat-square)](https://github.com/alexandroit/angular-multiselect-dropdown/stargazers)

**[Documentation & Live Demos](https://alexandro.net/docs/angular/multiselect/)** | **[Angular 21 Demo](https://alexandro.net/docs/angular/multiselect/angular-21/)** | **[StackBlitz Basic](https://stackblitz.com/fork/github/alexandroit/angular-multiselect-dropdown/tree/32366299b4e6fd3216be0089b016c18feccf06ed/examples/stackblitz/angular-21/basic?startScript=start)** | **[npm](https://www.npmjs.com/package/@stackline/angular-multiselect-dropdown)** | **[Issues](https://github.com/alexandroit/angular-multiselect-dropdown/issues)** | **[Repository](https://github.com/alexandroit/angular-multiselect-dropdown)**

**Latest tested package release:** `21.1.14` for Angular `21.x`

---

> **Credits:** Original upstream copyright is preserved in the license. Current maintenance, Angular line stewardship, publishing, and documentation by [Alexandro Paixao Marques](https://github.com/alexandroit/angular-multiselect-dropdown).

---

## Why this library?

The original `angular2-multiselect-dropdown` package became difficult to keep current across multiple Angular generations. This maintained package keeps the classic API and template structure intact, introduces the new primary selector `<angular-multiselect>`, preserves the legacy alias `<angular2-multiselect>`, and publishes the project line by line so older applications can keep a predictable upgrade path.

The repository contains the full documentation matrix from Angular 2 through Angular 21. The current tested package release is `21.1.14` for Angular 21.x applications.

The Angular 21 package is compatible with Angular 21.x and was tested in a real Angular 21.2.14 application before npm publication. The 21.1.x line adds ADA-compliant keyboard navigation, focus handling, and ARIA support for the dropdown trigger, clear-all action, selected chips, listbox, and lazy-loaded results. The 21.1.14 patch keeps that behavior, fixes responsive dropdown width handling, makes tagToBody/appendToBody use portal-style positioning so dialogs and overflow containers do not clip the open list, and keeps the open menu surface opaque.

## Features

| Feature | Supported |
| :--- | :---: |
| Angular 21 tested published release line | ✅ |
| Multi-select and single-select modes | ✅ |
| Search and filter | ✅ |
| Group by field | ✅ |
| Custom item templates (`<c-item>`) | ✅ |
| Custom badge templates (`<c-badge>`) | ✅ |
| Template-driven forms (`ngModel`) | ✅ |
| Reactive forms (`formControlName`) | ✅ |
| Lazy loading and remote-data hooks | ✅ |
| Theming via bundled CSS/SCSS | ✅ |
| ADA-compliant keyboard navigation, focus states, and ARIA labels | ✅ |
| Primary selector `<angular-multiselect>` | ✅ |
| Legacy compatibility alias `<angular2-multiselect>` | ✅ |
| Versioned docs builds per Angular line | ✅ |

## Table of Contents

1. [Rename Note](#rename-note)
2. [Angular Version Compatibility](#angular-version-compatibility)
3. [StackBlitz Examples](#stackblitz-examples)
4. [Installation](#installation)
5. [Setup](#setup)
6. [Custom CSS and SCSS Themes](#custom-css-and-scss-themes)
7. [Basic Usage](#basic-usage)
8. [Official Angular 21 Test Matrix](#official-angular-21-test-matrix)
9. [Custom Templates](#custom-templates)
10. [Forms Integration](#forms-integration)
11. [Lazy Loading and Remote Data](#lazy-loading-and-remote-data)
12. [Dialogs and Overflow Containers](#dialogs-and-overflow-containers)
13. [Events](#events)
14. [Run Locally](#run-locally)
15. [License](#license)

## Rename Note

- new package: `@stackline/angular-multiselect-dropdown`
- previous package: `@stackline/angular2-multiselect-dropdown`
- primary selector: `<angular-multiselect>`
- legacy alias still accepted only for compatibility: `<angular2-multiselect>`

## Angular Version Compatibility

Each package family only installs on its matching Angular family. Framework major and package major are not always the same package number, so use the package family column below.

Peer ranges are intentionally bounded to the tested Angular major. The Angular 21 line stays on `>=21.0.0 <22.0.0`; Angular 22 will receive its own `22.x` package line after it is built and validated against Angular 22. Do not treat the Angular 21 package as an open-ended `>=21.0.0` dependency.

| Package family | Framework family | Peer range | Tested release window | Demo link |
| :---: | :---: | :---: | :---: | :--- |
| **21.x** | **Angular 21 only** | **`>=21.0.0 <22.0.0`** | **21.1.14 -> 21.2.14** | [Angular 21 family docs](https://alexandro.net/docs/angular/multiselect/angular-21/) |
| **20.x** | **Angular 20 only** | **`>=20.0.0 <21.0.0`** | **20.0.1 -> 20.3.21** | [Angular 20 family docs](https://alexandro.net/docs/angular/multiselect/angular-20/) |
| **19.x** | **Angular 19 only** | **`>=19.0.0 <20.0.0`** | **19.0.1 -> 19.2.22** | [Angular 19 family docs](https://alexandro.net/docs/angular/multiselect/angular-19/) |
| **18.x** | **Angular 18 only** | **`>=18.0.0 <19.0.0`** | **18.0.1 -> 18.2.14** | [Angular 18 family docs](https://alexandro.net/docs/angular/multiselect/angular-18/) |
| **17.x** | **Angular 17 only** | **`>=17.0.0 <18.0.0`** | **17.0.1 -> 17.3.12** | [Angular 17 family docs](https://alexandro.net/docs/angular/multiselect/angular-17/) |
| **16.x** | **Angular 16 only** | **`>=16.0.0 <17.0.0`** | **16.0.1 -> 16.2.12** | [Angular 16 family docs](https://alexandro.net/docs/angular/multiselect/angular-16/) |
| **15.x** | **Angular 15 only** | **`>=15.0.0 <16.0.0`** | **15.0.1 -> 15.2.10** | [Angular 15 family docs](https://alexandro.net/docs/angular/multiselect/angular-15/) |
| **14.x** | **Angular 14 only** | **`>=14.0.0 <15.0.0`** | **14.0.1 -> 14.3.0** | [Angular 14 family docs](https://alexandro.net/docs/angular/multiselect/angular-14/) |
| **13.x** | **Angular 13 only** | **`>=13.0.0 <14.0.0`** | **13.0.1 -> 13.4.0** | [Angular 13 family docs](https://alexandro.net/docs/angular/multiselect/angular-13/) |
| **12.x** | **Angular 12 only** | **`>=12.0.0 <13.0.0`** | **12.0.1 -> 12.2.17** | [Angular 12 family docs](https://alexandro.net/docs/angular/multiselect/angular-12/) |
| **11.x** | **Angular 11 only** | **`>=11.0.0 <12.0.0`** | **11.0.1 -> 11.2.14** | [Angular 11 family docs](https://alexandro.net/docs/angular/multiselect/angular-11/) |
| **10.x** | **Angular 10 only** | **`>=10.0.0 <11.0.0`** | **10.0.1 -> 10.2.5** | [Angular 10 family docs](https://alexandro.net/docs/angular/multiselect/angular-10/) |
| **9.x** | **Angular 9 only** | **`>=9.0.0 <10.0.0`** | **9.0.1 -> 9.1.13** | [Angular 9 family docs](https://alexandro.net/docs/angular/multiselect/angular-9/) |
| **8.x** | **Angular 8 only** | **`>=8.0.0 <9.0.0`** | **8.0.1 -> 8.2.14** | [Angular 8 family docs](https://alexandro.net/docs/angular/multiselect/angular-8/) |
| **7.x** | **Angular 7 only** | **`>=7.0.0 <8.0.0`** | **7.0.1 -> 7.2.16** | [Angular 7 family docs](https://alexandro.net/docs/angular/multiselect/angular-7/) |
| **6.x** | **Angular 6 only** | **`>=6.0.0 <7.0.0`** | **6.0.1 -> 6.1.10** | [Angular 6 family docs](https://alexandro.net/docs/angular/multiselect/angular-6/) |
| **5.x** | **Angular 5 only** | **`>=5.0.0 <6.0.0`** | **5.0.1 -> 5.2.11** | [Angular 5 family docs](https://alexandro.net/docs/angular/multiselect/angular-5/) |
| **4.x** | **Angular 4 only** | **`>=4.0.0 <5.0.0`** | **4.0.2 -> 4.4.7** | [Angular 4 family docs](https://alexandro.net/docs/angular/multiselect/angular-4/) |
| **2.x** | **Angular 2 only** | **`>=2.0.0 <3.0.0`** | **compatible with 2.x; tested on 2.4.10** | [Angular 2 family docs](https://alexandro.net/docs/angular/multiselect/angular-2/) |

## StackBlitz Examples

The repository keeps official StackBlitz starters under `examples/stackblitz`, with one standalone Angular project per folder.

| Example | StackBlitz |
| :--- | :--- |
| Angular 21 basic skin switcher | [Open in StackBlitz](https://stackblitz.com/fork/github/alexandroit/angular-multiselect-dropdown/tree/32366299b4e6fd3216be0089b016c18feccf06ed/examples/stackblitz/angular-21/basic?startScript=start) |
| Angular 21 single selection | [Open in StackBlitz](https://stackblitz.com/fork/github/alexandroit/angular-multiselect-dropdown/tree/32366299b4e6fd3216be0089b016c18feccf06ed/examples/stackblitz/angular-21/single-selection?startScript=start) |
| Angular 21 search filter | [Open in StackBlitz](https://stackblitz.com/fork/github/alexandroit/angular-multiselect-dropdown/tree/32366299b4e6fd3216be0089b016c18feccf06ed/examples/stackblitz/angular-21/search-filter?startScript=start) |
| Angular 21 custom search API | [Open in StackBlitz](https://stackblitz.com/fork/github/alexandroit/angular-multiselect-dropdown/tree/32366299b4e6fd3216be0089b016c18feccf06ed/examples/stackblitz/angular-21/custom-search-api?startScript=start) |
| Angular 21 search by property | [Open in StackBlitz](https://stackblitz.com/fork/github/alexandroit/angular-multiselect-dropdown/tree/32366299b4e6fd3216be0089b016c18feccf06ed/examples/stackblitz/angular-21/search-filter-by-property?startScript=start) |
| Angular 21 search and add item | [Open in StackBlitz](https://stackblitz.com/fork/github/alexandroit/angular-multiselect-dropdown/tree/32366299b4e6fd3216be0089b016c18feccf06ed/examples/stackblitz/angular-21/search-add-new-item?startScript=start) |
| Angular 21 group by | [Open in StackBlitz](https://stackblitz.com/fork/github/alexandroit/angular-multiselect-dropdown/tree/32366299b4e6fd3216be0089b016c18feccf06ed/examples/stackblitz/angular-21/group-by?startScript=start) |
| Angular 21 templating | [Open in StackBlitz](https://stackblitz.com/fork/github/alexandroit/angular-multiselect-dropdown/tree/32366299b4e6fd3216be0089b016c18feccf06ed/examples/stackblitz/angular-21/templating?startScript=start) |
| Angular 21 template-driven forms | [Open in StackBlitz](https://stackblitz.com/fork/github/alexandroit/angular-multiselect-dropdown/tree/32366299b4e6fd3216be0089b016c18feccf06ed/examples/stackblitz/angular-21/template-driven-forms?startScript=start) |
| Angular 21 reactive forms | [Open in StackBlitz](https://stackblitz.com/fork/github/alexandroit/angular-multiselect-dropdown/tree/32366299b4e6fd3216be0089b016c18feccf06ed/examples/stackblitz/angular-21/reactive-forms?startScript=start) |
| Angular 21 virtual scrolling | [Open in StackBlitz](https://stackblitz.com/fork/github/alexandroit/angular-multiselect-dropdown/tree/32366299b4e6fd3216be0089b016c18feccf06ed/examples/stackblitz/angular-21/virtual-scrolling?startScript=start) |
| Angular 21 lazy loading API | [Open in StackBlitz](https://stackblitz.com/fork/github/alexandroit/angular-multiselect-dropdown/tree/32366299b4e6fd3216be0089b016c18feccf06ed/examples/stackblitz/angular-21/lazy-loading-api?startScript=start) |
| Angular 21 remote data | [Open in StackBlitz](https://stackblitz.com/fork/github/alexandroit/angular-multiselect-dropdown/tree/32366299b4e6fd3216be0089b016c18feccf06ed/examples/stackblitz/angular-21/remote-data?startScript=start) |
| Angular 21 list loop | [Open in StackBlitz](https://stackblitz.com/fork/github/alexandroit/angular-multiselect-dropdown/tree/32366299b4e6fd3216be0089b016c18feccf06ed/examples/stackblitz/angular-21/list-loop?startScript=start) |
| Angular 21 dialog overlay | [Open in StackBlitz](https://stackblitz.com/fork/github/alexandroit/angular-multiselect-dropdown/tree/32366299b4e6fd3216be0089b016c18feccf06ed/examples/stackblitz/angular-21/dialog?startScript=start) |
| Angular 21 multiple dropdowns | [Open in StackBlitz](https://stackblitz.com/fork/github/alexandroit/angular-multiselect-dropdown/tree/32366299b4e6fd3216be0089b016c18feccf06ed/examples/stackblitz/angular-21/multiple-dropdowns?startScript=start) |
| Angular 21 dynamic data | [Open in StackBlitz](https://stackblitz.com/fork/github/alexandroit/angular-multiselect-dropdown/tree/32366299b4e6fd3216be0089b016c18feccf06ed/examples/stackblitz/angular-21/dynamic-data?startScript=start) |
| Angular 21 methods | [Open in StackBlitz](https://stackblitz.com/fork/github/alexandroit/angular-multiselect-dropdown/tree/32366299b4e6fd3216be0089b016c18feccf06ed/examples/stackblitz/angular-21/methods?startScript=start) |
| Angular 21 events | [Open in StackBlitz](https://stackblitz.com/fork/github/alexandroit/angular-multiselect-dropdown/tree/32366299b4e6fd3216be0089b016c18feccf06ed/examples/stackblitz/angular-21/events?startScript=start) |
| Angular 21 disabled state | [Open in StackBlitz](https://stackblitz.com/fork/github/alexandroit/angular-multiselect-dropdown/tree/32366299b4e6fd3216be0089b016c18feccf06ed/examples/stackblitz/angular-21/disabled?startScript=start) |
| Angular 21 limit selection | [Open in StackBlitz](https://stackblitz.com/fork/github/alexandroit/angular-multiselect-dropdown/tree/32366299b4e6fd3216be0089b016c18feccf06ed/examples/stackblitz/angular-21/limit-selection?startScript=start) |
| Angular 21 limit badges | [Open in StackBlitz](https://stackblitz.com/fork/github/alexandroit/angular-multiselect-dropdown/tree/32366299b4e6fd3216be0089b016c18feccf06ed/examples/stackblitz/angular-21/limit-badges?startScript=start) |
| Angular 21 custom placeholder | [Open in StackBlitz](https://stackblitz.com/fork/github/alexandroit/angular-multiselect-dropdown/tree/32366299b4e6fd3216be0089b016c18feccf06ed/examples/stackblitz/angular-21/custom-placeholder?startScript=start) |
| Angular 21 CSS styling | [Open in StackBlitz](https://stackblitz.com/fork/github/alexandroit/angular-multiselect-dropdown/tree/32366299b4e6fd3216be0089b016c18feccf06ed/examples/stackblitz/angular-21/styling?startScript=start) |

## Installation

```bash
npm install @stackline/angular-multiselect-dropdown@21.1.14 --save-exact
```

Install `21.1.14` for Angular 21.x applications. This line keeps the tested Angular 21 behavior, makes `<angular-multiselect>` the documented standard selector, keeps `<angular2-multiselect>` only as a legacy compatibility alias, adds the ADA-compliant keyboard/ARIA accessibility patch, fixes responsive dropdown width handling, and keeps dropdown surfaces opaque in clipped containers.

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
  { id: 1, itemName: 'Brazil' },
  { id: 2, itemName: 'Canada' },
  { id: 3, itemName: 'Portugal' },
  { id: 4, itemName: 'United States' },
  { id: 5, itemName: 'Argentina' },
  { id: 6, itemName: 'Germany' },
  { id: 7, itemName: 'Japan' },
  { id: 8, itemName: 'South Africa' }
];

selectedItems = [{ id: 2, itemName: 'Canada' }];

dropdownSettings = {
  singleSelection: false,
  text: 'Classic basic',
  selectAllText: 'Select all',
  unSelectAllText: 'Clear all',
  enableSearchFilter: true,
  searchPlaceholderText: 'Search',
  badgeShowLimit: 4,
  maxHeight: 260,
  showCheckbox: true,
  noDataLabel: 'No data',
  skin: 'classic',
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

## Official Angular 21 Test Matrix

The published Angular 21 release was tested in a real Angular `21.2.14` application with `@stackline/angular-multiselect-dropdown@21.1.14`. The docs now use the same examples from that test app, including the ADA-compliant keyboard, focus, ARIA behavior, responsive dropdown width handling, opaque menu surfaces, and dialog-safe positioning added in this release line.

Switch between skins through the settings object:

```ts
settings = {
  text: 'Classic basic',
  skin: 'classic'
};

materialSettings = {
  text: 'Material basic',
  skin: 'material'
};
```

`settings.theme` is still accepted as a legacy alias for older code, but new Angular usage should configure only `settings.skin`.

The same twelve scenarios are validated for both `classic` and `material`:

| # | Scenario | Main settings tested |
| :---: | :--- | :--- |
| 01 | Basic multi | `{ enableSearchFilter: false }` |
| 02 | Search + select all | Search, select all, clear all, events |
| 03 | Single without checkbox | `{ singleSelection: true, showCheckbox: false, enableCheckAll: false }` |
| 04 | Multi without checkbox | `{ showCheckbox: false, enableCheckAll: false }` |
| 05 | Selection limit | `{ limitSelection: 2, badgeShowLimit: 2 }` |
| 06 | Badge overflow | `{ badgeShowLimit: 2, maxHeight: 220 }` |
| 07 | Grouped by region | `{ groupBy: 'region', maxHeight: 220 }` |
| 08 | Disabled with value | `{ disabled: true }` |
| 09 | Empty data | `{ noDataLabel: 'No records found' }` |
| 10 | Long list with scroll | `{ maxHeight: 120, badgeShowLimit: 3 }` |
| 11 | Local lazy loading | `{ lazyLoading: true, maxHeight: 120, badgeShowLimit: 3 }` |
| 12 | Item + chip template | `<c-badge>` and `<c-item>` custom templates |

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

`<angular2-multiselect>` remains available only as a legacy compatibility alias for applications migrating from the old outdated plugin. New code and all current examples should use `<angular-multiselect>`.

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

## Dialogs and Overflow Containers

Use `tagToBody: true` when the dropdown is inside Angular Material dialogs, modals, drawers, or containers that set `overflow: hidden` or `overflow: auto`.

```ts
settings = {
  text: 'Select countries',
  enableSearchFilter: true,
  skin: 'material',
  tagToBody: true
};
```

In `21.1.14`, `tagToBody: true` renders the open panel outside clipping containers, keeps it aligned to the original trigger, keeps the menu surface opaque, recalculates position on scroll and resize, and cleans it up on close or destroy. `appendToBody: true` is also accepted as an alias for teams that prefer that name.

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
```

## License

MIT
