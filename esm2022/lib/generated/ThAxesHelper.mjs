/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix */
import { ChangeDetectionStrategy, Component, forwardRef, } from '@angular/core';
import { AxesHelper } from 'three';
import { ThLineSegments } from './ThLineSegments';
import { ThObject3D } from './ThObject3D';
import * as i0 from "@angular/core";
export class ThAxesHelper extends ThLineSegments {
    getType() {
        return AxesHelper;
    }
    get type() {
        return this._objRef?.type;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThAxesHelper, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.1.2", type: ThAxesHelper, selector: "th-axesHelper", providers: [
            { provide: ThObject3D, useExisting: forwardRef(() => ThAxesHelper) },
        ], usesInheritance: true, ngImport: i0, template: '<ng-content/>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThAxesHelper, decorators: [{
            type: Component,
            args: [{
                    selector: 'th-axesHelper',
                    template: '<ng-content/>',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    providers: [
                        { provide: ThObject3D, useExisting: forwardRef(() => ThAxesHelper) },
                    ],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGhBeGVzSGVscGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LXRocmVlL3NyYy9saWIvZ2VuZXJhdGVkL1RoQXhlc0hlbHBlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSx5REFBeUQ7QUFDekQseUNBQXlDO0FBQ3pDLCtGQUErRjtBQUMvRixPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFFVCxVQUFVLEdBQ1gsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFVBQVUsRUFBOEMsTUFBTSxPQUFPLENBQUM7QUFDL0UsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxjQUFjLENBQUM7O0FBVTFDLE1BQU0sT0FBTyxZQUdYLFNBQVEsY0FNVDtJQUNRLE9BQU87UUFDWixPQUFPLFVBQVUsQ0FBQztJQUNwQixDQUFDO0lBRUQsSUFBVyxJQUFJO1FBQ2IsT0FBTyxJQUFJLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQztJQUM1QixDQUFDOzhHQWhCVSxZQUFZO2tHQUFaLFlBQVksd0NBSlo7WUFDVCxFQUFFLE9BQU8sRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxZQUFZLENBQUMsRUFBRTtTQUNyRSxpREFKUyxlQUFlOzsyRkFNZCxZQUFZO2tCQVJ4QixTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxlQUFlO29CQUN6QixRQUFRLEVBQUUsZUFBZTtvQkFDekIsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07b0JBQy9DLFNBQVMsRUFBRTt3QkFDVCxFQUFFLE9BQU8sRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFLFVBQVUsQ0FBQyxHQUFHLEVBQUUsYUFBYSxDQUFDLEVBQUU7cUJBQ3JFO2lCQUNGIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgQHR5cGVzY3JpcHQtZXNsaW50L25hbWluZy1jb252ZW50aW9uICovXG4vKiBlc2xpbnQtZGlzYWJsZSBuby11bmRlcnNjb3JlLWRhbmdsZSAqL1xuLyogZXNsaW50LWRpc2FibGUgQGFuZ3VsYXItZXNsaW50L2NvbXBvbmVudC1zZWxlY3RvciwgQGFuZ3VsYXItZXNsaW50L2NvbXBvbmVudC1jbGFzcy1zdWZmaXggKi9cbmltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDb21wb25lbnQsXG4gIFR5cGUsXG4gIGZvcndhcmRSZWYsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQXhlc0hlbHBlciwgQnVmZmVyR2VvbWV0cnksIE1hdGVyaWFsLCBPYmplY3QzREV2ZW50TWFwIH0gZnJvbSAndGhyZWUnO1xuaW1wb3J0IHsgVGhMaW5lU2VnbWVudHMgfSBmcm9tICcuL1RoTGluZVNlZ21lbnRzJztcbmltcG9ydCB7IFRoT2JqZWN0M0QgfSBmcm9tICcuL1RoT2JqZWN0M0QnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0aC1heGVzSGVscGVyJyxcbiAgdGVtcGxhdGU6ICc8bmctY29udGVudC8+JyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHByb3ZpZGVyczogW1xuICAgIHsgcHJvdmlkZTogVGhPYmplY3QzRCwgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gVGhBeGVzSGVscGVyKSB9LFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBUaEF4ZXNIZWxwZXI8XG4gIFQgZXh0ZW5kcyBBeGVzSGVscGVyID0gQXhlc0hlbHBlcixcbiAgVEFSR1MgPSAvKiBzaXplPyAqLyBudW1iZXIsXG4+IGV4dGVuZHMgVGhMaW5lU2VnbWVudHM8XG4gIEJ1ZmZlckdlb21ldHJ5LFxuICBNYXRlcmlhbCB8IE1hdGVyaWFsW10sXG4gIE9iamVjdDNERXZlbnRNYXAsXG4gIFQsXG4gIFRBUkdTXG4+IHtcbiAgcHVibGljIGdldFR5cGUoKTogVHlwZTxBeGVzSGVscGVyPiB7XG4gICAgcmV0dXJuIEF4ZXNIZWxwZXI7XG4gIH1cblxuICBwdWJsaWMgZ2V0IHR5cGUoKTogKHN0cmluZyB8ICdBeGVzSGVscGVyJykgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9vYmpSZWY/LnR5cGU7XG4gIH1cbn1cbiJdfQ==