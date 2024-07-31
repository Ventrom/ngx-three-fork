import { Type } from '@angular/core';
import { PerspectiveCamera, StereoCamera } from 'three';
import { ThCamera } from './ThCamera';
import * as i0 from "@angular/core";
export declare class ThStereoCamera<T extends StereoCamera = StereoCamera, TARGS = []> extends ThCamera<T, TARGS> {
    getType(): Type<StereoCamera>;
    set type(value: 'StereoCamera');
    get type(): 'StereoCamera' | undefined;
    set aspect(value: number);
    get aspect(): number | undefined;
    set eyeSep(value: number);
    get eyeSep(): number | undefined;
    set cameraL(value: PerspectiveCamera);
    get cameraL(): PerspectiveCamera | undefined;
    set cameraR(value: PerspectiveCamera);
    get cameraR(): PerspectiveCamera | undefined;
    static ɵfac: i0.ɵɵFactoryDeclaration<ThStereoCamera<any, any>, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ThStereoCamera<any, any>, "th-stereoCamera", never, { "type": { "alias": "type"; "required": false; }; "aspect": { "alias": "aspect"; "required": false; }; "eyeSep": { "alias": "eyeSep"; "required": false; }; "cameraL": { "alias": "cameraL"; "required": false; }; "cameraR": { "alias": "cameraR"; "required": false; }; }, {}, never, ["*"], false, never>;
}
