import { Type } from '@angular/core';
import { OctahedronGeometry } from 'three';
import { ThPolyhedronGeometry } from './ThPolyhedronGeometry';
import * as i0 from "@angular/core";
export declare class ThOctahedronGeometry<T extends OctahedronGeometry = OctahedronGeometry, TARGS = [radius?: number, detail?: number]> extends ThPolyhedronGeometry<T, TARGS> {
    getType(): Type<OctahedronGeometry>;
    get type(): (string | 'OctahedronGeometry') | undefined;
    static ɵfac: i0.ɵɵFactoryDeclaration<ThOctahedronGeometry<any, any>, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ThOctahedronGeometry<any, any>, "th-octahedronGeometry", never, {}, {}, never, ["*"], false, never>;
}
