import { Type } from '@angular/core';
import { CircleGeometry, NormalBufferAttributes } from 'three';
import { ThBufferGeometry } from './ThBufferGeometry';
import * as i0 from "@angular/core";
export declare class ThCircleGeometry<T extends CircleGeometry = CircleGeometry, TARGS = [
    radius?: number,
    segments?: number,
    thetaStart?: number,
    thetaLength?: number
]> extends ThBufferGeometry<NormalBufferAttributes, T, TARGS> {
    getType(): Type<CircleGeometry>;
    get type(): (string | 'CircleGeometry') | undefined;
    get parameters(): {
        readonly radius: number;
        readonly segments: number;
        readonly thetaStart: number;
        readonly thetaLength: number;
    } | undefined;
    static ɵfac: i0.ɵɵFactoryDeclaration<ThCircleGeometry<any, any>, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ThCircleGeometry<any, any>, "th-circleGeometry", never, {}, {}, never, ["*"], false, never>;
}
