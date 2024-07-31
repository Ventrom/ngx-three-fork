import { Type } from '@angular/core';
import { Camera, Color, ColorRepresentation, Material, Scene } from 'three';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { ThPass } from './ThPass';
import * as i0 from "@angular/core";
export declare class ThRenderPassGen<T extends RenderPass = RenderPass, TARGS = [
    scene: Scene,
    camera: Camera,
    overrideMaterial?: Material | null,
    clearColor?: Color | null,
    clearAlpha?: number | null
]> extends ThPass<T, TARGS> {
    getType(): Type<RenderPass>;
    set scene(value: Scene);
    get scene(): Scene | undefined;
    set camera(value: Camera);
    get camera(): Camera | undefined;
    set overrideMaterial(value: Material | null);
    get overrideMaterial(): (Material | null) | undefined;
    set clearColor(value: Color | null | [
        ...args: [color: ColorRepresentation] | [r: number, g: number, b: number]
    ]);
    get clearColor(): (Color | null) | undefined;
    set clearAlpha(value: number | null);
    get clearAlpha(): (number | null) | undefined;
    set clearDepth(value: boolean);
    get clearDepth(): boolean | undefined;
    static ɵfac: i0.ɵɵFactoryDeclaration<ThRenderPassGen<any, any>, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ThRenderPassGen<any, any>, "th-renderPassGen", never, { "scene": { "alias": "scene"; "required": false; }; "camera": { "alias": "camera"; "required": false; }; "overrideMaterial": { "alias": "overrideMaterial"; "required": false; }; "clearColor": { "alias": "clearColor"; "required": false; }; "clearAlpha": { "alias": "clearAlpha"; "required": false; }; "clearDepth": { "alias": "clearDepth"; "required": false; }; }, {}, never, ["*"], false, never>;
}
