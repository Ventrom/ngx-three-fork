import { Type } from '@angular/core';
import { LatheGeometry, NormalBufferAttributes, Vector2 } from 'three';
import { ThBufferGeometry } from './ThBufferGeometry';
import * as i0 from "@angular/core";
export declare class ThLatheGeometry<T extends LatheGeometry = LatheGeometry, TARGS = [
    points?: Vector2[],
    segments?: number,
    phiStart?: number,
    phiLength?: number
]> extends ThBufferGeometry<NormalBufferAttributes, T, TARGS> {
    getType(): Type<LatheGeometry>;
    get type(): (string | 'LatheGeometry') | undefined;
    get parameters(): {
        readonly points: Vector2[];
        readonly segments: number;
        readonly phiStart: number;
        readonly phiLength: number;
    } | undefined;
    static ɵfac: i0.ɵɵFactoryDeclaration<ThLatheGeometry<any, any>, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ThLatheGeometry<any, any>, "th-latheGeometry", never, {}, {}, never, ["*"], false, never>;
}
