/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix */
import { ChangeDetectionStrategy, Component, forwardRef, } from '@angular/core';
import { BoxGeometry } from 'three';
import { ThBufferGeometry } from './ThBufferGeometry';
import * as i0 from "@angular/core";
export class ThBoxGeometry extends ThBufferGeometry {
    getType() {
        return BoxGeometry;
    }
    get type() {
        return this._objRef?.type;
    }
    get parameters() {
        return this._objRef?.parameters;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThBoxGeometry, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.1.2", type: ThBoxGeometry, selector: "th-boxGeometry", providers: [
            { provide: ThBufferGeometry, useExisting: forwardRef(() => ThBoxGeometry) },
        ], usesInheritance: true, ngImport: i0, template: '<ng-content/>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThBoxGeometry, decorators: [{
            type: Component,
            args: [{
                    selector: 'th-boxGeometry',
                    template: '<ng-content/>',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    providers: [
                        { provide: ThBufferGeometry, useExisting: forwardRef(() => ThBoxGeometry) },
                    ],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGhCb3hHZW9tZXRyeS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC10aHJlZS9zcmMvbGliL2dlbmVyYXRlZC9UaEJveEdlb21ldHJ5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHlEQUF5RDtBQUN6RCx5Q0FBeUM7QUFDekMsK0ZBQStGO0FBQy9GLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUVULFVBQVUsR0FDWCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsV0FBVyxFQUEwQixNQUFNLE9BQU8sQ0FBQztBQUM1RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQzs7QUFVdEQsTUFBTSxPQUFPLGFBVVgsU0FBUSxnQkFBa0Q7SUFDbkQsT0FBTztRQUNaLE9BQU8sV0FBVyxDQUFDO0lBQ3JCLENBQUM7SUFFRCxJQUFXLElBQUk7UUFDYixPQUFPLElBQUksQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDO0lBQzVCLENBQUM7SUFDRCxJQUFXLFVBQVU7UUFVbkIsT0FBTyxJQUFJLENBQUMsT0FBTyxFQUFFLFVBQVUsQ0FBQztJQUNsQyxDQUFDOzhHQTdCVSxhQUFhO2tHQUFiLGFBQWEseUNBSmI7WUFDVCxFQUFFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxXQUFXLEVBQUUsVUFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDLGFBQWEsQ0FBQyxFQUFFO1NBQzVFLGlEQUpTLGVBQWU7OzJGQU1kLGFBQWE7a0JBUnpCLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLGdCQUFnQjtvQkFDMUIsUUFBUSxFQUFFLGVBQWU7b0JBQ3pCLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO29CQUMvQyxTQUFTLEVBQUU7d0JBQ1QsRUFBRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsV0FBVyxFQUFFLFVBQVUsQ0FBQyxHQUFHLEVBQUUsY0FBYyxDQUFDLEVBQUU7cUJBQzVFO2lCQUNGIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgQHR5cGVzY3JpcHQtZXNsaW50L25hbWluZy1jb252ZW50aW9uICovXG4vKiBlc2xpbnQtZGlzYWJsZSBuby11bmRlcnNjb3JlLWRhbmdsZSAqL1xuLyogZXNsaW50LWRpc2FibGUgQGFuZ3VsYXItZXNsaW50L2NvbXBvbmVudC1zZWxlY3RvciwgQGFuZ3VsYXItZXNsaW50L2NvbXBvbmVudC1jbGFzcy1zdWZmaXggKi9cbmltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDb21wb25lbnQsXG4gIFR5cGUsXG4gIGZvcndhcmRSZWYsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQm94R2VvbWV0cnksIE5vcm1hbEJ1ZmZlckF0dHJpYnV0ZXMgfSBmcm9tICd0aHJlZSc7XG5pbXBvcnQgeyBUaEJ1ZmZlckdlb21ldHJ5IH0gZnJvbSAnLi9UaEJ1ZmZlckdlb21ldHJ5JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndGgtYm94R2VvbWV0cnknLFxuICB0ZW1wbGF0ZTogJzxuZy1jb250ZW50Lz4nLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgcHJvdmlkZXJzOiBbXG4gICAgeyBwcm92aWRlOiBUaEJ1ZmZlckdlb21ldHJ5LCB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBUaEJveEdlb21ldHJ5KSB9LFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBUaEJveEdlb21ldHJ5PFxuICBUIGV4dGVuZHMgQm94R2VvbWV0cnkgPSBCb3hHZW9tZXRyeSxcbiAgVEFSR1MgPSBbXG4gICAgd2lkdGg/OiBudW1iZXIsXG4gICAgaGVpZ2h0PzogbnVtYmVyLFxuICAgIGRlcHRoPzogbnVtYmVyLFxuICAgIHdpZHRoU2VnbWVudHM/OiBudW1iZXIsXG4gICAgaGVpZ2h0U2VnbWVudHM/OiBudW1iZXIsXG4gICAgZGVwdGhTZWdtZW50cz86IG51bWJlcixcbiAgXSxcbj4gZXh0ZW5kcyBUaEJ1ZmZlckdlb21ldHJ5PE5vcm1hbEJ1ZmZlckF0dHJpYnV0ZXMsIFQsIFRBUkdTPiB7XG4gIHB1YmxpYyBnZXRUeXBlKCk6IFR5cGU8Qm94R2VvbWV0cnk+IHtcbiAgICByZXR1cm4gQm94R2VvbWV0cnk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IHR5cGUoKTogKHN0cmluZyB8ICdCb3hHZW9tZXRyeScpIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fb2JqUmVmPy50eXBlO1xuICB9XG4gIHB1YmxpYyBnZXQgcGFyYW1ldGVycygpOlxuICAgIHwge1xuICAgICAgICByZWFkb25seSB3aWR0aDogbnVtYmVyO1xuICAgICAgICByZWFkb25seSBoZWlnaHQ6IG51bWJlcjtcbiAgICAgICAgcmVhZG9ubHkgZGVwdGg6IG51bWJlcjtcbiAgICAgICAgcmVhZG9ubHkgd2lkdGhTZWdtZW50czogbnVtYmVyO1xuICAgICAgICByZWFkb25seSBoZWlnaHRTZWdtZW50czogbnVtYmVyO1xuICAgICAgICByZWFkb25seSBkZXB0aFNlZ21lbnRzOiBudW1iZXI7XG4gICAgICB9XG4gICAgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9vYmpSZWY/LnBhcmFtZXRlcnM7XG4gIH1cbn1cbiJdfQ==