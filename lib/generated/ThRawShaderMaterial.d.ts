import { Type } from '@angular/core';
import { RawShaderMaterial, ShaderMaterialParameters } from 'three';
import { ThShaderMaterial } from './ThShaderMaterial';
import * as i0 from "@angular/core";
export declare class ThRawShaderMaterial<T extends RawShaderMaterial = RawShaderMaterial, TARGS = ShaderMaterialParameters> extends ThShaderMaterial<T, TARGS> {
    getType(): Type<RawShaderMaterial>;
    get isRawShaderMaterial(): true | undefined;
    get type(): 'RawShaderMaterial' | undefined;
    static ɵfac: i0.ɵɵFactoryDeclaration<ThRawShaderMaterial<any, any>, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ThRawShaderMaterial<any, any>, "th-rawShaderMaterial", never, {}, {}, never, ["*"], false, never>;
}
