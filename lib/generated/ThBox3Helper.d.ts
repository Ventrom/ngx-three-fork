import { Type } from '@angular/core';
import { Box3, Box3Helper, BufferGeometry, ColorRepresentation, Material, Object3DEventMap, Vector3 } from 'three';
import { ThLineSegments } from './ThLineSegments';
import * as i0 from "@angular/core";
export declare class ThBox3Helper<T extends Box3Helper = Box3Helper, TARGS = [box: Box3, color?: ColorRepresentation]> extends ThLineSegments<BufferGeometry, Material | Material[], Object3DEventMap, T, TARGS> {
    getType(): Type<Box3Helper>;
    get type(): (string | 'Box3Helper') | undefined;
    set box(value: Box3 | [min: Vector3, max: Vector3]);
    get box(): Box3 | undefined;
    static ɵfac: i0.ɵɵFactoryDeclaration<ThBox3Helper<any, any>, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ThBox3Helper<any, any>, "th-box3Helper", never, { "box": { "alias": "box"; "required": false; }; }, {}, never, ["*"], false, never>;
}
