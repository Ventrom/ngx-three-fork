import { Type } from '@angular/core';
import { ClearMaskPass } from 'three/examples/jsm/postprocessing/MaskPass.js';
import { ThPass } from './ThPass';
import * as i0 from "@angular/core";
export declare class ThClearMaskPass<T extends ClearMaskPass = ClearMaskPass, TARGS = []> extends ThPass<T, TARGS> {
    getType(): Type<ClearMaskPass>;
    static ɵfac: i0.ɵɵFactoryDeclaration<ThClearMaskPass<any, any>, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ThClearMaskPass<any, any>, "th-clearMaskPass", never, {}, {}, never, ["*"], false, never>;
}
