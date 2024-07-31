import { Type } from '@angular/core';
import { AnyMapping, AnyPixelFormat, ColorSpace, MagnificationTextureFilter, Mapping, Matrix3, MinificationTextureFilter, OffscreenCanvas, PixelFormat, PixelFormatGPU, Source, Texture, TextureDataType, Vector2, Wrapping } from 'three';
import { ThTextureBase } from '../ThTextureBase';
import * as i0 from "@angular/core";
export declare class ThTexture<T extends Texture = Texture, TARGS = [
    image?: TexImageSource | OffscreenCanvas,
    mapping?: Mapping,
    wrapS?: Wrapping,
    wrapT?: Wrapping,
    magFilter?: MagnificationTextureFilter,
    minFilter?: MinificationTextureFilter,
    format?: PixelFormat,
    type?: TextureDataType,
    anisotropy?: number,
    colorSpace?: ColorSpace
] | [
    image: TexImageSource | OffscreenCanvas,
    mapping: Mapping,
    wrapS: Wrapping,
    wrapT: Wrapping,
    magFilter: MagnificationTextureFilter,
    minFilter: MinificationTextureFilter,
    format: PixelFormat,
    type: TextureDataType,
    anisotropy: number
]> extends ThTextureBase<T, TARGS> {
    getType(): Type<Texture>;
    get isTexture(): true | undefined;
    get id(): number | undefined;
    set uuid(value: string);
    get uuid(): string | undefined;
    set name(value: string);
    get name(): string | undefined;
    set source(value: Source);
    get source(): Source | undefined;
    get image(): any | undefined;
    set image(value: any);
    set mipmaps(value: any[]);
    get mipmaps(): any[] | undefined;
    set mapping(value: AnyMapping);
    get mapping(): AnyMapping | undefined;
    set channel(value: number);
    get channel(): number | undefined;
    set wrapS(value: Wrapping);
    get wrapS(): Wrapping | undefined;
    set wrapT(value: Wrapping);
    get wrapT(): Wrapping | undefined;
    set magFilter(value: MagnificationTextureFilter);
    get magFilter(): MagnificationTextureFilter | undefined;
    set minFilter(value: MinificationTextureFilter);
    get minFilter(): MinificationTextureFilter | undefined;
    set anisotropy(value: number);
    get anisotropy(): number | undefined;
    set format(value: AnyPixelFormat);
    get format(): AnyPixelFormat | undefined;
    set type(value: TextureDataType);
    get type(): TextureDataType | undefined;
    set internalFormat(value: PixelFormatGPU | null);
    get internalFormat(): (PixelFormatGPU | null) | undefined;
    set matrix(value: Matrix3 | [
        n11: number,
        n12: number,
        n13: number,
        n21: number,
        n22: number,
        n23: number,
        n31: number,
        n32: number,
        n33: number
    ]);
    get matrix(): Matrix3 | undefined;
    set matrixAutoUpdate(value: boolean);
    get matrixAutoUpdate(): boolean | undefined;
    set offset(value: Vector2 | [x: number, y: number]);
    get offset(): Vector2 | undefined;
    set repeat(value: Vector2 | [x: number, y: number]);
    get repeat(): Vector2 | undefined;
    set center(value: Vector2 | [x: number, y: number]);
    get center(): Vector2 | undefined;
    set rotation(value: number);
    get rotation(): number | undefined;
    set generateMipmaps(value: boolean);
    get generateMipmaps(): boolean | undefined;
    set premultiplyAlpha(value: boolean);
    get premultiplyAlpha(): boolean | undefined;
    set flipY(value: boolean);
    get flipY(): boolean | undefined;
    set unpackAlignment(value: number);
    get unpackAlignment(): number | undefined;
    set colorSpace(value: ColorSpace);
    get colorSpace(): ColorSpace | undefined;
    set isRenderTargetTexture(value: boolean);
    get isRenderTargetTexture(): boolean | undefined;
    set userData(value: Record<string, any>);
    get userData(): Record<string, any> | undefined;
    set version(value: number);
    get version(): number | undefined;
    set pmremVersion(value: number);
    get pmremVersion(): number | undefined;
    set needsUpdate(value: boolean);
    set needsPMREMUpdate(value: boolean);
    static readonly DEFAULT_ANISOTROPY: number;
    static readonly DEFAULT_IMAGE: any;
    static readonly DEFAULT_MAPPING: Mapping;
    static ɵfac: i0.ɵɵFactoryDeclaration<ThTexture<any, any>, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ThTexture<any, any>, "th-texture", never, { "uuid": { "alias": "uuid"; "required": false; }; "name": { "alias": "name"; "required": false; }; "source": { "alias": "source"; "required": false; }; "image": { "alias": "image"; "required": false; }; "mipmaps": { "alias": "mipmaps"; "required": false; }; "mapping": { "alias": "mapping"; "required": false; }; "channel": { "alias": "channel"; "required": false; }; "wrapS": { "alias": "wrapS"; "required": false; }; "wrapT": { "alias": "wrapT"; "required": false; }; "magFilter": { "alias": "magFilter"; "required": false; }; "minFilter": { "alias": "minFilter"; "required": false; }; "anisotropy": { "alias": "anisotropy"; "required": false; }; "format": { "alias": "format"; "required": false; }; "type": { "alias": "type"; "required": false; }; "internalFormat": { "alias": "internalFormat"; "required": false; }; "matrix": { "alias": "matrix"; "required": false; }; "matrixAutoUpdate": { "alias": "matrixAutoUpdate"; "required": false; }; "offset": { "alias": "offset"; "required": false; }; "repeat": { "alias": "repeat"; "required": false; }; "center": { "alias": "center"; "required": false; }; "rotation": { "alias": "rotation"; "required": false; }; "generateMipmaps": { "alias": "generateMipmaps"; "required": false; }; "premultiplyAlpha": { "alias": "premultiplyAlpha"; "required": false; }; "flipY": { "alias": "flipY"; "required": false; }; "unpackAlignment": { "alias": "unpackAlignment"; "required": false; }; "colorSpace": { "alias": "colorSpace"; "required": false; }; "isRenderTargetTexture": { "alias": "isRenderTargetTexture"; "required": false; }; "userData": { "alias": "userData"; "required": false; }; "version": { "alias": "version"; "required": false; }; "pmremVersion": { "alias": "pmremVersion"; "required": false; }; "needsUpdate": { "alias": "needsUpdate"; "required": false; }; "needsPMREMUpdate": { "alias": "needsPMREMUpdate"; "required": false; }; }, {}, never, ["*"], false, never>;
}
