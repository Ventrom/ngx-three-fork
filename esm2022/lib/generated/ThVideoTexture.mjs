/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix */
import { ChangeDetectionStrategy, Component, Input, forwardRef, } from '@angular/core';
import { VideoTexture, } from 'three';
import { ThTextureBase } from '../ThTextureBase';
import { ThTexture } from './ThTexture';
import * as i0 from "@angular/core";
export class ThVideoTexture extends ThTexture {
    getType() {
        return VideoTexture;
    }
    get isVideoTexture() {
        return this._objRef?.isVideoTexture;
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
    set needsUpdate(value) {
        if (this._objRef) {
            this._objRef.needsUpdate = value;
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThVideoTexture, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.1.2", type: ThVideoTexture, selector: "th-videoTexture", inputs: { magFilter: "magFilter", minFilter: "minFilter", generateMipmaps: "generateMipmaps", needsUpdate: "needsUpdate" }, providers: [
            { provide: ThTextureBase, useExisting: forwardRef(() => ThVideoTexture) },
        ], usesInheritance: true, ngImport: i0, template: '<ng-content/>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThVideoTexture, decorators: [{
            type: Component,
            args: [{
                    selector: 'th-videoTexture',
                    template: '<ng-content/>',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    providers: [
                        { provide: ThTextureBase, useExisting: forwardRef(() => ThVideoTexture) },
                    ],
                }]
        }], propDecorators: { magFilter: [{
                type: Input
            }], minFilter: [{
                type: Input
            }], generateMipmaps: [{
                type: Input
            }], needsUpdate: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGhWaWRlb1RleHR1cmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtdGhyZWUvc3JjL2xpYi9nZW5lcmF0ZWQvVGhWaWRlb1RleHR1cmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEseURBQXlEO0FBQ3pELHlDQUF5QztBQUN6QywrRkFBK0Y7QUFDL0YsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixTQUFTLEVBQ1QsS0FBSyxFQUVMLFVBQVUsR0FDWCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBTUwsWUFBWSxHQUViLE1BQU0sT0FBTyxDQUFDO0FBQ2YsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ2pELE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxhQUFhLENBQUM7O0FBVXhDLE1BQU0sT0FBTyxjQWFYLFNBQVEsU0FBbUI7SUFDcEIsT0FBTztRQUNaLE9BQU8sWUFBWSxDQUFDO0lBQ3RCLENBQUM7SUFFRCxJQUFXLGNBQWM7UUFDdkIsT0FBTyxJQUFJLENBQUMsT0FBTyxFQUFFLGNBQWMsQ0FBQztJQUN0QyxDQUFDO0lBQ0QsSUFDVyxTQUFTLENBQUMsS0FBaUM7UUFDcEQsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDakIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1FBQ2pDLENBQUM7SUFDSCxDQUFDO0lBRUQsSUFBVyxTQUFTO1FBQ2xCLE9BQU8sSUFBSSxDQUFDLE9BQU8sRUFBRSxTQUFTLENBQUM7SUFDakMsQ0FBQztJQUNELElBQ1csU0FBUyxDQUFDLEtBQWdDO1FBQ25ELElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ2pCLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztRQUNqQyxDQUFDO0lBQ0gsQ0FBQztJQUVELElBQVcsU0FBUztRQUNsQixPQUFPLElBQUksQ0FBQyxPQUFPLEVBQUUsU0FBUyxDQUFDO0lBQ2pDLENBQUM7SUFDRCxJQUNXLGVBQWUsQ0FBQyxLQUFjO1FBQ3ZDLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ2pCLElBQUksQ0FBQyxPQUFPLENBQUMsZUFBZSxHQUFHLEtBQUssQ0FBQztRQUN2QyxDQUFDO0lBQ0gsQ0FBQztJQUVELElBQVcsZUFBZTtRQUN4QixPQUFPLElBQUksQ0FBQyxPQUFPLEVBQUUsZUFBZSxDQUFDO0lBQ3ZDLENBQUM7SUFDRCxJQUNXLFdBQVcsQ0FBQyxLQUFjO1FBQ25DLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ2pCLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQztRQUNuQyxDQUFDO0lBQ0gsQ0FBQzs4R0F4RFUsY0FBYztrR0FBZCxjQUFjLHNLQUpkO1lBQ1QsRUFBRSxPQUFPLEVBQUUsYUFBYSxFQUFFLFdBQVcsRUFBRSxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsY0FBYyxDQUFDLEVBQUU7U0FDMUUsaURBSlMsZUFBZTs7MkZBTWQsY0FBYztrQkFSMUIsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsaUJBQWlCO29CQUMzQixRQUFRLEVBQUUsZUFBZTtvQkFDekIsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07b0JBQy9DLFNBQVMsRUFBRTt3QkFDVCxFQUFFLE9BQU8sRUFBRSxhQUFhLEVBQUUsV0FBVyxFQUFFLFVBQVUsQ0FBQyxHQUFHLEVBQUUsZUFBZSxDQUFDLEVBQUU7cUJBQzFFO2lCQUNGOzhCQXVCWSxTQUFTO3NCQURuQixLQUFLO2dCQVdLLFNBQVM7c0JBRG5CLEtBQUs7Z0JBV0ssZUFBZTtzQkFEekIsS0FBSztnQkFXSyxXQUFXO3NCQURyQixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgQHR5cGVzY3JpcHQtZXNsaW50L25hbWluZy1jb252ZW50aW9uICovXG4vKiBlc2xpbnQtZGlzYWJsZSBuby11bmRlcnNjb3JlLWRhbmdsZSAqL1xuLyogZXNsaW50LWRpc2FibGUgQGFuZ3VsYXItZXNsaW50L2NvbXBvbmVudC1zZWxlY3RvciwgQGFuZ3VsYXItZXNsaW50L2NvbXBvbmVudC1jbGFzcy1zdWZmaXggKi9cbmltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDb21wb25lbnQsXG4gIElucHV0LFxuICBUeXBlLFxuICBmb3J3YXJkUmVmLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIE1hZ25pZmljYXRpb25UZXh0dXJlRmlsdGVyLFxuICBNYXBwaW5nLFxuICBNaW5pZmljYXRpb25UZXh0dXJlRmlsdGVyLFxuICBQaXhlbEZvcm1hdCxcbiAgVGV4dHVyZURhdGFUeXBlLFxuICBWaWRlb1RleHR1cmUsXG4gIFdyYXBwaW5nLFxufSBmcm9tICd0aHJlZSc7XG5pbXBvcnQgeyBUaFRleHR1cmVCYXNlIH0gZnJvbSAnLi4vVGhUZXh0dXJlQmFzZSc7XG5pbXBvcnQgeyBUaFRleHR1cmUgfSBmcm9tICcuL1RoVGV4dHVyZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3RoLXZpZGVvVGV4dHVyZScsXG4gIHRlbXBsYXRlOiAnPG5nLWNvbnRlbnQvPicsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBwcm92aWRlcnM6IFtcbiAgICB7IHByb3ZpZGU6IFRoVGV4dHVyZUJhc2UsIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IFRoVmlkZW9UZXh0dXJlKSB9LFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBUaFZpZGVvVGV4dHVyZTxcbiAgVCBleHRlbmRzIFZpZGVvVGV4dHVyZSA9IFZpZGVvVGV4dHVyZSxcbiAgVEFSR1MgPSBbXG4gICAgdmlkZW86IEhUTUxWaWRlb0VsZW1lbnQsXG4gICAgbWFwcGluZz86IE1hcHBpbmcsXG4gICAgd3JhcFM/OiBXcmFwcGluZyxcbiAgICB3cmFwVD86IFdyYXBwaW5nLFxuICAgIG1hZ0ZpbHRlcj86IE1hZ25pZmljYXRpb25UZXh0dXJlRmlsdGVyLFxuICAgIG1pbkZpbHRlcj86IE1pbmlmaWNhdGlvblRleHR1cmVGaWx0ZXIsXG4gICAgZm9ybWF0PzogUGl4ZWxGb3JtYXQsXG4gICAgdHlwZT86IFRleHR1cmVEYXRhVHlwZSxcbiAgICBhbmlzb3Ryb3B5PzogbnVtYmVyLFxuICBdLFxuPiBleHRlbmRzIFRoVGV4dHVyZTxULCBUQVJHUz4ge1xuICBwdWJsaWMgZ2V0VHlwZSgpOiBUeXBlPFZpZGVvVGV4dHVyZT4ge1xuICAgIHJldHVybiBWaWRlb1RleHR1cmU7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGlzVmlkZW9UZXh0dXJlKCk6IHRydWUgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9vYmpSZWY/LmlzVmlkZW9UZXh0dXJlO1xuICB9XG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzZXQgbWFnRmlsdGVyKHZhbHVlOiBNYWduaWZpY2F0aW9uVGV4dHVyZUZpbHRlcikge1xuICAgIGlmICh0aGlzLl9vYmpSZWYpIHtcbiAgICAgIHRoaXMuX29ialJlZi5tYWdGaWx0ZXIgPSB2YWx1ZTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgZ2V0IG1hZ0ZpbHRlcigpOiBNYWduaWZpY2F0aW9uVGV4dHVyZUZpbHRlciB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX29ialJlZj8ubWFnRmlsdGVyO1xuICB9XG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzZXQgbWluRmlsdGVyKHZhbHVlOiBNaW5pZmljYXRpb25UZXh0dXJlRmlsdGVyKSB7XG4gICAgaWYgKHRoaXMuX29ialJlZikge1xuICAgICAgdGhpcy5fb2JqUmVmLm1pbkZpbHRlciA9IHZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBnZXQgbWluRmlsdGVyKCk6IE1pbmlmaWNhdGlvblRleHR1cmVGaWx0ZXIgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9vYmpSZWY/Lm1pbkZpbHRlcjtcbiAgfVxuICBASW5wdXQoKVxuICBwdWJsaWMgc2V0IGdlbmVyYXRlTWlwbWFwcyh2YWx1ZTogYm9vbGVhbikge1xuICAgIGlmICh0aGlzLl9vYmpSZWYpIHtcbiAgICAgIHRoaXMuX29ialJlZi5nZW5lcmF0ZU1pcG1hcHMgPSB2YWx1ZTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgZ2V0IGdlbmVyYXRlTWlwbWFwcygpOiBib29sZWFuIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fb2JqUmVmPy5nZW5lcmF0ZU1pcG1hcHM7XG4gIH1cbiAgQElucHV0KClcbiAgcHVibGljIHNldCBuZWVkc1VwZGF0ZSh2YWx1ZTogYm9vbGVhbikge1xuICAgIGlmICh0aGlzLl9vYmpSZWYpIHtcbiAgICAgIHRoaXMuX29ialJlZi5uZWVkc1VwZGF0ZSA9IHZhbHVlO1xuICAgIH1cbiAgfVxufVxuIl19