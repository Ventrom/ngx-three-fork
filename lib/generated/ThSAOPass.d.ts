import { Type } from '@angular/core';
import { Camera, Color, ColorRepresentation, MeshNormalMaterial, Scene, ShaderMaterial, Vector2, WebGLRenderTarget } from 'three';
import { FullScreenQuad } from 'three/examples/jsm/postprocessing/Pass.js';
import { SAOPass, SAOPassParams } from 'three/examples/jsm/postprocessing/SAOPass.js';
import { ThPass } from './ThPass';
import * as i0 from "@angular/core";
export declare class ThSAOPass<T extends SAOPass = SAOPass, TARGS = [scene: Scene, camera: Camera, resolution?: Vector2]> extends ThPass<T, TARGS> {
    getType(): Type<SAOPass>;
    set scene(value: Scene);
    get scene(): Scene | undefined;
    set camera(value: Camera);
    get camera(): Camera | undefined;
    set originalClearColor(value: Color | [
        ...args: [color: ColorRepresentation] | [r: number, g: number, b: number]
    ]);
    get originalClearColor(): Color | undefined;
    set oldClearColor(value: Color | [
        ...args: [color: ColorRepresentation] | [r: number, g: number, b: number]
    ]);
    get oldClearColor(): Color | undefined;
    set oldClearAlpha(value: number);
    get oldClearAlpha(): number | undefined;
    set resolution(value: Vector2 | [x: number, y: number]);
    get resolution(): Vector2 | undefined;
    set saoRenderTarget(value: WebGLRenderTarget);
    get saoRenderTarget(): WebGLRenderTarget | undefined;
    set blurIntermediateRenderTarget(value: WebGLRenderTarget);
    get blurIntermediateRenderTarget(): WebGLRenderTarget | undefined;
    set normalRenderTarget(value: WebGLRenderTarget);
    get normalRenderTarget(): WebGLRenderTarget | undefined;
    set normalMaterial(value: MeshNormalMaterial);
    get normalMaterial(): MeshNormalMaterial | undefined;
    set saoMaterial(value: ShaderMaterial);
    get saoMaterial(): ShaderMaterial | undefined;
    set vBlurMaterial(value: ShaderMaterial);
    get vBlurMaterial(): ShaderMaterial | undefined;
    set hBlurMaterial(value: ShaderMaterial);
    get hBlurMaterial(): ShaderMaterial | undefined;
    set materialCopy(value: ShaderMaterial);
    get materialCopy(): ShaderMaterial | undefined;
    set fsQuad(value: FullScreenQuad);
    get fsQuad(): FullScreenQuad | undefined;
    set params(value: SAOPassParams);
    get params(): SAOPassParams | undefined;
    static readonly OUTPUT: typeof import("three/examples/jsm/postprocessing/SAOPass.js").OUTPUT;
    static ɵfac: i0.ɵɵFactoryDeclaration<ThSAOPass<any, any>, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ThSAOPass<any, any>, "th-sAOPass", never, { "scene": { "alias": "scene"; "required": false; }; "camera": { "alias": "camera"; "required": false; }; "originalClearColor": { "alias": "originalClearColor"; "required": false; }; "oldClearColor": { "alias": "oldClearColor"; "required": false; }; "oldClearAlpha": { "alias": "oldClearAlpha"; "required": false; }; "resolution": { "alias": "resolution"; "required": false; }; "saoRenderTarget": { "alias": "saoRenderTarget"; "required": false; }; "blurIntermediateRenderTarget": { "alias": "blurIntermediateRenderTarget"; "required": false; }; "normalRenderTarget": { "alias": "normalRenderTarget"; "required": false; }; "normalMaterial": { "alias": "normalMaterial"; "required": false; }; "saoMaterial": { "alias": "saoMaterial"; "required": false; }; "vBlurMaterial": { "alias": "vBlurMaterial"; "required": false; }; "hBlurMaterial": { "alias": "hBlurMaterial"; "required": false; }; "materialCopy": { "alias": "materialCopy"; "required": false; }; "fsQuad": { "alias": "fsQuad"; "required": false; }; "params": { "alias": "params"; "required": false; }; }, {}, never, ["*"], false, never>;
}
