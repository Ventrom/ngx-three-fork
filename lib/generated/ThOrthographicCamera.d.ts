import { Type } from '@angular/core';
import { OrthographicCamera } from 'three';
import { ThCamera } from './ThCamera';
import * as i0 from "@angular/core";
export declare class ThOrthographicCamera<T extends OrthographicCamera = OrthographicCamera, TARGS = [
    left?: number,
    right?: number,
    top?: number,
    bottom?: number,
    near?: number,
    far?: number
]> extends ThCamera<T, TARGS> {
    getType(): Type<OrthographicCamera>;
    get isOrthographicCamera(): true | undefined;
    get type(): (string | 'OrthographicCamera') | undefined;
    set zoom(value: number);
    get zoom(): number | undefined;
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
    set left(value: number);
    get left(): number | undefined;
    set right(value: number);
    get right(): number | undefined;
    set top(value: number);
    get top(): number | undefined;
    set bottom(value: number);
    get bottom(): number | undefined;
    set near(value: number);
    get near(): number | undefined;
    set far(value: number);
    get far(): number | undefined;
    static ɵfac: i0.ɵɵFactoryDeclaration<ThOrthographicCamera<any, any>, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ThOrthographicCamera<any, any>, "th-orthographicCamera", never, { "zoom": { "alias": "zoom"; "required": false; }; "view": { "alias": "view"; "required": false; }; "left": { "alias": "left"; "required": false; }; "right": { "alias": "right"; "required": false; }; "top": { "alias": "top"; "required": false; }; "bottom": { "alias": "bottom"; "required": false; }; "near": { "alias": "near"; "required": false; }; "far": { "alias": "far"; "required": false; }; }, {}, never, ["*"], false, never>;
}
