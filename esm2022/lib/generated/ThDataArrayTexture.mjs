/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix */
import { ChangeDetectionStrategy, Component, Input, forwardRef } from '@angular/core';
import { DataArrayTexture } from 'three';
import { ThTextureBase } from '../ThTextureBase';
import { ThTexture } from './ThTexture';
import * as i0 from "@angular/core";
export class ThDataArrayTexture extends ThTexture {
    getType() {
        return DataArrayTexture;
    }
    get isDataArrayTexture() {
        return this._objRef?.isDataArrayTexture;
    }
    get image() {
        return this._objRef?.image;
    }
    set image(value) {
        if (this._objRef) {
            this._objRef.image = value;
        }
    }
    set magFilter(value) {
        if (this._objRef) {
            this._objRef.magFilter = value;
        }
    }
    get magFilter() {
        return this._objRef?.magFilter;
    }
    set minFilter(value) {
        if (this._objRef) {
            this._objRef.minFilter = value;
        }
    }
    get minFilter() {
        return this._objRef?.minFilter;
    }
    set wrapR(value) {
        if (this._objRef) {
            this._objRef.wrapR = value;
        }
    }
    get wrapR() {
        return this._objRef?.wrapR;
    }
    set generateMipmaps(value) {
        if (this._objRef) {
            this._objRef.generateMipmaps = value;
        }
    }
    get generateMipmaps() {
        return this._objRef?.generateMipmaps;
    }
    set flipY(value) {
        if (this._objRef) {
            this._objRef.flipY = value;
        }
    }
    get flipY() {
        return this._objRef?.flipY;
    }
    set unpackAlignment(value) {
        if (this._objRef) {
            this._objRef.unpackAlignment = value;
        }
    }
    get unpackAlignment() {
        return this._objRef?.unpackAlignment;
    }
    set layerUpdates(value) {
        if (this._objRef) {
            this._objRef.layerUpdates = value;
        }
    }
    get layerUpdates() {
        return this._objRef?.layerUpdates;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThDataArrayTexture, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.1.2", type: ThDataArrayTexture, selector: "th-dataArrayTexture", inputs: { image: "image", magFilter: "magFilter", minFilter: "minFilter", wrapR: "wrapR", generateMipmaps: "generateMipmaps", flipY: "flipY", unpackAlignment: "unpackAlignment", layerUpdates: "layerUpdates" }, providers: [
            {
                provide: ThTextureBase,
                useExisting: forwardRef(() => ThDataArrayTexture),
            },
        ], usesInheritance: true, ngImport: i0, template: '<ng-content/>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThDataArrayTexture, decorators: [{
            type: Component,
            args: [{
                    selector: 'th-dataArrayTexture',
                    template: '<ng-content/>',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    providers: [
                        {
                            provide: ThTextureBase,
                            useExisting: forwardRef(() => ThDataArrayTexture),
                        },
                    ],
                }]
        }], propDecorators: { image: [{
                type: Input
            }], magFilter: [{
                type: Input
            }], minFilter: [{
                type: Input
            }], wrapR: [{
                type: Input
            }], generateMipmaps: [{
                type: Input
            }], flipY: [{
                type: Input
            }], unpackAlignment: [{
                type: Input
            }], layerUpdates: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGhEYXRhQXJyYXlUZXh0dXJlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LXRocmVlL3NyYy9saWIvZ2VuZXJhdGVkL1RoRGF0YUFycmF5VGV4dHVyZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSx5REFBeUQ7QUFDekQseUNBQXlDO0FBQ3pDLCtGQUErRjtBQUMvRixPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBUSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDNUYsT0FBTyxFQUFFLGdCQUFnQixFQUF5RCxNQUFNLE9BQU8sQ0FBQztBQUNoRyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDakQsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGFBQWEsQ0FBQzs7QUFjeEMsTUFBTSxPQUFPLGtCQUdYLFNBQVEsU0FBbUI7SUFDcEIsT0FBTztRQUNaLE9BQU8sZ0JBQWdCLENBQUM7SUFDMUIsQ0FBQztJQUVELElBQVcsa0JBQWtCO1FBQzNCLE9BQU8sSUFBSSxDQUFDLE9BQU8sRUFBRSxrQkFBa0IsQ0FBQztJQUMxQyxDQUFDO0lBQ0QsSUFBVyxLQUFLO1FBQ2QsT0FBTyxJQUFJLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQztJQUM3QixDQUFDO0lBQ0QsSUFDVyxLQUFLLENBQUMsS0FBeUI7UUFDeEMsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDakIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQzdCLENBQUM7SUFDSCxDQUFDO0lBRUQsSUFDVyxTQUFTLENBQUMsS0FBaUM7UUFDcEQsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDakIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1FBQ2pDLENBQUM7SUFDSCxDQUFDO0lBRUQsSUFBVyxTQUFTO1FB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QHR5cGVzY3JpcHQtZXNsaW50L25hbWluZy1jb252ZW50aW9uICovXG4vKiBlc2xpbnQtZGlzYWJsZSBuby11bmRlcnNjb3JlLWRhbmdsZSAqL1xuLyogZXNsaW50LWRpc2FibGUgQGFuZ3VsYXItZXNsaW50L2NvbXBvbmVudC1zZWxlY3RvciwgQGFuZ3VsYXItZXNsaW50L2NvbXBvbmVudC1jbGFzcy1zdWZmaXggKi9cbmltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIElucHV0LCBUeXBlLCBmb3J3YXJkUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEYXRhQXJyYXlUZXh0dXJlLCBNYWduaWZpY2F0aW9uVGV4dHVyZUZpbHRlciwgTWluaWZpY2F0aW9uVGV4dHVyZUZpbHRlciB9IGZyb20gJ3RocmVlJztcbmltcG9ydCB7IFRoVGV4dHVyZUJhc2UgfSBmcm9tICcuLi9UaFRleHR1cmVCYXNlJztcbmltcG9ydCB7IFRoVGV4dHVyZSB9IGZyb20gJy4vVGhUZXh0dXJlJztcbmltcG9ydCB7IFRleHR1cmUzREltYWdlRGF0YSB9IGZyb20gJ3RocmVlL3NyYy90ZXh0dXJlcy90eXBlcyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3RoLWRhdGFBcnJheVRleHR1cmUnLFxuICB0ZW1wbGF0ZTogJzxuZy1jb250ZW50Lz4nLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgcHJvdmlkZXJzOiBbXG4gICAge1xuICAgICAgcHJvdmlkZTogVGhUZXh0dXJlQmFzZSxcbiAgICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IFRoRGF0YUFycmF5VGV4dHVyZSksXG4gICAgfSxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgVGhEYXRhQXJyYXlUZXh0dXJlPFxuICBUIGV4dGVuZHMgRGF0YUFycmF5VGV4dHVyZSA9IERhdGFBcnJheVRleHR1cmUsXG4gIFRBUkdTID0gW2RhdGE/OiBCdWZmZXJTb3VyY2UgfCBudWxsLCB3aWR0aD86IG51bWJlciwgaGVpZ2h0PzogbnVtYmVyLCBkZXB0aD86IG51bWJlcl0sXG4+IGV4dGVuZHMgVGhUZXh0dXJlPFQsIFRBUkdTPiB7XG4gIHB1YmxpYyBnZXRUeXBlKCk6IFR5cGU8RGF0YUFycmF5VGV4dHVyZT4ge1xuICAgIHJldHVybiBEYXRhQXJyYXlUZXh0dXJlO1xuICB9XG5cbiAgcHVibGljIGdldCBpc0RhdGFBcnJheVRleHR1cmUoKTogdHJ1ZSB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX29ialJlZj8uaXNEYXRhQXJyYXlUZXh0dXJlO1xuICB9XG4gIHB1YmxpYyBnZXQgaW1hZ2UoKTogVGV4dHVyZTNESW1hZ2VEYXRhIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fb2JqUmVmPy5pbWFnZTtcbiAgfVxuICBASW5wdXQoKVxuICBwdWJsaWMgc2V0IGltYWdlKHZhbHVlOiBUZXh0dXJlM0RJbWFnZURhdGEpIHtcbiAgICBpZiAodGhpcy5fb2JqUmVmKSB7XG4gICAgICB0aGlzLl9vYmpSZWYuaW1hZ2UgPSB2YWx1ZTtcbiAgICB9XG4gIH1cblxuICBASW5wdXQoKVxuICBwdWJsaWMgc2V0IG1hZ0ZpbHRlcih2YWx1ZTogTWFnbmlmaWNhdGlvblRleHR1cmVGaWx0ZXIpIHtcbiAgICBpZiAodGhpcy5fb2JqUmVmKSB7XG4gICAgICB0aGlzLl9vYmpSZWYubWFnRmlsdGVyID0gdmFsdWU7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGdldCBtYWdGaWx0ZXIoKTogTWFnbmlmaWNhdGlvblRleHR1cmVGaWx0ZXIgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9vYmpSZWY/Lm1hZ0ZpbHRlcjtcbiAgfVxuICBASW5wdXQoKVxuICBwdWJsaWMgc2V0IG1pbkZpbHRlcih2YWx1ZTogTWluaWZpY2F0aW9uVGV4dHVyZUZpbHRlcikge1xuICAgIGlmICh0aGlzLl9vYmpSZWYpIHtcbiAgICAgIHRoaXMuX29ialJlZi5taW5GaWx0ZXIgPSB2YWx1ZTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgZ2V0IG1pbkZpbHRlcigpOiBNaW5pZmljYXRpb25UZXh0dXJlRmlsdGVyIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fb2JqUmVmPy5taW5GaWx0ZXI7XG4gIH1cbiAgQElucHV0KClcbiAgcHVibGljIHNldCB3cmFwUih2YWx1ZTogYm9vbGVhbikge1xuICAgIGlmICh0aGlzLl9vYmpSZWYpIHtcbiAgICAgIHRoaXMuX29ialJlZi53cmFwUiA9IHZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBnZXQgd3JhcFIoKTogYm9vbGVhbiB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX29ialJlZj8ud3JhcFI7XG4gIH1cbiAgQElucHV0KClcbiAgcHVibGljIHNldCBnZW5lcmF0ZU1pcG1hcHModmFsdWU6IGJvb2xlYW4pIHtcbiAgICBpZiAodGhpcy5fb2JqUmVmKSB7XG4gICAgICB0aGlzLl9vYmpSZWYuZ2VuZXJhdGVNaXBtYXBzID0gdmFsdWU7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGdldCBnZW5lcmF0ZU1pcG1hcHMoKTogYm9vbGVhbiB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX29ialJlZj8uZ2VuZXJhdGVNaXBtYXBzO1xuICB9XG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzZXQgZmxpcFkodmFsdWU6IGJvb2xlYW4pIHtcbiAgICBpZiAodGhpcy5fb2JqUmVmKSB7XG4gICAgICB0aGlzLl9vYmpSZWYuZmxpcFkgPSB2YWx1ZTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgZ2V0IGZsaXBZKCk6IGJvb2xlYW4gfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9vYmpSZWY/LmZsaXBZO1xuICB9XG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzZXQgdW5wYWNrQWxpZ25tZW50KHZhbHVlOiBudW1iZXIpIHtcbiAgICBpZiAodGhpcy5fb2JqUmVmKSB7XG4gICAgICB0aGlzLl9vYmpSZWYudW5wYWNrQWxpZ25tZW50ID0gdmFsdWU7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGdldCB1bnBhY2tBbGlnbm1lbnQoKTogbnVtYmVyIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fb2JqUmVmPy51bnBhY2tBbGlnbm1lbnQ7XG4gIH1cbiAgQElucHV0KClcbiAgcHVibGljIHNldCBsYXllclVwZGF0ZXModmFsdWU6IFNldDxudW1iZXI+KSB7XG4gICAgaWYgKHRoaXMuX29ialJlZikge1xuICAgICAgdGhpcy5fb2JqUmVmLmxheWVyVXBkYXRlcyA9IHZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBnZXQgbGF5ZXJVcGRhdGVzKCk6IFNldDxudW1iZXI+IHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fb2JqUmVmPy5sYXllclVwZGF0ZXM7XG4gIH1cbn1cbiJdfQ==