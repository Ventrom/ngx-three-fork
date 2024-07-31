import { PipeTransform } from '@angular/core';
import { Fog } from 'three';
import * as i0 from "@angular/core";
export declare class FogPipe implements PipeTransform {
    transform(args: ConstructorParameters<typeof Fog>): Fog;
    static ɵfac: i0.ɵɵFactoryDeclaration<FogPipe, never>;
    static ɵpipe: i0.ɵɵPipeDeclaration<FogPipe, "fog", false>;
}
