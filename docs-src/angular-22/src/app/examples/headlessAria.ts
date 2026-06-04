import { Component, OnInit } from '@angular/core';
import {
  AngularMultiselectOptionState,
  AngularMultiselectState,
  defineAngularMultiselectSettings
} from '@stackline/angular-multiselect-dropdown';

interface CountryOption {
  id: number;
  itemName: string;
  region: string;
  code: string;
}

@Component({
  standalone: false,
  templateUrl: './views/headlessAria.html',
  styles: [`
    .headless-shell { display: grid; gap: 18px; }
    .headless-root { position: relative; max-width: 620px; }
    .headless-trigger { width: 100%; min-height: 48px; border: 1px solid #c5cae9; border-radius: 16px; background: #fff; padding: 0 16px; text-align: left; font-weight: 700; color: #253858; }
    .headless-panel { margin-top: 8px; border: 1px solid #c5cae9; border-radius: 18px; background: #fff; box-shadow: 0 16px 36px rgba(63, 81, 181, 0.16); overflow: hidden; }
    .headless-toolbar { display: grid; grid-template-columns: 1fr auto auto; gap: 8px; padding: 12px; border-bottom: 1px solid #e4e7ec; background: #f8fafc; }
    .headless-toolbar input { min-height: 38px; border: 1px solid #d7dcec; border-radius: 12px; padding: 0 12px; }
    .headless-toolbar button { border: 1px solid #d7dcec; border-radius: 12px; background: #fff; padding: 0 12px; font-weight: 700; }
    .headless-listbox { display: grid; gap: 4px; max-height: 240px; overflow: auto; padding: 8px; }
    .headless-option { display: grid; grid-template-columns: auto 1fr auto; align-items: center; gap: 12px; min-height: 42px; border-radius: 12px; padding: 8px 10px; cursor: pointer; }
    .headless-option[aria-selected="true"] { background: rgba(63, 81, 181, 0.12); color: #303f9f; }
    .headless-option:focus-visible { outline: 3px solid rgba(63, 81, 181, 0.3); outline-offset: 2px; }
    .headless-chip-row { display: flex; flex-wrap: wrap; gap: 8px; }
    .headless-chip { display: inline-flex; align-items: center; gap: 6px; min-height: 30px; border-radius: 999px; background: #e8eaf6; color: #303f9f; padding: 0 10px; font-weight: 700; }
    .headless-chip button { border: 0; background: transparent; color: inherit; cursor: pointer; }
    .flag { width: 22px; text-align: center; }
    .code-note { padding: 14px; border: 1px solid #e4e7ec; border-radius: 16px; background: #f8fafc; }
  `]
})
export class HeadlessAriaExample implements OnInit {
  countries: CountryOption[] = [];
  selectedItems: CountryOption[] = [];
  state: AngularMultiselectState<CountryOption>;

  ngOnInit() {
    this.countries = [
      { id: 1, itemName: 'Brazil', region: 'Americas', code: 'BR' },
      { id: 2, itemName: 'Canada', region: 'Americas', code: 'CA' },
      { id: 3, itemName: 'Portugal', region: 'Europe', code: 'PT' },
      { id: 4, itemName: 'Colombia', region: 'Americas', code: 'CO' },
      { id: 5, itemName: 'Germany', region: 'Europe', code: 'DE' },
      { id: 6, itemName: 'Mexico', region: 'Americas', code: 'MX' },
      { id: 7, itemName: 'France', region: 'Europe', code: 'FR' },
      { id: 8, itemName: 'Chile', region: 'Americas', code: 'CL' }
    ];

    this.selectedItems = [this.countries[0]];
    this.state = new AngularMultiselectState<CountryOption>({
      data: this.countries,
      selectedItems: this.selectedItems,
      settings: defineAngularMultiselectSettings<CountryOption>({
        text: 'Choose countries',
        primaryKey: 'id',
        labelKey: 'itemName',
        searchBy: ['itemName', 'region', 'code'],
        listboxAriaLabel: 'Custom country options',
        ariaLabel: 'Headless country picker'
      }),
      onChange: (items) => {
        this.selectedItems = items;
      }
    });
  }

  get trigger() {
    return this.state.getTriggerState();
  }

  get listbox() {
    return this.state.getListboxState();
  }

  get visibleOptions() {
    return this.state.getOptionStates();
  }

  get triggerLabel() {
    return this.selectedItems.length
      ? this.selectedItems.map((item) => item.itemName).join(', ')
      : 'Choose countries';
  }

  onOptionKeydown(event: KeyboardEvent, option: AngularMultiselectOptionState<CountryOption>, index: number) {
    if (event.key === 'Enter' || event.key === ' ' || event.key === 'Spacebar') {
      event.preventDefault();
      this.state.toggleItem(option.item);
      this.state.activeKey = option.id;
      this.focusOption(option.id);
      return;
    }

    if (event.key === 'Escape') {
      event.preventDefault();
      this.state.close();
      return;
    }

    if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
      event.preventDefault();
      const nextIndex = event.key === 'ArrowDown'
        ? Math.min(index + 1, this.visibleOptions.length - 1)
        : Math.max(index - 1, 0);
      const next = this.visibleOptions[nextIndex];
      this.state.activeKey = next.id;
      this.focusOption(next.id);
    }
  }

  remove(item: CountryOption) {
    this.state.removeItem(item);
  }

  private focusOption(id: string) {
    setTimeout(() => document.getElementById(id)?.focus(), 0);
  }
}
