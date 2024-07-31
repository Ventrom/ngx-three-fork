import { Type } from '@angular/core';
import { Camera, Color, ColorRepresentation, Matrix4, MeshBasicMaterial, MeshDepthMaterial, Object3D, Scene, ShaderMaterial, Texture, Vector2, WebGLRenderTarget } from 'three';
import { OutlinePass } from 'three/examples/jsm/postprocessing/OutlinePass.js';
import { FullScreenQuad } from 'three/examples/jsm/postprocessing/Pass.js';
import { ThPass } from './ThPass';
import * as i0 from "@angular/core";
export declare class ThOutlinePass<T extends OutlinePass = OutlinePass, TARGS = [
    resolution: Vector2,
    scene: Scene,
    camera: Camera,
    selectedObjects?: Object3D[]
]> extends ThPass<T, TARGS> {
    getType(): Type<OutlinePass>;
    set renderScene(value: Scene);
    get renderScene(): Scene | undefined;
    set renderCamera(value: Camera);
    get renderCamera(): Camera | undefined;
    set selectedObjects(value: Object3D[]);
    get selectedObjects(): Object3D[] | undefined;
    set visibleEdgeColor(value: Color | [
        ...args: [color: ColorRepresentation] | [r: number, g: number, b: number]
    ]);
    get visibleEdgeColor(): Color | undefined;
    set hiddenEdgeColor(value: Color | [
        ...args: [color: ColorRepresentation] | [r: number, g: number, b: number]
    ]);
    get hiddenEdgeColor(): Color | undefined;
    set edgeGlow(value: number);
    get edgeGlow(): number | undefined;
    set usePatternTexture(value: boolean);
    get usePatternTexture(): boolean | undefined;
    set edgeThickness(value: number);
    get edgeThickness(): number | undefined;
    set edgeStrength(value: number);
    get edgeStrength(): number | undefined;
    set downSampleRatio(value: number);
    get downSampleRatio(): number | undefined;
    set pulsePeriod(value: number);
    get pulsePeriod(): number | undefined;
    set resolution(value: Vector2 | [x: number, y: number]);
    get resolution(): Vector2 | undefined;
    set patternTexture(value: Texture);
    get patternTexture(): Texture | undefined;
    set maskBufferMaterial(value: MeshBasicMaterial);
    get maskBufferMaterial(): MeshBasicMaterial | undefined;
    set renderTargetMaskBuffer(value: WebGLRenderTarget);
    get renderTargetMaskBuffer(): WebGLRenderTarget | undefined;
    set depthMaterial(value: MeshDepthMaterial);
    get depthMaterial(): MeshDepthMaterial | undefined;
    set prepareMaskMaterial(value: ShaderMaterial);
    get prepareMaskMaterial(): ShaderMaterial | undefined;
    set renderTargetDepthBuffer(value: WebGLRenderTarget);
    get renderTargetDepthBuffer(): WebGLRenderTarget | undefined;
    set renderTargetMaskDownSampleBuffer(value: WebGLRenderTarget);
    get renderTargetMaskDownSampleBuffer(): WebGLRenderTarget | undefined;
    set renderTargetBlurBuffer1(value: WebGLRenderTarget);
    get renderTargetBlurBuffer1(): WebGLRenderTarget | undefined;
    set renderTargetBlurBuffer2(value: WebGLRenderTarget);
    get renderTargetBlurBuffer2(): WebGLRenderTarget | undefined;
    set edgeDetectionMaterial(value: ShaderMaterial);
    get edgeDetectionMaterial(): ShaderMaterial | undefined;
    set renderTargetEdgeBuffer1(value: WebGLRenderTarget);
    get renderTargetEdgeBuffer1(): WebGLRenderTarget | undefined;
    set renderTargetEdgeBuffer2(value: WebGLRenderTarget);
    get renderTargetEdgeBuffer2(): WebGLRenderTarget | undefined;
    set separableBlurMaterial1(value: ShaderMaterial);
    get separableBlurMaterial1(): ShaderMaterial | undefined;
    set separableBlurMaterial2(value: ShaderMaterial);
    get separableBlurMaterial2(): ShaderMaterial | undefined;
    set overlayMaterial(value: ShaderMaterial);
    get overlayMaterial(): ShaderMaterial | undefined;
    set copyUniforms(value: object);
    get copyUniforms(): object | undefined;
    set materialCopy(value: ShaderMaterial);
    get materialCopy(): ShaderMaterial | undefined;
    set oldClearColor(value: Color | [
        ...args: [color: ColorRepresentation] | [r: number, g: number, b: number]
    ]);
    get oldClearColor(): Color | undefined;
    set oldClearAlpha(value: number);
    get oldClearAlpha(): number | undefined;
    set fsQuad(value: FullScreenQuad);
    get fsQuad(): FullScreenQuad | undefined;
    set tempPulseColor1(value: Color | [
        ...args: [color: ColorRepresentation] | [r: number, g: number, b: number]
    ]);
    get tempPulseColor1(): Color | undefined;
    set tempPulseColor2(value: Color | [
        ...args: [color: ColorRepresentation] | [r: number, g: number, b: number]
    ]);
    get tempPulseColor2(): Color | undefined;
    set textureMatrix(value: Matrix4 | [
        n11: number,
        n12: number,
        n13: number,
        n14: number,
        n21: number,
        n22: number,
        n23: number,
        n24: number,
        n31: number,
        n32: number,
        n33: number,
        n34: number,
        n41: number,
        n42: number,
        n43: number,
        n44: number
    ]);
    get textureMatrix(): Matrix4 | undefined;
    static ɵfac: i0.ɵɵFactoryDeclaration<ThOutlinePass<any, any>, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ThOutlinePass<any, any>, "th-outlinePass", never, { "renderScene": { "alias": "renderScene"; "required": false; }; "renderCamera": { "alias": "renderCamera"; "required": false; }; "selectedObjects": { "alias": "selectedObjects"; "required": false; }; "visibleEdgeColor": { "alias": "visibleEdgeColor"; "required": false; }; "hiddenEdgeColor": { "alias": "hiddenEdgeColor"; "required": false; }; "edgeGlow": { "alias": "edgeGlow"; "required": false; }; "usePatternTexture": { "alias": "usePatternTexture"; "required": false; }; "edgeThickness": { "alias": "edgeThickness"; "required": false; }; "edgeStrength": { "alias": "edgeStrength"; "required": false; }; "downSampleRatio": { "alias": "downSampleRatio"; "required": false; }; "pulsePeriod": { "alias": "pulsePeriod"; "required": false; }; "resolution": { "alias": "resolution"; "required": false; }; "patternTexture": { "alias": "patternTexture"; "required": false; }; "maskBufferMaterial": { "alias": "maskBufferMaterial"; "required": false; }; "renderTargetMaskBuffer": { "alias": "renderTargetMaskBuffer"; "required": false; }; "depthMaterial": { "alias": "depthMaterial"; "required": false; }; "prepareMaskMaterial": { "alias": "prepareMaskMaterial"; "required": false; }; "renderTargetDepthBuffer": { "alias": "renderTargetDepthBuffer"; "required": false; }; "renderTargetMaskDownSampleBuffer": { "alias": "renderTargetMaskDownSampleBuffer"; "required": false; }; "renderTargetBlurBuffer1": { "alias": "renderTargetBlurBuffer1"; "required": false; }; "renderTargetBlurBuffer2": { "alias": "renderTargetBlurBuffer2"; "required": false; }; "edgeDetectionMaterial": { "alias": "edgeDetectionMaterial"; "required": false; }; "renderTargetEdgeBuffer1": { "alias": "renderTargetEdgeBuffer1"; "required": false; }; "renderTargetEdgeBuffer2": { "alias": "renderTargetEdgeBuffer2"; "required": false; }; "separableBlurMaterial1": { "alias": "separableBlurMaterial1"; "required": false; }; "separableBlurMaterial2": { "alias": "separableBlurMaterial2"; "required": false; }; "overlayMaterial": { "alias": "overlayMaterial"; "required": false; }; "copyUniforms": { "alias": "copyUniforms"; "required": false; }; "materialCopy": { "alias": "materialCopy"; "required": false; }; "oldClearColor": { "alias": "oldClearColor"; "required": false; }; "oldClearAlpha": { "alias": "oldClearAlpha"; "required": false; }; "fsQuad": { "alias": "fsQuad"; "required": false; }; "tempPulseColor1": { "alias": "tempPulseColor1"; "required": false; }; "tempPulseColor2": { "alias": "tempPulseColor2"; "required": false; }; "textureMatrix": { "alias": "textureMatrix"; "required": false; }; }, {}, never, ["*"], false, never>;
}
