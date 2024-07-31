import { Type } from '@angular/core';
import { ShaderMaterial, WebGLRenderTarget } from 'three';
import { AfterimagePass } from 'three/examples/jsm/postprocessing/AfterimagePass.js';
import { FullScreenQuad } from 'three/examples/jsm/postprocessing/Pass.js';
import { ThPass } from './ThPass';
import * as i0 from "@angular/core";
export declare class ThAfterimagePass<T extends AfterimagePass = AfterimagePass, TARGS = number> extends ThPass<T, TARGS> {
    getType(): Type<AfterimagePass>;
    set shader(value: object);
    get shader(): object | undefined;
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
    set textureComp(value: WebGLRenderTarget);
    get textureComp(): WebGLRenderTarget | undefined;
    set textureOld(value: WebGLRenderTarget);
    get textureOld(): WebGLRenderTarget | undefined;
    set shaderMaterial(value: ShaderMaterial);
    get shaderMaterial(): ShaderMaterial | undefined;
    set compFsQuad(value: FullScreenQuad);
    get compFsQuad(): FullScreenQuad | undefined;
    set copyFsQuad(value: FullScreenQuad);
    get copyFsQuad(): FullScreenQuad | undefined;
    static ɵfac: i0.ɵɵFactoryDeclaration<ThAfterimagePass<any, any>, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ThAfterimagePass<any, any>, "th-afterimagePass", never, { "shader": { "alias": "shader"; "required": false; }; "uniforms": { "alias": "uniforms"; "required": false; }; "textureComp": { "alias": "textureComp"; "required": false; }; "textureOld": { "alias": "textureOld"; "required": false; }; "shaderMaterial": { "alias": "shaderMaterial"; "required": false; }; "compFsQuad": { "alias": "compFsQuad"; "required": false; }; "copyFsQuad": { "alias": "copyFsQuad"; "required": false; }; }, {}, never, ["*"], false, never>;
}
