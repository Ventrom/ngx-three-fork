import { Type } from '@angular/core';
import { BufferGeometry, LineSegments, Material, Object3DEventMap } from 'three';
import { ThLine } from './ThLine';
import * as i0 from "@angular/core";
export declare class ThLineSegments<TGeometry extends BufferGeometry = BufferGeometry, TMaterial extends Material | Material[] = Material | Material[], TEventMap extends Object3DEventMap = Object3DEventMap, T extends LineSegments<TGeometry, TMaterial, TEventMap> = LineSegments<TGeometry, TMaterial, TEventMap>, TARGS = [geometry?: TGeometry, material?: TMaterial]> extends ThLine<TGeometry, TMaterial, TEventMap, T, TARGS> {
    getType(): Type<LineSegments<TGeometry, TMaterial, TEventMap>>;
    get isLineSegments(): true | undefined;
    get type(): (string | 'LineSegments') | undefined;
    static ɵfac: i0.ɵɵFactoryDeclaration<ThLineSegments<any, any, any, any, any>, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ThLineSegments<any, any, any, any, any>, "th-lineSegments", never, {}, {}, never, ["*"], false, never>;
}
