import { Component } from '@angular/core';

@Component({
  selector: 'stackline-test',
  template: `
    <main class="page">
      <header class="topbar">
        <p class="eyebrow">Angular {{ angularVersion }} runtime</p>
        <h1>@stackline/angular-multiselect-dropdown {{ packageVersion }}</h1>
      </header>

      <section class="skin-section skin-switcher-section">
        <div class="section-heading">
          <p class="eyebrow">Settings-only theme switch</p>
          <h2>Skin switcher</h2>
        </div>

        <div class="theme-buttons">
          <button *ngFor="let theme of availableThemes" type="button" [class.active]="skinSwitchTheme == theme" (click)="switchTheme(theme)">{{ themeLabel(theme) }}</button>
        </div>

        <article class="example-row custom-skin-sample">
          <div class="demo-cell">
            <h3>Updates only settings.theme / settings.skin</h3>
            <angular-multiselect [data]="skinSwitchCase.data" [(ngModel)]="skinSwitchCase.model" [settings]="skinSwitchCase.settings" (onSelect)="record('skin switch select', $event)" (onDeSelect)="record('skin switch deselect', $event)"></angular-multiselect>
            <p class="settings-preview">theme: {{ skinSwitchSettings.theme }} | skin: {{ skinSwitchSettings.skin }}</p>
          </div>
          <div class="code-cell">
            <div class="code-grid">
              <div class="code-card">
                <strong>HTML</strong>
                <pre>{{ htmlCode(skinSwitchCase) }}</pre>
              </div>
              <div class="code-card">
                <strong>TS</strong>
                <pre>{{ tsCode(skinSwitchCase) }}</pre>
              </div>
              <div class="code-card">
                <strong>JSON</strong>
                <pre>{{ jsonCode(skinSwitchCase) }}</pre>
              </div>
            </div>
          </div>
        </article>
      </section>

      <section class="skin-section">
        <div class="section-heading">
          <p class="eyebrow">Skin</p>
          <h2>Classic</h2>
        </div>

        <div class="case-list">
          <article class="example-row" *ngFor="let test of classicCases">
            <div class="demo-cell">
              <h3>{{ test.number }}. {{ test.title }}</h3>
              <angular-multiselect *ngIf="!test.template" [data]="test.data" [(ngModel)]="test.model" [settings]="test.settings" (onSelect)="record(test.eventPrefix + ' select', $event)" (onDeSelect)="record(test.eventPrefix + ' deselect', $event)" (onSelectAll)="record(test.eventPrefix + ' selectAll', $event)" (onDeSelectAll)="record(test.eventPrefix + ' deselectAll', $event)"></angular-multiselect>
              <angular-multiselect *ngIf="test.template" [data]="test.data" [(ngModel)]="test.model" [settings]="test.settings" (onSelect)="record(test.eventPrefix + ' select', $event)" (onDeSelect)="record(test.eventPrefix + ' deselect', $event)">
                <c-badge>
                  <ng-template let-item="item">
                    <span class="swatch-chip"><span class="swatch" [style.background]="item.color"></span>{{ item.itemName }}</span>
                  </ng-template>
                </c-badge>
                <c-item>
                  <ng-template let-item="item">
                    <span class="option-row">
                      <span class="swatch" [style.background]="item.color"></span>
                      <span><strong>{{ item.itemName }}</strong><small>{{ item.detail }}</small></span>
                    </span>
                  </ng-template>
                </c-item>
              </angular-multiselect>
            </div>
            <div class="code-cell">
              <div class="code-grid">
                <div class="code-card">
                  <strong>HTML</strong>
                  <pre>{{ htmlCode(test) }}</pre>
                </div>
                <div class="code-card">
                  <strong>TS</strong>
                  <pre>{{ tsCode(test) }}</pre>
                </div>
                <div class="code-card">
                  <strong>JSON</strong>
                  <pre>{{ jsonCode(test) }}</pre>
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>

      <section class="skin-section material-section">
        <div class="section-heading">
          <p class="eyebrow">Skin</p>
          <h2>Material</h2>
        </div>

        <div class="case-list">
          <article class="example-row" *ngFor="let test of materialCases">
            <div class="demo-cell">
              <h3>{{ test.number }}. {{ test.title }}</h3>
              <angular-multiselect *ngIf="!test.template" [data]="test.data" [(ngModel)]="test.model" [settings]="test.settings" (onSelect)="record(test.eventPrefix + ' select', $event)" (onDeSelect)="record(test.eventPrefix + ' deselect', $event)" (onSelectAll)="record(test.eventPrefix + ' selectAll', $event)" (onDeSelectAll)="record(test.eventPrefix + ' deselectAll', $event)"></angular-multiselect>
              <angular-multiselect *ngIf="test.template" [data]="test.data" [(ngModel)]="test.model" [settings]="test.settings" (onSelect)="record(test.eventPrefix + ' select', $event)" (onDeSelect)="record(test.eventPrefix + ' deselect', $event)">
                <c-badge>
                  <ng-template let-item="item">
                    <span class="swatch-chip"><span class="swatch" [style.background]="item.color"></span>{{ item.itemName }}</span>
                  </ng-template>
                </c-badge>
                <c-item>
                  <ng-template let-item="item">
                    <span class="option-row">
                      <span class="swatch" [style.background]="item.color"></span>
                      <span><strong>{{ item.itemName }}</strong><small>{{ item.detail }}</small></span>
                    </span>
                  </ng-template>
                </c-item>
              </angular-multiselect>
            </div>
            <div class="code-cell">
              <div class="code-grid">
                <div class="code-card">
                  <strong>HTML</strong>
                  <pre>{{ htmlCode(test) }}</pre>
                </div>
                <div class="code-card">
                  <strong>TS</strong>
                  <pre>{{ tsCode(test) }}</pre>
                </div>
                <div class="code-card">
                  <strong>JSON</strong>
                  <pre>{{ jsonCode(test) }}</pre>
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>

      <section class="activity">
        <h2>Event log</h2>
        <p *ngFor="let event of events">{{ event }}</p>
      </section>
    </main>
  `
})
export class AppComponent {
  angularVersion = '4.4.7';
  packageVersion = '4.0.1';

