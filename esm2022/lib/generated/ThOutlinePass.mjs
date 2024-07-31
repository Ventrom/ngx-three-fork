/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix */
import { ChangeDetectionStrategy, Component, Input, forwardRef, } from '@angular/core';
import { OutlinePass } from 'three/examples/jsm/postprocessing/OutlinePass.js';
import { ThPassBase } from '../ThPassBase';
import { applyValue } from '../util';
import { ThPass } from './ThPass';
import * as i0 from "@angular/core";
export class ThOutlinePass extends ThPass {
    getType() {
        return OutlinePass;
    }
    set renderScene(value) {
        if (this._objRef) {
            this._objRef.renderScene = value;
        }
    }
    get renderScene() {
        return this._objRef?.renderScene;
    }
    set renderCamera(value) {
        if (this._objRef) {
            this._objRef.renderCamera = value;
        }
    }
    get renderCamera() {
        return this._objRef?.renderCamera;
    }
    set selectedObjects(value) {
        if (this._objRef) {
            this._objRef.selectedObjects = value;
        }
    }
    get selectedObjects() {
        return this._objRef?.selectedObjects;
    }
    set visibleEdgeColor(value) {
        if (this._objRef) {
            this._objRef.visibleEdgeColor = applyValue(this._objRef.visibleEdgeColor, value);
        }
    }
    get visibleEdgeColor() {
        return this._objRef?.visibleEdgeColor;
    }
    set hiddenEdgeColor(value) {
        if (this._objRef) {
            this._objRef.hiddenEdgeColor = applyValue(this._objRef.hiddenEdgeColor, value);
        }
    }
    get hiddenEdgeColor() {
        return this._objRef?.hiddenEdgeColor;
    }
    set edgeGlow(value) {
        if (this._objRef) {
            this._objRef.edgeGlow = value;
        }
    }
    get edgeGlow() {
        return this._objRef?.edgeGlow;
    }
    set usePatternTexture(value) {
        if (this._objRef) {
            this._objRef.usePatternTexture = value;
        }
    }
    get usePatternTexture() {
        return this._objRef?.usePatternTexture;
    }
    set edgeThickness(value) {
        if (this._objRef) {
            this._objRef.edgeThickness = value;
        }
    }
    get edgeThickness() {
        return this._objRef?.edgeThickness;
    }
    set edgeStrength(value) {
        if (this._objRef) {
            this._objRef.edgeStrength = value;
        }
    }
    get edgeStrength() {
        return this._objRef?.edgeStrength;
    }
    set downSampleRatio(value) {
        if (this._objRef) {
            this._objRef.downSampleRatio = value;
        }
    }
    get downSampleRatio() {
        return this._objRef?.downSampleRatio;
    }
    set pulsePeriod(value) {
        if (this._objRef) {
            this._objRef.pulsePeriod = value;
        }
    }
    get pulsePeriod() {
        return this._objRef?.pulsePeriod;
    }
    set resolution(value) {
        if (this._objRef) {
            this._objRef.resolution = applyValue(this._objRef.resolution, value);
        }
    }
    get resolution() {
        return this._objRef?.resolution;
    }
    set patternTexture(value) {
        if (this._objRef) {
            this._objRef.patternTexture = value;
        }
    }
    get patternTexture() {
        return this._objRef?.patternTexture;
    }
    set maskBufferMaterial(value) {
        if (this._objRef) {
            this._objRef.maskBufferMaterial = value;
        }
    }
    get maskBufferMaterial() {
        return this._objRef?.maskBufferMaterial;
    }
    set renderTargetMaskBuffer(value) {
        if (this._objRef) {
            this._objRef.renderTargetMaskBuffer = value;
        }
    }
    get renderTargetMaskBuffer() {
        return this._objRef?.renderTargetMaskBuffer;
    }
    set depthMaterial(value) {
        if (this._objRef) {
            this._objRef.depthMaterial = value;
        }
    }
    get depthMaterial() {
        return this._objRef?.depthMaterial;
    }
    set prepareMaskMaterial(value) {
        if (this._objRef) {
            this._objRef.prepareMaskMaterial = value;
        }
    }
    get prepareMaskMaterial() {
        return this._objRef?.prepareMaskMaterial;
    }
    set renderTargetDepthBuffer(value) {
        if (this._objRef) {
            this._objRef.renderTargetDepthBuffer = value;
        }
    }
    get renderTargetDepthBuffer() {
        return this._objRef?.renderTargetDepthBuffer;
    }
    set renderTargetMaskDownSampleBuffer(value) {
        if (this._objRef) {
            this._objRef.renderTargetMaskDownSampleBuffer = value;
        }
    }
    get renderTargetMaskDownSampleBuffer() {
        return this._objRef?.renderTargetMaskDownSampleBuffer;
    }
    set renderTargetBlurBuffer1(value) {
        if (this._objRef) {
            this._objRef.renderTargetBlurBuffer1 = value;
        }
    }
    get renderTargetBlurBuffer1() {
        return this._objRef?.renderTargetBlurBuffer1;
    }
    set renderTargetBlurBuffer2(value) {
        if (this._objRef) {
            this._objRef.renderTargetBlurBuffer2 = value;
        }
    }
    get renderTargetBlurBuffer2() {
        return this._objRef?.renderTargetBlurBuffer2;
    }
    set edgeDetectionMaterial(value) {
        if (this._objRef) {
            this._objRef.edgeDetectionMaterial = value;
        }
    }
    get edgeDetectionMaterial() {
        return this._objRef?.edgeDetectionMaterial;
    }
    set renderTargetEdgeBuffer1(value) {
        if (this._objRef) {
            this._objRef.renderTargetEdgeBuffer1 = value;
        }
    }
    get renderTargetEdgeBuffer1() {
        return this._objRef?.renderTargetEdgeBuffer1;
    }
    set renderTargetEdgeBuffer2(value) {
        if (this._objRef) {
            this._objRef.renderTargetEdgeBuffer2 = value;
        }
    }
    get renderTargetEdgeBuffer2() {
        return this._objRef?.renderTargetEdgeBuffer2;
    }
    set separableBlurMaterial1(value) {
        if (this._objRef) {
            this._objRef.separableBlurMaterial1 = value;
        }
    }
    get separableBlurMaterial1() {
        return this._objRef?.separableBlurMaterial1;
    }
    set separableBlurMaterial2(value) {
        if (this._objRef) {
            this._objRef.separableBlurMaterial2 = value;
        }
    }
    get separableBlurMaterial2() {
        return this._objRef?.separableBlurMaterial2;
    }
    set overlayMaterial(value) {
        if (this._objRef) {
            this._objRef.overlayMaterial = value;
        }
    }
    get overlayMaterial() {
        return this._objRef?.overlayMaterial;
    }
    set copyUniforms(value) {
        if (this._objRef) {
            this._objRef.copyUniforms = value;
        }
    }
    get copyUniforms() {
        return this._objRef?.copyUniforms;
    }
    set materialCopy(value) {
        if (this._objRef) {
            this._objRef.materialCopy = value;
        }
    }
    get materialCopy() {
        return this._objRef?.materialCopy;
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
    set fsQuad(value) {
        if (this._objRef) {
            this._objRef.fsQuad = value;
        }
    }
    get fsQuad() {
        return this._objRef?.fsQuad;
    }
    set tempPulseColor1(value) {
        if (this._objRef) {
            this._objRef.tempPulseColor1 = applyValue(this._objRef.tempPulseColor1, value);
        }
    }
    get tempPulseColor1() {
        return this._objRef?.tempPulseColor1;
    }
    set tempPulseColor2(value) {
        if (this._objRef) {
            this._objRef.tempPulseColor2 = applyValue(this._objRef.tempPulseColor2, value);
        }
    }
    get tempPulseColor2() {
        return this._objRef?.tempPulseColor2;
    }
    set textureMatrix(value) {
        if (this._objRef) {
            this._objRef.textureMatrix = applyValue(this._objRef.textureMatrix, value);
        }
    }
    get textureMatrix() {
        return this._objRef?.textureMatrix;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThOutlinePass, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.1.2", type: ThOutlinePass, selector: "th-outlinePass", inputs: { renderScene: "renderScene", renderCamera: "renderCamera", selectedObjects: "selectedObjects", visibleEdgeColor: "visibleEdgeColor", hiddenEdgeColor: "hiddenEdgeColor", edgeGlow: "edgeGlow", usePatternTexture: "usePatternTexture", edgeThickness: "edgeThickness", edgeStrength: "edgeStrength", downSampleRatio: "downSampleRatio", pulsePeriod: "pulsePeriod", resolution: "resolution", patternTexture: "patternTexture", maskBufferMaterial: "maskBufferMaterial", renderTargetMaskBuffer: "renderTargetMaskBuffer", depthMaterial: "depthMaterial", prepareMaskMaterial: "prepareMaskMaterial", renderTargetDepthBuffer: "renderTargetDepthBuffer", renderTargetMaskDownSampleBuffer: "renderTargetMaskDownSampleBuffer", renderTargetBlurBuffer1: "renderTargetBlurBuffer1", renderTargetBlurBuffer2: "renderTargetBlurBuffer2", edgeDetectionMaterial: "edgeDetectionMaterial", renderTargetEdgeBuffer1: "renderTargetEdgeBuffer1", renderTargetEdgeBuffer2: "renderTargetEdgeBuffer2", separableBlurMaterial1: "separableBlurMaterial1", separableBlurMaterial2: "separableBlurMaterial2", overlayMaterial: "overlayMaterial", copyUniforms: "copyUniforms", materialCopy: "materialCopy", oldClearColor: "oldClearColor", oldClearAlpha: "oldClearAlpha", fsQuad: "fsQuad", tempPulseColor1: "tempPulseColor1", tempPulseColor2: "tempPulseColor2", textureMatrix: "textureMatrix" }, providers: [
            { provide: ThPassBase, useExisting: forwardRef(() => ThOutlinePass) },
        ], usesInheritance: true, ngImport: i0, template: '<ng-content/>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThOutlinePass, decorators: [{
            type: Component,
            args: [{
                    selector: 'th-outlinePass',
                    template: '<ng-content/>',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    providers: [
                        { provide: ThPassBase, useExisting: forwardRef(() => ThOutlinePass) },
                    ],
                }]
        }], propDecorators: { renderScene: [{
                type: Input
            }], renderCamera: [{
                type: Input
            }], selectedObjects: [{
                type: Input
            }], visibleEdgeColor: [{
                type: Input
            }], hiddenEdgeColor: [{
                type: Input
            }], edgeGlow: [{
                type: Input
            }], usePatternTexture: [{
                type: Input
            }], edgeThickness: [{
                type: Input
            }], edgeStrength: [{
                type: Input
            }], downSampleRatio: [{
                type: Input
            }], pulsePeriod: [{
                type: Input
            }], resolution: [{
                type: Input
            }], patternTexture: [{
                type: Input
            }], maskBufferMaterial: [{
                type: Input
            }], renderTargetMaskBuffer: [{
                type: Input
            }], depthMaterial: [{
                type: Input
            }], prepareMaskMaterial: [{
                type: Input
            }], renderTargetDepthBuffer: [{
                type: Input
            }], renderTargetMaskDownSampleBuffer: [{
                type: Input
            }], renderTargetBlurBuffer1: [{
                type: Input
            }], renderTargetBlurBuffer2: [{
                type: Input
            }], edgeDetectionMaterial: [{
                type: Input
            }], renderTargetEdgeBuffer1: [{
                type: Input
            }], renderTargetEdgeBuffer2: [{
                type: Input
            }], separableBlurMaterial1: [{
                type: Input
            }], separableBlurMaterial2: [{
                type: Input
            }], overlayMaterial: [{
                type: Input
            }], copyUniforms: [{
                type: Input
            }], materialCopy: [{
                type: Input
            }], oldClearColor: [{
                type: Input
            }], oldClearAlpha: [{
                type: Input
            }], fsQuad: [{
                type: Input
            }], tempPulseColor1: [{
                type: Input
            }], tempPulseColor2: [{
                type: Input
            }], textureMatrix: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGhPdXRsaW5lUGFzcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC10aHJlZS9zcmMvbGliL2dlbmVyYXRlZC9UaE91dGxpbmVQYXNzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGlEQUFpRDtBQUNqRCx5REFBeUQ7QUFDekQseUNBQXlDO0FBQ3pDLCtGQUErRjtBQUMvRixPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxLQUFLLEVBRUwsVUFBVSxHQUNYLE1BQU0sZUFBZSxDQUFDO0FBZXZCLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxrREFBa0QsQ0FBQztBQUUvRSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxTQUFTLENBQUM7QUFDckMsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLFVBQVUsQ0FBQzs7QUFVbEMsTUFBTSxPQUFPLGFBUVgsU0FBUSxNQUFnQjtJQUNqQixPQUFPO1FBQ1osT0FBTyxXQUFXLENBQUM7SUFDckIsQ0FBQztJQUVELElBQ1csV0FBVyxDQUFDLEtBQVk7UUFDakMsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDakIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDO1FBQ25DLENBQUM7SUFDSCxDQUFDO0lBRUQsSUFBVyxXQUFXO1FBQ3BCLE9BQU8sSUFBSSxDQUFDLE9BQU8sRUFBRSxXQUFXLENBQUM7SUFDbkMsQ0FBQztJQUNELElBQ1csWUFBWSxDQUFDLEtBQWE7UUFDbkMsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDakIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO1FBQ3BDLENBQUM7SUFDSCxDQUFDO0lBRUQsSUFBVyxZQUFZO1FBQ3JCLE9BQU8sSUFBSSxDQUFDLE9BQU8sRUFBRSxZQUFZ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bnQiOlsiLyogZXNsaW50LWRpc2FibGUgQHR5cGVzY3JpcHQtZXNsaW50L2Jhbi10eXBlcyAqL1xuLyogZXNsaW50LWRpc2FibGUgQHR5cGVzY3JpcHQtZXNsaW50L25hbWluZy1jb252ZW50aW9uICovXG4vKiBlc2xpbnQtZGlzYWJsZSBuby11bmRlcnNjb3JlLWRhbmdsZSAqL1xuLyogZXNsaW50LWRpc2FibGUgQGFuZ3VsYXItZXNsaW50L2NvbXBvbmVudC1zZWxlY3RvciwgQGFuZ3VsYXItZXNsaW50L2NvbXBvbmVudC1jbGFzcy1zdWZmaXggKi9cbmltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDb21wb25lbnQsXG4gIElucHV0LFxuICBUeXBlLFxuICBmb3J3YXJkUmVmLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIENhbWVyYSxcbiAgQ29sb3IsXG4gIENvbG9yUmVwcmVzZW50YXRpb24sXG4gIE1hdHJpeDQsXG4gIE1lc2hCYXNpY01hdGVyaWFsLFxuICBNZXNoRGVwdGhNYXRlcmlhbCxcbiAgT2JqZWN0M0QsXG4gIFNjZW5lLFxuICBTaGFkZXJNYXRlcmlhbCxcbiAgVGV4dHVyZSxcbiAgVmVjdG9yMixcbiAgV2ViR0xSZW5kZXJUYXJnZXQsXG59IGZyb20gJ3RocmVlJztcbmltcG9ydCB7IE91dGxpbmVQYXNzIH0gZnJvbSAndGhyZWUvZXhhbXBsZXMvanNtL3Bvc3Rwcm9jZXNzaW5nL091dGxpbmVQYXNzLmpzJztcbmltcG9ydCB7IEZ1bGxTY3JlZW5RdWFkIH0gZnJvbSAndGhyZWUvZXhhbXBsZXMvanNtL3Bvc3Rwcm9jZXNzaW5nL1Bhc3MuanMnO1xuaW1wb3J0IHsgVGhQYXNzQmFzZSB9IGZyb20gJy4uL1RoUGFzc0Jhc2UnO1xuaW1wb3J0IHsgYXBwbHlWYWx1ZSB9IGZyb20gJy4uL3V0aWwnO1xuaW1wb3J0IHsgVGhQYXNzIH0gZnJvbSAnLi9UaFBhc3MnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0aC1vdXRsaW5lUGFzcycsXG4gIHRlbXBsYXRlOiAnPG5nLWNvbnRlbnQvPicsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBwcm92aWRlcnM6IFtcbiAgICB7IHByb3ZpZGU6IFRoUGFzc0Jhc2UsIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IFRoT3V0bGluZVBhc3MpIH0sXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIFRoT3V0bGluZVBhc3M8XG4gIFQgZXh0ZW5kcyBPdXRsaW5lUGFzcyA9IE91dGxpbmVQYXNzLFxuICBUQVJHUyA9IFtcbiAgICByZXNvbHV0aW9uOiBWZWN0b3IyLFxuICAgIHNjZW5lOiBTY2VuZSxcbiAgICBjYW1lcmE6IENhbWVyYSxcbiAgICBzZWxlY3RlZE9iamVjdHM/OiBPYmplY3QzRFtdLFxuICBdLFxuPiBleHRlbmRzIFRoUGFzczxULCBUQVJHUz4ge1xuICBwdWJsaWMgZ2V0VHlwZSgpOiBUeXBlPE91dGxpbmVQYXNzPiB7XG4gICAgcmV0dXJuIE91dGxpbmVQYXNzO1xuICB9XG5cbiAgQElucHV0KClcbiAgcHVibGljIHNldCByZW5kZXJTY2VuZSh2YWx1ZTogU2NlbmUpIHtcbiAgICBpZiAodGhpcy5fb2JqUmVmKSB7XG4gICAgICB0aGlzLl9vYmpSZWYucmVuZGVyU2NlbmUgPSB2YWx1ZTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgZ2V0IHJlbmRlclNjZW5lKCk6IFNjZW5lIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fb2JqUmVmPy5yZW5kZXJTY2VuZTtcbiAgfVxuICBASW5wdXQoKVxuICBwdWJsaWMgc2V0IHJlbmRlckNhbWVyYSh2YWx1ZTogQ2FtZXJhKSB7XG4gICAgaWYgKHRoaXMuX29ialJlZikge1xuICAgICAgdGhpcy5fb2JqUmVmLnJlbmRlckNhbWVyYSA9IHZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBnZXQgcmVuZGVyQ2FtZXJhKCk6IENhbWVyYSB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX29ialJlZj8ucmVuZGVyQ2FtZXJhO1xuICB9XG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzZXQgc2VsZWN0ZWRPYmplY3RzKHZhbHVlOiBPYmplY3QzRFtdKSB7XG4gICAgaWYgKHRoaXMuX29ialJlZikge1xuICAgICAgdGhpcy5fb2JqUmVmLnNlbGVjdGVkT2JqZWN0cyA9IHZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBnZXQgc2VsZWN0ZWRPYmplY3RzKCk6IE9iamVjdDNEW10gfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9vYmpSZWY/LnNlbGVjdGVkT2JqZWN0cztcbiAgfVxuICBASW5wdXQoKVxuICBwdWJsaWMgc2V0IHZpc2libGVFZGdlQ29sb3IoXG4gICAgdmFsdWU6XG4gICAgICB8IENvbG9yXG4gICAgICB8IFtcbiAgICAgICAgICAuLi5hcmdzOlxuICAgICAgICAgICAgfCBbY29sb3I6IENvbG9yUmVwcmVzZW50YXRpb25dXG4gICAgICAgICAgICB8IFtyOiBudW1iZXIsIGc6IG51bWJlciwgYjogbnVtYmVyXSxcbiAgICAgICAgXSxcbiAgKSB7XG4gICAgaWYgKHRoaXMuX29ialJlZikge1xuICAgICAgdGhpcy5fb2JqUmVmLnZpc2libGVFZGdlQ29sb3IgPSBhcHBseVZhbHVlPENvbG9yPihcbiAgICAgICAgdGhpcy5fb2JqUmVmLnZpc2libGVFZGdlQ29sb3IsXG4gICAgICAgIHZhbHVlLFxuICAgICAgKTtcbiAgICB9XG4gIH1cbiAgcHVibGljIGdldCB2aXNpYmxlRWRnZUNvbG9yKCk6IENvbG9yIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fb2JqUmVmPy52aXNpYmxlRWRnZUNvbG9yO1xuICB9XG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzZXQgaGlkZGVuRWRnZUNvbG9yKFxuICAgIHZhbHVlOlxuICAgICAgfCBDb2xvclxuICAgICAgfCBbXG4gICAgICAgICAgLi4uYXJnczpcbiAgICAgICAgICAgIHwgW2NvbG9yOiBDb2xvclJlcHJlc2VudGF0aW9uXVxuICAgICAgICAgICAgfCBbcjogbnVtYmVyLCBnOiBudW1iZXIsIGI6IG51bWJlcl0sXG4gICAgICAgIF0sXG4gICkge1xuICAgIGlmICh0aGlzLl9vYmpSZWYpIHtcbiAgICAgIHRoaXMuX29ialJlZi5oaWRkZW5FZGdlQ29sb3IgPSBhcHBseVZhbHVlPENvbG9yPihcbiAgICAgICAgdGhpcy5fb2JqUmVmLmhpZGRlbkVkZ2VDb2xvcixcbiAgICAgICAgdmFsdWUsXG4gICAgICApO1xuICAgIH1cbiAgfVxuICBwdWJsaWMgZ2V0IGhpZGRlbkVkZ2VDb2xvcigpOiBDb2xvciB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX29ialJlZj8uaGlkZGVuRWRnZUNvbG9yO1xuICB9XG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzZXQgZWRnZUdsb3codmFsdWU6IG51bWJlcikge1xuICAgIGlmICh0aGlzLl9vYmpSZWYpIHtcbiAgICAgIHRoaXMuX29ialJlZi5lZGdlR2xvdyA9IHZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBnZXQgZWRnZUdsb3coKTogbnVtYmVyIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fb2JqUmVmPy5lZGdlR2xvdztcbiAgfVxuICBASW5wdXQoKVxuICBwdWJsaWMgc2V0IHVzZVBhdHRlcm5UZXh0dXJlKHZhbHVlOiBib29sZWFuKSB7XG4gICAgaWYgKHRoaXMuX29ialJlZikge1xuICAgICAgdGhpcy5fb2JqUmVmLnVzZVBhdHRlcm5UZXh0dXJlID0gdmFsdWU7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGdldCB1c2VQYXR0ZXJuVGV4dHVyZSgpOiBib29sZWFuIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fb2JqUmVmPy51c2VQYXR0ZXJuVGV4dHVyZTtcbiAgfVxuICBASW5wdXQoKVxuICBwdWJsaWMgc2V0IGVkZ2VUaGlja25lc3ModmFsdWU6IG51bWJlcikge1xuICAgIGlmICh0aGlzLl9vYmpSZWYpIHtcbiAgICAgIHRoaXMuX29ialJlZi5lZGdlVGhpY2tuZXNzID0gdmFsdWU7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGdldCBlZGdlVGhpY2tuZXNzKCk6IG51bWJlciB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX29ialJlZj8uZWRnZVRoaWNrbmVzcztcbiAgfVxuICBASW5wdXQoKVxuICBwdWJsaWMgc2V0IGVkZ2VTdHJlbmd0aCh2YWx1ZTogbnVtYmVyKSB7XG4gICAgaWYgKHRoaXMuX29ialJlZikge1xuICAgICAgdGhpcy5fb2JqUmVmLmVkZ2VTdHJlbmd0aCA9IHZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBnZXQgZWRnZVN0cmVuZ3RoKCk6IG51bWJlciB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX29ialJlZj8uZWRnZVN0cmVuZ3RoO1xuICB9XG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzZXQgZG93blNhbXBsZVJhdGlvKHZhbHVlOiBudW1iZXIpIHtcbiAgICBpZiAodGhpcy5fb2JqUmVmKSB7XG4gICAgICB0aGlzLl9vYmpSZWYuZG93blNhbXBsZVJhdGlvID0gdmFsdWU7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGdldCBkb3duU2FtcGxlUmF0aW8oKTogbnVtYmVyIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fb2JqUmVmPy5kb3duU2FtcGxlUmF0aW87XG4gIH1cbiAgQElucHV0KClcbiAgcHVibGljIHNldCBwdWxzZVBlcmlvZCh2YWx1ZTogbnVtYmVyKSB7XG4gICAgaWYgKHRoaXMuX29ialJlZikge1xuICAgICAgdGhpcy5fb2JqUmVmLnB1bHNlUGVyaW9kID0gdmFsdWU7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGdldCBwdWxzZVBlcmlvZCgpOiBudW1iZXIgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9vYmpSZWY/LnB1bHNlUGVyaW9kO1xuICB9XG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzZXQgcmVzb2x1dGlvbih2YWx1ZTogVmVjdG9yMiB8IFt4OiBudW1iZXIsIHk6IG51bWJlcl0pIHtcbiAgICBpZiAodGhpcy5fb2JqUmVmKSB7XG4gICAgICB0aGlzLl9vYmpSZWYucmVzb2x1dGlvbiA9IGFwcGx5VmFsdWU8VmVjdG9yMj4oXG4gICAgICAgIHRoaXMuX29ialJlZi5yZXNvbHV0aW9uLFxuICAgICAgICB2YWx1ZSxcbiAgICAgICk7XG4gICAgfVxuICB9XG4gIHB1YmxpYyBnZXQgcmVzb2x1dGlvbigpOiBWZWN0b3IyIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fb2JqUmVmPy5yZXNvbHV0aW9uO1xuICB9XG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzZXQgcGF0dGVyblRleHR1cmUodmFsdWU6IFRleHR1cmUpIHtcbiAgICBpZiAodGhpcy5fb2JqUmVmKSB7XG4gICAgICB0aGlzLl9vYmpSZWYucGF0dGVyblRleHR1cmUgPSB2YWx1ZTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgZ2V0IHBhdHRlcm5UZXh0dXJlKCk6IFRleHR1cmUgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9vYmpSZWY/LnBhdHRlcm5UZXh0dXJlO1xuICB9XG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzZXQgbWFza0J1ZmZlck1hdGVyaWFsKHZhbHVlOiBNZXNoQmFzaWNNYXRlcmlhbCkge1xuICAgIGlmICh0aGlzLl9vYmpSZWYpIHtcbiAgICAgIHRoaXMuX29ialJlZi5tYXNrQnVmZmVyTWF0ZXJpYWwgPSB2YWx1ZTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgZ2V0IG1hc2tCdWZmZXJNYXRlcmlhbCgpOiBNZXNoQmFzaWNNYXRlcmlhbCB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX29ialJlZj8ubWFza0J1ZmZlck1hdGVyaWFsO1xuICB9XG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzZXQgcmVuZGVyVGFyZ2V0TWFza0J1ZmZlcih2YWx1ZTogV2ViR0xSZW5kZXJUYXJnZXQpIHtcbiAgICBpZiAodGhpcy5fb2JqUmVmKSB7XG4gICAgICB0aGlzLl9vYmpSZWYucmVuZGVyVGFyZ2V0TWFza0J1ZmZlciA9IHZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBnZXQgcmVuZGVyVGFyZ2V0TWFza0J1ZmZlcigpOiBXZWJHTFJlbmRlclRhcmdldCB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX29ialJlZj8ucmVuZGVyVGFyZ2V0TWFza0J1ZmZlcjtcbiAgfVxuICBASW5wdXQoKVxuICBwdWJsaWMgc2V0IGRlcHRoTWF0ZXJpYWwodmFsdWU6IE1lc2hEZXB0aE1hdGVyaWFsKSB7XG4gICAgaWYgKHRoaXMuX29ialJlZikge1xuICAgICAgdGhpcy5fb2JqUmVmLmRlcHRoTWF0ZXJpYWwgPSB2YWx1ZTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgZ2V0IGRlcHRoTWF0ZXJpYWwoKTogTWVzaERlcHRoTWF0ZXJpYWwgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9vYmpSZWY/LmRlcHRoTWF0ZXJpYWw7XG4gIH1cbiAgQElucHV0KClcbiAgcHVibGljIHNldCBwcmVwYXJlTWFza01hdGVyaWFsKHZhbHVlOiBTaGFkZXJNYXRlcmlhbCkge1xuICAgIGlmICh0aGlzLl9vYmpSZWYpIHtcbiAgICAgIHRoaXMuX29ialJlZi5wcmVwYXJlTWFza01hdGVyaWFsID0gdmFsdWU7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGdldCBwcmVwYXJlTWFza01hdGVyaWFsKCk6IFNoYWRlck1hdGVyaWFsIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fb2JqUmVmPy5wcmVwYXJlTWFza01hdGVyaWFsO1xuICB9XG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzZXQgcmVuZGVyVGFyZ2V0RGVwdGhCdWZmZXIodmFsdWU6IFdlYkdMUmVuZGVyVGFyZ2V0KSB7XG4gICAgaWYgKHRoaXMuX29ialJlZikge1xuICAgICAgdGhpcy5fb2JqUmVmLnJlbmRlclRhcmdldERlcHRoQnVmZmVyID0gdmFsdWU7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGdldCByZW5kZXJUYXJnZXREZXB0aEJ1ZmZlcigpOiBXZWJHTFJlbmRlclRhcmdldCB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX29ialJlZj8ucmVuZGVyVGFyZ2V0RGVwdGhCdWZmZXI7XG4gIH1cbiAgQElucHV0KClcbiAgcHVibGljIHNldCByZW5kZXJUYXJnZXRNYXNrRG93blNhbXBsZUJ1ZmZlcih2YWx1ZTogV2ViR0xSZW5kZXJUYXJnZXQpIHtcbiAgICBpZiAodGhpcy5fb2JqUmVmKSB7XG4gICAgICB0aGlzLl9vYmpSZWYucmVuZGVyVGFyZ2V0TWFza0Rvd25TYW1wbGVCdWZmZXIgPSB2YWx1ZTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgZ2V0IHJlbmRlclRhcmdldE1hc2tEb3duU2FtcGxlQnVmZmVyKCk6IFdlYkdMUmVuZGVyVGFyZ2V0IHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fb2JqUmVmPy5yZW5kZXJUYXJnZXRNYXNrRG93blNhbXBsZUJ1ZmZlcjtcbiAgfVxuICBASW5wdXQoKVxuICBwdWJsaWMgc2V0IHJlbmRlclRhcmdldEJsdXJCdWZmZXIxKHZhbHVlOiBXZWJHTFJlbmRlclRhcmdldCkge1xuICAgIGlmICh0aGlzLl9vYmpSZWYpIHtcbiAgICAgIHRoaXMuX29ialJlZi5yZW5kZXJUYXJnZXRCbHVyQnVmZmVyMSA9IHZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBnZXQgcmVuZGVyVGFyZ2V0Qmx1ckJ1ZmZlcjEoKTogV2ViR0xSZW5kZXJUYXJnZXQgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9vYmpSZWY/LnJlbmRlclRhcmdldEJsdXJCdWZmZXIxO1xuICB9XG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzZXQgcmVuZGVyVGFyZ2V0Qmx1ckJ1ZmZlcjIodmFsdWU6IFdlYkdMUmVuZGVyVGFyZ2V0KSB7XG4gICAgaWYgKHRoaXMuX29ialJlZikge1xuICAgICAgdGhpcy5fb2JqUmVmLnJlbmRlclRhcmdldEJsdXJCdWZmZXIyID0gdmFsdWU7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGdldCByZW5kZXJUYXJnZXRCbHVyQnVmZmVyMigpOiBXZWJHTFJlbmRlclRhcmdldCB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX29ialJlZj8ucmVuZGVyVGFyZ2V0Qmx1ckJ1ZmZlcjI7XG4gIH1cbiAgQElucHV0KClcbiAgcHVibGljIHNldCBlZGdlRGV0ZWN0aW9uTWF0ZXJpYWwodmFsdWU6IFNoYWRlck1hdGVyaWFsKSB7XG4gICAgaWYgKHRoaXMuX29ialJlZikge1xuICAgICAgdGhpcy5fb2JqUmVmLmVkZ2VEZXRlY3Rpb25NYXRlcmlhbCA9IHZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBnZXQgZWRnZURldGVjdGlvbk1hdGVyaWFsKCk6IFNoYWRlck1hdGVyaWFsIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fb2JqUmVmPy5lZGdlRGV0ZWN0aW9uTWF0ZXJpYWw7XG4gIH1cbiAgQElucHV0KClcbiAgcHVibGljIHNldCByZW5kZXJUYXJnZXRFZGdlQnVmZmVyMSh2YWx1ZTogV2ViR0xSZW5kZXJUYXJnZXQpIHtcbiAgICBpZiAodGhpcy5fb2JqUmVmKSB7XG4gICAgICB0aGlzLl9vYmpSZWYucmVuZGVyVGFyZ2V0RWRnZUJ1ZmZlcjEgPSB2YWx1ZTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgZ2V0IHJlbmRlclRhcmdldEVkZ2VCdWZmZXIxKCk6IFdlYkdMUmVuZGVyVGFyZ2V0IHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fb2JqUmVmPy5yZW5kZXJUYXJnZXRFZGdlQnVmZmVyMTtcbiAgfVxuICBASW5wdXQoKVxuICBwdWJsaWMgc2V0IHJlbmRlclRhcmdldEVkZ2VCdWZmZXIyKHZhbHVlOiBXZWJHTFJlbmRlclRhcmdldCkge1xuICAgIGlmICh0aGlzLl9vYmpSZWYpIHtcbiAgICAgIHRoaXMuX29ialJlZi5yZW5kZXJUYXJnZXRFZGdlQnVmZmVyMiA9IHZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBnZXQgcmVuZGVyVGFyZ2V0RWRnZUJ1ZmZlcjIoKTogV2ViR0xSZW5kZXJUYXJnZXQgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9vYmpSZWY/LnJlbmRlclRhcmdldEVkZ2VCdWZmZXIyO1xuICB9XG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzZXQgc2VwYXJhYmxlQmx1ck1hdGVyaWFsMSh2YWx1ZTogU2hhZGVyTWF0ZXJpYWwpIHtcbiAgICBpZiAodGhpcy5fb2JqUmVmKSB7XG4gICAgICB0aGlzLl9vYmpSZWYuc2VwYXJhYmxlQmx1ck1hdGVyaWFsMSA9IHZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBnZXQgc2VwYXJhYmxlQmx1ck1hdGVyaWFsMSgpOiBTaGFkZXJNYXRlcmlhbCB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX29ialJlZj8uc2VwYXJhYmxlQmx1ck1hdGVyaWFsMTtcbiAgfVxuICBASW5wdXQoKVxuICBwdWJsaWMgc2V0IHNlcGFyYWJsZUJsdXJNYXRlcmlhbDIodmFsdWU6IFNoYWRlck1hdGVyaWFsKSB7XG4gICAgaWYgKHRoaXMuX29ialJlZikge1xuICAgICAgdGhpcy5fb2JqUmVmLnNlcGFyYWJsZUJsdXJNYXRlcmlhbDIgPSB2YWx1ZTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgZ2V0IHNlcGFyYWJsZUJsdXJNYXRlcmlhbDIoKTogU2hhZGVyTWF0ZXJpYWwgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9vYmpSZWY/LnNlcGFyYWJsZUJsdXJNYXRlcmlhbDI7XG4gIH1cbiAgQElucHV0KClcbiAgcHVibGljIHNldCBvdmVybGF5TWF0ZXJpYWwodmFsdWU6IFNoYWRlck1hdGVyaWFsKSB7XG4gICAgaWYgKHRoaXMuX29ialJlZikge1xuICAgICAgdGhpcy5fb2JqUmVmLm92ZXJsYXlNYXRlcmlhbCA9IHZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBnZXQgb3ZlcmxheU1hdGVyaWFsKCk6IFNoYWRlck1hdGVyaWFsIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fb2JqUmVmPy5vdmVybGF5TWF0ZXJpYWw7XG4gIH1cbiAgQElucHV0KClcbiAgcHVibGljIHNldCBjb3B5VW5pZm9ybXModmFsdWU6IG9iamVjdCkge1xuICAgIGlmICh0aGlzLl9vYmpSZWYpIHtcbiAgICAgIHRoaXMuX29ialJlZi5jb3B5VW5pZm9ybXMgPSB2YWx1ZTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgZ2V0IGNvcHlVbmlmb3JtcygpOiBvYmplY3QgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9vYmpSZWY/LmNvcHlVbmlmb3JtcztcbiAgfVxuICBASW5wdXQoKVxuICBwdWJsaWMgc2V0IG1hdGVyaWFsQ29weSh2YWx1ZTogU2hhZGVyTWF0ZXJpYWwpIHtcbiAgICBpZiAodGhpcy5fb2JqUmVmKSB7XG4gICAgICB0aGlzLl9vYmpSZWYubWF0ZXJpYWxDb3B5ID0gdmFsdWU7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGdldCBtYXRlcmlhbENvcHkoKTogU2hhZGVyTWF0ZXJpYWwgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9vYmpSZWY/Lm1hdGVyaWFsQ29weTtcbiAgfVxuICBASW5wdXQoKVxuICBwdWJsaWMgc2V0IG9sZENsZWFyQ29sb3IoXG4gICAgdmFsdWU6XG4gICAgICB8IENvbG9yXG4gICAgICB8IFtcbiAgICAgICAgICAuLi5hcmdzOlxuICAgICAgICAgICAgfCBbY29sb3I6IENvbG9yUmVwcmVzZW50YXRpb25dXG4gICAgICAgICAgICB8IFtyOiBudW1iZXIsIGc6IG51bWJlciwgYjogbnVtYmVyXSxcbiAgICAgICAgXSxcbiAgKSB7XG4gICAgaWYgKHRoaXMuX29ialJlZikge1xuICAgICAgdGhpcy5fb2JqUmVmLm9sZENsZWFyQ29sb3IgPSBhcHBseVZhbHVlPENvbG9yPihcbiAgICAgICAgdGhpcy5fb2JqUmVmLm9sZENsZWFyQ29sb3IsXG4gICAgICAgIHZhbHVlLFxuICAgICAgKTtcbiAgICB9XG4gIH1cbiAgcHVibGljIGdldCBvbGRDbGVhckNvbG9yKCk6IENvbG9yIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fb2JqUmVmPy5vbGRDbGVhckNvbG9yO1xuICB9XG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzZXQgb2xkQ2xlYXJBbHBoYSh2YWx1ZTogbnVtYmVyKSB7XG4gICAgaWYgKHRoaXMuX29ialJlZikge1xuICAgICAgdGhpcy5fb2JqUmVmLm9sZENsZWFyQWxwaGEgPSB2YWx1ZTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgZ2V0IG9sZENsZWFyQWxwaGEoKTogbnVtYmVyIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fb2JqUmVmPy5vbGRDbGVhckFscGhhO1xuICB9XG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzZXQgZnNRdWFkKHZhbHVlOiBGdWxsU2NyZWVuUXVhZCkge1xuICAgIGlmICh0aGlzLl9vYmpSZWYpIHtcbiAgICAgIHRoaXMuX29ialJlZi5mc1F1YWQgPSB2YWx1ZTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgZ2V0IGZzUXVhZCgpOiBGdWxsU2NyZWVuUXVhZCB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX29ialJlZj8uZnNRdWFkO1xuICB9XG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzZXQgdGVtcFB1bHNlQ29sb3IxKFxuICAgIHZhbHVlOlxuICAgICAgfCBDb2xvclxuICAgICAgfCBbXG4gICAgICAgICAgLi4uYXJnczpcbiAgICAgICAgICAgIHwgW2NvbG9yOiBDb2xvclJlcHJlc2VudGF0aW9uXVxuICAgICAgICAgICAgfCBbcjogbnVtYmVyLCBnOiBudW1iZXIsIGI6IG51bWJlcl0sXG4gICAgICAgIF0sXG4gICkge1xuICAgIGlmICh0aGlzLl9vYmpSZWYpIHtcbiAgICAgIHRoaXMuX29ialJlZi50ZW1wUHVsc2VDb2xvcjEgPSBhcHBseVZhbHVlPENvbG9yPihcbiAgICAgICAgdGhpcy5fb2JqUmVmLnRlbXBQdWxzZUNvbG9yMSxcbiAgICAgICAgdmFsdWUsXG4gICAgICApO1xuICAgIH1cbiAgfVxuICBwdWJsaWMgZ2V0IHRlbXBQdWxzZUNvbG9yMSgpOiBDb2xvciB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX29ialJlZj8udGVtcFB1bHNlQ29sb3IxO1xuICB9XG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzZXQgdGVtcFB1bHNlQ29sb3IyKFxuICAgIHZhbHVlOlxuICAgICAgfCBDb2xvclxuICAgICAgfCBbXG4gICAgICAgICAgLi4uYXJnczpcbiAgICAgICAgICAgIHwgW2NvbG9yOiBDb2xvclJlcHJlc2VudGF0aW9uXVxuICAgICAgICAgICAgfCBbcjogbnVtYmVyLCBnOiBudW1iZXIsIGI6IG51bWJlcl0sXG4gICAgICAgIF0sXG4gICkge1xuICAgIGlmICh0aGlzLl9vYmpSZWYpIHtcbiAgICAgIHRoaXMuX29ialJlZi50ZW1wUHVsc2VDb2xvcjIgPSBhcHBseVZhbHVlPENvbG9yPihcbiAgICAgICAgdGhpcy5fb2JqUmVmLnRlbXBQdWxzZUNvbG9yMixcbiAgICAgICAgdmFsdWUsXG4gICAgICApO1xuICAgIH1cbiAgfVxuICBwdWJsaWMgZ2V0IHRlbXBQdWxzZUNvbG9yMigpOiBDb2xvciB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX29ialJlZj8udGVtcFB1bHNlQ29sb3IyO1xuICB9XG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzZXQgdGV4dHVyZU1hdHJpeChcbiAgICB2YWx1ZTpcbiAgICAgIHwgTWF0cml4NFxuICAgICAgfCBbXG4gICAgICAgICAgbjExOiBudW1iZXIsXG4gICAgICAgICAgbjEyOiBudW1iZXIsXG4gICAgICAgICAgbjEzOiBudW1iZXIsXG4gICAgICAgICAgbjE0OiBudW1iZXIsXG4gICAgICAgICAgbjIxOiBudW1iZXIsXG4gICAgICAgICAgbjIyOiBudW1iZXIsXG4gICAgICAgICAgbjIzOiBudW1iZXIsXG4gICAgICAgICAgbjI0OiBudW1iZXIsXG4gICAgICAgICAgbjMxOiBudW1iZXIsXG4gICAgICAgICAgbjMyOiBudW1iZXIsXG4gICAgICAgICAgbjMzOiBudW1iZXIsXG4gICAgICAgICAgbjM0OiBudW1iZXIsXG4gICAgICAgICAgbjQxOiBudW1iZXIsXG4gICAgICAgICAgbjQyOiBudW1iZXIsXG4gICAgICAgICAgbjQzOiBudW1iZXIsXG4gICAgICAgICAgbjQ0OiBudW1iZXIsXG4gICAgICAgIF0sXG4gICkge1xuICAgIGlmICh0aGlzLl9vYmpSZWYpIHtcbiAgICAgIHRoaXMuX29ialJlZi50ZXh0dXJlTWF0cml4ID0gYXBwbHlWYWx1ZTxNYXRyaXg0PihcbiAgICAgICAgdGhpcy5fb2JqUmVmLnRleHR1cmVNYXRyaXgsXG4gICAgICAgIHZhbHVlLFxuICAgICAgKTtcbiAgICB9XG4gIH1cbiAgcHVibGljIGdldCB0ZXh0dXJlTWF0cml4KCk6IE1hdHJpeDQgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9vYmpSZWY/LnRleHR1cmVNYXRyaXg7XG4gIH1cbn1cbiJdfQ==