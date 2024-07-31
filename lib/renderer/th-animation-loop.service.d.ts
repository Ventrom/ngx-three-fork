import { NgZone, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';
import { RenderState, ThEngineService } from '../ThEngine.service';
import * as i0 from "@angular/core";
export declare class ThAnimationLoopService implements OnDestroy {
    private engineService;
    private ngZone;
    private active;
    private frameId?;
    readonly beforeRender$: Observable<RenderState>;
    private destroyed$;
    constructor(engineService: ThEngineService, ngZone: NgZone);
    ngOnDestroy(): void;
    /**
     * start the loop
     */
    start(): void;
    /**
     * stop the loop
     */
    stop(): void;
    /**
     *
     * @returns true if the render loop is active
     */
    isActive(): boolean;
    /**
     * trigger an animation frame request
     */
    requestAnimationFrame(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ThAnimationLoopService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<ThAnimationLoopService>;
}
