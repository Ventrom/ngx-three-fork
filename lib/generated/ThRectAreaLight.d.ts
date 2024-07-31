import { Type } from '@angular/core';
import { ColorRepresentation, RectAreaLight } from 'three';
import { ThLight } from './ThLight';
import * as i0 from "@angular/core";
export declare class ThRectAreaLight<T extends RectAreaLight = RectAreaLight, TARGS = [
    color?: ColorRepresentation,
    intensity?: number,
    width?: number,
    height?: number
]> extends ThLight<undefined, T, TARGS> {
    getType(): Type<RectAreaLight>;
    get isRectAreaLight(): true | undefined;
    get type(): (string | 'RectAreaLight') | undefined;
    set width(value: number);
    get width(): number | undefined;
    set height(value: number);
    get height(): number | undefined;
    set intensity(value: number);
    get intensity(): number | undefined;
    set power(value: number);
    get power(): number | undefined;
    static ɵfac: i0.ɵɵFactoryDeclaration<ThRectAreaLight<any, any>, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ThRectAreaLight<any, any>, "th-rectAreaLight", never, { "width": { "alias": "width"; "required": false; }; "height": { "alias": "height"; "required": false; }; "intensity": { "alias": "intensity"; "required": false; }; "power": { "alias": "power"; "required": false; }; }, {}, never, ["*"], false, never>;
}
