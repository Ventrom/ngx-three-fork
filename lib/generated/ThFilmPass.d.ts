import { Type } from '@angular/core';
import { ShaderMaterial } from 'three';
import { FilmPass } from 'three/examples/jsm/postprocessing/FilmPass.js';
import { FullScreenQuad } from 'three/examples/jsm/postprocessing/Pass.js';
import { ThPass } from './ThPass';
import * as i0 from "@angular/core";
export declare class ThFilmPass<T extends FilmPass = FilmPass, TARGS = [intensity?: number, grayscale?: boolean]> extends ThPass<T, TARGS> {
    getType(): Type<FilmPass>;
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
    static ɵfac: i0.ɵɵFactoryDeclaration<ThFilmPass<any, any>, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ThFilmPass<any, any>, "th-filmPass", never, { "uniforms": { "alias": "uniforms"; "required": false; }; "material": { "alias": "material"; "required": false; }; "fsQuad": { "alias": "fsQuad"; "required": false; }; }, {}, never, ["*"], false, never>;
}
