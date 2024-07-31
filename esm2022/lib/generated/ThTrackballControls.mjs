/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix */
import { ChangeDetectionStrategy, Component, Input, forwardRef, } from '@angular/core';
import { TrackballControls } from 'three/examples/jsm/controls/TrackballControls.js';
import { ThControlBase } from '../ThControlBase';
import { applyValue } from '../util';
import * as i0 from "@angular/core";
export class ThTrackballControls extends ThControlBase {
    getType() {
        return TrackballControls;
    }
    set object(value) {
        if (this._objRef) {
            this._objRef.object = value;
        }
    }
    get object() {
        return this._objRef?.object;
    }
    set domElement(value) {
        if (this._objRef) {
            this._objRef.domElement = value;
        }
    }
    get domElement() {
        return this._objRef?.domElement;
    }
    set enabled(value) {
        if (this._objRef) {
            this._objRef.enabled = value;
        }
    }
    get enabled() {
        return this._objRef?.enabled;
    }
    set screen(value) {
        if (this._objRef) {
            this._objRef.screen = value;
        }
    }
    get screen() {
        return this._objRef?.screen;
    }
    set rotateSpeed(value) {
        if (this._objRef) {
            this._objRef.rotateSpeed = value;
        }
    }
    get rotateSpeed() {
        return this._objRef?.rotateSpeed;
    }
    set zoomSpeed(value) {
        if (this._objRef) {
            this._objRef.zoomSpeed = value;
        }
    }
    get zoomSpeed() {
        return this._objRef?.zoomSpeed;
    }
    set panSpeed(value) {
        if (this._objRef) {
            this._objRef.panSpeed = value;
        }
    }
    get panSpeed() {
        return this._objRef?.panSpeed;
    }
    set noRotate(value) {
        if (this._objRef) {
            this._objRef.noRotate = value;
        }
    }
    get noRotate() {
        return this._objRef?.noRotate;
    }
    set noZoom(value) {
        if (this._objRef) {
            this._objRef.noZoom = value;
        }
    }
    get noZoom() {
        return this._objRef?.noZoom;
    }
    set noPan(value) {
        if (this._objRef) {
            this._objRef.noPan = value;
        }
    }
    get noPan() {
        return this._objRef?.noPan;
    }
    set noRoll(value) {
        if (this._objRef) {
            this._objRef.noRoll = value;
        }
    }
    get noRoll() {
        return this._objRef?.noRoll;
    }
    set staticMoving(value) {
        if (this._objRef) {
            this._objRef.staticMoving = value;
        }
    }
    get staticMoving() {
        return this._objRef?.staticMoving;
    }
    set dynamicDampingFactor(value) {
        if (this._objRef) {
            this._objRef.dynamicDampingFactor = value;
        }
    }
    get dynamicDampingFactor() {
        return this._objRef?.dynamicDampingFactor;
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
    set keys(value) {
        if (this._objRef) {
            this._objRef.keys = value;
        }
    }
    get keys() {
        return this._objRef?.keys;
    }
    set mouseButtons(value) {
        if (this._objRef) {
            this._objRef.mouseButtons = value;
        }
    }
    get mouseButtons() {
        return this._objRef?.mouseButtons;
    }
    set target(value) {
        if (this._objRef) {
            this._objRef.target = applyValue(this._objRef.target, value);
        }
    }
    get target() {
        return this._objRef?.target;
    }
    set position0(value) {
        if (this._objRef) {
            this._objRef.position0 = applyValue(this._objRef.position0, value);
        }
    }
    get position0() {
        return this._objRef?.position0;
    }
    set target0(value) {
        if (this._objRef) {
            this._objRef.target0 = applyValue(this._objRef.target0, value);
        }
    }
    get target0() {
        return this._objRef?.target0;
    }
    set up0(value) {
        if (this._objRef) {
            this._objRef.up0 = applyValue(this._objRef.up0, value);
        }
    }
    get up0() {
        return this._objRef?.up0;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThTrackballControls, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.1.2", type: ThTrackballControls, selector: "th-trackballControls", inputs: { object: "object", domElement: "domElement", enabled: "enabled", screen: "screen", rotateSpeed: "rotateSpeed", zoomSpeed: "zoomSpeed", panSpeed: "panSpeed", noRotate: "noRotate", noZoom: "noZoom", noPan: "noPan", noRoll: "noRoll", staticMoving: "staticMoving", dynamicDampingFactor: "dynamicDampingFactor", minDistance: "minDistance", maxDistance: "maxDistance", minZoom: "minZoom", maxZoom: "maxZoom", keys: "keys", mouseButtons: "mouseButtons", target: "target", position0: "position0", target0: "target0", up0: "up0" }, providers: [
            {
                provide: ThControlBase,
                useExisting: forwardRef(() => ThTrackballControls),
            },
        ], usesInheritance: true, ngImport: i0, template: '<ng-content/>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThTrackballControls, decorators: [{
            type: Component,
            args: [{
                    selector: 'th-trackballControls',
                    template: '<ng-content/>',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    providers: [
                        {
                            provide: ThControlBase,
                            useExisting: forwardRef(() => ThTrackballControls),
                        },
                    ],
                }]
        }], propDecorators: { object: [{
                type: Input
            }], domElement: [{
                type: Input
            }], enabled: [{
                type: Input
            }], screen: [{
                type: Input
            }], rotateSpeed: [{
                type: Input
            }], zoomSpeed: [{
                type: Input
            }], panSpeed: [{
                type: Input
            }], noRotate: [{
                type: Input
            }], noZoom: [{
                type: Input
            }], noPan: [{
                type: Input
            }], noRoll: [{
                type: Input
            }], staticMoving: [{
                type: Input
            }], dynamicDampingFactor: [{
                type: Input
            }], minDistance: [{
                type: Input
            }], maxDistance: [{
                type: Input
            }], minZoom: [{
                type: Input
            }], maxZoom: [{
                type: Input
            }], keys: [{
                type: Input
            }], mouseButtons: [{
                type: Input
            }], target: [{
                type: Input
            }], position0: [{
                type: Input
            }], target0: [{
                type: Input
            }], up0: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGhUcmFja2JhbGxDb250cm9scy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC10aHJlZS9zcmMvbGliL2dlbmVyYXRlZC9UaFRyYWNrYmFsbENvbnRyb2xzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHlEQUF5RDtBQUN6RCx5Q0FBeUM7QUFDekMsK0ZBQStGO0FBQy9GLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULEtBQUssRUFFTCxVQUFVLEdBQ1gsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sa0RBQWtELENBQUM7QUFDckYsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ2pELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxTQUFTLENBQUM7O0FBYXJDLE1BQU0sT0FBTyxtQkFHWCxTQUFRLGFBQXVCO0lBQ3hCLE9BQU87UUFDWixPQUFPLGlCQUFpQixDQUFDO0lBQzNCLENBQUM7SUFFRCxJQUNXLE1BQU0sQ0FBQyxLQUFhO1FBQzdCLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ2pCLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUM5QixDQUFDO0lBQ0gsQ0FBQztJQUVELElBQVcsTUFBTTtRQUNmLE9BQU8sSUFBSSxDQUFDLE9BQU8sRUFBRSxNQUFNLENBQUM7SUFDOUIsQ0FBQztJQUNELElBQ1csVUFBVSxDQUFDLEtBQWtCO1FBQ3RDLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ2pCLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztRQUNsQyxDQUFDO0lBQ0gsQ0FBQztJQUVELElBQVcsVUFBVTtRQUNuQixPQUFPLElBQUksQ0FBQyxPQUFPLEVBQUUsVUFBVSxDQUFDO0lBQ2xDLENBQUM7SUFDRCxJQUNXLE9BQU8sQ0FBQyxLQUFjO1FBQy9CLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ2pCLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztRQUMvQixDQUFDO0lBQ0gsQ0FBQztJQUVELElBQVcsT0FBTztRQUNoQixPQUFPLElBQUksQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDO0lBQy9CLENBQUM7SUFDRCxJQUNXLE1BQU0sQ0FBQyxLQUtqQjtRQUNDLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ2pCLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUM5QixDQUFDO0lBQ0gsQ0FBQztJQUVELElBQVcsTUFBTTtRQUdmLE9BQU8sSUFBSSxDQUFDLE9BQU8sRUFBRSxNQUFNLENBQUM7SUFDOUIsQ0FBQztJQUNELElBQ1csV0FBVyxDQUFDLEtBQWE7UUFDbEMsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDakIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDO1FBQ25DLENBQUM7SUFDSCxDQUFDO0lBRUQsSUFBVyxXQUFXO1FBQ3BCLE9BQU8sSUFBSSxDQUFDLE9BQU8sRUFBRSxXQUFXLENBQUM7SUFDbkMsQ0FBQztJQUNELElBQ1csU0FBUyxDQUFDLEtBQWE7UUFDaEMsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDakIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1FBQ2pDLENBQUM7SUFDSCxDQUFDO0lBRUQsSUFBVyxTQUFTO1FBQ2xCLE9BQU8sSUFBSSxDQUFDLE9BQU8sRUFBRSxTQUFTLENBQUM7SUFDakMsQ0FBQztJQUNELElBQ1csUUFBUSxDQUFDLEtBQWE7UUFDL0IsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDakIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO1FBQ2hDLENBQUM7SUFDSCxDQUFDO0lBRUQsSUFBVyxRQUFRO1FBQ2pCLE9BQU8sSUFBSSxDQUFDLE9BQU8sRUFBRSxRQUFRLENBQUM7SUFDaEMsQ0FBQztJQUNELElBQ1csUUFBUSxDQUFDLEtBQWM7UUFDaEMsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDakIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO1FBQ2hDLENBQUM7SUFDSCxDQUFDO0lBRUQsSUFBVyxRQUFRO1FBQ2pCLE9BQU8sSUFBSSxDQUFDLE9BQU8sRUFBRSxRQUFRLENBQUM7SUFDaEMsQ0FBQztJQUNELElBQ1csTUFBTSxDQUFDLEtBQWM7UUFDOUIsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDakIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQzlCLENBQUM7SUFDSCxDQUFDO0lBRUQsSUFBVyxNQUFNO1FBQ2YsT0FBTyxJQUFJLENBQUMsT0FBTyxFQUFFLE1BQU0sQ0FBQztJQUM5QixDQUFDO0lBQ0QsSUFDVyxLQUFLLENBQUMsS0FBYztRQUM3QixJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUNqQixJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDN0IsQ0FBQztJQUNILENBQUM7SUFFRCxJQUFXLEtBQUs7UUFDZCxPQUFPLElBQUksQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDO0lBQzdCLENBQUM7SUFDRCxJQUNXLE1BQU0sQ0FBQyxLQUFjO1FBQzlCLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ2pCLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUM5QixDQUFDO0lBQ0gsQ0FBQztJQUVELElBQVcsTUFBTTtRQUNmLE9BQU8sSUFBSSxDQUFDLE9BQU8sRUFBRSxNQUFNLENBQUM7SUFDOUIsQ0FBQztJQUNELElBQ1csWUFBWSxDQUFDLEtBQWM7UUFDcEMsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDakIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO1FBQ3BDLENBQUM7SUFDSCxDQUFDO0lBRUQsSUFBVyxZQUFZO1FBQ3JCLE9BQU8sSUFBSSxDQUFDLE9BQU8sRUFBRSxZQUFZLENBQUM7SUFDcEMsQ0FBQztJQUNELElBQ1csb0JBQW9CLENBQUMsS0FBYTtRQUMzQyxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUNqQixJQUFJLENBQUMsT0FBTyxDQUFDLG9CQUFvQixHQUFHLEtBQUssQ0FBQztRQUM1QyxDQUFDO0lBQ0gsQ0FBQztJQUVELElBQVcsb0JBQW9CO1FBQzdCLE9BQU8sSUFBSSxDQUFDLE9BQU8sRUFBRSxvQkFBb0IsQ0FBQztJQUM1QyxDQUFDO0lBQ0QsSUFDVyxXQUFXLENBQUMsS0FBYTtRQUNsQyxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUNqQixJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7UUFDbkMsQ0FBQztJQUNILENBQUM7SUFFRCxJQUFXLFdBQVc7UUFDcEIsT0FBTyxJQUFJLENBQUMsT0FBTyxFQUFFLFdBQVcsQ0FBQztJQUNuQyxDQUFDO0lBQ0QsSUFDVyxXQUFXLENBQUMsS0FBYTtRQUNsQyxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUNqQixJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7UUFDbkMsQ0FBQztJQUNILENBQUM7SUFFRCxJQUFXLFdBQVc7UUFDcEIsT0FBTyxJQUFJLENBQUMsT0FBTyxFQUFFLFdBQVcsQ0FBQztJQUNuQyxDQUFDO0lBQ0QsSUFDVyxPQUFPLENBQUMsS0FBYTtRQUM5QixJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUNqQixJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7UUFDL0IsQ0FBQztJQUNILENBQUM7SUFFRCxJQUFXLE9BQU87UUFDaEIsT0FBTyxJQUFJLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQztJQUMvQixDQUFDO0lBQ0QsSUFDVyxPQUFPLENBQUMsS0FBYTtRQUM5QixJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUNqQixJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7UUFDL0IsQ0FBQztJQUNILENBQUM7SUFFRCxJQUFXLE9BQU87UUFDaEIsT0FBTyxJQUFJLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQztJQUMvQixDQUFDO0lBQ0QsSUFDVyxJQUFJLENBQUMsS0FBZTtRQUM3QixJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUNqQixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksR0FBRyxLQUFLLENBQUM7UUFDNUIsQ0FBQztJQUNILENBQUM7SUFFRCxJQUFXLElBQUk7UUFDYixPQUFPLElBQUksQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDO0lBQzVCLENBQUM7SUFDRCxJQUNXLFlBQVksQ0FBQyxLQUl2QjtRQUNDLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ2pCLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQztRQUNwQyxDQUFDO0lBQ0gsQ0FBQztJQUVELElBQVcsWUFBWTtRQU9yQixPQUFPLElBQUksQ0FBQyxPQUFPLEVBQUUsWUFBWSxDQUFDO0lBQ3BDLENBQUM7SUFDRCxJQUNXLE1BQU0sQ0FBQyxLQUFrRDtRQUNsRSxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUNqQixJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxVQUFVLENBQVUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDeEUsQ0FBQztJQUNILENBQUM7SUFDRCxJQUFXLE1BQU07UUFDZixPQUFPLElBQUksQ0FBQyxPQUFPLEVBQUUsTUFBTSxDQUFDO0lBQzlCLENBQUM7SUFDRCxJQUNXLFNBQVMsQ0FBQyxLQUFrRDtRQUNyRSxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUNqQixJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsR0FBRyxVQUFVLENBQ2pDLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxFQUN0QixLQUFLLENBQ04sQ0FBQztRQUNKLENBQUM7SUFDSCxDQUFDO0lBQ0QsSUFBVyxTQUFTO1FBQ2xCLE9BQU8sSUFBSSxDQUFDLE9BQU8sRUFBRSxTQUFTLENBQUM7SUFDakMsQ0FBQztJQUNELElBQ1csT0FBTyxDQUFDLEtBQWtEO1FBQ25FLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ2pCLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxHQUFHLFVBQVUsQ0FBVSxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsQ0FBQztRQUMxRSxDQUFDO0lBQ0gsQ0FBQztJQUNELElBQVcsT0FBTztRQUNoQixPQUFPLElBQUksQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDO0lBQy9CLENBQUM7SUFDRCxJQUNXLEdBQUcsQ0FBQyxLQUFrRDtRQUMvRCxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUNqQixJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsR0FBRyxVQUFVLENBQVUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDbEUsQ0FBQztJQUNILENBQUM7SUFDRCxJQUFXLEdBQUc7UUFDWixPQUFPLElBQUksQ0FBQyxPQUFPLEVBQUUsR0FBRyxDQUFDO0lBQzNCLENBQUM7OEdBN1BVLG1CQUFtQjtrR0FBbkIsbUJBQW1CLG1rQkFQbkI7WUFDVDtnQkFDRSxPQUFPLEVBQUUsYUFBYTtnQkFDdEIsV0FBVyxFQUFFLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxtQkFBbUIsQ0FBQzthQUNuRDtTQUNGLGlEQVBTLGVBQWU7OzJGQVNkLG1CQUFtQjtrQkFYL0IsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsc0JBQXNCO29CQUNoQyxRQUFRLEVBQUUsZUFBZTtvQkFDekIsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07b0JBQy9DLFNBQVMsRUFBRTt3QkFDVDs0QkFDRSxPQUFPLEVBQUUsYUFBYTs0QkFDdEIsV0FBVyxFQUFFLFVBQVUsQ0FBQyxHQUFHLEVBQUUsb0JBQW9CLENBQUM7eUJBQ25EO3FCQUNGO2lCQUNGOzhCQVVZLE1BQU07c0JBRGhCLEtBQUs7Z0JBV0ssVUFBVTtzQkFEcEIsS0FBSztnQkFXSyxPQUFPO3NCQURqQixLQUFLO2dCQVdLLE1BQU07c0JBRGhCLEtBQUs7Z0JBa0JLLFdBQVc7c0JBRHJCLEtBQUs7Z0JBV0ssU0FBUztzQkFEbkIsS0FBSztnQkFXSyxRQUFRO3NCQURsQixLQUFLO2dCQVdLLFFBQVE7c0JBRGxCLEtBQUs7Z0JBV0ssTUFBTTtzQkFEaEIsS0FBSztnQkFXSyxLQUFLO3NCQURmLEtBQUs7Z0JBV0ssTUFBTTtzQkFEaEIsS0FBSztnQkFXSyxZQUFZO3NCQUR0QixLQUFLO2dCQVdLLG9CQUFvQjtzQkFEOUIsS0FBSztnQkFXSyxXQUFXO3NCQURyQixLQUFLO2dCQVdLLFdBQVc7c0JBRHJCLEtBQUs7Z0JBV0ssT0FBTztzQkFEakIsS0FBSztnQkFXSyxPQUFPO3NCQURqQixLQUFLO2dCQVdLLElBQUk7c0JBRGQsS0FBSztnQkFXSyxZQUFZO3NCQUR0QixLQUFLO2dCQXFCSyxNQUFNO3NCQURoQixLQUFLO2dCQVVLLFNBQVM7c0JBRG5CLEtBQUs7Z0JBYUssT0FBTztzQkFEakIsS0FBSztnQkFVSyxHQUFHO3NCQURiLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBAdHlwZXNjcmlwdC1lc2xpbnQvbmFtaW5nLWNvbnZlbnRpb24gKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vLXVuZGVyc2NvcmUtZGFuZ2xlICovXG4vKiBlc2xpbnQtZGlzYWJsZSBAYW5ndWxhci1lc2xpbnQvY29tcG9uZW50LXNlbGVjdG9yLCBAYW5ndWxhci1lc2xpbnQvY29tcG9uZW50LWNsYXNzLXN1ZmZpeCAqL1xuaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENvbXBvbmVudCxcbiAgSW5wdXQsXG4gIFR5cGUsXG4gIGZvcndhcmRSZWYsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ2FtZXJhLCBNT1VTRSwgVmVjdG9yMyB9IGZyb20gJ3RocmVlJztcbmltcG9ydCB7IFRyYWNrYmFsbENvbnRyb2xzIH0gZnJvbSAndGhyZWUvZXhhbXBsZXMvanNtL2NvbnRyb2xzL1RyYWNrYmFsbENvbnRyb2xzLmpzJztcbmltcG9ydCB7IFRoQ29udHJvbEJhc2UgfSBmcm9tICcuLi9UaENvbnRyb2xCYXNlJztcbmltcG9ydCB7IGFwcGx5VmFsdWUgfSBmcm9tICcuLi91dGlsJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndGgtdHJhY2tiYWxsQ29udHJvbHMnLFxuICB0ZW1wbGF0ZTogJzxuZy1jb250ZW50Lz4nLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgcHJvdmlkZXJzOiBbXG4gICAge1xuICAgICAgcHJvdmlkZTogVGhDb250cm9sQmFzZSxcbiAgICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IFRoVHJhY2tiYWxsQ29udHJvbHMpLFxuICAgIH0sXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIFRoVHJhY2tiYWxsQ29udHJvbHM8XG4gIFQgZXh0ZW5kcyBUcmFja2JhbGxDb250cm9scyA9IFRyYWNrYmFsbENvbnRyb2xzLFxuICBUQVJHUyA9IFtvYmplY3Q6IENhbWVyYSwgZG9tRWxlbWVudD86IEhUTUxFbGVtZW50XSxcbj4gZXh0ZW5kcyBUaENvbnRyb2xCYXNlPFQsIFRBUkdTPiB7XG4gIHB1YmxpYyBnZXRUeXBlKCk6IFR5cGU8VHJhY2tiYWxsQ29udHJvbHM+IHtcbiAgICByZXR1cm4gVHJhY2tiYWxsQ29udHJvbHM7XG4gIH1cblxuICBASW5wdXQoKVxuICBwdWJsaWMgc2V0IG9iamVjdCh2YWx1ZTogQ2FtZXJhKSB7XG4gICAgaWYgKHRoaXMuX29ialJlZikge1xuICAgICAgdGhpcy5fb2JqUmVmLm9iamVjdCA9IHZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBnZXQgb2JqZWN0KCk6IENhbWVyYSB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX29ialJlZj8ub2JqZWN0O1xuICB9XG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzZXQgZG9tRWxlbWVudCh2YWx1ZTogSFRNTEVsZW1lbnQpIHtcbiAgICBpZiAodGhpcy5fb2JqUmVmKSB7XG4gICAgICB0aGlzLl9vYmpSZWYuZG9tRWxlbWVudCA9IHZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBnZXQgZG9tRWxlbWVudCgpOiBIVE1MRWxlbWVudCB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX29ialJlZj8uZG9tRWxlbWVudDtcbiAgfVxuICBASW5wdXQoKVxuICBwdWJsaWMgc2V0IGVuYWJsZWQodmFsdWU6IGJvb2xlYW4pIHtcbiAgICBpZiAodGhpcy5fb2JqUmVmKSB7XG4gICAgICB0aGlzLl9vYmpSZWYuZW5hYmxlZCA9IHZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBnZXQgZW5hYmxlZCgpOiBib29sZWFuIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fb2JqUmVmPy5lbmFibGVkO1xuICB9XG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzZXQgc2NyZWVuKHZhbHVlOiB7XG4gICAgbGVmdDogbnVtYmVyO1xuICAgIHRvcDogbnVtYmVyO1xuICAgIHdpZHRoOiBudW1iZXI7XG4gICAgaGVpZ2h0OiBudW1iZXI7XG4gIH0pIHtcbiAgICBpZiAodGhpcy5fb2JqUmVmKSB7XG4gICAgICB0aGlzLl9vYmpSZWYuc2NyZWVuID0gdmFsdWU7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGdldCBzY3JlZW4oKTpcbiAgICB8IHsgbGVmdDogbnVtYmVyOyB0b3A6IG51bWJlcjsgd2lkdGg6IG51bWJlcjsgaGVpZ2h0OiBudW1iZXIgfVxuICAgIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fb2JqUmVmPy5zY3JlZW47XG4gIH1cbiAgQElucHV0KClcbiAgcHVibGljIHNldCByb3RhdGVTcGVlZCh2YWx1ZTogbnVtYmVyKSB7XG4gICAgaWYgKHRoaXMuX29ialJlZikge1xuICAgICAgdGhpcy5fb2JqUmVmLnJvdGF0ZVNwZWVkID0gdmFsdWU7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGdldCByb3RhdGVTcGVlZCgpOiBudW1iZXIgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9vYmpSZWY/LnJvdGF0ZVNwZWVkO1xuICB9XG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzZXQgem9vbVNwZWVkKHZhbHVlOiBudW1iZXIpIHtcbiAgICBpZiAodGhpcy5fb2JqUmVmKSB7XG4gICAgICB0aGlzLl9vYmpSZWYuem9vbVNwZWVkID0gdmFsdWU7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGdldCB6b29tU3BlZWQoKTogbnVtYmVyIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fb2JqUmVmPy56b29tU3BlZWQ7XG4gIH1cbiAgQElucHV0KClcbiAgcHVibGljIHNldCBwYW5TcGVlZCh2YWx1ZTogbnVtYmVyKSB7XG4gICAgaWYgKHRoaXMuX29ialJlZikge1xuICAgICAgdGhpcy5fb2JqUmVmLnBhblNwZWVkID0gdmFsdWU7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGdldCBwYW5TcGVlZCgpOiBudW1iZXIgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9vYmpSZWY/LnBhblNwZWVkO1xuICB9XG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzZXQgbm9Sb3RhdGUodmFsdWU6IGJvb2xlYW4pIHtcbiAgICBpZiAodGhpcy5fb2JqUmVmKSB7XG4gICAgICB0aGlzLl9vYmpSZWYubm9Sb3RhdGUgPSB2YWx1ZTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgZ2V0IG5vUm90YXRlKCk6IGJvb2xlYW4gfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9vYmpSZWY/Lm5vUm90YXRlO1xuICB9XG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzZXQgbm9ab29tKHZhbHVlOiBib29sZWFuKSB7XG4gICAgaWYgKHRoaXMuX29ialJlZikge1xuICAgICAgdGhpcy5fb2JqUmVmLm5vWm9vbSA9IHZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBnZXQgbm9ab29tKCk6IGJvb2xlYW4gfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9vYmpSZWY/Lm5vWm9vbTtcbiAgfVxuICBASW5wdXQoKVxuICBwdWJsaWMgc2V0IG5vUGFuKHZhbHVlOiBib29sZWFuKSB7XG4gICAgaWYgKHRoaXMuX29ialJlZikge1xuICAgICAgdGhpcy5fb2JqUmVmLm5vUGFuID0gdmFsdWU7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGdldCBub1BhbigpOiBib29sZWFuIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fb2JqUmVmPy5ub1BhbjtcbiAgfVxuICBASW5wdXQoKVxuICBwdWJsaWMgc2V0IG5vUm9sbCh2YWx1ZTogYm9vbGVhbikge1xuICAgIGlmICh0aGlzLl9vYmpSZWYpIHtcbiAgICAgIHRoaXMuX29ialJlZi5ub1JvbGwgPSB2YWx1ZTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgZ2V0IG5vUm9sbCgpOiBib29sZWFuIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fb2JqUmVmPy5ub1JvbGw7XG4gIH1cbiAgQElucHV0KClcbiAgcHVibGljIHNldCBzdGF0aWNNb3ZpbmcodmFsdWU6IGJvb2xlYW4pIHtcbiAgICBpZiAodGhpcy5fb2JqUmVmKSB7XG4gICAgICB0aGlzLl9vYmpSZWYuc3RhdGljTW92aW5nID0gdmFsdWU7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGdldCBzdGF0aWNNb3ZpbmcoKTogYm9vbGVhbiB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX29ialJlZj8uc3RhdGljTW92aW5nO1xuICB9XG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzZXQgZHluYW1pY0RhbXBpbmdGYWN0b3IodmFsdWU6IG51bWJlcikge1xuICAgIGlmICh0aGlzLl9vYmpSZWYpIHtcbiAgICAgIHRoaXMuX29ialJlZi5keW5hbWljRGFtcGluZ0ZhY3RvciA9IHZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBnZXQgZHluYW1pY0RhbXBpbmdGYWN0b3IoKTogbnVtYmVyIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fb2JqUmVmPy5keW5hbWljRGFtcGluZ0ZhY3RvcjtcbiAgfVxuICBASW5wdXQoKVxuICBwdWJsaWMgc2V0IG1pbkRpc3RhbmNlKHZhbHVlOiBudW1iZXIpIHtcbiAgICBpZiAodGhpcy5fb2JqUmVmKSB7XG4gICAgICB0aGlzLl9vYmpSZWYubWluRGlzdGFuY2UgPSB2YWx1ZTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgZ2V0IG1pbkRpc3RhbmNlKCk6IG51bWJlciB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX29ialJlZj8ubWluRGlzdGFuY2U7XG4gIH1cbiAgQElucHV0KClcbiAgcHVibGljIHNldCBtYXhEaXN0YW5jZSh2YWx1ZTogbnVtYmVyKSB7XG4gICAgaWYgKHRoaXMuX29ialJlZikge1xuICAgICAgdGhpcy5fb2JqUmVmLm1heERpc3RhbmNlID0gdmFsdWU7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGdldCBtYXhEaXN0YW5jZSgpOiBudW1iZXIgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9vYmpSZWY/Lm1heERpc3RhbmNlO1xuICB9XG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzZXQgbWluWm9vbSh2YWx1ZTogbnVtYmVyKSB7XG4gICAgaWYgKHRoaXMuX29ialJlZikge1xuICAgICAgdGhpcy5fb2JqUmVmLm1pblpvb20gPSB2YWx1ZTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgZ2V0IG1pblpvb20oKTogbnVtYmVyIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fb2JqUmVmPy5taW5ab29tO1xuICB9XG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzZXQgbWF4Wm9vbSh2YWx1ZTogbnVtYmVyKSB7XG4gICAgaWYgKHRoaXMuX29ialJlZikge1xuICAgICAgdGhpcy5fb2JqUmVmLm1heFpvb20gPSB2YWx1ZTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgZ2V0IG1heFpvb20oKTogbnVtYmVyIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fb2JqUmVmPy5tYXhab29tO1xuICB9XG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzZXQga2V5cyh2YWx1ZTogc3RyaW5nW10pIHtcbiAgICBpZiAodGhpcy5fb2JqUmVmKSB7XG4gICAgICB0aGlzLl9vYmpSZWYua2V5cyA9IHZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBnZXQga2V5cygpOiBzdHJpbmdbXSB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX29ialJlZj8ua2V5cztcbiAgfVxuICBASW5wdXQoKVxuICBwdWJsaWMgc2V0IG1vdXNlQnV0dG9ucyh2YWx1ZToge1xuICAgIExFRlQ/OiBNT1VTRSB8IG51bGwgfCB1bmRlZmluZWQ7XG4gICAgTUlERExFPzogTU9VU0UgfCBudWxsIHwgdW5kZWZpbmVkO1xuICAgIFJJR0hUPzogTU9VU0UgfCBudWxsIHwgdW5kZWZpbmVkO1xuICB9KSB7XG4gICAgaWYgKHRoaXMuX29ialJlZikge1xuICAgICAgdGhpcy5fb2JqUmVmLm1vdXNlQnV0dG9ucyA9IHZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBnZXQgbW91c2VCdXR0b25zKCk6XG4gICAgfCB7XG4gICAgICAgIExFRlQ/OiBNT1VTRSB8IG51bGwgfCB1bmRlZmluZWQ7XG4gICAgICAgIE1JRERMRT86IE1PVVNFIHwgbnVsbCB8IHVuZGVmaW5lZDtcbiAgICAgICAgUklHSFQ/OiBNT1VTRSB8IG51bGwgfCB1bmRlZmluZWQ7XG4gICAgICB9XG4gICAgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9vYmpSZWY/Lm1vdXNlQnV0dG9ucztcbiAgfVxuICBASW5wdXQoKVxuICBwdWJsaWMgc2V0IHRhcmdldCh2YWx1ZTogVmVjdG9yMyB8IFt4OiBudW1iZXIsIHk6IG51bWJlciwgejogbnVtYmVyXSkge1xuICAgIGlmICh0aGlzLl9vYmpSZWYpIHtcbiAgICAgIHRoaXMuX29ialJlZi50YXJnZXQgPSBhcHBseVZhbHVlPFZlY3RvcjM+KHRoaXMuX29ialJlZi50YXJnZXQsIHZhbHVlKTtcbiAgICB9XG4gIH1cbiAgcHVibGljIGdldCB0YXJnZXQoKTogVmVjdG9yMyB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX29ialJlZj8udGFyZ2V0O1xuICB9XG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzZXQgcG9zaXRpb24wKHZhbHVlOiBWZWN0b3IzIHwgW3g6IG51bWJlciwgeTogbnVtYmVyLCB6OiBudW1iZXJdKSB7XG4gICAgaWYgKHRoaXMuX29ialJlZikge1xuICAgICAgdGhpcy5fb2JqUmVmLnBvc2l0aW9uMCA9IGFwcGx5VmFsdWU8VmVjdG9yMz4oXG4gICAgICAgIHRoaXMuX29ialJlZi5wb3NpdGlvbjAsXG4gICAgICAgIHZhbHVlLFxuICAgICAgKTtcbiAgICB9XG4gIH1cbiAgcHVibGljIGdldCBwb3NpdGlvbjAoKTogVmVjdG9yMyB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX29ialJlZj8ucG9zaXRpb24wO1xuICB9XG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzZXQgdGFyZ2V0MCh2YWx1ZTogVmVjdG9yMyB8IFt4OiBudW1iZXIsIHk6IG51bWJlciwgejogbnVtYmVyXSkge1xuICAgIGlmICh0aGlzLl9vYmpSZWYpIHtcbiAgICAgIHRoaXMuX29ialJlZi50YXJnZXQwID0gYXBwbHlWYWx1ZTxWZWN0b3IzPih0aGlzLl9vYmpSZWYudGFyZ2V0MCwgdmFsdWUpO1xuICAgIH1cbiAgfVxuICBwdWJsaWMgZ2V0IHRhcmdldDAoKTogVmVjdG9yMyB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX29ialJlZj8udGFyZ2V0MDtcbiAgfVxuICBASW5wdXQoKVxuICBwdWJsaWMgc2V0IHVwMCh2YWx1ZTogVmVjdG9yMyB8IFt4OiBudW1iZXIsIHk6IG51bWJlciwgejogbnVtYmVyXSkge1xuICAgIGlmICh0aGlzLl9vYmpSZWYpIHtcbiAgICAgIHRoaXMuX29ialJlZi51cDAgPSBhcHBseVZhbHVlPFZlY3RvcjM+KHRoaXMuX29ialJlZi51cDAsIHZhbHVlKTtcbiAgICB9XG4gIH1cbiAgcHVibGljIGdldCB1cDAoKTogVmVjdG9yMyB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX29ialJlZj8udXAwO1xuICB9XG59XG4iXX0=