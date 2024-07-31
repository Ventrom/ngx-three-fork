import { Type } from '@angular/core';
import { ShaderMaterial } from 'three';
import { HalftonePass, HalftonePassParameters } from 'three/examples/jsm/postprocessing/HalftonePass.js';
import { FullScreenQuad } from 'three/examples/jsm/postprocessing/Pass.js';
import { ThPass } from './ThPass';
import * as i0 from "@angular/core";
export declare class ThHalftonePass<T extends HalftonePass = HalftonePass, TARGS = [width: number, height: number, params: HalftonePassParameters]> extends ThPass<T, TARGS> {
    getType(): Type<HalftonePass>;
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
    static ɵfac: i0.ɵɵFactoryDeclaration<ThHalftonePass<any, any>, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ThHalftonePass<any, any>, "th-halftonePass", never, { "uniforms": { "alias": "uniforms"; "required": false; }; "material": { "alias": "material"; "required": false; }; "fsQuad": { "alias": "fsQuad"; "required": false; }; }, {}, never, ["*"], false, never>;
}
