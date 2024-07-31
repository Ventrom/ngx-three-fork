import { Type } from '@angular/core';
import { NormalBufferAttributes, TorusKnotGeometry } from 'three';
import { ThBufferGeometry } from './ThBufferGeometry';
import * as i0 from "@angular/core";
export declare class ThTorusKnotGeometry<T extends TorusKnotGeometry = TorusKnotGeometry, TARGS = [
    radius?: number,
    tube?: number,
    tubularSegments?: number,
    radialSegments?: number,
    p?: number,
    q?: number
]> extends ThBufferGeometry<NormalBufferAttributes, T, TARGS> {
    getType(): Type<TorusKnotGeometry>;
    get type(): (string | 'TorusKnotGeometry') | undefined;
    get parameters(): {
        readonly radius: number;
        readonly tube: number;
        readonly tubularSegments: number;
        readonly radialSegments: number;
        readonly p: number;
        readonly q: number;
    } | undefined;
    static ɵfac: i0.ɵɵFactoryDeclaration<ThTorusKnotGeometry<any, any>, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ThTorusKnotGeometry<any, any>, "th-torusKnotGeometry", never, {}, {}, never, ["*"], false, never>;
}
