import { Type } from '@angular/core';
import { Shape } from 'three';
import { TextGeometry, TextGeometryParameters } from 'three/examples/jsm/geometries/TextGeometry.js';
import { ThExtrudeGeometry } from './ThExtrudeGeometry';
import * as i0 from "@angular/core";
export declare class ThTextGeometry<T extends TextGeometry = TextGeometry, TARGS = [text: string, parameters?: TextGeometryParameters]> extends ThExtrudeGeometry<T, TARGS> {
    getType(): Type<TextGeometry>;
    get type(): (string | 'TextGeometry') | undefined;
    get parameters(): {
        readonly shapes: Shape | Shape[];
        readonly options: TextGeometryParameters;
    } | undefined;
    static ɵfac: i0.ɵɵFactoryDeclaration<ThTextGeometry<any, any>, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ThTextGeometry<any, any>, "th-textGeometry", never, {}, {}, never, ["*"], false, never>;
}
