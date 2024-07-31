import { OnDestroy, OnInit } from '@angular/core';
import { ThEngineService } from '../ThEngine.service';
import { ThCanvas } from '../ThCanvas';
import * as i0 from "@angular/core";
export declare class StatsDirective implements OnInit, OnDestroy {
    private engineService;
    private canvas;
    private stats;
    private renderSubscription?;
    constructor(engineService: ThEngineService, canvas: ThCanvas);
    ngOnDestroy(): void;
    ngOnInit(): void;
    set thStats(enabled: boolean);
    static ɵfac: i0.ɵɵFactoryDeclaration<StatsDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<StatsDirective, "[thStats]", never, { "thStats": { "alias": "thStats"; "required": false; }; }, {}, never, never, false, never>;
}
