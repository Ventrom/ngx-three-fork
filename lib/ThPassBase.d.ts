import { OnInit } from '@angular/core';
import { ThEffectComposer } from './generated/overrides/ThEffectComposer';
import { Pass } from 'three/examples/jsm/postprocessing/Pass.js';
import { ThWrapperBase } from './ThWrapperBase';
import * as i0 from "@angular/core";
export declare class ThPassBase<T extends Pass = Pass, ARGS = unknown> extends ThWrapperBase<T, ARGS> implements OnInit {
    protected effectComposer?: ThEffectComposer | undefined;
    constructor(effectComposer?: ThEffectComposer | undefined);
    addToParent(): void;
    removeFromParent(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ThPassBase<any, any>, [{ optional: true; }]>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ThPassBase<any, any>, "th-abs-control", never, {}, {}, never, never, false, never>;
}
