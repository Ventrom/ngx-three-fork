import { Type } from '@angular/core';
import { ColorRepresentation, Light, LineSegments, Matrix4, Object3DEventMap, SpotLightHelper } from 'three';
import { ThObject3D } from './ThObject3D';
import * as i0 from "@angular/core";
export declare class ThSpotLightHelper<T extends SpotLightHelper = SpotLightHelper, TARGS = [light: Light, color?: ColorRepresentation]> extends ThObject3D<Object3DEventMap, T, TARGS> {
    getType(): Type<SpotLightHelper>;
    get type(): (string | 'SpotLightHelper') | undefined;
    set cone(value: LineSegments);
    get cone(): LineSegments | undefined;
    set light(value: Light);
    get light(): Light | undefined;
    set matrix(value: Matrix4 | [
        n11: number,
        n12: number,
        n13: number,
        n14: number,
        n21: number,
        n22: number,
        n23: number,
        n24: number,
        n31: number,
        n32: number,
        n33: number,
        n34: number,
        n41: number,
        n42: number,
        n43: number,
        n44: number
    ]);
    get matrix(): Matrix4 | undefined;
    set color(value: ColorRepresentation | undefined);
    get color(): (ColorRepresentation | undefined) | undefined;
    set matrixAutoUpdate(value: boolean);
    get matrixAutoUpdate(): boolean | undefined;
    static ɵfac: i0.ɵɵFactoryDeclaration<ThSpotLightHelper<any, any>, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ThSpotLightHelper<any, any>, "th-spotLightHelper", never, { "cone": { "alias": "cone"; "required": false; }; "light": { "alias": "light"; "required": false; }; "matrix": { "alias": "matrix"; "required": false; }; "color": { "alias": "color"; "required": false; }; "matrixAutoUpdate": { "alias": "matrixAutoUpdate"; "required": false; }; }, {}, never, ["*"], false, never>;
}
