import { Type } from '@angular/core';
import { Color, ColorRepresentation, ShadowMaterial, ShadowMaterialParameters } from 'three';
import { ThMaterial } from './ThMaterial';
import * as i0 from "@angular/core";
export declare class ThShadowMaterial<T extends ShadowMaterial = ShadowMaterial, TARGS = ShadowMaterialParameters> extends ThMaterial<T, TARGS> {
    getType(): Type<ShadowMaterial>;
    get isShadowMaterial(): true | undefined;
    set type(value: string);
    get type(): string | undefined;
    set color(value: Color | [
        ...args: [color: ColorRepresentation] | [r: number, g: number, b: number]
    ]);
    get color(): Color | undefined;
    set transparent(value: boolean);
    get transparent(): boolean | undefined;
    set fog(value: boolean);
    get fog(): boolean | undefined;
    static ɵfac: i0.ɵɵFactoryDeclaration<ThShadowMaterial<any, any>, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ThShadowMaterial<any, any>, "th-shadowMaterial", never, { "type": { "alias": "type"; "required": false; }; "color": { "alias": "color"; "required": false; }; "transparent": { "alias": "transparent"; "required": false; }; "fog": { "alias": "fog"; "required": false; }; }, {}, never, ["*"], false, never>;
}
