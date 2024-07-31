/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix */
import { ChangeDetectionStrategy, Component, Input, forwardRef, } from '@angular/core';
import { BokehPass, } from 'three/examples/jsm/postprocessing/BokehPass.js';
import { ThPassBase } from '../ThPassBase';
import { applyValue } from '../util';
import { ThPass } from './ThPass';
import * as i0 from "@angular/core";
export class ThBokehPass extends ThPass {
    getType() {
        return BokehPass;
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
    set renderTargetColor(value) {
        if (this._objRef) {
            this._objRef.renderTargetColor = value;
        }
    }
    get renderTargetColor() {
        return this._objRef?.renderTargetColor;
    }
    set renderTargetDepth(value) {
        if (this._objRef) {
            this._objRef.renderTargetDepth = value;
        }
    }
    get renderTargetDepth() {
        return this._objRef?.renderTargetDepth;
    }
    set materialDepth(value) {
        if (this._objRef) {
            this._objRef.materialDepth = value;
        }
    }
    get materialDepth() {
        return this._objRef?.materialDepth;
    }
    set materialBokeh(value) {
        if (this._objRef) {
            this._objRef.materialBokeh = value;
        }
    }
    get materialBokeh() {
        return this._objRef?.materialBokeh;
    }
    set uniforms(map) {
        if (this._objRef) {
            Object.assign(this._objRef.uniforms, map);
        }
    }
    get uniforms() {
        return this._objRef?.uniforms;
    }
    set fsQuad(value) {
        if (this._objRef) {
            this._objRef.fsQuad = value;
        }
    }
    get fsQuad() {
        return this._objRef?.fsQuad;
    }
    set oldClearColor(value) {
        if (this._objRef) {
            this._objRef.oldClearColor = applyValue(this._objRef.oldClearColor, value);
        }
    }
    get oldClearColor() {
        return this._objRef?.oldClearColor;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThBokehPass, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.1.2", type: ThBokehPass, selector: "th-bokehPass", inputs: { scene: "scene", camera: "camera", renderTargetColor: "renderTargetColor", renderTargetDepth: "renderTargetDepth", materialDepth: "materialDepth", materialBokeh: "materialBokeh", uniforms: "uniforms", fsQuad: "fsQuad", oldClearColor: "oldClearColor" }, providers: [
            { provide: ThPassBase, useExisting: forwardRef(() => ThBokehPass) },
        ], usesInheritance: true, ngImport: i0, template: '<ng-content/>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThBokehPass, decorators: [{
            type: Component,
            args: [{
                    selector: 'th-bokehPass',
                    template: '<ng-content/>',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    providers: [
                        { provide: ThPassBase, useExisting: forwardRef(() => ThBokehPass) },
                    ],
                }]
        }], propDecorators: { scene: [{
                type: Input
            }], camera: [{
                type: Input
            }], renderTargetColor: [{
                type: Input
            }], renderTargetDepth: [{
                type: Input
            }], materialDepth: [{
                type: Input
            }], materialBokeh: [{
                type: Input
            }], uniforms: [{
                type: Input
            }], fsQuad: [{
                type: Input
            }], oldClearColor: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGhCb2tlaFBhc3MuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtdGhyZWUvc3JjL2xpYi9nZW5lcmF0ZWQvVGhCb2tlaFBhc3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsaURBQWlEO0FBQ2pELHlEQUF5RDtBQUN6RCx5Q0FBeUM7QUFDekMsK0ZBQStGO0FBQy9GLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULEtBQUssRUFFTCxVQUFVLEdBQ1gsTUFBTSxlQUFlLENBQUM7QUFVdkIsT0FBTyxFQUNMLFNBQVMsR0FFVixNQUFNLGdEQUFnRCxDQUFDO0FBRXhELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLFNBQVMsQ0FBQztBQUNyQyxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sVUFBVSxDQUFDOztBQVVsQyxNQUFNLE9BQU8sV0FHWCxTQUFRLE1BQWdCO0lBQ2pCLE9BQU87UUFDWixPQUFPLFNBQVMsQ0FBQztJQUNuQixDQUFDO0lBRUQsSUFDVyxLQUFLLENBQUMsS0FBWTtRQUMzQixJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUNqQixJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDN0IsQ0FBQztJQUNILENBQUM7SUFFRCxJQUFXLEtBQUs7UUFDZCxPQUFPLElBQUksQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDO0lBQzdCLENBQUM7SUFDRCxJQUNXLE1BQU0sQ0FBQyxLQUFhO1FBQzdCLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ2pCLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUM5QixDQUFDO0lBQ0gsQ0FBQztJQUVELElBQVcsTUFBTTtRQUNmLE9BQU8sSUFBSSxDQUFDLE9BQU8sRUFBRSxNQUFNLENBQUM7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O2lCQUNGOzhCQVVZLEtBQUs7c0JBRGYsS0FBSztnQkFXSyxNQUFNO3NCQURoQixLQUFLO2dCQVdLLGlCQUFpQjtzQkFEM0IsS0FBSztnQkFXSyxpQkFBaUI7c0JBRDNCLEtBQUs7Z0JBV0ssYUFBYTtzQkFEdkIsS0FBSztnQkFXSyxhQUFhO3NCQUR2QixLQUFLO2dCQVdLLFFBQVE7c0JBRGxCLEtBQUs7Z0JBYUssTUFBTTtzQkFEaEIsS0FBSztnQkFXSyxhQUFhO3NCQUR2QixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgQHR5cGVzY3JpcHQtZXNsaW50L2Jhbi10eXBlcyAqL1xuLyogZXNsaW50LWRpc2FibGUgQHR5cGVzY3JpcHQtZXNsaW50L25hbWluZy1jb252ZW50aW9uICovXG4vKiBlc2xpbnQtZGlzYWJsZSBuby11bmRlcnNjb3JlLWRhbmdsZSAqL1xuLyogZXNsaW50LWRpc2FibGUgQGFuZ3VsYXItZXNsaW50L2NvbXBvbmVudC1zZWxlY3RvciwgQGFuZ3VsYXItZXNsaW50L2NvbXBvbmVudC1jbGFzcy1zdWZmaXggKi9cbmltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDb21wb25lbnQsXG4gIElucHV0LFxuICBUeXBlLFxuICBmb3J3YXJkUmVmLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIENhbWVyYSxcbiAgQ29sb3IsXG4gIENvbG9yUmVwcmVzZW50YXRpb24sXG4gIE1lc2hEZXB0aE1hdGVyaWFsLFxuICBTY2VuZSxcbiAgU2hhZGVyTWF0ZXJpYWwsXG4gIFdlYkdMUmVuZGVyVGFyZ2V0LFxufSBmcm9tICd0aHJlZSc7XG5pbXBvcnQge1xuICBCb2tlaFBhc3MsXG4gIEJva2VoUGFzc1BhcmFtdGVycyxcbn0gZnJvbSAndGhyZWUvZXhhbXBsZXMvanNtL3Bvc3Rwcm9jZXNzaW5nL0Jva2VoUGFzcy5qcyc7XG5pbXBvcnQgeyBGdWxsU2NyZWVuUXVhZCB9IGZyb20gJ3RocmVlL2V4YW1wbGVzL2pzbS9wb3N0cHJvY2Vzc2luZy9QYXNzLmpzJztcbmltcG9ydCB7IFRoUGFzc0Jhc2UgfSBmcm9tICcuLi9UaFBhc3NCYXNlJztcbmltcG9ydCB7IGFwcGx5VmFsdWUgfSBmcm9tICcuLi91dGlsJztcbmltcG9ydCB7IFRoUGFzcyB9IGZyb20gJy4vVGhQYXNzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndGgtYm9rZWhQYXNzJyxcbiAgdGVtcGxhdGU6ICc8bmctY29udGVudC8+JyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHByb3ZpZGVyczogW1xuICAgIHsgcHJvdmlkZTogVGhQYXNzQmFzZSwgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gVGhCb2tlaFBhc3MpIH0sXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIFRoQm9rZWhQYXNzPFxuICBUIGV4dGVuZHMgQm9rZWhQYXNzID0gQm9rZWhQYXNzLFxuICBUQVJHUyA9IFtzY2VuZTogU2NlbmUsIGNhbWVyYTogQ2FtZXJhLCBwYXJhbXM6IEJva2VoUGFzc1BhcmFtdGVyc10sXG4+IGV4dGVuZHMgVGhQYXNzPFQsIFRBUkdTPiB7XG4gIHB1YmxpYyBnZXRUeXBlKCk6IFR5cGU8Qm9rZWhQYXNzPiB7XG4gICAgcmV0dXJuIEJva2VoUGFzcztcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzZXQgc2NlbmUodmFsdWU6IFNjZW5lKSB7XG4gICAgaWYgKHRoaXMuX29ialJlZikge1xuICAgICAgdGhpcy5fb2JqUmVmLnNjZW5lID0gdmFsdWU7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGdldCBzY2VuZSgpOiBTY2VuZSB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX29ialJlZj8uc2NlbmU7XG4gIH1cbiAgQElucHV0KClcbiAgcHVibGljIHNldCBjYW1lcmEodmFsdWU6IENhbWVyYSkge1xuICAgIGlmICh0aGlzLl9vYmpSZWYpIHtcbiAgICAgIHRoaXMuX29ialJlZi5jYW1lcmEgPSB2YWx1ZTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgZ2V0IGNhbWVyYSgpOiBDYW1lcmEgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9vYmpSZWY/LmNhbWVyYTtcbiAgfVxuICBASW5wdXQoKVxuICBwdWJsaWMgc2V0IHJlbmRlclRhcmdldENvbG9yKHZhbHVlOiBXZWJHTFJlbmRlclRhcmdldCkge1xuICAgIGlmICh0aGlzLl9vYmpSZWYpIHtcbiAgICAgIHRoaXMuX29ialJlZi5yZW5kZXJUYXJnZXRDb2xvciA9IHZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBnZXQgcmVuZGVyVGFyZ2V0Q29sb3IoKTogV2ViR0xSZW5kZXJUYXJnZXQgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9vYmpSZWY/LnJlbmRlclRhcmdldENvbG9yO1xuICB9XG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzZXQgcmVuZGVyVGFyZ2V0RGVwdGgodmFsdWU6IFdlYkdMUmVuZGVyVGFyZ2V0KSB7XG4gICAgaWYgKHRoaXMuX29ialJlZikge1xuICAgICAgdGhpcy5fb2JqUmVmLnJlbmRlclRhcmdldERlcHRoID0gdmFsdWU7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGdldCByZW5kZXJUYXJnZXREZXB0aCgpOiBXZWJHTFJlbmRlclRhcmdldCB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX29ialJlZj8ucmVuZGVyVGFyZ2V0RGVwdGg7XG4gIH1cbiAgQElucHV0KClcbiAgcHVibGljIHNldCBtYXRlcmlhbERlcHRoKHZhbHVlOiBNZXNoRGVwdGhNYXRlcmlhbCkge1xuICAgIGlmICh0aGlzLl9vYmpSZWYpIHtcbiAgICAgIHRoaXMuX29ialJlZi5tYXRlcmlhbERlcHRoID0gdmFsdWU7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGdldCBtYXRlcmlhbERlcHRoKCk6IE1lc2hEZXB0aE1hdGVyaWFsIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fb2JqUmVmPy5tYXRlcmlhbERlcHRoO1xuICB9XG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzZXQgbWF0ZXJpYWxCb2tlaCh2YWx1ZTogU2hhZGVyTWF0ZXJpYWwpIHtcbiAgICBpZiAodGhpcy5fb2JqUmVmKSB7XG4gICAgICB0aGlzLl9vYmpSZWYubWF0ZXJpYWxCb2tlaCA9IHZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBnZXQgbWF0ZXJpYWxCb2tlaCgpOiBTaGFkZXJNYXRlcmlhbCB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX29ialJlZj8ubWF0ZXJpYWxCb2tlaDtcbiAgfVxuICBASW5wdXQoKVxuICBwdWJsaWMgc2V0IHVuaWZvcm1zKG1hcDogeyBbbmFtZTogc3RyaW5nXTogeyB2YWx1ZTogYW55IH0gfSkge1xuICAgIGlmICh0aGlzLl9vYmpSZWYpIHtcbiAgICAgIE9iamVjdC5hc3NpZ24odGhpcy5fb2JqUmVmLnVuaWZvcm1zLCBtYXApO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBnZXQgdW5pZm9ybXMoKTogeyBbbmFtZTogc3RyaW5nXTogeyB2YWx1ZTogYW55IH0gfSB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX29ialJlZj8udW5pZm9ybXMgYXNcbiAgICAgIHwgeyBbbmFtZTogc3RyaW5nXTogeyB2YWx1ZTogYW55IH0gfVxuICAgICAgfCB1bmRlZmluZWQ7XG4gIH1cbiAgQElucHV0KClcbiAgcHVibGljIHNldCBmc1F1YWQodmFsdWU6IEZ1bGxTY3JlZW5RdWFkKSB7XG4gICAgaWYgKHRoaXMuX29ialJlZikge1xuICAgICAgdGhpcy5fb2JqUmVmLmZzUXVhZCA9IHZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBnZXQgZnNRdWFkKCk6IEZ1bGxTY3JlZW5RdWFkIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fb2JqUmVmPy5mc1F1YWQ7XG4gIH1cbiAgQElucHV0KClcbiAgcHVibGljIHNldCBvbGRDbGVhckNvbG9yKFxuICAgIHZhbHVlOlxuICAgICAgfCBDb2xvclxuICAgICAgfCBbXG4gICAgICAgICAgLi4uYXJnczpcbiAgICAgICAgICAgIHwgW2NvbG9yOiBDb2xvclJlcHJlc2VudGF0aW9uXVxuICAgICAgICAgICAgfCBbcjogbnVtYmVyLCBnOiBudW1iZXIsIGI6IG51bWJlcl0sXG4gICAgICAgIF0sXG4gICkge1xuICAgIGlmICh0aGlzLl9vYmpSZWYpIHtcbiAgICAgIHRoaXMuX29ialJlZi5vbGRDbGVhckNvbG9yID0gYXBwbHlWYWx1ZTxDb2xvcj4oXG4gICAgICAgIHRoaXMuX29ialJlZi5vbGRDbGVhckNvbG9yLFxuICAgICAgICB2YWx1ZSxcbiAgICAgICk7XG4gICAgfVxuICB9XG4gIHB1YmxpYyBnZXQgb2xkQ2xlYXJDb2xvcigpOiBDb2xvciB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX29ialJlZj8ub2xkQ2xlYXJDb2xvcjtcbiAgfVxufVxuIl19