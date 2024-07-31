import { Type } from '@angular/core';
import { ColorSpace, CompressedPixelFormat, CompressedTexture, MagnificationTextureFilter, Mapping, MinificationTextureFilter, TextureDataType, Wrapping } from 'three';
import { ThTexture } from './ThTexture';
import * as i0 from "@angular/core";
export declare class ThCompressedTexture<T extends CompressedTexture = CompressedTexture, TARGS = [
    mipmaps: ImageData[],
    width: number,
    height: number,
    format: CompressedPixelFormat,
    type?: TextureDataType,
    mapping?: Mapping,
    wrapS?: Wrapping,
    wrapT?: Wrapping,
    magFilter?: MagnificationTextureFilter,
    minFilter?: MinificationTextureFilter,
    anisotropy?: number,
    colorSpace?: ColorSpace
]> extends ThTexture<T, TARGS> {
    getType(): Type<CompressedTexture>;
    get isCompressedTexture(): true | undefined;
    get image(): {
        width: number;
        height: number;
    } | undefined;
    set image(value: {
        width: number;
        height: number;
    });
    set mipmaps(value: ImageData[]);
    get mipmaps(): ImageData[] | undefined;
    set format(value: CompressedPixelFormat);
    get format(): CompressedPixelFormat | undefined;
    set flipY(value: boolean);
    get flipY(): boolean | undefined;
    set generateMipmaps(value: boolean);
    get generateMipmaps(): boolean | undefined;
    static ɵfac: i0.ɵɵFactoryDeclaration<ThCompressedTexture<any, any>, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ThCompressedTexture<any, any>, "th-compressedTexture", never, { "image": { "alias": "image"; "required": false; }; "mipmaps": { "alias": "mipmaps"; "required": false; }; "format": { "alias": "format"; "required": false; }; "flipY": { "alias": "flipY"; "required": false; }; "generateMipmaps": { "alias": "generateMipmaps"; "required": false; }; }, {}, never, ["*"], false, never>;
}
