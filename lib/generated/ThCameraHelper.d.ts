import { Type } from '@angular/core';
import { BufferGeometry, Camera, CameraHelper, Material, Matrix4, Object3DEventMap } from 'three';
import { ThLineSegments } from './ThLineSegments';
import * as i0 from "@angular/core";
export declare class ThCameraHelper<T extends CameraHelper = CameraHelper, TARGS = Camera> extends ThLineSegments<BufferGeometry, Material | Material[], Object3DEventMap, T, TARGS> {
    getType(): Type<CameraHelper>;
    get type(): (string | 'CameraHelper') | undefined;
    set camera(value: Camera);
    get camera(): Camera | undefined;
    set pointMap(value: {
        [id: string]: number[];
    });
    get pointMap(): {
        [id: string]: number[];
    } | undefined;
    set matrix(value: Matrix4 | [
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
    get matrix(): Matrix4 | undefined;
    set matrixAutoUpdate(value: boolean);
    get matrixAutoUpdate(): boolean | undefined;
    static ɵfac: i0.ɵɵFactoryDeclaration<ThCameraHelper<any, any>, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ThCameraHelper<any, any>, "th-cameraHelper", never, { "camera": { "alias": "camera"; "required": false; }; "pointMap": { "alias": "pointMap"; "required": false; }; "matrix": { "alias": "matrix"; "required": false; }; "matrixAutoUpdate": { "alias": "matrixAutoUpdate"; "required": false; }; }, {}, never, ["*"], false, never>;
}
