import { Type } from '@angular/core';
import { Data3DTexture, MagnificationTextureFilter, MinificationTextureFilter, Wrapping } from 'three';
import { ThTexture } from './ThTexture';
import { Texture3DImageData } from 'three/src/textures/types';
import * as i0 from "@angular/core";
export declare class ThData3DTexture<T extends Data3DTexture = Data3DTexture, TARGS = [data?: BufferSource | null, width?: number, height?: number, depth?: number]> extends ThTexture<T, TARGS> {
    getType(): Type<Data3DTexture>;
    get isData3DTexture(): true | undefined;
    get image(): Texture3DImageData | undefined;
    set image(value: Texture3DImageData);
    set magFilter(value: MagnificationTextureFilter);
    get magFilter(): MagnificationTextureFilter | undefined;
    set minFilter(value: MinificationTextureFilter);
    get minFilter(): MinificationTextureFilter | undefined;
    set wrapR(value: Wrapping);
    get wrapR(): Wrapping | undefined;
    set flipY(value: boolean);
    get flipY(): boolean | undefined;
    set generateMipmaps(value: boolean);
    get generateMipmaps(): boolean | undefined;
    set unpackAlignment(value: number);
    get unpackAlignment(): number | undefined;
    static ɵfac: i0.ɵɵFactoryDeclaration<ThData3DTexture<any, any>, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ThData3DTexture<any, any>, "th-data3DTexture", never, { "image": { "alias": "image"; "required": false; }; "magFilter": { "alias": "magFilter"; "required": false; }; "minFilter": { "alias": "minFilter"; "required": false; }; "wrapR": { "alias": "wrapR"; "required": false; }; "flipY": { "alias": "flipY"; "required": false; }; "generateMipmaps": { "alias": "generateMipmaps"; "required": false; }; "unpackAlignment": { "alias": "unpackAlignment"; "required": false; }; }, {}, never, ["*"], false, never>;
}
