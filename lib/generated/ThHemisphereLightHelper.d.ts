import { Type } from '@angular/core';
import { ColorRepresentation, HemisphereLight, HemisphereLightHelper, Matrix4, MeshBasicMaterial, Object3DEventMap } from 'three';
import { ThObject3D } from './ThObject3D';
import * as i0 from "@angular/core";
export declare class ThHemisphereLightHelper<T extends HemisphereLightHelper = HemisphereLightHelper, TARGS = [light: HemisphereLight, size: number, color?: ColorRepresentation]> extends ThObject3D<Object3DEventMap, T, TARGS> {
    getType(): Type<HemisphereLightHelper>;
    get type(): (string | 'HemisphereLightHelper') | undefined;
    set light(value: HemisphereLight);
    get light(): HemisphereLight | undefined;
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
    set material(value: MeshBasicMaterial);
    get material(): MeshBasicMaterial | undefined;
    set color(value: ColorRepresentation | undefined);
    get color(): (ColorRepresentation | undefined) | undefined;
    static ɵfac: i0.ɵɵFactoryDeclaration<ThHemisphereLightHelper<any, any>, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ThHemisphereLightHelper<any, any>, "th-hemisphereLightHelper", never, { "light": { "alias": "light"; "required": false; }; "matrix": { "alias": "matrix"; "required": false; }; "matrixAutoUpdate": { "alias": "matrixAutoUpdate"; "required": false; }; "material": { "alias": "material"; "required": false; }; "color": { "alias": "color"; "required": false; }; }, {}, never, ["*"], false, never>;
}
