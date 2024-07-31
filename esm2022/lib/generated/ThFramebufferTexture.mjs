/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix */
import { ChangeDetectionStrategy, Component, Input, forwardRef, } from '@angular/core';
import { FramebufferTexture, } from 'three';
import { ThTextureBase } from '../ThTextureBase';
import { ThTexture } from './ThTexture';
import * as i0 from "@angular/core";
export class ThFramebufferTexture extends ThTexture {
    getType() {
        return FramebufferTexture;
    }
    get isFramebufferTexture() {
        return this._objRef?.isFramebufferTexture;
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
    set generateMipmaps(value) {
        if (this._objRef) {
            this._objRef.generateMipmaps = value;
        }
    }
    get generateMipmaps() {
        return this._objRef?.generateMipmaps;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThFramebufferTexture, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.1.2", type: ThFramebufferTexture, selector: "th-framebufferTexture", inputs: { magFilter: "magFilter", minFilter: "minFilter", generateMipmaps: "generateMipmaps" }, providers: [
            {
                provide: ThTextureBase,
                useExisting: forwardRef(() => ThFramebufferTexture),
            },
        ], usesInheritance: true, ngImport: i0, template: '<ng-content/>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThFramebufferTexture, decorators: [{
            type: Component,
            args: [{
                    selector: 'th-framebufferTexture',
                    template: '<ng-content/>',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    providers: [
                        {
                            provide: ThTextureBase,
                            useExisting: forwardRef(() => ThFramebufferTexture),
                        },
                    ],
                }]
        }], propDecorators: { magFilter: [{
                type: Input
            }], minFilter: [{
                type: Input
            }], generateMipmaps: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGhGcmFtZWJ1ZmZlclRleHR1cmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtdGhyZWUvc3JjL2xpYi9nZW5lcmF0ZWQvVGhGcmFtZWJ1ZmZlclRleHR1cmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEseURBQXlEO0FBQ3pELHlDQUF5QztBQUN6QywrRkFBK0Y7QUFDL0YsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixTQUFTLEVBQ1QsS0FBSyxFQUVMLFVBQVUsR0FDWCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQ0wsa0JBQWtCLEdBR25CLE1BQU0sT0FBTyxDQUFDO0FBQ2YsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ2pELE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxhQUFhLENBQUM7O0FBYXhDLE1BQU0sT0FBTyxvQkFHWCxTQUFRLFNBQW1CO0lBQ3BCLE9BQU87UUFDWixPQUFPLGtCQUFrQixDQUFDO0lBQzVCLENBQUM7SUFFRCxJQUFXLG9CQUFvQjtRQUM3QixPQUFPLElBQUksQ0FBQyxPQUFPLEVBQUUsb0JBQW9CLENBQUM7SUFDNUMsQ0FBQztJQUNELElBQ1csU0FBUyxDQUFDLEtBQWlDO1FBQ3BELElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ2pCLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztRQUNqQyxDQUFDO0lBQ0gsQ0FBQztJQUVELElBQVcsU0FBUztRQUNsQixPQUFPLElBQUksQ0FBQyxPQUFPLEVBQUUsU0FBUyxDQUFDO0lBQ2pDLENBQUM7SUFDRCxJQUNXLFNBQVMsQ0FBQyxLQUFnQztRQUNuRCxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUNqQixJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7UUFDakMsQ0FBQztJQUNILENBQUM7SUFFRCxJQUFXLFNBQVM7UUFDbEIsT0FBTyxJQUFJLENBQUMsT0FBTyxFQUFFLFNBQVMsQ0FBQztJQUNqQyxDQUFDO0lBQ0QsSUFDVyxlQUFlLENBQUMsS0FBYztRQUN2QyxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUNqQixJQUFJLENBQUMsT0FBTyxDQUFDLGVBQWUsR0FBRyxLQUFLLENBQUM7UUFDdkMsQ0FBQztJQUNILENBQUM7SUFFRCxJQUFXLGVBQWU7UUFDeEIsT0FBTyxJQUFJLENBQUMsT0FBTyxFQUFFLGVBQWUsQ0FBQztJQUN2QyxDQUFDOzhHQXhDVSxvQkFBb0I7a0dBQXBCLG9CQUFvQixnSkFQcEI7WUFDVDtnQkFDRSxPQUFPLEVBQUUsYUFBYTtnQkFDdEIsV0FBVyxFQUFFLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxvQkFBb0IsQ0FBQzthQUNwRDtTQUNGLGlEQVBTLGVBQWU7OzJGQVNkLG9CQUFvQjtrQkFYaEMsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsdUJBQXVCO29CQUNqQyxRQUFRLEVBQUUsZUFBZTtvQkFDekIsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07b0JBQy9DLFNBQVMsRUFBRTt3QkFDVDs0QkFDRSxPQUFPLEVBQUUsYUFBYTs0QkFDdEIsV0FBVyxFQUFFLFVBQVUsQ0FBQyxHQUFHLEVBQUUscUJBQXFCLENBQUM7eUJBQ3BEO3FCQUNGO2lCQUNGOzhCQWFZLFNBQVM7c0JBRG5CLEtBQUs7Z0JBV0ssU0FBUztzQkFEbkIsS0FBSztnQkFXSyxlQUFlO3NCQUR6QixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgQHR5cGVzY3JpcHQtZXNsaW50L25hbWluZy1jb252ZW50aW9uICovXG4vKiBlc2xpbnQtZGlzYWJsZSBuby11bmRlcnNjb3JlLWRhbmdsZSAqL1xuLyogZXNsaW50LWRpc2FibGUgQGFuZ3VsYXItZXNsaW50L2NvbXBvbmVudC1zZWxlY3RvciwgQGFuZ3VsYXItZXNsaW50L2NvbXBvbmVudC1jbGFzcy1zdWZmaXggKi9cbmltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDb21wb25lbnQsXG4gIElucHV0LFxuICBUeXBlLFxuICBmb3J3YXJkUmVmLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIEZyYW1lYnVmZmVyVGV4dHVyZSxcbiAgTWFnbmlmaWNhdGlvblRleHR1cmVGaWx0ZXIsXG4gIE1pbmlmaWNhdGlvblRleHR1cmVGaWx0ZXIsXG59IGZyb20gJ3RocmVlJztcbmltcG9ydCB7IFRoVGV4dHVyZUJhc2UgfSBmcm9tICcuLi9UaFRleHR1cmVCYXNlJztcbmltcG9ydCB7IFRoVGV4dHVyZSB9IGZyb20gJy4vVGhUZXh0dXJlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndGgtZnJhbWVidWZmZXJUZXh0dXJlJyxcbiAgdGVtcGxhdGU6ICc8bmctY29udGVudC8+JyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHByb3ZpZGVyczogW1xuICAgIHtcbiAgICAgIHByb3ZpZGU6IFRoVGV4dHVyZUJhc2UsXG4gICAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBUaEZyYW1lYnVmZmVyVGV4dHVyZSksXG4gICAgfSxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgVGhGcmFtZWJ1ZmZlclRleHR1cmU8XG4gIFQgZXh0ZW5kcyBGcmFtZWJ1ZmZlclRleHR1cmUgPSBGcmFtZWJ1ZmZlclRleHR1cmUsXG4gIFRBUkdTID0gW3dpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyXSxcbj4gZXh0ZW5kcyBUaFRleHR1cmU8VCwgVEFSR1M+IHtcbiAgcHVibGljIGdldFR5cGUoKTogVHlwZTxGcmFtZWJ1ZmZlclRleHR1cmU+IHtcbiAgICByZXR1cm4gRnJhbWVidWZmZXJUZXh0dXJlO1xuICB9XG5cbiAgcHVibGljIGdldCBpc0ZyYW1lYnVmZmVyVGV4dHVyZSgpOiB0cnVlIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fb2JqUmVmPy5pc0ZyYW1lYnVmZmVyVGV4dHVyZTtcbiAgfVxuICBASW5wdXQoKVxuICBwdWJsaWMgc2V0IG1hZ0ZpbHRlcih2YWx1ZTogTWFnbmlmaWNhdGlvblRleHR1cmVGaWx0ZXIpIHtcbiAgICBpZiAodGhpcy5fb2JqUmVmKSB7XG4gICAgICB0aGlzLl9vYmpSZWYubWFnRmlsdGVyID0gdmFsdWU7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGdldCBtYWdGaWx0ZXIoKTogTWFnbmlmaWNhdGlvblRleHR1cmVGaWx0ZXIgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9vYmpSZWY/Lm1hZ0ZpbHRlcjtcbiAgfVxuICBASW5wdXQoKVxuICBwdWJsaWMgc2V0IG1pbkZpbHRlcih2YWx1ZTogTWluaWZpY2F0aW9uVGV4dHVyZUZpbHRlcikge1xuICAgIGlmICh0aGlzLl9vYmpSZWYpIHtcbiAgICAgIHRoaXMuX29ialJlZi5taW5GaWx0ZXIgPSB2YWx1ZTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgZ2V0IG1pbkZpbHRlcigpOiBNaW5pZmljYXRpb25UZXh0dXJlRmlsdGVyIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fb2JqUmVmPy5taW5GaWx0ZXI7XG4gIH1cbiAgQElucHV0KClcbiAgcHVibGljIHNldCBnZW5lcmF0ZU1pcG1hcHModmFsdWU6IGJvb2xlYW4pIHtcbiAgICBpZiAodGhpcy5fb2JqUmVmKSB7XG4gICAgICB0aGlzLl9vYmpSZWYuZ2VuZXJhdGVNaXBtYXBzID0gdmFsdWU7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGdldCBnZW5lcmF0ZU1pcG1hcHMoKTogYm9vbGVhbiB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX29ialJlZj8uZ2VuZXJhdGVNaXBtYXBzO1xuICB9XG59XG4iXX0=