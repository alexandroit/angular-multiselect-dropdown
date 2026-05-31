import { Component, OnInit, HostListener, ChangeDetectionStrategy, OnDestroy, NgModule, SimpleChanges, OnChanges, ChangeDetectorRef, AfterViewChecked, ViewEncapsulation, ContentChild, ViewChild, forwardRef, Input, Output, EventEmitter, ElementRef, AfterViewInit, Pipe, PipeTransform } from '@angular/core';
import { FormsModule, NG_VALUE_ACCESSOR, ControlValueAccessor, NG_VALIDATORS, Validator, UntypedFormControl } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MyException } from './multiselect.model';
import { DropdownSettings } from './multiselect.interface';
import { ClickOutsideDirective, ScrollDirective, styleDirective, setPosition } from './clickOutside';
import { ListFilterPipe } from './list-filter';
import { Item, Badge, Search, TemplateRenderer, CIcon } from './menu-item';
import { DataService } from './multiselect.service';
import { Subscription, Subject } from 'rxjs';
import { VirtualScrollerModule, VirtualScrollerComponent } from './virtual-scroll/virtual-scroll';
import { map, debounceTime, distinctUntilChanged, switchMap, tap } from 'rxjs/operators';

export const DROPDOWN_CONTROL_VALUE_ACCESSOR: any = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => AngularMultiSelect),
    multi: true
};
export const DROPDOWN_CONTROL_VALIDATION: any = {
    provide: NG_VALIDATORS,
    useExisting: forwardRef(() => AngularMultiSelect),
    multi: true,
}
const noop = () => {
};

@Component({
    selector: 'angular-multiselect, angular2-multiselect',
    templateUrl: './multiselect.component.html',
    host: { '[class]': 'defaultSettings.classes' },
    styleUrls: ['./multiselect.component.scss'],
    providers: [DROPDOWN_CONTROL_VALUE_ACCESSOR, DROPDOWN_CONTROL_VALIDATION],
    encapsulation: ViewEncapsulation.None,
    standalone: false
})

export class AngularMultiSelect implements OnInit, ControlValueAccessor, OnChanges, Validator, AfterViewChecked, OnDestroy {

    @Input()
    data: Array<any>;

    @Input()
    settings: DropdownSettings;

    @Input()
    loading: boolean;

    @Output('onSelect')
    onSelect: EventEmitter<any> = new EventEmitter<any>();

    @Output('onDeSelect')
    onDeSelect: EventEmitter<any> = new EventEmitter<any>();

    @Output('onSelectAll')
    onSelectAll: EventEmitter<Array<any>> = new EventEmitter<Array<any>>();

    @Output('onDeSelectAll')
    onDeSelectAll: EventEmitter<Array<any>> = new EventEmitter<Array<any>>();

    @Output('onOpen')
    onOpen: EventEmitter<any> = new EventEmitter<any>();

    @Output('onClose')
    onClose: EventEmitter<any> = new EventEmitter<any>();

    @Output('onScrollToEnd')
    onScrollToEnd: EventEmitter<any> = new EventEmitter<any>();

    @Output('onFilterSelectAll')
    onFilterSelectAll: EventEmitter<Array<any>> = new EventEmitter<Array<any>>();

    @Output('onFilterDeSelectAll')
    onFilterDeSelectAll: EventEmitter<Array<any>> = new EventEmitter<Array<any>>();

    @Output('onAddFilterNewItem')
    onAddFilterNewItem: EventEmitter<any> = new EventEmitter<any>();

    @Output('onGroupSelect')
    onGroupSelect: EventEmitter<any> = new EventEmitter<any>();

    @Output('onGroupDeSelect')
    onGroupDeSelect: EventEmitter<any> = new EventEmitter<any>();

    @ContentChild(Item, { static: false }) itemTempl: Item;
    @ContentChild(Badge, { static: false }) badgeTempl: Badge;
    @ContentChild(Search, { static: false }) searchTempl: Search;


    @ViewChild('searchInput', { static: false }) searchInput: ElementRef;
    @ViewChild('selectedList', { static: false }) selectedListElem: ElementRef;
    @ViewChild('dropdownList', { static: false }) dropdownListElem: ElementRef;
    @ViewChild('stacklineDropdown', { static: false }) stacklineDropdown: ElementRef;
    @ViewChild('triggerButton', { static: false }) triggerButton: ElementRef;

    @HostListener('document:keyup.escape', ['$event'])
    onEscapeDown(event: Event) {
        if (this.settings && this.settings.escapeToClose && this.isKeyboardEnabled('escape')) {
            this.closeDropdown();
        }
    }

    @HostListener('document:click', ['$event'])
    onDocumentClick(event: Event) {
        this.closeDropdownOnClickOut(event);
    }

    @HostListener('window:scroll', ['$event'])
    onScroll(event: any) {
        if (this.isActive) {
            this.scheduleDropdownPositionUpdate();
        }
    }

    @HostListener('window:resize', ['$event'])
    onResize(event: any) {
        if (this.isActive) {
            this.scheduleDropdownPositionUpdate();
        }
    }

    virtualdata: any = [];
    searchTerm$ = new Subject<string>();

    public selectedItems: Array<any>;
    public isActive: boolean = false;
    public isSelectAll: boolean = false;
    public isFilterSelectAll: boolean = false;
    public isInfiniteFilterSelectAll: boolean = false;
    public groupedData: Array<any>;
    filter: any;
    public chunkArray: any[];
    public scrollTop: any;
    public chunkIndex: any[] = [];
    public cachedItems: any[] = [];
    public groupCachedItems: any[] = [];
    public totalRows: any;
    public itemHeight: any = 41.6;
    public screenItemsLen: any;
    public cachedItemsLen: any;
    public totalHeight: any;
    public scroller: any;
    public maxBuffer: any;
    public lastScrolled: any;
    public lastRepaintY: any;
    public selectedListHeight: any;
    public filterLength: any = 0;
    public infiniteFilterLength: any = 0;
    public viewPortItems: any;
    public item: any;
    public dropdownListYOffset: number = 0;
    subscription: Subscription;
    public dropDownWidth: number | null = null;
    public dropDownTop: string | null = null;
    public dropDownBottom: string | null = null;
    public dropDownLeft: number | null = null;
    public dropDownDirection: 'top' | 'bottom' = 'bottom';
    private dropdownOriginalParent: Node | null = null;
    private dropdownOriginalNextSibling: Node | null = null;
    private dropdownAppendedToBody: boolean = false;
    private overlayListenersBound: boolean = false;
    private overlayPositionTimer: any = null;
    private boundOverlayPositionUpdate = () => this.scheduleDropdownPositionUpdate();
    private overlayThemeVariables: string[] = [
        '--ms-primary',
        '--ms-primary-soft',
        '--ms-surface',
        '--ms-surface-soft',
        '--ms-surface-muted',
        '--ms-outline',
        '--ms-outline-strong',
        '--ms-on-surface',
        '--ms-on-surface-muted',
        '--ms-chip-bg',
        '--ms-chip-text',
        '--ms-chip-remove',
        '--ms-shadow',
        '--ms-shadow-soft',
        '--stackline-ms-primary',
        '--stackline-ms-primary-soft',
        '--stackline-ms-surface',
        '--stackline-ms-surface-soft',
        '--stackline-ms-surface-muted',
        '--stackline-ms-outline',
        '--stackline-ms-outline-strong',
        '--stackline-ms-on-surface',
        '--stackline-ms-on-surface-muted',
        '--stackline-ms-chip-bg',
        '--stackline-ms-chip-text',
        '--stackline-ms-chip-remove',
        '--stackline-ms-shadow',
        '--stackline-ms-shadow-soft'
    ];
    public id: any = Math.random().toString(36).substring(2)
    public listboxId: string = 'stackline-listbox-' + this.id;
    public activeDescendantId: string | null = null;
    defaultSettings: DropdownSettings = {
        singleSelection: false,
        text: 'Select',
        enableCheckAll: true,
        selectAllText: 'Select All',
        unSelectAllText: 'UnSelect All',
        filterSelectAllText: 'Select all filtered results',
        filterUnSelectAllText: 'UnSelect all filtered results',
        enableSearchFilter: false,
        searchBy: [],
        maxHeight: 300,
        badgeShowLimit: 999999999999,
        classes: '',
        disabled: false,
        searchPlaceholderText: 'Search',
        showCheckbox: true,
        noDataLabel: 'No Data Available',
        searchAutofocus: true,
        lazyLoading: false,
        labelKey: 'itemName',
        primaryKey: 'id',
        skin: 'classic',
        theme: '',
        position: 'bottom',
        autoPosition: true,
        enableFilterSelectAll: true,
        selectGroup: false,
        addNewItemOnFilter: false,
        addNewButtonText: "Add",
        escapeToClose: true,
        clearAll: true,
        tagToBody: false,
        appendToBody: false,
        ariaLabel: 'Select options',
        listboxAriaLabel: 'Available options',
        searchAriaLabel: 'Search options',
        clearSearchAriaLabel: 'Clear search',
        clearAllAriaLabel: 'Clear selected options',
        removeItemAriaLabel: 'Remove selected option',
        openDropdownAriaLabel: 'Open options',
        closeDropdownAriaLabel: 'Close options',
        loadingText: 'Loading options',
        keyboard: {
            space: true,
            spaceOptionAction: 'toggle',
            tab: true,
            arrows: true,
            escape: true,
            backspaceRemovesLastWhenSearchEmpty: false,
            deleteRemovesFocusedBadge: true,
            backspace: false
        }
    }
    randomSize: boolean = true;
    public parseError: boolean;
    public filteredList: any = [];
    virtualScroollInit: boolean = false;
    @ViewChild(VirtualScrollerComponent, { static: false })
    private virtualScroller: VirtualScrollerComponent;
    public isDisabledItemPresent = false;

