/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix */
import { ChangeDetectionStrategy, Component, Input, forwardRef, } from '@angular/core';
import { CompressedTexture, } from 'three';
import { ThTextureBase } from '../ThTextureBase';
import { ThTexture } from './ThTexture';
import * as i0 from "@angular/core";
export class ThCompressedTexture extends ThTexture {
    getType() {
        return CompressedTexture;
    }
    get isCompressedTexture() {
        return this._objRef?.isCompressedTexture;
    }
    get image() {
        return this._objRef?.image;
    }
    set image(value) {
        if (this._objRef) {
            this._objRef.image = value;
        }
    }
    set mipmaps(value) {
        if (this._objRef) {
            this._objRef.mipmaps = value;
        }
    }
    get mipmaps() {
        return this._objRef?.mipmaps;
    }
    set format(value) {
        if (this._objRef) {
            this._objRef.format = value;
        }
    }
    get format() {
        return this._objRef?.format;
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThCompressedTexture, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.1.2", type: ThCompressedTexture, selector: "th-compressedTexture", inputs: { image: "image", mipmaps: "mipmaps", format: "format", flipY: "flipY", generateMipmaps: "generateMipmaps" }, providers: [
            {
                provide: ThTextureBase,
                useExisting: forwardRef(() => ThCompressedTexture),
            },
        ], usesInheritance: true, ngImport: i0, template: '<ng-content/>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThCompressedTexture, decorators: [{
            type: Component,
            args: [{
                    selector: 'th-compressedTexture',
                    template: '<ng-content/>',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    providers: [
                        {
                            provide: ThTextureBase,
                            useExisting: forwardRef(() => ThCompressedTexture),
                        },
                    ],
                }]
        }], propDecorators: { image: [{
                type: Input
            }], mipmaps: [{
                type: Input
            }], format: [{
                type: Input
            }], flipY: [{
                type: Input
            }], generateMipmaps: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGhDb21wcmVzc2VkVGV4dHVyZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC10aHJlZS9zcmMvbGliL2dlbmVyYXRlZC9UaENvbXByZXNzZWRUZXh0dXJlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHlEQUF5RDtBQUN6RCx5Q0FBeUM7QUFDekMsK0ZBQStGO0FBQy9GLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULEtBQUssRUFFTCxVQUFVLEdBQ1gsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUdMLGlCQUFpQixHQU1sQixNQUFNLE9BQU8sQ0FBQztBQUNmLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUNqRCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sYUFBYSxDQUFDOztBQWF4QyxNQUFNLE9BQU8sbUJBZ0JYLFNBQVEsU0FBbUI7SUFDcEIsT0FBTztRQUNaLE9BQU8saUJBQWlCLENBQUM7SUFDM0IsQ0FBQztJQUVELElBQVcsbUJBQW1CO1FBQzVCLE9BQU8sSUFBSSxDQUFDLE9BQU8sRUFBRSxtQkFBbUIsQ0FBQztJQUMzQyxDQUFDO0lBQ0QsSUFBVyxLQUFLO1FBQ2QsT0FBTyxJQUFJLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQztJQUM3QixDQUFDO0lBQ0QsSUFDVyxLQUFLLENBQUMsS0FBd0M7UUFDdkQsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDakIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQzdCLENBQUM7SUFDSCxDQUFDO0lBRUQsSUFDVyxPQUFPLENBQUMsS0FBa0I7UUFDbkMsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDakIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO1FBQy9CLENBQUM7SUFDSCxDQUFDO0lBRUQsSUFBVyxPQUFPO1FBQ2hCLE9BQU8sSUFBSSxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUM7SUFDL0IsQ0FBQztJQUNELElBQ1csTUFBTSxDQUFDLEtBQTRCO1FBQzVDLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ2pCLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUM5QixDQUFDO0lBQ0gsQ0FBQztJQUVELElBQVcsTUFBTTtRQUNmLE9BQU8sSUFBSSxDQUFDLE9BQU8sRUFBRSxNQUFNLENBQUM7SUFDOUIsQ0FBQztJQUNELElBQ1csS0FBSyxDQUFDLEtBQWM7UUFDN0IsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDakIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQzdCLENBQUM7SUFDSCxDQUFDO0lBRUQsSUFBVyxLQUFLO1FBQ2QsT0FBTyxJQUFJLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQztJQUM3QixDQUFDO0lBQ0QsSUFDVyxlQUFlLENBQUMsS0FBYztRQUN2QyxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUNqQixJQUFJLENBQUMsT0FBTyxDQUFDLGVBQWUsR0FBRyxLQUFLLENBQUM7UUFDdkMsQ0FBQztJQUNILENBQUM7SUFFRCxJQUFXLGVBQWU7UUFDeEIsT0FBTyxJQUFJLENBQUMsT0FBTyxFQUFFLGVBQWUsQ0FBQztJQUN2QyxDQUFDOzhHQXpFVSxtQkFBbUI7a0dBQW5CLG1CQUFtQixxS0FQbkI7WUFDVDtnQkFDRSxPQUFPLEVBQUUsYUFBYTtnQkFDdEIsV0FBVyxFQUFFLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxtQkFBbUIsQ0FBQzthQUNuRDtTQUNGLGlEQVBTLGVBQWU7OzJGQVNkLG1CQUFtQjtrQkFYL0IsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsc0JBQXNCO29CQUNoQyxRQUFRLEVBQUUsZUFBZTtvQkFDekIsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07b0JBQy9DLFNBQVMsRUFBRTt3QkFDVDs0QkFDRSxPQUFPLEVBQUUsYUFBYTs0QkFDdEIsV0FBVyxFQUFFLFVBQVUsQ0FBQyxHQUFHLEVBQUUsb0JBQW9CLENBQUM7eUJBQ25EO3FCQUNGO2lCQUNGOzhCQTZCWSxLQUFLO3NCQURmLEtBQUs7Z0JBUUssT0FBTztzQkFEakIsS0FBSztnQkFXSyxNQUFNO3NCQURoQixLQUFLO2dCQVdLLEtBQUs7c0JBRGYsS0FBSztnQkFXSyxlQUFlO3NCQUR6QixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgQHR5cGVzY3JpcHQtZXNsaW50L25hbWluZy1jb252ZW50aW9uICovXG4vKiBlc2xpbnQtZGlzYWJsZSBuby11bmRlcnNjb3JlLWRhbmdsZSAqL1xuLyogZXNsaW50LWRpc2FibGUgQGFuZ3VsYXItZXNsaW50L2NvbXBvbmVudC1zZWxlY3RvciwgQGFuZ3VsYXItZXNsaW50L2NvbXBvbmVudC1jbGFzcy1zdWZmaXggKi9cbmltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDb21wb25lbnQsXG4gIElucHV0LFxuICBUeXBlLFxuICBmb3J3YXJkUmVmLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIENvbG9yU3BhY2UsXG4gIENvbXByZXNzZWRQaXhlbEZvcm1hdCxcbiAgQ29tcHJlc3NlZFRleHR1cmUsXG4gIE1hZ25pZmljYXRpb25UZXh0dXJlRmlsdGVyLFxuICBNYXBwaW5nLFxuICBNaW5pZmljYXRpb25UZXh0dXJlRmlsdGVyLFxuICBUZXh0dXJlRGF0YVR5cGUsXG4gIFdyYXBwaW5nLFxufSBmcm9tICd0aHJlZSc7XG5pbXBvcnQgeyBUaFRleHR1cmVCYXNlIH0gZnJvbSAnLi4vVGhUZXh0dXJlQmFzZSc7XG5pbXBvcnQgeyBUaFRleHR1cmUgfSBmcm9tICcuL1RoVGV4dHVyZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3RoLWNvbXByZXNzZWRUZXh0dXJlJyxcbiAgdGVtcGxhdGU6ICc8bmctY29udGVudC8+JyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHByb3ZpZGVyczogW1xuICAgIHtcbiAgICAgIHByb3ZpZGU6IFRoVGV4dHVyZUJhc2UsXG4gICAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBUaENvbXByZXNzZWRUZXh0dXJlKSxcbiAgICB9LFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBUaENvbXByZXNzZWRUZXh0dXJlPFxuICBUIGV4dGVuZHMgQ29tcHJlc3NlZFRleHR1cmUgPSBDb21wcmVzc2VkVGV4dHVyZSxcbiAgVEFSR1MgPSBbXG4gICAgbWlwbWFwczogSW1hZ2VEYXRhW10sXG4gICAgd2lkdGg6IG51bWJlcixcbiAgICBoZWlnaHQ6IG51bWJlcixcbiAgICBmb3JtYXQ6IENvbXByZXNzZWRQaXhlbEZvcm1hdCxcbiAgICB0eXBlPzogVGV4dHVyZURhdGFUeXBlLFxuICAgIG1hcHBpbmc/OiBNYXBwaW5nLFxuICAgIHdyYXBTPzogV3JhcHBpbmcsXG4gICAgd3JhcFQ/OiBXcmFwcGluZyxcbiAgICBtYWdGaWx0ZXI/OiBNYWduaWZpY2F0aW9uVGV4dHVyZUZpbHRlcixcbiAgICBtaW5GaWx0ZXI/OiBNaW5pZmljYXRpb25UZXh0dXJlRmlsdGVyLFxuICAgIGFuaXNvdHJvcHk/OiBudW1iZXIsXG4gICAgY29sb3JTcGFjZT86IENvbG9yU3BhY2UsXG4gIF0sXG4+IGV4dGVuZHMgVGhUZXh0dXJlPFQsIFRBUkdTPiB7XG4gIHB1YmxpYyBnZXRUeXBlKCk6IFR5cGU8Q29tcHJlc3NlZFRleHR1cmU+IHtcbiAgICByZXR1cm4gQ29tcHJlc3NlZFRleHR1cmU7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGlzQ29tcHJlc3NlZFRleHR1cmUoKTogdHJ1ZSB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX29ialJlZj8uaXNDb21wcmVzc2VkVGV4dHVyZTtcbiAgfVxuICBwdWJsaWMgZ2V0IGltYWdlKCk6IHsgd2lkdGg6IG51bWJlcjsgaGVpZ2h0OiBudW1iZXIgfSB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX29ialJlZj8uaW1hZ2U7XG4gIH1cbiAgQElucHV0KClcbiAgcHVibGljIHNldCBpbWFnZSh2YWx1ZTogeyB3aWR0aDogbnVtYmVyOyBoZWlnaHQ6IG51bWJlciB9KSB7XG4gICAgaWYgKHRoaXMuX29ialJlZikge1xuICAgICAgdGhpcy5fb2JqUmVmLmltYWdlID0gdmFsdWU7XG4gICAgfVxuICB9XG5cbiAgQElucHV0KClcbiAgcHVibGljIHNldCBtaXBtYXBzKHZhbHVlOiBJbWFnZURhdGFbXSkge1xuICAgIGlmICh0aGlzLl9vYmpSZWYpIHtcbiAgICAgIHRoaXMuX29ialJlZi5taXBtYXBzID0gdmFsdWU7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGdldCBtaXBtYXBzKCk6IEltYWdlRGF0YVtdIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fb2JqUmVmPy5taXBtYXBzO1xuICB9XG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzZXQgZm9ybWF0KHZhbHVlOiBDb21wcmVzc2VkUGl4ZWxGb3JtYXQpIHtcbiAgICBpZiAodGhpcy5fb2JqUmVmKSB7XG4gICAgICB0aGlzLl9vYmpSZWYuZm9ybWF0ID0gdmFsdWU7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGdldCBmb3JtYXQoKTogQ29tcHJlc3NlZFBpeGVsRm9ybWF0IHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fb2JqUmVmPy5mb3JtYXQ7XG4gIH1cbiAgQElucHV0KClcbiAgcHVibGljIHNldCBmbGlwWSh2YWx1ZTogYm9vbGVhbikge1xuICAgIGlmICh0aGlzLl9vYmpSZWYpIHtcbiAgICAgIHRoaXMuX29ialJlZi5mbGlwWSA9IHZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBnZXQgZmxpcFkoKTogYm9vbGVhbiB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX29ialJlZj8uZmxpcFk7XG4gIH1cbiAgQElucHV0KClcbiAgcHVibGljIHNldCBnZW5lcmF0ZU1pcG1hcHModmFsdWU6IGJvb2xlYW4pIHtcbiAgICBpZiAodGhpcy5fb2JqUmVmKSB7XG4gICAgICB0aGlzLl9vYmpSZWYuZ2VuZXJhdGVNaXBtYXBzID0gdmFsdWU7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGdldCBnZW5lcmF0ZU1pcG1hcHMoKTogYm9vbGVhbiB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX29ialJlZj8uZ2VuZXJhdGVNaXBtYXBzO1xuICB9XG59XG4iXX0=