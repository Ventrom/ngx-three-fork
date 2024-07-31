import { Type } from '@angular/core';
import { ColorSpace, CubeTexture, CubeTextureMapping, MagnificationTextureFilter, MinificationTextureFilter, PixelFormat, TextureDataType, Wrapping } from 'three';
import { ThTexture } from './ThTexture';
import * as i0 from "@angular/core";
export declare class ThCubeTexture<T extends CubeTexture = CubeTexture, TARGS = [
    images?: any[],
    mapping?: CubeTextureMapping,
    wrapS?: Wrapping,
    wrapT?: Wrapping,
    magFilter?: MagnificationTextureFilter,
    minFilter?: MinificationTextureFilter,
    format?: PixelFormat,
    type?: TextureDataType,
    anisotropy?: number,
    colorSpace?: ColorSpace
]> extends ThTexture<T, TARGS> {
    getType(): Type<CubeTexture>;
    get isCubeTexture(): true | undefined;
    get image(): any | undefined;
    set image(value: any);
    get images(): any | undefined;
    set images(value: any);
    set mapping(value: CubeTextureMapping);
    get mapping(): CubeTextureMapping | undefined;
    set flipY(value: boolean);
    get flipY(): boolean | undefined;
    static ɵfac: i0.ɵɵFactoryDeclaration<ThCubeTexture<any, any>, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ThCubeTexture<any, any>, "th-cubeTexture", never, { "image": { "alias": "image"; "required": false; }; "images": { "alias": "images"; "required": false; }; "mapping": { "alias": "mapping"; "required": false; }; "flipY": { "alias": "flipY"; "required": false; }; }, {}, never, ["*"], false, never>;
}
