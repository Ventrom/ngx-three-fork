/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix */
import { ChangeDetectionStrategy, Component, Input, forwardRef, } from '@angular/core';
import { CSS2DObject } from 'three/examples/jsm/renderers/CSS2DRenderer.js';
import { applyValue } from '../util';
import { ThObject3D } from './ThObject3D';
import * as i0 from "@angular/core";
export class ThCSS2DObjectGen extends ThObject3D {
    getType() {
        return CSS2DObject;
    }
    set element(value) {
        if (this._objRef) {
            this._objRef.element = value;
        }
    }
    get element() {
        return this._objRef?.element;
    }
    set center(value) {
        if (this._objRef) {
            this._objRef.center = applyValue(this._objRef.center, value);
        }
    }
    get center() {
        return this._objRef?.center;
    }
    set onBeforeRender(value) {
        if (this._objRef) {
            this._objRef.onBeforeRender = value;
        }
    }
    get onBeforeRender() {
        return this._objRef?.onBeforeRender;
    }
    set onAfterRender(value) {
        if (this._objRef) {
            this._objRef.onAfterRender = value;
        }
    }
    get onAfterRender() {
        return this._objRef?.onAfterRender;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThCSS2DObjectGen, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.1.2", type: ThCSS2DObjectGen, selector: "th-cSS2DObjectGen", inputs: { element: "element", center: "center", onBeforeRender: "onBeforeRender", onAfterRender: "onAfterRender" }, providers: [
            { provide: ThObject3D, useExisting: forwardRef(() => ThCSS2DObjectGen) },
        ], usesInheritance: true, ngImport: i0, template: '<ng-content/>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThCSS2DObjectGen, decorators: [{
            type: Component,
            args: [{
                    selector: 'th-cSS2DObjectGen',
                    template: '<ng-content/>',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    providers: [
                        { provide: ThObject3D, useExisting: forwardRef(() => ThCSS2DObjectGen) },
                    ],
                }]
        }], propDecorators: { element: [{
                type: Input
            }], center: [{
                type: Input
            }], onBeforeRender: [{
                type: Input
            }], onAfterRender: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGhDU1MyRE9iamVjdEdlbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC10aHJlZS9zcmMvbGliL2dlbmVyYXRlZC9UaENTUzJET2JqZWN0R2VuLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHlEQUF5RDtBQUN6RCx5Q0FBeUM7QUFDekMsK0ZBQStGO0FBQy9GLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULEtBQUssRUFFTCxVQUFVLEdBQ1gsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLCtDQUErQyxDQUFDO0FBQzVFLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxTQUFTLENBQUM7QUFDckMsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGNBQWMsQ0FBQzs7QUFVMUMsTUFBTSxPQUFPLGdCQUdYLFNBQVEsVUFBc0M7SUFDdkMsT0FBTztRQUNaLE9BQU8sV0FBVyxDQUFDO0lBQ3JCLENBQUM7SUFFRCxJQUNXLE9BQU8sQ0FBQyxLQUFrQjtRQUNuQyxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUNqQixJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7UUFDL0IsQ0FBQztJQUNILENBQUM7SUFFRCxJQUFXLE9BQU87UUFDaEIsT0FBTyxJQUFJLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQztJQUMvQixDQUFDO0lBQ0QsSUFDVyxNQUFNLENBQUMsS0FBdUM7UUFDdkQsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDakIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsVUFBVSxDQUFVLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQ3hFLENBQUM7SUFDSCxDQUFDO0lBQ0QsSUFBVyxNQUFNO1FBQ2YsT0FBTyxJQUFJLENBQUMsT0FBTyxFQUFFLE1BQU0sQ0FBQztJQUM5QixDQUFDO0lBQ0QsSUFDVyxjQUFjLENBQ3ZCLEtBQWdFO1FBRWhFLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ2pCLElBQUksQ0FBQyxPQUFPLENBQUMsY0FBYyxHQUFHLEtBQUssQ0FBQztRQUN0QyxDQUFDO0lBQ0gsQ0FBQztJQUVELElBQVcsY0FBYztRQUd2QixPQUFPLElBQUksQ0FBQyxPQUFPLEVBQUUsY0FBYyxDQUFDO0lBQ3RDLENBQUM7SUFDRCxJQUNXLGFBQWEsQ0FDdEIsS0FBZ0U7UUFFaEUsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDakIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO1FBQ3JDLENBQUM7SUFDSCxDQUFDO0lBRUQsSUFBVyxhQUFhO1FBR3RCLE9BQU8sSUFBSSxDQUFDLE9BQU8sRUFBRSxhQUFhLENBQUM7SUFDckMsQ0FBQzs4R0F0RFUsZ0JBQWdCO2tHQUFoQixnQkFBZ0IsZ0tBSmhCO1lBQ1QsRUFBRSxPQUFPLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRSxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsZ0JBQWdCLENBQUMsRUFBRTtTQUN6RSxpREFKUyxlQUFlOzsyRkFNZCxnQkFBZ0I7a0JBUjVCLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLG1CQUFtQjtvQkFDN0IsUUFBUSxFQUFFLGVBQWU7b0JBQ3pCLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO29CQUMvQyxTQUFTLEVBQUU7d0JBQ1QsRUFBRSxPQUFPLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRSxVQUFVLENBQUMsR0FBRyxFQUFFLGlCQUFpQixDQUFDLEVBQUU7cUJBQ3pFO2lCQUNGOzhCQVVZLE9BQU87c0JBRGpCLEtBQUs7Z0JBV0ssTUFBTTtzQkFEaEIsS0FBSztnQkFVSyxjQUFjO3NCQUR4QixLQUFLO2dCQWVLLGFBQWE7c0JBRHZCLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBAdHlwZXNjcmlwdC1lc2xpbnQvbmFtaW5nLWNvbnZlbnRpb24gKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vLXVuZGVyc2NvcmUtZGFuZ2xlICovXG4vKiBlc2xpbnQtZGlzYWJsZSBAYW5ndWxhci1lc2xpbnQvY29tcG9uZW50LXNlbGVjdG9yLCBAYW5ndWxhci1lc2xpbnQvY29tcG9uZW50LWNsYXNzLXN1ZmZpeCAqL1xuaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENvbXBvbmVudCxcbiAgSW5wdXQsXG4gIFR5cGUsXG4gIGZvcndhcmRSZWYsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ2FtZXJhLCBPYmplY3QzREV2ZW50TWFwLCBTY2VuZSwgVmVjdG9yMiB9IGZyb20gJ3RocmVlJztcbmltcG9ydCB7IENTUzJET2JqZWN0IH0gZnJvbSAndGhyZWUvZXhhbXBsZXMvanNtL3JlbmRlcmVycy9DU1MyRFJlbmRlcmVyLmpzJztcbmltcG9ydCB7IGFwcGx5VmFsdWUgfSBmcm9tICcuLi91dGlsJztcbmltcG9ydCB7IFRoT2JqZWN0M0QgfSBmcm9tICcuL1RoT2JqZWN0M0QnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0aC1jU1MyRE9iamVjdEdlbicsXG4gIHRlbXBsYXRlOiAnPG5nLWNvbnRlbnQvPicsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBwcm92aWRlcnM6IFtcbiAgICB7IHByb3ZpZGU6IFRoT2JqZWN0M0QsIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IFRoQ1NTMkRPYmplY3RHZW4pIH0sXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIFRoQ1NTMkRPYmplY3RHZW48XG4gIFQgZXh0ZW5kcyBDU1MyRE9iamVjdCA9IENTUzJET2JqZWN0LFxuICBUQVJHUyA9IC8qIGVsZW1lbnQgKi8gSFRNTEVsZW1lbnQsXG4+IGV4dGVuZHMgVGhPYmplY3QzRDxPYmplY3QzREV2ZW50TWFwLCBULCBUQVJHUz4ge1xuICBwdWJsaWMgZ2V0VHlwZSgpOiBUeXBlPENTUzJET2JqZWN0PiB7XG4gICAgcmV0dXJuIENTUzJET2JqZWN0O1xuICB9XG5cbiAgQElucHV0KClcbiAgcHVibGljIHNldCBlbGVtZW50KHZhbHVlOiBIVE1MRWxlbWVudCkge1xuICAgIGlmICh0aGlzLl9vYmpSZWYpIHtcbiAgICAgIHRoaXMuX29ialJlZi5lbGVtZW50ID0gdmFsdWU7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGdldCBlbGVtZW50KCk6IEhUTUxFbGVtZW50IHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fb2JqUmVmPy5lbGVtZW50O1xuICB9XG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzZXQgY2VudGVyKHZhbHVlOiBWZWN0b3IyIHwgW3g6IG51bWJlciwgeTogbnVtYmVyXSkge1xuICAgIGlmICh0aGlzLl9vYmpSZWYpIHtcbiAgICAgIHRoaXMuX29ialJlZi5jZW50ZXIgPSBhcHBseVZhbHVlPFZlY3RvcjI+KHRoaXMuX29ialJlZi5jZW50ZXIsIHZhbHVlKTtcbiAgICB9XG4gIH1cbiAgcHVibGljIGdldCBjZW50ZXIoKTogVmVjdG9yMiB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX29ialJlZj8uY2VudGVyO1xuICB9XG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzZXQgb25CZWZvcmVSZW5kZXIoXG4gICAgdmFsdWU6IChyZW5kZXJlcjogdW5rbm93biwgc2NlbmU6IFNjZW5lLCBjYW1lcmE6IENhbWVyYSkgPT4gdm9pZCxcbiAgKSB7XG4gICAgaWYgKHRoaXMuX29ialJlZikge1xuICAgICAgdGhpcy5fb2JqUmVmLm9uQmVmb3JlUmVuZGVyID0gdmFsdWU7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGdldCBvbkJlZm9yZVJlbmRlcigpOlxuICAgIHwgKChyZW5kZXJlcjogdW5rbm93biwgc2NlbmU6IFNjZW5lLCBjYW1lcmE6IENhbWVyYSkgPT4gdm9pZClcbiAgICB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX29ialJlZj8ub25CZWZvcmVSZW5kZXI7XG4gIH1cbiAgQElucHV0KClcbiAgcHVibGljIHNldCBvbkFmdGVyUmVuZGVyKFxuICAgIHZhbHVlOiAocmVuZGVyZXI6IHVua25vd24sIHNjZW5lOiBTY2VuZSwgY2FtZXJhOiBDYW1lcmEpID0+IHZvaWQsXG4gICkge1xuICAgIGlmICh0aGlzLl9vYmpSZWYpIHtcbiAgICAgIHRoaXMuX29ialJlZi5vbkFmdGVyUmVuZGVyID0gdmFsdWU7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGdldCBvbkFmdGVyUmVuZGVyKCk6XG4gICAgfCAoKHJlbmRlcmVyOiB1bmtub3duLCBzY2VuZTogU2NlbmUsIGNhbWVyYTogQ2FtZXJhKSA9PiB2b2lkKVxuICAgIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fb2JqUmVmPy5vbkFmdGVyUmVuZGVyO1xuICB9XG59XG4iXX0=