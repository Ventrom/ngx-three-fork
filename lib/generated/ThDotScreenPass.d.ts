import { Type } from '@angular/core';
import { ShaderMaterial, Vector2 } from 'three';
import { DotScreenPass } from 'three/examples/jsm/postprocessing/DotScreenPass.js';
import { FullScreenQuad } from 'three/examples/jsm/postprocessing/Pass.js';
import { ThPass } from './ThPass';
import * as i0 from "@angular/core";
export declare class ThDotScreenPass<T extends DotScreenPass = DotScreenPass, TARGS = [center?: Vector2, angle?: number, scale?: number]> extends ThPass<T, TARGS> {
    getType(): Type<DotScreenPass>;
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
    static ɵfac: i0.ɵɵFactoryDeclaration<ThDotScreenPass<any, any>, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ThDotScreenPass<any, any>, "th-dotScreenPass", never, { "uniforms": { "alias": "uniforms"; "required": false; }; "material": { "alias": "material"; "required": false; }; "fsQuad": { "alias": "fsQuad"; "required": false; }; }, {}, never, ["*"], false, never>;
}
