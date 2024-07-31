import { Type } from '@angular/core';
import { Box3, BufferAttribute, BufferGeometry, GeometryGroup, InterleavedBufferAttribute, NormalBufferAttributes, NormalOrGLBufferAttributes, Sphere, Vector3 } from 'three';
import { ThGeometryBase } from '../ThGeometryBase';
import { ThObject3D } from './ThObject3D';
import * as i0 from "@angular/core";
export declare class ThBufferGeometry<Attributes extends NormalOrGLBufferAttributes = NormalBufferAttributes, T extends BufferGeometry<Attributes> = BufferGeometry<Attributes>, TARGS = []> extends ThGeometryBase<T, TARGS> {
    getType(): Type<BufferGeometry<Attributes>>;
    set id(value: number);
    get id(): number | undefined;
    set uuid(value: string);
    get uuid(): string | undefined;
    set name(value: string);
    get name(): string | undefined;
    get type(): (string | 'BufferGeometry') | undefined;
    set index(value: BufferAttribute | null | [value: ArrayLike<number> | ArrayBufferView, offset?: number]);
    get index(): (BufferAttribute | null) | undefined;
    set attributes(value: Attributes);
    get attributes(): Attributes | undefined;
    set morphAttributes(value: {
        [name: string]: Array<BufferAttribute | InterleavedBufferAttribute>;
    });
    get morphAttributes(): {
        [name: string]: Array<BufferAttribute | InterleavedBufferAttribute>;
    } | undefined;
    set morphTargetsRelative(value: boolean);
    get morphTargetsRelative(): boolean | undefined;
    set groups(value: GeometryGroup[]);
    get groups(): GeometryGroup[] | undefined;
    set boundingBox(value: Box3 | null | [min: Vector3, max: Vector3]);
    get boundingBox(): (Box3 | null) | undefined;
    set boundingSphere(value: Sphere | null | [center: Vector3, radius: number]);
    get boundingSphere(): (Sphere | null) | undefined;
    set drawRange(value: {
        start: number;
        count: number;
    });
    get drawRange(): {
        start: number;
        count: number;
    } | undefined;
    set userData(value: Record<string, any>);
    get userData(): Record<string, any> | undefined;
    get isBufferGeometry(): true | undefined;
    constructor(hostObject: ThObject3D);
    static ɵfac: i0.ɵɵFactoryDeclaration<ThBufferGeometry<any, any, any>, [{ skipSelf: true; }]>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ThBufferGeometry<any, any, any>, "th-bufferGeometry", never, { "id": { "alias": "id"; "required": false; }; "uuid": { "alias": "uuid"; "required": false; }; "name": { "alias": "name"; "required": false; }; "index": { "alias": "index"; "required": false; }; "attributes": { "alias": "attributes"; "required": false; }; "morphAttributes": { "alias": "morphAttributes"; "required": false; }; "morphTargetsRelative": { "alias": "morphTargetsRelative"; "required": false; }; "groups": { "alias": "groups"; "required": false; }; "boundingBox": { "alias": "boundingBox"; "required": false; }; "boundingSphere": { "alias": "boundingSphere"; "required": false; }; "drawRange": { "alias": "drawRange"; "required": false; }; "userData": { "alias": "userData"; "required": false; }; }, {}, never, ["*"], false, never>;
}
