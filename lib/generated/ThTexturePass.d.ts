import { Type } from '@angular/core';
import { ShaderMaterial, Texture } from 'three';
import { FullScreenQuad } from 'three/examples/jsm/postprocessing/Pass.js';
import { TexturePass } from 'three/examples/jsm/postprocessing/TexturePass.js';
import { ThPass } from './ThPass';
import * as i0 from "@angular/core";
export declare class ThTexturePass<T extends TexturePass = TexturePass, TARGS = [map?: Texture, opacity?: number]> extends ThPass<T, TARGS> {
    getType(): Type<TexturePass>;
    set map(value: Texture | undefined);
    get map(): (Texture | undefined) | undefined;
    set opacity(value: number);
    get opacity(): number | undefined;
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
    static ɵfac: i0.ɵɵFactoryDeclaration<ThTexturePass<any, any>, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ThTexturePass<any, any>, "th-texturePass", never, { "map": { "alias": "map"; "required": false; }; "opacity": { "alias": "opacity"; "required": false; }; "uniforms": { "alias": "uniforms"; "required": false; }; "material": { "alias": "material"; "required": false; }; "fsQuad": { "alias": "fsQuad"; "required": false; }; }, {}, never, ["*"], false, never>;
}
