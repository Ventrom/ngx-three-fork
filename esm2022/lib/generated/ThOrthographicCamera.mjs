/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix */
import { ChangeDetectionStrategy, Component, Input, forwardRef, } from '@angular/core';
import { OrthographicCamera } from 'three';
import { ThCamera } from './ThCamera';
import { ThObject3D } from './ThObject3D';
import * as i0 from "@angular/core";
export class ThOrthographicCamera extends ThCamera {
    getType() {
        return OrthographicCamera;
    }
    get isOrthographicCamera() {
        return this._objRef?.isOrthographicCamera;
    }
    get type() {
        return this._objRef?.type;
    }
    set zoom(value) {
        if (this._objRef) {
            this._objRef.zoom = value;
        }
    }
    get zoom() {
        return this._objRef?.zoom;
    }
    set view(value) {
        if (this._objRef) {
            this._objRef.view = value;
        }
    }
    get view() {
        return this._objRef?.view;
    }
    set left(value) {
        if (this._objRef) {
            this._objRef.left = value;
        }
    }
    get left() {
        return this._objRef?.left;
    }
    set right(value) {
        if (this._objRef) {
            this._objRef.right = value;
        }
    }
    get right() {
        return this._objRef?.right;
    }
    set top(value) {
        if (this._objRef) {
            this._objRef.top = value;
        }
    }
    get top() {
        return this._objRef?.top;
    }
    set bottom(value) {
        if (this._objRef) {
            this._objRef.bottom = value;
        }
    }
    get bottom() {
        return this._objRef?.bottom;
    }
    set near(value) {
        if (this._objRef) {
            this._objRef.near = value;
        }
    }
    get near() {
        return this._objRef?.near;
    }
    set far(value) {
        if (this._objRef) {
            this._objRef.far = value;
        }
    }
    get far() {
        return this._objRef?.far;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThOrthographicCamera, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.1.2", type: ThOrthographicCamera, selector: "th-orthographicCamera", inputs: { zoom: "zoom", view: "view", left: "left", right: "right", top: "top", bottom: "bottom", near: "near", far: "far" }, providers: [
            {
                provide: ThObject3D,
                useExisting: forwardRef(() => ThOrthographicCamera),
            },
            { provide: ThCamera, useExisting: forwardRef(() => ThOrthographicCamera) },
        ], usesInheritance: true, ngImport: i0, template: '<ng-content/>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThOrthographicCamera, decorators: [{
            type: Component,
            args: [{
                    selector: 'th-orthographicCamera',
                    template: '<ng-content/>',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    providers: [
                        {
                            provide: ThObject3D,
                            useExisting: forwardRef(() => ThOrthographicCamera),
                        },
                        { provide: ThCamera, useExisting: forwardRef(() => ThOrthographicCamera) },
                    ],
                }]
        }], propDecorators: { zoom: [{
                type: Input
            }], view: [{
                type: Input
            }], left: [{
                type: Input
            }], right: [{
                type: Input
            }], top: [{
                type: Input
            }], bottom: [{
                type: Input
            }], near: [{
                type: Input
            }], far: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGhPcnRob2dyYXBoaWNDYW1lcmEuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtdGhyZWUvc3JjL2xpYi9nZW5lcmF0ZWQvVGhPcnRob2dyYXBoaWNDYW1lcmEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEseURBQXlEO0FBQ3pELHlDQUF5QztBQUN6QywrRkFBK0Y7QUFDL0YsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixTQUFTLEVBQ1QsS0FBSyxFQUVMLFVBQVUsR0FDWCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxPQUFPLENBQUM7QUFDM0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLFlBQVksQ0FBQztBQUN0QyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sY0FBYyxDQUFDOztBQWMxQyxNQUFNLE9BQU8sb0JBVVgsU0FBUSxRQUFrQjtJQUNuQixPQUFPO1FBQ1osT0FBTyxrQkFBa0IsQ0FBQztJQUM1QixDQUFDO0lBRUQsSUFBVyxvQkFBb0I7UUFDN0IsT0FBTyxJQUFJLENBQUMsT0FBTyxFQUFFLG9CQUFvQixDQUFDO0lBQzVDLENBQUM7SUFDRCxJQUFXLElBQUk7UUFDYixPQUFPLElBQUksQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDO0lBQzVCLENBQUM7SUFDRCxJQUNXLElBQUksQ0FBQyxLQUFhO1FBQzNCLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ2pCLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQztRQUM1QixDQUFDO0lBQ0gsQ0FBQztJQUVELElBQVcsSUFBSTtRQUNiLE9BQU8sSUFBSSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUM7SUFDNUIsQ0FBQztJQUNELElBQ1csSUFBSSxDQUNiLEtBUUM7UUFFRCxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUNqQixJQUFJLENBQUMsT0FB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OEJBdUJZLElBQUk7c0JBRGQsS0FBSztnQkFXSyxJQUFJO3NCQURkLEtBQUs7Z0JBK0JLLElBQUk7c0JBRGQsS0FBSztnQkFXSyxLQUFLO3NCQURmLEtBQUs7Z0JBV0ssR0FBRztzQkFEYixLQUFLO2dCQVdLLE1BQU07c0JBRGhCLEtBQUs7Z0JBV0ssSUFBSTtzQkFEZCxLQUFLO2dCQVdLLEdBQUc7c0JBRGIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIEB0eXBlc2NyaXB0LWVzbGludC9uYW1pbmctY29udmVudGlvbiAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tdW5kZXJzY29yZS1kYW5nbGUgKi9cbi8qIGVzbGludC1kaXNhYmxlIEBhbmd1bGFyLWVzbGludC9jb21wb25lbnQtc2VsZWN0b3IsIEBhbmd1bGFyLWVzbGludC9jb21wb25lbnQtY2xhc3Mtc3VmZml4ICovXG5pbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ29tcG9uZW50LFxuICBJbnB1dCxcbiAgVHlwZSxcbiAgZm9yd2FyZFJlZixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPcnRob2dyYXBoaWNDYW1lcmEgfSBmcm9tICd0aHJlZSc7XG5pbXBvcnQgeyBUaENhbWVyYSB9IGZyb20gJy4vVGhDYW1lcmEnO1xuaW1wb3J0IHsgVGhPYmplY3QzRCB9IGZyb20gJy4vVGhPYmplY3QzRCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3RoLW9ydGhvZ3JhcGhpY0NhbWVyYScsXG4gIHRlbXBsYXRlOiAnPG5nLWNvbnRlbnQvPicsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBwcm92aWRlcnM6IFtcbiAgICB7XG4gICAgICBwcm92aWRlOiBUaE9iamVjdDNELFxuICAgICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gVGhPcnRob2dyYXBoaWNDYW1lcmEpLFxuICAgIH0sXG4gICAgeyBwcm92aWRlOiBUaENhbWVyYSwgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gVGhPcnRob2dyYXBoaWNDYW1lcmEpIH0sXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIFRoT3J0aG9ncmFwaGljQ2FtZXJhPFxuICBUIGV4dGVuZHMgT3J0aG9ncmFwaGljQ2FtZXJhID0gT3J0aG9ncmFwaGljQ2FtZXJhLFxuICBUQVJHUyA9IFtcbiAgICBsZWZ0PzogbnVtYmVyLFxuICAgIHJpZ2h0PzogbnVtYmVyLFxuICAgIHRvcD86IG51bWJlcixcbiAgICBib3R0b20/OiBudW1iZXIsXG4gICAgbmVhcj86IG51bWJlcixcbiAgICBmYXI/OiBudW1iZXIsXG4gIF0sXG4+IGV4dGVuZHMgVGhDYW1lcmE8VCwgVEFSR1M+IHtcbiAgcHVibGljIGdldFR5cGUoKTogVHlwZTxPcnRob2dyYXBoaWNDYW1lcmE+IHtcbiAgICByZXR1cm4gT3J0aG9ncmFwaGljQ2FtZXJhO1xuICB9XG5cbiAgcHVibGljIGdldCBpc09ydGhvZ3JhcGhpY0NhbWVyYSgpOiB0cnVlIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fb2JqUmVmPy5pc09ydGhvZ3JhcGhpY0NhbWVyYTtcbiAgfVxuICBwdWJsaWMgZ2V0IHR5cGUoKTogKHN0cmluZyB8ICdPcnRob2dyYXBoaWNDYW1lcmEnKSB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX29ialJlZj8udHlwZTtcbiAgfVxuICBASW5wdXQoKVxuICBwdWJsaWMgc2V0IHpvb20odmFsdWU6IG51bWJlcikge1xuICAgIGlmICh0aGlzLl9vYmpSZWYpIHtcbiAgICAgIHRoaXMuX29ialJlZi56b29tID0gdmFsdWU7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGdldCB6b29tKCk6IG51bWJlciB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX29ialJlZj8uem9vbTtcbiAgfVxuICBASW5wdXQoKVxuICBwdWJsaWMgc2V0IHZpZXcoXG4gICAgdmFsdWU6IG51bGwgfCB7XG4gICAgICBlbmFibGVkOiBib29sZWFuO1xuICAgICAgZnVsbFdpZHRoOiBudW1iZXI7XG4gICAgICBmdWxsSGVpZ2h0OiBudW1iZXI7XG4gICAgICBvZmZzZXRYOiBudW1iZXI7XG4gICAgICBvZmZzZXRZOiBudW1iZXI7XG4gICAgICB3aWR0aDogbnVtYmVyO1xuICAgICAgaGVpZ2h0OiBudW1iZXI7XG4gICAgfSxcbiAgKSB7XG4gICAgaWYgKHRoaXMuX29ialJlZikge1xuICAgICAgdGhpcy5fb2JqUmVmLnZpZXcgPSB2YWx1ZTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgZ2V0IHZpZXcoKTpcbiAgICB8IChudWxsIHwge1xuICAgICAgICBlbmFibGVkOiBib29sZWFuO1xuICAgICAgICBmdWxsV2lkdGg6IG51bWJlcjtcbiAgICAgICAgZnVsbEhlaWdodDogbnVtYmVyO1xuICAgICAgICBvZmZzZXRYOiBudW1iZXI7XG4gICAgICAgIG9mZnNldFk6IG51bWJlcjtcbiAgICAgICAgd2lkdGg6IG51bWJlcjtcbiAgICAgICAgaGVpZ2h0OiBudW1iZXI7XG4gICAgICB9KVxuICAgIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fb2JqUmVmPy52aWV3O1xuICB9XG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzZXQgbGVmdCh2YWx1ZTogbnVtYmVyKSB7XG4gICAgaWYgKHRoaXMuX29ialJlZikge1xuICAgICAgdGhpcy5fb2JqUmVmLmxlZnQgPSB2YWx1ZTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgZ2V0IGxlZnQoKTogbnVtYmVyIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fb2JqUmVmPy5sZWZ0O1xuICB9XG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzZXQgcmlnaHQodmFsdWU6IG51bWJlcikge1xuICAgIGlmICh0aGlzLl9vYmpSZWYpIHtcbiAgICAgIHRoaXMuX29ialJlZi5yaWdodCA9IHZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBnZXQgcmlnaHQoKTogbnVtYmVyIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fb2JqUmVmPy5yaWdodDtcbiAgfVxuICBASW5wdXQoKVxuICBwdWJsaWMgc2V0IHRvcCh2YWx1ZTogbnVtYmVyKSB7XG4gICAgaWYgKHRoaXMuX29ialJlZikge1xuICAgICAgdGhpcy5fb2JqUmVmLnRvcCA9IHZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBnZXQgdG9wKCk6IG51bWJlciB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX29ialJlZj8udG9wO1xuICB9XG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzZXQgYm90dG9tKHZhbHVlOiBudW1iZXIpIHtcbiAgICBpZiAodGhpcy5fb2JqUmVmKSB7XG4gICAgICB0aGlzLl9vYmpSZWYuYm90dG9tID0gdmFsdWU7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGdldCBib3R0b20oKTogbnVtYmVyIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fb2JqUmVmPy5ib3R0b207XG4gIH1cbiAgQElucHV0KClcbiAgcHVibGljIHNldCBuZWFyKHZhbHVlOiBudW1iZXIpIHtcbiAgICBpZiAodGhpcy5fb2JqUmVmKSB7XG4gICAgICB0aGlzLl9vYmpSZWYubmVhciA9IHZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBnZXQgbmVhcigpOiBudW1iZXIgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9vYmpSZWY/Lm5lYXI7XG4gIH1cbiAgQElucHV0KClcbiAgcHVibGljIHNldCBmYXIodmFsdWU6IG51bWJlcikge1xuICAgIGlmICh0aGlzLl9vYmpSZWYpIHtcbiAgICAgIHRoaXMuX29ialJlZi5mYXIgPSB2YWx1ZTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgZ2V0IGZhcigpOiBudW1iZXIgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9vYmpSZWY/LmZhcjtcbiAgfVxufVxuIl19