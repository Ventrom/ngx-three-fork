import { Type } from '@angular/core';
import { LightProbe, LightShadow, SphericalHarmonics3, Vector3 } from 'three';
import { ThLight } from './ThLight';
import * as i0 from "@angular/core";
export declare class ThLightProbe<T extends LightProbe = LightProbe, TARGS = [sh?: SphericalHarmonics3, intensity?: number]> extends ThLight<LightShadow | undefined, T, TARGS> {
    getType(): Type<LightProbe>;
    get isLightProbe(): true | undefined;
    set sh(value: SphericalHarmonics3 | [coefficients: Vector3[]]);
    get sh(): SphericalHarmonics3 | undefined;
    static ɵfac: i0.ɵɵFactoryDeclaration<ThLightProbe<any, any>, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ThLightProbe<any, any>, "th-lightProbe", never, { "sh": { "alias": "sh"; "required": false; }; }, {}, never, ["*"], false, never>;
}
