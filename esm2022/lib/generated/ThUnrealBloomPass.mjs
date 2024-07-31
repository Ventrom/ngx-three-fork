/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix */
import { ChangeDetectionStrategy, Component, Input, forwardRef, } from '@angular/core';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';
import { ThPassBase } from '../ThPassBase';
import { applyValue } from '../util';
import { ThPass } from './ThPass';
import * as i0 from "@angular/core";
export class ThUnrealBloomPass extends ThPass {
    getType() {
        return UnrealBloomPass;
    }
    set resolution(value) {
        if (this._objRef) {
            this._objRef.resolution = applyValue(this._objRef.resolution, value);
        }
    }
    get resolution() {
        return this._objRef?.resolution;
    }
    set strength(value) {
        if (this._objRef) {
            this._objRef.strength = value;
        }
    }
    get strength() {
        return this._objRef?.strength;
    }
    set radius(value) {
        if (this._objRef) {
            this._objRef.radius = value;
        }
    }
    get radius() {
        return this._objRef?.radius;
    }
    set threshold(value) {
        if (this._objRef) {
            this._objRef.threshold = value;
        }
    }
    get threshold() {
        return this._objRef?.threshold;
    }
    set clearColor(value) {
        if (this._objRef) {
            this._objRef.clearColor = applyValue(this._objRef.clearColor, value);
        }
    }
    get clearColor() {
        return this._objRef?.clearColor;
    }
    set renderTargetsHorizontal(value) {
        if (this._objRef) {
            this._objRef.renderTargetsHorizontal = value;
        }
    }
    get renderTargetsHorizontal() {
        return this._objRef?.renderTargetsHorizontal;
    }
    set renderTargetsVertical(value) {
        if (this._objRef) {
            this._objRef.renderTargetsVertical = value;
        }
    }
    get renderTargetsVertical() {
        return this._objRef?.renderTargetsVertical;
    }
    set nMips(value) {
        if (this._objRef) {
            this._objRef.nMips = value;
        }
    }
    get nMips() {
        return this._objRef?.nMips;
    }
    set renderTargetBright(value) {
        if (this._objRef) {
            this._objRef.renderTargetBright = value;
        }
    }
    get renderTargetBright() {
        return this._objRef?.renderTargetBright;
    }
    set highPassUniforms(value) {
        if (this._objRef) {
            this._objRef.highPassUniforms = value;
        }
    }
    get highPassUniforms() {
        return this._objRef?.highPassUniforms;
    }
    set materialHighPassFilter(value) {
        if (this._objRef) {
            this._objRef.materialHighPassFilter = value;
        }
    }
    get materialHighPassFilter() {
        return this._objRef?.materialHighPassFilter;
    }
    set separableBlurMaterials(value) {
        if (this._objRef) {
            this._objRef.separableBlurMaterials = value;
        }
    }
    get separableBlurMaterials() {
        return this._objRef?.separableBlurMaterials;
    }
    set compositeMaterial(value) {
        if (this._objRef) {
            this._objRef.compositeMaterial = value;
        }
    }
    get compositeMaterial() {
        return this._objRef?.compositeMaterial;
    }
    set bloomTintColors(value) {
        if (this._objRef) {
            this._objRef.bloomTintColors = value;
        }
    }
    get bloomTintColors() {
        return this._objRef?.bloomTintColors;
    }
    set copyUniforms(value) {
        if (this._objRef) {
            this._objRef.copyUniforms = value;
        }
    }
    get copyUniforms() {
        return this._objRef?.copyUniforms;
    }
    set blendMaterial(value) {
        if (this._objRef) {
            this._objRef.blendMaterial = value;
        }
    }
    get blendMaterial() {
        return this._objRef?.blendMaterial;
    }
    set oldClearColor(value) {
        if (this._objRef) {
            this._objRef.oldClearColor = applyValue(this._objRef.oldClearColor, value);
        }
    }
    get oldClearColor() {
        return this._objRef?.oldClearColor;
    }
    set oldClearAlpha(value) {
        if (this._objRef) {
            this._objRef.oldClearAlpha = value;
        }
    }
    get oldClearAlpha() {
        return this._objRef?.oldClearAlpha;
    }
    set basic(value) {
        if (this._objRef) {
            this._objRef.basic = value;
        }
    }
    get basic() {
        return this._objRef?.basic;
    }
    set fsQuad(value) {
        if (this._objRef) {
            this._objRef.fsQuad = value;
        }
    }
    get fsQuad() {
        return this._objRef?.fsQuad;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThUnrealBloomPass, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.1.2", type: ThUnrealBloomPass, selector: "th-unrealBloomPass", inputs: { resolution: "resolution", strength: "strength", radius: "radius", threshold: "threshold", clearColor: "clearColor", renderTargetsHorizontal: "renderTargetsHorizontal", renderTargetsVertical: "renderTargetsVertical", nMips: "nMips", renderTargetBright: "renderTargetBright", highPassUniforms: "highPassUniforms", materialHighPassFilter: "materialHighPassFilter", separableBlurMaterials: "separableBlurMaterials", compositeMaterial: "compositeMaterial", bloomTintColors: "bloomTintColors", copyUniforms: "copyUniforms", blendMaterial: "blendMaterial", oldClearColor: "oldClearColor", oldClearAlpha: "oldClearAlpha", basic: "basic", fsQuad: "fsQuad" }, providers: [
            { provide: ThPassBase, useExisting: forwardRef(() => ThUnrealBloomPass) },
        ], usesInheritance: true, ngImport: i0, template: '<ng-content/>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThUnrealBloomPass, decorators: [{
            type: Component,
            args: [{
                    selector: 'th-unrealBloomPass',
                    template: '<ng-content/>',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    providers: [
                        { provide: ThPassBase, useExisting: forwardRef(() => ThUnrealBloomPass) },
                    ],
                }]
        }], propDecorators: { resolution: [{
                type: Input
            }], strength: [{
                type: Input
            }], radius: [{
                type: Input
            }], threshold: [{
                type: Input
            }], clearColor: [{
                type: Input
            }], renderTargetsHorizontal: [{
                type: Input
            }], renderTargetsVertical: [{
                type: Input
            }], nMips: [{
                type: Input
            }], renderTargetBright: [{
                type: Input
            }], highPassUniforms: [{
                type: Input
            }], materialHighPassFilter: [{
                type: Input
            }], separableBlurMaterials: [{
                type: Input
            }], compositeMaterial: [{
                type: Input
            }], bloomTintColors: [{
                type: Input
            }], copyUniforms: [{
                type: Input
            }], blendMaterial: [{
                type: Input
            }], oldClearColor: [{
                type: Input
            }], oldClearAlpha: [{
                type: Input
            }], basic: [{
                type: Input
            }], fsQuad: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGhVbnJlYWxCbG9vbVBhc3MuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtdGhyZWUvc3JjL2xpYi9nZW5lcmF0ZWQvVGhVbnJlYWxCbG9vbVBhc3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsaURBQWlEO0FBQ2pELHlEQUF5RDtBQUN6RCx5Q0FBeUM7QUFDekMsK0ZBQStGO0FBQy9GLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULEtBQUssRUFFTCxVQUFVLEdBQ1gsTUFBTSxlQUFlLENBQUM7QUFXdkIsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHNEQUFzRCxDQUFDO0FBQ3ZGLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLFNBQVMsQ0FBQztBQUNyQyxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sVUFBVSxDQUFDOztBQVVsQyxNQUFNLE9BQU8saUJBUVgsU0FBUSxNQUFnQjtJQUNqQixPQUFPO1FBQ1osT0FBTyxlQUFlLENBQUM7SUFDekIsQ0FBQztJQUVELElBQ1csVUFBVSxDQUFDLEtBQXVDO1FBQzNELElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ2pCLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FDbEMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLEVBQ3ZCLEtBQUssQ0FDTixDQUFDO1FBQ0osQ0FBQztJQUNILENBQUM7SUFDRCxJQUFXLFVBQVU7UUFDbkIsT0FBTyxJQUFJLENBQUMsT0FBTyxFQUFFLFVBQVUsQ0FBQztJQUNsQyxDQUFDO0lBQ0QsSUFDVyxRQUFRLENBQUMsS0FBYTtRQUMvQixJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUNqQixJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7UUFDaEMsQ0FBQztJQUNILENBQUM7SUFFRCxJQUFXLFFBQVE7UUFDakIsT0FBTyxJQUFJLENBQUMsT0FBTyxFQUFFLFFBQVEsQ0FBQztJQUNoQyxDQUFDO0lBQ0QsSUFDVyxNQUFNLENBQUMsS0FBYTtRQUM3QixJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUNqQixJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDOUIsQ0FBQztJQUNILENBQUM7SUFFRCxJQUFXLE1BQU07UUFDZixPQUFPLElBQUksQ0FBQyxPQUFPLEVBQUUsTUFBTSxDQUFDO0lBQzlCLENBQUM7SUFDRCxJQUNXLFNBQVMsQ0FBQyxLQUFhO1FBQ2hDLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ2pCLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztRQUNqQyxDQUFDO0lBQ0gsQ0FBQztJQUVELElBQVcsU0FBUztRQUNsQixPQUFPLElBQUksQ0FBQyxPQUFPLEVBQUUsU0FBUyxDQUFDO0lBQ2pDLENBQUM7SUFDRCxJQUNXLFVBQVUsQ0FDbkIsS0FNSztRQUVMLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ2pCLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FDbEMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLEVBQ3ZCLEtBQUssQ0FDTixDQUFDO1FBQ0osQ0FBQztJQUNILENBQUM7SUFDRCxJQUFXLFVBQVU7UUFDbkIsT0FBTyxJQUFJLENBQUMsT0FBTyxFQUFFLFVBQVUsQ0FBQztJQUNsQyxDQUFDO0lBQ0QsSUFDVyx1QkFBdUIsQ0FBQyxLQUEwQjtRQUMzRCxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUNqQixJQUFJLENBQUMsT0FBTyxDQUFDLHVCQUF1QixHQUFHLEtBQUssQ0FBQztRQUMvQyxDQUFDO0lBQ0gsQ0FBQztJQUVELElBQVcsdUJBQXVCO1FBQ2hDLE9BQU8sSUFBSSxDQUFDLE9BQU8sRUFBRSx1QkFBdUIsQ0FBQztJQUMvQyxDQUFDO0lBQ0QsSUFDVyxxQkFBcUIsQ0FBQyxLQUEwQjtRQUN6RCxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUNqQixJQUFJLENBQUMsT0FBTyxDQUFDLHFCQUFxQixHQUFHLEtBQUssQ0FBQztRQUM3QyxDQUFDO0lBQ0gsQ0FBQztJQUVELElBQVcscUJBQXFCO1FBQzlCLE9BQU8sSUFBSSxDQUFDLE9BQU8sRUFBRSxxQkFBcUIsQ0FBQztJQUM3QyxDQUFDO0lBQ0QsSUFDVyxLQUFLLENBQUMsS0FBYTtRQUM1QixJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUNqQixJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDN0IsQ0FBQztJQUNILENBQUM7SUFFRCxJQUFXLEtBQUs7UUFDZCxPQUFPLElBQUksQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDO0lBQzdCLENBQUM7SUFDRCxJQUNXLGtCQUFrQixDQUFDLEtBQXdCO1FBQ3BELElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ2pCLElBQUksQ0FBQyxPQUFPLENBQUMsa0JBQWtCLEdBQUcsS0FBSyxDQUFDO1FBQzFDLENBQUM7SUFDSCxDQUFDO0lBRUQsSUFBVyxrQkFBa0I7UUFDM0IsT0FBTyxJQUFJLENBQUMsT0FBTyxFQUFFLGtCQUFrQixDQUFDO0lBQzFDLENBQUM7SUFDRCxJQUNXLGdCQUFnQixDQUFDLEtBQWE7UUFDdkMsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDakIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsR0FBRyxLQUFLLENBQUM7UUFDeEMsQ0FBQztJQUNILENBQUM7SUFFRCxJQUFXLGdCQUFnQjtRQUN6QixPQUFPLElBQUksQ0FBQyxPQUFPLEVBQUUsZ0JBQWdCLENBQUM7SUFDeEMsQ0FBQztJQUNELElBQ1csc0JBQXNCLENBQUMsS0FBcUI7UUFDckQsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDakIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxzQkFBc0IsR0FBRyxLQUFLLENBQUM7UUFDOUMsQ0FBQztJQUNILENBQUM7SUFFRCxJQUFXLHNCQUFzQjtRQUMvQixPQUFPLElBQUksQ0FBQyxPQUFPLEVBQUUsc0JBQXNCLENBQUM7SUFDOUMsQ0FBQztJQUNELElBQ1csc0JBQXNCLENBQUMsS0FBdUI7UUFDdkQsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDakIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxzQkFBc0IsR0FBRyxLQUFLLENBQUM7UUFDOUMsQ0FBQztJQUNILENBQUM7SUFFRCxJQUFXLHNCQUFzQjtRQUMvQixPQUFPLElBQUksQ0FBQyxPQUFPLEVBQUUsc0JBQXNCLENBQUM7SUFDOUMsQ0FBQztJQUNELElBQ1csaUJBQWlCLENBQUMsS0FBcUI7UUFDaEQsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDakIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxpQkFBaUIsR0FBRyxLQUFLLENBQUM7UUFDekMsQ0FBQztJQUNILENBQUM7SUFFRCxJQUFXLGlCQUFpQjtRQUMxQixPQUFPLElBQUksQ0FBQyxPQUFPLEVBQUUsaUJBQWlCLENBQUM7SUFDekMsQ0FBQztJQUNELElBQ1csZUFBZSxDQUFDLEtBQWdCO1FBQ3pDLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ2pCLElBQUksQ0FBQyxPQUFPLENBQUMsZUFBZSxHQUFHLEtBQUssQ0FBQztRQUN2QyxDQUFDO0lBQ0gsQ0FBQztJQUVELElBQVcsZUFBZTtRQUN4QixPQUFPLElBQUksQ0FBQyxPQUFPLEVBQUUsZUFBZSxDQUFDO0lBQ3ZDLENBQUM7SUFDRCxJQUNXLFlBQVksQ0FBQyxLQUFhO1FBQ25DLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ2pCLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQztRQUNwQyxDQUFDO0lBQ0gsQ0FBQztJQUVELElBQVcsWUFBWTtRQUNyQixPQUFPLElBQUksQ0FBQyxPQUFPLEVBQUUsWUFBWSxDQUFDO0lBQ3BDLENBQUM7SUFDRCxJQUNXLGFBQWEsQ0FBQyxLQUFxQjtRQUM1QyxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUNqQixJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7UUFDckMsQ0FBQztJQUNILENBQUM7SUFFRCxJQUFXLGFBQWE7UUFDdEIsT0FBTyxJQUFJLENBQUMsT0FBTyxFQUFFLGFBQWEsQ0FBQztJQUNyQyxDQUFDO0lBQ0QsSUFDVyxhQUFhLENBQ3RCLEtBTUs7UUFFTCxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUNqQixJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsR0FBRyxVQUFVLENBQ3JDLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxFQUMxQixLQUFLLENBQ04sQ0FBQztRQUNKLENBQUM7SUFDSCxDQUFDO0lBQ0QsSUFBVyxhQUFhO1FBQ3RCLE9BQU8sSUFBSSxDQUFDLE9BQU8sRUFBRSxhQUFhLENBQUM7SUFDckMsQ0FBQztJQUNELElBQ1csYUFBYSxDQUFDLEtBQWE7UUFDcEMsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDakIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO1FBQ3JDLENBQUM7SUFDSCxDQUFDO0lBRUQsSUFBVyxhQUFhO1FBQ3RCLE9BQU8sSUFBSSxDQUFDLE9BQU8sRUFBRSxhQUFhLENBQUM7SUFDckMsQ0FBQztJQUNELElBQ1csS0FBSyxDQUFDLEtBQXdCO1FBQ3ZDLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ2pCLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUM3QixDQUFDO0lBQ0gsQ0FBQztJQUVELElBQVcsS0FBSztRQUNkLE9BQU8sSUFBSSxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUM7SUFDN0IsQ0FBQztJQUNELElBQ1csTUFBTSxDQUFDLEtBQXFCO1FBQ3JDLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ2pCLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUM5QixDQUFDO0lBQ0gsQ0FBQztJQUVELElBQVcsTUFBTTtRQUNmLE9BQU8sSUFBSSxDQUFDLE9BQU8sRUFBRSxNQUFNLENBQUM7SUFDOUIsQ0FBQzs4R0ExT1UsaUJBQWlCO2tHQUFqQixpQkFBaUIsaXNCQUpqQjtZQUNULEVBQUUsT0FBTyxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUUsVUFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDLGlCQUFpQixDQUFDLEVBQUU7U0FDMUUsaURBSlMsZUFBZTs7MkZBTWQsaUJBQWlCO2tCQVI3QixTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxvQkFBb0I7b0JBQzlCLFFBQVEsRUFBRSxlQUFlO29CQUN6QixlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtvQkFDL0MsU0FBUyxFQUFFO3dCQUNULEVBQUUsT0FBTyxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUUsVUFBVSxDQUFDLEdBQUcsRUFBRSxrQkFBa0IsQ0FBQyxFQUFFO3FCQUMxRTtpQkFDRjs4QkFlWSxVQUFVO3NCQURwQixLQUFLO2dCQWFLLFFBQVE7c0JBRGxCLEtBQUs7Z0JBV0ssTUFBTTtzQkFEaEIsS0FBSztnQkFXSyxTQUFTO3NCQURuQixLQUFLO2dCQVdLLFVBQVU7c0JBRHBCLEtBQUs7Z0JBcUJLLHVCQUF1QjtzQkFEakMsS0FBSztnQkFXSyxxQkFBcUI7c0JBRC9CLEtBQUs7Z0JBV0ssS0FBSztzQkFEZixLQUFLO2dCQVdLLGtCQUFrQjtzQkFENUIsS0FBSztnQkFXSyxnQkFBZ0I7c0JBRDFCLEtBQUs7Z0JBV0ssc0JBQXNCO3NCQURoQyxLQUFLO2dCQVdLLHNCQUFzQjtzQkFEaEMsS0FBSztnQkFXSyxpQkFBaUI7c0JBRDNCLEtBQUs7Z0JBV0ssZUFBZTtzQkFEekIsS0FBSztnQkFXSyxZQUFZO3NCQUR0QixLQUFLO2dCQVdLLGFBQWE7c0JBRHZCLEtBQUs7Z0JBV0ssYUFBYTtzQkFEdkIsS0FBSztnQkFxQkssYUFBYTtzQkFEdkIsS0FBSztnQkFXSyxLQUFLO3NCQURmLEtBQUs7Z0JBV0ssTUFBTTtzQkFEaEIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIEB0eXBlc2NyaXB0LWVzbGludC9iYW4tdHlwZXMgKi9cbi8qIGVzbGludC1kaXNhYmxlIEB0eXBlc2NyaXB0LWVzbGludC9uYW1pbmctY29udmVudGlvbiAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tdW5kZXJzY29yZS1kYW5nbGUgKi9cbi8qIGVzbGludC1kaXNhYmxlIEBhbmd1bGFyLWVzbGludC9jb21wb25lbnQtc2VsZWN0b3IsIEBhbmd1bGFyLWVzbGludC9jb21wb25lbnQtY2xhc3Mtc3VmZml4ICovXG5pbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ29tcG9uZW50LFxuICBJbnB1dCxcbiAgVHlwZSxcbiAgZm9yd2FyZFJlZixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBDb2xvcixcbiAgQ29sb3JSZXByZXNlbnRhdGlvbixcbiAgTWVzaEJhc2ljTWF0ZXJpYWwsXG4gIFNoYWRlck1hdGVyaWFsLFxuICBWZWN0b3IyLFxuICBWZWN0b3IzLFxuICBXZWJHTFJlbmRlclRhcmdldCxcbn0gZnJvbSAndGhyZWUnO1xuaW1wb3J0IHsgRnVsbFNjcmVlblF1YWQgfSBmcm9tICd0aHJlZS9leGFtcGxlcy9qc20vcG9zdHByb2Nlc3NpbmcvUGFzcy5qcyc7XG5pbXBvcnQgeyBVbnJlYWxCbG9vbVBhc3MgfSBmcm9tICd0aHJlZS9leGFtcGxlcy9qc20vcG9zdHByb2Nlc3NpbmcvVW5yZWFsQmxvb21QYXNzLmpzJztcbmltcG9ydCB7IFRoUGFzc0Jhc2UgfSBmcm9tICcuLi9UaFBhc3NCYXNlJztcbmltcG9ydCB7IGFwcGx5VmFsdWUgfSBmcm9tICcuLi91dGlsJztcbmltcG9ydCB7IFRoUGFzcyB9IGZyb20gJy4vVGhQYXNzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndGgtdW5yZWFsQmxvb21QYXNzJyxcbiAgdGVtcGxhdGU6ICc8bmctY29udGVudC8+JyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHByb3ZpZGVyczogW1xuICAgIHsgcHJvdmlkZTogVGhQYXNzQmFzZSwgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gVGhVbnJlYWxCbG9vbVBhc3MpIH0sXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIFRoVW5yZWFsQmxvb21QYXNzPFxuICBUIGV4dGVuZHMgVW5yZWFsQmxvb21QYXNzID0gVW5yZWFsQmxvb21QYXNzLFxuICBUQVJHUyA9IFtcbiAgICByZXNvbHV0aW9uOiBWZWN0b3IyLFxuICAgIHN0cmVuZ3RoOiBudW1iZXIsXG4gICAgcmFkaXVzOiBudW1iZXIsXG4gICAgdGhyZXNob2xkOiBudW1iZXIsXG4gIF0sXG4+IGV4dGVuZHMgVGhQYXNzPFQsIFRBUkdTPiB7XG4gIHB1YmxpYyBnZXRUeXBlKCk6IFR5cGU8VW5yZWFsQmxvb21QYXNzPiB7XG4gICAgcmV0dXJuIFVucmVhbEJsb29tUGFzcztcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzZXQgcmVzb2x1dGlvbih2YWx1ZTogVmVjdG9yMiB8IFt4OiBudW1iZXIsIHk6IG51bWJlcl0pIHtcbiAgICBpZiAodGhpcy5fb2JqUmVmKSB7XG4gICAgICB0aGlzLl9vYmpSZWYucmVzb2x1dGlvbiA9IGFwcGx5VmFsdWU8VmVjdG9yMj4oXG4gICAgICAgIHRoaXMuX29ialJlZi5yZXNvbHV0aW9uLFxuICAgICAgICB2YWx1ZSxcbiAgICAgICk7XG4gICAgfVxuICB9XG4gIHB1YmxpYyBnZXQgcmVzb2x1dGlvbigpOiBWZWN0b3IyIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fb2JqUmVmPy5yZXNvbHV0aW9uO1xuICB9XG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzZXQgc3RyZW5ndGgodmFsdWU6IG51bWJlcikge1xuICAgIGlmICh0aGlzLl9vYmpSZWYpIHtcbiAgICAgIHRoaXMuX29ialJlZi5zdHJlbmd0aCA9IHZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBnZXQgc3RyZW5ndGgoKTogbnVtYmVyIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fb2JqUmVmPy5zdHJlbmd0aDtcbiAgfVxuICBASW5wdXQoKVxuICBwdWJsaWMgc2V0IHJhZGl1cyh2YWx1ZTogbnVtYmVyKSB7XG4gICAgaWYgKHRoaXMuX29ialJlZikge1xuICAgICAgdGhpcy5fb2JqUmVmLnJhZGl1cyA9IHZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBnZXQgcmFkaXVzKCk6IG51bWJlciB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX29ialJlZj8ucmFkaXVzO1xuICB9XG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzZXQgdGhyZXNob2xkKHZhbHVlOiBudW1iZXIpIHtcbiAgICBpZiAodGhpcy5fb2JqUmVmKSB7XG4gICAgICB0aGlzLl9vYmpSZWYudGhyZXNob2xkID0gdmFsdWU7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGdldCB0aHJlc2hvbGQoKTogbnVtYmVyIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fb2JqUmVmPy50aHJlc2hvbGQ7XG4gIH1cbiAgQElucHV0KClcbiAgcHVibGljIHNldCBjbGVhckNvbG9yKFxuICAgIHZhbHVlOlxuICAgICAgfCBDb2xvclxuICAgICAgfCBbXG4gICAgICAgICAgLi4uYXJnczpcbiAgICAgICAgICAgIHwgW2NvbG9yOiBDb2xvclJlcHJlc2VudGF0aW9uXVxuICAgICAgICAgICAgfCBbcjogbnVtYmVyLCBnOiBudW1iZXIsIGI6IG51bWJlcl0sXG4gICAgICAgIF0sXG4gICkge1xuICAgIGlmICh0aGlzLl9vYmpSZWYpIHtcbiAgICAgIHRoaXMuX29ialJlZi5jbGVhckNvbG9yID0gYXBwbHlWYWx1ZTxDb2xvcj4oXG4gICAgICAgIHRoaXMuX29ialJlZi5jbGVhckNvbG9yLFxuICAgICAgICB2YWx1ZSxcbiAgICAgICk7XG4gICAgfVxuICB9XG4gIHB1YmxpYyBnZXQgY2xlYXJDb2xvcigpOiBDb2xvciB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX29ialJlZj8uY2xlYXJDb2xvcjtcbiAgfVxuICBASW5wdXQoKVxuICBwdWJsaWMgc2V0IHJlbmRlclRhcmdldHNIb3Jpem9udGFsKHZhbHVlOiBXZWJHTFJlbmRlclRhcmdldFtdKSB7XG4gICAgaWYgKHRoaXMuX29ialJlZikge1xuICAgICAgdGhpcy5fb2JqUmVmLnJlbmRlclRhcmdldHNIb3Jpem9udGFsID0gdmFsdWU7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGdldCByZW5kZXJUYXJnZXRzSG9yaXpvbnRhbCgpOiBXZWJHTFJlbmRlclRhcmdldFtdIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fb2JqUmVmPy5yZW5kZXJUYXJnZXRzSG9yaXpvbnRhbDtcbiAgfVxuICBASW5wdXQoKVxuICBwdWJsaWMgc2V0IHJlbmRlclRhcmdldHNWZXJ0aWNhbCh2YWx1ZTogV2ViR0xSZW5kZXJUYXJnZXRbXSkge1xuICAgIGlmICh0aGlzLl9vYmpSZWYpIHtcbiAgICAgIHRoaXMuX29ialJlZi5yZW5kZXJUYXJnZXRzVmVydGljYWwgPSB2YWx1ZTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgZ2V0IHJlbmRlclRhcmdldHNWZXJ0aWNhbCgpOiBXZWJHTFJlbmRlclRhcmdldFtdIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fb2JqUmVmPy5yZW5kZXJUYXJnZXRzVmVydGljYWw7XG4gIH1cbiAgQElucHV0KClcbiAgcHVibGljIHNldCBuTWlwcyh2YWx1ZTogbnVtYmVyKSB7XG4gICAgaWYgKHRoaXMuX29ialJlZikge1xuICAgICAgdGhpcy5fb2JqUmVmLm5NaXBzID0gdmFsdWU7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGdldCBuTWlwcygpOiBudW1iZXIgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9vYmpSZWY/Lm5NaXBzO1xuICB9XG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzZXQgcmVuZGVyVGFyZ2V0QnJpZ2h0KHZhbHVlOiBXZWJHTFJlbmRlclRhcmdldCkge1xuICAgIGlmICh0aGlzLl9vYmpSZWYpIHtcbiAgICAgIHRoaXMuX29ialJlZi5yZW5kZXJUYXJnZXRCcmlnaHQgPSB2YWx1ZTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgZ2V0IHJlbmRlclRhcmdldEJyaWdodCgpOiBXZWJHTFJlbmRlclRhcmdldCB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX29ialJlZj8ucmVuZGVyVGFyZ2V0QnJpZ2h0O1xuICB9XG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzZXQgaGlnaFBhc3NVbmlmb3Jtcyh2YWx1ZTogb2JqZWN0KSB7XG4gICAgaWYgKHRoaXMuX29ialJlZikge1xuICAgICAgdGhpcy5fb2JqUmVmLmhpZ2hQYXNzVW5pZm9ybXMgPSB2YWx1ZTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgZ2V0IGhpZ2hQYXNzVW5pZm9ybXMoKTogb2JqZWN0IHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fb2JqUmVmPy5oaWdoUGFzc1VuaWZvcm1zO1xuICB9XG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzZXQgbWF0ZXJpYWxIaWdoUGFzc0ZpbHRlcih2YWx1ZTogU2hhZGVyTWF0ZXJpYWwpIHtcbiAgICBpZiAodGhpcy5fb2JqUmVmKSB7XG4gICAgICB0aGlzLl9vYmpSZWYubWF0ZXJpYWxIaWdoUGFzc0ZpbHRlciA9IHZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBnZXQgbWF0ZXJpYWxIaWdoUGFzc0ZpbHRlcigpOiBTaGFkZXJNYXRlcmlhbCB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX29ialJlZj8ubWF0ZXJpYWxIaWdoUGFzc0ZpbHRlcjtcbiAgfVxuICBASW5wdXQoKVxuICBwdWJsaWMgc2V0IHNlcGFyYWJsZUJsdXJNYXRlcmlhbHModmFsdWU6IFNoYWRlck1hdGVyaWFsW10pIHtcbiAgICBpZiAodGhpcy5fb2JqUmVmKSB7XG4gICAgICB0aGlzLl9vYmpSZWYuc2VwYXJhYmxlQmx1ck1hdGVyaWFscyA9IHZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBnZXQgc2VwYXJhYmxlQmx1ck1hdGVyaWFscygpOiBTaGFkZXJNYXRlcmlhbFtdIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fb2JqUmVmPy5zZXBhcmFibGVCbHVyTWF0ZXJpYWxzO1xuICB9XG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzZXQgY29tcG9zaXRlTWF0ZXJpYWwodmFsdWU6IFNoYWRlck1hdGVyaWFsKSB7XG4gICAgaWYgKHRoaXMuX29ialJlZikge1xuICAgICAgdGhpcy5fb2JqUmVmLmNvbXBvc2l0ZU1hdGVyaWFsID0gdmFsdWU7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGdldCBjb21wb3NpdGVNYXRlcmlhbCgpOiBTaGFkZXJNYXRlcmlhbCB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX29ialJlZj8uY29tcG9zaXRlTWF0ZXJpYWw7XG4gIH1cbiAgQElucHV0KClcbiAgcHVibGljIHNldCBibG9vbVRpbnRDb2xvcnModmFsdWU6IFZlY3RvcjNbXSkge1xuICAgIGlmICh0aGlzLl9vYmpSZWYpIHtcbiAgICAgIHRoaXMuX29ialJlZi5ibG9vbVRpbnRDb2xvcnMgPSB2YWx1ZTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgZ2V0IGJsb29tVGludENvbG9ycygpOiBWZWN0b3IzW10gfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9vYmpSZWY/LmJsb29tVGludENvbG9ycztcbiAgfVxuICBASW5wdXQoKVxuICBwdWJsaWMgc2V0IGNvcHlVbmlmb3Jtcyh2YWx1ZTogb2JqZWN0KSB7XG4gICAgaWYgKHRoaXMuX29ialJlZikge1xuICAgICAgdGhpcy5fb2JqUmVmLmNvcHlVbmlmb3JtcyA9IHZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBnZXQgY29weVVuaWZvcm1zKCk6IG9iamVjdCB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX29ialJlZj8uY29weVVuaWZvcm1zO1xuICB9XG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzZXQgYmxlbmRNYXRlcmlhbCh2YWx1ZTogU2hhZGVyTWF0ZXJpYWwpIHtcbiAgICBpZiAodGhpcy5fb2JqUmVmKSB7XG4gICAgICB0aGlzLl9vYmpSZWYuYmxlbmRNYXRlcmlhbCA9IHZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBnZXQgYmxlbmRNYXRlcmlhbCgpOiBTaGFkZXJNYXRlcmlhbCB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX29ialJlZj8uYmxlbmRNYXRlcmlhbDtcbiAgfVxuICBASW5wdXQoKVxuICBwdWJsaWMgc2V0IG9sZENsZWFyQ29sb3IoXG4gICAgdmFsdWU6XG4gICAgICB8IENvbG9yXG4gICAgICB8IFtcbiAgICAgICAgICAuLi5hcmdzOlxuICAgICAgICAgICAgfCBbY29sb3I6IENvbG9yUmVwcmVzZW50YXRpb25dXG4gICAgICAgICAgICB8IFtyOiBudW1iZXIsIGc6IG51bWJlciwgYjogbnVtYmVyXSxcbiAgICAgICAgXSxcbiAgKSB7XG4gICAgaWYgKHRoaXMuX29ialJlZikge1xuICAgICAgdGhpcy5fb2JqUmVmLm9sZENsZWFyQ29sb3IgPSBhcHBseVZhbHVlPENvbG9yPihcbiAgICAgICAgdGhpcy5fb2JqUmVmLm9sZENsZWFyQ29sb3IsXG4gICAgICAgIHZhbHVlLFxuICAgICAgKTtcbiAgICB9XG4gIH1cbiAgcHVibGljIGdldCBvbGRDbGVhckNvbG9yKCk6IENvbG9yIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fb2JqUmVmPy5vbGRDbGVhckNvbG9yO1xuICB9XG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzZXQgb2xkQ2xlYXJBbHBoYSh2YWx1ZTogbnVtYmVyKSB7XG4gICAgaWYgKHRoaXMuX29ialJlZikge1xuICAgICAgdGhpcy5fb2JqUmVmLm9sZENsZWFyQWxwaGEgPSB2YWx1ZTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgZ2V0IG9sZENsZWFyQWxwaGEoKTogbnVtYmVyIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fb2JqUmVmPy5vbGRDbGVhckFscGhhO1xuICB9XG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzZXQgYmFzaWModmFsdWU6IE1lc2hCYXNpY01hdGVyaWFsKSB7XG4gICAgaWYgKHRoaXMuX29ialJlZikge1xuICAgICAgdGhpcy5fb2JqUmVmLmJhc2ljID0gdmFsdWU7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGdldCBiYXNpYygpOiBNZXNoQmFzaWNNYXRlcmlhbCB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX29ialJlZj8uYmFzaWM7XG4gIH1cbiAgQElucHV0KClcbiAgcHVibGljIHNldCBmc1F1YWQodmFsdWU6IEZ1bGxTY3JlZW5RdWFkKSB7XG4gICAgaWYgKHRoaXMuX29ialJlZikge1xuICAgICAgdGhpcy5fb2JqUmVmLmZzUXVhZCA9IHZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBnZXQgZnNRdWFkKCk6IEZ1bGxTY3JlZW5RdWFkIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fb2JqUmVmPy5mc1F1YWQ7XG4gIH1cbn1cbiJdfQ==