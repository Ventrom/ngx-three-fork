/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix */
import { ChangeDetectionStrategy, Component, Input, forwardRef, } from '@angular/core';
import { TexturePass } from 'three/examples/jsm/postprocessing/TexturePass.js';
import { ThPassBase } from '../ThPassBase';
import { ThPass } from './ThPass';
import * as i0 from "@angular/core";
export class ThTexturePass extends ThPass {
    getType() {
        return TexturePass;
    }
    set map(value) {
        if (this._objRef) {
            this._objRef.map = value;
        }
    }
    get map() {
        return this._objRef?.map;
    }
    set opacity(value) {
        if (this._objRef) {
            this._objRef.opacity = value;
        }
    }
    get opacity() {
        return this._objRef?.opacity;
    }
    set uniforms(map) {
        if (this._objRef) {
            Object.assign(this._objRef.uniforms, map);
        }
    }
    get uniforms() {
        return this._objRef?.uniforms;
    }
    set material(value) {
        if (this._objRef) {
            this._objRef.material = value;
        }
    }
    get material() {
        return this._objRef?.material;
    }
    set fsQuad(value) {
        if (this._objRef) {
            this._objRef.fsQuad = value;
        }
    }
    get fsQuad() {
        return this._objRef?.fsQuad;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThTexturePass, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.1.2", type: ThTexturePass, selector: "th-texturePass", inputs: { map: "map", opacity: "opacity", uniforms: "uniforms", material: "material", fsQuad: "fsQuad" }, providers: [
            { provide: ThPassBase, useExisting: forwardRef(() => ThTexturePass) },
        ], usesInheritance: true, ngImport: i0, template: '<ng-content/>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThTexturePass, decorators: [{
            type: Component,
            args: [{
                    selector: 'th-texturePass',
                    template: '<ng-content/>',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    providers: [
                        { provide: ThPassBase, useExisting: forwardRef(() => ThTexturePass) },
                    ],
                }]
        }], propDecorators: { map: [{
                type: Input
            }], opacity: [{
                type: Input
            }], uniforms: [{
                type: Input
            }], material: [{
                type: Input
            }], fsQuad: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGhUZXh0dXJlUGFzcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC10aHJlZS9zcmMvbGliL2dlbmVyYXRlZC9UaFRleHR1cmVQYXNzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGlEQUFpRDtBQUNqRCx5REFBeUQ7QUFDekQseUNBQXlDO0FBQ3pDLCtGQUErRjtBQUMvRixPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxLQUFLLEVBRUwsVUFBVSxHQUNYLE1BQU0sZUFBZSxDQUFDO0FBR3ZCLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxrREFBa0QsQ0FBQztBQUMvRSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxVQUFVLENBQUM7O0FBVWxDLE1BQU0sT0FBTyxhQUdYLFNBQVEsTUFBZ0I7SUFDakIsT0FBTztRQUNaLE9BQU8sV0FBVyxDQUFDO0lBQ3JCLENBQUM7SUFFRCxJQUNXLEdBQUcsQ0FBQyxLQUEwQjtRQUN2QyxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUNqQixJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsR0FBRyxLQUFLLENBQUM7UUFDM0IsQ0FBQztJQUNILENBQUM7SUFFRCxJQUFXLEdBQUc7UUFDWixPQUFPLElBQUksQ0FBQyxPQUFPLEVBQUUsR0FBRyxDQUFDO0lBQzNCLENBQUM7SUFDRCxJQUNXLE9BQU8sQ0FBQyxLQUFhO1FBQzlCLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ2pCLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztRQUMvQixDQUFDO0lBQ0gsQ0FBQztJQUVELElBQVcsT0FBTztRQUNoQixPQUFPLElBQUksQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDO0lBQy9CLENBQUM7SUFDRCxJQUNXLFFBQVEsQ0FBQyxHQUF1QztRQUN6RCxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUNqQixNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQzVDLENBQUM7SUFDSCxDQUFDO0lBRUQsSUFBVyxRQUFRO1FBQ2pCLE9BQU8sSUFBSSxDQUFDLE9BQU8sRUFBRSxRQUVSLENBQUM7SUFDaEIsQ0FBQztJQUNELElBQ1csUUFBUSxDQUFDLEtBQXFCO1FBQ3ZDLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ2pCLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztRQUNoQyxDQUFDO0lBQ0gsQ0FBQztJQUVELElBQVcsUUFBUTtRQUNqQixPQUFPLElBQUksQ0FBQyxPQUFPLEVBQUUsUUFBUSxDQUFDO0lBQ2hDLENBQUM7SUFDRCxJQUNXLE1BQU0sQ0FBQyxLQUFxQjtRQUNyQyxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUNqQixJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDOUIsQ0FBQztJQUNILENBQUM7SUFFRCxJQUFXLE1BQU07UUFDZixPQUFPLElBQUksQ0FBQyxPQUFPLEVBQUUsTUFBTSxDQUFDO0lBQzlCLENBQUM7OEdBM0RVLGFBQWE7a0dBQWIsYUFBYSxtSkFKYjtZQUNULEVBQUUsT0FBTyxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUUsVUFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDLGFBQWEsQ0FBQyxFQUFFO1NBQ3RFLGlEQUpTLGVBQWU7OzJGQU1kLGFBQWE7a0JBUnpCLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLGdCQUFnQjtvQkFDMUIsUUFBUSxFQUFFLGVBQWU7b0JBQ3pCLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO29CQUMvQyxTQUFTLEVBQUU7d0JBQ1QsRUFBRSxPQUFPLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRSxVQUFVLENBQUMsR0FBRyxFQUFFLGNBQWMsQ0FBQyxFQUFFO3FCQUN0RTtpQkFDRjs4QkFVWSxHQUFHO3NCQURiLEtBQUs7Z0JBV0ssT0FBTztzQkFEakIsS0FBSztnQkFXSyxRQUFRO3NCQURsQixLQUFLO2dCQWFLLFFBQVE7c0JBRGxCLEtBQUs7Z0JBV0ssTUFBTTtzQkFEaEIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIEB0eXBlc2NyaXB0LWVzbGludC9iYW4tdHlwZXMgKi9cbi8qIGVzbGludC1kaXNhYmxlIEB0eXBlc2NyaXB0LWVzbGludC9uYW1pbmctY29udmVudGlvbiAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tdW5kZXJzY29yZS1kYW5nbGUgKi9cbi8qIGVzbGludC1kaXNhYmxlIEBhbmd1bGFyLWVzbGludC9jb21wb25lbnQtc2VsZWN0b3IsIEBhbmd1bGFyLWVzbGludC9jb21wb25lbnQtY2xhc3Mtc3VmZml4ICovXG5pbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ29tcG9uZW50LFxuICBJbnB1dCxcbiAgVHlwZSxcbiAgZm9yd2FyZFJlZixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTaGFkZXJNYXRlcmlhbCwgVGV4dHVyZSB9IGZyb20gJ3RocmVlJztcbmltcG9ydCB7IEZ1bGxTY3JlZW5RdWFkIH0gZnJvbSAndGhyZWUvZXhhbXBsZXMvanNtL3Bvc3Rwcm9jZXNzaW5nL1Bhc3MuanMnO1xuaW1wb3J0IHsgVGV4dHVyZVBhc3MgfSBmcm9tICd0aHJlZS9leGFtcGxlcy9qc20vcG9zdHByb2Nlc3NpbmcvVGV4dHVyZVBhc3MuanMnO1xuaW1wb3J0IHsgVGhQYXNzQmFzZSB9IGZyb20gJy4uL1RoUGFzc0Jhc2UnO1xuaW1wb3J0IHsgVGhQYXNzIH0gZnJvbSAnLi9UaFBhc3MnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0aC10ZXh0dXJlUGFzcycsXG4gIHRlbXBsYXRlOiAnPG5nLWNvbnRlbnQvPicsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBwcm92aWRlcnM6IFtcbiAgICB7IHByb3ZpZGU6IFRoUGFzc0Jhc2UsIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IFRoVGV4dHVyZVBhc3MpIH0sXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIFRoVGV4dHVyZVBhc3M8XG4gIFQgZXh0ZW5kcyBUZXh0dXJlUGFzcyA9IFRleHR1cmVQYXNzLFxuICBUQVJHUyA9IFttYXA/OiBUZXh0dXJlLCBvcGFjaXR5PzogbnVtYmVyXSxcbj4gZXh0ZW5kcyBUaFBhc3M8VCwgVEFSR1M+IHtcbiAgcHVibGljIGdldFR5cGUoKTogVHlwZTxUZXh0dXJlUGFzcz4ge1xuICAgIHJldHVybiBUZXh0dXJlUGFzcztcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzZXQgbWFwKHZhbHVlOiBUZXh0dXJlIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHRoaXMuX29ialJlZikge1xuICAgICAgdGhpcy5fb2JqUmVmLm1hcCA9IHZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBnZXQgbWFwKCk6IChUZXh0dXJlIHwgdW5kZWZpbmVkKSB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX29ialJlZj8ubWFwO1xuICB9XG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzZXQgb3BhY2l0eSh2YWx1ZTogbnVtYmVyKSB7XG4gICAgaWYgKHRoaXMuX29ialJlZikge1xuICAgICAgdGhpcy5fb2JqUmVmLm9wYWNpdHkgPSB2YWx1ZTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgZ2V0IG9wYWNpdHkoKTogbnVtYmVyIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fb2JqUmVmPy5vcGFjaXR5O1xuICB9XG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzZXQgdW5pZm9ybXMobWFwOiB7IFtuYW1lOiBzdHJpbmddOiB7IHZhbHVlOiBhbnkgfSB9KSB7XG4gICAgaWYgKHRoaXMuX29ialJlZikge1xuICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLl9vYmpSZWYudW5pZm9ybXMsIG1hcCk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGdldCB1bmlmb3JtcygpOiB7IFtuYW1lOiBzdHJpbmddOiB7IHZhbHVlOiBhbnkgfSB9IHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fb2JqUmVmPy51bmlmb3JtcyBhc1xuICAgICAgfCB7IFtuYW1lOiBzdHJpbmddOiB7IHZhbHVlOiBhbnkgfSB9XG4gICAgICB8IHVuZGVmaW5lZDtcbiAgfVxuICBASW5wdXQoKVxuICBwdWJsaWMgc2V0IG1hdGVyaWFsKHZhbHVlOiBTaGFkZXJNYXRlcmlhbCkge1xuICAgIGlmICh0aGlzLl9vYmpSZWYpIHtcbiAgICAgIHRoaXMuX29ialJlZi5tYXRlcmlhbCA9IHZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBnZXQgbWF0ZXJpYWwoKTogU2hhZGVyTWF0ZXJpYWwgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9vYmpSZWY/Lm1hdGVyaWFsO1xuICB9XG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzZXQgZnNRdWFkKHZhbHVlOiBGdWxsU2NyZWVuUXVhZCkge1xuICAgIGlmICh0aGlzLl9vYmpSZWYpIHtcbiAgICAgIHRoaXMuX29ialJlZi5mc1F1YWQgPSB2YWx1ZTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgZ2V0IGZzUXVhZCgpOiBGdWxsU2NyZWVuUXVhZCB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX29ialJlZj8uZnNRdWFkO1xuICB9XG59XG4iXX0=