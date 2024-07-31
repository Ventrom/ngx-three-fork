import { Type } from '@angular/core';
import { NormalBufferAttributes, Vector3 } from 'three';
import { ConvexGeometry } from 'three/examples/jsm/geometries/ConvexGeometry.js';
import { ThBufferGeometry } from './ThBufferGeometry';
import * as i0 from "@angular/core";
export declare class ThConvexGeometry<T extends ConvexGeometry = ConvexGeometry, TARGS = Vector3[]> extends ThBufferGeometry<NormalBufferAttributes, T, TARGS> {
    getType(): Type<ConvexGeometry>;
    static ɵfac: i0.ɵɵFactoryDeclaration<ThConvexGeometry<any, any>, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ThConvexGeometry<any, any>, "th-convexGeometry", never, {}, {}, never, ["*"], false, never>;
}
