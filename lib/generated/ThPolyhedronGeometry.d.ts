import { Type } from '@angular/core';
import { NormalBufferAttributes, PolyhedronGeometry } from 'three';
import { ThBufferGeometry } from './ThBufferGeometry';
import * as i0 from "@angular/core";
export declare class ThPolyhedronGeometry<T extends PolyhedronGeometry = PolyhedronGeometry, TARGS = [
    vertices?: number[],
    indices?: number[],
    radius?: number,
    detail?: number
]> extends ThBufferGeometry<NormalBufferAttributes, T, TARGS> {
    getType(): Type<PolyhedronGeometry>;
    get type(): (string | 'PolyhedronGeometry') | undefined;
    get parameters(): {
        readonly vertices: number[];
        readonly indices: number[];
        readonly radius: number;
        readonly detail: number;
    } | undefined;
    static ɵfac: i0.ɵɵFactoryDeclaration<ThPolyhedronGeometry<any, any>, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ThPolyhedronGeometry<any, any>, "th-polyhedronGeometry", never, {}, {}, never, ["*"], false, never>;
}
