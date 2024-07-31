/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix */
import { ChangeDetectionStrategy, Component, Input, forwardRef, } from '@angular/core';
import { StereoCamera } from 'three';
import { ThCamera } from './ThCamera';
import { ThObject3D } from './ThObject3D';
import * as i0 from "@angular/core";
export class ThStereoCamera extends ThCamera {
    getType() {
        return StereoCamera;
    }
    set type(value) {
        if (this._objRef) {
            this._objRef.type = value;
        }
    }
    get type() {
        return this._objRef?.type;
    }
    set aspect(value) {
        if (this._objRef) {
            this._objRef.aspect = value;
        }
    }
    get aspect() {
        return this._objRef?.aspect;
    }
    set eyeSep(value) {
        if (this._objRef) {
            this._objRef.eyeSep = value;
        }
    }
    get eyeSep() {
        return this._objRef?.eyeSep;
    }
    set cameraL(value) {
        if (this._objRef) {
            this._objRef.cameraL = value;
        }
    }
    get cameraL() {
        return this._objRef?.cameraL;
    }
    set cameraR(value) {
        if (this._objRef) {
            this._objRef.cameraR = value;
        }
    }
    get cameraR() {
        return this._objRef?.cameraR;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThStereoCamera, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.1.2", type: ThStereoCamera, selector: "th-stereoCamera", inputs: { type: "type", aspect: "aspect", eyeSep: "eyeSep", cameraL: "cameraL", cameraR: "cameraR" }, providers: [
            { provide: ThObject3D, useExisting: forwardRef(() => ThStereoCamera) },
            { provide: ThCamera, useExisting: forwardRef(() => ThStereoCamera) },
        ], usesInheritance: true, ngImport: i0, template: '<ng-content/>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThStereoCamera, decorators: [{
            type: Component,
            args: [{
                    selector: 'th-stereoCamera',
                    template: '<ng-content/>',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    providers: [
                        { provide: ThObject3D, useExisting: forwardRef(() => ThStereoCamera) },
                        { provide: ThCamera, useExisting: forwardRef(() => ThStereoCamera) },
                    ],
                }]
        }], propDecorators: { type: [{
                type: Input
            }], aspect: [{
                type: Input
            }], eyeSep: [{
                type: Input
            }], cameraL: [{
                type: Input
            }], cameraR: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGhTdGVyZW9DYW1lcmEuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtdGhyZWUvc3JjL2xpYi9nZW5lcmF0ZWQvVGhTdGVyZW9DYW1lcmEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEseURBQXlEO0FBQ3pELHlDQUF5QztBQUN6QywrRkFBK0Y7QUFDL0YsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixTQUFTLEVBQ1QsS0FBSyxFQUVMLFVBQVUsR0FDWCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQXFCLFlBQVksRUFBRSxNQUFNLE9BQU8sQ0FBQztBQUN4RCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sWUFBWSxDQUFDO0FBQ3RDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxjQUFjLENBQUM7O0FBVzFDLE1BQU0sT0FBTyxjQUdYLFNBQVEsUUFBa0I7SUFDbkIsT0FBTztRQUNaLE9BQU8sWUFBWSxDQUFDO0lBQ3RCLENBQUM7SUFFRCxJQUNXLElBQUksQ0FBQyxLQUFxQjtRQUNuQyxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUNqQixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksR0FBRyxLQUFLLENBQUM7UUFDNUIsQ0FBQztJQUNILENBQUM7SUFFRCxJQUFXLElBQUk7UUFDYixPQUFPLElBQUksQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDO0lBQzVCLENBQUM7SUFDRCxJQUNXLE1BQU0sQ0FBQyxLQUFhO1FBQzdCLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ2pCLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUM5QixDQUFDO0lBQ0gsQ0FBQztJQUVELElBQVcsTUFBTTtRQUNmLE9BQU8sSUFBSSxDQUFDLE9BQU8sRUFBRSxNQUFNLENBQUM7SUFDOUIsQ0FBQztJQUNELElBQ1csTUFBTSxDQUFDLEtBQWE7UUFDN0IsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDakIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQzlCLENBQUM7SUFDSCxDQUFDO0lBRUQsSUFBVyxNQUFNO1FBQ2YsT0FBTyxJQUFJLENBQUMsT0FBTyxFQUFFLE1BQU0sQ0FBQztJQUM5QixDQUFDO0lBQ0QsSUFDVyxPQUFPLENBQUMsS0FBd0I7UUFDekMsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDakIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO1FBQy9CLENBQUM7SUFDSCxDQUFDO0lBRUQsSUFBVyxPQUFPO1FBQ2hCLE9BQU8sSUFBSSxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUM7SUFDL0IsQ0FBQztJQUNELElBQ1csT0FBTyxDQUFDLEtBQXdCO1FBQ3pDLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ2pCLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztRQUMvQixDQUFDO0lBQ0gsQ0FBQztJQUVELElBQVcsT0FBTztRQUNoQixPQUFPLElBQUksQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDO0lBQy9CLENBQUM7OEdBekRVLGNBQWM7a0dBQWQsY0FBYyxnSkFMZDtZQUNULEVBQUUsT0FBTyxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUUsVUFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDLGNBQWMsQ0FBQyxFQUFFO1lBQ3RFLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxXQUFXLEVBQUUsVUFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDLGNBQWMsQ0FBQyxFQUFFO1NBQ3JFLGlEQUxTLGVBQWU7OzJGQU9kLGNBQWM7a0JBVDFCLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLGlCQUFpQjtvQkFDM0IsUUFBUSxFQUFFLGVBQWU7b0JBQ3pCLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO29CQUMvQyxTQUFTLEVBQUU7d0JBQ1QsRUFBRSxPQUFPLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRSxVQUFVLENBQUMsR0FBRyxFQUFFLGVBQWUsQ0FBQyxFQUFFO3dCQUN0RSxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsV0FBVyxFQUFFLFVBQVUsQ0FBQyxHQUFHLEVBQUUsZUFBZSxDQUFDLEVBQUU7cUJBQ3JFO2lCQUNGOzhCQVVZLElBQUk7c0JBRGQsS0FBSztnQkFXSyxNQUFNO3NCQURoQixLQUFLO2dCQVdLLE1BQU07c0JBRGhCLEtBQUs7Z0JBV0ssT0FBTztzQkFEakIsS0FBSztnQkFXSyxPQUFPO3NCQURqQixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgQHR5cGVzY3JpcHQtZXNsaW50L25hbWluZy1jb252ZW50aW9uICovXG4vKiBlc2xpbnQtZGlzYWJsZSBuby11bmRlcnNjb3JlLWRhbmdsZSAqL1xuLyogZXNsaW50LWRpc2FibGUgQGFuZ3VsYXItZXNsaW50L2NvbXBvbmVudC1zZWxlY3RvciwgQGFuZ3VsYXItZXNsaW50L2NvbXBvbmVudC1jbGFzcy1zdWZmaXggKi9cbmltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDb21wb25lbnQsXG4gIElucHV0LFxuICBUeXBlLFxuICBmb3J3YXJkUmVmLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFBlcnNwZWN0aXZlQ2FtZXJhLCBTdGVyZW9DYW1lcmEgfSBmcm9tICd0aHJlZSc7XG5pbXBvcnQgeyBUaENhbWVyYSB9IGZyb20gJy4vVGhDYW1lcmEnO1xuaW1wb3J0IHsgVGhPYmplY3QzRCB9IGZyb20gJy4vVGhPYmplY3QzRCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3RoLXN0ZXJlb0NhbWVyYScsXG4gIHRlbXBsYXRlOiAnPG5nLWNvbnRlbnQvPicsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBwcm92aWRlcnM6IFtcbiAgICB7IHByb3ZpZGU6IFRoT2JqZWN0M0QsIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IFRoU3RlcmVvQ2FtZXJhKSB9LFxuICAgIHsgcHJvdmlkZTogVGhDYW1lcmEsIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IFRoU3RlcmVvQ2FtZXJhKSB9LFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBUaFN0ZXJlb0NhbWVyYTxcbiAgVCBleHRlbmRzIFN0ZXJlb0NhbWVyYSA9IFN0ZXJlb0NhbWVyYSxcbiAgVEFSR1MgPSBbXSxcbj4gZXh0ZW5kcyBUaENhbWVyYTxULCBUQVJHUz4ge1xuICBwdWJsaWMgZ2V0VHlwZSgpOiBUeXBlPFN0ZXJlb0NhbWVyYT4ge1xuICAgIHJldHVybiBTdGVyZW9DYW1lcmE7XG4gIH1cblxuICBASW5wdXQoKVxuICBwdWJsaWMgc2V0IHR5cGUodmFsdWU6ICdTdGVyZW9DYW1lcmEnKSB7XG4gICAgaWYgKHRoaXMuX29ialJlZikge1xuICAgICAgdGhpcy5fb2JqUmVmLnR5cGUgPSB2YWx1ZTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgZ2V0IHR5cGUoKTogJ1N0ZXJlb0NhbWVyYScgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9vYmpSZWY/LnR5cGU7XG4gIH1cbiAgQElucHV0KClcbiAgcHVibGljIHNldCBhc3BlY3QodmFsdWU6IG51bWJlcikge1xuICAgIGlmICh0aGlzLl9vYmpSZWYpIHtcbiAgICAgIHRoaXMuX29ialJlZi5hc3BlY3QgPSB2YWx1ZTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgZ2V0IGFzcGVjdCgpOiBudW1iZXIgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9vYmpSZWY/LmFzcGVjdDtcbiAgfVxuICBASW5wdXQoKVxuICBwdWJsaWMgc2V0IGV5ZVNlcCh2YWx1ZTogbnVtYmVyKSB7XG4gICAgaWYgKHRoaXMuX29ialJlZikge1xuICAgICAgdGhpcy5fb2JqUmVmLmV5ZVNlcCA9IHZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBnZXQgZXllU2VwKCk6IG51bWJlciB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX29ialJlZj8uZXllU2VwO1xuICB9XG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzZXQgY2FtZXJhTCh2YWx1ZTogUGVyc3BlY3RpdmVDYW1lcmEpIHtcbiAgICBpZiAodGhpcy5fb2JqUmVmKSB7XG4gICAgICB0aGlzLl9vYmpSZWYuY2FtZXJhTCA9IHZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBnZXQgY2FtZXJhTCgpOiBQZXJzcGVjdGl2ZUNhbWVyYSB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX29ialJlZj8uY2FtZXJhTDtcbiAgfVxuICBASW5wdXQoKVxuICBwdWJsaWMgc2V0IGNhbWVyYVIodmFsdWU6IFBlcnNwZWN0aXZlQ2FtZXJhKSB7XG4gICAgaWYgKHRoaXMuX29ialJlZikge1xuICAgICAgdGhpcy5fb2JqUmVmLmNhbWVyYVIgPSB2YWx1ZTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgZ2V0IGNhbWVyYVIoKTogUGVyc3BlY3RpdmVDYW1lcmEgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9vYmpSZWY/LmNhbWVyYVI7XG4gIH1cbn1cbiJdfQ==