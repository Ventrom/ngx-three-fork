import { Type } from '@angular/core';
import { LineDashedMaterial, LineDashedMaterialParameters } from 'three';
import { ThLineBasicMaterial } from './ThLineBasicMaterial';
import * as i0 from "@angular/core";
export declare class ThLineDashedMaterial<T extends LineDashedMaterial = LineDashedMaterial, TARGS = LineDashedMaterialParameters> extends ThLineBasicMaterial<T, TARGS> {
    getType(): Type<LineDashedMaterial>;
    get isLineDashedMaterial(): true | undefined;
    set type(value: string);
    get type(): string | undefined;
    set scale(value: number);
    get scale(): number | undefined;
    set dashSize(value: number);
    get dashSize(): number | undefined;
    set gapSize(value: number);
    get gapSize(): number | undefined;
    static ɵfac: i0.ɵɵFactoryDeclaration<ThLineDashedMaterial<any, any>, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ThLineDashedMaterial<any, any>, "th-lineDashedMaterial", never, { "type": { "alias": "type"; "required": false; }; "scale": { "alias": "scale"; "required": false; }; "dashSize": { "alias": "dashSize"; "required": false; }; "gapSize": { "alias": "gapSize"; "required": false; }; }, {}, never, ["*"], false, never>;
}
