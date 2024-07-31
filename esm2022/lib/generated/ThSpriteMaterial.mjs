/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix */
import { ChangeDetectionStrategy, Component, Input, forwardRef, } from '@angular/core';
import { SpriteMaterial, } from 'three';
import { applyValue } from '../util';
import { ThMaterial } from './ThMaterial';
import * as i0 from "@angular/core";
export class ThSpriteMaterial extends ThMaterial {
    getType() {
        return SpriteMaterial;
    }
    get isSpriteMaterial() {
        return this._objRef?.isSpriteMaterial;
    }
    set type(value) {
        if (this._objRef) {
            this._objRef.type = value;
        }
    }
    get type() {
        return this._objRef?.type;
    }
    set color(value) {
        if (this._objRef) {
            this._objRef.color = applyValue(this._objRef.color, value);
        }
    }
    get color() {
        return this._objRef?.color;
    }
    set map(value) {
        if (this._objRef) {
            this._objRef.map = value;
        }
    }
    get map() {
        return this._objRef?.map;
    }
    set alphaMap(value) {
        if (this._objRef) {
            this._objRef.alphaMap = value;
        }
    }
    get alphaMap() {
        return this._objRef?.alphaMap;
    }
    set rotation(value) {
        if (this._objRef) {
            this._objRef.rotation = value;
        }
    }
    get rotation() {
        return this._objRef?.rotation;
    }
    set sizeAttenuation(value) {
        if (this._objRef) {
            this._objRef.sizeAttenuation = value;
        }
    }
    get sizeAttenuation() {
        return this._objRef?.sizeAttenuation;
    }
    set transparent(value) {
        if (this._objRef) {
            this._objRef.transparent = value;
        }
    }
    get transparent() {
        return this._objRef?.transparent;
    }
    set fog(value) {
        if (this._objRef) {
            this._objRef.fog = value;
        }
    }
    get fog() {
        return this._objRef?.fog;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThSpriteMaterial, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.1.2", type: ThSpriteMaterial, selector: "th-spriteMaterial", inputs: { type: "type", color: "color", map: "map", alphaMap: "alphaMap", rotation: "rotation", sizeAttenuation: "sizeAttenuation", transparent: "transparent", fog: "fog" }, providers: [
            { provide: ThMaterial, useExisting: forwardRef(() => ThSpriteMaterial) },
        ], usesInheritance: true, ngImport: i0, template: '<ng-content/>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThSpriteMaterial, decorators: [{
            type: Component,
            args: [{
                    selector: 'th-spriteMaterial',
                    template: '<ng-content/>',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    providers: [
                        { provide: ThMaterial, useExisting: forwardRef(() => ThSpriteMaterial) },
                    ],
                }]
        }], propDecorators: { type: [{
                type: Input
            }], color: [{
                type: Input
            }], map: [{
                type: Input
            }], alphaMap: [{
                type: Input
            }], rotation: [{
                type: Input
            }], sizeAttenuation: [{
                type: Input
            }], transparent: [{
                type: Input
            }], fog: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGhTcHJpdGVNYXRlcmlhbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC10aHJlZS9zcmMvbGliL2dlbmVyYXRlZC9UaFNwcml0ZU1hdGVyaWFsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHlEQUF5RDtBQUN6RCx5Q0FBeUM7QUFDekMsK0ZBQStGO0FBQy9GLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULEtBQUssRUFFTCxVQUFVLEdBQ1gsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUdMLGNBQWMsR0FHZixNQUFNLE9BQU8sQ0FBQztBQUNmLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxTQUFTLENBQUM7QUFDckMsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGNBQWMsQ0FBQzs7QUFVMUMsTUFBTSxPQUFPLGdCQUdYLFNBQVEsVUFBb0I7SUFDckIsT0FBTztRQUNaLE9BQU8sY0FBYyxDQUFDO0lBQ3hCLENBQUM7SUFFRCxJQUFXLGdCQUFnQjtRQUN6QixPQUFPLElBQUksQ0FBQyxPQUFPLEVBQUUsZ0JBQWdCLENBQUM7SUFDeEMsQ0FBQztJQUNELElBQ1csSUFBSSxDQUFDLEtBQWE7UUFDM0IsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDakIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDO1FBQzVCLENBQUM7SUFDSCxDQUFDO0lBRUQsSUFBVyxJQUFJO1FBQ2IsT0FBTyxJQUFJLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQztJQUM1QixDQUFDO0lBQ0QsSUFDVyxLQUFLLENBQ2QsS0FNSztRQUVMLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ2pCLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxHQUFHLFVBQVUsQ0FBUSxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsQ0FBQztRQUNwRSxD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IjpbIi8qIGVzbGludC1kaXNhYmxlIEB0eXBlc2NyaXB0LWVzbGludC9uYW1pbmctY29udmVudGlvbiAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tdW5kZXJzY29yZS1kYW5nbGUgKi9cbi8qIGVzbGludC1kaXNhYmxlIEBhbmd1bGFyLWVzbGludC9jb21wb25lbnQtc2VsZWN0b3IsIEBhbmd1bGFyLWVzbGludC9jb21wb25lbnQtY2xhc3Mtc3VmZml4ICovXG5pbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ29tcG9uZW50LFxuICBJbnB1dCxcbiAgVHlwZSxcbiAgZm9yd2FyZFJlZixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBDb2xvcixcbiAgQ29sb3JSZXByZXNlbnRhdGlvbixcbiAgU3ByaXRlTWF0ZXJpYWwsXG4gIFNwcml0ZU1hdGVyaWFsUGFyYW1ldGVycyxcbiAgVGV4dHVyZSxcbn0gZnJvbSAndGhyZWUnO1xuaW1wb3J0IHsgYXBwbHlWYWx1ZSB9IGZyb20gJy4uL3V0aWwnO1xuaW1wb3J0IHsgVGhNYXRlcmlhbCB9IGZyb20gJy4vVGhNYXRlcmlhbCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3RoLXNwcml0ZU1hdGVyaWFsJyxcbiAgdGVtcGxhdGU6ICc8bmctY29udGVudC8+JyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHByb3ZpZGVyczogW1xuICAgIHsgcHJvdmlkZTogVGhNYXRlcmlhbCwgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gVGhTcHJpdGVNYXRlcmlhbCkgfSxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgVGhTcHJpdGVNYXRlcmlhbDxcbiAgVCBleHRlbmRzIFNwcml0ZU1hdGVyaWFsID0gU3ByaXRlTWF0ZXJpYWwsXG4gIFRBUkdTID0gLyogcGFyYW1ldGVycz8gKi8gU3ByaXRlTWF0ZXJpYWxQYXJhbWV0ZXJzLFxuPiBleHRlbmRzIFRoTWF0ZXJpYWw8VCwgVEFSR1M+IHtcbiAgcHVibGljIGdldFR5cGUoKTogVHlwZTxTcHJpdGVNYXRlcmlhbD4ge1xuICAgIHJldHVybiBTcHJpdGVNYXRlcmlhbDtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaXNTcHJpdGVNYXRlcmlhbCgpOiB0cnVlIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fb2JqUmVmPy5pc1Nwcml0ZU1hdGVyaWFsO1xuICB9XG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzZXQgdHlwZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgaWYgKHRoaXMuX29ialJlZikge1xuICAgICAgdGhpcy5fb2JqUmVmLnR5cGUgPSB2YWx1ZTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgZ2V0IHR5cGUoKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fb2JqUmVmPy50eXBlO1xuICB9XG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzZXQgY29sb3IoXG4gICAgdmFsdWU6XG4gICAgICB8IENvbG9yXG4gICAgICB8IFtcbiAgICAgICAgICAuLi5hcmdzOlxuICAgICAgICAgICAgfCBbY29sb3I6IENvbG9yUmVwcmVzZW50YXRpb25dXG4gICAgICAgICAgICB8IFtyOiBudW1iZXIsIGc6IG51bWJlciwgYjogbnVtYmVyXSxcbiAgICAgICAgXSxcbiAgKSB7XG4gICAgaWYgKHRoaXMuX29ialJlZikge1xuICAgICAgdGhpcy5fb2JqUmVmLmNvbG9yID0gYXBwbHlWYWx1ZTxDb2xvcj4odGhpcy5fb2JqUmVmLmNvbG9yLCB2YWx1ZSk7XG4gICAgfVxuICB9XG4gIHB1YmxpYyBnZXQgY29sb3IoKTogQ29sb3IgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9vYmpSZWY/LmNvbG9yO1xuICB9XG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzZXQgbWFwKHZhbHVlOiBUZXh0dXJlIHwgbnVsbCkge1xuICAgIGlmICh0aGlzLl9vYmpSZWYpIHtcbiAgICAgIHRoaXMuX29ialJlZi5tYXAgPSB2YWx1ZTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgZ2V0IG1hcCgpOiAoVGV4dHVyZSB8IG51bGwpIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fb2JqUmVmPy5tYXA7XG4gIH1cbiAgQElucHV0KClcbiAgcHVibGljIHNldCBhbHBoYU1hcCh2YWx1ZTogVGV4dHVyZSB8IG51bGwpIHtcbiAgICBpZiAodGhpcy5fb2JqUmVmKSB7XG4gICAgICB0aGlzLl9vYmpSZWYuYWxwaGFNYXAgPSB2YWx1ZTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgZ2V0IGFscGhhTWFwKCk6IChUZXh0dXJlIHwgbnVsbCkgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9vYmpSZWY/LmFscGhhTWFwO1xuICB9XG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzZXQgcm90YXRpb24odmFsdWU6IG51bWJlcikge1xuICAgIGlmICh0aGlzLl9vYmpSZWYpIHtcbiAgICAgIHRoaXMuX29ialJlZi5yb3RhdGlvbiA9IHZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBnZXQgcm90YXRpb24oKTogbnVtYmVyIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fb2JqUmVmPy5yb3RhdGlvbjtcbiAgfVxuICBASW5wdXQoKVxuICBwdWJsaWMgc2V0IHNpemVBdHRlbnVhdGlvbih2YWx1ZTogYm9vbGVhbikge1xuICAgIGlmICh0aGlzLl9vYmpSZWYpIHtcbiAgICAgIHRoaXMuX29ialJlZi5zaXplQXR0ZW51YXRpb24gPSB2YWx1ZTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgZ2V0IHNpemVBdHRlbnVhdGlvbigpOiBib29sZWFuIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fb2JqUmVmPy5zaXplQXR0ZW51YXRpb247XG4gIH1cbiAgQElucHV0KClcbiAgcHVibGljIHNldCB0cmFuc3BhcmVudCh2YWx1ZTogYm9vbGVhbikge1xuICAgIGlmICh0aGlzLl9vYmpSZWYpIHtcbiAgICAgIHRoaXMuX29ialJlZi50cmFuc3BhcmVudCA9IHZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBnZXQgdHJhbnNwYXJlbnQoKTogYm9vbGVhbiB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX29ialJlZj8udHJhbnNwYXJlbnQ7XG4gIH1cbiAgQElucHV0KClcbiAgcHVibGljIHNldCBmb2codmFsdWU6IGJvb2xlYW4pIHtcbiAgICBpZiAodGhpcy5fb2JqUmVmKSB7XG4gICAgICB0aGlzLl9vYmpSZWYuZm9nID0gdmFsdWU7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGdldCBmb2coKTogYm9vbGVhbiB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX29ialJlZj8uZm9nO1xuICB9XG59XG4iXX0=