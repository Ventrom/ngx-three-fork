import { Type } from '@angular/core';
import { AxesHelper, BufferGeometry, Material, Object3DEventMap } from 'three';
import { ThLineSegments } from './ThLineSegments';
import * as i0 from "@angular/core";
export declare class ThAxesHelper<T extends AxesHelper = AxesHelper, TARGS = number> extends ThLineSegments<BufferGeometry, Material | Material[], Object3DEventMap, T, TARGS> {
    getType(): Type<AxesHelper>;
    get type(): (string | 'AxesHelper') | undefined;
    static ɵfac: i0.ɵɵFactoryDeclaration<ThAxesHelper<any, any>, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ThAxesHelper<any, any>, "th-axesHelper", never, {}, {}, never, ["*"], false, never>;
}
