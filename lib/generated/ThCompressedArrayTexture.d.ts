import { Type } from '@angular/core';
import { CompressedArrayTexture, CompressedPixelFormat, TextureDataType, Wrapping } from 'three';
import { ThCompressedTexture } from './ThCompressedTexture';
import * as i0 from "@angular/core";
export declare class ThCompressedArrayTexture<T extends CompressedArrayTexture = CompressedArrayTexture, TARGS = [
    mipmaps: ImageData[],
    width: number,
    height: number,
    depth: number,
    format: CompressedPixelFormat,
    type?: TextureDataType
]> extends ThCompressedTexture<T, TARGS> {
    getType(): Type<CompressedArrayTexture>;
    get isCompressedArrayTexture(): true | undefined;
    get image(): {
        width: number;
        height: number;
        depth: number;
    } | undefined;
    set image(value: {
        width: number;
        height: number;
        depth: number;
    });
    set wrapR(value: Wrapping);
    get wrapR(): Wrapping | undefined;
    set layerUpdates(value: Set<number>);
    get layerUpdates(): Set<number> | undefined;
    static ɵfac: i0.ɵɵFactoryDeclaration<ThCompressedArrayTexture<any, any>, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ThCompressedArrayTexture<any, any>, "th-compressedArrayTexture", never, { "image": { "alias": "image"; "required": false; }; "wrapR": { "alias": "wrapR"; "required": false; }; "layerUpdates": { "alias": "layerUpdates"; "required": false; }; }, {}, never, ["*"], false, never>;
}
