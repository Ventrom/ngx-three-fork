import { NgZone, PipeTransform } from '@angular/core';
import { EXRLoader } from 'three/examples/jsm/loaders/EXRLoader.js';
import { ThDataTexture } from '../../generated/ThDataTexture';
import { ThCallbackLoaderBaseDirective, ThCallbackLoaderBasePipe, ThCallbackLoaderService } from '../ThCallbackLoaderBase';
import { DataTexture } from 'three';
import * as i0 from "@angular/core";
export declare class EXRLoaderService extends ThCallbackLoaderService<DataTexture> {
    clazz: typeof EXRLoader;
    static ɵfac: i0.ɵɵFactoryDeclaration<EXRLoaderService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<EXRLoaderService>;
}
export declare class ThEXRLoaderPipe extends ThCallbackLoaderBasePipe<DataTexture> implements PipeTransform {
    protected service: EXRLoaderService;
    constructor(service: EXRLoaderService);
    static ɵfac: i0.ɵɵFactoryDeclaration<ThEXRLoaderPipe, never>;
    static ɵpipe: i0.ɵɵPipeDeclaration<ThEXRLoaderPipe, "loadEXRTexture", false>;
}
export declare class ThEXRLoaderDirective extends ThCallbackLoaderBaseDirective<DataTexture> {
    protected host: ThDataTexture;
    protected zone: NgZone;
    protected service: EXRLoaderService;
    constructor(host: ThDataTexture, zone: NgZone, service: EXRLoaderService);
    static ɵfac: i0.ɵɵFactoryDeclaration<ThEXRLoaderDirective, [{ host: true; }, null, null]>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<ThEXRLoaderDirective, "[loadEXRTexture]", never, {}, {}, never, never, false, never>;
}
