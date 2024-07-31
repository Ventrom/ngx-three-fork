import { NgZone, PipeTransform } from '@angular/core';
import { Texture, TextureLoader } from 'three';
import { ThTexture } from '../generated/ThTexture';
import { ThCallbackLoaderService, ThCallbackLoaderBaseDirective, ThCallbackLoaderBasePipe } from './ThCallbackLoaderBase';
import * as i0 from "@angular/core";
export declare class TextureLoaderService extends ThCallbackLoaderService<Texture> {
    clazz: typeof TextureLoader;
    static ɵfac: i0.ɵɵFactoryDeclaration<TextureLoaderService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<TextureLoaderService>;
}
export declare class ThTextureLoaderPipe extends ThCallbackLoaderBasePipe<Texture> implements PipeTransform {
    protected service: TextureLoaderService;
    constructor(service: TextureLoaderService);
    static ɵfac: i0.ɵɵFactoryDeclaration<ThTextureLoaderPipe, never>;
    static ɵpipe: i0.ɵɵPipeDeclaration<ThTextureLoaderPipe, "loadTexture", false>;
}
export declare class ThTextureLoaderDirective extends ThCallbackLoaderBaseDirective<Texture> {
    protected host: ThTexture<Texture>;
    protected zone: NgZone;
    protected service: TextureLoaderService;
    constructor(host: ThTexture<Texture>, zone: NgZone, service: TextureLoaderService);
    static ɵfac: i0.ɵɵFactoryDeclaration<ThTextureLoaderDirective, [{ host: true; }, null, null]>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<ThTextureLoaderDirective, "[loadTexture]", never, {}, {}, never, never, false, never>;
}
