import { AfterContentChecked, AfterViewInit, ElementRef, isDevMode, OnInit, QueryList } from '@angular/core';
import { RaycasterService } from './events/raycaster.service';
import { ThAnimationLoopService } from './renderer/th-animation-loop.service';
import { ThEngineService } from './ThEngine.service';
import { ThView } from './ThView';
import * as i0 from "@angular/core";
export declare class ThCanvas extends ThView implements OnInit, AfterViewInit, AfterContentChecked {
    protected engServ: ThEngineService;
    protected animationLoop: ThAnimationLoopService;
    protected raycaster: RaycasterService;
    readonly elementRef: ElementRef<HTMLElement>;
    readonly isDevMode: typeof isDevMode;
    private static instanceCnt;
    readonly nid: number;
    /**
     * if true does not use the ThCanvas as view
     * this is esepcially usefull if you have multiple views
     * and want to iterate over all of them with *ngFor
     * use statically (before ngOnInit is triggered)
     */
    disableDefaultView: boolean;
    get obj(): this;
    set views(viewList: QueryList<ThView>);
    get rendererCanvas(): HTMLCanvasElement | undefined;
    constructor(engServ: ThEngineService, animationLoop: ThAnimationLoopService, raycaster: RaycasterService, elementRef: ElementRef<HTMLElement>);
    ngAfterContentChecked(): void;
    ngAfterViewInit(): void;
    ngOnInit(): void;
    protected setViews(viewList?: QueryList<ThView>): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ThCanvas, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ThCanvas, "th-canvas", never, { "disableDefaultView": { "alias": "disableDefaultView"; "required": false; }; }, {}, ["views"], ["*"], false, never>;
}
