import { NgZone, PipeTransform } from '@angular/core';
import { GLTF, GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { ThObject3D } from '../generated/ThObject3D';
import { DRACOLoaderService } from './compressed-texture/ThDRACOLoader';
import { ThAsyncLoaderBaseDirective, ThAsyncLoaderBasePipe, ThAsyncLoaderService } from './ThAsyncLoaderBase';
import * as i0 from "@angular/core";
export declare class GLTFLoaderService extends ThAsyncLoaderService<GLTF> {
    protected dracoLoaderService: DRACOLoaderService;
    clazz: typeof GLTFLoader;
    constructor(dracoLoaderService: DRACOLoaderService);
    createLoaderInstance(): GLTFLoader;
    static ɵfac: i0.ɵɵFactoryDeclaration<GLTFLoaderService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<GLTFLoaderService>;
}
export declare class ThGLTFLoaderPipe extends ThAsyncLoaderBasePipe<GLTF> implements PipeTransform {
    protected service: GLTFLoaderService;
    constructor(service: GLTFLoaderService);
    static ɵfac: i0.ɵɵFactoryDeclaration<ThGLTFLoaderPipe, never>;
    static ɵpipe: i0.ɵɵPipeDeclaration<ThGLTFLoaderPipe, "loadGLTF", false>;
}
export declare class ThGLTFLoaderDirective extends ThAsyncLoaderBaseDirective<GLTF> {
    protected host: ThObject3D;
    protected zone: NgZone;
    protected service: GLTFLoaderService;
    constructor(host: ThObject3D, zone: NgZone, service: GLTFLoaderService);
    protected getRefFromResponse(response: GLTF): import("three").Group<import("three").Object3DEventMap>;
    static ɵfac: i0.ɵɵFactoryDeclaration<ThGLTFLoaderDirective, [{ host: true; }, null, null]>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<ThGLTFLoaderDirective, "[loadGLTF]", never, {}, {}, never, never, false, never>;
}
