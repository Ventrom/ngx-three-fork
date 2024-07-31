import { PipeTransform } from '@angular/core';
import { Color, ColorRepresentation } from 'three';
import * as i0 from "@angular/core";
/**
 * constructs a color of it's constructor parameters
 */
export declare class ColorPipe implements PipeTransform {
    transform(args: ColorRepresentation | [r: number, g: number, b: number]): Color;
    static ɵfac: i0.ɵɵFactoryDeclaration<ColorPipe, never>;
    static ɵpipe: i0.ɵɵPipeDeclaration<ColorPipe, "color", false>;
}
