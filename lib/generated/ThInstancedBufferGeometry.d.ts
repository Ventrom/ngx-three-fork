import { Type } from '@angular/core';
import { InstancedBufferGeometry, NormalBufferAttributes } from 'three';
import { ThBufferGeometry } from './ThBufferGeometry';
import * as i0 from "@angular/core";
export declare class ThInstancedBufferGeometry<T extends InstancedBufferGeometry = InstancedBufferGeometry, TARGS = []> extends ThBufferGeometry<NormalBufferAttributes, T, TARGS> {
    getType(): Type<InstancedBufferGeometry>;
    set type(value: string);
    get type(): string | undefined;
    get isInstancedBufferGeometry(): true | undefined;
    set instanceCount(value: number);
    get instanceCount(): number | undefined;
    static ɵfac: i0.ɵɵFactoryDeclaration<ThInstancedBufferGeometry<any, any>, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ThInstancedBufferGeometry<any, any>, "th-instancedBufferGeometry", never, { "type": { "alias": "type"; "required": false; }; "instanceCount": { "alias": "instanceCount"; "required": false; }; }, {}, never, ["*"], false, never>;
}
