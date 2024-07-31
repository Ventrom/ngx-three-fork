import { WebGLRenderer, WebGLRenderTarget } from 'three';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { ThEngineService } from '../../ThEngine.service';
import { ThView } from '../../ThView';
import { ThEffectComposerGen } from '../ThEffectComposerGen';
import * as i0 from "@angular/core";
export declare class ThEffectComposer<T extends EffectComposer = EffectComposer, TARGS extends any[] = [renderer: WebGLRenderer, renderTarget?: WebGLRenderTarget]> extends ThEffectComposerGen<T, TARGS> {
    protected view: ThView;
    protected engineService: ThEngineService;
    constructor(view: ThView, engineService: ThEngineService);
    createThreeInstance(args?: TARGS): EffectComposer;
    private initRenderTarget;
    addToParent(): void;
    removeFromParent(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ThEffectComposer<any, any>, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ThEffectComposer<any, any>, "th-effectComposer", never, {}, {}, never, ["*"], false, never>;
}
