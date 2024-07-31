/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix */
import { ChangeDetectionStrategy, Component, Input, forwardRef, } from '@angular/core';
import { SpotLightHelper, } from 'three';
import { applyValue } from '../util';
import { ThObject3D } from './ThObject3D';
import * as i0 from "@angular/core";
export class ThSpotLightHelper extends ThObject3D {
    getType() {
        return SpotLightHelper;
    }
    get type() {
        return this._objRef?.type;
    }
    set cone(value) {
        if (this._objRef) {
            this._objRef.cone = value;
        }
    }
    get cone() {
        return this._objRef?.cone;
    }
    set light(value) {
        if (this._objRef) {
            this._objRef.light = value;
        }
    }
    get light() {
        return this._objRef?.light;
    }
    set matrix(value) {
        if (this._objRef) {
            this._objRef.matrix = applyValue(this._objRef.matrix, value);
        }
    }
    get matrix() {
        return this._objRef?.matrix;
    }
    set color(value) {
        if (this._objRef) {
            this._objRef.color = value;
        }
    }
    get color() {
        return this._objRef?.color;
    }
    set matrixAutoUpdate(value) {
        if (this._objRef) {
            this._objRef.matrixAutoUpdate = value;
        }
    }
    get matrixAutoUpdate() {
        return this._objRef?.matrixAutoUpdate;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThSpotLightHelper, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.1.2", type: ThSpotLightHelper, selector: "th-spotLightHelper", inputs: { cone: "cone", light: "light", matrix: "matrix", color: "color", matrixAutoUpdate: "matrixAutoUpdate" }, providers: [
            { provide: ThObject3D, useExisting: forwardRef(() => ThSpotLightHelper) },
        ], usesInheritance: true, ngImport: i0, template: '<ng-content/>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThSpotLightHelper, decorators: [{
            type: Component,
            args: [{
                    selector: 'th-spotLightHelper',
                    template: '<ng-content/>',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    providers: [
                        { provide: ThObject3D, useExisting: forwardRef(() => ThSpotLightHelper) },
                    ],
                }]
        }], propDecorators: { cone: [{
                type: Input
            }], light: [{
                type: Input
            }], matrix: [{
                type: Input
            }], color: [{
                type: Input
            }], matrixAutoUpdate: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGhTcG90TGlnaHRIZWxwZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtdGhyZWUvc3JjL2xpYi9nZW5lcmF0ZWQvVGhTcG90TGlnaHRIZWxwZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEseURBQXlEO0FBQ3pELHlDQUF5QztBQUN6QywrRkFBK0Y7QUFDL0YsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixTQUFTLEVBQ1QsS0FBSyxFQUVMLFVBQVUsR0FDWCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBTUwsZUFBZSxHQUNoQixNQUFNLE9BQU8sQ0FBQztBQUNmLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxTQUFTLENBQUM7QUFDckMsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGNBQWMsQ0FBQzs7QUFVMUMsTUFBTSxPQUFPLGlCQUdYLFNBQVEsVUFBc0M7SUFDdkMsT0FBTztRQUNaLE9BQU8sZUFBZSxDQUFDO0lBQ3pCLENBQUM7SUFFRCxJQUFXLElBQUk7UUFDYixPQUFPLElBQUksQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDO0lBQzVCLENBQUM7SUFDRCxJQUNXLElBQUksQ0FBQyxLQUFtQjtRQUNqQyxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUNqQixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksR0FBRyxLQUFLLENBQUM7UUFDNUIsQ0FBQztJQUNILENBQUM7SUFFRCxJQUFXLElBQUk7UUFDYixPQUFPLElBQUksQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDO0lBQzVCLENBQUM7SUFDRCxJQUNXLEtBQUssQ0FBQyxLQUFZO1FBQzNCLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ2pCLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUM3QixDQUFDO0lBQ0gsQ0FBQztJQUVELElBQVcsS0FBSztRQUNkLE9BQU8sSUFBSSxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUM7SUFDN0IsQ0FBQztJQUNELElBQ1csTUFBTSxDQUNmLEtBbUJLO1FBRUwsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDakIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsVUFBVSxDQUFVLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQ3hFLENBQUM7SUFDSCxDQUFDO0lBQ0QsSUFBVyxNQUFNO1FBQ2YsT0FBTyxJQUFJLENBQUMsT0FBTyxFQUFFLE1BQU0sQ0FBQztJQUM5QixDQUFDO0lBQ0QsSUFDVyxLQUFLLENBQUMsS0FBc0M7UUFDckQsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDakIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQzdCLENBQUM7SUFDSCxDQUFDO0lBRUQsSUFBVyxLQUFLO1FBQ2QsT0FBTyxJQUFJLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQztJQUM3QixDQUFDO0lBQ0QsSUFDVyxnQkFBZ0IsQ0FBQyxLQUFjO1FBQ3hDLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ2pCLElBQUksQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLEdBQUcsS0FBSyxDQUFDO1FBQ3hDLENBQUM7SUFDSCxDQUFDO0lBRUQsSUFBVyxnQkFBZ0I7UUFDekIsT0FBTyxJQUFJLENBQUMsT0FBTyxFQUFFLGdCQUFnQixDQUFDO0lBQ3hDLENBQUM7OEdBaEZVLGlCQUFpQjtrR0FBakIsaUJBQWlCLCtKQUpqQjtZQUNULEVBQUUsT0FBTyxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUUsVUFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDLGlCQUFpQixDQUFDLEVBQUU7U0FDMUUsaURBSlMsZUFBZTs7MkZBTWQsaUJBQWlCO2tCQVI3QixTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxvQkFBb0I7b0JBQzlCLFFBQVEsRUFBRSxlQUFlO29CQUN6QixlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtvQkFDL0MsU0FBUyxFQUFFO3dCQUNULEVBQUUsT0FBTyxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUUsVUFBVSxDQUFDLEdBQUcsRUFBRSxrQkFBa0IsQ0FBQyxFQUFFO3FCQUMxRTtpQkFDRjs4QkFhWSxJQUFJO3NCQURkLEtBQUs7Z0JBV0ssS0FBSztzQkFEZixLQUFLO2dCQVdLLE1BQU07c0JBRGhCLEtBQUs7Z0JBK0JLLEtBQUs7c0JBRGYsS0FBSztnQkFXSyxnQkFBZ0I7c0JBRDFCLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBAdHlwZXNjcmlwdC1lc2xpbnQvbmFtaW5nLWNvbnZlbnRpb24gKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vLXVuZGVyc2NvcmUtZGFuZ2xlICovXG4vKiBlc2xpbnQtZGlzYWJsZSBAYW5ndWxhci1lc2xpbnQvY29tcG9uZW50LXNlbGVjdG9yLCBAYW5ndWxhci1lc2xpbnQvY29tcG9uZW50LWNsYXNzLXN1ZmZpeCAqL1xuaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENvbXBvbmVudCxcbiAgSW5wdXQsXG4gIFR5cGUsXG4gIGZvcndhcmRSZWYsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgQ29sb3JSZXByZXNlbnRhdGlvbixcbiAgTGlnaHQsXG4gIExpbmVTZWdtZW50cyxcbiAgTWF0cml4NCxcbiAgT2JqZWN0M0RFdmVudE1hcCxcbiAgU3BvdExpZ2h0SGVscGVyLFxufSBmcm9tICd0aHJlZSc7XG5pbXBvcnQgeyBhcHBseVZhbHVlIH0gZnJvbSAnLi4vdXRpbCc7XG5pbXBvcnQgeyBUaE9iamVjdDNEIH0gZnJvbSAnLi9UaE9iamVjdDNEJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndGgtc3BvdExpZ2h0SGVscGVyJyxcbiAgdGVtcGxhdGU6ICc8bmctY29udGVudC8+JyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHByb3ZpZGVyczogW1xuICAgIHsgcHJvdmlkZTogVGhPYmplY3QzRCwgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gVGhTcG90TGlnaHRIZWxwZXIpIH0sXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIFRoU3BvdExpZ2h0SGVscGVyPFxuICBUIGV4dGVuZHMgU3BvdExpZ2h0SGVscGVyID0gU3BvdExpZ2h0SGVscGVyLFxuICBUQVJHUyA9IFtsaWdodDogTGlnaHQsIGNvbG9yPzogQ29sb3JSZXByZXNlbnRhdGlvbl0sXG4+IGV4dGVuZHMgVGhPYmplY3QzRDxPYmplY3QzREV2ZW50TWFwLCBULCBUQVJHUz4ge1xuICBwdWJsaWMgZ2V0VHlwZSgpOiBUeXBlPFNwb3RMaWdodEhlbHBlcj4ge1xuICAgIHJldHVybiBTcG90TGlnaHRIZWxwZXI7XG4gIH1cblxuICBwdWJsaWMgZ2V0IHR5cGUoKTogKHN0cmluZyB8ICdTcG90TGlnaHRIZWxwZXInKSB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX29ialJlZj8udHlwZTtcbiAgfVxuICBASW5wdXQoKVxuICBwdWJsaWMgc2V0IGNvbmUodmFsdWU6IExpbmVTZWdtZW50cykge1xuICAgIGlmICh0aGlzLl9vYmpSZWYpIHtcbiAgICAgIHRoaXMuX29ialJlZi5jb25lID0gdmFsdWU7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGdldCBjb25lKCk6IExpbmVTZWdtZW50cyB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX29ialJlZj8uY29uZTtcbiAgfVxuICBASW5wdXQoKVxuICBwdWJsaWMgc2V0IGxpZ2h0KHZhbHVlOiBMaWdodCkge1xuICAgIGlmICh0aGlzLl9vYmpSZWYpIHtcbiAgICAgIHRoaXMuX29ialJlZi5saWdodCA9IHZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBnZXQgbGlnaHQoKTogTGlnaHQgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9vYmpSZWY/LmxpZ2h0O1xuICB9XG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzZXQgbWF0cml4KFxuICAgIHZhbHVlOlxuICAgICAgfCBNYXRyaXg0XG4gICAgICB8IFtcbiAgICAgICAgICBuMTE6IG51bWJlcixcbiAgICAgICAgICBuMTI6IG51bWJlcixcbiAgICAgICAgICBuMTM6IG51bWJlcixcbiAgICAgICAgICBuMTQ6IG51bWJlcixcbiAgICAgICAgICBuMjE6IG51bWJlcixcbiAgICAgICAgICBuMjI6IG51bWJlcixcbiAgICAgICAgICBuMjM6IG51bWJlcixcbiAgICAgICAgICBuMjQ6IG51bWJlcixcbiAgICAgICAgICBuMzE6IG51bWJlcixcbiAgICAgICAgICBuMzI6IG51bWJlcixcbiAgICAgICAgICBuMzM6IG51bWJlcixcbiAgICAgICAgICBuMzQ6IG51bWJlcixcbiAgICAgICAgICBuNDE6IG51bWJlcixcbiAgICAgICAgICBuNDI6IG51bWJlcixcbiAgICAgICAgICBuNDM6IG51bWJlcixcbiAgICAgICAgICBuNDQ6IG51bWJlcixcbiAgICAgICAgXSxcbiAgKSB7XG4gICAgaWYgKHRoaXMuX29ialJlZikge1xuICAgICAgdGhpcy5fb2JqUmVmLm1hdHJpeCA9IGFwcGx5VmFsdWU8TWF0cml4ND4odGhpcy5fb2JqUmVmLm1hdHJpeCwgdmFsdWUpO1xuICAgIH1cbiAgfVxuICBwdWJsaWMgZ2V0IG1hdHJpeCgpOiBNYXRyaXg0IHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fb2JqUmVmPy5tYXRyaXg7XG4gIH1cbiAgQElucHV0KClcbiAgcHVibGljIHNldCBjb2xvcih2YWx1ZTogQ29sb3JSZXByZXNlbnRhdGlvbiB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh0aGlzLl9vYmpSZWYpIHtcbiAgICAgIHRoaXMuX29ialJlZi5jb2xvciA9IHZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBnZXQgY29sb3IoKTogKENvbG9yUmVwcmVzZW50YXRpb24gfCB1bmRlZmluZWQpIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fb2JqUmVmPy5jb2xvcjtcbiAgfVxuICBASW5wdXQoKVxuICBwdWJsaWMgc2V0IG1hdHJpeEF1dG9VcGRhdGUodmFsdWU6IGJvb2xlYW4pIHtcbiAgICBpZiAodGhpcy5fb2JqUmVmKSB7XG4gICAgICB0aGlzLl9vYmpSZWYubWF0cml4QXV0b1VwZGF0ZSA9IHZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBnZXQgbWF0cml4QXV0b1VwZGF0ZSgpOiBib29sZWFuIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fb2JqUmVmPy5tYXRyaXhBdXRvVXBkYXRlO1xuICB9XG59XG4iXX0=