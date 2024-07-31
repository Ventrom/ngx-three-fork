import { Type } from '@angular/core';
import { BindMode, Box3, BufferGeometry, Material, Matrix4, Object3DEventMap, Skeleton, SkinnedMesh, Sphere, Vector3 } from 'three';
import { ThMesh } from './ThMesh';
import * as i0 from "@angular/core";
export declare class ThSkinnedMesh<TGeometry extends BufferGeometry = BufferGeometry, TMaterial extends Material | Material[] = Material | Material[], TEventMap extends Object3DEventMap = Object3DEventMap, T extends SkinnedMesh<TGeometry, TMaterial, TEventMap> = SkinnedMesh<TGeometry, TMaterial, TEventMap>, TARGS = [
    geometry?: TGeometry,
    material?: TMaterial,
    useVertexTexture?: boolean
]> extends ThMesh<TGeometry, TMaterial, TEventMap, T, TARGS> {
    getType(): Type<SkinnedMesh<TGeometry, TMaterial, TEventMap>>;
    get isSkinnedMesh(): true | undefined;
    get type(): (string | 'SkinnedMesh') | undefined;
    set bindMode(value: BindMode);
    get bindMode(): BindMode | undefined;
    set bindMatrix(value: Matrix4 | [
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
    get bindMatrix(): Matrix4 | undefined;
    set bindMatrixInverse(value: Matrix4 | [
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
    get bindMatrixInverse(): Matrix4 | undefined;
    set boundingBox(value: Box3 | [min: Vector3, max: Vector3]);
    get boundingBox(): Box3 | undefined;
    set boundingSphere(value: Sphere | [center: Vector3, radius: number]);
    get boundingSphere(): Sphere | undefined;
    set skeleton(value: Skeleton);
    get skeleton(): Skeleton | undefined;
    static ɵfac: i0.ɵɵFactoryDeclaration<ThSkinnedMesh<any, any, any, any, any>, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ThSkinnedMesh<any, any, any, any, any>, "th-skinnedMesh", never, { "bindMode": { "alias": "bindMode"; "required": false; }; "bindMatrix": { "alias": "bindMatrix"; "required": false; }; "bindMatrixInverse": { "alias": "bindMatrixInverse"; "required": false; }; "boundingBox": { "alias": "boundingBox"; "required": false; }; "boundingSphere": { "alias": "boundingSphere"; "required": false; }; "skeleton": { "alias": "skeleton"; "required": false; }; }, {}, never, ["*"], false, never>;
}
