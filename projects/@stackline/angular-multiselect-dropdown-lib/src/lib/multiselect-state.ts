import { DropdownSettings } from './multiselect.interface';
import { safeObjectAssign } from './safe-object';
import { normalizeIdentifier } from './identifier';

export type AngularMultiselectItemKey<T> = Extract<keyof T, string>;

export interface AngularMultiselectStateConfig<T> {
    data: T[];
    selectedItems?: T[];
    settings?: DropdownSettings;
    id?: string;
    onChange?: (items: T[]) => void;
}

export interface AngularMultiselectOptionState<T> {
    item: T;
    key: string;
    label: string;
    selected: boolean;
    disabled: boolean;
    id: string;
    role: 'option';
    ariaSelected: 'true' | 'false';
    ariaChecked: 'true' | 'false';
    ariaDisabled: 'true' | 'false';
}

export interface AngularMultiselectListboxState {
    id: string;
    role: 'listbox';
    ariaMultiselectable: 'true' | 'false';
    ariaLabel: string;
}

export interface AngularMultiselectTriggerState {
    role: 'combobox';
    ariaHaspopup: 'listbox';
    ariaControls: string;
    ariaExpanded: 'true' | 'false';
    ariaActivedescendant: string | null;
    ariaLabel: string;
}

const defaultSettings: DropdownSettings = {
    singleSelection: false,
    text: 'Select',
    primaryKey: 'id',
    labelKey: 'itemName',
    listboxAriaLabel: 'Available options',
    ariaLabel: 'Select options'
};

function cleanId(value: any) {
    return normalizeIdentifier(value === undefined || value === null ? '' : value);
}

export class AngularMultiselectState<T extends Record<string, any>> {
    data: T[];
    selectedItems: T[];
    settings: DropdownSettings;
    filter = '';
    isOpen = false;
    activeKey: string | null = null;

    private id: string;
    private onChange?: (items: T[]) => void;

    constructor(config: AngularMultiselectStateConfig<T>) {
        this.id = config.id || Math.random().toString(36).slice(2);
        this.data = config.data || [];
        this.selectedItems = config.selectedItems ? config.selectedItems.slice() : [];
        this.settings = safeObjectAssign({}, defaultSettings, config.settings || {});
        this.onChange = config.onChange;
    }

    setData(data: T[]) {
        this.data = data || [];
    }

    setSelectedItems(items: T[]) {
        this.selectedItems = items ? items.slice() : [];
        this.emitChange();
    }

    setFilter(value: string) {
        this.filter = value || '';
    }

    open() {
        this.isOpen = true;
    }

    close() {
        this.isOpen = false;
        this.activeKey = null;
    }

    toggleOpen() {
        this.isOpen = !this.isOpen;
        if (!this.isOpen) {
            this.activeKey = null;
        }
    }

    getKey(item: T) {
        return String(item[this.settings.primaryKey || 'id']);
    }

    getLabel(item: T) {
        var label = item[this.settings.labelKey || 'itemName'];
        return label === undefined || label === null ? '' : String(label);
    }

    isSelected(item: T) {
        var key = this.getKey(item);
        return this.selectedItems.some((selected) => this.getKey(selected) === key);
    }

    isDisabled(item: T) {
        return !!(item && (item as any).disabled);
    }

    getVisibleOptions() {
        var query = this.filter.toLowerCase();
        if (!query) {
            return this.data.slice();
        }

        var searchBy = this.settings.searchBy && this.settings.searchBy.length
            ? this.settings.searchBy
            : [this.settings.labelKey || 'itemName'];

        return this.data.filter((item) => {
            return searchBy.some((field) => {
                var value = item[field];
                return value !== undefined && value !== null && String(value).toLowerCase().indexOf(query) >= 0;
            });
        });
    }

    getOptionState(item: T, index: number): AngularMultiselectOptionState<T> {
        var key = this.getKey(item);
        var selected = this.isSelected(item);
        var disabled = this.isDisabled(item);

        return {
            item: item,
            key: key,
            label: this.getLabel(item),
            selected: selected,
            disabled: disabled,
            id: this.id + '-option-' + (cleanId(key) || index),
            role: 'option',
            ariaSelected: selected ? 'true' : 'false',
            ariaChecked: selected ? 'true' : 'false',
            ariaDisabled: disabled ? 'true' : 'false'
        };
    }

    getOptionStates() {
        return this.getVisibleOptions().map((item, index) => this.getOptionState(item, index));
    }

    getListboxState(): AngularMultiselectListboxState {
        return {
            id: this.id + '-listbox',
            role: 'listbox',
            ariaMultiselectable: this.settings.singleSelection ? 'false' : 'true',
            ariaLabel: this.settings.listboxAriaLabel || this.settings.ariaLabel || 'Available options'
        };
    }

    getTriggerState(): AngularMultiselectTriggerState {
        return {
            role: 'combobox',
            ariaHaspopup: 'listbox',
            ariaControls: this.getListboxState().id,
            ariaExpanded: this.isOpen ? 'true' : 'false',
            ariaActivedescendant: this.activeKey,
            ariaLabel: this.settings.ariaLabel || this.settings.text || 'Select options'
        };
    }

    toggleItem(item: T) {
        if (this.isDisabled(item)) {
            return;
        }

        if (this.isSelected(item)) {
            this.removeItem(item);
            return;
        }

        if (this.settings.singleSelection) {
            this.selectedItems = [item];
            this.close();
        }
        else {
            var selectionLimit = this.getSelectionLimit();
            if (selectionLimit > 0 && this.selectedItems.length >= selectionLimit) {
                return;
            }
            this.selectedItems = this.selectedItems.concat(item);
        }

        this.emitChange();
    }

    removeItem(item: T) {
        var key = this.getKey(item);
        this.selectedItems = this.selectedItems.filter((selected) => this.getKey(selected) !== key);
        this.emitChange();
    }

    clearSelection() {
        this.selectedItems = [];
        this.emitChange();
    }

    selectAll() {
        if (this.settings.singleSelection) {
            return;
        }

        var selectableItems = this.getVisibleOptions().filter((item) => !this.isDisabled(item));
        var selectionLimit = this.getSelectionLimit();
        this.selectedItems = selectionLimit > 0
            ? selectableItems.slice(0, selectionLimit)
            : selectableItems;
        this.emitChange();
    }

    deSelectAll() {
        this.clearSelection();
    }

    private getSelectionLimit() {
        var limit = Number(this.settings.limitSelection || 0);
        return isFinite(limit) && limit > 0 ? Math.floor(limit) : 0;
    }

    private emitChange() {
        if (this.onChange) {
            this.onChange(this.selectedItems.slice());
        }
    }
}

export function createAngularMultiselectState<T extends Record<string, any>>(config: AngularMultiselectStateConfig<T>) {
    return new AngularMultiselectState<T>(config);
}

export function defineAngularMultiselectSettings<T extends Record<string, any>>(
    settings: DropdownSettings & {
        primaryKey?: AngularMultiselectItemKey<T>;
        labelKey?: AngularMultiselectItemKey<T>;
        searchBy?: AngularMultiselectItemKey<T>[];
        groupBy?: AngularMultiselectItemKey<T>;
    }
) {
    return settings;
}
