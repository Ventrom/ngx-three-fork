import { NgZone, PipeTransform } from '@angular/core';
import { KTX2Loader } from 'three/examples/jsm/loaders/KTX2Loader.js';
import { ThTexture } from '../../generated/ThTexture';
import { ThCallbackLoaderService, ThCallbackLoaderBaseDirective, ThCallbackLoaderBasePipe } from '../ThCallbackLoaderBase';
import { CompressedTexture } from 'three';
import * as i0 from "@angular/core";
export declare class KTX2LoaderService extends ThCallbackLoaderService<CompressedTexture> {
    readonly clazz: typeof KTX2Loader;
    protected transcoderPath: string;
    setDecoderPath(path: string): void;
    createLoaderInstance(): KTX2Loader;
    static ɵfac: i0.ɵɵFactoryDeclaration<KTX2LoaderService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<KTX2LoaderService>;
}
export declare class ThKTX2LoaderPipe extends ThCallbackLoaderBasePipe<CompressedTexture> implements PipeTransform {
    protected service: KTX2LoaderService;
    constructor(service: KTX2LoaderService);
    static ɵfac: i0.ɵɵFactoryDeclaration<ThKTX2LoaderPipe, never>;
    static ɵpipe: i0.ɵɵPipeDeclaration<ThKTX2LoaderPipe, "loadKTX2Texture", false>;
}
export declare class ThKTX2LoaderDirective extends ThCallbackLoaderBaseDirective<CompressedTexture> {
    protected host: ThTexture;
    protected zone: NgZone;
    protected service: KTX2LoaderService;
    constructor(host: ThTexture, zone: NgZone, service: KTX2LoaderService);
    static ɵfac: i0.ɵɵFactoryDeclaration<ThKTX2LoaderDirective, [{ host: true; }, null, null]>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<ThKTX2LoaderDirective, "[loadKTX2Texture]", never, {}, {}, never, never, false, never>;
}
