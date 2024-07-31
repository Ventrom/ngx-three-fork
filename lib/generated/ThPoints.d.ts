import { Type } from '@angular/core';
import { BufferGeometry, Material, NormalOrGLBufferAttributes, Object3DEventMap, Points } from 'three';
import { ThObject3D } from './ThObject3D';
import * as i0 from "@angular/core";
export declare class ThPoints<TGeometry extends BufferGeometry<NormalOrGLBufferAttributes> = BufferGeometry, TMaterial extends Material | Material[] = Material | Material[], TEventMap extends Object3DEventMap = Object3DEventMap, T extends Points<TGeometry, TMaterial, TEventMap> = Points<TGeometry, TMaterial, TEventMap>, TARGS = [geometry?: TGeometry, material?: TMaterial]> extends ThObject3D<TEventMap, T, TARGS> {
    getType(): Type<Points<TGeometry, TMaterial, TEventMap>>;
    get isPoints(): true | undefined;
    get type(): (string | 'Points') | undefined;
    set morphTargetInfluences(value: number[] | undefined);
    get morphTargetInfluences(): (number[] | undefined) | undefined;
    set morphTargetDictionary(value: {
        [key: string]: number;
    } | undefined);
    get morphTargetDictionary(): ({
        [key: string]: number;
    } | undefined) | undefined;
    set geometry(value: TGeometry);
    get geometry(): TGeometry | undefined;
    set material(value: TMaterial);
    get material(): TMaterial | undefined;
    static ɵfac: i0.ɵɵFactoryDeclaration<ThPoints<any, any, any, any, any>, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ThPoints<any, any, any, any, any>, "th-points", never, { "morphTargetInfluences": { "alias": "morphTargetInfluences"; "required": false; }; "morphTargetDictionary": { "alias": "morphTargetDictionary"; "required": false; }; "geometry": { "alias": "geometry"; "required": false; }; "material": { "alias": "material"; "required": false; }; }, {}, never, ["*"], false, never>;
}
