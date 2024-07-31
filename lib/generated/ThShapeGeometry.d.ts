import { Type } from '@angular/core';
import { NormalBufferAttributes, Shape, ShapeGeometry } from 'three';
import { ThBufferGeometry } from './ThBufferGeometry';
import * as i0 from "@angular/core";
export declare class ThShapeGeometry<T extends ShapeGeometry = ShapeGeometry, TARGS = [shapes?: Shape | Shape[], curveSegments?: number]> extends ThBufferGeometry<NormalBufferAttributes, T, TARGS> {
    getType(): Type<ShapeGeometry>;
    get type(): (string | 'ShapeGeometry') | undefined;
    get parameters(): {
        readonly shapes: Shape | Shape[];
        readonly curveSegments: number;
    } | undefined;
    static ɵfac: i0.ɵɵFactoryDeclaration<ThShapeGeometry<any, any>, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ThShapeGeometry<any, any>, "th-shapeGeometry", never, {}, {}, never, ["*"], false, never>;
}
