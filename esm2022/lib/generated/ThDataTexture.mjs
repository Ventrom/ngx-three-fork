/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix */
import { ChangeDetectionStrategy, Component, Input, forwardRef } from '@angular/core';
import { DataTexture, } from 'three';
import { ThTextureBase } from '../ThTextureBase';
import { ThTexture } from './ThTexture';
import * as i0 from "@angular/core";
export class ThDataTexture extends ThTexture {
    getType() {
        return DataTexture;
    }
    get isDataTexture() {
        return this._objRef?.isDataTexture;
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
    set flipY(value) {
        if (this._objRef) {
            this._objRef.flipY = value;
        }
    }
    get flipY() {
        return this._objRef?.flipY;
    }
    set generateMipmaps(value) {
        if (this._objRef) {
            this._objRef.generateMipmaps = value;
        }
    }
    get generateMipmaps() {
        return this._objRef?.generateMipmaps;
    }
    set unpackAlignment(value) {
        if (this._objRef) {
            this._objRef.unpackAlignment = value;
        }
    }
    get unpackAlignment() {
        return this._objRef?.unpackAlignment;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThDataTexture, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.1.2", type: ThDataTexture, selector: "th-dataTexture", inputs: { image: "image", magFilter: "magFilter", minFilter: "minFilter", flipY: "flipY", generateMipmaps: "generateMipmaps", unpackAlignment: "unpackAlignment" }, providers: [{ provide: ThTextureBase, useExisting: forwardRef(() => ThDataTexture) }], usesInheritance: true, ngImport: i0, template: '<ng-content/>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThDataTexture, decorators: [{
            type: Component,
            args: [{
                    selector: 'th-dataTexture',
                    template: '<ng-content/>',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    providers: [{ provide: ThTextureBase, useExisting: forwardRef(() => ThDataTexture) }],
                }]
        }], propDecorators: { image: [{
                type: Input
            }], magFilter: [{
                type: Input
            }], minFilter: [{
                type: Input
            }], flipY: [{
                type: Input
            }], generateMipmaps: [{
                type: Input
            }], unpackAlignment: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGhEYXRhVGV4dHVyZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC10aHJlZS9zcmMvbGliL2dlbmVyYXRlZC9UaERhdGFUZXh0dXJlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHlEQUF5RDtBQUN6RCx5Q0FBeUM7QUFDekMsK0ZBQStGO0FBQy9GLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFRLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM1RixPQUFPLEVBRUwsV0FBVyxHQU9aLE1BQU0sT0FBTyxDQUFDO0FBQ2YsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ2pELE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxhQUFhLENBQUM7O0FBU3hDLE1BQU0sT0FBTyxhQWdCWCxTQUFRLFNBQW1CO0lBQ3BCLE9BQU87UUFDWixPQUFPLFdBQVcsQ0FBQztJQUNyQixDQUFDO0lBRUQsSUFBVyxhQUFhO1FBQ3RCLE9BQU8sSUFBSSxDQUFDLE9BQU8sRUFBRSxhQUFhLENBQUM7SUFDckMsQ0FBQztJQUNELElBQVcsS0FBSztRQUNkLE9BQU8sSUFBSSxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUM7SUFDN0IsQ0FBQztJQUNELElBQ1csS0FBSyxDQUFDLEtBQXVCO1FBQ3RDLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ2pCLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUM3QixDQUFDO0lBQ0gsQ0FBQztJQUVELElBQ1csU0FBUyxDQUFDLEtBQWlDO1FBQ3BELElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ2pCLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztRQUNqQyxDQUFDO0lBQ0gsQ0FBQztJQUVELElBQVcsU0FBUztRQUNsQixPQUFPLElBQUksQ0FBQyxPQUFPLEVBQUUsU0FBUyxDQUFDO0lBQ2pDLENBQUM7SUFDRCxJQUNXLFNBQVMsQ0FBQyxLQUFnQztRQUNuRCxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUNqQixJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7UUFDakMsQ0FBQztJQUNILENBQUM7SUFFRCxJQUFXLFNBQVM7UUFDbEIsT0FBTyxJQUFJLENBQUMsT0FBTyxFQUFFLFNBQVMsQ0FBQztJQUNqQyxDQUFDO0lBQ0QsSUFDVyxLQUFLLENBQUMsS0FBYztRQUM3QixJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUNqQixJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDN0IsQ0FBQztJQUNILENBQUM7SUFFRCxJQUFXLEtBQUs7UUFDZCxPQUFPLElBQUksQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDO0lBQzdCLENBQUM7SUFDRCxJQUNXLGVBQWUsQ0FBQyxLQUFjO1FBQ3ZDLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ2pCLElBQUksQ0FBQyxPQUFPLENBQUMsZUFBZSxHQUFHLEtBQUssQ0FBQztRQUN2QyxDQUFDO0lBQ0gsQ0FBQztJQUVELElBQVcsZUFBZTtRQUN4QixPQUFPLElBQUksQ0FBQyxPQUFPLEVBQUUsZUFBZSxDQUFDO0lBQ3ZDLENBQUM7SUFDRCxJQUNXLGVBQWUsQ0FBQyxLQUFhO1FBQ3RDLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ2pCLElBQUksQ0FBQyxPQUFPLENBQUMsZUFBZSxHQUFHLEtBQUssQ0FBQztRQUN2QyxDQUFDO0lBQ0gsQ0FBQztJQUVELElBQVcsZUFBZTtRQUN4QixPQUFPLElBQUksQ0FBQyxPQUFPLEVBQUUsZUFBZSxDQUFDO0lBQ3ZDLENBQUM7OEdBbkZVLGFBQWE7a0dBQWIsYUFBYSw2TUFGYixDQUFDLEVBQUUsT0FBTyxFQUFFLGFBQWEsRUFBRSxXQUFXLEVBQUUsVUFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDLGFBQWEsQ0FBQyxFQUFFLENBQUMsaURBRjNFLGVBQWU7OzJGQUlkLGFBQWE7a0JBTnpCLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLGdCQUFnQjtvQkFDMUIsUUFBUSxFQUFFLGVBQWU7b0JBQ3pCLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO29CQUMvQyxTQUFTLEVBQUUsQ0FBQyxFQUFFLE9BQU8sRUFBRSxhQUFhLEVBQUUsV0FBVyxFQUFFLFVBQVUsQ0FBQyxHQUFHLEVBQUUsY0FBYyxDQUFDLEVBQUUsQ0FBQztpQkFDdEY7OEJBNkJZLEtBQUs7c0JBRGYsS0FBSztnQkFRSyxTQUFTO3NCQURuQixLQUFLO2dCQVdLLFNBQVM7c0JBRG5CLEtBQUs7Z0JBV0ssS0FBSztzQkFEZixLQUFLO2dCQVdLLGVBQWU7c0JBRHpCLEtBQUs7Z0JBV0ssZUFBZTtzQkFEekIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIEB0eXBlc2NyaXB0LWVzbGludC9uYW1pbmctY29udmVudGlvbiAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tdW5kZXJzY29yZS1kYW5nbGUgKi9cbi8qIGVzbGludC1kaXNhYmxlIEBhbmd1bGFyLWVzbGludC9jb21wb25lbnQtc2VsZWN0b3IsIEBhbmd1bGFyLWVzbGludC9jb21wb25lbnQtY2xhc3Mtc3VmZml4ICovXG5pbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBJbnB1dCwgVHlwZSwgZm9yd2FyZFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgQ29sb3JTcGFjZSxcbiAgRGF0YVRleHR1cmUsXG4gIE1hZ25pZmljYXRpb25UZXh0dXJlRmlsdGVyLFxuICBNYXBwaW5nLFxuICBNaW5pZmljYXRpb25UZXh0dXJlRmlsdGVyLFxuICBQaXhlbEZvcm1hdCxcbiAgVGV4dHVyZURhdGFUeXBlLFxuICBXcmFwcGluZyxcbn0gZnJvbSAndGhyZWUnO1xuaW1wb3J0IHsgVGhUZXh0dXJlQmFzZSB9IGZyb20gJy4uL1RoVGV4dHVyZUJhc2UnO1xuaW1wb3J0IHsgVGhUZXh0dXJlIH0gZnJvbSAnLi9UaFRleHR1cmUnO1xuaW1wb3J0IHsgVGV4dHVyZUltYWdlRGF0YSB9IGZyb20gJ3RocmVlL3NyYy90ZXh0dXJlcy90eXBlcyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3RoLWRhdGFUZXh0dXJlJyxcbiAgdGVtcGxhdGU6ICc8bmctY29udGVudC8+JyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHByb3ZpZGVyczogW3sgcHJvdmlkZTogVGhUZXh0dXJlQmFzZSwgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gVGhEYXRhVGV4dHVyZSkgfV0sXG59KVxuZXhwb3J0IGNsYXNzIFRoRGF0YVRleHR1cmU8XG4gIFQgZXh0ZW5kcyBEYXRhVGV4dHVyZSA9IERhdGFUZXh0dXJlLFxuICBUQVJHUyA9IFtcbiAgICBkYXRhPzogQnVmZmVyU291cmNlIHwgbnVsbCxcbiAgICB3aWR0aD86IG51bWJlcixcbiAgICBoZWlnaHQ/OiBudW1iZXIsXG4gICAgZm9ybWF0PzogUGl4ZWxGb3JtYXQsXG4gICAgdHlwZT86IFRleHR1cmVEYXRhVHlwZSxcbiAgICBtYXBwaW5nPzogTWFwcGluZyxcbiAgICB3cmFwUz86IFdyYXBwaW5nLFxuICAgIHdyYXBUPzogV3JhcHBpbmcsXG4gICAgbWFnRmlsdGVyPzogTWFnbmlmaWNhdGlvblRleHR1cmVGaWx0ZXIsXG4gICAgbWluRmlsdGVyPzogTWluaWZpY2F0aW9uVGV4dHVyZUZpbHRlcixcbiAgICBhbmlzb3Ryb3B5PzogbnVtYmVyLFxuICAgIGNvbG9yU3BhY2U/OiBDb2xvclNwYWNlLFxuICBdLFxuPiBleHRlbmRzIFRoVGV4dHVyZTxULCBUQVJHUz4ge1xuICBwdWJsaWMgZ2V0VHlwZSgpOiBUeXBlPERhdGFUZXh0dXJlPiB7XG4gICAgcmV0dXJuIERhdGFUZXh0dXJlO1xuICB9XG5cbiAgcHVibGljIGdldCBpc0RhdGFUZXh0dXJlKCk6IHRydWUgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9vYmpSZWY/LmlzRGF0YVRleHR1cmU7XG4gIH1cbiAgcHVibGljIGdldCBpbWFnZSgpOiBUZXh0dXJlSW1hZ2VEYXRhIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fb2JqUmVmPy5pbWFnZTtcbiAgfVxuICBASW5wdXQoKVxuICBwdWJsaWMgc2V0IGltYWdlKHZhbHVlOiBUZXh0dXJlSW1hZ2VEYXRhKSB7XG4gICAgaWYgKHRoaXMuX29ialJlZikge1xuICAgICAgdGhpcy5fb2JqUmVmLmltYWdlID0gdmFsdWU7XG4gICAgfVxuICB9XG5cbiAgQElucHV0KClcbiAgcHVibGljIHNldCBtYWdGaWx0ZXIodmFsdWU6IE1hZ25pZmljYXRpb25UZXh0dXJlRmlsdGVyKSB7XG4gICAgaWYgKHRoaXMuX29ialJlZikge1xuICAgICAgdGhpcy5fb2JqUmVmLm1hZ0ZpbHRlciA9IHZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBnZXQgbWFnRmlsdGVyKCk6IE1hZ25pZmljYXRpb25UZXh0dXJlRmlsdGVyIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fb2JqUmVmPy5tYWdGaWx0ZXI7XG4gIH1cbiAgQElucHV0KClcbiAgcHVibGljIHNldCBtaW5GaWx0ZXIodmFsdWU6IE1pbmlmaWNhdGlvblRleHR1cmVGaWx0ZXIpIHtcbiAgICBpZiAodGhpcy5fb2JqUmVmKSB7XG4gICAgICB0aGlzLl9vYmpSZWYubWluRmlsdGVyID0gdmFsdWU7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGdldCBtaW5GaWx0ZXIoKTogTWluaWZpY2F0aW9uVGV4dHVyZUZpbHRlciB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX29ialJlZj8ubWluRmlsdGVyO1xuICB9XG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzZXQgZmxpcFkodmFsdWU6IGJvb2xlYW4pIHtcbiAgICBpZiAodGhpcy5fb2JqUmVmKSB7XG4gICAgICB0aGlzLl9vYmpSZWYuZmxpcFkgPSB2YWx1ZTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgZ2V0IGZsaXBZKCk6IGJvb2xlYW4gfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9vYmpSZWY/LmZsaXBZO1xuICB9XG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzZXQgZ2VuZXJhdGVNaXBtYXBzKHZhbHVlOiBib29sZWFuKSB7XG4gICAgaWYgKHRoaXMuX29ialJlZikge1xuICAgICAgdGhpcy5fb2JqUmVmLmdlbmVyYXRlTWlwbWFwcyA9IHZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBnZXQgZ2VuZXJhdGVNaXBtYXBzKCk6IGJvb2xlYW4gfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9vYmpSZWY/LmdlbmVyYXRlTWlwbWFwcztcbiAgfVxuICBASW5wdXQoKVxuICBwdWJsaWMgc2V0IHVucGFja0FsaWdubWVudCh2YWx1ZTogbnVtYmVyKSB7XG4gICAgaWYgKHRoaXMuX29ialJlZikge1xuICAgICAgdGhpcy5fb2JqUmVmLnVucGFja0FsaWdubWVudCA9IHZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBnZXQgdW5wYWNrQWxpZ25tZW50KCk6IG51bWJlciB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX29ialJlZj8udW5wYWNrQWxpZ25tZW50O1xuICB9XG59XG4iXX0=