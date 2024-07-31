import { NgZone, PipeTransform } from '@angular/core';
import { ThObject3D } from '../generated/ThObject3D';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js';
import { ThAsyncLoaderBaseDirective, ThAsyncLoaderBasePipe, ThAsyncLoaderService } from './ThAsyncLoaderBase';
import { Group } from 'three';
import * as i0 from "@angular/core";
export declare class OBJLoaderService extends ThAsyncLoaderService<Group> {
    clazz: typeof OBJLoader;
    static ɵfac: i0.ɵɵFactoryDeclaration<OBJLoaderService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<OBJLoaderService>;
}
export declare class ThObjLoaderPipe extends ThAsyncLoaderBasePipe<Group> implements PipeTransform {
    protected service: OBJLoaderService;
    constructor(service: OBJLoaderService);
    static ɵfac: i0.ɵɵFactoryDeclaration<ThObjLoaderPipe, never>;
    static ɵpipe: i0.ɵɵPipeDeclaration<ThObjLoaderPipe, "loadObj", false>;
}
export declare class ThObjLoaderDirective extends ThAsyncLoaderBaseDirective<Group> {
    protected host: ThObject3D;
    protected zone: NgZone;
    protected service: OBJLoaderService;
    constructor(host: ThObject3D, zone: NgZone, service: OBJLoaderService);
    protected getRefFromResponse(response: Group): Group<import("three").Object3DEventMap>;
    static ɵfac: i0.ɵɵFactoryDeclaration<ThObjLoaderDirective, [{ host: true; }, null, null]>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<ThObjLoaderDirective, "[loadObj]", never, {}, {}, never, never, false, never>;
}
