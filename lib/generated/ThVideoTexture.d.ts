import { Type } from '@angular/core';
import { MagnificationTextureFilter, Mapping, MinificationTextureFilter, PixelFormat, TextureDataType, VideoTexture, Wrapping } from 'three';
import { ThTexture } from './ThTexture';
import * as i0 from "@angular/core";
export declare class ThVideoTexture<T extends VideoTexture = VideoTexture, TARGS = [
    video: HTMLVideoElement,
    mapping?: Mapping,
    wrapS?: Wrapping,
    wrapT?: Wrapping,
    magFilter?: MagnificationTextureFilter,
    minFilter?: MinificationTextureFilter,
    format?: PixelFormat,
    type?: TextureDataType,
    anisotropy?: number
]> extends ThTexture<T, TARGS> {
    getType(): Type<VideoTexture>;
    get isVideoTexture(): true | undefined;
    set magFilter(value: MagnificationTextureFilter);
    get magFilter(): MagnificationTextureFilter | undefined;
    set minFilter(value: MinificationTextureFilter);
    get minFilter(): MinificationTextureFilter | undefined;
    set generateMipmaps(value: boolean);
    get generateMipmaps(): boolean | undefined;
    set needsUpdate(value: boolean);
    static ɵfac: i0.ɵɵFactoryDeclaration<ThVideoTexture<any, any>, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ThVideoTexture<any, any>, "th-videoTexture", never, { "magFilter": { "alias": "magFilter"; "required": false; }; "minFilter": { "alias": "minFilter"; "required": false; }; "generateMipmaps": { "alias": "generateMipmaps"; "required": false; }; "needsUpdate": { "alias": "needsUpdate"; "required": false; }; }, {}, never, ["*"], false, never>;
}
