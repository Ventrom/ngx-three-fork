/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix */
import { ChangeDetectionStrategy, Component, forwardRef, } from '@angular/core';
import { CylinderGeometry } from 'three';
import { ThBufferGeometry } from './ThBufferGeometry';
import * as i0 from "@angular/core";
export class ThCylinderGeometry extends ThBufferGeometry {
    getType() {
        return CylinderGeometry;
    }
    get type() {
        return this._objRef?.type;
    }
    get parameters() {
        return this._objRef?.parameters;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThCylinderGeometry, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.1.2", type: ThCylinderGeometry, selector: "th-cylinderGeometry", providers: [
            {
                provide: ThBufferGeometry,
                useExisting: forwardRef(() => ThCylinderGeometry),
            },
        ], usesInheritance: true, ngImport: i0, template: '<ng-content/>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThCylinderGeometry, decorators: [{
            type: Component,
            args: [{
                    selector: 'th-cylinderGeometry',
                    template: '<ng-content/>',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    providers: [
                        {
                            provide: ThBufferGeometry,
                            useExisting: forwardRef(() => ThCylinderGeometry),
                        },
                    ],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGhDeWxpbmRlckdlb21ldHJ5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LXRocmVlL3NyYy9saWIvZ2VuZXJhdGVkL1RoQ3lsaW5kZXJHZW9tZXRyeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSx5REFBeUQ7QUFDekQseUNBQXlDO0FBQ3pDLCtGQUErRjtBQUMvRixPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFFVCxVQUFVLEdBQ1gsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGdCQUFnQixFQUEwQixNQUFNLE9BQU8sQ0FBQztBQUNqRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQzs7QUFhdEQsTUFBTSxPQUFPLGtCQVlYLFNBQVEsZ0JBQWtEO0lBQ25ELE9BQU87UUFDWixPQUFPLGdCQUFnQixDQUFDO0lBQzFCLENBQUM7SUFFRCxJQUFXLElBQUk7UUFDYixPQUFPLElBQUksQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDO0lBQzVCLENBQUM7SUFDRCxJQUFXLFVBQVU7UUFZbkIsT0FBTyxJQUFJLENBQUMsT0FBTyxFQUFFLFVBQVUsQ0FBQztJQUNsQyxDQUFDOzhHQWpDVSxrQkFBa0I7a0dBQWxCLGtCQUFrQiw4Q0FQbEI7WUFDVDtnQkFDRSxPQUFPLEVBQUUsZ0JBQWdCO2dCQUN6QixXQUFXLEVBQUUsVUFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDLGtCQUFrQixDQUFDO2FBQ2xEO1NBQ0YsaURBUFMsZUFBZTs7MkZBU2Qsa0JBQWtCO2tCQVg5QixTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxxQkFBcUI7b0JBQy9CLFFBQVEsRUFBRSxlQUFlO29CQUN6QixlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtvQkFDL0MsU0FBUyxFQUFFO3dCQUNUOzRCQUNFLE9BQU8sRUFBRSxnQkFBZ0I7NEJBQ3pCLFdBQVcsRUFBRSxVQUFVLENBQUMsR0FBRyxFQUFFLG1CQUFtQixDQUFDO3lCQUNsRDtxQkFDRjtpQkFDRiIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIEB0eXBlc2NyaXB0LWVzbGludC9uYW1pbmctY29udmVudGlvbiAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tdW5kZXJzY29yZS1kYW5nbGUgKi9cbi8qIGVzbGludC1kaXNhYmxlIEBhbmd1bGFyLWVzbGludC9jb21wb25lbnQtc2VsZWN0b3IsIEBhbmd1bGFyLWVzbGludC9jb21wb25lbnQtY2xhc3Mtc3VmZml4ICovXG5pbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ29tcG9uZW50LFxuICBUeXBlLFxuICBmb3J3YXJkUmVmLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEN5bGluZGVyR2VvbWV0cnksIE5vcm1hbEJ1ZmZlckF0dHJpYnV0ZXMgfSBmcm9tICd0aHJlZSc7XG5pbXBvcnQgeyBUaEJ1ZmZlckdlb21ldHJ5IH0gZnJvbSAnLi9UaEJ1ZmZlckdlb21ldHJ5JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndGgtY3lsaW5kZXJHZW9tZXRyeScsXG4gIHRlbXBsYXRlOiAnPG5nLWNvbnRlbnQvPicsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBwcm92aWRlcnM6IFtcbiAgICB7XG4gICAgICBwcm92aWRlOiBUaEJ1ZmZlckdlb21ldHJ5LFxuICAgICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gVGhDeWxpbmRlckdlb21ldHJ5KSxcbiAgICB9LFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBUaEN5bGluZGVyR2VvbWV0cnk8XG4gIFQgZXh0ZW5kcyBDeWxpbmRlckdlb21ldHJ5ID0gQ3lsaW5kZXJHZW9tZXRyeSxcbiAgVEFSR1MgPSBbXG4gICAgcmFkaXVzVG9wPzogbnVtYmVyLFxuICAgIHJhZGl1c0JvdHRvbT86IG51bWJlcixcbiAgICBoZWlnaHQ/OiBudW1iZXIsXG4gICAgcmFkaWFsU2VnbWVudHM/OiBudW1iZXIsXG4gICAgaGVpZ2h0U2VnbWVudHM/OiBudW1iZXIsXG4gICAgb3BlbkVuZGVkPzogYm9vbGVhbixcbiAgICB0aGV0YVN0YXJ0PzogbnVtYmVyLFxuICAgIHRoZXRhTGVuZ3RoPzogbnVtYmVyLFxuICBdLFxuPiBleHRlbmRzIFRoQnVmZmVyR2VvbWV0cnk8Tm9ybWFsQnVmZmVyQXR0cmlidXRlcywgVCwgVEFSR1M+IHtcbiAgcHVibGljIGdldFR5cGUoKTogVHlwZTxDeWxpbmRlckdlb21ldHJ5PiB7XG4gICAgcmV0dXJuIEN5bGluZGVyR2VvbWV0cnk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IHR5cGUoKTogKHN0cmluZyB8ICdDeWxpbmRlckdlb21ldHJ5JykgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9vYmpSZWY/LnR5cGU7XG4gIH1cbiAgcHVibGljIGdldCBwYXJhbWV0ZXJzKCk6XG4gICAgfCB7XG4gICAgICAgIHJlYWRvbmx5IHJhZGl1c1RvcDogbnVtYmVyO1xuICAgICAgICByZWFkb25seSByYWRpdXNCb3R0b206IG51bWJlcjtcbiAgICAgICAgcmVhZG9ubHkgaGVpZ2h0OiBudW1iZXI7XG4gICAgICAgIHJlYWRvbmx5IHJhZGlhbFNlZ21lbnRzOiBudW1iZXI7XG4gICAgICAgIHJlYWRvbmx5IGhlaWdodFNlZ21lbnRzOiBudW1iZXI7XG4gICAgICAgIHJlYWRvbmx5IG9wZW5FbmRlZDogYm9vbGVhbjtcbiAgICAgICAgcmVhZG9ubHkgdGhldGFTdGFydDogbnVtYmVyO1xuICAgICAgICByZWFkb25seSB0aGV0YUxlbmd0aDogbnVtYmVyO1xuICAgICAgfVxuICAgIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fb2JqUmVmPy5wYXJhbWV0ZXJzO1xuICB9XG59XG4iXX0=