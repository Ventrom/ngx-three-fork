import { NgZone, PipeTransform } from '@angular/core';
import { ThDataTexture } from '../../generated/ThDataTexture';
import { LogLuvLoader } from 'three/examples/jsm/loaders/LogLuvLoader.js';
import { ThCallbackLoaderBaseDirective, ThCallbackLoaderBasePipe, ThCallbackLoaderService } from '../ThCallbackLoaderBase';
import { DataTexture } from 'three';
import * as i0 from "@angular/core";
export declare class LogLuvLoaderService extends ThCallbackLoaderService<DataTexture> {
    clazz: typeof LogLuvLoader;
    static ɵfac: i0.ɵɵFactoryDeclaration<LogLuvLoaderService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<LogLuvLoaderService>;
}
export declare class ThLogLuvLoaderPipe extends ThCallbackLoaderBasePipe<DataTexture> implements PipeTransform {
    protected service: LogLuvLoaderService;
    constructor(service: LogLuvLoaderService);
    static ɵfac: i0.ɵɵFactoryDeclaration<ThLogLuvLoaderPipe, never>;
    static ɵpipe: i0.ɵɵPipeDeclaration<ThLogLuvLoaderPipe, "loadLogLuvTexture", false>;
}
export declare class ThLogLuvLoaderDirective extends ThCallbackLoaderBaseDirective<DataTexture> {
    protected host: ThDataTexture;
    protected zone: NgZone;
    protected service: LogLuvLoaderService;
    constructor(host: ThDataTexture, zone: NgZone, service: LogLuvLoaderService);
    static ɵfac: i0.ɵɵFactoryDeclaration<ThLogLuvLoaderDirective, [{ host: true; }, null, null]>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<ThLogLuvLoaderDirective, "[loadLogLuvTexture]", never, {}, {}, never, never, false, never>;
}
