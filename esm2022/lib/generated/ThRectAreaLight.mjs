/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix */
import { ChangeDetectionStrategy, Component, Input, forwardRef, } from '@angular/core';
import { RectAreaLight } from 'three';
import { ThLight } from './ThLight';
import { ThObject3D } from './ThObject3D';
import * as i0 from "@angular/core";
export class ThRectAreaLight extends ThLight {
    getType() {
        return RectAreaLight;
    }
    get isRectAreaLight() {
        return this._objRef?.isRectAreaLight;
    }
    get type() {
        return this._objRef?.type;
    }
    set width(value) {
        if (this._objRef) {
            this._objRef.width = value;
        }
    }
    get width() {
        return this._objRef?.width;
    }
    set height(value) {
        if (this._objRef) {
            this._objRef.height = value;
        }
    }
    get height() {
        return this._objRef?.height;
    }
    set intensity(value) {
        if (this._objRef) {
            this._objRef.intensity = value;
        }
    }
    get intensity() {
        return this._objRef?.intensity;
    }
    set power(value) {
        if (this._objRef) {
            this._objRef.power = value;
        }
    }
    get power() {
        return this._objRef?.power;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThRectAreaLight, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.1.2", type: ThRectAreaLight, selector: "th-rectAreaLight", inputs: { width: "width", height: "height", intensity: "intensity", power: "power" }, providers: [
            { provide: ThObject3D, useExisting: forwardRef(() => ThRectAreaLight) },
        ], usesInheritance: true, ngImport: i0, template: '<ng-content/>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThRectAreaLight, decorators: [{
            type: Component,
            args: [{
                    selector: 'th-rectAreaLight',
                    template: '<ng-content/>',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    providers: [
                        { provide: ThObject3D, useExisting: forwardRef(() => ThRectAreaLight) },
                    ],
                }]
        }], propDecorators: { width: [{
                type: Input
            }], height: [{
                type: Input
            }], intensity: [{
                type: Input
            }], power: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGhSZWN0QXJlYUxpZ2h0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LXRocmVlL3NyYy9saWIvZ2VuZXJhdGVkL1RoUmVjdEFyZWFMaWdodC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSx5REFBeUQ7QUFDekQseUNBQXlDO0FBQ3pDLCtGQUErRjtBQUMvRixPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxLQUFLLEVBRUwsVUFBVSxHQUNYLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBdUIsYUFBYSxFQUFFLE1BQU0sT0FBTyxDQUFDO0FBQzNELE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFDcEMsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGNBQWMsQ0FBQzs7QUFVMUMsTUFBTSxPQUFPLGVBUVgsU0FBUSxPQUE0QjtJQUM3QixPQUFPO1FBQ1osT0FBTyxhQUFhLENBQUM7SUFDdkIsQ0FBQztJQUVELElBQVcsZUFBZTtRQUN4QixPQUFPLElBQUksQ0FBQyxPQUFPLEVBQUUsZUFBZSxDQUFDO0lBQ3ZDLENBQUM7SUFDRCxJQUFXLElBQUk7UUFDYixPQUFPLElBQUksQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDO0lBQzVCLENBQUM7SUFDRCxJQUNXLEtBQUssQ0FBQyxLQUFhO1FBQzVCLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ2pCLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUM3QixDQUFDO0lBQ0gsQ0FBQztJQUVELElBQVcsS0FBSztRQUNkLE9BQU8sSUFBSSxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUM7SUFDN0IsQ0FBQztJQUNELElBQ1csTUFBTSxDQUFDLEtBQWE7UUFDN0IsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDakIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQzlCLENBQUM7SUFDSCxDQUFDO0lBRUQsSUFBVyxNQUFNO1FBQ2YsT0FBTyxJQUFJLENBQUMsT0FBTyxFQUFFLE1BQU0sQ0FBQztJQUM5QixDQUFDO0lBQ0QsSUFDVyxTQUFTLENBQUMsS0FBYTtRQUNoQyxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUNqQixJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7UUFDakMsQ0FBQztJQUNILENBQUM7SUFFRCxJQUFXLFNBQVM7UUFDbEIsT0FBTyxJQUFJLENBQUMsT0FBTyxFQUFFLFNBQVMsQ0FBQztJQUNqQyxDQUFDO0lBQ0QsSUFDVyxLQUFLLENBQUMsS0FBYTtRQUM1QixJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUNqQixJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDN0IsQ0FBQztJQUNILENBQUM7SUFFRCxJQUFXLEtBQUs7UUFDZCxPQUFPLElBQUksQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDO0lBQzdCLENBQUM7OEdBMURVLGVBQWU7a0dBQWYsZUFBZSxpSUFKZjtZQUNULEVBQUUsT0FBTyxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUUsVUFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDLGVBQWUsQ0FBQyxFQUFFO1NBQ3hFLGlEQUpTLGVBQWU7OzJGQU1kLGVBQWU7a0JBUjNCLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLGtCQUFrQjtvQkFDNUIsUUFBUSxFQUFFLGVBQWU7b0JBQ3pCLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO29CQUMvQyxTQUFTLEVBQUU7d0JBQ1QsRUFBRSxPQUFPLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRSxVQUFVLENBQUMsR0FBRyxFQUFFLGdCQUFnQixDQUFDLEVBQUU7cUJBQ3hFO2lCQUNGOzhCQXFCWSxLQUFLO3NCQURmLEtBQUs7Z0JBV0ssTUFBTTtzQkFEaEIsS0FBSztnQkFXSyxTQUFTO3NCQURuQixLQUFLO2dCQVdLLEtBQUs7c0JBRGYsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIEB0eXBlc2NyaXB0LWVzbGludC9uYW1pbmctY29udmVudGlvbiAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tdW5kZXJzY29yZS1kYW5nbGUgKi9cbi8qIGVzbGludC1kaXNhYmxlIEBhbmd1bGFyLWVzbGludC9jb21wb25lbnQtc2VsZWN0b3IsIEBhbmd1bGFyLWVzbGludC9jb21wb25lbnQtY2xhc3Mtc3VmZml4ICovXG5pbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ29tcG9uZW50LFxuICBJbnB1dCxcbiAgVHlwZSxcbiAgZm9yd2FyZFJlZixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb2xvclJlcHJlc2VudGF0aW9uLCBSZWN0QXJlYUxpZ2h0IH0gZnJvbSAndGhyZWUnO1xuaW1wb3J0IHsgVGhMaWdodCB9IGZyb20gJy4vVGhMaWdodCc7XG5pbXBvcnQgeyBUaE9iamVjdDNEIH0gZnJvbSAnLi9UaE9iamVjdDNEJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndGgtcmVjdEFyZWFMaWdodCcsXG4gIHRlbXBsYXRlOiAnPG5nLWNvbnRlbnQvPicsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBwcm92aWRlcnM6IFtcbiAgICB7IHByb3ZpZGU6IFRoT2JqZWN0M0QsIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IFRoUmVjdEFyZWFMaWdodCkgfSxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgVGhSZWN0QXJlYUxpZ2h0PFxuICBUIGV4dGVuZHMgUmVjdEFyZWFMaWdodCA9IFJlY3RBcmVhTGlnaHQsXG4gIFRBUkdTID0gW1xuICAgIGNvbG9yPzogQ29sb3JSZXByZXNlbnRhdGlvbixcbiAgICBpbnRlbnNpdHk/OiBudW1iZXIsXG4gICAgd2lkdGg/OiBudW1iZXIsXG4gICAgaGVpZ2h0PzogbnVtYmVyLFxuICBdLFxuPiBleHRlbmRzIFRoTGlnaHQ8dW5kZWZpbmVkLCBULCBUQVJHUz4ge1xuICBwdWJsaWMgZ2V0VHlwZSgpOiBUeXBlPFJlY3RBcmVhTGlnaHQ+IHtcbiAgICByZXR1cm4gUmVjdEFyZWFMaWdodDtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaXNSZWN0QXJlYUxpZ2h0KCk6IHRydWUgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9vYmpSZWY/LmlzUmVjdEFyZWFMaWdodDtcbiAgfVxuICBwdWJsaWMgZ2V0IHR5cGUoKTogKHN0cmluZyB8ICdSZWN0QXJlYUxpZ2h0JykgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9vYmpSZWY/LnR5cGU7XG4gIH1cbiAgQElucHV0KClcbiAgcHVibGljIHNldCB3aWR0aCh2YWx1ZTogbnVtYmVyKSB7XG4gICAgaWYgKHRoaXMuX29ialJlZikge1xuICAgICAgdGhpcy5fb2JqUmVmLndpZHRoID0gdmFsdWU7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGdldCB3aWR0aCgpOiBudW1iZXIgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9vYmpSZWY/LndpZHRoO1xuICB9XG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzZXQgaGVpZ2h0KHZhbHVlOiBudW1iZXIpIHtcbiAgICBpZiAodGhpcy5fb2JqUmVmKSB7XG4gICAgICB0aGlzLl9vYmpSZWYuaGVpZ2h0ID0gdmFsdWU7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGdldCBoZWlnaHQoKTogbnVtYmVyIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fb2JqUmVmPy5oZWlnaHQ7XG4gIH1cbiAgQElucHV0KClcbiAgcHVibGljIHNldCBpbnRlbnNpdHkodmFsdWU6IG51bWJlcikge1xuICAgIGlmICh0aGlzLl9vYmpSZWYpIHtcbiAgICAgIHRoaXMuX29ialJlZi5pbnRlbnNpdHkgPSB2YWx1ZTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVuc2l0eSgpOiBudW1iZXIgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9vYmpSZWY/LmludGVuc2l0eTtcbiAgfVxuICBASW5wdXQoKVxuICBwdWJsaWMgc2V0IHBvd2VyKHZhbHVlOiBudW1iZXIpIHtcbiAgICBpZiAodGhpcy5fb2JqUmVmKSB7XG4gICAgICB0aGlzLl9vYmpSZWYucG93ZXIgPSB2YWx1ZTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgZ2V0IHBvd2VyKCk6IG51bWJlciB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX29ialJlZj8ucG93ZXI7XG4gIH1cbn1cbiJdfQ==