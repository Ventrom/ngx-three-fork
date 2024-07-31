/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix */
import { ChangeDetectionStrategy, Component, Input, forwardRef, } from '@angular/core';
import { ArrayCamera } from 'three';
import { ThCamera } from './ThCamera';
import { ThObject3D } from './ThObject3D';
import { ThPerspectiveCamera } from './ThPerspectiveCamera';
import * as i0 from "@angular/core";
export class ThArrayCamera extends ThPerspectiveCamera {
    getType() {
        return ArrayCamera;
    }
    get isArrayCamera() {
        return this._objRef?.isArrayCamera;
    }
    set cameras(value) {
        if (this._objRef) {
            this._objRef.cameras = value;
        }
    }
    get cameras() {
        return this._objRef?.cameras;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThArrayCamera, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.1.2", type: ThArrayCamera, selector: "th-arrayCamera", inputs: { cameras: "cameras" }, providers: [
            { provide: ThObject3D, useExisting: forwardRef(() => ThArrayCamera) },
            { provide: ThCamera, useExisting: forwardRef(() => ThArrayCamera) },
        ], usesInheritance: true, ngImport: i0, template: '<ng-content/>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThArrayCamera, decorators: [{
            type: Component,
            args: [{
                    selector: 'th-arrayCamera',
                    template: '<ng-content/>',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    providers: [
                        { provide: ThObject3D, useExisting: forwardRef(() => ThArrayCamera) },
                        { provide: ThCamera, useExisting: forwardRef(() => ThArrayCamera) },
                    ],
                }]
        }], propDecorators: { cameras: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGhBcnJheUNhbWVyYS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC10aHJlZS9zcmMvbGliL2dlbmVyYXRlZC9UaEFycmF5Q2FtZXJhLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHlEQUF5RDtBQUN6RCx5Q0FBeUM7QUFDekMsK0ZBQStGO0FBQy9GLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULEtBQUssRUFFTCxVQUFVLEdBQ1gsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFdBQVcsRUFBcUIsTUFBTSxPQUFPLENBQUM7QUFDdkQsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLFlBQVksQ0FBQztBQUN0QyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sY0FBYyxDQUFDO0FBQzFDLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDOztBQVc1RCxNQUFNLE9BQU8sYUFHWCxTQUFRLG1CQUE2QjtJQUM5QixPQUFPO1FBQ1osT0FBTyxXQUFXLENBQUM7SUFDckIsQ0FBQztJQUVELElBQVcsYUFBYTtRQUN0QixPQUFPLElBQUksQ0FBQyxPQUFPLEVBQUUsYUFBYSxDQUFDO0lBQ3JDLENBQUM7SUFDRCxJQUNXLE9BQU8sQ0FBQyxLQUEwQjtRQUMzQyxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUNqQixJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7UUFDL0IsQ0FBQztJQUNILENBQUM7SUFFRCxJQUFXLE9BQU87UUFDaEIsT0FBTyxJQUFJLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQztJQUMvQixDQUFDOzhHQXBCVSxhQUFhO2tHQUFiLGFBQWEseUVBTGI7WUFDVCxFQUFFLE9BQU8sRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxhQUFhLENBQUMsRUFBRTtZQUNyRSxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsV0FBVyxFQUFFLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxhQUFhLENBQUMsRUFBRTtTQUNwRSxpREFMUyxlQUFlOzsyRkFPZCxhQUFhO2tCQVR6QixTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxnQkFBZ0I7b0JBQzFCLFFBQVEsRUFBRSxlQUFlO29CQUN6QixlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtvQkFDL0MsU0FBUyxFQUFFO3dCQUNULEVBQUUsT0FBTyxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUUsVUFBVSxDQUFDLEdBQUcsRUFBRSxjQUFjLENBQUMsRUFBRTt3QkFDckUsRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLFdBQVcsRUFBRSxVQUFVLENBQUMsR0FBRyxFQUFFLGNBQWMsQ0FBQyxFQUFFO3FCQUNwRTtpQkFDRjs4QkFhWSxPQUFPO3NCQURqQixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgQHR5cGVzY3JpcHQtZXNsaW50L25hbWluZy1jb252ZW50aW9uICovXG4vKiBlc2xpbnQtZGlzYWJsZSBuby11bmRlcnNjb3JlLWRhbmdsZSAqL1xuLyogZXNsaW50LWRpc2FibGUgQGFuZ3VsYXItZXNsaW50L2NvbXBvbmVudC1zZWxlY3RvciwgQGFuZ3VsYXItZXNsaW50L2NvbXBvbmVudC1jbGFzcy1zdWZmaXggKi9cbmltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDb21wb25lbnQsXG4gIElucHV0LFxuICBUeXBlLFxuICBmb3J3YXJkUmVmLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFycmF5Q2FtZXJhLCBQZXJzcGVjdGl2ZUNhbWVyYSB9IGZyb20gJ3RocmVlJztcbmltcG9ydCB7IFRoQ2FtZXJhIH0gZnJvbSAnLi9UaENhbWVyYSc7XG5pbXBvcnQgeyBUaE9iamVjdDNEIH0gZnJvbSAnLi9UaE9iamVjdDNEJztcbmltcG9ydCB7IFRoUGVyc3BlY3RpdmVDYW1lcmEgfSBmcm9tICcuL1RoUGVyc3BlY3RpdmVDYW1lcmEnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0aC1hcnJheUNhbWVyYScsXG4gIHRlbXBsYXRlOiAnPG5nLWNvbnRlbnQvPicsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBwcm92aWRlcnM6IFtcbiAgICB7IHByb3ZpZGU6IFRoT2JqZWN0M0QsIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IFRoQXJyYXlDYW1lcmEpIH0sXG4gICAgeyBwcm92aWRlOiBUaENhbWVyYSwgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gVGhBcnJheUNhbWVyYSkgfSxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgVGhBcnJheUNhbWVyYTxcbiAgVCBleHRlbmRzIEFycmF5Q2FtZXJhID0gQXJyYXlDYW1lcmEsXG4gIFRBUkdTID0gLyogY2FtZXJhcz8gKi8gUGVyc3BlY3RpdmVDYW1lcmFbXSxcbj4gZXh0ZW5kcyBUaFBlcnNwZWN0aXZlQ2FtZXJhPFQsIFRBUkdTPiB7XG4gIHB1YmxpYyBnZXRUeXBlKCk6IFR5cGU8QXJyYXlDYW1lcmE+IHtcbiAgICByZXR1cm4gQXJyYXlDYW1lcmE7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGlzQXJyYXlDYW1lcmEoKTogdHJ1ZSB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX29ialJlZj8uaXNBcnJheUNhbWVyYTtcbiAgfVxuICBASW5wdXQoKVxuICBwdWJsaWMgc2V0IGNhbWVyYXModmFsdWU6IFBlcnNwZWN0aXZlQ2FtZXJhW10pIHtcbiAgICBpZiAodGhpcy5fb2JqUmVmKSB7XG4gICAgICB0aGlzLl9vYmpSZWYuY2FtZXJhcyA9IHZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBnZXQgY2FtZXJhcygpOiBQZXJzcGVjdGl2ZUNhbWVyYVtdIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fb2JqUmVmPy5jYW1lcmFzO1xuICB9XG59XG4iXX0=