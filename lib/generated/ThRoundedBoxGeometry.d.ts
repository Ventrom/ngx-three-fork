import { Type } from '@angular/core';
import { RoundedBoxGeometry } from 'three/examples/jsm/geometries/RoundedBoxGeometry.js';
import { ThBoxGeometry } from './ThBoxGeometry';
import * as i0 from "@angular/core";
export declare class ThRoundedBoxGeometry<T extends RoundedBoxGeometry = RoundedBoxGeometry, TARGS = [
    width?: number,
    height?: number,
    depth?: number,
    segments?: number,
    radius?: number
]> extends ThBoxGeometry<T, TARGS> {
    getType(): Type<RoundedBoxGeometry>;
    static ɵfac: i0.ɵɵFactoryDeclaration<ThRoundedBoxGeometry<any, any>, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ThRoundedBoxGeometry<any, any>, "th-roundedBoxGeometry", never, {}, {}, never, ["*"], false, never>;
}
