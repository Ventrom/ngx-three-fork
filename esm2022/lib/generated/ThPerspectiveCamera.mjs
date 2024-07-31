/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix */
import { ChangeDetectionStrategy, Component, Input, forwardRef, } from '@angular/core';
import { PerspectiveCamera } from 'three';
import { ThCamera } from './ThCamera';
import { ThObject3D } from './ThObject3D';
import * as i0 from "@angular/core";
export class ThPerspectiveCamera extends ThCamera {
    getType() {
        return PerspectiveCamera;
    }
    get isPerspectiveCamera() {
        return this._objRef?.isPerspectiveCamera;
    }
    get type() {
        return this._objRef?.type;
    }
    set zoom(value) {
        if (this._objRef) {
            this._objRef.zoom = value;
        }
    }
    get zoom() {
        return this._objRef?.zoom;
    }
    set fov(value) {
        if (this._objRef) {
            this._objRef.fov = value;
        }
    }
    get fov() {
        return this._objRef?.fov;
    }
    set aspect(value) {
        if (this._objRef) {
            this._objRef.aspect = value;
        }
    }
    get aspect() {
        return this._objRef?.aspect;
    }
    set near(value) {
        if (this._objRef) {
            this._objRef.near = value;
        }
    }
    get near() {
        return this._objRef?.near;
    }
    set far(value) {
        if (this._objRef) {
            this._objRef.far = value;
        }
    }
    get far() {
        return this._objRef?.far;
    }
    set focus(value) {
        if (this._objRef) {
            this._objRef.focus = value;
        }
    }
    get focus() {
        return this._objRef?.focus;
    }
    set view(value) {
        if (this._objRef) {
            this._objRef.view = value;
        }
    }
    get view() {
        return this._objRef?.view;
    }
    set filmGauge(value) {
        if (this._objRef) {
            this._objRef.filmGauge = value;
        }
    }
    get filmGauge() {
        return this._objRef?.filmGauge;
    }
    set filmOffset(value) {
        if (this._objRef) {
            this._objRef.filmOffset = value;
        }
    }
    get filmOffset() {
        return this._objRef?.filmOffset;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThPerspectiveCamera, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.1.2", type: ThPerspectiveCamera, selector: "th-perspectiveCamera", inputs: { zoom: "zoom", fov: "fov", aspect: "aspect", near: "near", far: "far", focus: "focus", view: "view", filmGauge: "filmGauge", filmOffset: "filmOffset" }, providers: [
            { provide: ThObject3D, useExisting: forwardRef(() => ThPerspectiveCamera) },
            { provide: ThCamera, useExisting: forwardRef(() => ThPerspectiveCamera) },
        ], usesInheritance: true, ngImport: i0, template: '<ng-content/>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThPerspectiveCamera, decorators: [{
            type: Component,
            args: [{
                    selector: 'th-perspectiveCamera',
                    template: '<ng-content/>',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    providers: [
                        { provide: ThObject3D, useExisting: forwardRef(() => ThPerspectiveCamera) },
                        { provide: ThCamera, useExisting: forwardRef(() => ThPerspectiveCamera) },
                    ],
                }]
        }], propDecorators: { zoom: [{
                type: Input
            }], fov: [{
                type: Input
            }], aspect: [{
                type: Input
            }], near: [{
                type: Input
            }], far: [{
                type: Input
            }], focus: [{
                type: Input
            }], view: [{
                type: Input
            }], filmGauge: [{
                type: Input
            }], filmOffset: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGhQZXJzcGVjdGl2ZUNhbWVyYS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC10aHJlZS9zcmMvbGliL2dlbmVyYXRlZC9UaFBlcnNwZWN0aXZlQ2FtZXJhLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHlEQUF5RDtBQUN6RCx5Q0FBeUM7QUFDekMsK0ZBQStGO0FBQy9GLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULEtBQUssRUFFTCxVQUFVLEdBQ1gsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sT0FBTyxDQUFDO0FBQzFDLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxZQUFZLENBQUM7QUFDdEMsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGNBQWMsQ0FBQzs7QUFXMUMsTUFBTSxPQUFPLG1CQUdYLFNBQVEsUUFBa0I7SUFDbkIsT0FBTztRQUNaLE9BQU8saUJBQWlCLENBQUM7SUFDM0IsQ0FBQztJQUVELElBQVcsbUJBQW1CO1FBQzVCLE9BQU8sSUFBSSxDQUFDLE9BQU8sRUFBRSxtQkFBbUIsQ0FBQztJQUMzQyxDQUFDO0lBQ0QsSUFBVyxJQUFJO1FBQ2IsT0FBTyxJQUFJLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQztJQUM1QixDQUFDO0lBQ0QsSUFDVyxJQUFJLENBQUMsS0FBYTtRQUMzQixJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUNqQixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksR0FBRyxLQUFLLENBQUM7UUFDNUIsQ0FBQztJQUNILENBQUM7SUFFRCxJQUFXLElBQUk7UUFDYixPQUFPLElBQUksQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDO0lBQzVCLENBQUM7SUFDRCxJQUNXLEdBQUcsQ0FBQyxLQUFhO1FBQzFCLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ2pCLElBQUksQ0FBQyxPQUFP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b0JBQy9DLFNBQVMsRUFBRTt3QkFDVCxFQUFFLE9BQU8sRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFLFVBQVUsQ0FBQyxHQUFHLEVBQUUsb0JBQW9CLENBQUMsRUFBRTt3QkFDM0UsRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLFdBQVcsRUFBRSxVQUFVLENBQUMsR0FBRyxFQUFFLG9CQUFvQixDQUFDLEVBQUU7cUJBQzFFO2lCQUNGOzhCQWdCWSxJQUFJO3NCQURkLEtBQUs7Z0JBV0ssR0FBRztzQkFEYixLQUFLO2dCQVdLLE1BQU07c0JBRGhCLEtBQUs7Z0JBV0ssSUFBSTtzQkFEZCxLQUFLO2dCQVdLLEdBQUc7c0JBRGIsS0FBSztnQkFXSyxLQUFLO3NCQURmLEtBQUs7Z0JBV0ssSUFBSTtzQkFEZCxLQUFLO2dCQStCSyxTQUFTO3NCQURuQixLQUFLO2dCQVdLLFVBQVU7c0JBRHBCLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBAdHlwZXNjcmlwdC1lc2xpbnQvbmFtaW5nLWNvbnZlbnRpb24gKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vLXVuZGVyc2NvcmUtZGFuZ2xlICovXG4vKiBlc2xpbnQtZGlzYWJsZSBAYW5ndWxhci1lc2xpbnQvY29tcG9uZW50LXNlbGVjdG9yLCBAYW5ndWxhci1lc2xpbnQvY29tcG9uZW50LWNsYXNzLXN1ZmZpeCAqL1xuaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENvbXBvbmVudCxcbiAgSW5wdXQsXG4gIFR5cGUsXG4gIGZvcndhcmRSZWYsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUGVyc3BlY3RpdmVDYW1lcmEgfSBmcm9tICd0aHJlZSc7XG5pbXBvcnQgeyBUaENhbWVyYSB9IGZyb20gJy4vVGhDYW1lcmEnO1xuaW1wb3J0IHsgVGhPYmplY3QzRCB9IGZyb20gJy4vVGhPYmplY3QzRCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3RoLXBlcnNwZWN0aXZlQ2FtZXJhJyxcbiAgdGVtcGxhdGU6ICc8bmctY29udGVudC8+JyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHByb3ZpZGVyczogW1xuICAgIHsgcHJvdmlkZTogVGhPYmplY3QzRCwgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gVGhQZXJzcGVjdGl2ZUNhbWVyYSkgfSxcbiAgICB7IHByb3ZpZGU6IFRoQ2FtZXJhLCB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBUaFBlcnNwZWN0aXZlQ2FtZXJhKSB9LFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBUaFBlcnNwZWN0aXZlQ2FtZXJhPFxuICBUIGV4dGVuZHMgUGVyc3BlY3RpdmVDYW1lcmEgPSBQZXJzcGVjdGl2ZUNhbWVyYSxcbiAgVEFSR1MgPSBbZm92PzogbnVtYmVyLCBhc3BlY3Q/OiBudW1iZXIsIG5lYXI/OiBudW1iZXIsIGZhcj86IG51bWJlcl0sXG4+IGV4dGVuZHMgVGhDYW1lcmE8VCwgVEFSR1M+IHtcbiAgcHVibGljIGdldFR5cGUoKTogVHlwZTxQZXJzcGVjdGl2ZUNhbWVyYT4ge1xuICAgIHJldHVybiBQZXJzcGVjdGl2ZUNhbWVyYTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaXNQZXJzcGVjdGl2ZUNhbWVyYSgpOiB0cnVlIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fb2JqUmVmPy5pc1BlcnNwZWN0aXZlQ2FtZXJhO1xuICB9XG4gIHB1YmxpYyBnZXQgdHlwZSgpOiAoc3RyaW5nIHwgJ1BlcnNwZWN0aXZlQ2FtZXJhJykgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9vYmpSZWY/LnR5cGU7XG4gIH1cbiAgQElucHV0KClcbiAgcHVibGljIHNldCB6b29tKHZhbHVlOiBudW1iZXIpIHtcbiAgICBpZiAodGhpcy5fb2JqUmVmKSB7XG4gICAgICB0aGlzLl9vYmpSZWYuem9vbSA9IHZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBnZXQgem9vbSgpOiBudW1iZXIgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9vYmpSZWY/Lnpvb207XG4gIH1cbiAgQElucHV0KClcbiAgcHVibGljIHNldCBmb3YodmFsdWU6IG51bWJlcikge1xuICAgIGlmICh0aGlzLl9vYmpSZWYpIHtcbiAgICAgIHRoaXMuX29ialJlZi5mb3YgPSB2YWx1ZTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgZ2V0IGZvdigpOiBudW1iZXIgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9vYmpSZWY/LmZvdjtcbiAgfVxuICBASW5wdXQoKVxuICBwdWJsaWMgc2V0IGFzcGVjdCh2YWx1ZTogbnVtYmVyKSB7XG4gICAgaWYgKHRoaXMuX29ialJlZikge1xuICAgICAgdGhpcy5fb2JqUmVmLmFzcGVjdCA9IHZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBnZXQgYXNwZWN0KCk6IG51bWJlciB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX29ialJlZj8uYXNwZWN0O1xuICB9XG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzZXQgbmVhcih2YWx1ZTogbnVtYmVyKSB7XG4gICAgaWYgKHRoaXMuX29ialJlZikge1xuICAgICAgdGhpcy5fb2JqUmVmLm5lYXIgPSB2YWx1ZTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgZ2V0IG5lYXIoKTogbnVtYmVyIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fb2JqUmVmPy5uZWFyO1xuICB9XG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzZXQgZmFyKHZhbHVlOiBudW1iZXIpIHtcbiAgICBpZiAodGhpcy5fb2JqUmVmKSB7XG4gICAgICB0aGlzLl9vYmpSZWYuZmFyID0gdmFsdWU7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGdldCBmYXIoKTogbnVtYmVyIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fb2JqUmVmPy5mYXI7XG4gIH1cbiAgQElucHV0KClcbiAgcHVibGljIHNldCBmb2N1cyh2YWx1ZTogbnVtYmVyKSB7XG4gICAgaWYgKHRoaXMuX29ialJlZikge1xuICAgICAgdGhpcy5fb2JqUmVmLmZvY3VzID0gdmFsdWU7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGdldCBmb2N1cygpOiBudW1iZXIgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9vYmpSZWY/LmZvY3VzO1xuICB9XG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzZXQgdmlldyhcbiAgICB2YWx1ZTogbnVsbCB8IHtcbiAgICAgIGVuYWJsZWQ6IGJvb2xlYW47XG4gICAgICBmdWxsV2lkdGg6IG51bWJlcjtcbiAgICAgIGZ1bGxIZWlnaHQ6IG51bWJlcjtcbiAgICAgIG9mZnNldFg6IG51bWJlcjtcbiAgICAgIG9mZnNldFk6IG51bWJlcjtcbiAgICAgIHdpZHRoOiBudW1iZXI7XG4gICAgICBoZWlnaHQ6IG51bWJlcjtcbiAgICB9LFxuICApIHtcbiAgICBpZiAodGhpcy5fb2JqUmVmKSB7XG4gICAgICB0aGlzLl9vYmpSZWYudmlldyA9IHZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBnZXQgdmlldygpOlxuICAgIHwgKG51bGwgfCB7XG4gICAgICAgIGVuYWJsZWQ6IGJvb2xlYW47XG4gICAgICAgIGZ1bGxXaWR0aDogbnVtYmVyO1xuICAgICAgICBmdWxsSGVpZ2h0OiBudW1iZXI7XG4gICAgICAgIG9mZnNldFg6IG51bWJlcjtcbiAgICAgICAgb2Zmc2V0WTogbnVtYmVyO1xuICAgICAgICB3aWR0aDogbnVtYmVyO1xuICAgICAgICBoZWlnaHQ6IG51bWJlcjtcbiAgICAgIH0pXG4gICAgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9vYmpSZWY/LnZpZXc7XG4gIH1cbiAgQElucHV0KClcbiAgcHVibGljIHNldCBmaWxtR2F1Z2UodmFsdWU6IG51bWJlcikge1xuICAgIGlmICh0aGlzLl9vYmpSZWYpIHtcbiAgICAgIHRoaXMuX29ialJlZi5maWxtR2F1Z2UgPSB2YWx1ZTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgZ2V0IGZpbG1HYXVnZSgpOiBudW1iZXIgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9vYmpSZWY/LmZpbG1HYXVnZTtcbiAgfVxuICBASW5wdXQoKVxuICBwdWJsaWMgc2V0IGZpbG1PZmZzZXQodmFsdWU6IG51bWJlcikge1xuICAgIGlmICh0aGlzLl9vYmpSZWYpIHtcbiAgICAgIHRoaXMuX29ialJlZi5maWxtT2Zmc2V0ID0gdmFsdWU7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGdldCBmaWxtT2Zmc2V0KCk6IG51bWJlciB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX29ialJlZj8uZmlsbU9mZnNldDtcbiAgfVxufVxuIl19