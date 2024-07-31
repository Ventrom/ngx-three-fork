/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix */
import { ChangeDetectionStrategy, Component, Input, forwardRef, } from '@angular/core';
import { TransformControls, } from 'three/examples/jsm/controls/TransformControls.js';
import { ThControlBase } from '../ThControlBase';
import * as i0 from "@angular/core";
export class ThTransformControlsGen extends ThControlBase {
    getType() {
        return TransformControls;
    }
    set domElement(value) {
        if (this._objRef) {
            this._objRef.domElement = value;
        }
    }
    get domElement() {
        return this._objRef?.domElement;
    }
    set camera(value) {
        if (this._objRef) {
            this._objRef.camera = value;
        }
    }
    get camera() {
        return this._objRef?.camera;
    }
    set object(value) {
        if (this._objRef) {
            this._objRef.object = value;
        }
    }
    get object() {
        return this._objRef?.object;
    }
    set enabled(value) {
        if (this._objRef) {
            this._objRef.enabled = value;
        }
    }
    get enabled() {
        return this._objRef?.enabled;
    }
    set axis(value) {
        if (this._objRef) {
            this._objRef.axis = value;
        }
    }
    get axis() {
        return this._objRef?.axis;
    }
    set mode(value) {
        if (this._objRef) {
            this._objRef.mode = value;
        }
    }
    get mode() {
        return this._objRef?.mode;
    }
    set translationSnap(value) {
        if (this._objRef) {
            this._objRef.translationSnap = value;
        }
    }
    get translationSnap() {
        return this._objRef?.translationSnap;
    }
    set rotationSnap(value) {
        if (this._objRef) {
            this._objRef.rotationSnap = value;
        }
    }
    get rotationSnap() {
        return this._objRef?.rotationSnap;
    }
    set space(value) {
        if (this._objRef) {
            this._objRef.space = value;
        }
    }
    get space() {
        return this._objRef?.space;
    }
    set size(value) {
        if (this._objRef) {
            this._objRef.size = value;
        }
    }
    get size() {
        return this._objRef?.size;
    }
    set dragging(value) {
        if (this._objRef) {
            this._objRef.dragging = value;
        }
    }
    get dragging() {
        return this._objRef?.dragging;
    }
    set showX(value) {
        if (this._objRef) {
            this._objRef.showX = value;
        }
    }
    get showX() {
        return this._objRef?.showX;
    }
    set showY(value) {
        if (this._objRef) {
            this._objRef.showY = value;
        }
    }
    get showY() {
        return this._objRef?.showY;
    }
    set showZ(value) {
        if (this._objRef) {
            this._objRef.showZ = value;
        }
    }
    get showZ() {
        return this._objRef?.showZ;
    }
    get isTransformControls() {
        return this._objRef?.isTransformControls;
    }
    set mouseButtons(value) {
        if (this._objRef) {
            this._objRef.mouseButtons = value;
        }
    }
    get mouseButtons() {
        return this._objRef?.mouseButtons;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThTransformControlsGen, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.1.2", type: ThTransformControlsGen, selector: "th-transformControlsGen", inputs: { domElement: "domElement", camera: "camera", object: "object", enabled: "enabled", axis: "axis", mode: "mode", translationSnap: "translationSnap", rotationSnap: "rotationSnap", space: "space", size: "size", dragging: "dragging", showX: "showX", showY: "showY", showZ: "showZ", mouseButtons: "mouseButtons" }, providers: [
            {
                provide: ThControlBase,
                useExisting: forwardRef(() => ThTransformControlsGen),
            },
        ], usesInheritance: true, ngImport: i0, template: '<ng-content/>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThTransformControlsGen, decorators: [{
            type: Component,
            args: [{
                    selector: 'th-transformControlsGen',
                    template: '<ng-content/>',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    providers: [
                        {
                            provide: ThControlBase,
                            useExisting: forwardRef(() => ThTransformControlsGen),
                        },
                    ],
                }]
        }], propDecorators: { domElement: [{
                type: Input
            }], camera: [{
                type: Input
            }], object: [{
                type: Input
            }], enabled: [{
                type: Input
            }], axis: [{
                type: Input
            }], mode: [{
                type: Input
            }], translationSnap: [{
                type: Input
            }], rotationSnap: [{
                type: Input
            }], space: [{
                type: Input
            }], size: [{
                type: Input
            }], dragging: [{
                type: Input
            }], showX: [{
                type: Input
            }], showY: [{
                type: Input
            }], showZ: [{
                type: Input
            }], mouseButtons: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGhUcmFuc2Zvcm1Db250cm9sc0dlbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC10aHJlZS9zcmMvbGliL2dlbmVyYXRlZC9UaFRyYW5zZm9ybUNvbnRyb2xzR2VuLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHlEQUF5RDtBQUN6RCx5Q0FBeUM7QUFDekMsK0ZBQStGO0FBQy9GLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULEtBQUssRUFFTCxVQUFVLEdBQ1gsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUNMLGlCQUFpQixHQUVsQixNQUFNLGtEQUFrRCxDQUFDO0FBQzFELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQzs7QUFhakQsTUFBTSxPQUFPLHNCQUdYLFNBQVEsYUFBdUI7SUFDeEIsT0FBTztRQUNaLE9BQU8saUJBQWlCLENBQUM7SUFDM0IsQ0FBQztJQUVELElBQ1csVUFBVSxDQUFDLEtBQWtCO1FBQ3RDLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ2pCLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztRQUNsQyxDQUFDO0lBQ0gsQ0FBQztJQUVELElBQVcsVUFBVTtRQUNuQixPQUFPLElBQUksQ0FBQyxPQUFPLEVBQUUsVUFBVSxDQUFDO0lBQ2xDLENBQUM7SUFDRCxJQUNXLE1BQU0sQ0FBQyxLQUFhO1FBQzdCLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ2pCLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUM5QixDQUFDO0lBQ0gsQ0FBQztJQUVELElBQVcsTUFBTTtRQUNmLE9BQU8sSUFBSSxDQUFDLE9BQU8sRUFBRSxNQUFNLENBQUM7SUFDOUIsQ0FBQztJQUNELElBQ1csTUFBTSxDQUFDLEtBQTJCO1FBQzNDLElBQUksSUFBSSxDQUFDLE9BQU8s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c0I7a0JBWGxDLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLHlCQUF5QjtvQkFDbkMsUUFBUSxFQUFFLGVBQWU7b0JBQ3pCLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO29CQUMvQyxTQUFTLEVBQUU7d0JBQ1Q7NEJBQ0UsT0FBTyxFQUFFLGFBQWE7NEJBQ3RCLFdBQVcsRUFBRSxVQUFVLENBQUMsR0FBRyxFQUFFLHVCQUF1QixDQUFDO3lCQUN0RDtxQkFDRjtpQkFDRjs4QkFVWSxVQUFVO3NCQURwQixLQUFLO2dCQVdLLE1BQU07c0JBRGhCLEtBQUs7Z0JBV0ssTUFBTTtzQkFEaEIsS0FBSztnQkFXSyxPQUFPO3NCQURqQixLQUFLO2dCQVdLLElBQUk7c0JBRGQsS0FBSztnQkFlSyxJQUFJO3NCQURkLEtBQUs7Z0JBV0ssZUFBZTtzQkFEekIsS0FBSztnQkFXSyxZQUFZO3NCQUR0QixLQUFLO2dCQVdLLEtBQUs7c0JBRGYsS0FBSztnQkFXSyxJQUFJO3NCQURkLEtBQUs7Z0JBV0ssUUFBUTtzQkFEbEIsS0FBSztnQkFXSyxLQUFLO3NCQURmLEtBQUs7Z0JBV0ssS0FBSztzQkFEZixLQUFLO2dCQVdLLEtBQUs7c0JBRGYsS0FBSztnQkFjSyxZQUFZO3NCQUR0QixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgQHR5cGVzY3JpcHQtZXNsaW50L25hbWluZy1jb252ZW50aW9uICovXG4vKiBlc2xpbnQtZGlzYWJsZSBuby11bmRlcnNjb3JlLWRhbmdsZSAqL1xuLyogZXNsaW50LWRpc2FibGUgQGFuZ3VsYXItZXNsaW50L2NvbXBvbmVudC1zZWxlY3RvciwgQGFuZ3VsYXItZXNsaW50L2NvbXBvbmVudC1jbGFzcy1zdWZmaXggKi9cbmltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDb21wb25lbnQsXG4gIElucHV0LFxuICBUeXBlLFxuICBmb3J3YXJkUmVmLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENhbWVyYSwgTU9VU0UsIE9iamVjdDNEIH0gZnJvbSAndGhyZWUnO1xuaW1wb3J0IHtcbiAgVHJhbnNmb3JtQ29udHJvbHMsXG4gIFRyYW5zZm9ybUNvbnRyb2xzTW9kZSxcbn0gZnJvbSAndGhyZWUvZXhhbXBsZXMvanNtL2NvbnRyb2xzL1RyYW5zZm9ybUNvbnRyb2xzLmpzJztcbmltcG9ydCB7IFRoQ29udHJvbEJhc2UgfSBmcm9tICcuLi9UaENvbnRyb2xCYXNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndGgtdHJhbnNmb3JtQ29udHJvbHNHZW4nLFxuICB0ZW1wbGF0ZTogJzxuZy1jb250ZW50Lz4nLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgcHJvdmlkZXJzOiBbXG4gICAge1xuICAgICAgcHJvdmlkZTogVGhDb250cm9sQmFzZSxcbiAgICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IFRoVHJhbnNmb3JtQ29udHJvbHNHZW4pLFxuICAgIH0sXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIFRoVHJhbnNmb3JtQ29udHJvbHNHZW48XG4gIFQgZXh0ZW5kcyBUcmFuc2Zvcm1Db250cm9scyA9IFRyYW5zZm9ybUNvbnRyb2xzLFxuICBUQVJHUyA9IFtvYmplY3Q6IENhbWVyYSwgZG9tRWxlbWVudD86IEhUTUxFbGVtZW50XSxcbj4gZXh0ZW5kcyBUaENvbnRyb2xCYXNlPFQsIFRBUkdTPiB7XG4gIHB1YmxpYyBnZXRUeXBlKCk6IFR5cGU8VHJhbnNmb3JtQ29udHJvbHM+IHtcbiAgICByZXR1cm4gVHJhbnNmb3JtQ29udHJvbHM7XG4gIH1cblxuICBASW5wdXQoKVxuICBwdWJsaWMgc2V0IGRvbUVsZW1lbnQodmFsdWU6IEhUTUxFbGVtZW50KSB7XG4gICAgaWYgKHRoaXMuX29ialJlZikge1xuICAgICAgdGhpcy5fb2JqUmVmLmRvbUVsZW1lbnQgPSB2YWx1ZTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgZ2V0IGRvbUVsZW1lbnQoKTogSFRNTEVsZW1lbnQgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9vYmpSZWY/LmRvbUVsZW1lbnQ7XG4gIH1cbiAgQElucHV0KClcbiAgcHVibGljIHNldCBjYW1lcmEodmFsdWU6IENhbWVyYSkge1xuICAgIGlmICh0aGlzLl9vYmpSZWYpIHtcbiAgICAgIHRoaXMuX29ialJlZi5jYW1lcmEgPSB2YWx1ZTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgZ2V0IGNhbWVyYSgpOiBDYW1lcmEgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9vYmpSZWY/LmNhbWVyYTtcbiAgfVxuICBASW5wdXQoKVxuICBwdWJsaWMgc2V0IG9iamVjdCh2YWx1ZTogT2JqZWN0M0QgfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodGhpcy5fb2JqUmVmKSB7XG4gICAgICB0aGlzLl9vYmpSZWYub2JqZWN0ID0gdmFsdWU7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGdldCBvYmplY3QoKTogKE9iamVjdDNEIHwgdW5kZWZpbmVkKSB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX29ialJlZj8ub2JqZWN0O1xuICB9XG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzZXQgZW5hYmxlZCh2YWx1ZTogYm9vbGVhbikge1xuICAgIGlmICh0aGlzLl9vYmpSZWYpIHtcbiAgICAgIHRoaXMuX29ialJlZi5lbmFibGVkID0gdmFsdWU7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGdldCBlbmFibGVkKCk6IGJvb2xlYW4gfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9vYmpSZWY/LmVuYWJsZWQ7XG4gIH1cbiAgQElucHV0KClcbiAgcHVibGljIHNldCBheGlzKFxuICAgIHZhbHVlOiAnWCcgfCAnWScgfCAnWicgfCAnRScgfCAnWFknIHwgJ1laJyB8ICdYWicgfCAnWFlaJyB8ICdYWVpFJyB8IG51bGwsXG4gICkge1xuICAgIGlmICh0aGlzLl9vYmpSZWYpIHtcbiAgICAgIHRoaXMuX29ialJlZi5heGlzID0gdmFsdWU7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGdldCBheGlzKCk6XG4gICAgfCAoJ1gnIHwgJ1knIHwgJ1onIHwgJ0UnIHwgJ1hZJyB8ICdZWicgfCAnWFonIHwgJ1hZWicgfCAnWFlaRScgfCBudWxsKVxuICAgIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fb2JqUmVmPy5heGlzO1xuICB9XG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzZXQgbW9kZSh2YWx1ZTogVHJhbnNmb3JtQ29udHJvbHNNb2RlKSB7XG4gICAgaWYgKHRoaXMuX29ialJlZikge1xuICAgICAgdGhpcy5fb2JqUmVmLm1vZGUgPSB2YWx1ZTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgZ2V0IG1vZGUoKTogVHJhbnNmb3JtQ29udHJvbHNNb2RlIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fb2JqUmVmPy5tb2RlO1xuICB9XG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzZXQgdHJhbnNsYXRpb25TbmFwKHZhbHVlOiBudW1iZXIgfCBudWxsKSB7XG4gICAgaWYgKHRoaXMuX29ialJlZikge1xuICAgICAgdGhpcy5fb2JqUmVmLnRyYW5zbGF0aW9uU25hcCA9IHZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBnZXQgdHJhbnNsYXRpb25TbmFwKCk6IChudW1iZXIgfCBudWxsKSB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX29ialJlZj8udHJhbnNsYXRpb25TbmFwO1xuICB9XG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzZXQgcm90YXRpb25TbmFwKHZhbHVlOiBudW1iZXIgfCBudWxsKSB7XG4gICAgaWYgKHRoaXMuX29ialJlZikge1xuICAgICAgdGhpcy5fb2JqUmVmLnJvdGF0aW9uU25hcCA9IHZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBnZXQgcm90YXRpb25TbmFwKCk6IChudW1iZXIgfCBudWxsKSB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX29ialJlZj8ucm90YXRpb25TbmFwO1xuICB9XG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzZXQgc3BhY2UodmFsdWU6ICd3b3JsZCcgfCAnbG9jYWwnKSB7XG4gICAgaWYgKHRoaXMuX29ialJlZikge1xuICAgICAgdGhpcy5fb2JqUmVmLnNwYWNlID0gdmFsdWU7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGdldCBzcGFjZSgpOiAoJ3dvcmxkJyB8ICdsb2NhbCcpIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fb2JqUmVmPy5zcGFjZTtcbiAgfVxuICBASW5wdXQoKVxuICBwdWJsaWMgc2V0IHNpemUodmFsdWU6IG51bWJlcikge1xuICAgIGlmICh0aGlzLl9vYmpSZWYpIHtcbiAgICAgIHRoaXMuX29ialJlZi5zaXplID0gdmFsdWU7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGdldCBzaXplKCk6IG51bWJlciB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX29ialJlZj8uc2l6ZTtcbiAgfVxuICBASW5wdXQoKVxuICBwdWJsaWMgc2V0IGRyYWdnaW5nKHZhbHVlOiBib29sZWFuKSB7XG4gICAgaWYgKHRoaXMuX29ialJlZikge1xuICAgICAgdGhpcy5fb2JqUmVmLmRyYWdnaW5nID0gdmFsdWU7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGdldCBkcmFnZ2luZygpOiBib29sZWFuIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fb2JqUmVmPy5kcmFnZ2luZztcbiAgfVxuICBASW5wdXQoKVxuICBwdWJsaWMgc2V0IHNob3dYKHZhbHVlOiBib29sZWFuKSB7XG4gICAgaWYgKHRoaXMuX29ialJlZikge1xuICAgICAgdGhpcy5fb2JqUmVmLnNob3dYID0gdmFsdWU7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGdldCBzaG93WCgpOiBib29sZWFuIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fb2JqUmVmPy5zaG93WDtcbiAgfVxuICBASW5wdXQoKVxuICBwdWJsaWMgc2V0IHNob3dZKHZhbHVlOiBib29sZWFuKSB7XG4gICAgaWYgKHRoaXMuX29ialJlZikge1xuICAgICAgdGhpcy5fb2JqUmVmLnNob3dZID0gdmFsdWU7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGdldCBzaG93WSgpOiBib29sZWFuIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fb2JqUmVmPy5zaG93WTtcbiAgfVxuICBASW5wdXQoKVxuICBwdWJsaWMgc2V0IHNob3daKHZhbHVlOiBib29sZWFuKSB7XG4gICAgaWYgKHRoaXMuX29ialJlZikge1xuICAgICAgdGhpcy5fb2JqUmVmLnNob3daID0gdmFsdWU7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGdldCBzaG93WigpOiBib29sZWFuIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fb2JqUmVmPy5zaG93WjtcbiAgfVxuICBwdWJsaWMgZ2V0IGlzVHJhbnNmb3JtQ29udHJvbHMoKTogdHJ1ZSB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX29ialJlZj8uaXNUcmFuc2Zvcm1Db250cm9scztcbiAgfVxuICBASW5wdXQoKVxuICBwdWJsaWMgc2V0IG1vdXNlQnV0dG9ucyh2YWx1ZToge1xuICAgIExFRlQ/OiBNT1VTRSB8IG51bGwgfCB1bmRlZmluZWQ7XG4gICAgTUlERExFPzogTU9VU0UgfCBudWxsIHwgdW5kZWZpbmVkO1xuICAgIFJJR0hUPzogTU9VU0UgfCBudWxsIHwgdW5kZWZpbmVkO1xuICB9KSB7XG4gICAgaWYgKHRoaXMuX29ialJlZikge1xuICAgICAgdGhpcy5fb2JqUmVmLm1vdXNlQnV0dG9ucyA9IHZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBnZXQgbW91c2VCdXR0b25zKCk6XG4gICAgfCB7XG4gICAgICAgIExFRlQ/OiBNT1VTRSB8IG51bGwgfCB1bmRlZmluZWQ7XG4gICAgICAgIE1JRERMRT86IE1PVVNFIHwgbnVsbCB8IHVuZGVmaW5lZDtcbiAgICAgICAgUklHSFQ/OiBNT1VTRSB8IG51bGwgfCB1bmRlZmluZWQ7XG4gICAgICB9XG4gICAgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9vYmpSZWY/Lm1vdXNlQnV0dG9ucztcbiAgfVxufVxuIl19