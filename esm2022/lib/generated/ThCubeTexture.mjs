/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix */
import { ChangeDetectionStrategy, Component, Input, forwardRef, } from '@angular/core';
import { CubeTexture, } from 'three';
import { ThTextureBase } from '../ThTextureBase';
import { ThTexture } from './ThTexture';
import * as i0 from "@angular/core";
export class ThCubeTexture extends ThTexture {
    getType() {
        return CubeTexture;
    }
    get isCubeTexture() {
        return this._objRef?.isCubeTexture;
    }
    get image() {
        return this._objRef?.image;
    }
    set image(value) {
        if (this._objRef) {
            this._objRef.image = value;
        }
    }
    get images() {
        return this._objRef?.images;
    }
    set images(value) {
        if (this._objRef) {
            this._objRef.images = value;
        }
    }
    set mapping(value) {
        if (this._objRef) {
            this._objRef.mapping = value;
        }
    }
    get mapping() {
        return this._objRef?.mapping;
    }
    set flipY(value) {
        if (this._objRef) {
            this._objRef.flipY = value;
        }
    }
    get flipY() {
        return this._objRef?.flipY;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThCubeTexture, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.1.2", type: ThCubeTexture, selector: "th-cubeTexture", inputs: { image: "image", images: "images", mapping: "mapping", flipY: "flipY" }, providers: [
            { provide: ThTextureBase, useExisting: forwardRef(() => ThCubeTexture) },
        ], usesInheritance: true, ngImport: i0, template: '<ng-content/>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThCubeTexture, decorators: [{
            type: Component,
            args: [{
                    selector: 'th-cubeTexture',
                    template: '<ng-content/>',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    providers: [
                        { provide: ThTextureBase, useExisting: forwardRef(() => ThCubeTexture) },
                    ],
                }]
        }], propDecorators: { image: [{
                type: Input
            }], images: [{
                type: Input
            }], mapping: [{
                type: Input
            }], flipY: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGhDdWJlVGV4dHVyZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC10aHJlZS9zcmMvbGliL2dlbmVyYXRlZC9UaEN1YmVUZXh0dXJlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHlEQUF5RDtBQUN6RCx5Q0FBeUM7QUFDekMsK0ZBQStGO0FBQy9GLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULEtBQUssRUFFTCxVQUFVLEdBQ1gsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUVMLFdBQVcsR0FPWixNQUFNLE9BQU8sQ0FBQztBQUNmLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUNqRCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sYUFBYSxDQUFDOztBQVV4QyxNQUFNLE9BQU8sYUFjWCxTQUFRLFNBQW1CO0lBQ3BCLE9BQU87UUFDWixPQUFPLFdBQVcsQ0FBQztJQUNyQixDQUFDO0lBRUQsSUFBVyxhQUFhO1FBQ3RCLE9BQU8sSUFBSSxDQUFDLE9BQU8sRUFBRSxhQUFhLENBQUM7SUFDckMsQ0FBQztJQUNELElBQVcsS0FBSztRQUNkLE9BQU8sSUFBSSxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUM7SUFDN0IsQ0FBQztJQUNELElBQ1csS0FBSyxDQUFDLEtBQVU7UUFDekIsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDakIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQzdCLENBQUM7SUFDSCxDQUFDO0lBRUQsSUFBVyxNQUFNO1FBQ2YsT0FBTyxJQUFJLENBQUMsT0FBTyxFQUFFLE1BQU0sQ0FBQztJQUM5QixDQUFDO0lBQ0QsSUFDVyxNQUFNLENBQUMsS0FBVTtRQUMxQixJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUNqQixJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDOUIsQ0FBQztJQUNILENBQUM7SUFFRCxJQUNXLE9BQU8sQ0FBQyxLQUF5QjtRQUMxQyxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUNqQixJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7UUFDL0IsQ0FBQztJQUNILENBQUM7SUFFRCxJQUFXLE9BQU87UUFDaEIsT0FBTyxJQUFJLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQztJQUMvQixDQUFDO0lBQ0QsSUFDVyxLQUFLLENBQUMsS0FBYztRQUM3QixJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUNqQixJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDN0IsQ0FBQztJQUNILENBQUM7SUFFRCxJQUFXLEtBQUs7UUFDZCxPQUFPLElBQUksQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDO0lBQzdCLENBQUM7OEdBN0RVLGFBQWE7a0dBQWIsYUFBYSwySEFKYjtZQUNULEVBQUUsT0FBTyxFQUFFLGFBQWEsRUFBRSxXQUFXLEVBQUUsVUFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDLGFBQWEsQ0FBQyxFQUFFO1NBQ3pFLGlEQUpTLGVBQWU7OzJGQU1kLGFBQWE7a0JBUnpCLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLGdCQUFnQjtvQkFDMUIsUUFBUSxFQUFFLGVBQWU7b0JBQ3pCLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO29CQUMvQyxTQUFTLEVBQUU7d0JBQ1QsRUFBRSxPQUFPLEVBQUUsYUFBYSxFQUFFLFdBQVcsRUFBRSxVQUFVLENBQUMsR0FBRyxFQUFFLGNBQWMsQ0FBQyxFQUFFO3FCQUN6RTtpQkFDRjs4QkEyQlksS0FBSztzQkFEZixLQUFLO2dCQVdLLE1BQU07c0JBRGhCLEtBQUs7Z0JBUUssT0FBTztzQkFEakIsS0FBSztnQkFXSyxLQUFLO3NCQURmLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBAdHlwZXNjcmlwdC1lc2xpbnQvbmFtaW5nLWNvbnZlbnRpb24gKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vLXVuZGVyc2NvcmUtZGFuZ2xlICovXG4vKiBlc2xpbnQtZGlzYWJsZSBAYW5ndWxhci1lc2xpbnQvY29tcG9uZW50LXNlbGVjdG9yLCBAYW5ndWxhci1lc2xpbnQvY29tcG9uZW50LWNsYXNzLXN1ZmZpeCAqL1xuaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENvbXBvbmVudCxcbiAgSW5wdXQsXG4gIFR5cGUsXG4gIGZvcndhcmRSZWYsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgQ29sb3JTcGFjZSxcbiAgQ3ViZVRleHR1cmUsXG4gIEN1YmVUZXh0dXJlTWFwcGluZyxcbiAgTWFnbmlmaWNhdGlvblRleHR1cmVGaWx0ZXIsXG4gIE1pbmlmaWNhdGlvblRleHR1cmVGaWx0ZXIsXG4gIFBpeGVsRm9ybWF0LFxuICBUZXh0dXJlRGF0YVR5cGUsXG4gIFdyYXBwaW5nLFxufSBmcm9tICd0aHJlZSc7XG5pbXBvcnQgeyBUaFRleHR1cmVCYXNlIH0gZnJvbSAnLi4vVGhUZXh0dXJlQmFzZSc7XG5pbXBvcnQgeyBUaFRleHR1cmUgfSBmcm9tICcuL1RoVGV4dHVyZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3RoLWN1YmVUZXh0dXJlJyxcbiAgdGVtcGxhdGU6ICc8bmctY29udGVudC8+JyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHByb3ZpZGVyczogW1xuICAgIHsgcHJvdmlkZTogVGhUZXh0dXJlQmFzZSwgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gVGhDdWJlVGV4dHVyZSkgfSxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgVGhDdWJlVGV4dHVyZTxcbiAgVCBleHRlbmRzIEN1YmVUZXh0dXJlID0gQ3ViZVRleHR1cmUsXG4gIFRBUkdTID0gW1xuICAgIGltYWdlcz86IGFueVtdLFxuICAgIG1hcHBpbmc/OiBDdWJlVGV4dHVyZU1hcHBpbmcsXG4gICAgd3JhcFM/OiBXcmFwcGluZyxcbiAgICB3cmFwVD86IFdyYXBwaW5nLFxuICAgIG1hZ0ZpbHRlcj86IE1hZ25pZmljYXRpb25UZXh0dXJlRmlsdGVyLFxuICAgIG1pbkZpbHRlcj86IE1pbmlmaWNhdGlvblRleHR1cmVGaWx0ZXIsXG4gICAgZm9ybWF0PzogUGl4ZWxGb3JtYXQsXG4gICAgdHlwZT86IFRleHR1cmVEYXRhVHlwZSxcbiAgICBhbmlzb3Ryb3B5PzogbnVtYmVyLFxuICAgIGNvbG9yU3BhY2U/OiBDb2xvclNwYWNlLFxuICBdLFxuPiBleHRlbmRzIFRoVGV4dHVyZTxULCBUQVJHUz4ge1xuICBwdWJsaWMgZ2V0VHlwZSgpOiBUeXBlPEN1YmVUZXh0dXJlPiB7XG4gICAgcmV0dXJuIEN1YmVUZXh0dXJlO1xuICB9XG5cbiAgcHVibGljIGdldCBpc0N1YmVUZXh0dXJlKCk6IHRydWUgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9vYmpSZWY/LmlzQ3ViZVRleHR1cmU7XG4gIH1cbiAgcHVibGljIGdldCBpbWFnZSgpOiBhbnkgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9vYmpSZWY/LmltYWdlO1xuICB9XG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzZXQgaW1hZ2UodmFsdWU6IGFueSkge1xuICAgIGlmICh0aGlzLl9vYmpSZWYpIHtcbiAgICAgIHRoaXMuX29ialJlZi5pbWFnZSA9IHZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBnZXQgaW1hZ2VzKCk6IGFueSB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX29ialJlZj8uaW1hZ2VzO1xuICB9XG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzZXQgaW1hZ2VzKHZhbHVlOiBhbnkpIHtcbiAgICBpZiAodGhpcy5fb2JqUmVmKSB7XG4gICAgICB0aGlzLl9vYmpSZWYuaW1hZ2VzID0gdmFsdWU7XG4gICAgfVxuICB9XG5cbiAgQElucHV0KClcbiAgcHVibGljIHNldCBtYXBwaW5nKHZhbHVlOiBDdWJlVGV4dHVyZU1hcHBpbmcpIHtcbiAgICBpZiAodGhpcy5fb2JqUmVmKSB7XG4gICAgICB0aGlzLl9vYmpSZWYubWFwcGluZyA9IHZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBnZXQgbWFwcGluZygpOiBDdWJlVGV4dHVyZU1hcHBpbmcgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9vYmpSZWY/Lm1hcHBpbmc7XG4gIH1cbiAgQElucHV0KClcbiAgcHVibGljIHNldCBmbGlwWSh2YWx1ZTogYm9vbGVhbikge1xuICAgIGlmICh0aGlzLl9vYmpSZWYpIHtcbiAgICAgIHRoaXMuX29ialJlZi5mbGlwWSA9IHZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBnZXQgZmxpcFkoKTogYm9vbGVhbiB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX29ialJlZj8uZmxpcFk7XG4gIH1cbn1cbiJdfQ==