/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix */
import { ChangeDetectionStrategy, Component, Input, forwardRef, } from '@angular/core';
import { ShadowMaterial, } from 'three';
import { applyValue } from '../util';
import { ThMaterial } from './ThMaterial';
import * as i0 from "@angular/core";
export class ThShadowMaterial extends ThMaterial {
    getType() {
        return ShadowMaterial;
    }
    get isShadowMaterial() {
        return this._objRef?.isShadowMaterial;
    }
    set type(value) {
        if (this._objRef) {
            this._objRef.type = value;
        }
    }
    get type() {
        return this._objRef?.type;
    }
    set color(value) {
        if (this._objRef) {
            this._objRef.color = applyValue(this._objRef.color, value);
        }
    }
    get color() {
        return this._objRef?.color;
    }
    set transparent(value) {
        if (this._objRef) {
            this._objRef.transparent = value;
        }
    }
    get transparent() {
        return this._objRef?.transparent;
    }
    set fog(value) {
        if (this._objRef) {
            this._objRef.fog = value;
        }
    }
    get fog() {
        return this._objRef?.fog;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThShadowMaterial, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.1.2", type: ThShadowMaterial, selector: "th-shadowMaterial", inputs: { type: "type", color: "color", transparent: "transparent", fog: "fog" }, providers: [
            { provide: ThMaterial, useExisting: forwardRef(() => ThShadowMaterial) },
        ], usesInheritance: true, ngImport: i0, template: '<ng-content/>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThShadowMaterial, decorators: [{
            type: Component,
            args: [{
                    selector: 'th-shadowMaterial',
                    template: '<ng-content/>',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    providers: [
                        { provide: ThMaterial, useExisting: forwardRef(() => ThShadowMaterial) },
                    ],
                }]
        }], propDecorators: { type: [{
                type: Input
            }], color: [{
                type: Input
            }], transparent: [{
                type: Input
            }], fog: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGhTaGFkb3dNYXRlcmlhbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC10aHJlZS9zcmMvbGliL2dlbmVyYXRlZC9UaFNoYWRvd01hdGVyaWFsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHlEQUF5RDtBQUN6RCx5Q0FBeUM7QUFDekMsK0ZBQStGO0FBQy9GLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULEtBQUssRUFFTCxVQUFVLEdBQ1gsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUdMLGNBQWMsR0FFZixNQUFNLE9BQU8sQ0FBQztBQUNmLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxTQUFTLENBQUM7QUFDckMsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGNBQWMsQ0FBQzs7QUFVMUMsTUFBTSxPQUFPLGdCQUdYLFNBQVEsVUFBb0I7SUFDckIsT0FBTztRQUNaLE9BQU8sY0FBYyxDQUFDO0lBQ3hCLENBQUM7SUFFRCxJQUFXLGdCQUFnQjtRQUN6QixPQUFPLElBQUksQ0FBQyxPQUFPLEVBQUUsZ0JBQWdCLENBQUM7SUFDeEMsQ0FBQztJQUNELElBQ1csSUFBSSxDQUFDLEtBQWE7UUFDM0IsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDakIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDO1FBQzVCLENBQUM7SUFDSCxDQUFDO0lBRUQsSUFBVyxJQUFJO1FBQ2IsT0FBTyxJQUFJLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQztJQUM1QixDQUFDO0lBQ0QsSUFDVyxLQUFLLENBQ2QsS0FNSztRQUVMLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ2pCLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxHQUFHLFVBQVUsQ0FBUSxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsQ0FBQztRQUNwRSxDQUFDO0lBQ0gsQ0FBQztJQUNELElBQVcsS0FBSztRQUNkLE9BQU8sSUFBSSxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUM7SUFDN0IsQ0FBQztJQUNELElBQ1csV0FBVyxDQUFDLEtBQWM7UUFDbkMsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDakIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDO1FBQ25DLENBQUM7SUFDSCxDQUFDO0lBRUQsSUFBVyxXQUFXO1FBQ3BCLE9BQU8sSUFBSSxDQUFDLE9BQU8sRUFBRSxXQUFXLENBQUM7SUFDbkMsQ0FBQztJQUNELElBQ1csR0FBRyxDQUFDLEtBQWM7UUFDM0IsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDakIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLEdBQUcsS0FBSyxDQUFDO1FBQzNCLENBQUM7SUFDSCxDQUFDO0lBRUQsSUFBVyxHQUFHO1FBQ1osT0FBTyxJQUFJLENBQUMsT0FBTyxFQUFFLEdBQUcsQ0FBQztJQUMzQixDQUFDOzhHQXpEVSxnQkFBZ0I7a0dBQWhCLGdCQUFnQiw4SEFKaEI7WUFDVCxFQUFFLE9BQU8sRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQyxFQUFFO1NBQ3pFLGlEQUpTLGVBQWU7OzJGQU1kLGdCQUFnQjtrQkFSNUIsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsbUJBQW1CO29CQUM3QixRQUFRLEVBQUUsZUFBZTtvQkFDekIsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07b0JBQy9DLFNBQVMsRUFBRTt3QkFDVCxFQUFFLE9BQU8sRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFLFVBQVUsQ0FBQyxHQUFHLEVBQUUsaUJBQWlCLENBQUMsRUFBRTtxQkFDekU7aUJBQ0Y7OEJBYVksSUFBSTtzQkFEZCxLQUFLO2dCQVdLLEtBQUs7c0JBRGYsS0FBSztnQkFrQkssV0FBVztzQkFEckIsS0FBSztnQkFXSyxHQUFHO3NCQURiLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBAdHlwZXNjcmlwdC1lc2xpbnQvbmFtaW5nLWNvbnZlbnRpb24gKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vLXVuZGVyc2NvcmUtZGFuZ2xlICovXG4vKiBlc2xpbnQtZGlzYWJsZSBAYW5ndWxhci1lc2xpbnQvY29tcG9uZW50LXNlbGVjdG9yLCBAYW5ndWxhci1lc2xpbnQvY29tcG9uZW50LWNsYXNzLXN1ZmZpeCAqL1xuaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENvbXBvbmVudCxcbiAgSW5wdXQsXG4gIFR5cGUsXG4gIGZvcndhcmRSZWYsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgQ29sb3IsXG4gIENvbG9yUmVwcmVzZW50YXRpb24sXG4gIFNoYWRvd01hdGVyaWFsLFxuICBTaGFkb3dNYXRlcmlhbFBhcmFtZXRlcnMsXG59IGZyb20gJ3RocmVlJztcbmltcG9ydCB7IGFwcGx5VmFsdWUgfSBmcm9tICcuLi91dGlsJztcbmltcG9ydCB7IFRoTWF0ZXJpYWwgfSBmcm9tICcuL1RoTWF0ZXJpYWwnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0aC1zaGFkb3dNYXRlcmlhbCcsXG4gIHRlbXBsYXRlOiAnPG5nLWNvbnRlbnQvPicsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBwcm92aWRlcnM6IFtcbiAgICB7IHByb3ZpZGU6IFRoTWF0ZXJpYWwsIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IFRoU2hhZG93TWF0ZXJpYWwpIH0sXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIFRoU2hhZG93TWF0ZXJpYWw8XG4gIFQgZXh0ZW5kcyBTaGFkb3dNYXRlcmlhbCA9IFNoYWRvd01hdGVyaWFsLFxuICBUQVJHUyA9IC8qIHBhcmFtZXRlcnM/ICovIFNoYWRvd01hdGVyaWFsUGFyYW1ldGVycyxcbj4gZXh0ZW5kcyBUaE1hdGVyaWFsPFQsIFRBUkdTPiB7XG4gIHB1YmxpYyBnZXRUeXBlKCk6IFR5cGU8U2hhZG93TWF0ZXJpYWw+IHtcbiAgICByZXR1cm4gU2hhZG93TWF0ZXJpYWw7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGlzU2hhZG93TWF0ZXJpYWwoKTogdHJ1ZSB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX29ialJlZj8uaXNTaGFkb3dNYXRlcmlhbDtcbiAgfVxuICBASW5wdXQoKVxuICBwdWJsaWMgc2V0IHR5cGUodmFsdWU6IHN0cmluZykge1xuICAgIGlmICh0aGlzLl9vYmpSZWYpIHtcbiAgICAgIHRoaXMuX29ialJlZi50eXBlID0gdmFsdWU7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGdldCB0eXBlKCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX29ialJlZj8udHlwZTtcbiAgfVxuICBASW5wdXQoKVxuICBwdWJsaWMgc2V0IGNvbG9yKFxuICAgIHZhbHVlOlxuICAgICAgfCBDb2xvclxuICAgICAgfCBbXG4gICAgICAgICAgLi4uYXJnczpcbiAgICAgICAgICAgIHwgW2NvbG9yOiBDb2xvclJlcHJlc2VudGF0aW9uXVxuICAgICAgICAgICAgfCBbcjogbnVtYmVyLCBnOiBudW1iZXIsIGI6IG51bWJlcl0sXG4gICAgICAgIF0sXG4gICkge1xuICAgIGlmICh0aGlzLl9vYmpSZWYpIHtcbiAgICAgIHRoaXMuX29ialJlZi5jb2xvciA9IGFwcGx5VmFsdWU8Q29sb3I+KHRoaXMuX29ialJlZi5jb2xvciwgdmFsdWUpO1xuICAgIH1cbiAgfVxuICBwdWJsaWMgZ2V0IGNvbG9yKCk6IENvbG9yIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fb2JqUmVmPy5jb2xvcjtcbiAgfVxuICBASW5wdXQoKVxuICBwdWJsaWMgc2V0IHRyYW5zcGFyZW50KHZhbHVlOiBib29sZWFuKSB7XG4gICAgaWYgKHRoaXMuX29ialJlZikge1xuICAgICAgdGhpcy5fb2JqUmVmLnRyYW5zcGFyZW50ID0gdmFsdWU7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGdldCB0cmFuc3BhcmVudCgpOiBib29sZWFuIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fb2JqUmVmPy50cmFuc3BhcmVudDtcbiAgfVxuICBASW5wdXQoKVxuICBwdWJsaWMgc2V0IGZvZyh2YWx1ZTogYm9vbGVhbikge1xuICAgIGlmICh0aGlzLl9vYmpSZWYpIHtcbiAgICAgIHRoaXMuX29ialJlZi5mb2cgPSB2YWx1ZTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgZ2V0IGZvZygpOiBib29sZWFuIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fb2JqUmVmPy5mb2c7XG4gIH1cbn1cbiJdfQ==