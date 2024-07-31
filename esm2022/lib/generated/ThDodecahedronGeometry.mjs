/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix */
import { ChangeDetectionStrategy, Component, forwardRef, } from '@angular/core';
import { DodecahedronGeometry } from 'three';
import { ThBufferGeometry } from './ThBufferGeometry';
import { ThPolyhedronGeometry } from './ThPolyhedronGeometry';
import * as i0 from "@angular/core";
export class ThDodecahedronGeometry extends ThPolyhedronGeometry {
    getType() {
        return DodecahedronGeometry;
    }
    get type() {
        return this._objRef?.type;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThDodecahedronGeometry, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.1.2", type: ThDodecahedronGeometry, selector: "th-dodecahedronGeometry", providers: [
            {
                provide: ThBufferGeometry,
                useExisting: forwardRef(() => ThDodecahedronGeometry),
            },
        ], usesInheritance: true, ngImport: i0, template: '<ng-content/>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThDodecahedronGeometry, decorators: [{
            type: Component,
            args: [{
                    selector: 'th-dodecahedronGeometry',
                    template: '<ng-content/>',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    providers: [
                        {
                            provide: ThBufferGeometry,
                            useExisting: forwardRef(() => ThDodecahedronGeometry),
                        },
                    ],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGhEb2RlY2FoZWRyb25HZW9tZXRyeS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC10aHJlZS9zcmMvbGliL2dlbmVyYXRlZC9UaERvZGVjYWhlZHJvbkdlb21ldHJ5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHlEQUF5RDtBQUN6RCx5Q0FBeUM7QUFDekMsK0ZBQStGO0FBQy9GLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUVULFVBQVUsR0FDWCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxPQUFPLENBQUM7QUFDN0MsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDdEQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7O0FBYTlELE1BQU0sT0FBTyxzQkFHWCxTQUFRLG9CQUE4QjtJQUMvQixPQUFPO1FBQ1osT0FBTyxvQkFBb0IsQ0FBQztJQUM5QixDQUFDO0lBRUQsSUFBVyxJQUFJO1FBQ2IsT0FBTyxJQUFJLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQztJQUM1QixDQUFDOzhHQVZVLHNCQUFzQjtrR0FBdEIsc0JBQXNCLGtEQVB0QjtZQUNUO2dCQUNFLE9BQU8sRUFBRSxnQkFBZ0I7Z0JBQ3pCLFdBQVcsRUFBRSxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsc0JBQXNCLENBQUM7YUFDdEQ7U0FDRixpREFQUyxlQUFlOzsyRkFTZCxzQkFBc0I7a0JBWGxDLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLHlCQUF5QjtvQkFDbkMsUUFBUSxFQUFFLGVBQWU7b0JBQ3pCLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO29CQUMvQyxTQUFTLEVBQUU7d0JBQ1Q7NEJBQ0UsT0FBTyxFQUFFLGdCQUFnQjs0QkFDekIsV0FBVyxFQUFFLFVBQVUsQ0FBQyxHQUFHLEVBQUUsdUJBQXVCLENBQUM7eUJBQ3REO3FCQUNGO2lCQUNGIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgQHR5cGVzY3JpcHQtZXNsaW50L25hbWluZy1jb252ZW50aW9uICovXG4vKiBlc2xpbnQtZGlzYWJsZSBuby11bmRlcnNjb3JlLWRhbmdsZSAqL1xuLyogZXNsaW50LWRpc2FibGUgQGFuZ3VsYXItZXNsaW50L2NvbXBvbmVudC1zZWxlY3RvciwgQGFuZ3VsYXItZXNsaW50L2NvbXBvbmVudC1jbGFzcy1zdWZmaXggKi9cbmltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDb21wb25lbnQsXG4gIFR5cGUsXG4gIGZvcndhcmRSZWYsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRG9kZWNhaGVkcm9uR2VvbWV0cnkgfSBmcm9tICd0aHJlZSc7XG5pbXBvcnQgeyBUaEJ1ZmZlckdlb21ldHJ5IH0gZnJvbSAnLi9UaEJ1ZmZlckdlb21ldHJ5JztcbmltcG9ydCB7IFRoUG9seWhlZHJvbkdlb21ldHJ5IH0gZnJvbSAnLi9UaFBvbHloZWRyb25HZW9tZXRyeSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3RoLWRvZGVjYWhlZHJvbkdlb21ldHJ5JyxcbiAgdGVtcGxhdGU6ICc8bmctY29udGVudC8+JyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHByb3ZpZGVyczogW1xuICAgIHtcbiAgICAgIHByb3ZpZGU6IFRoQnVmZmVyR2VvbWV0cnksXG4gICAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBUaERvZGVjYWhlZHJvbkdlb21ldHJ5KSxcbiAgICB9LFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBUaERvZGVjYWhlZHJvbkdlb21ldHJ5PFxuICBUIGV4dGVuZHMgRG9kZWNhaGVkcm9uR2VvbWV0cnkgPSBEb2RlY2FoZWRyb25HZW9tZXRyeSxcbiAgVEFSR1MgPSBbcmFkaXVzPzogbnVtYmVyLCBkZXRhaWw/OiBudW1iZXJdLFxuPiBleHRlbmRzIFRoUG9seWhlZHJvbkdlb21ldHJ5PFQsIFRBUkdTPiB7XG4gIHB1YmxpYyBnZXRUeXBlKCk6IFR5cGU8RG9kZWNhaGVkcm9uR2VvbWV0cnk+IHtcbiAgICByZXR1cm4gRG9kZWNhaGVkcm9uR2VvbWV0cnk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IHR5cGUoKTogKHN0cmluZyB8ICdEb2RlY2FoZWRyb25HZW9tZXRyeScpIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fb2JqUmVmPy50eXBlO1xuICB9XG59XG4iXX0=