/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix */
import { ChangeDetectionStrategy, Component, Input, forwardRef, } from '@angular/core';
import { CompressedArrayTexture, } from 'three';
import { ThTextureBase } from '../ThTextureBase';
import { ThCompressedTexture } from './ThCompressedTexture';
import * as i0 from "@angular/core";
export class ThCompressedArrayTexture extends ThCompressedTexture {
    getType() {
        return CompressedArrayTexture;
    }
    get isCompressedArrayTexture() {
        return this._objRef?.isCompressedArrayTexture;
    }
    get image() {
        return this._objRef?.image;
    }
    set image(value) {
        if (this._objRef) {
            this._objRef.image = value;
        }
    }
    set wrapR(value) {
        if (this._objRef) {
            this._objRef.wrapR = value;
        }
    }
    get wrapR() {
        return this._objRef?.wrapR;
    }
    set layerUpdates(value) {
        if (this._objRef) {
            this._objRef.layerUpdates = value;
        }
    }
    get layerUpdates() {
        return this._objRef?.layerUpdates;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThCompressedArrayTexture, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.1.2", type: ThCompressedArrayTexture, selector: "th-compressedArrayTexture", inputs: { image: "image", wrapR: "wrapR", layerUpdates: "layerUpdates" }, providers: [
            {
                provide: ThTextureBase,
                useExisting: forwardRef(() => ThCompressedArrayTexture),
            },
        ], usesInheritance: true, ngImport: i0, template: '<ng-content/>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThCompressedArrayTexture, decorators: [{
            type: Component,
            args: [{
                    selector: 'th-compressedArrayTexture',
                    template: '<ng-content/>',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    providers: [
                        {
                            provide: ThTextureBase,
                            useExisting: forwardRef(() => ThCompressedArrayTexture),
                        },
                    ],
                }]
        }], propDecorators: { image: [{
                type: Input
            }], wrapR: [{
                type: Input
            }], layerUpdates: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGhDb21wcmVzc2VkQXJyYXlUZXh0dXJlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LXRocmVlL3NyYy9saWIvZ2VuZXJhdGVkL1RoQ29tcHJlc3NlZEFycmF5VGV4dHVyZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSx5REFBeUQ7QUFDekQseUNBQXlDO0FBQ3pDLCtGQUErRjtBQUMvRixPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxLQUFLLEVBRUwsVUFBVSxHQUNYLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFDTCxzQkFBc0IsR0FJdkIsTUFBTSxPQUFPLENBQUM7QUFDZixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDakQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7O0FBYTVELE1BQU0sT0FBTyx3QkFVWCxTQUFRLG1CQUE2QjtJQUM5QixPQUFPO1FBQ1osT0FBTyxzQkFBc0IsQ0FBQztJQUNoQyxDQUFDO0lBRUQsSUFBVyx3QkFBd0I7UUFDakMsT0FBTyxJQUFJLENBQUMsT0FBTyxFQUFFLHdCQUF3QixDQUFDO0lBQ2hELENBQUM7SUFDRCxJQUFXLEtBQUs7UUFHZCxPQUFPLElBQUksQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDO0lBQzdCLENBQUM7SUFDRCxJQUNXLEtBQUssQ0FBQyxLQUF1RDtRQUN0RSxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUNqQixJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDN0IsQ0FBQztJQUNILENBQUM7SUFFRCxJQUNXLEtBQUssQ0FBQyxLQUFlO1FBQzlCLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ2pCLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUM3QixDQUFDO0lBQ0gsQ0FBQztJQUVELElBQVcsS0FBSztRQUNkLE9BQU8sSUFBSSxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUM7SUFDN0IsQ0FBQztJQUNELElBQ1csWUFBWSxDQUFDLEtBQWtCO1FBQ3hDLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ2pCLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQztRQUNwQyxDQUFDO0lBQ0gsQ0FBQztJQUVELElBQVcsWUFBWTtRQUNyQixPQUFPLElBQUksQ0FBQyxPQUFPLEVBQUUsWUFBWSxDQUFDO0lBQ3BDLENBQUM7OEdBakRVLHdCQUF3QjtrR0FBeEIsd0JBQXdCLDhIQVB4QjtZQUNUO2dCQUNFLE9BQU8sRUFBRSxhQUFhO2dCQUN0QixXQUFXLEVBQUUsVUFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDLHdCQUF3QixDQUFDO2FBQ3hEO1NBQ0YsaURBUFMsZUFBZTs7MkZBU2Qsd0JBQXdCO2tCQVhwQyxTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSwyQkFBMkI7b0JBQ3JDLFFBQVEsRUFBRSxlQUFlO29CQUN6QixlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtvQkFDL0MsU0FBUyxFQUFFO3dCQUNUOzRCQUNFLE9BQU8sRUFBRSxhQUFhOzRCQUN0QixXQUFXLEVBQUUsVUFBVSxDQUFDLEdBQUcsRUFBRSx5QkFBeUIsQ0FBQzt5QkFDeEQ7cUJBQ0Y7aUJBQ0Y7OEJBeUJZLEtBQUs7c0JBRGYsS0FBSztnQkFRSyxLQUFLO3NCQURmLEtBQUs7Z0JBV0ssWUFBWTtzQkFEdEIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIEB0eXBlc2NyaXB0LWVzbGludC9uYW1pbmctY29udmVudGlvbiAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tdW5kZXJzY29yZS1kYW5nbGUgKi9cbi8qIGVzbGludC1kaXNhYmxlIEBhbmd1bGFyLWVzbGludC9jb21wb25lbnQtc2VsZWN0b3IsIEBhbmd1bGFyLWVzbGludC9jb21wb25lbnQtY2xhc3Mtc3VmZml4ICovXG5pbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ29tcG9uZW50LFxuICBJbnB1dCxcbiAgVHlwZSxcbiAgZm9yd2FyZFJlZixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBDb21wcmVzc2VkQXJyYXlUZXh0dXJlLFxuICBDb21wcmVzc2VkUGl4ZWxGb3JtYXQsXG4gIFRleHR1cmVEYXRhVHlwZSxcbiAgV3JhcHBpbmcsXG59IGZyb20gJ3RocmVlJztcbmltcG9ydCB7IFRoVGV4dHVyZUJhc2UgfSBmcm9tICcuLi9UaFRleHR1cmVCYXNlJztcbmltcG9ydCB7IFRoQ29tcHJlc3NlZFRleHR1cmUgfSBmcm9tICcuL1RoQ29tcHJlc3NlZFRleHR1cmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0aC1jb21wcmVzc2VkQXJyYXlUZXh0dXJlJyxcbiAgdGVtcGxhdGU6ICc8bmctY29udGVudC8+JyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHByb3ZpZGVyczogW1xuICAgIHtcbiAgICAgIHByb3ZpZGU6IFRoVGV4dHVyZUJhc2UsXG4gICAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBUaENvbXByZXNzZWRBcnJheVRleHR1cmUpLFxuICAgIH0sXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIFRoQ29tcHJlc3NlZEFycmF5VGV4dHVyZTxcbiAgVCBleHRlbmRzIENvbXByZXNzZWRBcnJheVRleHR1cmUgPSBDb21wcmVzc2VkQXJyYXlUZXh0dXJlLFxuICBUQVJHUyA9IFtcbiAgICBtaXBtYXBzOiBJbWFnZURhdGFbXSxcbiAgICB3aWR0aDogbnVtYmVyLFxuICAgIGhlaWdodDogbnVtYmVyLFxuICAgIGRlcHRoOiBudW1iZXIsXG4gICAgZm9ybWF0OiBDb21wcmVzc2VkUGl4ZWxGb3JtYXQsXG4gICAgdHlwZT86IFRleHR1cmVEYXRhVHlwZSxcbiAgXSxcbj4gZXh0ZW5kcyBUaENvbXByZXNzZWRUZXh0dXJlPFQsIFRBUkdTPiB7XG4gIHB1YmxpYyBnZXRUeXBlKCk6IFR5cGU8Q29tcHJlc3NlZEFycmF5VGV4dHVyZT4ge1xuICAgIHJldHVybiBDb21wcmVzc2VkQXJyYXlUZXh0dXJlO1xuICB9XG5cbiAgcHVibGljIGdldCBpc0NvbXByZXNzZWRBcnJheVRleHR1cmUoKTogdHJ1ZSB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX29ialJlZj8uaXNDb21wcmVzc2VkQXJyYXlUZXh0dXJlO1xuICB9XG4gIHB1YmxpYyBnZXQgaW1hZ2UoKTpcbiAgICB8IHsgd2lkdGg6IG51bWJlcjsgaGVpZ2h0OiBudW1iZXI7IGRlcHRoOiBudW1iZXIgfVxuICAgIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fb2JqUmVmPy5pbWFnZTtcbiAgfVxuICBASW5wdXQoKVxuICBwdWJsaWMgc2V0IGltYWdlKHZhbHVlOiB7IHdpZHRoOiBudW1iZXI7IGhlaWdodDogbnVtYmVyOyBkZXB0aDogbnVtYmVyIH0pIHtcbiAgICBpZiAodGhpcy5fb2JqUmVmKSB7XG4gICAgICB0aGlzLl9vYmpSZWYuaW1hZ2UgPSB2YWx1ZTtcbiAgICB9XG4gIH1cblxuICBASW5wdXQoKVxuICBwdWJsaWMgc2V0IHdyYXBSKHZhbHVlOiBXcmFwcGluZykge1xuICAgIGlmICh0aGlzLl9vYmpSZWYpIHtcbiAgICAgIHRoaXMuX29ialJlZi53cmFwUiA9IHZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBnZXQgd3JhcFIoKTogV3JhcHBpbmcgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9vYmpSZWY/LndyYXBSO1xuICB9XG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzZXQgbGF5ZXJVcGRhdGVzKHZhbHVlOiBTZXQ8bnVtYmVyPikge1xuICAgIGlmICh0aGlzLl9vYmpSZWYpIHtcbiAgICAgIHRoaXMuX29ialJlZi5sYXllclVwZGF0ZXMgPSB2YWx1ZTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgZ2V0IGxheWVyVXBkYXRlcygpOiBTZXQ8bnVtYmVyPiB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX29ialJlZj8ubGF5ZXJVcGRhdGVzO1xuICB9XG59XG4iXX0=