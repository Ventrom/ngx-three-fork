import { Type } from '@angular/core';
import { Color, ColorRepresentation, LineBasicMaterial, LineBasicMaterialParameters, Texture } from 'three';
import { ThMaterial } from './ThMaterial';
import * as i0 from "@angular/core";
export declare class ThLineBasicMaterial<T extends LineBasicMaterial = LineBasicMaterial, TARGS = LineBasicMaterialParameters> extends ThMaterial<T, TARGS> {
    getType(): Type<LineBasicMaterial>;
    get isLineBasicMaterial(): true | undefined;
    set type(value: string);
    get type(): string | undefined;
    set color(value: Color | [
        ...args: [color: ColorRepresentation] | [r: number, g: number, b: number]
    ]);
    get color(): Color | undefined;
    set fog(value: boolean);
    get fog(): boolean | undefined;
    set linewidth(value: number);
    get linewidth(): number | undefined;
    set linecap(value: string);
    get linecap(): string | undefined;
    set linejoin(value: string);
    get linejoin(): string | undefined;
    set map(value: Texture | null);
    get map(): (Texture | null) | undefined;
    static ɵfac: i0.ɵɵFactoryDeclaration<ThLineBasicMaterial<any, any>, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ThLineBasicMaterial<any, any>, "th-lineBasicMaterial", never, { "type": { "alias": "type"; "required": false; }; "color": { "alias": "color"; "required": false; }; "fog": { "alias": "fog"; "required": false; }; "linewidth": { "alias": "linewidth"; "required": false; }; "linecap": { "alias": "linecap"; "required": false; }; "linejoin": { "alias": "linejoin"; "required": false; }; "map": { "alias": "map"; "required": false; }; }, {}, never, ["*"], false, never>;
}
