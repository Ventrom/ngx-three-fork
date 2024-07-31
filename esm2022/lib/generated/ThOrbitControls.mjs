/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix */
import { ChangeDetectionStrategy, Component, Input, forwardRef, } from '@angular/core';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { ThControlBase } from '../ThControlBase';
import { applyValue } from '../util';
import * as i0 from "@angular/core";
export class ThOrbitControls extends ThControlBase {
    getType() {
        return OrbitControls;
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
    set target(value) {
        if (this._objRef) {
            this._objRef.target = applyValue(this._objRef.target, value);
        }
    }
    get target() {
        return this._objRef?.target;
    }
    set center(value) {
        if (this._objRef) {
            this._objRef.center = applyValue(this._objRef.center, value);
        }
    }
    get center() {
        return this._objRef?.center;
    }
    set cursor(value) {
        if (this._objRef) {
            this._objRef.cursor = applyValue(this._objRef.cursor, value);
        }
    }
    get cursor() {
        return this._objRef?.cursor;
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
    set minTargetRadius(value) {
        if (this._objRef) {
            this._objRef.minTargetRadius = value;
        }
    }
    get minTargetRadius() {
        return this._objRef?.minTargetRadius;
    }
    set maxTargetRadius(value) {
        if (this._objRef) {
            this._objRef.maxTargetRadius = value;
        }
    }
    get maxTargetRadius() {
        return this._objRef?.maxTargetRadius;
    }
    set minPolarAngle(value) {
        if (this._objRef) {
            this._objRef.minPolarAngle = value;
        }
    }
    get minPolarAngle() {
        return this._objRef?.minPolarAngle;
    }
    set maxPolarAngle(value) {
        if (this._objRef) {
            this._objRef.maxPolarAngle = value;
        }
    }
    get maxPolarAngle() {
        return this._objRef?.maxPolarAngle;
    }
    set minAzimuthAngle(value) {
        if (this._objRef) {
            this._objRef.minAzimuthAngle = value;
        }
    }
    get minAzimuthAngle() {
        return this._objRef?.minAzimuthAngle;
    }
    set maxAzimuthAngle(value) {
        if (this._objRef) {
            this._objRef.maxAzimuthAngle = value;
        }
    }
    get maxAzimuthAngle() {
        return this._objRef?.maxAzimuthAngle;
    }
    set enableDamping(value) {
        if (this._objRef) {
            this._objRef.enableDamping = value;
        }
    }
    get enableDamping() {
        return this._objRef?.enableDamping;
    }
    set dampingFactor(value) {
        if (this._objRef) {
            this._objRef.dampingFactor = value;
        }
    }
    get dampingFactor() {
        return this._objRef?.dampingFactor;
    }
    set enableZoom(value) {
        if (this._objRef) {
            this._objRef.enableZoom = value;
        }
    }
    get enableZoom() {
        return this._objRef?.enableZoom;
    }
    set zoomSpeed(value) {
        if (this._objRef) {
            this._objRef.zoomSpeed = value;
        }
    }
    get zoomSpeed() {
        return this._objRef?.zoomSpeed;
    }
    set zoomToCursor(value) {
        if (this._objRef) {
            this._objRef.zoomToCursor = value;
        }
    }
    get zoomToCursor() {
        return this._objRef?.zoomToCursor;
    }
    set enableRotate(value) {
        if (this._objRef) {
            this._objRef.enableRotate = value;
        }
    }
    get enableRotate() {
        return this._objRef?.enableRotate;
    }
    set rotateSpeed(value) {
        if (this._objRef) {
            this._objRef.rotateSpeed = value;
        }
    }
    get rotateSpeed() {
        return this._objRef?.rotateSpeed;
    }
    set enablePan(value) {
        if (this._objRef) {
            this._objRef.enablePan = value;
        }
    }
    get enablePan() {
        return this._objRef?.enablePan;
    }
    set panSpeed(value) {
        if (this._objRef) {
            this._objRef.panSpeed = value;
        }
    }
    get panSpeed() {
        return this._objRef?.panSpeed;
    }
    set screenSpacePanning(value) {
        if (this._objRef) {
            this._objRef.screenSpacePanning = value;
        }
    }
    get screenSpacePanning() {
        return this._objRef?.screenSpacePanning;
    }
    set keyPanSpeed(value) {
        if (this._objRef) {
            this._objRef.keyPanSpeed = value;
        }
    }
    get keyPanSpeed() {
        return this._objRef?.keyPanSpeed;
    }
    set autoRotate(value) {
        if (this._objRef) {
            this._objRef.autoRotate = value;
        }
    }
    get autoRotate() {
        return this._objRef?.autoRotate;
    }
    set autoRotateSpeed(value) {
        if (this._objRef) {
            this._objRef.autoRotateSpeed = value;
        }
    }
    get autoRotateSpeed() {
        return this._objRef?.autoRotateSpeed;
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
    set touches(value) {
        if (this._objRef) {
            this._objRef.touches = value;
        }
    }
    get touches() {
        return this._objRef?.touches;
    }
    set target0(value) {
        if (this._objRef) {
            this._objRef.target0 = applyValue(this._objRef.target0, value);
        }
    }
    get target0() {
        return this._objRef?.target0;
    }
    set position0(value) {
        if (this._objRef) {
            this._objRef.position0 = applyValue(this._objRef.position0, value);
        }
    }
    get position0() {
        return this._objRef?.position0;
    }
    set zoom0(value) {
        if (this._objRef) {
            this._objRef.zoom0 = value;
        }
    }
    get zoom0() {
        return this._objRef?.zoom0;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThOrbitControls, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.1.2", type: ThOrbitControls, selector: "th-orbitControls", inputs: { object: "object", domElement: "domElement", enabled: "enabled", target: "target", center: "center", cursor: "cursor", minDistance: "minDistance", maxDistance: "maxDistance", minZoom: "minZoom", maxZoom: "maxZoom", minTargetRadius: "minTargetRadius", maxTargetRadius: "maxTargetRadius", minPolarAngle: "minPolarAngle", maxPolarAngle: "maxPolarAngle", minAzimuthAngle: "minAzimuthAngle", maxAzimuthAngle: "maxAzimuthAngle", enableDamping: "enableDamping", dampingFactor: "dampingFactor", enableZoom: "enableZoom", zoomSpeed: "zoomSpeed", zoomToCursor: "zoomToCursor", enableRotate: "enableRotate", rotateSpeed: "rotateSpeed", enablePan: "enablePan", panSpeed: "panSpeed", screenSpacePanning: "screenSpacePanning", keyPanSpeed: "keyPanSpeed", autoRotate: "autoRotate", autoRotateSpeed: "autoRotateSpeed", keys: "keys", mouseButtons: "mouseButtons", touches: "touches", target0: "target0", position0: "position0", zoom0: "zoom0" }, providers: [
            { provide: ThControlBase, useExisting: forwardRef(() => ThOrbitControls) },
        ], usesInheritance: true, ngImport: i0, template: '<ng-content/>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThOrbitControls, decorators: [{
            type: Component,
            args: [{
                    selector: 'th-orbitControls',
                    template: '<ng-content/>',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    providers: [
                        { provide: ThControlBase, useExisting: forwardRef(() => ThOrbitControls) },
                    ],
                }]
        }], propDecorators: { object: [{
                type: Input
            }], domElement: [{
                type: Input
            }], enabled: [{
                type: Input
            }], target: [{
                type: Input
            }], center: [{
                type: Input
            }], cursor: [{
                type: Input
            }], minDistance: [{
                type: Input
            }], maxDistance: [{
                type: Input
            }], minZoom: [{
                type: Input
            }], maxZoom: [{
                type: Input
            }], minTargetRadius: [{
                type: Input
            }], maxTargetRadius: [{
                type: Input
            }], minPolarAngle: [{
                type: Input
            }], maxPolarAngle: [{
                type: Input
            }], minAzimuthAngle: [{
                type: Input
            }], maxAzimuthAngle: [{
                type: Input
            }], enableDamping: [{
                type: Input
            }], dampingFactor: [{
                type: Input
            }], enableZoom: [{
                type: Input
            }], zoomSpeed: [{
                type: Input
            }], zoomToCursor: [{
                type: Input
            }], enableRotate: [{
                type: Input
            }], rotateSpeed: [{
                type: Input
            }], enablePan: [{
                type: Input
            }], panSpeed: [{
                type: Input
            }], screenSpacePanning: [{
                type: Input
            }], keyPanSpeed: [{
                type: Input
            }], autoRotate: [{
                type: Input
            }], autoRotateSpeed: [{
                type: Input
            }], keys: [{
                type: Input
            }], mouseButtons: [{
                type: Input
            }], touches: [{
                type: Input
            }], target0: [{
                type: Input
            }], position0: [{
                type: Input
            }], zoom0: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGhPcmJpdENvbnRyb2xzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LXRocmVlL3NyYy9saWIvZ2VuZXJhdGVkL1RoT3JiaXRDb250cm9scy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSx5REFBeUQ7QUFDekQseUNBQXlDO0FBQ3pDLCtGQUErRjtBQUMvRixPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxLQUFLLEVBRUwsVUFBVSxHQUNYLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSw4Q0FBOEMsQ0FBQztBQUM3RSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDakQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLFNBQVMsQ0FBQzs7QUFVckMsTUFBTSxPQUFPLGVBR1gsU0FBUSxhQUF1QjtJQUN4QixPQUFPO1FBQ1osT0FBTyxhQUFhLENBQUM7SUFDdkIsQ0FBQztJQUVELElBQ1csTUFBTSxDQUFDLEtBQWE7UUFDN0IsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDakIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQzlCLENBQUM7SUFDSCxDQUFDO0lBRUQsSUFBVyxNQUFNO1FBQ2YsT0FBTyxJQUFJLENBQUMsT0FBTyxFQUFFLE1BQU0sQ0FBQztJQUM5QixDQUFDO0lBQ0QsSUFDVyxVQUFVLENBQUMsS0FBNkI7UUFDakQsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDakIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO1FBQ2xDLENBQUM7SUFDSCxDQUFDO0lBRUQsSUFBVyxVQUFVO1FBQ25CLE9BQU8sSUFBSSxDQUFDLE9BQU8sRUFBRSxVQUFVLENBQUM7SUFDbEMsQ0FBQztJQUNELElBQ1csT0FBTyxDQUFDLEtBQWM7UUFDL0Is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VyxlQUFlO1FBQ3hCLE9BQU8sSUFBSSxDQUFDLE9BQU8sRUFBRSxlQUFlLENBQUM7SUFDdkMsQ0FBQztJQUNELElBQ1csZUFBZSxDQUFDLEtBQWE7UUFDdEMsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDakIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxlQUFlLEdBQUcsS0FBSyxDQUFDO1FBQ3ZDLENBQUM7SUFDSCxDQUFDO0lBRUQsSUFBVyxlQUFlO1FBQ3hCLE9BQU8sSUFBSSxDQUFDLE9BQU8sRUFBRSxlQUFlLENBQUM7SUFDdkMsQ0FBQztJQUNELElBQ1csYUFBYSxDQUFDLEtBQWE7UUFDcEMsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDakIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO1FBQ3JDLENBQUM7SUFDSCxDQUFDO0lBRUQsSUFBVyxhQUFhO1FBQ3RCLE9BQU8sSUFBSSxDQUFDLE9BQU8sRUFBRSxhQUFhLENBQUM7SUFDckMsQ0FBQztJQUNELElBQ1csYUFBYSxDQUFDLEtBQWE7UUFDcEMsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDakIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO1FBQ3JDLENBQUM7SUFDSCxDQUFDO0lBRUQsSUFBVyxhQUFhO1FBQ3RCLE9BQU8sSUFBSSxDQUFDLE9BQU8sRUFBRSxhQUFhLENBQUM7SUFDckMsQ0FBQztJQUNELElBQ1csZUFBZSxDQUFDLEtBQWE7UUFDdEMsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDakIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxlQUFlLEdBQUcsS0FBSyxDQUFDO1FBQ3ZDLENBQUM7SUFDSCxDQUFDO0lBRUQsSUFBVyxlQUFlO1FBQ3hCLE9BQU8sSUFBSSxDQUFDLE9BQU8sRUFBRSxlQUFlLENBQUM7SUFDdkMsQ0FBQztJQUNELElBQ1csZUFBZSxDQUFDLEtBQWE7UUFDdEMsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7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QkFEakIsS0FBSztnQkFXSyxlQUFlO3NCQUR6QixLQUFLO2dCQVdLLGVBQWU7c0JBRHpCLEtBQUs7Z0JBV0ssYUFBYTtzQkFEdkIsS0FBSztnQkFXSyxhQUFhO3NCQUR2QixLQUFLO2dCQVdLLGVBQWU7c0JBRHpCLEtBQUs7Z0JBV0ssZUFBZTtzQkFEekIsS0FBSztnQkFXSyxhQUFhO3NCQUR2QixLQUFLO2dCQVdLLGFBQWE7c0JBRHZCLEtBQUs7Z0JBV0ssVUFBVTtzQkFEcEIsS0FBSztnQkFXSyxTQUFTO3NCQURuQixLQUFLO2dCQVdLLFlBQVk7c0JBRHRCLEtBQUs7Z0JBV0ssWUFBWTtzQkFEdEIsS0FBSztnQkFXSyxXQUFXO3NCQURyQixLQUFLO2dCQVdLLFNBQVM7c0JBRG5CLEtBQUs7Z0JBV0ssUUFBUTtzQkFEbEIsS0FBSztnQkFXSyxrQkFBa0I7c0JBRDVCLEtBQUs7Z0JBV0ssV0FBVztzQkFEckIsS0FBSztnQkFXSyxVQUFVO3NCQURwQixLQUFLO2dCQVdLLGVBQWU7c0JBRHpCLEtBQUs7Z0JBV0ssSUFBSTtzQkFEZCxLQUFLO2dCQWtCSyxZQUFZO3NCQUR0QixLQUFLO2dCQXFCSyxPQUFPO3NCQURqQixLQUFLO2dCQWdCSyxPQUFPO3NCQURqQixLQUFLO2dCQVVLLFNBQVM7c0JBRG5CLEtBQUs7Z0JBYUssS0FBSztzQkFEZixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgQHR5cGVzY3JpcHQtZXNsaW50L25hbWluZy1jb252ZW50aW9uICovXG4vKiBlc2xpbnQtZGlzYWJsZSBuby11bmRlcnNjb3JlLWRhbmdsZSAqL1xuLyogZXNsaW50LWRpc2FibGUgQGFuZ3VsYXItZXNsaW50L2NvbXBvbmVudC1zZWxlY3RvciwgQGFuZ3VsYXItZXNsaW50L2NvbXBvbmVudC1jbGFzcy1zdWZmaXggKi9cbmltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDb21wb25lbnQsXG4gIElucHV0LFxuICBUeXBlLFxuICBmb3J3YXJkUmVmLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENhbWVyYSwgTU9VU0UsIFRPVUNILCBWZWN0b3IzIH0gZnJvbSAndGhyZWUnO1xuaW1wb3J0IHsgT3JiaXRDb250cm9scyB9IGZyb20gJ3RocmVlL2V4YW1wbGVzL2pzbS9jb250cm9scy9PcmJpdENvbnRyb2xzLmpzJztcbmltcG9ydCB7IFRoQ29udHJvbEJhc2UgfSBmcm9tICcuLi9UaENvbnRyb2xCYXNlJztcbmltcG9ydCB7IGFwcGx5VmFsdWUgfSBmcm9tICcuLi91dGlsJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndGgtb3JiaXRDb250cm9scycsXG4gIHRlbXBsYXRlOiAnPG5nLWNvbnRlbnQvPicsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBwcm92aWRlcnM6IFtcbiAgICB7IHByb3ZpZGU6IFRoQ29udHJvbEJhc2UsIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IFRoT3JiaXRDb250cm9scykgfSxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgVGhPcmJpdENvbnRyb2xzPFxuICBUIGV4dGVuZHMgT3JiaXRDb250cm9scyA9IE9yYml0Q29udHJvbHMsXG4gIFRBUkdTID0gW29iamVjdDogQ2FtZXJhLCBkb21FbGVtZW50OiBIVE1MRWxlbWVudF0sXG4+IGV4dGVuZHMgVGhDb250cm9sQmFzZTxULCBUQVJHUz4ge1xuICBwdWJsaWMgZ2V0VHlwZSgpOiBUeXBlPE9yYml0Q29udHJvbHM+IHtcbiAgICByZXR1cm4gT3JiaXRDb250cm9scztcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzZXQgb2JqZWN0KHZhbHVlOiBDYW1lcmEpIHtcbiAgICBpZiAodGhpcy5fb2JqUmVmKSB7XG4gICAgICB0aGlzLl9vYmpSZWYub2JqZWN0ID0gdmFsdWU7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGdldCBvYmplY3QoKTogQ2FtZXJhIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fb2JqUmVmPy5vYmplY3Q7XG4gIH1cbiAgQElucHV0KClcbiAgcHVibGljIHNldCBkb21FbGVtZW50KHZhbHVlOiBIVE1MRWxlbWVudCB8IERvY3VtZW50KSB7XG4gICAgaWYgKHRoaXMuX29ialJlZikge1xuICAgICAgdGhpcy5fb2JqUmVmLmRvbUVsZW1lbnQgPSB2YWx1ZTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgZ2V0IGRvbUVsZW1lbnQoKTogKEhUTUxFbGVtZW50IHwgRG9jdW1lbnQpIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fb2JqUmVmPy5kb21FbGVtZW50O1xuICB9XG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzZXQgZW5hYmxlZCh2YWx1ZTogYm9vbGVhbikge1xuICAgIGlmICh0aGlzLl9vYmpSZWYpIHtcbiAgICAgIHRoaXMuX29ialJlZi5lbmFibGVkID0gdmFsdWU7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGdldCBlbmFibGVkKCk6IGJvb2xlYW4gfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9vYmpSZWY/LmVuYWJsZWQ7XG4gIH1cbiAgQElucHV0KClcbiAgcHVibGljIHNldCB0YXJnZXQodmFsdWU6IFZlY3RvcjMgfCBbeDogbnVtYmVyLCB5OiBudW1iZXIsIHo6IG51bWJlcl0pIHtcbiAgICBpZiAodGhpcy5fb2JqUmVmKSB7XG4gICAgICB0aGlzLl9vYmpSZWYudGFyZ2V0ID0gYXBwbHlWYWx1ZTxWZWN0b3IzPih0aGlzLl9vYmpSZWYudGFyZ2V0LCB2YWx1ZSk7XG4gICAgfVxuICB9XG4gIHB1YmxpYyBnZXQgdGFyZ2V0KCk6IFZlY3RvcjMgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9vYmpSZWY/LnRhcmdldDtcbiAgfVxuICBASW5wdXQoKVxuICBwdWJsaWMgc2V0IGNlbnRlcih2YWx1ZTogVmVjdG9yMyB8IFt4OiBudW1iZXIsIHk6IG51bWJlciwgejogbnVtYmVyXSkge1xuICAgIGlmICh0aGlzLl9vYmpSZWYpIHtcbiAgICAgIHRoaXMuX29ialJlZi5jZW50ZXIgPSBhcHBseVZhbHVlPFZlY3RvcjM+KHRoaXMuX29ialJlZi5jZW50ZXIsIHZhbHVlKTtcbiAgICB9XG4gIH1cbiAgcHVibGljIGdldCBjZW50ZXIoKTogVmVjdG9yMyB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX29ialJlZj8uY2VudGVyO1xuICB9XG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzZXQgY3Vyc29yKHZhbHVlOiBWZWN0b3IzIHwgW3g6IG51bWJlciwgeTogbnVtYmVyLCB6OiBudW1iZXJdKSB7XG4gICAgaWYgKHRoaXMuX29ialJlZikge1xuICAgICAgdGhpcy5fb2JqUmVmLmN1cnNvciA9IGFwcGx5VmFsdWU8VmVjdG9yMz4odGhpcy5fb2JqUmVmLmN1cnNvciwgdmFsdWUpO1xuICAgIH1cbiAgfVxuICBwdWJsaWMgZ2V0IGN1cnNvcigpOiBWZWN0b3IzIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fb2JqUmVmPy5jdXJzb3I7XG4gIH1cbiAgQElucHV0KClcbiAgcHVibGljIHNldCBtaW5EaXN0YW5jZSh2YWx1ZTogbnVtYmVyKSB7XG4gICAgaWYgKHRoaXMuX29ialJlZikge1xuICAgICAgdGhpcy5fb2JqUmVmLm1pbkRpc3RhbmNlID0gdmFsdWU7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGdldCBtaW5EaXN0YW5jZSgpOiBudW1iZXIgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9vYmpSZWY/Lm1pbkRpc3RhbmNlO1xuICB9XG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzZXQgbWF4RGlzdGFuY2UodmFsdWU6IG51bWJlcikge1xuICAgIGlmICh0aGlzLl9vYmpSZWYpIHtcbiAgICAgIHRoaXMuX29ialJlZi5tYXhEaXN0YW5jZSA9IHZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBnZXQgbWF4RGlzdGFuY2UoKTogbnVtYmVyIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fb2JqUmVmPy5tYXhEaXN0YW5jZTtcbiAgfVxuICBASW5wdXQoKVxuICBwdWJsaWMgc2V0IG1pblpvb20odmFsdWU6IG51bWJlcikge1xuICAgIGlmICh0aGlzLl9vYmpSZWYpIHtcbiAgICAgIHRoaXMuX29ialJlZi5taW5ab29tID0gdmFsdWU7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGdldCBtaW5ab29tKCk6IG51bWJlciB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX29ialJlZj8ubWluWm9vbTtcbiAgfVxuICBASW5wdXQoKVxuICBwdWJsaWMgc2V0IG1heFpvb20odmFsdWU6IG51bWJlcikge1xuICAgIGlmICh0aGlzLl9vYmpSZWYpIHtcbiAgICAgIHRoaXMuX29ialJlZi5tYXhab29tID0gdmFsdWU7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGdldCBtYXhab29tKCk6IG51bWJlciB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX29ialJlZj8ubWF4Wm9vbTtcbiAgfVxuICBASW5wdXQoKVxuICBwdWJsaWMgc2V0IG1pblRhcmdldFJhZGl1cyh2YWx1ZTogbnVtYmVyKSB7XG4gICAgaWYgKHRoaXMuX29ialJlZikge1xuICAgICAgdGhpcy5fb2JqUmVmLm1pblRhcmdldFJhZGl1cyA9IHZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBnZXQgbWluVGFyZ2V0UmFkaXVzKCk6IG51bWJlciB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX29ialJlZj8ubWluVGFyZ2V0UmFkaXVzO1xuICB9XG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzZXQgbWF4VGFyZ2V0UmFkaXVzKHZhbHVlOiBudW1iZXIpIHtcbiAgICBpZiAodGhpcy5fb2JqUmVmKSB7XG4gICAgICB0aGlzLl9vYmpSZWYubWF4VGFyZ2V0UmFkaXVzID0gdmFsdWU7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGdldCBtYXhUYXJnZXRSYWRpdXMoKTogbnVtYmVyIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fb2JqUmVmPy5tYXhUYXJnZXRSYWRpdXM7XG4gIH1cbiAgQElucHV0KClcbiAgcHVibGljIHNldCBtaW5Qb2xhckFuZ2xlKHZhbHVlOiBudW1iZXIpIHtcbiAgICBpZiAodGhpcy5fb2JqUmVmKSB7XG4gICAgICB0aGlzLl9vYmpSZWYubWluUG9sYXJBbmdsZSA9IHZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBnZXQgbWluUG9sYXJBbmdsZSgpOiBudW1iZXIgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9vYmpSZWY/Lm1pblBvbGFyQW5nbGU7XG4gIH1cbiAgQElucHV0KClcbiAgcHVibGljIHNldCBtYXhQb2xhckFuZ2xlKHZhbHVlOiBudW1iZXIpIHtcbiAgICBpZiAodGhpcy5fb2JqUmVmKSB7XG4gICAgICB0aGlzLl9vYmpSZWYubWF4UG9sYXJBbmdsZSA9IHZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBnZXQgbWF4UG9sYXJBbmdsZSgpOiBudW1iZXIgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9vYmpSZWY/Lm1heFBvbGFyQW5nbGU7XG4gIH1cbiAgQElucHV0KClcbiAgcHVibGljIHNldCBtaW5BemltdXRoQW5nbGUodmFsdWU6IG51bWJlcikge1xuICAgIGlmICh0aGlzLl9vYmpSZWYpIHtcbiAgICAgIHRoaXMuX29ialJlZi5taW5BemltdXRoQW5nbGUgPSB2YWx1ZTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgZ2V0IG1pbkF6aW11dGhBbmdsZSgpOiBudW1iZXIgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9vYmpSZWY/Lm1pbkF6aW11dGhBbmdsZTtcbiAgfVxuICBASW5wdXQoKVxuICBwdWJsaWMgc2V0IG1heEF6aW11dGhBbmdsZSh2YWx1ZTogbnVtYmVyKSB7XG4gICAgaWYgKHRoaXMuX29ialJlZikge1xuICAgICAgdGhpcy5fb2JqUmVmLm1heEF6aW11dGhBbmdsZSA9IHZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBnZXQgbWF4QXppbXV0aEFuZ2xlKCk6IG51bWJlciB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX29ialJlZj8ubWF4QXppbXV0aEFuZ2xlO1xuICB9XG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzZXQgZW5hYmxlRGFtcGluZyh2YWx1ZTogYm9vbGVhbikge1xuICAgIGlmICh0aGlzLl9vYmpSZWYpIHtcbiAgICAgIHRoaXMuX29ialJlZi5lbmFibGVEYW1waW5nID0gdmFsdWU7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGdldCBlbmFibGVEYW1waW5nKCk6IGJvb2xlYW4gfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9vYmpSZWY/LmVuYWJsZURhbXBpbmc7XG4gIH1cbiAgQElucHV0KClcbiAgcHVibGljIHNldCBkYW1waW5nRmFjdG9yKHZhbHVlOiBudW1iZXIpIHtcbiAgICBpZiAodGhpcy5fb2JqUmVmKSB7XG4gICAgICB0aGlzLl9vYmpSZWYuZGFtcGluZ0ZhY3RvciA9IHZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBnZXQgZGFtcGluZ0ZhY3RvcigpOiBudW1iZXIgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9vYmpSZWY/LmRhbXBpbmdGYWN0b3I7XG4gIH1cbiAgQElucHV0KClcbiAgcHVibGljIHNldCBlbmFibGVab29tKHZhbHVlOiBib29sZWFuKSB7XG4gICAgaWYgKHRoaXMuX29ialJlZikge1xuICAgICAgdGhpcy5fb2JqUmVmLmVuYWJsZVpvb20gPSB2YWx1ZTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgZ2V0IGVuYWJsZVpvb20oKTogYm9vbGVhbiB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX29ialJlZj8uZW5hYmxlWm9vbTtcbiAgfVxuICBASW5wdXQoKVxuICBwdWJsaWMgc2V0IHpvb21TcGVlZCh2YWx1ZTogbnVtYmVyKSB7XG4gICAgaWYgKHRoaXMuX29ialJlZikge1xuICAgICAgdGhpcy5fb2JqUmVmLnpvb21TcGVlZCA9IHZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBnZXQgem9vbVNwZWVkKCk6IG51bWJlciB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX29ialJlZj8uem9vbVNwZWVkO1xuICB9XG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzZXQgem9vbVRvQ3Vyc29yKHZhbHVlOiBib29sZWFuKSB7XG4gICAgaWYgKHRoaXMuX29ialJlZikge1xuICAgICAgdGhpcy5fb2JqUmVmLnpvb21Ub0N1cnNvciA9IHZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBnZXQgem9vbVRvQ3Vyc29yKCk6IGJvb2xlYW4gfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9vYmpSZWY/Lnpvb21Ub0N1cnNvcjtcbiAgfVxuICBASW5wdXQoKVxuICBwdWJsaWMgc2V0IGVuYWJsZVJvdGF0ZSh2YWx1ZTogYm9vbGVhbikge1xuICAgIGlmICh0aGlzLl9vYmpSZWYpIHtcbiAgICAgIHRoaXMuX29ialJlZi5lbmFibGVSb3RhdGUgPSB2YWx1ZTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgZ2V0IGVuYWJsZVJvdGF0ZSgpOiBib29sZWFuIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fb2JqUmVmPy5lbmFibGVSb3RhdGU7XG4gIH1cbiAgQElucHV0KClcbiAgcHVibGljIHNldCByb3RhdGVTcGVlZCh2YWx1ZTogbnVtYmVyKSB7XG4gICAgaWYgKHRoaXMuX29ialJlZikge1xuICAgICAgdGhpcy5fb2JqUmVmLnJvdGF0ZVNwZWVkID0gdmFsdWU7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGdldCByb3RhdGVTcGVlZCgpOiBudW1iZXIgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9vYmpSZWY/LnJvdGF0ZVNwZWVkO1xuICB9XG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzZXQgZW5hYmxlUGFuKHZhbHVlOiBib29sZWFuKSB7XG4gICAgaWYgKHRoaXMuX29ialJlZikge1xuICAgICAgdGhpcy5fb2JqUmVmLmVuYWJsZVBhbiA9IHZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBnZXQgZW5hYmxlUGFuKCk6IGJvb2xlYW4gfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9vYmpSZWY/LmVuYWJsZVBhbjtcbiAgfVxuICBASW5wdXQoKVxuICBwdWJsaWMgc2V0IHBhblNwZWVkKHZhbHVlOiBudW1iZXIpIHtcbiAgICBpZiAodGhpcy5fb2JqUmVmKSB7XG4gICAgICB0aGlzLl9vYmpSZWYucGFuU3BlZWQgPSB2YWx1ZTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgZ2V0IHBhblNwZWVkKCk6IG51bWJlciB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX29ialJlZj8ucGFuU3BlZWQ7XG4gIH1cbiAgQElucHV0KClcbiAgcHVibGljIHNldCBzY3JlZW5TcGFjZVBhbm5pbmcodmFsdWU6IGJvb2xlYW4pIHtcbiAgICBpZiAodGhpcy5fb2JqUmVmKSB7XG4gICAgICB0aGlzLl9vYmpSZWYuc2NyZWVuU3BhY2VQYW5uaW5nID0gdmFsdWU7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGdldCBzY3JlZW5TcGFjZVBhbm5pbmcoKTogYm9vbGVhbiB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX29ialJlZj8uc2NyZWVuU3BhY2VQYW5uaW5nO1xuICB9XG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzZXQga2V5UGFuU3BlZWQodmFsdWU6IG51bWJlcikge1xuICAgIGlmICh0aGlzLl9vYmpSZWYpIHtcbiAgICAgIHRoaXMuX29ialJlZi5rZXlQYW5TcGVlZCA9IHZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBnZXQga2V5UGFuU3BlZWQoKTogbnVtYmVyIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fb2JqUmVmPy5rZXlQYW5TcGVlZDtcbiAgfVxuICBASW5wdXQoKVxuICBwdWJsaWMgc2V0IGF1dG9Sb3RhdGUodmFsdWU6IGJvb2xlYW4pIHtcbiAgICBpZiAodGhpcy5fb2JqUmVmKSB7XG4gICAgICB0aGlzLl9vYmpSZWYuYXV0b1JvdGF0ZSA9IHZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBnZXQgYXV0b1JvdGF0ZSgpOiBib29sZWFuIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fb2JqUmVmPy5hdXRvUm90YXRlO1xuICB9XG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzZXQgYXV0b1JvdGF0ZVNwZWVkKHZhbHVlOiBudW1iZXIpIHtcbiAgICBpZiAodGhpcy5fb2JqUmVmKSB7XG4gICAgICB0aGlzLl9vYmpSZWYuYXV0b1JvdGF0ZVNwZWVkID0gdmFsdWU7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGdldCBhdXRvUm90YXRlU3BlZWQoKTogbnVtYmVyIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fb2JqUmVmPy5hdXRvUm90YXRlU3BlZWQ7XG4gIH1cbiAgQElucHV0KClcbiAgcHVibGljIHNldCBrZXlzKHZhbHVlOiB7XG4gICAgTEVGVDogc3RyaW5nO1xuICAgIFVQOiBzdHJpbmc7XG4gICAgUklHSFQ6IHN0cmluZztcbiAgICBCT1RUT006IHN0cmluZztcbiAgfSkge1xuICAgIGlmICh0aGlzLl9vYmpSZWYpIHtcbiAgICAgIHRoaXMuX29ialJlZi5rZXlzID0gdmFsdWU7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGdldCBrZXlzKCk6XG4gICAgfCB7IExFRlQ6IHN0cmluZzsgVVA6IHN0cmluZzsgUklHSFQ6IHN0cmluZzsgQk9UVE9NOiBzdHJpbmcgfVxuICAgIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fb2JqUmVmPy5rZXlzO1xuICB9XG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzZXQgbW91c2VCdXR0b25zKHZhbHVlOiB7XG4gICAgTEVGVD86IE1PVVNFIHwgbnVsbCB8IHVuZGVmaW5lZDtcbiAgICBNSURETEU/OiBNT1VTRSB8IG51bGwgfCB1bmRlZmluZWQ7XG4gICAgUklHSFQ/OiBNT1VTRSB8IG51bGwgfCB1bmRlZmluZWQ7XG4gIH0pIHtcbiAgICBpZiAodGhpcy5fb2JqUmVmKSB7XG4gICAgICB0aGlzLl9vYmpSZWYubW91c2VCdXR0b25zID0gdmFsdWU7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGdldCBtb3VzZUJ1dHRvbnMoKTpcbiAgICB8IHtcbiAgICAgICAgTEVGVD86IE1PVVNFIHwgbnVsbCB8IHVuZGVmaW5lZDtcbiAgICAgICAgTUlERExFPzogTU9VU0UgfCBudWxsIHwgdW5kZWZpbmVkO1xuICAgICAgICBSSUdIVD86IE1PVVNFIHwgbnVsbCB8IHVuZGVmaW5lZDtcbiAgICAgIH1cbiAgICB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX29ialJlZj8ubW91c2VCdXR0b25zO1xuICB9XG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzZXQgdG91Y2hlcyh2YWx1ZToge1xuICAgIE9ORT86IFRPVUNIIHwgbnVsbCB8IHVuZGVmaW5lZDtcbiAgICBUV08/OiBUT1VDSCB8IG51bGwgfCB1bmRlZmluZWQ7XG4gIH0pIHtcbiAgICBpZiAodGhpcy5fb2JqUmVmKSB7XG4gICAgICB0aGlzLl9vYmpSZWYudG91Y2hlcyA9IHZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBnZXQgdG91Y2hlcygpOlxuICAgIHwgeyBPTkU/OiBUT1VDSCB8IG51bGwgfCB1bmRlZmluZWQ7IFRXTz86IFRPVUNIIHwgbnVsbCB8IHVuZGVmaW5lZCB9XG4gICAgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9vYmpSZWY/LnRvdWNoZXM7XG4gIH1cbiAgQElucHV0KClcbiAgcHVibGljIHNldCB0YXJnZXQwKHZhbHVlOiBWZWN0b3IzIHwgW3g6IG51bWJlciwgeTogbnVtYmVyLCB6OiBudW1iZXJdKSB7XG4gICAgaWYgKHRoaXMuX29ialJlZikge1xuICAgICAgdGhpcy5fb2JqUmVmLnRhcmdldDAgPSBhcHBseVZhbHVlPFZlY3RvcjM+KHRoaXMuX29ialJlZi50YXJnZXQwLCB2YWx1ZSk7XG4gICAgfVxuICB9XG4gIHB1YmxpYyBnZXQgdGFyZ2V0MCgpOiBWZWN0b3IzIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fb2JqUmVmPy50YXJnZXQwO1xuICB9XG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzZXQgcG9zaXRpb24wKHZhbHVlOiBWZWN0b3IzIHwgW3g6IG51bWJlciwgeTogbnVtYmVyLCB6OiBudW1iZXJdKSB7XG4gICAgaWYgKHRoaXMuX29ialJlZikge1xuICAgICAgdGhpcy5fb2JqUmVmLnBvc2l0aW9uMCA9IGFwcGx5VmFsdWU8VmVjdG9yMz4oXG4gICAgICAgIHRoaXMuX29ialJlZi5wb3NpdGlvbjAsXG4gICAgICAgIHZhbHVlLFxuICAgICAgKTtcbiAgICB9XG4gIH1cbiAgcHVibGljIGdldCBwb3NpdGlvbjAoKTogVmVjdG9yMyB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX29ialJlZj8ucG9zaXRpb24wO1xuICB9XG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzZXQgem9vbTAodmFsdWU6IG51bWJlcikge1xuICAgIGlmICh0aGlzLl9vYmpSZWYpIHtcbiAgICAgIHRoaXMuX29ialJlZi56b29tMCA9IHZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBnZXQgem9vbTAoKTogbnVtYmVyIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fb2JqUmVmPy56b29tMDtcbiAgfVxufVxuIl19