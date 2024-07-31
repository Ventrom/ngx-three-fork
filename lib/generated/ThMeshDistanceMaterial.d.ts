import { Type } from '@angular/core';
import { MeshDistanceMaterial, MeshDistanceMaterialParameters, Texture } from 'three';
import { ThMaterial } from './ThMaterial';
import * as i0 from "@angular/core";
export declare class ThMeshDistanceMaterial<T extends MeshDistanceMaterial = MeshDistanceMaterial, TARGS = MeshDistanceMaterialParameters> extends ThMaterial<T, TARGS> {
    getType(): Type<MeshDistanceMaterial>;
    get isMeshDistanceMaterial(): true | undefined;
    set type(value: string);
    get type(): string | undefined;
    set map(value: Texture | null);
    get map(): (Texture | null) | undefined;
    set alphaMap(value: Texture | null);
    get alphaMap(): (Texture | null) | undefined;
    set displacementMap(value: Texture | null);
    get displacementMap(): (Texture | null) | undefined;
    set displacementScale(value: number);
    get displacementScale(): number | undefined;
    set displacementBias(value: number);
    get displacementBias(): number | undefined;
    set fog(value: boolean);
    get fog(): boolean | undefined;
    static ɵfac: i0.ɵɵFactoryDeclaration<ThMeshDistanceMaterial<any, any>, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ThMeshDistanceMaterial<any, any>, "th-meshDistanceMaterial", never, { "type": { "alias": "type"; "required": false; }; "map": { "alias": "map"; "required": false; }; "alphaMap": { "alias": "alphaMap"; "required": false; }; "displacementMap": { "alias": "displacementMap"; "required": false; }; "displacementScale": { "alias": "displacementScale"; "required": false; }; "displacementBias": { "alias": "displacementBias"; "required": false; }; "fog": { "alias": "fog"; "required": false; }; }, {}, never, ["*"], false, never>;
}
