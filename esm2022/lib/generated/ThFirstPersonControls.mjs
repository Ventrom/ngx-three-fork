/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix */
import { ChangeDetectionStrategy, Component, Input, forwardRef, } from '@angular/core';
import { FirstPersonControls } from 'three/examples/jsm/controls/FirstPersonControls.js';
import { ThControlBase } from '../ThControlBase';
import * as i0 from "@angular/core";
export class ThFirstPersonControls extends ThControlBase {
    getType() {
        return FirstPersonControls;
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
    set movementSpeed(value) {
        if (this._objRef) {
            this._objRef.movementSpeed = value;
        }
    }
    get movementSpeed() {
        return this._objRef?.movementSpeed;
    }
    set lookSpeed(value) {
        if (this._objRef) {
            this._objRef.lookSpeed = value;
        }
    }
    get lookSpeed() {
        return this._objRef?.lookSpeed;
    }
    set lookVertical(value) {
        if (this._objRef) {
            this._objRef.lookVertical = value;
        }
    }
    get lookVertical() {
        return this._objRef?.lookVertical;
    }
    set autoForward(value) {
        if (this._objRef) {
            this._objRef.autoForward = value;
        }
    }
    get autoForward() {
        return this._objRef?.autoForward;
    }
    set activeLook(value) {
        if (this._objRef) {
            this._objRef.activeLook = value;
        }
    }
    get activeLook() {
        return this._objRef?.activeLook;
    }
    set heightSpeed(value) {
        if (this._objRef) {
            this._objRef.heightSpeed = value;
        }
    }
    get heightSpeed() {
        return this._objRef?.heightSpeed;
    }
    set heightCoef(value) {
        if (this._objRef) {
            this._objRef.heightCoef = value;
        }
    }
    get heightCoef() {
        return this._objRef?.heightCoef;
    }
    set heightMin(value) {
        if (this._objRef) {
            this._objRef.heightMin = value;
        }
    }
    get heightMin() {
        return this._objRef?.heightMin;
    }
    set heightMax(value) {
        if (this._objRef) {
            this._objRef.heightMax = value;
        }
    }
    get heightMax() {
        return this._objRef?.heightMax;
    }
    set constrainVertical(value) {
        if (this._objRef) {
            this._objRef.constrainVertical = value;
        }
    }
    get constrainVertical() {
        return this._objRef?.constrainVertical;
    }
    set verticalMin(value) {
        if (this._objRef) {
            this._objRef.verticalMin = value;
        }
    }
    get verticalMin() {
        return this._objRef?.verticalMin;
    }
    set verticalMax(value) {
        if (this._objRef) {
            this._objRef.verticalMax = value;
        }
    }
    get verticalMax() {
        return this._objRef?.verticalMax;
    }
    set mouseDragOn(value) {
        if (this._objRef) {
            this._objRef.mouseDragOn = value;
        }
    }
    get mouseDragOn() {
        return this._objRef?.mouseDragOn;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThFirstPersonControls, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.1.2", type: ThFirstPersonControls, selector: "th-firstPersonControls", inputs: { object: "object", domElement: "domElement", enabled: "enabled", movementSpeed: "movementSpeed", lookSpeed: "lookSpeed", lookVertical: "lookVertical", autoForward: "autoForward", activeLook: "activeLook", heightSpeed: "heightSpeed", heightCoef: "heightCoef", heightMin: "heightMin", heightMax: "heightMax", constrainVertical: "constrainVertical", verticalMin: "verticalMin", verticalMax: "verticalMax", mouseDragOn: "mouseDragOn" }, providers: [
            {
                provide: ThControlBase,
                useExisting: forwardRef(() => ThFirstPersonControls),
            },
        ], usesInheritance: true, ngImport: i0, template: '<ng-content/>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThFirstPersonControls, decorators: [{
            type: Component,
            args: [{
                    selector: 'th-firstPersonControls',
                    template: '<ng-content/>',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    providers: [
                        {
                            provide: ThControlBase,
                            useExisting: forwardRef(() => ThFirstPersonControls),
                        },
                    ],
                }]
        }], propDecorators: { object: [{
                type: Input
            }], domElement: [{
                type: Input
            }], enabled: [{
                type: Input
            }], movementSpeed: [{
                type: Input
            }], lookSpeed: [{
                type: Input
            }], lookVertical: [{
                type: Input
            }], autoForward: [{
                type: Input
            }], activeLook: [{
                type: Input
            }], heightSpeed: [{
                type: Input
            }], heightCoef: [{
                type: Input
            }], heightMin: [{
                type: Input
            }], heightMax: [{
                type: Input
            }], constrainVertical: [{
                type: Input
            }], verticalMin: [{
                type: Input
            }], verticalMax: [{
                type: Input
            }], mouseDragOn: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGhGaXJzdFBlcnNvbkNvbnRyb2xzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LXRocmVlL3NyYy9saWIvZ2VuZXJhdGVkL1RoRmlyc3RQZXJzb25Db250cm9scy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSx5REFBeUQ7QUFDekQseUNBQXlDO0FBQ3pDLCtGQUErRjtBQUMvRixPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxLQUFLLEVBRUwsVUFBVSxHQUNYLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLG9EQUFvRCxDQUFDO0FBQ3pGLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQzs7QUFhakQsTUFBTSxPQUFPLHFCQUdYLFNBQVEsYUFBdUI7SUFDeEIsT0FBTztRQUNaLE9BQU8sbUJBQW1CLENBQUM7SUFDN0IsQ0FBQztJQUVELElBQ1csTUFBTSxDQUFDLEtBQWE7UUFDN0IsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDakIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQzlCLENBQUM7SUFDSCxDQUFDO0lBRUQsSUFBVyxNQUFNO1FBQ2YsT0FBTyxJQUFJLENBQUMsT0FBTyxFQUFFLE1BQU0sQ0FBQztJQUM5QixDQUFDO0lBQ0QsSUFDVyxVQUFVLENBQUMsS0FBNkI7UUFDakQsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDakIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO1FBQ2xDLENBQUM7SUFDSCxDQUFDO0lBRUQsSUFBVyxVQUFVO1FBQ25CLE9BQU8sSUFBSSxDQUFDLE9BQU8sRUFBRSxVQUFVLENBQUM7SUFDbEMsQ0FBQztJQUNELElBQ1csT0FBTyxDQUFDLEtBQWM7UUFDL0IsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDakIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO1FBQy9CLENBQUM7SUFDSCxDQUFDO0lBRUQsSUFBVyxPQUFPO1FBQ2hCLE9BQU8sSUFBSSxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUM7SUFDL0IsQ0FBQztJQUNELElBQ1csYUFBYSxDQUFDLEtBQWE7UUFDcEMsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDakIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO1FBQ3JDLENBQUM7SUFDSCxDQUFDO0lBRUQsSUFBVyxhQUFhO1FBQ3RCLE9BQU8sSUFBSSxDQUFDLE9BQU8sRUFBRSxhQUFhLENBQUM7SUFDckMsQ0FBQztJQUNELElBQ1csU0FBUyxDQUFDLEtBQWE7UUFDaEMsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDakIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1FBQ2pDLENBQUM7SUFDSCxDQUFDO0lBRUQsSUFBVyxTQUFTO1FBQ2xCLE9BQU8sSUFBSSxDQUFDLE9BQU8sRUFBRSxTQUFTLENBQUM7SUFDakMsQ0FBQztJQUNELElBQ1csWUFBWSxDQUFDLEtBQWM7UUFDcEMsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDakIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO1FBQ3BDLENBQUM7SUFDSCxDQUFDO0lBRUQsSUFBVyxZQUFZO1FBQ3JCLE9BQU8sSUFBSSxDQUFDLE9BQU8sRUFBRSxZQUFZLENBQUM7SUFDcEMsQ0FBQztJQUNELElBQ1csV0FBVyxDQUFDLEtBQWM7UUFDbkMsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDakIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDO1FBQ25DLENBQUM7SUFDSCxDQUFDO0lBRUQsSUFBVyxXQUFXO1FBQ3BCLE9BQU8sSUFBSSxDQUFDLE9BQU8sRUFBRSxXQUFXLENBQUM7SUFDbkMsQ0FBQztJQUNELElBQ1csVUFBVSxDQUFDLEtBQWM7UUFDbEMsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDakIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO1FBQ2xDLENBQUM7SUFDSCxDQUFDO0lBRUQsSUFBVyxVQUFVO1FBQ25CLE9BQU8sSUFBSSxDQUFDLE9BQU8sRUFBRSxVQUFVLENBQUM7SUFDbEMsQ0FBQztJQUNELElBQ1csV0FBVyxDQUFDLEtBQWM7UUFDbkMsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDakIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDO1FBQ25DLENBQUM7SUFDSCxDQUFDO0lBRUQsSUFBVyxXQUFXO1FBQ3BCLE9BQU8sSUFBSSxDQUFDLE9BQU8sRUFBRSxXQUFXLENBQUM7SUFDbkMsQ0FBQztJQUNELElBQ1csVUFBVSxDQUFDLEtBQWE7UUFDakMsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDakIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO1FBQ2xDLENBQUM7SUFDSCxDQUFDO0lBRUQsSUFBVyxVQUFVO1FBQ25CLE9BQU8sSUFBSSxDQUFDLE9BQU8sRUFBRSxVQUFVLENBQUM7SUFDbEMsQ0FBQztJQUNELElBQ1csU0FBUyxDQUFDLEtBQWE7UUFDaEMsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDakIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1FBQ2pDLENBQUM7SUFDSCxDQUFDO0lBRUQsSUFBVyxTQUFTO1FBQ2xCLE9BQU8sSUFBSSxDQUFDLE9BQU8sRUFBRSxTQUFTLENBQUM7SUFDakMsQ0FBQztJQUNELElBQ1csU0FBUyxDQUFDLEtBQWE7UUFDaEMsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDakIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1FBQ2pDLENBQUM7SUFDSCxDQUFDO0lBRUQsSUFBVyxTQUFTO1FBQ2xCLE9BQU8sSUFBSSxDQUFDLE9BQU8sRUFBRSxTQUFTLENBQUM7SUFDakMsQ0FBQztJQUNELElBQ1csaUJBQWlCLENBQUMsS0FBYztRQUN6QyxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUNqQixJQUFJLENBQUMsT0FBTyxDQUFDLGlCQUFpQixHQUFHLEtBQUssQ0FBQztRQUN6QyxDQUFDO0lBQ0gsQ0FBQztJQUVELElBQVcsaUJBQWlCO1FBQzFCLE9BQU8sSUFBSSxDQUFDLE9BQU8sRUFBRSxpQkFBaUIsQ0FBQztJQUN6QyxDQUFDO0lBQ0QsSUFDVyxXQUFXLENBQUMsS0FBYTtRQUNsQyxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUNqQixJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7UUFDbkMsQ0FBQztJQUNILENBQUM7SUFFRCxJQUFXLFdBQVc7UUFDcEIsT0FBTyxJQUFJLENBQUMsT0FBTyxFQUFFLFdBQVcsQ0FBQztJQUNuQyxDQUFDO0lBQ0QsSUFDVyxXQUFXLENBQUMsS0FBYTtRQUNsQyxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUNqQixJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7UUFDbkMsQ0FBQztJQUNILENBQUM7SUFFRCxJQUFXLFdBQVc7UUFDcEIsT0FBTyxJQUFJLENBQUMsT0FBTyxFQUFFLFdBQVcsQ0FBQztJQUNuQyxDQUFDO0lBQ0QsSUFDVyxXQUFXLENBQUMsS0FBYztRQUNuQyxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUNqQixJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7UUFDbkMsQ0FBQztJQUNILENBQUM7SUFFRCxJQUFXLFdBQVc7UUFDcEIsT0FBTyxJQUFJLENBQUMsT0FBTyxFQUFFLFdBQVcsQ0FBQztJQUNuQyxDQUFDOzhHQXZLVSxxQkFBcUI7a0dBQXJCLHFCQUFxQiwyZUFQckI7WUFDVDtnQkFDRSxPQUFPLEVBQUUsYUFBYTtnQkFDdEIsV0FBVyxFQUFFLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxxQkFBcUIsQ0FBQzthQUNyRDtTQUNGLGlEQVBTLGVBQWU7OzJGQVNkLHFCQUFxQjtrQkFYakMsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsd0JBQXdCO29CQUNsQyxRQUFRLEVBQUUsZUFBZTtvQkFDekIsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07b0JBQy9DLFNBQVMsRUFBRTt3QkFDVDs0QkFDRSxPQUFPLEVBQUUsYUFBYTs0QkFDdEIsV0FBVyxFQUFFLFVBQVUsQ0FBQyxHQUFHLEVBQUUsc0JBQXNCLENBQUM7eUJBQ3JEO3FCQUNGO2lCQUNGOzhCQVVZLE1BQU07c0JBRGhCLEtBQUs7Z0JBV0ssVUFBVTtzQkFEcEIsS0FBSztnQkFXSyxPQUFPO3NCQURqQixLQUFLO2dCQVdLLGFBQWE7c0JBRHZCLEtBQUs7Z0JBV0ssU0FBUztzQkFEbkIsS0FBSztnQkFXSyxZQUFZO3NCQUR0QixLQUFLO2dCQVdLLFdBQVc7c0JBRHJCLEtBQUs7Z0JBV0ssVUFBVTtzQkFEcEIsS0FBSztnQkFXSyxXQUFXO3NCQURyQixLQUFLO2dCQVdLLFVBQVU7c0JBRHBCLEtBQUs7Z0JBV0ssU0FBUztzQkFEbkIsS0FBSztnQkFXSyxTQUFTO3NCQURuQixLQUFLO2dCQVdLLGlCQUFpQjtzQkFEM0IsS0FBSztnQkFXSyxXQUFXO3NCQURyQixLQUFLO2dCQVdLLFdBQVc7c0JBRHJCLEtBQUs7Z0JBV0ssV0FBVztzQkFEckIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIEB0eXBlc2NyaXB0LWVzbGludC9uYW1pbmctY29udmVudGlvbiAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tdW5kZXJzY29yZS1kYW5nbGUgKi9cbi8qIGVzbGludC1kaXNhYmxlIEBhbmd1bGFyLWVzbGludC9jb21wb25lbnQtc2VsZWN0b3IsIEBhbmd1bGFyLWVzbGludC9jb21wb25lbnQtY2xhc3Mtc3VmZml4ICovXG5pbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ29tcG9uZW50LFxuICBJbnB1dCxcbiAgVHlwZSxcbiAgZm9yd2FyZFJlZixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDYW1lcmEgfSBmcm9tICd0aHJlZSc7XG5pbXBvcnQgeyBGaXJzdFBlcnNvbkNvbnRyb2xzIH0gZnJvbSAndGhyZWUvZXhhbXBsZXMvanNtL2NvbnRyb2xzL0ZpcnN0UGVyc29uQ29udHJvbHMuanMnO1xuaW1wb3J0IHsgVGhDb250cm9sQmFzZSB9IGZyb20gJy4uL1RoQ29udHJvbEJhc2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0aC1maXJzdFBlcnNvbkNvbnRyb2xzJyxcbiAgdGVtcGxhdGU6ICc8bmctY29udGVudC8+JyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHByb3ZpZGVyczogW1xuICAgIHtcbiAgICAgIHByb3ZpZGU6IFRoQ29udHJvbEJhc2UsXG4gICAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBUaEZpcnN0UGVyc29uQ29udHJvbHMpLFxuICAgIH0sXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIFRoRmlyc3RQZXJzb25Db250cm9sczxcbiAgVCBleHRlbmRzIEZpcnN0UGVyc29uQ29udHJvbHMgPSBGaXJzdFBlcnNvbkNvbnRyb2xzLFxuICBUQVJHUyA9IFtvYmplY3Q6IENhbWVyYSwgZG9tRWxlbWVudD86IEhUTUxFbGVtZW50XSxcbj4gZXh0ZW5kcyBUaENvbnRyb2xCYXNlPFQsIFRBUkdTPiB7XG4gIHB1YmxpYyBnZXRUeXBlKCk6IFR5cGU8Rmlyc3RQZXJzb25Db250cm9scz4ge1xuICAgIHJldHVybiBGaXJzdFBlcnNvbkNvbnRyb2xzO1xuICB9XG5cbiAgQElucHV0KClcbiAgcHVibGljIHNldCBvYmplY3QodmFsdWU6IENhbWVyYSkge1xuICAgIGlmICh0aGlzLl9vYmpSZWYpIHtcbiAgICAgIHRoaXMuX29ialJlZi5vYmplY3QgPSB2YWx1ZTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgZ2V0IG9iamVjdCgpOiBDYW1lcmEgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9vYmpSZWY/Lm9iamVjdDtcbiAgfVxuICBASW5wdXQoKVxuICBwdWJsaWMgc2V0IGRvbUVsZW1lbnQodmFsdWU6IEhUTUxFbGVtZW50IHwgRG9jdW1lbnQpIHtcbiAgICBpZiAodGhpcy5fb2JqUmVmKSB7XG4gICAgICB0aGlzLl9vYmpSZWYuZG9tRWxlbWVudCA9IHZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBnZXQgZG9tRWxlbWVudCgpOiAoSFRNTEVsZW1lbnQgfCBEb2N1bWVudCkgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9vYmpSZWY/LmRvbUVsZW1lbnQ7XG4gIH1cbiAgQElucHV0KClcbiAgcHVibGljIHNldCBlbmFibGVkKHZhbHVlOiBib29sZWFuKSB7XG4gICAgaWYgKHRoaXMuX29ialJlZikge1xuICAgICAgdGhpcy5fb2JqUmVmLmVuYWJsZWQgPSB2YWx1ZTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgZ2V0IGVuYWJsZWQoKTogYm9vbGVhbiB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX29ialJlZj8uZW5hYmxlZDtcbiAgfVxuICBASW5wdXQoKVxuICBwdWJsaWMgc2V0IG1vdmVtZW50U3BlZWQodmFsdWU6IG51bWJlcikge1xuICAgIGlmICh0aGlzLl9vYmpSZWYpIHtcbiAgICAgIHRoaXMuX29ialJlZi5tb3ZlbWVudFNwZWVkID0gdmFsdWU7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGdldCBtb3ZlbWVudFNwZWVkKCk6IG51bWJlciB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX29ialJlZj8ubW92ZW1lbnRTcGVlZDtcbiAgfVxuICBASW5wdXQoKVxuICBwdWJsaWMgc2V0IGxvb2tTcGVlZCh2YWx1ZTogbnVtYmVyKSB7XG4gICAgaWYgKHRoaXMuX29ialJlZikge1xuICAgICAgdGhpcy5fb2JqUmVmLmxvb2tTcGVlZCA9IHZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBnZXQgbG9va1NwZWVkKCk6IG51bWJlciB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX29ialJlZj8ubG9va1NwZWVkO1xuICB9XG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzZXQgbG9va1ZlcnRpY2FsKHZhbHVlOiBib29sZWFuKSB7XG4gICAgaWYgKHRoaXMuX29ialJlZikge1xuICAgICAgdGhpcy5fb2JqUmVmLmxvb2tWZXJ0aWNhbCA9IHZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBnZXQgbG9va1ZlcnRpY2FsKCk6IGJvb2xlYW4gfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9vYmpSZWY/Lmxvb2tWZXJ0aWNhbDtcbiAgfVxuICBASW5wdXQoKVxuICBwdWJsaWMgc2V0IGF1dG9Gb3J3YXJkKHZhbHVlOiBib29sZWFuKSB7XG4gICAgaWYgKHRoaXMuX29ialJlZikge1xuICAgICAgdGhpcy5fb2JqUmVmLmF1dG9Gb3J3YXJkID0gdmFsdWU7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGdldCBhdXRvRm9yd2FyZCgpOiBib29sZWFuIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fb2JqUmVmPy5hdXRvRm9yd2FyZDtcbiAgfVxuICBASW5wdXQoKVxuICBwdWJsaWMgc2V0IGFjdGl2ZUxvb2sodmFsdWU6IGJvb2xlYW4pIHtcbiAgICBpZiAodGhpcy5fb2JqUmVmKSB7XG4gICAgICB0aGlzLl9vYmpSZWYuYWN0aXZlTG9vayA9IHZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBnZXQgYWN0aXZlTG9vaygpOiBib29sZWFuIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fb2JqUmVmPy5hY3RpdmVMb29rO1xuICB9XG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzZXQgaGVpZ2h0U3BlZWQodmFsdWU6IGJvb2xlYW4pIHtcbiAgICBpZiAodGhpcy5fb2JqUmVmKSB7XG4gICAgICB0aGlzLl9vYmpSZWYuaGVpZ2h0U3BlZWQgPSB2YWx1ZTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgZ2V0IGhlaWdodFNwZWVkKCk6IGJvb2xlYW4gfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9vYmpSZWY/LmhlaWdodFNwZWVkO1xuICB9XG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzZXQgaGVpZ2h0Q29lZih2YWx1ZTogbnVtYmVyKSB7XG4gICAgaWYgKHRoaXMuX29ialJlZikge1xuICAgICAgdGhpcy5fb2JqUmVmLmhlaWdodENvZWYgPSB2YWx1ZTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgZ2V0IGhlaWdodENvZWYoKTogbnVtYmVyIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fb2JqUmVmPy5oZWlnaHRDb2VmO1xuICB9XG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzZXQgaGVpZ2h0TWluKHZhbHVlOiBudW1iZXIpIHtcbiAgICBpZiAodGhpcy5fb2JqUmVmKSB7XG4gICAgICB0aGlzLl9vYmpSZWYuaGVpZ2h0TWluID0gdmFsdWU7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGdldCBoZWlnaHRNaW4oKTogbnVtYmVyIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fb2JqUmVmPy5oZWlnaHRNaW47XG4gIH1cbiAgQElucHV0KClcbiAgcHVibGljIHNldCBoZWlnaHRNYXgodmFsdWU6IG51bWJlcikge1xuICAgIGlmICh0aGlzLl9vYmpSZWYpIHtcbiAgICAgIHRoaXMuX29ialJlZi5oZWlnaHRNYXggPSB2YWx1ZTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgZ2V0IGhlaWdodE1heCgpOiBudW1iZXIgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9vYmpSZWY/LmhlaWdodE1heDtcbiAgfVxuICBASW5wdXQoKVxuICBwdWJsaWMgc2V0IGNvbnN0cmFpblZlcnRpY2FsKHZhbHVlOiBib29sZWFuKSB7XG4gICAgaWYgKHRoaXMuX29ialJlZikge1xuICAgICAgdGhpcy5fb2JqUmVmLmNvbnN0cmFpblZlcnRpY2FsID0gdmFsdWU7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGdldCBjb25zdHJhaW5WZXJ0aWNhbCgpOiBib29sZWFuIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fb2JqUmVmPy5jb25zdHJhaW5WZXJ0aWNhbDtcbiAgfVxuICBASW5wdXQoKVxuICBwdWJsaWMgc2V0IHZlcnRpY2FsTWluKHZhbHVlOiBudW1iZXIpIHtcbiAgICBpZiAodGhpcy5fb2JqUmVmKSB7XG4gICAgICB0aGlzLl9vYmpSZWYudmVydGljYWxNaW4gPSB2YWx1ZTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgZ2V0IHZlcnRpY2FsTWluKCk6IG51bWJlciB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX29ialJlZj8udmVydGljYWxNaW47XG4gIH1cbiAgQElucHV0KClcbiAgcHVibGljIHNldCB2ZXJ0aWNhbE1heCh2YWx1ZTogbnVtYmVyKSB7XG4gICAgaWYgKHRoaXMuX29ialJlZikge1xuICAgICAgdGhpcy5fb2JqUmVmLnZlcnRpY2FsTWF4ID0gdmFsdWU7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGdldCB2ZXJ0aWNhbE1heCgpOiBudW1iZXIgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9vYmpSZWY/LnZlcnRpY2FsTWF4O1xuICB9XG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzZXQgbW91c2VEcmFnT24odmFsdWU6IGJvb2xlYW4pIHtcbiAgICBpZiAodGhpcy5fb2JqUmVmKSB7XG4gICAgICB0aGlzLl9vYmpSZWYubW91c2VEcmFnT24gPSB2YWx1ZTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgZ2V0IG1vdXNlRHJhZ09uKCk6IGJvb2xlYW4gfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9vYmpSZWY/Lm1vdXNlRHJhZ09uO1xuICB9XG59XG4iXX0=