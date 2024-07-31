import { ThEngineService } from '../ThEngine.service';
import { ThAnimationLoopService } from './th-animation-loop.service';
import * as i0 from "@angular/core";
export declare class ThRenderDirective {
    private engineService;
    private animationLoopService;
    constructor(engineService: ThEngineService, animationLoopService: ThAnimationLoopService);
    get beforeRender(): import("rxjs").Observable<import("../ThEngine.service").RenderState>;
    get onResize(): import("rxjs").Observable<{
        width: number;
        height: number;
    }>;
    set renderOnDemand(onDemand: boolean);
    get renderOnDemand(): boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<ThRenderDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<ThRenderDirective, "[beforeRender], [onResize], [renderOnDemand]", never, { "renderOnDemand": { "alias": "renderOnDemand"; "required": false; }; }, { "beforeRender": "beforeRender"; "onResize": "onResize"; }, never, never, false, never>;
}