  countries = [
    { id: 1, itemName: 'Brazil' },
    { id: 2, itemName: 'Canada' },
    { id: 3, itemName: 'Portugal' },
    { id: 4, itemName: 'United States' },
    { id: 5, itemName: 'Argentina' },
    { id: 6, itemName: 'Germany' },
    { id: 7, itemName: 'Japan' },
    { id: 8, itemName: 'South Africa' }
  ];

  longCountries = [
    { id: 11, itemName: 'Federative Republic of Brazil' },
    { id: 12, itemName: 'United States of America' },
    { id: 13, itemName: 'United Kingdom of Great Britain and Northern Ireland' },
    { id: 14, itemName: 'Portuguese Republic' },
    { id: 15, itemName: 'Canada' },
    { id: 16, itemName: 'Argentina' }
  ];

  groupedCountries = [
    { id: 21, itemName: 'Brazil', region: 'Americas' },
    { id: 22, itemName: 'Canada', region: 'Americas' },
    { id: 23, itemName: 'Portugal', region: 'Europe' },
    { id: 24, itemName: 'Germany', region: 'Europe' },
    { id: 25, itemName: 'Japan', region: 'Asia' },
    { id: 26, itemName: 'South Korea', region: 'Asia' }
  ];

  templateItems = [
    { id: 31, itemName: 'Primary', detail: 'Main interface color', color: '#3f51b5' },
    { id: 32, itemName: 'Success', detail: 'Positive feedback state', color: '#2e7d32' },
    { id: 33, itemName: 'Warning', detail: 'Attention state', color: '#ed6c02' },
    { id: 34, itemName: 'Danger', detail: 'Destructive state', color: '#d32f2f' },
    { id: 35, itemName: 'Neutral', detail: 'Text and surface color', color: '#475569' }
  ];

  largeList = this.buildLargeList();
  emptyItems = [];

  classicBasic = [{ id: 2, itemName: 'Canada' }];
  classicSearch = [{ id: 4, itemName: 'United States' }];
  classicSingle = [{ id: 1, itemName: 'Brazil' }];
  classicNoCheckbox = [{ id: 3, itemName: 'Portugal' }, { id: 6, itemName: 'Germany' }];
  classicLimit = [
    { id: 11, itemName: 'Federative Republic of Brazil' },
    { id: 12, itemName: 'United States of America' }
  ];
  classicBadge = [
    { id: 11, itemName: 'Federative Republic of Brazil' },
    { id: 12, itemName: 'United States of America' },
    { id: 13, itemName: 'United Kingdom of Great Britain and Northern Ireland' },
    { id: 14, itemName: 'Portuguese Republic' }
  ];
  classicGrouped = [{ id: 21, itemName: 'Brazil', region: 'Americas' }];
  classicDisabled = [{ id: 6, itemName: 'Germany' }];
  classicEmpty = [];
  classicScroll = [{ id: 104, itemName: 'Item 04' }];
  classicLazy = [{ id: 106, itemName: 'Item 06' }];
  classicTemplate = [
    { id: 31, itemName: 'Primary', detail: 'Main interface color', color: '#3f51b5' },
    { id: 33, itemName: 'Warning', detail: 'Attention state', color: '#ed6c02' }
  ];

