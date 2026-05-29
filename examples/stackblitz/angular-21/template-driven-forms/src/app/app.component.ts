import { Component, OnInit, ViewChild } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';

type SkinName = 'classic' | 'material' | 'dark' | 'custom' | 'brand';

type ExampleMode =
  | 'standard'
  | 'single'
  | 'custom-search'
  | 'add-new'
  | 'group'
  | 'templating'
  | 'template-form'
  | 'reactive-form'
  | 'lazy'
  | 'lazy-remote'
  | 'remote-data'
  | 'list-loop'
  | 'dialog'
  | 'multiple'
  | 'dynamic'
  | 'methods'
  | 'events'
  | 'disabled'
  | 'styling';

interface DemoItem {
  id: number | string;
  itemName?: string;
  name?: string;
  capital?: string;
  flag?: string;
  category?: string;
  region?: string;
  image?: string;
}

const EXAMPLE = {
  "slug": "template-driven-forms",
  "route": "usinginform",
  "label": "Using in Forms",
  "mode": "template-form",
  "description": "Template-driven form validation with a required multiselect."
};

@Component({
  standalone: false,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  @ViewChild('dropdownElem') dropdownElem?: any;

  readonly packageVersion = '21.1.14';
  readonly angularLine = '21.x';
  readonly skins: SkinName[] = ['classic', 'material', 'dark', 'custom', 'brand'];
  readonly example = {
    label: EXAMPLE.label,
    title: EXAMPLE.label,
    description: EXAMPLE.description,
    route: EXAMPLE.route
  };

  mode = EXAMPLE.mode as ExampleMode;
  activeSkin: SkinName = 'classic';
  itemList: DemoItem[] = [];
  allApiItems: DemoItem[] = [];
  selectedItems: DemoItem[] = [];
  settings: any = {};
  dropdownSettings: any = {};
  dropdownSettings2: any = {};
  events: string[] = ['ready'];
  filter = '';
  count = 100;
  loading = false;
  modalOpen = false;

  formModel = {
    name: '',
    email: 'developer@example.com',
    skills: [] as DemoItem[]
  };

  userForm: UntypedFormGroup;

  customers: Array<{ name: string; countries: DemoItem[] }> = [];
  directorySpecialties: DemoItem[] = [];
  useCases: DemoItem[] = [];
  selectedDirectorySpecialties: DemoItem[] = [];
  selectedUseCases: DemoItem[] = [];
  directoriesDropdownStatus = 'closed';
  casesDropdownStatus = 'closed';

  selectedItemString = 'Event output goes here...';
  unSelectedItemString = 'Event output goes here...';
  openString = 'Event output goes here...';
  closeString = 'Event output goes here...';
  selectAllString = 'Event output goes here...';
  unSelectAllString = 'Event output goes here...';

  constructor(private fb: UntypedFormBuilder) {
    this.userForm = this.fb.group({
      name: 'Stackline User',
      email: ['developer@example.com', Validators.required],
      skills: [[], Validators.required]
    });
  }

  ngOnInit() {
    this.configureExample();
  }

  switchSkin(skin: SkinName) {
    this.activeSkin = skin;
    this.applySkinToSettings();
    this.record('skin', skin);
  }

  private configureExample() {
    this.itemList = this.countries();
    this.selectedItems = [this.itemList[1], this.itemList[2], this.itemList[3]].filter(Boolean);
    this.settings = this.makeSettings({ text: 'Select Countries', enableSearchFilter: true, badgeShowLimit: 3 });

    if (this.mode === 'single') {
      this.selectedItems = [this.itemList[0]];
      this.settings = this.makeSettings({ singleSelection: true, text: 'Select Country', enableSearchFilter: true, addNewItemOnFilter: true });
    }

    if (this.mode === 'custom-search') {
      this.allApiItems = this.countriesWithMeta();
      this.itemList = [...this.allApiItems];
      this.selectedItems = [this.itemList[0]];
      this.settings = this.makeSettings({ text: 'Select Countries', enableSearchFilter: true, labelKey: 'name', badgeShowLimit: 2 });
    }

    if (this.mode === 'add-new') {
      this.settings = this.makeSettings({ text: 'Search or add country', enableSearchFilter: true, addNewItemOnFilter: true, addNewButtonText: 'Add country' });
    }

    if (this.mode === 'group') {
      this.itemList = this.groupedCountries();
      this.selectedItems = [this.itemList[0], this.itemList[3]];
      this.settings = this.makeSettings({ text: 'Select Countries', enableSearchFilter: true, groupBy: 'category', selectGroup: true, badgeShowLimit: 3 });
    }

    if (this.mode === 'templating') {
      this.itemList = this.countriesWithMeta();
      this.selectedItems = [this.itemList[0], this.itemList[1]];
      this.settings = this.makeSettings({ text: 'Select Countries', enableSearchFilter: true, groupBy: 'region', badgeShowLimit: 3 });
    }

    if (this.mode === 'template-form') {
      this.itemList = this.skills();
      this.selectedItems = [];
      this.formModel = { name: '', email: 'developer@example.com', skills: [] };
      this.settings = this.makeSettings({ text: 'Select Skills', enableSearchFilter: true, badgeShowLimit: 3 });
    }

    if (this.mode === 'reactive-form') {
      this.itemList = this.skills();
      this.selectedItems = [];
      this.userForm = this.fb.group({
        name: 'Stackline User',
        email: ['developer@example.com', Validators.required],
        skills: [[], Validators.required]
      });
      this.settings = this.makeSettings({ text: 'Select Skills', enableSearchFilter: true, badgeShowLimit: 3 });
    }

    if (this.mode === 'lazy') {
      this.itemList = this.numberedItems(1, 500);
      this.selectedItems = [];
      this.settings = this.makeSettings({ text: 'Select Items', enableSearchFilter: true, lazyLoading: true, badgeShowLimit: 4, maxHeight: 240 });
    }

    if (this.mode === 'lazy-remote') {
      this.itemList = this.numberedItems(1, 20).map((item) => ({ ...item, name: item.itemName }));
      this.selectedItems = [];
      this.settings = this.makeSettings({ text: 'Select Items', enableSearchFilter: true, lazyLoading: true, labelKey: 'name', limitSelection: 3, maxHeight: 240 });
    }

    if (this.mode === 'remote-data') {
      this.itemList = this.countriesWithMeta();
      this.selectedItems = [this.itemList[0]];
      this.settings = this.makeSettings({ text: 'Select Countries', enableSearchFilter: true, labelKey: 'name', groupBy: 'region' });
    }

    if (this.mode === 'list-loop') {
      this.itemList = this.countries();
      this.customers = [
        { name: 'Alex', countries: [this.itemList[0], this.itemList[3]] },
        { name: 'Sam', countries: [this.itemList[1]] },
        { name: 'Taylor', countries: [] }
      ];
      this.selectedItems = [];
      this.settings = this.makeSettings({ text: 'Select Countries', enableSearchFilter: true, badgeShowLimit: 2 });
    }

    if (this.mode === 'dialog') {
      this.selectedItems = [this.itemList[0], this.itemList[1]];
      this.settings = this.makeSettings({ text: 'Select Countries', enableSearchFilter: true, tagToBody: true, appendToBody: true, maxHeight: 220 });
    }

    if (this.mode === 'multiple') {
      this.directorySpecialties = this.directories();
      this.useCases = this.countries().map((country) => ({ ...country, name: country.itemName }));
      this.selectedDirectorySpecialties = [this.directorySpecialties[0], this.directorySpecialties[1]];
      this.selectedUseCases = [this.useCases[0]];
      this.dropdownSettings = this.makeSettings({ text: 'Select', enableSearchFilter: true, labelKey: 'name', badgeShowLimit: 2 });
      this.dropdownSettings2 = this.makeSettings({ text: 'Select', enableSearchFilter: true, badgeShowLimit: 2 });
    }

    if (this.mode === 'dynamic') {
      this.itemList = this.fruits();
      this.selectedItems = [];
      this.settings = this.makeSettings({ text: 'Select Items', enableSearchFilter: true });
    }

    if (this.mode === 'methods') {
      this.selectedItems = [this.itemList[0], this.itemList[1], this.itemList[2]];
      this.settings = this.makeSettings({ text: 'Select Countries', enableSearchFilter: true });
    }

    if (this.mode === 'events') {
      this.selectedItems = [this.itemList[0], this.itemList[1], this.itemList[2]];
      this.settings = this.makeSettings({ text: 'Select Countries', enableSearchFilter: true });
    }

    if (this.mode === 'disabled') {
      this.settings = this.makeSettings({ text: 'Select Countries', enableSearchFilter: false, disabled: false });
    }

    if (EXAMPLE.slug === 'limit-selection') {
      this.settings = this.makeSettings({ text: 'Select Countries', enableSearchFilter: true, limitSelection: 2, badgeShowLimit: 3 });
    }

    if (EXAMPLE.slug === 'limit-badges') {
      this.selectedItems = [this.itemList[0], this.itemList[1], this.itemList[2], this.itemList[3], this.itemList[4]];
      this.settings = this.makeSettings({ text: 'Select Countries', enableSearchFilter: true, badgeShowLimit: 3 });
    }

    if (EXAMPLE.slug === 'custom-placeholder') {
      this.settings = this.makeSettings({ text: 'Pick countries', enableSearchFilter: true, searchPlaceholderText: 'Type a country name', noDataLabel: 'No matching countries' });
    }

    if (EXAMPLE.slug === 'search-filter-by-property') {
      this.itemList = this.countriesWithMeta();
      this.selectedItems = [this.itemList[0], this.itemList[1]];
      this.settings = this.makeSettings({ text: 'Search by country name', enableSearchFilter: true, searchBy: ['itemName'], badgeShowLimit: 3 });
    }

    if (this.mode === 'styling') {
      this.settings = this.makeSettings({ text: 'Styled dropdown', enableSearchFilter: true, classes: 'custom-class', badgeShowLimit: 3 });
    }
  }

  private makeSettings(overrides: any = {}) {
    return {
      singleSelection: false,
      text: 'Select',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      enableCheckAll: true,
      enableSearchFilter: false,
      searchPlaceholderText: 'Search',
      badgeShowLimit: 999999999,
      maxHeight: 220,
      showCheckbox: true,
      noDataLabel: 'No data',
      clearAll: true,
      skin: this.activeSkin,
      ...overrides
    };
  }

  private applySkinToSettings() {
    this.settings = { ...this.settings, skin: this.activeSkin };
    this.dropdownSettings = { ...this.dropdownSettings, skin: this.activeSkin };
    this.dropdownSettings2 = { ...this.dropdownSettings2, skin: this.activeSkin };
  }

  onItemSelect(item: any) {
    this.selectedItemString = JSON.stringify(item, null, 2);
    this.record('select', item);
  }

  OnItemDeSelect(item: any) {
    this.unSelectedItemString = JSON.stringify(item, null, 2);
    this.record('deselect', item);
  }

  onSelectAll(items: any) {
    this.selectAllString = JSON.stringify(items, null, 2);
    this.record('selectAll', items);
  }

  onDeSelectAll(items: any) {
    this.unSelectAllString = JSON.stringify(items, null, 2);
    this.record('deselectAll', items);
  }

  onOpen(event: any) {
    this.openString = JSON.stringify(event || 'opened', null, 2);
    this.record('open', 'opened');
  }

  onClose(event: any) {
    this.closeString = JSON.stringify(event || 'closed', null, 2);
    this.record('close', 'closed');
  }

  onAddItem(value: string) {
    const label = String(value || '').trim();
    if (!label) {
      return;
    }
    const item: DemoItem = { id: ++this.count, itemName: label, name: label };
    this.itemList = [...this.itemList, item];
    this.selectedItems = [...this.selectedItems, item];
    this.record('addItem', item);
  }

  onSearch() {
    const value = this.filter.toLowerCase();
    this.itemList = this.allApiItems.filter((item) =>
      String(item.name || item.itemName || '').toLowerCase().includes(value) ||
      String(item.capital || '').toLowerCase().includes(value)
    );
  }

  onSubmit() {
    this.record('submit', this.formModel);
  }

  submitForm() {
    this.record('submit', this.userForm.value);
  }

  changeData() {
    this.selectedItems = [];
    if (this.mode === 'lazy-remote') {
      this.itemList = this.numberedItems(1, 20).map((item) => ({ ...item, name: item.itemName }));
    }
    this.record('reset', 'selection cleared');
  }

  open(event: Event) {
    this.dropdownElem?.openDropdown?.();
    event.stopPropagation();
  }

  close(event: Event) {
    this.dropdownElem?.closeDropdown?.();
    event.stopPropagation();
  }

  disable() {
    this.settings = { ...this.settings, disabled: true };
    this.record('disabled', true);
  }

  enable() {
    this.settings = { ...this.settings, disabled: false };
    this.record('disabled', false);
  }

  fetchMore(event: any) {
    if (this.loading || (event && event.endIndex < this.itemList.length - 1)) {
      return;
    }
    this.loading = true;
    const start = this.itemList.length + 1;
    setTimeout(() => {
      const chunk = this.numberedItems(start, 10).map((item) => ({ ...item, name: item.itemName }));
      this.itemList = [...this.itemList, ...chunk];
      this.loading = false;
      this.record('fetchMore', chunk.length + ' rows');
    }, 250);
  }

  loadDataSet1() {
    this.itemList = this.fruits();
    this.selectedItems = [];
    this.settings = this.makeSettings({ ...this.settings, text: 'Select Fruits', groupBy: this.mode === 'group' ? 'category' : undefined });
    this.record('data', 'fruits');
  }

  loadDataSet2() {
    this.itemList = this.mode === 'group' ? this.groupedCountries() : this.countries();
    this.selectedItems = [];
    this.settings = this.makeSettings({ ...this.settings, text: 'Select Countries', groupBy: this.mode === 'group' ? 'category' : undefined });
    this.record('data', 'countries');
  }

  onDirectoriesOpen(event: any) {
    this.directoriesDropdownStatus = 'open';
    this.record('directoriesOpen', event || 'open');
  }

  onDirectoriesClose(event: any) {
    this.directoriesDropdownStatus = 'closed';
    this.record('directoriesClose', event || 'closed');
  }

  onCasesOpen(event: any) {
    this.casesDropdownStatus = 'open';
    this.record('casesOpen', event || 'open');
  }

  onCasesClose(event: any) {
    this.casesDropdownStatus = 'closed';
    this.record('casesClose', event || 'closed');
  }

  record(type: string, value: unknown) {
    this.events = [type + ': ' + this.toLabel(value), ...this.events].slice(0, 8);
  }

  currentSelection() {
    if (this.mode === 'template-form') {
      return this.formModel;
    }
    if (this.mode === 'reactive-form') {
      return this.userForm.value;
    }
    if (this.mode === 'list-loop') {
      return this.customers;
    }
    if (this.mode === 'multiple') {
      return {
        selectedDirectorySpecialties: this.selectedDirectorySpecialties,
        selectedUseCases: this.selectedUseCases
      };
    }
    return this.selectedItems;
  }

  currentSettings() {
    if (this.mode === 'multiple') {
      return {
        dropdownSettings: this.dropdownSettings,
        dropdownSettings2: this.dropdownSettings2
      };
    }
    return this.settings;
  }

  private countries(): DemoItem[] {
    return [
      { id: 1, itemName: 'Brazil' },
      { id: 2, itemName: 'Canada' },
      { id: 3, itemName: 'Portugal' },
      { id: 4, itemName: 'United States' },
      { id: 5, itemName: 'Argentina' },
      { id: 6, itemName: 'Mexico' },
      { id: 7, itemName: 'Colombia' },
      { id: 8, itemName: 'Chile' }
    ];
  }

  private groupedCountries(): DemoItem[] {
    return [
      { id: 1, itemName: 'Brazil', category: 'South America' },
      { id: 2, itemName: 'Argentina', category: 'South America' },
      { id: 3, itemName: 'Chile', category: 'South America' },
      { id: 4, itemName: 'Canada', category: 'North America' },
      { id: 5, itemName: 'United States', category: 'North America' },
      { id: 6, itemName: 'Mexico', category: 'North America' },
      { id: 7, itemName: 'Portugal', category: 'Europe' },
      { id: 8, itemName: 'Germany', category: 'Europe' }
    ];
  }

  private countriesWithMeta(): DemoItem[] {
    return [
      { id: 1, itemName: 'Brazil', name: 'Brazil', capital: 'Brasilia', region: 'South America', flag: 'https://flagcdn.com/w40/br.png', image: 'https://flagcdn.com/w40/br.png' },
      { id: 2, itemName: 'Canada', name: 'Canada', capital: 'Ottawa', region: 'North America', flag: 'https://flagcdn.com/w40/ca.png', image: 'https://flagcdn.com/w40/ca.png' },
      { id: 3, itemName: 'Portugal', name: 'Portugal', capital: 'Lisbon', region: 'Europe', flag: 'https://flagcdn.com/w40/pt.png', image: 'https://flagcdn.com/w40/pt.png' },
      { id: 4, itemName: 'United States', name: 'United States', capital: 'Washington, D.C.', region: 'North America', flag: 'https://flagcdn.com/w40/us.png', image: 'https://flagcdn.com/w40/us.png' },
      { id: 5, itemName: 'Argentina', name: 'Argentina', capital: 'Buenos Aires', region: 'South America', flag: 'https://flagcdn.com/w40/ar.png', image: 'https://flagcdn.com/w40/ar.png' },
      { id: 6, itemName: 'Mexico', name: 'Mexico', capital: 'Mexico City', region: 'North America', flag: 'https://flagcdn.com/w40/mx.png', image: 'https://flagcdn.com/w40/mx.png' }
    ];
  }

  private skills(): DemoItem[] {
    return [
      { id: 1, itemName: 'Angular' },
      { id: 2, itemName: 'JavaScript' },
      { id: 3, itemName: 'HTML' },
      { id: 4, itemName: 'CSS' },
      { id: 5, itemName: 'ReactJS' },
      { id: 6, itemName: 'HTML5' }
    ];
  }

  private fruits(): DemoItem[] {
    return [
      { id: 1, itemName: 'Apple', category: 'Tree fruit' },
      { id: 2, itemName: 'Orange', category: 'Citrus' },
      { id: 3, itemName: 'Banana', category: 'Tropical' },
      { id: 4, itemName: 'Grape', category: 'Berry' },
      { id: 5, itemName: 'Mango', category: 'Tropical' }
    ];
  }

  private directories(): DemoItem[] {
    return [
      { id: 'PBMMedAdhr', name: 'PBM Medication Adherence' },
      { id: 'GapsInCare', name: 'Gaps In Care' },
      { id: 'UCTest1', name: 'Use Case Test 1' },
      { id: 'BASICSAVE', name: 'Generic alternative' },
      { id: 'ADVSAVE', name: 'Advanced savings' },
      { id: 'AttAlert', name: 'Attachment Alert' }
    ];
  }

  private numberedItems(start: number, count: number): DemoItem[] {
    return Array.from({ length: count }, (_, index) => {
      const id = start + index;
      return { id, itemName: 'Item ' + id };
    });
  }

  private toLabel(value: unknown) {
    if (Array.isArray(value)) {
      return value.length + ' item' + (value.length === 1 ? '' : 's');
    }
    if (value && typeof value === 'object') {
      const item = value as DemoItem;
      return String(item.itemName || item.name || item.id || JSON.stringify(value));
    }
    return String(value);
  }
}
