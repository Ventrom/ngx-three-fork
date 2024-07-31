import { Type } from '@angular/core';
import { BufferGeometry, ColorRepresentation, Material, Object3DEventMap, PolarGridHelper } from 'three';
import { ThLineSegments } from './ThLineSegments';
import * as i0 from "@angular/core";
export declare class ThPolarGridHelper<T extends PolarGridHelper = PolarGridHelper, TARGS = [
    radius?: number,
    radials?: number,
    circles?: number,
    divisions?: number,
    color1?: ColorRepresentation,
    color2?: ColorRepresentation
]> extends ThLineSegments<BufferGeometry, Material | Material[], Object3DEventMap, T, TARGS> {
    getType(): Type<PolarGridHelper>;
    get type(): (string | 'PolarGridHelper') | undefined;
    static ɵfac: i0.ɵɵFactoryDeclaration<ThPolarGridHelper<any, any>, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ThPolarGridHelper<any, any>, "th-polarGridHelper", never, {}, {}, never, ["*"], false, never>;
}
