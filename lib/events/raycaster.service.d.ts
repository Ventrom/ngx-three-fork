import { InjectionToken, OnDestroy } from '@angular/core';
import * as THREE from 'three';
import { ThCamera } from '../generated/ThCamera';
import { RaycasterEventDirective } from './raycaster.events.directive';
import { ThObject3D } from '../generated';
import * as i0 from "@angular/core";
export declare const enum RaycasterEvent {
    mouseEnter = "mouseEnter",
    mouseExit = "mouseExit",
    click = "click",
    pointerDown = "pointerDown",
    pointerUp = "pointerUp"
}
export interface RaycasterEventMap {
    mouseEnter: {
        component: ThObject3D<THREE.Object3DEventMap & RaycasterEventMap>;
    };
    mouseExit: {
        component: ThObject3D<THREE.Object3DEventMap & RaycasterEventMap>;
    };
    click: {
        component: ThObject3D<THREE.Object3DEventMap & RaycasterEventMap>;
    };
    pointerDown: {
        component: ThObject3D<THREE.Object3DEventMap & RaycasterEventMap>;
    };
    pointerUp: {
        component: ThObject3D<THREE.Object3DEventMap & RaycasterEventMap>;
    };
}
export declare const RAYCASTER: InjectionToken<THREE.Raycaster>;
export declare class RaycasterService implements OnDestroy {
    private canvas?;
    private raycaster;
    private selected;
    private enabled;
    private camera?;
    private groups;
    private paused;
    private maxClickDistance;
    private static instanceCnt;
    /**
     * targets of the pointer down event
     */
    private pointerDownEvent?;
    readonly nid: number;
    constructor();
    ngOnDestroy(): void;
    private subscribe;
    private unsubscribe;
    enable(): void;
    disable(): void;
    pause(): void;
    resume(): void;
    get isEnabled(): boolean;
    init(camera: ThCamera, canvas: HTMLElement): void;
    addEventTarget(target: RaycasterEventDirective): void;
    removeEventTarget(target: RaycasterEventDirective): void;
    private onPointerMove;
    private onPointerDown;
    private onPointerUp;
    private isReady;
    private calcPointerDownUpDinstance;
    private getFirstIntersectedGroup;
    static ɵfac: i0.ɵɵFactoryDeclaration<RaycasterService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<RaycasterService>;
}
