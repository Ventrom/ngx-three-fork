import { Type } from '@angular/core';
import { Color, ColorRepresentation, SpriteMaterial, SpriteMaterialParameters, Texture } from 'three';
import { ThMaterial } from './ThMaterial';
import * as i0 from "@angular/core";
export declare class ThSpriteMaterial<T extends SpriteMaterial = SpriteMaterial, TARGS = SpriteMaterialParameters> extends ThMaterial<T, TARGS> {
    getType(): Type<SpriteMaterial>;
    get isSpriteMaterial(): true | undefined;
    set type(value: string);
    get type(): string | undefined;
    set color(value: Color | [
        ...args: [color: ColorRepresentation] | [r: number, g: number, b: number]
    ]);
    get color(): Color | undefined;
    set map(value: Texture | null);
    get map(): (Texture | null) | undefined;
    set alphaMap(value: Texture | null);
    get alphaMap(): (Texture | null) | undefined;
    set rotation(value: number);
    get rotation(): number | undefined;
    set sizeAttenuation(value: boolean);
    get sizeAttenuation(): boolean | undefined;
    set transparent(value: boolean);
    get transparent(): boolean | undefined;
    set fog(value: boolean);
    get fog(): boolean | undefined;
    static ɵfac: i0.ɵɵFactoryDeclaration<ThSpriteMaterial<any, any>, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ThSpriteMaterial<any, any>, "th-spriteMaterial", never, { "type": { "alias": "type"; "required": false; }; "color": { "alias": "color"; "required": false; }; "map": { "alias": "map"; "required": false; }; "alphaMap": { "alias": "alphaMap"; "required": false; }; "rotation": { "alias": "rotation"; "required": false; }; "sizeAttenuation": { "alias": "sizeAttenuation"; "required": false; }; "transparent": { "alias": "transparent"; "required": false; }; "fog": { "alias": "fog"; "required": false; }; }, {}, never, ["*"], false, never>;
}
