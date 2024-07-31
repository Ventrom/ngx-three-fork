import { Type } from '@angular/core';
import { NormalBufferAttributes } from 'three';
import { TeapotGeometry } from 'three/examples/jsm/geometries/TeapotGeometry.js';
import { ThBufferGeometry } from './ThBufferGeometry';
import * as i0 from "@angular/core";
export declare class ThTeapotGeometry<T extends TeapotGeometry = TeapotGeometry, TARGS = [
    size?: number,
    segments?: number,
    bottom?: boolean,
    lid?: boolean,
    body?: boolean,
    fitLid?: boolean,
    blinn?: boolean
]> extends ThBufferGeometry<NormalBufferAttributes, T, TARGS> {
    getType(): Type<TeapotGeometry>;
    static ɵfac: i0.ɵɵFactoryDeclaration<ThTeapotGeometry<any, any>, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ThTeapotGeometry<any, any>, "th-teapotGeometry", never, {}, {}, never, ["*"], false, never>;
}
