import { Type } from '@angular/core';
import { Group, Object3DEventMap } from 'three';
import { ThObject3D } from './ThObject3D';
import * as i0 from "@angular/core";
export declare class ThGroup<TEventMap extends Object3DEventMap = Object3DEventMap, T extends Group<TEventMap> = Group<TEventMap>, TARGS = []> extends ThObject3D<TEventMap, T, TARGS> {
    getType(): Type<Group<TEventMap>>;
    get isGroup(): true | undefined;
    get type(): (string | 'Group') | undefined;
    static ɵfac: i0.ɵɵFactoryDeclaration<ThGroup<any, any, any>, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ThGroup<any, any, any>, "th-group", never, {}, {}, never, ["*"], false, never>;
}
