import { Type } from '@angular/core';
import { Color, ColorRepresentation, CubeTexture, Euler, EulerOrder, FogBase, Material, Object3DEventMap, Scene, Texture } from 'three';
import { ThObject3D } from './ThObject3D';
import * as i0 from "@angular/core";
export declare class ThScene<T extends Scene = Scene, TARGS = []> extends ThObject3D<Object3DEventMap, T, TARGS> {
    getType(): Type<Scene>;
    get isScene(): true | undefined;
    set type(value: 'Scene');
    get type(): 'Scene' | undefined;
    set fog(value: FogBase | null);
    get fog(): (FogBase | null) | undefined;
    set backgroundBlurriness(value: number);
    get backgroundBlurriness(): number | undefined;
    set backgroundIntensity(value: number);
    get backgroundIntensity(): number | undefined;
    set overrideMaterial(value: Material | null);
    get overrideMaterial(): (Material | null) | undefined;
    set background(value: Color | Texture | CubeTexture | null | [
        ...args: [color: ColorRepresentation] | [r: number, g: number, b: number]
    ]);
    get background(): (Color | Texture | CubeTexture | null) | undefined;
    set backgroundRotation(value: Euler | [x: number, y: number, z: number, order?: EulerOrder]);
    get backgroundRotation(): Euler | undefined;
    set environment(value: Texture | null);
    get environment(): (Texture | null) | undefined;
    set environmentIntensity(value: number);
    get environmentIntensity(): number | undefined;
    set environmentRotation(value: Euler | [x: number, y: number, z: number, order?: EulerOrder]);
    get environmentRotation(): Euler | undefined;
    static ɵfac: i0.ɵɵFactoryDeclaration<ThScene<any, any>, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ThScene<any, any>, "th-scene", never, { "type": { "alias": "type"; "required": false; }; "fog": { "alias": "fog"; "required": false; }; "backgroundBlurriness": { "alias": "backgroundBlurriness"; "required": false; }; "backgroundIntensity": { "alias": "backgroundIntensity"; "required": false; }; "overrideMaterial": { "alias": "overrideMaterial"; "required": false; }; "background": { "alias": "background"; "required": false; }; "backgroundRotation": { "alias": "backgroundRotation"; "required": false; }; "environment": { "alias": "environment"; "required": false; }; "environmentIntensity": { "alias": "environmentIntensity"; "required": false; }; "environmentRotation": { "alias": "environmentRotation"; "required": false; }; }, {}, never, ["*"], false, never>;
}
