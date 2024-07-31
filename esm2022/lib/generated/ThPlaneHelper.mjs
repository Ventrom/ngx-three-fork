/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix */
import { ChangeDetectionStrategy, Component, Input, forwardRef, } from '@angular/core';
import { PlaneHelper, } from 'three';
import { applyValue } from '../util';
import { ThLineSegments } from './ThLineSegments';
import { ThObject3D } from './ThObject3D';
import * as i0 from "@angular/core";
export class ThPlaneHelper extends ThLineSegments {
    getType() {
        return PlaneHelper;
    }
    get type() {
        return this._objRef?.type;
    }
    set plane(value) {
        if (this._objRef) {
            this._objRef.plane = applyValue(this._objRef.plane, value);
        }
    }
    get plane() {
        return this._objRef?.plane;
    }
    set size(value) {
        if (this._objRef) {
            this._objRef.size = value;
        }
    }
    get size() {
        return this._objRef?.size;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThPlaneHelper, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.1.2", type: ThPlaneHelper, selector: "th-planeHelper", inputs: { plane: "plane", size: "size" }, providers: [
            { provide: ThObject3D, useExisting: forwardRef(() => ThPlaneHelper) },
        ], usesInheritance: true, ngImport: i0, template: '<ng-content/>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThPlaneHelper, decorators: [{
            type: Component,
            args: [{
                    selector: 'th-planeHelper',
                    template: '<ng-content/>',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    providers: [
                        { provide: ThObject3D, useExisting: forwardRef(() => ThPlaneHelper) },
                    ],
                }]
        }], propDecorators: { plane: [{
                type: Input
            }], size: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGhQbGFuZUhlbHBlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC10aHJlZS9zcmMvbGliL2dlbmVyYXRlZC9UaFBsYW5lSGVscGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHlEQUF5RDtBQUN6RCx5Q0FBeUM7QUFDekMsK0ZBQStGO0FBQy9GLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULEtBQUssRUFFTCxVQUFVLEdBQ1gsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUtMLFdBQVcsR0FFWixNQUFNLE9BQU8sQ0FBQztBQUNmLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxTQUFTLENBQUM7QUFDckMsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxjQUFjLENBQUM7O0FBVTFDLE1BQU0sT0FBTyxhQUdYLFNBQVEsY0FNVDtJQUNRLE9BQU87UUFDWixPQUFPLFdBQVcsQ0FBQztJQUNyQixDQUFDO0lBRUQsSUFBVyxJQUFJO1FBQ2IsT0FBTyxJQUFJLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQztJQUM1QixDQUFDO0lBQ0QsSUFDVyxLQUFLLENBQUMsS0FBa0Q7UUFDakUsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDakIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEdBQUcsVUFBVSxDQUFRLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQ3BFLENBQUM7SUFDSCxDQUFDO0lBQ0QsSUFBVyxLQUFLO1FBQ2QsT0FBTyxJQUFJLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQztJQUM3QixDQUFDO0lBQ0QsSUFDVyxJQUFJLENBQUMsS0FBYTtRQUMzQixJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUNqQixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksR0FBRyxLQUFLLENBQUM7UUFDNUIsQ0FBQztJQUNILENBQUM7SUFFRCxJQUFXLElBQUk7UUFDYixPQUFPLElBQUksQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDO0lBQzVCLENBQUM7OEdBbkNVLGFBQWE7a0dBQWIsYUFBYSxtRkFKYjtZQUNULEVBQUUsT0FBTyxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUUsVUFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDLGFBQWEsQ0FBQyxFQUFFO1NBQ3RFLGlEQUpTLGVBQWU7OzJGQU1kLGFBQWE7a0JBUnpCLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLGdCQUFnQjtvQkFDMUIsUUFBUSxFQUFFLGVBQWU7b0JBQ3pCLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO29CQUMvQyxTQUFTLEVBQUU7d0JBQ1QsRUFBRSxPQUFPLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRSxVQUFVLENBQUMsR0FBRyxFQUFFLGNBQWMsQ0FBQyxFQUFFO3FCQUN0RTtpQkFDRjs4QkFtQlksS0FBSztzQkFEZixLQUFLO2dCQVVLLElBQUk7c0JBRGQsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIEB0eXBlc2NyaXB0LWVzbGludC9uYW1pbmctY29udmVudGlvbiAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tdW5kZXJzY29yZS1kYW5nbGUgKi9cbi8qIGVzbGludC1kaXNhYmxlIEBhbmd1bGFyLWVzbGludC9jb21wb25lbnQtc2VsZWN0b3IsIEBhbmd1bGFyLWVzbGludC9jb21wb25lbnQtY2xhc3Mtc3VmZml4ICovXG5pbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ29tcG9uZW50LFxuICBJbnB1dCxcbiAgVHlwZSxcbiAgZm9yd2FyZFJlZixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBCdWZmZXJHZW9tZXRyeSxcbiAgTWF0ZXJpYWwsXG4gIE9iamVjdDNERXZlbnRNYXAsXG4gIFBsYW5lLFxuICBQbGFuZUhlbHBlcixcbiAgVmVjdG9yMyxcbn0gZnJvbSAndGhyZWUnO1xuaW1wb3J0IHsgYXBwbHlWYWx1ZSB9IGZyb20gJy4uL3V0aWwnO1xuaW1wb3J0IHsgVGhMaW5lU2VnbWVudHMgfSBmcm9tICcuL1RoTGluZVNlZ21lbnRzJztcbmltcG9ydCB7IFRoT2JqZWN0M0QgfSBmcm9tICcuL1RoT2JqZWN0M0QnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0aC1wbGFuZUhlbHBlcicsXG4gIHRlbXBsYXRlOiAnPG5nLWNvbnRlbnQvPicsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBwcm92aWRlcnM6IFtcbiAgICB7IHByb3ZpZGU6IFRoT2JqZWN0M0QsIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IFRoUGxhbmVIZWxwZXIpIH0sXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIFRoUGxhbmVIZWxwZXI8XG4gIFQgZXh0ZW5kcyBQbGFuZUhlbHBlciA9IFBsYW5lSGVscGVyLFxuICBUQVJHUyA9IFtwbGFuZTogUGxhbmUsIHNpemU/OiBudW1iZXIsIGhleD86IG51bWJlcl0sXG4+IGV4dGVuZHMgVGhMaW5lU2VnbWVudHM8XG4gIEJ1ZmZlckdlb21ldHJ5LFxuICBNYXRlcmlhbCB8IE1hdGVyaWFsW10sXG4gIE9iamVjdDNERXZlbnRNYXAsXG4gIFQsXG4gIFRBUkdTXG4+IHtcbiAgcHVibGljIGdldFR5cGUoKTogVHlwZTxQbGFuZUhlbHBlcj4ge1xuICAgIHJldHVybiBQbGFuZUhlbHBlcjtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgdHlwZSgpOiAoc3RyaW5nIHwgJ1BsYW5lSGVscGVyJykgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9vYmpSZWY/LnR5cGU7XG4gIH1cbiAgQElucHV0KClcbiAgcHVibGljIHNldCBwbGFuZSh2YWx1ZTogUGxhbmUgfCBbbm9ybWFsOiBWZWN0b3IzLCBjb25zdGFudDogbnVtYmVyXSkge1xuICAgIGlmICh0aGlzLl9vYmpSZWYpIHtcbiAgICAgIHRoaXMuX29ialJlZi5wbGFuZSA9IGFwcGx5VmFsdWU8UGxhbmU+KHRoaXMuX29ialJlZi5wbGFuZSwgdmFsdWUpO1xuICAgIH1cbiAgfVxuICBwdWJsaWMgZ2V0IHBsYW5lKCk6IFBsYW5lIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fb2JqUmVmPy5wbGFuZTtcbiAgfVxuICBASW5wdXQoKVxuICBwdWJsaWMgc2V0IHNpemUodmFsdWU6IG51bWJlcikge1xuICAgIGlmICh0aGlzLl9vYmpSZWYpIHtcbiAgICAgIHRoaXMuX29ialJlZi5zaXplID0gdmFsdWU7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGdldCBzaXplKCk6IG51bWJlciB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX29ialJlZj8uc2l6ZTtcbiAgfVxufVxuIl19