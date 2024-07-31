import { Type } from '@angular/core';
import { BatchedMesh, Box3, BufferGeometry, Camera, Material, Object3DEventMap, Sphere, Vector3 } from 'three';
import { ThMesh } from './ThMesh';
import * as i0 from "@angular/core";
export declare class ThBatchedMesh<T extends BatchedMesh = BatchedMesh, TARGS = [maxGeometryCount: number, maxVertexCount: number, maxIndexCount?: number, material?: Material]> extends ThMesh<BufferGeometry, Material, Object3DEventMap, T, TARGS> {
    getType(): Type<BatchedMesh>;
    set boundingBox(value: Box3 | null | [min: Vector3, max: Vector3]);
    get boundingBox(): (Box3 | null) | undefined;
    set boundingSphere(value: Sphere | null | [center: Vector3, radius: number]);
    get boundingSphere(): (Sphere | null) | undefined;
    set customSort(value: ((this: any, list: Array<{
        start: number;
        count: number;
        z: number;
    }>, camera: Camera) => void) | null);
    get customSort(): (((this: any, list: Array<{
        start: number;
        count: number;
        z: number;
    }>, camera: Camera) => void) | null) | undefined;
    set perObjectFrustumCulled(value: boolean);
    get perObjectFrustumCulled(): boolean | undefined;
    set sortObjects(value: boolean);
    get sortObjects(): boolean | undefined;
    get maxGeometryCount(): number | undefined;
    set isBatchedMesh(value: true);
    get isBatchedMesh(): true | undefined;
    static ɵfac: i0.ɵɵFactoryDeclaration<ThBatchedMesh<any, any>, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ThBatchedMesh<any, any>, "th-batchedMesh", never, { "boundingBox": { "alias": "boundingBox"; "required": false; }; "boundingSphere": { "alias": "boundingSphere"; "required": false; }; "customSort": { "alias": "customSort"; "required": false; }; "perObjectFrustumCulled": { "alias": "perObjectFrustumCulled"; "required": false; }; "sortObjects": { "alias": "sortObjects"; "required": false; }; "isBatchedMesh": { "alias": "isBatchedMesh"; "required": false; }; }, {}, never, ["*"], false, never>;
}
