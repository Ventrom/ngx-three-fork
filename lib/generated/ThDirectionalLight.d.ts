import { Type } from '@angular/core';
import { ColorRepresentation, DirectionalLight, DirectionalLightShadow, Object3D, Vector3 } from 'three';
import { ThLight } from './ThLight';
import * as i0 from "@angular/core";
export declare class ThDirectionalLight<T extends DirectionalLight = DirectionalLight, TARGS = [color?: ColorRepresentation, intensity?: number]> extends ThLight<DirectionalLightShadow, T, TARGS> {
    getType(): Type<DirectionalLight>;
    get isDirectionalLight(): true | undefined;
    get type(): (string | 'DirectionalLight') | undefined;
    set castShadow(value: boolean);
    get castShadow(): boolean | undefined;
    set position(value: Vector3 | [x: number, y: number, z: number]);
    get position(): Vector3 | undefined;
    set shadow(value: DirectionalLightShadow);
    get shadow(): DirectionalLightShadow | undefined;
    set target(value: Object3D);
    get target(): Object3D | undefined;
    static ɵfac: i0.ɵɵFactoryDeclaration<ThDirectionalLight<any, any>, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ThDirectionalLight<any, any>, "th-directionalLight", never, { "castShadow": { "alias": "castShadow"; "required": false; }; "position": { "alias": "position"; "required": false; }; "shadow": { "alias": "shadow"; "required": false; }; "target": { "alias": "target"; "required": false; }; }, {}, never, ["*"], false, never>;
}
