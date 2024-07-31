import { Type } from '@angular/core';
import { ShaderMaterial } from 'three';
import { FullScreenQuad } from 'three/examples/jsm/postprocessing/Pass.js';
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass.js';
import { ThPass } from './ThPass';
import * as i0 from "@angular/core";
export declare class ThShaderPass<T extends ShaderPass = ShaderPass, TARGS = [shader: object, textureID?: string]> extends ThPass<T, TARGS> {
    getType(): Type<ShaderPass>;
    set textureID(value: string);
    get textureID(): string | undefined;
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
    static ɵfac: i0.ɵɵFactoryDeclaration<ThShaderPass<any, any>, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ThShaderPass<any, any>, "th-shaderPass", never, { "textureID": { "alias": "textureID"; "required": false; }; "uniforms": { "alias": "uniforms"; "required": false; }; "material": { "alias": "material"; "required": false; }; "fsQuad": { "alias": "fsQuad"; "required": false; }; }, {}, never, ["*"], false, never>;
}
