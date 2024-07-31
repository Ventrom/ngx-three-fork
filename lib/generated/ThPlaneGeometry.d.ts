import { Type } from '@angular/core';
import { NormalBufferAttributes, PlaneGeometry } from 'three';
import { ThBufferGeometry } from './ThBufferGeometry';
import * as i0 from "@angular/core";
export declare class ThPlaneGeometry<T extends PlaneGeometry = PlaneGeometry, TARGS = [
    width?: number,
    height?: number,
    widthSegments?: number,
    heightSegments?: number
]> extends ThBufferGeometry<NormalBufferAttributes, T, TARGS> {
    getType(): Type<PlaneGeometry>;
    get type(): (string | 'PlaneGeometry') | undefined;
    get parameters(): {
        readonly width: number;
        readonly height: number;
        readonly widthSegments: number;
        readonly heightSegments: number;
    } | undefined;
    static ɵfac: i0.ɵɵFactoryDeclaration<ThPlaneGeometry<any, any>, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ThPlaneGeometry<any, any>, "th-planeGeometry", never, {}, {}, never, ["*"], false, never>;
}
