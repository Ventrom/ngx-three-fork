import { Type } from '@angular/core';
import { Camera } from 'three';
import { FlyControls } from 'three/examples/jsm/controls/FlyControls.js';
import { ThControlBase } from '../ThControlBase';
import * as i0 from "@angular/core";
export declare class ThFlyControls<T extends FlyControls = FlyControls, TARGS = [object: Camera, domElement?: HTMLElement]> extends ThControlBase<T, TARGS> {
    getType(): Type<FlyControls>;
    set autoForward(value: boolean);
    get autoForward(): boolean | undefined;
    set domElement(value: HTMLElement | Document);
    get domElement(): (HTMLElement | Document) | undefined;
    set dragToLook(value: boolean);
    get dragToLook(): boolean | undefined;
    set enabled(value: boolean);
    get enabled(): boolean | undefined;
    set movementSpeed(value: number);
    get movementSpeed(): number | undefined;
    set object(value: Camera);
    get object(): Camera | undefined;
    set rollSpeed(value: number);
    get rollSpeed(): number | undefined;
    static ɵfac: i0.ɵɵFactoryDeclaration<ThFlyControls<any, any>, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ThFlyControls<any, any>, "th-flyControls", never, { "autoForward": { "alias": "autoForward"; "required": false; }; "domElement": { "alias": "domElement"; "required": false; }; "dragToLook": { "alias": "dragToLook"; "required": false; }; "enabled": { "alias": "enabled"; "required": false; }; "movementSpeed": { "alias": "movementSpeed"; "required": false; }; "object": { "alias": "object"; "required": false; }; "rollSpeed": { "alias": "rollSpeed"; "required": false; }; }, {}, never, ["*"], false, never>;
}
