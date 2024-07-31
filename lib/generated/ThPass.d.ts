import { Type } from '@angular/core';
import { Pass } from 'three/examples/jsm/postprocessing/Pass.js';
import { ThPassBase } from '../ThPassBase';
import * as i0 from "@angular/core";
export declare class ThPass<T extends Pass = Pass, TARGS = []> extends ThPassBase<T, TARGS> {
    getType(): Type<Pass>;
    set isPass(value: boolean);
    get isPass(): boolean | undefined;
    set enabled(value: boolean);
    get enabled(): boolean | undefined;
    set needsSwap(value: boolean);
    get needsSwap(): boolean | undefined;
    set clear(value: boolean);
    get clear(): boolean | undefined;
    set renderToScreen(value: boolean);
    get renderToScreen(): boolean | undefined;
    static ɵfac: i0.ɵɵFactoryDeclaration<ThPass<any, any>, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ThPass<any, any>, "th-pass", never, { "isPass": { "alias": "isPass"; "required": false; }; "enabled": { "alias": "enabled"; "required": false; }; "needsSwap": { "alias": "needsSwap"; "required": false; }; "clear": { "alias": "clear"; "required": false; }; "renderToScreen": { "alias": "renderToScreen"; "required": false; }; }, {}, never, ["*"], false, never>;
}
