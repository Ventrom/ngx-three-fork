import { EventEmitter, NgZone, OnInit, PipeTransform } from '@angular/core';
import { Loader } from 'three';
import { ThAnimationLoopService } from '../renderer/th-animation-loop.service';
import { LazyObject3DProxy } from './LazyObject3dProxy';
import { ThLoader } from './ThLoaderBase';
import * as i0 from "@angular/core";
type Awaited<T> = T extends PromiseLike<infer U> ? U : T;
export declare abstract class ThAsyncLoaderService<TData = unknown, TUrl extends string | string[] = string> extends ThLoader<TData, TUrl> {
    load(...args: Parameters<Loader<TData, TUrl>['loadAsync']>): ReturnType<Loader<TData, TUrl>['loadAsync']>;
    static ɵfac: i0.ɵɵFactoryDeclaration<ThAsyncLoaderService<any, any>, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<ThAsyncLoaderService<any, any>>;
}
export declare abstract class ThAsyncLoaderBasePipe<TData = unknown, TUrl extends string | string[] = string> implements PipeTransform {
    protected abstract service: ThAsyncLoaderService<TData, TUrl>;
    private animationLoop;
    constructor();
    transform(...args: Parameters<Loader<TData, TUrl>['loadAsync']>): Promise<TData>;
}
export declare abstract class ThAsyncLoaderBaseDirective<TData = unknown, TUrl extends string | string[] = string> implements OnInit {
    protected host: {
        objRef: any;
    };
    protected zone: NgZone;
    protected abstract service: ThAsyncLoaderService<TData, TUrl>;
    protected abstract getRefFromResponse(response: Awaited<ReturnType<Loader<TData, TUrl>['loadAsync']>>): any;
    protected initialized: boolean;
    protected _url?: Parameters<Loader<TData, TUrl>['loadAsync']>[0];
    protected onLoaded$?: EventEmitter<Awaited<ReturnType<Loader<TData, TUrl>['loadAsync']>>>;
    protected onProgress$?: EventEmitter<ProgressEvent>;
    protected proxy: LazyObject3DProxy;
    protected animationLoop: ThAnimationLoopService;
    set url(url: Parameters<Loader<TData, TUrl>['loadAsync']>[0] | undefined);
    get url(): Parameters<Loader<TData, TUrl>['loadAsync']>[0] | undefined;
    get onLoaded(): EventEmitter<TData>;
    get onProgress(): EventEmitter<ProgressEvent<EventTarget>>;
    constructor(host: {
        objRef: any;
    }, zone: NgZone);
    ngOnInit(): void;
    protected load(): Promise<void>;
    static ɵfac: i0.ɵɵFactoryDeclaration<ThAsyncLoaderBaseDirective<any, any>, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<ThAsyncLoaderBaseDirective<any, any>, never, never, { "url": { "alias": "url"; "required": false; }; }, { "onLoaded": "onLoaded"; "onProgress": "onProgress"; }, never, never, false, never>;
}
export {};
