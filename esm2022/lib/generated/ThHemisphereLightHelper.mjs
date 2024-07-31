/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix */
import { ChangeDetectionStrategy, Component, Input, forwardRef, } from '@angular/core';
import { HemisphereLightHelper, } from 'three';
import { applyValue } from '../util';
import { ThObject3D } from './ThObject3D';
import * as i0 from "@angular/core";
export class ThHemisphereLightHelper extends ThObject3D {
    getType() {
        return HemisphereLightHelper;
    }
    get type() {
        return this._objRef?.type;
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
    set matrixAutoUpdate(value) {
        if (this._objRef) {
            this._objRef.matrixAutoUpdate = value;
        }
    }
    get matrixAutoUpdate() {
        return this._objRef?.matrixAutoUpdate;
    }
    set material(value) {
        if (this._objRef) {
            this._objRef.material = value;
        }
    }
    get material() {
        return this._objRef?.material;
    }
    set color(value) {
        if (this._objRef) {
            this._objRef.color = value;
        }
    }
    get color() {
        return this._objRef?.color;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThHemisphereLightHelper, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.1.2", type: ThHemisphereLightHelper, selector: "th-hemisphereLightHelper", inputs: { light: "light", matrix: "matrix", matrixAutoUpdate: "matrixAutoUpdate", material: "material", color: "color" }, providers: [
            {
                provide: ThObject3D,
                useExisting: forwardRef(() => ThHemisphereLightHelper),
            },
        ], usesInheritance: true, ngImport: i0, template: '<ng-content/>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThHemisphereLightHelper, decorators: [{
            type: Component,
            args: [{
                    selector: 'th-hemisphereLightHelper',
                    template: '<ng-content/>',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    providers: [
                        {
                            provide: ThObject3D,
                            useExisting: forwardRef(() => ThHemisphereLightHelper),
                        },
                    ],
                }]
        }], propDecorators: { light: [{
                type: Input
            }], matrix: [{
                type: Input
            }], matrixAutoUpdate: [{
                type: Input
            }], material: [{
                type: Input
            }], color: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGhIZW1pc3BoZXJlTGlnaHRIZWxwZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtdGhyZWUvc3JjL2xpYi9nZW5lcmF0ZWQvVGhIZW1pc3BoZXJlTGlnaHRIZWxwZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEseURBQXlEO0FBQ3pELHlDQUF5QztBQUN6QywrRkFBK0Y7QUFDL0YsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixTQUFTLEVBQ1QsS0FBSyxFQUVMLFVBQVUsR0FDWCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBR0wscUJBQXFCLEdBSXRCLE1BQU0sT0FBTyxDQUFDO0FBQ2YsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLFNBQVMsQ0FBQztBQUNyQyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sY0FBYyxDQUFDOztBQWExQyxNQUFNLE9BQU8sdUJBR1gsU0FBUSxVQUFzQztJQUN2QyxPQUFPO1FBQ1osT0FBTyxxQkFBcUIsQ0FBQztJQUMvQixDQUFDO0lBRUQsSUFBVyxJQUFJO1FBQ2IsT0FBTyxJQUFJLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQztJQUM1QixDQUFDO0lBQ0QsSUFDVyxLQUFLLENBQUMsS0FBc0I7UUFDckMsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDakIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQzdCLENBQUM7SUFDSCxDQUFDO0lBRUQsSUFBVyxLQUFLO1FBQ2QsT0FBTyxJQUFJLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQztJQUM3QixDQUFDO0lBQ0QsSUFDVyxNQUFNLENBQ2YsS0FtQks7UUFFTCxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUNqQixJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxVQUFVLENBQVUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDeEUsQ0FBQztJQUNILENBQUM7SUFDRCxJQUFXLE1BQU07UUFDZixPQUFPLElBQUksQ0FBQyxPQUFPLEVBQUUsTUFBTSxDQUFDO0lBQzlCLENBQUM7SUFDRCxJQUNXLGdCQUFnQixDQUFDLEtBQWM7UUFDeEMsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDakIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsR0FBRyxLQUFLLENBQUM7UUFDeEMsQ0FBQztJQUNILENBQUM7SUFFRCxJQUFXLGdCQUFnQjtRQUN6QixPQUFPLElBQUksQ0FBQyxPQUFPLEVBQUUsZ0JBQWdCLENBQUM7SUFDeEMsQ0FBQztJQUNELElBQ1csUUFBUSxDQUFDLEtBQXdCO1FBQzFDLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ2pCLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztRQUNoQyxDQUFDO0lBQ0gsQ0FBQztJQUVELElBQVcsUUFBUTtRQUNqQixPQUFPLElBQUksQ0FBQyxPQUFPLEVBQUUsUUFBUSxDQUFDO0lBQ2hDLENBQUM7SUFDRCxJQUNXLEtBQUssQ0FBQyxLQUFzQztRQUNyRCxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUNqQixJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDN0IsQ0FBQztJQUNILENBQUM7SUFFRCxJQUFXLEtBQUs7UUFDZCxPQUFPLElBQUksQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDO0lBQzdCLENBQUM7OEdBaEZVLHVCQUF1QjtrR0FBdkIsdUJBQXVCLDZLQVB2QjtZQUNUO2dCQUNFLE9BQU8sRUFBRSxVQUFVO2dCQUNuQixXQUFXLEVBQUUsVUFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDLHVCQUF1QixDQUFDO2FBQ3ZEO1NBQ0YsaURBUFMsZUFBZTs7MkZBU2QsdUJBQXVCO2tCQVhuQyxTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSwwQkFBMEI7b0JBQ3BDLFFBQVEsRUFBRSxlQUFlO29CQUN6QixlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtvQkFDL0MsU0FBUyxFQUFFO3dCQUNUOzRCQUNFLE9BQU8sRUFBRSxVQUFVOzRCQUNuQixXQUFXLEVBQUUsVUFBVSxDQUFDLEdBQUcsRUFBRSx3QkFBd0IsQ0FBQzt5QkFDdkQ7cUJBQ0Y7aUJBQ0Y7OEJBYVksS0FBSztzQkFEZixLQUFLO2dCQVdLLE1BQU07c0JBRGhCLEtBQUs7Z0JBK0JLLGdCQUFnQjtzQkFEMUIsS0FBSztnQkFXSyxRQUFRO3NCQURsQixLQUFLO2dCQVdLLEtBQUs7c0JBRGYsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIEB0eXBlc2NyaXB0LWVzbGludC9uYW1pbmctY29udmVudGlvbiAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tdW5kZXJzY29yZS1kYW5nbGUgKi9cbi8qIGVzbGludC1kaXNhYmxlIEBhbmd1bGFyLWVzbGludC9jb21wb25lbnQtc2VsZWN0b3IsIEBhbmd1bGFyLWVzbGludC9jb21wb25lbnQtY2xhc3Mtc3VmZml4ICovXG5pbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ29tcG9uZW50LFxuICBJbnB1dCxcbiAgVHlwZSxcbiAgZm9yd2FyZFJlZixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBDb2xvclJlcHJlc2VudGF0aW9uLFxuICBIZW1pc3BoZXJlTGlnaHQsXG4gIEhlbWlzcGhlcmVMaWdodEhlbHBlcixcbiAgTWF0cml4NCxcbiAgTWVzaEJhc2ljTWF0ZXJpYWwsXG4gIE9iamVjdDNERXZlbnRNYXAsXG59IGZyb20gJ3RocmVlJztcbmltcG9ydCB7IGFwcGx5VmFsdWUgfSBmcm9tICcuLi91dGlsJztcbmltcG9ydCB7IFRoT2JqZWN0M0QgfSBmcm9tICcuL1RoT2JqZWN0M0QnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0aC1oZW1pc3BoZXJlTGlnaHRIZWxwZXInLFxuICB0ZW1wbGF0ZTogJzxuZy1jb250ZW50Lz4nLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgcHJvdmlkZXJzOiBbXG4gICAge1xuICAgICAgcHJvdmlkZTogVGhPYmplY3QzRCxcbiAgICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IFRoSGVtaXNwaGVyZUxpZ2h0SGVscGVyKSxcbiAgICB9LFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBUaEhlbWlzcGhlcmVMaWdodEhlbHBlcjxcbiAgVCBleHRlbmRzIEhlbWlzcGhlcmVMaWdodEhlbHBlciA9IEhlbWlzcGhlcmVMaWdodEhlbHBlcixcbiAgVEFSR1MgPSBbbGlnaHQ6IEhlbWlzcGhlcmVMaWdodCwgc2l6ZTogbnVtYmVyLCBjb2xvcj86IENvbG9yUmVwcmVzZW50YXRpb25dLFxuPiBleHRlbmRzIFRoT2JqZWN0M0Q8T2JqZWN0M0RFdmVudE1hcCwgVCwgVEFSR1M+IHtcbiAgcHVibGljIGdldFR5cGUoKTogVHlwZTxIZW1pc3BoZXJlTGlnaHRIZWxwZXI+IHtcbiAgICByZXR1cm4gSGVtaXNwaGVyZUxpZ2h0SGVscGVyO1xuICB9XG5cbiAgcHVibGljIGdldCB0eXBlKCk6IChzdHJpbmcgfCAnSGVtaXNwaGVyZUxpZ2h0SGVscGVyJykgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9vYmpSZWY/LnR5cGU7XG4gIH1cbiAgQElucHV0KClcbiAgcHVibGljIHNldCBsaWdodCh2YWx1ZTogSGVtaXNwaGVyZUxpZ2h0KSB7XG4gICAgaWYgKHRoaXMuX29ialJlZikge1xuICAgICAgdGhpcy5fb2JqUmVmLmxpZ2h0ID0gdmFsdWU7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGdldCBsaWdodCgpOiBIZW1pc3BoZXJlTGlnaHQgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9vYmpSZWY/LmxpZ2h0O1xuICB9XG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzZXQgbWF0cml4KFxuICAgIHZhbHVlOlxuICAgICAgfCBNYXRyaXg0XG4gICAgICB8IFtcbiAgICAgICAgICBuMTE6IG51bWJlcixcbiAgICAgICAgICBuMTI6IG51bWJlcixcbiAgICAgICAgICBuMTM6IG51bWJlcixcbiAgICAgICAgICBuMTQ6IG51bWJlcixcbiAgICAgICAgICBuMjE6IG51bWJlcixcbiAgICAgICAgICBuMjI6IG51bWJlcixcbiAgICAgICAgICBuMjM6IG51bWJlcixcbiAgICAgICAgICBuMjQ6IG51bWJlcixcbiAgICAgICAgICBuMzE6IG51bWJlcixcbiAgICAgICAgICBuMzI6IG51bWJlcixcbiAgICAgICAgICBuMzM6IG51bWJlcixcbiAgICAgICAgICBuMzQ6IG51bWJlcixcbiAgICAgICAgICBuNDE6IG51bWJlcixcbiAgICAgICAgICBuNDI6IG51bWJlcixcbiAgICAgICAgICBuNDM6IG51bWJlcixcbiAgICAgICAgICBuNDQ6IG51bWJlcixcbiAgICAgICAgXSxcbiAgKSB7XG4gICAgaWYgKHRoaXMuX29ialJlZikge1xuICAgICAgdGhpcy5fb2JqUmVmLm1hdHJpeCA9IGFwcGx5VmFsdWU8TWF0cml4ND4odGhpcy5fb2JqUmVmLm1hdHJpeCwgdmFsdWUpO1xuICAgIH1cbiAgfVxuICBwdWJsaWMgZ2V0IG1hdHJpeCgpOiBNYXRyaXg0IHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fb2JqUmVmPy5tYXRyaXg7XG4gIH1cbiAgQElucHV0KClcbiAgcHVibGljIHNldCBtYXRyaXhBdXRvVXBkYXRlKHZhbHVlOiBib29sZWFuKSB7XG4gICAgaWYgKHRoaXMuX29ialJlZikge1xuICAgICAgdGhpcy5fb2JqUmVmLm1hdHJpeEF1dG9VcGRhdGUgPSB2YWx1ZTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgZ2V0IG1hdHJpeEF1dG9VcGRhdGUoKTogYm9vbGVhbiB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX29ialJlZj8ubWF0cml4QXV0b1VwZGF0ZTtcbiAgfVxuICBASW5wdXQoKVxuICBwdWJsaWMgc2V0IG1hdGVyaWFsKHZhbHVlOiBNZXNoQmFzaWNNYXRlcmlhbCkge1xuICAgIGlmICh0aGlzLl9vYmpSZWYpIHtcbiAgICAgIHRoaXMuX29ialJlZi5tYXRlcmlhbCA9IHZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBnZXQgbWF0ZXJpYWwoKTogTWVzaEJhc2ljTWF0ZXJpYWwgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9vYmpSZWY/Lm1hdGVyaWFsO1xuICB9XG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzZXQgY29sb3IodmFsdWU6IENvbG9yUmVwcmVzZW50YXRpb24gfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodGhpcy5fb2JqUmVmKSB7XG4gICAgICB0aGlzLl9vYmpSZWYuY29sb3IgPSB2YWx1ZTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgZ2V0IGNvbG9yKCk6IChDb2xvclJlcHJlc2VudGF0aW9uIHwgdW5kZWZpbmVkKSB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX29ialJlZj8uY29sb3I7XG4gIH1cbn1cbiJdfQ==