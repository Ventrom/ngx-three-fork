/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix */
import { ChangeDetectionStrategy, Component, Input, forwardRef, } from '@angular/core';
import { DirectionalLight, } from 'three';
import { applyValue } from '../util';
import { ThLight } from './ThLight';
import { ThObject3D } from './ThObject3D';
import * as i0 from "@angular/core";
export class ThDirectionalLight extends ThLight {
    getType() {
        return DirectionalLight;
    }
    get isDirectionalLight() {
        return this._objRef?.isDirectionalLight;
    }
    get type() {
        return this._objRef?.type;
    }
    set castShadow(value) {
        if (this._objRef) {
            this._objRef.castShadow = value;
        }
    }
    get castShadow() {
        return this._objRef?.castShadow;
    }
    set position(value) {
        if (this._objRef) {
            applyValue(this._objRef.position, value);
        }
    }
    get position() {
        return this._objRef?.position;
    }
    set shadow(value) {
        if (this._objRef) {
            this._objRef.shadow = value;
        }
    }
    get shadow() {
        return this._objRef?.shadow;
    }
    set target(value) {
        if (this._objRef) {
            this._objRef.target = value;
        }
    }
    get target() {
        return this._objRef?.target;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThDirectionalLight, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.1.2", type: ThDirectionalLight, selector: "th-directionalLight", inputs: { castShadow: "castShadow", position: "position", shadow: "shadow", target: "target" }, providers: [
            { provide: ThObject3D, useExisting: forwardRef(() => ThDirectionalLight) },
        ], usesInheritance: true, ngImport: i0, template: '<ng-content/>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThDirectionalLight, decorators: [{
            type: Component,
            args: [{
                    selector: 'th-directionalLight',
                    template: '<ng-content/>',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    providers: [
                        { provide: ThObject3D, useExisting: forwardRef(() => ThDirectionalLight) },
                    ],
                }]
        }], propDecorators: { castShadow: [{
                type: Input
            }], position: [{
                type: Input
            }], shadow: [{
                type: Input
            }], target: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGhEaXJlY3Rpb25hbExpZ2h0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LXRocmVlL3NyYy9saWIvZ2VuZXJhdGVkL1RoRGlyZWN0aW9uYWxMaWdodC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSx5REFBeUQ7QUFDekQseUNBQXlDO0FBQ3pDLCtGQUErRjtBQUMvRixPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxLQUFLLEVBRUwsVUFBVSxHQUNYLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFFTCxnQkFBZ0IsR0FJakIsTUFBTSxPQUFPLENBQUM7QUFDZixPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sU0FBUyxDQUFDO0FBQ3JDLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFDcEMsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGNBQWMsQ0FBQzs7QUFVMUMsTUFBTSxPQUFPLGtCQUdYLFNBQVEsT0FBeUM7SUFDMUMsT0FBTztRQUNaLE9BQU8sZ0JBQWdCLENBQUM7SUFDMUIsQ0FBQztJQUVELElBQVcsa0JBQWtCO1FBQzNCLE9BQU8sSUFBSSxDQUFDLE9BQU8sRUFBRSxrQkFBa0IsQ0FBQztJQUMxQyxDQUFDO0lBQ0QsSUFBVyxJQUFJO1FBQ2IsT0FBTyxJQUFJLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQztJQUM1QixDQUFDO0lBQ0QsSUFDVyxVQUFVLENBQUMsS0FBYztRQUNsQyxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUNqQixJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7UUFDbEMsQ0FBQztJQUNILENBQUM7SUFFRCxJQUFXLFVBQVU7UUFDbkIsT0FBTyxJQUFJLENBQUMsT0FBTyxFQUFFLFVBQVUsQ0FBQztJQUNsQyxDQUFDO0lBQ0QsSUFDVyxRQUFRLENBQUMsS0FBa0Q7UUFDcEUsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDakIsVUFBVSxDQUFVLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQ3BELENBQUM7SUFDSCxDQUFDO0lBQ0QsSUFBVyxRQUFRO1FBQ2pCLE9BQU8sSUFBSSxDQUFDLE9BQU8sRUFBRSxRQUFRLENBQUM7SUFDaEMsQ0FBQztJQUNELElBQ1csTUFBTSxDQUFDLEtBQTZCO1FBQzdDLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ2pCLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUM5QixDQUFDO0lBQ0gsQ0FBQztJQUVELElBQVcsTUFBTTtRQUNmLE9BQU8sSUFBSSxDQUFDLE9BQU8sRUFBRSxNQUFNLENBQUM7SUFDOUIsQ0FBQztJQUNELElBQ1csTUFBTSxDQUFDLEtBQWU7UUFDL0IsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDakIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQzlCLENBQUM7SUFDSCxDQUFDO0lBRUQsSUFBVyxNQUFNO1FBQ2YsT0FBTyxJQUFJLENBQUMsT0FBTyxFQUFFLE1BQU0sQ0FBQztJQUM5QixDQUFDOzhHQXBEVSxrQkFBa0I7a0dBQWxCLGtCQUFrQiw4SUFKbEI7WUFDVCxFQUFFLE9BQU8sRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxrQkFBa0IsQ0FBQyxFQUFFO1NBQzNFLGlEQUpTLGVBQWU7OzJGQU1kLGtCQUFrQjtrQkFSOUIsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUscUJBQXFCO29CQUMvQixRQUFRLEVBQUUsZUFBZTtvQkFDekIsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07b0JBQy9DLFNBQVMsRUFBRTt3QkFDVCxFQUFFLE9BQU8sRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFLFVBQVUsQ0FBQyxHQUFHLEVBQUUsbUJBQW1CLENBQUMsRUFBRTtxQkFDM0U7aUJBQ0Y7OEJBZ0JZLFVBQVU7c0JBRHBCLEtBQUs7Z0JBV0ssUUFBUTtzQkFEbEIsS0FBSztnQkFVSyxNQUFNO3NCQURoQixLQUFLO2dCQVdLLE1BQU07c0JBRGhCLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBAdHlwZXNjcmlwdC1lc2xpbnQvbmFtaW5nLWNvbnZlbnRpb24gKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vLXVuZGVyc2NvcmUtZGFuZ2xlICovXG4vKiBlc2xpbnQtZGlzYWJsZSBAYW5ndWxhci1lc2xpbnQvY29tcG9uZW50LXNlbGVjdG9yLCBAYW5ndWxhci1lc2xpbnQvY29tcG9uZW50LWNsYXNzLXN1ZmZpeCAqL1xuaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENvbXBvbmVudCxcbiAgSW5wdXQsXG4gIFR5cGUsXG4gIGZvcndhcmRSZWYsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgQ29sb3JSZXByZXNlbnRhdGlvbixcbiAgRGlyZWN0aW9uYWxMaWdodCxcbiAgRGlyZWN0aW9uYWxMaWdodFNoYWRvdyxcbiAgT2JqZWN0M0QsXG4gIFZlY3RvcjMsXG59IGZyb20gJ3RocmVlJztcbmltcG9ydCB7IGFwcGx5VmFsdWUgfSBmcm9tICcuLi91dGlsJztcbmltcG9ydCB7IFRoTGlnaHQgfSBmcm9tICcuL1RoTGlnaHQnO1xuaW1wb3J0IHsgVGhPYmplY3QzRCB9IGZyb20gJy4vVGhPYmplY3QzRCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3RoLWRpcmVjdGlvbmFsTGlnaHQnLFxuICB0ZW1wbGF0ZTogJzxuZy1jb250ZW50Lz4nLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgcHJvdmlkZXJzOiBbXG4gICAgeyBwcm92aWRlOiBUaE9iamVjdDNELCB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBUaERpcmVjdGlvbmFsTGlnaHQpIH0sXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIFRoRGlyZWN0aW9uYWxMaWdodDxcbiAgVCBleHRlbmRzIERpcmVjdGlvbmFsTGlnaHQgPSBEaXJlY3Rpb25hbExpZ2h0LFxuICBUQVJHUyA9IFtjb2xvcj86IENvbG9yUmVwcmVzZW50YXRpb24sIGludGVuc2l0eT86IG51bWJlcl0sXG4+IGV4dGVuZHMgVGhMaWdodDxEaXJlY3Rpb25hbExpZ2h0U2hhZG93LCBULCBUQVJHUz4ge1xuICBwdWJsaWMgZ2V0VHlwZSgpOiBUeXBlPERpcmVjdGlvbmFsTGlnaHQ+IHtcbiAgICByZXR1cm4gRGlyZWN0aW9uYWxMaWdodDtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaXNEaXJlY3Rpb25hbExpZ2h0KCk6IHRydWUgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9vYmpSZWY/LmlzRGlyZWN0aW9uYWxMaWdodDtcbiAgfVxuICBwdWJsaWMgZ2V0IHR5cGUoKTogKHN0cmluZyB8ICdEaXJlY3Rpb25hbExpZ2h0JykgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9vYmpSZWY/LnR5cGU7XG4gIH1cbiAgQElucHV0KClcbiAgcHVibGljIHNldCBjYXN0U2hhZG93KHZhbHVlOiBib29sZWFuKSB7XG4gICAgaWYgKHRoaXMuX29ialJlZikge1xuICAgICAgdGhpcy5fb2JqUmVmLmNhc3RTaGFkb3cgPSB2YWx1ZTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgZ2V0IGNhc3RTaGFkb3coKTogYm9vbGVhbiB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX29ialJlZj8uY2FzdFNoYWRvdztcbiAgfVxuICBASW5wdXQoKVxuICBwdWJsaWMgc2V0IHBvc2l0aW9uKHZhbHVlOiBWZWN0b3IzIHwgW3g6IG51bWJlciwgeTogbnVtYmVyLCB6OiBudW1iZXJdKSB7XG4gICAgaWYgKHRoaXMuX29ialJlZikge1xuICAgICAgYXBwbHlWYWx1ZTxWZWN0b3IzPih0aGlzLl9vYmpSZWYucG9zaXRpb24sIHZhbHVlKTtcbiAgICB9XG4gIH1cbiAgcHVibGljIGdldCBwb3NpdGlvbigpOiBWZWN0b3IzIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fb2JqUmVmPy5wb3NpdGlvbjtcbiAgfVxuICBASW5wdXQoKVxuICBwdWJsaWMgc2V0IHNoYWRvdyh2YWx1ZTogRGlyZWN0aW9uYWxMaWdodFNoYWRvdykge1xuICAgIGlmICh0aGlzLl9vYmpSZWYpIHtcbiAgICAgIHRoaXMuX29ialJlZi5zaGFkb3cgPSB2YWx1ZTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgZ2V0IHNoYWRvdygpOiBEaXJlY3Rpb25hbExpZ2h0U2hhZG93IHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fb2JqUmVmPy5zaGFkb3c7XG4gIH1cbiAgQElucHV0KClcbiAgcHVibGljIHNldCB0YXJnZXQodmFsdWU6IE9iamVjdDNEKSB7XG4gICAgaWYgKHRoaXMuX29ialJlZikge1xuICAgICAgdGhpcy5fb2JqUmVmLnRhcmdldCA9IHZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBnZXQgdGFyZ2V0KCk6IE9iamVjdDNEIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fb2JqUmVmPy50YXJnZXQ7XG4gIH1cbn1cbiJdfQ==