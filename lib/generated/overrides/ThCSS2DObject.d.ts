import { ElementRef, Type } from '@angular/core';
import { CSS2DObject } from 'three/examples/jsm/renderers/CSS2DRenderer.js';
import { ThCSS2DObjectGen } from '../ThCSS2DObjectGen';
import * as i0 from "@angular/core";
export declare class ThCSS2DObject<T extends CSS2DObject = CSS2DObject, TARGS = HTMLElement> extends ThCSS2DObjectGen<T, TARGS> {
    elementRef: ElementRef<any>;
    getType(): Type<CSS2DObject>;
    createThreeInstance(args?: unknown): any;
    static ɵfac: i0.ɵɵFactoryDeclaration<ThCSS2DObject<any, any>, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ThCSS2DObject<any, any>, "th-cSS2DObject", never, {}, {}, never, ["*"], false, never>;
}
