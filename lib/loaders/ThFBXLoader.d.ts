import { NgZone, PipeTransform } from '@angular/core';
import { ThObject3D } from '../generated/ThObject3D';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader.js';
import { ThAsyncLoaderBaseDirective, ThAsyncLoaderBasePipe, ThAsyncLoaderService } from './ThAsyncLoaderBase';
import { Group } from 'three';
import * as i0 from "@angular/core";
export declare class FBXLoaderService extends ThAsyncLoaderService<Group> {
    clazz: typeof FBXLoader;
    static ɵfac: i0.ɵɵFactoryDeclaration<FBXLoaderService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<FBXLoaderService>;
}
export declare class ThFBXLoaderPipe extends ThAsyncLoaderBasePipe<Group> implements PipeTransform {
    protected service: FBXLoaderService;
    constructor(service: FBXLoaderService);
    static ɵfac: i0.ɵɵFactoryDeclaration<ThFBXLoaderPipe, never>;
    static ɵpipe: i0.ɵɵPipeDeclaration<ThFBXLoaderPipe, "loadFBX", false>;
}
export declare class ThFBXLoaderDirective extends ThAsyncLoaderBaseDirective<Group> {
    protected host: ThObject3D;
    protected zone: NgZone;
    protected service: FBXLoaderService;
    constructor(host: ThObject3D, zone: NgZone, service: FBXLoaderService);
    protected getRefFromResponse(response: Group): Group<import("three").Object3DEventMap>;
    static ɵfac: i0.ɵɵFactoryDeclaration<ThFBXLoaderDirective, [{ host: true; }, null, null]>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<ThFBXLoaderDirective, "[loadFBX]", never, {}, {}, never, never, false, never>;
}
