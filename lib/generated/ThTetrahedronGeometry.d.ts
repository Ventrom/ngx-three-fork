import { Type } from '@angular/core';
import { TetrahedronGeometry } from 'three';
import { ThPolyhedronGeometry } from './ThPolyhedronGeometry';
import * as i0 from "@angular/core";
export declare class ThTetrahedronGeometry<T extends TetrahedronGeometry = TetrahedronGeometry, TARGS = [radius?: number, detail?: number]> extends ThPolyhedronGeometry<T, TARGS> {
    getType(): Type<TetrahedronGeometry>;
    get type(): (string | 'TetrahedronGeometry') | undefined;
    static ɵfac: i0.ɵɵFactoryDeclaration<ThTetrahedronGeometry<any, any>, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ThTetrahedronGeometry<any, any>, "th-tetrahedronGeometry", never, {}, {}, never, ["*"], false, never>;
}
