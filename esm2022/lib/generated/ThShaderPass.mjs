/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix */
import { ChangeDetectionStrategy, Component, Input, forwardRef, } from '@angular/core';
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass.js';
import { ThPassBase } from '../ThPassBase';
import { ThPass } from './ThPass';
import * as i0 from "@angular/core";
export class ThShaderPass extends ThPass {
    getType() {
        return ShaderPass;
    }
    set textureID(value) {
        if (this._objRef) {
            this._objRef.textureID = value;
        }
    }
    get textureID() {
        return this._objRef?.textureID;
    }
    set uniforms(map) {
        if (this._objRef) {
            Object.assign(this._objRef.uniforms, map);
        }
    }
    get uniforms() {
        return this._objRef?.uniforms;
    }
    set material(value) {
        if (this._objRef) {
            this._objRef.material = value;
        }
    }
    get material() {
        return this._objRef?.material;
    }
    set fsQuad(value) {
        if (this._objRef) {
            this._objRef.fsQuad = value;
        }
    }
    get fsQuad() {
        return this._objRef?.fsQuad;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThShaderPass, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.1.2", type: ThShaderPass, selector: "th-shaderPass", inputs: { textureID: "textureID", uniforms: "uniforms", material: "material", fsQuad: "fsQuad" }, providers: [
            { provide: ThPassBase, useExisting: forwardRef(() => ThShaderPass) },
        ], usesInheritance: true, ngImport: i0, template: '<ng-content/>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThShaderPass, decorators: [{
            type: Component,
            args: [{
                    selector: 'th-shaderPass',
                    template: '<ng-content/>',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    providers: [
                        { provide: ThPassBase, useExisting: forwardRef(() => ThShaderPass) },
                    ],
                }]
        }], propDecorators: { textureID: [{
                type: Input
            }], uniforms: [{
                type: Input
            }], material: [{
                type: Input
            }], fsQuad: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGhTaGFkZXJQYXNzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LXRocmVlL3NyYy9saWIvZ2VuZXJhdGVkL1RoU2hhZGVyUGFzcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxpREFBaUQ7QUFDakQseURBQXlEO0FBQ3pELHlDQUF5QztBQUN6QywrRkFBK0Y7QUFDL0YsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixTQUFTLEVBQ1QsS0FBSyxFQUVMLFVBQVUsR0FDWCxNQUFNLGVBQWUsQ0FBQztBQUd2QixPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0saURBQWlELENBQUM7QUFDN0UsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sVUFBVSxDQUFDOztBQVVsQyxNQUFNLE9BQU8sWUFHWCxTQUFRLE1BQWdCO0lBQ2pCLE9BQU87UUFDWixPQUFPLFVBQVUsQ0FBQztJQUNwQixDQUFDO0lBRUQsSUFDVyxTQUFTLENBQUMsS0FBYTtRQUNoQyxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUNqQixJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7UUFDakMsQ0FBQztJQUNILENBQUM7SUFFRCxJQUFXLFNBQVM7UUFDbEIsT0FBTyxJQUFJLENBQUMsT0FBTyxFQUFFLFNBQVMsQ0FBQztJQUNqQyxDQUFDO0lBQ0QsSUFDVyxRQUFRLENBQUMsR0FBdUM7UUFDekQsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDakIsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUM1QyxDQUFDO0lBQ0gsQ0FBQztJQUVELElBQVcsUUFBUTtRQUNqQixPQUFPLElBQUksQ0FBQyxPQUFPLEVBQUUsUUFFUixDQUFDO0lBQ2hCLENBQUM7SUFDRCxJQUNXLFFBQVEsQ0FBQyxLQUFxQjtRQUN2QyxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUNqQixJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7UUFDaEMsQ0FBQztJQUNILENBQUM7SUFFRCxJQUFXLFFBQVE7UUFDakIsT0FBTyxJQUFJLENBQUMsT0FBTyxFQUFFLFFBQVEsQ0FBQztJQUNoQyxDQUFDO0lBQ0QsSUFDVyxNQUFNLENBQUMsS0FBcUI7UUFDckMsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDakIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQzlCLENBQUM7SUFDSCxDQUFDO0lBRUQsSUFBVyxNQUFNO1FBQ2YsT0FBTyxJQUFJLENBQUMsT0FBTyxFQUFFLE1BQU0sQ0FBQztJQUM5QixDQUFDOzhHQWpEVSxZQUFZO2tHQUFaLFlBQVksMElBSlo7WUFDVCxFQUFFLE9BQU8sRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxZQUFZLENBQUMsRUFBRTtTQUNyRSxpREFKUyxlQUFlOzsyRkFNZCxZQUFZO2tCQVJ4QixTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxlQUFlO29CQUN6QixRQUFRLEVBQUUsZUFBZTtvQkFDekIsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07b0JBQy9DLFNBQVMsRUFBRTt3QkFDVCxFQUFFLE9BQU8sRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFLFVBQVUsQ0FBQyxHQUFHLEVBQUUsYUFBYSxDQUFDLEVBQUU7cUJBQ3JFO2lCQUNGOzhCQVVZLFNBQVM7c0JBRG5CLEtBQUs7Z0JBV0ssUUFBUTtzQkFEbEIsS0FBSztnQkFhSyxRQUFRO3NCQURsQixLQUFLO2dCQVdLLE1BQU07c0JBRGhCLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBAdHlwZXNjcmlwdC1lc2xpbnQvYmFuLXR5cGVzICovXG4vKiBlc2xpbnQtZGlzYWJsZSBAdHlwZXNjcmlwdC1lc2xpbnQvbmFtaW5nLWNvbnZlbnRpb24gKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vLXVuZGVyc2NvcmUtZGFuZ2xlICovXG4vKiBlc2xpbnQtZGlzYWJsZSBAYW5ndWxhci1lc2xpbnQvY29tcG9uZW50LXNlbGVjdG9yLCBAYW5ndWxhci1lc2xpbnQvY29tcG9uZW50LWNsYXNzLXN1ZmZpeCAqL1xuaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENvbXBvbmVudCxcbiAgSW5wdXQsXG4gIFR5cGUsXG4gIGZvcndhcmRSZWYsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU2hhZGVyTWF0ZXJpYWwgfSBmcm9tICd0aHJlZSc7XG5pbXBvcnQgeyBGdWxsU2NyZWVuUXVhZCB9IGZyb20gJ3RocmVlL2V4YW1wbGVzL2pzbS9wb3N0cHJvY2Vzc2luZy9QYXNzLmpzJztcbmltcG9ydCB7IFNoYWRlclBhc3MgfSBmcm9tICd0aHJlZS9leGFtcGxlcy9qc20vcG9zdHByb2Nlc3NpbmcvU2hhZGVyUGFzcy5qcyc7XG5pbXBvcnQgeyBUaFBhc3NCYXNlIH0gZnJvbSAnLi4vVGhQYXNzQmFzZSc7XG5pbXBvcnQgeyBUaFBhc3MgfSBmcm9tICcuL1RoUGFzcyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3RoLXNoYWRlclBhc3MnLFxuICB0ZW1wbGF0ZTogJzxuZy1jb250ZW50Lz4nLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgcHJvdmlkZXJzOiBbXG4gICAgeyBwcm92aWRlOiBUaFBhc3NCYXNlLCB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBUaFNoYWRlclBhc3MpIH0sXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIFRoU2hhZGVyUGFzczxcbiAgVCBleHRlbmRzIFNoYWRlclBhc3MgPSBTaGFkZXJQYXNzLFxuICBUQVJHUyA9IFtzaGFkZXI6IG9iamVjdCwgdGV4dHVyZUlEPzogc3RyaW5nXSxcbj4gZXh0ZW5kcyBUaFBhc3M8VCwgVEFSR1M+IHtcbiAgcHVibGljIGdldFR5cGUoKTogVHlwZTxTaGFkZXJQYXNzPiB7XG4gICAgcmV0dXJuIFNoYWRlclBhc3M7XG4gIH1cblxuICBASW5wdXQoKVxuICBwdWJsaWMgc2V0IHRleHR1cmVJRCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgaWYgKHRoaXMuX29ialJlZikge1xuICAgICAgdGhpcy5fb2JqUmVmLnRleHR1cmVJRCA9IHZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBnZXQgdGV4dHVyZUlEKCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX29ialJlZj8udGV4dHVyZUlEO1xuICB9XG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzZXQgdW5pZm9ybXMobWFwOiB7IFtuYW1lOiBzdHJpbmddOiB7IHZhbHVlOiBhbnkgfSB9KSB7XG4gICAgaWYgKHRoaXMuX29ialJlZikge1xuICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLl9vYmpSZWYudW5pZm9ybXMsIG1hcCk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGdldCB1bmlmb3JtcygpOiB7IFtuYW1lOiBzdHJpbmddOiB7IHZhbHVlOiBhbnkgfSB9IHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fb2JqUmVmPy51bmlmb3JtcyBhc1xuICAgICAgfCB7IFtuYW1lOiBzdHJpbmddOiB7IHZhbHVlOiBhbnkgfSB9XG4gICAgICB8IHVuZGVmaW5lZDtcbiAgfVxuICBASW5wdXQoKVxuICBwdWJsaWMgc2V0IG1hdGVyaWFsKHZhbHVlOiBTaGFkZXJNYXRlcmlhbCkge1xuICAgIGlmICh0aGlzLl9vYmpSZWYpIHtcbiAgICAgIHRoaXMuX29ialJlZi5tYXRlcmlhbCA9IHZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBnZXQgbWF0ZXJpYWwoKTogU2hhZGVyTWF0ZXJpYWwgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9vYmpSZWY/Lm1hdGVyaWFsO1xuICB9XG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzZXQgZnNRdWFkKHZhbHVlOiBGdWxsU2NyZWVuUXVhZCkge1xuICAgIGlmICh0aGlzLl9vYmpSZWYpIHtcbiAgICAgIHRoaXMuX29ialJlZi5mc1F1YWQgPSB2YWx1ZTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgZ2V0IGZzUXVhZCgpOiBGdWxsU2NyZWVuUXVhZCB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX29ialJlZj8uZnNRdWFkO1xuICB9XG59XG4iXX0=