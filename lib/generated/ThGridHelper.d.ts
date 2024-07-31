import { Type } from '@angular/core';
import { BufferGeometry, ColorRepresentation, GridHelper, LineBasicMaterial, Object3DEventMap } from 'three';
import { ThLineSegments } from './ThLineSegments';
import * as i0 from "@angular/core";
export declare class ThGridHelper<T extends GridHelper = GridHelper, TARGS = [
    size?: number,
    divisions?: number,
    color1?: ColorRepresentation,
    color2?: ColorRepresentation
]> extends ThLineSegments<BufferGeometry, LineBasicMaterial, Object3DEventMap, T, TARGS> {
    getType(): Type<GridHelper>;
    get type(): (string | 'GridHelper') | undefined;
    static ɵfac: i0.ɵɵFactoryDeclaration<ThGridHelper<any, any>, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ThGridHelper<any, any>, "th-gridHelper", never, {}, {}, never, ["*"], false, never>;
}
