import { Type } from '@angular/core';
import { Camera } from 'three';
import { PointerLockControls } from 'three/examples/jsm/controls/PointerLockControls.js';
import { ThControlBase } from '../ThControlBase';
import * as i0 from "@angular/core";
export declare class ThPointerLockControls<T extends PointerLockControls = PointerLockControls, TARGS = [camera: Camera, domElement?: HTMLElement]> extends ThControlBase<T, TARGS> {
    getType(): Type<PointerLockControls>;
    set camera(value: Camera);
    get camera(): Camera | undefined;
    set domElement(value: HTMLElement);
    get domElement(): HTMLElement | undefined;
    set isLocked(value: boolean);
    get isLocked(): boolean | undefined;
    set minPolarAngle(value: number);
    get minPolarAngle(): number | undefined;
    set maxPolarAngle(value: number);
    get maxPolarAngle(): number | undefined;
    set pointerSpeed(value: number);
    get pointerSpeed(): number | undefined;
    static ɵfac: i0.ɵɵFactoryDeclaration<ThPointerLockControls<any, any>, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ThPointerLockControls<any, any>, "th-pointerLockControls", never, { "camera": { "alias": "camera"; "required": false; }; "domElement": { "alias": "domElement"; "required": false; }; "isLocked": { "alias": "isLocked"; "required": false; }; "minPolarAngle": { "alias": "minPolarAngle"; "required": false; }; "maxPolarAngle": { "alias": "maxPolarAngle"; "required": false; }; "pointerSpeed": { "alias": "pointerSpeed"; "required": false; }; }, {}, never, ["*"], false, never>;
}
