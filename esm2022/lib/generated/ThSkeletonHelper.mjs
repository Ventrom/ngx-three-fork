/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix */
import { ChangeDetectionStrategy, Component, Input, forwardRef, } from '@angular/core';
import { SkeletonHelper, } from 'three';
import { applyValue } from '../util';
import { ThLineSegments } from './ThLineSegments';
import { ThObject3D } from './ThObject3D';
import * as i0 from "@angular/core";
export class ThSkeletonHelper extends ThLineSegments {
    getType() {
        return SkeletonHelper;
    }
    get type() {
        return this._objRef?.type;
    }
    set bones(value) {
        if (this._objRef) {
            this._objRef.bones = value;
        }
    }
    get bones() {
        return this._objRef?.bones;
    }
    set root(value) {
        if (this._objRef) {
            this._objRef.root = value;
        }
    }
    get root() {
        return this._objRef?.root;
    }
    set matrix(value) {
        if (this._objRef) {
            this._objRef.matrix = applyValue(this._objRef.matrix, value);
        }
    }
    get matrix() {
        return this._objRef?.matrix;
    }
    set matrixAutoUpdate(value) {
        if (this._objRef) {
            this._objRef.matrixAutoUpdate = value;
        }
    }
    get matrixAutoUpdate() {
        return this._objRef?.matrixAutoUpdate;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThSkeletonHelper, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.1.2", type: ThSkeletonHelper, selector: "th-skeletonHelper", inputs: { bones: "bones", root: "root", matrix: "matrix", matrixAutoUpdate: "matrixAutoUpdate" }, providers: [
            { provide: ThObject3D, useExisting: forwardRef(() => ThSkeletonHelper) },
        ], usesInheritance: true, ngImport: i0, template: '<ng-content/>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThSkeletonHelper, decorators: [{
            type: Component,
            args: [{
                    selector: 'th-skeletonHelper',
                    template: '<ng-content/>',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    providers: [
                        { provide: ThObject3D, useExisting: forwardRef(() => ThSkeletonHelper) },
                    ],
                }]
        }], propDecorators: { bones: [{
                type: Input
            }], root: [{
                type: Input
            }], matrix: [{
                type: Input
            }], matrixAutoUpdate: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGhTa2VsZXRvbkhlbHBlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC10aHJlZS9zcmMvbGliL2dlbmVyYXRlZC9UaFNrZWxldG9uSGVscGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHlEQUF5RDtBQUN6RCx5Q0FBeUM7QUFDekMsK0ZBQStGO0FBQy9GLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULEtBQUssRUFFTCxVQUFVLEdBQ1gsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQU9MLGNBQWMsR0FFZixNQUFNLE9BQU8sQ0FBQztBQUNmLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxTQUFTLENBQUM7QUFDckMsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxjQUFjLENBQUM7O0FBVTFDLE1BQU0sT0FBTyxnQkFHWCxTQUFRLGNBTVQ7SUFDUSxPQUFPO1FBQ1osT0FBTyxjQUFjLENBQUM7SUFDeEIsQ0FBQztJQUVELElBQVcsSUFBSTtRQUNiLE9BQU8sSUFBSSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUM7SUFDNUIsQ0FBQztJQUNELElBQ1csS0FBSyxDQUFDLEtBQWE7UUFDNUIsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDakIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQzdCLENBQUM7SUFDSCxDQUFDO0lBRUQsSUFBVyxLQUFLO1FBQ2QsT0FBTyxJQUFJLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQztJQUM3QixDQUFDO0lBQ0QsSUFDVyxJQUFJLENBQUMsS0FBNkI7UUFDM0MsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDakIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDO1FBQzVCLENBQUM7SUFDSCxDQUFDO0lBRUQsSUFBVyxJQUFJO1FBQ2IsT0FBTyxJQUFJLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQztJQUM1QixDQUFDO0lBQ0QsSUFDVyxNQUFNLENBQ2YsS0FtQks7UUFFTCxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUNqQixJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxVQUFVLENBQVUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDeEUsQ0FBQztJQUNILENBQUM7SUFDRCxJQUFXLE1BQU07UUFDZixPQUFPLElBQUksQ0FBQyxPQUFPLEVBQUUsTUFBTSxDQUFDO0lBQzlCLENBQUM7SUFDRCxJQUNXLGdCQUFnQixDQUFDLEtBQWM7UUFDeEMsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDakIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsR0FBRyxLQUFLLENBQUM7UUFDeEMsQ0FBQztJQUNILENBQUM7SUFFRCxJQUFXLGdCQUFnQjtRQUN6QixPQUFPLElBQUksQ0FBQyxPQUFPLEVBQUUsZ0JBQWdCLENBQUM7SUFDeEMsQ0FBQzs4R0E1RVUsZ0JBQWdCO2tHQUFoQixnQkFBZ0IsOElBSmhCO1lBQ1QsRUFBRSxPQUFPLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRSxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsZ0JBQWdCLENBQUMsRUFBRTtTQUN6RSxpREFKUyxlQUFlOzsyRkFNZCxnQkFBZ0I7a0JBUjVCLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLG1CQUFtQjtvQkFDN0IsUUFBUSxFQUFFLGVBQWU7b0JBQ3pCLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO29CQUMvQyxTQUFTLEVBQUU7d0JBQ1QsRUFBRSxPQUFPLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRSxVQUFVLENBQUMsR0FBRyxFQUFFLGlCQUFpQixDQUFDLEVBQUU7cUJBQ3pFO2lCQUNGOzhCQW1CWSxLQUFLO3NCQURmLEtBQUs7Z0JBV0ssSUFBSTtzQkFEZCxLQUFLO2dCQVdLLE1BQU07c0JBRGhCLEtBQUs7Z0JBK0JLLGdCQUFnQjtzQkFEMUIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIEB0eXBlc2NyaXB0LWVzbGludC9uYW1pbmctY29udmVudGlvbiAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tdW5kZXJzY29yZS1kYW5nbGUgKi9cbi8qIGVzbGludC1kaXNhYmxlIEBhbmd1bGFyLWVzbGludC9jb21wb25lbnQtc2VsZWN0b3IsIEBhbmd1bGFyLWVzbGludC9jb21wb25lbnQtY2xhc3Mtc3VmZml4ICovXG5pbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ29tcG9uZW50LFxuICBJbnB1dCxcbiAgVHlwZSxcbiAgZm9yd2FyZFJlZixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBCb25lLFxuICBCdWZmZXJHZW9tZXRyeSxcbiAgTWF0ZXJpYWwsXG4gIE1hdHJpeDQsXG4gIE9iamVjdDNELFxuICBPYmplY3QzREV2ZW50TWFwLFxuICBTa2VsZXRvbkhlbHBlcixcbiAgU2tpbm5lZE1lc2gsXG59IGZyb20gJ3RocmVlJztcbmltcG9ydCB7IGFwcGx5VmFsdWUgfSBmcm9tICcuLi91dGlsJztcbmltcG9ydCB7IFRoTGluZVNlZ21lbnRzIH0gZnJvbSAnLi9UaExpbmVTZWdtZW50cyc7XG5pbXBvcnQgeyBUaE9iamVjdDNEIH0gZnJvbSAnLi9UaE9iamVjdDNEJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndGgtc2tlbGV0b25IZWxwZXInLFxuICB0ZW1wbGF0ZTogJzxuZy1jb250ZW50Lz4nLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgcHJvdmlkZXJzOiBbXG4gICAgeyBwcm92aWRlOiBUaE9iamVjdDNELCB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBUaFNrZWxldG9uSGVscGVyKSB9LFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBUaFNrZWxldG9uSGVscGVyPFxuICBUIGV4dGVuZHMgU2tlbGV0b25IZWxwZXIgPSBTa2VsZXRvbkhlbHBlcixcbiAgVEFSR1MgPSAvKiBvYmplY3QgKi8gU2tpbm5lZE1lc2ggfCBPYmplY3QzRCxcbj4gZXh0ZW5kcyBUaExpbmVTZWdtZW50czxcbiAgQnVmZmVyR2VvbWV0cnksXG4gIE1hdGVyaWFsIHwgTWF0ZXJpYWxbXSxcbiAgT2JqZWN0M0RFdmVudE1hcCxcbiAgVCxcbiAgVEFSR1Ncbj4ge1xuICBwdWJsaWMgZ2V0VHlwZSgpOiBUeXBlPFNrZWxldG9uSGVscGVyPiB7XG4gICAgcmV0dXJuIFNrZWxldG9uSGVscGVyO1xuICB9XG5cbiAgcHVibGljIGdldCB0eXBlKCk6IChzdHJpbmcgfCAnU2tlbGV0b25IZWxwZXInKSB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX29ialJlZj8udHlwZTtcbiAgfVxuICBASW5wdXQoKVxuICBwdWJsaWMgc2V0IGJvbmVzKHZhbHVlOiBCb25lW10pIHtcbiAgICBpZiAodGhpcy5fb2JqUmVmKSB7XG4gICAgICB0aGlzLl9vYmpSZWYuYm9uZXMgPSB2YWx1ZTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgZ2V0IGJvbmVzKCk6IEJvbmVbXSB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX29ialJlZj8uYm9uZXM7XG4gIH1cbiAgQElucHV0KClcbiAgcHVibGljIHNldCByb290KHZhbHVlOiBTa2lubmVkTWVzaCB8IE9iamVjdDNEKSB7XG4gICAgaWYgKHRoaXMuX29ialJlZikge1xuICAgICAgdGhpcy5fb2JqUmVmLnJvb3QgPSB2YWx1ZTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgZ2V0IHJvb3QoKTogKFNraW5uZWRNZXNoIHwgT2JqZWN0M0QpIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fb2JqUmVmPy5yb290O1xuICB9XG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzZXQgbWF0cml4KFxuICAgIHZhbHVlOlxuICAgICAgfCBNYXRyaXg0XG4gICAgICB8IFtcbiAgICAgICAgICBuMTE6IG51bWJlcixcbiAgICAgICAgICBuMTI6IG51bWJlcixcbiAgICAgICAgICBuMTM6IG51bWJlcixcbiAgICAgICAgICBuMTQ6IG51bWJlcixcbiAgICAgICAgICBuMjE6IG51bWJlcixcbiAgICAgICAgICBuMjI6IG51bWJlcixcbiAgICAgICAgICBuMjM6IG51bWJlcixcbiAgICAgICAgICBuMjQ6IG51bWJlcixcbiAgICAgICAgICBuMzE6IG51bWJlcixcbiAgICAgICAgICBuMzI6IG51bWJlcixcbiAgICAgICAgICBuMzM6IG51bWJlcixcbiAgICAgICAgICBuMzQ6IG51bWJlcixcbiAgICAgICAgICBuNDE6IG51bWJlcixcbiAgICAgICAgICBuNDI6IG51bWJlcixcbiAgICAgICAgICBuNDM6IG51bWJlcixcbiAgICAgICAgICBuNDQ6IG51bWJlcixcbiAgICAgICAgXSxcbiAgKSB7XG4gICAgaWYgKHRoaXMuX29ialJlZikge1xuICAgICAgdGhpcy5fb2JqUmVmLm1hdHJpeCA9IGFwcGx5VmFsdWU8TWF0cml4ND4odGhpcy5fb2JqUmVmLm1hdHJpeCwgdmFsdWUpO1xuICAgIH1cbiAgfVxuICBwdWJsaWMgZ2V0IG1hdHJpeCgpOiBNYXRyaXg0IHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fb2JqUmVmPy5tYXRyaXg7XG4gIH1cbiAgQElucHV0KClcbiAgcHVibGljIHNldCBtYXRyaXhBdXRvVXBkYXRlKHZhbHVlOiBib29sZWFuKSB7XG4gICAgaWYgKHRoaXMuX29ialJlZikge1xuICAgICAgdGhpcy5fb2JqUmVmLm1hdHJpeEF1dG9VcGRhdGUgPSB2YWx1ZTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgZ2V0IG1hdHJpeEF1dG9VcGRhdGUoKTogYm9vbGVhbiB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX29ialJlZj8ubWF0cml4QXV0b1VwZGF0ZTtcbiAgfVxufVxuIl19