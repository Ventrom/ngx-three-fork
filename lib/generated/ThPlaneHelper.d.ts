import { Type } from '@angular/core';
import { BufferGeometry, Material, Object3DEventMap, Plane, PlaneHelper, Vector3 } from 'three';
import { ThLineSegments } from './ThLineSegments';
import * as i0 from "@angular/core";
export declare class ThPlaneHelper<T extends PlaneHelper = PlaneHelper, TARGS = [plane: Plane, size?: number, hex?: number]> extends ThLineSegments<BufferGeometry, Material | Material[], Object3DEventMap, T, TARGS> {
    getType(): Type<PlaneHelper>;
    get type(): (string | 'PlaneHelper') | undefined;
    set plane(value: Plane | [normal: Vector3, constant: number]);
    get plane(): Plane | undefined;
    set size(value: number);
    get size(): number | undefined;
    static ɵfac: i0.ɵɵFactoryDeclaration<ThPlaneHelper<any, any>, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ThPlaneHelper<any, any>, "th-planeHelper", never, { "plane": { "alias": "plane"; "required": false; }; "size": { "alias": "size"; "required": false; }; }, {}, never, ["*"], false, never>;
}
