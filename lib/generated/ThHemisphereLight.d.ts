import { Type } from '@angular/core';
import { Color, ColorRepresentation, HemisphereLight, Vector3 } from 'three';
import { ThLight } from './ThLight';
import * as i0 from "@angular/core";
export declare class ThHemisphereLight<T extends HemisphereLight = HemisphereLight, TARGS = [
    skyColor?: ColorRepresentation,
    groundColor?: ColorRepresentation,
    intensity?: number
]> extends ThLight<undefined, T, TARGS> {
    getType(): Type<HemisphereLight>;
    get isHemisphereLight(): true | undefined;
    get type(): (string | 'HemisphereLight') | undefined;
    set position(value: Vector3 | [x: number, y: number, z: number]);
    get position(): Vector3 | undefined;
    set color(value: Color | [
        ...args: [color: ColorRepresentation] | [r: number, g: number, b: number]
    ]);
    get color(): Color | undefined;
    set groundColor(value: Color | [
        ...args: [color: ColorRepresentation] | [r: number, g: number, b: number]
    ]);
    get groundColor(): Color | undefined;
    static ɵfac: i0.ɵɵFactoryDeclaration<ThHemisphereLight<any, any>, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ThHemisphereLight<any, any>, "th-hemisphereLight", never, { "position": { "alias": "position"; "required": false; }; "color": { "alias": "color"; "required": false; }; "groundColor": { "alias": "groundColor"; "required": false; }; }, {}, never, ["*"], false, never>;
}
