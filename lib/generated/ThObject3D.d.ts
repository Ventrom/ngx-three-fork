import { Type } from '@angular/core';
import { AnimationClip, Euler, EulerOrder, Layers, Material, Matrix3, Matrix4, Object3D, Object3DEventMap, Quaternion, Vector3 } from 'three';
import { ThObjectBase } from '../ThObjectBase';
import * as i0 from "@angular/core";
export declare class ThObject3D<TEventMap extends Object3DEventMap = Object3DEventMap, T extends Object3D<TEventMap> = Object3D<TEventMap>, TARGS = []> extends ThObjectBase<T, TARGS> {
    getType(): Type<Object3D<TEventMap>>;
    get isObject3D(): true | undefined;
    get id(): number | undefined;
    set uuid(value: string);
    get uuid(): string | undefined;
    set name(value: string);
    get name(): string | undefined;
    get type(): (string | 'Object3D') | undefined;
    set children(value: Object3D[]);
    get children(): Object3D[] | undefined;
    set up(value: Vector3 | [x: number, y: number, z: number]);
    get up(): Vector3 | undefined;
    set position(value: Vector3 | [x: number, y: number, z: number]);
    get position(): Vector3 | undefined;
    set rotation(value: Euler | [x: number, y: number, z: number, order?: EulerOrder]);
    get rotation(): Euler | undefined;
    set quaternion(value: Quaternion | [x: number, y: number, z: number, w: number]);
    get quaternion(): Quaternion | undefined;
    set scale(value: Vector3 | [x: number, y: number, z: number]);
    get scale(): Vector3 | undefined;
    set modelViewMatrix(value: Matrix4 | [
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
    get modelViewMatrix(): Matrix4 | undefined;
    set normalMatrix(value: Matrix3 | [
        n11: number,
        n12: number,
        n13: number,
        n21: number,
        n22: number,
        n23: number,
        n31: number,
        n32: number,
        n33: number
    ]);
    get normalMatrix(): Matrix3 | undefined;
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
    set matrixWorld(value: Matrix4 | [
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
    get matrixWorld(): Matrix4 | undefined;
    set matrixAutoUpdate(value: boolean);
    get matrixAutoUpdate(): boolean | undefined;
    set matrixWorldAutoUpdate(value: boolean);
    get matrixWorldAutoUpdate(): boolean | undefined;
    set matrixWorldNeedsUpdate(value: boolean);
    get matrixWorldNeedsUpdate(): boolean | undefined;
    set layers(value: Layers | [layer: number]);
    get layers(): Layers | undefined;
    set visible(value: boolean);
    get visible(): boolean | undefined;
    set castShadow(value: boolean);
    get castShadow(): boolean | undefined;
    set receiveShadow(value: boolean);
    get receiveShadow(): boolean | undefined;
    set frustumCulled(value: boolean);
    get frustumCulled(): boolean | undefined;
    set renderOrder(value: number);
    get renderOrder(): number | undefined;
    set animations(value: AnimationClip[]);
    get animations(): AnimationClip[] | undefined;
    set userData(value: Record<string, any>);
    get userData(): Record<string, any> | undefined;
    set customDepthMaterial(value: Material | undefined);
    get customDepthMaterial(): (Material | undefined) | undefined;
    set customDistanceMaterial(value: Material | undefined);
    get customDistanceMaterial(): (Material | undefined) | undefined;
    static readonly DEFAULT_UP: Vector3;
    static readonly DEFAULT_MATRIX_AUTO_UPDATE: boolean;
    static readonly DEFAULT_MATRIX_WORLD_AUTO_UPDATE: boolean;
    constructor(parent: ThObject3D);
    static ɵfac: i0.ɵɵFactoryDeclaration<ThObject3D<any, any, any>, [{ skipSelf: true; }]>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ThObject3D<any, any, any>, "th-object3D", never, { "uuid": { "alias": "uuid"; "required": false; }; "name": { "alias": "name"; "required": false; }; "children": { "alias": "children"; "required": false; }; "up": { "alias": "up"; "required": false; }; "position": { "alias": "position"; "required": false; }; "rotation": { "alias": "rotation"; "required": false; }; "quaternion": { "alias": "quaternion"; "required": false; }; "scale": { "alias": "scale"; "required": false; }; "modelViewMatrix": { "alias": "modelViewMatrix"; "required": false; }; "normalMatrix": { "alias": "normalMatrix"; "required": false; }; "matrix": { "alias": "matrix"; "required": false; }; "matrixWorld": { "alias": "matrixWorld"; "required": false; }; "matrixAutoUpdate": { "alias": "matrixAutoUpdate"; "required": false; }; "matrixWorldAutoUpdate": { "alias": "matrixWorldAutoUpdate"; "required": false; }; "matrixWorldNeedsUpdate": { "alias": "matrixWorldNeedsUpdate"; "required": false; }; "layers": { "alias": "layers"; "required": false; }; "visible": { "alias": "visible"; "required": false; }; "castShadow": { "alias": "castShadow"; "required": false; }; "receiveShadow": { "alias": "receiveShadow"; "required": false; }; "frustumCulled": { "alias": "frustumCulled"; "required": false; }; "renderOrder": { "alias": "renderOrder"; "required": false; }; "animations": { "alias": "animations"; "required": false; }; "userData": { "alias": "userData"; "required": false; }; "customDepthMaterial": { "alias": "customDepthMaterial"; "required": false; }; "customDistanceMaterial": { "alias": "customDistanceMaterial"; "required": false; }; }, {}, never, ["*"], false, never>;
}
