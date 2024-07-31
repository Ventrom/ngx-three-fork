import { Type } from '@angular/core';
import { ColorRepresentation, Object3D, SpotLight, SpotLightShadow, Texture, Vector3 } from 'three';
import { ThLight } from './ThLight';
import * as i0 from "@angular/core";
export declare class ThSpotLight<T extends SpotLight = SpotLight, TARGS = [
    color?: ColorRepresentation,
    intensity?: number,
    distance?: number,
    angle?: number,
    penumbra?: number,
    decay?: number
]> extends ThLight<SpotLightShadow, T, TARGS> {
    getType(): Type<SpotLight>;
    get isSpotLight(): true | undefined;
    get type(): (string | 'SpotLight') | undefined;
    set position(value: Vector3 | [x: number, y: number, z: number]);
    get position(): Vector3 | undefined;
    set target(value: Object3D);
    get target(): Object3D | undefined;
    set castShadow(value: boolean);
    get castShadow(): boolean | undefined;
    set intensity(value: number);
    get intensity(): number | undefined;
    set distance(value: number);
    get distance(): number | undefined;
    set angle(value: number);
    get angle(): number | undefined;
    set decay(value: number);
    get decay(): number | undefined;
    set shadow(value: SpotLightShadow);
    get shadow(): SpotLightShadow | undefined;
    set power(value: number);
    get power(): number | undefined;
    set penumbra(value: number);
    get penumbra(): number | undefined;
    set map(value: Texture | null);
    get map(): (Texture | null) | undefined;
    static ɵfac: i0.ɵɵFactoryDeclaration<ThSpotLight<any, any>, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ThSpotLight<any, any>, "th-spotLight", never, { "position": { "alias": "position"; "required": false; }; "target": { "alias": "target"; "required": false; }; "castShadow": { "alias": "castShadow"; "required": false; }; "intensity": { "alias": "intensity"; "required": false; }; "distance": { "alias": "distance"; "required": false; }; "angle": { "alias": "angle"; "required": false; }; "decay": { "alias": "decay"; "required": false; }; "shadow": { "alias": "shadow"; "required": false; }; "power": { "alias": "power"; "required": false; }; "penumbra": { "alias": "penumbra"; "required": false; }; "map": { "alias": "map"; "required": false; }; }, {}, never, ["*"], false, never>;
}
