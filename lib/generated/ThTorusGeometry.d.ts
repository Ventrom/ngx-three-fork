import { Type } from '@angular/core';
import { NormalBufferAttributes, TorusGeometry } from 'three';
import { ThBufferGeometry } from './ThBufferGeometry';
import * as i0 from "@angular/core";
export declare class ThTorusGeometry<T extends TorusGeometry = TorusGeometry, TARGS = [
    radius?: number,
    tube?: number,
    radialSegments?: number,
    tubularSegments?: number,
    arc?: number
]> extends ThBufferGeometry<NormalBufferAttributes, T, TARGS> {
    getType(): Type<TorusGeometry>;
    get type(): (string | 'TorusGeometry') | undefined;
    get parameters(): {
        readonly radius: number;
        readonly tube: number;
        readonly radialSegments: number;
        readonly tubularSegments: number;
        readonly arc: number;
    } | undefined;
    static ɵfac: i0.ɵɵFactoryDeclaration<ThTorusGeometry<any, any>, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ThTorusGeometry<any, any>, "th-torusGeometry", never, {}, {}, never, ["*"], false, never>;
}
