import { Type } from '@angular/core';
import { Color, ColorRepresentation, MeshBasicMaterial, ShaderMaterial, Vector2, Vector3, WebGLRenderTarget } from 'three';
import { FullScreenQuad } from 'three/examples/jsm/postprocessing/Pass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';
import { ThPass } from './ThPass';
import * as i0 from "@angular/core";
export declare class ThUnrealBloomPass<T extends UnrealBloomPass = UnrealBloomPass, TARGS = [
    resolution: Vector2,
    strength: number,
    radius: number,
    threshold: number
]> extends ThPass<T, TARGS> {
    getType(): Type<UnrealBloomPass>;
    set resolution(value: Vector2 | [x: number, y: number]);
    get resolution(): Vector2 | undefined;
    set strength(value: number);
    get strength(): number | undefined;
    set radius(value: number);
    get radius(): number | undefined;
    set threshold(value: number);
    get threshold(): number | undefined;
    set clearColor(value: Color | [
        ...args: [color: ColorRepresentation] | [r: number, g: number, b: number]
    ]);
    get clearColor(): Color | undefined;
    set renderTargetsHorizontal(value: WebGLRenderTarget[]);
    get renderTargetsHorizontal(): WebGLRenderTarget[] | undefined;
    set renderTargetsVertical(value: WebGLRenderTarget[]);
    get renderTargetsVertical(): WebGLRenderTarget[] | undefined;
    set nMips(value: number);
    get nMips(): number | undefined;
    set renderTargetBright(value: WebGLRenderTarget);
    get renderTargetBright(): WebGLRenderTarget | undefined;
    set highPassUniforms(value: object);
    get highPassUniforms(): object | undefined;
    set materialHighPassFilter(value: ShaderMaterial);
    get materialHighPassFilter(): ShaderMaterial | undefined;
    set separableBlurMaterials(value: ShaderMaterial[]);
    get separableBlurMaterials(): ShaderMaterial[] | undefined;
    set compositeMaterial(value: ShaderMaterial);
    get compositeMaterial(): ShaderMaterial | undefined;
    set bloomTintColors(value: Vector3[]);
    get bloomTintColors(): Vector3[] | undefined;
    set copyUniforms(value: object);
    get copyUniforms(): object | undefined;
    set blendMaterial(value: ShaderMaterial);
    get blendMaterial(): ShaderMaterial | undefined;
    set oldClearColor(value: Color | [
        ...args: [color: ColorRepresentation] | [r: number, g: number, b: number]
    ]);
    get oldClearColor(): Color | undefined;
    set oldClearAlpha(value: number);
    get oldClearAlpha(): number | undefined;
    set basic(value: MeshBasicMaterial);
    get basic(): MeshBasicMaterial | undefined;
    set fsQuad(value: FullScreenQuad);
    get fsQuad(): FullScreenQuad | undefined;
    static ɵfac: i0.ɵɵFactoryDeclaration<ThUnrealBloomPass<any, any>, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ThUnrealBloomPass<any, any>, "th-unrealBloomPass", never, { "resolution": { "alias": "resolution"; "required": false; }; "strength": { "alias": "strength"; "required": false; }; "radius": { "alias": "radius"; "required": false; }; "threshold": { "alias": "threshold"; "required": false; }; "clearColor": { "alias": "clearColor"; "required": false; }; "renderTargetsHorizontal": { "alias": "renderTargetsHorizontal"; "required": false; }; "renderTargetsVertical": { "alias": "renderTargetsVertical"; "required": false; }; "nMips": { "alias": "nMips"; "required": false; }; "renderTargetBright": { "alias": "renderTargetBright"; "required": false; }; "highPassUniforms": { "alias": "highPassUniforms"; "required": false; }; "materialHighPassFilter": { "alias": "materialHighPassFilter"; "required": false; }; "separableBlurMaterials": { "alias": "separableBlurMaterials"; "required": false; }; "compositeMaterial": { "alias": "compositeMaterial"; "required": false; }; "bloomTintColors": { "alias": "bloomTintColors"; "required": false; }; "copyUniforms": { "alias": "copyUniforms"; "required": false; }; "blendMaterial": { "alias": "blendMaterial"; "required": false; }; "oldClearColor": { "alias": "oldClearColor"; "required": false; }; "oldClearAlpha": { "alias": "oldClearAlpha"; "required": false; }; "basic": { "alias": "basic"; "required": false; }; "fsQuad": { "alias": "fsQuad"; "required": false; }; }, {}, never, ["*"], false, never>;
}
