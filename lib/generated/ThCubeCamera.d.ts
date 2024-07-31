import { Type } from '@angular/core';
import { CoordinateSystem, CubeCamera, Object3DEventMap, WebGLCubeRenderTarget } from 'three';
import { ThObject3D } from './ThObject3D';
import * as i0 from "@angular/core";
export declare class ThCubeCamera<T extends CubeCamera = CubeCamera, TARGS = [near: number, far: number, renderTarget: WebGLCubeRenderTarget]> extends ThObject3D<Object3DEventMap, T, TARGS> {
    getType(): Type<CubeCamera>;
    get type(): (string | 'CubeCamera') | undefined;
    set renderTarget(value: WebGLCubeRenderTarget);
    get renderTarget(): WebGLCubeRenderTarget | undefined;
    set coordinateSystem(value: CoordinateSystem);
    get coordinateSystem(): CoordinateSystem | undefined;
    set activeMipmapLevel(value: number);
    get activeMipmapLevel(): number | undefined;
    static ɵfac: i0.ɵɵFactoryDeclaration<ThCubeCamera<any, any>, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ThCubeCamera<any, any>, "th-cubeCamera", never, { "renderTarget": { "alias": "renderTarget"; "required": false; }; "coordinateSystem": { "alias": "coordinateSystem"; "required": false; }; "activeMipmapLevel": { "alias": "activeMipmapLevel"; "required": false; }; }, {}, never, ["*"], false, never>;
}
