/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix */
import { ChangeDetectionStrategy, Component, Input, forwardRef, } from '@angular/core';
import { InstancedMesh, } from 'three';
import { applyValue } from '../util';
import { ThMesh } from './ThMesh';
import { ThObject3D } from './ThObject3D';
import * as i0 from "@angular/core";
export class ThInstancedMesh extends ThMesh {
    getType() {
        return InstancedMesh;
    }
    get isInstancedMesh() {
        return this._objRef?.isInstancedMesh;
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
    set count(value) {
        if (this._objRef) {
            this._objRef.count = value;
        }
    }
    get count() {
        return this._objRef?.count;
    }
    set instanceColor(value) {
        if (this._objRef) {
            this._objRef.instanceColor = applyValue(this._objRef.instanceColor, value);
        }
    }
    get instanceColor() {
        return this._objRef?.instanceColor;
    }
    set instanceMatrix(value) {
        if (this._objRef) {
            this._objRef.instanceMatrix = applyValue(this._objRef.instanceMatrix, value);
        }
    }
    get instanceMatrix() {
        return this._objRef?.instanceMatrix;
    }
    set morphTexture(value) {
        if (this._objRef) {
            this._objRef.morphTexture = value;
        }
    }
    get morphTexture() {
        return this._objRef?.morphTexture;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThInstancedMesh, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.1.2", type: ThInstancedMesh, selector: "th-instancedMesh", inputs: { boundingBox: "boundingBox", boundingSphere: "boundingSphere", count: "count", instanceColor: "instanceColor", instanceMatrix: "instanceMatrix", morphTexture: "morphTexture" }, providers: [
            { provide: ThObject3D, useExisting: forwardRef(() => ThInstancedMesh) },
        ], usesInheritance: true, ngImport: i0, template: '<ng-content/>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThInstancedMesh, decorators: [{
            type: Component,
            args: [{
                    selector: 'th-instancedMesh',
                    template: '<ng-content/>',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    providers: [
                        { provide: ThObject3D, useExisting: forwardRef(() => ThInstancedMesh) },
                    ],
                }]
        }], propDecorators: { boundingBox: [{
                type: Input
            }], boundingSphere: [{
                type: Input
            }], count: [{
                type: Input
            }], instanceColor: [{
                type: Input
            }], instanceMatrix: [{
                type: Input
            }], morphTexture: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGhJbnN0YW5jZWRNZXNoLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LXRocmVlL3NyYy9saWIvZ2VuZXJhdGVkL1RoSW5zdGFuY2VkTWVzaC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSx5REFBeUQ7QUFDekQseUNBQXlDO0FBQ3pDLCtGQUErRjtBQUMvRixPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxLQUFLLEVBRUwsVUFBVSxHQUNYLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFLTCxhQUFhLEdBS2QsTUFBTSxPQUFPLENBQUM7QUFDZixPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sU0FBUyxDQUFDO0FBQ3JDLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxVQUFVLENBQUM7QUFDbEMsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGNBQWMsQ0FBQzs7QUFVMUMsTUFBTSxPQUFPLGVBY1gsU0FBUSxNQUFpRDtJQUNsRCxPQUFPO1FBQ1osT0FBTyxhQUFhLENBQUM7SUFDdkIsQ0FBQztJQUVELElBQVcsZUFBZTtRQUN4QixPQUFPLElBQUksQ0FBQyxPQUFPLEVBQUUsZUFBZSxDQUFDO0lBQ3ZDLENBQUM7SUFDRCxJQUNXLFdBQVcsQ0FBQyxLQUFpRDtRQUN0RSxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUNqQixJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsR0FBRyxVQUFVLENBQ25DLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUN4QixLQUFLLENBQ04sQ0FBQztRQUNKLENBQUM7SUFDSCxDQUFDO0lBQ0QsSUFBVyxXQUFXO1FBQ3BCLE9BQU8sSUFBSSxDQUFDLE9BQU8sRUFBRSxXQUFXLENBQUM7SUFDbkMsQ0FBQztJQUNELElBQ1csY0FBYyxDQUN2QixLQUF3RDtRQUV4RCxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUNqQixJQUFJLENBQUMsT0FBTyxDQUFDLGNBQWMsR0FBRyxVQUFVLENBQ3RDLElBQUksQ0FBQyxPQUFPLENBQUMsY0FBYyxFQUMzQixLQUFLLENBQ04sQ0FBQztRQUNKLENBQUM7SUFDSCxDQUFDO0lBQ0QsSUFBVyxjQUFjO1FBQ3ZCLE9BQU8sSUFBSSxDQUFDLE9BQU8sRUFBRSxjQUFjLENBQUM7SUFDdEMsQ0FBQztJQUNELElBQ1csS0FBSyxDQUFDLEtBQWE7UUFDNUIsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDakIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQzdCLENBQUM7SUFDSCxDQUFDO0lBRUQsSUFBVyxLQUFLO1FBQ2QsT0FBTyxJQUFJLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQztJQUM3QixDQUFDO0lBQ0QsSUFDVyxhQUFhLENBQ3RCLEtBR2lFO1FBRWpFLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ2pCLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxHQUFHLFVBQVUsQ0FDckMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLEVBQzFCLEtBQUssQ0FDTixDQUFDO1FBQ0osQ0FBQztJQUNILENBQUM7SUFDRCxJQUFXLGFBQWE7UUFDdEIsT0FBTyxJQUFJLENBQUMsT0FBTyxFQUFFLGFBQWEsQ0FBQztJQUNyQyxDQUFDO0lBQ0QsSUFDVyxjQUFjLENBQ3ZCLEtBRWlFO1FBRWpFLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ2pCLElBQUksQ0FBQyxPQUFPLENBQUMsY0FBYyxHQUFHLFVBQVUsQ0FDdEMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxjQUFjLEVBQzNCLEtBQUssQ0FDTixDQUFDO1FBQ0osQ0FBQztJQUNILENBQUM7SUFDRCxJQUFXLGNBQWM7UUFDdkIsT0FBTyxJQUFJLENBQUMsT0FBTyxFQUFFLGNBQWMsQ0FBQztJQUN0QyxDQUFDO0lBQ0QsSUFDVyxZQUFZLENBQUMsS0FBeUI7UUFDL0MsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDakIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO1FBQ3BDLENBQUM7SUFDSCxDQUFDO0lBRUQsSUFBVyxZQUFZO1FBQ3JCLE9BQU8sSUFBSSxDQUFDLE9BQU8sRUFBRSxZQUFZLENBQUM7SUFDcEMsQ0FBQzs4R0FwR1UsZUFBZTtrR0FBZixlQUFlLHFPQUpmO1lBQ1QsRUFBRSxPQUFPLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRSxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsZUFBZSxDQUFDLEVBQUU7U0FDeEUsaURBSlMsZUFBZTs7MkZBTWQsZUFBZTtrQkFSM0IsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsa0JBQWtCO29CQUM1QixRQUFRLEVBQUUsZUFBZTtvQkFDekIsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07b0JBQy9DLFNBQVMsRUFBRTt3QkFDVCxFQUFFLE9BQU8sRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFLFVBQVUsQ0FBQyxHQUFHLEVBQUUsZ0JBQWdCLENBQUMsRUFBRTtxQkFDeEU7aUJBQ0Y7OEJBd0JZLFdBQVc7c0JBRHJCLEtBQUs7Z0JBYUssY0FBYztzQkFEeEIsS0FBSztnQkFlSyxLQUFLO3NCQURmLEtBQUs7Z0JBV0ssYUFBYTtzQkFEdkIsS0FBSztnQkFrQkssY0FBYztzQkFEeEIsS0FBSztnQkFpQkssWUFBWTtzQkFEdEIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIEB0eXBlc2NyaXB0LWVzbGludC9uYW1pbmctY29udmVudGlvbiAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tdW5kZXJzY29yZS1kYW5nbGUgKi9cbi8qIGVzbGludC1kaXNhYmxlIEBhbmd1bGFyLWVzbGludC9jb21wb25lbnQtc2VsZWN0b3IsIEBhbmd1bGFyLWVzbGludC9jb21wb25lbnQtY2xhc3Mtc3VmZml4ICovXG5pbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ29tcG9uZW50LFxuICBJbnB1dCxcbiAgVHlwZSxcbiAgZm9yd2FyZFJlZixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBCb3gzLFxuICBCdWZmZXJHZW9tZXRyeSxcbiAgRGF0YVRleHR1cmUsXG4gIEluc3RhbmNlZEJ1ZmZlckF0dHJpYnV0ZSxcbiAgSW5zdGFuY2VkTWVzaCxcbiAgSW5zdGFuY2VkTWVzaEV2ZW50TWFwLFxuICBNYXRlcmlhbCxcbiAgU3BoZXJlLFxuICBWZWN0b3IzLFxufSBmcm9tICd0aHJlZSc7XG5pbXBvcnQgeyBhcHBseVZhbHVlIH0gZnJvbSAnLi4vdXRpbCc7XG5pbXBvcnQgeyBUaE1lc2ggfSBmcm9tICcuL1RoTWVzaCc7XG5pbXBvcnQgeyBUaE9iamVjdDNEIH0gZnJvbSAnLi9UaE9iamVjdDNEJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndGgtaW5zdGFuY2VkTWVzaCcsXG4gIHRlbXBsYXRlOiAnPG5nLWNvbnRlbnQvPicsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBwcm92aWRlcnM6IFtcbiAgICB7IHByb3ZpZGU6IFRoT2JqZWN0M0QsIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IFRoSW5zdGFuY2VkTWVzaCkgfSxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgVGhJbnN0YW5jZWRNZXNoPFxuICBUR2VvbWV0cnkgZXh0ZW5kcyBCdWZmZXJHZW9tZXRyeSA9IEJ1ZmZlckdlb21ldHJ5LFxuICBUTWF0ZXJpYWwgZXh0ZW5kcyBNYXRlcmlhbCB8IE1hdGVyaWFsW10gPSBNYXRlcmlhbCB8IE1hdGVyaWFsW10sXG4gIFRFdmVudE1hcCBleHRlbmRzIEluc3RhbmNlZE1lc2hFdmVudE1hcCA9IEluc3RhbmNlZE1lc2hFdmVudE1hcCxcbiAgVCBleHRlbmRzIEluc3RhbmNlZE1lc2g8VEdlb21ldHJ5LCBUTWF0ZXJpYWwsIFRFdmVudE1hcD4gPSBJbnN0YW5jZWRNZXNoPFxuICAgIFRHZW9tZXRyeSxcbiAgICBUTWF0ZXJpYWwsXG4gICAgVEV2ZW50TWFwXG4gID4sXG4gIFRBUkdTID0gW1xuICAgIGdlb21ldHJ5OiBUR2VvbWV0cnkgfCB1bmRlZmluZWQsXG4gICAgbWF0ZXJpYWw6IFRNYXRlcmlhbCB8IHVuZGVmaW5lZCxcbiAgICBjb3VudDogbnVtYmVyLFxuICBdLFxuPiBleHRlbmRzIFRoTWVzaDxUR2VvbWV0cnksIFRNYXRlcmlhbCwgVEV2ZW50TWFwLCBULCBUQVJHUz4ge1xuICBwdWJsaWMgZ2V0VHlwZSgpOiBUeXBlPEluc3RhbmNlZE1lc2g8VEdlb21ldHJ5LCBUTWF0ZXJpYWwsIFRFdmVudE1hcD4+IHtcbiAgICByZXR1cm4gSW5zdGFuY2VkTWVzaDtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaXNJbnN0YW5jZWRNZXNoKCk6IHRydWUgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9vYmpSZWY/LmlzSW5zdGFuY2VkTWVzaDtcbiAgfVxuICBASW5wdXQoKVxuICBwdWJsaWMgc2V0IGJvdW5kaW5nQm94KHZhbHVlOiBCb3gzIHwgbnVsbCB8IFttaW46IFZlY3RvcjMsIG1heDogVmVjdG9yM10pIHtcbiAgICBpZiAodGhpcy5fb2JqUmVmKSB7XG4gICAgICB0aGlzLl9vYmpSZWYuYm91bmRpbmdCb3ggPSBhcHBseVZhbHVlPEJveDMgfCBudWxsPihcbiAgICAgICAgdGhpcy5fb2JqUmVmLmJvdW5kaW5nQm94LFxuICAgICAgICB2YWx1ZSxcbiAgICAgICk7XG4gICAgfVxuICB9XG4gIHB1YmxpYyBnZXQgYm91bmRpbmdCb3goKTogKEJveDMgfCBudWxsKSB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX29ialJlZj8uYm91bmRpbmdCb3g7XG4gIH1cbiAgQElucHV0KClcbiAgcHVibGljIHNldCBib3VuZGluZ1NwaGVyZShcbiAgICB2YWx1ZTogU3BoZXJlIHwgbnVsbCB8IFtjZW50ZXI6IFZlY3RvcjMsIHJhZGl1czogbnVtYmVyXSxcbiAgKSB7XG4gICAgaWYgKHRoaXMuX29ialJlZikge1xuICAgICAgdGhpcy5fb2JqUmVmLmJvdW5kaW5nU3BoZXJlID0gYXBwbHlWYWx1ZTxTcGhlcmUgfCBudWxsPihcbiAgICAgICAgdGhpcy5fb2JqUmVmLmJvdW5kaW5nU3BoZXJlLFxuICAgICAgICB2YWx1ZSxcbiAgICAgICk7XG4gICAgfVxuICB9XG4gIHB1YmxpYyBnZXQgYm91bmRpbmdTcGhlcmUoKTogKFNwaGVyZSB8IG51bGwpIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fb2JqUmVmPy5ib3VuZGluZ1NwaGVyZTtcbiAgfVxuICBASW5wdXQoKVxuICBwdWJsaWMgc2V0IGNvdW50KHZhbHVlOiBudW1iZXIpIHtcbiAgICBpZiAodGhpcy5fb2JqUmVmKSB7XG4gICAgICB0aGlzLl9vYmpSZWYuY291bnQgPSB2YWx1ZTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgZ2V0IGNvdW50KCk6IG51bWJlciB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX29ialJlZj8uY291bnQ7XG4gIH1cbiAgQElucHV0KClcbiAgcHVibGljIHNldCBpbnN0YW5jZUNvbG9yKFxuICAgIHZhbHVlOlxuICAgICAgfCBJbnN0YW5jZWRCdWZmZXJBdHRyaWJ1dGVcbiAgICAgIHwgbnVsbFxuICAgICAgfCBbdmFsdWU6IEFycmF5TGlrZTxudW1iZXI+IHwgQXJyYXlCdWZmZXJWaWV3LCBvZmZzZXQ/OiBudW1iZXJdLFxuICApIHtcbiAgICBpZiAodGhpcy5fb2JqUmVmKSB7XG4gICAgICB0aGlzLl9vYmpSZWYuaW5zdGFuY2VDb2xvciA9IGFwcGx5VmFsdWU8SW5zdGFuY2VkQnVmZmVyQXR0cmlidXRlIHwgbnVsbD4oXG4gICAgICAgIHRoaXMuX29ialJlZi5pbnN0YW5jZUNvbG9yLFxuICAgICAgICB2YWx1ZSxcbiAgICAgICk7XG4gICAgfVxuICB9XG4gIHB1YmxpYyBnZXQgaW5zdGFuY2VDb2xvcigpOiAoSW5zdGFuY2VkQnVmZmVyQXR0cmlidXRlIHwgbnVsbCkgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9vYmpSZWY/Lmluc3RhbmNlQ29sb3I7XG4gIH1cbiAgQElucHV0KClcbiAgcHVibGljIHNldCBpbnN0YW5jZU1hdHJpeChcbiAgICB2YWx1ZTpcbiAgICAgIHwgSW5zdGFuY2VkQnVmZmVyQXR0cmlidXRlXG4gICAgICB8IFt2YWx1ZTogQXJyYXlMaWtlPG51bWJlcj4gfCBBcnJheUJ1ZmZlclZpZXcsIG9mZnNldD86IG51bWJlcl0sXG4gICkge1xuICAgIGlmICh0aGlzLl9vYmpSZWYpIHtcbiAgICAgIHRoaXMuX29ialJlZi5pbnN0YW5jZU1hdHJpeCA9IGFwcGx5VmFsdWU8SW5zdGFuY2VkQnVmZmVyQXR0cmlidXRlPihcbiAgICAgICAgdGhpcy5fb2JqUmVmLmluc3RhbmNlTWF0cml4LFxuICAgICAgICB2YWx1ZSxcbiAgICAgICk7XG4gICAgfVxuICB9XG4gIHB1YmxpYyBnZXQgaW5zdGFuY2VNYXRyaXgoKTogSW5zdGFuY2VkQnVmZmVyQXR0cmlidXRlIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fb2JqUmVmPy5pbnN0YW5jZU1hdHJpeDtcbiAgfVxuICBASW5wdXQoKVxuICBwdWJsaWMgc2V0IG1vcnBoVGV4dHVyZSh2YWx1ZTogRGF0YVRleHR1cmUgfCBudWxsKSB7XG4gICAgaWYgKHRoaXMuX29ialJlZikge1xuICAgICAgdGhpcy5fb2JqUmVmLm1vcnBoVGV4dHVyZSA9IHZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBnZXQgbW9ycGhUZXh0dXJlKCk6IChEYXRhVGV4dHVyZSB8IG51bGwpIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fb2JqUmVmPy5tb3JwaFRleHR1cmU7XG4gIH1cbn1cbiJdfQ==