    constructor(public _elementRef: ElementRef, private cdr: ChangeDetectorRef, private filterPipe: ListFilterPipe) {
        this.subscription = this.searchTerm$.asObservable().pipe(
            debounceTime(1000),
            distinctUntilChanged(),
            tap(term => term)
        ).subscribe(val => {
            this.filterInfiniteList(val);
        });
    }
    ngOnInit() {
        this.normalizeSettings(this.settings);

        this.data = this.mergeSelectedIntoData(this.data || []);
        this.cachedItems = this.cloneArray(this.data);
        if (this.settings.position == 'top') {
            setTimeout(() => {
                this.selectedListHeight = { val: 0 };
                this.selectedListHeight.val = this.selectedListElem.nativeElement.clientHeight;
            });
        }
        setTimeout(() => {
            this.calculateDropdownDirection();
        });
        this.virtualScroollInit = false;
    }
    getSkinName() {
        var rawSkin = 'classic';

        if (this.settings) {
            rawSkin = this.settings.skin || this.settings.theme || 'classic';
        }

        var skin = String(rawSkin).toLowerCase().replace(/[^a-z0-9_-]+/g, '-');
        skin = skin.replace(/^-+|-+$/g, '');
        return skin || 'classic';
    }
    getDropdownClasses() {
        var skin = this.getSkinName();
        var classes = 'skin-' + skin + ' theme-' + skin;

        if (skin !== 'classic' && skin !== 'material' && skin !== 'dark' && skin !== 'custom') {
            classes += ' theme-custom';
        }

        if (this.isActive) {
            classes += ' is-open';
        }

        if (this.settings && this.settings.disabled) {
            classes += ' is-disabled';
        }

        if (this.loading) {
            classes += ' is-loading';
        }

        return classes;
    }

    private normalizeSettings(settings?: DropdownSettings) {
        var keyboardSettings = Object.assign(
            {},
            this.defaultSettings.keyboard || {},
            settings && settings.keyboard ? settings.keyboard : {}
        );

        this.settings = Object.assign({}, this.defaultSettings, settings, {
            keyboard: keyboardSettings
        });
        this.dropDownDirection = this.settings.position == 'top' ? 'top' : 'bottom';
    }

    private isKeyboardEnabled(settingName: string) {
        var keyboard: any = this.settings && this.settings.keyboard ? this.settings.keyboard : {};
        var value = keyboard[settingName];

        if (value === undefined && settingName === 'backspaceRemovesLastWhenSearchEmpty') {
            value = keyboard.backspace;
        }

        return value !== false;
    }

    private getSpaceOptionAction() {
        var keyboard = this.settings && this.settings.keyboard ? this.settings.keyboard : {};
        return keyboard.spaceOptionAction || 'toggle';
    }

    private getPrimaryKey() {
        return this.settings && this.settings.primaryKey ? this.settings.primaryKey : 'id';
    }

    private getLabelKey() {
        return this.settings && this.settings.labelKey ? this.settings.labelKey : 'itemName';
    }

    private getItemKey(item: any) {
        if (!item) {
            return '';
        }

        var key = item[this.getPrimaryKey()];
        return key === undefined || key === null ? '' : String(key);
    }

    private mergeSelectedIntoData(items: any[]) {
        var source = Array.isArray(items) ? items.slice() : [];
        var selected = Array.isArray(this.selectedItems) ? this.selectedItems : [];
        var keys = source.reduce((map, item) => {
            map[this.getItemKey(item)] = true;
            return map;
        }, {});

        selected.forEach((item) => {
            var key = this.getItemKey(item);
            if (key && !keys[key]) {
                source.push(item);
                keys[key] = true;
            }
        });

        return source;
    }

    isDropdownOpenTowardsTop() {
        return this.dropDownDirection == 'top';
    }

    getDropdownPanelClasses() {
        var classes = this.getDropdownClasses();

        if (!this.isActive) {
            return classes;
        }

        if (this.isBodyOverlayEnabled()) {
            classes += ' tagToBody';
        }

        if (this.isDropdownOpenTowardsTop()) {
            classes += ' opens-up';
        }
        else {
            classes += ' opens-down';
        }

        return classes;
    }

    isBodyOverlayEnabled() {
        return !!(this.settings && (this.settings.tagToBody || this.settings.appendToBody));
    }

    private getDropdownPanelElement(): HTMLElement | null {
        if (!this.dropdownListElem || !this.dropdownListElem.nativeElement) {
            return null;
        }

        return this.dropdownListElem.nativeElement as HTMLElement;
    }

    private getAnchorElement(): HTMLElement | null {
        if (this.selectedListElem && this.selectedListElem.nativeElement) {
            return this.selectedListElem.nativeElement as HTMLElement;
        }

        if (this.stacklineDropdown && this.stacklineDropdown.nativeElement) {
            return this.stacklineDropdown.nativeElement as HTMLElement;
        }

        return null;
    }

    private getDropdownMaxHeight() {
        return this.settings && this.settings.maxHeight ? this.settings.maxHeight : this.defaultSettings.maxHeight || 300;
    }

    private getDropdownPanelHeightForPositioning() {
        var panel = this.getDropdownPanelElement();

        if (panel && this.isActive) {
            var panelBounds = panel.getBoundingClientRect();
            var measuredHeight = Math.ceil(panelBounds.height || panel.offsetHeight || panel.scrollHeight || 0);

            if (measuredHeight > 0) {
                return measuredHeight;
            }
        }

        var estimatedHeight = this.getDropdownMaxHeight() + 18;

        if (this.settings && this.settings.enableSearchFilter) {
            estimatedHeight += 52;
        }

        if (this.settings && this.settings.enableCheckAll && !this.settings.singleSelection && !this.settings.limitSelection && this.hasSelectableItems()) {
            estimatedHeight += 44;
        }

        return estimatedHeight;
    }

    hasSelectableItems() {
        return this.getSelectableItems(this.data).length > 0;
    }

    private getSelectableItems(items: Array<any> = []) {
        return (items || []).filter((item: any) => item && !item.disabled && !item.grpTitle);
    }

    private areAllSelectableItemsSelected(items: Array<any> = []) {
        var selectableItems = this.getSelectableItems(items);

        if (!selectableItems.length || !this.selectedItems || this.selectedItems.length !== selectableItems.length) {
            return false;
        }

        return selectableItems.every((item: any) => this.isSelected(item));
    }

    private syncSelectAllState() {
        this.isSelectAll = this.areAllSelectableItemsSelected(this.data);
    }

    private isEventInsideHostOrPanel(event?: Event) {
        if (!event || !event.target) {
            return false;
        }

        var target = event.target as Node;
        var host = this.stacklineDropdown && this.stacklineDropdown.nativeElement
            ? this.stacklineDropdown.nativeElement as HTMLElement
            : this._elementRef && this._elementRef.nativeElement;
        var panel = this.getDropdownPanelElement();

        return !!((host && host.contains(target)) || (panel && panel.contains(target)));
    }