  materialBasic = [{ id: 2, itemName: 'Canada' }];
  materialSearch = [{ id: 4, itemName: 'United States' }];
  materialSingle = [{ id: 3, itemName: 'Portugal' }];
  materialNoCheckbox = [{ id: 5, itemName: 'Argentina' }, { id: 7, itemName: 'Japan' }];
  materialLimit = [
    { id: 11, itemName: 'Federative Republic of Brazil' },
    { id: 12, itemName: 'United States of America' }
  ];
  materialBadge = [
    { id: 11, itemName: 'Federative Republic of Brazil' },
    { id: 12, itemName: 'United States of America' },
    { id: 13, itemName: 'United Kingdom of Great Britain and Northern Ireland' },
    { id: 14, itemName: 'Portuguese Republic' }
  ];
  materialGrouped = [{ id: 23, itemName: 'Portugal', region: 'Europe' }];
  materialDisabled = [{ id: 8, itemName: 'South Africa' }];
  materialEmpty = [];
  materialScroll = [{ id: 105, itemName: 'Item 05' }];
  materialLazy = [{ id: 107, itemName: 'Item 07' }];
  materialTemplate = [
    { id: 32, itemName: 'Success', detail: 'Positive feedback state', color: '#2e7d32' },
    { id: 34, itemName: 'Danger', detail: 'Destructive state', color: '#d32f2f' }
  ];

  availableThemes = ['classic', 'material', 'dark', 'custom', 'brand'];
  skinSwitchTheme = 'classic';
  skinSwitchSelected = [
    { id: 2, itemName: 'Canada' },
    { id: 3, itemName: 'Portugal' },
    { id: 4, itemName: 'United States' }
  ];

  skinSwitchSettings = this.makeSettings('classic', 'Skin Classic', { badgeShowLimit: 2, maxHeight: 220 });

  classicBasicSettings = this.makeSettings('classic', 'Classic basic', { enableSearchFilter: false });
  classicSearchSettings = this.makeSettings('classic', 'Classic search', {});
  classicSingleSettings = this.makeSettings('classic', 'Classic single', { singleSelection: true, showCheckbox: false, enableCheckAll: false });
  classicNoCheckboxSettings = this.makeSettings('classic', 'Classic no checkbox', { showCheckbox: false, enableCheckAll: false });
  classicLimitSettings = this.makeSettings('classic', 'Classic limit 2', { limitSelection: 2, badgeShowLimit: 2 });
  classicBadgeSettings = this.makeSettings('classic', 'Classic badge limit', { badgeShowLimit: 2, maxHeight: 220 });
  classicGroupedSettings = this.makeSettings('classic', 'Classic grouped', { groupBy: 'region', maxHeight: 220 });
  classicDisabledSettings = this.makeSettings('classic', 'Classic disabled', { disabled: true });
  classicEmptySettings = this.makeSettings('classic', 'Classic empty', { noDataLabel: 'No records found' });
  classicScrollSettings = this.makeSettings('classic', 'Classic scroll', { maxHeight: 120, badgeShowLimit: 3 });
  classicLazySettings = this.makeSettings('classic', 'Classic lazy', { lazyLoading: true, maxHeight: 120, badgeShowLimit: 3 });
  classicTemplateSettings = this.makeSettings('classic', 'Classic template', { badgeShowLimit: 3, maxHeight: 220 });

