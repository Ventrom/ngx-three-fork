import { NgZone, PipeTransform } from '@angular/core';
import { RGBMLoader } from 'three/examples/jsm/loaders/RGBMLoader.js';
import { ThDataTexture } from '../../generated/ThDataTexture';
import { ThCallbackLoaderService, ThCallbackLoaderBaseDirective, ThCallbackLoaderBasePipe } from '../ThCallbackLoaderBase';
import { DataTexture } from 'three';
import * as i0 from "@angular/core";
export declare class RGBMLoaderService extends ThCallbackLoaderService<DataTexture> {
    clazz: typeof RGBMLoader;
    static ɵfac: i0.ɵɵFactoryDeclaration<RGBMLoaderService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<RGBMLoaderService>;
}
export declare class ThRGBMLoaderPipe extends ThCallbackLoaderBasePipe<DataTexture> implements PipeTransform {
    protected service: RGBMLoaderService;
    constructor(service: RGBMLoaderService);
    static ɵfac: i0.ɵɵFactoryDeclaration<ThRGBMLoaderPipe, never>;
    static ɵpipe: i0.ɵɵPipeDeclaration<ThRGBMLoaderPipe, "loadRGBMTexture", false>;
}
export declare class ThRGBMLoaderDirective extends ThCallbackLoaderBaseDirective<DataTexture> {
    protected host: ThDataTexture;
    protected zone: NgZone;
    protected service: RGBMLoaderService;
    constructor(host: ThDataTexture, zone: NgZone, service: RGBMLoaderService);
    static ɵfac: i0.ɵɵFactoryDeclaration<ThRGBMLoaderDirective, [{ host: true; }, null, null]>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<ThRGBMLoaderDirective, "[loadRGBMTexture]", never, {}, {}, never, never, false, never>;
}
