import { Type } from '@angular/core';
import { LOD, Object3D, Object3DEventMap } from 'three';
import { ThObject3D } from './ThObject3D';
import * as i0 from "@angular/core";
export declare class ThLOD<TEventMap extends Object3DEventMap = Object3DEventMap, T extends LOD<TEventMap> = LOD<TEventMap>, TARGS = []> extends ThObject3D<TEventMap, T, TARGS> {
    getType(): Type<LOD<TEventMap>>;
    get isLOD(): true | undefined;
    get type(): (string | 'LOD') | undefined;
    set levels(value: Array<{
        /** The Object3D to display at this level. */
        object: Object3D;
        /** The distance at which to display this level of detail. Expects a `Float`. */
        distance: number;
        /** Threshold used to avoid flickering at LOD boundaries, as a fraction of distance. Expects a `Float`. */
        hysteresis: number;
    }>);
    get levels(): Array<{
        /** The Object3D to display at this level. */
        object: Object3D;
        /** The distance at which to display this level of detail. Expects a `Float`. */
        distance: number;
        /** Threshold used to avoid flickering at LOD boundaries, as a fraction of distance. Expects a `Float`. */
        hysteresis: number;
    }> | undefined;
    set autoUpdate(value: boolean);
    get autoUpdate(): boolean | undefined;
    static ɵfac: i0.ɵɵFactoryDeclaration<ThLOD<any, any, any>, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ThLOD<any, any, any>, "th-lOD", never, { "levels": { "alias": "levels"; "required": false; }; "autoUpdate": { "alias": "autoUpdate"; "required": false; }; }, {}, never, ["*"], false, never>;
}
