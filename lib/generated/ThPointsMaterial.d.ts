import { Type } from '@angular/core';
import { Color, ColorRepresentation, PointsMaterial, PointsMaterialParameters, Texture } from 'three';
import { ThMaterial } from './ThMaterial';
import * as i0 from "@angular/core";
export declare class ThPointsMaterial<T extends PointsMaterial = PointsMaterial, TARGS = PointsMaterialParameters> extends ThMaterial<T, TARGS> {
    getType(): Type<PointsMaterial>;
    get isPointsMaterial(): true | undefined;
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
    set size(value: number);
    get size(): number | undefined;
    set sizeAttenuation(value: boolean);
    get sizeAttenuation(): boolean | undefined;
    set fog(value: boolean);
    get fog(): boolean | undefined;
    static ɵfac: i0.ɵɵFactoryDeclaration<ThPointsMaterial<any, any>, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ThPointsMaterial<any, any>, "th-pointsMaterial", never, { "type": { "alias": "type"; "required": false; }; "color": { "alias": "color"; "required": false; }; "map": { "alias": "map"; "required": false; }; "alphaMap": { "alias": "alphaMap"; "required": false; }; "size": { "alias": "size"; "required": false; }; "sizeAttenuation": { "alias": "sizeAttenuation"; "required": false; }; "fog": { "alias": "fog"; "required": false; }; }, {}, never, ["*"], false, never>;
}
