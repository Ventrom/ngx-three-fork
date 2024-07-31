/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix */
import { ChangeDetectionStrategy, Component, forwardRef, } from '@angular/core';
import { TorusKnotGeometry } from 'three';
import { ThBufferGeometry } from './ThBufferGeometry';
import * as i0 from "@angular/core";
export class ThTorusKnotGeometry extends ThBufferGeometry {
    getType() {
        return TorusKnotGeometry;
    }
    get type() {
        return this._objRef?.type;
    }
    get parameters() {
        return this._objRef?.parameters;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThTorusKnotGeometry, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.1.2", type: ThTorusKnotGeometry, selector: "th-torusKnotGeometry", providers: [
            {
                provide: ThBufferGeometry,
                useExisting: forwardRef(() => ThTorusKnotGeometry),
            },
        ], usesInheritance: true, ngImport: i0, template: '<ng-content/>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThTorusKnotGeometry, decorators: [{
            type: Component,
            args: [{
                    selector: 'th-torusKnotGeometry',
                    template: '<ng-content/>',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    providers: [
                        {
                            provide: ThBufferGeometry,
                            useExisting: forwardRef(() => ThTorusKnotGeometry),
                        },
                    ],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGhUb3J1c0tub3RHZW9tZXRyeS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC10aHJlZS9zcmMvbGliL2dlbmVyYXRlZC9UaFRvcnVzS25vdEdlb21ldHJ5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHlEQUF5RDtBQUN6RCx5Q0FBeUM7QUFDekMsK0ZBQStGO0FBQy9GLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUVULFVBQVUsR0FDWCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQTBCLGlCQUFpQixFQUFFLE1BQU0sT0FBTyxDQUFDO0FBQ2xFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLG9CQUFvQixDQUFDOztBQWF0RCxNQUFNLE9BQU8sbUJBVVgsU0FBUSxnQkFBa0Q7SUFDbkQsT0FBTztRQUNaLE9BQU8saUJBQWlCLENBQUM7SUFDM0IsQ0FBQztJQUVELElBQVcsSUFBSTtRQUNiLE9BQU8sSUFBSSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUM7SUFDNUIsQ0FBQztJQUNELElBQVcsVUFBVTtRQVVuQixPQUFPLElBQUksQ0FBQyxPQUFPLEVBQUUsVUFBVSxDQUFDO0lBQ2xDLENBQUM7OEdBN0JVLG1CQUFtQjtrR0FBbkIsbUJBQW1CLCtDQVBuQjtZQUNUO2dCQUNFLE9BQU8sRUFBRSxnQkFBZ0I7Z0JBQ3pCLFdBQVcsRUFBRSxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsbUJBQW1CLENBQUM7YUFDbkQ7U0FDRixpREFQUyxlQUFlOzsyRkFTZCxtQkFBbUI7a0JBWC9CLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLHNCQUFzQjtvQkFDaEMsUUFBUSxFQUFFLGVBQWU7b0JBQ3pCLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO29CQUMvQyxTQUFTLEVBQUU7d0JBQ1Q7NEJBQ0UsT0FBTyxFQUFFLGdCQUFnQjs0QkFDekIsV0FBVyxFQUFFLFVBQVUsQ0FBQyxHQUFHLEVBQUUsb0JBQW9CLENBQUM7eUJBQ25EO3FCQUNGO2lCQUNGIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgQHR5cGVzY3JpcHQtZXNsaW50L25hbWluZy1jb252ZW50aW9uICovXG4vKiBlc2xpbnQtZGlzYWJsZSBuby11bmRlcnNjb3JlLWRhbmdsZSAqL1xuLyogZXNsaW50LWRpc2FibGUgQGFuZ3VsYXItZXNsaW50L2NvbXBvbmVudC1zZWxlY3RvciwgQGFuZ3VsYXItZXNsaW50L2NvbXBvbmVudC1jbGFzcy1zdWZmaXggKi9cbmltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDb21wb25lbnQsXG4gIFR5cGUsXG4gIGZvcndhcmRSZWYsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTm9ybWFsQnVmZmVyQXR0cmlidXRlcywgVG9ydXNLbm90R2VvbWV0cnkgfSBmcm9tICd0aHJlZSc7XG5pbXBvcnQgeyBUaEJ1ZmZlckdlb21ldHJ5IH0gZnJvbSAnLi9UaEJ1ZmZlckdlb21ldHJ5JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndGgtdG9ydXNLbm90R2VvbWV0cnknLFxuICB0ZW1wbGF0ZTogJzxuZy1jb250ZW50Lz4nLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgcHJvdmlkZXJzOiBbXG4gICAge1xuICAgICAgcHJvdmlkZTogVGhCdWZmZXJHZW9tZXRyeSxcbiAgICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IFRoVG9ydXNLbm90R2VvbWV0cnkpLFxuICAgIH0sXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIFRoVG9ydXNLbm90R2VvbWV0cnk8XG4gIFQgZXh0ZW5kcyBUb3J1c0tub3RHZW9tZXRyeSA9IFRvcnVzS25vdEdlb21ldHJ5LFxuICBUQVJHUyA9IFtcbiAgICByYWRpdXM/OiBudW1iZXIsXG4gICAgdHViZT86IG51bWJlcixcbiAgICB0dWJ1bGFyU2VnbWVudHM/OiBudW1iZXIsXG4gICAgcmFkaWFsU2VnbWVudHM/OiBudW1iZXIsXG4gICAgcD86IG51bWJlcixcbiAgICBxPzogbnVtYmVyLFxuICBdLFxuPiBleHRlbmRzIFRoQnVmZmVyR2VvbWV0cnk8Tm9ybWFsQnVmZmVyQXR0cmlidXRlcywgVCwgVEFSR1M+IHtcbiAgcHVibGljIGdldFR5cGUoKTogVHlwZTxUb3J1c0tub3RHZW9tZXRyeT4ge1xuICAgIHJldHVybiBUb3J1c0tub3RHZW9tZXRyeTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgdHlwZSgpOiAoc3RyaW5nIHwgJ1RvcnVzS25vdEdlb21ldHJ5JykgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9vYmpSZWY/LnR5cGU7XG4gIH1cbiAgcHVibGljIGdldCBwYXJhbWV0ZXJzKCk6XG4gICAgfCB7XG4gICAgICAgIHJlYWRvbmx5IHJhZGl1czogbnVtYmVyO1xuICAgICAgICByZWFkb25seSB0dWJlOiBudW1iZXI7XG4gICAgICAgIHJlYWRvbmx5IHR1YnVsYXJTZWdtZW50czogbnVtYmVyO1xuICAgICAgICByZWFkb25seSByYWRpYWxTZWdtZW50czogbnVtYmVyO1xuICAgICAgICByZWFkb25seSBwOiBudW1iZXI7XG4gICAgICAgIHJlYWRvbmx5IHE6IG51bWJlcjtcbiAgICAgIH1cbiAgICB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX29ialJlZj8ucGFyYW1ldGVycztcbiAgfVxufVxuIl19