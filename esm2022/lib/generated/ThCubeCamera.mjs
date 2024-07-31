/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix */
import { ChangeDetectionStrategy, Component, Input, forwardRef, } from '@angular/core';
import { CubeCamera, } from 'three';
import { ThObject3D } from './ThObject3D';
import * as i0 from "@angular/core";
export class ThCubeCamera extends ThObject3D {
    getType() {
        return CubeCamera;
    }
    get type() {
        return this._objRef?.type;
    }
    set renderTarget(value) {
        if (this._objRef) {
            this._objRef.renderTarget = value;
        }
    }
    get renderTarget() {
        return this._objRef?.renderTarget;
    }
    set coordinateSystem(value) {
        if (this._objRef) {
            this._objRef.coordinateSystem = value;
        }
    }
    get coordinateSystem() {
        return this._objRef?.coordinateSystem;
    }
    set activeMipmapLevel(value) {
        if (this._objRef) {
            this._objRef.activeMipmapLevel = value;
        }
    }
    get activeMipmapLevel() {
        return this._objRef?.activeMipmapLevel;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThCubeCamera, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.1.2", type: ThCubeCamera, selector: "th-cubeCamera", inputs: { renderTarget: "renderTarget", coordinateSystem: "coordinateSystem", activeMipmapLevel: "activeMipmapLevel" }, providers: [
            { provide: ThObject3D, useExisting: forwardRef(() => ThCubeCamera) },
        ], usesInheritance: true, ngImport: i0, template: '<ng-content/>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThCubeCamera, decorators: [{
            type: Component,
            args: [{
                    selector: 'th-cubeCamera',
                    template: '<ng-content/>',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    providers: [
                        { provide: ThObject3D, useExisting: forwardRef(() => ThCubeCamera) },
                    ],
                }]
        }], propDecorators: { renderTarget: [{
                type: Input
            }], coordinateSystem: [{
                type: Input
            }], activeMipmapLevel: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGhDdWJlQ2FtZXJhLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LXRocmVlL3NyYy9saWIvZ2VuZXJhdGVkL1RoQ3ViZUNhbWVyYS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSx5REFBeUQ7QUFDekQseUNBQXlDO0FBQ3pDLCtGQUErRjtBQUMvRixPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxLQUFLLEVBRUwsVUFBVSxHQUNYLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFFTCxVQUFVLEdBR1gsTUFBTSxPQUFPLENBQUM7QUFDZixPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sY0FBYyxDQUFDOztBQVUxQyxNQUFNLE9BQU8sWUFHWCxTQUFRLFVBQXNDO0lBQ3ZDLE9BQU87UUFDWixPQUFPLFVBQVUsQ0FBQztJQUNwQixDQUFDO0lBRUQsSUFBVyxJQUFJO1FBQ2IsT0FBTyxJQUFJLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQztJQUM1QixDQUFDO0lBQ0QsSUFDVyxZQUFZLENBQUMsS0FBNEI7UUFDbEQsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDakIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO1FBQ3BDLENBQUM7SUFDSCxDQUFDO0lBRUQsSUFBVyxZQUFZO1FBQ3JCLE9BQU8sSUFBSSxDQUFDLE9BQU8sRUFBRSxZQUFZLENBQUM7SUFDcEMsQ0FBQztJQUNELElBQ1csZ0JBQWdCLENBQUMsS0FBdUI7UUFDakQsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDakIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsR0FBRyxLQUFLLENBQUM7UUFDeEMsQ0FBQztJQUNILENBQUM7SUFFRCxJQUFXLGdCQUFnQjtRQUN6QixPQUFPLElBQUksQ0FBQyxPQUFPLEVBQUUsZ0JBQWdCLENBQUM7SUFDeEMsQ0FBQztJQUNELElBQ1csaUJBQWlCLENBQUMsS0FBYTtRQUN4QyxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUNqQixJQUFJLENBQUMsT0FBTyxDQUFDLGlCQUFpQixHQUFHLEtBQUssQ0FBQztRQUN6QyxDQUFDO0lBQ0gsQ0FBQztJQUVELElBQVcsaUJBQWlCO1FBQzFCLE9BQU8sSUFBSSxDQUFDLE9BQU8sRUFBRSxpQkFBaUIsQ0FBQztJQUN6QyxDQUFDOzhHQXhDVSxZQUFZO2tHQUFaLFlBQVksZ0tBSlo7WUFDVCxFQUFFLE9BQU8sRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxZQUFZLENBQUMsRUFBRTtTQUNyRSxpREFKUyxlQUFlOzsyRkFNZCxZQUFZO2tCQVJ4QixTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxlQUFlO29CQUN6QixRQUFRLEVBQUUsZUFBZTtvQkFDekIsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07b0JBQy9DLFNBQVMsRUFBRTt3QkFDVCxFQUFFLE9BQU8sRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFLFVBQVUsQ0FBQyxHQUFHLEVBQUUsYUFBYSxDQUFDLEVBQUU7cUJBQ3JFO2lCQUNGOzhCQWFZLFlBQVk7c0JBRHRCLEtBQUs7Z0JBV0ssZ0JBQWdCO3NCQUQxQixLQUFLO2dCQVdLLGlCQUFpQjtzQkFEM0IsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIEB0eXBlc2NyaXB0LWVzbGludC9uYW1pbmctY29udmVudGlvbiAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tdW5kZXJzY29yZS1kYW5nbGUgKi9cbi8qIGVzbGludC1kaXNhYmxlIEBhbmd1bGFyLWVzbGludC9jb21wb25lbnQtc2VsZWN0b3IsIEBhbmd1bGFyLWVzbGludC9jb21wb25lbnQtY2xhc3Mtc3VmZml4ICovXG5pbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ29tcG9uZW50LFxuICBJbnB1dCxcbiAgVHlwZSxcbiAgZm9yd2FyZFJlZixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBDb29yZGluYXRlU3lzdGVtLFxuICBDdWJlQ2FtZXJhLFxuICBPYmplY3QzREV2ZW50TWFwLFxuICBXZWJHTEN1YmVSZW5kZXJUYXJnZXQsXG59IGZyb20gJ3RocmVlJztcbmltcG9ydCB7IFRoT2JqZWN0M0QgfSBmcm9tICcuL1RoT2JqZWN0M0QnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0aC1jdWJlQ2FtZXJhJyxcbiAgdGVtcGxhdGU6ICc8bmctY29udGVudC8+JyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHByb3ZpZGVyczogW1xuICAgIHsgcHJvdmlkZTogVGhPYmplY3QzRCwgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gVGhDdWJlQ2FtZXJhKSB9LFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBUaEN1YmVDYW1lcmE8XG4gIFQgZXh0ZW5kcyBDdWJlQ2FtZXJhID0gQ3ViZUNhbWVyYSxcbiAgVEFSR1MgPSBbbmVhcjogbnVtYmVyLCBmYXI6IG51bWJlciwgcmVuZGVyVGFyZ2V0OiBXZWJHTEN1YmVSZW5kZXJUYXJnZXRdLFxuPiBleHRlbmRzIFRoT2JqZWN0M0Q8T2JqZWN0M0RFdmVudE1hcCwgVCwgVEFSR1M+IHtcbiAgcHVibGljIGdldFR5cGUoKTogVHlwZTxDdWJlQ2FtZXJhPiB7XG4gICAgcmV0dXJuIEN1YmVDYW1lcmE7XG4gIH1cblxuICBwdWJsaWMgZ2V0IHR5cGUoKTogKHN0cmluZyB8ICdDdWJlQ2FtZXJhJykgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9vYmpSZWY/LnR5cGU7XG4gIH1cbiAgQElucHV0KClcbiAgcHVibGljIHNldCByZW5kZXJUYXJnZXQodmFsdWU6IFdlYkdMQ3ViZVJlbmRlclRhcmdldCkge1xuICAgIGlmICh0aGlzLl9vYmpSZWYpIHtcbiAgICAgIHRoaXMuX29ialJlZi5yZW5kZXJUYXJnZXQgPSB2YWx1ZTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgZ2V0IHJlbmRlclRhcmdldCgpOiBXZWJHTEN1YmVSZW5kZXJUYXJnZXQgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9vYmpSZWY/LnJlbmRlclRhcmdldDtcbiAgfVxuICBASW5wdXQoKVxuICBwdWJsaWMgc2V0IGNvb3JkaW5hdGVTeXN0ZW0odmFsdWU6IENvb3JkaW5hdGVTeXN0ZW0pIHtcbiAgICBpZiAodGhpcy5fb2JqUmVmKSB7XG4gICAgICB0aGlzLl9vYmpSZWYuY29vcmRpbmF0ZVN5c3RlbSA9IHZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBnZXQgY29vcmRpbmF0ZVN5c3RlbSgpOiBDb29yZGluYXRlU3lzdGVtIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fb2JqUmVmPy5jb29yZGluYXRlU3lzdGVtO1xuICB9XG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzZXQgYWN0aXZlTWlwbWFwTGV2ZWwodmFsdWU6IG51bWJlcikge1xuICAgIGlmICh0aGlzLl9vYmpSZWYpIHtcbiAgICAgIHRoaXMuX29ialJlZi5hY3RpdmVNaXBtYXBMZXZlbCA9IHZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBnZXQgYWN0aXZlTWlwbWFwTGV2ZWwoKTogbnVtYmVyIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fb2JqUmVmPy5hY3RpdmVNaXBtYXBMZXZlbDtcbiAgfVxufVxuIl19