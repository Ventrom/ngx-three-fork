import { Type } from '@angular/core';
import { Camera, ColorRepresentation, Scene, ShaderMaterial, WebGLRenderTarget } from 'three';
import { FullScreenQuad } from 'three/examples/jsm/postprocessing/Pass.js';
import { SSAARenderPass } from 'three/examples/jsm/postprocessing/SSAARenderPass.js';
import { ThPass } from './ThPass';
import * as i0 from "@angular/core";
export declare class ThSSAARenderPass<T extends SSAARenderPass = SSAARenderPass, TARGS = [
    scene: Scene,
    camera: Camera,
    clearColor?: ColorRepresentation,
    clearAlpha?: number
]> extends ThPass<T, TARGS> {
    getType(): Type<SSAARenderPass>;
    set scene(value: Scene);
    get scene(): Scene | undefined;
    set camera(value: Camera);
    get camera(): Camera | undefined;
    set sampleLevel(value: number);
    get sampleLevel(): number | undefined;
    set unbiased(value: boolean);
    get unbiased(): boolean | undefined;
    set clearColor(value: ColorRepresentation);
    get clearColor(): ColorRepresentation | undefined;
    set clearAlpha(value: number);
    get clearAlpha(): number | undefined;
    set copyUniforms(value: object);
    get copyUniforms(): object | undefined;
    set copyMaterial(value: ShaderMaterial);
    get copyMaterial(): ShaderMaterial | undefined;
    set fsQuad(value: FullScreenQuad);
    get fsQuad(): FullScreenQuad | undefined;
    set sampleRenderTarget(value: undefined | WebGLRenderTarget);
    get sampleRenderTarget(): (undefined | WebGLRenderTarget) | undefined;
    static ɵfac: i0.ɵɵFactoryDeclaration<ThSSAARenderPass<any, any>, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ThSSAARenderPass<any, any>, "th-sSAARenderPass", never, { "scene": { "alias": "scene"; "required": false; }; "camera": { "alias": "camera"; "required": false; }; "sampleLevel": { "alias": "sampleLevel"; "required": false; }; "unbiased": { "alias": "unbiased"; "required": false; }; "clearColor": { "alias": "clearColor"; "required": false; }; "clearAlpha": { "alias": "clearAlpha"; "required": false; }; "copyUniforms": { "alias": "copyUniforms"; "required": false; }; "copyMaterial": { "alias": "copyMaterial"; "required": false; }; "fsQuad": { "alias": "fsQuad"; "required": false; }; "sampleRenderTarget": { "alias": "sampleRenderTarget"; "required": false; }; }, {}, never, ["*"], false, never>;
}
