/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix */
import { ChangeDetectionStrategy, Component, forwardRef, } from '@angular/core';
import { TeapotGeometry } from 'three/examples/jsm/geometries/TeapotGeometry.js';
import { ThBufferGeometry } from './ThBufferGeometry';
import * as i0 from "@angular/core";
export class ThTeapotGeometry extends ThBufferGeometry {
    getType() {
        return TeapotGeometry;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThTeapotGeometry, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.1.2", type: ThTeapotGeometry, selector: "th-teapotGeometry", providers: [
            {
                provide: ThBufferGeometry,
                useExisting: forwardRef(() => ThTeapotGeometry),
            },
        ], usesInheritance: true, ngImport: i0, template: '<ng-content/>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThTeapotGeometry, decorators: [{
            type: Component,
            args: [{
                    selector: 'th-teapotGeometry',
                    template: '<ng-content/>',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    providers: [
                        {
                            provide: ThBufferGeometry,
                            useExisting: forwardRef(() => ThTeapotGeometry),
                        },
                    ],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGhUZWFwb3RHZW9tZXRyeS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC10aHJlZS9zcmMvbGliL2dlbmVyYXRlZC9UaFRlYXBvdEdlb21ldHJ5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHlEQUF5RDtBQUN6RCx5Q0FBeUM7QUFDekMsK0ZBQStGO0FBQy9GLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUVULFVBQVUsR0FDWCxNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0saURBQWlELENBQUM7QUFDakYsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7O0FBYXRELE1BQU0sT0FBTyxnQkFXWCxTQUFRLGdCQUFrRDtJQUNuRCxPQUFPO1FBQ1osT0FBTyxjQUFjLENBQUM7SUFDeEIsQ0FBQzs4R0FkVSxnQkFBZ0I7a0dBQWhCLGdCQUFnQiw0Q0FQaEI7WUFDVDtnQkFDRSxPQUFPLEVBQUUsZ0JBQWdCO2dCQUN6QixXQUFXLEVBQUUsVUFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDLGdCQUFnQixDQUFDO2FBQ2hEO1NBQ0YsaURBUFMsZUFBZTs7MkZBU2QsZ0JBQWdCO2tCQVg1QixTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxtQkFBbUI7b0JBQzdCLFFBQVEsRUFBRSxlQUFlO29CQUN6QixlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtvQkFDL0MsU0FBUyxFQUFFO3dCQUNUOzRCQUNFLE9BQU8sRUFBRSxnQkFBZ0I7NEJBQ3pCLFdBQVcsRUFBRSxVQUFVLENBQUMsR0FBRyxFQUFFLGlCQUFpQixDQUFDO3lCQUNoRDtxQkFDRjtpQkFDRiIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIEB0eXBlc2NyaXB0LWVzbGludC9uYW1pbmctY29udmVudGlvbiAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tdW5kZXJzY29yZS1kYW5nbGUgKi9cbi8qIGVzbGludC1kaXNhYmxlIEBhbmd1bGFyLWVzbGludC9jb21wb25lbnQtc2VsZWN0b3IsIEBhbmd1bGFyLWVzbGludC9jb21wb25lbnQtY2xhc3Mtc3VmZml4ICovXG5pbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ29tcG9uZW50LFxuICBUeXBlLFxuICBmb3J3YXJkUmVmLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5vcm1hbEJ1ZmZlckF0dHJpYnV0ZXMgfSBmcm9tICd0aHJlZSc7XG5pbXBvcnQgeyBUZWFwb3RHZW9tZXRyeSB9IGZyb20gJ3RocmVlL2V4YW1wbGVzL2pzbS9nZW9tZXRyaWVzL1RlYXBvdEdlb21ldHJ5LmpzJztcbmltcG9ydCB7IFRoQnVmZmVyR2VvbWV0cnkgfSBmcm9tICcuL1RoQnVmZmVyR2VvbWV0cnknO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0aC10ZWFwb3RHZW9tZXRyeScsXG4gIHRlbXBsYXRlOiAnPG5nLWNvbnRlbnQvPicsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBwcm92aWRlcnM6IFtcbiAgICB7XG4gICAgICBwcm92aWRlOiBUaEJ1ZmZlckdlb21ldHJ5LFxuICAgICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gVGhUZWFwb3RHZW9tZXRyeSksXG4gICAgfSxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgVGhUZWFwb3RHZW9tZXRyeTxcbiAgVCBleHRlbmRzIFRlYXBvdEdlb21ldHJ5ID0gVGVhcG90R2VvbWV0cnksXG4gIFRBUkdTID0gW1xuICAgIHNpemU/OiBudW1iZXIsXG4gICAgc2VnbWVudHM/OiBudW1iZXIsXG4gICAgYm90dG9tPzogYm9vbGVhbixcbiAgICBsaWQ/OiBib29sZWFuLFxuICAgIGJvZHk/OiBib29sZWFuLFxuICAgIGZpdExpZD86IGJvb2xlYW4sXG4gICAgYmxpbm4/OiBib29sZWFuLFxuICBdLFxuPiBleHRlbmRzIFRoQnVmZmVyR2VvbWV0cnk8Tm9ybWFsQnVmZmVyQXR0cmlidXRlcywgVCwgVEFSR1M+IHtcbiAgcHVibGljIGdldFR5cGUoKTogVHlwZTxUZWFwb3RHZW9tZXRyeT4ge1xuICAgIHJldHVybiBUZWFwb3RHZW9tZXRyeTtcbiAgfVxufVxuIl19