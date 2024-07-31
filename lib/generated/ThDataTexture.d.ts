import { Type } from '@angular/core';
import { ColorSpace, DataTexture, MagnificationTextureFilter, Mapping, MinificationTextureFilter, PixelFormat, TextureDataType, Wrapping } from 'three';
import { ThTexture } from './ThTexture';
import { TextureImageData } from 'three/src/textures/types';
import * as i0 from "@angular/core";
export declare class ThDataTexture<T extends DataTexture = DataTexture, TARGS = [
    data?: BufferSource | null,
    width?: number,
    height?: number,
    format?: PixelFormat,
    type?: TextureDataType,
    mapping?: Mapping,
    wrapS?: Wrapping,
    wrapT?: Wrapping,
    magFilter?: MagnificationTextureFilter,
    minFilter?: MinificationTextureFilter,
    anisotropy?: number,
    colorSpace?: ColorSpace
]> extends ThTexture<T, TARGS> {
    getType(): Type<DataTexture>;
    get isDataTexture(): true | undefined;
    get image(): TextureImageData | undefined;
    set image(value: TextureImageData);
    set magFilter(value: MagnificationTextureFilter);
    get magFilter(): MagnificationTextureFilter | undefined;
    set minFilter(value: MinificationTextureFilter);
    get minFilter(): MinificationTextureFilter | undefined;
    set flipY(value: boolean);
    get flipY(): boolean | undefined;
    set generateMipmaps(value: boolean);
    get generateMipmaps(): boolean | undefined;
    set unpackAlignment(value: number);
    get unpackAlignment(): number | undefined;
    static ɵfac: i0.ɵɵFactoryDeclaration<ThDataTexture<any, any>, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ThDataTexture<any, any>, "th-dataTexture", never, { "image": { "alias": "image"; "required": false; }; "magFilter": { "alias": "magFilter"; "required": false; }; "minFilter": { "alias": "minFilter"; "required": false; }; "flipY": { "alias": "flipY"; "required": false; }; "generateMipmaps": { "alias": "generateMipmaps"; "required": false; }; "unpackAlignment": { "alias": "unpackAlignment"; "required": false; }; }, {}, never, ["*"], false, never>;
}
