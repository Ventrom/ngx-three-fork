import { Type } from '@angular/core';
import { ColorRepresentation } from 'three';
import { ClearPass } from 'three/examples/jsm/postprocessing/ClearPass.js';
import { ThPass } from './ThPass';
import * as i0 from "@angular/core";
export declare class ThClearPass<T extends ClearPass = ClearPass, TARGS = [clearColor?: ColorRepresentation, clearAlpha?: number]> extends ThPass<T, TARGS> {
    getType(): Type<ClearPass>;
    set clearColor(value: ColorRepresentation);
    get clearColor(): ColorRepresentation | undefined;
    set clearAlpha(value: number);
    get clearAlpha(): number | undefined;
    static ɵfac: i0.ɵɵFactoryDeclaration<ThClearPass<any, any>, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ThClearPass<any, any>, "th-clearPass", never, { "clearColor": { "alias": "clearColor"; "required": false; }; "clearAlpha": { "alias": "clearAlpha"; "required": false; }; }, {}, never, ["*"], false, never>;
}
