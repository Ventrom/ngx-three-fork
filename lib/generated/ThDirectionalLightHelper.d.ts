import { Type } from '@angular/core';
import { ColorRepresentation, DirectionalLight, DirectionalLightHelper, Line, Matrix4, Object3DEventMap } from 'three';
import { ThObject3D } from './ThObject3D';
import * as i0 from "@angular/core";
export declare class ThDirectionalLightHelper<T extends DirectionalLightHelper = DirectionalLightHelper, TARGS = [light: DirectionalLight, size?: number, color?: ColorRepresentation]> extends ThObject3D<Object3DEventMap, T, TARGS> {
    getType(): Type<DirectionalLightHelper>;
    get type(): (string | 'DirectionalLightHelper') | undefined;
    set lightPlane(value: Line);
    get lightPlane(): Line | undefined;
    set light(value: DirectionalLight);
    get light(): DirectionalLight | undefined;
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
    set matrixAutoUpdate(value: boolean);
    get matrixAutoUpdate(): boolean | undefined;
    set color(value: ColorRepresentation | undefined);
    get color(): (ColorRepresentation | undefined) | undefined;
    set targetLine(value: Line);
    get targetLine(): Line | undefined;
    static ɵfac: i0.ɵɵFactoryDeclaration<ThDirectionalLightHelper<any, any>, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ThDirectionalLightHelper<any, any>, "th-directionalLightHelper", never, { "lightPlane": { "alias": "lightPlane"; "required": false; }; "light": { "alias": "light"; "required": false; }; "matrix": { "alias": "matrix"; "required": false; }; "matrixAutoUpdate": { "alias": "matrixAutoUpdate"; "required": false; }; "color": { "alias": "color"; "required": false; }; "targetLine": { "alias": "targetLine"; "required": false; }; }, {}, never, ["*"], false, never>;
}
