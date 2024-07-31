import { Type } from '@angular/core';
import { NormalBufferAttributes } from 'three';
import { BoxLineGeometry } from 'three/examples/jsm/geometries/BoxLineGeometry.js';
import { ThBufferGeometry } from './ThBufferGeometry';
import * as i0 from "@angular/core";
export declare class ThBoxLineGeometry<T extends BoxLineGeometry = BoxLineGeometry, TARGS = [
    width?: number,
    height?: number,
    depth?: number,
    widthSegments?: number,
    heightSegments?: number,
    depthSegments?: number
]> extends ThBufferGeometry<NormalBufferAttributes, T, TARGS> {
    getType(): Type<BoxLineGeometry>;
    static ɵfac: i0.ɵɵFactoryDeclaration<ThBoxLineGeometry<any, any>, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ThBoxLineGeometry<any, any>, "th-boxLineGeometry", never, {}, {}, never, ["*"], false, never>;
}
