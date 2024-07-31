import { NgZone, PipeTransform } from '@angular/core';
import { PLYLoader } from 'three/examples/jsm/loaders/PLYLoader.js';
import { ThAsyncLoaderBaseDirective, ThAsyncLoaderBasePipe, ThAsyncLoaderService } from './ThAsyncLoaderBase';
import { BufferGeometry } from 'three';
import { ThBufferGeometry } from '../generated';
import * as i0 from "@angular/core";
export declare class PLYLoaderService extends ThAsyncLoaderService<BufferGeometry> {
    clazz: typeof PLYLoader;
    static ɵfac: i0.ɵɵFactoryDeclaration<PLYLoaderService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<PLYLoaderService>;
}
export declare class ThPLYLoaderPipe extends ThAsyncLoaderBasePipe<BufferGeometry> implements PipeTransform {
    protected service: PLYLoaderService;
    constructor(service: PLYLoaderService);
    static ɵfac: i0.ɵɵFactoryDeclaration<ThPLYLoaderPipe, never>;
    static ɵpipe: i0.ɵɵPipeDeclaration<ThPLYLoaderPipe, "loadPLY", false>;
}
export declare class ThPLYLoaderDirective extends ThAsyncLoaderBaseDirective<BufferGeometry> {
    protected host: ThBufferGeometry;
    protected zone: NgZone;
    protected service: PLYLoaderService;
    constructor(host: ThBufferGeometry, zone: NgZone, service: PLYLoaderService);
    protected getRefFromResponse(response: BufferGeometry): BufferGeometry<import("three").NormalBufferAttributes>;
    protected load(): Promise<void>;
    static ɵfac: i0.ɵɵFactoryDeclaration<ThPLYLoaderDirective, [{ host: true; }, null, null]>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<ThPLYLoaderDirective, "[loadPLY]", never, {}, {}, never, never, false, never>;
}
