import { Type } from '@angular/core';
import { DepthTexture, DepthTexturePixelFormat, MagnificationTextureFilter, Mapping, MinificationTextureFilter, TextureComparisonFunction, TextureDataType, Wrapping } from 'three';
import { ThTexture } from './ThTexture';
import * as i0 from "@angular/core";
export declare class ThDepthTexture<T extends DepthTexture = DepthTexture, TARGS = [
    width: number,
    height: number,
    type?: TextureDataType,
    mapping?: Mapping,
    wrapS?: Wrapping,
    wrapT?: Wrapping,
    magFilter?: MagnificationTextureFilter,
    minFilter?: MinificationTextureFilter,
    anisotropy?: number,
    format?: DepthTexturePixelFormat
]> extends ThTexture<T, TARGS> {
    getType(): Type<DepthTexture>;
    get isDepthTexture(): true | undefined;
    get image(): {
        width: number;
        height: number;
    } | undefined;
    set image(value: {
        width: number;
        height: number;
    });
    set flipY(value: boolean);
    get flipY(): boolean | undefined;
    set magFilter(value: MagnificationTextureFilter);
    get magFilter(): MagnificationTextureFilter | undefined;
    set minFilter(value: MinificationTextureFilter);
    get minFilter(): MinificationTextureFilter | undefined;
    set generateMipmaps(value: boolean);
    get generateMipmaps(): boolean | undefined;
    set format(value: DepthTexturePixelFormat);
    get format(): DepthTexturePixelFormat | undefined;
    set type(value: TextureDataType);
    get type(): TextureDataType | undefined;
    set compareFunction(value: TextureComparisonFunction | null);
    get compareFunction(): (TextureComparisonFunction | null) | undefined;
    static ɵfac: i0.ɵɵFactoryDeclaration<ThDepthTexture<any, any>, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ThDepthTexture<any, any>, "th-depthTexture", never, { "image": { "alias": "image"; "required": false; }; "flipY": { "alias": "flipY"; "required": false; }; "magFilter": { "alias": "magFilter"; "required": false; }; "minFilter": { "alias": "minFilter"; "required": false; }; "generateMipmaps": { "alias": "generateMipmaps"; "required": false; }; "format": { "alias": "format"; "required": false; }; "type": { "alias": "type"; "required": false; }; "compareFunction": { "alias": "compareFunction"; "required": false; }; }, {}, never, ["*"], false, never>;
}
