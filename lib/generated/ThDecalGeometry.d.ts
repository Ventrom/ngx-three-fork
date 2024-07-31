import { Type } from '@angular/core';
import { Euler, Mesh, NormalBufferAttributes, Vector3 } from 'three';
import { DecalGeometry } from 'three/examples/jsm/geometries/DecalGeometry.js';
import { ThBufferGeometry } from './ThBufferGeometry';
import * as i0 from "@angular/core";
export declare class ThDecalGeometry<T extends DecalGeometry = DecalGeometry, TARGS = [mesh: Mesh, position: Vector3, orientation: Euler, size: Vector3]> extends ThBufferGeometry<NormalBufferAttributes, T, TARGS> {
    getType(): Type<DecalGeometry>;
    static ɵfac: i0.ɵɵFactoryDeclaration<ThDecalGeometry<any, any>, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ThDecalGeometry<any, any>, "th-decalGeometry", never, {}, {}, never, ["*"], false, never>;
}
