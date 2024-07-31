import { Type } from '@angular/core';
import { Color, ColorRepresentation, MeshPhysicalMaterial, MeshPhysicalMaterialParameters, Texture, Vector2 } from 'three';
import { ThMeshStandardMaterial } from './ThMeshStandardMaterial';
import * as i0 from "@angular/core";
export declare class ThMeshPhysicalMaterial<T extends MeshPhysicalMaterial = MeshPhysicalMaterial, TARGS = MeshPhysicalMaterialParameters> extends ThMeshStandardMaterial<T, TARGS> {
    getType(): Type<MeshPhysicalMaterial>;
    get isMeshPhysicalMaterial(): true | undefined;
    set defines(value: {
        [key: string]: any;
    });
    get defines(): {
        [key: string]: any;
    } | undefined;
    set type(value: string);
    get type(): string | undefined;
    set anisotropyRotation(value: number);
    get anisotropyRotation(): number | undefined;
    set anisotropyMap(value: Texture | null);
    get anisotropyMap(): (Texture | null) | undefined;
    set clearcoatMap(value: Texture | null);
    get clearcoatMap(): (Texture | null) | undefined;
    set clearcoatRoughness(value: number);
    get clearcoatRoughness(): number | undefined;
    set clearcoatRoughnessMap(value: Texture | null);
    get clearcoatRoughnessMap(): (Texture | null) | undefined;
    set clearcoatNormalScale(value: Vector2 | [x: number, y: number]);
    get clearcoatNormalScale(): Vector2 | undefined;
    set clearcoatNormalMap(value: Texture | null);
    get clearcoatNormalMap(): (Texture | null) | undefined;
    set ior(value: number);
    get ior(): number | undefined;
    get reflectivity(): number | undefined;
    set reflectivity(value: number);
    set iridescenceMap(value: Texture | null);
    get iridescenceMap(): (Texture | null) | undefined;
    set iridescenceIOR(value: number);
    get iridescenceIOR(): number | undefined;
    set iridescenceThicknessRange(value: [number, number]);
    get iridescenceThicknessRange(): [number, number] | undefined;
    set iridescenceThicknessMap(value: Texture | null);
    get iridescenceThicknessMap(): (Texture | null) | undefined;
    set sheenColor(value: Color | [
        ...args: [color: ColorRepresentation] | [r: number, g: number, b: number]
    ]);
    get sheenColor(): Color | undefined;
    set sheenColorMap(value: Texture | null);
    get sheenColorMap(): (Texture | null) | undefined;
    set sheenRoughness(value: number);
    get sheenRoughness(): number | undefined;
    set sheenRoughnessMap(value: Texture | null);
    get sheenRoughnessMap(): (Texture | null) | undefined;
    set transmissionMap(value: Texture | null);
    get transmissionMap(): (Texture | null) | undefined;
    set thickness(value: number);
    get thickness(): number | undefined;
    set thicknessMap(value: Texture | null);
    get thicknessMap(): (Texture | null) | undefined;
    set attenuationDistance(value: number);
    get attenuationDistance(): number | undefined;
    set attenuationColor(value: Color | [
        ...args: [color: ColorRepresentation] | [r: number, g: number, b: number]
    ]);
    get attenuationColor(): Color | undefined;
    set specularIntensity(value: number);
    get specularIntensity(): number | undefined;
    set specularIntensityMap(value: Texture | null);
    get specularIntensityMap(): (Texture | null) | undefined;
    set specularColor(value: Color | [
        ...args: [color: ColorRepresentation] | [r: number, g: number, b: number]
    ]);
    get specularColor(): Color | undefined;
    set specularColorMap(value: Texture | null);
    get specularColorMap(): (Texture | null) | undefined;
    get anisotropy(): number | undefined;
    set anisotropy(value: number);
    get clearcoat(): number | undefined;
    set clearcoat(value: number);
    get iridescence(): number | undefined;
    set iridescence(value: number);
    get dispersion(): number | undefined;
    set dispersion(value: number);
    get sheen(): number | undefined;
    set sheen(value: number);
    get transmission(): number | undefined;
    set transmission(value: number);
    static ɵfac: i0.ɵɵFactoryDeclaration<ThMeshPhysicalMaterial<any, any>, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ThMeshPhysicalMaterial<any, any>, "th-meshPhysicalMaterial", never, { "defines": { "alias": "defines"; "required": false; }; "type": { "alias": "type"; "required": false; }; "anisotropyRotation": { "alias": "anisotropyRotation"; "required": false; }; "anisotropyMap": { "alias": "anisotropyMap"; "required": false; }; "clearcoatMap": { "alias": "clearcoatMap"; "required": false; }; "clearcoatRoughness": { "alias": "clearcoatRoughness"; "required": false; }; "clearcoatRoughnessMap": { "alias": "clearcoatRoughnessMap"; "required": false; }; "clearcoatNormalScale": { "alias": "clearcoatNormalScale"; "required": false; }; "clearcoatNormalMap": { "alias": "clearcoatNormalMap"; "required": false; }; "ior": { "alias": "ior"; "required": false; }; "reflectivity": { "alias": "reflectivity"; "required": false; }; "iridescenceMap": { "alias": "iridescenceMap"; "required": false; }; "iridescenceIOR": { "alias": "iridescenceIOR"; "required": false; }; "iridescenceThicknessRange": { "alias": "iridescenceThicknessRange"; "required": false; }; "iridescenceThicknessMap": { "alias": "iridescenceThicknessMap"; "required": false; }; "sheenColor": { "alias": "sheenColor"; "required": false; }; "sheenColorMap": { "alias": "sheenColorMap"; "required": false; }; "sheenRoughness": { "alias": "sheenRoughness"; "required": false; }; "sheenRoughnessMap": { "alias": "sheenRoughnessMap"; "required": false; }; "transmissionMap": { "alias": "transmissionMap"; "required": false; }; "thickness": { "alias": "thickness"; "required": false; }; "thicknessMap": { "alias": "thicknessMap"; "required": false; }; "attenuationDistance": { "alias": "attenuationDistance"; "required": false; }; "attenuationColor": { "alias": "attenuationColor"; "required": false; }; "specularIntensity": { "alias": "specularIntensity"; "required": false; }; "specularIntensityMap": { "alias": "specularIntensityMap"; "required": false; }; "specularColor": { "alias": "specularColor"; "required": false; }; "specularColorMap": { "alias": "specularColorMap"; "required": false; }; "anisotropy": { "alias": "anisotropy"; "required": false; }; "clearcoat": { "alias": "clearcoat"; "required": false; }; "iridescence": { "alias": "iridescence"; "required": false; }; "dispersion": { "alias": "dispersion"; "required": false; }; "sheen": { "alias": "sheen"; "required": false; }; "transmission": { "alias": "transmission"; "required": false; }; }, {}, never, ["*"], false, never>;
}
