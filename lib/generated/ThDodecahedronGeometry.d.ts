import { Type } from '@angular/core';
import { DodecahedronGeometry } from 'three';
import { ThPolyhedronGeometry } from './ThPolyhedronGeometry';
import * as i0 from "@angular/core";
export declare class ThDodecahedronGeometry<T extends DodecahedronGeometry = DodecahedronGeometry, TARGS = [radius?: number, detail?: number]> extends ThPolyhedronGeometry<T, TARGS> {
    getType(): Type<DodecahedronGeometry>;
    get type(): (string | 'DodecahedronGeometry') | undefined;
    static ɵfac: i0.ɵɵFactoryDeclaration<ThDodecahedronGeometry<any, any>, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ThDodecahedronGeometry<any, any>, "th-dodecahedronGeometry", never, {}, {}, never, ["*"], false, never>;
}
