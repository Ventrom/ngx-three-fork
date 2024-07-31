/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix */
import { ChangeDetectionStrategy, Component, forwardRef, } from '@angular/core';
import { ConeGeometry } from 'three';
import { ThBufferGeometry } from './ThBufferGeometry';
import { ThCylinderGeometry } from './ThCylinderGeometry';
import * as i0 from "@angular/core";
export class ThConeGeometry extends ThCylinderGeometry {
    getType() {
        return ConeGeometry;
    }
    get type() {
        return this._objRef?.type;
    }
    get parameters() {
        return this._objRef?.parameters;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThConeGeometry, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.1.2", type: ThConeGeometry, selector: "th-coneGeometry", providers: [
            {
                provide: ThBufferGeometry,
                useExisting: forwardRef(() => ThConeGeometry),
            },
        ], usesInheritance: true, ngImport: i0, template: '<ng-content/>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThConeGeometry, decorators: [{
            type: Component,
            args: [{
                    selector: 'th-coneGeometry',
                    template: '<ng-content/>',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    providers: [
                        {
                            provide: ThBufferGeometry,
                            useExisting: forwardRef(() => ThConeGeometry),
                        },
                    ],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGhDb25lR2VvbWV0cnkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtdGhyZWUvc3JjL2xpYi9nZW5lcmF0ZWQvVGhDb25lR2VvbWV0cnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEseURBQXlEO0FBQ3pELHlDQUF5QztBQUN6QywrRkFBK0Y7QUFDL0YsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixTQUFTLEVBRVQsVUFBVSxHQUNYLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxPQUFPLENBQUM7QUFDckMsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDdEQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7O0FBYTFELE1BQU0sT0FBTyxjQVdYLFNBQVEsa0JBQTRCO0lBQzdCLE9BQU87UUFDWixPQUFPLFlBQVksQ0FBQztJQUN0QixDQUFDO0lBRUQsSUFBVyxJQUFJO1FBQ2IsT0FBTyxJQUFJLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQztJQUM1QixDQUFDO0lBQ0QsSUFBVyxVQUFVO1FBYW5CLE9BQU8sSUFBSSxDQUFDLE9BQU8sRUFBRSxVQUFVLENBQUM7SUFDbEMsQ0FBQzs4R0FqQ1UsY0FBYztrR0FBZCxjQUFjLDBDQVBkO1lBQ1Q7Z0JBQ0UsT0FBTyxFQUFFLGdCQUFnQjtnQkFDekIsV0FBVyxFQUFFLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxjQUFjLENBQUM7YUFDOUM7U0FDRixpREFQUyxlQUFlOzsyRkFTZCxjQUFjO2tCQVgxQixTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxpQkFBaUI7b0JBQzNCLFFBQVEsRUFBRSxlQUFlO29CQUN6QixlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtvQkFDL0MsU0FBUyxFQUFFO3dCQUNUOzRCQUNFLE9BQU8sRUFBRSxnQkFBZ0I7NEJBQ3pCLFdBQVcsRUFBRSxVQUFVLENBQUMsR0FBRyxFQUFFLGVBQWUsQ0FBQzt5QkFDOUM7cUJBQ0Y7aUJBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBAdHlwZXNjcmlwdC1lc2xpbnQvbmFtaW5nLWNvbnZlbnRpb24gKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vLXVuZGVyc2NvcmUtZGFuZ2xlICovXG4vKiBlc2xpbnQtZGlzYWJsZSBAYW5ndWxhci1lc2xpbnQvY29tcG9uZW50LXNlbGVjdG9yLCBAYW5ndWxhci1lc2xpbnQvY29tcG9uZW50LWNsYXNzLXN1ZmZpeCAqL1xuaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENvbXBvbmVudCxcbiAgVHlwZSxcbiAgZm9yd2FyZFJlZixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb25lR2VvbWV0cnkgfSBmcm9tICd0aHJlZSc7XG5pbXBvcnQgeyBUaEJ1ZmZlckdlb21ldHJ5IH0gZnJvbSAnLi9UaEJ1ZmZlckdlb21ldHJ5JztcbmltcG9ydCB7IFRoQ3lsaW5kZXJHZW9tZXRyeSB9IGZyb20gJy4vVGhDeWxpbmRlckdlb21ldHJ5JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndGgtY29uZUdlb21ldHJ5JyxcbiAgdGVtcGxhdGU6ICc8bmctY29udGVudC8+JyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHByb3ZpZGVyczogW1xuICAgIHtcbiAgICAgIHByb3ZpZGU6IFRoQnVmZmVyR2VvbWV0cnksXG4gICAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBUaENvbmVHZW9tZXRyeSksXG4gICAgfSxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgVGhDb25lR2VvbWV0cnk8XG4gIFQgZXh0ZW5kcyBDb25lR2VvbWV0cnkgPSBDb25lR2VvbWV0cnksXG4gIFRBUkdTID0gW1xuICAgIHJhZGl1cz86IG51bWJlcixcbiAgICBoZWlnaHQ/OiBudW1iZXIsXG4gICAgcmFkaWFsU2VnbWVudHM/OiBudW1iZXIsXG4gICAgaGVpZ2h0U2VnbWVudHM/OiBudW1iZXIsXG4gICAgb3BlbkVuZGVkPzogYm9vbGVhbixcbiAgICB0aGV0YVN0YXJ0PzogbnVtYmVyLFxuICAgIHRoZXRhTGVuZ3RoPzogbnVtYmVyLFxuICBdLFxuPiBleHRlbmRzIFRoQ3lsaW5kZXJHZW9tZXRyeTxULCBUQVJHUz4ge1xuICBwdWJsaWMgZ2V0VHlwZSgpOiBUeXBlPENvbmVHZW9tZXRyeT4ge1xuICAgIHJldHVybiBDb25lR2VvbWV0cnk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IHR5cGUoKTogKHN0cmluZyB8ICdDb25lR2VvbWV0cnknKSB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX29ialJlZj8udHlwZTtcbiAgfVxuICBwdWJsaWMgZ2V0IHBhcmFtZXRlcnMoKTpcbiAgICB8IHtcbiAgICAgICAgcmVhZG9ubHkgcmFkaXVzOiBudW1iZXI7XG4gICAgICAgIHJlYWRvbmx5IHJhZGl1c1RvcDogbnVtYmVyO1xuICAgICAgICByZWFkb25seSByYWRpdXNCb3R0b206IG51bWJlcjtcbiAgICAgICAgcmVhZG9ubHkgaGVpZ2h0OiBudW1iZXI7XG4gICAgICAgIHJlYWRvbmx5IHJhZGlhbFNlZ21lbnRzOiBudW1iZXI7XG4gICAgICAgIHJlYWRvbmx5IGhlaWdodFNlZ21lbnRzOiBudW1iZXI7XG4gICAgICAgIHJlYWRvbmx5IG9wZW5FbmRlZDogYm9vbGVhbjtcbiAgICAgICAgcmVhZG9ubHkgdGhldGFTdGFydDogbnVtYmVyO1xuICAgICAgICByZWFkb25seSB0aGV0YUxlbmd0aDogbnVtYmVyO1xuICAgICAgfVxuICAgIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fb2JqUmVmPy5wYXJhbWV0ZXJzO1xuICB9XG59XG4iXX0=