import { Type } from '@angular/core';
import { CompressedCubeTexture, CompressedPixelFormat, TextureDataType } from 'three';
import { ThCompressedTexture } from './ThCompressedTexture';
import * as i0 from "@angular/core";
export declare class ThCompressedCubeTexture<T extends CompressedCubeTexture = CompressedCubeTexture, TARGS = [
    images: Array<{
        width: number;
        height: number;
    }>,
    format?: CompressedPixelFormat,
    type?: TextureDataType
]> extends ThCompressedTexture<T, TARGS> {
    getType(): Type<CompressedCubeTexture>;
    get isCompressedCubeTexture(): true | undefined;
    get isCubeTexture(): true | undefined;
    static ɵfac: i0.ɵɵFactoryDeclaration<ThCompressedCubeTexture<any, any>, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ThCompressedCubeTexture<any, any>, "th-compressedCubeTexture", never, {}, {}, never, ["*"], false, never>;
}
