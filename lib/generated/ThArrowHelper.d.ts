import { Type } from '@angular/core';
import { ArrowHelper, ColorRepresentation, Line, Mesh, Object3DEventMap, Vector3 } from 'three';
import { ThObject3D } from './ThObject3D';
import * as i0 from "@angular/core";
export declare class ThArrowHelper<T extends ArrowHelper = ArrowHelper, TARGS = [
    dir?: Vector3,
    origin?: Vector3,
    length?: number,
    color?: ColorRepresentation,
    headLength?: number,
    headWidth?: number
]> extends ThObject3D<Object3DEventMap, T, TARGS> {
    getType(): Type<ArrowHelper>;
    get type(): (string | 'ArrowHelper') | undefined;
    set line(value: Line);
    get line(): Line | undefined;
    set cone(value: Mesh);
    get cone(): Mesh | undefined;
    static ɵfac: i0.ɵɵFactoryDeclaration<ThArrowHelper<any, any>, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ThArrowHelper<any, any>, "th-arrowHelper", never, { "line": { "alias": "line"; "required": false; }; "cone": { "alias": "cone"; "required": false; }; }, {}, never, ["*"], false, never>;
}
