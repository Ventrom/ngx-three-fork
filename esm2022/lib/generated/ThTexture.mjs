/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix */
import { ChangeDetectionStrategy, Component, Input, forwardRef, } from '@angular/core';
import { Texture, } from 'three';
import { ThTextureBase } from '../ThTextureBase';
import { applyValue } from '../util';
import * as i0 from "@angular/core";
export class ThTexture extends ThTextureBase {
    getType() {
        return Texture;
    }
    get isTexture() {
        return this._objRef?.isTexture;
    }
    get id() {
        return this._objRef?.id;
    }
    set uuid(value) {
        if (this._objRef) {
            this._objRef.uuid = value;
        }
    }
    get uuid() {
        return this._objRef?.uuid;
    }
    set name(value) {
        if (this._objRef) {
            this._objRef.name = value;
        }
    }
    get name() {
        return this._objRef?.name;
    }
    set source(value) {
        if (this._objRef) {
            this._objRef.source = value;
        }
    }
    get source() {
        return this._objRef?.source;
    }
    get image() {
        return this._objRef?.image;
    }
    set image(value) {
        if (this._objRef) {
            this._objRef.image = value;
        }
    }
    set mipmaps(value) {
        if (this._objRef) {
            this._objRef.mipmaps = value;
        }
    }
    get mipmaps() {
        return this._objRef?.mipmaps;
    }
    set mapping(value) {
        if (this._objRef) {
            this._objRef.mapping = value;
        }
    }
    get mapping() {
        return this._objRef?.mapping;
    }
    set channel(value) {
        if (this._objRef) {
            this._objRef.channel = value;
        }
    }
    get channel() {
        return this._objRef?.channel;
    }
    set wrapS(value) {
        if (this._objRef) {
            this._objRef.wrapS = value;
        }
    }
    get wrapS() {
        return this._objRef?.wrapS;
    }
    set wrapT(value) {
        if (this._objRef) {
            this._objRef.wrapT = value;
        }
    }
    get wrapT() {
        return this._objRef?.wrapT;
    }
    set magFilter(value) {
        if (this._objRef) {
            this._objRef.magFilter = value;
        }
    }
    get magFilter() {
        return this._objRef?.magFilter;
    }
    set minFilter(value) {
        if (this._objRef) {
            this._objRef.minFilter = value;
        }
    }
    get minFilter() {
        return this._objRef?.minFilter;
    }
    set anisotropy(value) {
        if (this._objRef) {
            this._objRef.anisotropy = value;
        }
    }
    get anisotropy() {
        return this._objRef?.anisotropy;
    }
    set format(value) {
        if (this._objRef) {
            this._objRef.format = value;
        }
    }
    get format() {
        return this._objRef?.format;
    }
    set type(value) {
        if (this._objRef) {
            this._objRef.type = value;
        }
    }
    get type() {
        return this._objRef?.type;
    }
    set internalFormat(value) {
        if (this._objRef) {
            this._objRef.internalFormat = value;
        }
    }
    get internalFormat() {
        return this._objRef?.internalFormat;
    }
    set matrix(value) {
        if (this._objRef) {
            this._objRef.matrix = applyValue(this._objRef.matrix, value);
        }
    }
    get matrix() {
        return this._objRef?.matrix;
    }
    set matrixAutoUpdate(value) {
        if (this._objRef) {
            this._objRef.matrixAutoUpdate = value;
        }
    }
    get matrixAutoUpdate() {
        return this._objRef?.matrixAutoUpdate;
    }
    set offset(value) {
        if (this._objRef) {
            this._objRef.offset = applyValue(this._objRef.offset, value);
        }
    }
    get offset() {
        return this._objRef?.offset;
    }
    set repeat(value) {
        if (this._objRef) {
            this._objRef.repeat = applyValue(this._objRef.repeat, value);
        }
    }
    get repeat() {
        return this._objRef?.repeat;
    }
    set center(value) {
        if (this._objRef) {
            this._objRef.center = applyValue(this._objRef.center, value);
        }
    }
    get center() {
        return this._objRef?.center;
    }
    set rotation(value) {
        if (this._objRef) {
            this._objRef.rotation = value;
        }
    }
    get rotation() {
        return this._objRef?.rotation;
    }
    set generateMipmaps(value) {
        if (this._objRef) {
            this._objRef.generateMipmaps = value;
        }
    }
    get generateMipmaps() {
        return this._objRef?.generateMipmaps;
    }
    set premultiplyAlpha(value) {
        if (this._objRef) {
            this._objRef.premultiplyAlpha = value;
        }
    }
    get premultiplyAlpha() {
        return this._objRef?.premultiplyAlpha;
    }
    set flipY(value) {
        if (this._objRef) {
            this._objRef.flipY = value;
        }
    }
    get flipY() {
        return this._objRef?.flipY;
    }
    set unpackAlignment(value) {
        if (this._objRef) {
            this._objRef.unpackAlignment = value;
        }
    }
    get unpackAlignment() {
        return this._objRef?.unpackAlignment;
    }
    set colorSpace(value) {
        if (this._objRef) {
            this._objRef.colorSpace = value;
        }
    }
    get colorSpace() {
        return this._objRef?.colorSpace;
    }
    set isRenderTargetTexture(value) {
        if (this._objRef) {
            this._objRef.isRenderTargetTexture = value;
        }
    }
    get isRenderTargetTexture() {
        return this._objRef?.isRenderTargetTexture;
    }
    set userData(value) {
        if (this._objRef) {
            this._objRef.userData = value;
        }
    }
    get userData() {
        return this._objRef?.userData;
    }
    set version(value) {
        if (this._objRef) {
            this._objRef.version = value;
        }
    }
    get version() {
        return this._objRef?.version;
    }
    set pmremVersion(value) {
        if (this._objRef) {
            this._objRef.pmremVersion = value;
        }
    }
    get pmremVersion() {
        return this._objRef?.pmremVersion;
    }
    set needsUpdate(value) {
        if (this._objRef) {
            this._objRef.needsUpdate = value;
        }
    }
    set needsPMREMUpdate(value) {
        if (this._objRef) {
            this._objRef.needsPMREMUpdate = value;
        }
    }
    static { this.DEFAULT_ANISOTROPY = Texture.DEFAULT_ANISOTROPY; }
    static { this.DEFAULT_IMAGE = Texture.DEFAULT_IMAGE; }
    static { this.DEFAULT_MAPPING = Texture.DEFAULT_MAPPING; }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThTexture, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.1.2", type: ThTexture, selector: "th-texture", inputs: { uuid: "uuid", name: "name", source: "source", image: "image", mipmaps: "mipmaps", mapping: "mapping", channel: "channel", wrapS: "wrapS", wrapT: "wrapT", magFilter: "magFilter", minFilter: "minFilter", anisotropy: "anisotropy", format: "format", type: "type", internalFormat: "internalFormat", matrix: "matrix", matrixAutoUpdate: "matrixAutoUpdate", offset: "offset", repeat: "repeat", center: "center", rotation: "rotation", generateMipmaps: "generateMipmaps", premultiplyAlpha: "premultiplyAlpha", flipY: "flipY", unpackAlignment: "unpackAlignment", colorSpace: "colorSpace", isRenderTargetTexture: "isRenderTargetTexture", userData: "userData", version: "version", pmremVersion: "pmremVersion", needsUpdate: "needsUpdate", needsPMREMUpdate: "needsPMREMUpdate" }, providers: [
            { provide: ThTextureBase, useExisting: forwardRef(() => ThTexture) },
        ], usesInheritance: true, ngImport: i0, template: '<ng-content/>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThTexture, decorators: [{
            type: Component,
            args: [{
                    selector: 'th-texture',
                    template: '<ng-content/>',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    providers: [
                        { provide: ThTextureBase, useExisting: forwardRef(() => ThTexture) },
                    ],
                }]
        }], propDecorators: { uuid: [{
                type: Input
            }], name: [{
                type: Input
            }], source: [{
                type: Input
            }], image: [{
                type: Input
            }], mipmaps: [{
                type: Input
            }], mapping: [{
                type: Input
            }], channel: [{
                type: Input
            }], wrapS: [{
                type: Input
            }], wrapT: [{
                type: Input
            }], magFilter: [{
                type: Input
            }], minFilter: [{
                type: Input
            }], anisotropy: [{
                type: Input
            }], format: [{
                type: Input
            }], type: [{
                type: Input
            }], internalFormat: [{
                type: Input
            }], matrix: [{
                type: Input
            }], matrixAutoUpdate: [{
                type: Input
            }], offset: [{
                type: Input
            }], repeat: [{
                type: Input
            }], center: [{
                type: Input
            }], rotation: [{
                type: Input
            }], generateMipmaps: [{
                type: Input
            }], premultiplyAlpha: [{
                type: Input
            }], flipY: [{
                type: Input
            }], unpackAlignment: [{
                type: Input
            }], colorSpace: [{
                type: Input
            }], isRenderTargetTexture: [{
                type: Input
            }], userData: [{
                type: Input
            }], version: [{
                type: Input
            }], pmremVersion: [{
                type: Input
            }], needsUpdate: [{
                type: Input
            }], needsPMREMUpdate: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGhUZXh0dXJlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LXRocmVlL3NyYy9saWIvZ2VuZXJhdGVkL1RoVGV4dHVyZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSx5REFBeUQ7QUFDekQseUNBQXlDO0FBQ3pDLCtGQUErRjtBQUMvRixPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxLQUFLLEVBRUwsVUFBVSxHQUNYLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFZTCxPQUFPLEdBSVIsTUFBTSxPQUFPLENBQUM7QUFDZixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDakQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLFNBQVMsQ0FBQzs7QUFVckMsTUFBTSxPQUFPLFNBMEJYLFNBQVEsYUFBdUI7SUFDeEIsT0FBTztRQUNaLE9BQU8sT0FBTyxDQUFDO0lBQ2pCLENBQUM7SUFFRCxJQUFXLFNBQVM7UUFDbEIsT0FBTyxJQUFJLENBQUMsT0FBTyxFQUFFLFNBQVMsQ0FBQztJQUNqQyxDQUFDO0lBQ0QsSUFBVyxFQUFFO1FBQ1gsT0FBTyxJQUFJLENBQUMsT0FBTyxFQUFFLEVBQUUsQ0FBQztJQUMxQixDQUFDO0lBQ0QsSUFDVyxJQUFJLENBQUMsS0FBYTtRQUMzQixJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUNqQixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksR0FBRyxLQUFLLENBQUM7UUFDNUIsQ0FBQztJQUNILENBQUM7SUFFRCxJQUFXLElBQUk7UUFDYixPQUFPLElBQUksQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDO0lBQzVCLENBQUM7SUFDRCxJQUNXLElBQUksQ0FBQyxLQUFhO1FBQzNCLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ2pCLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQztR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QkFRSyxnQkFBZ0I7c0JBRDFCLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBAdHlwZXNjcmlwdC1lc2xpbnQvbmFtaW5nLWNvbnZlbnRpb24gKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vLXVuZGVyc2NvcmUtZGFuZ2xlICovXG4vKiBlc2xpbnQtZGlzYWJsZSBAYW5ndWxhci1lc2xpbnQvY29tcG9uZW50LXNlbGVjdG9yLCBAYW5ndWxhci1lc2xpbnQvY29tcG9uZW50LWNsYXNzLXN1ZmZpeCAqL1xuaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENvbXBvbmVudCxcbiAgSW5wdXQsXG4gIFR5cGUsXG4gIGZvcndhcmRSZWYsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgQW55TWFwcGluZyxcbiAgQW55UGl4ZWxGb3JtYXQsXG4gIENvbG9yU3BhY2UsXG4gIE1hZ25pZmljYXRpb25UZXh0dXJlRmlsdGVyLFxuICBNYXBwaW5nLFxuICBNYXRyaXgzLFxuICBNaW5pZmljYXRpb25UZXh0dXJlRmlsdGVyLFxuICBPZmZzY3JlZW5DYW52YXMsXG4gIFBpeGVsRm9ybWF0LFxuICBQaXhlbEZvcm1hdEdQVSxcbiAgU291cmNlLFxuICBUZXh0dXJlLFxuICBUZXh0dXJlRGF0YVR5cGUsXG4gIFZlY3RvcjIsXG4gIFdyYXBwaW5nLFxufSBmcm9tICd0aHJlZSc7XG5pbXBvcnQgeyBUaFRleHR1cmVCYXNlIH0gZnJvbSAnLi4vVGhUZXh0dXJlQmFzZSc7XG5pbXBvcnQgeyBhcHBseVZhbHVlIH0gZnJvbSAnLi4vdXRpbCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3RoLXRleHR1cmUnLFxuICB0ZW1wbGF0ZTogJzxuZy1jb250ZW50Lz4nLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgcHJvdmlkZXJzOiBbXG4gICAgeyBwcm92aWRlOiBUaFRleHR1cmVCYXNlLCB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBUaFRleHR1cmUpIH0sXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIFRoVGV4dHVyZTxcbiAgVCBleHRlbmRzIFRleHR1cmUgPSBUZXh0dXJlLFxuICBUQVJHUyA9XG4gICAgfCBbXG4gICAgICAgIGltYWdlPzogVGV4SW1hZ2VTb3VyY2UgfCBPZmZzY3JlZW5DYW52YXMsXG4gICAgICAgIG1hcHBpbmc/OiBNYXBwaW5nLFxuICAgICAgICB3cmFwUz86IFdyYXBwaW5nLFxuICAgICAgICB3cmFwVD86IFdyYXBwaW5nLFxuICAgICAgICBtYWdGaWx0ZXI/OiBNYWduaWZpY2F0aW9uVGV4dHVyZUZpbHRlcixcbiAgICAgICAgbWluRmlsdGVyPzogTWluaWZpY2F0aW9uVGV4dHVyZUZpbHRlcixcbiAgICAgICAgZm9ybWF0PzogUGl4ZWxGb3JtYXQsXG4gICAgICAgIHR5cGU/OiBUZXh0dXJlRGF0YVR5cGUsXG4gICAgICAgIGFuaXNvdHJvcHk/OiBudW1iZXIsXG4gICAgICAgIGNvbG9yU3BhY2U/OiBDb2xvclNwYWNlLFxuICAgICAgXVxuICAgIHwgW1xuICAgICAgICBpbWFnZTogVGV4SW1hZ2VTb3VyY2UgfCBPZmZzY3JlZW5DYW52YXMsXG4gICAgICAgIG1hcHBpbmc6IE1hcHBpbmcsXG4gICAgICAgIHdyYXBTOiBXcmFwcGluZyxcbiAgICAgICAgd3JhcFQ6IFdyYXBwaW5nLFxuICAgICAgICBtYWdGaWx0ZXI6IE1hZ25pZmljYXRpb25UZXh0dXJlRmlsdGVyLFxuICAgICAgICBtaW5GaWx0ZXI6IE1pbmlmaWNhdGlvblRleHR1cmVGaWx0ZXIsXG4gICAgICAgIGZvcm1hdDogUGl4ZWxGb3JtYXQsXG4gICAgICAgIHR5cGU6IFRleHR1cmVEYXRhVHlwZSxcbiAgICAgICAgYW5pc290cm9weTogbnVtYmVyLFxuICAgICAgXSxcbj4gZXh0ZW5kcyBUaFRleHR1cmVCYXNlPFQsIFRBUkdTPiB7XG4gIHB1YmxpYyBnZXRUeXBlKCk6IFR5cGU8VGV4dHVyZT4ge1xuICAgIHJldHVybiBUZXh0dXJlO1xuICB9XG5cbiAgcHVibGljIGdldCBpc1RleHR1cmUoKTogdHJ1ZSB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX29ialJlZj8uaXNUZXh0dXJlO1xuICB9XG4gIHB1YmxpYyBnZXQgaWQoKTogbnVtYmVyIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fb2JqUmVmPy5pZDtcbiAgfVxuICBASW5wdXQoKVxuICBwdWJsaWMgc2V0IHV1aWQodmFsdWU6IHN0cmluZykge1xuICAgIGlmICh0aGlzLl9vYmpSZWYpIHtcbiAgICAgIHRoaXMuX29ialJlZi51dWlkID0gdmFsdWU7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGdldCB1dWlkKCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX29ialJlZj8udXVpZDtcbiAgfVxuICBASW5wdXQoKVxuICBwdWJsaWMgc2V0IG5hbWUodmFsdWU6IHN0cmluZykge1xuICAgIGlmICh0aGlzLl9vYmpSZWYpIHtcbiAgICAgIHRoaXMuX29ialJlZi5uYW1lID0gdmFsdWU7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGdldCBuYW1lKCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX29ialJlZj8ubmFtZTtcbiAgfVxuICBASW5wdXQoKVxuICBwdWJsaWMgc2V0IHNvdXJjZSh2YWx1ZTogU291cmNlKSB7XG4gICAgaWYgKHRoaXMuX29ialJlZikge1xuICAgICAgdGhpcy5fb2JqUmVmLnNvdXJjZSA9IHZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBnZXQgc291cmNlKCk6IFNvdXJjZSB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX29ialJlZj8uc291cmNlO1xuICB9XG4gIHB1YmxpYyBnZXQgaW1hZ2UoKTogYW55IHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fb2JqUmVmPy5pbWFnZTtcbiAgfVxuICBASW5wdXQoKVxuICBwdWJsaWMgc2V0IGltYWdlKHZhbHVlOiBhbnkpIHtcbiAgICBpZiAodGhpcy5fb2JqUmVmKSB7XG4gICAgICB0aGlzLl9vYmpSZWYuaW1hZ2UgPSB2YWx1ZTtcbiAgICB9XG4gIH1cblxuICBASW5wdXQoKVxuICBwdWJsaWMgc2V0IG1pcG1hcHModmFsdWU6IGFueVtdKSB7XG4gICAgaWYgKHRoaXMuX29ialJlZikge1xuICAgICAgdGhpcy5fb2JqUmVmLm1pcG1hcHMgPSB2YWx1ZTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgZ2V0IG1pcG1hcHMoKTogYW55W10gfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9vYmpSZWY/Lm1pcG1hcHM7XG4gIH1cbiAgQElucHV0KClcbiAgcHVibGljIHNldCBtYXBwaW5nKHZhbHVlOiBBbnlNYXBwaW5nKSB7XG4gICAgaWYgKHRoaXMuX29ialJlZikge1xuICAgICAgdGhpcy5fb2JqUmVmLm1hcHBpbmcgPSB2YWx1ZTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgZ2V0IG1hcHBpbmcoKTogQW55TWFwcGluZyB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX29ialJlZj8ubWFwcGluZztcbiAgfVxuICBASW5wdXQoKVxuICBwdWJsaWMgc2V0IGNoYW5uZWwodmFsdWU6IG51bWJlcikge1xuICAgIGlmICh0aGlzLl9vYmpSZWYpIHtcbiAgICAgIHRoaXMuX29ialJlZi5jaGFubmVsID0gdmFsdWU7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGdldCBjaGFubmVsKCk6IG51bWJlciB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX29ialJlZj8uY2hhbm5lbDtcbiAgfVxuICBASW5wdXQoKVxuICBwdWJsaWMgc2V0IHdyYXBTKHZhbHVlOiBXcmFwcGluZykge1xuICAgIGlmICh0aGlzLl9vYmpSZWYpIHtcbiAgICAgIHRoaXMuX29ialJlZi53cmFwUyA9IHZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBnZXQgd3JhcFMoKTogV3JhcHBpbmcgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9vYmpSZWY/LndyYXBTO1xuICB9XG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzZXQgd3JhcFQodmFsdWU6IFdyYXBwaW5nKSB7XG4gICAgaWYgKHRoaXMuX29ialJlZikge1xuICAgICAgdGhpcy5fb2JqUmVmLndyYXBUID0gdmFsdWU7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGdldCB3cmFwVCgpOiBXcmFwcGluZyB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX29ialJlZj8ud3JhcFQ7XG4gIH1cbiAgQElucHV0KClcbiAgcHVibGljIHNldCBtYWdGaWx0ZXIodmFsdWU6IE1hZ25pZmljYXRpb25UZXh0dXJlRmlsdGVyKSB7XG4gICAgaWYgKHRoaXMuX29ialJlZikge1xuICAgICAgdGhpcy5fb2JqUmVmLm1hZ0ZpbHRlciA9IHZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBnZXQgbWFnRmlsdGVyKCk6IE1hZ25pZmljYXRpb25UZXh0dXJlRmlsdGVyIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fb2JqUmVmPy5tYWdGaWx0ZXI7XG4gIH1cbiAgQElucHV0KClcbiAgcHVibGljIHNldCBtaW5GaWx0ZXIodmFsdWU6IE1pbmlmaWNhdGlvblRleHR1cmVGaWx0ZXIpIHtcbiAgICBpZiAodGhpcy5fb2JqUmVmKSB7XG4gICAgICB0aGlzLl9vYmpSZWYubWluRmlsdGVyID0gdmFsdWU7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGdldCBtaW5GaWx0ZXIoKTogTWluaWZpY2F0aW9uVGV4dHVyZUZpbHRlciB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX29ialJlZj8ubWluRmlsdGVyO1xuICB9XG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzZXQgYW5pc290cm9weSh2YWx1ZTogbnVtYmVyKSB7XG4gICAgaWYgKHRoaXMuX29ialJlZikge1xuICAgICAgdGhpcy5fb2JqUmVmLmFuaXNvdHJvcHkgPSB2YWx1ZTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgZ2V0IGFuaXNvdHJvcHkoKTogbnVtYmVyIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fb2JqUmVmPy5hbmlzb3Ryb3B5O1xuICB9XG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzZXQgZm9ybWF0KHZhbHVlOiBBbnlQaXhlbEZvcm1hdCkge1xuICAgIGlmICh0aGlzLl9vYmpSZWYpIHtcbiAgICAgIHRoaXMuX29ialJlZi5mb3JtYXQgPSB2YWx1ZTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgZ2V0IGZvcm1hdCgpOiBBbnlQaXhlbEZvcm1hdCB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX29ialJlZj8uZm9ybWF0O1xuICB9XG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzZXQgdHlwZSh2YWx1ZTogVGV4dHVyZURhdGFUeXBlKSB7XG4gICAgaWYgKHRoaXMuX29ialJlZikge1xuICAgICAgdGhpcy5fb2JqUmVmLnR5cGUgPSB2YWx1ZTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgZ2V0IHR5cGUoKTogVGV4dHVyZURhdGFUeXBlIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fb2JqUmVmPy50eXBlO1xuICB9XG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzZXQgaW50ZXJuYWxGb3JtYXQodmFsdWU6IFBpeGVsRm9ybWF0R1BVIHwgbnVsbCkge1xuICAgIGlmICh0aGlzLl9vYmpSZWYpIHtcbiAgICAgIHRoaXMuX29ialJlZi5pbnRlcm5hbEZvcm1hdCA9IHZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBnZXQgaW50ZXJuYWxGb3JtYXQoKTogKFBpeGVsRm9ybWF0R1BVIHwgbnVsbCkgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9vYmpSZWY/LmludGVybmFsRm9ybWF0O1xuICB9XG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzZXQgbWF0cml4KFxuICAgIHZhbHVlOlxuICAgICAgfCBNYXRyaXgzXG4gICAgICB8IFtcbiAgICAgICAgICBuMTE6IG51bWJlcixcbiAgICAgICAgICBuMTI6IG51bWJlcixcbiAgICAgICAgICBuMTM6IG51bWJlcixcbiAgICAgICAgICBuMjE6IG51bWJlcixcbiAgICAgICAgICBuMjI6IG51bWJlcixcbiAgICAgICAgICBuMjM6IG51bWJlcixcbiAgICAgICAgICBuMzE6IG51bWJlcixcbiAgICAgICAgICBuMzI6IG51bWJlcixcbiAgICAgICAgICBuMzM6IG51bWJlcixcbiAgICAgICAgXSxcbiAgKSB7XG4gICAgaWYgKHRoaXMuX29ialJlZikge1xuICAgICAgdGhpcy5fb2JqUmVmLm1hdHJpeCA9IGFwcGx5VmFsdWU8TWF0cml4Mz4odGhpcy5fb2JqUmVmLm1hdHJpeCwgdmFsdWUpO1xuICAgIH1cbiAgfVxuICBwdWJsaWMgZ2V0IG1hdHJpeCgpOiBNYXRyaXgzIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fb2JqUmVmPy5tYXRyaXg7XG4gIH1cbiAgQElucHV0KClcbiAgcHVibGljIHNldCBtYXRyaXhBdXRvVXBkYXRlKHZhbHVlOiBib29sZWFuKSB7XG4gICAgaWYgKHRoaXMuX29ialJlZikge1xuICAgICAgdGhpcy5fb2JqUmVmLm1hdHJpeEF1dG9VcGRhdGUgPSB2YWx1ZTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgZ2V0IG1hdHJpeEF1dG9VcGRhdGUoKTogYm9vbGVhbiB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX29ialJlZj8ubWF0cml4QXV0b1VwZGF0ZTtcbiAgfVxuICBASW5wdXQoKVxuICBwdWJsaWMgc2V0IG9mZnNldCh2YWx1ZTogVmVjdG9yMiB8IFt4OiBudW1iZXIsIHk6IG51bWJlcl0pIHtcbiAgICBpZiAodGhpcy5fb2JqUmVmKSB7XG4gICAgICB0aGlzLl9vYmpSZWYub2Zmc2V0ID0gYXBwbHlWYWx1ZTxWZWN0b3IyPih0aGlzLl9vYmpSZWYub2Zmc2V0LCB2YWx1ZSk7XG4gICAgfVxuICB9XG4gIHB1YmxpYyBnZXQgb2Zmc2V0KCk6IFZlY3RvcjIgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9vYmpSZWY/Lm9mZnNldDtcbiAgfVxuICBASW5wdXQoKVxuICBwdWJsaWMgc2V0IHJlcGVhdCh2YWx1ZTogVmVjdG9yMiB8IFt4OiBudW1iZXIsIHk6IG51bWJlcl0pIHtcbiAgICBpZiAodGhpcy5fb2JqUmVmKSB7XG4gICAgICB0aGlzLl9vYmpSZWYucmVwZWF0ID0gYXBwbHlWYWx1ZTxWZWN0b3IyPih0aGlzLl9vYmpSZWYucmVwZWF0LCB2YWx1ZSk7XG4gICAgfVxuICB9XG4gIHB1YmxpYyBnZXQgcmVwZWF0KCk6IFZlY3RvcjIgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9vYmpSZWY/LnJlcGVhdDtcbiAgfVxuICBASW5wdXQoKVxuICBwdWJsaWMgc2V0IGNlbnRlcih2YWx1ZTogVmVjdG9yMiB8IFt4OiBudW1iZXIsIHk6IG51bWJlcl0pIHtcbiAgICBpZiAodGhpcy5fb2JqUmVmKSB7XG4gICAgICB0aGlzLl9vYmpSZWYuY2VudGVyID0gYXBwbHlWYWx1ZTxWZWN0b3IyPih0aGlzLl9vYmpSZWYuY2VudGVyLCB2YWx1ZSk7XG4gICAgfVxuICB9XG4gIHB1YmxpYyBnZXQgY2VudGVyKCk6IFZlY3RvcjIgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9vYmpSZWY/LmNlbnRlcjtcbiAgfVxuICBASW5wdXQoKVxuICBwdWJsaWMgc2V0IHJvdGF0aW9uKHZhbHVlOiBudW1iZXIpIHtcbiAgICBpZiAodGhpcy5fb2JqUmVmKSB7XG4gICAgICB0aGlzLl9vYmpSZWYucm90YXRpb24gPSB2YWx1ZTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgZ2V0IHJvdGF0aW9uKCk6IG51bWJlciB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX29ialJlZj8ucm90YXRpb247XG4gIH1cbiAgQElucHV0KClcbiAgcHVibGljIHNldCBnZW5lcmF0ZU1pcG1hcHModmFsdWU6IGJvb2xlYW4pIHtcbiAgICBpZiAodGhpcy5fb2JqUmVmKSB7XG4gICAgICB0aGlzLl9vYmpSZWYuZ2VuZXJhdGVNaXBtYXBzID0gdmFsdWU7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGdldCBnZW5lcmF0ZU1pcG1hcHMoKTogYm9vbGVhbiB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX29ialJlZj8uZ2VuZXJhdGVNaXBtYXBzO1xuICB9XG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzZXQgcHJlbXVsdGlwbHlBbHBoYSh2YWx1ZTogYm9vbGVhbikge1xuICAgIGlmICh0aGlzLl9vYmpSZWYpIHtcbiAgICAgIHRoaXMuX29ialJlZi5wcmVtdWx0aXBseUFscGhhID0gdmFsdWU7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGdldCBwcmVtdWx0aXBseUFscGhhKCk6IGJvb2xlYW4gfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9vYmpSZWY/LnByZW11bHRpcGx5QWxwaGE7XG4gIH1cbiAgQElucHV0KClcbiAgcHVibGljIHNldCBmbGlwWSh2YWx1ZTogYm9vbGVhbikge1xuICAgIGlmICh0aGlzLl9vYmpSZWYpIHtcbiAgICAgIHRoaXMuX29ialJlZi5mbGlwWSA9IHZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBnZXQgZmxpcFkoKTogYm9vbGVhbiB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX29ialJlZj8uZmxpcFk7XG4gIH1cbiAgQElucHV0KClcbiAgcHVibGljIHNldCB1bnBhY2tBbGlnbm1lbnQodmFsdWU6IG51bWJlcikge1xuICAgIGlmICh0aGlzLl9vYmpSZWYpIHtcbiAgICAgIHRoaXMuX29ialJlZi51bnBhY2tBbGlnbm1lbnQgPSB2YWx1ZTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgZ2V0IHVucGFja0FsaWdubWVudCgpOiBudW1iZXIgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9vYmpSZWY/LnVucGFja0FsaWdubWVudDtcbiAgfVxuICBASW5wdXQoKVxuICBwdWJsaWMgc2V0IGNvbG9yU3BhY2UodmFsdWU6IENvbG9yU3BhY2UpIHtcbiAgICBpZiAodGhpcy5fb2JqUmVmKSB7XG4gICAgICB0aGlzLl9vYmpSZWYuY29sb3JTcGFjZSA9IHZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBnZXQgY29sb3JTcGFjZSgpOiBDb2xvclNwYWNlIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fb2JqUmVmPy5jb2xvclNwYWNlO1xuICB9XG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzZXQgaXNSZW5kZXJUYXJnZXRUZXh0dXJlKHZhbHVlOiBib29sZWFuKSB7XG4gICAgaWYgKHRoaXMuX29ialJlZikge1xuICAgICAgdGhpcy5fb2JqUmVmLmlzUmVuZGVyVGFyZ2V0VGV4dHVyZSA9IHZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBnZXQgaXNSZW5kZXJUYXJnZXRUZXh0dXJlKCk6IGJvb2xlYW4gfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9vYmpSZWY/LmlzUmVuZGVyVGFyZ2V0VGV4dHVyZTtcbiAgfVxuICBASW5wdXQoKVxuICBwdWJsaWMgc2V0IHVzZXJEYXRhKHZhbHVlOiBSZWNvcmQ8c3RyaW5nLCBhbnk+KSB7XG4gICAgaWYgKHRoaXMuX29ialJlZikge1xuICAgICAgdGhpcy5fb2JqUmVmLnVzZXJEYXRhID0gdmFsdWU7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGdldCB1c2VyRGF0YSgpOiBSZWNvcmQ8c3RyaW5nLCBhbnk+IHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fb2JqUmVmPy51c2VyRGF0YTtcbiAgfVxuICBASW5wdXQoKVxuICBwdWJsaWMgc2V0IHZlcnNpb24odmFsdWU6IG51bWJlcikge1xuICAgIGlmICh0aGlzLl9vYmpSZWYpIHtcbiAgICAgIHRoaXMuX29ialJlZi52ZXJzaW9uID0gdmFsdWU7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGdldCB2ZXJzaW9uKCk6IG51bWJlciB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX29ialJlZj8udmVyc2lvbjtcbiAgfVxuICBASW5wdXQoKVxuICBwdWJsaWMgc2V0IHBtcmVtVmVyc2lvbih2YWx1ZTogbnVtYmVyKSB7XG4gICAgaWYgKHRoaXMuX29ialJlZikge1xuICAgICAgdGhpcy5fb2JqUmVmLnBtcmVtVmVyc2lvbiA9IHZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBnZXQgcG1yZW1WZXJzaW9uKCk6IG51bWJlciB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX29ialJlZj8ucG1yZW1WZXJzaW9uO1xuICB9XG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzZXQgbmVlZHNVcGRhdGUodmFsdWU6IGJvb2xlYW4pIHtcbiAgICBpZiAodGhpcy5fb2JqUmVmKSB7XG4gICAgICB0aGlzLl9vYmpSZWYubmVlZHNVcGRhdGUgPSB2YWx1ZTtcbiAgICB9XG4gIH1cblxuICBASW5wdXQoKVxuICBwdWJsaWMgc2V0IG5lZWRzUE1SRU1VcGRhdGUodmFsdWU6IGJvb2xlYW4pIHtcbiAgICBpZiAodGhpcy5fb2JqUmVmKSB7XG4gICAgICB0aGlzLl9vYmpSZWYubmVlZHNQTVJFTVVwZGF0ZSA9IHZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgREVGQVVMVF9BTklTT1RST1BZID0gVGV4dHVyZS5ERUZBVUxUX0FOSVNPVFJPUFk7XG5cbiAgcHVibGljIHN0YXRpYyByZWFkb25seSBERUZBVUxUX0lNQUdFID0gVGV4dHVyZS5ERUZBVUxUX0lNQUdFO1xuXG4gIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgREVGQVVMVF9NQVBQSU5HID0gVGV4dHVyZS5ERUZBVUxUX01BUFBJTkc7XG59XG4iXX0=