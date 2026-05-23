import { Component } from '@angular/core';
import { DOCS_META } from './docs-meta';

interface OfficialExample {
  number: string;
  title: string;
  data: string;
  model: string;
  settings: string;
  covers: string;
}

interface OfficialSkin {
  label: string;
  theme: string;
  examples: OfficialExample[];
}

@Component({
  standalone: false,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  readonly docsMeta = DOCS_META;
  readonly installCode =
    `npm install @stackline/angular-multiselect-dropdown@${this.docsMeta.packageRange}`;
  readonly setupCode = [
    `import { FormsModule } from '@angular/forms';`,
    `import { AngularMultiSelectModule } from '@stackline/angular-multiselect-dropdown';`,
    ``,
    `@NgModule({`,
    `  imports: [BrowserModule, FormsModule, AngularMultiSelectModule]`,
    `})`,
    `export class AppModule {}`
  ].join('\n');
  readonly templateCode = [
    `<angular2-multiselect`,
    `  [data]="countries"`,
    `  [(ngModel)]="classicBasic"`,
    `  [settings]="classicBasicSettings"`,
    `  (onSelect)="record('classic basic select', $event)"`,
    `  (onDeSelect)="record('classic basic deselect', $event)"`,
    `  (onSelectAll)="record('classic basic selectAll', $event)"`,
    `  (onDeSelectAll)="record('classic basic deselectAll', $event)">`,
    `</angular2-multiselect>`
  ].join('\n');
  readonly settingsCode = [
    `makeSettings(theme: string, text: string, options: any) {`,
    `  var settings: any = {`,
    `    singleSelection: false,`,
    `    text: text,`,
    `    selectAllText: 'Selecionar todos',`,
    `    unSelectAllText: 'Limpar todos',`,
    `    enableCheckAll: true,`,
    `    enableSearchFilter: true,`,
    `    searchPlaceholderText: 'Buscar',`,
    `    badgeShowLimit: 4,`,
    `    maxHeight: 260,`,
    `    showCheckbox: true,`,
    `    noDataLabel: 'Sem dados',`,
    `    theme: theme`,
    `  };`,
    ``,
    `  for (var key in options) {`,
    `    if (options.hasOwnProperty(key)) {`,
    `      settings[key] = options[key];`,
    `    }`,
    `  }`,
    ``,
    `  return settings;`,
    `}`
  ].join('\n');
  readonly dataCode = [
    `countries = [`,
    `  { id: 1, itemName: 'Brasil' },`,
    `  { id: 2, itemName: 'Canada' },`,
    `  { id: 3, itemName: 'Portugal' },`,
    `  { id: 4, itemName: 'Estados Unidos' },`,
    `  { id: 5, itemName: 'Argentina' },`,
    `  { id: 6, itemName: 'Alemanha' },`,
    `  { id: 7, itemName: 'Japao' },`,
    `  { id: 8, itemName: 'Africa do Sul' }`,
    `];`,
    ``,
    `groupedCountries = [`,
    `  { id: 21, itemName: 'Brasil', region: 'America' },`,
    `  { id: 22, itemName: 'Canada', region: 'America' },`,
    `  { id: 23, itemName: 'Portugal', region: 'Europa' },`,
    `  { id: 24, itemName: 'Alemanha', region: 'Europa' }`,
    `];`
  ].join('\n');
  readonly templateExampleCode = [
    `<angular2-multiselect [data]="templateItems" [(ngModel)]="classicTemplate" [settings]="classicTemplateSettings">`,
    `  <c-badge>`,
    `    <template let-item="item">`,
    `      <span class="swatch-chip"><span class="swatch" [style.background]="item.color"></span>{{ item.itemName }}</span>`,
    `    </template>`,
    `  </c-badge>`,
    `  <c-item>`,
    `    <template let-item="item">`,
    `      <span class="option-row">`,
    `        <span class="swatch" [style.background]="item.color"></span>`,
    `        <span><strong>{{ item.itemName }}</strong><small>{{ item.detail }}</small></span>`,
    `      </span>`,
    `    </template>`,
    `  </c-item>`,
    `</angular2-multiselect>`
  ].join('\n');

  readonly officialSkins: OfficialSkin[] = [
    {
      label: 'Classic',
      theme: 'classic',
      examples: [
        {
          number: '01',
          title: 'Basico multi',
          data: 'countries',
          model: `classicBasic = [{ id: 2, itemName: 'Canada' }]`,
          settings: `makeSettings('classic', 'Classic basico', { enableSearchFilter: false })`,
          covers: 'Default multi-select, select, deselect, select all, and clear all events.'
        },
        {
          number: '02',
          title: 'Busca + selecionar todos',
          data: 'countries',
          model: `classicSearch = [{ id: 4, itemName: 'Estados Unidos' }]`,
          settings: `makeSettings('classic', 'Classic busca', {})`,
          covers: 'Search input, select all text, clear all text, and event logging.'
        },
        {
          number: '03',
          title: 'Single sem checkbox',
          data: 'countries',
          model: `classicSingle = [{ id: 1, itemName: 'Brasil' }]`,
          settings: `makeSettings('classic', 'Classic single', { singleSelection: true, showCheckbox: false, enableCheckAll: false })`,
          covers: 'Single-selection mode without checkboxes.'
        },
        {
          number: '04',
          title: 'Multi sem checkbox',
          data: 'countries',
          model: `classicNoCheckbox = [{ id: 3, itemName: 'Portugal' }, { id: 6, itemName: 'Alemanha' }]`,
          settings: `makeSettings('classic', 'Classic sem checkbox', { showCheckbox: false, enableCheckAll: false })`,
          covers: 'Multiple selected values with the checkbox UI hidden.'
        },
        {
          number: '05',
          title: 'Limite de selecao',
          data: 'longCountries',
          model: `classicLimit = [{ id: 11, itemName: 'Republica Federativa do Brasil' }, { id: 12, itemName: 'Estados Unidos da America' }]`,
          settings: `makeSettings('classic', 'Classic limite 2', { limitSelection: 2, badgeShowLimit: 2 })`,
          covers: 'Selection limit and compact selected badge display.'
        },
        {
          number: '06',
          title: 'Badge overflow',
          data: 'longCountries',
          model: `classicBadge = four selected long country names`,
          settings: `makeSettings('classic', 'Classic badge limit', { badgeShowLimit: 2, maxHeight: 220 })`,
          covers: 'Overflow counter placement for selected badges.'
        },
        {
          number: '07',
          title: 'Agrupado por regiao',
          data: 'groupedCountries',
          model: `classicGrouped = [{ id: 21, itemName: 'Brasil', region: 'America' }]`,
          settings: `makeSettings('classic', 'Classic agrupado', { groupBy: 'region', maxHeight: 220 })`,
          covers: 'Grouping by the region field.'
        },
        {
          number: '08',
          title: 'Disabled com valor',
          data: 'countries',
          model: `classicDisabled = [{ id: 6, itemName: 'Alemanha' }]`,
          settings: `makeSettings('classic', 'Classic disabled', { disabled: true })`,
          covers: 'Disabled state while preserving the selected value.'
        },
        {
          number: '09',
          title: 'Sem dados',
          data: 'emptyItems',
          model: `classicEmpty = []`,
          settings: `makeSettings('classic', 'Classic vazio', { noDataLabel: 'Nenhum registro encontrado' })`,
          covers: 'Empty data messaging.'
        },
        {
          number: '10',
          title: 'Lista longa com scroll',
          data: 'largeList',
          model: `classicScroll = [{ id: 104, itemName: 'Item 04' }]`,
          settings: `makeSettings('classic', 'Classic scroll', { maxHeight: 120, badgeShowLimit: 3 })`,
          covers: 'Constrained menu height and internal scrolling.'
        },
        {
          number: '11',
          title: 'Lazy loading local',
          data: 'largeList',
          model: `classicLazy = [{ id: 106, itemName: 'Item 06' }]`,
          settings: `makeSettings('classic', 'Classic lazy', { lazyLoading: true, maxHeight: 120, badgeShowLimit: 3 })`,
          covers: 'Local lazy-loading path with long lists.'
        },
        {
          number: '12',
          title: 'Template de item + chip',
          data: 'templateItems',
          model: `classicTemplate = [Primary, Warning]`,
          settings: `makeSettings('classic', 'Classic template', { badgeShowLimit: 3, maxHeight: 220 })`,
          covers: 'Custom c-badge and c-item templates with swatches.'
        }
      ]
    },
    {
      label: 'Material',
      theme: 'material',
      examples: [
        {
          number: '01',
          title: 'Basico multi',
          data: 'countries',
          model: `materialBasic = [{ id: 2, itemName: 'Canada' }]`,
          settings: `makeSettings('material', 'Material basico', { enableSearchFilter: false })`,
          covers: 'Default multi-select in the Material skin.'
        },
        {
          number: '02',
          title: 'Busca + selecionar todos',
          data: 'countries',
          model: `materialSearch = [{ id: 4, itemName: 'Estados Unidos' }]`,
          settings: `makeSettings('material', 'Material busca', {})`,
          covers: 'Search, select all, clear all, and Material menu spacing.'
        },
        {
          number: '03',
          title: 'Single sem checkbox',
          data: 'countries',
          model: `materialSingle = [{ id: 3, itemName: 'Portugal' }]`,
          settings: `makeSettings('material', 'Material single', { singleSelection: true, showCheckbox: false, enableCheckAll: false })`,
          covers: 'Single-selection mode without checkboxes.'
        },
        {
          number: '04',
          title: 'Multi sem checkbox',
          data: 'countries',
          model: `materialNoCheckbox = [{ id: 5, itemName: 'Argentina' }, { id: 7, itemName: 'Japao' }]`,
          settings: `makeSettings('material', 'Material sem checkbox', { showCheckbox: false, enableCheckAll: false })`,
          covers: 'Multiple selected values with Material list rows and no checkbox.'
        },
        {
          number: '05',
          title: 'Limite de selecao',
          data: 'longCountries',
          model: `materialLimit = [{ id: 11, itemName: 'Republica Federativa do Brasil' }, { id: 12, itemName: 'Estados Unidos da America' }]`,
          settings: `makeSettings('material', 'Material limite 2', { limitSelection: 2, badgeShowLimit: 2 })`,
          covers: 'Selection limit and compact badge display.'
        },
        {
          number: '06',
          title: 'Badge overflow',
          data: 'longCountries',
          model: `materialBadge = four selected long country names`,
          settings: `makeSettings('material', 'Material badge limit', { badgeShowLimit: 2, maxHeight: 220 })`,
          covers: 'Centered overflow counter beside the selected item area.'
        },
        {
          number: '07',
          title: 'Agrupado por regiao',
          data: 'groupedCountries',
          model: `materialGrouped = [{ id: 23, itemName: 'Portugal', region: 'Europa' }]`,
          settings: `makeSettings('material', 'Material agrupado', { groupBy: 'region', maxHeight: 220 })`,
          covers: 'Grouped Material rows by region.'
        },
        {
          number: '08',
          title: 'Disabled com valor',
          data: 'countries',
          model: `materialDisabled = [{ id: 8, itemName: 'Africa do Sul' }]`,
          settings: `makeSettings('material', 'Material disabled', { disabled: true })`,
          covers: 'Disabled Material field with a preserved selected value.'
        },
        {
          number: '09',
          title: 'Sem dados',
          data: 'emptyItems',
          model: `materialEmpty = []`,
          settings: `makeSettings('material', 'Material vazio', { noDataLabel: 'Nenhum registro encontrado' })`,
          covers: 'Empty data state in the Material skin.'
        },
        {
          number: '10',
          title: 'Lista longa com scroll',
          data: 'largeList',
          model: `materialScroll = [{ id: 105, itemName: 'Item 05' }]`,
          settings: `makeSettings('material', 'Material scroll', { maxHeight: 120, badgeShowLimit: 3 })`,
          covers: 'Material long-list menu with constrained scroll.'
        },
        {
          number: '11',
          title: 'Lazy loading local',
          data: 'largeList',
          model: `materialLazy = [{ id: 107, itemName: 'Item 07' }]`,
          settings: `makeSettings('material', 'Material lazy', { lazyLoading: true, maxHeight: 120, badgeShowLimit: 3 })`,
          covers: 'Local lazy-loading path in the Material skin.'
        },
        {
          number: '12',
          title: 'Template de item + chip',
          data: 'templateItems',
          model: `materialTemplate = [Success, Danger]`,
          settings: `makeSettings('material', 'Material template', { badgeShowLimit: 3, maxHeight: 220 })`,
          covers: 'Custom c-badge and c-item templates in Material.'
        }
      ]
    }
  ];
}
