import { AfterContentChecked } from '@angular/core';
import { Camera, Color, Material, Scene } from 'three';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { ThView } from '../../ThView';
import { ThRenderPassGen } from '../ThRenderPassGen';
import { ThEffectComposer } from './ThEffectComposer';
import * as i0 from "@angular/core";
export declare class ThRenderPass<T extends RenderPass = RenderPass, TARGS extends any[] = [
    scene: Scene,
    camera: Camera,
    overrideMaterial?: Material,
    clearColor?: Color,
    clearAlpha?: number
]> extends ThRenderPassGen<T, TARGS> implements AfterContentChecked {
    protected effectComposer: ThEffectComposer;
    private view;
    constructor(effectComposer: ThEffectComposer, view: ThView);
    createThreeInstance(args?: TARGS): RenderPass;
    ngAfterContentChecked(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ThRenderPass<any, any>, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ThRenderPass<any, any>, "th-renderPass", never, {}, {}, never, ["*"], false, never>;
}
