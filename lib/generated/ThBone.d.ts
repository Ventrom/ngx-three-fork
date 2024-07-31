import { Type } from '@angular/core';
import { Bone, Object3DEventMap } from 'three';
import { ThObject3D } from './ThObject3D';
import * as i0 from "@angular/core";
export declare class ThBone<TEventMap extends Object3DEventMap = Object3DEventMap, T extends Bone<TEventMap> = Bone<TEventMap>, TARGS = []> extends ThObject3D<TEventMap, T, TARGS> {
    getType(): Type<Bone<TEventMap>>;
    get isBone(): true | undefined;
    get type(): (string | 'Bone') | undefined;
    static ɵfac: i0.ɵɵFactoryDeclaration<ThBone<any, any, any>, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ThBone<any, any, any>, "th-bone", never, {}, {}, never, ["*"], false, never>;
}
