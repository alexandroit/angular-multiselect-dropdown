import { Component } from '@angular/core';

type SkinName = 'classic' | 'material' | 'dark' | 'custom' | 'brand';

interface Country {
  id: number;
  itemName: string;
}

@Component({
  standalone: false,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  readonly packageVersion = '21.1.14';
  readonly angularLine = '21.x';
  readonly skins: SkinName[] = ['classic', 'material', 'dark', 'custom', 'brand'];

  activeSkin: SkinName = 'classic';

  countries: Country[] = [
    { id: 1, itemName: 'Brazil' },
    { id: 2, itemName: 'Canada' },
    { id: 3, itemName: 'Portugal' },
    { id: 4, itemName: 'United States' },
    { id: 5, itemName: 'Argentina' },
    { id: 6, itemName: 'Germany' },
    { id: 7, itemName: 'Mexico' },
    { id: 8, itemName: 'Colombia' }
  ];

  selectedCountries: Country[] = [
    { id: 2, itemName: 'Canada' },
    { id: 3, itemName: 'Portugal' },
    { id: 4, itemName: 'United States' }
  ];

  settings = this.makeSettings(this.activeSkin);
  events: string[] = ['ready'];

  switchSkin(skin: SkinName) {
    this.activeSkin = skin;
    this.settings = this.makeSettings(skin);
    this.record('skin', skin);
  }

  record(type: string, value: unknown) {
    const label = this.toLabel(value);
    this.events = [`${type}: ${label}`, ...this.events].slice(0, 6);
  }

  private makeSettings(skin: SkinName) {
    return {
      singleSelection: false,
      text: `Skin ${this.skinLabel(skin)}`,
      selectAllText: 'Select all',
      unSelectAllText: 'Clear all',
      enableCheckAll: true,
      enableSearchFilter: true,
      searchPlaceholderText: 'Search',
      badgeShowLimit: 3,
      maxHeight: 220,
      showCheckbox: true,
      noDataLabel: 'No data',
      skin
    };
  }

  private skinLabel(skin: SkinName) {
    return skin.charAt(0).toUpperCase() + skin.slice(1);
  }

  private toLabel(value: unknown) {
    if (Array.isArray(value)) {
      return `${value.length} item${value.length === 1 ? '' : 's'}`;
    }

    if (value && typeof value === 'object' && 'itemName' in value) {
      return String((value as Country).itemName);
    }

    return String(value);
  }
}
