import { Component, OnInit } from '@angular/core';
import { DropdownSettings } from '@stackline/angular-multiselect-dropdown';

@Component({
  standalone: false,
  templateUrl: './views/keyboardContract.html',
  styles: [`
    .contract-grid { display: grid; gap: 18px; }
    .setting-row { display: flex; flex-wrap: wrap; gap: 10px; }
    .setting-row button { min-height: 36px; padding: 0 12px; border: 1px solid #d7dcec; border-radius: 999px; background: #fff; color: #344054; font-weight: 700; }
    .setting-row button.active { background: #3f51b5; border-color: #3f51b5; color: #fff; }
    .code-note { display: grid; gap: 8px; margin-top: 14px; padding: 14px; border: 1px solid #e4e7ec; border-radius: 16px; background: #f8fafc; color: #344054; }
    pre { white-space: pre-wrap; margin: 0; }
  `]
})
export class KeyboardContractExample implements OnInit {
  itemList = [];
  selectedItems = [];
  settings: DropdownSettings = {};
  spaceMode: 'toggle' | 'toggle-and-next' = 'toggle';

  ngOnInit() {
    this.itemList = [
      { id: 1, itemName: 'Brazil', region: 'Americas' },
      { id: 2, itemName: 'Canada', region: 'Americas' },
      { id: 3, itemName: 'Portugal', region: 'Europe' },
      { id: 4, itemName: 'Colombia', region: 'Americas' },
      { id: 5, itemName: 'Germany', region: 'Europe' },
      { id: 6, itemName: 'Mexico', region: 'Americas' }
    ];

    this.selectedItems = [{ id: 1, itemName: 'Brazil', region: 'Americas' }];
    this.settings = this.makeSettings();
  }

  toggleKeyboard(key: 'space' | 'tab' | 'arrows' | 'escape' | 'backspaceRemovesLastWhenSearchEmpty' | 'deleteRemovesFocusedBadge') {
    const keyboard = Object.assign({}, this.settings.keyboard || {});
    keyboard[key] = keyboard[key] === false;
    this.settings = Object.assign({}, this.settings, { keyboard });
  }

  setSpaceMode(mode: 'toggle' | 'toggle-and-next') {
    this.spaceMode = mode;
    this.settings = this.makeSettings();
  }

  makeSettings(): DropdownSettings {
    return {
      text: 'Keyboard-tested countries',
      enableSearchFilter: true,
      searchAutofocus: false,
      badgeShowLimit: 3,
      maxHeight: 220,
      skin: 'classic',
      keyboard: {
        space: this.settings.keyboard?.space !== false,
        spaceOptionAction: this.spaceMode,
        tab: this.settings.keyboard?.tab !== false,
        arrows: this.settings.keyboard?.arrows !== false,
        escape: this.settings.keyboard?.escape !== false,
        backspaceRemovesLastWhenSearchEmpty: !!this.settings.keyboard?.backspaceRemovesLastWhenSearchEmpty,
        deleteRemovesFocusedBadge: this.settings.keyboard?.deleteRemovesFocusedBadge !== false
      }
    };
  }

  get settingsJson() {
    return JSON.stringify({ keyboard: this.settings.keyboard }, null, 2);
  }
}
