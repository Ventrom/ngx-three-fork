import { EventEmitter, OnChanges, OnDestroy, OnInit, SimpleChanges, Type } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs';
import { EventListener, Object3D, Object3DEventMap, Event } from 'three';
import { ThWrapperLifeCycle } from './ThWrapperLifeCycle';
import * as i0 from "@angular/core";
export interface ThWrapperEventMap<T = Object3D> extends Object3DEventMap {
    changes: {
        changes: SimpleChanges;
    };
    loaded: {
        object: T;
    };
}
export declare class ThWrapperBase<T, ARGS = unknown> implements ThWrapperLifeCycle, OnChanges, OnInit, OnDestroy {
    protected _objRef?: T;
    protected _objRef$?: ReplaySubject<T>;
    autoAddToParent: boolean;
    autoDispose: boolean;
    set objRef(ref: T | undefined);
    get objRef(): T | undefined;
    protected updateEmitter?: EventEmitter<SimpleChanges>;
    constructor();
    addToParent(): void;
    removeFromParent(): void;
    args?: ARGS;
    protected eventListeners?: {
        [key: Event['type']]: EventListener<Event, Event['type'], T>;
    };
    set threeEvents(eventMap: {
        [key: Event['type']]: EventListener<Event, Event['type'], T>;
    } | undefined);
    get threeEvents(): {
        [key: Event['type']]: EventListener<Event, Event['type'], T>;
    } | undefined;
    get onUpdate(): Observable<SimpleChanges>;
    /**
     * emits the last assigned object ref
     */
    get objRef$(): Observable<T>;
    ngOnInit(): void;
    getType(): Type<any>;
    createThreeInstance(args?: unknown): any;
    ngOnChanges(changes: SimpleChanges): void;
    disposeObjRef(): void;
    ngOnDestroy(): void;
    protected applyObjRef(objRef: T | undefined): void;
    protected emitObjRefChange(): void;
    protected emitPropertyChanges(changes: SimpleChanges): void;
    private removeEvents;
    private applyEvents;
    static ɵfac: i0.ɵɵFactoryDeclaration<ThWrapperBase<any, any>, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ThWrapperBase<any, any>, "th-abs-wrapper", never, { "autoAddToParent": { "alias": "autoAddToParent"; "required": false; }; "autoDispose": { "alias": "autoDispose"; "required": false; }; "objRef": { "alias": "objRef"; "required": false; }; "args": { "alias": "args"; "required": false; }; "threeEvents": { "alias": "threeEvents"; "required": false; }; }, { "onUpdate": "onUpdate"; "objRef$": "objRef$"; }, never, never, false, never>;
}
