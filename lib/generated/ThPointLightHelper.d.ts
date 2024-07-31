import { Type } from '@angular/core';
import { ColorRepresentation, Matrix4, Object3DEventMap, PointLight, PointLightHelper } from 'three';
import { ThObject3D } from './ThObject3D';
import * as i0 from "@angular/core";
export declare class ThPointLightHelper<T extends PointLightHelper = PointLightHelper, TARGS = [light: PointLight, sphereSize?: number, color?: ColorRepresentation]> extends ThObject3D<Object3DEventMap, T, TARGS> {
    getType(): Type<PointLightHelper>;
    get type(): (string | 'PointLightHelper') | undefined;
    set light(value: PointLight);
    get light(): PointLight | undefined;
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
    static ɵfac: i0.ɵɵFactoryDeclaration<ThPointLightHelper<any, any>, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ThPointLightHelper<any, any>, "th-pointLightHelper", never, { "light": { "alias": "light"; "required": false; }; "matrix": { "alias": "matrix"; "required": false; }; "color": { "alias": "color"; "required": false; }; "matrixAutoUpdate": { "alias": "matrixAutoUpdate"; "required": false; }; }, {}, never, ["*"], false, never>;
}
