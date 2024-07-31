import { Type } from '@angular/core';
import { Curve, NormalBufferAttributes, TubeGeometry, Vector3 } from 'three';
import { ThBufferGeometry } from './ThBufferGeometry';
import * as i0 from "@angular/core";
export declare class ThTubeGeometry<T extends TubeGeometry = TubeGeometry, TARGS = [
    path?: Curve<Vector3>,
    tubularSegments?: number,
    radius?: number,
    radialSegments?: number,
    closed?: boolean
]> extends ThBufferGeometry<NormalBufferAttributes, T, TARGS> {
    getType(): Type<TubeGeometry>;
    get type(): (string | 'TubeGeometry') | undefined;
    get parameters(): {
        readonly path: Curve<Vector3>;
        readonly tubularSegments: number;
        readonly radius: number;
        readonly radialSegments: number;
        readonly closed: boolean;
    } | undefined;
    set tangents(value: Vector3[]);
    get tangents(): Vector3[] | undefined;
    set normals(value: Vector3[]);
    get normals(): Vector3[] | undefined;
    set binormals(value: Vector3[]);
    get binormals(): Vector3[] | undefined;
    static ɵfac: i0.ɵɵFactoryDeclaration<ThTubeGeometry<any, any>, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ThTubeGeometry<any, any>, "th-tubeGeometry", never, { "tangents": { "alias": "tangents"; "required": false; }; "normals": { "alias": "normals"; "required": false; }; "binormals": { "alias": "binormals"; "required": false; }; }, {}, never, ["*"], false, never>;
}
