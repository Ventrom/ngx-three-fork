import { NgZone, PipeTransform } from '@angular/core';
import { ThDataTexture } from '../../generated/ThDataTexture';
import { TGALoader } from 'three/examples/jsm/loaders/TGALoader.js';
import { ThCallbackLoaderService, ThCallbackLoaderBaseDirective, ThCallbackLoaderBasePipe } from '../ThCallbackLoaderBase';
import { DataTexture } from 'three';
import * as i0 from "@angular/core";
export declare class TGALoaderService extends ThCallbackLoaderService<DataTexture> {
    clazz: typeof TGALoader;
    static ɵfac: i0.ɵɵFactoryDeclaration<TGALoaderService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<TGALoaderService>;
}
export declare class ThTGALoaderPipe extends ThCallbackLoaderBasePipe<DataTexture> implements PipeTransform {
    protected service: TGALoaderService;
    constructor(service: TGALoaderService);
    static ɵfac: i0.ɵɵFactoryDeclaration<ThTGALoaderPipe, never>;
    static ɵpipe: i0.ɵɵPipeDeclaration<ThTGALoaderPipe, "loadTGATexture", false>;
}
export declare class ThTGALoaderDirective extends ThCallbackLoaderBaseDirective<DataTexture> {
    protected host: ThDataTexture;
    protected zone: NgZone;
    protected service: TGALoaderService;
    constructor(host: ThDataTexture, zone: NgZone, service: TGALoaderService);
    static ɵfac: i0.ɵɵFactoryDeclaration<ThTGALoaderDirective, [{ host: true; }, null, null]>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<ThTGALoaderDirective, "[loadTGATexture]", never, {}, {}, never, never, false, never>;
}