    private syncDropdownPanelThemeVariables() {
        var panel = this.getDropdownPanelElement();
        var root = this.stacklineDropdown && this.stacklineDropdown.nativeElement ? this.stacklineDropdown.nativeElement as HTMLElement : null;

        if (!panel || !root || typeof window === 'undefined' || !window.getComputedStyle) {
            return;
        }

        var rootStyles = window.getComputedStyle(root);
        this.overlayThemeVariables.forEach((variableName) => {
            var value = rootStyles.getPropertyValue(variableName);

            if (value && value.trim()) {
                panel.style.setProperty(variableName, value.trim());
            }
        });
    }

    private clearDropdownPanelThemeVariables() {
        var panel = this.getDropdownPanelElement();

        if (!panel) {
            return;
        }

        this.overlayThemeVariables.forEach((variableName) => {
            panel.style.removeProperty(variableName);
        });
    }

    private syncOpenDropdownPanelState(panel?: HTMLElement | null) {
        var dropdownPanel = panel || this.getDropdownPanelElement();

        if (!dropdownPanel) {
            return;
        }

        dropdownPanel.hidden = false;
        dropdownPanel.setAttribute('aria-hidden', 'false');
        dropdownPanel.classList.add('is-open');

        if (this.isBodyOverlayEnabled()) {
            dropdownPanel.classList.add('tagToBody');
        }

        if (this.isDropdownOpenTowardsTop()) {
            dropdownPanel.classList.add('opens-up');
            dropdownPanel.classList.remove('opens-down');
        }
        else {
            dropdownPanel.classList.add('opens-down');
            dropdownPanel.classList.remove('opens-up');
        }
    }

    private syncClosedDropdownPanelState(panel?: HTMLElement | null) {
        var dropdownPanel = panel || this.getDropdownPanelElement();

        if (!dropdownPanel) {
            return;
        }

        dropdownPanel.hidden = true;
        dropdownPanel.setAttribute('aria-hidden', 'true');
        dropdownPanel.classList.remove('is-open');
        dropdownPanel.classList.remove('tagToBody');
        dropdownPanel.classList.remove('opens-up');
        dropdownPanel.classList.remove('opens-down');
        dropdownPanel.style.removeProperty('top');
        dropdownPanel.style.removeProperty('bottom');
        dropdownPanel.style.removeProperty('left');
        dropdownPanel.style.removeProperty('width');
    }

    private resetDropdownPanelPosition() {
        this.dropDownWidth = null;
        this.dropDownTop = null;
        this.dropDownBottom = null;
        this.dropDownLeft = null;
    }

    private appendDropdownPanelToBody() {
        if (!this.isBodyOverlayEnabled() || !this.isActive || typeof document === 'undefined') {
            if (this.dropdownAppendedToBody) {
                this.restoreDropdownPanel();
            }
            return;
        }

        var panel = this.getDropdownPanelElement();
        if (!panel || !document.body) {
            return;
        }

        this.syncDropdownPanelThemeVariables();
        this.syncOpenDropdownPanelState(panel);

        if (!this.dropdownAppendedToBody) {
            this.dropdownOriginalParent = panel.parentNode;
            this.dropdownOriginalNextSibling = panel.nextSibling;
            document.body.appendChild(panel);
            this.dropdownAppendedToBody = true;
        }

    }

    private restoreDropdownPanel(removeFromDom: boolean = false) {
        this.unbindOverlayListeners();
        this.clearOverlayPositionTimer();

        var panel = this.getDropdownPanelElement();
        if (panel && (!this.isActive || removeFromDom)) {
            this.syncClosedDropdownPanelState(panel);
        }

        if (!panel || !this.dropdownAppendedToBody) {
            this.dropdownAppendedToBody = false;
            return;
        }

        this.clearDropdownPanelThemeVariables();

        if (removeFromDom) {
            if (panel.parentNode) {
                panel.parentNode.removeChild(panel);
            }
        }
        else if (this.dropdownOriginalParent) {
            if (this.dropdownOriginalNextSibling && this.dropdownOriginalNextSibling.parentNode === this.dropdownOriginalParent) {
                this.dropdownOriginalParent.insertBefore(panel, this.dropdownOriginalNextSibling);
            }
            else {
                this.dropdownOriginalParent.appendChild(panel);
            }
        }

        this.dropdownOriginalParent = null;
        this.dropdownOriginalNextSibling = null;
        this.dropdownAppendedToBody = false;
    }

    private bindOverlayListeners() {
        if (this.overlayListenersBound || typeof window === 'undefined' || typeof document === 'undefined') {
            return;
        }

        window.addEventListener('resize', this.boundOverlayPositionUpdate);
        window.addEventListener('scroll', this.boundOverlayPositionUpdate, true);
        document.addEventListener('scroll', this.boundOverlayPositionUpdate, true);
        this.overlayListenersBound = true;
    }

    private unbindOverlayListeners() {
        if (!this.overlayListenersBound || typeof window === 'undefined' || typeof document === 'undefined') {
            this.overlayListenersBound = false;
            return;
        }

        window.removeEventListener('resize', this.boundOverlayPositionUpdate);
        window.removeEventListener('scroll', this.boundOverlayPositionUpdate, true);
        document.removeEventListener('scroll', this.boundOverlayPositionUpdate, true);
        this.overlayListenersBound = false;
    }

    private clearOverlayPositionTimer() {
        if (this.overlayPositionTimer !== null) {
            clearTimeout(this.overlayPositionTimer);
            this.overlayPositionTimer = null;
        }
    }

    private scheduleDropdownPositionUpdate() {
        if (!this.isActive || this.overlayPositionTimer !== null) {
            return;
        }

        this.overlayPositionTimer = setTimeout(() => {
            this.overlayPositionTimer = null;
            if (!this.isActive) {
                return;
            }

            this.appendDropdownPanelToBody();
            this.calculateDropdownDirection();
            this.syncOpenDropdownPanelState();
            this.cdr.detectChanges();
        }, 0);
    }

    onDropdownPanelPointerDown(event: Event) {
        if (this.isBodyOverlayEnabled()) {
            event.stopPropagation();
        }
    }

    getAriaLabel() {
        if (this.settings && this.settings.ariaLabel) {
            return this.settings.ariaLabel;
        }

        return this.settings && this.settings.text ? this.settings.text : 'Select options';
    }

    getListboxAriaLabel() {
        return this.settings && this.settings.listboxAriaLabel ? this.settings.listboxAriaLabel : this.getAriaLabel();
    }

    getSearchAriaLabel() {
        return this.settings && this.settings.searchAriaLabel ? this.settings.searchAriaLabel : 'Search options';
    }

    getClearSearchAriaLabel() {
        return this.settings && this.settings.clearSearchAriaLabel ? this.settings.clearSearchAriaLabel : 'Clear search';
    }

    getClearAllAriaLabel() {
        return this.settings && this.settings.clearAllAriaLabel ? this.settings.clearAllAriaLabel : 'Clear selected options';
    }

    getOpenDropdownAriaLabel() {
        return this.settings && this.settings.openDropdownAriaLabel ? this.settings.openDropdownAriaLabel : 'Open options';
    }

    getCloseDropdownAriaLabel() {
        return this.settings && this.settings.closeDropdownAriaLabel ? this.settings.closeDropdownAriaLabel : 'Close options';
    }

    getItemLabel(item: any) {
        if (!item || !this.settings) {
            return '';
        }

        var label = item[this.getLabelKey()];
        if (label === undefined || label === null) {
            return '';
        }

        return String(label);
    }

    getRemoveItemAriaLabel(item: any) {
        var label = this.getItemLabel(item);
        var base = this.settings && this.settings.removeItemAriaLabel ? this.settings.removeItemAriaLabel : 'Remove selected option';
        return label ? base + ': ' + label : base;
    }

