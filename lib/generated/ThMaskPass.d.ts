import { Type } from '@angular/core';
import { Camera, Scene } from 'three';
import { MaskPass } from 'three/examples/jsm/postprocessing/MaskPass.js';
import { ThPass } from './ThPass';
import * as i0 from "@angular/core";
export declare class ThMaskPass<T extends MaskPass = MaskPass, TARGS = [scene: Scene, camera: Camera]> extends ThPass<T, TARGS> {
    getType(): Type<MaskPass>;
    set scene(value: Scene);
    get scene(): Scene | undefined;
    set camera(value: Camera);
    get camera(): Camera | undefined;
    set inverse(value: boolean);
    get inverse(): boolean | undefined;
    static ɵfac: i0.ɵɵFactoryDeclaration<ThMaskPass<any, any>, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ThMaskPass<any, any>, "th-maskPass", never, { "scene": { "alias": "scene"; "required": false; }; "camera": { "alias": "camera"; "required": false; }; "inverse": { "alias": "inverse"; "required": false; }; }, {}, never, ["*"], false, never>;
}
