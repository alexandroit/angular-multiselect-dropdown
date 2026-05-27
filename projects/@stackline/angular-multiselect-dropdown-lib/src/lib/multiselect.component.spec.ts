import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { AngularMultiSelect, AngularMultiSelectModule } from './multiselect.component';
import { DropdownSettings } from './multiselect.interface';

@Component({
    template: `
        <div class="dialog-surface" style="overflow: hidden; width: 320px; height: 96px;">
            <angular-multiselect
                [data]="items"
                [(ngModel)]="selectedItems"
                [settings]="settings">
            </angular-multiselect>
        </div>
    `,
    standalone: false
})
class BodyOverlayHostComponent {
    items = [
        { id: 1, itemName: 'Canada' },
        { id: 2, itemName: 'Portugal' },
        { id: 3, itemName: 'Brazil' }
    ];
    selectedItems = [];
    settings: DropdownSettings = {
        text: 'Select countries',
        tagToBody: true,
        maxHeight: 220,
        autoPosition: false,
        position: 'bottom'
    };
}

@Component({
    template: `
        <div class="inline-surface" style="overflow: auto; width: 360px; height: 120px;">
            <angular-multiselect
                [data]="items"
                [(ngModel)]="selectedItems"
                [settings]="settings">
            </angular-multiselect>
            <div class="after-field">After</div>
        </div>
    `,
    standalone: false
})
class InlineOverlayHostComponent {
    items = [
        { id: 1, itemName: 'Canada' },
        { id: 2, itemName: 'Portugal' },
        { id: 3, itemName: 'Brazil' }
    ];
    selectedItems = [];
    settings: DropdownSettings = {
        text: 'Select countries',
        tagToBody: false,
        maxHeight: 220,
        autoPosition: false,
        position: 'bottom'
    };
}

function directBodyDropdowns() {
    return Array.prototype.slice.call(document.body.children).filter((child: HTMLElement) => {
        return child.classList && child.classList.contains('dropdown-list');
    });
}

function setAnchorBounds(component: AngularMultiSelect, top: number = 80, bottom: number = 120) {
    var anchor = component.selectedListElem.nativeElement as HTMLElement;
    var bounds = {
        x: 64,
        y: top,
        top: top,
        left: 64,
        right: 384,
        bottom: bottom,
        width: 320,
        height: bottom - top,
        toJSON: () => ({})
    } as DOMRect;
    var existingSpy = (anchor.getBoundingClientRect as any).and;

    if (existingSpy) {
        existingSpy.returnValue(bounds);
    }
    else {
        spyOn(anchor, 'getBoundingClientRect').and.returnValue(bounds);
    }

    Object.defineProperty(anchor, 'clientWidth', { configurable: true, value: 320 });
    Object.defineProperty(anchor, 'clientHeight', { configurable: true, value: bottom - top });
}

function setPanelBounds(component: AngularMultiSelect, height: number) {
    var panel = component.dropdownListElem.nativeElement as HTMLElement;
    spyOn(panel, 'getBoundingClientRect').and.returnValue({
        x: 64,
        y: 0,
        top: 0,
        left: 64,
        right: 384,
        bottom: height,
        width: 320,
        height: height,
        toJSON: () => ({})
    } as DOMRect);

    Object.defineProperty(panel, 'offsetHeight', { configurable: true, value: height });
    Object.defineProperty(panel, 'scrollHeight', { configurable: true, value: height });
}

