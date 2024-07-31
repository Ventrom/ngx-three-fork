/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix */
import { ChangeDetectionStrategy, Component, Input, forwardRef, } from '@angular/core';
import { MeshPhysicalMaterial, } from 'three';
import { applyValue } from '../util';
import { ThMaterial } from './ThMaterial';
import { ThMeshStandardMaterial } from './ThMeshStandardMaterial';
import * as i0 from "@angular/core";
export class ThMeshPhysicalMaterial extends ThMeshStandardMaterial {
    getType() {
        return MeshPhysicalMaterial;
    }
    get isMeshPhysicalMaterial() {
        return this._objRef?.isMeshPhysicalMaterial;
    }
    set defines(value) {
        if (this._objRef) {
            this._objRef.defines = value;
        }
    }
    get defines() {
        return this._objRef?.defines;
    }
    set type(value) {
        if (this._objRef) {
            this._objRef.type = value;
        }
    }
    get type() {
        return this._objRef?.type;
    }
    set anisotropyRotation(value) {
        if (this._objRef) {
            this._objRef.anisotropyRotation = value;
        }
    }
    get anisotropyRotation() {
        return this._objRef?.anisotropyRotation;
    }
    set anisotropyMap(value) {
        if (this._objRef) {
            this._objRef.anisotropyMap = value;
        }
    }
    get anisotropyMap() {
        return this._objRef?.anisotropyMap;
    }
    set clearcoatMap(value) {
        if (this._objRef) {
            this._objRef.clearcoatMap = value;
        }
    }
    get clearcoatMap() {
        return this._objRef?.clearcoatMap;
    }
    set clearcoatRoughness(value) {
        if (this._objRef) {
            this._objRef.clearcoatRoughness = value;
        }
    }
    get clearcoatRoughness() {
        return this._objRef?.clearcoatRoughness;
    }
    set clearcoatRoughnessMap(value) {
        if (this._objRef) {
            this._objRef.clearcoatRoughnessMap = value;
        }
    }
    get clearcoatRoughnessMap() {
        return this._objRef?.clearcoatRoughnessMap;
    }
    set clearcoatNormalScale(value) {
        if (this._objRef) {
            this._objRef.clearcoatNormalScale = applyValue(this._objRef.clearcoatNormalScale, value);
        }
    }
    get clearcoatNormalScale() {
        return this._objRef?.clearcoatNormalScale;
    }
    set clearcoatNormalMap(value) {
        if (this._objRef) {
            this._objRef.clearcoatNormalMap = value;
        }
    }
    get clearcoatNormalMap() {
        return this._objRef?.clearcoatNormalMap;
    }
    set ior(value) {
        if (this._objRef) {
            this._objRef.ior = value;
        }
    }
    get ior() {
        return this._objRef?.ior;
    }
    get reflectivity() {
        return this._objRef?.reflectivity;
    }
    set reflectivity(value) {
        if (this._objRef) {
            this._objRef.reflectivity = value;
        }
    }
    set iridescenceMap(value) {
        if (this._objRef) {
            this._objRef.iridescenceMap = value;
        }
    }
    get iridescenceMap() {
        return this._objRef?.iridescenceMap;
    }
    set iridescenceIOR(value) {
        if (this._objRef) {
            this._objRef.iridescenceIOR = value;
        }
    }
    get iridescenceIOR() {
        return this._objRef?.iridescenceIOR;
    }
    set iridescenceThicknessRange(value) {
        if (this._objRef) {
            this._objRef.iridescenceThicknessRange = value;
        }
    }
    get iridescenceThicknessRange() {
        return this._objRef?.iridescenceThicknessRange;
    }
    set iridescenceThicknessMap(value) {
        if (this._objRef) {
            this._objRef.iridescenceThicknessMap = value;
        }
    }
    get iridescenceThicknessMap() {
        return this._objRef?.iridescenceThicknessMap;
    }
    set sheenColor(value) {
        if (this._objRef) {
            this._objRef.sheenColor = applyValue(this._objRef.sheenColor, value);
        }
    }
    get sheenColor() {
        return this._objRef?.sheenColor;
    }
    set sheenColorMap(value) {
        if (this._objRef) {
            this._objRef.sheenColorMap = value;
        }
    }
    get sheenColorMap() {
        return this._objRef?.sheenColorMap;
    }
    set sheenRoughness(value) {
        if (this._objRef) {
            this._objRef.sheenRoughness = value;
        }
    }
    get sheenRoughness() {
        return this._objRef?.sheenRoughness;
    }
    set sheenRoughnessMap(value) {
        if (this._objRef) {
            this._objRef.sheenRoughnessMap = value;
        }
    }
    get sheenRoughnessMap() {
        return this._objRef?.sheenRoughnessMap;
    }
    set transmissionMap(value) {
        if (this._objRef) {
            this._objRef.transmissionMap = value;
        }
    }
    get transmissionMap() {
        return this._objRef?.transmissionMap;
    }
    set thickness(value) {
        if (this._objRef) {
            this._objRef.thickness = value;
        }
    }
    get thickness() {
        return this._objRef?.thickness;
    }
    set thicknessMap(value) {
        if (this._objRef) {
            this._objRef.thicknessMap = value;
        }
    }
    get thicknessMap() {
        return this._objRef?.thicknessMap;
    }
    set attenuationDistance(value) {
        if (this._objRef) {
            this._objRef.attenuationDistance = value;
        }
    }
    get attenuationDistance() {
        return this._objRef?.attenuationDistance;
    }
    set attenuationColor(value) {
        if (this._objRef) {
            this._objRef.attenuationColor = applyValue(this._objRef.attenuationColor, value);
        }
    }
    get attenuationColor() {
        return this._objRef?.attenuationColor;
    }
    set specularIntensity(value) {
        if (this._objRef) {
            this._objRef.specularIntensity = value;
        }
    }
    get specularIntensity() {
        return this._objRef?.specularIntensity;
    }
    set specularIntensityMap(value) {
        if (this._objRef) {
            this._objRef.specularIntensityMap = value;
        }
    }
    get specularIntensityMap() {
        return this._objRef?.specularIntensityMap;
    }
    set specularColor(value) {
        if (this._objRef) {
            this._objRef.specularColor = applyValue(this._objRef.specularColor, value);
        }
    }
    get specularColor() {
        return this._objRef?.specularColor;
    }
    set specularColorMap(value) {
        if (this._objRef) {
            this._objRef.specularColorMap = value;
        }
    }
    get specularColorMap() {
        return this._objRef?.specularColorMap;
    }
    get anisotropy() {
        return this._objRef?.anisotropy;
    }
    set anisotropy(value) {
        if (this._objRef) {
            this._objRef.anisotropy = value;
        }
    }
    get clearcoat() {
        return this._objRef?.clearcoat;
    }
    set clearcoat(value) {
        if (this._objRef) {
            this._objRef.clearcoat = value;
        }
    }
    get iridescence() {
        return this._objRef?.iridescence;
    }
    set iridescence(value) {
        if (this._objRef) {
            this._objRef.iridescence = value;
        }
    }
    get dispersion() {
        return this._objRef?.dispersion;
    }
    set dispersion(value) {
        if (this._objRef) {
            this._objRef.dispersion = value;
        }
    }
    get sheen() {
        return this._objRef?.sheen;
    }
    set sheen(value) {
        if (this._objRef) {
            this._objRef.sheen = value;
        }
    }
    get transmission() {
        return this._objRef?.transmission;
    }
    set transmission(value) {
        if (this._objRef) {
            this._objRef.transmission = value;
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThMeshPhysicalMaterial, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.1.2", type: ThMeshPhysicalMaterial, selector: "th-meshPhysicalMaterial", inputs: { defines: "defines", type: "type", anisotropyRotation: "anisotropyRotation", anisotropyMap: "anisotropyMap", clearcoatMap: "clearcoatMap", clearcoatRoughness: "clearcoatRoughness", clearcoatRoughnessMap: "clearcoatRoughnessMap", clearcoatNormalScale: "clearcoatNormalScale", clearcoatNormalMap: "clearcoatNormalMap", ior: "ior", reflectivity: "reflectivity", iridescenceMap: "iridescenceMap", iridescenceIOR: "iridescenceIOR", iridescenceThicknessRange: "iridescenceThicknessRange", iridescenceThicknessMap: "iridescenceThicknessMap", sheenColor: "sheenColor", sheenColorMap: "sheenColorMap", sheenRoughness: "sheenRoughness", sheenRoughnessMap: "sheenRoughnessMap", transmissionMap: "transmissionMap", thickness: "thickness", thicknessMap: "thicknessMap", attenuationDistance: "attenuationDistance", attenuationColor: "attenuationColor", specularIntensity: "specularIntensity", specularIntensityMap: "specularIntensityMap", specularColor: "specularColor", specularColorMap: "specularColorMap", anisotropy: "anisotropy", clearcoat: "clearcoat", iridescence: "iridescence", dispersion: "dispersion", sheen: "sheen", transmission: "transmission" }, providers: [
            {
                provide: ThMaterial,
                useExisting: forwardRef(() => ThMeshPhysicalMaterial),
            },
        ], usesInheritance: true, ngImport: i0, template: '<ng-content/>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThMeshPhysicalMaterial, decorators: [{
            type: Component,
            args: [{
                    selector: 'th-meshPhysicalMaterial',
                    template: '<ng-content/>',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    providers: [
                        {
                            provide: ThMaterial,
                            useExisting: forwardRef(() => ThMeshPhysicalMaterial),
                        },
                    ],
                }]
        }], propDecorators: { defines: [{
                type: Input
            }], type: [{
                type: Input
            }], anisotropyRotation: [{
                type: Input
            }], anisotropyMap: [{
                type: Input
            }], clearcoatMap: [{
                type: Input
            }], clearcoatRoughness: [{
                type: Input
            }], clearcoatRoughnessMap: [{
                type: Input
            }], clearcoatNormalScale: [{
                type: Input
            }], clearcoatNormalMap: [{
                type: Input
            }], ior: [{
                type: Input
            }], reflectivity: [{
                type: Input
            }], iridescenceMap: [{
                type: Input
            }], iridescenceIOR: [{
                type: Input
            }], iridescenceThicknessRange: [{
                type: Input
            }], iridescenceThicknessMap: [{
                type: Input
            }], sheenColor: [{
                type: Input
            }], sheenColorMap: [{
                type: Input
            }], sheenRoughness: [{
                type: Input
            }], sheenRoughnessMap: [{
                type: Input
            }], transmissionMap: [{
                type: Input
            }], thickness: [{
                type: Input
            }], thicknessMap: [{
                type: Input
            }], attenuationDistance: [{
                type: Input
            }], attenuationColor: [{
                type: Input
            }], specularIntensity: [{
                type: Input
            }], specularIntensityMap: [{
                type: Input
            }], specularColor: [{
                type: Input
            }], specularColorMap: [{
                type: Input
            }], anisotropy: [{
                type: Input
            }], clearcoat: [{
                type: Input
            }], iridescence: [{
                type: Input
            }], dispersion: [{
                type: Input
            }], sheen: [{
                type: Input
            }], transmission: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGhNZXNoUGh5c2ljYWxNYXRlcmlhbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC10aHJlZS9zcmMvbGliL2dlbmVyYXRlZC9UaE1lc2hQaHlzaWNhbE1hdGVyaWFsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHlEQUF5RDtBQUN6RCx5Q0FBeUM7QUFDekMsK0ZBQStGO0FBQy9GLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULEtBQUssRUFFTCxVQUFVLEdBQ1gsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUdMLG9CQUFvQixHQUlyQixNQUFNLE9BQU8sQ0FBQztBQUNmLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxTQUFTLENBQUM7QUFDckMsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUMxQyxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQzs7QUFhbEUsTUFBTSxPQUFPLHNCQUdYLFNBQVEsc0JBQWdDO0lBQ2pDLE9BQU87UUFDWixPQUFPLG9CQUFvQixDQUFDO0lBQzlCLENBQUM7SUFFRCxJQUFXLHNCQUFzQjtRQUMvQixPQUFPLElBQUksQ0FBQyxPQUFPLEVBQUUsc0JBQXNCLENBQUM7SUFDOUMsQ0FBQztJQUNELElBQ1csT0FBTyxDQUFDLEtBQTZCO1FBQzlDLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ2pCLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztRQUMvQixDQUFDO0lBQ0gsQ0FBQztJQUVELElBQVcsT0FBTztRQUNoQixPQUFPLElBQUksQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDO0lBQy9CLENBQUM7SUFDRCxJQUNXLElBQUksQ0FBQyxLQUFhO1FBQzNCLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ2pCLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxH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YUssa0JBQWtCO3NCQUQ1QixLQUFLO2dCQVdLLEdBQUc7c0JBRGIsS0FBSztnQkFjSyxZQUFZO3NCQUR0QixLQUFLO2dCQVFLLGNBQWM7c0JBRHhCLEtBQUs7Z0JBV0ssY0FBYztzQkFEeEIsS0FBSztnQkFXSyx5QkFBeUI7c0JBRG5DLEtBQUs7Z0JBV0ssdUJBQXVCO3NCQURqQyxLQUFLO2dCQVdLLFVBQVU7c0JBRHBCLEtBQUs7Z0JBcUJLLGFBQWE7c0JBRHZCLEtBQUs7Z0JBV0ssY0FBYztzQkFEeEIsS0FBSztnQkFXSyxpQkFBaUI7c0JBRDNCLEtBQUs7Z0JBV0ssZUFBZTtzQkFEekIsS0FBSztnQkFXSyxTQUFTO3NCQURuQixLQUFLO2dCQVdLLFlBQVk7c0JBRHRCLEtBQUs7Z0JBV0ssbUJBQW1CO3NCQUQ3QixLQUFLO2dCQVdLLGdCQUFnQjtzQkFEMUIsS0FBSztnQkFxQkssaUJBQWlCO3NCQUQzQixLQUFLO2dCQVdLLG9CQUFvQjtzQkFEOUIsS0FBSztnQkFXSyxhQUFhO3NCQUR2QixLQUFLO2dCQXFCSyxnQkFBZ0I7c0JBRDFCLEtBQUs7Z0JBY0ssVUFBVTtzQkFEcEIsS0FBSztnQkFXSyxTQUFTO3NCQURuQixLQUFLO2dCQVdLLFdBQVc7c0JBRHJCLEtBQUs7Z0JBV0ssVUFBVTtzQkFEcEIsS0FBSztnQkFXSyxLQUFLO3NCQURmLEtBQUs7Z0JBV0ssWUFBWTtzQkFEdEIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIEB0eXBlc2NyaXB0LWVzbGludC9uYW1pbmctY29udmVudGlvbiAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tdW5kZXJzY29yZS1kYW5nbGUgKi9cbi8qIGVzbGludC1kaXNhYmxlIEBhbmd1bGFyLWVzbGludC9jb21wb25lbnQtc2VsZWN0b3IsIEBhbmd1bGFyLWVzbGludC9jb21wb25lbnQtY2xhc3Mtc3VmZml4ICovXG5pbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ29tcG9uZW50LFxuICBJbnB1dCxcbiAgVHlwZSxcbiAgZm9yd2FyZFJlZixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBDb2xvcixcbiAgQ29sb3JSZXByZXNlbnRhdGlvbixcbiAgTWVzaFBoeXNpY2FsTWF0ZXJpYWwsXG4gIE1lc2hQaHlzaWNhbE1hdGVyaWFsUGFyYW1ldGVycyxcbiAgVGV4dHVyZSxcbiAgVmVjdG9yMixcbn0gZnJvbSAndGhyZWUnO1xuaW1wb3J0IHsgYXBwbHlWYWx1ZSB9IGZyb20gJy4uL3V0aWwnO1xuaW1wb3J0IHsgVGhNYXRlcmlhbCB9IGZyb20gJy4vVGhNYXRlcmlhbCc7XG5pbXBvcnQgeyBUaE1lc2hTdGFuZGFyZE1hdGVyaWFsIH0gZnJvbSAnLi9UaE1lc2hTdGFuZGFyZE1hdGVyaWFsJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndGgtbWVzaFBoeXNpY2FsTWF0ZXJpYWwnLFxuICB0ZW1wbGF0ZTogJzxuZy1jb250ZW50Lz4nLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgcHJvdmlkZXJzOiBbXG4gICAge1xuICAgICAgcHJvdmlkZTogVGhNYXRlcmlhbCxcbiAgICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IFRoTWVzaFBoeXNpY2FsTWF0ZXJpYWwpLFxuICAgIH0sXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIFRoTWVzaFBoeXNpY2FsTWF0ZXJpYWw8XG4gIFQgZXh0ZW5kcyBNZXNoUGh5c2ljYWxNYXRlcmlhbCA9IE1lc2hQaHlzaWNhbE1hdGVyaWFsLFxuICBUQVJHUyA9IC8qIHBhcmFtZXRlcnM/ICovIE1lc2hQaHlzaWNhbE1hdGVyaWFsUGFyYW1ldGVycyxcbj4gZXh0ZW5kcyBUaE1lc2hTdGFuZGFyZE1hdGVyaWFsPFQsIFRBUkdTPiB7XG4gIHB1YmxpYyBnZXRUeXBlKCk6IFR5cGU8TWVzaFBoeXNpY2FsTWF0ZXJpYWw+IHtcbiAgICByZXR1cm4gTWVzaFBoeXNpY2FsTWF0ZXJpYWw7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGlzTWVzaFBoeXNpY2FsTWF0ZXJpYWwoKTogdHJ1ZSB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX29ialJlZj8uaXNNZXNoUGh5c2ljYWxNYXRlcmlhbDtcbiAgfVxuICBASW5wdXQoKVxuICBwdWJsaWMgc2V0IGRlZmluZXModmFsdWU6IHsgW2tleTogc3RyaW5nXTogYW55IH0pIHtcbiAgICBpZiAodGhpcy5fb2JqUmVmKSB7XG4gICAgICB0aGlzLl9vYmpSZWYuZGVmaW5lcyA9IHZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBnZXQgZGVmaW5lcygpOiB7IFtrZXk6IHN0cmluZ106IGFueSB9IHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fb2JqUmVmPy5kZWZpbmVzO1xuICB9XG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzZXQgdHlwZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgaWYgKHRoaXMuX29ialJlZikge1xuICAgICAgdGhpcy5fb2JqUmVmLnR5cGUgPSB2YWx1ZTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgZ2V0IHR5cGUoKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fb2JqUmVmPy50eXBlO1xuICB9XG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzZXQgYW5pc290cm9weVJvdGF0aW9uKHZhbHVlOiBudW1iZXIpIHtcbiAgICBpZiAodGhpcy5fb2JqUmVmKSB7XG4gICAgICB0aGlzLl9vYmpSZWYuYW5pc290cm9weVJvdGF0aW9uID0gdmFsdWU7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGdldCBhbmlzb3Ryb3B5Um90YXRpb24oKTogbnVtYmVyIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fb2JqUmVmPy5hbmlzb3Ryb3B5Um90YXRpb247XG4gIH1cbiAgQElucHV0KClcbiAgcHVibGljIHNldCBhbmlzb3Ryb3B5TWFwKHZhbHVlOiBUZXh0dXJlIHwgbnVsbCkge1xuICAgIGlmICh0aGlzLl9vYmpSZWYpIHtcbiAgICAgIHRoaXMuX29ialJlZi5hbmlzb3Ryb3B5TWFwID0gdmFsdWU7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGdldCBhbmlzb3Ryb3B5TWFwKCk6IChUZXh0dXJlIHwgbnVsbCkgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9vYmpSZWY/LmFuaXNvdHJvcHlNYXA7XG4gIH1cbiAgQElucHV0KClcbiAgcHVibGljIHNldCBjbGVhcmNvYXRNYXAodmFsdWU6IFRleHR1cmUgfCBudWxsKSB7XG4gICAgaWYgKHRoaXMuX29ialJlZikge1xuICAgICAgdGhpcy5fb2JqUmVmLmNsZWFyY29hdE1hcCA9IHZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBnZXQgY2xlYXJjb2F0TWFwKCk6IChUZXh0dXJlIHwgbnVsbCkgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9vYmpSZWY/LmNsZWFyY29hdE1hcDtcbiAgfVxuICBASW5wdXQoKVxuICBwdWJsaWMgc2V0IGNsZWFyY29hdFJvdWdobmVzcyh2YWx1ZTogbnVtYmVyKSB7XG4gICAgaWYgKHRoaXMuX29ialJlZikge1xuICAgICAgdGhpcy5fb2JqUmVmLmNsZWFyY29hdFJvdWdobmVzcyA9IHZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBnZXQgY2xlYXJjb2F0Um91Z2huZXNzKCk6IG51bWJlciB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX29ialJlZj8uY2xlYXJjb2F0Um91Z2huZXNzO1xuICB9XG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzZXQgY2xlYXJjb2F0Um91Z2huZXNzTWFwKHZhbHVlOiBUZXh0dXJlIHwgbnVsbCkge1xuICAgIGlmICh0aGlzLl9vYmpSZWYpIHtcbiAgICAgIHRoaXMuX29ialJlZi5jbGVhcmNvYXRSb3VnaG5lc3NNYXAgPSB2YWx1ZTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgZ2V0IGNsZWFyY29hdFJvdWdobmVzc01hcCgpOiAoVGV4dHVyZSB8IG51bGwpIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fb2JqUmVmPy5jbGVhcmNvYXRSb3VnaG5lc3NNYXA7XG4gIH1cbiAgQElucHV0KClcbiAgcHVibGljIHNldCBjbGVhcmNvYXROb3JtYWxTY2FsZSh2YWx1ZTogVmVjdG9yMiB8IFt4OiBudW1iZXIsIHk6IG51bWJlcl0pIHtcbiAgICBpZiAodGhpcy5fb2JqUmVmKSB7XG4gICAgICB0aGlzLl9vYmpSZWYuY2xlYXJjb2F0Tm9ybWFsU2NhbGUgPSBhcHBseVZhbHVlPFZlY3RvcjI+KFxuICAgICAgICB0aGlzLl9vYmpSZWYuY2xlYXJjb2F0Tm9ybWFsU2NhbGUsXG4gICAgICAgIHZhbHVlLFxuICAgICAgKTtcbiAgICB9XG4gIH1cbiAgcHVibGljIGdldCBjbGVhcmNvYXROb3JtYWxTY2FsZSgpOiBWZWN0b3IyIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fb2JqUmVmPy5jbGVhcmNvYXROb3JtYWxTY2FsZTtcbiAgfVxuICBASW5wdXQoKVxuICBwdWJsaWMgc2V0IGNsZWFyY29hdE5vcm1hbE1hcCh2YWx1ZTogVGV4dHVyZSB8IG51bGwpIHtcbiAgICBpZiAodGhpcy5fb2JqUmVmKSB7XG4gICAgICB0aGlzLl9vYmpSZWYuY2xlYXJjb2F0Tm9ybWFsTWFwID0gdmFsdWU7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGdldCBjbGVhcmNvYXROb3JtYWxNYXAoKTogKFRleHR1cmUgfCBudWxsKSB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX29ialJlZj8uY2xlYXJjb2F0Tm9ybWFsTWFwO1xuICB9XG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzZXQgaW9yKHZhbHVlOiBudW1iZXIpIHtcbiAgICBpZiAodGhpcy5fb2JqUmVmKSB7XG4gICAgICB0aGlzLl9vYmpSZWYuaW9yID0gdmFsdWU7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGdldCBpb3IoKTogbnVtYmVyIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fb2JqUmVmPy5pb3I7XG4gIH1cbiAgcHVibGljIGdldCByZWZsZWN0aXZpdHkoKTogbnVtYmVyIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fb2JqUmVmPy5yZWZsZWN0aXZpdHk7XG4gIH1cbiAgQElucHV0KClcbiAgcHVibGljIHNldCByZWZsZWN0aXZpdHkodmFsdWU6IG51bWJlcikge1xuICAgIGlmICh0aGlzLl9vYmpSZWYpIHtcbiAgICAgIHRoaXMuX29ialJlZi5yZWZsZWN0aXZpdHkgPSB2YWx1ZTtcbiAgICB9XG4gIH1cblxuICBASW5wdXQoKVxuICBwdWJsaWMgc2V0IGlyaWRlc2NlbmNlTWFwKHZhbHVlOiBUZXh0dXJlIHwgbnVsbCkge1xuICAgIGlmICh0aGlzLl9vYmpSZWYpIHtcbiAgICAgIHRoaXMuX29ialJlZi5pcmlkZXNjZW5jZU1hcCA9IHZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBnZXQgaXJpZGVzY2VuY2VNYXAoKTogKFRleHR1cmUgfCBudWxsKSB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX29ialJlZj8uaXJpZGVzY2VuY2VNYXA7XG4gIH1cbiAgQElucHV0KClcbiAgcHVibGljIHNldCBpcmlkZXNjZW5jZUlPUih2YWx1ZTogbnVtYmVyKSB7XG4gICAgaWYgKHRoaXMuX29ialJlZikge1xuICAgICAgdGhpcy5fb2JqUmVmLmlyaWRlc2NlbmNlSU9SID0gdmFsdWU7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGdldCBpcmlkZXNjZW5jZUlPUigpOiBudW1iZXIgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9vYmpSZWY/LmlyaWRlc2NlbmNlSU9SO1xuICB9XG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzZXQgaXJpZGVzY2VuY2VUaGlja25lc3NSYW5nZSh2YWx1ZTogW251bWJlciwgbnVtYmVyXSkge1xuICAgIGlmICh0aGlzLl9vYmpSZWYpIHtcbiAgICAgIHRoaXMuX29ialJlZi5pcmlkZXNjZW5jZVRoaWNrbmVzc1JhbmdlID0gdmFsdWU7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGdldCBpcmlkZXNjZW5jZVRoaWNrbmVzc1JhbmdlKCk6IFtudW1iZXIsIG51bWJlcl0gfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9vYmpSZWY/LmlyaWRlc2NlbmNlVGhpY2tuZXNzUmFuZ2U7XG4gIH1cbiAgQElucHV0KClcbiAgcHVibGljIHNldCBpcmlkZXNjZW5jZVRoaWNrbmVzc01hcCh2YWx1ZTogVGV4dHVyZSB8IG51bGwpIHtcbiAgICBpZiAodGhpcy5fb2JqUmVmKSB7XG4gICAgICB0aGlzLl9vYmpSZWYuaXJpZGVzY2VuY2VUaGlja25lc3NNYXAgPSB2YWx1ZTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgZ2V0IGlyaWRlc2NlbmNlVGhpY2tuZXNzTWFwKCk6IChUZXh0dXJlIHwgbnVsbCkgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9vYmpSZWY/LmlyaWRlc2NlbmNlVGhpY2tuZXNzTWFwO1xuICB9XG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzZXQgc2hlZW5Db2xvcihcbiAgICB2YWx1ZTpcbiAgICAgIHwgQ29sb3JcbiAgICAgIHwgW1xuICAgICAgICAgIC4uLmFyZ3M6XG4gICAgICAgICAgICB8IFtjb2xvcjogQ29sb3JSZXByZXNlbnRhdGlvbl1cbiAgICAgICAgICAgIHwgW3I6IG51bWJlciwgZzogbnVtYmVyLCBiOiBudW1iZXJdLFxuICAgICAgICBdLFxuICApIHtcbiAgICBpZiAodGhpcy5fb2JqUmVmKSB7XG4gICAgICB0aGlzLl9vYmpSZWYuc2hlZW5Db2xvciA9IGFwcGx5VmFsdWU8Q29sb3I+KFxuICAgICAgICB0aGlzLl9vYmpSZWYuc2hlZW5Db2xvcixcbiAgICAgICAgdmFsdWUsXG4gICAgICApO1xuICAgIH1cbiAgfVxuICBwdWJsaWMgZ2V0IHNoZWVuQ29sb3IoKTogQ29sb3IgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9vYmpSZWY/LnNoZWVuQ29sb3I7XG4gIH1cbiAgQElucHV0KClcbiAgcHVibGljIHNldCBzaGVlbkNvbG9yTWFwKHZhbHVlOiBUZXh0dXJlIHwgbnVsbCkge1xuICAgIGlmICh0aGlzLl9vYmpSZWYpIHtcbiAgICAgIHRoaXMuX29ialJlZi5zaGVlbkNvbG9yTWFwID0gdmFsdWU7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGdldCBzaGVlbkNvbG9yTWFwKCk6IChUZXh0dXJlIHwgbnVsbCkgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9vYmpSZWY/LnNoZWVuQ29sb3JNYXA7XG4gIH1cbiAgQElucHV0KClcbiAgcHVibGljIHNldCBzaGVlblJvdWdobmVzcyh2YWx1ZTogbnVtYmVyKSB7XG4gICAgaWYgKHRoaXMuX29ialJlZikge1xuICAgICAgdGhpcy5fb2JqUmVmLnNoZWVuUm91Z2huZXNzID0gdmFsdWU7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGdldCBzaGVlblJvdWdobmVzcygpOiBudW1iZXIgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9vYmpSZWY/LnNoZWVuUm91Z2huZXNzO1xuICB9XG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzZXQgc2hlZW5Sb3VnaG5lc3NNYXAodmFsdWU6IFRleHR1cmUgfCBudWxsKSB7XG4gICAgaWYgKHRoaXMuX29ialJlZikge1xuICAgICAgdGhpcy5fb2JqUmVmLnNoZWVuUm91Z2huZXNzTWFwID0gdmFsdWU7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGdldCBzaGVlblJvdWdobmVzc01hcCgpOiAoVGV4dHVyZSB8IG51bGwpIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fb2JqUmVmPy5zaGVlblJvdWdobmVzc01hcDtcbiAgfVxuICBASW5wdXQoKVxuICBwdWJsaWMgc2V0IHRyYW5zbWlzc2lvbk1hcCh2YWx1ZTogVGV4dHVyZSB8IG51bGwpIHtcbiAgICBpZiAodGhpcy5fb2JqUmVmKSB7XG4gICAgICB0aGlzLl9vYmpSZWYudHJhbnNtaXNzaW9uTWFwID0gdmFsdWU7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGdldCB0cmFuc21pc3Npb25NYXAoKTogKFRleHR1cmUgfCBudWxsKSB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX29ialJlZj8udHJhbnNtaXNzaW9uTWFwO1xuICB9XG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzZXQgdGhpY2tuZXNzKHZhbHVlOiBudW1iZXIpIHtcbiAgICBpZiAodGhpcy5fb2JqUmVmKSB7XG4gICAgICB0aGlzLl9vYmpSZWYudGhpY2tuZXNzID0gdmFsdWU7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGdldCB0aGlja25lc3MoKTogbnVtYmVyIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fb2JqUmVmPy50aGlja25lc3M7XG4gIH1cbiAgQElucHV0KClcbiAgcHVibGljIHNldCB0aGlja25lc3NNYXAodmFsdWU6IFRleHR1cmUgfCBudWxsKSB7XG4gICAgaWYgKHRoaXMuX29ialJlZikge1xuICAgICAgdGhpcy5fb2JqUmVmLnRoaWNrbmVzc01hcCA9IHZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBnZXQgdGhpY2tuZXNzTWFwKCk6IChUZXh0dXJlIHwgbnVsbCkgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9vYmpSZWY/LnRoaWNrbmVzc01hcDtcbiAgfVxuICBASW5wdXQoKVxuICBwdWJsaWMgc2V0IGF0dGVudWF0aW9uRGlzdGFuY2UodmFsdWU6IG51bWJlcikge1xuICAgIGlmICh0aGlzLl9vYmpSZWYpIHtcbiAgICAgIHRoaXMuX29ialJlZi5hdHRlbnVhdGlvbkRpc3RhbmNlID0gdmFsdWU7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGdldCBhdHRlbnVhdGlvbkRpc3RhbmNlKCk6IG51bWJlciB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX29ialJlZj8uYXR0ZW51YXRpb25EaXN0YW5jZTtcbiAgfVxuICBASW5wdXQoKVxuICBwdWJsaWMgc2V0IGF0dGVudWF0aW9uQ29sb3IoXG4gICAgdmFsdWU6XG4gICAgICB8IENvbG9yXG4gICAgICB8IFtcbiAgICAgICAgICAuLi5hcmdzOlxuICAgICAgICAgICAgfCBbY29sb3I6IENvbG9yUmVwcmVzZW50YXRpb25dXG4gICAgICAgICAgICB8IFtyOiBudW1iZXIsIGc6IG51bWJlciwgYjogbnVtYmVyXSxcbiAgICAgICAgXSxcbiAgKSB7XG4gICAgaWYgKHRoaXMuX29ialJlZikge1xuICAgICAgdGhpcy5fb2JqUmVmLmF0dGVudWF0aW9uQ29sb3IgPSBhcHBseVZhbHVlPENvbG9yPihcbiAgICAgICAgdGhpcy5fb2JqUmVmLmF0dGVudWF0aW9uQ29sb3IsXG4gICAgICAgIHZhbHVlLFxuICAgICAgKTtcbiAgICB9XG4gIH1cbiAgcHVibGljIGdldCBhdHRlbnVhdGlvbkNvbG9yKCk6IENvbG9yIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fb2JqUmVmPy5hdHRlbnVhdGlvbkNvbG9yO1xuICB9XG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzZXQgc3BlY3VsYXJJbnRlbnNpdHkodmFsdWU6IG51bWJlcikge1xuICAgIGlmICh0aGlzLl9vYmpSZWYpIHtcbiAgICAgIHRoaXMuX29ialJlZi5zcGVjdWxhckludGVuc2l0eSA9IHZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBnZXQgc3BlY3VsYXJJbnRlbnNpdHkoKTogbnVtYmVyIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fb2JqUmVmPy5zcGVjdWxhckludGVuc2l0eTtcbiAgfVxuICBASW5wdXQoKVxuICBwdWJsaWMgc2V0IHNwZWN1bGFySW50ZW5zaXR5TWFwKHZhbHVlOiBUZXh0dXJlIHwgbnVsbCkge1xuICAgIGlmICh0aGlzLl9vYmpSZWYpIHtcbiAgICAgIHRoaXMuX29ialJlZi5zcGVjdWxhckludGVuc2l0eU1hcCA9IHZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBnZXQgc3BlY3VsYXJJbnRlbnNpdHlNYXAoKTogKFRleHR1cmUgfCBudWxsKSB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX29ialJlZj8uc3BlY3VsYXJJbnRlbnNpdHlNYXA7XG4gIH1cbiAgQElucHV0KClcbiAgcHVibGljIHNldCBzcGVjdWxhckNvbG9yKFxuICAgIHZhbHVlOlxuICAgICAgfCBDb2xvclxuICAgICAgfCBbXG4gICAgICAgICAgLi4uYXJnczpcbiAgICAgICAgICAgIHwgW2NvbG9yOiBDb2xvclJlcHJlc2VudGF0aW9uXVxuICAgICAgICAgICAgfCBbcjogbnVtYmVyLCBnOiBudW1iZXIsIGI6IG51bWJlcl0sXG4gICAgICAgIF0sXG4gICkge1xuICAgIGlmICh0aGlzLl9vYmpSZWYpIHtcbiAgICAgIHRoaXMuX29ialJlZi5zcGVjdWxhckNvbG9yID0gYXBwbHlWYWx1ZTxDb2xvcj4oXG4gICAgICAgIHRoaXMuX29ialJlZi5zcGVjdWxhckNvbG9yLFxuICAgICAgICB2YWx1ZSxcbiAgICAgICk7XG4gICAgfVxuICB9XG4gIHB1YmxpYyBnZXQgc3BlY3VsYXJDb2xvcigpOiBDb2xvciB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX29ialJlZj8uc3BlY3VsYXJDb2xvcjtcbiAgfVxuICBASW5wdXQoKVxuICBwdWJsaWMgc2V0IHNwZWN1bGFyQ29sb3JNYXAodmFsdWU6IFRleHR1cmUgfCBudWxsKSB7XG4gICAgaWYgKHRoaXMuX29ialJlZikge1xuICAgICAgdGhpcy5fb2JqUmVmLnNwZWN1bGFyQ29sb3JNYXAgPSB2YWx1ZTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgZ2V0IHNwZWN1bGFyQ29sb3JNYXAoKTogKFRleHR1cmUgfCBudWxsKSB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX29ialJlZj8uc3BlY3VsYXJDb2xvck1hcDtcbiAgfVxuICBwdWJsaWMgZ2V0IGFuaXNvdHJvcHkoKTogbnVtYmVyIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fb2JqUmVmPy5hbmlzb3Ryb3B5O1xuICB9XG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzZXQgYW5pc290cm9weSh2YWx1ZTogbnVtYmVyKSB7XG4gICAgaWYgKHRoaXMuX29ialJlZikge1xuICAgICAgdGhpcy5fb2JqUmVmLmFuaXNvdHJvcHkgPSB2YWx1ZTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgZ2V0IGNsZWFyY29hdCgpOiBudW1iZXIgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9vYmpSZWY/LmNsZWFyY29hdDtcbiAgfVxuICBASW5wdXQoKVxuICBwdWJsaWMgc2V0IGNsZWFyY29hdCh2YWx1ZTogbnVtYmVyKSB7XG4gICAgaWYgKHRoaXMuX29ialJlZikge1xuICAgICAgdGhpcy5fb2JqUmVmLmNsZWFyY29hdCA9IHZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBnZXQgaXJpZGVzY2VuY2UoKTogbnVtYmVyIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fb2JqUmVmPy5pcmlkZXNjZW5jZTtcbiAgfVxuICBASW5wdXQoKVxuICBwdWJsaWMgc2V0IGlyaWRlc2NlbmNlKHZhbHVlOiBudW1iZXIpIHtcbiAgICBpZiAodGhpcy5fb2JqUmVmKSB7XG4gICAgICB0aGlzLl9vYmpSZWYuaXJpZGVzY2VuY2UgPSB2YWx1ZTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgZ2V0IGRpc3BlcnNpb24oKTogbnVtYmVyIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fb2JqUmVmPy5kaXNwZXJzaW9uO1xuICB9XG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzZXQgZGlzcGVyc2lvbih2YWx1ZTogbnVtYmVyKSB7XG4gICAgaWYgKHRoaXMuX29ialJlZikge1xuICAgICAgdGhpcy5fb2JqUmVmLmRpc3BlcnNpb24gPSB2YWx1ZTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgZ2V0IHNoZWVuKCk6IG51bWJlciB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX29ialJlZj8uc2hlZW47XG4gIH1cbiAgQElucHV0KClcbiAgcHVibGljIHNldCBzaGVlbih2YWx1ZTogbnVtYmVyKSB7XG4gICAgaWYgKHRoaXMuX29ialJlZikge1xuICAgICAgdGhpcy5fb2JqUmVmLnNoZWVuID0gdmFsdWU7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGdldCB0cmFuc21pc3Npb24oKTogbnVtYmVyIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fb2JqUmVmPy50cmFuc21pc3Npb247XG4gIH1cbiAgQElucHV0KClcbiAgcHVibGljIHNldCB0cmFuc21pc3Npb24odmFsdWU6IG51bWJlcikge1xuICAgIGlmICh0aGlzLl9vYmpSZWYpIHtcbiAgICAgIHRoaXMuX29ialJlZi50cmFuc21pc3Npb24gPSB2YWx1ZTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==