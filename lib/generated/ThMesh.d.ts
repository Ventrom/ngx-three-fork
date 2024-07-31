import { Type } from '@angular/core';
import { BufferGeometry, Material, Mesh, Object3DEventMap } from 'three';
import { ThObject3D } from './ThObject3D';
import * as i0 from "@angular/core";
export declare class ThMesh<TGeometry extends BufferGeometry = BufferGeometry, TMaterial extends Material | Material[] = Material | Material[], TEventMap extends Object3DEventMap = Object3DEventMap, T extends Mesh<TGeometry, TMaterial, TEventMap> = Mesh<TGeometry, TMaterial, TEventMap>, TARGS = [geometry?: TGeometry, material?: TMaterial]> extends ThObject3D<TEventMap, T, TARGS> {
    getType(): Type<Mesh<TGeometry, TMaterial, TEventMap>>;
    get isMesh(): true | undefined;
    get type(): (string | 'Mesh') | undefined;
    set geometry(value: TGeometry);
    get geometry(): TGeometry | undefined;
    set material(value: TMaterial);
    get material(): TMaterial | undefined;
    set morphTargetInfluences(value: number[] | undefined);
    get morphTargetInfluences(): (number[] | undefined) | undefined;
    set morphTargetDictionary(value: {
        [key: string]: number;
    } | undefined);
    get morphTargetDictionary(): ({
        [key: string]: number;
    } | undefined) | undefined;
    static ɵfac: i0.ɵɵFactoryDeclaration<ThMesh<any, any, any, any, any>, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ThMesh<any, any, any, any, any>, "th-mesh", never, { "geometry": { "alias": "geometry"; "required": false; }; "material": { "alias": "material"; "required": false; }; "morphTargetInfluences": { "alias": "morphTargetInfluences"; "required": false; }; "morphTargetDictionary": { "alias": "morphTargetDictionary"; "required": false; }; }, {}, never, ["*"], false, never>;
}
