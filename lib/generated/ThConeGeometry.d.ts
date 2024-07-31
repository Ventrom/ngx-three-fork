import { Type } from '@angular/core';
import { ConeGeometry } from 'three';
import { ThCylinderGeometry } from './ThCylinderGeometry';
import * as i0 from "@angular/core";
export declare class ThConeGeometry<T extends ConeGeometry = ConeGeometry, TARGS = [
    radius?: number,
    height?: number,
    radialSegments?: number,
    heightSegments?: number,
    openEnded?: boolean,
    thetaStart?: number,
    thetaLength?: number
]> extends ThCylinderGeometry<T, TARGS> {
    getType(): Type<ConeGeometry>;
    get type(): (string | 'ConeGeometry') | undefined;
    get parameters(): {
        readonly radius: number;
        readonly radiusTop: number;
        readonly radiusBottom: number;
        readonly height: number;
        readonly radialSegments: number;
        readonly heightSegments: number;
        readonly openEnded: boolean;
        readonly thetaStart: number;
        readonly thetaLength: number;
    } | undefined;
    static ɵfac: i0.ɵɵFactoryDeclaration<ThConeGeometry<any, any>, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ThConeGeometry<any, any>, "th-coneGeometry", never, {}, {}, never, ["*"], false, never>;
}
