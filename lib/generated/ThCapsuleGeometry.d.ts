import { Type } from '@angular/core';
import { CapsuleGeometry, NormalBufferAttributes } from 'three';
import { ThBufferGeometry } from './ThBufferGeometry';
import * as i0 from "@angular/core";
export declare class ThCapsuleGeometry<T extends CapsuleGeometry = CapsuleGeometry, TARGS = [
    radius?: number,
    length?: number,
    capSegments?: number,
    radialSegments?: number
]> extends ThBufferGeometry<NormalBufferAttributes, T, TARGS> {
    getType(): Type<CapsuleGeometry>;
    get type(): (string | 'CapsuleGeometry') | undefined;
    get parameters(): {
        readonly radius: number;
        readonly length: number;
        readonly capSegments: number;
        readonly radialSegments: number;
    } | undefined;
    static ɵfac: i0.ɵɵFactoryDeclaration<ThCapsuleGeometry<any, any>, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ThCapsuleGeometry<any, any>, "th-capsuleGeometry", never, {}, {}, never, ["*"], false, never>;
}