    getTemplateContext(item: any, index: number, prefix: string = 'option', group?: any) {
        var selected = item && item.grpTitle ? !!item.selected : this.isSelected(item);
        var disabled = this.isOptionDisabled(item);

        return {
            item: item,
            label: this.getItemLabel(item),
            selected: selected,
            disabled: disabled,
            index: index,
            group: group || null,
            optionId: this.getOptionId(item, index, prefix),
            ariaSelected: selected,
            ariaChecked: selected,
            ariaDisabled: disabled,
            isOpen: this.isActive,
            settings: this.settings,
            select: () => this.onItemClick(item, index, new Event('template-select')),
            remove: () => this.removeSelected(item),
            clear: () => this.clearSelection()
        };
    }

    getOptionId(item: any, index: number, prefix: string = 'option') {
        var rawId = item && this.settings && item[this.settings.primaryKey] !== undefined ? item[this.settings.primaryKey] : index;
        var cleanId = String(rawId).toLowerCase().replace(/[^a-z0-9_-]+/g, '-').replace(/^-+|-+$/g, '');
        var cleanPrefix = String(prefix || 'option').toLowerCase().replace(/[^a-z0-9_-]+/g, '-').replace(/^-+|-+$/g, '');
        return this.id + '-' + (cleanPrefix || 'option') + '-' + (cleanId || index);
    }

    isOptionDisabled(item: any) {
        if (!item || item.disabled || (this.settings && this.settings.disabled)) {
            return true;
        }

        return this.settings && this.settings.limitSelection == this.selectedItems?.length && !this.isSelected(item);
    }

    setActiveDescendant(item: any, index: number, prefix: string = 'option') {
        this.activeDescendantId = this.getOptionId(item, index, prefix);
    }

    getVisibleBadgeLimit() {
        var selectedCount = this.selectedItems ? this.selectedItems.length : 0;
        var rawLimit = this.settings ? this.settings.badgeShowLimit : selectedCount;
        var limit = Number(rawLimit);

        if (!isFinite(limit)) {
            return selectedCount;
        }

        limit = Math.floor(limit);
        if (limit < 0) {
            return 0;
        }

        return Math.min(limit, selectedCount);
    }

    shouldShowSelectedBadge(index: number) {
        return index < this.getVisibleBadgeLimit();
    }

    getHiddenSelectedCount() {
        var selectedCount = this.selectedItems ? this.selectedItems.length : 0;
        return Math.max(0, selectedCount - this.getVisibleBadgeLimit());
    }

    getVirtualItemIndex(item: any, fallbackIndex: number, scroller?: VirtualScrollerComponent) {
        if (scroller && scroller.items) {
            var itemIndex = scroller.items.indexOf(item);
            if (itemIndex > -1) {
                return itemIndex;
            }
        }

        return fallbackIndex;
    }

    private isTriggerChildAction(evt: KeyboardEvent) {
        var target = evt.target as HTMLElement;
        var trigger = this.triggerButton && this.triggerButton.nativeElement;

        if (!target || !trigger || target === trigger || !trigger.contains(target)) {
            return false;
        }

        return !!target.closest('button, input, textarea, select, a, [role="button"], [role="checkbox"]');
    }

    onTriggerKeydown(evt: KeyboardEvent) {
        if (this.settings.disabled || this.isTriggerChildAction(evt)) {
            return;
        }

        switch (evt.key) {
            case 'Enter':
                evt.preventDefault();
                this.toggleDropdown(evt);
                break;
            case ' ':
            case 'Spacebar':
                if (!this.isKeyboardEnabled('space')) {
                    return;
                }
                evt.preventDefault();
                this.toggleDropdown(evt);
                break;
            case 'ArrowDown':
                if (!this.isKeyboardEnabled('arrows')) {
                    return;
                }
                evt.preventDefault();
                if (!this.isActive) {
                    this.openDropdown();
                }
                this.focusFirstOption();
                break;
            case 'ArrowUp':
                if (!this.isKeyboardEnabled('arrows')) {
                    return;
                }
                evt.preventDefault();
                if (!this.isActive) {
                    this.openDropdown();
                }
                this.focusLastOption();
                break;
            case 'Escape':
                if (!this.isKeyboardEnabled('escape')) {
                    return;
                }
                evt.preventDefault();
                this.closeDropdown();
                break;
        }
    }

    onOptionKeydown(item: any, index: number, evt: KeyboardEvent, prefix: string = 'option', scroller?: VirtualScrollerComponent) {
        switch (evt.key) {
            case 'Enter':
                evt.preventDefault();
                if (!this.isOptionDisabled(item)) {
                    this.toggleOptionFromKeyboard(item, index, prefix);
                }
                break;
            case ' ':
            case 'Spacebar':
                if (!this.isKeyboardEnabled('space')) {
                    return;
                }
                evt.preventDefault();
                if (!this.isOptionDisabled(item)) {
                    this.toggleOptionFromKeyboard(item, index, prefix);
                }
                break;
            case 'ArrowDown':
                if (!this.isKeyboardEnabled('arrows')) {
                    return;
                }
                evt.preventDefault();
                this.focusNextOption();
                break;
            case 'ArrowUp':
                if (!this.isKeyboardEnabled('arrows')) {
                    return;
                }
                evt.preventDefault();
                this.focusPreviousOption();
                break;
            case 'Home':
                if (!this.isKeyboardEnabled('arrows')) {
                    return;
                }
                evt.preventDefault();
                this.focusFirstOption();
                break;
            case 'End':
                if (!this.isKeyboardEnabled('arrows')) {
                    return;
                }
                evt.preventDefault();
                this.focusLastOption();
                break;
            case 'Escape':
                if (!this.isKeyboardEnabled('escape')) {
                    return;
                }
                evt.preventDefault();
                this.closeDropdown();
                this.focusTrigger();
                break;
            case 'Tab':
                if (!this.isKeyboardEnabled('tab')) {
                    evt.preventDefault();
                    evt.stopPropagation();
                }
                break;
        }
    }

    onGroupKeydown(item: any, index: number, evt: KeyboardEvent, prefix: string = 'group') {
        switch (evt.key) {
            case 'Enter':
                evt.preventDefault();
                if (!this.isOptionDisabled(item)) {
                    this.selectGroup(item);
                    this.setActiveDescendant(item, index, prefix);
                }
                break;
            case ' ':
            case 'Spacebar':
                if (!this.isKeyboardEnabled('space')) {
                    return;
                }
                evt.preventDefault();
                if (!this.isOptionDisabled(item)) {
                    this.selectGroup(item);
                    this.setActiveDescendant(item, index, prefix);
                }
                break;
            case 'ArrowDown':
                if (!this.isKeyboardEnabled('arrows')) {
                    return;
                }
                evt.preventDefault();
                this.focusNextOption();
                break;
            case 'ArrowUp':
                if (!this.isKeyboardEnabled('arrows')) {
                    return;
                }
                evt.preventDefault();
                this.focusPreviousOption();
                break;
            case 'Home':
                if (!this.isKeyboardEnabled('arrows')) {
                    return;
                }
                evt.preventDefault();
                this.focusFirstOption();
                break;
            case 'End':
                if (!this.isKeyboardEnabled('arrows')) {
                    return;
                }
                evt.preventDefault();
                this.focusLastOption();
                break;
            case 'Escape':
                if (!this.isKeyboardEnabled('escape')) {
                    return;
                }
                evt.preventDefault();
                this.closeDropdown();
                this.focusTrigger();
                break;
        }
    }

    onInlineActionKeydown(evt: KeyboardEvent) {
        switch (evt.key) {
            case 'Enter':
            case ' ':
            case 'Spacebar':
                evt.stopPropagation();
                break;
            case 'ArrowDown':
                if (!this.isKeyboardEnabled('arrows')) {
                    return;
                }
                evt.preventDefault();
                evt.stopPropagation();
                if (!this.isActive) {
                    this.openDropdown();
                }
                this.focusFirstOption();
                break;
            case 'ArrowUp':
                if (!this.isKeyboardEnabled('arrows')) {
                    return;
                }
                evt.preventDefault();
                evt.stopPropagation();
                if (!this.isActive) {
                    this.openDropdown();
                }
                this.focusLastOption();
                break;
            case 'Escape':
                if (!this.isKeyboardEnabled('escape')) {
                    return;
                }
                evt.preventDefault();
                evt.stopPropagation();
                this.closeDropdown();
                this.focusTrigger();
                break;
        }
    }

