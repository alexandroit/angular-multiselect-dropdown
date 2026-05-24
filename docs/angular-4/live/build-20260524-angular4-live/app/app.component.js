System.register(["@angular/core"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __moduleName = context_1 && context_1.id;
    var core_1, AppComponent;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            }
        ],
        execute: function () {
            AppComponent = (function () {
                function AppComponent() {
                    this.angularVersion = '4.4.7';
                    this.packageVersion = '4.0.1';
                    this.countries = [
                        { id: 1, itemName: 'Brazil' },
                        { id: 2, itemName: 'Canada' },
                        { id: 3, itemName: 'Portugal' },
                        { id: 4, itemName: 'United States' },
                        { id: 5, itemName: 'Argentina' },
                        { id: 6, itemName: 'Germany' },
                        { id: 7, itemName: 'Japan' },
                        { id: 8, itemName: 'South Africa' }
                    ];
                    this.longCountries = [
                        { id: 11, itemName: 'Federative Republic of Brazil' },
                        { id: 12, itemName: 'United States of America' },
                        { id: 13, itemName: 'United Kingdom of Great Britain and Northern Ireland' },
                        { id: 14, itemName: 'Portuguese Republic' },
                        { id: 15, itemName: 'Canada' },
                        { id: 16, itemName: 'Argentina' }
                    ];
                    this.groupedCountries = [
                        { id: 21, itemName: 'Brazil', region: 'Americas' },
                        { id: 22, itemName: 'Canada', region: 'Americas' },
                        { id: 23, itemName: 'Portugal', region: 'Europe' },
                        { id: 24, itemName: 'Germany', region: 'Europe' },
                        { id: 25, itemName: 'Japan', region: 'Asia' },
                        { id: 26, itemName: 'South Korea', region: 'Asia' }
                    ];
                    this.templateItems = [
                        { id: 31, itemName: 'Primary', detail: 'Main interface color', color: '#3f51b5' },
                        { id: 32, itemName: 'Success', detail: 'Positive feedback state', color: '#2e7d32' },
                        { id: 33, itemName: 'Warning', detail: 'Attention state', color: '#ed6c02' },
                        { id: 34, itemName: 'Danger', detail: 'Destructive state', color: '#d32f2f' },
                        { id: 35, itemName: 'Neutral', detail: 'Text and surface color', color: '#475569' }
                    ];
                    this.largeList = this.buildLargeList();
                    this.emptyItems = [];
                    this.classicBasic = [{ id: 2, itemName: 'Canada' }];
                    this.classicSearch = [{ id: 4, itemName: 'United States' }];
                    this.classicSingle = [{ id: 1, itemName: 'Brazil' }];
                    this.classicNoCheckbox = [{ id: 3, itemName: 'Portugal' }, { id: 6, itemName: 'Germany' }];
                    this.classicLimit = [
                        { id: 11, itemName: 'Federative Republic of Brazil' },
                        { id: 12, itemName: 'United States of America' }
                    ];
                    this.classicBadge = [
                        { id: 11, itemName: 'Federative Republic of Brazil' },
                        { id: 12, itemName: 'United States of America' },
                        { id: 13, itemName: 'United Kingdom of Great Britain and Northern Ireland' },
                        { id: 14, itemName: 'Portuguese Republic' }
                    ];
                    this.classicGrouped = [{ id: 21, itemName: 'Brazil', region: 'Americas' }];
                    this.classicDisabled = [{ id: 6, itemName: 'Germany' }];
                    this.classicEmpty = [];
                    this.classicScroll = [{ id: 104, itemName: 'Item 04' }];
                    this.classicLazy = [{ id: 106, itemName: 'Item 06' }];
                    this.classicTemplate = [
                        { id: 31, itemName: 'Primary', detail: 'Main interface color', color: '#3f51b5' },
                        { id: 33, itemName: 'Warning', detail: 'Attention state', color: '#ed6c02' }
                    ];
                    this.materialBasic = [{ id: 2, itemName: 'Canada' }];
                    this.materialSearch = [{ id: 4, itemName: 'United States' }];
                    this.materialSingle = [{ id: 3, itemName: 'Portugal' }];
                    this.materialNoCheckbox = [{ id: 5, itemName: 'Argentina' }, { id: 7, itemName: 'Japan' }];
                    this.materialLimit = [
                        { id: 11, itemName: 'Federative Republic of Brazil' },
                        { id: 12, itemName: 'United States of America' }
                    ];
                    this.materialBadge = [
                        { id: 11, itemName: 'Federative Republic of Brazil' },
                        { id: 12, itemName: 'United States of America' },
                        { id: 13, itemName: 'United Kingdom of Great Britain and Northern Ireland' },
                        { id: 14, itemName: 'Portuguese Republic' }
                    ];
                    this.materialGrouped = [{ id: 23, itemName: 'Portugal', region: 'Europe' }];
                    this.materialDisabled = [{ id: 8, itemName: 'South Africa' }];
                    this.materialEmpty = [];
                    this.materialScroll = [{ id: 105, itemName: 'Item 05' }];
                    this.materialLazy = [{ id: 107, itemName: 'Item 07' }];
                    this.materialTemplate = [
                        { id: 32, itemName: 'Success', detail: 'Positive feedback state', color: '#2e7d32' },
                        { id: 34, itemName: 'Danger', detail: 'Destructive state', color: '#d32f2f' }
                    ];
                    this.availableThemes = ['classic', 'material', 'dark', 'custom', 'brand'];
                    this.skinSwitchTheme = 'classic';
                    this.skinSwitchSelected = [
                        { id: 2, itemName: 'Canada' },
                        { id: 3, itemName: 'Portugal' },
                        { id: 4, itemName: 'United States' }
                    ];
                    this.skinSwitchSettings = this.makeSettings('classic', 'Skin Classic', { badgeShowLimit: 2, maxHeight: 220 });
                    this.classicBasicSettings = this.makeSettings('classic', 'Classic basic', { enableSearchFilter: false });
                    this.classicSearchSettings = this.makeSettings('classic', 'Classic search', {});
                    this.classicSingleSettings = this.makeSettings('classic', 'Classic single', { singleSelection: true, showCheckbox: false, enableCheckAll: false });
                    this.classicNoCheckboxSettings = this.makeSettings('classic', 'Classic no checkbox', { showCheckbox: false, enableCheckAll: false });
                    this.classicLimitSettings = this.makeSettings('classic', 'Classic limit 2', { limitSelection: 2, badgeShowLimit: 2 });
                    this.classicBadgeSettings = this.makeSettings('classic', 'Classic badge limit', { badgeShowLimit: 2, maxHeight: 220 });
                    this.classicGroupedSettings = this.makeSettings('classic', 'Classic grouped', { groupBy: 'region', maxHeight: 220 });
                    this.classicDisabledSettings = this.makeSettings('classic', 'Classic disabled', { disabled: true });
                    this.classicEmptySettings = this.makeSettings('classic', 'Classic empty', { noDataLabel: 'No records found' });
                    this.classicScrollSettings = this.makeSettings('classic', 'Classic scroll', { maxHeight: 120, badgeShowLimit: 3 });
                    this.classicLazySettings = this.makeSettings('classic', 'Classic lazy', { lazyLoading: true, maxHeight: 120, badgeShowLimit: 3 });
                    this.classicTemplateSettings = this.makeSettings('classic', 'Classic template', { badgeShowLimit: 3, maxHeight: 220 });
                    this.materialBasicSettings = this.makeSettings('material', 'Material basic', { enableSearchFilter: false });
                    this.materialSearchSettings = this.makeSettings('material', 'Material search', {});
                    this.materialSingleSettings = this.makeSettings('material', 'Material single', { singleSelection: true, showCheckbox: false, enableCheckAll: false });
                    this.materialNoCheckboxSettings = this.makeSettings('material', 'Material no checkbox', { showCheckbox: false, enableCheckAll: false });
                    this.materialLimitSettings = this.makeSettings('material', 'Material limit 2', { limitSelection: 2, badgeShowLimit: 2 });
                    this.materialBadgeSettings = this.makeSettings('material', 'Material badge limit', { badgeShowLimit: 2, maxHeight: 220 });
                    this.materialGroupedSettings = this.makeSettings('material', 'Material grouped', { groupBy: 'region', maxHeight: 220 });
                    this.materialDisabledSettings = this.makeSettings('material', 'Material disabled', { disabled: true });
                    this.materialEmptySettings = this.makeSettings('material', 'Material empty', { noDataLabel: 'No records found' });
                    this.materialScrollSettings = this.makeSettings('material', 'Material scroll', { maxHeight: 120, badgeShowLimit: 3 });
                    this.materialLazySettings = this.makeSettings('material', 'Material lazy', { lazyLoading: true, maxHeight: 120, badgeShowLimit: 3 });
                    this.materialTemplateSettings = this.makeSettings('material', 'Material template', { badgeShowLimit: 3, maxHeight: 220 });
                    this.skinSwitchCase = this.caseDef('00', 'Skin switcher', 'countries', this.countries, 'skinSwitchSelected', this.skinSwitchSelected, 'skinSwitchSettings', this.skinSwitchSettings, 'skin switch', '{ badgeShowLimit: 2, maxHeight: 220 }', false);
                    this.classicCases = [
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
                    this.materialCases = [
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
                    this.events = ['ready'];
                }
                AppComponent.prototype.caseDef = function (number, title, dataName, data, modelName, model, settingsName, settings, eventPrefix, optionsText, template) {
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
                };
                AppComponent.prototype.buildLargeList = function () {
                    var list = [];
                    for (var index = 1; index <= 40; index++) {
                        var label = index < 10 ? 'Item 0' + index : 'Item ' + index;
                        list.push({ id: 100 + index, itemName: label });
                    }
                    return list;
                };
                AppComponent.prototype.makeSettings = function (theme, text, options) {
                    var settings = {
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
                };
                AppComponent.prototype.switchTheme = function (theme) {
                    var currentModel = this.skinSwitchCase && this.skinSwitchCase.model ? this.skinSwitchCase.model : this.skinSwitchSelected;
                    var nextSettings = this.makeSettings(theme, 'Skin ' + this.themeLabel(theme), { badgeShowLimit: 2, maxHeight: 220 });
                    this.skinSwitchTheme = theme;
                    this.skinSwitchSelected = currentModel;
                    this.skinSwitchSettings = nextSettings;
                    this.skinSwitchCase = this.caseDef('00', 'Skin switcher', 'countries', this.countries, 'skinSwitchSelected', this.skinSwitchSelected, 'skinSwitchSettings', this.skinSwitchSettings, 'skin switch', '{ badgeShowLimit: 2, maxHeight: 220 }', false);
                    this.record('skin switch theme', theme);
                };
                AppComponent.prototype.themeLabel = function (theme) {
                    return theme.charAt(0).toUpperCase() + theme.slice(1);
                };
                AppComponent.prototype.htmlCode = function (test) {
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
                };
                AppComponent.prototype.tsCode = function (test) {
                    return test.modelName + ' = ' + this.tsArray(test.model) + ';\n\n' +
                        test.settingsName + ' = this.makeSettings(\'' + test.settings.theme + '\', \'' +
                        test.settings.text + '\', ' + test.optionsText + ');\n\n' +
                        'record(type: string, value: any) {\n' +
                        '  var label = value && value.itemName ? value.itemName : JSON.stringify(value);\n' +
                        '  this.events.unshift(type + \': \' + label);\n' +
                        '}';
                };
                AppComponent.prototype.jsonCode = function (test) {
                    return JSON.stringify({
                        data: test.dataName,
                        selected: test.model,
                        settings: test.settings
                    }, null, 2);
                };
                AppComponent.prototype.tsArray = function (items) {
                    var _this = this;
                    if (!items || !items.length) {
                        return '[]';
                    }
                    return '[\n' + items.map(function (item) { return '  ' + _this.tsObject(item); }).join(',\n') + '\n]';
                };
                AppComponent.prototype.tsObject = function (item) {
                    var _this = this;
                    var keys = Object.keys(item);
                    return '{ ' + keys.map(function (key) { return key + ': ' + _this.tsValue(item[key]); }).join(', ') + ' }';
                };
                AppComponent.prototype.tsValue = function (value) {
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
                };
                AppComponent.prototype.record = function (type, value) {
                    var label = value && value.itemName ? value.itemName : JSON.stringify(value);
                    if (value && value.length) {
                        label = value.length + ' items';
                    }
                    this.events.unshift(type + ': ' + label);
                    this.events = this.events.slice(0, 10);
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'stackline-test',
                        template: "\n    <main class=\"page\">\n      <header class=\"topbar\">\n        <p class=\"eyebrow\">Angular {{ angularVersion }} runtime</p>\n        <h1>@stackline/angular-multiselect-dropdown {{ packageVersion }}</h1>\n      </header>\n\n      <section class=\"skin-section skin-switcher-section\">\n        <div class=\"section-heading\">\n          <p class=\"eyebrow\">Settings-only theme switch</p>\n          <h2>Skin switcher</h2>\n        </div>\n\n        <div class=\"theme-buttons\">\n          <button *ngFor=\"let theme of availableThemes\" type=\"button\" [class.active]=\"skinSwitchTheme == theme\" (click)=\"switchTheme(theme)\">{{ themeLabel(theme) }}</button>\n        </div>\n\n        <article class=\"example-row custom-skin-sample\">\n          <div class=\"demo-cell\">\n            <h3>Updates only settings.theme / settings.skin</h3>\n            <angular-multiselect [data]=\"skinSwitchCase.data\" [(ngModel)]=\"skinSwitchCase.model\" [settings]=\"skinSwitchCase.settings\" (onSelect)=\"record('skin switch select', $event)\" (onDeSelect)=\"record('skin switch deselect', $event)\"></angular-multiselect>\n            <p class=\"settings-preview\">theme: {{ skinSwitchSettings.theme }} | skin: {{ skinSwitchSettings.skin }}</p>\n          </div>\n          <div class=\"code-cell\">\n            <div class=\"code-grid\">\n              <div class=\"code-card\">\n                <strong>HTML</strong>\n                <pre>{{ htmlCode(skinSwitchCase) }}</pre>\n              </div>\n              <div class=\"code-card\">\n                <strong>TS</strong>\n                <pre>{{ tsCode(skinSwitchCase) }}</pre>\n              </div>\n              <div class=\"code-card\">\n                <strong>JSON</strong>\n                <pre>{{ jsonCode(skinSwitchCase) }}</pre>\n              </div>\n            </div>\n          </div>\n        </article>\n      </section>\n\n      <section class=\"skin-section\">\n        <div class=\"section-heading\">\n          <p class=\"eyebrow\">Skin</p>\n          <h2>Classic</h2>\n        </div>\n\n        <div class=\"case-list\">\n          <article class=\"example-row\" *ngFor=\"let test of classicCases\">\n            <div class=\"demo-cell\">\n              <h3>{{ test.number }}. {{ test.title }}</h3>\n              <angular-multiselect *ngIf=\"!test.template\" [data]=\"test.data\" [(ngModel)]=\"test.model\" [settings]=\"test.settings\" (onSelect)=\"record(test.eventPrefix + ' select', $event)\" (onDeSelect)=\"record(test.eventPrefix + ' deselect', $event)\" (onSelectAll)=\"record(test.eventPrefix + ' selectAll', $event)\" (onDeSelectAll)=\"record(test.eventPrefix + ' deselectAll', $event)\"></angular-multiselect>\n              <angular-multiselect *ngIf=\"test.template\" [data]=\"test.data\" [(ngModel)]=\"test.model\" [settings]=\"test.settings\" (onSelect)=\"record(test.eventPrefix + ' select', $event)\" (onDeSelect)=\"record(test.eventPrefix + ' deselect', $event)\">\n                <c-badge>\n                  <ng-template let-item=\"item\">\n                    <span class=\"swatch-chip\"><span class=\"swatch\" [style.background]=\"item.color\"></span>{{ item.itemName }}</span>\n                  </ng-template>\n                </c-badge>\n                <c-item>\n                  <ng-template let-item=\"item\">\n                    <span class=\"option-row\">\n                      <span class=\"swatch\" [style.background]=\"item.color\"></span>\n                      <span><strong>{{ item.itemName }}</strong><small>{{ item.detail }}</small></span>\n                    </span>\n                  </ng-template>\n                </c-item>\n              </angular-multiselect>\n            </div>\n            <div class=\"code-cell\">\n              <div class=\"code-grid\">\n                <div class=\"code-card\">\n                  <strong>HTML</strong>\n                  <pre>{{ htmlCode(test) }}</pre>\n                </div>\n                <div class=\"code-card\">\n                  <strong>TS</strong>\n                  <pre>{{ tsCode(test) }}</pre>\n                </div>\n                <div class=\"code-card\">\n                  <strong>JSON</strong>\n                  <pre>{{ jsonCode(test) }}</pre>\n                </div>\n              </div>\n            </div>\n          </article>\n        </div>\n      </section>\n\n      <section class=\"skin-section material-section\">\n        <div class=\"section-heading\">\n          <p class=\"eyebrow\">Skin</p>\n          <h2>Material</h2>\n        </div>\n\n        <div class=\"case-list\">\n          <article class=\"example-row\" *ngFor=\"let test of materialCases\">\n            <div class=\"demo-cell\">\n              <h3>{{ test.number }}. {{ test.title }}</h3>\n              <angular-multiselect *ngIf=\"!test.template\" [data]=\"test.data\" [(ngModel)]=\"test.model\" [settings]=\"test.settings\" (onSelect)=\"record(test.eventPrefix + ' select', $event)\" (onDeSelect)=\"record(test.eventPrefix + ' deselect', $event)\" (onSelectAll)=\"record(test.eventPrefix + ' selectAll', $event)\" (onDeSelectAll)=\"record(test.eventPrefix + ' deselectAll', $event)\"></angular-multiselect>\n              <angular-multiselect *ngIf=\"test.template\" [data]=\"test.data\" [(ngModel)]=\"test.model\" [settings]=\"test.settings\" (onSelect)=\"record(test.eventPrefix + ' select', $event)\" (onDeSelect)=\"record(test.eventPrefix + ' deselect', $event)\">\n                <c-badge>\n                  <ng-template let-item=\"item\">\n                    <span class=\"swatch-chip\"><span class=\"swatch\" [style.background]=\"item.color\"></span>{{ item.itemName }}</span>\n                  </ng-template>\n                </c-badge>\n                <c-item>\n                  <ng-template let-item=\"item\">\n                    <span class=\"option-row\">\n                      <span class=\"swatch\" [style.background]=\"item.color\"></span>\n                      <span><strong>{{ item.itemName }}</strong><small>{{ item.detail }}</small></span>\n                    </span>\n                  </ng-template>\n                </c-item>\n              </angular-multiselect>\n            </div>\n            <div class=\"code-cell\">\n              <div class=\"code-grid\">\n                <div class=\"code-card\">\n                  <strong>HTML</strong>\n                  <pre>{{ htmlCode(test) }}</pre>\n                </div>\n                <div class=\"code-card\">\n                  <strong>TS</strong>\n                  <pre>{{ tsCode(test) }}</pre>\n                </div>\n                <div class=\"code-card\">\n                  <strong>JSON</strong>\n                  <pre>{{ jsonCode(test) }}</pre>\n                </div>\n              </div>\n            </div>\n          </article>\n        </div>\n      </section>\n\n      <section class=\"activity\">\n        <h2>Event log</h2>\n        <p *ngFor=\"let event of events\">{{ event }}</p>\n      </section>\n    </main>\n  "
                    })
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    };
});
