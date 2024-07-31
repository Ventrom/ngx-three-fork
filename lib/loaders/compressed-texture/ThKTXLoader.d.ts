import { NgZone, PipeTransform } from '@angular/core';
import { KTXLoader } from 'three/examples/jsm/loaders/KTXLoader.js';
import { ThCompressedTexture } from '../../generated/ThCompressedTexture';
import { ThCallbackLoaderService, ThCallbackLoaderBaseDirective, ThCallbackLoaderBasePipe } from '../ThCallbackLoaderBase';
import { CompressedTexture } from 'three';
import * as i0 from "@angular/core";
export declare class KTXLoaderService extends ThCallbackLoaderService<CompressedTexture> {
    clazz: typeof KTXLoader;
    static ɵfac: i0.ɵɵFactoryDeclaration<KTXLoaderService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<KTXLoaderService>;
}
export declare class ThKTXLoaderPipe extends ThCallbackLoaderBasePipe<CompressedTexture> implements PipeTransform {
    protected service: KTXLoaderService;
    constructor(service: KTXLoaderService);
    static ɵfac: i0.ɵɵFactoryDeclaration<ThKTXLoaderPipe, never>;
    static ɵpipe: i0.ɵɵPipeDeclaration<ThKTXLoaderPipe, "loadKTXTexture", false>;
}
export declare class ThKTXLoaderDirective extends ThCallbackLoaderBaseDirective<CompressedTexture> {
    protected host: ThCompressedTexture;
    protected zone: NgZone;
    protected service: KTXLoaderService;
    constructor(host: ThCompressedTexture, zone: NgZone, service: KTXLoaderService);
    static ɵfac: i0.ɵɵFactoryDeclaration<ThKTXLoaderDirective, [{ host: true; }, null, null]>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<ThKTXLoaderDirective, "[loadKTXTexture]", never, {}, {}, never, never, false, never>;
}
