import { Type } from '@angular/core';
import { Camera, Object3DEventMap, Scene } from 'three';
import { CSS3DObject } from 'three/examples/jsm/renderers/CSS3DRenderer.js';
import { ThObject3D } from './ThObject3D';
import * as i0 from "@angular/core";
export declare class ThCSS3DObjectGen<T extends CSS3DObject = CSS3DObject, TARGS = HTMLElement> extends ThObject3D<Object3DEventMap, T, TARGS> {
    getType(): Type<CSS3DObject>;
    set element(value: HTMLElement);
    get element(): HTMLElement | undefined;
    set onBeforeRender(value: (renderer: unknown, scene: Scene, camera: Camera) => void);
    get onBeforeRender(): ((renderer: unknown, scene: Scene, camera: Camera) => void) | undefined;
    set onAfterRender(value: (renderer: unknown, scene: Scene, camera: Camera) => void);
    get onAfterRender(): ((renderer: unknown, scene: Scene, camera: Camera) => void) | undefined;
    static ɵfac: i0.ɵɵFactoryDeclaration<ThCSS3DObjectGen<any, any>, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ThCSS3DObjectGen<any, any>, "th-cSS3DObjectGen", never, { "element": { "alias": "element"; "required": false; }; "onBeforeRender": { "alias": "onBeforeRender"; "required": false; }; "onAfterRender": { "alias": "onAfterRender"; "required": false; }; }, {}, never, ["*"], false, never>;
}
