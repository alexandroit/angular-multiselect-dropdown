import { Component, OnInit } from '@angular/core';
import { DropdownSettings } from '@stackline/angular-multiselect-dropdown';

@Component({
  standalone: false,
  templateUrl: './views/ariaState.html',
  styles: [`
    .aria-grid { display: grid; gap: 18px; }
    .aria-panel { display: grid; gap: 8px; padding: 14px; border: 1px solid #e4e7ec; border-radius: 16px; background: #f8fafc; }
    code { color: #3f51b5; font-weight: 700; }
  `]
})
export class AriaStateExample implements OnInit {
  itemList = [];
  selectedItems = [];
  settings: DropdownSettings = {};

  ngOnInit() {
    this.itemList = [
      { id: 1, itemName: 'Brazil', region: 'Americas' },
      { id: 2, itemName: 'Canada', region: 'Americas' },
      { id: 3, itemName: 'Portugal', region: 'Europe' },
      { id: 4, itemName: 'Colombia', region: 'Americas' },
      { id: 5, itemName: 'Germany', region: 'Europe' }
    ];

    this.selectedItems = [
      { id: 1, itemName: 'Brazil', region: 'Americas' },
      { id: 2, itemName: 'Canada', region: 'Americas' }
    ];

    this.settings = {
      text: 'ARIA-tested countries',
      enableSearchFilter: true,
      searchAutofocus: false,
      listboxAriaLabel: 'Country options',
      ariaLabel: 'ARIA state country picker',
      skin: 'material',
      maxHeight: 220
    };
  }
}