  materialBasicSettings = this.makeSettings('material', 'Material basic', { enableSearchFilter: false });
  materialSearchSettings = this.makeSettings('material', 'Material search', {});
  materialSingleSettings = this.makeSettings('material', 'Material single', { singleSelection: true, showCheckbox: false, enableCheckAll: false });
  materialNoCheckboxSettings = this.makeSettings('material', 'Material no checkbox', { showCheckbox: false, enableCheckAll: false });
  materialLimitSettings = this.makeSettings('material', 'Material limit 2', { limitSelection: 2, badgeShowLimit: 2 });
  materialBadgeSettings = this.makeSettings('material', 'Material badge limit', { badgeShowLimit: 2, maxHeight: 220 });
  materialGroupedSettings = this.makeSettings('material', 'Material grouped', { groupBy: 'region', maxHeight: 220 });
  materialDisabledSettings = this.makeSettings('material', 'Material disabled', { disabled: true });
  materialEmptySettings = this.makeSettings('material', 'Material empty', { noDataLabel: 'No records found' });
  materialScrollSettings = this.makeSettings('material', 'Material scroll', { maxHeight: 120, badgeShowLimit: 3 });
  materialLazySettings = this.makeSettings('material', 'Material lazy', { lazyLoading: true, maxHeight: 120, badgeShowLimit: 3 });
  materialTemplateSettings = this.makeSettings('material', 'Material template', { badgeShowLimit: 3, maxHeight: 220 });

  skinSwitchCase = this.caseDef('00', 'Skin switcher', 'countries', this.countries, 'skinSwitchSelected', this.skinSwitchSelected, 'skinSwitchSettings', this.skinSwitchSettings, 'skin switch', '{ badgeShowLimit: 2, maxHeight: 220 }', false);

  classicCases = [
    this.caseDef('01', 'Basic multi', 'countries', this.countries, 'classicBasic', this.classicBasic, 'classicBasicSettings', this.classicBasicSettings, 'classic basic', '{ enableSearchFilter: false }', false),
    this.caseDef('02', 'Search + select all', 'countries', this.countries, 'classicSearch', this.classicSearch, 'classicSearchSettings', this.classicSearchSettings, 'classic search', '{}', false),
    this.caseDef('03', 'Single without checkbox', 'countries', this.countries, 'classicSingle', this.classicSingle, 'classicSingleSettings', this.classicSingleSettings, 'classic single', '{ singleSelection: true, showCheckbox: false, enableCheckAll: false }', false),
    this.caseDef('04', 'Multi without checkbox', 'countries', this.countries, 'classicNoCheckbox', this.classicNoCheckbox, 'classicNoCheckboxSettings', this.classicNoCheckboxSettings, 'classic no checkbox', '{ showCheckbox: false, enableCheckAll: false }', false),
    this.caseDef('05', 'Selection limit', 'longCountries', this.longCountries, 'classicLimit', this.classicLimit, 'classicLimitSettings', this.classicLimitSettings, 'classic limit', '{ limitSelection: 2, badgeShowLimit: 2 }', false),
    this.caseDef('06', 'Badge overflow', 'longCountries', this.longCountries, 'classicBadge', this.classicBadge, 'classicBadgeSettings', this.classicBadgeSettings, 'classic badge', '{ badgeShowLimit: 2, maxHeight: 220 }', false),
    this.caseDef('07', 'Grouped by region', 'groupedCountries', this.groupedCountries, 'classicGrouped', this.classicGrouped, 'classicGroupedSettings', this.classicGroupedSettings, 'classic grouped', "{ groupBy: 'region', maxHeight: 220 }", false),
    this.caseDef('08', 'Disabled with value', 'countries', this.countries, 'classicDisabled', this.classicDisabled, 'classicDisabledSettings', this.classicDisabledSettings, 'classic disabled', '{ disabled: true }', false),
    this.caseDef('09', 'Empty data', 'emptyItems', this.emptyItems, 'classicEmpty', this.classicEmpty, 'classicEmptySettings', this.classicEmptySettings, 'classic empty', "{ noDataLabel: 'No records found' }", false),
    this.caseDef('10', 'Long list with scroll', 'largeList', this.largeList, 'classicScroll', this.classicScroll, 'classicScrollSettings', this.classicScrollSettings, 'classic scroll', '{ maxHeight: 120, badgeShowLimit: 3 }', false),
    this.caseDef('11', 'Local lazy loading', 'largeList', this.largeList, 'classicLazy', this.classicLazy, 'classicLazySettings', this.classicLazySettings, 'classic lazy', '{ lazyLoading: true, maxHeight: 120, badgeShowLimit: 3 }', false),
    this.caseDef('12', 'Item + chip template', 'templateItems', this.templateItems, 'classicTemplate', this.classicTemplate, 'classicTemplateSettings', this.classicTemplateSettings, 'classic template', '{ badgeShowLimit: 3, maxHeight: 220 }', true)
  ];