    onArrowButtonKeydown(evt: KeyboardEvent) {
        switch (evt.key) {
            case 'Enter':
                evt.preventDefault();
                evt.stopPropagation();
                this.toggleDropdown(evt);
                break;
            case ' ':
            case 'Spacebar':
                if (!this.isKeyboardEnabled('space')) {
                    return;
                }
                evt.preventDefault();
                evt.stopPropagation();
                this.toggleDropdown(evt);
                break;
            case 'ArrowDown':
                if (!this.isKeyboardEnabled('arrows')) {
                    return;
                }
                evt.preventDefault();
                evt.stopPropagation();
                if (!this.isActive) {
                    this.openDropdown();
                }
                this.focusFirstOption();
                break;
            case 'ArrowUp':
                if (!this.isKeyboardEnabled('arrows')) {
                    return;
                }
                evt.preventDefault();
                evt.stopPropagation();
                if (!this.isActive) {
                    this.openDropdown();
                }
                this.focusLastOption();
                break;
            case 'Escape':
                if (!this.isKeyboardEnabled('escape')) {
                    return;
                }
                evt.preventDefault();
                evt.stopPropagation();
                this.closeDropdown();
                this.focusTrigger();
                break;
        }
    }

    onSearchKeydown(evt: KeyboardEvent) {
        switch (evt.key) {
            case 'ArrowDown':
                if (!this.isKeyboardEnabled('arrows')) {
                    return;
                }
                evt.preventDefault();
                evt.stopPropagation();
                this.focusFirstOption();
                break;
            case 'ArrowUp':
                if (!this.isKeyboardEnabled('arrows')) {
                    return;
                }
                evt.preventDefault();
                evt.stopPropagation();
                this.focusLastOption();
                break;
            case 'Escape':
                if (!this.isKeyboardEnabled('escape')) {
                    return;
                }
                evt.preventDefault();
                evt.stopPropagation();
                this.closeDropdown();
                this.focusTrigger();
                break;
            case 'Backspace':
                if (this.shouldBackspaceRemoveLast(evt)) {
                    evt.preventDefault();
                    evt.stopPropagation();
                    this.removeLastSelectedItem();
                }
                break;
        }
    }

    onSelectAllKeydown(evt: KeyboardEvent, action: 'filter' | 'infinite-filter') {
        switch (evt.key) {
            case 'Enter':
            case ' ':
            case 'Spacebar':
                evt.preventDefault();
                if (action === 'filter') {
                    this.toggleFilterSelectAll();
                }
                else {
                    this.toggleInfiniteFilterSelectAll();
                }
                break;
            case 'Escape':
                if (!this.isKeyboardEnabled('escape')) {
                    return;
                }
                evt.preventDefault();
                this.closeDropdown();
                this.focusTrigger();
                break;
            case 'ArrowDown':
                if (!this.isKeyboardEnabled('arrows')) {
                    return;
                }
                evt.preventDefault();
                this.focusFirstOption();
                break;
            case 'ArrowUp':
                if (!this.isKeyboardEnabled('arrows')) {
                    return;
                }
                evt.preventDefault();
                this.focusLastOption();
                break;
        }
    }

    onRemoveButtonKeydown(item: any, index: number, evt: KeyboardEvent) {
        if ((evt.key === 'Backspace' || evt.key === 'Delete') && this.isKeyboardEnabled('deleteRemovesFocusedBadge')) {
            evt.preventDefault();
            evt.stopPropagation();
            this.onItemClick(item, index, evt);
            return;
        }

        this.onInlineActionKeydown(evt);
    }

    onClearAllKeydown(evt: KeyboardEvent) {
        if ((evt.key === 'Backspace' || evt.key === 'Delete') && this.isKeyboardEnabled('deleteRemovesFocusedBadge')) {
            evt.preventDefault();
            evt.stopPropagation();
            this.clearSelection(evt);
            return;
        }

        this.onInlineActionKeydown(evt);
    }

    private shouldBackspaceRemoveLast(evt: KeyboardEvent) {
        var target = evt.target as HTMLInputElement;
        var value = target && target.value !== undefined ? target.value : this.filter;

        return this.isKeyboardEnabled('backspaceRemovesLastWhenSearchEmpty')
            && (!value || String(value).length === 0)
            && this.selectedItems
            && this.selectedItems.length > 0;
    }

    private removeLastSelectedItem() {
        if (!this.selectedItems || !this.selectedItems.length) {
            return;
        }

        var lastItem = this.selectedItems[this.selectedItems.length - 1];
        this.removeSelected(lastItem);
        this.onDeSelect.emit(lastItem);
        this.scheduleDropdownPositionUpdate();
    }

    private toggleOptionFromKeyboard(item: any, index: number, prefix: string) {
        this.onItemClick(item, index, new KeyboardEvent('keydown'));
        this.setActiveDescendant(item, index, prefix);

        if (this.getSpaceOptionAction() === 'toggle-and-next') {
            this.focusNextOption();
        }
        else {
            this.focusOptionById(this.getOptionId(item, index, prefix));
        }
    }

    focusTrigger() {
        if (this.triggerButton && this.triggerButton.nativeElement) {
            setTimeout(() => {
                this.triggerButton.nativeElement.focus();
            }, 0);
        }
    }

    private getOptionElements(): HTMLElement[] {
        if (!this.dropdownListElem || !this.dropdownListElem.nativeElement) {
            return [];
        }

        return Array.prototype.slice.call(this.dropdownListElem.nativeElement.querySelectorAll('.dropdown-option:not(.is-disabled)'));
    }

    private focusOptionByIndex(index: number) {
        setTimeout(() => {
            var options = this.getOptionElements();
            if (!options.length) {
                return;
            }

            var nextIndex = Math.max(0, Math.min(index, options.length - 1));
            options[nextIndex].focus();
            this.activeDescendantId = options[nextIndex].id || null;
        }, 0);
    }

    private focusOptionById(optionId: string) {
        setTimeout(() => {
            if (!this.dropdownListElem || !this.dropdownListElem.nativeElement) {
                return;
            }

            var option = document.getElementById(optionId) as HTMLElement;
            if (option) {
                option.focus();
                this.activeDescendantId = option.id || optionId;
            }
        }, 0);
    }

    focusFirstOption() {
        this.focusOptionByIndex(0);
    }

    focusLastOption() {
        setTimeout(() => {
            var options = this.getOptionElements();
            this.focusOptionByIndex(options.length - 1);
        }, 0);
    }

    focusNextOption() {
        var options = this.getOptionElements();
        var activeIndex = options.indexOf(document.activeElement as HTMLElement);
        this.focusOptionByIndex(activeIndex + 1);
    }

    focusPreviousOption() {
        var options = this.getOptionElements();
        var activeIndex = options.indexOf(document.activeElement as HTMLElement);
        this.focusOptionByIndex(activeIndex <= 0 ? 0 : activeIndex - 1);
    }

    private focusVirtualOptionByDirection(item: any, direction: number, prefix: string, scroller?: VirtualScrollerComponent) {
        if (!scroller || !scroller.items || !scroller.items.length) {
            return false;
        }

        var currentIndex = scroller.items.indexOf(item);
        if (currentIndex < 0) {
            currentIndex = this.getVirtualItemIndex(item, 0, scroller);
        }

        var nextIndex = this.getNextFocusableVirtualIndex(scroller, currentIndex, direction);
        if (nextIndex < 0) {
            return false;
        }

        scroller.scrollToIndex(nextIndex, true, 0, 0, () => {
            this.scheduleFocusVirtualOptionByIndex(nextIndex, prefix);
        });

        this.scheduleFocusVirtualOptionByIndex(nextIndex, prefix);
        return true;
    }

    private getNextFocusableVirtualIndex(scroller: VirtualScrollerComponent, currentIndex: number, direction: number) {
        var nextIndex = currentIndex + direction;

        while (nextIndex >= 0 && nextIndex < scroller.items.length) {
            var item = scroller.items[nextIndex];
            if (item && !item.grpTitle && !this.isOptionDisabled(item)) {
                return nextIndex;
            }
            nextIndex += direction;
        }

        return -1;
    }

    private scheduleFocusVirtualOptionByIndex(index: number, prefix: string) {
        var attempts = 0;
        var tryFocus = () => {
            attempts++;
            if (this.focusVirtualOptionByIndex(index, prefix) || attempts >= 10) {
                return;
            }
            setTimeout(tryFocus, 25);
        };

        setTimeout(tryFocus, 0);
    }

