import { Type } from '@angular/core';
import { Camera, ColorRepresentation, Scene } from 'three';
import { TAARenderPass } from 'three/examples/jsm/postprocessing/TAARenderPass.js';
import { ThSSAARenderPass } from './ThSSAARenderPass';
import * as i0 from "@angular/core";
export declare class ThTAARenderPass<T extends TAARenderPass = TAARenderPass, TARGS = [
    scene: Scene,
    camera: Camera,
    clearColor?: ColorRepresentation,
    clearAlpha?: number
]> extends ThSSAARenderPass<T, TARGS> {
    getType(): Type<TAARenderPass>;
    set accumulate(value: boolean);
    get accumulate(): boolean | undefined;
    static ɵfac: i0.ɵɵFactoryDeclaration<ThTAARenderPass<any, any>, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ThTAARenderPass<any, any>, "th-tAARenderPass", never, { "accumulate": { "alias": "accumulate"; "required": false; }; }, {}, never, ["*"], false, never>;
}