  materialCases = [
    this.caseDef('01', 'Basic multi', 'countries', this.countries, 'materialBasic', this.materialBasic, 'materialBasicSettings', this.materialBasicSettings, 'material basic', '{ enableSearchFilter: false }', false),
    this.caseDef('02', 'Search + select all', 'countries', this.countries, 'materialSearch', this.materialSearch, 'materialSearchSettings', this.materialSearchSettings, 'material search', '{}', false),
    this.caseDef('03', 'Single without checkbox', 'countries', this.countries, 'materialSingle', this.materialSingle, 'materialSingleSettings', this.materialSingleSettings, 'material single', '{ singleSelection: true, showCheckbox: false, enableCheckAll: false }', false),
    this.caseDef('04', 'Multi without checkbox', 'countries', this.countries, 'materialNoCheckbox', this.materialNoCheckbox, 'materialNoCheckboxSettings', this.materialNoCheckboxSettings, 'material no checkbox', '{ showCheckbox: false, enableCheckAll: false }', false),
    this.caseDef('05', 'Selection limit', 'longCountries', this.longCountries, 'materialLimit', this.materialLimit, 'materialLimitSettings', this.materialLimitSettings, 'material limit', '{ limitSelection: 2, badgeShowLimit: 2 }', false),
    this.caseDef('06', 'Badge overflow', 'longCountries', this.longCountries, 'materialBadge', this.materialBadge, 'materialBadgeSettings', this.materialBadgeSettings, 'material badge', '{ badgeShowLimit: 2, maxHeight: 220 }', false),
    this.caseDef('07', 'Grouped by region', 'groupedCountries', this.groupedCountries, 'materialGrouped', this.materialGrouped, 'materialGroupedSettings', this.materialGroupedSettings, 'material grouped', "{ groupBy: 'region', maxHeight: 220 }", false),
    this.caseDef('08', 'Disabled with value', 'countries', this.countries, 'materialDisabled', this.materialDisabled, 'materialDisabledSettings', this.materialDisabledSettings, 'material disabled', '{ disabled: true }', false),
    this.caseDef('09', 'Empty data', 'emptyItems', this.emptyItems, 'materialEmpty', this.materialEmpty, 'materialEmptySettings', this.materialEmptySettings, 'material empty', "{ noDataLabel: 'No records found' }", false),
    this.caseDef('10', 'Long list with scroll', 'largeList', this.largeList, 'materialScroll', this.materialScroll, 'materialScrollSettings', this.materialScrollSettings, 'material scroll', '{ maxHeight: 120, badgeShowLimit: 3 }', false),
    this.caseDef('11', 'Local lazy loading', 'largeList', this.largeList, 'materialLazy', this.materialLazy, 'materialLazySettings', this.materialLazySettings, 'material lazy', '{ lazyLoading: true, maxHeight: 120, badgeShowLimit: 3 }', false),
    this.caseDef('12', 'Item + chip template', 'templateItems', this.templateItems, 'materialTemplate', this.materialTemplate, 'materialTemplateSettings', this.materialTemplateSettings, 'material template', '{ badgeShowLimit: 3, maxHeight: 220 }', true)
  ];

  events = ['ready'];

  caseDef(number: string, title: string, dataName: string, data: any[], modelName: string, model: any[], settingsName: string, settings: any, eventPrefix: string, optionsText: string, template: boolean) {
    return {
      number: number,
      title: title,
      dataName: dataName,
      data: data,
      modelName: modelName,
      model: model,
      settingsName: settingsName,
      settings: settings,
      eventPrefix: eventPrefix,
      optionsText: optionsText,
      template: template
    };
  }

  buildLargeList() {
    var list = [];
    for (var index = 1; index <= 40; index++) {
      var label = index < 10 ? 'Item 0' + index : 'Item ' + index;
      list.push({ id: 100 + index, itemName: label });
    }
    return list;
  }

  makeSettings(theme: string, text: string, options: any) {
    var settings: any = {
      singleSelection: false,
      text: text,
      selectAllText: 'Select all',
      unSelectAllText: 'Clear all',
      enableCheckAll: true,
      enableSearchFilter: true,
      searchPlaceholderText: 'Search',
      badgeShowLimit: 4,
      maxHeight: 260,
      showCheckbox: true,
      noDataLabel: 'No data',
      theme: theme,
      skin: theme
    };

    for (var key in options) {
      if (options.hasOwnProperty(key)) {
        settings[key] = options[key];
      }
    }

    return settings;
  }

