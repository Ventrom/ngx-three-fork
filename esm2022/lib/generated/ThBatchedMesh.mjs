/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix */
import { ChangeDetectionStrategy, Component, Input, forwardRef } from '@angular/core';
import { BatchedMesh } from 'three';
import { applyValue } from '../util';
import { ThMesh } from './ThMesh';
import { ThObject3D } from './ThObject3D';
import * as i0 from "@angular/core";
export class ThBatchedMesh extends ThMesh {
    getType() {
        return BatchedMesh;
    }
    set boundingBox(value) {
        if (this._objRef) {
            this._objRef.boundingBox = applyValue(this._objRef.boundingBox, value);
        }
    }
    get boundingBox() {
        return this._objRef?.boundingBox;
    }
    set boundingSphere(value) {
        if (this._objRef) {
            this._objRef.boundingSphere = applyValue(this._objRef.boundingSphere, value);
        }
    }
    get boundingSphere() {
        return this._objRef?.boundingSphere;
    }
    set customSort(value) {
        if (this._objRef) {
            this._objRef.customSort = value;
        }
    }
    get customSort() {
        return this._objRef?.customSort;
    }
    set perObjectFrustumCulled(value) {
        if (this._objRef) {
            this._objRef.perObjectFrustumCulled = value;
        }
    }
    get perObjectFrustumCulled() {
        return this._objRef?.perObjectFrustumCulled;
    }
    set sortObjects(value) {
        if (this._objRef) {
            this._objRef.sortObjects = value;
        }
    }
    get sortObjects() {
        return this._objRef?.sortObjects;
    }
    get maxGeometryCount() {
        return this._objRef?.maxGeometryCount;
    }
    set isBatchedMesh(value) {
        if (this._objRef) {
            this._objRef.isBatchedMesh = value;
        }
    }
    get isBatchedMesh() {
        return this._objRef?.isBatchedMesh;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThBatchedMesh, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.1.2", type: ThBatchedMesh, selector: "th-batchedMesh", inputs: { boundingBox: "boundingBox", boundingSphere: "boundingSphere", customSort: "customSort", perObjectFrustumCulled: "perObjectFrustumCulled", sortObjects: "sortObjects", isBatchedMesh: "isBatchedMesh" }, providers: [{ provide: ThObject3D, useExisting: forwardRef(() => ThBatchedMesh) }], usesInheritance: true, ngImport: i0, template: '<ng-content/>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThBatchedMesh, decorators: [{
            type: Component,
            args: [{
                    selector: 'th-batchedMesh',
                    template: '<ng-content/>',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    providers: [{ provide: ThObject3D, useExisting: forwardRef(() => ThBatchedMesh) }],
                }]
        }], propDecorators: { boundingBox: [{
                type: Input
            }], boundingSphere: [{
                type: Input
            }], customSort: [{
                type: Input
            }], perObjectFrustumCulled: [{
                type: Input
            }], sortObjects: [{
                type: Input
            }], isBatchedMesh: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGhCYXRjaGVkTWVzaC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC10aHJlZS9zcmMvbGliL2dlbmVyYXRlZC9UaEJhdGNoZWRNZXNoLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHlEQUF5RDtBQUN6RCx5Q0FBeUM7QUFDekMsK0ZBQStGO0FBQy9GLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFRLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM1RixPQUFPLEVBQUUsV0FBVyxFQUE2RSxNQUFNLE9BQU8sQ0FBQztBQUMvRyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sU0FBUyxDQUFDO0FBQ3JDLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxVQUFVLENBQUM7QUFDbEMsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGNBQWMsQ0FBQzs7QUFRMUMsTUFBTSxPQUFPLGFBR1gsU0FBUSxNQUE0RDtJQUM3RCxPQUFPO1FBQ1osT0FBTyxXQUFXLENBQUM7SUFDckIsQ0FBQztJQUVELElBQ1csV0FBVyxDQUFDLEtBQWlEO1FBQ3RFLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ2pCLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxHQUFHLFVBQVUsQ0FBYyxJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUN0RixDQUFDO0lBQ0gsQ0FBQztJQUNELElBQVcsV0FBVztRQUNwQixPQUFPLElBQUksQ0FBQyxPQUFPLEVBQUUsV0FBVyxDQUFDO0lBQ25DLENBQUM7SUFDRCxJQUNXLGNBQWMsQ0FBQyxLQUF3RDtRQUNoRixJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUNqQixJQUFJLENBQUMsT0FBTyxDQUFDLGNBQWMsR0FBRyxVQUFVLENBQWdCLElBQUksQ0FBQyxPQUFPLENBQUMsY0FBYyxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQzlGLENBQUM7SUFDSCxDQUFDO0lBQ0QsSUFBVyxjQUFjO1FBQ3ZCLE9BQU8sSUFBSSxDQUFDLE9BQU8sRUFBRSxjQUFjLENBQUM7SUFDdEMsQ0FBQztJQUNELElBQ1csVUFBVSxDQUNuQixLQUE2RztRQUU3RyxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUNqQixJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7UUFDbEMsQ0FBQztJQUNILENBQUM7SUFFRCxJQUFXLFVBQVU7UUFHbkIsT0FBTyxJQUFJLENBQUMsT0FBTyxFQUFFLFVBQVUsQ0FBQztJQUNsQyxDQUFDO0lBQ0QsSUFDVyxzQkFBc0IsQ0FBQyxLQUFjO1FBQzlDLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ2pCLElBQUksQ0FBQyxPQUFPLENBQUMsc0JBQXNCLEdBQUcsS0FBSyxDQUFDO1FBQzlDLENBQUM7SUFDSCxDQUFDO0lBRUQsSUFBVyxzQkFBc0I7UUFDL0IsT0FBTyxJQUFJLENBQUMsT0FBTyxFQUFFLHNCQUFzQixDQUFDO0lBQzlDLENBQUM7SUFDRCxJQUNXLFdBQVcsQ0FBQyxLQUFjO1FBQ25DLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ2pCLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQztRQUNuQyxDQUFDO0lBQ0gsQ0FBQztJQUVELElBQVcsV0FBVztRQUNwQixPQUFPLElBQUksQ0FBQyxPQUFPLEVBQUUsV0FBVyxDQUFDO0lBQ25DLENBQUM7SUFDRCxJQUFXLGdCQUFnQjtRQUN6QixPQUFPLElBQUksQ0FBQyxPQUFPLEVBQUUsZ0JBQWdCLENBQUM7SUFDeEMsQ0FBQztJQUNELElBQ1csYUFBYSxDQUFDLEtBQVc7UUFDbEMsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDakIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO1FBQ3JDLENBQUM7SUFDSCxDQUFDO0lBRUQsSUFBVyxhQUFhO1FBQ3RCLE9BQU8sSUFBSSxDQUFDLE9BQU8sRUFBRSxhQUFhLENBQUM7SUFDckMsQ0FBQzs4R0F4RVUsYUFBYTtrR0FBYixhQUFhLDJQQUZiLENBQUMsRUFBRSxPQUFPLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRSxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsYUFBYSxDQUFDLEVBQUUsQ0FBQyxpREFGeEUsZUFBZTs7MkZBSWQsYUFBYTtrQkFOekIsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsZ0JBQWdCO29CQUMxQixRQUFRLEVBQUUsZUFBZTtvQkFDekIsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07b0JBQy9DLFNBQVMsRUFBRSxDQUFDLEVBQUUsT0FBTyxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUUsVUFBVSxDQUFDLEdBQUcsRUFBRSxjQUFjLENBQUMsRUFBRSxDQUFDO2lCQUNuRjs4QkFVWSxXQUFXO3NCQURyQixLQUFLO2dCQVVLLGNBQWM7c0JBRHhCLEtBQUs7Z0JBVUssVUFBVTtzQkFEcEIsS0FBSztnQkFlSyxzQkFBc0I7c0JBRGhDLEtBQUs7Z0JBV0ssV0FBVztzQkFEckIsS0FBSztnQkFjSyxhQUFhO3NCQUR2QixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgQHR5cGVzY3JpcHQtZXNsaW50L25hbWluZy1jb252ZW50aW9uICovXG4vKiBlc2xpbnQtZGlzYWJsZSBuby11bmRlcnNjb3JlLWRhbmdsZSAqL1xuLyogZXNsaW50LWRpc2FibGUgQGFuZ3VsYXItZXNsaW50L2NvbXBvbmVudC1zZWxlY3RvciwgQGFuZ3VsYXItZXNsaW50L2NvbXBvbmVudC1jbGFzcy1zdWZmaXggKi9cbmltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIElucHV0LCBUeXBlLCBmb3J3YXJkUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCYXRjaGVkTWVzaCwgQm94MywgQnVmZmVyR2VvbWV0cnksIENhbWVyYSwgTWF0ZXJpYWwsIE9iamVjdDNERXZlbnRNYXAsIFNwaGVyZSwgVmVjdG9yMyB9IGZyb20gJ3RocmVlJztcbmltcG9ydCB7IGFwcGx5VmFsdWUgfSBmcm9tICcuLi91dGlsJztcbmltcG9ydCB7IFRoTWVzaCB9IGZyb20gJy4vVGhNZXNoJztcbmltcG9ydCB7IFRoT2JqZWN0M0QgfSBmcm9tICcuL1RoT2JqZWN0M0QnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0aC1iYXRjaGVkTWVzaCcsXG4gIHRlbXBsYXRlOiAnPG5nLWNvbnRlbnQvPicsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBwcm92aWRlcnM6IFt7IHByb3ZpZGU6IFRoT2JqZWN0M0QsIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IFRoQmF0Y2hlZE1lc2gpIH1dLFxufSlcbmV4cG9ydCBjbGFzcyBUaEJhdGNoZWRNZXNoPFxuICBUIGV4dGVuZHMgQmF0Y2hlZE1lc2ggPSBCYXRjaGVkTWVzaCxcbiAgVEFSR1MgPSBbbWF4R2VvbWV0cnlDb3VudDogbnVtYmVyLCBtYXhWZXJ0ZXhDb3VudDogbnVtYmVyLCBtYXhJbmRleENvdW50PzogbnVtYmVyLCBtYXRlcmlhbD86IE1hdGVyaWFsXSxcbj4gZXh0ZW5kcyBUaE1lc2g8QnVmZmVyR2VvbWV0cnksIE1hdGVyaWFsLCBPYmplY3QzREV2ZW50TWFwLCBULCBUQVJHUz4ge1xuICBwdWJsaWMgZ2V0VHlwZSgpOiBUeXBlPEJhdGNoZWRNZXNoPiB7XG4gICAgcmV0dXJuIEJhdGNoZWRNZXNoO1xuICB9XG5cbiAgQElucHV0KClcbiAgcHVibGljIHNldCBib3VuZGluZ0JveCh2YWx1ZTogQm94MyB8IG51bGwgfCBbbWluOiBWZWN0b3IzLCBtYXg6IFZlY3RvcjNdKSB7XG4gICAgaWYgKHRoaXMuX29ialJlZikge1xuICAgICAgdGhpcy5fb2JqUmVmLmJvdW5kaW5nQm94ID0gYXBwbHlWYWx1ZTxCb3gzIHwgbnVsbD4odGhpcy5fb2JqUmVmLmJvdW5kaW5nQm94LCB2YWx1ZSk7XG4gICAgfVxuICB9XG4gIHB1YmxpYyBnZXQgYm91bmRpbmdCb3goKTogKEJveDMgfCBudWxsKSB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX29ialJlZj8uYm91bmRpbmdCb3g7XG4gIH1cbiAgQElucHV0KClcbiAgcHVibGljIHNldCBib3VuZGluZ1NwaGVyZSh2YWx1ZTogU3BoZXJlIHwgbnVsbCB8IFtjZW50ZXI6IFZlY3RvcjMsIHJhZGl1czogbnVtYmVyXSkge1xuICAgIGlmICh0aGlzLl9vYmpSZWYpIHtcbiAgICAgIHRoaXMuX29ialJlZi5ib3VuZGluZ1NwaGVyZSA9IGFwcGx5VmFsdWU8U3BoZXJlIHwgbnVsbD4odGhpcy5fb2JqUmVmLmJvdW5kaW5nU3BoZXJlLCB2YWx1ZSk7XG4gICAgfVxuICB9XG4gIHB1YmxpYyBnZXQgYm91bmRpbmdTcGhlcmUoKTogKFNwaGVyZSB8IG51bGwpIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fb2JqUmVmPy5ib3VuZGluZ1NwaGVyZTtcbiAgfVxuICBASW5wdXQoKVxuICBwdWJsaWMgc2V0IGN1c3RvbVNvcnQoXG4gICAgdmFsdWU6ICgodGhpczogYW55LCBsaXN0OiBBcnJheTx7IHN0YXJ0OiBudW1iZXI7IGNvdW50OiBudW1iZXI7IHo6IG51bWJlciB9PiwgY2FtZXJhOiBDYW1lcmEpID0+IHZvaWQpIHwgbnVsbCxcbiAgKSB7XG4gICAgaWYgKHRoaXMuX29ialJlZikge1xuICAgICAgdGhpcy5fb2JqUmVmLmN1c3RvbVNvcnQgPSB2YWx1ZTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgZ2V0IGN1c3RvbVNvcnQoKTpcbiAgICB8ICgoKHRoaXM6IGFueSwgbGlzdDogQXJyYXk8eyBzdGFydDogbnVtYmVyOyBjb3VudDogbnVtYmVyOyB6OiBudW1iZXIgfT4sIGNhbWVyYTogQ2FtZXJhKSA9PiB2b2lkKSB8IG51bGwpXG4gICAgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9vYmpSZWY/LmN1c3RvbVNvcnQ7XG4gIH1cbiAgQElucHV0KClcbiAgcHVibGljIHNldCBwZXJPYmplY3RGcnVzdHVtQ3VsbGVkKHZhbHVlOiBib29sZWFuKSB7XG4gICAgaWYgKHRoaXMuX29ialJlZikge1xuICAgICAgdGhpcy5fb2JqUmVmLnBlck9iamVjdEZydXN0dW1DdWxsZWQgPSB2YWx1ZTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgZ2V0IHBlck9iamVjdEZydXN0dW1DdWxsZWQoKTogYm9vbGVhbiB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX29ialJlZj8ucGVyT2JqZWN0RnJ1c3R1bUN1bGxlZDtcbiAgfVxuICBASW5wdXQoKVxuICBwdWJsaWMgc2V0IHNvcnRPYmplY3RzKHZhbHVlOiBib29sZWFuKSB7XG4gICAgaWYgKHRoaXMuX29ialJlZikge1xuICAgICAgdGhpcy5fb2JqUmVmLnNvcnRPYmplY3RzID0gdmFsdWU7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGdldCBzb3J0T2JqZWN0cygpOiBib29sZWFuIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fb2JqUmVmPy5zb3J0T2JqZWN0cztcbiAgfVxuICBwdWJsaWMgZ2V0IG1heEdlb21ldHJ5Q291bnQoKTogbnVtYmVyIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fb2JqUmVmPy5tYXhHZW9tZXRyeUNvdW50O1xuICB9XG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzZXQgaXNCYXRjaGVkTWVzaCh2YWx1ZTogdHJ1ZSkge1xuICAgIGlmICh0aGlzLl9vYmpSZWYpIHtcbiAgICAgIHRoaXMuX29ialJlZi5pc0JhdGNoZWRNZXNoID0gdmFsdWU7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGdldCBpc0JhdGNoZWRNZXNoKCk6IHRydWUgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9vYmpSZWY/LmlzQmF0Y2hlZE1lc2g7XG4gIH1cbn1cbiJdfQ==