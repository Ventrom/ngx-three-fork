/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix */
import { ChangeDetectionStrategy, Component, Input, forwardRef, } from '@angular/core';
import { MeshLambertMaterial, } from 'three';
import { applyValue } from '../util';
import { ThMaterial } from './ThMaterial';
import * as i0 from "@angular/core";
export class ThMeshLambertMaterial extends ThMaterial {
    getType() {
        return MeshLambertMaterial;
    }
    get isMeshLambertMaterial() {
        return this._objRef?.isMeshLambertMaterial;
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
    set flatShading(value) {
        if (this._objRef) {
            this._objRef.flatShading = value;
        }
    }
    get flatShading() {
        return this._objRef?.flatShading;
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
    set specularMap(value) {
        if (this._objRef) {
            this._objRef.specularMap = value;
        }
    }
    get specularMap() {
        return this._objRef?.specularMap;
    }
    set alphaMap(value) {
        if (this._objRef) {
            this._objRef.alphaMap = value;
        }
    }
    get alphaMap() {
        return this._objRef?.alphaMap;
    }
    set envMap(value) {
        if (this._objRef) {
            this._objRef.envMap = value;
        }
    }
    get envMap() {
        return this._objRef?.envMap;
    }
    set envMapRotation(value) {
        if (this._objRef) {
            this._objRef.envMapRotation = applyValue(this._objRef.envMapRotation, value);
        }
    }
    get envMapRotation() {
        return this._objRef?.envMapRotation;
    }
    set combine(value) {
        if (this._objRef) {
            this._objRef.combine = value;
        }
    }
    get combine() {
        return this._objRef?.combine;
    }
    set reflectivity(value) {
        if (this._objRef) {
            this._objRef.reflectivity = value;
        }
    }
    get reflectivity() {
        return this._objRef?.reflectivity;
    }
    set refractionRatio(value) {
        if (this._objRef) {
            this._objRef.refractionRatio = value;
        }
    }
    get refractionRatio() {
        return this._objRef?.refractionRatio;
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThMeshLambertMaterial, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.1.2", type: ThMeshLambertMaterial, selector: "th-meshLambertMaterial", inputs: { type: "type", color: "color", bumpMap: "bumpMap", bumpScale: "bumpScale", displacementMap: "displacementMap", displacementScale: "displacementScale", displacementBias: "displacementBias", emissive: "emissive", emissiveIntensity: "emissiveIntensity", emissiveMap: "emissiveMap", flatShading: "flatShading", map: "map", lightMap: "lightMap", lightMapIntensity: "lightMapIntensity", normalMap: "normalMap", normalMapType: "normalMapType", normalScale: "normalScale", aoMap: "aoMap", aoMapIntensity: "aoMapIntensity", specularMap: "specularMap", alphaMap: "alphaMap", envMap: "envMap", envMapRotation: "envMapRotation", combine: "combine", reflectivity: "reflectivity", refractionRatio: "refractionRatio", wireframe: "wireframe", wireframeLinewidth: "wireframeLinewidth", wireframeLinecap: "wireframeLinecap", wireframeLinejoin: "wireframeLinejoin", fog: "fog" }, providers: [
            {
                provide: ThMaterial,
                useExisting: forwardRef(() => ThMeshLambertMaterial),
            },
        ], usesInheritance: true, ngImport: i0, template: '<ng-content/>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThMeshLambertMaterial, decorators: [{
            type: Component,
            args: [{
                    selector: 'th-meshLambertMaterial',
                    template: '<ng-content/>',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    providers: [
                        {
                            provide: ThMaterial,
                            useExisting: forwardRef(() => ThMeshLambertMaterial),
                        },
                    ],
                }]
        }], propDecorators: { type: [{
                type: Input
            }], color: [{
                type: Input
            }], bumpMap: [{
                type: Input
            }], bumpScale: [{
                type: Input
            }], displacementMap: [{
                type: Input
            }], displacementScale: [{
                type: Input
            }], displacementBias: [{
                type: Input
            }], emissive: [{
                type: Input
            }], emissiveIntensity: [{
                type: Input
            }], emissiveMap: [{
                type: Input
            }], flatShading: [{
                type: Input
            }], map: [{
                type: Input
            }], lightMap: [{
                type: Input
            }], lightMapIntensity: [{
                type: Input
            }], normalMap: [{
                type: Input
            }], normalMapType: [{
                type: Input
            }], normalScale: [{
                type: Input
            }], aoMap: [{
                type: Input
            }], aoMapIntensity: [{
                type: Input
            }], specularMap: [{
                type: Input
            }], alphaMap: [{
                type: Input
            }], envMap: [{
                type: Input
            }], envMapRotation: [{
                type: Input
            }], combine: [{
                type: Input
            }], reflectivity: [{
                type: Input
            }], refractionRatio: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGhNZXNoTGFtYmVydE1hdGVyaWFsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LXRocmVlL3NyYy9saWIvZ2VuZXJhdGVkL1RoTWVzaExhbWJlcnRNYXRlcmlhbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSx5REFBeUQ7QUFDekQseUNBQXlDO0FBQ3pDLCtGQUErRjtBQUMvRixPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxLQUFLLEVBRUwsVUFBVSxHQUNYLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFNTCxtQkFBbUIsR0FLcEIsTUFBTSxPQUFPLENBQUM7QUFDZixPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sU0FBUyxDQUFDO0FBQ3JDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxjQUFjLENBQUM7O0FBYTFDLE1BQU0sT0FBTyxxQkFHWCxTQUFRLFVBQW9CO0lBQ3JCLE9BQU87UUFDWixPQUFPLG1CQUFtQixDQUFDO0lBQzdCLENBQUM7SUFFRCxJQUFXLHFCQUFxQjtRQUM5QixPQUFPLElBQUksQ0FBQyxPQUFPLEVBQUUscUJBQXFCLENBQUM7SUFDN0MsQ0FBQztJQUNELElBQ1csSUFBSSxDQUFDLEtBQWE7UUFDM0IsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDakIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDO1FBQzVCLENBQUM7SUFDSCxDQUFDO0lBRUQsSUFBVyxJQUFJO1FBQ2IsT0FBTyxJQUFJLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQztJQUM1QixDQUFDO0lBQ0QsSUFDVyxLQUFLLENBQ2QsS0FNSztRQUVMLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ2pCLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxHQUFHLFVBQVUsQ0FBUSxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxLQUFLLENB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RDtxQkFDRjtpQkFDRjs4QkFhWSxJQUFJO3NCQURkLEtBQUs7Z0JBV0ssS0FBSztzQkFEZixLQUFLO2dCQWtCSyxPQUFPO3NCQURqQixLQUFLO2dCQVdLLFNBQVM7c0JBRG5CLEtBQUs7Z0JBV0ssZUFBZTtzQkFEekIsS0FBSztnQkFXSyxpQkFBaUI7c0JBRDNCLEtBQUs7Z0JBV0ssZ0JBQWdCO3NCQUQxQixLQUFLO2dCQVdLLFFBQVE7c0JBRGxCLEtBQUs7Z0JBa0JLLGlCQUFpQjtzQkFEM0IsS0FBSztnQkFXSyxXQUFXO3NCQURyQixLQUFLO2dCQVdLLFdBQVc7c0JBRHJCLEtBQUs7Z0JBV0ssR0FBRztzQkFEYixLQUFLO2dCQVdLLFFBQVE7c0JBRGxCLEtBQUs7Z0JBV0ssaUJBQWlCO3NCQUQzQixLQUFLO2dCQVdLLFNBQVM7c0JBRG5CLEtBQUs7Z0JBV0ssYUFBYTtzQkFEdkIsS0FBSztnQkFXSyxXQUFXO3NCQURyQixLQUFLO2dCQWFLLEtBQUs7c0JBRGYsS0FBSztnQkFXSyxjQUFjO3NCQUR4QixLQUFLO2dCQVdLLFdBQVc7c0JBRHJCLEtBQUs7Z0JBV0ssUUFBUTtzQkFEbEIsS0FBSztnQkFXSyxNQUFNO3NCQURoQixLQUFLO2dCQVdLLGNBQWM7c0JBRHhCLEtBQUs7Z0JBZUssT0FBTztzQkFEakIsS0FBSztnQkFXSyxZQUFZO3NCQUR0QixLQUFLO2dCQVdLLGVBQWU7c0JBRHpCLEtBQUs7Z0JBV0ssU0FBUztzQkFEbkIsS0FBSztnQkFXSyxrQkFBa0I7c0JBRDVCLEtBQUs7Z0JBV0ssZ0JBQWdCO3NCQUQxQixLQUFLO2dCQVdLLGlCQUFpQjtzQkFEM0IsS0FBSztnQkFXSyxHQUFHO3NCQURiLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBAdHlwZXNjcmlwdC1lc2xpbnQvbmFtaW5nLWNvbnZlbnRpb24gKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vLXVuZGVyc2NvcmUtZGFuZ2xlICovXG4vKiBlc2xpbnQtZGlzYWJsZSBAYW5ndWxhci1lc2xpbnQvY29tcG9uZW50LXNlbGVjdG9yLCBAYW5ndWxhci1lc2xpbnQvY29tcG9uZW50LWNsYXNzLXN1ZmZpeCAqL1xuaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENvbXBvbmVudCxcbiAgSW5wdXQsXG4gIFR5cGUsXG4gIGZvcndhcmRSZWYsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgQ29sb3IsXG4gIENvbG9yUmVwcmVzZW50YXRpb24sXG4gIENvbWJpbmUsXG4gIEV1bGVyLFxuICBFdWxlck9yZGVyLFxuICBNZXNoTGFtYmVydE1hdGVyaWFsLFxuICBNZXNoTGFtYmVydE1hdGVyaWFsUGFyYW1ldGVycyxcbiAgTm9ybWFsTWFwVHlwZXMsXG4gIFRleHR1cmUsXG4gIFZlY3RvcjIsXG59IGZyb20gJ3RocmVlJztcbmltcG9ydCB7IGFwcGx5VmFsdWUgfSBmcm9tICcuLi91dGlsJztcbmltcG9ydCB7IFRoTWF0ZXJpYWwgfSBmcm9tICcuL1RoTWF0ZXJpYWwnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0aC1tZXNoTGFtYmVydE1hdGVyaWFsJyxcbiAgdGVtcGxhdGU6ICc8bmctY29udGVudC8+JyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHByb3ZpZGVyczogW1xuICAgIHtcbiAgICAgIHByb3ZpZGU6IFRoTWF0ZXJpYWwsXG4gICAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBUaE1lc2hMYW1iZXJ0TWF0ZXJpYWwpLFxuICAgIH0sXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIFRoTWVzaExhbWJlcnRNYXRlcmlhbDxcbiAgVCBleHRlbmRzIE1lc2hMYW1iZXJ0TWF0ZXJpYWwgPSBNZXNoTGFtYmVydE1hdGVyaWFsLFxuICBUQVJHUyA9IC8qIHBhcmFtZXRlcnM/ICovIE1lc2hMYW1iZXJ0TWF0ZXJpYWxQYXJhbWV0ZXJzLFxuPiBleHRlbmRzIFRoTWF0ZXJpYWw8VCwgVEFSR1M+IHtcbiAgcHVibGljIGdldFR5cGUoKTogVHlwZTxNZXNoTGFtYmVydE1hdGVyaWFsPiB7XG4gICAgcmV0dXJuIE1lc2hMYW1iZXJ0TWF0ZXJpYWw7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGlzTWVzaExhbWJlcnRNYXRlcmlhbCgpOiB0cnVlIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fb2JqUmVmPy5pc01lc2hMYW1iZXJ0TWF0ZXJpYWw7XG4gIH1cbiAgQElucHV0KClcbiAgcHVibGljIHNldCB0eXBlKHZhbHVlOiBzdHJpbmcpIHtcbiAgICBpZiAodGhpcy5fb2JqUmVmKSB7XG4gICAgICB0aGlzLl9vYmpSZWYudHlwZSA9IHZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBnZXQgdHlwZSgpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9vYmpSZWY/LnR5cGU7XG4gIH1cbiAgQElucHV0KClcbiAgcHVibGljIHNldCBjb2xvcihcbiAgICB2YWx1ZTpcbiAgICAgIHwgQ29sb3JcbiAgICAgIHwgW1xuICAgICAgICAgIC4uLmFyZ3M6XG4gICAgICAgICAgICB8IFtjb2xvcjogQ29sb3JSZXByZXNlbnRhdGlvbl1cbiAgICAgICAgICAgIHwgW3I6IG51bWJlciwgZzogbnVtYmVyLCBiOiBudW1iZXJdLFxuICAgICAgICBdLFxuICApIHtcbiAgICBpZiAodGhpcy5fb2JqUmVmKSB7XG4gICAgICB0aGlzLl9vYmpSZWYuY29sb3IgPSBhcHBseVZhbHVlPENvbG9yPih0aGlzLl9vYmpSZWYuY29sb3IsIHZhbHVlKTtcbiAgICB9XG4gIH1cbiAgcHVibGljIGdldCBjb2xvcigpOiBDb2xvciB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX29ialJlZj8uY29sb3I7XG4gIH1cbiAgQElucHV0KClcbiAgcHVibGljIHNldCBidW1wTWFwKHZhbHVlOiBUZXh0dXJlIHwgbnVsbCkge1xuICAgIGlmICh0aGlzLl9vYmpSZWYpIHtcbiAgICAgIHRoaXMuX29ialJlZi5idW1wTWFwID0gdmFsdWU7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGdldCBidW1wTWFwKCk6IChUZXh0dXJlIHwgbnVsbCkgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9vYmpSZWY/LmJ1bXBNYXA7XG4gIH1cbiAgQElucHV0KClcbiAgcHVibGljIHNldCBidW1wU2NhbGUodmFsdWU6IG51bWJlcikge1xuICAgIGlmICh0aGlzLl9vYmpSZWYpIHtcbiAgICAgIHRoaXMuX29ialJlZi5idW1wU2NhbGUgPSB2YWx1ZTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgZ2V0IGJ1bXBTY2FsZSgpOiBudW1iZXIgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9vYmpSZWY/LmJ1bXBTY2FsZTtcbiAgfVxuICBASW5wdXQoKVxuICBwdWJsaWMgc2V0IGRpc3BsYWNlbWVudE1hcCh2YWx1ZTogVGV4dHVyZSB8IG51bGwpIHtcbiAgICBpZiAodGhpcy5fb2JqUmVmKSB7XG4gICAgICB0aGlzLl9vYmpSZWYuZGlzcGxhY2VtZW50TWFwID0gdmFsdWU7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGdldCBkaXNwbGFjZW1lbnRNYXAoKTogKFRleHR1cmUgfCBudWxsKSB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX29ialJlZj8uZGlzcGxhY2VtZW50TWFwO1xuICB9XG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzZXQgZGlzcGxhY2VtZW50U2NhbGUodmFsdWU6IG51bWJlcikge1xuICAgIGlmICh0aGlzLl9vYmpSZWYpIHtcbiAgICAgIHRoaXMuX29ialJlZi5kaXNwbGFjZW1lbnRTY2FsZSA9IHZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBnZXQgZGlzcGxhY2VtZW50U2NhbGUoKTogbnVtYmVyIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fb2JqUmVmPy5kaXNwbGFjZW1lbnRTY2FsZTtcbiAgfVxuICBASW5wdXQoKVxuICBwdWJsaWMgc2V0IGRpc3BsYWNlbWVudEJpYXModmFsdWU6IG51bWJlcikge1xuICAgIGlmICh0aGlzLl9vYmpSZWYpIHtcbiAgICAgIHRoaXMuX29ialJlZi5kaXNwbGFjZW1lbnRCaWFzID0gdmFsdWU7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGdldCBkaXNwbGFjZW1lbnRCaWFzKCk6IG51bWJlciB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX29ialJlZj8uZGlzcGxhY2VtZW50QmlhcztcbiAgfVxuICBASW5wdXQoKVxuICBwdWJsaWMgc2V0IGVtaXNzaXZlKFxuICAgIHZhbHVlOlxuICAgICAgfCBDb2xvclxuICAgICAgfCBbXG4gICAgICAgICAgLi4uYXJnczpcbiAgICAgICAgICAgIHwgW2NvbG9yOiBDb2xvclJlcHJlc2VudGF0aW9uXVxuICAgICAgICAgICAgfCBbcjogbnVtYmVyLCBnOiBudW1iZXIsIGI6IG51bWJlcl0sXG4gICAgICAgIF0sXG4gICkge1xuICAgIGlmICh0aGlzLl9vYmpSZWYpIHtcbiAgICAgIHRoaXMuX29ialJlZi5lbWlzc2l2ZSA9IGFwcGx5VmFsdWU8Q29sb3I+KHRoaXMuX29ialJlZi5lbWlzc2l2ZSwgdmFsdWUpO1xuICAgIH1cbiAgfVxuICBwdWJsaWMgZ2V0IGVtaXNzaXZlKCk6IENvbG9yIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fb2JqUmVmPy5lbWlzc2l2ZTtcbiAgfVxuICBASW5wdXQoKVxuICBwdWJsaWMgc2V0IGVtaXNzaXZlSW50ZW5zaXR5KHZhbHVlOiBudW1iZXIpIHtcbiAgICBpZiAodGhpcy5fb2JqUmVmKSB7XG4gICAgICB0aGlzLl9vYmpSZWYuZW1pc3NpdmVJbnRlbnNpdHkgPSB2YWx1ZTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgZ2V0IGVtaXNzaXZlSW50ZW5zaXR5KCk6IG51bWJlciB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX29ialJlZj8uZW1pc3NpdmVJbnRlbnNpdHk7XG4gIH1cbiAgQElucHV0KClcbiAgcHVibGljIHNldCBlbWlzc2l2ZU1hcCh2YWx1ZTogVGV4dHVyZSB8IG51bGwpIHtcbiAgICBpZiAodGhpcy5fb2JqUmVmKSB7XG4gICAgICB0aGlzLl9vYmpSZWYuZW1pc3NpdmVNYXAgPSB2YWx1ZTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgZ2V0IGVtaXNzaXZlTWFwKCk6IChUZXh0dXJlIHwgbnVsbCkgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9vYmpSZWY/LmVtaXNzaXZlTWFwO1xuICB9XG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzZXQgZmxhdFNoYWRpbmcodmFsdWU6IGJvb2xlYW4pIHtcbiAgICBpZiAodGhpcy5fb2JqUmVmKSB7XG4gICAgICB0aGlzLl9vYmpSZWYuZmxhdFNoYWRpbmcgPSB2YWx1ZTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgZ2V0IGZsYXRTaGFkaW5nKCk6IGJvb2xlYW4gfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9vYmpSZWY/LmZsYXRTaGFkaW5nO1xuICB9XG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzZXQgbWFwKHZhbHVlOiBUZXh0dXJlIHwgbnVsbCkge1xuICAgIGlmICh0aGlzLl9vYmpSZWYpIHtcbiAgICAgIHRoaXMuX29ialJlZi5tYXAgPSB2YWx1ZTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgZ2V0IG1hcCgpOiAoVGV4dHVyZSB8IG51bGwpIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fb2JqUmVmPy5tYXA7XG4gIH1cbiAgQElucHV0KClcbiAgcHVibGljIHNldCBsaWdodE1hcCh2YWx1ZTogVGV4dHVyZSB8IG51bGwpIHtcbiAgICBpZiAodGhpcy5fb2JqUmVmKSB7XG4gICAgICB0aGlzLl9vYmpSZWYubGlnaHRNYXAgPSB2YWx1ZTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgZ2V0IGxpZ2h0TWFwKCk6IChUZXh0dXJlIHwgbnVsbCkgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9vYmpSZWY/LmxpZ2h0TWFwO1xuICB9XG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzZXQgbGlnaHRNYXBJbnRlbnNpdHkodmFsdWU6IG51bWJlcikge1xuICAgIGlmICh0aGlzLl9vYmpSZWYpIHtcbiAgICAgIHRoaXMuX29ialJlZi5saWdodE1hcEludGVuc2l0eSA9IHZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBnZXQgbGlnaHRNYXBJbnRlbnNpdHkoKTogbnVtYmVyIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fb2JqUmVmPy5saWdodE1hcEludGVuc2l0eTtcbiAgfVxuICBASW5wdXQoKVxuICBwdWJsaWMgc2V0IG5vcm1hbE1hcCh2YWx1ZTogVGV4dHVyZSB8IG51bGwpIHtcbiAgICBpZiAodGhpcy5fb2JqUmVmKSB7XG4gICAgICB0aGlzLl9vYmpSZWYubm9ybWFsTWFwID0gdmFsdWU7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGdldCBub3JtYWxNYXAoKTogKFRleHR1cmUgfCBudWxsKSB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX29ialJlZj8ubm9ybWFsTWFwO1xuICB9XG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzZXQgbm9ybWFsTWFwVHlwZSh2YWx1ZTogTm9ybWFsTWFwVHlwZXMpIHtcbiAgICBpZiAodGhpcy5fb2JqUmVmKSB7XG4gICAgICB0aGlzLl9vYmpSZWYubm9ybWFsTWFwVHlwZSA9IHZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBnZXQgbm9ybWFsTWFwVHlwZSgpOiBOb3JtYWxNYXBUeXBlcyB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX29ialJlZj8ubm9ybWFsTWFwVHlwZTtcbiAgfVxuICBASW5wdXQoKVxuICBwdWJsaWMgc2V0IG5vcm1hbFNjYWxlKHZhbHVlOiBWZWN0b3IyIHwgW3g6IG51bWJlciwgeTogbnVtYmVyXSkge1xuICAgIGlmICh0aGlzLl9vYmpSZWYpIHtcbiAgICAgIHRoaXMuX29ialJlZi5ub3JtYWxTY2FsZSA9IGFwcGx5VmFsdWU8VmVjdG9yMj4oXG4gICAgICAgIHRoaXMuX29ialJlZi5ub3JtYWxTY2FsZSxcbiAgICAgICAgdmFsdWUsXG4gICAgICApO1xuICAgIH1cbiAgfVxuICBwdWJsaWMgZ2V0IG5vcm1hbFNjYWxlKCk6IFZlY3RvcjIgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9vYmpSZWY/Lm5vcm1hbFNjYWxlO1xuICB9XG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzZXQgYW9NYXAodmFsdWU6IFRleHR1cmUgfCBudWxsKSB7XG4gICAgaWYgKHRoaXMuX29ialJlZikge1xuICAgICAgdGhpcy5fb2JqUmVmLmFvTWFwID0gdmFsdWU7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGdldCBhb01hcCgpOiAoVGV4dHVyZSB8IG51bGwpIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fb2JqUmVmPy5hb01hcDtcbiAgfVxuICBASW5wdXQoKVxuICBwdWJsaWMgc2V0IGFvTWFwSW50ZW5zaXR5KHZhbHVlOiBudW1iZXIpIHtcbiAgICBpZiAodGhpcy5fb2JqUmVmKSB7XG4gICAgICB0aGlzLl9vYmpSZWYuYW9NYXBJbnRlbnNpdHkgPSB2YWx1ZTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgZ2V0IGFvTWFwSW50ZW5zaXR5KCk6IG51bWJlciB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX29ialJlZj8uYW9NYXBJbnRlbnNpdHk7XG4gIH1cbiAgQElucHV0KClcbiAgcHVibGljIHNldCBzcGVjdWxhck1hcCh2YWx1ZTogVGV4dHVyZSB8IG51bGwpIHtcbiAgICBpZiAodGhpcy5fb2JqUmVmKSB7XG4gICAgICB0aGlzLl9vYmpSZWYuc3BlY3VsYXJNYXAgPSB2YWx1ZTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgZ2V0IHNwZWN1bGFyTWFwKCk6IChUZXh0dXJlIHwgbnVsbCkgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9vYmpSZWY/LnNwZWN1bGFyTWFwO1xuICB9XG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzZXQgYWxwaGFNYXAodmFsdWU6IFRleHR1cmUgfCBudWxsKSB7XG4gICAgaWYgKHRoaXMuX29ialJlZikge1xuICAgICAgdGhpcy5fb2JqUmVmLmFscGhhTWFwID0gdmFsdWU7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGdldCBhbHBoYU1hcCgpOiAoVGV4dHVyZSB8IG51bGwpIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fb2JqUmVmPy5hbHBoYU1hcDtcbiAgfVxuICBASW5wdXQoKVxuICBwdWJsaWMgc2V0IGVudk1hcCh2YWx1ZTogVGV4dHVyZSB8IG51bGwpIHtcbiAgICBpZiAodGhpcy5fb2JqUmVmKSB7XG4gICAgICB0aGlzLl9vYmpSZWYuZW52TWFwID0gdmFsdWU7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGdldCBlbnZNYXAoKTogKFRleHR1cmUgfCBudWxsKSB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX29ialJlZj8uZW52TWFwO1xuICB9XG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzZXQgZW52TWFwUm90YXRpb24oXG4gICAgdmFsdWU6IEV1bGVyIHwgW3g6IG51bWJlciwgeTogbnVtYmVyLCB6OiBudW1iZXIsIG9yZGVyPzogRXVsZXJPcmRlcl0sXG4gICkge1xuICAgIGlmICh0aGlzLl9vYmpSZWYpIHtcbiAgICAgIHRoaXMuX29ialJlZi5lbnZNYXBSb3RhdGlvbiA9IGFwcGx5VmFsdWU8RXVsZXI+KFxuICAgICAgICB0aGlzLl9vYmpSZWYuZW52TWFwUm90YXRpb24sXG4gICAgICAgIHZhbHVlLFxuICAgICAgKTtcbiAgICB9XG4gIH1cbiAgcHVibGljIGdldCBlbnZNYXBSb3RhdGlvbigpOiBFdWxlciB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX29ialJlZj8uZW52TWFwUm90YXRpb247XG4gIH1cbiAgQElucHV0KClcbiAgcHVibGljIHNldCBjb21iaW5lKHZhbHVlOiBDb21iaW5lKSB7XG4gICAgaWYgKHRoaXMuX29ialJlZikge1xuICAgICAgdGhpcy5fb2JqUmVmLmNvbWJpbmUgPSB2YWx1ZTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgZ2V0IGNvbWJpbmUoKTogQ29tYmluZSB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX29ialJlZj8uY29tYmluZTtcbiAgfVxuICBASW5wdXQoKVxuICBwdWJsaWMgc2V0IHJlZmxlY3Rpdml0eSh2YWx1ZTogbnVtYmVyKSB7XG4gICAgaWYgKHRoaXMuX29ialJlZikge1xuICAgICAgdGhpcy5fb2JqUmVmLnJlZmxlY3Rpdml0eSA9IHZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBnZXQgcmVmbGVjdGl2aXR5KCk6IG51bWJlciB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX29ialJlZj8ucmVmbGVjdGl2aXR5O1xuICB9XG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzZXQgcmVmcmFjdGlvblJhdGlvKHZhbHVlOiBudW1iZXIpIHtcbiAgICBpZiAodGhpcy5fb2JqUmVmKSB7XG4gICAgICB0aGlzLl9vYmpSZWYucmVmcmFjdGlvblJhdGlvID0gdmFsdWU7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGdldCByZWZyYWN0aW9uUmF0aW8oKTogbnVtYmVyIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fb2JqUmVmPy5yZWZyYWN0aW9uUmF0aW87XG4gIH1cbiAgQElucHV0KClcbiAgcHVibGljIHNldCB3aXJlZnJhbWUodmFsdWU6IGJvb2xlYW4pIHtcbiAgICBpZiAodGhpcy5fb2JqUmVmKSB7XG4gICAgICB0aGlzLl9vYmpSZWYud2lyZWZyYW1lID0gdmFsdWU7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGdldCB3aXJlZnJhbWUoKTogYm9vbGVhbiB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX29ialJlZj8ud2lyZWZyYW1lO1xuICB9XG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzZXQgd2lyZWZyYW1lTGluZXdpZHRoKHZhbHVlOiBudW1iZXIpIHtcbiAgICBpZiAodGhpcy5fb2JqUmVmKSB7XG4gICAgICB0aGlzLl9vYmpSZWYud2lyZWZyYW1lTGluZXdpZHRoID0gdmFsdWU7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGdldCB3aXJlZnJhbWVMaW5ld2lkdGgoKTogbnVtYmVyIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fb2JqUmVmPy53aXJlZnJhbWVMaW5ld2lkdGg7XG4gIH1cbiAgQElucHV0KClcbiAgcHVibGljIHNldCB3aXJlZnJhbWVMaW5lY2FwKHZhbHVlOiBzdHJpbmcpIHtcbiAgICBpZiAodGhpcy5fb2JqUmVmKSB7XG4gICAgICB0aGlzLl9vYmpSZWYud2lyZWZyYW1lTGluZWNhcCA9IHZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBnZXQgd2lyZWZyYW1lTGluZWNhcCgpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9vYmpSZWY/LndpcmVmcmFtZUxpbmVjYXA7XG4gIH1cbiAgQElucHV0KClcbiAgcHVibGljIHNldCB3aXJlZnJhbWVMaW5lam9pbih2YWx1ZTogc3RyaW5nKSB7XG4gICAgaWYgKHRoaXMuX29ialJlZikge1xuICAgICAgdGhpcy5fb2JqUmVmLndpcmVmcmFtZUxpbmVqb2luID0gdmFsdWU7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGdldCB3aXJlZnJhbWVMaW5lam9pbigpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9vYmpSZWY/LndpcmVmcmFtZUxpbmVqb2luO1xuICB9XG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzZXQgZm9nKHZhbHVlOiBib29sZWFuKSB7XG4gICAgaWYgKHRoaXMuX29ialJlZikge1xuICAgICAgdGhpcy5fb2JqUmVmLmZvZyA9IHZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBnZXQgZm9nKCk6IGJvb2xlYW4gfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9vYmpSZWY/LmZvZztcbiAgfVxufVxuIl19