  switchTheme(theme: string) {
    var currentModel = this.skinSwitchCase && this.skinSwitchCase.model ? this.skinSwitchCase.model : this.skinSwitchSelected;
    var nextSettings = this.makeSettings(theme, 'Skin ' + this.themeLabel(theme), { badgeShowLimit: 2, maxHeight: 220 });
    this.skinSwitchTheme = theme;
    this.skinSwitchSelected = currentModel;
    this.skinSwitchSettings = nextSettings;
    this.skinSwitchCase = this.caseDef('00', 'Skin switcher', 'countries', this.countries, 'skinSwitchSelected', this.skinSwitchSelected, 'skinSwitchSettings', this.skinSwitchSettings, 'skin switch', '{ badgeShowLimit: 2, maxHeight: 220 }', false);
    this.record('skin switch theme', theme);
  }

  themeLabel(theme: string) {
    return theme.charAt(0).toUpperCase() + theme.slice(1);
  }

  htmlCode(test: any) {
    var lines = [
      '<angular-multiselect',
      '  [data]="' + test.dataName + '"',
      '  [(ngModel)]="' + test.modelName + '"',
      '  [settings]="' + test.settingsName + '"',
      "  (onSelect)=\"record('" + test.eventPrefix + " select', $event)\"",
      "  (onDeSelect)=\"record('" + test.eventPrefix + " deselect', $event)\""
    ];

    if (!test.settings.singleSelection && !test.settings.disabled) {
      lines.push("  (onSelectAll)=\"record('" + test.eventPrefix + " selectAll', $event)\"");
      lines.push("  (onDeSelectAll)=\"record('" + test.eventPrefix + " deselectAll', $event)\"");
    }

    if (!test.template) {
      lines.push('></angular-multiselect>');
      return lines.join('\n');
    }

    lines.push('>');
    lines.push('  <c-badge>');
    lines.push('    <ng-template let-item="item">');
    lines.push('      <span class="swatch-chip">{{ item.itemName }}</span>');
    lines.push('    </ng-template>');
    lines.push('  </c-badge>');
    lines.push('  <c-item>');
    lines.push('    <ng-template let-item="item">');
    lines.push('      <strong>{{ item.itemName }}</strong>');
    lines.push('      <small>{{ item.detail }}</small>');
    lines.push('    </ng-template>');
    lines.push('  </c-item>');
    lines.push('</angular-multiselect>');
    return lines.join('\n');
  }

  tsCode(test: any) {
    return test.modelName + ' = ' + this.tsArray(test.model) + ';\n\n' +
      test.settingsName + ' = this.makeSettings(\'' + test.settings.theme + '\', \'' +
      test.settings.text + '\', ' + test.optionsText + ');\n\n' +
      'record(type: string, value: any) {\n' +
      '  var label = value && value.itemName ? value.itemName : JSON.stringify(value);\n' +
      '  this.events.unshift(type + \': \' + label);\n' +
      '}';
  }

  jsonCode(test: any) {
    return JSON.stringify({
      data: test.dataName,
      selected: test.model,
      settings: test.settings
    }, null, 2);
  }

  tsArray(items: any[]) {
    if (!items || !items.length) {
      return '[]';
    }

    return '[\n' + items.map((item) => '  ' + this.tsObject(item)).join(',\n') + '\n]';
  }

  tsObject(item: any) {
    var keys = Object.keys(item);
    return '{ ' + keys.map((key) => key + ': ' + this.tsValue(item[key])).join(', ') + ' }';
  }

  tsValue(value: any) {
    if (typeof value === 'string') {
      return '\'' + value.replace(/\\/g, '\\\\').replace(/'/g, '\\\'') + '\'';
    }
    if (typeof value === 'number' || typeof value === 'boolean') {
      return String(value);
    }
    if (value && typeof value === 'object') {
      return this.tsObject(value);
    }
    return 'null';
  }

  record(type: string, value: any) {
    var label = value && value.itemName ? value.itemName : JSON.stringify(value);
    if (value && value.length) {
      label = value.length + ' items';
    }
    this.events.unshift(type + ': ' + label);
    this.events = this.events.slice(0, 10);
  }
}
