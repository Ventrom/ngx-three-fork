import { ElementRef, Type } from '@angular/core';
import { CSS3DObject } from 'three/examples/jsm/renderers/CSS3DRenderer.js';
import { ThCSS3DObjectGen } from '../ThCSS3DObjectGen';
import * as i0 from "@angular/core";
export declare class ThCSS3DObject<T extends CSS3DObject = CSS3DObject, TARGS = HTMLElement> extends ThCSS3DObjectGen<T, TARGS> {
    elementRef: ElementRef<any>;
    getType(): Type<CSS3DObject>;
    createThreeInstance(args?: unknown): any;
    static ɵfac: i0.ɵɵFactoryDeclaration<ThCSS3DObject<any, any>, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ThCSS3DObject<any, any>, "th-cSS3DObject", never, {}, {}, never, ["*"], false, never>;
}
