/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix */
import { ChangeDetectionStrategy, Component, forwardRef, } from '@angular/core';
import { CapsuleGeometry } from 'three';
import { ThBufferGeometry } from './ThBufferGeometry';
import * as i0 from "@angular/core";
export class ThCapsuleGeometry extends ThBufferGeometry {
    getType() {
        return CapsuleGeometry;
    }
    get type() {
        return this._objRef?.type;
    }
    get parameters() {
        return this._objRef?.parameters;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThCapsuleGeometry, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.1.2", type: ThCapsuleGeometry, selector: "th-capsuleGeometry", providers: [
            {
                provide: ThBufferGeometry,
                useExisting: forwardRef(() => ThCapsuleGeometry),
            },
        ], usesInheritance: true, ngImport: i0, template: '<ng-content/>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThCapsuleGeometry, decorators: [{
            type: Component,
            args: [{
                    selector: 'th-capsuleGeometry',
                    template: '<ng-content/>',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    providers: [
                        {
                            provide: ThBufferGeometry,
                            useExisting: forwardRef(() => ThCapsuleGeometry),
                        },
                    ],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGhDYXBzdWxlR2VvbWV0cnkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtdGhyZWUvc3JjL2xpYi9nZW5lcmF0ZWQvVGhDYXBzdWxlR2VvbWV0cnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEseURBQXlEO0FBQ3pELHlDQUF5QztBQUN6QywrRkFBK0Y7QUFDL0YsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixTQUFTLEVBRVQsVUFBVSxHQUNYLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxlQUFlLEVBQTBCLE1BQU0sT0FBTyxDQUFDO0FBQ2hFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLG9CQUFvQixDQUFDOztBQWF0RCxNQUFNLE9BQU8saUJBUVgsU0FBUSxnQkFBa0Q7SUFDbkQsT0FBTztRQUNaLE9BQU8sZUFBZSxDQUFDO0lBQ3pCLENBQUM7SUFFRCxJQUFXLElBQUk7UUFDYixPQUFPLElBQUksQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDO0lBQzVCLENBQUM7SUFDRCxJQUFXLFVBQVU7UUFRbkIsT0FBTyxJQUFJLENBQUMsT0FBTyxFQUFFLFVBQVUsQ0FBQztJQUNsQyxDQUFDOzhHQXpCVSxpQkFBaUI7a0dBQWpCLGlCQUFpQiw2Q0FQakI7WUFDVDtnQkFDRSxPQUFPLEVBQUUsZ0JBQWdCO2dCQUN6QixXQUFXLEVBQUUsVUFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDLGlCQUFpQixDQUFDO2FBQ2pEO1NBQ0YsaURBUFMsZUFBZTs7MkZBU2QsaUJBQWlCO2tCQVg3QixTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxvQkFBb0I7b0JBQzlCLFFBQVEsRUFBRSxlQUFlO29CQUN6QixlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtvQkFDL0MsU0FBUyxFQUFFO3dCQUNUOzRCQUNFLE9BQU8sRUFBRSxnQkFBZ0I7NEJBQ3pCLFdBQVcsRUFBRSxVQUFVLENBQUMsR0FBRyxFQUFFLGtCQUFrQixDQUFDO3lCQUNqRDtxQkFDRjtpQkFDRiIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIEB0eXBlc2NyaXB0LWVzbGludC9uYW1pbmctY29udmVudGlvbiAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tdW5kZXJzY29yZS1kYW5nbGUgKi9cbi8qIGVzbGludC1kaXNhYmxlIEBhbmd1bGFyLWVzbGludC9jb21wb25lbnQtc2VsZWN0b3IsIEBhbmd1bGFyLWVzbGludC9jb21wb25lbnQtY2xhc3Mtc3VmZml4ICovXG5pbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ29tcG9uZW50LFxuICBUeXBlLFxuICBmb3J3YXJkUmVmLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENhcHN1bGVHZW9tZXRyeSwgTm9ybWFsQnVmZmVyQXR0cmlidXRlcyB9IGZyb20gJ3RocmVlJztcbmltcG9ydCB7IFRoQnVmZmVyR2VvbWV0cnkgfSBmcm9tICcuL1RoQnVmZmVyR2VvbWV0cnknO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0aC1jYXBzdWxlR2VvbWV0cnknLFxuICB0ZW1wbGF0ZTogJzxuZy1jb250ZW50Lz4nLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgcHJvdmlkZXJzOiBbXG4gICAge1xuICAgICAgcHJvdmlkZTogVGhCdWZmZXJHZW9tZXRyeSxcbiAgICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IFRoQ2Fwc3VsZUdlb21ldHJ5KSxcbiAgICB9LFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBUaENhcHN1bGVHZW9tZXRyeTxcbiAgVCBleHRlbmRzIENhcHN1bGVHZW9tZXRyeSA9IENhcHN1bGVHZW9tZXRyeSxcbiAgVEFSR1MgPSBbXG4gICAgcmFkaXVzPzogbnVtYmVyLFxuICAgIGxlbmd0aD86IG51bWJlcixcbiAgICBjYXBTZWdtZW50cz86IG51bWJlcixcbiAgICByYWRpYWxTZWdtZW50cz86IG51bWJlcixcbiAgXSxcbj4gZXh0ZW5kcyBUaEJ1ZmZlckdlb21ldHJ5PE5vcm1hbEJ1ZmZlckF0dHJpYnV0ZXMsIFQsIFRBUkdTPiB7XG4gIHB1YmxpYyBnZXRUeXBlKCk6IFR5cGU8Q2Fwc3VsZUdlb21ldHJ5PiB7XG4gICAgcmV0dXJuIENhcHN1bGVHZW9tZXRyeTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgdHlwZSgpOiAoc3RyaW5nIHwgJ0NhcHN1bGVHZW9tZXRyeScpIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fb2JqUmVmPy50eXBlO1xuICB9XG4gIHB1YmxpYyBnZXQgcGFyYW1ldGVycygpOlxuICAgIHwge1xuICAgICAgICByZWFkb25seSByYWRpdXM6IG51bWJlcjtcbiAgICAgICAgcmVhZG9ubHkgbGVuZ3RoOiBudW1iZXI7XG4gICAgICAgIHJlYWRvbmx5IGNhcFNlZ21lbnRzOiBudW1iZXI7XG4gICAgICAgIHJlYWRvbmx5IHJhZGlhbFNlZ21lbnRzOiBudW1iZXI7XG4gICAgICB9XG4gICAgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9vYmpSZWY/LnBhcmFtZXRlcnM7XG4gIH1cbn1cbiJdfQ==