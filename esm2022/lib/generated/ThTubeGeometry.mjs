/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix */
import { ChangeDetectionStrategy, Component, Input, forwardRef, } from '@angular/core';
import { TubeGeometry } from 'three';
import { ThBufferGeometry } from './ThBufferGeometry';
import * as i0 from "@angular/core";
export class ThTubeGeometry extends ThBufferGeometry {
    getType() {
        return TubeGeometry;
    }
    get type() {
        return this._objRef?.type;
    }
    get parameters() {
        return this._objRef?.parameters;
    }
    set tangents(value) {
        if (this._objRef) {
            this._objRef.tangents = value;
        }
    }
    get tangents() {
        return this._objRef?.tangents;
    }
    set normals(value) {
        if (this._objRef) {
            this._objRef.normals = value;
        }
    }
    get normals() {
        return this._objRef?.normals;
    }
    set binormals(value) {
        if (this._objRef) {
            this._objRef.binormals = value;
        }
    }
    get binormals() {
        return this._objRef?.binormals;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThTubeGeometry, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.1.2", type: ThTubeGeometry, selector: "th-tubeGeometry", inputs: { tangents: "tangents", normals: "normals", binormals: "binormals" }, providers: [
            {
                provide: ThBufferGeometry,
                useExisting: forwardRef(() => ThTubeGeometry),
            },
        ], usesInheritance: true, ngImport: i0, template: '<ng-content/>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThTubeGeometry, decorators: [{
            type: Component,
            args: [{
                    selector: 'th-tubeGeometry',
                    template: '<ng-content/>',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    providers: [
                        {
                            provide: ThBufferGeometry,
                            useExisting: forwardRef(() => ThTubeGeometry),
                        },
                    ],
                }]
        }], propDecorators: { tangents: [{
                type: Input
            }], normals: [{
                type: Input
            }], binormals: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGhUdWJlR2VvbWV0cnkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtdGhyZWUvc3JjL2xpYi9nZW5lcmF0ZWQvVGhUdWJlR2VvbWV0cnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEseURBQXlEO0FBQ3pELHlDQUF5QztBQUN6QywrRkFBK0Y7QUFDL0YsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixTQUFTLEVBQ1QsS0FBSyxFQUVMLFVBQVUsR0FDWCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQWlDLFlBQVksRUFBVyxNQUFNLE9BQU8sQ0FBQztBQUM3RSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQzs7QUFhdEQsTUFBTSxPQUFPLGNBU1gsU0FBUSxnQkFBa0Q7SUFDbkQsT0FBTztRQUNaLE9BQU8sWUFBWSxDQUFDO0lBQ3RCLENBQUM7SUFFRCxJQUFXLElBQUk7UUFDYixPQUFPLElBQUksQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDO0lBQzVCLENBQUM7SUFDRCxJQUFXLFVBQVU7UUFTbkIsT0FBTyxJQUFJLENBQUMsT0FBTyxFQUFFLFVBQVUsQ0FBQztJQUNsQyxDQUFDO0lBQ0QsSUFDVyxRQUFRLENBQUMsS0FBZ0I7UUFDbEMsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDakIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO1FBQ2hDLENBQUM7SUFDSCxDQUFDO0lBRUQsSUFBVyxRQUFRO1FBQ2pCLE9BQU8sSUFBSSxDQUFDLE9BQU8sRUFBRSxRQUFRLENBQUM7SUFDaEMsQ0FBQztJQUNELElBQ1csT0FBTyxDQUFDLEtBQWdCO1FBQ2pDLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ2pCLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztRQUMvQixDQUFDO0lBQ0gsQ0FBQztJQUVELElBQVcsT0FBTztRQUNoQixPQUFPLElBQUksQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDO0lBQy9CLENBQUM7SUFDRCxJQUNXLFNBQVMsQ0FBQyxLQUFnQjtRQUNuQyxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUNqQixJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7UUFDakMsQ0FBQztJQUNILENBQUM7SUFFRCxJQUFXLFNBQVM7UUFDbEIsT0FBTyxJQUFJLENBQUMsT0FBTyxFQUFFLFNBQVMsQ0FBQztJQUNqQyxDQUFDOzhHQXpEVSxjQUFjO2tHQUFkLGNBQWMsd0hBUGQ7WUFDVDtnQkFDRSxPQUFPLEVBQUUsZ0JBQWdCO2dCQUN6QixXQUFXLEVBQUUsVUFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDLGNBQWMsQ0FBQzthQUM5QztTQUNGLGlEQVBTLGVBQWU7OzJGQVNkLGNBQWM7a0JBWDFCLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLGlCQUFpQjtvQkFDM0IsUUFBUSxFQUFFLGVBQWU7b0JBQ3pCLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO29CQUMvQyxTQUFTLEVBQUU7d0JBQ1Q7NEJBQ0UsT0FBTyxFQUFFLGdCQUFnQjs0QkFDekIsV0FBVyxFQUFFLFVBQVUsQ0FBQyxHQUFHLEVBQUUsZUFBZSxDQUFDO3lCQUM5QztxQkFDRjtpQkFDRjs4QkE4QlksUUFBUTtzQkFEbEIsS0FBSztnQkFXSyxPQUFPO3NCQURqQixLQUFLO2dCQVdLLFNBQVM7c0JBRG5CLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBAdHlwZXNjcmlwdC1lc2xpbnQvbmFtaW5nLWNvbnZlbnRpb24gKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vLXVuZGVyc2NvcmUtZGFuZ2xlICovXG4vKiBlc2xpbnQtZGlzYWJsZSBAYW5ndWxhci1lc2xpbnQvY29tcG9uZW50LXNlbGVjdG9yLCBAYW5ndWxhci1lc2xpbnQvY29tcG9uZW50LWNsYXNzLXN1ZmZpeCAqL1xuaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENvbXBvbmVudCxcbiAgSW5wdXQsXG4gIFR5cGUsXG4gIGZvcndhcmRSZWYsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ3VydmUsIE5vcm1hbEJ1ZmZlckF0dHJpYnV0ZXMsIFR1YmVHZW9tZXRyeSwgVmVjdG9yMyB9IGZyb20gJ3RocmVlJztcbmltcG9ydCB7IFRoQnVmZmVyR2VvbWV0cnkgfSBmcm9tICcuL1RoQnVmZmVyR2VvbWV0cnknO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0aC10dWJlR2VvbWV0cnknLFxuICB0ZW1wbGF0ZTogJzxuZy1jb250ZW50Lz4nLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgcHJvdmlkZXJzOiBbXG4gICAge1xuICAgICAgcHJvdmlkZTogVGhCdWZmZXJHZW9tZXRyeSxcbiAgICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IFRoVHViZUdlb21ldHJ5KSxcbiAgICB9LFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBUaFR1YmVHZW9tZXRyeTxcbiAgVCBleHRlbmRzIFR1YmVHZW9tZXRyeSA9IFR1YmVHZW9tZXRyeSxcbiAgVEFSR1MgPSBbXG4gICAgcGF0aD86IEN1cnZlPFZlY3RvcjM+LFxuICAgIHR1YnVsYXJTZWdtZW50cz86IG51bWJlcixcbiAgICByYWRpdXM/OiBudW1iZXIsXG4gICAgcmFkaWFsU2VnbWVudHM/OiBudW1iZXIsXG4gICAgY2xvc2VkPzogYm9vbGVhbixcbiAgXSxcbj4gZXh0ZW5kcyBUaEJ1ZmZlckdlb21ldHJ5PE5vcm1hbEJ1ZmZlckF0dHJpYnV0ZXMsIFQsIFRBUkdTPiB7XG4gIHB1YmxpYyBnZXRUeXBlKCk6IFR5cGU8VHViZUdlb21ldHJ5PiB7XG4gICAgcmV0dXJuIFR1YmVHZW9tZXRyeTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgdHlwZSgpOiAoc3RyaW5nIHwgJ1R1YmVHZW9tZXRyeScpIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fb2JqUmVmPy50eXBlO1xuICB9XG4gIHB1YmxpYyBnZXQgcGFyYW1ldGVycygpOlxuICAgIHwge1xuICAgICAgICByZWFkb25seSBwYXRoOiBDdXJ2ZTxWZWN0b3IzPjtcbiAgICAgICAgcmVhZG9ubHkgdHVidWxhclNlZ21lbnRzOiBudW1iZXI7XG4gICAgICAgIHJlYWRvbmx5IHJhZGl1czogbnVtYmVyO1xuICAgICAgICByZWFkb25seSByYWRpYWxTZWdtZW50czogbnVtYmVyO1xuICAgICAgICByZWFkb25seSBjbG9zZWQ6IGJvb2xlYW47XG4gICAgICB9XG4gICAgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9vYmpSZWY/LnBhcmFtZXRlcnM7XG4gIH1cbiAgQElucHV0KClcbiAgcHVibGljIHNldCB0YW5nZW50cyh2YWx1ZTogVmVjdG9yM1tdKSB7XG4gICAgaWYgKHRoaXMuX29ialJlZikge1xuICAgICAgdGhpcy5fb2JqUmVmLnRhbmdlbnRzID0gdmFsdWU7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGdldCB0YW5nZW50cygpOiBWZWN0b3IzW10gfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9vYmpSZWY/LnRhbmdlbnRzO1xuICB9XG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzZXQgbm9ybWFscyh2YWx1ZTogVmVjdG9yM1tdKSB7XG4gICAgaWYgKHRoaXMuX29ialJlZikge1xuICAgICAgdGhpcy5fb2JqUmVmLm5vcm1hbHMgPSB2YWx1ZTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgZ2V0IG5vcm1hbHMoKTogVmVjdG9yM1tdIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fb2JqUmVmPy5ub3JtYWxzO1xuICB9XG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzZXQgYmlub3JtYWxzKHZhbHVlOiBWZWN0b3IzW10pIHtcbiAgICBpZiAodGhpcy5fb2JqUmVmKSB7XG4gICAgICB0aGlzLl9vYmpSZWYuYmlub3JtYWxzID0gdmFsdWU7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGdldCBiaW5vcm1hbHMoKTogVmVjdG9yM1tdIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fb2JqUmVmPy5iaW5vcm1hbHM7XG4gIH1cbn1cbiJdfQ==