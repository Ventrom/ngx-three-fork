import { PipeTransform } from '@angular/core';
import { ThWrapperBase } from '../ThWrapperBase';
import * as i0 from "@angular/core";
/**
 * create a clone of any "cloneable" three.js class (or from it's ngx-three warpper)
 */
export declare class ClonePipe implements PipeTransform {
    transform<T extends {
        clone(): T;
    }>(value?: ThWrapperBase<T, any> | T | null): T | undefined;
    static ɵfac: i0.ɵɵFactoryDeclaration<ClonePipe, never>;
    static ɵpipe: i0.ɵɵPipeDeclaration<ClonePipe, "clone", false>;
}
