import { NgZone, PipeTransform } from '@angular/core';
import { RGBELoader } from 'three/examples/jsm/loaders/RGBELoader.js';
import { ThDataTexture } from '../../generated/ThDataTexture';
import { ThCallbackLoaderService, ThCallbackLoaderBaseDirective, ThCallbackLoaderBasePipe } from '../ThCallbackLoaderBase';
import { DataTexture } from 'three';
import * as i0 from "@angular/core";
export declare class RGBELoaderService extends ThCallbackLoaderService<DataTexture> {
    clazz: typeof RGBELoader;
    static ɵfac: i0.ɵɵFactoryDeclaration<RGBELoaderService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<RGBELoaderService>;
}
export declare class ThRGBELoaderPipe extends ThCallbackLoaderBasePipe<DataTexture> implements PipeTransform {
    protected service: RGBELoaderService;
    constructor(service: RGBELoaderService);
    static ɵfac: i0.ɵɵFactoryDeclaration<ThRGBELoaderPipe, never>;
    static ɵpipe: i0.ɵɵPipeDeclaration<ThRGBELoaderPipe, "loadRGBETexture", false>;
}
export declare class ThRGBELoaderDirective extends ThCallbackLoaderBaseDirective<DataTexture> {
    protected host: ThDataTexture;
    protected zone: NgZone;
    protected service: RGBELoaderService;
    constructor(host: ThDataTexture, zone: NgZone, service: RGBELoaderService);
    static ɵfac: i0.ɵɵFactoryDeclaration<ThRGBELoaderDirective, [{ host: true; }, null, null]>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<ThRGBELoaderDirective, "[loadRGBETexture]", never, {}, {}, never, never, false, never>;
}
