/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix */
import { ChangeDetectionStrategy, Component, Input, forwardRef, } from '@angular/core';
import { DepthTexture, } from 'three';
import { ThTextureBase } from '../ThTextureBase';
import { ThTexture } from './ThTexture';
import * as i0 from "@angular/core";
export class ThDepthTexture extends ThTexture {
    getType() {
        return DepthTexture;
    }
    get isDepthTexture() {
        return this._objRef?.isDepthTexture;
    }
    get image() {
        return this._objRef?.image;
    }
    set image(value) {
        if (this._objRef) {
            this._objRef.image = value;
        }
    }
    set flipY(value) {
        if (this._objRef) {
            this._objRef.flipY = value;
        }
    }
    get flipY() {
        return this._objRef?.flipY;
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
    set format(value) {
        if (this._objRef) {
            this._objRef.format = value;
        }
    }
    get format() {
        return this._objRef?.format;
    }
    set type(value) {
        if (this._objRef) {
            this._objRef.type = value;
        }
    }
    get type() {
        return this._objRef?.type;
    }
    set compareFunction(value) {
        if (this._objRef) {
            this._objRef.compareFunction = value;
        }
    }
    get compareFunction() {
        return this._objRef?.compareFunction;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThDepthTexture, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.1.2", type: ThDepthTexture, selector: "th-depthTexture", inputs: { image: "image", flipY: "flipY", magFilter: "magFilter", minFilter: "minFilter", generateMipmaps: "generateMipmaps", format: "format", type: "type", compareFunction: "compareFunction" }, providers: [
            { provide: ThTextureBase, useExisting: forwardRef(() => ThDepthTexture) },
        ], usesInheritance: true, ngImport: i0, template: '<ng-content/>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThDepthTexture, decorators: [{
            type: Component,
            args: [{
                    selector: 'th-depthTexture',
                    template: '<ng-content/>',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    providers: [
                        { provide: ThTextureBase, useExisting: forwardRef(() => ThDepthTexture) },
                    ],
                }]
        }], propDecorators: { image: [{
                type: Input
            }], flipY: [{
                type: Input
            }], magFilter: [{
                type: Input
            }], minFilter: [{
                type: Input
            }], generateMipmaps: [{
                type: Input
            }], format: [{
                type: Input
            }], type: [{
                type: Input
            }], compareFunction: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGhEZXB0aFRleHR1cmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtdGhyZWUvc3JjL2xpYi9nZW5lcmF0ZWQvVGhEZXB0aFRleHR1cmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEseURBQXlEO0FBQ3pELHlDQUF5QztBQUN6QywrRkFBK0Y7QUFDL0YsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixTQUFTLEVBQ1QsS0FBSyxFQUVMLFVBQVUsR0FDWCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQ0wsWUFBWSxHQVFiLE1BQU0sT0FBTyxDQUFDO0FBQ2YsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ2pELE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxhQUFhLENBQUM7O0FBVXhDLE1BQU0sT0FBTyxjQWNYLFNBQVEsU0FBbUI7SUFDcEIsT0FBTztRQUNaLE9BQU8sWUFBWSxDQUFDO0lBQ3RCLENBQUM7SUFFRCxJQUFXLGNBQWM7UUFDdkIsT0FBTyxJQUFJLENBQUMsT0FBTyxFQUFFLGNBQWMsQ0FBQztJQUN0QyxDQUFDO0lBQ0QsSUFBVyxLQUFLO1FBQ2QsT0FBTyxJQUFJLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQztJQUM3QixDQUFDO0lBQ0QsSUFDVyxLQUFLLENBQUMsS0FBd0M7UUFDdkQsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDakIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQzdCLENBQUM7SUFDSCxDQUFDO0lBRUQsSUFDVyxLQUFLLENBQUMsS0FBYztRQUM3QixJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUNqQixJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDN0IsQ0FBQztJQUNILENBQUM7SUFFRCxJQUFXLEtBQUs7UUFDZCxPQUFPLElBQUksQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDO0lBQzdCLENBQUM7SUFDRCxJQUNXLFNBQVMsQ0FBQyxLQUFpQztRQUNwRCxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUNqQixJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7UUFDakMsQ0FBQztJQUNILENBQUM7SUFFRCxJQUFXLFNBQVM7UUFDbEIsT0FBTyxJQUFJLENBQUMsT0FBTyxFQUFFLFNBQVMsQ0FBQztJQUNqQyxDQUFDO0lBQ0QsSUFDVyxTQUFTLENBQUMsS0FBZ0M7UUFDbkQsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDakIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1FBQ2pDLENBQUM7SUFDSCxDQUFDO0lBRUQsSUFBVyxTQUFTO1FBQ2xCLE9BQU8sSUFBSSxDQUFDLE9BQU8sRUFBRSxTQUFTLENBQUM7SUFDakMsQ0FBQztJQUNELElBQ1csZUFBZSxDQUFDLEtBQWM7UUFDdkMsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDakIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxlQUFlLEdBQUcsS0FBSyxDQUFDO1FBQ3ZDLENBQUM7SUFDSCxDQUFDO0lBRUQsSUFBVyxlQUFlO1FBQ3hCLE9BQU8sSUFBSSxDQUFDLE9BQU8sRUFBRSxlQUFlLENBQUM7SUFDdkMsQ0FBQztJQUNELElBQ1csTUFBTSxDQUFDLEtBQThCO1FBQzlDLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ2pCLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUM5QixDQUFDO0lBQ0gsQ0FBQztJQUVELElBQVcsTUFBTTtRQUNmLE9BQU8sSUFBSSxDQUFDLE9BQU8sRUFBRSxNQUFNLENBQUM7SUFDOUIsQ0FBQztJQUNELElBQ1csSUFBSSxDQUFDLEtBQXNCO1FBQ3BDLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ2pCLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQztRQUM1QixDQUFDO0lBQ0gsQ0FBQztJQUVELElBQVcsSUFBSTtRQUNiLE9BQU8sSUFBSSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUM7SUFDNUIsQ0FBQztJQUNELElBQ1csZUFBZSxDQUFDLEtBQXVDO1FBQ2hFLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ2pCLElBQUksQ0FBQyxPQUFPLENBQUMsZUFBZSxHQUFHLEtBQUssQ0FBQztRQUN2QyxDQUFDO0lBQ0gsQ0FBQztJQUVELElBQVcsZUFBZTtRQUN4QixPQUFPLElBQUksQ0FBQyxPQUFPLEVBQUUsZUFBZSxDQUFDO0lBQ3ZDLENBQUM7OEdBckdVLGNBQWM7a0dBQWQsY0FBYyw4T0FKZDtZQUNULEVBQUUsT0FBTyxFQUFFLGFBQWEsRUFBRSxXQUFXLEVBQUUsVUFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDLGNBQWMsQ0FBQyxFQUFFO1NBQzFFLGlEQUpTLGVBQWU7OzJGQU1kLGNBQWM7a0JBUjFCLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLGlCQUFpQjtvQkFDM0IsUUFBUSxFQUFFLGVBQWU7b0JBQ3pCLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO29CQUMvQyxTQUFTLEVBQUU7d0JBQ1QsRUFBRSxPQUFPLEVBQUUsYUFBYSxFQUFFLFdBQVcsRUFBRSxVQUFVLENBQUMsR0FBRyxFQUFFLGVBQWUsQ0FBQyxFQUFFO3FCQUMxRTtpQkFDRjs4QkEyQlksS0FBSztzQkFEZixLQUFLO2dCQVFLLEtBQUs7c0JBRGYsS0FBSztnQkFXSyxTQUFTO3NCQURuQixLQUFLO2dCQVdLLFNBQVM7c0JBRG5CLEtBQUs7Z0JBV0ssZUFBZTtzQkFEekIsS0FBSztnQkFXSyxNQUFNO3NCQURoQixLQUFLO2dCQVdLLElBQUk7c0JBRGQsS0FBSztnQkFXSyxlQUFlO3NCQUR6QixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgQHR5cGVzY3JpcHQtZXNsaW50L25hbWluZy1jb252ZW50aW9uICovXG4vKiBlc2xpbnQtZGlzYWJsZSBuby11bmRlcnNjb3JlLWRhbmdsZSAqL1xuLyogZXNsaW50LWRpc2FibGUgQGFuZ3VsYXItZXNsaW50L2NvbXBvbmVudC1zZWxlY3RvciwgQGFuZ3VsYXItZXNsaW50L2NvbXBvbmVudC1jbGFzcy1zdWZmaXggKi9cbmltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDb21wb25lbnQsXG4gIElucHV0LFxuICBUeXBlLFxuICBmb3J3YXJkUmVmLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIERlcHRoVGV4dHVyZSxcbiAgRGVwdGhUZXh0dXJlUGl4ZWxGb3JtYXQsXG4gIE1hZ25pZmljYXRpb25UZXh0dXJlRmlsdGVyLFxuICBNYXBwaW5nLFxuICBNaW5pZmljYXRpb25UZXh0dXJlRmlsdGVyLFxuICBUZXh0dXJlQ29tcGFyaXNvbkZ1bmN0aW9uLFxuICBUZXh0dXJlRGF0YVR5cGUsXG4gIFdyYXBwaW5nLFxufSBmcm9tICd0aHJlZSc7XG5pbXBvcnQgeyBUaFRleHR1cmVCYXNlIH0gZnJvbSAnLi4vVGhUZXh0dXJlQmFzZSc7XG5pbXBvcnQgeyBUaFRleHR1cmUgfSBmcm9tICcuL1RoVGV4dHVyZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3RoLWRlcHRoVGV4dHVyZScsXG4gIHRlbXBsYXRlOiAnPG5nLWNvbnRlbnQvPicsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBwcm92aWRlcnM6IFtcbiAgICB7IHByb3ZpZGU6IFRoVGV4dHVyZUJhc2UsIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IFRoRGVwdGhUZXh0dXJlKSB9LFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBUaERlcHRoVGV4dHVyZTxcbiAgVCBleHRlbmRzIERlcHRoVGV4dHVyZSA9IERlcHRoVGV4dHVyZSxcbiAgVEFSR1MgPSBbXG4gICAgd2lkdGg6IG51bWJlcixcbiAgICBoZWlnaHQ6IG51bWJlcixcbiAgICB0eXBlPzogVGV4dHVyZURhdGFUeXBlLFxuICAgIG1hcHBpbmc/OiBNYXBwaW5nLFxuICAgIHdyYXBTPzogV3JhcHBpbmcsXG4gICAgd3JhcFQ/OiBXcmFwcGluZyxcbiAgICBtYWdGaWx0ZXI/OiBNYWduaWZpY2F0aW9uVGV4dHVyZUZpbHRlcixcbiAgICBtaW5GaWx0ZXI/OiBNaW5pZmljYXRpb25UZXh0dXJlRmlsdGVyLFxuICAgIGFuaXNvdHJvcHk/OiBudW1iZXIsXG4gICAgZm9ybWF0PzogRGVwdGhUZXh0dXJlUGl4ZWxGb3JtYXQsXG4gIF0sXG4+IGV4dGVuZHMgVGhUZXh0dXJlPFQsIFRBUkdTPiB7XG4gIHB1YmxpYyBnZXRUeXBlKCk6IFR5cGU8RGVwdGhUZXh0dXJlPiB7XG4gICAgcmV0dXJuIERlcHRoVGV4dHVyZTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaXNEZXB0aFRleHR1cmUoKTogdHJ1ZSB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX29ialJlZj8uaXNEZXB0aFRleHR1cmU7XG4gIH1cbiAgcHVibGljIGdldCBpbWFnZSgpOiB7IHdpZHRoOiBudW1iZXI7IGhlaWdodDogbnVtYmVyIH0gfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9vYmpSZWY/LmltYWdlO1xuICB9XG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzZXQgaW1hZ2UodmFsdWU6IHsgd2lkdGg6IG51bWJlcjsgaGVpZ2h0OiBudW1iZXIgfSkge1xuICAgIGlmICh0aGlzLl9vYmpSZWYpIHtcbiAgICAgIHRoaXMuX29ialJlZi5pbWFnZSA9IHZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzZXQgZmxpcFkodmFsdWU6IGJvb2xlYW4pIHtcbiAgICBpZiAodGhpcy5fb2JqUmVmKSB7XG4gICAgICB0aGlzLl9vYmpSZWYuZmxpcFkgPSB2YWx1ZTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgZ2V0IGZsaXBZKCk6IGJvb2xlYW4gfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9vYmpSZWY/LmZsaXBZO1xuICB9XG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzZXQgbWFnRmlsdGVyKHZhbHVlOiBNYWduaWZpY2F0aW9uVGV4dHVyZUZpbHRlcikge1xuICAgIGlmICh0aGlzLl9vYmpSZWYpIHtcbiAgICAgIHRoaXMuX29ialJlZi5tYWdGaWx0ZXIgPSB2YWx1ZTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgZ2V0IG1hZ0ZpbHRlcigpOiBNYWduaWZpY2F0aW9uVGV4dHVyZUZpbHRlciB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX29ialJlZj8ubWFnRmlsdGVyO1xuICB9XG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzZXQgbWluRmlsdGVyKHZhbHVlOiBNaW5pZmljYXRpb25UZXh0dXJlRmlsdGVyKSB7XG4gICAgaWYgKHRoaXMuX29ialJlZikge1xuICAgICAgdGhpcy5fb2JqUmVmLm1pbkZpbHRlciA9IHZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBnZXQgbWluRmlsdGVyKCk6IE1pbmlmaWNhdGlvblRleHR1cmVGaWx0ZXIgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9vYmpSZWY/Lm1pbkZpbHRlcjtcbiAgfVxuICBASW5wdXQoKVxuICBwdWJsaWMgc2V0IGdlbmVyYXRlTWlwbWFwcyh2YWx1ZTogYm9vbGVhbikge1xuICAgIGlmICh0aGlzLl9vYmpSZWYpIHtcbiAgICAgIHRoaXMuX29ialJlZi5nZW5lcmF0ZU1pcG1hcHMgPSB2YWx1ZTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgZ2V0IGdlbmVyYXRlTWlwbWFwcygpOiBib29sZWFuIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fb2JqUmVmPy5nZW5lcmF0ZU1pcG1hcHM7XG4gIH1cbiAgQElucHV0KClcbiAgcHVibGljIHNldCBmb3JtYXQodmFsdWU6IERlcHRoVGV4dHVyZVBpeGVsRm9ybWF0KSB7XG4gICAgaWYgKHRoaXMuX29ialJlZikge1xuICAgICAgdGhpcy5fb2JqUmVmLmZvcm1hdCA9IHZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBnZXQgZm9ybWF0KCk6IERlcHRoVGV4dHVyZVBpeGVsRm9ybWF0IHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fb2JqUmVmPy5mb3JtYXQ7XG4gIH1cbiAgQElucHV0KClcbiAgcHVibGljIHNldCB0eXBlKHZhbHVlOiBUZXh0dXJlRGF0YVR5cGUpIHtcbiAgICBpZiAodGhpcy5fb2JqUmVmKSB7XG4gICAgICB0aGlzLl9vYmpSZWYudHlwZSA9IHZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBnZXQgdHlwZSgpOiBUZXh0dXJlRGF0YVR5cGUgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9vYmpSZWY/LnR5cGU7XG4gIH1cbiAgQElucHV0KClcbiAgcHVibGljIHNldCBjb21wYXJlRnVuY3Rpb24odmFsdWU6IFRleHR1cmVDb21wYXJpc29uRnVuY3Rpb24gfCBudWxsKSB7XG4gICAgaWYgKHRoaXMuX29ialJlZikge1xuICAgICAgdGhpcy5fb2JqUmVmLmNvbXBhcmVGdW5jdGlvbiA9IHZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBnZXQgY29tcGFyZUZ1bmN0aW9uKCk6IChUZXh0dXJlQ29tcGFyaXNvbkZ1bmN0aW9uIHwgbnVsbCkgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9vYmpSZWY/LmNvbXBhcmVGdW5jdGlvbjtcbiAgfVxufVxuIl19