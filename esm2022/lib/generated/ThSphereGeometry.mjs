/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix */
import { ChangeDetectionStrategy, Component, forwardRef, } from '@angular/core';
import { SphereGeometry } from 'three';
import { ThBufferGeometry } from './ThBufferGeometry';
import * as i0 from "@angular/core";
export class ThSphereGeometry extends ThBufferGeometry {
    getType() {
        return SphereGeometry;
    }
    get type() {
        return this._objRef?.type;
    }
    get parameters() {
        return this._objRef?.parameters;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThSphereGeometry, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.1.2", type: ThSphereGeometry, selector: "th-sphereGeometry", providers: [
            {
                provide: ThBufferGeometry,
                useExisting: forwardRef(() => ThSphereGeometry),
            },
        ], usesInheritance: true, ngImport: i0, template: '<ng-content/>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThSphereGeometry, decorators: [{
            type: Component,
            args: [{
                    selector: 'th-sphereGeometry',
                    template: '<ng-content/>',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    providers: [
                        {
                            provide: ThBufferGeometry,
                            useExisting: forwardRef(() => ThSphereGeometry),
                        },
                    ],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGhTcGhlcmVHZW9tZXRyeS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC10aHJlZS9zcmMvbGliL2dlbmVyYXRlZC9UaFNwaGVyZUdlb21ldHJ5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHlEQUF5RDtBQUN6RCx5Q0FBeUM7QUFDekMsK0ZBQStGO0FBQy9GLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUVULFVBQVUsR0FDWCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQTBCLGNBQWMsRUFBRSxNQUFNLE9BQU8sQ0FBQztBQUMvRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQzs7QUFhdEQsTUFBTSxPQUFPLGdCQVdYLFNBQVEsZ0JBQWtEO0lBQ25ELE9BQU87UUFDWixPQUFPLGNBQWMsQ0FBQztJQUN4QixDQUFDO0lBRUQsSUFBVyxJQUFJO1FBQ2IsT0FBTyxJQUFJLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQztJQUM1QixDQUFDO0lBQ0QsSUFBVyxVQUFVO1FBV25CLE9BQU8sSUFBSSxDQUFDLE9BQU8sRUFBRSxVQUFVLENBQUM7SUFDbEMsQ0FBQzs4R0EvQlUsZ0JBQWdCO2tHQUFoQixnQkFBZ0IsNENBUGhCO1lBQ1Q7Z0JBQ0UsT0FBTyxFQUFFLGdCQUFnQjtnQkFDekIsV0FBVyxFQUFFLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQzthQUNoRDtTQUNGLGlEQVBTLGVBQWU7OzJGQVNkLGdCQUFnQjtrQkFYNUIsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsbUJBQW1CO29CQUM3QixRQUFRLEVBQUUsZUFBZTtvQkFDekIsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07b0JBQy9DLFNBQVMsRUFBRTt3QkFDVDs0QkFDRSxPQUFPLEVBQUUsZ0JBQWdCOzRCQUN6QixXQUFXLEVBQUUsVUFBVSxDQUFDLEdBQUcsRUFBRSxpQkFBaUIsQ0FBQzt5QkFDaEQ7cUJBQ0Y7aUJBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBAdHlwZXNjcmlwdC1lc2xpbnQvbmFtaW5nLWNvbnZlbnRpb24gKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vLXVuZGVyc2NvcmUtZGFuZ2xlICovXG4vKiBlc2xpbnQtZGlzYWJsZSBAYW5ndWxhci1lc2xpbnQvY29tcG9uZW50LXNlbGVjdG9yLCBAYW5ndWxhci1lc2xpbnQvY29tcG9uZW50LWNsYXNzLXN1ZmZpeCAqL1xuaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENvbXBvbmVudCxcbiAgVHlwZSxcbiAgZm9yd2FyZFJlZixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOb3JtYWxCdWZmZXJBdHRyaWJ1dGVzLCBTcGhlcmVHZW9tZXRyeSB9IGZyb20gJ3RocmVlJztcbmltcG9ydCB7IFRoQnVmZmVyR2VvbWV0cnkgfSBmcm9tICcuL1RoQnVmZmVyR2VvbWV0cnknO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0aC1zcGhlcmVHZW9tZXRyeScsXG4gIHRlbXBsYXRlOiAnPG5nLWNvbnRlbnQvPicsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBwcm92aWRlcnM6IFtcbiAgICB7XG4gICAgICBwcm92aWRlOiBUaEJ1ZmZlckdlb21ldHJ5LFxuICAgICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gVGhTcGhlcmVHZW9tZXRyeSksXG4gICAgfSxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgVGhTcGhlcmVHZW9tZXRyeTxcbiAgVCBleHRlbmRzIFNwaGVyZUdlb21ldHJ5ID0gU3BoZXJlR2VvbWV0cnksXG4gIFRBUkdTID0gW1xuICAgIHJhZGl1cz86IG51bWJlcixcbiAgICB3aWR0aFNlZ21lbnRzPzogbnVtYmVyLFxuICAgIGhlaWdodFNlZ21lbnRzPzogbnVtYmVyLFxuICAgIHBoaVN0YXJ0PzogbnVtYmVyLFxuICAgIHBoaUxlbmd0aD86IG51bWJlcixcbiAgICB0aGV0YVN0YXJ0PzogbnVtYmVyLFxuICAgIHRoZXRhTGVuZ3RoPzogbnVtYmVyLFxuICBdLFxuPiBleHRlbmRzIFRoQnVmZmVyR2VvbWV0cnk8Tm9ybWFsQnVmZmVyQXR0cmlidXRlcywgVCwgVEFSR1M+IHtcbiAgcHVibGljIGdldFR5cGUoKTogVHlwZTxTcGhlcmVHZW9tZXRyeT4ge1xuICAgIHJldHVybiBTcGhlcmVHZW9tZXRyeTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgdHlwZSgpOiAoc3RyaW5nIHwgJ1NwaGVyZUdlb21ldHJ5JykgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9vYmpSZWY/LnR5cGU7XG4gIH1cbiAgcHVibGljIGdldCBwYXJhbWV0ZXJzKCk6XG4gICAgfCB7XG4gICAgICAgIHJlYWRvbmx5IHJhZGl1czogbnVtYmVyO1xuICAgICAgICByZWFkb25seSB3aWR0aFNlZ21lbnRzOiBudW1iZXI7XG4gICAgICAgIHJlYWRvbmx5IGhlaWdodFNlZ21lbnRzOiBudW1iZXI7XG4gICAgICAgIHJlYWRvbmx5IHBoaVN0YXJ0OiBudW1iZXI7XG4gICAgICAgIHJlYWRvbmx5IHBoaUxlbmd0aDogbnVtYmVyO1xuICAgICAgICByZWFkb25seSB0aGV0YVN0YXJ0OiBudW1iZXI7XG4gICAgICAgIHJlYWRvbmx5IHRoZXRhTGVuZ3RoOiBudW1iZXI7XG4gICAgICB9XG4gICAgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9vYmpSZWY/LnBhcmFtZXRlcnM7XG4gIH1cbn1cbiJdfQ==