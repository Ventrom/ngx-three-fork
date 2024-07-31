import { Type } from '@angular/core';
import { NormalBufferAttributes, Vector3 } from 'three';
import { ParametricGeometry } from 'three/examples/jsm/geometries/ParametricGeometry.js';
import { ThBufferGeometry } from './ThBufferGeometry';
import * as i0 from "@angular/core";
export declare class ThParametricGeometry<T extends ParametricGeometry = ParametricGeometry, TARGS = [
    func?: (u: number, v: number, target: Vector3) => void,
    slices?: number,
    stacks?: number
]> extends ThBufferGeometry<NormalBufferAttributes, T, TARGS> {
    getType(): Type<ParametricGeometry>;
    set type(value: string);
    get type(): string | undefined;
    set parameters(value: {
        func: (u: number, v: number, dest: Vector3) => void;
        slices: number;
        stacks: number;
    });
    get parameters(): {
        func: (u: number, v: number, dest: Vector3) => void;
        slices: number;
        stacks: number;
    } | undefined;
    static ɵfac: i0.ɵɵFactoryDeclaration<ThParametricGeometry<any, any>, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ThParametricGeometry<any, any>, "th-parametricGeometry", never, { "type": { "alias": "type"; "required": false; }; "parameters": { "alias": "parameters"; "required": false; }; }, {}, never, ["*"], false, never>;
}
