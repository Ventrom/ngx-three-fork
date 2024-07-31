/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix */
import { ChangeDetectionStrategy, Component, Input, forwardRef, } from '@angular/core';
import { HemisphereLight } from 'three';
import { applyValue } from '../util';
import { ThLight } from './ThLight';
import { ThObject3D } from './ThObject3D';
import * as i0 from "@angular/core";
export class ThHemisphereLight extends ThLight {
    getType() {
        return HemisphereLight;
    }
    get isHemisphereLight() {
        return this._objRef?.isHemisphereLight;
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
    set color(value) {
        if (this._objRef) {
            this._objRef.color = applyValue(this._objRef.color, value);
        }
    }
    get color() {
        return this._objRef?.color;
    }
    set groundColor(value) {
        if (this._objRef) {
            this._objRef.groundColor = applyValue(this._objRef.groundColor, value);
        }
    }
    get groundColor() {
        return this._objRef?.groundColor;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThHemisphereLight, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.1.2", type: ThHemisphereLight, selector: "th-hemisphereLight", inputs: { position: "position", color: "color", groundColor: "groundColor" }, providers: [
            { provide: ThObject3D, useExisting: forwardRef(() => ThHemisphereLight) },
        ], usesInheritance: true, ngImport: i0, template: '<ng-content/>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThHemisphereLight, decorators: [{
            type: Component,
            args: [{
                    selector: 'th-hemisphereLight',
                    template: '<ng-content/>',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    providers: [
                        { provide: ThObject3D, useExisting: forwardRef(() => ThHemisphereLight) },
                    ],
                }]
        }], propDecorators: { position: [{
                type: Input
            }], color: [{
                type: Input
            }], groundColor: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGhIZW1pc3BoZXJlTGlnaHQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtdGhyZWUvc3JjL2xpYi9nZW5lcmF0ZWQvVGhIZW1pc3BoZXJlTGlnaHQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEseURBQXlEO0FBQ3pELHlDQUF5QztBQUN6QywrRkFBK0Y7QUFDL0YsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixTQUFTLEVBQ1QsS0FBSyxFQUVMLFVBQVUsR0FDWCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQThCLGVBQWUsRUFBVyxNQUFNLE9BQU8sQ0FBQztBQUM3RSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sU0FBUyxDQUFDO0FBQ3JDLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFDcEMsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGNBQWMsQ0FBQzs7QUFVMUMsTUFBTSxPQUFPLGlCQU9YLFNBQVEsT0FBNEI7SUFDN0IsT0FBTztRQUNaLE9BQU8sZUFBZSxDQUFDO0lBQ3pCLENBQUM7SUFFRCxJQUFXLGlCQUFpQjtRQUMxQixPQUFPLElBQUksQ0FBQyxPQUFPLEVBQUUsaUJBQWlCLENBQUM7SUFDekMsQ0FBQztJQUNELElBQVcsSUFBSTtRQUNiLE9BQU8sSUFBSSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUM7SUFDNUIsQ0FBQztJQUNELElBQ1csUUFBUSxDQUFDLEtBQWtEO1FBQ3BFLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ2pCLFVBQVUsQ0FBVSxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUNwRCxDQUFDO0lBQ0gsQ0FBQztJQUNELElBQVcsUUFBUTtRQUNqQixPQUFPLElBQUksQ0FBQyxPQUFPLEVBQUUsUUFBUSxDQUFDO0lBQ2hDLENBQUM7SUFDRCxJQUNXLEtBQUssQ0FDZCxLQU1LO1FBRUwsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDakIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEdBQUcsVUFBVSxDQUFRLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQ3BFLENBQUM7SUFDSCxDQUFDO0lBQ0QsSUFBVyxLQUFLO1FBQ2QsT0FBTyxJQUFJLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQztJQUM3QixDQUFDO0lBQ0QsSUFDVyxXQUFXLENBQ3BCLEtBTUs7UUFFTCxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUNqQixJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsR0FBRyxVQUFVLENBQ25DLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUN4QixLQUFLLENBQ04sQ0FBQztRQUNKLENBQUM7SUFDSCxDQUFDO0lBQ0QsSUFBVyxXQUFXO1FBQ3BCLE9BQU8sSUFBSSxDQUFDLE9BQU8sRUFBRSxXQUFXLENBQUM7SUFDbkMsQ0FBQzs4R0EvRFUsaUJBQWlCO2tHQUFqQixpQkFBaUIsMkhBSmpCO1lBQ1QsRUFBRSxPQUFPLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRSxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsaUJBQWlCLENBQUMsRUFBRTtTQUMxRSxpREFKUyxlQUFlOzsyRkFNZCxpQkFBaUI7a0JBUjdCLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLG9CQUFvQjtvQkFDOUIsUUFBUSxFQUFFLGVBQWU7b0JBQ3pCLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO29CQUMvQyxTQUFTLEVBQUU7d0JBQ1QsRUFBRSxPQUFPLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRSxVQUFVLENBQUMsR0FBRyxFQUFFLGtCQUFrQixDQUFDLEVBQUU7cUJBQzFFO2lCQUNGOzhCQW9CWSxRQUFRO3NCQURsQixLQUFLO2dCQVVLLEtBQUs7c0JBRGYsS0FBSztnQkFrQkssV0FBVztzQkFEckIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIEB0eXBlc2NyaXB0LWVzbGludC9uYW1pbmctY29udmVudGlvbiAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tdW5kZXJzY29yZS1kYW5nbGUgKi9cbi8qIGVzbGludC1kaXNhYmxlIEBhbmd1bGFyLWVzbGludC9jb21wb25lbnQtc2VsZWN0b3IsIEBhbmd1bGFyLWVzbGludC9jb21wb25lbnQtY2xhc3Mtc3VmZml4ICovXG5pbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ29tcG9uZW50LFxuICBJbnB1dCxcbiAgVHlwZSxcbiAgZm9yd2FyZFJlZixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb2xvciwgQ29sb3JSZXByZXNlbnRhdGlvbiwgSGVtaXNwaGVyZUxpZ2h0LCBWZWN0b3IzIH0gZnJvbSAndGhyZWUnO1xuaW1wb3J0IHsgYXBwbHlWYWx1ZSB9IGZyb20gJy4uL3V0aWwnO1xuaW1wb3J0IHsgVGhMaWdodCB9IGZyb20gJy4vVGhMaWdodCc7XG5pbXBvcnQgeyBUaE9iamVjdDNEIH0gZnJvbSAnLi9UaE9iamVjdDNEJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndGgtaGVtaXNwaGVyZUxpZ2h0JyxcbiAgdGVtcGxhdGU6ICc8bmctY29udGVudC8+JyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHByb3ZpZGVyczogW1xuICAgIHsgcHJvdmlkZTogVGhPYmplY3QzRCwgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gVGhIZW1pc3BoZXJlTGlnaHQpIH0sXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIFRoSGVtaXNwaGVyZUxpZ2h0PFxuICBUIGV4dGVuZHMgSGVtaXNwaGVyZUxpZ2h0ID0gSGVtaXNwaGVyZUxpZ2h0LFxuICBUQVJHUyA9IFtcbiAgICBza3lDb2xvcj86IENvbG9yUmVwcmVzZW50YXRpb24sXG4gICAgZ3JvdW5kQ29sb3I/OiBDb2xvclJlcHJlc2VudGF0aW9uLFxuICAgIGludGVuc2l0eT86IG51bWJlcixcbiAgXSxcbj4gZXh0ZW5kcyBUaExpZ2h0PHVuZGVmaW5lZCwgVCwgVEFSR1M+IHtcbiAgcHVibGljIGdldFR5cGUoKTogVHlwZTxIZW1pc3BoZXJlTGlnaHQ+IHtcbiAgICByZXR1cm4gSGVtaXNwaGVyZUxpZ2h0O1xuICB9XG5cbiAgcHVibGljIGdldCBpc0hlbWlzcGhlcmVMaWdodCgpOiB0cnVlIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fb2JqUmVmPy5pc0hlbWlzcGhlcmVMaWdodDtcbiAgfVxuICBwdWJsaWMgZ2V0IHR5cGUoKTogKHN0cmluZyB8ICdIZW1pc3BoZXJlTGlnaHQnKSB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX29ialJlZj8udHlwZTtcbiAgfVxuICBASW5wdXQoKVxuICBwdWJsaWMgc2V0IHBvc2l0aW9uKHZhbHVlOiBWZWN0b3IzIHwgW3g6IG51bWJlciwgeTogbnVtYmVyLCB6OiBudW1iZXJdKSB7XG4gICAgaWYgKHRoaXMuX29ialJlZikge1xuICAgICAgYXBwbHlWYWx1ZTxWZWN0b3IzPih0aGlzLl9vYmpSZWYucG9zaXRpb24sIHZhbHVlKTtcbiAgICB9XG4gIH1cbiAgcHVibGljIGdldCBwb3NpdGlvbigpOiBWZWN0b3IzIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fb2JqUmVmPy5wb3NpdGlvbjtcbiAgfVxuICBASW5wdXQoKVxuICBwdWJsaWMgc2V0IGNvbG9yKFxuICAgIHZhbHVlOlxuICAgICAgfCBDb2xvclxuICAgICAgfCBbXG4gICAgICAgICAgLi4uYXJnczpcbiAgICAgICAgICAgIHwgW2NvbG9yOiBDb2xvclJlcHJlc2VudGF0aW9uXVxuICAgICAgICAgICAgfCBbcjogbnVtYmVyLCBnOiBudW1iZXIsIGI6IG51bWJlcl0sXG4gICAgICAgIF0sXG4gICkge1xuICAgIGlmICh0aGlzLl9vYmpSZWYpIHtcbiAgICAgIHRoaXMuX29ialJlZi5jb2xvciA9IGFwcGx5VmFsdWU8Q29sb3I+KHRoaXMuX29ialJlZi5jb2xvciwgdmFsdWUpO1xuICAgIH1cbiAgfVxuICBwdWJsaWMgZ2V0IGNvbG9yKCk6IENvbG9yIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fb2JqUmVmPy5jb2xvcjtcbiAgfVxuICBASW5wdXQoKVxuICBwdWJsaWMgc2V0IGdyb3VuZENvbG9yKFxuICAgIHZhbHVlOlxuICAgICAgfCBDb2xvclxuICAgICAgfCBbXG4gICAgICAgICAgLi4uYXJnczpcbiAgICAgICAgICAgIHwgW2NvbG9yOiBDb2xvclJlcHJlc2VudGF0aW9uXVxuICAgICAgICAgICAgfCBbcjogbnVtYmVyLCBnOiBudW1iZXIsIGI6IG51bWJlcl0sXG4gICAgICAgIF0sXG4gICkge1xuICAgIGlmICh0aGlzLl9vYmpSZWYpIHtcbiAgICAgIHRoaXMuX29ialJlZi5ncm91bmRDb2xvciA9IGFwcGx5VmFsdWU8Q29sb3I+KFxuICAgICAgICB0aGlzLl9vYmpSZWYuZ3JvdW5kQ29sb3IsXG4gICAgICAgIHZhbHVlLFxuICAgICAgKTtcbiAgICB9XG4gIH1cbiAgcHVibGljIGdldCBncm91bmRDb2xvcigpOiBDb2xvciB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX29ialJlZj8uZ3JvdW5kQ29sb3I7XG4gIH1cbn1cbiJdfQ==