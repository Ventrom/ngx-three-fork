import { Type } from '@angular/core';
import { ExtrudeGeometry, ExtrudeGeometryOptions, NormalBufferAttributes, Shape } from 'three';
import { ThBufferGeometry } from './ThBufferGeometry';
import * as i0 from "@angular/core";
export declare class ThExtrudeGeometry<T extends ExtrudeGeometry = ExtrudeGeometry, TARGS = [shapes?: Shape | Shape[], options?: ExtrudeGeometryOptions]> extends ThBufferGeometry<NormalBufferAttributes, T, TARGS> {
    getType(): Type<ExtrudeGeometry>;
    get type(): (string | 'ExtrudeGeometry') | undefined;
    get parameters(): {
        readonly shapes: Shape | Shape[];
        readonly options: ExtrudeGeometryOptions;
    } | undefined;
    static ɵfac: i0.ɵɵFactoryDeclaration<ThExtrudeGeometry<any, any>, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ThExtrudeGeometry<any, any>, "th-extrudeGeometry", never, {}, {}, never, ["*"], false, never>;
}
