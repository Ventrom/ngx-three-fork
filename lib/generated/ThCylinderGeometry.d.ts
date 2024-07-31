import { Type } from '@angular/core';
import { CylinderGeometry, NormalBufferAttributes } from 'three';
import { ThBufferGeometry } from './ThBufferGeometry';
import * as i0 from "@angular/core";
export declare class ThCylinderGeometry<T extends CylinderGeometry = CylinderGeometry, TARGS = [
    radiusTop?: number,
    radiusBottom?: number,
    height?: number,
    radialSegments?: number,
    heightSegments?: number,
    openEnded?: boolean,
    thetaStart?: number,
    thetaLength?: number
]> extends ThBufferGeometry<NormalBufferAttributes, T, TARGS> {
    getType(): Type<CylinderGeometry>;
    get type(): (string | 'CylinderGeometry') | undefined;
    get parameters(): {
        readonly radiusTop: number;
        readonly radiusBottom: number;
        readonly height: number;
        readonly radialSegments: number;
        readonly heightSegments: number;
        readonly openEnded: boolean;
        readonly thetaStart: number;
        readonly thetaLength: number;
    } | undefined;
    static ɵfac: i0.ɵɵFactoryDeclaration<ThCylinderGeometry<any, any>, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ThCylinderGeometry<any, any>, "th-cylinderGeometry", never, {}, {}, never, ["*"], false, never>;
}
