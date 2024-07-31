import { Type } from '@angular/core';
import { Camera, Object3DEventMap, Scene, Vector2 } from 'three';
import { CSS2DObject } from 'three/examples/jsm/renderers/CSS2DRenderer.js';
import { ThObject3D } from './ThObject3D';
import * as i0 from "@angular/core";
export declare class ThCSS2DObjectGen<T extends CSS2DObject = CSS2DObject, TARGS = HTMLElement> extends ThObject3D<Object3DEventMap, T, TARGS> {
    getType(): Type<CSS2DObject>;
    set element(value: HTMLElement);
    get element(): HTMLElement | undefined;
    set center(value: Vector2 | [x: number, y: number]);
    get center(): Vector2 | undefined;
    set onBeforeRender(value: (renderer: unknown, scene: Scene, camera: Camera) => void);
    get onBeforeRender(): ((renderer: unknown, scene: Scene, camera: Camera) => void) | undefined;
    set onAfterRender(value: (renderer: unknown, scene: Scene, camera: Camera) => void);
    get onAfterRender(): ((renderer: unknown, scene: Scene, camera: Camera) => void) | undefined;
    static ɵfac: i0.ɵɵFactoryDeclaration<ThCSS2DObjectGen<any, any>, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ThCSS2DObjectGen<any, any>, "th-cSS2DObjectGen", never, { "element": { "alias": "element"; "required": false; }; "center": { "alias": "center"; "required": false; }; "onBeforeRender": { "alias": "onBeforeRender"; "required": false; }; "onAfterRender": { "alias": "onAfterRender"; "required": false; }; }, {}, never, ["*"], false, never>;
}
