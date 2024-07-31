import { Type } from '@angular/core';
import { Bone, BufferGeometry, Material, Matrix4, Object3D, Object3DEventMap, SkeletonHelper, SkinnedMesh } from 'three';
import { ThLineSegments } from './ThLineSegments';
import * as i0 from "@angular/core";
export declare class ThSkeletonHelper<T extends SkeletonHelper = SkeletonHelper, TARGS = /* object */ SkinnedMesh | Object3D> extends ThLineSegments<BufferGeometry, Material | Material[], Object3DEventMap, T, TARGS> {
    getType(): Type<SkeletonHelper>;
    get type(): (string | 'SkeletonHelper') | undefined;
    set bones(value: Bone[]);
    get bones(): Bone[] | undefined;
    set root(value: SkinnedMesh | Object3D);
    get root(): (SkinnedMesh | Object3D) | undefined;
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
    static ɵfac: i0.ɵɵFactoryDeclaration<ThSkeletonHelper<any, any>, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ThSkeletonHelper<any, any>, "th-skeletonHelper", never, { "bones": { "alias": "bones"; "required": false; }; "root": { "alias": "root"; "required": false; }; "matrix": { "alias": "matrix"; "required": false; }; "matrixAutoUpdate": { "alias": "matrixAutoUpdate"; "required": false; }; }, {}, never, ["*"], false, never>;
}
