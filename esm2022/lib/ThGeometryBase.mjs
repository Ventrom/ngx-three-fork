import { Component } from '@angular/core';
import { ThWrapperBase } from './ThWrapperBase';
import * as i0 from "@angular/core";
import * as i1 from "./generated/ThObject3D";
// eslint-disable-next-line @angular-eslint/component-class-suffix
export class ThGeometryBase extends ThWrapperBase {
    constructor(parent) {
        super();
        this.parent = parent;
    }
    addToParent() {
        if (!this.parent.objRef) {
            return;
            //throw new Error("parent object doesn't hold a three js object instance");
        }
        this.parent.objRef.geometry = this.objRef;
        if (this.parent.objRef.updateMorphTargets) {
            this.parent.objRef.updateMorphTargets();
        }
    }
    removeFromParent() {
        if (this._objRef && this.parent && this.parent.objRef) {
            this.parent.objRef.geometry = undefined;
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThGeometryBase, deps: [{ token: i1.ThObject3D }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.1.2", type: ThGeometryBase, selector: "th-abs-geometry", usesInheritance: true, ngImport: i0, template: '', isInline: true }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThGeometryBase, decorators: [{
            type: Component,
            args: [{
                    selector: 'th-abs-geometry',
                    template: ''
                }]
        }], ctorParameters: () => [{ type: i1.ThObject3D }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGhHZW9tZXRyeUJhc2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtdGhyZWUvc3JjL2xpYi9UaEdlb21ldHJ5QmFzZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRzFDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQzs7O0FBS2hELGtFQUFrRTtBQUNsRSxNQUFNLE9BQU8sY0FBMkUsU0FBUSxhQUFzQjtJQUNwSCxZQUFzQixNQUFrQjtRQUN0QyxLQUFLLEVBQUUsQ0FBQztRQURZLFdBQU0sR0FBTixNQUFNLENBQVk7SUFFeEMsQ0FBQztJQUVNLFdBQVc7UUFDaEIsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUM7WUFDeEIsT0FBTztZQUNQLDJFQUEyRTtRQUM3RSxDQUFDO1FBRUEsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFjLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDbkQsSUFBSyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQWMsQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO1lBQ2xELElBQUksQ0FBQyxNQUFNLENBQUMsTUFBYyxDQUFDLGtCQUFrQixFQUFFLENBQUM7UUFDbkQsQ0FBQztJQUNILENBQUM7SUFFTSxnQkFBZ0I7UUFDckIsSUFBSSxJQUFJLENBQUMsT0FBTyxJQUFJLElBQUksQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQztZQUNyRCxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQWMsQ0FBQyxRQUFRLEdBQUcsU0FBUyxDQUFDO1FBQ25ELENBQUM7SUFDSCxDQUFDOzhHQXJCVSxjQUFjO2tHQUFkLGNBQWMsOEVBSGYsRUFBRTs7MkZBR0QsY0FBYztrQkFMMUIsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsaUJBQWlCO29CQUMzQixRQUFRLEVBQUUsRUFBRTtpQkFDYiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQnVmZmVyR2VvbWV0cnksIE5vcm1hbE9yR0xCdWZmZXJBdHRyaWJ1dGVzIH0gZnJvbSAndGhyZWUnO1xuaW1wb3J0IHsgVGhPYmplY3QzRCB9IGZyb20gJy4vZ2VuZXJhdGVkL1RoT2JqZWN0M0QnO1xuaW1wb3J0IHsgVGhXcmFwcGVyQmFzZSB9IGZyb20gJy4vVGhXcmFwcGVyQmFzZSc7XG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0aC1hYnMtZ2VvbWV0cnknLFxuICB0ZW1wbGF0ZTogJydcbn0pXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQGFuZ3VsYXItZXNsaW50L2NvbXBvbmVudC1jbGFzcy1zdWZmaXhcbmV4cG9ydCBjbGFzcyBUaEdlb21ldHJ5QmFzZTxUIGV4dGVuZHMgQnVmZmVyR2VvbWV0cnk8Tm9ybWFsT3JHTEJ1ZmZlckF0dHJpYnV0ZXM+LCBBUkdTPiBleHRlbmRzIFRoV3JhcHBlckJhc2U8VCwgQVJHUz4ge1xuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgcGFyZW50OiBUaE9iamVjdDNEKSB7XG4gICAgc3VwZXIoKTtcbiAgfVxuXG4gIHB1YmxpYyBhZGRUb1BhcmVudCgpIHtcbiAgICBpZiAoIXRoaXMucGFyZW50Lm9ialJlZikge1xuICAgICAgcmV0dXJuO1xuICAgICAgLy90aHJvdyBuZXcgRXJyb3IoXCJwYXJlbnQgb2JqZWN0IGRvZXNuJ3QgaG9sZCBhIHRocmVlIGpzIG9iamVjdCBpbnN0YW5jZVwiKTtcbiAgICB9XG5cbiAgICAodGhpcy5wYXJlbnQub2JqUmVmIGFzIGFueSkuZ2VvbWV0cnkgPSB0aGlzLm9ialJlZjtcbiAgICBpZiAoKHRoaXMucGFyZW50Lm9ialJlZiBhcyBhbnkpLnVwZGF0ZU1vcnBoVGFyZ2V0cykge1xuICAgICAgKHRoaXMucGFyZW50Lm9ialJlZiBhcyBhbnkpLnVwZGF0ZU1vcnBoVGFyZ2V0cygpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyByZW1vdmVGcm9tUGFyZW50KCkge1xuICAgIGlmICh0aGlzLl9vYmpSZWYgJiYgdGhpcy5wYXJlbnQgJiYgdGhpcy5wYXJlbnQub2JqUmVmKSB7XG4gICAgICAodGhpcy5wYXJlbnQub2JqUmVmIGFzIGFueSkuZ2VvbWV0cnkgPSB1bmRlZmluZWQ7XG4gICAgfVxuICB9XG59XG4iXX0=