describe('AngularMultiSelect tagToBody overlay', () => {
    let fixture: ComponentFixture<BodyOverlayHostComponent>;
    let component: AngularMultiSelect;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [FormsModule, AngularMultiSelectModule],
            declarations: [BodyOverlayHostComponent, InlineOverlayHostComponent]
        }).compileComponents();

        fixture = TestBed.createComponent(BodyOverlayHostComponent);
        fixture.detectChanges();
        component = fixture.debugElement.query(By.directive(AngularMultiSelect)).componentInstance;
        setAnchorBounds(component);
    });

    afterEach(() => {
        if (fixture) {
            fixture.destroy();
        }
        directBodyDropdowns().forEach((panel: HTMLElement) => panel.remove());
    });

    it('starts closed without an orphan body overlay', () => {
        var localPanel = fixture.nativeElement.querySelector('.dropdown-list') as HTMLElement;

        expect(component.isActive).toBeFalse();
        expect(localPanel.hidden).toBeTrue();
        expect(window.getComputedStyle(localPanel).display).toBe('none');
        expect(window.getComputedStyle(localPanel).position).toBe('absolute');
        expect(localPanel.classList.contains('tagToBody')).toBeFalse();
        expect(localPanel.classList.contains('opens-up')).toBeFalse();
        expect(localPanel.classList.contains('opens-down')).toBeFalse();
        expect(localPanel.classList.contains('is-open')).toBeFalse();
        expect(directBodyDropdowns().length).toBe(0);
    });

    it('toggles closed again when the trigger is clicked twice', fakeAsync(() => {
        var trigger = fixture.nativeElement.querySelector('.c-btn') as HTMLElement;

        trigger.dispatchEvent(new MouseEvent('click', { bubbles: true, cancelable: true }));
        fixture.detectChanges();
        tick();
        fixture.detectChanges();

        expect(component.isActive).toBeTrue();
        expect(directBodyDropdowns().length).toBe(1);
        expect(window.getComputedStyle(directBodyDropdowns()[0] as HTMLElement).position).toBe('fixed');

        trigger.dispatchEvent(new MouseEvent('click', { bubbles: true, cancelable: true }));
        fixture.detectChanges();
        tick();
        fixture.detectChanges();

        expect(component.isActive).toBeFalse();
        expect(directBodyDropdowns().length).toBe(0);

        var localPanel = fixture.nativeElement.querySelector('.dropdown-list') as HTMLElement;
        expect(localPanel.hidden).toBeTrue();
        expect(window.getComputedStyle(localPanel).display).toBe('none');
        expect(window.getComputedStyle(localPanel).position).toBe('absolute');
        expect(localPanel.getAttribute('aria-hidden')).toBe('true');
        expect(localPanel.classList.contains('tagToBody')).toBeFalse();
        expect(localPanel.classList.contains('opens-up')).toBeFalse();
        expect(localPanel.classList.contains('opens-down')).toBeFalse();
        expect(localPanel.classList.contains('is-open')).toBeFalse();
    }));

    it('keeps the overlay open for panel clicks and closes on outside clicks', fakeAsync(() => {
        component.openDropdown();
        fixture.detectChanges();
        tick();
        fixture.detectChanges();

        var panel = directBodyDropdowns()[0] as HTMLElement;
        panel.dispatchEvent(new MouseEvent('click', { bubbles: true, cancelable: true }));
        tick();
        fixture.detectChanges();

        expect(component.isActive).toBeTrue();
        expect(directBodyDropdowns().length).toBe(1);

        document.body.dispatchEvent(new MouseEvent('click', { bubbles: true, cancelable: true }));
        tick();
        fixture.detectChanges();

        expect(component.isActive).toBeFalse();
        expect(directBodyDropdowns().length).toBe(0);
    }));

    it('moves the open panel to document.body and keeps it aligned to the trigger', fakeAsync(() => {
        component.openDropdown();
        fixture.detectChanges();
        tick();
        fixture.detectChanges();

        var panels = directBodyDropdowns();
        expect(panels.length).toBe(1);

        var panel = panels[0] as HTMLElement;
        expect(panel.classList.contains('tagToBody')).toBeTrue();
        expect(panel.classList.contains('opens-down')).toBeTrue();
        expect(panel.classList.contains('is-open')).toBeTrue();
        expect(panel.classList.contains('theme-classic')).toBeTrue();
        expect(panel.style.getPropertyValue('--ms-surface')).toBeTruthy();
        expect(panel.style.getPropertyValue('--ms-surface-soft')).toBeTruthy();
        expect(panel.getAttribute('aria-hidden')).toBe('false');
        expect(component.dropDownWidth).toBe(320);
        expect(component.dropDownLeft).toBe(64);
        expect(component.dropDownTop).toBe('121px');
    }));

    it('keeps the body overlay styled for every shipped skin', fakeAsync(() => {
        ['classic', 'material', 'dark', 'custom', 'brand'].forEach((skinName) => {
            var skinFixture = TestBed.createComponent(BodyOverlayHostComponent);
            skinFixture.componentInstance.settings = Object.assign({}, skinFixture.componentInstance.settings, {
                skin: skinName,
                theme: skinName
            });
            skinFixture.detectChanges();
            var skinComponent = skinFixture.debugElement.query(By.directive(AngularMultiSelect)).componentInstance as AngularMultiSelect;
            setAnchorBounds(skinComponent);

            var trigger = skinFixture.nativeElement.querySelector('.c-btn') as HTMLElement;
            trigger.dispatchEvent(new MouseEvent('click', { bubbles: true, cancelable: true }));
            skinFixture.detectChanges();
            tick();
            skinFixture.detectChanges();

            var panel = directBodyDropdowns()[0] as HTMLElement;
            var listArea = panel.querySelector('.list-area') as HTMLElement;
            var listAreaStyles = window.getComputedStyle(listArea);

            expect(panel.classList.contains('tagToBody')).toBeTrue();
            expect(panel.classList.contains('skin-' + skinName)).toBeTrue();
            expect(window.getComputedStyle(panel).position).toBe('fixed');
            expect(listAreaStyles.backgroundColor).not.toBe('rgba(0, 0, 0, 0)');

            if (skinName == 'classic') {
                expect(listAreaStyles.borderRadius).toBe('3px');
            }

            if (skinName == 'brand') {
                expect(panel.classList.contains('theme-custom')).toBeTrue();
            }

            skinComponent.closeDropdown();
            tick();
            skinFixture.destroy();
            expect(directBodyDropdowns().length).toBe(0);
        });
    }));

    it('keeps the normal open panel fixed without appending it to body', fakeAsync(() => {
        var inlineFixture = TestBed.createComponent(InlineOverlayHostComponent);
        inlineFixture.detectChanges();
        var inlineComponent = inlineFixture.debugElement.query(By.directive(AngularMultiSelect)).componentInstance as AngularMultiSelect;
        setAnchorBounds(inlineComponent);

        var trigger = inlineFixture.nativeElement.querySelector('.c-btn') as HTMLElement;
        trigger.dispatchEvent(new MouseEvent('click', { bubbles: true, cancelable: true }));
        inlineFixture.detectChanges();
        tick();
        inlineFixture.detectChanges();

        var panel = inlineFixture.nativeElement.querySelector('.dropdown-list') as HTMLElement;
        expect(directBodyDropdowns().length).toBe(0);
        expect(panel.hidden).toBeFalse();
        expect(panel.classList.contains('is-open')).toBeTrue();
        expect(panel.classList.contains('tagToBody')).toBeFalse();
        expect(window.getComputedStyle(panel).position).toBe('fixed');
        expect(inlineComponent.dropDownWidth).toBe(320);
        expect(inlineComponent.dropDownLeft).toBe(64);
        expect(inlineComponent.dropDownTop).toBe('121px');

        inlineFixture.destroy();
    }));

    it('uses an internal open direction without mutating settings.position', fakeAsync(() => {
        component.settings.position = 'bottom';
        component.settings.autoPosition = true;
        component.isActive = true;

        component.openTowardsTop(true);
        fixture.detectChanges();
        tick();
        fixture.detectChanges();

        expect(component.settings.position).toBe('bottom');
        expect(component.dropDownDirection).toBe('top');
        expect(component.getDropdownPanelClasses()).toContain('opens-up');
        expect(component.getDropdownPanelClasses()).not.toContain('opens-down');
    }));

    it('positions an upward opening panel above the trigger using the measured panel height', fakeAsync(() => {
        setAnchorBounds(component, 500, 540);
        setPanelBounds(component, 418);
        component.settings.position = 'top';
        component.settings.autoPosition = false;
        component.isActive = true;

        component.openTowardsTop(true);
        fixture.detectChanges();
        tick();
        fixture.detectChanges();

        expect(component.dropDownDirection).toBe('top');
        expect(component.dropDownTop).toBe('81px');
    }));

    it('keeps a forced upward panel above the trigger instead of clamping over it', fakeAsync(() => {
        setAnchorBounds(component, 108, 185);
        setPanelBounds(component, 368);
        component.settings.position = 'top';
        component.settings.autoPosition = false;
        component.isActive = true;

        component.openTowardsTop(true);
        fixture.detectChanges();
        tick();
        fixture.detectChanges();

        expect(component.dropDownDirection).toBe('top');
        expect(component.dropDownTop).toBe('-261px');
    }));

    it('removes the body overlay on close and destroy', fakeAsync(() => {
        component.openDropdown();
        tick();
        expect(directBodyDropdowns().length).toBe(1);

        component.closeDropdown();
        tick();
        expect(directBodyDropdowns().length).toBe(0);

        component.openDropdown();
        tick();
        expect(directBodyDropdowns().length).toBe(1);

        component.ngOnDestroy();
        tick();
        expect(directBodyDropdowns().length).toBe(0);
    }));
});
