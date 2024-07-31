import { NgZone, OnDestroy } from '@angular/core';
import * as THREE from 'three';
import { WebGLRenderer } from 'three';
import { ThView } from './ThView';
import { Observable } from 'rxjs';
import * as i0 from "@angular/core";
export interface RenderState {
    engine: ThEngineService;
    delta: number;
}
export declare class ThEngineService implements OnDestroy {
    private ngZone;
    readonly beforeRender$: Observable<RenderState>;
    readonly resize$: Observable<{
        width: number;
        height: number;
    }>;
    private readonly hostElement;
    readonly canvas?: HTMLCanvasElement;
    readonly wegblRenderer?: THREE.WebGLRenderer;
    /**
     * all injected renderers
     */
    readonly renderers: THREE.Renderer[];
    private clock;
    private destroyed$;
    private readonly resizeEmitter;
    private readonly beforeRenderEmitter;
    private views;
    private resizeObserver?;
    constructor(ngZone: NgZone);
    ngOnDestroy(): void;
    private initResizeObserver;
    private initCanvasSize;
    private initRenderer;
    setViews(views: ThView[]): void;
    addView(view: ThView): void;
    render(): void;
    protected renderView(view: ThView): void;
    protected applyRendererParametersFromView(view: ThView, renderer: Partial<WebGLRenderer>): void;
    resize(): boolean;
    protected calcRendererSize(): {
        width: number;
        height: number;
    };
    protected adjustViewDimensions(view: ThView, width: number, height: number): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ThEngineService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<ThEngineService>;
}
