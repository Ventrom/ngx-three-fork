import { PipeTransform } from '@angular/core';
import { Vector2, Vector3, Vector4 } from 'three';
import * as i0 from "@angular/core";
/**
 * transform arrays to vectors
 */
export declare class Vector2Pipe implements PipeTransform {
    transform(args: ConstructorParameters<typeof Vector2>): Vector2;
    static ɵfac: i0.ɵɵFactoryDeclaration<Vector2Pipe, never>;
    static ɵpipe: i0.ɵɵPipeDeclaration<Vector2Pipe, "vector2", false>;
}
export declare class Vector3Pipe implements PipeTransform {
    transform(args: ConstructorParameters<typeof Vector3>): Vector3;
    static ɵfac: i0.ɵɵFactoryDeclaration<Vector3Pipe, never>;
    static ɵpipe: i0.ɵɵPipeDeclaration<Vector3Pipe, "vector3", false>;
}
export declare class Vector4Pipe implements PipeTransform {
    transform(args: ConstructorParameters<typeof Vector4>): Vector4;
    static ɵfac: i0.ɵɵFactoryDeclaration<Vector4Pipe, never>;
    static ɵpipe: i0.ɵɵPipeDeclaration<Vector4Pipe, "vector4", false>;
}
