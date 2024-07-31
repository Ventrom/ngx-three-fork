import { Type } from '@angular/core';
import { Data3DTexture, DataTexture } from 'three';
import { LUTPass, LUTPassParameters } from 'three/examples/jsm/postprocessing/LUTPass.js';
import { ThShaderPass } from './ThShaderPass';
import * as i0 from "@angular/core";
export declare class ThLUTPass<T extends LUTPass = LUTPass, TARGS = LUTPassParameters> extends ThShaderPass<T, TARGS> {
    getType(): Type<LUTPass>;
    set lut(value: DataTexture | Data3DTexture);
    get lut(): (DataTexture | Data3DTexture) | undefined;
    set intensity(value: number);
    get intensity(): number | undefined;
    static ɵfac: i0.ɵɵFactoryDeclaration<ThLUTPass<any, any>, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ThLUTPass<any, any>, "th-lUTPass", never, { "lut": { "alias": "lut"; "required": false; }; "intensity": { "alias": "intensity"; "required": false; }; }, {}, never, ["*"], false, never>;
}
