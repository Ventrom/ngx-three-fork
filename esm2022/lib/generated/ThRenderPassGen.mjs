/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix */
import { ChangeDetectionStrategy, Component, Input, forwardRef, } from '@angular/core';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { ThPassBase } from '../ThPassBase';
import { applyValue } from '../util';
import { ThPass } from './ThPass';
import * as i0 from "@angular/core";
export class ThRenderPassGen extends ThPass {
    getType() {
        return RenderPass;
    }
    set scene(value) {
        if (this._objRef) {
            this._objRef.scene = value;
        }
    }
    get scene() {
        return this._objRef?.scene;
    }
    set camera(value) {
        if (this._objRef) {
            this._objRef.camera = value;
        }
    }
    get camera() {
        return this._objRef?.camera;
    }
    set overrideMaterial(value) {
        if (this._objRef) {
            this._objRef.overrideMaterial = value;
        }
    }
    get overrideMaterial() {
        return this._objRef?.overrideMaterial;
    }
    set clearColor(value) {
        if (this._objRef) {
            this._objRef.clearColor = applyValue(this._objRef.clearColor, value);
        }
    }
    get clearColor() {
        return this._objRef?.clearColor;
    }
    set clearAlpha(value) {
        if (this._objRef) {
            this._objRef.clearAlpha = value;
        }
    }
    get clearAlpha() {
        return this._objRef?.clearAlpha;
    }
    set clearDepth(value) {
        if (this._objRef) {
            this._objRef.clearDepth = value;
        }
    }
    get clearDepth() {
        return this._objRef?.clearDepth;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThRenderPassGen, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.1.2", type: ThRenderPassGen, selector: "th-renderPassGen", inputs: { scene: "scene", camera: "camera", overrideMaterial: "overrideMaterial", clearColor: "clearColor", clearAlpha: "clearAlpha", clearDepth: "clearDepth" }, providers: [
            { provide: ThPassBase, useExisting: forwardRef(() => ThRenderPassGen) },
        ], usesInheritance: true, ngImport: i0, template: '<ng-content/>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThRenderPassGen, decorators: [{
            type: Component,
            args: [{
                    selector: 'th-renderPassGen',
                    template: '<ng-content/>',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    providers: [
                        { provide: ThPassBase, useExisting: forwardRef(() => ThRenderPassGen) },
                    ],
                }]
        }], propDecorators: { scene: [{
                type: Input
            }], camera: [{
                type: Input
            }], overrideMaterial: [{
                type: Input
            }], clearColor: [{
                type: Input
            }], clearAlpha: [{
                type: Input
            }], clearDepth: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGhSZW5kZXJQYXNzR2VuLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LXRocmVlL3NyYy9saWIvZ2VuZXJhdGVkL1RoUmVuZGVyUGFzc0dlbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxpREFBaUQ7QUFDakQseURBQXlEO0FBQ3pELHlDQUF5QztBQUN6QywrRkFBK0Y7QUFDL0YsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixTQUFTLEVBQ1QsS0FBSyxFQUVMLFVBQVUsR0FDWCxNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0saURBQWlELENBQUM7QUFDN0UsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sU0FBUyxDQUFDO0FBQ3JDLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxVQUFVLENBQUM7O0FBVWxDLE1BQU0sT0FBTyxlQVNYLFNBQVEsTUFBZ0I7SUFDakIsT0FBTztRQUNaLE9BQU8sVUFBVSxDQUFDO0lBQ3BCLENBQUM7SUFFRCxJQUNXLEtBQUssQ0FBQyxLQUFZO1FBQzNCLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ2pCLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUM3QixDQUFDO0lBQ0gsQ0FBQztJQUVELElBQVcsS0FBSztRQUNkLE9BQU8sSUFBSSxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUM7SUFDN0IsQ0FBQztJQUNELElBQ1csTUFBTSxDQUFDLEtBQWE7UUFDN0IsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDakIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQzlCLENBQUM7SUFDSCxDQUFDO0lBRUQsSUFBVyxNQUFNO1FBQ2YsT0FBTyxJQUFJLENBQUMsT0FBTyxFQUFFLE1BQU0sQ0FBQztJQUM5QixDQUFDO0lBQ0QsSUFDVyxnQkFBZ0IsQ0FBQyxLQUFzQjtRQUNoRCxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUNqQixJQUFJLENBQUMsT0FBTyxDQUFDLGdCQUFnQixHQUFHLEtBQUssQ0FBQztRQUN4QyxDQUFDO0lBQ0gsQ0FBQztJQUVELElBQVcsZ0JBQWdCO1FBQ3pCLE9BQU8sSUFBSSxDQUFDLE9BQU8sRUFBRSxnQkFBZ0IsQ0FBQztJQUN4QyxDQUFDO0lBQ0QsSUFDVyxVQUFVLENBQ25CLEtBT0s7UUFFTCxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUNqQixJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQ2xDLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxFQUN2QixLQUFLLENBQ04sQ0FBQztRQUNKLENBQUM7SUFDSCxDQUFDO0lBQ0QsSUFBVyxVQUFVO1FBQ25CLE9BQU8sSUFBSSxDQUFDLE9BQU8sRUFBRSxVQUFVLENBQUM7SUFDbEMsQ0FBQztJQUNELElBQ1csVUFBVSxDQUFDLEtBQW9CO1FBQ3hDLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ2pCLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztRQUNsQyxDQUFDO0lBQ0gsQ0FBQztJQUVELElBQVcsVUFBVTtRQUNuQixPQUFPLElBQUksQ0FBQyxPQUFPLEVBQUUsVUFBVSxDQUFDO0lBQ2xDLENBQUM7SUFDRCxJQUNXLFVBQVUsQ0FBQyxLQUFjO1FBQ2xDLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ2pCLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztRQUNsQyxDQUFDO0lBQ0gsQ0FBQztJQUVELElBQVcsVUFBVTtRQUNuQixPQUFPLElBQUksQ0FBQyxPQUFPLEVBQUUsVUFBVSxDQUFDO0lBQ2xDLENBQUM7OEdBcEZVLGVBQWU7a0dBQWYsZUFBZSw2TUFKZjtZQUNULEVBQUUsT0FBTyxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUUsVUFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDLGVBQWUsQ0FBQyxFQUFFO1NBQ3hFLGlEQUpTLGVBQWU7OzJGQU1kLGVBQWU7a0JBUjNCLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLGtCQUFrQjtvQkFDNUIsUUFBUSxFQUFFLGVBQWU7b0JBQ3pCLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO29CQUMvQyxTQUFTLEVBQUU7d0JBQ1QsRUFBRSxPQUFPLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRSxVQUFVLENBQUMsR0FBRyxFQUFFLGdCQUFnQixDQUFDLEVBQUU7cUJBQ3hFO2lCQUNGOzhCQWdCWSxLQUFLO3NCQURmLEtBQUs7Z0JBV0ssTUFBTTtzQkFEaEIsS0FBSztnQkFXSyxnQkFBZ0I7c0JBRDFCLEtBQUs7Z0JBV0ssVUFBVTtzQkFEcEIsS0FBSztnQkFzQkssVUFBVTtzQkFEcEIsS0FBSztnQkFXSyxVQUFVO3NCQURwQixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgQHR5cGVzY3JpcHQtZXNsaW50L2Jhbi10eXBlcyAqL1xuLyogZXNsaW50LWRpc2FibGUgQHR5cGVzY3JpcHQtZXNsaW50L25hbWluZy1jb252ZW50aW9uICovXG4vKiBlc2xpbnQtZGlzYWJsZSBuby11bmRlcnNjb3JlLWRhbmdsZSAqL1xuLyogZXNsaW50LWRpc2FibGUgQGFuZ3VsYXItZXNsaW50L2NvbXBvbmVudC1zZWxlY3RvciwgQGFuZ3VsYXItZXNsaW50L2NvbXBvbmVudC1jbGFzcy1zdWZmaXggKi9cbmltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDb21wb25lbnQsXG4gIElucHV0LFxuICBUeXBlLFxuICBmb3J3YXJkUmVmLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENhbWVyYSwgQ29sb3IsIENvbG9yUmVwcmVzZW50YXRpb24sIE1hdGVyaWFsLCBTY2VuZSB9IGZyb20gJ3RocmVlJztcbmltcG9ydCB7IFJlbmRlclBhc3MgfSBmcm9tICd0aHJlZS9leGFtcGxlcy9qc20vcG9zdHByb2Nlc3NpbmcvUmVuZGVyUGFzcy5qcyc7XG5pbXBvcnQgeyBUaFBhc3NCYXNlIH0gZnJvbSAnLi4vVGhQYXNzQmFzZSc7XG5pbXBvcnQgeyBhcHBseVZhbHVlIH0gZnJvbSAnLi4vdXRpbCc7XG5pbXBvcnQgeyBUaFBhc3MgfSBmcm9tICcuL1RoUGFzcyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3RoLXJlbmRlclBhc3NHZW4nLFxuICB0ZW1wbGF0ZTogJzxuZy1jb250ZW50Lz4nLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgcHJvdmlkZXJzOiBbXG4gICAgeyBwcm92aWRlOiBUaFBhc3NCYXNlLCB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBUaFJlbmRlclBhc3NHZW4pIH0sXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIFRoUmVuZGVyUGFzc0dlbjxcbiAgVCBleHRlbmRzIFJlbmRlclBhc3MgPSBSZW5kZXJQYXNzLFxuICBUQVJHUyA9IFtcbiAgICBzY2VuZTogU2NlbmUsXG4gICAgY2FtZXJhOiBDYW1lcmEsXG4gICAgb3ZlcnJpZGVNYXRlcmlhbD86IE1hdGVyaWFsIHwgbnVsbCxcbiAgICBjbGVhckNvbG9yPzogQ29sb3IgfCBudWxsLFxuICAgIGNsZWFyQWxwaGE/OiBudW1iZXIgfCBudWxsLFxuICBdLFxuPiBleHRlbmRzIFRoUGFzczxULCBUQVJHUz4ge1xuICBwdWJsaWMgZ2V0VHlwZSgpOiBUeXBlPFJlbmRlclBhc3M+IHtcbiAgICByZXR1cm4gUmVuZGVyUGFzcztcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzZXQgc2NlbmUodmFsdWU6IFNjZW5lKSB7XG4gICAgaWYgKHRoaXMuX29ialJlZikge1xuICAgICAgdGhpcy5fb2JqUmVmLnNjZW5lID0gdmFsdWU7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGdldCBzY2VuZSgpOiBTY2VuZSB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX29ialJlZj8uc2NlbmU7XG4gIH1cbiAgQElucHV0KClcbiAgcHVibGljIHNldCBjYW1lcmEodmFsdWU6IENhbWVyYSkge1xuICAgIGlmICh0aGlzLl9vYmpSZWYpIHtcbiAgICAgIHRoaXMuX29ialJlZi5jYW1lcmEgPSB2YWx1ZTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgZ2V0IGNhbWVyYSgpOiBDYW1lcmEgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9vYmpSZWY/LmNhbWVyYTtcbiAgfVxuICBASW5wdXQoKVxuICBwdWJsaWMgc2V0IG92ZXJyaWRlTWF0ZXJpYWwodmFsdWU6IE1hdGVyaWFsIHwgbnVsbCkge1xuICAgIGlmICh0aGlzLl9vYmpSZWYpIHtcbiAgICAgIHRoaXMuX29ialJlZi5vdmVycmlkZU1hdGVyaWFsID0gdmFsdWU7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGdldCBvdmVycmlkZU1hdGVyaWFsKCk6IChNYXRlcmlhbCB8IG51bGwpIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fb2JqUmVmPy5vdmVycmlkZU1hdGVyaWFsO1xuICB9XG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzZXQgY2xlYXJDb2xvcihcbiAgICB2YWx1ZTpcbiAgICAgIHwgQ29sb3JcbiAgICAgIHwgbnVsbFxuICAgICAgfCBbXG4gICAgICAgICAgLi4uYXJnczpcbiAgICAgICAgICAgIHwgW2NvbG9yOiBDb2xvclJlcHJlc2VudGF0aW9uXVxuICAgICAgICAgICAgfCBbcjogbnVtYmVyLCBnOiBudW1iZXIsIGI6IG51bWJlcl0sXG4gICAgICAgIF0sXG4gICkge1xuICAgIGlmICh0aGlzLl9vYmpSZWYpIHtcbiAgICAgIHRoaXMuX29ialJlZi5jbGVhckNvbG9yID0gYXBwbHlWYWx1ZTxDb2xvciB8IG51bGw+KFxuICAgICAgICB0aGlzLl9vYmpSZWYuY2xlYXJDb2xvcixcbiAgICAgICAgdmFsdWUsXG4gICAgICApO1xuICAgIH1cbiAgfVxuICBwdWJsaWMgZ2V0IGNsZWFyQ29sb3IoKTogKENvbG9yIHwgbnVsbCkgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9vYmpSZWY/LmNsZWFyQ29sb3I7XG4gIH1cbiAgQElucHV0KClcbiAgcHVibGljIHNldCBjbGVhckFscGhhKHZhbHVlOiBudW1iZXIgfCBudWxsKSB7XG4gICAgaWYgKHRoaXMuX29ialJlZikge1xuICAgICAgdGhpcy5fb2JqUmVmLmNsZWFyQWxwaGEgPSB2YWx1ZTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgZ2V0IGNsZWFyQWxwaGEoKTogKG51bWJlciB8IG51bGwpIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fb2JqUmVmPy5jbGVhckFscGhhO1xuICB9XG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzZXQgY2xlYXJEZXB0aCh2YWx1ZTogYm9vbGVhbikge1xuICAgIGlmICh0aGlzLl9vYmpSZWYpIHtcbiAgICAgIHRoaXMuX29ialJlZi5jbGVhckRlcHRoID0gdmFsdWU7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGdldCBjbGVhckRlcHRoKCk6IGJvb2xlYW4gfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9vYmpSZWY/LmNsZWFyRGVwdGg7XG4gIH1cbn1cbiJdfQ==