import { Type } from '@angular/core';
import { Camera, Color, ColorRepresentation, MeshDepthMaterial, Scene, ShaderMaterial, WebGLRenderTarget } from 'three';
import { BokehPass, BokehPassParamters } from 'three/examples/jsm/postprocessing/BokehPass.js';
import { FullScreenQuad } from 'three/examples/jsm/postprocessing/Pass.js';
import { ThPass } from './ThPass';
import * as i0 from "@angular/core";
export declare class ThBokehPass<T extends BokehPass = BokehPass, TARGS = [scene: Scene, camera: Camera, params: BokehPassParamters]> extends ThPass<T, TARGS> {
    getType(): Type<BokehPass>;
    set scene(value: Scene);
    get scene(): Scene | undefined;
    set camera(value: Camera);
    get camera(): Camera | undefined;
    set renderTargetColor(value: WebGLRenderTarget);
    get renderTargetColor(): WebGLRenderTarget | undefined;
    set renderTargetDepth(value: WebGLRenderTarget);
    get renderTargetDepth(): WebGLRenderTarget | undefined;
    set materialDepth(value: MeshDepthMaterial);
    get materialDepth(): MeshDepthMaterial | undefined;
    set materialBokeh(value: ShaderMaterial);
    get materialBokeh(): ShaderMaterial | undefined;
    set uniforms(map: {
        [name: string]: {
            value: any;
        };
    });
    get uniforms(): {
        [name: string]: {
            value: any;
        };
    } | undefined;
    set fsQuad(value: FullScreenQuad);
    get fsQuad(): FullScreenQuad | undefined;
    set oldClearColor(value: Color | [
        ...args: [color: ColorRepresentation] | [r: number, g: number, b: number]
    ]);
    get oldClearColor(): Color | undefined;
    static ɵfac: i0.ɵɵFactoryDeclaration<ThBokehPass<any, any>, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ThBokehPass<any, any>, "th-bokehPass", never, { "scene": { "alias": "scene"; "required": false; }; "camera": { "alias": "camera"; "required": false; }; "renderTargetColor": { "alias": "renderTargetColor"; "required": false; }; "renderTargetDepth": { "alias": "renderTargetDepth"; "required": false; }; "materialDepth": { "alias": "materialDepth"; "required": false; }; "materialBokeh": { "alias": "materialBokeh"; "required": false; }; "uniforms": { "alias": "uniforms"; "required": false; }; "fsQuad": { "alias": "fsQuad"; "required": false; }; "oldClearColor": { "alias": "oldClearColor"; "required": false; }; }, {}, never, ["*"], false, never>;
}