    private focusVirtualOptionByIndex(index: number, prefix: string) {
        if (!this.dropdownListElem || !this.dropdownListElem.nativeElement) {
            return false;
        }

        var option = this.dropdownListElem.nativeElement.querySelector('.dropdown-option[data-virtual-index="' + index + '"]') as HTMLElement;
        if (!option) {
            return false;
        }

        option.focus();
        this.activeDescendantId = option.id || this.id + '-' + prefix + '-' + index;
        return true;
    }

    onKeyUp(evt: any){
        this.searchTerm$.next((<HTMLInputElement>evt.target).value);
    }
    ngOnChanges(changes: SimpleChanges) {
        if (changes.data && !changes.data.firstChange) {
            this.data = this.mergeSelectedIntoData(this.data || []);
            if (this.settings.groupBy) {
                this.groupedData = this.transformData(this.data, this.settings.groupBy);
                this.groupCachedItems = this.cloneArray(this.groupedData);
            }
            this.cachedItems = this.cloneArray(this.data);
        }
        if (changes.settings && !changes.settings.firstChange) {
            this.normalizeSettings(this.settings);
            if (this.isActive) {
                if (this.isBodyOverlayEnabled()) {
                    this.appendDropdownPanelToBody();
                }
                else if (this.dropdownAppendedToBody) {
                    this.restoreDropdownPanel();
                }
                this.bindOverlayListeners();
                this.scheduleDropdownPositionUpdate();
            }
        }
        if (changes.loading) {
        }
        if (this.settings.lazyLoading && this.virtualScroollInit && changes.data) {
            this.virtualdata = changes.data.currentValue;
        }
    }
    ngDoCheck() {
        this.syncSelectAllState();
    }
    ngAfterViewInit() {
        if (this.settings.lazyLoading) {
            // this._elementRef.nativeElement.getElementsByClassName("lazyContainer")[0].addEventListener('scroll', this.onScroll.bind(this));
        }
    }
    ngAfterViewChecked() {
        if (this.selectedListElem.nativeElement.clientHeight && this.settings.position == 'top' && this.selectedListHeight) {
            this.selectedListHeight.val = this.selectedListElem.nativeElement.clientHeight;
            this.cdr.detectChanges();
        }
        if (this.isActive && this.isBodyOverlayEnabled() && !this.dropdownAppendedToBody) {
            this.appendDropdownPanelToBody();
        }
        //this.calculateDropdownDirection();
    }
    onItemClick(item: any, index: number, evt: Event) {
        if (item.disabled) {
            return;
        }

        if (this.settings.disabled) {
            return;
        }

        let found = this.isSelected(item);
        let limit = this.selectedItems.length < this.settings.limitSelection ? true : false;

        if (!found) {
            if (this.settings.limitSelection) {
                if (limit) {
                    this.addSelected(item);
                    this.onSelect.emit(item);
                }
            }
            else {
                this.addSelected(item);
                this.onSelect.emit(item);
            }

        }
        else {
            this.removeSelected(item);
            this.onDeSelect.emit(item);
        }
        this.syncSelectAllState();
        if (this.settings.groupBy) {
            this.updateGroupInfo(item);
        }
        this.focusClickedOption(evt);
        this.scheduleDropdownPositionUpdate();


    }

    private focusClickedOption(evt: Event) {
        if (!evt || !this.isActive) {
            return;
        }

        var currentTarget = evt.currentTarget as HTMLElement;
        if (!currentTarget || !currentTarget.classList || !currentTarget.classList.contains('dropdown-option')) {
            return;
        }

        setTimeout(() => {
            currentTarget.focus();
            this.activeDescendantId = currentTarget.id || null;
        }, 0);
    }
    public validate(c: UntypedFormControl): any {
        return null;
    }
    private onTouchedCallback: (_: any) => void = noop;
    private onChangeCallback: (_: any) => void = noop;

    writeValue(value: any) {
        if (value !== undefined && value !== null && value !== '') {
            if (this.settings.singleSelection) {
                if (this.settings.groupBy) {
                    this.groupedData = this.transformData(this.data, this.settings.groupBy);
                    this.groupCachedItems = this.cloneArray(this.groupedData);
                    this.selectedItems = [value[0]];
                } else {
                    try {

                        if (value.length > 1) {
                            this.selectedItems = [value[0]];
                            throw new MyException(404, { "msg": "Single Selection Mode, Selected Items cannot have more than one item." });
                        }
                        else {
                            this.selectedItems = value;
                        }
                    }
                    catch (e) {
                        console.error(e.body.msg);
                    }
                }

            }
            else {
                if (this.settings.limitSelection) {
                    this.selectedItems = value.slice(0, this.settings.limitSelection);
                }
                else {
                    this.selectedItems = value;
                }
                this.syncSelectAllState();
                if (this.settings.groupBy) {
                    this.groupedData = this.transformData(this.data, this.settings.groupBy);
                    this.groupCachedItems = this.cloneArray(this.groupedData);
                }
            }
        } else {
            this.selectedItems = [];
        }

        this.data = this.mergeSelectedIntoData(this.data || []);
        this.cachedItems = this.cloneArray(this.data);
    }

    //From ControlValueAccessor interface
    registerOnChange(fn: any) {
        this.onChangeCallback = fn;
    }

