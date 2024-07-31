import { Type } from '@angular/core';
import { ColorRepresentation, PointLight, PointLightShadow } from 'three';
import { ThLight } from './ThLight';
import * as i0 from "@angular/core";
export declare class ThPointLight<T extends PointLight = PointLight, TARGS = [
    color?: ColorRepresentation,
    intensity?: number,
    distance?: number,
    decay?: number
]> extends ThLight<PointLightShadow, T, TARGS> {
    getType(): Type<PointLight>;
    get isPointLight(): true | undefined;
    set type(value: string);
    get type(): string | undefined;
    set intensity(value: number);
    get intensity(): number | undefined;
    set distance(value: number);
    get distance(): number | undefined;
    set castShadow(value: boolean);
    get castShadow(): boolean | undefined;
    set decay(value: number);
    get decay(): number | undefined;
    set shadow(value: PointLightShadow);
    get shadow(): PointLightShadow | undefined;
    set power(value: number);
    get power(): number | undefined;
    static ɵfac: i0.ɵɵFactoryDeclaration<ThPointLight<any, any>, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ThPointLight<any, any>, "th-pointLight", never, { "type": { "alias": "type"; "required": false; }; "intensity": { "alias": "intensity"; "required": false; }; "distance": { "alias": "distance"; "required": false; }; "castShadow": { "alias": "castShadow"; "required": false; }; "decay": { "alias": "decay"; "required": false; }; "shadow": { "alias": "shadow"; "required": false; }; "power": { "alias": "power"; "required": false; }; }, {}, never, ["*"], false, never>;
}
