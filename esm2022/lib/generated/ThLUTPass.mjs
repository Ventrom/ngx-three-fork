/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix */
import { ChangeDetectionStrategy, Component, Input, forwardRef, } from '@angular/core';
import { LUTPass, } from 'three/examples/jsm/postprocessing/LUTPass.js';
import { ThPassBase } from '../ThPassBase';
import { ThShaderPass } from './ThShaderPass';
import * as i0 from "@angular/core";
export class ThLUTPass extends ThShaderPass {
    getType() {
        return LUTPass;
    }
    set lut(value) {
        if (this._objRef) {
            this._objRef.lut = value;
        }
    }
    get lut() {
        return this._objRef?.lut;
    }
    set intensity(value) {
        if (this._objRef) {
            this._objRef.intensity = value;
        }
    }
    get intensity() {
        return this._objRef?.intensity;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThLUTPass, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.1.2", type: ThLUTPass, selector: "th-lUTPass", inputs: { lut: "lut", intensity: "intensity" }, providers: [
            { provide: ThPassBase, useExisting: forwardRef(() => ThLUTPass) },
        ], usesInheritance: true, ngImport: i0, template: '<ng-content/>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThLUTPass, decorators: [{
            type: Component,
            args: [{
                    selector: 'th-lUTPass',
                    template: '<ng-content/>',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    providers: [
                        { provide: ThPassBase, useExisting: forwardRef(() => ThLUTPass) },
                    ],
                }]
        }], propDecorators: { lut: [{
                type: Input
            }], intensity: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGhMVVRQYXNzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LXRocmVlL3NyYy9saWIvZ2VuZXJhdGVkL1RoTFVUUGFzcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxpREFBaUQ7QUFDakQseURBQXlEO0FBQ3pELHlDQUF5QztBQUN6QywrRkFBK0Y7QUFDL0YsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixTQUFTLEVBQ1QsS0FBSyxFQUVMLFVBQVUsR0FDWCxNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQ0wsT0FBTyxHQUVSLE1BQU0sOENBQThDLENBQUM7QUFDdEQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7O0FBVTlDLE1BQU0sT0FBTyxTQUdYLFNBQVEsWUFBc0I7SUFDdkIsT0FBTztRQUNaLE9BQU8sT0FBTyxDQUFDO0lBQ2pCLENBQUM7SUFFRCxJQUNXLEdBQUcsQ0FBQyxLQUFrQztRQUMvQyxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUNqQixJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsR0FBRyxLQUFLLENBQUM7UUFDM0IsQ0FBQztJQUNILENBQUM7SUFFRCxJQUFXLEdBQUc7UUFDWixPQUFPLElBQUksQ0FBQyxPQUFPLEVBQUUsR0FBRyxDQUFDO0lBQzNCLENBQUM7SUFDRCxJQUNXLFNBQVMsQ0FBQyxLQUFhO1FBQ2hDLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ2pCLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztRQUNqQyxDQUFDO0lBQ0gsQ0FBQztJQUVELElBQVcsU0FBUztRQUNsQixPQUFPLElBQUksQ0FBQyxPQUFPLEVBQUUsU0FBUyxDQUFDO0lBQ2pDLENBQUM7OEdBM0JVLFNBQVM7a0dBQVQsU0FBUyxxRkFKVDtZQUNULEVBQUUsT0FBTyxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUUsVUFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDLFNBQVMsQ0FBQyxFQUFFO1NBQ2xFLGlEQUpTLGVBQWU7OzJGQU1kLFNBQVM7a0JBUnJCLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLFlBQVk7b0JBQ3RCLFFBQVEsRUFBRSxlQUFlO29CQUN6QixlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtvQkFDL0MsU0FBUyxFQUFFO3dCQUNULEVBQUUsT0FBTyxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUUsVUFBVSxDQUFDLEdBQUcsRUFBRSxVQUFVLENBQUMsRUFBRTtxQkFDbEU7aUJBQ0Y7OEJBVVksR0FBRztzQkFEYixLQUFLO2dCQVdLLFNBQVM7c0JBRG5CLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBAdHlwZXNjcmlwdC1lc2xpbnQvYmFuLXR5cGVzICovXG4vKiBlc2xpbnQtZGlzYWJsZSBAdHlwZXNjcmlwdC1lc2xpbnQvbmFtaW5nLWNvbnZlbnRpb24gKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vLXVuZGVyc2NvcmUtZGFuZ2xlICovXG4vKiBlc2xpbnQtZGlzYWJsZSBAYW5ndWxhci1lc2xpbnQvY29tcG9uZW50LXNlbGVjdG9yLCBAYW5ndWxhci1lc2xpbnQvY29tcG9uZW50LWNsYXNzLXN1ZmZpeCAqL1xuaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENvbXBvbmVudCxcbiAgSW5wdXQsXG4gIFR5cGUsXG4gIGZvcndhcmRSZWYsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRGF0YTNEVGV4dHVyZSwgRGF0YVRleHR1cmUgfSBmcm9tICd0aHJlZSc7XG5pbXBvcnQge1xuICBMVVRQYXNzLFxuICBMVVRQYXNzUGFyYW1ldGVycyxcbn0gZnJvbSAndGhyZWUvZXhhbXBsZXMvanNtL3Bvc3Rwcm9jZXNzaW5nL0xVVFBhc3MuanMnO1xuaW1wb3J0IHsgVGhQYXNzQmFzZSB9IGZyb20gJy4uL1RoUGFzc0Jhc2UnO1xuaW1wb3J0IHsgVGhTaGFkZXJQYXNzIH0gZnJvbSAnLi9UaFNoYWRlclBhc3MnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0aC1sVVRQYXNzJyxcbiAgdGVtcGxhdGU6ICc8bmctY29udGVudC8+JyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHByb3ZpZGVyczogW1xuICAgIHsgcHJvdmlkZTogVGhQYXNzQmFzZSwgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gVGhMVVRQYXNzKSB9LFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBUaExVVFBhc3M8XG4gIFQgZXh0ZW5kcyBMVVRQYXNzID0gTFVUUGFzcyxcbiAgVEFSR1MgPSAvKiBwYXJhbXMgKi8gTFVUUGFzc1BhcmFtZXRlcnMsXG4+IGV4dGVuZHMgVGhTaGFkZXJQYXNzPFQsIFRBUkdTPiB7XG4gIHB1YmxpYyBnZXRUeXBlKCk6IFR5cGU8TFVUUGFzcz4ge1xuICAgIHJldHVybiBMVVRQYXNzO1xuICB9XG5cbiAgQElucHV0KClcbiAgcHVibGljIHNldCBsdXQodmFsdWU6IERhdGFUZXh0dXJlIHwgRGF0YTNEVGV4dHVyZSkge1xuICAgIGlmICh0aGlzLl9vYmpSZWYpIHtcbiAgICAgIHRoaXMuX29ialJlZi5sdXQgPSB2YWx1ZTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgZ2V0IGx1dCgpOiAoRGF0YVRleHR1cmUgfCBEYXRhM0RUZXh0dXJlKSB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX29ialJlZj8ubHV0O1xuICB9XG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzZXQgaW50ZW5zaXR5KHZhbHVlOiBudW1iZXIpIHtcbiAgICBpZiAodGhpcy5fb2JqUmVmKSB7XG4gICAgICB0aGlzLl9vYmpSZWYuaW50ZW5zaXR5ID0gdmFsdWU7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGdldCBpbnRlbnNpdHkoKTogbnVtYmVyIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fb2JqUmVmPy5pbnRlbnNpdHk7XG4gIH1cbn1cbiJdfQ==