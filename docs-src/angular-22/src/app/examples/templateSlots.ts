import { Component, OnInit } from '@angular/core';
import { DropdownSettings } from '@stackline/angular-multiselect-dropdown';

@Component({
  standalone: false,
  templateUrl: './views/templateSlots.html',
  styles: [`
    .slot-grid { display: grid; gap: 18px; }
    .country-option { display: grid; grid-template-columns: auto 1fr auto; align-items: center; gap: 12px; width: 100%; }
    .country-code { display: inline-grid; place-items: center; width: 34px; height: 26px; border-radius: 8px; background: #e8eaf6; color: #303f9f; font-weight: 800; }
    .country-copy { display: grid; gap: 2px; }
    .country-copy strong { line-height: 1.2; }
    .country-copy small { color: #667085; }
    .selected-mark { color: #0f766e; font-weight: 800; }
    .badge-template { display: inline-flex; align-items: center; gap: 6px; }
  `]
})
export class TemplateSlotsExample implements OnInit {
  itemList = [];
  selectedItems = [];
  settings: DropdownSettings = {};

  ngOnInit() {
    this.itemList = [
      { id: 1, itemName: 'Brazil', region: 'Americas', code: 'BR' },
      { id: 2, itemName: 'Canada', region: 'Americas', code: 'CA' },
      { id: 3, itemName: 'Portugal', region: 'Europe', code: 'PT' },
      { id: 4, itemName: 'Colombia', region: 'Americas', code: 'CO' },
      { id: 5, itemName: 'Germany', region: 'Europe', code: 'DE' },
      { id: 6, itemName: 'Mexico', region: 'Americas', code: 'MX' }
    ];

    this.selectedItems = [this.itemList[0], this.itemList[2]];
    this.settings = {
      text: 'Template slot countries',
      enableSearchFilter: true,
      searchAutofocus: false,
      groupBy: 'region',
      badgeShowLimit: 2,
      skin: 'brand',
      maxHeight: 260
    };
  }
}
