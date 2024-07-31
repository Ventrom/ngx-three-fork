import { Type } from '@angular/core';
import { NormalBufferAttributes, SphereGeometry } from 'three';
import { ThBufferGeometry } from './ThBufferGeometry';
import * as i0 from "@angular/core";
export declare class ThSphereGeometry<T extends SphereGeometry = SphereGeometry, TARGS = [
    radius?: number,
    widthSegments?: number,
    heightSegments?: number,
    phiStart?: number,
    phiLength?: number,
    thetaStart?: number,
    thetaLength?: number
]> extends ThBufferGeometry<NormalBufferAttributes, T, TARGS> {
    getType(): Type<SphereGeometry>;
    get type(): (string | 'SphereGeometry') | undefined;
    get parameters(): {
        readonly radius: number;
        readonly widthSegments: number;
        readonly heightSegments: number;
        readonly phiStart: number;
        readonly phiLength: number;
        readonly thetaStart: number;
        readonly thetaLength: number;
    } | undefined;
    static ɵfac: i0.ɵɵFactoryDeclaration<ThSphereGeometry<any, any>, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ThSphereGeometry<any, any>, "th-sphereGeometry", never, {}, {}, never, ["*"], false, never>;
}
