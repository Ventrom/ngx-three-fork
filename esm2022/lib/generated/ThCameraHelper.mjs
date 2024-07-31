/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix */
import { ChangeDetectionStrategy, Component, Input, forwardRef, } from '@angular/core';
import { CameraHelper, } from 'three';
import { applyValue } from '../util';
import { ThLineSegments } from './ThLineSegments';
import { ThObject3D } from './ThObject3D';
import * as i0 from "@angular/core";
export class ThCameraHelper extends ThLineSegments {
    getType() {
        return CameraHelper;
    }
    get type() {
        return this._objRef?.type;
    }
    set camera(value) {
        if (this._objRef) {
            this._objRef.camera = value;
        }
    }
    get camera() {
        return this._objRef?.camera;
    }
    set pointMap(value) {
        if (this._objRef) {
            this._objRef.pointMap = value;
        }
    }
    get pointMap() {
        return this._objRef?.pointMap;
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThCameraHelper, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.1.2", type: ThCameraHelper, selector: "th-cameraHelper", inputs: { camera: "camera", pointMap: "pointMap", matrix: "matrix", matrixAutoUpdate: "matrixAutoUpdate" }, providers: [
            { provide: ThObject3D, useExisting: forwardRef(() => ThCameraHelper) },
        ], usesInheritance: true, ngImport: i0, template: '<ng-content/>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThCameraHelper, decorators: [{
            type: Component,
            args: [{
                    selector: 'th-cameraHelper',
                    template: '<ng-content/>',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    providers: [
                        { provide: ThObject3D, useExisting: forwardRef(() => ThCameraHelper) },
                    ],
                }]
        }], propDecorators: { camera: [{
                type: Input
            }], pointMap: [{
                type: Input
            }], matrix: [{
                type: Input
            }], matrixAutoUpdate: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGhDYW1lcmFIZWxwZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtdGhyZWUvc3JjL2xpYi9nZW5lcmF0ZWQvVGhDYW1lcmFIZWxwZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEseURBQXlEO0FBQ3pELHlDQUF5QztBQUN6QywrRkFBK0Y7QUFDL0YsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixTQUFTLEVBQ1QsS0FBSyxFQUVMLFVBQVUsR0FDWCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBR0wsWUFBWSxHQUliLE1BQU0sT0FBTyxDQUFDO0FBQ2YsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLFNBQVMsQ0FBQztBQUNyQyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDbEQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGNBQWMsQ0FBQzs7QUFVMUMsTUFBTSxPQUFPLGNBR1gsU0FBUSxjQU1UO0lBQ1EsT0FBTztRQUNaLE9BQU8sWUFBWSxDQUFDO0lBQ3RCLENBQUM7SUFFRCxJQUFXLElBQUk7UUFDYixPQUFPLElBQUksQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDO0lBQzVCLENBQUM7SUFDRCxJQUNXLE1BQU0sQ0FBQyxLQUFhO1FBQzdCLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ2pCLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUM5QixDQUFDO0lBQ0gsQ0FBQztJQUVELElBQVcsTUFBTTtRQUNmLE9BQU8sSUFBSSxDQUFDLE9BQU8sRUFBRSxNQUFNLENBQUM7SUFDOUIsQ0FBQztJQUNELElBQ1csUUFBUSxDQUFDLEtBQWlDO1FBQ25ELElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ2pCLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztRQUNoQyxDQUFDO0lBQ0gsQ0FBQztJQUVELElBQVcsUUFBUTtRQUNqQixPQUFPLElBQUksQ0FBQyxPQUFPLEVBQUUsUUFBUSxDQUFDO0lBQ2hDLENBQUM7SUFDRCxJQUNXLE1BQU0sQ0FDZixLQW1CSztRQUVMLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ2pCLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFHLFVBQVUsQ0FBVSxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxLQUFLLENBQUMsQ0FBQztRQUN4RSxDQUFDO0lBQ0gsQ0FBQztJQUNELElBQVcsTUFBTTtRQUNmLE9BQU8sSUFBSSxDQUFDLE9BQU8sRUFBRSxNQUFNLENBQUM7SUFDOUIsQ0FBQztJQUNELElBQ1csZ0JBQWdCLENBQUMsS0FBYztRQUN4QyxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUNqQixJQUFJLENBQUMsT0FBTyxDQUFDLGdCQUFnQixHQUFHLEtBQUssQ0FBQztRQUN4QyxDQUFDO0lBQ0gsQ0FBQztJQUVELElBQVcsZ0JBQWdCO1FBQ3pCLE9BQU8sSUFBSSxDQUFDLE9BQU8sRUFBRSxnQkFBZ0IsQ0FBQztJQUN4QyxDQUFDOzhHQTVFVSxjQUFjO2tHQUFkLGNBQWMsc0pBSmQ7WUFDVCxFQUFFLE9BQU8sRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxjQUFjLENBQUMsRUFBRTtTQUN2RSxpREFKUyxlQUFlOzsyRkFNZCxjQUFjO2tCQVIxQixTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxpQkFBaUI7b0JBQzNCLFFBQVEsRUFBRSxlQUFlO29CQUN6QixlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtvQkFDL0MsU0FBUyxFQUFFO3dCQUNULEVBQUUsT0FBTyxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUUsVUFBVSxDQUFDLEdBQUcsRUFBRSxlQUFlLENBQUMsRUFBRTtxQkFDdkU7aUJBQ0Y7OEJBbUJZLE1BQU07c0JBRGhCLEtBQUs7Z0JBV0ssUUFBUTtzQkFEbEIsS0FBSztnQkFXSyxNQUFNO3NCQURoQixLQUFLO2dCQStCSyxnQkFBZ0I7c0JBRDFCLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBAdHlwZXNjcmlwdC1lc2xpbnQvbmFtaW5nLWNvbnZlbnRpb24gKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vLXVuZGVyc2NvcmUtZGFuZ2xlICovXG4vKiBlc2xpbnQtZGlzYWJsZSBAYW5ndWxhci1lc2xpbnQvY29tcG9uZW50LXNlbGVjdG9yLCBAYW5ndWxhci1lc2xpbnQvY29tcG9uZW50LWNsYXNzLXN1ZmZpeCAqL1xuaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENvbXBvbmVudCxcbiAgSW5wdXQsXG4gIFR5cGUsXG4gIGZvcndhcmRSZWYsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgQnVmZmVyR2VvbWV0cnksXG4gIENhbWVyYSxcbiAgQ2FtZXJhSGVscGVyLFxuICBNYXRlcmlhbCxcbiAgTWF0cml4NCxcbiAgT2JqZWN0M0RFdmVudE1hcCxcbn0gZnJvbSAndGhyZWUnO1xuaW1wb3J0IHsgYXBwbHlWYWx1ZSB9IGZyb20gJy4uL3V0aWwnO1xuaW1wb3J0IHsgVGhMaW5lU2VnbWVudHMgfSBmcm9tICcuL1RoTGluZVNlZ21lbnRzJztcbmltcG9ydCB7IFRoT2JqZWN0M0QgfSBmcm9tICcuL1RoT2JqZWN0M0QnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0aC1jYW1lcmFIZWxwZXInLFxuICB0ZW1wbGF0ZTogJzxuZy1jb250ZW50Lz4nLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgcHJvdmlkZXJzOiBbXG4gICAgeyBwcm92aWRlOiBUaE9iamVjdDNELCB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBUaENhbWVyYUhlbHBlcikgfSxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgVGhDYW1lcmFIZWxwZXI8XG4gIFQgZXh0ZW5kcyBDYW1lcmFIZWxwZXIgPSBDYW1lcmFIZWxwZXIsXG4gIFRBUkdTID0gLyogY2FtZXJhICovIENhbWVyYSxcbj4gZXh0ZW5kcyBUaExpbmVTZWdtZW50czxcbiAgQnVmZmVyR2VvbWV0cnksXG4gIE1hdGVyaWFsIHwgTWF0ZXJpYWxbXSxcbiAgT2JqZWN0M0RFdmVudE1hcCxcbiAgVCxcbiAgVEFSR1Ncbj4ge1xuICBwdWJsaWMgZ2V0VHlwZSgpOiBUeXBlPENhbWVyYUhlbHBlcj4ge1xuICAgIHJldHVybiBDYW1lcmFIZWxwZXI7XG4gIH1cblxuICBwdWJsaWMgZ2V0IHR5cGUoKTogKHN0cmluZyB8ICdDYW1lcmFIZWxwZXInKSB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX29ialJlZj8udHlwZTtcbiAgfVxuICBASW5wdXQoKVxuICBwdWJsaWMgc2V0IGNhbWVyYSh2YWx1ZTogQ2FtZXJhKSB7XG4gICAgaWYgKHRoaXMuX29ialJlZikge1xuICAgICAgdGhpcy5fb2JqUmVmLmNhbWVyYSA9IHZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBnZXQgY2FtZXJhKCk6IENhbWVyYSB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX29ialJlZj8uY2FtZXJhO1xuICB9XG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzZXQgcG9pbnRNYXAodmFsdWU6IHsgW2lkOiBzdHJpbmddOiBudW1iZXJbXSB9KSB7XG4gICAgaWYgKHRoaXMuX29ialJlZikge1xuICAgICAgdGhpcy5fb2JqUmVmLnBvaW50TWFwID0gdmFsdWU7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGdldCBwb2ludE1hcCgpOiB7IFtpZDogc3RyaW5nXTogbnVtYmVyW10gfSB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX29ialJlZj8ucG9pbnRNYXA7XG4gIH1cbiAgQElucHV0KClcbiAgcHVibGljIHNldCBtYXRyaXgoXG4gICAgdmFsdWU6XG4gICAgICB8IE1hdHJpeDRcbiAgICAgIHwgW1xuICAgICAgICAgIG4xMTogbnVtYmVyLFxuICAgICAgICAgIG4xMjogbnVtYmVyLFxuICAgICAgICAgIG4xMzogbnVtYmVyLFxuICAgICAgICAgIG4xNDogbnVtYmVyLFxuICAgICAgICAgIG4yMTogbnVtYmVyLFxuICAgICAgICAgIG4yMjogbnVtYmVyLFxuICAgICAgICAgIG4yMzogbnVtYmVyLFxuICAgICAgICAgIG4yNDogbnVtYmVyLFxuICAgICAgICAgIG4zMTogbnVtYmVyLFxuICAgICAgICAgIG4zMjogbnVtYmVyLFxuICAgICAgICAgIG4zMzogbnVtYmVyLFxuICAgICAgICAgIG4zNDogbnVtYmVyLFxuICAgICAgICAgIG40MTogbnVtYmVyLFxuICAgICAgICAgIG40MjogbnVtYmVyLFxuICAgICAgICAgIG40MzogbnVtYmVyLFxuICAgICAgICAgIG40NDogbnVtYmVyLFxuICAgICAgICBdLFxuICApIHtcbiAgICBpZiAodGhpcy5fb2JqUmVmKSB7XG4gICAgICB0aGlzLl9vYmpSZWYubWF0cml4ID0gYXBwbHlWYWx1ZTxNYXRyaXg0Pih0aGlzLl9vYmpSZWYubWF0cml4LCB2YWx1ZSk7XG4gICAgfVxuICB9XG4gIHB1YmxpYyBnZXQgbWF0cml4KCk6IE1hdHJpeDQgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9vYmpSZWY/Lm1hdHJpeDtcbiAgfVxuICBASW5wdXQoKVxuICBwdWJsaWMgc2V0IG1hdHJpeEF1dG9VcGRhdGUodmFsdWU6IGJvb2xlYW4pIHtcbiAgICBpZiAodGhpcy5fb2JqUmVmKSB7XG4gICAgICB0aGlzLl9vYmpSZWYubWF0cml4QXV0b1VwZGF0ZSA9IHZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBnZXQgbWF0cml4QXV0b1VwZGF0ZSgpOiBib29sZWFuIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fb2JqUmVmPy5tYXRyaXhBdXRvVXBkYXRlO1xuICB9XG59XG4iXX0=