/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix */
import { ChangeDetectionStrategy, Component, Input, forwardRef, } from '@angular/core';
import { SAOPass, } from 'three/examples/jsm/postprocessing/SAOPass.js';
import { ThPassBase } from '../ThPassBase';
import { applyValue } from '../util';
import { ThPass } from './ThPass';
import * as i0 from "@angular/core";
export class ThSAOPass extends ThPass {
    getType() {
        return SAOPass;
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
    set originalClearColor(value) {
        if (this._objRef) {
            this._objRef.originalClearColor = applyValue(this._objRef.originalClearColor, value);
        }
    }
    get originalClearColor() {
        return this._objRef?.originalClearColor;
    }
    set oldClearColor(value) {
        if (this._objRef) {
            this._objRef.oldClearColor = applyValue(this._objRef.oldClearColor, value);
        }
    }
    get oldClearColor() {
        return this._objRef?.oldClearColor;
    }
    set oldClearAlpha(value) {
        if (this._objRef) {
            this._objRef.oldClearAlpha = value;
        }
    }
    get oldClearAlpha() {
        return this._objRef?.oldClearAlpha;
    }
    set resolution(value) {
        if (this._objRef) {
            this._objRef.resolution = applyValue(this._objRef.resolution, value);
        }
    }
    get resolution() {
        return this._objRef?.resolution;
    }
    set saoRenderTarget(value) {
        if (this._objRef) {
            this._objRef.saoRenderTarget = value;
        }
    }
    get saoRenderTarget() {
        return this._objRef?.saoRenderTarget;
    }
    set blurIntermediateRenderTarget(value) {
        if (this._objRef) {
            this._objRef.blurIntermediateRenderTarget = value;
        }
    }
    get blurIntermediateRenderTarget() {
        return this._objRef?.blurIntermediateRenderTarget;
    }
    set normalRenderTarget(value) {
        if (this._objRef) {
            this._objRef.normalRenderTarget = value;
        }
    }
    get normalRenderTarget() {
        return this._objRef?.normalRenderTarget;
    }
    set normalMaterial(value) {
        if (this._objRef) {
            this._objRef.normalMaterial = value;
        }
    }
    get normalMaterial() {
        return this._objRef?.normalMaterial;
    }
    set saoMaterial(value) {
        if (this._objRef) {
            this._objRef.saoMaterial = value;
        }
    }
    get saoMaterial() {
        return this._objRef?.saoMaterial;
    }
    set vBlurMaterial(value) {
        if (this._objRef) {
            this._objRef.vBlurMaterial = value;
        }
    }
    get vBlurMaterial() {
        return this._objRef?.vBlurMaterial;
    }
    set hBlurMaterial(value) {
        if (this._objRef) {
            this._objRef.hBlurMaterial = value;
        }
    }
    get hBlurMaterial() {
        return this._objRef?.hBlurMaterial;
    }
    set materialCopy(value) {
        if (this._objRef) {
            this._objRef.materialCopy = value;
        }
    }
    get materialCopy() {
        return this._objRef?.materialCopy;
    }
    set fsQuad(value) {
        if (this._objRef) {
            this._objRef.fsQuad = value;
        }
    }
    get fsQuad() {
        return this._objRef?.fsQuad;
    }
    set params(value) {
        if (this._objRef) {
            this._objRef.params = value;
        }
    }
    get params() {
        return this._objRef?.params;
    }
    static { this.OUTPUT = SAOPass.OUTPUT; }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThSAOPass, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.1.2", type: ThSAOPass, selector: "th-sAOPass", inputs: { scene: "scene", camera: "camera", originalClearColor: "originalClearColor", oldClearColor: "oldClearColor", oldClearAlpha: "oldClearAlpha", resolution: "resolution", saoRenderTarget: "saoRenderTarget", blurIntermediateRenderTarget: "blurIntermediateRenderTarget", normalRenderTarget: "normalRenderTarget", normalMaterial: "normalMaterial", saoMaterial: "saoMaterial", vBlurMaterial: "vBlurMaterial", hBlurMaterial: "hBlurMaterial", materialCopy: "materialCopy", fsQuad: "fsQuad", params: "params" }, providers: [
            { provide: ThPassBase, useExisting: forwardRef(() => ThSAOPass) },
        ], usesInheritance: true, ngImport: i0, template: '<ng-content/>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThSAOPass, decorators: [{
            type: Component,
            args: [{
                    selector: 'th-sAOPass',
                    template: '<ng-content/>',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    providers: [
                        { provide: ThPassBase, useExisting: forwardRef(() => ThSAOPass) },
                    ],
                }]
        }], propDecorators: { scene: [{
                type: Input
            }], camera: [{
                type: Input
            }], originalClearColor: [{
                type: Input
            }], oldClearColor: [{
                type: Input
            }], oldClearAlpha: [{
                type: Input
            }], resolution: [{
                type: Input
            }], saoRenderTarget: [{
                type: Input
            }], blurIntermediateRenderTarget: [{
                type: Input
            }], normalRenderTarget: [{
                type: Input
            }], normalMaterial: [{
                type: Input
            }], saoMaterial: [{
                type: Input
            }], vBlurMaterial: [{
                type: Input
            }], hBlurMaterial: [{
                type: Input
            }], materialCopy: [{
                type: Input
            }], fsQuad: [{
                type: Input
            }], params: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGhTQU9QYXNzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LXRocmVlL3NyYy9saWIvZ2VuZXJhdGVkL1RoU0FPUGFzcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxpREFBaUQ7QUFDakQseURBQXlEO0FBQ3pELHlDQUF5QztBQUN6QywrRkFBK0Y7QUFDL0YsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixTQUFTLEVBQ1QsS0FBSyxFQUVMLFVBQVUsR0FDWCxNQUFNLGVBQWUsQ0FBQztBQVl2QixPQUFPLEVBQ0wsT0FBTyxHQUVSLE1BQU0sOENBQThDLENBQUM7QUFDdEQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sU0FBUyxDQUFDO0FBQ3JDLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxVQUFVLENBQUM7O0FBVWxDLE1BQU0sT0FBTyxTQUdYLFNBQVEsTUFBZ0I7SUFDakIsT0FBTztRQUNaLE9BQU8sT0FBTyxDQUFDO0lBQ2pCLENBQUM7SUFFRCxJQUNXLEtBQUssQ0FBQyxLQUFZO1FBQzNCLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ2pCLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUM3QixDQUFDO0lBQ0gsQ0FBQztJQUVELElBQVcsS0FBSztRQUNkLE9BQU8sSUFBSSxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUM7SUFDN0IsQ0FBQztJQUNELElBQ1csTUFBTSxDQUFDLEtBQWE7UUFDN0IsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDakIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQzlCLENBQUM7SUFDSCxDQUFDO0lBRUQsSUFBVyxNQUFNO1FBQ2YsT0FBTyxJQUFJLENBQUMsT0FBTyxFQUFFLE1BQU0sQ0FBQztJQUM5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Z0JBV0ssWUFBWTtzQkFEdEIsS0FBSztnQkFXSyxNQUFNO3NCQURoQixLQUFLO2dCQVdLLE1BQU07c0JBRGhCLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBAdHlwZXNjcmlwdC1lc2xpbnQvYmFuLXR5cGVzICovXG4vKiBlc2xpbnQtZGlzYWJsZSBAdHlwZXNjcmlwdC1lc2xpbnQvbmFtaW5nLWNvbnZlbnRpb24gKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vLXVuZGVyc2NvcmUtZGFuZ2xlICovXG4vKiBlc2xpbnQtZGlzYWJsZSBAYW5ndWxhci1lc2xpbnQvY29tcG9uZW50LXNlbGVjdG9yLCBAYW5ndWxhci1lc2xpbnQvY29tcG9uZW50LWNsYXNzLXN1ZmZpeCAqL1xuaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENvbXBvbmVudCxcbiAgSW5wdXQsXG4gIFR5cGUsXG4gIGZvcndhcmRSZWYsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgQ2FtZXJhLFxuICBDb2xvcixcbiAgQ29sb3JSZXByZXNlbnRhdGlvbixcbiAgTWVzaE5vcm1hbE1hdGVyaWFsLFxuICBTY2VuZSxcbiAgU2hhZGVyTWF0ZXJpYWwsXG4gIFZlY3RvcjIsXG4gIFdlYkdMUmVuZGVyVGFyZ2V0LFxufSBmcm9tICd0aHJlZSc7XG5pbXBvcnQgeyBGdWxsU2NyZWVuUXVhZCB9IGZyb20gJ3RocmVlL2V4YW1wbGVzL2pzbS9wb3N0cHJvY2Vzc2luZy9QYXNzLmpzJztcbmltcG9ydCB7XG4gIFNBT1Bhc3MsXG4gIFNBT1Bhc3NQYXJhbXMsXG59IGZyb20gJ3RocmVlL2V4YW1wbGVzL2pzbS9wb3N0cHJvY2Vzc2luZy9TQU9QYXNzLmpzJztcbmltcG9ydCB7IFRoUGFzc0Jhc2UgfSBmcm9tICcuLi9UaFBhc3NCYXNlJztcbmltcG9ydCB7IGFwcGx5VmFsdWUgfSBmcm9tICcuLi91dGlsJztcbmltcG9ydCB7IFRoUGFzcyB9IGZyb20gJy4vVGhQYXNzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndGgtc0FPUGFzcycsXG4gIHRlbXBsYXRlOiAnPG5nLWNvbnRlbnQvPicsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBwcm92aWRlcnM6IFtcbiAgICB7IHByb3ZpZGU6IFRoUGFzc0Jhc2UsIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IFRoU0FPUGFzcykgfSxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgVGhTQU9QYXNzPFxuICBUIGV4dGVuZHMgU0FPUGFzcyA9IFNBT1Bhc3MsXG4gIFRBUkdTID0gW3NjZW5lOiBTY2VuZSwgY2FtZXJhOiBDYW1lcmEsIHJlc29sdXRpb24/OiBWZWN0b3IyXSxcbj4gZXh0ZW5kcyBUaFBhc3M8VCwgVEFSR1M+IHtcbiAgcHVibGljIGdldFR5cGUoKTogVHlwZTxTQU9QYXNzPiB7XG4gICAgcmV0dXJuIFNBT1Bhc3M7XG4gIH1cblxuICBASW5wdXQoKVxuICBwdWJsaWMgc2V0IHNjZW5lKHZhbHVlOiBTY2VuZSkge1xuICAgIGlmICh0aGlzLl9vYmpSZWYpIHtcbiAgICAgIHRoaXMuX29ialJlZi5zY2VuZSA9IHZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBnZXQgc2NlbmUoKTogU2NlbmUgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9vYmpSZWY/LnNjZW5lO1xuICB9XG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzZXQgY2FtZXJhKHZhbHVlOiBDYW1lcmEpIHtcbiAgICBpZiAodGhpcy5fb2JqUmVmKSB7XG4gICAgICB0aGlzLl9vYmpSZWYuY2FtZXJhID0gdmFsdWU7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGdldCBjYW1lcmEoKTogQ2FtZXJhIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fb2JqUmVmPy5jYW1lcmE7XG4gIH1cbiAgQElucHV0KClcbiAgcHVibGljIHNldCBvcmlnaW5hbENsZWFyQ29sb3IoXG4gICAgdmFsdWU6XG4gICAgICB8IENvbG9yXG4gICAgICB8IFtcbiAgICAgICAgICAuLi5hcmdzOlxuICAgICAgICAgICAgfCBbY29sb3I6IENvbG9yUmVwcmVzZW50YXRpb25dXG4gICAgICAgICAgICB8IFtyOiBudW1iZXIsIGc6IG51bWJlciwgYjogbnVtYmVyXSxcbiAgICAgICAgXSxcbiAgKSB7XG4gICAgaWYgKHRoaXMuX29ialJlZikge1xuICAgICAgdGhpcy5fb2JqUmVmLm9yaWdpbmFsQ2xlYXJDb2xvciA9IGFwcGx5VmFsdWU8Q29sb3I+KFxuICAgICAgICB0aGlzLl9vYmpSZWYub3JpZ2luYWxDbGVhckNvbG9yLFxuICAgICAgICB2YWx1ZSxcbiAgICAgICk7XG4gICAgfVxuICB9XG4gIHB1YmxpYyBnZXQgb3JpZ2luYWxDbGVhckNvbG9yKCk6IENvbG9yIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fb2JqUmVmPy5vcmlnaW5hbENsZWFyQ29sb3I7XG4gIH1cbiAgQElucHV0KClcbiAgcHVibGljIHNldCBvbGRDbGVhckNvbG9yKFxuICAgIHZhbHVlOlxuICAgICAgfCBDb2xvclxuICAgICAgfCBbXG4gICAgICAgICAgLi4uYXJnczpcbiAgICAgICAgICAgIHwgW2NvbG9yOiBDb2xvclJlcHJlc2VudGF0aW9uXVxuICAgICAgICAgICAgfCBbcjogbnVtYmVyLCBnOiBudW1iZXIsIGI6IG51bWJlcl0sXG4gICAgICAgIF0sXG4gICkge1xuICAgIGlmICh0aGlzLl9vYmpSZWYpIHtcbiAgICAgIHRoaXMuX29ialJlZi5vbGRDbGVhckNvbG9yID0gYXBwbHlWYWx1ZTxDb2xvcj4oXG4gICAgICAgIHRoaXMuX29ialJlZi5vbGRDbGVhckNvbG9yLFxuICAgICAgICB2YWx1ZSxcbiAgICAgICk7XG4gICAgfVxuICB9XG4gIHB1YmxpYyBnZXQgb2xkQ2xlYXJDb2xvcigpOiBDb2xvciB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX29ialJlZj8ub2xkQ2xlYXJDb2xvcjtcbiAgfVxuICBASW5wdXQoKVxuICBwdWJsaWMgc2V0IG9sZENsZWFyQWxwaGEodmFsdWU6IG51bWJlcikge1xuICAgIGlmICh0aGlzLl9vYmpSZWYpIHtcbiAgICAgIHRoaXMuX29ialJlZi5vbGRDbGVhckFscGhhID0gdmFsdWU7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGdldCBvbGRDbGVhckFscGhhKCk6IG51bWJlciB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX29ialJlZj8ub2xkQ2xlYXJBbHBoYTtcbiAgfVxuICBASW5wdXQoKVxuICBwdWJsaWMgc2V0IHJlc29sdXRpb24odmFsdWU6IFZlY3RvcjIgfCBbeDogbnVtYmVyLCB5OiBudW1iZXJdKSB7XG4gICAgaWYgKHRoaXMuX29ialJlZikge1xuICAgICAgdGhpcy5fb2JqUmVmLnJlc29sdXRpb24gPSBhcHBseVZhbHVlPFZlY3RvcjI+KFxuICAgICAgICB0aGlzLl9vYmpSZWYucmVzb2x1dGlvbixcbiAgICAgICAgdmFsdWUsXG4gICAgICApO1xuICAgIH1cbiAgfVxuICBwdWJsaWMgZ2V0IHJlc29sdXRpb24oKTogVmVjdG9yMiB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX29ialJlZj8ucmVzb2x1dGlvbjtcbiAgfVxuICBASW5wdXQoKVxuICBwdWJsaWMgc2V0IHNhb1JlbmRlclRhcmdldCh2YWx1ZTogV2ViR0xSZW5kZXJUYXJnZXQpIHtcbiAgICBpZiAodGhpcy5fb2JqUmVmKSB7XG4gICAgICB0aGlzLl9vYmpSZWYuc2FvUmVuZGVyVGFyZ2V0ID0gdmFsdWU7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGdldCBzYW9SZW5kZXJUYXJnZXQoKTogV2ViR0xSZW5kZXJUYXJnZXQgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9vYmpSZWY/LnNhb1JlbmRlclRhcmdldDtcbiAgfVxuICBASW5wdXQoKVxuICBwdWJsaWMgc2V0IGJsdXJJbnRlcm1lZGlhdGVSZW5kZXJUYXJnZXQodmFsdWU6IFdlYkdMUmVuZGVyVGFyZ2V0KSB7XG4gICAgaWYgKHRoaXMuX29ialJlZikge1xuICAgICAgdGhpcy5fb2JqUmVmLmJsdXJJbnRlcm1lZGlhdGVSZW5kZXJUYXJnZXQgPSB2YWx1ZTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgZ2V0IGJsdXJJbnRlcm1lZGlhdGVSZW5kZXJUYXJnZXQoKTogV2ViR0xSZW5kZXJUYXJnZXQgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9vYmpSZWY/LmJsdXJJbnRlcm1lZGlhdGVSZW5kZXJUYXJnZXQ7XG4gIH1cbiAgQElucHV0KClcbiAgcHVibGljIHNldCBub3JtYWxSZW5kZXJUYXJnZXQodmFsdWU6IFdlYkdMUmVuZGVyVGFyZ2V0KSB7XG4gICAgaWYgKHRoaXMuX29ialJlZikge1xuICAgICAgdGhpcy5fb2JqUmVmLm5vcm1hbFJlbmRlclRhcmdldCA9IHZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBnZXQgbm9ybWFsUmVuZGVyVGFyZ2V0KCk6IFdlYkdMUmVuZGVyVGFyZ2V0IHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fb2JqUmVmPy5ub3JtYWxSZW5kZXJUYXJnZXQ7XG4gIH1cbiAgQElucHV0KClcbiAgcHVibGljIHNldCBub3JtYWxNYXRlcmlhbCh2YWx1ZTogTWVzaE5vcm1hbE1hdGVyaWFsKSB7XG4gICAgaWYgKHRoaXMuX29ialJlZikge1xuICAgICAgdGhpcy5fb2JqUmVmLm5vcm1hbE1hdGVyaWFsID0gdmFsdWU7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGdldCBub3JtYWxNYXRlcmlhbCgpOiBNZXNoTm9ybWFsTWF0ZXJpYWwgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9vYmpSZWY/Lm5vcm1hbE1hdGVyaWFsO1xuICB9XG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzZXQgc2FvTWF0ZXJpYWwodmFsdWU6IFNoYWRlck1hdGVyaWFsKSB7XG4gICAgaWYgKHRoaXMuX29ialJlZikge1xuICAgICAgdGhpcy5fb2JqUmVmLnNhb01hdGVyaWFsID0gdmFsdWU7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGdldCBzYW9NYXRlcmlhbCgpOiBTaGFkZXJNYXRlcmlhbCB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX29ialJlZj8uc2FvTWF0ZXJpYWw7XG4gIH1cbiAgQElucHV0KClcbiAgcHVibGljIHNldCB2Qmx1ck1hdGVyaWFsKHZhbHVlOiBTaGFkZXJNYXRlcmlhbCkge1xuICAgIGlmICh0aGlzLl9vYmpSZWYpIHtcbiAgICAgIHRoaXMuX29ialJlZi52Qmx1ck1hdGVyaWFsID0gdmFsdWU7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGdldCB2Qmx1ck1hdGVyaWFsKCk6IFNoYWRlck1hdGVyaWFsIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fb2JqUmVmPy52Qmx1ck1hdGVyaWFsO1xuICB9XG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzZXQgaEJsdXJNYXRlcmlhbCh2YWx1ZTogU2hhZGVyTWF0ZXJpYWwpIHtcbiAgICBpZiAodGhpcy5fb2JqUmVmKSB7XG4gICAgICB0aGlzLl9vYmpSZWYuaEJsdXJNYXRlcmlhbCA9IHZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBnZXQgaEJsdXJNYXRlcmlhbCgpOiBTaGFkZXJNYXRlcmlhbCB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX29ialJlZj8uaEJsdXJNYXRlcmlhbDtcbiAgfVxuICBASW5wdXQoKVxuICBwdWJsaWMgc2V0IG1hdGVyaWFsQ29weSh2YWx1ZTogU2hhZGVyTWF0ZXJpYWwpIHtcbiAgICBpZiAodGhpcy5fb2JqUmVmKSB7XG4gICAgICB0aGlzLl9vYmpSZWYubWF0ZXJpYWxDb3B5ID0gdmFsdWU7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGdldCBtYXRlcmlhbENvcHkoKTogU2hhZGVyTWF0ZXJpYWwgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9vYmpSZWY/Lm1hdGVyaWFsQ29weTtcbiAgfVxuICBASW5wdXQoKVxuICBwdWJsaWMgc2V0IGZzUXVhZCh2YWx1ZTogRnVsbFNjcmVlblF1YWQpIHtcbiAgICBpZiAodGhpcy5fb2JqUmVmKSB7XG4gICAgICB0aGlzLl9vYmpSZWYuZnNRdWFkID0gdmFsdWU7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGdldCBmc1F1YWQoKTogRnVsbFNjcmVlblF1YWQgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9vYmpSZWY/LmZzUXVhZDtcbiAgfVxuICBASW5wdXQoKVxuICBwdWJsaWMgc2V0IHBhcmFtcyh2YWx1ZTogU0FPUGFzc1BhcmFtcykge1xuICAgIGlmICh0aGlzLl9vYmpSZWYpIHtcbiAgICAgIHRoaXMuX29ialJlZi5wYXJhbXMgPSB2YWx1ZTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgZ2V0IHBhcmFtcygpOiBTQU9QYXNzUGFyYW1zIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fb2JqUmVmPy5wYXJhbXM7XG4gIH1cblxuICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IE9VVFBVVCA9IFNBT1Bhc3MuT1VUUFVUO1xufVxuIl19