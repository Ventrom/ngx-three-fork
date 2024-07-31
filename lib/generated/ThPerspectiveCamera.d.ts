import { Type } from '@angular/core';
import { PerspectiveCamera } from 'three';
import { ThCamera } from './ThCamera';
import * as i0 from "@angular/core";
export declare class ThPerspectiveCamera<T extends PerspectiveCamera = PerspectiveCamera, TARGS = [fov?: number, aspect?: number, near?: number, far?: number]> extends ThCamera<T, TARGS> {
    getType(): Type<PerspectiveCamera>;
    get isPerspectiveCamera(): true | undefined;
    get type(): (string | 'PerspectiveCamera') | undefined;
    set zoom(value: number);
    get zoom(): number | undefined;
    set fov(value: number);
    get fov(): number | undefined;
    set aspect(value: number);
    get aspect(): number | undefined;
    set near(value: number);
    get near(): number | undefined;
    set far(value: number);
    get far(): number | undefined;
    set focus(value: number);
    get focus(): number | undefined;
    set view(value: null | {
        enabled: boolean;
        fullWidth: number;
        fullHeight: number;
        offsetX: number;
        offsetY: number;
        width: number;
        height: number;
    });
    get view(): (null | {
        enabled: boolean;
        fullWidth: number;
        fullHeight: number;
        offsetX: number;
        offsetY: number;
        width: number;
        height: number;
    }) | undefined;
    set filmGauge(value: number);
    get filmGauge(): number | undefined;
    set filmOffset(value: number);
    get filmOffset(): number | undefined;
    static ɵfac: i0.ɵɵFactoryDeclaration<ThPerspectiveCamera<any, any>, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ThPerspectiveCamera<any, any>, "th-perspectiveCamera", never, { "zoom": { "alias": "zoom"; "required": false; }; "fov": { "alias": "fov"; "required": false; }; "aspect": { "alias": "aspect"; "required": false; }; "near": { "alias": "near"; "required": false; }; "far": { "alias": "far"; "required": false; }; "focus": { "alias": "focus"; "required": false; }; "view": { "alias": "view"; "required": false; }; "filmGauge": { "alias": "filmGauge"; "required": false; }; "filmOffset": { "alias": "filmOffset"; "required": false; }; }, {}, never, ["*"], false, never>;
}
