/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix */
import { ChangeDetectionStrategy, Component, Input, forwardRef, } from '@angular/core';
import { ArcballControls } from 'three/examples/jsm/controls/ArcballControls.js';
import { ThControlBase } from '../ThControlBase';
import { applyValue } from '../util';
import * as i0 from "@angular/core";
export class ThArcballControls extends ThControlBase {
    getType() {
        return ArcballControls;
    }
    set camera(value) {
        if (this._objRef) {
            this._objRef.camera = value;
        }
    }
    get camera() {
        return this._objRef?.camera;
    }
    set domElement(value) {
        if (this._objRef) {
            this._objRef.domElement = value;
        }
    }
    get domElement() {
        return this._objRef?.domElement;
    }
    set scene(value) {
        if (this._objRef) {
            this._objRef.scene = value;
        }
    }
    get scene() {
        return this._objRef?.scene;
    }
    set focusAnimationTime(value) {
        if (this._objRef) {
            this._objRef.focusAnimationTime = value;
        }
    }
    get focusAnimationTime() {
        return this._objRef?.focusAnimationTime;
    }
    set enabled(value) {
        if (this._objRef) {
            this._objRef.enabled = value;
        }
    }
    get enabled() {
        return this._objRef?.enabled;
    }
    set enablePan(value) {
        if (this._objRef) {
            this._objRef.enablePan = value;
        }
    }
    get enablePan() {
        return this._objRef?.enablePan;
    }
    set enableRotate(value) {
        if (this._objRef) {
            this._objRef.enableRotate = value;
        }
    }
    get enableRotate() {
        return this._objRef?.enableRotate;
    }
    set enableZoom(value) {
        if (this._objRef) {
            this._objRef.enableZoom = value;
        }
    }
    get enableZoom() {
        return this._objRef?.enableZoom;
    }
    set enableGizmos(value) {
        if (this._objRef) {
            this._objRef.enableGizmos = value;
        }
    }
    get enableGizmos() {
        return this._objRef?.enableGizmos;
    }
    set adjustNearFar(value) {
        if (this._objRef) {
            this._objRef.adjustNearFar = value;
        }
    }
    get adjustNearFar() {
        return this._objRef?.adjustNearFar;
    }
    set scaleFactor(value) {
        if (this._objRef) {
            this._objRef.scaleFactor = value;
        }
    }
    get scaleFactor() {
        return this._objRef?.scaleFactor;
    }
    set dampingFactor(value) {
        if (this._objRef) {
            this._objRef.dampingFactor = value;
        }
    }
    get dampingFactor() {
        return this._objRef?.dampingFactor;
    }
    set wMax(value) {
        if (this._objRef) {
            this._objRef.wMax = value;
        }
    }
    get wMax() {
        return this._objRef?.wMax;
    }
    set enableAnimations(value) {
        if (this._objRef) {
            this._objRef.enableAnimations = value;
        }
    }
    get enableAnimations() {
        return this._objRef?.enableAnimations;
    }
    set enableGrid(value) {
        if (this._objRef) {
            this._objRef.enableGrid = value;
        }
    }
    get enableGrid() {
        return this._objRef?.enableGrid;
    }
    set cursorZoom(value) {
        if (this._objRef) {
            this._objRef.cursorZoom = value;
        }
    }
    get cursorZoom() {
        return this._objRef?.cursorZoom;
    }
    set minFov(value) {
        if (this._objRef) {
            this._objRef.minFov = value;
        }
    }
    get minFov() {
        return this._objRef?.minFov;
    }
    set maxFov(value) {
        if (this._objRef) {
            this._objRef.maxFov = value;
        }
    }
    get maxFov() {
        return this._objRef?.maxFov;
    }
    set minDistance(value) {
        if (this._objRef) {
            this._objRef.minDistance = value;
        }
    }
    get minDistance() {
        return this._objRef?.minDistance;
    }
    set maxDistance(value) {
        if (this._objRef) {
            this._objRef.maxDistance = value;
        }
    }
    get maxDistance() {
        return this._objRef?.maxDistance;
    }
    set minZoom(value) {
        if (this._objRef) {
            this._objRef.minZoom = value;
        }
    }
    get minZoom() {
        return this._objRef?.minZoom;
    }
    set maxZoom(value) {
        if (this._objRef) {
            this._objRef.maxZoom = value;
        }
    }
    get maxZoom() {
        return this._objRef?.maxZoom;
    }
    set target(value) {
        if (this._objRef) {
            this._objRef.target = applyValue(this._objRef.target, value);
        }
    }
    get target() {
        return this._objRef?.target;
    }
    set radiusFactor(value) {
        if (this._objRef) {
            this._objRef.radiusFactor = value;
        }
    }
    get radiusFactor() {
        return this._objRef?.radiusFactor;
    }
    set rotateSpeed(value) {
        if (this._objRef) {
            this._objRef.rotateSpeed = value;
        }
    }
    get rotateSpeed() {
        return this._objRef?.rotateSpeed;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThArcballControls, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.1.2", type: ThArcballControls, selector: "th-arcballControls", inputs: { camera: "camera", domElement: "domElement", scene: "scene", focusAnimationTime: "focusAnimationTime", enabled: "enabled", enablePan: "enablePan", enableRotate: "enableRotate", enableZoom: "enableZoom", enableGizmos: "enableGizmos", adjustNearFar: "adjustNearFar", scaleFactor: "scaleFactor", dampingFactor: "dampingFactor", wMax: "wMax", enableAnimations: "enableAnimations", enableGrid: "enableGrid", cursorZoom: "cursorZoom", minFov: "minFov", maxFov: "maxFov", minDistance: "minDistance", maxDistance: "maxDistance", minZoom: "minZoom", maxZoom: "maxZoom", target: "target", radiusFactor: "radiusFactor", rotateSpeed: "rotateSpeed" }, providers: [
            {
                provide: ThControlBase,
                useExisting: forwardRef(() => ThArcballControls),
            },
        ], usesInheritance: true, ngImport: i0, template: '<ng-content/>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThArcballControls, decorators: [{
            type: Component,
            args: [{
                    selector: 'th-arcballControls',
                    template: '<ng-content/>',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    providers: [
                        {
                            provide: ThControlBase,
                            useExisting: forwardRef(() => ThArcballControls),
                        },
                    ],
                }]
        }], propDecorators: { camera: [{
                type: Input
            }], domElement: [{
                type: Input
            }], scene: [{
                type: Input
            }], focusAnimationTime: [{
                type: Input
            }], enabled: [{
                type: Input
            }], enablePan: [{
                type: Input
            }], enableRotate: [{
                type: Input
            }], enableZoom: [{
                type: Input
            }], enableGizmos: [{
                type: Input
            }], adjustNearFar: [{
                type: Input
            }], scaleFactor: [{
                type: Input
            }], dampingFactor: [{
                type: Input
            }], wMax: [{
                type: Input
            }], enableAnimations: [{
                type: Input
            }], enableGrid: [{
                type: Input
            }], cursorZoom: [{
                type: Input
            }], minFov: [{
                type: Input
            }], maxFov: [{
                type: Input
            }], minDistance: [{
                type: Input
            }], maxDistance: [{
                type: Input
            }], minZoom: [{
                type: Input
            }], maxZoom: [{
                type: Input
            }], target: [{
                type: Input
            }], radiusFactor: [{
                type: Input
            }], rotateSpeed: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGhBcmNiYWxsQ29udHJvbHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtdGhyZWUvc3JjL2xpYi9nZW5lcmF0ZWQvVGhBcmNiYWxsQ29udHJvbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEseURBQXlEO0FBQ3pELHlDQUF5QztBQUN6QywrRkFBK0Y7QUFDL0YsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixTQUFTLEVBQ1QsS0FBSyxFQUVMLFVBQVUsR0FDWCxNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sZ0RBQWdELENBQUM7QUFDakYsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ2pELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxTQUFTLENBQUM7O0FBYXJDLE1BQU0sT0FBTyxpQkFHWCxTQUFRLGFBQXVCO0lBQ3hCLE9BQU87UUFDWixPQUFPLGVBQWUsQ0FBQztJQUN6QixDQUFDO0lBRUQsSUFDVyxNQUFNLENBQUMsS0FBb0I7UUFDcEMsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDakIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQzlCLENBQUM7SUFDSCxDQUFDO0lBRUQsSUFBVyxNQUFNO1FBQ2YsT0FBTyxJQUFJLENBQUMsT0FBTyxFQUFFLE1BQU0sQ0FBQztJQUM5QixDQUFDO0lBQ0QsSUFDVyxVQUFVLENBQUMsS0FBa0I7UUFDdEMsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDakIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO1FBQ2xDLENBQUM7SUFDSCxDQUFDO0lBRUQsSUFBVyxVQUFVO1FBQ25CLE9BQU8sSUFBSSxDQUFDLE9BQU8sRUFBRSxVQUFVLENBQUM7SUFDbEMsQ0FBQztJQUNELElBQ1csS0FBSyxDQUFDLEtBQStCO1FBQzlDLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ2pCLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUM3QixDQUFDO0lBQ0gsQ0FBQztJQUVELElBQVcsS0FBSztRQUNkLE9BQU8sSUFBSSxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUM7SUFDN0IsQ0FBQztJQUNELElBQ1csa0JBQWtCLENBQUMsS0FBYTtRQUN6QyxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUNqQixJQUFJLENBQUMsT0FBTyxDQUFDLGtCQUFrQixHQUFHLEtBQUssQ0FBQztRQUMxQyxDQUFDO0lBQ0gsQ0FBQztJQUVELElBQVcsa0JBQWtCO1FBQzNCLE9BQU8sSUFBSSxDQUFDLE9BQU8sRUFBRSxrQkFBa0IsQ0FBQztJQUMxQyxDQUFDO0lBQ0QsSUFDVyxPQUFPLENBQUMsS0FBYztRQUMvQixJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUNqQixJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7UUFDL0IsQ0FBQztJQUNILENBQUM7SUFFRCxJQUFXLE9BQU87UUFDaEIsT0FBTyxJQUFJLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQztJQUMvQixDQUFDO0lBQ0QsSUFDVyxTQUFTLENBQUMsS0FBYztRQUNqQyxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUNqQixJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7UUFDakMsQ0FBQztJQUNILENBQUM7SUFFRCxJQUFXLFNBQVM7UUFDbEIsT0FBTyxJQUFJLENBQUMsT0FBTyxFQUFFLFNBQVMsQ0FBQztJQUNqQyxDQUFDO0lBQ0QsSUFDVyxZQUFZLENBQUMsS0FBYztRQUNwQyxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUNqQixJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7UUFDcEMsQ0FBQztJQUNILENBQUM7SUFFRCxJQUFXLFlBQVk7UUFDckIsT0FBTyxJQUFJLENBQUMsT0FBTyxFQUFFLFlBQVksQ0FBQztJQUNwQyxDQUFDO0lBQ0QsSUFDVyxVQUFVLENBQUMsS0FBYztRQUNsQyxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUNqQixJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7UUFDbEMsQ0FBQztJQUNILENBQUM7SUFFRCxJQUFXLFVBQVU7UUFDbkIsT0FBTyxJQUFJLENBQUMsT0FBTyxFQUFFLFVBQVUsQ0FBQztJQUNsQyxDQUFDO0lBQ0QsSUFDVyxZQUFZLENBQUMsS0FBYztRQUNwQyxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUNqQixJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7UUFDcEMsQ0FBQztJQUNILENBQUM7SUFFRCxJQUFXLFlBQVk7UUFDckIsT0FBTyxJQUFJLENBQUMsT0FBTyxFQUFFLFlBQVksQ0FBQztJQUNwQyxDQUFDO0lBQ0QsSUFDVyxhQUFhLENBQUMsS0FBYztRQUNyQyxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUNqQixJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7UUFDckMsQ0FBQztJQUNILENBQUM7SUFFRCxJQUFXLGFBQWE7UUFDdEIsT0FBTyxJQUFJLENBQUMsT0FBTyxFQUFFLGFBQWEsQ0FBQztJQUNyQyxDQUFDO0lBQ0QsSUFDVyxXQUFXLENBQUMsS0FBYTtRQUNsQyxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUNqQixJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7UUFDbkMsQ0FBQztJQUNILENBQUM7SUFFRCxJQUFXLFdBQVc7UUFDcEIsT0FBTyxJQUFJLENBQUMsT0FBTyxFQUFFLFdBQVcsQ0FBQztJQUNuQyxDQUFDO0lBQ0QsSUFDVyxhQUFhLENBQUMsS0FBYTtRQUNwQyxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUNqQixJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7UUFDckMsQ0FBQztJQUNILENBQUM7SUFFRCxJQUFXLGFBQWE7UUFDdEIsT0FBTyxJQUFJLENBQUMsT0FBTyxFQUFFLGFBQWEsQ0FBQztJQUNyQyxDQUFDO0lBQ0QsSUFDVyxJQUFJLENBQUMsS0FBYTtRQUMzQixJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUNqQixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksR0FBRyxLQUFLLENBQUM7UUFDNUIsQ0FBQztJQUNILENBQUM7SUFFRCxJQUFXLElBQUk7UUFDYixPQUFPLElBQUksQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDO0lBQzVCLENBQUM7SUFDRCxJQUNXLGdCQUFnQixDQUFDLEtBQWM7UUFDeEMsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDakIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsR0FBRyxLQUFLLENBQUM7UUFDeEMsQ0FBQztJQUNILENBQUM7SUFFRCxJQUFXLGdCQUFnQjtRQUN6QixPQUFPLElBQUksQ0FBQyxPQUFPLEVBQUUsZ0JBQWdCLENBQUM7SUFDeEMsQ0FBQztJQUNELElBQ1csVUFBVSxDQUFDLEtBQWM7UUFDbEMsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDakIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO1FBQ2xDLENBQUM7SUFDSCxDQUFDO0lBRUQsSUFBVyxVQUFVO1FBQ25CLE9BQU8sSUFBSSxDQUFDLE9BQU8sRUFBRSxVQUFVLENBQUM7SUFDbEMsQ0FBQztJQUNELElBQ1csVUFBVSxDQUFDLEtBQWM7UUFDbEMsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDakIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO1FBQ2xDLENBQUM7SUFDSCxDQUFDO0lBRUQsSUFBVyxVQUFVO1FBQ25CLE9BQU8sSUFBSSxDQUFDLE9BQU8sRUFBRSxVQUFVLENBQUM7SUFDbEMsQ0FBQztJQUNELElBQ1csTUFBTSxDQUFDLEtBQWE7UUFDN0IsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDakIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQzlCLENBQUM7SUFDSCxDQUFDO0lBRUQsSUFBVyxNQUFNO1FBQ2YsT0FBTyxJQUFJLENBQUMsT0FBTyxFQUFFLE1BQU0sQ0FBQztJQUM5QixDQUFDO0lBQ0QsSUFDVyxNQUFNLENBQUMsS0FBYTtRQUM3QixJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUNqQixJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDOUIsQ0FBQztJQUNILENBQUM7SUFFRCxJQUFXLE1BQU07UUFDZixPQUFPLElBQUksQ0FBQyxPQUFPLEVBQUUsTUFBTSxDQUFDO0lBQzlCLENBQUM7SUFDRCxJQUNXLFdBQVcsQ0FBQyxLQUFhO1FBQ2xDLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ2pCLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQztRQUNuQyxDQUFDO0lBQ0gsQ0FBQztJQUVELElBQVcsV0FBVztRQUNwQixPQUFPLElBQUksQ0FBQyxPQUFPLEVBQUUsV0FBVyxDQUFDO0lBQ25DLENBQUM7SUFDRCxJQUNXLFdBQVcsQ0FBQyxLQUFhO1FBQ2xDLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ2pCLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQztRQUNuQyxDQUFDO0lBQ0gsQ0FBQztJQUVELElBQVcsV0FBVztRQUNwQixPQUFPLElBQUksQ0FBQyxPQUFPLEVBQUUsV0FBVyxDQUFDO0lBQ25DLENBQUM7SUFDRCxJQUNXLE9BQU8sQ0FBQyxLQUFhO1FBQzlCLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ2pCLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztRQUMvQixDQUFDO0lBQ0gsQ0FBQztJQUVELElBQVcsT0FBTztRQUNoQixPQUFPLElBQUksQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDO0lBQy9CLENBQUM7SUFDRCxJQUNXLE9BQU8sQ0FBQyxLQUFhO1FBQzlCLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ2pCLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztRQUMvQixDQUFDO0lBQ0gsQ0FBQztJQUVELElBQVcsT0FBTztRQUNoQixPQUFPLElBQUksQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDO0lBQy9CLENBQUM7SUFDRCxJQUNXLE1BQU0sQ0FBQyxLQUFrRDtRQUNsRSxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUNqQixJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxVQUFVLENBQVUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDeEUsQ0FBQztJQUNILENBQUM7SUFDRCxJQUFXLE1BQU07UUFDZixPQUFPLElBQUksQ0FBQyxPQUFPLEVBQUUsTUFBTSxDQUFDO0lBQzlCLENBQUM7SUFDRCxJQUNXLFlBQVksQ0FBQyxLQUFhO1FBQ25DLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ2pCLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQztRQUNwQyxDQUFDO0lBQ0gsQ0FBQztJQUVELElBQVcsWUFBWTtRQUNyQixPQUFPLElBQUksQ0FBQyxPQUFPLEVBQUUsWUFBWSxDQUFDO0lBQ3BDLENBQUM7SUFDRCxJQUNXLFdBQVcsQ0FBQyxLQUFhO1FBQ2xDLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ2pCLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQztRQUNuQyxDQUFDO0lBQ0gsQ0FBQztJQUVELElBQVcsV0FBVztRQUNwQixPQUFPLElBQUksQ0FBQyxPQUFPLEVBQUUsV0FBVyxDQUFDO0lBQ25DLENBQUM7OEdBaFFVLGlCQUFpQjtrR0FBakIsaUJBQWlCLHFyQkFQakI7WUFDVDtnQkFDRSxPQUFPLEVBQUUsYUFBYTtnQkFDdEIsV0FBVyxFQUFFLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBQzthQUNqRDtTQUNGLGlEQVBTLGVBQWU7OzJGQVNkLGlCQUFpQjtrQkFYN0IsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsb0JBQW9CO29CQUM5QixRQUFRLEVBQUUsZUFBZTtvQkFDekIsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07b0JBQy9DLFNBQVMsRUFBRTt3QkFDVDs0QkFDRSxPQUFPLEVBQUUsYUFBYTs0QkFDdEIsV0FBVyxFQUFFLFVBQVUsQ0FBQyxHQUFHLEVBQUUsa0JBQWtCLENBQUM7eUJBQ2pEO3FCQUNGO2lCQUNGOzhCQVVZLE1BQU07c0JBRGhCLEtBQUs7Z0JBV0ssVUFBVTtzQkFEcEIsS0FBSztnQkFXSyxLQUFLO3NCQURmLEtBQUs7Z0JBV0ssa0JBQWtCO3NCQUQ1QixLQUFLO2dCQVdLLE9BQU87c0JBRGpCLEtBQUs7Z0JBV0ssU0FBUztzQkFEbkIsS0FBSztnQkFXSyxZQUFZO3NCQUR0QixLQUFLO2dCQVdLLFVBQVU7c0JBRHBCLEtBQUs7Z0JBV0ssWUFBWTtzQkFEdEIsS0FBSztnQkFXSyxhQUFhO3NCQUR2QixLQUFLO2dCQVdLLFdBQVc7c0JBRHJCLEtBQUs7Z0JBV0ssYUFBYTtzQkFEdkIsS0FBSztnQkFXSyxJQUFJO3NCQURkLEtBQUs7Z0JBV0ssZ0JBQWdCO3NCQUQxQixLQUFLO2dCQVdLLFVBQVU7c0JBRHBCLEtBQUs7Z0JBV0ssVUFBVTtzQkFEcEIsS0FBSztnQkFXSyxNQUFNO3NCQURoQixLQUFLO2dCQVdLLE1BQU07c0JBRGhCLEtBQUs7Z0JBV0ssV0FBVztzQkFEckIsS0FBSztnQkFXSyxXQUFXO3NCQURyQixLQUFLO2dCQVdLLE9BQU87c0JBRGpCLEtBQUs7Z0JBV0ssT0FBTztzQkFEakIsS0FBSztnQkFXSyxNQUFNO3NCQURoQixLQUFLO2dCQVVLLFlBQVk7c0JBRHRCLEtBQUs7Z0JBV0ssV0FBVztzQkFEckIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIEB0eXBlc2NyaXB0LWVzbGludC9uYW1pbmctY29udmVudGlvbiAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tdW5kZXJzY29yZS1kYW5nbGUgKi9cbi8qIGVzbGludC1kaXNhYmxlIEBhbmd1bGFyLWVzbGludC9jb21wb25lbnQtc2VsZWN0b3IsIEBhbmd1bGFyLWVzbGludC9jb21wb25lbnQtY2xhc3Mtc3VmZml4ICovXG5pbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ29tcG9uZW50LFxuICBJbnB1dCxcbiAgVHlwZSxcbiAgZm9yd2FyZFJlZixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDYW1lcmEsIFNjZW5lLCBWZWN0b3IzIH0gZnJvbSAndGhyZWUnO1xuaW1wb3J0IHsgQXJjYmFsbENvbnRyb2xzIH0gZnJvbSAndGhyZWUvZXhhbXBsZXMvanNtL2NvbnRyb2xzL0FyY2JhbGxDb250cm9scy5qcyc7XG5pbXBvcnQgeyBUaENvbnRyb2xCYXNlIH0gZnJvbSAnLi4vVGhDb250cm9sQmFzZSc7XG5pbXBvcnQgeyBhcHBseVZhbHVlIH0gZnJvbSAnLi4vdXRpbCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3RoLWFyY2JhbGxDb250cm9scycsXG4gIHRlbXBsYXRlOiAnPG5nLWNvbnRlbnQvPicsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBwcm92aWRlcnM6IFtcbiAgICB7XG4gICAgICBwcm92aWRlOiBUaENvbnRyb2xCYXNlLFxuICAgICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gVGhBcmNiYWxsQ29udHJvbHMpLFxuICAgIH0sXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIFRoQXJjYmFsbENvbnRyb2xzPFxuICBUIGV4dGVuZHMgQXJjYmFsbENvbnRyb2xzID0gQXJjYmFsbENvbnRyb2xzLFxuICBUQVJHUyA9IFtjYW1lcmE6IENhbWVyYSwgZG9tRWxlbWVudDogSFRNTEVsZW1lbnQsIHNjZW5lPzogU2NlbmUgfCBudWxsXSxcbj4gZXh0ZW5kcyBUaENvbnRyb2xCYXNlPFQsIFRBUkdTPiB7XG4gIHB1YmxpYyBnZXRUeXBlKCk6IFR5cGU8QXJjYmFsbENvbnRyb2xzPiB7XG4gICAgcmV0dXJuIEFyY2JhbGxDb250cm9scztcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzZXQgY2FtZXJhKHZhbHVlOiBDYW1lcmEgfCBudWxsKSB7XG4gICAgaWYgKHRoaXMuX29ialJlZikge1xuICAgICAgdGhpcy5fb2JqUmVmLmNhbWVyYSA9IHZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBnZXQgY2FtZXJhKCk6IChDYW1lcmEgfCBudWxsKSB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX29ialJlZj8uY2FtZXJhO1xuICB9XG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzZXQgZG9tRWxlbWVudCh2YWx1ZTogSFRNTEVsZW1lbnQpIHtcbiAgICBpZiAodGhpcy5fb2JqUmVmKSB7XG4gICAgICB0aGlzLl9vYmpSZWYuZG9tRWxlbWVudCA9IHZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBnZXQgZG9tRWxlbWVudCgpOiBIVE1MRWxlbWVudCB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX29ialJlZj8uZG9tRWxlbWVudDtcbiAgfVxuICBASW5wdXQoKVxuICBwdWJsaWMgc2V0IHNjZW5lKHZhbHVlOiBTY2VuZSB8IG51bGwgfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodGhpcy5fb2JqUmVmKSB7XG4gICAgICB0aGlzLl9vYmpSZWYuc2NlbmUgPSB2YWx1ZTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgZ2V0IHNjZW5lKCk6IChTY2VuZSB8IG51bGwgfCB1bmRlZmluZWQpIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fb2JqUmVmPy5zY2VuZTtcbiAgfVxuICBASW5wdXQoKVxuICBwdWJsaWMgc2V0IGZvY3VzQW5pbWF0aW9uVGltZSh2YWx1ZTogbnVtYmVyKSB7XG4gICAgaWYgKHRoaXMuX29ialJlZikge1xuICAgICAgdGhpcy5fb2JqUmVmLmZvY3VzQW5pbWF0aW9uVGltZSA9IHZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBnZXQgZm9jdXNBbmltYXRpb25UaW1lKCk6IG51bWJlciB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX29ialJlZj8uZm9jdXNBbmltYXRpb25UaW1lO1xuICB9XG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzZXQgZW5hYmxlZCh2YWx1ZTogYm9vbGVhbikge1xuICAgIGlmICh0aGlzLl9vYmpSZWYpIHtcbiAgICAgIHRoaXMuX29ialJlZi5lbmFibGVkID0gdmFsdWU7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGdldCBlbmFibGVkKCk6IGJvb2xlYW4gfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9vYmpSZWY/LmVuYWJsZWQ7XG4gIH1cbiAgQElucHV0KClcbiAgcHVibGljIHNldCBlbmFibGVQYW4odmFsdWU6IGJvb2xlYW4pIHtcbiAgICBpZiAodGhpcy5fb2JqUmVmKSB7XG4gICAgICB0aGlzLl9vYmpSZWYuZW5hYmxlUGFuID0gdmFsdWU7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGdldCBlbmFibGVQYW4oKTogYm9vbGVhbiB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX29ialJlZj8uZW5hYmxlUGFuO1xuICB9XG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzZXQgZW5hYmxlUm90YXRlKHZhbHVlOiBib29sZWFuKSB7XG4gICAgaWYgKHRoaXMuX29ialJlZikge1xuICAgICAgdGhpcy5fb2JqUmVmLmVuYWJsZVJvdGF0ZSA9IHZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBnZXQgZW5hYmxlUm90YXRlKCk6IGJvb2xlYW4gfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9vYmpSZWY/LmVuYWJsZVJvdGF0ZTtcbiAgfVxuICBASW5wdXQoKVxuICBwdWJsaWMgc2V0IGVuYWJsZVpvb20odmFsdWU6IGJvb2xlYW4pIHtcbiAgICBpZiAodGhpcy5fb2JqUmVmKSB7XG4gICAgICB0aGlzLl9vYmpSZWYuZW5hYmxlWm9vbSA9IHZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBnZXQgZW5hYmxlWm9vbSgpOiBib29sZWFuIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fb2JqUmVmPy5lbmFibGVab29tO1xuICB9XG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzZXQgZW5hYmxlR2l6bW9zKHZhbHVlOiBib29sZWFuKSB7XG4gICAgaWYgKHRoaXMuX29ialJlZikge1xuICAgICAgdGhpcy5fb2JqUmVmLmVuYWJsZUdpem1vcyA9IHZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBnZXQgZW5hYmxlR2l6bW9zKCk6IGJvb2xlYW4gfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9vYmpSZWY/LmVuYWJsZUdpem1vcztcbiAgfVxuICBASW5wdXQoKVxuICBwdWJsaWMgc2V0IGFkanVzdE5lYXJGYXIodmFsdWU6IGJvb2xlYW4pIHtcbiAgICBpZiAodGhpcy5fb2JqUmVmKSB7XG4gICAgICB0aGlzLl9vYmpSZWYuYWRqdXN0TmVhckZhciA9IHZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBnZXQgYWRqdXN0TmVhckZhcigpOiBib29sZWFuIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fb2JqUmVmPy5hZGp1c3ROZWFyRmFyO1xuICB9XG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzZXQgc2NhbGVGYWN0b3IodmFsdWU6IG51bWJlcikge1xuICAgIGlmICh0aGlzLl9vYmpSZWYpIHtcbiAgICAgIHRoaXMuX29ialJlZi5zY2FsZUZhY3RvciA9IHZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBnZXQgc2NhbGVGYWN0b3IoKTogbnVtYmVyIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fb2JqUmVmPy5zY2FsZUZhY3RvcjtcbiAgfVxuICBASW5wdXQoKVxuICBwdWJsaWMgc2V0IGRhbXBpbmdGYWN0b3IodmFsdWU6IG51bWJlcikge1xuICAgIGlmICh0aGlzLl9vYmpSZWYpIHtcbiAgICAgIHRoaXMuX29ialJlZi5kYW1waW5nRmFjdG9yID0gdmFsdWU7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGdldCBkYW1waW5nRmFjdG9yKCk6IG51bWJlciB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX29ialJlZj8uZGFtcGluZ0ZhY3RvcjtcbiAgfVxuICBASW5wdXQoKVxuICBwdWJsaWMgc2V0IHdNYXgodmFsdWU6IG51bWJlcikge1xuICAgIGlmICh0aGlzLl9vYmpSZWYpIHtcbiAgICAgIHRoaXMuX29ialJlZi53TWF4ID0gdmFsdWU7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGdldCB3TWF4KCk6IG51bWJlciB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX29ialJlZj8ud01heDtcbiAgfVxuICBASW5wdXQoKVxuICBwdWJsaWMgc2V0IGVuYWJsZUFuaW1hdGlvbnModmFsdWU6IGJvb2xlYW4pIHtcbiAgICBpZiAodGhpcy5fb2JqUmVmKSB7XG4gICAgICB0aGlzLl9vYmpSZWYuZW5hYmxlQW5pbWF0aW9ucyA9IHZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBnZXQgZW5hYmxlQW5pbWF0aW9ucygpOiBib29sZWFuIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fb2JqUmVmPy5lbmFibGVBbmltYXRpb25zO1xuICB9XG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzZXQgZW5hYmxlR3JpZCh2YWx1ZTogYm9vbGVhbikge1xuICAgIGlmICh0aGlzLl9vYmpSZWYpIHtcbiAgICAgIHRoaXMuX29ialJlZi5lbmFibGVHcmlkID0gdmFsdWU7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGdldCBlbmFibGVHcmlkKCk6IGJvb2xlYW4gfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9vYmpSZWY/LmVuYWJsZUdyaWQ7XG4gIH1cbiAgQElucHV0KClcbiAgcHVibGljIHNldCBjdXJzb3Jab29tKHZhbHVlOiBib29sZWFuKSB7XG4gICAgaWYgKHRoaXMuX29ialJlZikge1xuICAgICAgdGhpcy5fb2JqUmVmLmN1cnNvclpvb20gPSB2YWx1ZTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgZ2V0IGN1cnNvclpvb20oKTogYm9vbGVhbiB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX29ialJlZj8uY3Vyc29yWm9vbTtcbiAgfVxuICBASW5wdXQoKVxuICBwdWJsaWMgc2V0IG1pbkZvdih2YWx1ZTogbnVtYmVyKSB7XG4gICAgaWYgKHRoaXMuX29ialJlZikge1xuICAgICAgdGhpcy5fb2JqUmVmLm1pbkZvdiA9IHZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBnZXQgbWluRm92KCk6IG51bWJlciB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX29ialJlZj8ubWluRm92O1xuICB9XG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzZXQgbWF4Rm92KHZhbHVlOiBudW1iZXIpIHtcbiAgICBpZiAodGhpcy5fb2JqUmVmKSB7XG4gICAgICB0aGlzLl9vYmpSZWYubWF4Rm92ID0gdmFsdWU7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGdldCBtYXhGb3YoKTogbnVtYmVyIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fb2JqUmVmPy5tYXhGb3Y7XG4gIH1cbiAgQElucHV0KClcbiAgcHVibGljIHNldCBtaW5EaXN0YW5jZSh2YWx1ZTogbnVtYmVyKSB7XG4gICAgaWYgKHRoaXMuX29ialJlZikge1xuICAgICAgdGhpcy5fb2JqUmVmLm1pbkRpc3RhbmNlID0gdmFsdWU7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGdldCBtaW5EaXN0YW5jZSgpOiBudW1iZXIgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9vYmpSZWY/Lm1pbkRpc3RhbmNlO1xuICB9XG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzZXQgbWF4RGlzdGFuY2UodmFsdWU6IG51bWJlcikge1xuICAgIGlmICh0aGlzLl9vYmpSZWYpIHtcbiAgICAgIHRoaXMuX29ialJlZi5tYXhEaXN0YW5jZSA9IHZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBnZXQgbWF4RGlzdGFuY2UoKTogbnVtYmVyIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fb2JqUmVmPy5tYXhEaXN0YW5jZTtcbiAgfVxuICBASW5wdXQoKVxuICBwdWJsaWMgc2V0IG1pblpvb20odmFsdWU6IG51bWJlcikge1xuICAgIGlmICh0aGlzLl9vYmpSZWYpIHtcbiAgICAgIHRoaXMuX29ialJlZi5taW5ab29tID0gdmFsdWU7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGdldCBtaW5ab29tKCk6IG51bWJlciB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX29ialJlZj8ubWluWm9vbTtcbiAgfVxuICBASW5wdXQoKVxuICBwdWJsaWMgc2V0IG1heFpvb20odmFsdWU6IG51bWJlcikge1xuICAgIGlmICh0aGlzLl9vYmpSZWYpIHtcbiAgICAgIHRoaXMuX29ialJlZi5tYXhab29tID0gdmFsdWU7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGdldCBtYXhab29tKCk6IG51bWJlciB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX29ialJlZj8ubWF4Wm9vbTtcbiAgfVxuICBASW5wdXQoKVxuICBwdWJsaWMgc2V0IHRhcmdldCh2YWx1ZTogVmVjdG9yMyB8IFt4OiBudW1iZXIsIHk6IG51bWJlciwgejogbnVtYmVyXSkge1xuICAgIGlmICh0aGlzLl9vYmpSZWYpIHtcbiAgICAgIHRoaXMuX29ialJlZi50YXJnZXQgPSBhcHBseVZhbHVlPFZlY3RvcjM+KHRoaXMuX29ialJlZi50YXJnZXQsIHZhbHVlKTtcbiAgICB9XG4gIH1cbiAgcHVibGljIGdldCB0YXJnZXQoKTogVmVjdG9yMyB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX29ialJlZj8udGFyZ2V0O1xuICB9XG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzZXQgcmFkaXVzRmFjdG9yKHZhbHVlOiBudW1iZXIpIHtcbiAgICBpZiAodGhpcy5fb2JqUmVmKSB7XG4gICAgICB0aGlzLl9vYmpSZWYucmFkaXVzRmFjdG9yID0gdmFsdWU7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGdldCByYWRpdXNGYWN0b3IoKTogbnVtYmVyIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fb2JqUmVmPy5yYWRpdXNGYWN0b3I7XG4gIH1cbiAgQElucHV0KClcbiAgcHVibGljIHNldCByb3RhdGVTcGVlZCh2YWx1ZTogbnVtYmVyKSB7XG4gICAgaWYgKHRoaXMuX29ialJlZikge1xuICAgICAgdGhpcy5fb2JqUmVmLnJvdGF0ZVNwZWVkID0gdmFsdWU7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGdldCByb3RhdGVTcGVlZCgpOiBudW1iZXIgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9vYmpSZWY/LnJvdGF0ZVNwZWVkO1xuICB9XG59XG4iXX0=