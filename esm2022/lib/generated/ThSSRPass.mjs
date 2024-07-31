/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix */
import { ChangeDetectionStrategy, Component, Input, forwardRef, } from '@angular/core';
import { SSRPass, } from 'three/examples/jsm/postprocessing/SSRPass.js';
import { ThPassBase } from '../ThPassBase';
import { applyValue } from '../util';
import { ThPass } from './ThPass';
import * as i0 from "@angular/core";
export class ThSSRPass extends ThPass {
    getType() {
        return SSRPass;
    }
    set width(value) {
        if (this._objRef) {
            this._objRef.width = value;
        }
    }
    get width() {
        return this._objRef?.width;
    }
    set height(value) {
        if (this._objRef) {
            this._objRef.height = value;
        }
    }
    get height() {
        return this._objRef?.height;
    }
    set clear(value) {
        if (this._objRef) {
            this._objRef.clear = value;
        }
    }
    get clear() {
        return this._objRef?.clear;
    }
    set renderer(value) {
        if (this._objRef) {
            this._objRef.renderer = value;
        }
    }
    get renderer() {
        return this._objRef?.renderer;
    }
    set scene(value) {
        if (this._objRef) {
            this._objRef.scene = value;
        }
    }
    get scene() {
        return this._objRef?.scene;
    }
    set camera(value) {
        if (this._objRef) {
            this._objRef.camera = value;
        }
    }
    get camera() {
        return this._objRef?.camera;
    }
    set groundReflector(value) {
        if (this._objRef) {
            this._objRef.groundReflector = value;
        }
    }
    get groundReflector() {
        return this._objRef?.groundReflector;
    }
    set opacity(value) {
        if (this._objRef) {
            this._objRef.opacity = value;
        }
    }
    get opacity() {
        return this._objRef?.opacity;
    }
    set output(value) {
        if (this._objRef) {
            this._objRef.output = value;
        }
    }
    get output() {
        return this._objRef?.output;
    }
    set maxDistance(value) {
        if (this._objRef) {
            this._objRef.maxDistance = value;
        }
    }
    get maxDistance() {
        return this._objRef?.maxDistance;
    }
    set thickness(value) {
        if (this._objRef) {
            this._objRef.thickness = value;
        }
    }
    get thickness() {
        return this._objRef?.thickness;
    }
    set tempColor(value) {
        if (this._objRef) {
            this._objRef.tempColor = applyValue(this._objRef.tempColor, value);
        }
    }
    get tempColor() {
        return this._objRef?.tempColor;
    }
    get selects() {
        return this._objRef?.selects;
    }
    set selects(value) {
        if (this._objRef) {
            this._objRef.selects = value;
        }
    }
    set selective(value) {
        if (this._objRef) {
            this._objRef.selective = value;
        }
    }
    get selective() {
        return this._objRef?.selective;
    }
    get bouncing() {
        return this._objRef?.bouncing;
    }
    set bouncing(value) {
        if (this._objRef) {
            this._objRef.bouncing = value;
        }
    }
    set blur(value) {
        if (this._objRef) {
            this._objRef.blur = value;
        }
    }
    get blur() {
        return this._objRef?.blur;
    }
    get distanceAttenuation() {
        return this._objRef?.distanceAttenuation;
    }
    set distanceAttenuation(value) {
        if (this._objRef) {
            this._objRef.distanceAttenuation = value;
        }
    }
    get fresnel() {
        return this._objRef?.fresnel;
    }
    set fresnel(value) {
        if (this._objRef) {
            this._objRef.fresnel = value;
        }
    }
    get infiniteThick() {
        return this._objRef?.infiniteThick;
    }
    set infiniteThick(value) {
        if (this._objRef) {
            this._objRef.infiniteThick = value;
        }
    }
    set beautyRenderTarget(value) {
        if (this._objRef) {
            this._objRef.beautyRenderTarget = value;
        }
    }
    get beautyRenderTarget() {
        return this._objRef?.beautyRenderTarget;
    }
    set prevRenderTarget(value) {
        if (this._objRef) {
            this._objRef.prevRenderTarget = value;
        }
    }
    get prevRenderTarget() {
        return this._objRef?.prevRenderTarget;
    }
    set normalRenderTarget(value) {
        if (this._objRef) {
            this._objRef.normalRenderTarget = value;
        }
    }
    get normalRenderTarget() {
        return this._objRef?.normalRenderTarget;
    }
    set metalnessRenderTarget(value) {
        if (this._objRef) {
            this._objRef.metalnessRenderTarget = value;
        }
    }
    get metalnessRenderTarget() {
        return this._objRef?.metalnessRenderTarget;
    }
    set ssrRenderTarget(value) {
        if (this._objRef) {
            this._objRef.ssrRenderTarget = value;
        }
    }
    get ssrRenderTarget() {
        return this._objRef?.ssrRenderTarget;
    }
    set blurRenderTarget(value) {
        if (this._objRef) {
            this._objRef.blurRenderTarget = value;
        }
    }
    get blurRenderTarget() {
        return this._objRef?.blurRenderTarget;
    }
    set blurRenderTarget2(value) {
        if (this._objRef) {
            this._objRef.blurRenderTarget2 = value;
        }
    }
    get blurRenderTarget2() {
        return this._objRef?.blurRenderTarget2;
    }
    set ssrMaterial(value) {
        if (this._objRef) {
            this._objRef.ssrMaterial = value;
        }
    }
    get ssrMaterial() {
        return this._objRef?.ssrMaterial;
    }
    set normalMaterial(value) {
        if (this._objRef) {
            this._objRef.normalMaterial = value;
        }
    }
    get normalMaterial() {
        return this._objRef?.normalMaterial;
    }
    set metalnessOnMaterial(value) {
        if (this._objRef) {
            this._objRef.metalnessOnMaterial = value;
        }
    }
    get metalnessOnMaterial() {
        return this._objRef?.metalnessOnMaterial;
    }
    set metalnessOffMaterial(value) {
        if (this._objRef) {
            this._objRef.metalnessOffMaterial = value;
        }
    }
    get metalnessOffMaterial() {
        return this._objRef?.metalnessOffMaterial;
    }
    set blurMaterial(value) {
        if (this._objRef) {
            this._objRef.blurMaterial = value;
        }
    }
    get blurMaterial() {
        return this._objRef?.blurMaterial;
    }
    set blurMaterial2(value) {
        if (this._objRef) {
            this._objRef.blurMaterial2 = value;
        }
    }
    get blurMaterial2() {
        return this._objRef?.blurMaterial2;
    }
    set depthRenderMaterial(value) {
        if (this._objRef) {
            this._objRef.depthRenderMaterial = value;
        }
    }
    get depthRenderMaterial() {
        return this._objRef?.depthRenderMaterial;
    }
    set copyMaterial(value) {
        if (this._objRef) {
            this._objRef.copyMaterial = value;
        }
    }
    get copyMaterial() {
        return this._objRef?.copyMaterial;
    }
    set fsQuad(value) {
        if (this._objRef) {
            this._objRef.fsQuad = value;
        }
    }
    get fsQuad() {
        return this._objRef?.fsQuad;
    }
    set originalClearColor(value) {
        if (this._objRef) {
            this._objRef.originalClearColor = applyValue(this._objRef.originalClearColor, value);
        }
    }
    get originalClearColor() {
        return this._objRef?.originalClearColor;
    }
    static { this.OUTPUT = SSRPass.OUTPUT; }
    set dispose(value) {
        if (this._objRef) {
            this._objRef.dispose = value;
        }
    }
    get dispose() {
        return this._objRef?.dispose;
    }
    set renderPass(value) {
        if (this._objRef) {
            this._objRef.renderPass = value;
        }
    }
    get renderPass() {
        return this._objRef?.renderPass;
    }
    set renderOverride(value) {
        if (this._objRef) {
            this._objRef.renderOverride = value;
        }
    }
    get renderOverride() {
        return this._objRef?.renderOverride;
    }
    set renderMetalness(value) {
        if (this._objRef) {
            this._objRef.renderMetalness = value;
        }
    }
    get renderMetalness() {
        return this._objRef?.renderMetalness;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThSSRPass, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.1.2", type: ThSSRPass, selector: "th-sSRPass", inputs: { width: "width", height: "height", clear: "clear", renderer: "renderer", scene: "scene", camera: "camera", groundReflector: "groundReflector", opacity: "opacity", output: "output", maxDistance: "maxDistance", thickness: "thickness", tempColor: "tempColor", selects: "selects", selective: "selective", bouncing: "bouncing", blur: "blur", distanceAttenuation: "distanceAttenuation", fresnel: "fresnel", infiniteThick: "infiniteThick", beautyRenderTarget: "beautyRenderTarget", prevRenderTarget: "prevRenderTarget", normalRenderTarget: "normalRenderTarget", metalnessRenderTarget: "metalnessRenderTarget", ssrRenderTarget: "ssrRenderTarget", blurRenderTarget: "blurRenderTarget", blurRenderTarget2: "blurRenderTarget2", ssrMaterial: "ssrMaterial", normalMaterial: "normalMaterial", metalnessOnMaterial: "metalnessOnMaterial", metalnessOffMaterial: "metalnessOffMaterial", blurMaterial: "blurMaterial", blurMaterial2: "blurMaterial2", depthRenderMaterial: "depthRenderMaterial", copyMaterial: "copyMaterial", fsQuad: "fsQuad", originalClearColor: "originalClearColor", dispose: "dispose", renderPass: "renderPass", renderOverride: "renderOverride", renderMetalness: "renderMetalness" }, providers: [
            { provide: ThPassBase, useExisting: forwardRef(() => ThSSRPass) },
        ], usesInheritance: true, ngImport: i0, template: '<ng-content/>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThSSRPass, decorators: [{
            type: Component,
            args: [{
                    selector: 'th-sSRPass',
                    template: '<ng-content/>',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    providers: [
                        { provide: ThPassBase, useExisting: forwardRef(() => ThSSRPass) },
                    ],
                }]
        }], propDecorators: { width: [{
                type: Input
            }], height: [{
                type: Input
            }], clear: [{
                type: Input
            }], renderer: [{
                type: Input
            }], scene: [{
                type: Input
            }], camera: [{
                type: Input
            }], groundReflector: [{
                type: Input
            }], opacity: [{
                type: Input
            }], output: [{
                type: Input
            }], maxDistance: [{
                type: Input
            }], thickness: [{
                type: Input
            }], tempColor: [{
                type: Input
            }], selects: [{
                type: Input
            }], selective: [{
                type: Input
            }], bouncing: [{
                type: Input
            }], blur: [{
                type: Input
            }], distanceAttenuation: [{
                type: Input
            }], fresnel: [{
                type: Input
            }], infiniteThick: [{
                type: Input
            }], beautyRenderTarget: [{
                type: Input
            }], prevRenderTarget: [{
                type: Input
            }], normalRenderTarget: [{
                type: Input
            }], metalnessRenderTarget: [{
                type: Input
            }], ssrRenderTarget: [{
                type: Input
            }], blurRenderTarget: [{
                type: Input
            }], blurRenderTarget2: [{
                type: Input
            }], ssrMaterial: [{
                type: Input
            }], normalMaterial: [{
                type: Input
            }], metalnessOnMaterial: [{
                type: Input
            }], metalnessOffMaterial: [{
                type: Input
            }], blurMaterial: [{
                type: Input
            }], blurMaterial2: [{
                type: Input
            }], depthRenderMaterial: [{
                type: Input
            }], copyMaterial: [{
                type: Input
            }], fsQuad: [{
                type: Input
            }], originalClearColor: [{
                type: Input
            }], dispose: [{
                type: Input
            }], renderPass: [{
                type: Input
            }], renderOverride: [{
                type: Input
            }], renderMetalness: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGhTU1JQYXNzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LXRocmVlL3NyYy9saWIvZ2VuZXJhdGVkL1RoU1NSUGFzcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxpREFBaUQ7QUFDakQseURBQXlEO0FBQ3pELHlDQUF5QztBQUN6QywrRkFBK0Y7QUFDL0YsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixTQUFTLEVBQ1QsS0FBSyxFQUVMLFVBQVUsR0FDWCxNQUFNLGVBQWUsQ0FBQztBQWdCdkIsT0FBTyxFQUNMLE9BQU8sR0FFUixNQUFNLDhDQUE4QyxDQUFDO0FBQ3RELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLFNBQVMsQ0FBQztBQUNyQyxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sVUFBVSxDQUFDOztBQVVsQyxNQUFNLE9BQU8sU0FHWCxTQUFRLE1BQWdCO0lBQ2pCLE9BQU87UUFDWixPQUFPLE9BQU8sQ0FBQztJQUNqQixDQUFDO0lBRUQsSUFDVyxLQUFLLENBQUMsS0FBYTtRQUM1QixJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUNqQixJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDN0IsQ0FBQztJQUNILENBQUM7SUFFRCxJQUFXLEtBQUs7UUFDZCxPQUFPLElBQUksQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDO0lBQzdCLENBQUM7SUFDRCxJQUNXLE1BQU0sQ0FBQyxLQUFhO1FBQzdCLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ2pCLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUM5QixDQUFDO0lBQ0gsQ0FBQztJQUVELElBQVcsTUFBTTtRQUNmLE9BQU8sSUFBSSxDQUFDLE9BQU8sRUFBRSxNQUFNLENBQUM7SUFD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dHlwZXMgKi9cbi8qIGVzbGludC1kaXNhYmxlIEB0eXBlc2NyaXB0LWVzbGludC9uYW1pbmctY29udmVudGlvbiAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tdW5kZXJzY29yZS1kYW5nbGUgKi9cbi8qIGVzbGludC1kaXNhYmxlIEBhbmd1bGFyLWVzbGludC9jb21wb25lbnQtc2VsZWN0b3IsIEBhbmd1bGFyLWVzbGludC9jb21wb25lbnQtY2xhc3Mtc3VmZml4ICovXG5pbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ29tcG9uZW50LFxuICBJbnB1dCxcbiAgVHlwZSxcbiAgZm9yd2FyZFJlZixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBDYW1lcmEsXG4gIENvbG9yLFxuICBDb2xvclJlcHJlc2VudGF0aW9uLFxuICBNYXRlcmlhbCxcbiAgTWVzaCxcbiAgTWVzaEJhc2ljTWF0ZXJpYWwsXG4gIE1lc2hOb3JtYWxNYXRlcmlhbCxcbiAgU2NlbmUsXG4gIFNoYWRlck1hdGVyaWFsLFxuICBXZWJHTFJlbmRlclRhcmdldCxcbiAgV2ViR0xSZW5kZXJlcixcbn0gZnJvbSAndGhyZWUnO1xuaW1wb3J0IHsgUmVmbGVjdG9yRm9yU1NSUGFzcyB9IGZyb20gJ3RocmVlL2V4YW1wbGVzL2pzbS9vYmplY3RzL1JlZmxlY3RvckZvclNTUlBhc3MuanMnO1xuaW1wb3J0IHsgRnVsbFNjcmVlblF1YWQgfSBmcm9tICd0aHJlZS9leGFtcGxlcy9qc20vcG9zdHByb2Nlc3NpbmcvUGFzcy5qcyc7XG5pbXBvcnQge1xuICBTU1JQYXNzLFxuICBTU1JQYXNzUGFyYW1zLFxufSBmcm9tICd0aHJlZS9leGFtcGxlcy9qc20vcG9zdHByb2Nlc3NpbmcvU1NSUGFzcy5qcyc7XG5pbXBvcnQgeyBUaFBhc3NCYXNlIH0gZnJvbSAnLi4vVGhQYXNzQmFzZSc7XG5pbXBvcnQgeyBhcHBseVZhbHVlIH0gZnJvbSAnLi4vdXRpbCc7XG5pbXBvcnQgeyBUaFBhc3MgfSBmcm9tICcuL1RoUGFzcyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3RoLXNTUlBhc3MnLFxuICB0ZW1wbGF0ZTogJzxuZy1jb250ZW50Lz4nLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgcHJvdmlkZXJzOiBbXG4gICAgeyBwcm92aWRlOiBUaFBhc3NCYXNlLCB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBUaFNTUlBhc3MpIH0sXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIFRoU1NSUGFzczxcbiAgVCBleHRlbmRzIFNTUlBhc3MgPSBTU1JQYXNzLFxuICBUQVJHUyA9IC8qIHBhcmFtcyAqLyBTU1JQYXNzUGFyYW1zLFxuPiBleHRlbmRzIFRoUGFzczxULCBUQVJHUz4ge1xuICBwdWJsaWMgZ2V0VHlwZSgpOiBUeXBlPFNTUlBhc3M+IHtcbiAgICByZXR1cm4gU1NSUGFzcztcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzZXQgd2lkdGgodmFsdWU6IG51bWJlcikge1xuICAgIGlmICh0aGlzLl9vYmpSZWYpIHtcbiAgICAgIHRoaXMuX29ialJlZi53aWR0aCA9IHZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBnZXQgd2lkdGgoKTogbnVtYmVyIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fb2JqUmVmPy53aWR0aDtcbiAgfVxuICBASW5wdXQoKVxuICBwdWJsaWMgc2V0IGhlaWdodCh2YWx1ZTogbnVtYmVyKSB7XG4gICAgaWYgKHRoaXMuX29ialJlZikge1xuICAgICAgdGhpcy5fb2JqUmVmLmhlaWdodCA9IHZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBnZXQgaGVpZ2h0KCk6IG51bWJlciB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX29ialJlZj8uaGVpZ2h0O1xuICB9XG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzZXQgY2xlYXIodmFsdWU6IGJvb2xlYW4pIHtcbiAgICBpZiAodGhpcy5fb2JqUmVmKSB7XG4gICAgICB0aGlzLl9vYmpSZWYuY2xlYXIgPSB2YWx1ZTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgZ2V0IGNsZWFyKCk6IGJvb2xlYW4gfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9vYmpSZWY/LmNsZWFyO1xuICB9XG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzZXQgcmVuZGVyZXIodmFsdWU6IFdlYkdMUmVuZGVyZXIpIHtcbiAgICBpZiAodGhpcy5fb2JqUmVmKSB7XG4gICAgICB0aGlzLl9vYmpSZWYucmVuZGVyZXIgPSB2YWx1ZTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgZ2V0IHJlbmRlcmVyKCk6IFdlYkdMUmVuZGVyZXIgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9vYmpSZWY/LnJlbmRlcmVyO1xuICB9XG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzZXQgc2NlbmUodmFsdWU6IFNjZW5lKSB7XG4gICAgaWYgKHRoaXMuX29ialJlZikge1xuICAgICAgdGhpcy5fb2JqUmVmLnNjZW5lID0gdmFsdWU7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGdldCBzY2VuZSgpOiBTY2VuZSB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX29ialJlZj8uc2NlbmU7XG4gIH1cbiAgQElucHV0KClcbiAgcHVibGljIHNldCBjYW1lcmEodmFsdWU6IENhbWVyYSkge1xuICAgIGlmICh0aGlzLl9vYmpSZWYpIHtcbiAgICAgIHRoaXMuX29ialJlZi5jYW1lcmEgPSB2YWx1ZTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgZ2V0IGNhbWVyYSgpOiBDYW1lcmEgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9vYmpSZWY/LmNhbWVyYTtcbiAgfVxuICBASW5wdXQoKVxuICBwdWJsaWMgc2V0IGdyb3VuZFJlZmxlY3Rvcih2YWx1ZTogUmVmbGVjdG9yRm9yU1NSUGFzcyB8IG51bGwpIHtcbiAgICBpZiAodGhpcy5fb2JqUmVmKSB7XG4gICAgICB0aGlzLl9vYmpSZWYuZ3JvdW5kUmVmbGVjdG9yID0gdmFsdWU7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGdldCBncm91bmRSZWZsZWN0b3IoKTogKFJlZmxlY3RvckZvclNTUlBhc3MgfCBudWxsKSB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX29ialJlZj8uZ3JvdW5kUmVmbGVjdG9yO1xuICB9XG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzZXQgb3BhY2l0eSh2YWx1ZTogbnVtYmVyKSB7XG4gICAgaWYgKHRoaXMuX29ialJlZikge1xuICAgICAgdGhpcy5fb2JqUmVmLm9wYWNpdHkgPSB2YWx1ZTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgZ2V0IG9wYWNpdHkoKTogbnVtYmVyIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fb2JqUmVmPy5vcGFjaXR5O1xuICB9XG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzZXQgb3V0cHV0KHZhbHVlOiBudW1iZXIpIHtcbiAgICBpZiAodGhpcy5fb2JqUmVmKSB7XG4gICAgICB0aGlzLl9vYmpSZWYub3V0cHV0ID0gdmFsdWU7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGdldCBvdXRwdXQoKTogbnVtYmVyIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fb2JqUmVmPy5vdXRwdXQ7XG4gIH1cbiAgQElucHV0KClcbiAgcHVibGljIHNldCBtYXhEaXN0YW5jZSh2YWx1ZTogbnVtYmVyKSB7XG4gICAgaWYgKHRoaXMuX29ialJlZikge1xuICAgICAgdGhpcy5fb2JqUmVmLm1heERpc3RhbmNlID0gdmFsdWU7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGdldCBtYXhEaXN0YW5jZSgpOiBudW1iZXIgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9vYmpSZWY/Lm1heERpc3RhbmNlO1xuICB9XG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzZXQgdGhpY2tuZXNzKHZhbHVlOiBudW1iZXIpIHtcbiAgICBpZiAodGhpcy5fb2JqUmVmKSB7XG4gICAgICB0aGlzLl9vYmpSZWYudGhpY2tuZXNzID0gdmFsdWU7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGdldCB0aGlja25lc3MoKTogbnVtYmVyIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fb2JqUmVmPy50aGlja25lc3M7XG4gIH1cbiAgQElucHV0KClcbiAgcHVibGljIHNldCB0ZW1wQ29sb3IoXG4gICAgdmFsdWU6XG4gICAgICB8IENvbG9yXG4gICAgICB8IFtcbiAgICAgICAgICAuLi5hcmdzOlxuICAgICAgICAgICAgfCBbY29sb3I6IENvbG9yUmVwcmVzZW50YXRpb25dXG4gICAgICAgICAgICB8IFtyOiBudW1iZXIsIGc6IG51bWJlciwgYjogbnVtYmVyXSxcbiAgICAgICAgXSxcbiAgKSB7XG4gICAgaWYgKHRoaXMuX29ialJlZikge1xuICAgICAgdGhpcy5fb2JqUmVmLnRlbXBDb2xvciA9IGFwcGx5VmFsdWU8Q29sb3I+KHRoaXMuX29ialJlZi50ZW1wQ29sb3IsIHZhbHVlKTtcbiAgICB9XG4gIH1cbiAgcHVibGljIGdldCB0ZW1wQ29sb3IoKTogQ29sb3IgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9vYmpSZWY/LnRlbXBDb2xvcjtcbiAgfVxuICBwdWJsaWMgZ2V0IHNlbGVjdHMoKTogKE1lc2hbXSB8IG51bGwpIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fb2JqUmVmPy5zZWxlY3RzO1xuICB9XG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzZXQgc2VsZWN0cyh2YWx1ZTogTWVzaFtdIHwgbnVsbCkge1xuICAgIGlmICh0aGlzLl9vYmpSZWYpIHtcbiAgICAgIHRoaXMuX29ialJlZi5zZWxlY3RzID0gdmFsdWU7XG4gICAgfVxuICB9XG5cbiAgQElucHV0KClcbiAgcHVibGljIHNldCBzZWxlY3RpdmUodmFsdWU6IGJvb2xlYW4pIHtcbiAgICBpZiAodGhpcy5fb2JqUmVmKSB7XG4gICAgICB0aGlzLl9vYmpSZWYuc2VsZWN0aXZlID0gdmFsdWU7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGdldCBzZWxlY3RpdmUoKTogYm9vbGVhbiB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX29ialJlZj8uc2VsZWN0aXZlO1xuICB9XG4gIHB1YmxpYyBnZXQgYm91bmNpbmcoKTogYm9vbGVhbiB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX29ialJlZj8uYm91bmNpbmc7XG4gIH1cbiAgQElucHV0KClcbiAgcHVibGljIHNldCBib3VuY2luZyh2YWx1ZTogYm9vbGVhbikge1xuICAgIGlmICh0aGlzLl9vYmpSZWYpIHtcbiAgICAgIHRoaXMuX29ialJlZi5ib3VuY2luZyA9IHZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzZXQgYmx1cih2YWx1ZTogYm9vbGVhbikge1xuICAgIGlmICh0aGlzLl9vYmpSZWYpIHtcbiAgICAgIHRoaXMuX29ialJlZi5ibHVyID0gdmFsdWU7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGdldCBibHVyKCk6IGJvb2xlYW4gfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9vYmpSZWY/LmJsdXI7XG4gIH1cbiAgcHVibGljIGdldCBkaXN0YW5jZUF0dGVudWF0aW9uKCk6IGJvb2xlYW4gfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9vYmpSZWY/LmRpc3RhbmNlQXR0ZW51YXRpb247XG4gIH1cbiAgQElucHV0KClcbiAgcHVibGljIHNldCBkaXN0YW5jZUF0dGVudWF0aW9uKHZhbHVlOiBib29sZWFuKSB7XG4gICAgaWYgKHRoaXMuX29ialJlZikge1xuICAgICAgdGhpcy5fb2JqUmVmLmRpc3RhbmNlQXR0ZW51YXRpb24gPSB2YWx1ZTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgZ2V0IGZyZXNuZWwoKTogYm9vbGVhbiB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX29ialJlZj8uZnJlc25lbDtcbiAgfVxuICBASW5wdXQoKVxuICBwdWJsaWMgc2V0IGZyZXNuZWwodmFsdWU6IGJvb2xlYW4pIHtcbiAgICBpZiAodGhpcy5fb2JqUmVmKSB7XG4gICAgICB0aGlzLl9vYmpSZWYuZnJlc25lbCA9IHZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBnZXQgaW5maW5pdGVUaGljaygpOiBib29sZWFuIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fb2JqUmVmPy5pbmZpbml0ZVRoaWNrO1xuICB9XG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzZXQgaW5maW5pdGVUaGljayh2YWx1ZTogYm9vbGVhbikge1xuICAgIGlmICh0aGlzLl9vYmpSZWYpIHtcbiAgICAgIHRoaXMuX29ialJlZi5pbmZpbml0ZVRoaWNrID0gdmFsdWU7XG4gICAgfVxuICB9XG5cbiAgQElucHV0KClcbiAgcHVibGljIHNldCBiZWF1dHlSZW5kZXJUYXJnZXQodmFsdWU6IFdlYkdMUmVuZGVyVGFyZ2V0KSB7XG4gICAgaWYgKHRoaXMuX29ialJlZikge1xuICAgICAgdGhpcy5fb2JqUmVmLmJlYXV0eVJlbmRlclRhcmdldCA9IHZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBnZXQgYmVhdXR5UmVuZGVyVGFyZ2V0KCk6IFdlYkdMUmVuZGVyVGFyZ2V0IHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fb2JqUmVmPy5iZWF1dHlSZW5kZXJUYXJnZXQ7XG4gIH1cbiAgQElucHV0KClcbiAgcHVibGljIHNldCBwcmV2UmVuZGVyVGFyZ2V0KHZhbHVlOiBXZWJHTFJlbmRlclRhcmdldCkge1xuICAgIGlmICh0aGlzLl9vYmpSZWYpIHtcbiAgICAgIHRoaXMuX29ialJlZi5wcmV2UmVuZGVyVGFyZ2V0ID0gdmFsdWU7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGdldCBwcmV2UmVuZGVyVGFyZ2V0KCk6IFdlYkdMUmVuZGVyVGFyZ2V0IHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fb2JqUmVmPy5wcmV2UmVuZGVyVGFyZ2V0O1xuICB9XG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzZXQgbm9ybWFsUmVuZGVyVGFyZ2V0KHZhbHVlOiBXZWJHTFJlbmRlclRhcmdldCkge1xuICAgIGlmICh0aGlzLl9vYmpSZWYpIHtcbiAgICAgIHRoaXMuX29ialJlZi5ub3JtYWxSZW5kZXJUYXJnZXQgPSB2YWx1ZTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgZ2V0IG5vcm1hbFJlbmRlclRhcmdldCgpOiBXZWJHTFJlbmRlclRhcmdldCB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX29ialJlZj8ubm9ybWFsUmVuZGVyVGFyZ2V0O1xuICB9XG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzZXQgbWV0YWxuZXNzUmVuZGVyVGFyZ2V0KHZhbHVlOiBXZWJHTFJlbmRlclRhcmdldCkge1xuICAgIGlmICh0aGlzLl9vYmpSZWYpIHtcbiAgICAgIHRoaXMuX29ialJlZi5tZXRhbG5lc3NSZW5kZXJUYXJnZXQgPSB2YWx1ZTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgZ2V0IG1ldGFsbmVzc1JlbmRlclRhcmdldCgpOiBXZWJHTFJlbmRlclRhcmdldCB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX29ialJlZj8ubWV0YWxuZXNzUmVuZGVyVGFyZ2V0O1xuICB9XG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzZXQgc3NyUmVuZGVyVGFyZ2V0KHZhbHVlOiBXZWJHTFJlbmRlclRhcmdldCkge1xuICAgIGlmICh0aGlzLl9vYmpSZWYpIHtcbiAgICAgIHRoaXMuX29ialJlZi5zc3JSZW5kZXJUYXJnZXQgPSB2YWx1ZTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgZ2V0IHNzclJlbmRlclRhcmdldCgpOiBXZWJHTFJlbmRlclRhcmdldCB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX29ialJlZj8uc3NyUmVuZGVyVGFyZ2V0O1xuICB9XG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzZXQgYmx1clJlbmRlclRhcmdldCh2YWx1ZTogV2ViR0xSZW5kZXJUYXJnZXQpIHtcbiAgICBpZiAodGhpcy5fb2JqUmVmKSB7XG4gICAgICB0aGlzLl9vYmpSZWYuYmx1clJlbmRlclRhcmdldCA9IHZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBnZXQgYmx1clJlbmRlclRhcmdldCgpOiBXZWJHTFJlbmRlclRhcmdldCB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX29ialJlZj8uYmx1clJlbmRlclRhcmdldDtcbiAgfVxuICBASW5wdXQoKVxuICBwdWJsaWMgc2V0IGJsdXJSZW5kZXJUYXJnZXQyKHZhbHVlOiBXZWJHTFJlbmRlclRhcmdldCkge1xuICAgIGlmICh0aGlzLl9vYmpSZWYpIHtcbiAgICAgIHRoaXMuX29ialJlZi5ibHVyUmVuZGVyVGFyZ2V0MiA9IHZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBnZXQgYmx1clJlbmRlclRhcmdldDIoKTogV2ViR0xSZW5kZXJUYXJnZXQgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9vYmpSZWY/LmJsdXJSZW5kZXJUYXJnZXQyO1xuICB9XG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzZXQgc3NyTWF0ZXJpYWwodmFsdWU6IFNoYWRlck1hdGVyaWFsKSB7XG4gICAgaWYgKHRoaXMuX29ialJlZikge1xuICAgICAgdGhpcy5fb2JqUmVmLnNzck1hdGVyaWFsID0gdmFsdWU7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGdldCBzc3JNYXRlcmlhbCgpOiBTaGFkZXJNYXRlcmlhbCB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX29ialJlZj8uc3NyTWF0ZXJpYWw7XG4gIH1cbiAgQElucHV0KClcbiAgcHVibGljIHNldCBub3JtYWxNYXRlcmlhbCh2YWx1ZTogTWVzaE5vcm1hbE1hdGVyaWFsKSB7XG4gICAgaWYgKHRoaXMuX29ialJlZikge1xuICAgICAgdGhpcy5fb2JqUmVmLm5vcm1hbE1hdGVyaWFsID0gdmFsdWU7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGdldCBub3JtYWxNYXRlcmlhbCgpOiBNZXNoTm9ybWFsTWF0ZXJpYWwgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9vYmpSZWY/Lm5vcm1hbE1hdGVyaWFsO1xuICB9XG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzZXQgbWV0YWxuZXNzT25NYXRlcmlhbCh2YWx1ZTogTWVzaEJhc2ljTWF0ZXJpYWwpIHtcbiAgICBpZiAodGhpcy5fb2JqUmVmKSB7XG4gICAgICB0aGlzLl9vYmpSZWYubWV0YWxuZXNzT25NYXRlcmlhbCA9IHZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBnZXQgbWV0YWxuZXNzT25NYXRlcmlhbCgpOiBNZXNoQmFzaWNNYXRlcmlhbCB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX29ialJlZj8ubWV0YWxuZXNzT25NYXRlcmlhbDtcbiAgfVxuICBASW5wdXQoKVxuICBwdWJsaWMgc2V0IG1ldGFsbmVzc09mZk1hdGVyaWFsKHZhbHVlOiBNZXNoQmFzaWNNYXRlcmlhbCkge1xuICAgIGlmICh0aGlzLl9vYmpSZWYpIHtcbiAgICAgIHRoaXMuX29ialJlZi5tZXRhbG5lc3NPZmZNYXRlcmlhbCA9IHZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBnZXQgbWV0YWxuZXNzT2ZmTWF0ZXJpYWwoKTogTWVzaEJhc2ljTWF0ZXJpYWwgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9vYmpSZWY/Lm1ldGFsbmVzc09mZk1hdGVyaWFsO1xuICB9XG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzZXQgYmx1ck1hdGVyaWFsKHZhbHVlOiBTaGFkZXJNYXRlcmlhbCkge1xuICAgIGlmICh0aGlzLl9vYmpSZWYpIHtcbiAgICAgIHRoaXMuX29ialJlZi5ibHVyTWF0ZXJpYWwgPSB2YWx1ZTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgZ2V0IGJsdXJNYXRlcmlhbCgpOiBTaGFkZXJNYXRlcmlhbCB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX29ialJlZj8uYmx1ck1hdGVyaWFsO1xuICB9XG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzZXQgYmx1ck1hdGVyaWFsMih2YWx1ZTogU2hhZGVyTWF0ZXJpYWwpIHtcbiAgICBpZiAodGhpcy5fb2JqUmVmKSB7XG4gICAgICB0aGlzLl9vYmpSZWYuYmx1ck1hdGVyaWFsMiA9IHZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBnZXQgYmx1ck1hdGVyaWFsMigpOiBTaGFkZXJNYXRlcmlhbCB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX29ialJlZj8uYmx1ck1hdGVyaWFsMjtcbiAgfVxuICBASW5wdXQoKVxuICBwdWJsaWMgc2V0IGRlcHRoUmVuZGVyTWF0ZXJpYWwodmFsdWU6IFNoYWRlck1hdGVyaWFsKSB7XG4gICAgaWYgKHRoaXMuX29ialJlZikge1xuICAgICAgdGhpcy5fb2JqUmVmLmRlcHRoUmVuZGVyTWF0ZXJpYWwgPSB2YWx1ZTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgZ2V0IGRlcHRoUmVuZGVyTWF0ZXJpYWwoKTogU2hhZGVyTWF0ZXJpYWwgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9vYmpSZWY/LmRlcHRoUmVuZGVyTWF0ZXJpYWw7XG4gIH1cbiAgQElucHV0KClcbiAgcHVibGljIHNldCBjb3B5TWF0ZXJpYWwodmFsdWU6IFNoYWRlck1hdGVyaWFsKSB7XG4gICAgaWYgKHRoaXMuX29ialJlZikge1xuICAgICAgdGhpcy5fb2JqUmVmLmNvcHlNYXRlcmlhbCA9IHZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBnZXQgY29weU1hdGVyaWFsKCk6IFNoYWRlck1hdGVyaWFsIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fb2JqUmVmPy5jb3B5TWF0ZXJpYWw7XG4gIH1cbiAgQElucHV0KClcbiAgcHVibGljIHNldCBmc1F1YWQodmFsdWU6IEZ1bGxTY3JlZW5RdWFkKSB7XG4gICAgaWYgKHRoaXMuX29ialJlZikge1xuICAgICAgdGhpcy5fb2JqUmVmLmZzUXVhZCA9IHZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBnZXQgZnNRdWFkKCk6IEZ1bGxTY3JlZW5RdWFkIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fb2JqUmVmPy5mc1F1YWQ7XG4gIH1cbiAgQElucHV0KClcbiAgcHVibGljIHNldCBvcmlnaW5hbENsZWFyQ29sb3IoXG4gICAgdmFsdWU6XG4gICAgICB8IENvbG9yXG4gICAgICB8IFtcbiAgICAgICAgICAuLi5hcmdzOlxuICAgICAgICAgICAgfCBbY29sb3I6IENvbG9yUmVwcmVzZW50YXRpb25dXG4gICAgICAgICAgICB8IFtyOiBudW1iZXIsIGc6IG51bWJlciwgYjogbnVtYmVyXSxcbiAgICAgICAgXSxcbiAgKSB7XG4gICAgaWYgKHRoaXMuX29ialJlZikge1xuICAgICAgdGhpcy5fb2JqUmVmLm9yaWdpbmFsQ2xlYXJDb2xvciA9IGFwcGx5VmFsdWU8Q29sb3I+KFxuICAgICAgICB0aGlzLl9vYmpSZWYub3JpZ2luYWxDbGVhckNvbG9yLFxuICAgICAgICB2YWx1ZSxcbiAgICAgICk7XG4gICAgfVxuICB9XG4gIHB1YmxpYyBnZXQgb3JpZ2luYWxDbGVhckNvbG9yKCk6IENvbG9yIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fb2JqUmVmPy5vcmlnaW5hbENsZWFyQ29sb3I7XG4gIH1cblxuICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IE9VVFBVVCA9IFNTUlBhc3MuT1VUUFVUO1xuXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzZXQgZGlzcG9zZSh2YWx1ZTogKCkgPT4gdm9pZCkge1xuICAgIGlmICh0aGlzLl9vYmpSZWYpIHtcbiAgICAgIHRoaXMuX29ialJlZi5kaXNwb3NlID0gdmFsdWU7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGdldCBkaXNwb3NlKCk6ICgoKSA9PiB2b2lkKSB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX29ialJlZj8uZGlzcG9zZTtcbiAgfVxuICBASW5wdXQoKVxuICBwdWJsaWMgc2V0IHJlbmRlclBhc3MoXG4gICAgdmFsdWU6IChcbiAgICAgIHJlbmRlcmVyOiBXZWJHTFJlbmRlcmVyLFxuICAgICAgcGFzc01hdGVyaWFsOiBNYXRlcmlhbCxcbiAgICAgIHJlbmRlclRhcmdldDogV2ViR0xSZW5kZXJUYXJnZXQsXG4gICAgICBjbGVhckNvbG9yOiBDb2xvclJlcHJlc2VudGF0aW9uLFxuICAgICAgY2xlYXJBbHBoYTogQ29sb3JSZXByZXNlbnRhdGlvbixcbiAgICApID0+IHZvaWQsXG4gICkge1xuICAgIGlmICh0aGlzLl9vYmpSZWYpIHtcbiAgICAgIHRoaXMuX29ialJlZi5yZW5kZXJQYXNzID0gdmFsdWU7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGdldCByZW5kZXJQYXNzKCk6XG4gICAgfCAoKFxuICAgICAgICByZW5kZXJlcjogV2ViR0xSZW5kZXJlcixcbiAgICAgICAgcGFzc01hdGVyaWFsOiBNYXRlcmlhbCxcbiAgICAgICAgcmVuZGVyVGFyZ2V0OiBXZWJHTFJlbmRlclRhcmdldCxcbiAgICAgICAgY2xlYXJDb2xvcjogQ29sb3JSZXByZXNlbnRhdGlvbixcbiAgICAgICAgY2xlYXJBbHBoYTogQ29sb3JSZXByZXNlbnRhdGlvbixcbiAgICAgICkgPT4gdm9pZClcbiAgICB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX29ialJlZj8ucmVuZGVyUGFzcztcbiAgfVxuICBASW5wdXQoKVxuICBwdWJsaWMgc2V0IHJlbmRlck92ZXJyaWRlKFxuICAgIHZhbHVlOiAoXG4gICAgICByZW5kZXJlcjogV2ViR0xSZW5kZXJlcixcbiAgICAgIHBhc3NNYXRlcmlhbDogTWF0ZXJpYWwsXG4gICAgICByZW5kZXJUYXJnZXQ6IFdlYkdMUmVuZGVyVGFyZ2V0LFxuICAgICAgY2xlYXJDb2xvcjogQ29sb3JSZXByZXNlbnRhdGlvbixcbiAgICAgIGNsZWFyQWxwaGE6IENvbG9yUmVwcmVzZW50YXRpb24sXG4gICAgKSA9PiB2b2lkLFxuICApIHtcbiAgICBpZiAodGhpcy5fb2JqUmVmKSB7XG4gICAgICB0aGlzLl9vYmpSZWYucmVuZGVyT3ZlcnJpZGUgPSB2YWx1ZTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgZ2V0IHJlbmRlck92ZXJyaWRlKCk6XG4gICAgfCAoKFxuICAgICAgICByZW5kZXJlcjogV2ViR0xSZW5kZXJlcixcbiAgICAgICAgcGFzc01hdGVyaWFsOiBNYXRlcmlhbCxcbiAgICAgICAgcmVuZGVyVGFyZ2V0OiBXZWJHTFJlbmRlclRhcmdldCxcbiAgICAgICAgY2xlYXJDb2xvcjogQ29sb3JSZXByZXNlbnRhdGlvbixcbiAgICAgICAgY2xlYXJBbHBoYTogQ29sb3JSZXByZXNlbnRhdGlvbixcbiAgICAgICkgPT4gdm9pZClcbiAgICB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX29ialJlZj8ucmVuZGVyT3ZlcnJpZGU7XG4gIH1cbiAgQElucHV0KClcbiAgcHVibGljIHNldCByZW5kZXJNZXRhbG5lc3MoXG4gICAgdmFsdWU6IChcbiAgICAgIHJlbmRlcmVyOiBXZWJHTFJlbmRlcmVyLFxuICAgICAgcGFzc01hdGVyaWFsOiBNYXRlcmlhbCxcbiAgICAgIHJlbmRlclRhcmdldDogV2ViR0xSZW5kZXJUYXJnZXQsXG4gICAgICBjbGVhckNvbG9yOiBDb2xvclJlcHJlc2VudGF0aW9uLFxuICAgICAgY2xlYXJBbHBoYTogQ29sb3JSZXByZXNlbnRhdGlvbixcbiAgICApID0+IHZvaWQsXG4gICkge1xuICAgIGlmICh0aGlzLl9vYmpSZWYpIHtcbiAgICAgIHRoaXMuX29ialJlZi5yZW5kZXJNZXRhbG5lc3MgPSB2YWx1ZTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgZ2V0IHJlbmRlck1ldGFsbmVzcygpOlxuICAgIHwgKChcbiAgICAgICAgcmVuZGVyZXI6IFdlYkdMUmVuZGVyZXIsXG4gICAgICAgIHBhc3NNYXRlcmlhbDogTWF0ZXJpYWwsXG4gICAgICAgIHJlbmRlclRhcmdldDogV2ViR0xSZW5kZXJUYXJnZXQsXG4gICAgICAgIGNsZWFyQ29sb3I6IENvbG9yUmVwcmVzZW50YXRpb24sXG4gICAgICAgIGNsZWFyQWxwaGE6IENvbG9yUmVwcmVzZW50YXRpb24sXG4gICAgICApID0+IHZvaWQpXG4gICAgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9vYmpSZWY/LnJlbmRlck1ldGFsbmVzcztcbiAgfVxufVxuIl19