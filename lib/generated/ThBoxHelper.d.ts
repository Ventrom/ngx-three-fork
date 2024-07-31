import { Type } from '@angular/core';
import { BoxHelper, BufferGeometry, ColorRepresentation, LineBasicMaterial, Object3D, Object3DEventMap } from 'three';
import { ThLineSegments } from './ThLineSegments';
import * as i0 from "@angular/core";
export declare class ThBoxHelper<T extends BoxHelper = BoxHelper, TARGS = [object: Object3D, color?: ColorRepresentation]> extends ThLineSegments<BufferGeometry, LineBasicMaterial, Object3DEventMap, T, TARGS> {
    getType(): Type<BoxHelper>;
    get type(): (string | 'BoxHelper') | undefined;
    static ɵfac: i0.ɵɵFactoryDeclaration<ThBoxHelper<any, any>, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ThBoxHelper<any, any>, "th-boxHelper", never, {}, {}, never, ["*"], false, never>;
}
