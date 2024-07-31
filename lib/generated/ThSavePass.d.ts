import { Type } from '@angular/core';
import { ShaderMaterial, WebGLRenderTarget } from 'three';
import { FullScreenQuad } from 'three/examples/jsm/postprocessing/Pass.js';
import { SavePass } from 'three/examples/jsm/postprocessing/SavePass.js';
import { ThPass } from './ThPass';
import * as i0 from "@angular/core";
export declare class ThSavePass<T extends SavePass = SavePass, TARGS = WebGLRenderTarget> extends ThPass<T, TARGS> {
    getType(): Type<SavePass>;
    set textureID(value: string);
    get textureID(): string | undefined;
    set renderTarget(value: WebGLRenderTarget);
    get renderTarget(): WebGLRenderTarget | undefined;
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
    set material(value: ShaderMaterial);
    get material(): ShaderMaterial | undefined;
    set fsQuad(value: FullScreenQuad);
    get fsQuad(): FullScreenQuad | undefined;
    static ɵfac: i0.ɵɵFactoryDeclaration<ThSavePass<any, any>, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ThSavePass<any, any>, "th-savePass", never, { "textureID": { "alias": "textureID"; "required": false; }; "renderTarget": { "alias": "renderTarget"; "required": false; }; "uniforms": { "alias": "uniforms"; "required": false; }; "material": { "alias": "material"; "required": false; }; "fsQuad": { "alias": "fsQuad"; "required": false; }; }, {}, never, ["*"], false, never>;
}
