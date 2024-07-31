import { Type } from '@angular/core';
import { ArrayCamera, PerspectiveCamera } from 'three';
import { ThPerspectiveCamera } from './ThPerspectiveCamera';
import * as i0 from "@angular/core";
export declare class ThArrayCamera<T extends ArrayCamera = ArrayCamera, TARGS = PerspectiveCamera[]> extends ThPerspectiveCamera<T, TARGS> {
    getType(): Type<ArrayCamera>;
    get isArrayCamera(): true | undefined;
    set cameras(value: PerspectiveCamera[]);
    get cameras(): PerspectiveCamera[] | undefined;
    static ɵfac: i0.ɵɵFactoryDeclaration<ThArrayCamera<any, any>, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ThArrayCamera<any, any>, "th-arrayCamera", never, { "cameras": { "alias": "cameras"; "required": false; }; }, {}, never, ["*"], false, never>;
}
