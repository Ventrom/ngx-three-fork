import { NgZone, PipeTransform } from '@angular/core';
import { DDSLoader } from 'three/examples/jsm/loaders/DDSLoader.js';
import { ThCompressedTexture } from '../../generated/ThCompressedTexture';
import { ThCallbackLoaderService, ThCallbackLoaderBaseDirective, ThCallbackLoaderBasePipe } from '../ThCallbackLoaderBase';
import { CompressedTexture } from 'three';
import * as i0 from "@angular/core";
export declare class DDSLoaderService extends ThCallbackLoaderService<CompressedTexture> {
    clazz: typeof DDSLoader;
    static ɵfac: i0.ɵɵFactoryDeclaration<DDSLoaderService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<DDSLoaderService>;
}
export declare class ThDDSLoaderPipe extends ThCallbackLoaderBasePipe<CompressedTexture> implements PipeTransform {
    protected service: DDSLoaderService;
    constructor(service: DDSLoaderService);
    static ɵfac: i0.ɵɵFactoryDeclaration<ThDDSLoaderPipe, never>;
    static ɵpipe: i0.ɵɵPipeDeclaration<ThDDSLoaderPipe, "loadDDSTexture", false>;
}
export declare class ThDDSLoaderDirective extends ThCallbackLoaderBaseDirective<CompressedTexture> {
    protected host: ThCompressedTexture;
    protected zone: NgZone;
    protected service: DDSLoaderService;
    constructor(host: ThCompressedTexture, zone: NgZone, service: DDSLoaderService);
    static ɵfac: i0.ɵɵFactoryDeclaration<ThDDSLoaderDirective, [{ host: true; }, null, null]>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<ThDDSLoaderDirective, "[loadDDSTexture]", never, {}, {}, never, never, false, never>;
}
