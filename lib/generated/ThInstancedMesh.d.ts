import { Type } from '@angular/core';
import { Box3, BufferGeometry, DataTexture, InstancedBufferAttribute, InstancedMesh, InstancedMeshEventMap, Material, Sphere, Vector3 } from 'three';
import { ThMesh } from './ThMesh';
import * as i0 from "@angular/core";
export declare class ThInstancedMesh<TGeometry extends BufferGeometry = BufferGeometry, TMaterial extends Material | Material[] = Material | Material[], TEventMap extends InstancedMeshEventMap = InstancedMeshEventMap, T extends InstancedMesh<TGeometry, TMaterial, TEventMap> = InstancedMesh<TGeometry, TMaterial, TEventMap>, TARGS = [
    geometry: TGeometry | undefined,
    material: TMaterial | undefined,
    count: number
]> extends ThMesh<TGeometry, TMaterial, TEventMap, T, TARGS> {
    getType(): Type<InstancedMesh<TGeometry, TMaterial, TEventMap>>;
    get isInstancedMesh(): true | undefined;
    set boundingBox(value: Box3 | null | [min: Vector3, max: Vector3]);
    get boundingBox(): (Box3 | null) | undefined;
    set boundingSphere(value: Sphere | null | [center: Vector3, radius: number]);
    get boundingSphere(): (Sphere | null) | undefined;
    set count(value: number);
    get count(): number | undefined;
    set instanceColor(value: InstancedBufferAttribute | null | [value: ArrayLike<number> | ArrayBufferView, offset?: number]);
    get instanceColor(): (InstancedBufferAttribute | null) | undefined;
    set instanceMatrix(value: InstancedBufferAttribute | [value: ArrayLike<number> | ArrayBufferView, offset?: number]);
    get instanceMatrix(): InstancedBufferAttribute | undefined;
    set morphTexture(value: DataTexture | null);
    get morphTexture(): (DataTexture | null) | undefined;
    static ɵfac: i0.ɵɵFactoryDeclaration<ThInstancedMesh<any, any, any, any, any>, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ThInstancedMesh<any, any, any, any, any>, "th-instancedMesh", never, { "boundingBox": { "alias": "boundingBox"; "required": false; }; "boundingSphere": { "alias": "boundingSphere"; "required": false; }; "count": { "alias": "count"; "required": false; }; "instanceColor": { "alias": "instanceColor"; "required": false; }; "instanceMatrix": { "alias": "instanceMatrix"; "required": false; }; "morphTexture": { "alias": "morphTexture"; "required": false; }; }, {}, never, ["*"], false, never>;
}
