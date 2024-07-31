import { PipeTransform } from '@angular/core';
import * as i0 from "@angular/core";
export declare class BindPipe implements PipeTransform {
    transform(methodToBind: (...anyArgs: unknown[]) => unknown, instance: unknown): (...anyArgs: unknown[]) => unknown;
    static ɵfac: i0.ɵɵFactoryDeclaration<BindPipe, never>;
    static ɵpipe: i0.ɵɵPipeDeclaration<BindPipe, "bind", false>;
}
