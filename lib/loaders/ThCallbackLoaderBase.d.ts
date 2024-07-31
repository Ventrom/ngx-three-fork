import { EventEmitter, NgZone, OnInit, PipeTransform } from '@angular/core';
import { Loader } from 'three';
import { ThLoader } from './ThLoaderBase';
import * as i0 from "@angular/core";
export declare abstract class ThCallbackLoaderService<TData = unknown, TUrl extends string | string[] = string> extends ThLoader<TData, TUrl> {
    load(...args: Parameters<Loader<TData, TUrl>['load']>): ReturnType<Loader<TData, TUrl>['load']>;
}
export declare abstract class ThCallbackLoaderBasePipe<TData = unknown, TUrl extends string | string[] = string> implements PipeTransform {
    protected abstract service: ThCallbackLoaderService<TData, TUrl>;
    transform(...args: Parameters<Loader<TData, TUrl>['load']>): void;
}
export declare abstract class ThCallbackLoaderBaseDirective<TData = unknown, TUrl extends string | string[] = string> implements OnInit {
    protected host: {
        objRef: any;
    };
    protected zone: NgZone;
    protected abstract service: ThCallbackLoaderService<TData, TUrl>;
    private initialized;
    private _url?;
    protected onLoaded$?: EventEmitter<ReturnType<Loader<TData, TUrl>['load']>>;
    protected onProgress$?: EventEmitter<ProgressEvent>;
    set url(url: TUrl | undefined);
    get url(): TUrl | undefined;
    get onLoaded(): EventEmitter<void>;
    get onProgress(): EventEmitter<ProgressEvent<EventTarget>>;
    constructor(host: {
        objRef: any;
    }, zone: NgZone);
    ngOnInit(): void;
    protected load(): Promise<void>;
    static ɵfac: i0.ɵɵFactoryDeclaration<ThCallbackLoaderBaseDirective<any, any>, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<ThCallbackLoaderBaseDirective<any, any>, never, never, { "url": { "alias": "url"; "required": false; }; }, { "onLoaded": "onLoaded"; "onProgress": "onProgress"; }, never, never, false, never>;
}
