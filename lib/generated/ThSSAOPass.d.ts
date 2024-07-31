import { Type } from '@angular/core';
import { Camera, Color, ColorRepresentation, DataTexture, MeshNormalMaterial, Scene, ShaderMaterial, Vector3, WebGLRenderTarget } from 'three';
import { FullScreenQuad } from 'three/examples/jsm/postprocessing/Pass.js';
import { SSAOPass, SSAOPassOUTPUT } from 'three/examples/jsm/postprocessing/SSAOPass.js';
import { ThPass } from './ThPass';
import * as i0 from "@angular/core";
export declare class ThSSAOPass<T extends SSAOPass = SSAOPass, TARGS = [
    scene: Scene,
    camera: Camera,
    width?: number,
    height?: number,
    kernelSize?: number
]> extends ThPass<T, TARGS> {
    getType(): Type<SSAOPass>;
    set scene(value: Scene);
    get scene(): Scene | undefined;
    set camera(value: Camera);
    get camera(): Camera | undefined;
    set width(value: number);
    get width(): number | undefined;
    set height(value: number);
    get height(): number | undefined;
    set clear(value: boolean);
    get clear(): boolean | undefined;
    set kernelRadius(value: number);
    get kernelRadius(): number | undefined;
    set kernel(value: Vector3[]);
    get kernel(): Vector3[] | undefined;
    set noiseTexture(value: DataTexture);
    get noiseTexture(): DataTexture | undefined;
    set output(value: SSAOPassOUTPUT);
    get output(): SSAOPassOUTPUT | undefined;
    set minDistance(value: number);
    get minDistance(): number | undefined;
    set maxDistance(value: number);
    get maxDistance(): number | undefined;
    set normalRenderTarget(value: WebGLRenderTarget);
    get normalRenderTarget(): WebGLRenderTarget | undefined;
    set ssaoRenderTarget(value: WebGLRenderTarget);
    get ssaoRenderTarget(): WebGLRenderTarget | undefined;
    set blurRenderTarget(value: WebGLRenderTarget);
    get blurRenderTarget(): WebGLRenderTarget | undefined;
    set ssaoMaterial(value: ShaderMaterial);
    get ssaoMaterial(): ShaderMaterial | undefined;
    set normalMaterial(value: MeshNormalMaterial);
    get normalMaterial(): MeshNormalMaterial | undefined;
    set blurMaterial(value: ShaderMaterial);
    get blurMaterial(): ShaderMaterial | undefined;
    set depthRenderMaterial(value: ShaderMaterial);
    get depthRenderMaterial(): ShaderMaterial | undefined;
    set copyMaterial(value: ShaderMaterial);
    get copyMaterial(): ShaderMaterial | undefined;
    set fsQuad(value: FullScreenQuad);
    get fsQuad(): FullScreenQuad | undefined;
    set originalClearColor(value: Color | [
        ...args: [color: ColorRepresentation] | [r: number, g: number, b: number]
    ]);
    get originalClearColor(): Color | undefined;
    static readonly OUTPUT: typeof SSAOPassOUTPUT;
    static ɵfac: i0.ɵɵFactoryDeclaration<ThSSAOPass<any, any>, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ThSSAOPass<any, any>, "th-sSAOPass", never, { "scene": { "alias": "scene"; "required": false; }; "camera": { "alias": "camera"; "required": false; }; "width": { "alias": "width"; "required": false; }; "height": { "alias": "height"; "required": false; }; "clear": { "alias": "clear"; "required": false; }; "kernelRadius": { "alias": "kernelRadius"; "required": false; }; "kernel": { "alias": "kernel"; "required": false; }; "noiseTexture": { "alias": "noiseTexture"; "required": false; }; "output": { "alias": "output"; "required": false; }; "minDistance": { "alias": "minDistance"; "required": false; }; "maxDistance": { "alias": "maxDistance"; "required": false; }; "normalRenderTarget": { "alias": "normalRenderTarget"; "required": false; }; "ssaoRenderTarget": { "alias": "ssaoRenderTarget"; "required": false; }; "blurRenderTarget": { "alias": "blurRenderTarget"; "required": false; }; "ssaoMaterial": { "alias": "ssaoMaterial"; "required": false; }; "normalMaterial": { "alias": "normalMaterial"; "required": false; }; "blurMaterial": { "alias": "blurMaterial"; "required": false; }; "depthRenderMaterial": { "alias": "depthRenderMaterial"; "required": false; }; "copyMaterial": { "alias": "copyMaterial"; "required": false; }; "fsQuad": { "alias": "fsQuad"; "required": false; }; "originalClearColor": { "alias": "originalClearColor"; "required": false; }; }, {}, never, ["*"], false, never>;
}
