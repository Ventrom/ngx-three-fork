/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix */
import { ChangeDetectionStrategy, Component, Input, forwardRef, } from '@angular/core';
import { LOD } from 'three';
import { ThObject3D } from './ThObject3D';
import * as i0 from "@angular/core";
export class ThLOD extends ThObject3D {
    getType() {
        return LOD;
    }
    get isLOD() {
        return this._objRef?.isLOD;
    }
    get type() {
        return this._objRef?.type;
    }
    set levels(value) {
        if (this._objRef) {
            this._objRef.levels = value;
        }
    }
    get levels() {
        return this._objRef?.levels;
    }
    set autoUpdate(value) {
        if (this._objRef) {
            this._objRef.autoUpdate = value;
        }
    }
    get autoUpdate() {
        return this._objRef?.autoUpdate;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThLOD, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.1.2", type: ThLOD, selector: "th-lOD", inputs: { levels: "levels", autoUpdate: "autoUpdate" }, providers: [{ provide: ThObject3D, useExisting: forwardRef(() => ThLOD) }], usesInheritance: true, ngImport: i0, template: '<ng-content/>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThLOD, decorators: [{
            type: Component,
            args: [{
                    selector: 'th-lOD',
                    template: '<ng-content/>',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    providers: [{ provide: ThObject3D, useExisting: forwardRef(() => ThLOD) }],
                }]
        }], propDecorators: { levels: [{
                type: Input
            }], autoUpdate: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGhMT0QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtdGhyZWUvc3JjL2xpYi9nZW5lcmF0ZWQvVGhMT0QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEseURBQXlEO0FBQ3pELHlDQUF5QztBQUN6QywrRkFBK0Y7QUFDL0YsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixTQUFTLEVBQ1QsS0FBSyxFQUVMLFVBQVUsR0FDWCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsR0FBRyxFQUE4QixNQUFNLE9BQU8sQ0FBQztBQUN4RCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sY0FBYyxDQUFDOztBQVExQyxNQUFNLE9BQU8sS0FJWCxTQUFRLFVBQStCO0lBQ2hDLE9BQU87UUFDWixPQUFPLEdBQUcsQ0FBQztJQUNiLENBQUM7SUFFRCxJQUFXLEtBQUs7UUFDZCxPQUFPLElBQUksQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDO0lBQzdCLENBQUM7SUFDRCxJQUFXLElBQUk7UUFDYixPQUFPLElBQUksQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDO0lBQzVCLENBQUM7SUFDRCxJQUNXLE1BQU0sQ0FDZixLQU9FO1FBRUYsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDakIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQzlCLENBQUM7SUFDSCxDQUFDO0lBRUQsSUFBVyxNQUFNO1FBVWYsT0FBTyxJQUFJLENBQUMsT0FBTyxFQUFFLE1BQU0sQ0FBQztJQUM5QixDQUFDO0lBQ0QsSUFDVyxVQUFVLENBQUMsS0FBYztRQUNsQyxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUNqQixJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7UUFDbEMsQ0FBQztJQUNILENBQUM7SUFFRCxJQUFXLFVBQVU7UUFDbkIsT0FBTyxJQUFJLENBQUMsT0FBTyxFQUFFLFVBQVUsQ0FBQztJQUNsQyxDQUFDOzhHQXBEVSxLQUFLO2tHQUFMLEtBQUsseUZBRkwsQ0FBQyxFQUFFLE9BQU8sRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLGlEQUZoRSxlQUFlOzsyRkFJZCxLQUFLO2tCQU5qQixTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxRQUFRO29CQUNsQixRQUFRLEVBQUUsZUFBZTtvQkFDekIsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07b0JBQy9DLFNBQVMsRUFBRSxDQUFDLEVBQUUsT0FBTyxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUUsVUFBVSxDQUFDLEdBQUcsRUFBRSxNQUFNLENBQUMsRUFBRSxDQUFDO2lCQUMzRTs4QkFpQlksTUFBTTtzQkFEaEIsS0FBSztnQkE2QkssVUFBVTtzQkFEcEIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIEB0eXBlc2NyaXB0LWVzbGludC9uYW1pbmctY29udmVudGlvbiAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tdW5kZXJzY29yZS1kYW5nbGUgKi9cbi8qIGVzbGludC1kaXNhYmxlIEBhbmd1bGFyLWVzbGludC9jb21wb25lbnQtc2VsZWN0b3IsIEBhbmd1bGFyLWVzbGludC9jb21wb25lbnQtY2xhc3Mtc3VmZml4ICovXG5pbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ29tcG9uZW50LFxuICBJbnB1dCxcbiAgVHlwZSxcbiAgZm9yd2FyZFJlZixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBMT0QsIE9iamVjdDNELCBPYmplY3QzREV2ZW50TWFwIH0gZnJvbSAndGhyZWUnO1xuaW1wb3J0IHsgVGhPYmplY3QzRCB9IGZyb20gJy4vVGhPYmplY3QzRCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3RoLWxPRCcsXG4gIHRlbXBsYXRlOiAnPG5nLWNvbnRlbnQvPicsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBwcm92aWRlcnM6IFt7IHByb3ZpZGU6IFRoT2JqZWN0M0QsIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IFRoTE9EKSB9XSxcbn0pXG5leHBvcnQgY2xhc3MgVGhMT0Q8XG4gIFRFdmVudE1hcCBleHRlbmRzIE9iamVjdDNERXZlbnRNYXAgPSBPYmplY3QzREV2ZW50TWFwLFxuICBUIGV4dGVuZHMgTE9EPFRFdmVudE1hcD4gPSBMT0Q8VEV2ZW50TWFwPixcbiAgVEFSR1MgPSBbXSxcbj4gZXh0ZW5kcyBUaE9iamVjdDNEPFRFdmVudE1hcCwgVCwgVEFSR1M+IHtcbiAgcHVibGljIGdldFR5cGUoKTogVHlwZTxMT0Q8VEV2ZW50TWFwPj4ge1xuICAgIHJldHVybiBMT0Q7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGlzTE9EKCk6IHRydWUgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9vYmpSZWY/LmlzTE9EO1xuICB9XG4gIHB1YmxpYyBnZXQgdHlwZSgpOiAoc3RyaW5nIHwgJ0xPRCcpIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fb2JqUmVmPy50eXBlO1xuICB9XG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzZXQgbGV2ZWxzKFxuICAgIHZhbHVlOiBBcnJheTx7XG4gICAgICAvKiogVGhlIE9iamVjdDNEIHRvIGRpc3BsYXkgYXQgdGhpcyBsZXZlbC4gKi9cbiAgICAgIG9iamVjdDogT2JqZWN0M0Q7XG4gICAgICAvKiogVGhlIGRpc3RhbmNlIGF0IHdoaWNoIHRvIGRpc3BsYXkgdGhpcyBsZXZlbCBvZiBkZXRhaWwuIEV4cGVjdHMgYSBgRmxvYXRgLiAqL1xuICAgICAgZGlzdGFuY2U6IG51bWJlcjtcbiAgICAgIC8qKiBUaHJlc2hvbGQgdXNlZCB0byBhdm9pZCBmbGlja2VyaW5nIGF0IExPRCBib3VuZGFyaWVzLCBhcyBhIGZyYWN0aW9uIG9mIGRpc3RhbmNlLiBFeHBlY3RzIGEgYEZsb2F0YC4gKi9cbiAgICAgIGh5c3RlcmVzaXM6IG51bWJlcjtcbiAgICB9PixcbiAgKSB7XG4gICAgaWYgKHRoaXMuX29ialJlZikge1xuICAgICAgdGhpcy5fb2JqUmVmLmxldmVscyA9IHZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBnZXQgbGV2ZWxzKCk6XG4gICAgfCBBcnJheTx7XG4gICAgICAgIC8qKiBUaGUgT2JqZWN0M0QgdG8gZGlzcGxheSBhdCB0aGlzIGxldmVsLiAqL1xuICAgICAgICBvYmplY3Q6IE9iamVjdDNEO1xuICAgICAgICAvKiogVGhlIGRpc3RhbmNlIGF0IHdoaWNoIHRvIGRpc3BsYXkgdGhpcyBsZXZlbCBvZiBkZXRhaWwuIEV4cGVjdHMgYSBgRmxvYXRgLiAqL1xuICAgICAgICBkaXN0YW5jZTogbnVtYmVyO1xuICAgICAgICAvKiogVGhyZXNob2xkIHVzZWQgdG8gYXZvaWQgZmxpY2tlcmluZyBhdCBMT0QgYm91bmRhcmllcywgYXMgYSBmcmFjdGlvbiBvZiBkaXN0YW5jZS4gRXhwZWN0cyBhIGBGbG9hdGAuICovXG4gICAgICAgIGh5c3RlcmVzaXM6IG51bWJlcjtcbiAgICAgIH0+XG4gICAgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9vYmpSZWY/LmxldmVscztcbiAgfVxuICBASW5wdXQoKVxuICBwdWJsaWMgc2V0IGF1dG9VcGRhdGUodmFsdWU6IGJvb2xlYW4pIHtcbiAgICBpZiAodGhpcy5fb2JqUmVmKSB7XG4gICAgICB0aGlzLl9vYmpSZWYuYXV0b1VwZGF0ZSA9IHZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBnZXQgYXV0b1VwZGF0ZSgpOiBib29sZWFuIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fb2JqUmVmPy5hdXRvVXBkYXRlO1xuICB9XG59XG4iXX0=