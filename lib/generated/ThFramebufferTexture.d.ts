import { Type } from '@angular/core';
import { FramebufferTexture, MagnificationTextureFilter, MinificationTextureFilter } from 'three';
import { ThTexture } from './ThTexture';
import * as i0 from "@angular/core";
export declare class ThFramebufferTexture<T extends FramebufferTexture = FramebufferTexture, TARGS = [width: number, height: number]> extends ThTexture<T, TARGS> {
    getType(): Type<FramebufferTexture>;
    get isFramebufferTexture(): true | undefined;
    set magFilter(value: MagnificationTextureFilter);
    get magFilter(): MagnificationTextureFilter | undefined;
    set minFilter(value: MinificationTextureFilter);
    get minFilter(): MinificationTextureFilter | undefined;
    set generateMipmaps(value: boolean);
    get generateMipmaps(): boolean | undefined;
    static ɵfac: i0.ɵɵFactoryDeclaration<ThFramebufferTexture<any, any>, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ThFramebufferTexture<any, any>, "th-framebufferTexture", never, { "magFilter": { "alias": "magFilter"; "required": false; }; "minFilter": { "alias": "minFilter"; "required": false; }; "generateMipmaps": { "alias": "generateMipmaps"; "required": false; }; }, {}, never, ["*"], false, never>;
}
