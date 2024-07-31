import { ElementRef, EventEmitter, InjectionToken, OnInit } from '@angular/core';
import { Color, Object3D, Renderer, Vector4 } from 'three';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RaycasterService } from './events/raycaster.service';
import { ThCamera } from './generated/ThCamera';
import { ThScene } from './generated/ThScene';
import { ThEngineService } from './ThEngine.service';
import * as i0 from "@angular/core";
export declare const HOST_ELEMENT: InjectionToken<ElementRef<HTMLElement>>;
export declare class ThView implements OnInit {
    protected engServ: ThEngineService;
    protected raycaster: RaycasterService;
    readonly hostElement: ElementRef<HTMLElement>;
    protected _camera?: ThCamera;
    protected _viewPort?: Vector4 | {
        x: number;
        y: number;
        width: number;
        height: number;
    };
    protected _effectComposer?: EffectComposer;
    constructor(engServ: ThEngineService, raycaster: RaycasterService);
    scene?: ThScene;
    /**
     * Emits before the render loop starts for this view (before effectComposer or main render pass, but after setting up the viewPort on the renderer).
     * It emits for every renderer.
     * It can be used to modify the scene, camera or renderer before rendering
     * and to do additional render passes
     *
     * @Note onRender is called before this event (and only once for all renderers)
     */
    onCurrentRendererPass: EventEmitter<{
        renderer: Renderer;
        scene: ThScene;
        camera: ThCamera;
        engine: ThEngineService;
    }>;
    set contentScene(scene: ThScene | undefined);
    set effectComposer(effectComposer: EffectComposer | undefined);
    get effectComposer(): EffectComposer | undefined;
    set camera(camera: ThCamera | undefined);
    get camera(): ThCamera | undefined;
    set contentCamera(camera: ThCamera<any> | undefined);
    /**
     * enable / disable shadows
     */
    shadow?: boolean;
    set viewPort(viewPort: Vector4 | {
        x: number;
        y: number;
        width: number;
        height: number;
    } | undefined);
    get viewPort(): Vector4 | {
        x: number;
        y: number;
        width: number;
        height: number;
    } | undefined;
    scissor?: Vector4 | {
        x: number;
        y: number;
        width: number;
        height: number;
    };
    /**
     * Enable the scissor test. When this is enabled,
     * only the pixels within the defined scissor area will be affected by further renderer actions.
     */
    scissorTest?: boolean;
    /**
     * Sets the clear color
     */
    clearColor?: Color | string | number;
    /**
     * a float with the current clear alpha. Ranges from 0 to 1.
     */
    clearAlpha?: number;
    readonly onRender: EventEmitter<{
        renderer: Renderer[];
        scene: ThScene;
        camera: ThCamera;
    }>;
    ngOnInit(): void;
    private initRaycaster;
    add(_scene: Object3D): void;
    remove(_scene: Object3D): void;
    private configureEffectComposerRenderTarget;
    static ɵfac: i0.ɵɵFactoryDeclaration<ThView, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ThView, "th-view", never, { "scene": { "alias": "scene"; "required": false; }; "effectComposer": { "alias": "effectComposer"; "required": false; }; "camera": { "alias": "camera"; "required": false; }; "shadow": { "alias": "shadow"; "required": false; }; "viewPort": { "alias": "viewPort"; "required": false; }; "scissor": { "alias": "scissor"; "required": false; }; "scissorTest": { "alias": "scissorTest"; "required": false; }; "clearColor": { "alias": "clearColor"; "required": false; }; "clearAlpha": { "alias": "clearAlpha"; "required": false; }; }, { "onCurrentRendererPass": "onCurrentRendererPass"; "onRender": "onRender"; }, ["contentScene", "contentCamera"], ["*"], false, never>;
}
