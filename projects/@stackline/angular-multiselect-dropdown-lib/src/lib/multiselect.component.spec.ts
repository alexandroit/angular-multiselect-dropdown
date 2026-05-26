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

function directBodyDropdowns() {
    return Array.prototype.slice.call(document.body.children).filter((child: HTMLElement) => {
        return child.classList && child.classList.contains('dropdown-list');
    });
}

function setAnchorBounds(component: AngularMultiSelect) {
    var anchor = component.selectedListElem.nativeElement as HTMLElement;
    spyOn(anchor, 'getBoundingClientRect').and.returnValue({
        x: 64,
        y: 80,
        top: 80,
        left: 64,
        right: 384,
        bottom: 120,
        width: 320,
        height: 40,
        toJSON: () => ({})
    } as DOMRect);

    Object.defineProperty(anchor, 'clientWidth', { configurable: true, value: 320 });
    Object.defineProperty(anchor, 'clientHeight', { configurable: true, value: 40 });
}

describe('AngularMultiSelect tagToBody overlay', () => {
    let fixture: ComponentFixture<BodyOverlayHostComponent>;
    let component: AngularMultiSelect;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [FormsModule, AngularMultiSelectModule],
            declarations: [BodyOverlayHostComponent]
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

    it('moves the open panel to document.body and keeps it aligned to the trigger', fakeAsync(() => {
        component.openDropdown();
        fixture.detectChanges();
        tick();
        fixture.detectChanges();

        var panels = directBodyDropdowns();
        expect(panels.length).toBe(1);

        var panel = panels[0] as HTMLElement;
        expect(panel.classList.contains('tagToBody')).toBeTrue();
        expect(panel.getAttribute('aria-hidden')).toBe('false');
        expect(component.dropDownWidth).toBe(320);
        expect(component.dropDownLeft).toBe(64);
        expect(component.dropDownTop).toBe('121px');
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
