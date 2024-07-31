import { Color, ColorRepresentation, Light, LightShadow, Object3DEventMap } from 'three';
import { ThObject3D } from './ThObject3D';
import * as i0 from "@angular/core";
export declare abstract class ThLight<TShadowSupport extends LightShadow | undefined = LightShadow | undefined, T extends Light<TShadowSupport> = Light<TShadowSupport>, TARGS = [color?: ColorRepresentation, intensity?: number]> extends ThObject3D<Object3DEventMap, T, TARGS> {
    get isLight(): true | undefined;
    get type(): (string | 'Light') | undefined;
    set color(value: Color | [
        ...args: [color: ColorRepresentation] | [r: number, g: number, b: number]
    ]);
    get color(): Color | undefined;
    set intensity(value: number);
    get intensity(): number | undefined;
    set shadow(value: TShadowSupport);
    get shadow(): TShadowSupport | undefined;
    static ɵfac: i0.ɵɵFactoryDeclaration<ThLight<any, any, any>, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ThLight<any, any, any>, "th-light", never, { "color": { "alias": "color"; "required": false; }; "intensity": { "alias": "intensity"; "required": false; }; "shadow": { "alias": "shadow"; "required": false; }; }, {}, never, ["*"], false, never>;
}
