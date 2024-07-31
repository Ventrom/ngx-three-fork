import { NgZone, PipeTransform } from '@angular/core';
import { CubeTexture, CubeTextureLoader, Texture } from 'three';
import { ThTexture } from '../generated/ThTexture';
import { ThCallbackLoaderService, ThCallbackLoaderBaseDirective, ThCallbackLoaderBasePipe } from './ThCallbackLoaderBase';
import * as i0 from "@angular/core";
export declare class CubeTextureLoaderService extends ThCallbackLoaderService<CubeTexture, string[]> {
    clazz: typeof CubeTextureLoader;
    static ɵfac: i0.ɵɵFactoryDeclaration<CubeTextureLoaderService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<CubeTextureLoaderService>;
}
export declare class ThCubeTextureLoaderPipe extends ThCallbackLoaderBasePipe<CubeTexture, string[]> implements PipeTransform {
    protected service: CubeTextureLoaderService;
    constructor(service: CubeTextureLoaderService);
    static ɵfac: i0.ɵɵFactoryDeclaration<ThCubeTextureLoaderPipe, never>;
    static ɵpipe: i0.ɵɵPipeDeclaration<ThCubeTextureLoaderPipe, "loadCubeTexture", false>;
}
export declare class ThCubeTextureLoaderDirective extends ThCallbackLoaderBaseDirective<CubeTexture, string[]> {
    protected host: ThTexture<Texture>;
    protected zone: NgZone;
    protected service: CubeTextureLoaderService;
    constructor(host: ThTexture<Texture>, zone: NgZone, service: CubeTextureLoaderService);
    static ɵfac: i0.ɵɵFactoryDeclaration<ThCubeTextureLoaderDirective, [{ host: true; }, null, null]>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<ThCubeTextureLoaderDirective, "[loadCubeTexture]", never, {}, {}, never, never, false, never>;
}
