import { Type } from '@angular/core';
import { Color, ColorRepresentation, MeshMatcapMaterial, MeshMatcapMaterialParameters, NormalMapTypes, Texture, Vector2 } from 'three';
import { ThMaterial } from './ThMaterial';
import * as i0 from "@angular/core";
export declare class ThMeshMatcapMaterial<T extends MeshMatcapMaterial = MeshMatcapMaterial, TARGS = MeshMatcapMaterialParameters> extends ThMaterial<T, TARGS> {
    getType(): Type<MeshMatcapMaterial>;
    get isMeshMatcapMaterial(): true | undefined;
    set type(value: string);
    get type(): string | undefined;
    set defines(value: {
        [key: string]: any;
    });
    get defines(): {
        [key: string]: any;
    } | undefined;
    set color(value: Color | [
        ...args: [color: ColorRepresentation] | [r: number, g: number, b: number]
    ]);
    get color(): Color | undefined;
    set matcap(value: Texture | null);
    get matcap(): (Texture | null) | undefined;
    set map(value: Texture | null);
    get map(): (Texture | null) | undefined;
    set bumpMap(value: Texture | null);
    get bumpMap(): (Texture | null) | undefined;
    set bumpScale(value: number);
    get bumpScale(): number | undefined;
    set normalMap(value: Texture | null);
    get normalMap(): (Texture | null) | undefined;
    set normalMapType(value: NormalMapTypes);
    get normalMapType(): NormalMapTypes | undefined;
    set normalScale(value: Vector2 | [x: number, y: number]);
    get normalScale(): Vector2 | undefined;
    set displacementMap(value: Texture | null);
    get displacementMap(): (Texture | null) | undefined;
    set displacementScale(value: number);
    get displacementScale(): number | undefined;
    set displacementBias(value: number);
    get displacementBias(): number | undefined;
    set alphaMap(value: Texture | null);
    get alphaMap(): (Texture | null) | undefined;
    set flatShading(value: boolean);
    get flatShading(): boolean | undefined;
    set fog(value: boolean);
    get fog(): boolean | undefined;
    static ɵfac: i0.ɵɵFactoryDeclaration<ThMeshMatcapMaterial<any, any>, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ThMeshMatcapMaterial<any, any>, "th-meshMatcapMaterial", never, { "type": { "alias": "type"; "required": false; }; "defines": { "alias": "defines"; "required": false; }; "color": { "alias": "color"; "required": false; }; "matcap": { "alias": "matcap"; "required": false; }; "map": { "alias": "map"; "required": false; }; "bumpMap": { "alias": "bumpMap"; "required": false; }; "bumpScale": { "alias": "bumpScale"; "required": false; }; "normalMap": { "alias": "normalMap"; "required": false; }; "normalMapType": { "alias": "normalMapType"; "required": false; }; "normalScale": { "alias": "normalScale"; "required": false; }; "displacementMap": { "alias": "displacementMap"; "required": false; }; "displacementScale": { "alias": "displacementScale"; "required": false; }; "displacementBias": { "alias": "displacementBias"; "required": false; }; "alphaMap": { "alias": "alphaMap"; "required": false; }; "flatShading": { "alias": "flatShading"; "required": false; }; "fog": { "alias": "fog"; "required": false; }; }, {}, never, ["*"], false, never>;
}
