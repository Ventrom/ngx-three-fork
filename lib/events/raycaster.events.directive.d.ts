import { AfterViewInit, EventEmitter, OnDestroy } from '@angular/core';
import { Intersection, Object3DEventMap } from 'three';
import { ThObject3D } from '../generated/ThObject3D';
import { RaycasterEvent, RaycasterEventMap, RaycasterService } from './raycaster.service';
import * as i0 from "@angular/core";
export interface RaycasterEmitEvent extends Intersection {
    type: RaycasterEvent;
    component: ThObject3D<RaycasterEventMap & Object3DEventMap>;
}
export declare class RaycasterEventDirective implements AfterViewInit, OnDestroy {
    readonly host: ThObject3D<RaycasterEventMap & Object3DEventMap>;
    private raycasterService;
    get onMouseEnter(): EventEmitter<RaycasterEmitEvent>;
    protected mouseEnter?: EventEmitter<RaycasterEmitEvent>;
    get onMouseExit(): EventEmitter<{
        component: ThObject3D<Object3DEventMap & RaycasterEventMap>;
        type: RaycasterEvent;
    }>;
    protected mouseExit?: EventEmitter<{
        component: ThObject3D<Object3DEventMap & RaycasterEventMap>;
        type: RaycasterEvent;
    }>;
    get onClick(): EventEmitter<RaycasterEmitEvent>;
    protected click?: EventEmitter<RaycasterEmitEvent>;
    get onPointerDown(): EventEmitter<RaycasterEmitEvent>;
    protected pointerDown?: EventEmitter<RaycasterEmitEvent>;
    get onPointerUp(): EventEmitter<RaycasterEmitEvent>;
    protected pointerUp?: EventEmitter<RaycasterEmitEvent>;
    constructor(host: ThObject3D<RaycasterEventMap & Object3DEventMap>, raycasterService: RaycasterService);
    ngAfterViewInit(): void;
    private subscribeEvents;
    private unSubscribeEvents;
    emitOnMouseExit(): void;
    emitOnMouseEnter(event: RaycasterEmitEvent): void;
    emitOnClick(event: RaycasterEmitEvent): void;
    emitOnPointerDown(event: RaycasterEmitEvent): void;
    emitOnPointerUp(event: RaycasterEmitEvent): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<RaycasterEventDirective, [{ host: true; }, null]>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<RaycasterEventDirective, "[onClick], [onMouseEnter], [onMouseExit], [onPointerDown], [onPointerUp]", never, {}, { "onMouseEnter": "onMouseEnter"; "onMouseExit": "onMouseExit"; "onClick": "onClick"; "onPointerDown": "onPointerDown"; "onPointerUp": "onPointerUp"; }, never, never, false, never>;
}
