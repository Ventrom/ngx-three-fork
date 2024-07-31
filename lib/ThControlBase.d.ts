import { OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { EventDispatcher } from 'three';
import { ThObject3D } from './generated/ThObject3D';
import { ThAnimationLoopService } from './renderer/th-animation-loop.service';
import { ThCanvas } from './ThCanvas';
import { ThWrapperBase } from './ThWrapperBase';
import * as i0 from "@angular/core";
export declare class ThControlBase<T, ARGS> extends ThWrapperBase<T, ARGS> implements OnDestroy {
    protected _camera: ThObject3D<any>;
    protected canvas?: ThCanvas | undefined;
    protected origDispatchEventMethod?: EventDispatcher['dispatchEvent'];
    protected beforeRenderSubscription?: Subscription;
    protected renderLoop: ThAnimationLoopService;
    constructor(_camera: ThObject3D<any>, canvas?: ThCanvas | undefined);
    createThreeInstance(args?: Iterable<any>): Partial<EventDispatcher<{}>>;
    protected patchDispatchEvent(dispatcher: Partial<EventDispatcher>): void;
    ngOnDestroy(): void;
    protected unpatchDispatchEvent(): void;
    protected subscribeControlUpdater(control: {
        update: (delta: number) => void;
    }): void;
    protected unsubscribeControlUpdater(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ThControlBase<any, any>, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ThControlBase<any, any>, "th-abs-control", never, {}, {}, never, never, false, never>;
}
