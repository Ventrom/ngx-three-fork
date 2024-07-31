import { Type } from '@angular/core';
import { IcosahedronGeometry } from 'three';
import { ThPolyhedronGeometry } from './ThPolyhedronGeometry';
import * as i0 from "@angular/core";
export declare class ThIcosahedronGeometry<T extends IcosahedronGeometry = IcosahedronGeometry, TARGS = [radius?: number, detail?: number]> extends ThPolyhedronGeometry<T, TARGS> {
    getType(): Type<IcosahedronGeometry>;
    get type(): (string | 'IcosahedronGeometry') | undefined;
    static ɵfac: i0.ɵɵFactoryDeclaration<ThIcosahedronGeometry<any, any>, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ThIcosahedronGeometry<any, any>, "th-icosahedronGeometry", never, {}, {}, never, ["*"], false, never>;
}
