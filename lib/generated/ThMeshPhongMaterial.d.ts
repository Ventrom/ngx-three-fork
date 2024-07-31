import { Type } from '@angular/core';
import { Color, ColorRepresentation, Combine, Euler, EulerOrder, MeshPhongMaterial, MeshPhongMaterialParameters, NormalMapTypes, Texture, Vector2 } from 'three';
import { ThMaterial } from './ThMaterial';
import * as i0 from "@angular/core";
export declare class ThMeshPhongMaterial<T extends MeshPhongMaterial = MeshPhongMaterial, TARGS = MeshPhongMaterialParameters> extends ThMaterial<T, TARGS> {
    getType(): Type<MeshPhongMaterial>;
    get isMeshPhongMaterial(): true | undefined;
    set type(value: string);
    get type(): string | undefined;
    set color(value: Color | [
        ...args: [color: ColorRepresentation] | [r: number, g: number, b: number]
    ]);
    get color(): Color | undefined;
    set specular(value: Color | [
        ...args: [color: ColorRepresentation] | [r: number, g: number, b: number]
    ]);
    get specular(): Color | undefined;
    set shininess(value: number);
    get shininess(): number | undefined;
    set map(value: Texture | null);
    get map(): (Texture | null) | undefined;
    set lightMap(value: Texture | null);
    get lightMap(): (Texture | null) | undefined;
    set lightMapIntensity(value: number);
    get lightMapIntensity(): number | undefined;
    set aoMap(value: Texture | null);
    get aoMap(): (Texture | null) | undefined;
    set aoMapIntensity(value: number);
    get aoMapIntensity(): number | undefined;
    set emissive(value: Color | [
        ...args: [color: ColorRepresentation] | [r: number, g: number, b: number]
    ]);
    get emissive(): Color | undefined;
    set emissiveIntensity(value: number);
    get emissiveIntensity(): number | undefined;
    set emissiveMap(value: Texture | null);
    get emissiveMap(): (Texture | null) | undefined;
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
    set specularMap(value: Texture | null);
    get specularMap(): (Texture | null) | undefined;
    set alphaMap(value: Texture | null);
    get alphaMap(): (Texture | null) | undefined;
    set envMap(value: Texture | null);
    get envMap(): (Texture | null) | undefined;
    set envMapRotation(value: Euler | [x: number, y: number, z: number, order?: EulerOrder]);
    get envMapRotation(): Euler | undefined;
    set combine(value: Combine);
    get combine(): Combine | undefined;
    set reflectivity(value: number);
    get reflectivity(): number | undefined;
    set refractionRatio(value: number);
    get refractionRatio(): number | undefined;
    set wireframe(value: boolean);
    get wireframe(): boolean | undefined;
    set wireframeLinewidth(value: number);
    get wireframeLinewidth(): number | undefined;
    set wireframeLinecap(value: string);
    get wireframeLinecap(): string | undefined;
    set wireframeLinejoin(value: string);
    get wireframeLinejoin(): string | undefined;
    set flatShading(value: boolean);
    get flatShading(): boolean | undefined;
    set metal(value: boolean);
    get metal(): boolean | undefined;
    set fog(value: boolean);
    get fog(): boolean | undefined;
    static ɵfac: i0.ɵɵFactoryDeclaration<ThMeshPhongMaterial<any, any>, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ThMeshPhongMaterial<any, any>, "th-meshPhongMaterial", never, { "type": { "alias": "type"; "required": false; }; "color": { "alias": "color"; "required": false; }; "specular": { "alias": "specular"; "required": false; }; "shininess": { "alias": "shininess"; "required": false; }; "map": { "alias": "map"; "required": false; }; "lightMap": { "alias": "lightMap"; "required": false; }; "lightMapIntensity": { "alias": "lightMapIntensity"; "required": false; }; "aoMap": { "alias": "aoMap"; "required": false; }; "aoMapIntensity": { "alias": "aoMapIntensity"; "required": false; }; "emissive": { "alias": "emissive"; "required": false; }; "emissiveIntensity": { "alias": "emissiveIntensity"; "required": false; }; "emissiveMap": { "alias": "emissiveMap"; "required": false; }; "bumpMap": { "alias": "bumpMap"; "required": false; }; "bumpScale": { "alias": "bumpScale"; "required": false; }; "normalMap": { "alias": "normalMap"; "required": false; }; "normalMapType": { "alias": "normalMapType"; "required": false; }; "normalScale": { "alias": "normalScale"; "required": false; }; "displacementMap": { "alias": "displacementMap"; "required": false; }; "displacementScale": { "alias": "displacementScale"; "required": false; }; "displacementBias": { "alias": "displacementBias"; "required": false; }; "specularMap": { "alias": "specularMap"; "required": false; }; "alphaMap": { "alias": "alphaMap"; "required": false; }; "envMap": { "alias": "envMap"; "required": false; }; "envMapRotation": { "alias": "envMapRotation"; "required": false; }; "combine": { "alias": "combine"; "required": false; }; "reflectivity": { "alias": "reflectivity"; "required": false; }; "refractionRatio": { "alias": "refractionRatio"; "required": false; }; "wireframe": { "alias": "wireframe"; "required": false; }; "wireframeLinewidth": { "alias": "wireframeLinewidth"; "required": false; }; "wireframeLinecap": { "alias": "wireframeLinecap"; "required": false; }; "wireframeLinejoin": { "alias": "wireframeLinejoin"; "required": false; }; "flatShading": { "alias": "flatShading"; "required": false; }; "metal": { "alias": "metal"; "required": false; }; "fog": { "alias": "fog"; "required": false; }; }, {}, never, ["*"], false, never>;
}
