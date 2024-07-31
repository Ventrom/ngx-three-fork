/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix */
import { ChangeDetectionStrategy, Component, forwardRef, } from '@angular/core';
import { ShapeGeometry } from 'three';
import { ThBufferGeometry } from './ThBufferGeometry';
import * as i0 from "@angular/core";
export class ThShapeGeometry extends ThBufferGeometry {
    getType() {
        return ShapeGeometry;
    }
    get type() {
        return this._objRef?.type;
    }
    get parameters() {
        return this._objRef?.parameters;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThShapeGeometry, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.1.2", type: ThShapeGeometry, selector: "th-shapeGeometry", providers: [
            {
                provide: ThBufferGeometry,
                useExisting: forwardRef(() => ThShapeGeometry),
            },
        ], usesInheritance: true, ngImport: i0, template: '<ng-content/>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThShapeGeometry, decorators: [{
            type: Component,
            args: [{
                    selector: 'th-shapeGeometry',
                    template: '<ng-content/>',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    providers: [
                        {
                            provide: ThBufferGeometry,
                            useExisting: forwardRef(() => ThShapeGeometry),
                        },
                    ],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGhTaGFwZUdlb21ldHJ5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LXRocmVlL3NyYy9saWIvZ2VuZXJhdGVkL1RoU2hhcGVHZW9tZXRyeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSx5REFBeUQ7QUFDekQseUNBQXlDO0FBQ3pDLCtGQUErRjtBQUMvRixPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFFVCxVQUFVLEdBQ1gsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFpQyxhQUFhLEVBQUUsTUFBTSxPQUFPLENBQUM7QUFDckUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7O0FBYXRELE1BQU0sT0FBTyxlQUdYLFNBQVEsZ0JBQWtEO0lBQ25ELE9BQU87UUFDWixPQUFPLGFBQWEsQ0FBQztJQUN2QixDQUFDO0lBRUQsSUFBVyxJQUFJO1FBQ2IsT0FBTyxJQUFJLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQztJQUM1QixDQUFDO0lBQ0QsSUFBVyxVQUFVO1FBTW5CLE9BQU8sSUFBSSxDQUFDLE9BQU8sRUFBRSxVQUFVLENBQUM7SUFDbEMsQ0FBQzs4R0FsQlUsZUFBZTtrR0FBZixlQUFlLDJDQVBmO1lBQ1Q7Z0JBQ0UsT0FBTyxFQUFFLGdCQUFnQjtnQkFDekIsV0FBVyxFQUFFLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxlQUFlLENBQUM7YUFDL0M7U0FDRixpREFQUyxlQUFlOzsyRkFTZCxlQUFlO2tCQVgzQixTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxrQkFBa0I7b0JBQzVCLFFBQVEsRUFBRSxlQUFlO29CQUN6QixlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtvQkFDL0MsU0FBUyxFQUFFO3dCQUNUOzRCQUNFLE9BQU8sRUFBRSxnQkFBZ0I7NEJBQ3pCLFdBQVcsRUFBRSxVQUFVLENBQUMsR0FBRyxFQUFFLGdCQUFnQixDQUFDO3lCQUMvQztxQkFDRjtpQkFDRiIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIEB0eXBlc2NyaXB0LWVzbGludC9uYW1pbmctY29udmVudGlvbiAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tdW5kZXJzY29yZS1kYW5nbGUgKi9cbi8qIGVzbGludC1kaXNhYmxlIEBhbmd1bGFyLWVzbGludC9jb21wb25lbnQtc2VsZWN0b3IsIEBhbmd1bGFyLWVzbGludC9jb21wb25lbnQtY2xhc3Mtc3VmZml4ICovXG5pbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ29tcG9uZW50LFxuICBUeXBlLFxuICBmb3J3YXJkUmVmLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5vcm1hbEJ1ZmZlckF0dHJpYnV0ZXMsIFNoYXBlLCBTaGFwZUdlb21ldHJ5IH0gZnJvbSAndGhyZWUnO1xuaW1wb3J0IHsgVGhCdWZmZXJHZW9tZXRyeSB9IGZyb20gJy4vVGhCdWZmZXJHZW9tZXRyeSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3RoLXNoYXBlR2VvbWV0cnknLFxuICB0ZW1wbGF0ZTogJzxuZy1jb250ZW50Lz4nLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgcHJvdmlkZXJzOiBbXG4gICAge1xuICAgICAgcHJvdmlkZTogVGhCdWZmZXJHZW9tZXRyeSxcbiAgICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IFRoU2hhcGVHZW9tZXRyeSksXG4gICAgfSxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgVGhTaGFwZUdlb21ldHJ5PFxuICBUIGV4dGVuZHMgU2hhcGVHZW9tZXRyeSA9IFNoYXBlR2VvbWV0cnksXG4gIFRBUkdTID0gW3NoYXBlcz86IFNoYXBlIHwgU2hhcGVbXSwgY3VydmVTZWdtZW50cz86IG51bWJlcl0sXG4+IGV4dGVuZHMgVGhCdWZmZXJHZW9tZXRyeTxOb3JtYWxCdWZmZXJBdHRyaWJ1dGVzLCBULCBUQVJHUz4ge1xuICBwdWJsaWMgZ2V0VHlwZSgpOiBUeXBlPFNoYXBlR2VvbWV0cnk+IHtcbiAgICByZXR1cm4gU2hhcGVHZW9tZXRyeTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgdHlwZSgpOiAoc3RyaW5nIHwgJ1NoYXBlR2VvbWV0cnknKSB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX29ialJlZj8udHlwZTtcbiAgfVxuICBwdWJsaWMgZ2V0IHBhcmFtZXRlcnMoKTpcbiAgICB8IHtcbiAgICAgICAgcmVhZG9ubHkgc2hhcGVzOiBTaGFwZSB8IFNoYXBlW107XG4gICAgICAgIHJlYWRvbmx5IGN1cnZlU2VnbWVudHM6IG51bWJlcjtcbiAgICAgIH1cbiAgICB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX29ialJlZj8ucGFyYW1ldGVycztcbiAgfVxufVxuIl19