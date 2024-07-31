import { Type } from '@angular/core';
import { NormalBufferAttributes, RingGeometry } from 'three';
import { ThBufferGeometry } from './ThBufferGeometry';
import * as i0 from "@angular/core";
export declare class ThRingGeometry<T extends RingGeometry = RingGeometry, TARGS = [
    innerRadius?: number,
    outerRadius?: number,
    thetaSegments?: number,
    phiSegments?: number,
    thetaStart?: number,
    thetaLength?: number
]> extends ThBufferGeometry<NormalBufferAttributes, T, TARGS> {
    getType(): Type<RingGeometry>;
    get type(): (string | 'RingGeometry') | undefined;
    get parameters(): {
        readonly innerRadius: number;
        readonly outerRadius: number;
        readonly thetaSegments: number;
        readonly phiSegments: number;
        readonly thetaStart: number;
        readonly thetaLength: number;
    } | undefined;
    static ɵfac: i0.ɵɵFactoryDeclaration<ThRingGeometry<any, any>, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ThRingGeometry<any, any>, "th-ringGeometry", never, {}, {}, never, ["*"], false, never>;
}
