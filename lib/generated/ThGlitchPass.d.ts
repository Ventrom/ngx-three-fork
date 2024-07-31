import { Type } from '@angular/core';
import { ShaderMaterial } from 'three';
import { GlitchPass } from 'three/examples/jsm/postprocessing/GlitchPass.js';
import { FullScreenQuad } from 'three/examples/jsm/postprocessing/Pass.js';
import { ThPass } from './ThPass';
import * as i0 from "@angular/core";
export declare class ThGlitchPass<T extends GlitchPass = GlitchPass, TARGS = number> extends ThPass<T, TARGS> {
    getType(): Type<GlitchPass>;
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
    set goWild(value: boolean);
    get goWild(): boolean | undefined;
    set curF(value: number);
    get curF(): number | undefined;
    set randX(value: number);
    get randX(): number | undefined;
    static ɵfac: i0.ɵɵFactoryDeclaration<ThGlitchPass<any, any>, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ThGlitchPass<any, any>, "th-glitchPass", never, { "uniforms": { "alias": "uniforms"; "required": false; }; "material": { "alias": "material"; "required": false; }; "fsQuad": { "alias": "fsQuad"; "required": false; }; "goWild": { "alias": "goWild"; "required": false; }; "curF": { "alias": "curF"; "required": false; }; "randX": { "alias": "randX"; "required": false; }; }, {}, never, ["*"], false, never>;
}
