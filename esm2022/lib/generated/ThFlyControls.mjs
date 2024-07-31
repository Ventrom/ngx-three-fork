/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix */
import { ChangeDetectionStrategy, Component, Input, forwardRef, } from '@angular/core';
import { FlyControls } from 'three/examples/jsm/controls/FlyControls.js';
import { ThControlBase } from '../ThControlBase';
import * as i0 from "@angular/core";
export class ThFlyControls extends ThControlBase {
    getType() {
        return FlyControls;
    }
    set autoForward(value) {
        if (this._objRef) {
            this._objRef.autoForward = value;
        }
    }
    get autoForward() {
        return this._objRef?.autoForward;
    }
    set domElement(value) {
        if (this._objRef) {
            this._objRef.domElement = value;
        }
    }
    get domElement() {
        return this._objRef?.domElement;
    }
    set dragToLook(value) {
        if (this._objRef) {
            this._objRef.dragToLook = value;
        }
    }
    get dragToLook() {
        return this._objRef?.dragToLook;
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
    set object(value) {
        if (this._objRef) {
            this._objRef.object = value;
        }
    }
    get object() {
        return this._objRef?.object;
    }
    set rollSpeed(value) {
        if (this._objRef) {
            this._objRef.rollSpeed = value;
        }
    }
    get rollSpeed() {
        return this._objRef?.rollSpeed;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThFlyControls, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.1.2", type: ThFlyControls, selector: "th-flyControls", inputs: { autoForward: "autoForward", domElement: "domElement", dragToLook: "dragToLook", enabled: "enabled", movementSpeed: "movementSpeed", object: "object", rollSpeed: "rollSpeed" }, providers: [
            { provide: ThControlBase, useExisting: forwardRef(() => ThFlyControls) },
        ], usesInheritance: true, ngImport: i0, template: '<ng-content/>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThFlyControls, decorators: [{
            type: Component,
            args: [{
                    selector: 'th-flyControls',
                    template: '<ng-content/>',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    providers: [
                        { provide: ThControlBase, useExisting: forwardRef(() => ThFlyControls) },
                    ],
                }]
        }], propDecorators: { autoForward: [{
                type: Input
            }], domElement: [{
                type: Input
            }], dragToLook: [{
                type: Input
            }], enabled: [{
                type: Input
            }], movementSpeed: [{
                type: Input
            }], object: [{
                type: Input
            }], rollSpeed: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGhGbHlDb250cm9scy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC10aHJlZS9zcmMvbGliL2dlbmVyYXRlZC9UaEZseUNvbnRyb2xzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHlEQUF5RDtBQUN6RCx5Q0FBeUM7QUFDekMsK0ZBQStGO0FBQy9GLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULEtBQUssRUFFTCxVQUFVLEdBQ1gsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLDRDQUE0QyxDQUFDO0FBQ3pFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQzs7QUFVakQsTUFBTSxPQUFPLGFBR1gsU0FBUSxhQUF1QjtJQUN4QixPQUFPO1FBQ1osT0FBTyxXQUFXLENBQUM7SUFDckIsQ0FBQztJQUVELElBQ1csV0FBVyxDQUFDLEtBQWM7UUFDbkMsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDakIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDO1FBQ25DLENBQUM7SUFDSCxDQUFDO0lBRUQsSUFBVyxXQUFXO1FBQ3BCLE9BQU8sSUFBSSxDQUFDLE9BQU8sRUFBRSxXQUFXLENBQUM7SUFDbkMsQ0FBQztJQUNELElBQ1csVUFBVSxDQUFDLEtBQTZCO1FBQ2pELElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ2pCLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztRQUNsQyxDQUFDO0lBQ0gsQ0FBQztJQUVELElBQVcsVUFBVTtRQUNuQixPQUFPLElBQUksQ0FBQyxPQUFPLEVBQUUsVUFBVSxDQUFDO0lBQ2xDLENBQUM7SUFDRCxJQUNXLFVBQVUsQ0FBQyxLQUFjO1FBQ2xDLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ2pCLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztRQUNsQyxDQUFDO0lBQ0gsQ0FBQztJQUVELElBQVcsVUFBVTtRQUNuQixPQUFPLElBQUksQ0FBQyxPQUFPLEVBQUUsVUFBVSxDQUFDO0lBQ2xDLENBQUM7SUFDRCxJQUNXLE9BQU8sQ0FBQyxLQUFjO1FBQy9CLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ2pCLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztRQUMvQixDQUFDO0lBQ0gsQ0FBQztJQUVELElBQVcsT0FBTztRQUNoQixPQUFPLElBQUksQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDO0lBQy9CLENBQUM7SUFDRCxJQUNXLGFBQWEsQ0FBQyxLQUFhO1FBQ3BDLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ2pCLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztRQUNyQyxDQUFDO0lBQ0gsQ0FBQztJQUVELElBQVcsYUFBYTtRQUN0QixPQUFPLElBQUksQ0FBQyxPQUFPLEVBQUUsYUFBYSxDQUFDO0lBQ3JDLENBQUM7SUFDRCxJQUNXLE1BQU0sQ0FBQyxLQUFhO1FBQzdCLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ2pCLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUM5QixDQUFDO0lBQ0gsQ0FBQztJQUVELElBQVcsTUFBTTtRQUNmLE9BQU8sSUFBSSxDQUFDLE9BQU8sRUFBRSxNQUFNLENBQUM7SUFDOUIsQ0FBQztJQUNELElBQ1csU0FBUyxDQUFDLEtBQWE7UUFDaEMsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDakIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1FBQ2pDLENBQUM7SUFDSCxDQUFDO0lBRUQsSUFBVyxTQUFTO1FBQ2xCLE9BQU8sSUFBSSxDQUFDLE9BQU8sRUFBRSxTQUFTLENBQUM7SUFDakMsQ0FBQzs4R0E3RVUsYUFBYTtrR0FBYixhQUFhLG1PQUpiO1lBQ1QsRUFBRSxPQUFPLEVBQUUsYUFBYSxFQUFFLFdBQVcsRUFBRSxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsYUFBYSxDQUFDLEVBQUU7U0FDekUsaURBSlMsZUFBZTs7MkZBTWQsYUFBYTtrQkFSekIsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsZ0JBQWdCO29CQUMxQixRQUFRLEVBQUUsZUFBZTtvQkFDekIsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07b0JBQy9DLFNBQVMsRUFBRTt3QkFDVCxFQUFFLE9BQU8sRUFBRSxhQUFhLEVBQUUsV0FBVyxFQUFFLFVBQVUsQ0FBQyxHQUFHLEVBQUUsY0FBYyxDQUFDLEVBQUU7cUJBQ3pFO2lCQUNGOzhCQVVZLFdBQVc7c0JBRHJCLEtBQUs7Z0JBV0ssVUFBVTtzQkFEcEIsS0FBSztnQkFXSyxVQUFVO3NCQURwQixLQUFLO2dCQVdLLE9BQU87c0JBRGpCLEtBQUs7Z0JBV0ssYUFBYTtzQkFEdkIsS0FBSztnQkFXSyxNQUFNO3NCQURoQixLQUFLO2dCQVdLLFNBQVM7c0JBRG5CLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBAdHlwZXNjcmlwdC1lc2xpbnQvbmFtaW5nLWNvbnZlbnRpb24gKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vLXVuZGVyc2NvcmUtZGFuZ2xlICovXG4vKiBlc2xpbnQtZGlzYWJsZSBAYW5ndWxhci1lc2xpbnQvY29tcG9uZW50LXNlbGVjdG9yLCBAYW5ndWxhci1lc2xpbnQvY29tcG9uZW50LWNsYXNzLXN1ZmZpeCAqL1xuaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENvbXBvbmVudCxcbiAgSW5wdXQsXG4gIFR5cGUsXG4gIGZvcndhcmRSZWYsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ2FtZXJhIH0gZnJvbSAndGhyZWUnO1xuaW1wb3J0IHsgRmx5Q29udHJvbHMgfSBmcm9tICd0aHJlZS9leGFtcGxlcy9qc20vY29udHJvbHMvRmx5Q29udHJvbHMuanMnO1xuaW1wb3J0IHsgVGhDb250cm9sQmFzZSB9IGZyb20gJy4uL1RoQ29udHJvbEJhc2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0aC1mbHlDb250cm9scycsXG4gIHRlbXBsYXRlOiAnPG5nLWNvbnRlbnQvPicsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBwcm92aWRlcnM6IFtcbiAgICB7IHByb3ZpZGU6IFRoQ29udHJvbEJhc2UsIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IFRoRmx5Q29udHJvbHMpIH0sXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIFRoRmx5Q29udHJvbHM8XG4gIFQgZXh0ZW5kcyBGbHlDb250cm9scyA9IEZseUNvbnRyb2xzLFxuICBUQVJHUyA9IFtvYmplY3Q6IENhbWVyYSwgZG9tRWxlbWVudD86IEhUTUxFbGVtZW50XSxcbj4gZXh0ZW5kcyBUaENvbnRyb2xCYXNlPFQsIFRBUkdTPiB7XG4gIHB1YmxpYyBnZXRUeXBlKCk6IFR5cGU8Rmx5Q29udHJvbHM+IHtcbiAgICByZXR1cm4gRmx5Q29udHJvbHM7XG4gIH1cblxuICBASW5wdXQoKVxuICBwdWJsaWMgc2V0IGF1dG9Gb3J3YXJkKHZhbHVlOiBib29sZWFuKSB7XG4gICAgaWYgKHRoaXMuX29ialJlZikge1xuICAgICAgdGhpcy5fb2JqUmVmLmF1dG9Gb3J3YXJkID0gdmFsdWU7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGdldCBhdXRvRm9yd2FyZCgpOiBib29sZWFuIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fb2JqUmVmPy5hdXRvRm9yd2FyZDtcbiAgfVxuICBASW5wdXQoKVxuICBwdWJsaWMgc2V0IGRvbUVsZW1lbnQodmFsdWU6IEhUTUxFbGVtZW50IHwgRG9jdW1lbnQpIHtcbiAgICBpZiAodGhpcy5fb2JqUmVmKSB7XG4gICAgICB0aGlzLl9vYmpSZWYuZG9tRWxlbWVudCA9IHZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBnZXQgZG9tRWxlbWVudCgpOiAoSFRNTEVsZW1lbnQgfCBEb2N1bWVudCkgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9vYmpSZWY/LmRvbUVsZW1lbnQ7XG4gIH1cbiAgQElucHV0KClcbiAgcHVibGljIHNldCBkcmFnVG9Mb29rKHZhbHVlOiBib29sZWFuKSB7XG4gICAgaWYgKHRoaXMuX29ialJlZikge1xuICAgICAgdGhpcy5fb2JqUmVmLmRyYWdUb0xvb2sgPSB2YWx1ZTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgZ2V0IGRyYWdUb0xvb2soKTogYm9vbGVhbiB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX29ialJlZj8uZHJhZ1RvTG9vaztcbiAgfVxuICBASW5wdXQoKVxuICBwdWJsaWMgc2V0IGVuYWJsZWQodmFsdWU6IGJvb2xlYW4pIHtcbiAgICBpZiAodGhpcy5fb2JqUmVmKSB7XG4gICAgICB0aGlzLl9vYmpSZWYuZW5hYmxlZCA9IHZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBnZXQgZW5hYmxlZCgpOiBib29sZWFuIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fb2JqUmVmPy5lbmFibGVkO1xuICB9XG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzZXQgbW92ZW1lbnRTcGVlZCh2YWx1ZTogbnVtYmVyKSB7XG4gICAgaWYgKHRoaXMuX29ialJlZikge1xuICAgICAgdGhpcy5fb2JqUmVmLm1vdmVtZW50U3BlZWQgPSB2YWx1ZTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgZ2V0IG1vdmVtZW50U3BlZWQoKTogbnVtYmVyIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fb2JqUmVmPy5tb3ZlbWVudFNwZWVkO1xuICB9XG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzZXQgb2JqZWN0KHZhbHVlOiBDYW1lcmEpIHtcbiAgICBpZiAodGhpcy5fb2JqUmVmKSB7XG4gICAgICB0aGlzLl9vYmpSZWYub2JqZWN0ID0gdmFsdWU7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGdldCBvYmplY3QoKTogQ2FtZXJhIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fb2JqUmVmPy5vYmplY3Q7XG4gIH1cbiAgQElucHV0KClcbiAgcHVibGljIHNldCByb2xsU3BlZWQodmFsdWU6IG51bWJlcikge1xuICAgIGlmICh0aGlzLl9vYmpSZWYpIHtcbiAgICAgIHRoaXMuX29ialJlZi5yb2xsU3BlZWQgPSB2YWx1ZTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgZ2V0IHJvbGxTcGVlZCgpOiBudW1iZXIgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9vYmpSZWY/LnJvbGxTcGVlZDtcbiAgfVxufVxuIl19