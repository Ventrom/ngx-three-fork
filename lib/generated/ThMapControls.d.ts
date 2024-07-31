import { Type } from '@angular/core';
import { Camera } from 'three';
import { MapControls } from 'three/examples/jsm/controls/MapControls.js';
import { ThOrbitControls } from './ThOrbitControls';
import * as i0 from "@angular/core";
export declare class ThMapControls<T extends MapControls = MapControls, TARGS = [object: Camera, domElement?: HTMLElement]> extends ThOrbitControls<T, TARGS> {
    getType(): Type<MapControls>;
    static ɵfac: i0.ɵɵFactoryDeclaration<ThMapControls<any, any>, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ThMapControls<any, any>, "th-mapControls", never, {}, {}, never, ["*"], false, never>;
}
