/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix */
import { ChangeDetectionStrategy, Component, Input, forwardRef, } from '@angular/core';
import { MeshStandardMaterial, } from 'three';
import { applyValue } from '../util';
import { ThMaterial } from './ThMaterial';
import * as i0 from "@angular/core";
export class ThMeshStandardMaterial extends ThMaterial {
    getType() {
        return MeshStandardMaterial;
    }
    get isMeshStandardMaterial() {
        return this._objRef?.isMeshStandardMaterial;
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
    set roughness(value) {
        if (this._objRef) {
            this._objRef.roughness = value;
        }
    }
    get roughness() {
        return this._objRef?.roughness;
    }
    set metalness(value) {
        if (this._objRef) {
            this._objRef.metalness = value;
        }
    }
    get metalness() {
        return this._objRef?.metalness;
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
    set roughnessMap(value) {
        if (this._objRef) {
            this._objRef.roughnessMap = value;
        }
    }
    get roughnessMap() {
        return this._objRef?.roughnessMap;
    }
    set metalnessMap(value) {
        if (this._objRef) {
            this._objRef.metalnessMap = value;
        }
    }
    get metalnessMap() {
        return this._objRef?.metalnessMap;
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
    set envMapIntensity(value) {
        if (this._objRef) {
            this._objRef.envMapIntensity = value;
        }
    }
    get envMapIntensity() {
        return this._objRef?.envMapIntensity;
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
    set flatShading(value) {
        if (this._objRef) {
            this._objRef.flatShading = value;
        }
    }
    get flatShading() {
        return this._objRef?.flatShading;
    }
    set fog(value) {
        if (this._objRef) {
            this._objRef.fog = value;
        }
    }
    get fog() {
        return this._objRef?.fog;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThMeshStandardMaterial, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.1.2", type: ThMeshStandardMaterial, selector: "th-meshStandardMaterial", inputs: { type: "type", defines: "defines", color: "color", roughness: "roughness", metalness: "metalness", map: "map", lightMap: "lightMap", lightMapIntensity: "lightMapIntensity", aoMap: "aoMap", aoMapIntensity: "aoMapIntensity", emissive: "emissive", emissiveIntensity: "emissiveIntensity", emissiveMap: "emissiveMap", bumpMap: "bumpMap", bumpScale: "bumpScale", normalMap: "normalMap", normalMapType: "normalMapType", normalScale: "normalScale", displacementMap: "displacementMap", displacementScale: "displacementScale", displacementBias: "displacementBias", roughnessMap: "roughnessMap", metalnessMap: "metalnessMap", alphaMap: "alphaMap", envMap: "envMap", envMapRotation: "envMapRotation", envMapIntensity: "envMapIntensity", wireframe: "wireframe", wireframeLinewidth: "wireframeLinewidth", wireframeLinecap: "wireframeLinecap", wireframeLinejoin: "wireframeLinejoin", flatShading: "flatShading", fog: "fog" }, providers: [
            {
                provide: ThMaterial,
                useExisting: forwardRef(() => ThMeshStandardMaterial),
            },
        ], usesInheritance: true, ngImport: i0, template: '<ng-content/>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThMeshStandardMaterial, decorators: [{
            type: Component,
            args: [{
                    selector: 'th-meshStandardMaterial',
                    template: '<ng-content/>',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    providers: [
                        {
                            provide: ThMaterial,
                            useExisting: forwardRef(() => ThMeshStandardMaterial),
                        },
                    ],
                }]
        }], propDecorators: { type: [{
                type: Input
            }], defines: [{
                type: Input
            }], color: [{
                type: Input
            }], roughness: [{
                type: Input
            }], metalness: [{
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
            }], roughnessMap: [{
                type: Input
            }], metalnessMap: [{
                type: Input
            }], alphaMap: [{
                type: Input
            }], envMap: [{
                type: Input
            }], envMapRotation: [{
                type: Input
            }], envMapIntensity: [{
                type: Input
            }], wireframe: [{
                type: Input
            }], wireframeLinewidth: [{
                type: Input
            }], wireframeLinecap: [{
                type: Input
            }], wireframeLinejoin: [{
                type: Input
            }], flatShading: [{
                type: Input
            }], fog: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGhNZXNoU3RhbmRhcmRNYXRlcmlhbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC10aHJlZS9zcmMvbGliL2dlbmVyYXRlZC9UaE1lc2hTdGFuZGFyZE1hdGVyaWFsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHlEQUF5RDtBQUN6RCx5Q0FBeUM7QUFDekMsK0ZBQStGO0FBQy9GLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULEtBQUssRUFFTCxVQUFVLEdBQ1gsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUtMLG9CQUFvQixHQUtyQixNQUFNLE9BQU8sQ0FBQztBQUNmLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxTQUFTLENBQUM7QUFDckMsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGNBQWMsQ0FBQzs7QUFhMUMsTUFBTSxPQUFPLHNCQUdYLFNBQVEsVUFBb0I7SUFDckIsT0FBTztRQUNaLE9BQU8sb0JBQW9CLENBQUM7SUFDOUIsQ0FBQztJQUVELElBQVcsc0JBQXNCO1FBQy9CLE9BQU8sSUFBSSxDQUFDLE9BQU8sRUFBRSxzQkFBc0IsQ0FBQztJQUM5QyxDQUFDO0lBQ0QsSUFDVyxJQUFJLENBQUMsS0FBYTtRQUMzQixJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUNqQixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksR0FBRyxLQUFLLENBQUM7UUFDNUIsQ0FBQztJQUNILENBQUM7SUFFRCxJQUFXLElBQUk7UUFDYixPQUFPLElBQUksQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDO0lBQzVCLENBQUM7SUFDRCxJQUNXLE9BQU8sQ0FBQyxLQUE2QjtRQUM5QyxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUNqQixJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7UUFDL0IsQ0FBQztJQUNILENBQUM7SUFFRCxJQUFXLE9BQU87UUFDaEIsT0FBTyxJQUFJLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQztJQUMvQixDQUFDO0lBQ0QsSUFDVyxLQUFLLENBQ2QsS0FNSztRQUVMLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ2pCLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxHQUFHLFVBQVUsQ0FBUSxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsQ0FBQztRQUNwRSxDQUFDO0lBQ0gsQ0FBQztJQUNELElBQVcsS0FBSztRQUNkLE9BQU8sSUFBSSxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUM7SUFDN0IsQ0FBQztJQUNELElBQ1csU0FBUyxDQUFDLEtBQWE7UUFDaEMsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDakIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1FBQ2pDLENBQUM7SUFDSCxDQUFDO0lBRUQsSUFBVyxTQUFTO1FBQ2xCLE9BQU8sSUFBSSxDQUFDLE9BQU8sRUFBRSxTQUFTLENBQUM7SUFDakMsQ0FBQztJQUNELElBQ1csU0FBUyxDQUFDLEtBQWE7UUFDaEMsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDakIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1FBQ2pDLENBQUM7SUFDSCxDQUFDO0lBRUQsSUFBVyxTQUFTO1FBQ2xCLE9BQU8sSUFBSSxDQUFDLE9BQU8sRUFBRSxTQUFTLENBQUM7SUFDakMsQ0FBQztJQUNELElBQ1csR0FBRyxDQUFDLEtBQXFCO1FBQ2xDLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ2pCLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxHQUFHLEtBQUssQ0FBQztRQUMzQixDQUFDO0lBQ0gsQ0FBQztJQUVELElBQVcsR0FBRztRQUNaLE9BQU8sSUFBSSxDQUFDLE9BQU8sRUFBRSxHQUFHLENBQUM7SUFDM0IsQ0FBQztJQUNELElBQ1csUUFBUSxDQUFDLEtBQXFCO1FBQ3ZDLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ2pCLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztRQUNoQyxDQUFDO0lBQ0gsQ0FBQztJQUVELElBQVcsUUFBUTtRQUNqQixPQUFPLElBQUksQ0FBQyxPQUFPLEVBQUUsUUFBUSxDQUFDO0lBQ2hDLENBQUM7SUFDRCxJQUNXLGlCQUFpQixDQUFDLEtBQWE7UUFDeEMsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDakIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxpQkFBaUIsR0FBRyxLQUFLLENBQUM7UUFDekMsQ0FBQztJQUNILENBQUM7SUFFRCxJQUFXLGlCQUFpQjtRQUMxQixPQUFPLElBQUksQ0FBQyxPQUFPLEVBQUUsaUJBQWlCLENBQUM7SUFDekMsQ0FBQztJQUNELElBQ1csS0FBSyxDQUFDLEtBQXFCO1FBQ3BDLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ2pCLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUM3QixDQUFDO0lBQ0gsQ0FBQztJQUVELElBQVcsS0FBSztRQUNkLE9BQU8sSUFBSSxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUM7SUFDN0IsQ0FBQztJQUNELElBQ1csY0FBYyxDQUFDLEtBQWE7UUFDckMsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDakIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxjQUFjLEdBQUcsS0FBSyxDQUFDO1FBQ3RDLENBQUM7SUFDSCxDQUFDO0lBRUQsSUFBVyxjQUFjO1FBQ3ZCLE9BQU8sSUFBSSxDQUFDLE9BQU8sRUFBRSxjQUFjLENBQUM7SUFDdEMsQ0FBQztJQUNELElBQ1csUUFBUSxDQUNqQixLQU1LO1FBRUwsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDakIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEdBQUcsVUFBVSxDQUFRLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQzFFLENBQUM7SUFDSCxDQUFDO0lBQ0QsSUFBVyxRQUFRO1FBQ2pCLE9BQU8sSUFBSSxDQUFDLE9BQU8sRUFBRSxRQUFRLENBQUM7SUFDaEMsQ0FBQztJQUNELElBQ1csaUJBQWlCLENBQUMsS0FBYTtRQUN4QyxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUNqQixJQUFJLENBQUMsT0FBTyxDQUFDLGlCQUFpQixHQUFHLEtBQUssQ0FBQztRQUN6QyxDQUFDO0lBQ0gsQ0FBQztJQUVELElBQVcsaUJBQWlCO1FBQzFCLE9BQU8sSUFBSSxDQUFDLE9BQU8sRUFBRSxpQkFBaUIsQ0FBQztJQUN6QyxDQUFDO0lBQ0QsSUFDVyxXQUFXLENBQUMsS0FBcUI7UUFDMUMsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDakIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDO1FBQ25DLENBQUM7SUFDSCxDQUFDO0lBRUQsSUFBVyxXQUFXO1FBQ3BCLE9BQU8sSUFBSSxDQUFDLE9BQU8sRUFBRSxXQUFXLENBQUM7SUFDbkMsQ0FBQztJQUNELElBQ1csT0FBTyxDQUFDLEtBQXFCO1FBQ3RDLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ2pCLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztRQUMvQixDQUFDO0lBQ0gsQ0FBQztJQUVELElBQVcsT0FBTztRQUNoQixPQUFPLElBQUksQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDO0lBQy9CLENBQUM7SUFDRCxJQUNXLFNBQVMsQ0FBQyxLQUFhO1FBQ2hDLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ2pCLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztRQUNqQyxDQUFDO0lBQ0gsQ0FBQztJQUVELElBQVcsU0FBUztRQUNsQixPQUFPLElBQUksQ0FBQyxPQUFPLEVBQUUsU0FBUyxDQUFDO0lBQ2pDLENBQUM7SUFDRCxJQUNXLFNBQVMsQ0FBQyxLQUFxQjtRQUN4QyxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUNqQixJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7UUFDakMsQ0FBQztJQUNILENBQUM7SUFFRCxJQUFXLFNBQVM7UUFDbEIsT0FBTyxJQUFJLENBQUMsT0FBTyxFQUFFLFNBQVMsQ0FBQztJQUNqQyxDQUFDO0lBQ0QsSUFDVyxhQUFhLENBQUMsS0FBcUI7UUFDNUMsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDakIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO1FBQ3JDLENBQUM7SUFDSCxDQUFDO0lBRUQsSUFBVyxhQUFhO1FBQ3RCLE9BQU8sSUFBSSxDQUFDLE9BQU8sRUFBRSxhQUFhLENBQUM7SUFDckMsQ0FBQztJQUNELElBQ1csV0FBVyxDQUFDLEtBQXVDO1FBQzVELElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ2pCLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxHQUFHLFVBQVUsQ0FDbkMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQ3hCLEtBQUssQ0FDTixDQUFDO1FBQ0osQ0FBQztJQUNILENBQUM7SUFDRCxJQUFXLFdBQVc7UUFDcEIsT0FBTyxJQUFJLENBQUMsT0FBTyxFQUFFLFdBQVcsQ0FBQztJQUNuQyxDQUFDO0lBQ0QsSUFDVyxlQUFlLENBQUMsS0FBcUI7UUFDOUMsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDakIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxlQUFlLEdBQUcsS0FBSyxDQUFDO1FBQ3ZDLENBQUM7SUFDSCxDQUFDO0lBRUQsSUFBVyxlQUFlO1FBQ3hCLE9BQU8sSUFBSSxDQUFDLE9BQU8sRUFBRSxlQUFlLENBQUM7SUFDdkMsQ0FBQztJQUNELElBQ1csaUJBQWlCLENBQUMsS0FBYTtRQUN4QyxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUNqQixJQUFJLENBQUMsT0FBTyxDQUFDLGlCQUFpQixHQUFHLEtBQUssQ0FBQztRQUN6QyxDQUFDO0lBQ0gsQ0FBQztJQUVELElBQVcsaUJBQWlCO1FBQzFCLE9BQU8sSUFBSSxDQUFDLE9BQU8sRUFBRSxpQkFBaUIsQ0FBQztJQUN6QyxDQUFDO0lBQ0QsSUFDVyxnQkFBZ0IsQ0FBQyxLQUFhO1FBQ3ZDLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ2pCLElBQUksQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLEdBQUcsS0FBSyxDQUFDO1FBQ3hDLENBQUM7SUFDSCxDQUFDO0lBRUQsSUFBVyxnQkFBZ0I7UUFDekIsT0FBTyxJQUFJLENBQUMsT0FBTyxFQUFFLGdCQUFnQixDQUFDO0lBQ3hDLENBQUM7SUFDRCxJQUNXLFlBQVksQ0FBQyxLQUFxQjtRQUMzQyxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUNqQixJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7UUFDcEMsQ0FBQztJQUNILENBQUM7SUFFRCxJQUFXLFlBQVk7UUFDckIsT0FBTyxJQUFJLENBQUMsT0FBTyxFQUFFLFlBQVksQ0FBQztJQUNwQyxDQUFDO0lBQ0QsSUFDVyxZQUFZLENBQUMsS0FBcUI7UUFDM0MsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDakIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO1FBQ3BDLENBQUM7SUFDSCxDQUFDO0lBRUQsSUFBVyxZQUFZO1FBQ3JCLE9BQU8sSUFBSSxDQUFDLE9BQU8sRUFBRSxZQUFZLENBQUM7SUFDcEMsQ0FBQztJQUNELElBQ1csUUFBUSxDQUFDLEtBQXFCO1FBQ3ZDLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ2pCLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztRQUNoQyxDQUFDO0lBQ0gsQ0FBQztJQUVELElBQVcsUUFBUTtRQUNqQixPQUFPLElBQUksQ0FBQyxPQUFPLEVBQUUsUUFBUSxDQUFDO0lBQ2hDLENBQUM7SUFDRCxJQUNXLE1BQU0sQ0FBQyxLQUFxQjtRQUNyQyxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUNqQixJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDOUIsQ0FBQztJQUNILENBQUM7SUFFRCxJQUFXLE1BQU07UUFDZixPQUFPLElBQUksQ0FBQyxPQUFPLEVBQUUsTUFBTSxDQUFDO0lBQzlCLENBQUM7SUFDRCxJQUNXLGNBQWMsQ0FDdkIsS0FBb0U7UUFFcEUsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDakIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxjQUFjLEdBQUcsVUFBVSxDQUN0QyxJQUFJLENBQUMsT0FBTyxDQUFDLGNBQWMsRUFDM0IsS0FBSyxDQUNOLENBQUM7UUFDSixDQUFDO0lBQ0gsQ0FBQztJQUNELElBQVcsY0FBYztRQUN2QixPQUFPLElBQUksQ0FBQyxPQUFPLEVBQUUsY0FBYyxDQUFDO0lBQ3RDLENBQUM7SUFDRCxJQUNXLGVBQWUsQ0FBQyxLQUFhO1FBQ3RDLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ2pCLElBQUksQ0FBQyxPQUFPLENBQUMsZUFBZSxHQUFHLEtBQUssQ0FBQztRQUN2QyxDQUFDO0lBQ0gsQ0FBQztJQUVELElBQVcsZUFBZTtRQUN4QixPQUFPLElBQUksQ0FBQyxPQUFPLEVBQUUsZUFBZSxDQUFDO0lBQ3ZDLENBQUM7SUFDRCxJQUNXLFNBQVMsQ0FBQyxLQUFjO1FBQ2pDLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ2pCLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztRQUNqQyxDQUFDO0lBQ0gsQ0FBQztJQUVELElBQVcsU0FBUztRQUNsQixPQUFPLElBQUksQ0FBQyxPQUFPLEVBQUUsU0FBUyxDQUFDO0lBQ2pDLENBQUM7SUFDRCxJQUNXLGtCQUFrQixDQUFDLEtBQWE7UUFDekMsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDakIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxrQkFBa0IsR0FBRyxLQUFLLENBQUM7UUFDMUMsQ0FBQztJQUNILENBQUM7SUFFRCxJQUFXLGtCQUFrQjtRQUMzQixPQUFPLElBQUksQ0FBQyxPQUFPLEVBQUUsa0JBQWtCLENBQUM7SUFDMUMsQ0FBQztJQUNELElBQ1csZ0JBQWdCLENBQUMsS0FBYTtRQUN2QyxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUNqQixJQUFJLENBQUMsT0FBTyxDQUFDLGdCQUFnQixHQUFHLEtBQUssQ0FBQztRQUN4QyxDQUFDO0lBQ0gsQ0FBQztJQUVELElBQVcsZ0JBQWdCO1FBQ3pCLE9BQU8sSUFBSSxDQUFDLE9BQU8sRUFBRSxnQkFBZ0IsQ0FBQztJQUN4QyxDQUFDO0lBQ0QsSUFDVyxpQkFBaUIsQ0FBQyxLQUFhO1FBQ3hDLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ2pCLElBQUksQ0FBQyxPQUFPLENBQUMsaUJBQWlCLEdBQUcsS0FBSyxDQUFDO1FBQ3pDLENBQUM7SUFDSCxDQUFDO0lBRUQsSUFBVyxpQkFBaUI7UUFDMUIsT0FBTyxJQUFJLENBQUMsT0FBTyxFQUFFLGlCQUFpQixDQUFDO0lBQ3pDLENBQUM7SUFDRCxJQUNXLFdBQVcsQ0FBQyxLQUFjO1FBQ25DLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ2pCLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQztRQUNuQyxDQUFDO0lBQ0gsQ0FBQztJQUVELElBQVcsV0FBVztRQUNwQixPQUFPLElBQUksQ0FBQyxPQUFPLEVBQUUsV0FBVyxDQUFDO0lBQ25DLENBQUM7SUFDRCxJQUNXLEdBQUcsQ0FBQyxLQUFjO1FBQzNCLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ2pCLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxHQUFHLEtBQUssQ0FBQztRQUMzQixDQUFDO0lBQ0gsQ0FBQztJQUVELElBQVcsR0FBRztRQUNaLE9BQU8sSUFBSSxDQUFDLE9BQU8sRUFBRSxHQUFHLENBQUM7SUFDM0IsQ0FBQzs4R0F4V1Usc0JBQXNCO2tHQUF0QixzQkFBc0IsMDhCQVB0QjtZQUNUO2dCQUNFLE9BQU8sRUFBRSxVQUFVO2dCQUNuQixXQUFXLEVBQUUsVUFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDLHNCQUFzQixDQUFDO2FBQ3REO1NBQ0YsaURBUFMsZUFBZTs7MkZBU2Qsc0JBQXNCO2tCQVhsQyxTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSx5QkFBeUI7b0JBQ25DLFFBQVEsRUFBRSxlQUFlO29CQUN6QixlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtvQkFDL0MsU0FBUyxFQUFFO3dCQUNUOzRCQUNFLE9BQU8sRUFBRSxVQUFVOzRCQUNuQixXQUFXLEVBQUUsVUFBVSxDQUFDLEdBQUcsRUFBRSx1QkFBdUIsQ0FBQzt5QkFDdEQ7cUJBQ0Y7aUJBQ0Y7OEJBYVksSUFBSTtzQkFEZCxLQUFLO2dCQVdLLE9BQU87c0JBRGpCLEtBQUs7Z0JBV0ssS0FBSztzQkFEZixLQUFLO2dCQWtCSyxTQUFTO3NCQURuQixLQUFLO2dCQVdLLFNBQVM7c0JBRG5CLEtBQUs7Z0JBV0ssR0FBRztzQkFEYixLQUFLO2dCQVdLLFFBQVE7c0JBRGxCLEtBQUs7Z0JBV0ssaUJBQWlCO3NCQUQzQixLQUFLO2dCQVdLLEtBQUs7c0JBRGYsS0FBSztnQkFXSyxjQUFjO3NCQUR4QixLQUFLO2dCQVdLLFFBQVE7c0JBRGxCLEtBQUs7Z0JBa0JLLGlCQUFpQjtzQkFEM0IsS0FBSztnQkFXSyxXQUFXO3NCQURyQixLQUFLO2dCQVdLLE9BQU87c0JBRGpCLEtBQUs7Z0JBV0ssU0FBUztzQkFEbkIsS0FBSztnQkFXSyxTQUFTO3NCQURuQixLQUFLO2dCQVdLLGFBQWE7c0JBRHZCLEtBQUs7Z0JBV0ssV0FBVztzQkFEckIsS0FBSztnQkFhSyxlQUFlO3NCQUR6QixLQUFLO2dCQVdLLGlCQUFpQjtzQkFEM0IsS0FBSztnQkFXSyxnQkFBZ0I7c0JBRDFCLEtBQUs7Z0JBV0ssWUFBWTtzQkFEdEIsS0FBSztnQkFXSyxZQUFZO3NCQUR0QixLQUFLO2dCQVdLLFFBQVE7c0JBRGxCLEtBQUs7Z0JBV0ssTUFBTTtzQkFEaEIsS0FBSztnQkFXSyxjQUFjO3NCQUR4QixLQUFLO2dCQWVLLGVBQWU7c0JBRHpCLEtBQUs7Z0JBV0ssU0FBUztzQkFEbkIsS0FBSztnQkFXSyxrQkFBa0I7c0JBRDVCLEtBQUs7Z0JBV0ssZ0JBQWdCO3NCQUQxQixLQUFLO2dCQVdLLGlCQUFpQjtzQkFEM0IsS0FBSztnQkFXSyxXQUFXO3NCQURyQixLQUFLO2dCQVdLLEdBQUc7c0JBRGIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIEB0eXBlc2NyaXB0LWVzbGludC9uYW1pbmctY29udmVudGlvbiAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tdW5kZXJzY29yZS1kYW5nbGUgKi9cbi8qIGVzbGludC1kaXNhYmxlIEBhbmd1bGFyLWVzbGludC9jb21wb25lbnQtc2VsZWN0b3IsIEBhbmd1bGFyLWVzbGludC9jb21wb25lbnQtY2xhc3Mtc3VmZml4ICovXG5pbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ29tcG9uZW50LFxuICBJbnB1dCxcbiAgVHlwZSxcbiAgZm9yd2FyZFJlZixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBDb2xvcixcbiAgQ29sb3JSZXByZXNlbnRhdGlvbixcbiAgRXVsZXIsXG4gIEV1bGVyT3JkZXIsXG4gIE1lc2hTdGFuZGFyZE1hdGVyaWFsLFxuICBNZXNoU3RhbmRhcmRNYXRlcmlhbFBhcmFtZXRlcnMsXG4gIE5vcm1hbE1hcFR5cGVzLFxuICBUZXh0dXJlLFxuICBWZWN0b3IyLFxufSBmcm9tICd0aHJlZSc7XG5pbXBvcnQgeyBhcHBseVZhbHVlIH0gZnJvbSAnLi4vdXRpbCc7XG5pbXBvcnQgeyBUaE1hdGVyaWFsIH0gZnJvbSAnLi9UaE1hdGVyaWFsJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndGgtbWVzaFN0YW5kYXJkTWF0ZXJpYWwnLFxuICB0ZW1wbGF0ZTogJzxuZy1jb250ZW50Lz4nLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgcHJvdmlkZXJzOiBbXG4gICAge1xuICAgICAgcHJvdmlkZTogVGhNYXRlcmlhbCxcbiAgICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IFRoTWVzaFN0YW5kYXJkTWF0ZXJpYWwpLFxuICAgIH0sXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIFRoTWVzaFN0YW5kYXJkTWF0ZXJpYWw8XG4gIFQgZXh0ZW5kcyBNZXNoU3RhbmRhcmRNYXRlcmlhbCA9IE1lc2hTdGFuZGFyZE1hdGVyaWFsLFxuICBUQVJHUyA9IC8qIHBhcmFtZXRlcnM/ICovIE1lc2hTdGFuZGFyZE1hdGVyaWFsUGFyYW1ldGVycyxcbj4gZXh0ZW5kcyBUaE1hdGVyaWFsPFQsIFRBUkdTPiB7XG4gIHB1YmxpYyBnZXRUeXBlKCk6IFR5cGU8TWVzaFN0YW5kYXJkTWF0ZXJpYWw+IHtcbiAgICByZXR1cm4gTWVzaFN0YW5kYXJkTWF0ZXJpYWw7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGlzTWVzaFN0YW5kYXJkTWF0ZXJpYWwoKTogdHJ1ZSB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX29ialJlZj8uaXNNZXNoU3RhbmRhcmRNYXRlcmlhbDtcbiAgfVxuICBASW5wdXQoKVxuICBwdWJsaWMgc2V0IHR5cGUodmFsdWU6IHN0cmluZykge1xuICAgIGlmICh0aGlzLl9vYmpSZWYpIHtcbiAgICAgIHRoaXMuX29ialJlZi50eXBlID0gdmFsdWU7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGdldCB0eXBlKCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX29ialJlZj8udHlwZTtcbiAgfVxuICBASW5wdXQoKVxuICBwdWJsaWMgc2V0IGRlZmluZXModmFsdWU6IHsgW2tleTogc3RyaW5nXTogYW55IH0pIHtcbiAgICBpZiAodGhpcy5fb2JqUmVmKSB7XG4gICAgICB0aGlzLl9vYmpSZWYuZGVmaW5lcyA9IHZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBnZXQgZGVmaW5lcygpOiB7IFtrZXk6IHN0cmluZ106IGFueSB9IHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fb2JqUmVmPy5kZWZpbmVzO1xuICB9XG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzZXQgY29sb3IoXG4gICAgdmFsdWU6XG4gICAgICB8IENvbG9yXG4gICAgICB8IFtcbiAgICAgICAgICAuLi5hcmdzOlxuICAgICAgICAgICAgfCBbY29sb3I6IENvbG9yUmVwcmVzZW50YXRpb25dXG4gICAgICAgICAgICB8IFtyOiBudW1iZXIsIGc6IG51bWJlciwgYjogbnVtYmVyXSxcbiAgICAgICAgXSxcbiAgKSB7XG4gICAgaWYgKHRoaXMuX29ialJlZikge1xuICAgICAgdGhpcy5fb2JqUmVmLmNvbG9yID0gYXBwbHlWYWx1ZTxDb2xvcj4odGhpcy5fb2JqUmVmLmNvbG9yLCB2YWx1ZSk7XG4gICAgfVxuICB9XG4gIHB1YmxpYyBnZXQgY29sb3IoKTogQ29sb3IgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9vYmpSZWY/LmNvbG9yO1xuICB9XG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzZXQgcm91Z2huZXNzKHZhbHVlOiBudW1iZXIpIHtcbiAgICBpZiAodGhpcy5fb2JqUmVmKSB7XG4gICAgICB0aGlzLl9vYmpSZWYucm91Z2huZXNzID0gdmFsdWU7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGdldCByb3VnaG5lc3MoKTogbnVtYmVyIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fb2JqUmVmPy5yb3VnaG5lc3M7XG4gIH1cbiAgQElucHV0KClcbiAgcHVibGljIHNldCBtZXRhbG5lc3ModmFsdWU6IG51bWJlcikge1xuICAgIGlmICh0aGlzLl9vYmpSZWYpIHtcbiAgICAgIHRoaXMuX29ialJlZi5tZXRhbG5lc3MgPSB2YWx1ZTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgZ2V0IG1ldGFsbmVzcygpOiBudW1iZXIgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9vYmpSZWY/Lm1ldGFsbmVzcztcbiAgfVxuICBASW5wdXQoKVxuICBwdWJsaWMgc2V0IG1hcCh2YWx1ZTogVGV4dHVyZSB8IG51bGwpIHtcbiAgICBpZiAodGhpcy5fb2JqUmVmKSB7XG4gICAgICB0aGlzLl9vYmpSZWYubWFwID0gdmFsdWU7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGdldCBtYXAoKTogKFRleHR1cmUgfCBudWxsKSB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX29ialJlZj8ubWFwO1xuICB9XG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzZXQgbGlnaHRNYXAodmFsdWU6IFRleHR1cmUgfCBudWxsKSB7XG4gICAgaWYgKHRoaXMuX29ialJlZikge1xuICAgICAgdGhpcy5fb2JqUmVmLmxpZ2h0TWFwID0gdmFsdWU7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGdldCBsaWdodE1hcCgpOiAoVGV4dHVyZSB8IG51bGwpIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fb2JqUmVmPy5saWdodE1hcDtcbiAgfVxuICBASW5wdXQoKVxuICBwdWJsaWMgc2V0IGxpZ2h0TWFwSW50ZW5zaXR5KHZhbHVlOiBudW1iZXIpIHtcbiAgICBpZiAodGhpcy5fb2JqUmVmKSB7XG4gICAgICB0aGlzLl9vYmpSZWYubGlnaHRNYXBJbnRlbnNpdHkgPSB2YWx1ZTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgZ2V0IGxpZ2h0TWFwSW50ZW5zaXR5KCk6IG51bWJlciB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX29ialJlZj8ubGlnaHRNYXBJbnRlbnNpdHk7XG4gIH1cbiAgQElucHV0KClcbiAgcHVibGljIHNldCBhb01hcCh2YWx1ZTogVGV4dHVyZSB8IG51bGwpIHtcbiAgICBpZiAodGhpcy5fb2JqUmVmKSB7XG4gICAgICB0aGlzLl9vYmpSZWYuYW9NYXAgPSB2YWx1ZTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgZ2V0IGFvTWFwKCk6IChUZXh0dXJlIHwgbnVsbCkgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9vYmpSZWY/LmFvTWFwO1xuICB9XG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzZXQgYW9NYXBJbnRlbnNpdHkodmFsdWU6IG51bWJlcikge1xuICAgIGlmICh0aGlzLl9vYmpSZWYpIHtcbiAgICAgIHRoaXMuX29ialJlZi5hb01hcEludGVuc2l0eSA9IHZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBnZXQgYW9NYXBJbnRlbnNpdHkoKTogbnVtYmVyIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fb2JqUmVmPy5hb01hcEludGVuc2l0eTtcbiAgfVxuICBASW5wdXQoKVxuICBwdWJsaWMgc2V0IGVtaXNzaXZlKFxuICAgIHZhbHVlOlxuICAgICAgfCBDb2xvclxuICAgICAgfCBbXG4gICAgICAgICAgLi4uYXJnczpcbiAgICAgICAgICAgIHwgW2NvbG9yOiBDb2xvclJlcHJlc2VudGF0aW9uXVxuICAgICAgICAgICAgfCBbcjogbnVtYmVyLCBnOiBudW1iZXIsIGI6IG51bWJlcl0sXG4gICAgICAgIF0sXG4gICkge1xuICAgIGlmICh0aGlzLl9vYmpSZWYpIHtcbiAgICAgIHRoaXMuX29ialJlZi5lbWlzc2l2ZSA9IGFwcGx5VmFsdWU8Q29sb3I+KHRoaXMuX29ialJlZi5lbWlzc2l2ZSwgdmFsdWUpO1xuICAgIH1cbiAgfVxuICBwdWJsaWMgZ2V0IGVtaXNzaXZlKCk6IENvbG9yIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fb2JqUmVmPy5lbWlzc2l2ZTtcbiAgfVxuICBASW5wdXQoKVxuICBwdWJsaWMgc2V0IGVtaXNzaXZlSW50ZW5zaXR5KHZhbHVlOiBudW1iZXIpIHtcbiAgICBpZiAodGhpcy5fb2JqUmVmKSB7XG4gICAgICB0aGlzLl9vYmpSZWYuZW1pc3NpdmVJbnRlbnNpdHkgPSB2YWx1ZTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgZ2V0IGVtaXNzaXZlSW50ZW5zaXR5KCk6IG51bWJlciB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX29ialJlZj8uZW1pc3NpdmVJbnRlbnNpdHk7XG4gIH1cbiAgQElucHV0KClcbiAgcHVibGljIHNldCBlbWlzc2l2ZU1hcCh2YWx1ZTogVGV4dHVyZSB8IG51bGwpIHtcbiAgICBpZiAodGhpcy5fb2JqUmVmKSB7XG4gICAgICB0aGlzLl9vYmpSZWYuZW1pc3NpdmVNYXAgPSB2YWx1ZTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgZ2V0IGVtaXNzaXZlTWFwKCk6IChUZXh0dXJlIHwgbnVsbCkgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9vYmpSZWY/LmVtaXNzaXZlTWFwO1xuICB9XG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzZXQgYnVtcE1hcCh2YWx1ZTogVGV4dHVyZSB8IG51bGwpIHtcbiAgICBpZiAodGhpcy5fb2JqUmVmKSB7XG4gICAgICB0aGlzLl9vYmpSZWYuYnVtcE1hcCA9IHZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBnZXQgYnVtcE1hcCgpOiAoVGV4dHVyZSB8IG51bGwpIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fb2JqUmVmPy5idW1wTWFwO1xuICB9XG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzZXQgYnVtcFNjYWxlKHZhbHVlOiBudW1iZXIpIHtcbiAgICBpZiAodGhpcy5fb2JqUmVmKSB7XG4gICAgICB0aGlzLl9vYmpSZWYuYnVtcFNjYWxlID0gdmFsdWU7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGdldCBidW1wU2NhbGUoKTogbnVtYmVyIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fb2JqUmVmPy5idW1wU2NhbGU7XG4gIH1cbiAgQElucHV0KClcbiAgcHVibGljIHNldCBub3JtYWxNYXAodmFsdWU6IFRleHR1cmUgfCBudWxsKSB7XG4gICAgaWYgKHRoaXMuX29ialJlZikge1xuICAgICAgdGhpcy5fb2JqUmVmLm5vcm1hbE1hcCA9IHZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBnZXQgbm9ybWFsTWFwKCk6IChUZXh0dXJlIHwgbnVsbCkgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9vYmpSZWY/Lm5vcm1hbE1hcDtcbiAgfVxuICBASW5wdXQoKVxuICBwdWJsaWMgc2V0IG5vcm1hbE1hcFR5cGUodmFsdWU6IE5vcm1hbE1hcFR5cGVzKSB7XG4gICAgaWYgKHRoaXMuX29ialJlZikge1xuICAgICAgdGhpcy5fb2JqUmVmLm5vcm1hbE1hcFR5cGUgPSB2YWx1ZTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgZ2V0IG5vcm1hbE1hcFR5cGUoKTogTm9ybWFsTWFwVHlwZXMgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9vYmpSZWY/Lm5vcm1hbE1hcFR5cGU7XG4gIH1cbiAgQElucHV0KClcbiAgcHVibGljIHNldCBub3JtYWxTY2FsZSh2YWx1ZTogVmVjdG9yMiB8IFt4OiBudW1iZXIsIHk6IG51bWJlcl0pIHtcbiAgICBpZiAodGhpcy5fb2JqUmVmKSB7XG4gICAgICB0aGlzLl9vYmpSZWYubm9ybWFsU2NhbGUgPSBhcHBseVZhbHVlPFZlY3RvcjI+KFxuICAgICAgICB0aGlzLl9vYmpSZWYubm9ybWFsU2NhbGUsXG4gICAgICAgIHZhbHVlLFxuICAgICAgKTtcbiAgICB9XG4gIH1cbiAgcHVibGljIGdldCBub3JtYWxTY2FsZSgpOiBWZWN0b3IyIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fb2JqUmVmPy5ub3JtYWxTY2FsZTtcbiAgfVxuICBASW5wdXQoKVxuICBwdWJsaWMgc2V0IGRpc3BsYWNlbWVudE1hcCh2YWx1ZTogVGV4dHVyZSB8IG51bGwpIHtcbiAgICBpZiAodGhpcy5fb2JqUmVmKSB7XG4gICAgICB0aGlzLl9vYmpSZWYuZGlzcGxhY2VtZW50TWFwID0gdmFsdWU7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGdldCBkaXNwbGFjZW1lbnRNYXAoKTogKFRleHR1cmUgfCBudWxsKSB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX29ialJlZj8uZGlzcGxhY2VtZW50TWFwO1xuICB9XG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzZXQgZGlzcGxhY2VtZW50U2NhbGUodmFsdWU6IG51bWJlcikge1xuICAgIGlmICh0aGlzLl9vYmpSZWYpIHtcbiAgICAgIHRoaXMuX29ialJlZi5kaXNwbGFjZW1lbnRTY2FsZSA9IHZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBnZXQgZGlzcGxhY2VtZW50U2NhbGUoKTogbnVtYmVyIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fb2JqUmVmPy5kaXNwbGFjZW1lbnRTY2FsZTtcbiAgfVxuICBASW5wdXQoKVxuICBwdWJsaWMgc2V0IGRpc3BsYWNlbWVudEJpYXModmFsdWU6IG51bWJlcikge1xuICAgIGlmICh0aGlzLl9vYmpSZWYpIHtcbiAgICAgIHRoaXMuX29ialJlZi5kaXNwbGFjZW1lbnRCaWFzID0gdmFsdWU7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGdldCBkaXNwbGFjZW1lbnRCaWFzKCk6IG51bWJlciB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX29ialJlZj8uZGlzcGxhY2VtZW50QmlhcztcbiAgfVxuICBASW5wdXQoKVxuICBwdWJsaWMgc2V0IHJvdWdobmVzc01hcCh2YWx1ZTogVGV4dHVyZSB8IG51bGwpIHtcbiAgICBpZiAodGhpcy5fb2JqUmVmKSB7XG4gICAgICB0aGlzLl9vYmpSZWYucm91Z2huZXNzTWFwID0gdmFsdWU7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGdldCByb3VnaG5lc3NNYXAoKTogKFRleHR1cmUgfCBudWxsKSB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX29ialJlZj8ucm91Z2huZXNzTWFwO1xuICB9XG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzZXQgbWV0YWxuZXNzTWFwKHZhbHVlOiBUZXh0dXJlIHwgbnVsbCkge1xuICAgIGlmICh0aGlzLl9vYmpSZWYpIHtcbiAgICAgIHRoaXMuX29ialJlZi5tZXRhbG5lc3NNYXAgPSB2YWx1ZTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgZ2V0IG1ldGFsbmVzc01hcCgpOiAoVGV4dHVyZSB8IG51bGwpIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fb2JqUmVmPy5tZXRhbG5lc3NNYXA7XG4gIH1cbiAgQElucHV0KClcbiAgcHVibGljIHNldCBhbHBoYU1hcCh2YWx1ZTogVGV4dHVyZSB8IG51bGwpIHtcbiAgICBpZiAodGhpcy5fb2JqUmVmKSB7XG4gICAgICB0aGlzLl9vYmpSZWYuYWxwaGFNYXAgPSB2YWx1ZTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgZ2V0IGFscGhhTWFwKCk6IChUZXh0dXJlIHwgbnVsbCkgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9vYmpSZWY/LmFscGhhTWFwO1xuICB9XG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzZXQgZW52TWFwKHZhbHVlOiBUZXh0dXJlIHwgbnVsbCkge1xuICAgIGlmICh0aGlzLl9vYmpSZWYpIHtcbiAgICAgIHRoaXMuX29ialJlZi5lbnZNYXAgPSB2YWx1ZTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgZ2V0IGVudk1hcCgpOiAoVGV4dHVyZSB8IG51bGwpIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fb2JqUmVmPy5lbnZNYXA7XG4gIH1cbiAgQElucHV0KClcbiAgcHVibGljIHNldCBlbnZNYXBSb3RhdGlvbihcbiAgICB2YWx1ZTogRXVsZXIgfCBbeDogbnVtYmVyLCB5OiBudW1iZXIsIHo6IG51bWJlciwgb3JkZXI/OiBFdWxlck9yZGVyXSxcbiAgKSB7XG4gICAgaWYgKHRoaXMuX29ialJlZikge1xuICAgICAgdGhpcy5fb2JqUmVmLmVudk1hcFJvdGF0aW9uID0gYXBwbHlWYWx1ZTxFdWxlcj4oXG4gICAgICAgIHRoaXMuX29ialJlZi5lbnZNYXBSb3RhdGlvbixcbiAgICAgICAgdmFsdWUsXG4gICAgICApO1xuICAgIH1cbiAgfVxuICBwdWJsaWMgZ2V0IGVudk1hcFJvdGF0aW9uKCk6IEV1bGVyIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fb2JqUmVmPy5lbnZNYXBSb3RhdGlvbjtcbiAgfVxuICBASW5wdXQoKVxuICBwdWJsaWMgc2V0IGVudk1hcEludGVuc2l0eSh2YWx1ZTogbnVtYmVyKSB7XG4gICAgaWYgKHRoaXMuX29ialJlZikge1xuICAgICAgdGhpcy5fb2JqUmVmLmVudk1hcEludGVuc2l0eSA9IHZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBnZXQgZW52TWFwSW50ZW5zaXR5KCk6IG51bWJlciB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX29ialJlZj8uZW52TWFwSW50ZW5zaXR5O1xuICB9XG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzZXQgd2lyZWZyYW1lKHZhbHVlOiBib29sZWFuKSB7XG4gICAgaWYgKHRoaXMuX29ialJlZikge1xuICAgICAgdGhpcy5fb2JqUmVmLndpcmVmcmFtZSA9IHZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBnZXQgd2lyZWZyYW1lKCk6IGJvb2xlYW4gfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9vYmpSZWY/LndpcmVmcmFtZTtcbiAgfVxuICBASW5wdXQoKVxuICBwdWJsaWMgc2V0IHdpcmVmcmFtZUxpbmV3aWR0aCh2YWx1ZTogbnVtYmVyKSB7XG4gICAgaWYgKHRoaXMuX29ialJlZikge1xuICAgICAgdGhpcy5fb2JqUmVmLndpcmVmcmFtZUxpbmV3aWR0aCA9IHZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBnZXQgd2lyZWZyYW1lTGluZXdpZHRoKCk6IG51bWJlciB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX29ialJlZj8ud2lyZWZyYW1lTGluZXdpZHRoO1xuICB9XG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzZXQgd2lyZWZyYW1lTGluZWNhcCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgaWYgKHRoaXMuX29ialJlZikge1xuICAgICAgdGhpcy5fb2JqUmVmLndpcmVmcmFtZUxpbmVjYXAgPSB2YWx1ZTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgZ2V0IHdpcmVmcmFtZUxpbmVjYXAoKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fb2JqUmVmPy53aXJlZnJhbWVMaW5lY2FwO1xuICB9XG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzZXQgd2lyZWZyYW1lTGluZWpvaW4odmFsdWU6IHN0cmluZykge1xuICAgIGlmICh0aGlzLl9vYmpSZWYpIHtcbiAgICAgIHRoaXMuX29ialJlZi53aXJlZnJhbWVMaW5lam9pbiA9IHZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBnZXQgd2lyZWZyYW1lTGluZWpvaW4oKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fb2JqUmVmPy53aXJlZnJhbWVMaW5lam9pbjtcbiAgfVxuICBASW5wdXQoKVxuICBwdWJsaWMgc2V0IGZsYXRTaGFkaW5nKHZhbHVlOiBib29sZWFuKSB7XG4gICAgaWYgKHRoaXMuX29ialJlZikge1xuICAgICAgdGhpcy5fb2JqUmVmLmZsYXRTaGFkaW5nID0gdmFsdWU7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGdldCBmbGF0U2hhZGluZygpOiBib29sZWFuIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fb2JqUmVmPy5mbGF0U2hhZGluZztcbiAgfVxuICBASW5wdXQoKVxuICBwdWJsaWMgc2V0IGZvZyh2YWx1ZTogYm9vbGVhbikge1xuICAgIGlmICh0aGlzLl9vYmpSZWYpIHtcbiAgICAgIHRoaXMuX29ialJlZi5mb2cgPSB2YWx1ZTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgZ2V0IGZvZygpOiBib29sZWFuIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fb2JqUmVmPy5mb2c7XG4gIH1cbn1cbiJdfQ==