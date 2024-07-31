/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix */
import { ChangeDetectionStrategy, Component, forwardRef, } from '@angular/core';
import { TorusGeometry } from 'three';
import { ThBufferGeometry } from './ThBufferGeometry';
import * as i0 from "@angular/core";
export class ThTorusGeometry extends ThBufferGeometry {
    getType() {
        return TorusGeometry;
    }
    get type() {
        return this._objRef?.type;
    }
    get parameters() {
        return this._objRef?.parameters;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThTorusGeometry, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.1.2", type: ThTorusGeometry, selector: "th-torusGeometry", providers: [
            {
                provide: ThBufferGeometry,
                useExisting: forwardRef(() => ThTorusGeometry),
            },
        ], usesInheritance: true, ngImport: i0, template: '<ng-content/>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThTorusGeometry, decorators: [{
            type: Component,
            args: [{
                    selector: 'th-torusGeometry',
                    template: '<ng-content/>',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    providers: [
                        {
                            provide: ThBufferGeometry,
                            useExisting: forwardRef(() => ThTorusGeometry),
                        },
                    ],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGhUb3J1c0dlb21ldHJ5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LXRocmVlL3NyYy9saWIvZ2VuZXJhdGVkL1RoVG9ydXNHZW9tZXRyeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSx5REFBeUQ7QUFDekQseUNBQXlDO0FBQ3pDLCtGQUErRjtBQUMvRixPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFFVCxVQUFVLEdBQ1gsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUEwQixhQUFhLEVBQUUsTUFBTSxPQUFPLENBQUM7QUFDOUQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7O0FBYXRELE1BQU0sT0FBTyxlQVNYLFNBQVEsZ0JBQWtEO0lBQ25ELE9BQU87UUFDWixPQUFPLGFBQWEsQ0FBQztJQUN2QixDQUFDO0lBRUQsSUFBVyxJQUFJO1FBQ2IsT0FBTyxJQUFJLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQztJQUM1QixDQUFDO0lBQ0QsSUFBVyxVQUFVO1FBU25CLE9BQU8sSUFBSSxDQUFDLE9BQU8sRUFBRSxVQUFVLENBQUM7SUFDbEMsQ0FBQzs4R0EzQlUsZUFBZTtrR0FBZixlQUFlLDJDQVBmO1lBQ1Q7Z0JBQ0UsT0FBTyxFQUFFLGdCQUFnQjtnQkFDekIsV0FBVyxFQUFFLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxlQUFlLENBQUM7YUFDL0M7U0FDRixpREFQUyxlQUFlOzsyRkFTZCxlQUFlO2tCQVgzQixTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxrQkFBa0I7b0JBQzVCLFFBQVEsRUFBRSxlQUFlO29CQUN6QixlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtvQkFDL0MsU0FBUyxFQUFFO3dCQUNUOzRCQUNFLE9BQU8sRUFBRSxnQkFBZ0I7NEJBQ3pCLFdBQVcsRUFBRSxVQUFVLENBQUMsR0FBRyxFQUFFLGdCQUFnQixDQUFDO3lCQUMvQztxQkFDRjtpQkFDRiIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIEB0eXBlc2NyaXB0LWVzbGludC9uYW1pbmctY29udmVudGlvbiAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tdW5kZXJzY29yZS1kYW5nbGUgKi9cbi8qIGVzbGludC1kaXNhYmxlIEBhbmd1bGFyLWVzbGludC9jb21wb25lbnQtc2VsZWN0b3IsIEBhbmd1bGFyLWVzbGludC9jb21wb25lbnQtY2xhc3Mtc3VmZml4ICovXG5pbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ29tcG9uZW50LFxuICBUeXBlLFxuICBmb3J3YXJkUmVmLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5vcm1hbEJ1ZmZlckF0dHJpYnV0ZXMsIFRvcnVzR2VvbWV0cnkgfSBmcm9tICd0aHJlZSc7XG5pbXBvcnQgeyBUaEJ1ZmZlckdlb21ldHJ5IH0gZnJvbSAnLi9UaEJ1ZmZlckdlb21ldHJ5JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndGgtdG9ydXNHZW9tZXRyeScsXG4gIHRlbXBsYXRlOiAnPG5nLWNvbnRlbnQvPicsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBwcm92aWRlcnM6IFtcbiAgICB7XG4gICAgICBwcm92aWRlOiBUaEJ1ZmZlckdlb21ldHJ5LFxuICAgICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gVGhUb3J1c0dlb21ldHJ5KSxcbiAgICB9LFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBUaFRvcnVzR2VvbWV0cnk8XG4gIFQgZXh0ZW5kcyBUb3J1c0dlb21ldHJ5ID0gVG9ydXNHZW9tZXRyeSxcbiAgVEFSR1MgPSBbXG4gICAgcmFkaXVzPzogbnVtYmVyLFxuICAgIHR1YmU/OiBudW1iZXIsXG4gICAgcmFkaWFsU2VnbWVudHM/OiBudW1iZXIsXG4gICAgdHVidWxhclNlZ21lbnRzPzogbnVtYmVyLFxuICAgIGFyYz86IG51bWJlcixcbiAgXSxcbj4gZXh0ZW5kcyBUaEJ1ZmZlckdlb21ldHJ5PE5vcm1hbEJ1ZmZlckF0dHJpYnV0ZXMsIFQsIFRBUkdTPiB7XG4gIHB1YmxpYyBnZXRUeXBlKCk6IFR5cGU8VG9ydXNHZW9tZXRyeT4ge1xuICAgIHJldHVybiBUb3J1c0dlb21ldHJ5O1xuICB9XG5cbiAgcHVibGljIGdldCB0eXBlKCk6IChzdHJpbmcgfCAnVG9ydXNHZW9tZXRyeScpIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fb2JqUmVmPy50eXBlO1xuICB9XG4gIHB1YmxpYyBnZXQgcGFyYW1ldGVycygpOlxuICAgIHwge1xuICAgICAgICByZWFkb25seSByYWRpdXM6IG51bWJlcjtcbiAgICAgICAgcmVhZG9ubHkgdHViZTogbnVtYmVyO1xuICAgICAgICByZWFkb25seSByYWRpYWxTZWdtZW50czogbnVtYmVyO1xuICAgICAgICByZWFkb25seSB0dWJ1bGFyU2VnbWVudHM6IG51bWJlcjtcbiAgICAgICAgcmVhZG9ubHkgYXJjOiBudW1iZXI7XG4gICAgICB9XG4gICAgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9vYmpSZWY/LnBhcmFtZXRlcnM7XG4gIH1cbn1cbiJdfQ==