import { Type } from '@angular/core';
import { CanvasTexture, MagnificationTextureFilter, Mapping, MinificationTextureFilter, OffscreenCanvas, PixelFormat, TextureDataType, Wrapping } from 'three';
import { ThTexture } from './ThTexture';
import * as i0 from "@angular/core";
export declare class ThCanvasTexture<T extends CanvasTexture = CanvasTexture, TARGS = [
    canvas: TexImageSource | OffscreenCanvas,
    mapping?: Mapping,
    wrapS?: Wrapping,
    wrapT?: Wrapping,
    magFilter?: MagnificationTextureFilter,
    minFilter?: MinificationTextureFilter,
    format?: PixelFormat,
    type?: TextureDataType,
    anisotropy?: number
]> extends ThTexture<T, TARGS> {
    getType(): Type<CanvasTexture>;
    get isCanvasTexture(): true | undefined;
    static ɵfac: i0.ɵɵFactoryDeclaration<ThCanvasTexture<any, any>, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ThCanvasTexture<any, any>, "th-canvasTexture", never, {}, {}, never, ["*"], false, never>;
}
