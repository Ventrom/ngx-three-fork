/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix */
import { ChangeDetectionStrategy, Component, Input, forwardRef, } from '@angular/core';
import { SpotLight, } from 'three';
import { applyValue } from '../util';
import { ThLight } from './ThLight';
import { ThObject3D } from './ThObject3D';
import * as i0 from "@angular/core";
export class ThSpotLight extends ThLight {
    getType() {
        return SpotLight;
    }
    get isSpotLight() {
        return this._objRef?.isSpotLight;
    }
    get type() {
        return this._objRef?.type;
    }
    set position(value) {
        if (this._objRef) {
            applyValue(this._objRef.position, value);
        }
    }
    get position() {
        return this._objRef?.position;
    }
    set target(value) {
        if (this._objRef) {
            this._objRef.target = value;
        }
    }
    get target() {
        return this._objRef?.target;
    }
    set castShadow(value) {
        if (this._objRef) {
            this._objRef.castShadow = value;
        }
    }
    get castShadow() {
        return this._objRef?.castShadow;
    }
    set intensity(value) {
        if (this._objRef) {
            this._objRef.intensity = value;
        }
    }
    get intensity() {
        return this._objRef?.intensity;
    }
    set distance(value) {
        if (this._objRef) {
            this._objRef.distance = value;
        }
    }
    get distance() {
        return this._objRef?.distance;
    }
    set angle(value) {
        if (this._objRef) {
            this._objRef.angle = value;
        }
    }
    get angle() {
        return this._objRef?.angle;
    }
    set decay(value) {
        if (this._objRef) {
            this._objRef.decay = value;
        }
    }
    get decay() {
        return this._objRef?.decay;
    }
    set shadow(value) {
        if (this._objRef) {
            this._objRef.shadow = value;
        }
    }
    get shadow() {
        return this._objRef?.shadow;
    }
    set power(value) {
        if (this._objRef) {
            this._objRef.power = value;
        }
    }
    get power() {
        return this._objRef?.power;
    }
    set penumbra(value) {
        if (this._objRef) {
            this._objRef.penumbra = value;
        }
    }
    get penumbra() {
        return this._objRef?.penumbra;
    }
    set map(value) {
        if (this._objRef) {
            this._objRef.map = value;
        }
    }
    get map() {
        return this._objRef?.map;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThSpotLight, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.1.2", type: ThSpotLight, selector: "th-spotLight", inputs: { position: "position", target: "target", castShadow: "castShadow", intensity: "intensity", distance: "distance", angle: "angle", decay: "decay", shadow: "shadow", power: "power", penumbra: "penumbra", map: "map" }, providers: [
            { provide: ThObject3D, useExisting: forwardRef(() => ThSpotLight) },
        ], usesInheritance: true, ngImport: i0, template: '<ng-content/>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThSpotLight, decorators: [{
            type: Component,
            args: [{
                    selector: 'th-spotLight',
                    template: '<ng-content/>',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    providers: [
                        { provide: ThObject3D, useExisting: forwardRef(() => ThSpotLight) },
                    ],
                }]
        }], propDecorators: { position: [{
                type: Input
            }], target: [{
                type: Input
            }], castShadow: [{
                type: Input
            }], intensity: [{
                type: Input
            }], distance: [{
                type: Input
            }], angle: [{
                type: Input
            }], decay: [{
                type: Input
            }], shadow: [{
                type: Input
            }], power: [{
                type: Input
            }], penumbra: [{
                type: Input
            }], map: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGhTcG90TGlnaHQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtdGhyZWUvc3JjL2xpYi9nZW5lcmF0ZWQvVGhTcG90TGlnaHQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEseURBQXlEO0FBQ3pELHlDQUF5QztBQUN6QywrRkFBK0Y7QUFDL0YsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixTQUFTLEVBQ1QsS0FBSyxFQUVMLFVBQVUsR0FDWCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBR0wsU0FBUyxHQUlWLE1BQU0sT0FBTyxDQUFDO0FBQ2YsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLFNBQVMsQ0FBQztBQUNyQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sV0FBVyxDQUFDO0FBQ3BDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxjQUFjLENBQUM7O0FBVTFDLE1BQU0sT0FBTyxXQVVYLFNBQVEsT0FBa0M7SUFDbkMsT0FBTztRQUNaLE9BQU8sU0FBUyxDQUFDO0lBQ25CLENBQUM7SUFFRCxJQUFXLFdBQVc7UUFDcEIsT0FBTyxJQUFJLENBQUMsT0FBTyxFQUFFLFdBQVcsQ0FBQztJQUNuQyxDQUFDO0lBQ0QsSUFBVyxJQUFJO1FBQ2IsT0FBTyxJQUFJLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQztJQUM1QixDQUFDO0lBQ0QsSUFDVyxRQUFRLENBQUMsS0FBa0Q7UUFDcEUsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDakIsVUFBVSxDQUFVLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQ3BELENBQUM7SUFDSCxDQUFDO0lBQ0QsSUFBVyxRQUFRO1FBQ2pCLE9BQU8sSUFBSSxDQUFDLE9BQU8sRUFBRSxRQUFRLENBQUM7SUFDaEMsQ0FBQztJQUNELElBQ1csTUFBTSxDQUFDLEtBQWU7UUFDL0IsSUFBSSxJQUFJLENBQUMsT0FB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S0FBSyxDQUFDO1FBQzNCLENBQUM7SUFDSCxDQUFDO0lBRUQsSUFBVyxHQUFHO1FBQ1osT0FBTyxJQUFJLENBQUMsT0FBTyxFQUFFLEdBQUcsQ0FBQztJQUMzQixDQUFDOzhHQWpJVSxXQUFXO2tHQUFYLFdBQVcsdVFBSlg7WUFDVCxFQUFFLE9BQU8sRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxXQUFXLENBQUMsRUFBRTtTQUNwRSxpREFKUyxlQUFlOzsyRkFNZCxXQUFXO2tCQVJ2QixTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxjQUFjO29CQUN4QixRQUFRLEVBQUUsZUFBZTtvQkFDekIsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07b0JBQy9DLFNBQVMsRUFBRTt3QkFDVCxFQUFFLE9BQU8sRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFLFVBQVUsQ0FBQyxHQUFHLEVBQUUsWUFBWSxDQUFDLEVBQUU7cUJBQ3BFO2lCQUNGOzhCQXVCWSxRQUFRO3NCQURsQixLQUFLO2dCQVVLLE1BQU07c0JBRGhCLEtBQUs7Z0JBV0ssVUFBVTtzQkFEcEIsS0FBSztnQkFXSyxTQUFTO3NCQURuQixLQUFLO2dCQVdLLFFBQVE7c0JBRGxCLEtBQUs7Z0JBV0ssS0FBSztzQkFEZixLQUFLO2dCQVdLLEtBQUs7c0JBRGYsS0FBSztnQkFXSyxNQUFNO3NCQURoQixLQUFLO2dCQVdLLEtBQUs7c0JBRGYsS0FBSztnQkFXSyxRQUFRO3NCQURsQixLQUFLO2dCQVdLLEdBQUc7c0JBRGIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIEB0eXBlc2NyaXB0LWVzbGludC9uYW1pbmctY29udmVudGlvbiAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tdW5kZXJzY29yZS1kYW5nbGUgKi9cbi8qIGVzbGludC1kaXNhYmxlIEBhbmd1bGFyLWVzbGludC9jb21wb25lbnQtc2VsZWN0b3IsIEBhbmd1bGFyLWVzbGludC9jb21wb25lbnQtY2xhc3Mtc3VmZml4ICovXG5pbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ29tcG9uZW50LFxuICBJbnB1dCxcbiAgVHlwZSxcbiAgZm9yd2FyZFJlZixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBDb2xvclJlcHJlc2VudGF0aW9uLFxuICBPYmplY3QzRCxcbiAgU3BvdExpZ2h0LFxuICBTcG90TGlnaHRTaGFkb3csXG4gIFRleHR1cmUsXG4gIFZlY3RvcjMsXG59IGZyb20gJ3RocmVlJztcbmltcG9ydCB7IGFwcGx5VmFsdWUgfSBmcm9tICcuLi91dGlsJztcbmltcG9ydCB7IFRoTGlnaHQgfSBmcm9tICcuL1RoTGlnaHQnO1xuaW1wb3J0IHsgVGhPYmplY3QzRCB9IGZyb20gJy4vVGhPYmplY3QzRCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3RoLXNwb3RMaWdodCcsXG4gIHRlbXBsYXRlOiAnPG5nLWNvbnRlbnQvPicsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBwcm92aWRlcnM6IFtcbiAgICB7IHByb3ZpZGU6IFRoT2JqZWN0M0QsIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IFRoU3BvdExpZ2h0KSB9LFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBUaFNwb3RMaWdodDxcbiAgVCBleHRlbmRzIFNwb3RMaWdodCA9IFNwb3RMaWdodCxcbiAgVEFSR1MgPSBbXG4gICAgY29sb3I/OiBDb2xvclJlcHJlc2VudGF0aW9uLFxuICAgIGludGVuc2l0eT86IG51bWJlcixcbiAgICBkaXN0YW5jZT86IG51bWJlcixcbiAgICBhbmdsZT86IG51bWJlcixcbiAgICBwZW51bWJyYT86IG51bWJlcixcbiAgICBkZWNheT86IG51bWJlcixcbiAgXSxcbj4gZXh0ZW5kcyBUaExpZ2h0PFNwb3RMaWdodFNoYWRvdywgVCwgVEFSR1M+IHtcbiAgcHVibGljIGdldFR5cGUoKTogVHlwZTxTcG90TGlnaHQ+IHtcbiAgICByZXR1cm4gU3BvdExpZ2h0O1xuICB9XG5cbiAgcHVibGljIGdldCBpc1Nwb3RMaWdodCgpOiB0cnVlIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fb2JqUmVmPy5pc1Nwb3RMaWdodDtcbiAgfVxuICBwdWJsaWMgZ2V0IHR5cGUoKTogKHN0cmluZyB8ICdTcG90TGlnaHQnKSB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX29ialJlZj8udHlwZTtcbiAgfVxuICBASW5wdXQoKVxuICBwdWJsaWMgc2V0IHBvc2l0aW9uKHZhbHVlOiBWZWN0b3IzIHwgW3g6IG51bWJlciwgeTogbnVtYmVyLCB6OiBudW1iZXJdKSB7XG4gICAgaWYgKHRoaXMuX29ialJlZikge1xuICAgICAgYXBwbHlWYWx1ZTxWZWN0b3IzPih0aGlzLl9vYmpSZWYucG9zaXRpb24sIHZhbHVlKTtcbiAgICB9XG4gIH1cbiAgcHVibGljIGdldCBwb3NpdGlvbigpOiBWZWN0b3IzIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fb2JqUmVmPy5wb3NpdGlvbjtcbiAgfVxuICBASW5wdXQoKVxuICBwdWJsaWMgc2V0IHRhcmdldCh2YWx1ZTogT2JqZWN0M0QpIHtcbiAgICBpZiAodGhpcy5fb2JqUmVmKSB7XG4gICAgICB0aGlzLl9vYmpSZWYudGFyZ2V0ID0gdmFsdWU7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGdldCB0YXJnZXQoKTogT2JqZWN0M0QgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9vYmpSZWY/LnRhcmdldDtcbiAgfVxuICBASW5wdXQoKVxuICBwdWJsaWMgc2V0IGNhc3RTaGFkb3codmFsdWU6IGJvb2xlYW4pIHtcbiAgICBpZiAodGhpcy5fb2JqUmVmKSB7XG4gICAgICB0aGlzLl9vYmpSZWYuY2FzdFNoYWRvdyA9IHZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBnZXQgY2FzdFNoYWRvdygpOiBib29sZWFuIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fb2JqUmVmPy5jYXN0U2hhZG93O1xuICB9XG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzZXQgaW50ZW5zaXR5KHZhbHVlOiBudW1iZXIpIHtcbiAgICBpZiAodGhpcy5fb2JqUmVmKSB7XG4gICAgICB0aGlzLl9vYmpSZWYuaW50ZW5zaXR5ID0gdmFsdWU7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGdldCBpbnRlbnNpdHkoKTogbnVtYmVyIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fb2JqUmVmPy5pbnRlbnNpdHk7XG4gIH1cbiAgQElucHV0KClcbiAgcHVibGljIHNldCBkaXN0YW5jZSh2YWx1ZTogbnVtYmVyKSB7XG4gICAgaWYgKHRoaXMuX29ialJlZikge1xuICAgICAgdGhpcy5fb2JqUmVmLmRpc3RhbmNlID0gdmFsdWU7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGdldCBkaXN0YW5jZSgpOiBudW1iZXIgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9vYmpSZWY/LmRpc3RhbmNlO1xuICB9XG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzZXQgYW5nbGUodmFsdWU6IG51bWJlcikge1xuICAgIGlmICh0aGlzLl9vYmpSZWYpIHtcbiAgICAgIHRoaXMuX29ialJlZi5hbmdsZSA9IHZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBnZXQgYW5nbGUoKTogbnVtYmVyIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fb2JqUmVmPy5hbmdsZTtcbiAgfVxuICBASW5wdXQoKVxuICBwdWJsaWMgc2V0IGRlY2F5KHZhbHVlOiBudW1iZXIpIHtcbiAgICBpZiAodGhpcy5fb2JqUmVmKSB7XG4gICAgICB0aGlzLl9vYmpSZWYuZGVjYXkgPSB2YWx1ZTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgZ2V0IGRlY2F5KCk6IG51bWJlciB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX29ialJlZj8uZGVjYXk7XG4gIH1cbiAgQElucHV0KClcbiAgcHVibGljIHNldCBzaGFkb3codmFsdWU6IFNwb3RMaWdodFNoYWRvdykge1xuICAgIGlmICh0aGlzLl9vYmpSZWYpIHtcbiAgICAgIHRoaXMuX29ialJlZi5zaGFkb3cgPSB2YWx1ZTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgZ2V0IHNoYWRvdygpOiBTcG90TGlnaHRTaGFkb3cgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9vYmpSZWY/LnNoYWRvdztcbiAgfVxuICBASW5wdXQoKVxuICBwdWJsaWMgc2V0IHBvd2VyKHZhbHVlOiBudW1iZXIpIHtcbiAgICBpZiAodGhpcy5fb2JqUmVmKSB7XG4gICAgICB0aGlzLl9vYmpSZWYucG93ZXIgPSB2YWx1ZTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgZ2V0IHBvd2VyKCk6IG51bWJlciB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX29ialJlZj8ucG93ZXI7XG4gIH1cbiAgQElucHV0KClcbiAgcHVibGljIHNldCBwZW51bWJyYSh2YWx1ZTogbnVtYmVyKSB7XG4gICAgaWYgKHRoaXMuX29ialJlZikge1xuICAgICAgdGhpcy5fb2JqUmVmLnBlbnVtYnJhID0gdmFsdWU7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGdldCBwZW51bWJyYSgpOiBudW1iZXIgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9vYmpSZWY/LnBlbnVtYnJhO1xuICB9XG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzZXQgbWFwKHZhbHVlOiBUZXh0dXJlIHwgbnVsbCkge1xuICAgIGlmICh0aGlzLl9vYmpSZWYpIHtcbiAgICAgIHRoaXMuX29ialJlZi5tYXAgPSB2YWx1ZTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgZ2V0IG1hcCgpOiAoVGV4dHVyZSB8IG51bGwpIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fb2JqUmVmPy5tYXA7XG4gIH1cbn1cbiJdfQ==