    //From ControlValueAccessor interface
    registerOnTouched(fn: any) {
        this.onTouchedCallback = fn;
    }
    trackByFn(index: number, item: any) {
        return item[this.getPrimaryKey()];
    }
    isSelected(clickedItem: any) {
        if (clickedItem.disabled) {
            return false;
        }
        let found = false;
        this.selectedItems && this.selectedItems.forEach(item => {
            if (clickedItem[this.getPrimaryKey()] === item[this.getPrimaryKey()]) {
                found = true;
            }
        });
        return found;
    }
    addSelected(item: any) {
        if (item.disabled) {
            return;
        }
        if (this.settings.singleSelection) {
            this.selectedItems = [];
            this.selectedItems.push(item);
            this.closeDropdown();
        }
        else
            this.selectedItems = [...this.selectedItems, item];
        this.onChangeCallback(this.selectedItems);
        this.onTouchedCallback(this.selectedItems);
    }
    removeSelected(clickedItem: any) {
        this.selectedItems && this.selectedItems.forEach(item => {
            if (clickedItem[this.getPrimaryKey()] === item[this.getPrimaryKey()]) {
                this.selectedItems.splice(this.selectedItems.indexOf(item), 1);
            }
        });
        this.onChangeCallback(this.selectedItems);
        this.onTouchedCallback(this.selectedItems);
    }
    toggleDropdown(evt: any) {
        if (this.settings.disabled) {
            return;
        }
        this.isActive = !this.isActive;
        if (this.isActive) {
            this.openDropdown()
        }
        else {
            this.closeDropdown()
        }
        if (this.settings.lazyLoading) {
            this.virtualdata = this.data;
            this.virtualScroollInit = true;
        }
        evt.preventDefault();
    }
    public openDropdown() {
        if (this.settings.disabled) {
            return;
        }
        this.isActive = true;
        this.calculateDropdownDirection();
        this.appendDropdownPanelToBody();
        this.syncOpenDropdownPanelState();
        this.bindOverlayListeners();
        this.scheduleDropdownPositionUpdate();
        if (this.settings.searchAutofocus && this.settings.enableSearchFilter && !this.searchTempl) {
            setTimeout(() => {
                if (this.searchInput && this.searchInput.nativeElement) {
                    this.searchInput.nativeElement.focus();
                }
            }, 0);
        }
        this.onOpen.emit(true);
    }
    public closeDropdown() {
        if (this.searchInput && this.settings.lazyLoading) {
            this.searchInput.nativeElement.value = "";
        }
        if (this.searchInput) {
            this.searchInput.nativeElement.value = "";
        }
        this.filter = "";
        this.isActive = false;
        this.activeDescendantId = null;
        this.syncClosedDropdownPanelState();
        this.restoreDropdownPanel();
        this.resetDropdownPanelPosition();
        this.searchTerm$.next('');
        this.onClose.emit(false);
    }
    public closeDropdownOnClickOut(event?: Event) {
        if (this.isActive) {
            if (this.isEventInsideHostOrPanel(event)) {
                return;
            }

            if (this.searchInput && this.settings.lazyLoading) {
                this.searchInput.nativeElement.value = "";
            }
            if (this.searchInput) {
                this.searchInput.nativeElement.value = "";
            }
            this.filter = "";
            this.isActive = false;
            this.activeDescendantId = null;
            this.syncClosedDropdownPanelState();
            this.restoreDropdownPanel();
            this.resetDropdownPanelPosition();
            this.clearSearch();
            this.searchTerm$.next('');
            this.onClose.emit(false);
        }
    }
    toggleSelectAll(event) {
        var shouldSelect = !this.areAllSelectableItemsSelected(this.data);

        if (shouldSelect) {
            this.selectedItems = [];
            if (this.settings.groupBy) {
                this.groupedData.forEach((obj) => {
                    obj.selected = !obj.disabled;
                })
                this.groupCachedItems.forEach((obj) => {
                    obj.selected = !obj.disabled;
                })
            }
            // this.selectedItems = this.data.slice();
            this.selectedItems = this.getSelectableItems(this.data);
            this.isSelectAll = this.selectedItems.length > 0;
            this.onChangeCallback(this.selectedItems);
            this.onTouchedCallback(this.selectedItems);

            this.onSelectAll.emit(this.selectedItems);
        }
        else {
            if (this.settings.groupBy) {
                this.groupedData.forEach((obj) => {
                    obj.selected = false;
                });
                this.groupCachedItems.forEach((obj) => {
                    obj.selected = false;
                })
            }
            this.selectedItems = [];
            this.isSelectAll = false;
            this.onChangeCallback(this.selectedItems);
            this.onTouchedCallback(this.selectedItems);

            this.onDeSelectAll.emit(this.selectedItems);
        }
        setTimeout(() => {
            this.calculateDropdownDirection();
            this.scheduleDropdownPositionUpdate();
        });
        event.stopPropagation();
    }
    filterGroupedList() {
        if (this.filter == "" || this.filter == null) {
            this.clearSearch();
            return;
        }
        this.groupedData = this.cloneArray(this.groupCachedItems);
        this.groupedData = this.groupedData.filter(obj => {
            let arr = [];
            if (obj[this.settings.labelKey].toLowerCase().indexOf(this.filter.toLowerCase()) > -1) {
                arr = obj.list;
            }
            else {
                arr = obj.list.filter(t => {
                    return t[this.settings.labelKey].toLowerCase().indexOf(this.filter.toLowerCase()) > -1;
                });
            }

            obj.list = arr;
            if (obj[this.settings.labelKey].toLowerCase().indexOf(this.filter.toLowerCase()) > -1) {
                return arr;
            }
            else {
                return arr.some(cat => {
                    return cat[this.settings.labelKey].toLowerCase().indexOf(this.filter.toLowerCase()) > -1;
                }
                )
            }

        });
        this.scheduleDropdownPositionUpdate();
    }
    toggleFilterSelectAll() {
        if (!this.isFilterSelectAll) {
            let added = [];
            if (this.settings.groupBy) {
                this.groupedData.forEach((item: any) => {
                    item.sele
                    if (item.list) {
                        item.list.forEach((el: any) => {
                            if (!this.isSelected(el)) {
                                this.addSelected(el);
                                added.push(el);
                            }
                        });
                    }
                    this.updateGroupInfo(item);

                });

                this.filteredList.forEach((el: any) => {
                    if (!this.isSelected(el) && !el.hasOwnProperty('grpTitle')) {
                        this.addSelected(el);
                        added.push(el);
                    }
                });

            }
            else {
                this.filteredList.forEach((item: any) => {
                    if (!this.isSelected(item)) {
                        this.addSelected(item);
                        added.push(item);
                    }

                });
            }

            this.isFilterSelectAll = true;
            this.onFilterSelectAll.emit(added);
        }
        else {
            let removed = [];
            if (this.settings.groupBy) {
                this.groupedData.forEach((item: any) => {
                    if (item.list) {
                        item.list.forEach((el: any) => {
                            if (this.isSelected(el)) {
                                this.removeSelected(el);
                                removed.push(el);
                            }
                        });
                    }
                    this.updateGroupInfo(item);
                });
                this.filteredList.forEach((el: any) => {
                    if (this.isSelected(el)) {
                        this.removeSelected(el);
                        removed.push(el);
                    }
                });
            }
            else {
                this.filteredList.forEach((item: any) => {
                    if (this.isSelected(item)) {
                        this.removeSelected(item);
                        removed.push(item);
                    }

                });
            }
            this.isFilterSelectAll = false;
            this.onFilterDeSelectAll.emit(removed);
        }
        this.scheduleDropdownPositionUpdate();
    }
    toggleInfiniteFilterSelectAll() {
        if (!this.isInfiniteFilterSelectAll) {
            this.virtualdata.forEach((item: any) => {
                if (!this.isSelected(item)) {
                    this.addSelected(item);
                }
            });
            this.isInfiniteFilterSelectAll = true;
        }
        else {
            this.virtualdata.forEach((item: any) => {
                if (this.isSelected(item)) {
                    this.removeSelected(item);
                }

            });
            this.isInfiniteFilterSelectAll = false;
        }
        this.scheduleDropdownPositionUpdate();
    }
    clearSearch() {
        if (this.settings.groupBy) {
            this.groupedData = [];
            this.groupedData = this.cloneArray(this.groupCachedItems);
        }
        this.filter = "";
        this.isFilterSelectAll = false;
        this.searchTerm$.next('');
        this.data = this.cachedItems;
        this.scheduleDropdownPositionUpdate();
    }
    onFilterChange(data: any) {
        if (this.filter && this.filter == "" || data.length == 0) {
            this.isFilterSelectAll = false;
            this.data = this.cachedItems.slice();
        }
        let cnt = 0;
        data.forEach((item: any) => {

            if (!item.hasOwnProperty('grpTitle') && this.isSelected(item)) {
                cnt++;
            }
        });

        if (cnt > 0 && this.filterLength == cnt) {
            this.isFilterSelectAll = true;
        }
        else if (cnt > 0 && this.filterLength != cnt) {
            this.isFilterSelectAll = false;
        }
        this.data = data;
        this.scheduleDropdownPositionUpdate();
    }
    cloneArray(arr: any) {
        let i, copy;

        if (Array.isArray(arr)) {
            return JSON.parse(JSON.stringify(arr));
        } else if (typeof arr === 'object') {
            throw 'Cannot clone array containing an object!';
        } else {
            return arr;
        }
    }
    updateGroupInfo(item: any) {
        if (item.disabled) {
            return;
        }
        let key = this.settings.groupBy;
        this.groupedData.forEach((obj: any) => {
            let cnt = 0;
            if (obj.grpTitle && (item[key] == obj[key])) {
                if (obj.list) {
                    obj.list.forEach((el: any) => {
                        if (this.isSelected(el)) {
                            cnt++;
                        }
                    });
                }
            }
            if (obj.list && (cnt === obj.list.length) && (item[key] == obj[key])) {
                obj.selected = true;
            }
            else if (obj.list && (cnt != obj.list.length) && (item[key] == obj[key])) {
                obj.selected = false;
            }
        });
        this.groupCachedItems.forEach((obj: any) => {
            let cnt = 0;
            if (obj.grpTitle && (item[key] == obj[key])) {
                if (obj.list) {
                    obj.list.forEach((el: any) => {
                        if (this.isSelected(el)) {
                            cnt++;
                        }
                    });
                }
            }
            if (obj.list && (cnt === obj.list.length) && (item[key] == obj[key])) {
                obj.selected = true;
            }
            else if (obj.list && (cnt != obj.list.length) && (item[key] == obj[key])) {
                obj.selected = false;
            }
        });
    }
    transformData(arr: Array<any>, field: any): Array<any> {
        const groupedObj: any = arr.reduce((prev: any, cur: any) => {
            if (!prev[cur[field]]) {
                prev[cur[field]] = [cur];
            } else {
                prev[cur[field]].push(cur);
            }
            return prev;
        }, {});
        const tempArr: any = [];
        Object.keys(groupedObj).map((x: any) => {
            let obj: any = {};
            let disabledChildrens = [];
            obj["grpTitle"] = true;
            obj[this.settings.labelKey] = x;
            obj[this.settings.groupBy] = x;
            obj['selected'] = false;
            obj['list'] = [];
            let cnt = 0;
            groupedObj[x].forEach((item: any) => {
                item['list'] = [];
                if (item.disabled) {
                    this.isDisabledItemPresent = true;
                    disabledChildrens.push(item);
                }
                obj.list.push(item);
                if (this.isSelected(item)) {
                    cnt++;
                }
            });
            if (cnt == obj.list.length) {
                obj.selected = true;
            }
            else {
                obj.selected = false;
            }

            // Check if current group item's all childrens are disabled or not
            obj['disabled'] = disabledChildrens.length === groupedObj[x].length;
            tempArr.push(obj);
            // obj.list.forEach((item: any) => {
            //     tempArr.push(item);
            // });
        });
        return tempArr;
    }
    public filterInfiniteList(evt: any) {
        let filteredElems: Array<any> = [];
        if (this.settings.groupBy) {
            this.groupedData = this.groupCachedItems.slice();
        }
        else {
            this.data = this.cachedItems.slice();
            this.virtualdata = this.cachedItems.slice();
        }

        if ((evt != null || evt != '') && !this.settings.groupBy) {
            if (this.settings.searchBy.length > 0) {
                for (let t = 0; t < this.settings.searchBy.length; t++) {

                    this.virtualdata.filter((el: any) => {
                        if (el[this.settings.searchBy[t].toString()].toString().toLowerCase().indexOf(evt.toString().toLowerCase()) >= 0) {
                            filteredElems.push(el);
                        }
                    });
                }

            }
            else {
                this.virtualdata.filter(function (el: any) {
                    for (let prop in el) {
                        if (el[prop].toString().toLowerCase().indexOf(evt.toString().toLowerCase()) >= 0) {
                            filteredElems.push(el);
                            break;
                        }
                    }
                });
            }
            this.virtualdata = [];
            this.virtualdata = filteredElems;
            this.infiniteFilterLength = this.virtualdata.length;
        }
        if (evt.toString() != '' && this.settings.groupBy) {
            this.groupedData.filter(function (el: any) {
                if (el.hasOwnProperty('grpTitle')) {
                    filteredElems.push(el);
                }
                else {
                    for (let prop in el) {
                        if (el[prop].toString().toLowerCase().indexOf(evt.toString().toLowerCase()) >= 0) {
                            filteredElems.push(el);
                            break;
                        }
                    }
                }
            });
            this.groupedData = [];
            this.groupedData = filteredElems;
            this.infiniteFilterLength = this.groupedData.length;
        }
        else if (evt.toString() == '' && this.cachedItems.length > 0) {
            this.virtualdata = [];
            this.virtualdata = this.cachedItems;
            this.infiniteFilterLength = 0;
        }
        if(this.virtualScroller){
            this.virtualScroller.refresh();
        }
    }
    resetInfiniteSearch() {
        this.filter = "";
        this.isInfiniteFilterSelectAll = false;
        this.virtualdata = [];
        this.virtualdata = this.cachedItems;
        this.groupedData = this.groupCachedItems;
        this.searchTerm$.next('');
        this.infiniteFilterLength = 0;
        this.scheduleDropdownPositionUpdate();
    }
    onScrollEnd(e: any) {
        if (e.endIndex === this.data.length - 1 || e.startIndex === 0) {

        }
        this.onScrollToEnd.emit(e);

    }
    ngOnDestroy() {
        this.restoreDropdownPanel(true);
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
        this.searchTerm$.complete();

    }
    selectGroup(item: any) {
        if (item.disabled) {
            return;
        }
        if (item.selected) {
            item.selected = false;
            item.list.forEach((obj: any) => {
                this.removeSelected(obj);
            });

            this.onGroupDeSelect.emit(item);
            this.updateGroupInfo(item);

        }
        else {
            item.selected = true;
            item.list.forEach((obj: any) => {
                if (!this.isSelected(obj)) {
                    this.addSelected(obj);
                }

            });
            this.onGroupSelect.emit(item);
            this.updateGroupInfo(item);

        }


    }
    addFilterNewItem() {
        this.onAddFilterNewItem.emit(this.filter);
        this.filterPipe.transform(this.data, this.filter, this.settings.searchBy);
    }
    calculateDropdownDirection() {
        const elem = this.getAnchorElement();
        if (!elem) {
            return;
        }
        const elemBounds = elem.getBoundingClientRect();
        const dropdownWidth = Math.round(elemBounds.width || elem.clientWidth || 0);

        if (this.isActive && typeof window !== 'undefined' && typeof document !== 'undefined') {
            const viewportWidth = window.innerWidth || document.documentElement.clientWidth || dropdownWidth;
            const maxWidth = Math.max(0, viewportWidth - 16);
            const safeWidth = Math.max(0, Math.min(dropdownWidth, maxWidth));
            const maxLeft = Math.max(8, viewportWidth - safeWidth - 8);

            this.dropDownWidth = safeWidth || null;
            this.dropDownLeft = Math.round(Math.max(8, Math.min(elemBounds.left, maxLeft)));
        }
        else {
            this.dropDownWidth = null;
            this.dropDownLeft = null;
        }
        if (this.settings.position == 'top' && !this.settings.autoPosition) {
            this.openTowardsTop(true);
        }
        else if (this.settings.position == 'bottom' && !this.settings.autoPosition) {
            this.openTowardsTop(false);
        }
        if (this.settings.autoPosition) {
            const dropdownHeight = this.getDropdownPanelHeightForPositioning();
            const viewportHeight = document.documentElement.clientHeight;
            const selectedListBounds = this.selectedListElem.nativeElement.getBoundingClientRect();

            const spaceOnTop: number = selectedListBounds.top;
            const spaceOnBottom: number = viewportHeight - selectedListBounds.bottom;
            if (spaceOnBottom < spaceOnTop && dropdownHeight < spaceOnTop) {
                this.openTowardsTop(true);
            }
            else {
                this.openTowardsTop(false);
            }
        }

    }
    openTowardsTop(value: boolean) {
        const elem = this.getAnchorElement();
        if (!elem) {
            return;
        }
        const elemBounds = elem.getBoundingClientRect();
        const dropdownPanelHeight = this.getDropdownPanelHeightForPositioning();
        if (value && this.selectedListElem.nativeElement.clientHeight) {
            this.dropdownListYOffset = 15 - this.selectedListElem.nativeElement.clientHeight;
            this.dropDownTop = Math.round(elemBounds.top - dropdownPanelHeight - 1)+'px';
            this.dropDownBottom = null;
            this.dropDownDirection = 'top';

        } else {
            this.dropDownTop = (elemBounds.bottom + 1)+'px';
            this.dropDownBottom = null;
            this.dropdownListYOffset = 0;
            this.dropDownDirection = 'bottom';

        }
    }
    clearSelection(e?: any) {
        if (this.settings.groupBy) {
            this.groupCachedItems.forEach((obj) => {
                obj.selected = false;
            })
        }
        this.clearSearch();
        this.selectedItems = [];
        this.isSelectAll = false;
        this.onChangeCallback(this.selectedItems);
        this.onTouchedCallback(this.selectedItems);
        this.onDeSelectAll.emit(this.selectedItems);
        this.scheduleDropdownPositionUpdate();
    }
    filteritems(evt: any) {
        this.filteredList = this.filterPipe.transform(this.cachedItems, evt.target.value, this.settings.searchBy);
        if (this.filteredList) {
            let len = 0;
            this.filteredList.forEach((obj: any, i: any) => {
                if (obj.disabled) {
                    this.isDisabledItemPresent = true;
                }
                if (!obj.hasOwnProperty('grpTitle')) {
                    len++;
                }
            });
            this.filterLength = len;
        }
        this.onFilterChange(this.filteredList);
    }
}

@NgModule({
    imports: [CommonModule, FormsModule, VirtualScrollerModule],
    declarations: [AngularMultiSelect, ClickOutsideDirective, ScrollDirective, styleDirective, ListFilterPipe, Item, TemplateRenderer, Badge, Search, setPosition, CIcon],
    exports: [AngularMultiSelect, ClickOutsideDirective, ScrollDirective, styleDirective, ListFilterPipe, Item, TemplateRenderer, Badge, Search, setPosition, CIcon],
    providers: [DataService, ListFilterPipe]
})
export class AngularMultiSelectModule { }
