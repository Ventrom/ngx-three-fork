import { Type } from '@angular/core';
import { Color, ColorRepresentation, Euler, EulerOrder, MeshStandardMaterial, MeshStandardMaterialParameters, NormalMapTypes, Texture, Vector2 } from 'three';
import { ThMaterial } from './ThMaterial';
import * as i0 from "@angular/core";
export declare class ThMeshStandardMaterial<T extends MeshStandardMaterial = MeshStandardMaterial, TARGS = MeshStandardMaterialParameters> extends ThMaterial<T, TARGS> {
    getType(): Type<MeshStandardMaterial>;
    get isMeshStandardMaterial(): true | undefined;
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
    set roughness(value: number);
    get roughness(): number | undefined;
    set metalness(value: number);
    get metalness(): number | undefined;
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
    set roughnessMap(value: Texture | null);
    get roughnessMap(): (Texture | null) | undefined;
    set metalnessMap(value: Texture | null);
    get metalnessMap(): (Texture | null) | undefined;
    set alphaMap(value: Texture | null);
    get alphaMap(): (Texture | null) | undefined;
    set envMap(value: Texture | null);
    get envMap(): (Texture | null) | undefined;
    set envMapRotation(value: Euler | [x: number, y: number, z: number, order?: EulerOrder]);
    get envMapRotation(): Euler | undefined;
    set envMapIntensity(value: number);
    get envMapIntensity(): number | undefined;
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
    set fog(value: boolean);
    get fog(): boolean | undefined;
    static ɵfac: i0.ɵɵFactoryDeclaration<ThMeshStandardMaterial<any, any>, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ThMeshStandardMaterial<any, any>, "th-meshStandardMaterial", never, { "type": { "alias": "type"; "required": false; }; "defines": { "alias": "defines"; "required": false; }; "color": { "alias": "color"; "required": false; }; "roughness": { "alias": "roughness"; "required": false; }; "metalness": { "alias": "metalness"; "required": false; }; "map": { "alias": "map"; "required": false; }; "lightMap": { "alias": "lightMap"; "required": false; }; "lightMapIntensity": { "alias": "lightMapIntensity"; "required": false; }; "aoMap": { "alias": "aoMap"; "required": false; }; "aoMapIntensity": { "alias": "aoMapIntensity"; "required": false; }; "emissive": { "alias": "emissive"; "required": false; }; "emissiveIntensity": { "alias": "emissiveIntensity"; "required": false; }; "emissiveMap": { "alias": "emissiveMap"; "required": false; }; "bumpMap": { "alias": "bumpMap"; "required": false; }; "bumpScale": { "alias": "bumpScale"; "required": false; }; "normalMap": { "alias": "normalMap"; "required": false; }; "normalMapType": { "alias": "normalMapType"; "required": false; }; "normalScale": { "alias": "normalScale"; "required": false; }; "displacementMap": { "alias": "displacementMap"; "required": false; }; "displacementScale": { "alias": "displacementScale"; "required": false; }; "displacementBias": { "alias": "displacementBias"; "required": false; }; "roughnessMap": { "alias": "roughnessMap"; "required": false; }; "metalnessMap": { "alias": "metalnessMap"; "required": false; }; "alphaMap": { "alias": "alphaMap"; "required": false; }; "envMap": { "alias": "envMap"; "required": false; }; "envMapRotation": { "alias": "envMapRotation"; "required": false; }; "envMapIntensity": { "alias": "envMapIntensity"; "required": false; }; "wireframe": { "alias": "wireframe"; "required": false; }; "wireframeLinewidth": { "alias": "wireframeLinewidth"; "required": false; }; "wireframeLinecap": { "alias": "wireframeLinecap"; "required": false; }; "wireframeLinejoin": { "alias": "wireframeLinejoin"; "required": false; }; "flatShading": { "alias": "flatShading"; "required": false; }; "fog": { "alias": "fog"; "required": false; }; }, {}, never, ["*"], false, never>;
}
