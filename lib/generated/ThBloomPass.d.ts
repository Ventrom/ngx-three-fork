import { Type } from '@angular/core';
import { ShaderMaterial, WebGLRenderTarget } from 'three';
import { BloomPass } from 'three/examples/jsm/postprocessing/BloomPass.js';
import { FullScreenQuad } from 'three/examples/jsm/postprocessing/Pass.js';
import { ThPass } from './ThPass';
import * as i0 from "@angular/core";
export declare class ThBloomPass<T extends BloomPass = BloomPass, TARGS = [strength?: number, kernelSize?: number, sigma?: number]> extends ThPass<T, TARGS> {
    getType(): Type<BloomPass>;
    set renderTargetX(value: WebGLRenderTarget);
    get renderTargetX(): WebGLRenderTarget | undefined;
    set renderTargetY(value: WebGLRenderTarget);
    get renderTargetY(): WebGLRenderTarget | undefined;
    set copyUniforms(value: object);
    get copyUniforms(): object | undefined;
    set materialCopy(value: ShaderMaterial);
    get materialCopy(): ShaderMaterial | undefined;
    set convolutionUniforms(value: object);
    get convolutionUniforms(): object | undefined;
    set materialConvolution(value: ShaderMaterial);
    get materialConvolution(): ShaderMaterial | undefined;
    set fsQuad(value: FullScreenQuad);
    get fsQuad(): FullScreenQuad | undefined;
    static ɵfac: i0.ɵɵFactoryDeclaration<ThBloomPass<any, any>, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ThBloomPass<any, any>, "th-bloomPass", never, { "renderTargetX": { "alias": "renderTargetX"; "required": false; }; "renderTargetY": { "alias": "renderTargetY"; "required": false; }; "copyUniforms": { "alias": "copyUniforms"; "required": false; }; "materialCopy": { "alias": "materialCopy"; "required": false; }; "convolutionUniforms": { "alias": "convolutionUniforms"; "required": false; }; "materialConvolution": { "alias": "materialConvolution"; "required": false; }; "fsQuad": { "alias": "fsQuad"; "required": false; }; }, {}, never, ["*"], false, never>;
}
