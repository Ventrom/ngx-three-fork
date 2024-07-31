/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix */
import { ChangeDetectionStrategy, Component, forwardRef, } from '@angular/core';
import { PolyhedronGeometry } from 'three';
import { ThBufferGeometry } from './ThBufferGeometry';
import * as i0 from "@angular/core";
export class ThPolyhedronGeometry extends ThBufferGeometry {
    getType() {
        return PolyhedronGeometry;
    }
    get type() {
        return this._objRef?.type;
    }
    get parameters() {
        return this._objRef?.parameters;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThPolyhedronGeometry, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.1.2", type: ThPolyhedronGeometry, selector: "th-polyhedronGeometry", providers: [
            {
                provide: ThBufferGeometry,
                useExisting: forwardRef(() => ThPolyhedronGeometry),
            },
        ], usesInheritance: true, ngImport: i0, template: '<ng-content/>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThPolyhedronGeometry, decorators: [{
            type: Component,
            args: [{
                    selector: 'th-polyhedronGeometry',
                    template: '<ng-content/>',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    providers: [
                        {
                            provide: ThBufferGeometry,
                            useExisting: forwardRef(() => ThPolyhedronGeometry),
                        },
                    ],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGhQb2x5aGVkcm9uR2VvbWV0cnkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtdGhyZWUvc3JjL2xpYi9nZW5lcmF0ZWQvVGhQb2x5aGVkcm9uR2VvbWV0cnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEseURBQXlEO0FBQ3pELHlDQUF5QztBQUN6QywrRkFBK0Y7QUFDL0YsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixTQUFTLEVBRVQsVUFBVSxHQUNYLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBMEIsa0JBQWtCLEVBQUUsTUFBTSxPQUFPLENBQUM7QUFDbkUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7O0FBYXRELE1BQU0sT0FBTyxvQkFRWCxTQUFRLGdCQUFrRDtJQUNuRCxPQUFPO1FBQ1osT0FBTyxrQkFBa0IsQ0FBQztJQUM1QixDQUFDO0lBRUQsSUFBVyxJQUFJO1FBQ2IsT0FBTyxJQUFJLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQztJQUM1QixDQUFDO0lBQ0QsSUFBVyxVQUFVO1FBUW5CLE9BQU8sSUFBSSxDQUFDLE9BQU8sRUFBRSxVQUFVLENBQUM7SUFDbEMsQ0FBQzs4R0F6QlUsb0JBQW9CO2tHQUFwQixvQkFBb0IsZ0RBUHBCO1lBQ1Q7Z0JBQ0UsT0FBTyxFQUFFLGdCQUFnQjtnQkFDekIsV0FBVyxFQUFFLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxvQkFBb0IsQ0FBQzthQUNwRDtTQUNGLGlEQVBTLGVBQWU7OzJGQVNkLG9CQUFvQjtrQkFYaEMsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsdUJBQXVCO29CQUNqQyxRQUFRLEVBQUUsZUFBZTtvQkFDekIsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07b0JBQy9DLFNBQVMsRUFBRTt3QkFDVDs0QkFDRSxPQUFPLEVBQUUsZ0JBQWdCOzRCQUN6QixXQUFXLEVBQUUsVUFBVSxDQUFDLEdBQUcsRUFBRSxxQkFBcUIsQ0FBQzt5QkFDcEQ7cUJBQ0Y7aUJBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBAdHlwZXNjcmlwdC1lc2xpbnQvbmFtaW5nLWNvbnZlbnRpb24gKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vLXVuZGVyc2NvcmUtZGFuZ2xlICovXG4vKiBlc2xpbnQtZGlzYWJsZSBAYW5ndWxhci1lc2xpbnQvY29tcG9uZW50LXNlbGVjdG9yLCBAYW5ndWxhci1lc2xpbnQvY29tcG9uZW50LWNsYXNzLXN1ZmZpeCAqL1xuaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENvbXBvbmVudCxcbiAgVHlwZSxcbiAgZm9yd2FyZFJlZixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOb3JtYWxCdWZmZXJBdHRyaWJ1dGVzLCBQb2x5aGVkcm9uR2VvbWV0cnkgfSBmcm9tICd0aHJlZSc7XG5pbXBvcnQgeyBUaEJ1ZmZlckdlb21ldHJ5IH0gZnJvbSAnLi9UaEJ1ZmZlckdlb21ldHJ5JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndGgtcG9seWhlZHJvbkdlb21ldHJ5JyxcbiAgdGVtcGxhdGU6ICc8bmctY29udGVudC8+JyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHByb3ZpZGVyczogW1xuICAgIHtcbiAgICAgIHByb3ZpZGU6IFRoQnVmZmVyR2VvbWV0cnksXG4gICAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBUaFBvbHloZWRyb25HZW9tZXRyeSksXG4gICAgfSxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgVGhQb2x5aGVkcm9uR2VvbWV0cnk8XG4gIFQgZXh0ZW5kcyBQb2x5aGVkcm9uR2VvbWV0cnkgPSBQb2x5aGVkcm9uR2VvbWV0cnksXG4gIFRBUkdTID0gW1xuICAgIHZlcnRpY2VzPzogbnVtYmVyW10sXG4gICAgaW5kaWNlcz86IG51bWJlcltdLFxuICAgIHJhZGl1cz86IG51bWJlcixcbiAgICBkZXRhaWw/OiBudW1iZXIsXG4gIF0sXG4+IGV4dGVuZHMgVGhCdWZmZXJHZW9tZXRyeTxOb3JtYWxCdWZmZXJBdHRyaWJ1dGVzLCBULCBUQVJHUz4ge1xuICBwdWJsaWMgZ2V0VHlwZSgpOiBUeXBlPFBvbHloZWRyb25HZW9tZXRyeT4ge1xuICAgIHJldHVybiBQb2x5aGVkcm9uR2VvbWV0cnk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IHR5cGUoKTogKHN0cmluZyB8ICdQb2x5aGVkcm9uR2VvbWV0cnknKSB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX29ialJlZj8udHlwZTtcbiAgfVxuICBwdWJsaWMgZ2V0IHBhcmFtZXRlcnMoKTpcbiAgICB8IHtcbiAgICAgICAgcmVhZG9ubHkgdmVydGljZXM6IG51bWJlcltdO1xuICAgICAgICByZWFkb25seSBpbmRpY2VzOiBudW1iZXJbXTtcbiAgICAgICAgcmVhZG9ubHkgcmFkaXVzOiBudW1iZXI7XG4gICAgICAgIHJlYWRvbmx5IGRldGFpbDogbnVtYmVyO1xuICAgICAgfVxuICAgIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fb2JqUmVmPy5wYXJhbWV0ZXJzO1xuICB9XG59XG4iXX0=