import { Type } from '@angular/core';
import { GLSLVersion, IUniform, ShaderMaterial, ShaderMaterialParameters, UniformsGroup } from 'three';
import { ThMaterial } from './ThMaterial';
import * as i0 from "@angular/core";
export declare class ThShaderMaterial<T extends ShaderMaterial = ShaderMaterial, TARGS = ShaderMaterialParameters> extends ThMaterial<T, TARGS> {
    getType(): Type<ShaderMaterial>;
    get isShaderMaterial(): true | undefined;
    set type(value: string);
    get type(): string | undefined;
    set defines(value: {
        [key: string]: any;
    });
    get defines(): {
        [key: string]: any;
    } | undefined;
    set uniforms(value: {
        [uniform: string]: IUniform;
    });
    get uniforms(): {
        [uniform: string]: IUniform;
    } | undefined;
    set uniformsGroups(value: UniformsGroup[]);
    get uniformsGroups(): UniformsGroup[] | undefined;
    set vertexShader(value: string);
    get vertexShader(): string | undefined;
    set fragmentShader(value: string);
    get fragmentShader(): string | undefined;
    set linewidth(value: number);
    get linewidth(): number | undefined;
    set wireframe(value: boolean);
    get wireframe(): boolean | undefined;
    set wireframeLinewidth(value: number);
    get wireframeLinewidth(): number | undefined;
    set fog(value: boolean);
    get fog(): boolean | undefined;
    set lights(value: boolean);
    get lights(): boolean | undefined;
    set clipping(value: boolean);
    get clipping(): boolean | undefined;
    set extensions(value: {
        clipCullDistance: boolean;
        multiDraw: boolean;
    });
    get extensions(): {
        clipCullDistance: boolean;
        multiDraw: boolean;
    } | undefined;
    set defaultAttributeValues(value: any);
    get defaultAttributeValues(): any | undefined;
    set index0AttributeName(value: string | undefined);
    get index0AttributeName(): (string | undefined) | undefined;
    set uniformsNeedUpdate(value: boolean);
    get uniformsNeedUpdate(): boolean | undefined;
    set glslVersion(value: GLSLVersion | null);
    get glslVersion(): (GLSLVersion | null) | undefined;
    static ɵfac: i0.ɵɵFactoryDeclaration<ThShaderMaterial<any, any>, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ThShaderMaterial<any, any>, "th-shaderMaterial", never, { "type": { "alias": "type"; "required": false; }; "defines": { "alias": "defines"; "required": false; }; "uniforms": { "alias": "uniforms"; "required": false; }; "uniformsGroups": { "alias": "uniformsGroups"; "required": false; }; "vertexShader": { "alias": "vertexShader"; "required": false; }; "fragmentShader": { "alias": "fragmentShader"; "required": false; }; "linewidth": { "alias": "linewidth"; "required": false; }; "wireframe": { "alias": "wireframe"; "required": false; }; "wireframeLinewidth": { "alias": "wireframeLinewidth"; "required": false; }; "fog": { "alias": "fog"; "required": false; }; "lights": { "alias": "lights"; "required": false; }; "clipping": { "alias": "clipping"; "required": false; }; "extensions": { "alias": "extensions"; "required": false; }; "defaultAttributeValues": { "alias": "defaultAttributeValues"; "required": false; }; "index0AttributeName": { "alias": "index0AttributeName"; "required": false; }; "uniformsNeedUpdate": { "alias": "uniformsNeedUpdate"; "required": false; }; "glslVersion": { "alias": "glslVersion"; "required": false; }; }, {}, never, ["*"], false, never>;
}
