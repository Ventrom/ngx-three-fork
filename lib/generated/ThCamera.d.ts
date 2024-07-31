import { Type } from '@angular/core';
import { Camera, CoordinateSystem, Layers, Matrix4, Object3DEventMap, Vector4 } from 'three';
import { ThObject3D } from './ThObject3D';
import * as i0 from "@angular/core";
export declare class ThCamera<T extends Camera = Camera, TARGS = []> extends ThObject3D<Object3DEventMap, T, TARGS> {
    getType(): Type<Camera>;
    get isCamera(): true | undefined;
    get type(): (string | 'Camera') | undefined;
    set layers(value: Layers | [layer: number]);
    get layers(): Layers | undefined;
    set matrixWorldInverse(value: Matrix4 | [
        n11: number,
        n12: number,
        n13: number,
        n14: number,
        n21: number,
        n22: number,
        n23: number,
        n24: number,
        n31: number,
        n32: number,
        n33: number,
        n34: number,
        n41: number,
        n42: number,
        n43: number,
        n44: number
    ]);
    get matrixWorldInverse(): Matrix4 | undefined;
    set projectionMatrix(value: Matrix4 | [
        n11: number,
        n12: number,
        n13: number,
        n14: number,
        n21: number,
        n22: number,
        n23: number,
        n24: number,
        n31: number,
        n32: number,
        n33: number,
        n34: number,
        n41: number,
        n42: number,
        n43: number,
        n44: number
    ]);
    get projectionMatrix(): Matrix4 | undefined;
    set projectionMatrixInverse(value: Matrix4 | [
        n11: number,
        n12: number,
        n13: number,
        n14: number,
        n21: number,
        n22: number,
        n23: number,
        n24: number,
        n31: number,
        n32: number,
        n33: number,
        n34: number,
        n41: number,
        n42: number,
        n43: number,
        n44: number
    ]);
    get projectionMatrixInverse(): Matrix4 | undefined;
    set coordinateSystem(value: CoordinateSystem);
    get coordinateSystem(): CoordinateSystem | undefined;
    set viewport(value: Vector4 | [x: number, y: number, z: number, w: number]);
    get viewport(): Vector4 | undefined;
    static ɵfac: i0.ɵɵFactoryDeclaration<ThCamera<any, any>, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ThCamera<any, any>, "th-camera", never, { "layers": { "alias": "layers"; "required": false; }; "matrixWorldInverse": { "alias": "matrixWorldInverse"; "required": false; }; "projectionMatrix": { "alias": "projectionMatrix"; "required": false; }; "projectionMatrixInverse": { "alias": "projectionMatrixInverse"; "required": false; }; "coordinateSystem": { "alias": "coordinateSystem"; "required": false; }; "viewport": { "alias": "viewport"; "required": false; }; }, {}, never, ["*"], false, never>;
}
