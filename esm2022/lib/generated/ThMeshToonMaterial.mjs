/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix */
import { ChangeDetectionStrategy, Component, Input, forwardRef, } from '@angular/core';
import { MeshToonMaterial, } from 'three';
import { applyValue } from '../util';
import { ThMaterial } from './ThMaterial';
import * as i0 from "@angular/core";
export class ThMeshToonMaterial extends ThMaterial {
    getType() {
        return MeshToonMaterial;
    }
    get isMeshToonMaterial() {
        return this._objRef?.isMeshToonMaterial;
    }
    set type(value) {
        if (this._objRef) {
            this._objRef.type = value;
        }
    }
    get type() {
        return this._objRef?.type;
    }
    set defines(value) {
        if (this._objRef) {
            this._objRef.defines = value;
        }
    }
    get defines() {
        return this._objRef?.defines;
    }
    set color(value) {
        if (this._objRef) {
            this._objRef.color = applyValue(this._objRef.color, value);
        }
    }
    get color() {
        return this._objRef?.color;
    }
    set gradientMap(value) {
        if (this._objRef) {
            this._objRef.gradientMap = value;
        }
    }
    get gradientMap() {
        return this._objRef?.gradientMap;
    }
    set map(value) {
        if (this._objRef) {
            this._objRef.map = value;
        }
    }
    get map() {
        return this._objRef?.map;
    }
    set lightMap(value) {
        if (this._objRef) {
            this._objRef.lightMap = value;
        }
    }
    get lightMap() {
        return this._objRef?.lightMap;
    }
    set lightMapIntensity(value) {
        if (this._objRef) {
            this._objRef.lightMapIntensity = value;
        }
    }
    get lightMapIntensity() {
        return this._objRef?.lightMapIntensity;
    }
    set aoMap(value) {
        if (this._objRef) {
            this._objRef.aoMap = value;
        }
    }
    get aoMap() {
        return this._objRef?.aoMap;
    }
    set aoMapIntensity(value) {
        if (this._objRef) {
            this._objRef.aoMapIntensity = value;
        }
    }
    get aoMapIntensity() {
        return this._objRef?.aoMapIntensity;
    }
    set emissive(value) {
        if (this._objRef) {
            this._objRef.emissive = applyValue(this._objRef.emissive, value);
        }
    }
    get emissive() {
        return this._objRef?.emissive;
    }
    set emissiveIntensity(value) {
        if (this._objRef) {
            this._objRef.emissiveIntensity = value;
        }
    }
    get emissiveIntensity() {
        return this._objRef?.emissiveIntensity;
    }
    set emissiveMap(value) {
        if (this._objRef) {
            this._objRef.emissiveMap = value;
        }
    }
    get emissiveMap() {
        return this._objRef?.emissiveMap;
    }
    set bumpMap(value) {
        if (this._objRef) {
            this._objRef.bumpMap = value;
        }
    }
    get bumpMap() {
        return this._objRef?.bumpMap;
    }
    set bumpScale(value) {
        if (this._objRef) {
            this._objRef.bumpScale = value;
        }
    }
    get bumpScale() {
        return this._objRef?.bumpScale;
    }
    set normalMap(value) {
        if (this._objRef) {
            this._objRef.normalMap = value;
        }
    }
    get normalMap() {
        return this._objRef?.normalMap;
    }
    set normalMapType(value) {
        if (this._objRef) {
            this._objRef.normalMapType = value;
        }
    }
    get normalMapType() {
        return this._objRef?.normalMapType;
    }
    set normalScale(value) {
        if (this._objRef) {
            this._objRef.normalScale = applyValue(this._objRef.normalScale, value);
        }
    }
    get normalScale() {
        return this._objRef?.normalScale;
    }
    set displacementMap(value) {
        if (this._objRef) {
            this._objRef.displacementMap = value;
        }
    }
    get displacementMap() {
        return this._objRef?.displacementMap;
    }
    set displacementScale(value) {
        if (this._objRef) {
            this._objRef.displacementScale = value;
        }
    }
    get displacementScale() {
        return this._objRef?.displacementScale;
    }
    set displacementBias(value) {
        if (this._objRef) {
            this._objRef.displacementBias = value;
        }
    }
    get displacementBias() {
        return this._objRef?.displacementBias;
    }
    set alphaMap(value) {
        if (this._objRef) {
            this._objRef.alphaMap = value;
        }
    }
    get alphaMap() {
        return this._objRef?.alphaMap;
    }
    set wireframe(value) {
        if (this._objRef) {
            this._objRef.wireframe = value;
        }
    }
    get wireframe() {
        return this._objRef?.wireframe;
    }
    set wireframeLinewidth(value) {
        if (this._objRef) {
            this._objRef.wireframeLinewidth = value;
        }
    }
    get wireframeLinewidth() {
        return this._objRef?.wireframeLinewidth;
    }
    set wireframeLinecap(value) {
        if (this._objRef) {
            this._objRef.wireframeLinecap = value;
        }
    }
    get wireframeLinecap() {
        return this._objRef?.wireframeLinecap;
    }
    set wireframeLinejoin(value) {
        if (this._objRef) {
            this._objRef.wireframeLinejoin = value;
        }
    }
    get wireframeLinejoin() {
        return this._objRef?.wireframeLinejoin;
    }
    set fog(value) {
        if (this._objRef) {
            this._objRef.fog = value;
        }
    }
    get fog() {
        return this._objRef?.fog;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThMeshToonMaterial, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.1.2", type: ThMeshToonMaterial, selector: "th-meshToonMaterial", inputs: { type: "type", defines: "defines", color: "color", gradientMap: "gradientMap", map: "map", lightMap: "lightMap", lightMapIntensity: "lightMapIntensity", aoMap: "aoMap", aoMapIntensity: "aoMapIntensity", emissive: "emissive", emissiveIntensity: "emissiveIntensity", emissiveMap: "emissiveMap", bumpMap: "bumpMap", bumpScale: "bumpScale", normalMap: "normalMap", normalMapType: "normalMapType", normalScale: "normalScale", displacementMap: "displacementMap", displacementScale: "displacementScale", displacementBias: "displacementBias", alphaMap: "alphaMap", wireframe: "wireframe", wireframeLinewidth: "wireframeLinewidth", wireframeLinecap: "wireframeLinecap", wireframeLinejoin: "wireframeLinejoin", fog: "fog" }, providers: [
            { provide: ThMaterial, useExisting: forwardRef(() => ThMeshToonMaterial) },
        ], usesInheritance: true, ngImport: i0, template: '<ng-content/>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThMeshToonMaterial, decorators: [{
            type: Component,
            args: [{
                    selector: 'th-meshToonMaterial',
                    template: '<ng-content/>',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    providers: [
                        { provide: ThMaterial, useExisting: forwardRef(() => ThMeshToonMaterial) },
                    ],
                }]
        }], propDecorators: { type: [{
                type: Input
            }], defines: [{
                type: Input
            }], color: [{
                type: Input
            }], gradientMap: [{
                type: Input
            }], map: [{
                type: Input
            }], lightMap: [{
                type: Input
            }], lightMapIntensity: [{
                type: Input
            }], aoMap: [{
                type: Input
            }], aoMapIntensity: [{
                type: Input
            }], emissive: [{
                type: Input
            }], emissiveIntensity: [{
                type: Input
            }], emissiveMap: [{
                type: Input
            }], bumpMap: [{
                type: Input
            }], bumpScale: [{
                type: Input
            }], normalMap: [{
                type: Input
            }], normalMapType: [{
                type: Input
            }], normalScale: [{
                type: Input
            }], displacementMap: [{
                type: Input
            }], displacementScale: [{
                type: Input
            }], displacementBias: [{
                type: Input
            }], alphaMap: [{
                type: Input
            }], wireframe: [{
                type: Input
            }], wireframeLinewidth: [{
                type: Input
            }], wireframeLinecap: [{
                type: Input
            }], wireframeLinejoin: [{
                type: Input
            }], fog: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGhNZXNoVG9vbk1hdGVyaWFsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LXRocmVlL3NyYy9saWIvZ2VuZXJhdGVkL1RoTWVzaFRvb25NYXRlcmlhbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSx5REFBeUQ7QUFDekQseUNBQXlDO0FBQ3pDLCtGQUErRjtBQUMvRixPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxLQUFLLEVBRUwsVUFBVSxHQUNYLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFHTCxnQkFBZ0IsR0FLakIsTUFBTSxPQUFPLENBQUM7QUFDZixPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sU0FBUyxDQUFDO0FBQ3JDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxjQUFjLENBQUM7O0FBVTFDLE1BQU0sT0FBTyxrQkFHWCxTQUFRLFVBQW9CO0lBQ3JCLE9BQU87UUFDWixPQUFPLGdCQUFnQixDQUFDO0lBQzFCLENBQUM7SUFFRCxJQUFXLGtCQUFrQjtRQUMzQixPQUFPLElBQUksQ0FBQyxPQUFPLEVBQUUsa0JBQWtCLENBQUM7SUFDMUMsQ0FBQztJQUNELElBQ1csSUFBSSxDQUFDLEtBQWE7UUFDM0IsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDakIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDO1FBQzVCLENBQUM7SUFDSCxDQUFDO0lBRUQsSUFBVyxJQUFJO1FBQ2IsT0FBTyxJQUFJLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQztJQUM1QixDQUFDO0lBQ0QsSUFDVyxPQUFPLENBQUMsS0FBNkI7UUFDOUMsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDakIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO1FBQy9CLENBQUM7SUFDSCxDQUFDO0lBRUQsSUFBVyxPQUFPO1FBQ2hC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QVE7c0JBRGxCLEtBQUs7Z0JBV0ssaUJBQWlCO3NCQUQzQixLQUFLO2dCQVdLLEtBQUs7c0JBRGYsS0FBSztnQkFXSyxjQUFjO3NCQUR4QixLQUFLO2dCQVdLLFFBQVE7c0JBRGxCLEtBQUs7Z0JBa0JLLGlCQUFpQjtzQkFEM0IsS0FBSztnQkFXSyxXQUFXO3NCQURyQixLQUFLO2dCQVdLLE9BQU87c0JBRGpCLEtBQUs7Z0JBV0ssU0FBUztzQkFEbkIsS0FBSztnQkFXSyxTQUFTO3NCQURuQixLQUFLO2dCQVdLLGFBQWE7c0JBRHZCLEtBQUs7Z0JBV0ssV0FBVztzQkFEckIsS0FBSztnQkFhSyxlQUFlO3NCQUR6QixLQUFLO2dCQVdLLGlCQUFpQjtzQkFEM0IsS0FBSztnQkFXSyxnQkFBZ0I7c0JBRDFCLEtBQUs7Z0JBV0ssUUFBUTtzQkFEbEIsS0FBSztnQkFXSyxTQUFTO3NCQURuQixLQUFLO2dCQVdLLGtCQUFrQjtzQkFENUIsS0FBSztnQkFXSyxnQkFBZ0I7c0JBRDFCLEtBQUs7Z0JBV0ssaUJBQWlCO3NCQUQzQixLQUFLO2dCQVdLLEdBQUc7c0JBRGIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIEB0eXBlc2NyaXB0LWVzbGludC9uYW1pbmctY29udmVudGlvbiAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tdW5kZXJzY29yZS1kYW5nbGUgKi9cbi8qIGVzbGludC1kaXNhYmxlIEBhbmd1bGFyLWVzbGludC9jb21wb25lbnQtc2VsZWN0b3IsIEBhbmd1bGFyLWVzbGludC9jb21wb25lbnQtY2xhc3Mtc3VmZml4ICovXG5pbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ29tcG9uZW50LFxuICBJbnB1dCxcbiAgVHlwZSxcbiAgZm9yd2FyZFJlZixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBDb2xvcixcbiAgQ29sb3JSZXByZXNlbnRhdGlvbixcbiAgTWVzaFRvb25NYXRlcmlhbCxcbiAgTWVzaFRvb25NYXRlcmlhbFBhcmFtZXRlcnMsXG4gIE5vcm1hbE1hcFR5cGVzLFxuICBUZXh0dXJlLFxuICBWZWN0b3IyLFxufSBmcm9tICd0aHJlZSc7XG5pbXBvcnQgeyBhcHBseVZhbHVlIH0gZnJvbSAnLi4vdXRpbCc7XG5pbXBvcnQgeyBUaE1hdGVyaWFsIH0gZnJvbSAnLi9UaE1hdGVyaWFsJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndGgtbWVzaFRvb25NYXRlcmlhbCcsXG4gIHRlbXBsYXRlOiAnPG5nLWNvbnRlbnQvPicsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBwcm92aWRlcnM6IFtcbiAgICB7IHByb3ZpZGU6IFRoTWF0ZXJpYWwsIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IFRoTWVzaFRvb25NYXRlcmlhbCkgfSxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgVGhNZXNoVG9vbk1hdGVyaWFsPFxuICBUIGV4dGVuZHMgTWVzaFRvb25NYXRlcmlhbCA9IE1lc2hUb29uTWF0ZXJpYWwsXG4gIFRBUkdTID0gLyogcGFyYW1ldGVycz8gKi8gTWVzaFRvb25NYXRlcmlhbFBhcmFtZXRlcnMsXG4+IGV4dGVuZHMgVGhNYXRlcmlhbDxULCBUQVJHUz4ge1xuICBwdWJsaWMgZ2V0VHlwZSgpOiBUeXBlPE1lc2hUb29uTWF0ZXJpYWw+IHtcbiAgICByZXR1cm4gTWVzaFRvb25NYXRlcmlhbDtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaXNNZXNoVG9vbk1hdGVyaWFsKCk6IHRydWUgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9vYmpSZWY/LmlzTWVzaFRvb25NYXRlcmlhbDtcbiAgfVxuICBASW5wdXQoKVxuICBwdWJsaWMgc2V0IHR5cGUodmFsdWU6IHN0cmluZykge1xuICAgIGlmICh0aGlzLl9vYmpSZWYpIHtcbiAgICAgIHRoaXMuX29ialJlZi50eXBlID0gdmFsdWU7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGdldCB0eXBlKCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX29ialJlZj8udHlwZTtcbiAgfVxuICBASW5wdXQoKVxuICBwdWJsaWMgc2V0IGRlZmluZXModmFsdWU6IHsgW2tleTogc3RyaW5nXTogYW55IH0pIHtcbiAgICBpZiAodGhpcy5fb2JqUmVmKSB7XG4gICAgICB0aGlzLl9vYmpSZWYuZGVmaW5lcyA9IHZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBnZXQgZGVmaW5lcygpOiB7IFtrZXk6IHN0cmluZ106IGFueSB9IHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fb2JqUmVmPy5kZWZpbmVzO1xuICB9XG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzZXQgY29sb3IoXG4gICAgdmFsdWU6XG4gICAgICB8IENvbG9yXG4gICAgICB8IFtcbiAgICAgICAgICAuLi5hcmdzOlxuICAgICAgICAgICAgfCBbY29sb3I6IENvbG9yUmVwcmVzZW50YXRpb25dXG4gICAgICAgICAgICB8IFtyOiBudW1iZXIsIGc6IG51bWJlciwgYjogbnVtYmVyXSxcbiAgICAgICAgXSxcbiAgKSB7XG4gICAgaWYgKHRoaXMuX29ialJlZikge1xuICAgICAgdGhpcy5fb2JqUmVmLmNvbG9yID0gYXBwbHlWYWx1ZTxDb2xvcj4odGhpcy5fb2JqUmVmLmNvbG9yLCB2YWx1ZSk7XG4gICAgfVxuICB9XG4gIHB1YmxpYyBnZXQgY29sb3IoKTogQ29sb3IgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9vYmpSZWY/LmNvbG9yO1xuICB9XG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzZXQgZ3JhZGllbnRNYXAodmFsdWU6IFRleHR1cmUgfCBudWxsKSB7XG4gICAgaWYgKHRoaXMuX29ialJlZikge1xuICAgICAgdGhpcy5fb2JqUmVmLmdyYWRpZW50TWFwID0gdmFsdWU7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGdldCBncmFkaWVudE1hcCgpOiAoVGV4dHVyZSB8IG51bGwpIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fb2JqUmVmPy5ncmFkaWVudE1hcDtcbiAgfVxuICBASW5wdXQoKVxuICBwdWJsaWMgc2V0IG1hcCh2YWx1ZTogVGV4dHVyZSB8IG51bGwpIHtcbiAgICBpZiAodGhpcy5fb2JqUmVmKSB7XG4gICAgICB0aGlzLl9vYmpSZWYubWFwID0gdmFsdWU7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGdldCBtYXAoKTogKFRleHR1cmUgfCBudWxsKSB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX29ialJlZj8ubWFwO1xuICB9XG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzZXQgbGlnaHRNYXAodmFsdWU6IFRleHR1cmUgfCBudWxsKSB7XG4gICAgaWYgKHRoaXMuX29ialJlZikge1xuICAgICAgdGhpcy5fb2JqUmVmLmxpZ2h0TWFwID0gdmFsdWU7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGdldCBsaWdodE1hcCgpOiAoVGV4dHVyZSB8IG51bGwpIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fb2JqUmVmPy5saWdodE1hcDtcbiAgfVxuICBASW5wdXQoKVxuICBwdWJsaWMgc2V0IGxpZ2h0TWFwSW50ZW5zaXR5KHZhbHVlOiBudW1iZXIpIHtcbiAgICBpZiAodGhpcy5fb2JqUmVmKSB7XG4gICAgICB0aGlzLl9vYmpSZWYubGlnaHRNYXBJbnRlbnNpdHkgPSB2YWx1ZTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgZ2V0IGxpZ2h0TWFwSW50ZW5zaXR5KCk6IG51bWJlciB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX29ialJlZj8ubGlnaHRNYXBJbnRlbnNpdHk7XG4gIH1cbiAgQElucHV0KClcbiAgcHVibGljIHNldCBhb01hcCh2YWx1ZTogVGV4dHVyZSB8IG51bGwpIHtcbiAgICBpZiAodGhpcy5fb2JqUmVmKSB7XG4gICAgICB0aGlzLl9vYmpSZWYuYW9NYXAgPSB2YWx1ZTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgZ2V0IGFvTWFwKCk6IChUZXh0dXJlIHwgbnVsbCkgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9vYmpSZWY/LmFvTWFwO1xuICB9XG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzZXQgYW9NYXBJbnRlbnNpdHkodmFsdWU6IG51bWJlcikge1xuICAgIGlmICh0aGlzLl9vYmpSZWYpIHtcbiAgICAgIHRoaXMuX29ialJlZi5hb01hcEludGVuc2l0eSA9IHZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBnZXQgYW9NYXBJbnRlbnNpdHkoKTogbnVtYmVyIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fb2JqUmVmPy5hb01hcEludGVuc2l0eTtcbiAgfVxuICBASW5wdXQoKVxuICBwdWJsaWMgc2V0IGVtaXNzaXZlKFxuICAgIHZhbHVlOlxuICAgICAgfCBDb2xvclxuICAgICAgfCBbXG4gICAgICAgICAgLi4uYXJnczpcbiAgICAgICAgICAgIHwgW2NvbG9yOiBDb2xvclJlcHJlc2VudGF0aW9uXVxuICAgICAgICAgICAgfCBbcjogbnVtYmVyLCBnOiBudW1iZXIsIGI6IG51bWJlcl0sXG4gICAgICAgIF0sXG4gICkge1xuICAgIGlmICh0aGlzLl9vYmpSZWYpIHtcbiAgICAgIHRoaXMuX29ialJlZi5lbWlzc2l2ZSA9IGFwcGx5VmFsdWU8Q29sb3I+KHRoaXMuX29ialJlZi5lbWlzc2l2ZSwgdmFsdWUpO1xuICAgIH1cbiAgfVxuICBwdWJsaWMgZ2V0IGVtaXNzaXZlKCk6IENvbG9yIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fb2JqUmVmPy5lbWlzc2l2ZTtcbiAgfVxuICBASW5wdXQoKVxuICBwdWJsaWMgc2V0IGVtaXNzaXZlSW50ZW5zaXR5KHZhbHVlOiBudW1iZXIpIHtcbiAgICBpZiAodGhpcy5fb2JqUmVmKSB7XG4gICAgICB0aGlzLl9vYmpSZWYuZW1pc3NpdmVJbnRlbnNpdHkgPSB2YWx1ZTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgZ2V0IGVtaXNzaXZlSW50ZW5zaXR5KCk6IG51bWJlciB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX29ialJlZj8uZW1pc3NpdmVJbnRlbnNpdHk7XG4gIH1cbiAgQElucHV0KClcbiAgcHVibGljIHNldCBlbWlzc2l2ZU1hcCh2YWx1ZTogVGV4dHVyZSB8IG51bGwpIHtcbiAgICBpZiAodGhpcy5fb2JqUmVmKSB7XG4gICAgICB0aGlzLl9vYmpSZWYuZW1pc3NpdmVNYXAgPSB2YWx1ZTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgZ2V0IGVtaXNzaXZlTWFwKCk6IChUZXh0dXJlIHwgbnVsbCkgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9vYmpSZWY/LmVtaXNzaXZlTWFwO1xuICB9XG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzZXQgYnVtcE1hcCh2YWx1ZTogVGV4dHVyZSB8IG51bGwpIHtcbiAgICBpZiAodGhpcy5fb2JqUmVmKSB7XG4gICAgICB0aGlzLl9vYmpSZWYuYnVtcE1hcCA9IHZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBnZXQgYnVtcE1hcCgpOiAoVGV4dHVyZSB8IG51bGwpIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fb2JqUmVmPy5idW1wTWFwO1xuICB9XG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzZXQgYnVtcFNjYWxlKHZhbHVlOiBudW1iZXIpIHtcbiAgICBpZiAodGhpcy5fb2JqUmVmKSB7XG4gICAgICB0aGlzLl9vYmpSZWYuYnVtcFNjYWxlID0gdmFsdWU7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGdldCBidW1wU2NhbGUoKTogbnVtYmVyIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fb2JqUmVmPy5idW1wU2NhbGU7XG4gIH1cbiAgQElucHV0KClcbiAgcHVibGljIHNldCBub3JtYWxNYXAodmFsdWU6IFRleHR1cmUgfCBudWxsKSB7XG4gICAgaWYgKHRoaXMuX29ialJlZikge1xuICAgICAgdGhpcy5fb2JqUmVmLm5vcm1hbE1hcCA9IHZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBnZXQgbm9ybWFsTWFwKCk6IChUZXh0dXJlIHwgbnVsbCkgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9vYmpSZWY/Lm5vcm1hbE1hcDtcbiAgfVxuICBASW5wdXQoKVxuICBwdWJsaWMgc2V0IG5vcm1hbE1hcFR5cGUodmFsdWU6IE5vcm1hbE1hcFR5cGVzKSB7XG4gICAgaWYgKHRoaXMuX29ialJlZikge1xuICAgICAgdGhpcy5fb2JqUmVmLm5vcm1hbE1hcFR5cGUgPSB2YWx1ZTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgZ2V0IG5vcm1hbE1hcFR5cGUoKTogTm9ybWFsTWFwVHlwZXMgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9vYmpSZWY/Lm5vcm1hbE1hcFR5cGU7XG4gIH1cbiAgQElucHV0KClcbiAgcHVibGljIHNldCBub3JtYWxTY2FsZSh2YWx1ZTogVmVjdG9yMiB8IFt4OiBudW1iZXIsIHk6IG51bWJlcl0pIHtcbiAgICBpZiAodGhpcy5fb2JqUmVmKSB7XG4gICAgICB0aGlzLl9vYmpSZWYubm9ybWFsU2NhbGUgPSBhcHBseVZhbHVlPFZlY3RvcjI+KFxuICAgICAgICB0aGlzLl9vYmpSZWYubm9ybWFsU2NhbGUsXG4gICAgICAgIHZhbHVlLFxuICAgICAgKTtcbiAgICB9XG4gIH1cbiAgcHVibGljIGdldCBub3JtYWxTY2FsZSgpOiBWZWN0b3IyIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fb2JqUmVmPy5ub3JtYWxTY2FsZTtcbiAgfVxuICBASW5wdXQoKVxuICBwdWJsaWMgc2V0IGRpc3BsYWNlbWVudE1hcCh2YWx1ZTogVGV4dHVyZSB8IG51bGwpIHtcbiAgICBpZiAodGhpcy5fb2JqUmVmKSB7XG4gICAgICB0aGlzLl9vYmpSZWYuZGlzcGxhY2VtZW50TWFwID0gdmFsdWU7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGdldCBkaXNwbGFjZW1lbnRNYXAoKTogKFRleHR1cmUgfCBudWxsKSB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX29ialJlZj8uZGlzcGxhY2VtZW50TWFwO1xuICB9XG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzZXQgZGlzcGxhY2VtZW50U2NhbGUodmFsdWU6IG51bWJlcikge1xuICAgIGlmICh0aGlzLl9vYmpSZWYpIHtcbiAgICAgIHRoaXMuX29ialJlZi5kaXNwbGFjZW1lbnRTY2FsZSA9IHZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBnZXQgZGlzcGxhY2VtZW50U2NhbGUoKTogbnVtYmVyIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fb2JqUmVmPy5kaXNwbGFjZW1lbnRTY2FsZTtcbiAgfVxuICBASW5wdXQoKVxuICBwdWJsaWMgc2V0IGRpc3BsYWNlbWVudEJpYXModmFsdWU6IG51bWJlcikge1xuICAgIGlmICh0aGlzLl9vYmpSZWYpIHtcbiAgICAgIHRoaXMuX29ialJlZi5kaXNwbGFjZW1lbnRCaWFzID0gdmFsdWU7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGdldCBkaXNwbGFjZW1lbnRCaWFzKCk6IG51bWJlciB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX29ialJlZj8uZGlzcGxhY2VtZW50QmlhcztcbiAgfVxuICBASW5wdXQoKVxuICBwdWJsaWMgc2V0IGFscGhhTWFwKHZhbHVlOiBUZXh0dXJlIHwgbnVsbCkge1xuICAgIGlmICh0aGlzLl9vYmpSZWYpIHtcbiAgICAgIHRoaXMuX29ialJlZi5hbHBoYU1hcCA9IHZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBnZXQgYWxwaGFNYXAoKTogKFRleHR1cmUgfCBudWxsKSB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX29ialJlZj8uYWxwaGFNYXA7XG4gIH1cbiAgQElucHV0KClcbiAgcHVibGljIHNldCB3aXJlZnJhbWUodmFsdWU6IGJvb2xlYW4pIHtcbiAgICBpZiAodGhpcy5fb2JqUmVmKSB7XG4gICAgICB0aGlzLl9vYmpSZWYud2lyZWZyYW1lID0gdmFsdWU7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGdldCB3aXJlZnJhbWUoKTogYm9vbGVhbiB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX29ialJlZj8ud2lyZWZyYW1lO1xuICB9XG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzZXQgd2lyZWZyYW1lTGluZXdpZHRoKHZhbHVlOiBudW1iZXIpIHtcbiAgICBpZiAodGhpcy5fb2JqUmVmKSB7XG4gICAgICB0aGlzLl9vYmpSZWYud2lyZWZyYW1lTGluZXdpZHRoID0gdmFsdWU7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGdldCB3aXJlZnJhbWVMaW5ld2lkdGgoKTogbnVtYmVyIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fb2JqUmVmPy53aXJlZnJhbWVMaW5ld2lkdGg7XG4gIH1cbiAgQElucHV0KClcbiAgcHVibGljIHNldCB3aXJlZnJhbWVMaW5lY2FwKHZhbHVlOiBzdHJpbmcpIHtcbiAgICBpZiAodGhpcy5fb2JqUmVmKSB7XG4gICAgICB0aGlzLl9vYmpSZWYud2lyZWZyYW1lTGluZWNhcCA9IHZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBnZXQgd2lyZWZyYW1lTGluZWNhcCgpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9vYmpSZWY/LndpcmVmcmFtZUxpbmVjYXA7XG4gIH1cbiAgQElucHV0KClcbiAgcHVibGljIHNldCB3aXJlZnJhbWVMaW5lam9pbih2YWx1ZTogc3RyaW5nKSB7XG4gICAgaWYgKHRoaXMuX29ialJlZikge1xuICAgICAgdGhpcy5fb2JqUmVmLndpcmVmcmFtZUxpbmVqb2luID0gdmFsdWU7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGdldCB3aXJlZnJhbWVMaW5lam9pbigpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9vYmpSZWY/LndpcmVmcmFtZUxpbmVqb2luO1xuICB9XG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzZXQgZm9nKHZhbHVlOiBib29sZWFuKSB7XG4gICAgaWYgKHRoaXMuX29ialJlZikge1xuICAgICAgdGhpcy5fb2JqUmVmLmZvZyA9IHZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBnZXQgZm9nKCk6IGJvb2xlYW4gfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9vYmpSZWY/LmZvZztcbiAgfVxufVxuIl19