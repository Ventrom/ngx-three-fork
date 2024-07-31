/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix */
import { ChangeDetectionStrategy, Component, Input, forwardRef, } from '@angular/core';
import { ArrowHelper, } from 'three';
import { ThObject3D } from './ThObject3D';
import * as i0 from "@angular/core";
export class ThArrowHelper extends ThObject3D {
    getType() {
        return ArrowHelper;
    }
    get type() {
        return this._objRef?.type;
    }
    set line(value) {
        if (this._objRef) {
            this._objRef.line = value;
        }
    }
    get line() {
        return this._objRef?.line;
    }
    set cone(value) {
        if (this._objRef) {
            this._objRef.cone = value;
        }
    }
    get cone() {
        return this._objRef?.cone;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThArrowHelper, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.1.2", type: ThArrowHelper, selector: "th-arrowHelper", inputs: { line: "line", cone: "cone" }, providers: [
            { provide: ThObject3D, useExisting: forwardRef(() => ThArrowHelper) },
        ], usesInheritance: true, ngImport: i0, template: '<ng-content/>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThArrowHelper, decorators: [{
            type: Component,
            args: [{
                    selector: 'th-arrowHelper',
                    template: '<ng-content/>',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    providers: [
                        { provide: ThObject3D, useExisting: forwardRef(() => ThArrowHelper) },
                    ],
                }]
        }], propDecorators: { line: [{
                type: Input
            }], cone: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGhBcnJvd0hlbHBlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC10aHJlZS9zcmMvbGliL2dlbmVyYXRlZC9UaEFycm93SGVscGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHlEQUF5RDtBQUN6RCx5Q0FBeUM7QUFDekMsK0ZBQStGO0FBQy9GLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULEtBQUssRUFFTCxVQUFVLEdBQ1gsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUNMLFdBQVcsR0FNWixNQUFNLE9BQU8sQ0FBQztBQUNmLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxjQUFjLENBQUM7O0FBVTFDLE1BQU0sT0FBTyxhQVVYLFNBQVEsVUFBc0M7SUFDdkMsT0FBTztRQUNaLE9BQU8sV0FBVyxDQUFDO0lBQ3JCLENBQUM7SUFFRCxJQUFXLElBQUk7UUFDYixPQUFPLElBQUksQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDO0lBQzVCLENBQUM7SUFDRCxJQUNXLElBQUksQ0FBQyxLQUFXO1FBQ3pCLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ2pCLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQztRQUM1QixDQUFDO0lBQ0gsQ0FBQztJQUVELElBQVcsSUFBSTtRQUNiLE9BQU8sSUFBSSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUM7SUFDNUIsQ0FBQztJQUNELElBQ1csSUFBSSxDQUFDLEtBQVc7UUFDekIsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDakIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDO1FBQzVCLENBQUM7SUFDSCxDQUFDO0lBRUQsSUFBVyxJQUFJO1FBQ2IsT0FBTyxJQUFJLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQztJQUM1QixDQUFDOzhHQXJDVSxhQUFhO2tHQUFiLGFBQWEsaUZBSmI7WUFDVCxFQUFFLE9BQU8sRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxhQUFhLENBQUMsRUFBRTtTQUN0RSxpREFKUyxlQUFlOzsyRkFNZCxhQUFhO2tCQVJ6QixTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxnQkFBZ0I7b0JBQzFCLFFBQVEsRUFBRSxlQUFlO29CQUN6QixlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtvQkFDL0MsU0FBUyxFQUFFO3dCQUNULEVBQUUsT0FBTyxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUUsVUFBVSxDQUFDLEdBQUcsRUFBRSxjQUFjLENBQUMsRUFBRTtxQkFDdEU7aUJBQ0Y7OEJBb0JZLElBQUk7c0JBRGQsS0FBSztnQkFXSyxJQUFJO3NCQURkLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBAdHlwZXNjcmlwdC1lc2xpbnQvbmFtaW5nLWNvbnZlbnRpb24gKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vLXVuZGVyc2NvcmUtZGFuZ2xlICovXG4vKiBlc2xpbnQtZGlzYWJsZSBAYW5ndWxhci1lc2xpbnQvY29tcG9uZW50LXNlbGVjdG9yLCBAYW5ndWxhci1lc2xpbnQvY29tcG9uZW50LWNsYXNzLXN1ZmZpeCAqL1xuaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENvbXBvbmVudCxcbiAgSW5wdXQsXG4gIFR5cGUsXG4gIGZvcndhcmRSZWYsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgQXJyb3dIZWxwZXIsXG4gIENvbG9yUmVwcmVzZW50YXRpb24sXG4gIExpbmUsXG4gIE1lc2gsXG4gIE9iamVjdDNERXZlbnRNYXAsXG4gIFZlY3RvcjMsXG59IGZyb20gJ3RocmVlJztcbmltcG9ydCB7IFRoT2JqZWN0M0QgfSBmcm9tICcuL1RoT2JqZWN0M0QnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0aC1hcnJvd0hlbHBlcicsXG4gIHRlbXBsYXRlOiAnPG5nLWNvbnRlbnQvPicsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBwcm92aWRlcnM6IFtcbiAgICB7IHByb3ZpZGU6IFRoT2JqZWN0M0QsIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IFRoQXJyb3dIZWxwZXIpIH0sXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIFRoQXJyb3dIZWxwZXI8XG4gIFQgZXh0ZW5kcyBBcnJvd0hlbHBlciA9IEFycm93SGVscGVyLFxuICBUQVJHUyA9IFtcbiAgICBkaXI/OiBWZWN0b3IzLFxuICAgIG9yaWdpbj86IFZlY3RvcjMsXG4gICAgbGVuZ3RoPzogbnVtYmVyLFxuICAgIGNvbG9yPzogQ29sb3JSZXByZXNlbnRhdGlvbixcbiAgICBoZWFkTGVuZ3RoPzogbnVtYmVyLFxuICAgIGhlYWRXaWR0aD86IG51bWJlcixcbiAgXSxcbj4gZXh0ZW5kcyBUaE9iamVjdDNEPE9iamVjdDNERXZlbnRNYXAsIFQsIFRBUkdTPiB7XG4gIHB1YmxpYyBnZXRUeXBlKCk6IFR5cGU8QXJyb3dIZWxwZXI+IHtcbiAgICByZXR1cm4gQXJyb3dIZWxwZXI7XG4gIH1cblxuICBwdWJsaWMgZ2V0IHR5cGUoKTogKHN0cmluZyB8ICdBcnJvd0hlbHBlcicpIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fb2JqUmVmPy50eXBlO1xuICB9XG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzZXQgbGluZSh2YWx1ZTogTGluZSkge1xuICAgIGlmICh0aGlzLl9vYmpSZWYpIHtcbiAgICAgIHRoaXMuX29ialJlZi5saW5lID0gdmFsdWU7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGdldCBsaW5lKCk6IExpbmUgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9vYmpSZWY/LmxpbmU7XG4gIH1cbiAgQElucHV0KClcbiAgcHVibGljIHNldCBjb25lKHZhbHVlOiBNZXNoKSB7XG4gICAgaWYgKHRoaXMuX29ialJlZikge1xuICAgICAgdGhpcy5fb2JqUmVmLmNvbmUgPSB2YWx1ZTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgZ2V0IGNvbmUoKTogTWVzaCB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX29ialJlZj8uY29uZTtcbiAgfVxufVxuIl19