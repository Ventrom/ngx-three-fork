import { Type } from '@angular/core';
import { DataArrayTexture, MagnificationTextureFilter, MinificationTextureFilter } from 'three';
import { ThTexture } from './ThTexture';
import { Texture3DImageData } from 'three/src/textures/types';
import * as i0 from "@angular/core";
export declare class ThDataArrayTexture<T extends DataArrayTexture = DataArrayTexture, TARGS = [data?: BufferSource | null, width?: number, height?: number, depth?: number]> extends ThTexture<T, TARGS> {
    getType(): Type<DataArrayTexture>;
    get isDataArrayTexture(): true | undefined;
    get image(): Texture3DImageData | undefined;
    set image(value: Texture3DImageData);
    set magFilter(value: MagnificationTextureFilter);
    get magFilter(): MagnificationTextureFilter | undefined;
    set minFilter(value: MinificationTextureFilter);
    get minFilter(): MinificationTextureFilter | undefined;
    set wrapR(value: boolean);
    get wrapR(): boolean | undefined;
    set generateMipmaps(value: boolean);
    get generateMipmaps(): boolean | undefined;
    set flipY(value: boolean);
    get flipY(): boolean | undefined;
    set unpackAlignment(value: number);
    get unpackAlignment(): number | undefined;
    set layerUpdates(value: Set<number>);
    get layerUpdates(): Set<number> | undefined;
    static ɵfac: i0.ɵɵFactoryDeclaration<ThDataArrayTexture<any, any>, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ThDataArrayTexture<any, any>, "th-dataArrayTexture", never, { "image": { "alias": "image"; "required": false; }; "magFilter": { "alias": "magFilter"; "required": false; }; "minFilter": { "alias": "minFilter"; "required": false; }; "wrapR": { "alias": "wrapR"; "required": false; }; "generateMipmaps": { "alias": "generateMipmaps"; "required": false; }; "flipY": { "alias": "flipY"; "required": false; }; "unpackAlignment": { "alias": "unpackAlignment"; "required": false; }; "layerUpdates": { "alias": "layerUpdates"; "required": false; }; }, {}, never, ["*"], false, never>;
}
