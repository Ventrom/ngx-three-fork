import { PipeTransform } from '@angular/core';
import { Plane } from 'three';
import * as i0 from "@angular/core";
/**
 * creates a plane from a normal vector3 and a constant:
 * https://threejs.org/docs/#api/en/math/Plane
 */
export declare class PlanePipe implements PipeTransform {
    transform(normal: [number, number?, number?], constant?: number): Plane;
    static ɵfac: i0.ɵɵFactoryDeclaration<PlanePipe, never>;
    static ɵpipe: i0.ɵɵPipeDeclaration<PlanePipe, "plane", false>;
}
