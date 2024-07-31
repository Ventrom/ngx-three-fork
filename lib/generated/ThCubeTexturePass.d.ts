import { Type } from '@angular/core';
import { CubeTexture, Mesh, PerspectiveCamera, Scene } from 'three';
import { CubeTexturePass } from 'three/examples/jsm/postprocessing/CubeTexturePass.js';
import { ThPass } from './ThPass';
import * as i0 from "@angular/core";
export declare class ThCubeTexturePass<T extends CubeTexturePass = CubeTexturePass, TARGS = [camera: PerspectiveCamera, envMap?: CubeTexture, opacity?: number]> extends ThPass<T, TARGS> {
    getType(): Type<CubeTexturePass>;
    set camera(value: PerspectiveCamera);
    get camera(): PerspectiveCamera | undefined;
    set cubeShader(value: object);
    get cubeShader(): object | undefined;
    set cubeMesh(value: Mesh);
    get cubeMesh(): Mesh | undefined;
    set envMap(value: CubeTexture);
    get envMap(): CubeTexture | undefined;
    set opacity(value: number);
    get opacity(): number | undefined;
    set cubeScene(value: Scene);
    get cubeScene(): Scene | undefined;
    set cubeCamera(value: PerspectiveCamera);
    get cubeCamera(): PerspectiveCamera | undefined;
    static ɵfac: i0.ɵɵFactoryDeclaration<ThCubeTexturePass<any, any>, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ThCubeTexturePass<any, any>, "th-cubeTexturePass", never, { "camera": { "alias": "camera"; "required": false; }; "cubeShader": { "alias": "cubeShader"; "required": false; }; "cubeMesh": { "alias": "cubeMesh"; "required": false; }; "envMap": { "alias": "envMap"; "required": false; }; "opacity": { "alias": "opacity"; "required": false; }; "cubeScene": { "alias": "cubeScene"; "required": false; }; "cubeCamera": { "alias": "cubeCamera"; "required": false; }; }, {}, never, ["*"], false, never>;
}
