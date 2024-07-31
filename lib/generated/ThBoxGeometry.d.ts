import { Type } from '@angular/core';
import { BoxGeometry, NormalBufferAttributes } from 'three';
import { ThBufferGeometry } from './ThBufferGeometry';
import * as i0 from "@angular/core";
export declare class ThBoxGeometry<T extends BoxGeometry = BoxGeometry, TARGS = [
    width?: number,
    height?: number,
    depth?: number,
    widthSegments?: number,
    heightSegments?: number,
    depthSegments?: number
]> extends ThBufferGeometry<NormalBufferAttributes, T, TARGS> {
    getType(): Type<BoxGeometry>;
    get type(): (string | 'BoxGeometry') | undefined;
    get parameters(): {
        readonly width: number;
        readonly height: number;
        readonly depth: number;
        readonly widthSegments: number;
        readonly heightSegments: number;
        readonly depthSegments: number;
    } | undefined;
    static ɵfac: i0.ɵɵFactoryDeclaration<ThBoxGeometry<any, any>, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ThBoxGeometry<any, any>, "th-boxGeometry", never, {}, {}, never, ["*"], false, never>;
}
