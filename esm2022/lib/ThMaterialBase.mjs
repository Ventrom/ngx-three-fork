import { Component } from '@angular/core';
import { ThWrapperBase } from './ThWrapperBase';
import * as i0 from "@angular/core";
import * as i1 from "./generated/ThObject3D";
// eslint-disable-next-line @angular-eslint/component-class-suffix
export class ThMaterialBase extends ThWrapperBase {
    constructor(parent) {
        super();
        this.parent = parent;
    }
    addToParent() {
        if (!this.parent.objRef) {
            throw new Error("parent object doesn't hold a three js object instance");
        }
        this.parent.objRef.material = this.objRef;
    }
    removeFromParent() {
        if (this._objRef && this.parent && this.parent.objRef) {
            this.parent.objRef.material = undefined;
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThMaterialBase, deps: [{ token: i1.ThObject3D }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.1.2", type: ThMaterialBase, selector: "th-abs-material", usesInheritance: true, ngImport: i0, template: '', isInline: true }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThMaterialBase, decorators: [{
            type: Component,
            args: [{
                    selector: 'th-abs-material',
                    template: ''
                }]
        }], ctorParameters: () => [{ type: i1.ThObject3D }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGhNYXRlcmlhbEJhc2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtdGhyZWUvc3JjL2xpYi9UaE1hdGVyaWFsQmFzZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRzFDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQzs7O0FBS2hELGtFQUFrRTtBQUNsRSxNQUFNLE9BQU8sY0FBeUMsU0FBUSxhQUFzQjtJQUNsRixZQUFzQixNQUF1QjtRQUMzQyxLQUFLLEVBQUUsQ0FBQztRQURZLFdBQU0sR0FBTixNQUFNLENBQWlCO0lBRTdDLENBQUM7SUFFTSxXQUFXO1FBQ2hCLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDO1lBQ3hCLE1BQU0sSUFBSSxLQUFLLENBQUMsdURBQXVELENBQUMsQ0FBQztRQUMzRSxDQUFDO1FBRUEsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFlLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxNQUFrQixDQUFDO0lBQ2xFLENBQUM7SUFFTSxnQkFBZ0I7UUFDckIsSUFBSSxJQUFJLENBQUMsT0FBTyxJQUFJLElBQUksQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQztZQUNyRCxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQWMsQ0FBQyxRQUFRLEdBQUcsU0FBUyxDQUFDO1FBQ25ELENBQUM7SUFDSCxDQUFDOzhHQWpCVSxjQUFjO2tHQUFkLGNBQWMsOEVBSGYsRUFBRTs7MkZBR0QsY0FBYztrQkFMMUIsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsaUJBQWlCO29CQUMzQixRQUFRLEVBQUUsRUFBRTtpQkFDYiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTWF0ZXJpYWwsIE1lc2ggfSBmcm9tICd0aHJlZSc7XG5pbXBvcnQgeyBUaE9iamVjdDNEIH0gZnJvbSAnLi9nZW5lcmF0ZWQvVGhPYmplY3QzRCc7XG5pbXBvcnQgeyBUaFdyYXBwZXJCYXNlIH0gZnJvbSAnLi9UaFdyYXBwZXJCYXNlJztcbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3RoLWFicy1tYXRlcmlhbCcsXG4gIHRlbXBsYXRlOiAnJ1xufSlcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAYW5ndWxhci1lc2xpbnQvY29tcG9uZW50LWNsYXNzLXN1ZmZpeFxuZXhwb3J0IGNsYXNzIFRoTWF0ZXJpYWxCYXNlPFQgZXh0ZW5kcyBNYXRlcmlhbCwgQVJHUz4gZXh0ZW5kcyBUaFdyYXBwZXJCYXNlPFQsIEFSR1M+IHtcbiAgY29uc3RydWN0b3IocHJvdGVjdGVkIHBhcmVudDogVGhPYmplY3QzRDxhbnk+KSB7XG4gICAgc3VwZXIoKTtcbiAgfVxuXG4gIHB1YmxpYyBhZGRUb1BhcmVudCgpIHtcbiAgICBpZiAoIXRoaXMucGFyZW50Lm9ialJlZikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwicGFyZW50IG9iamVjdCBkb2Vzbid0IGhvbGQgYSB0aHJlZSBqcyBvYmplY3QgaW5zdGFuY2VcIik7XG4gICAgfVxuXG4gICAgKHRoaXMucGFyZW50Lm9ialJlZiBhcyBNZXNoKS5tYXRlcmlhbCA9IHRoaXMub2JqUmVmIGFzIE1hdGVyaWFsO1xuICB9XG5cbiAgcHVibGljIHJlbW92ZUZyb21QYXJlbnQoKSB7XG4gICAgaWYgKHRoaXMuX29ialJlZiAmJiB0aGlzLnBhcmVudCAmJiB0aGlzLnBhcmVudC5vYmpSZWYpIHtcbiAgICAgICh0aGlzLnBhcmVudC5vYmpSZWYgYXMgYW55KS5tYXRlcmlhbCA9IHVuZGVmaW5lZDtcbiAgICB9XG4gIH1cbn1cbiJdfQ==