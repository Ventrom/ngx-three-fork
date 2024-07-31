/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix */
import { ChangeDetectionStrategy, Component, Input, forwardRef, } from '@angular/core';
import { InstancedBufferGeometry } from 'three';
import { ThBufferGeometry } from './ThBufferGeometry';
import * as i0 from "@angular/core";
export class ThInstancedBufferGeometry extends ThBufferGeometry {
    getType() {
        return InstancedBufferGeometry;
    }
    set type(value) {
        if (this._objRef) {
            this._objRef.type = value;
        }
    }
    get type() {
        return this._objRef?.type;
    }
    get isInstancedBufferGeometry() {
        return this._objRef?.isInstancedBufferGeometry;
    }
    set instanceCount(value) {
        if (this._objRef) {
            this._objRef.instanceCount = value;
        }
    }
    get instanceCount() {
        return this._objRef?.instanceCount;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThInstancedBufferGeometry, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.1.2", type: ThInstancedBufferGeometry, selector: "th-instancedBufferGeometry", inputs: { type: "type", instanceCount: "instanceCount" }, providers: [
            {
                provide: ThBufferGeometry,
                useExisting: forwardRef(() => ThInstancedBufferGeometry),
            },
        ], usesInheritance: true, ngImport: i0, template: '<ng-content/>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThInstancedBufferGeometry, decorators: [{
            type: Component,
            args: [{
                    selector: 'th-instancedBufferGeometry',
                    template: '<ng-content/>',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    providers: [
                        {
                            provide: ThBufferGeometry,
                            useExisting: forwardRef(() => ThInstancedBufferGeometry),
                        },
                    ],
                }]
        }], propDecorators: { type: [{
                type: Input
            }], instanceCount: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGhJbnN0YW5jZWRCdWZmZXJHZW9tZXRyeS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC10aHJlZS9zcmMvbGliL2dlbmVyYXRlZC9UaEluc3RhbmNlZEJ1ZmZlckdlb21ldHJ5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHlEQUF5RDtBQUN6RCx5Q0FBeUM7QUFDekMsK0ZBQStGO0FBQy9GLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULEtBQUssRUFFTCxVQUFVLEdBQ1gsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLHVCQUF1QixFQUEwQixNQUFNLE9BQU8sQ0FBQztBQUN4RSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQzs7QUFhdEQsTUFBTSxPQUFPLHlCQUdYLFNBQVEsZ0JBQWtEO0lBQ25ELE9BQU87UUFDWixPQUFPLHVCQUF1QixDQUFDO0lBQ2pDLENBQUM7SUFFRCxJQUNXLElBQUksQ0FBQyxLQUFhO1FBQzNCLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ2pCLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQztRQUM1QixDQUFDO0lBQ0gsQ0FBQztJQUVELElBQVcsSUFBSTtRQUNiLE9BQU8sSUFBSSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUM7SUFDNUIsQ0FBQztJQUNELElBQVcseUJBQXlCO1FBQ2xDLE9BQU8sSUFBSSxDQUFDLE9BQU8sRUFBRSx5QkFBeUIsQ0FBQztJQUNqRCxDQUFDO0lBQ0QsSUFDVyxhQUFhLENBQUMsS0FBYTtRQUNwQyxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUNqQixJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7UUFDckMsQ0FBQztJQUNILENBQUM7SUFFRCxJQUFXLGFBQWE7UUFDdEIsT0FBTyxJQUFJLENBQUMsT0FBTyxFQUFFLGFBQWEsQ0FBQztJQUNyQyxDQUFDOzhHQTlCVSx5QkFBeUI7a0dBQXpCLHlCQUF5QiwrR0FQekI7WUFDVDtnQkFDRSxPQUFPLEVBQUUsZ0JBQWdCO2dCQUN6QixXQUFXLEVBQUUsVUFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDLHlCQUF5QixDQUFDO2FBQ3pEO1NBQ0YsaURBUFMsZUFBZTs7MkZBU2QseUJBQXlCO2tCQVhyQyxTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSw0QkFBNEI7b0JBQ3RDLFFBQVEsRUFBRSxlQUFlO29CQUN6QixlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtvQkFDL0MsU0FBUyxFQUFFO3dCQUNUOzRCQUNFLE9BQU8sRUFBRSxnQkFBZ0I7NEJBQ3pCLFdBQVcsRUFBRSxVQUFVLENBQUMsR0FBRyxFQUFFLDBCQUEwQixDQUFDO3lCQUN6RDtxQkFDRjtpQkFDRjs4QkFVWSxJQUFJO3NCQURkLEtBQUs7Z0JBY0ssYUFBYTtzQkFEdkIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIEB0eXBlc2NyaXB0LWVzbGludC9uYW1pbmctY29udmVudGlvbiAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tdW5kZXJzY29yZS1kYW5nbGUgKi9cbi8qIGVzbGludC1kaXNhYmxlIEBhbmd1bGFyLWVzbGludC9jb21wb25lbnQtc2VsZWN0b3IsIEBhbmd1bGFyLWVzbGludC9jb21wb25lbnQtY2xhc3Mtc3VmZml4ICovXG5pbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ29tcG9uZW50LFxuICBJbnB1dCxcbiAgVHlwZSxcbiAgZm9yd2FyZFJlZixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBJbnN0YW5jZWRCdWZmZXJHZW9tZXRyeSwgTm9ybWFsQnVmZmVyQXR0cmlidXRlcyB9IGZyb20gJ3RocmVlJztcbmltcG9ydCB7IFRoQnVmZmVyR2VvbWV0cnkgfSBmcm9tICcuL1RoQnVmZmVyR2VvbWV0cnknO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0aC1pbnN0YW5jZWRCdWZmZXJHZW9tZXRyeScsXG4gIHRlbXBsYXRlOiAnPG5nLWNvbnRlbnQvPicsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBwcm92aWRlcnM6IFtcbiAgICB7XG4gICAgICBwcm92aWRlOiBUaEJ1ZmZlckdlb21ldHJ5LFxuICAgICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gVGhJbnN0YW5jZWRCdWZmZXJHZW9tZXRyeSksXG4gICAgfSxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgVGhJbnN0YW5jZWRCdWZmZXJHZW9tZXRyeTxcbiAgVCBleHRlbmRzIEluc3RhbmNlZEJ1ZmZlckdlb21ldHJ5ID0gSW5zdGFuY2VkQnVmZmVyR2VvbWV0cnksXG4gIFRBUkdTID0gW10sXG4+IGV4dGVuZHMgVGhCdWZmZXJHZW9tZXRyeTxOb3JtYWxCdWZmZXJBdHRyaWJ1dGVzLCBULCBUQVJHUz4ge1xuICBwdWJsaWMgZ2V0VHlwZSgpOiBUeXBlPEluc3RhbmNlZEJ1ZmZlckdlb21ldHJ5PiB7XG4gICAgcmV0dXJuIEluc3RhbmNlZEJ1ZmZlckdlb21ldHJ5O1xuICB9XG5cbiAgQElucHV0KClcbiAgcHVibGljIHNldCB0eXBlKHZhbHVlOiBzdHJpbmcpIHtcbiAgICBpZiAodGhpcy5fb2JqUmVmKSB7XG4gICAgICB0aGlzLl9vYmpSZWYudHlwZSA9IHZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBnZXQgdHlwZSgpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9vYmpSZWY/LnR5cGU7XG4gIH1cbiAgcHVibGljIGdldCBpc0luc3RhbmNlZEJ1ZmZlckdlb21ldHJ5KCk6IHRydWUgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9vYmpSZWY/LmlzSW5zdGFuY2VkQnVmZmVyR2VvbWV0cnk7XG4gIH1cbiAgQElucHV0KClcbiAgcHVibGljIHNldCBpbnN0YW5jZUNvdW50KHZhbHVlOiBudW1iZXIpIHtcbiAgICBpZiAodGhpcy5fb2JqUmVmKSB7XG4gICAgICB0aGlzLl9vYmpSZWYuaW5zdGFuY2VDb3VudCA9IHZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBnZXQgaW5zdGFuY2VDb3VudCgpOiBudW1iZXIgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9vYmpSZWY/Lmluc3RhbmNlQ291bnQ7XG4gIH1cbn1cbiJdfQ==