import { NgZone, PipeTransform } from '@angular/core';
import { PVRLoader } from 'three/examples/jsm/loaders/PVRLoader.js';
import { ThCompressedTexture } from '../../generated/ThCompressedTexture';
import { ThCallbackLoaderService, ThCallbackLoaderBaseDirective, ThCallbackLoaderBasePipe } from '../ThCallbackLoaderBase';
import { CompressedTexture } from 'three';
import * as i0 from "@angular/core";
export declare class PVRLoaderService extends ThCallbackLoaderService<CompressedTexture> {
    clazz: typeof PVRLoader;
    static ɵfac: i0.ɵɵFactoryDeclaration<PVRLoaderService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<PVRLoaderService>;
}
export declare class ThPVRLoaderPipe extends ThCallbackLoaderBasePipe<CompressedTexture> implements PipeTransform {
    protected service: PVRLoaderService;
    constructor(service: PVRLoaderService);
    static ɵfac: i0.ɵɵFactoryDeclaration<ThPVRLoaderPipe, never>;
    static ɵpipe: i0.ɵɵPipeDeclaration<ThPVRLoaderPipe, "loadPVRTexture", false>;
}
export declare class ThPVRLoaderDirective extends ThCallbackLoaderBaseDirective<CompressedTexture> {
    protected host: ThCompressedTexture;
    protected zone: NgZone;
    protected service: PVRLoaderService;
    constructor(host: ThCompressedTexture, zone: NgZone, service: PVRLoaderService);
    static ɵfac: i0.ɵɵFactoryDeclaration<ThPVRLoaderDirective, [{ host: true; }, null, null]>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<ThPVRLoaderDirective, "[loadPVRTexture]", never, {}, {}, never, never, false, never>;
}
