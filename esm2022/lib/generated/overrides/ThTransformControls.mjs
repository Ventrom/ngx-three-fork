/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix,  */
import { ChangeDetectionStrategy, Component, forwardRef, Input } from '@angular/core';
import { TransformControls } from 'three/examples/jsm/controls/TransformControls.js';
import { ThControlBase } from '../../ThControlBase';
import { ThTransformControlsGen } from '../ThTransformControlsGen';
import * as i0 from "@angular/core";
import * as i1 from "../ThObject3D";
import * as i2 from "../../ThCanvas";
import * as i3 from "../ThScene";
export class ThTransformControls extends ThTransformControlsGen {
    constructor(_camera, canvas, scene) {
        super(_camera, canvas);
        this.scene = scene;
        this.objectAdded = () => {
            if (this.objRef && this.targetObject != null && this.targetObject.parent) {
                this.objRef.attach(this.targetObject);
            }
        };
        this.objectRemoved = () => {
            this._objRef?.detach();
        };
    }
    getType() {
        return TransformControls;
    }
    set object(value) {
        if (this._objRef) {
            this.removeObjectListeners();
            this.targetObject = value;
            this.addObjectListeners();
            if (value) {
                this.objectAdded();
            }
            else {
                this.objectRemoved();
            }
        }
    }
    addToParent() {
        if (this._objRef && !this._objRef.parent) {
            this.scene?.objRef?.add(this._objRef);
        }
    }
    removeFromParent() {
        if (this._objRef) {
            this.scene?.objRef?.remove(this._objRef);
        }
    }
    ngOnDestroy() {
        this.removeObjectListeners();
        this.objectRemoved();
        this.targetObject = undefined;
    }
    removeObjectListeners() {
        if (this.targetObject) {
            this.targetObject.removeEventListener('added', this.objectAdded);
            this.targetObject.removeEventListener('removed', this.objectRemoved);
        }
    }
    addObjectListeners() {
        this.targetObject?.addEventListener('added', this.objectAdded);
        this.targetObject?.addEventListener('removed', this.objectRemoved);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThTransformControls, deps: [{ token: i1.ThObject3D }, { token: i2.ThCanvas }, { token: i3.ThScene }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.1.2", type: ThTransformControls, selector: "th-transformControls", inputs: { object: "object" }, providers: [
            {
                provide: ThControlBase,
                useExisting: forwardRef(() => ThTransformControls),
            },
        ], usesInheritance: true, ngImport: i0, template: '<ng-content/>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThTransformControls, decorators: [{
            type: Component,
            args: [{
                    selector: 'th-transformControls',
                    template: '<ng-content/>',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    providers: [
                        {
                            provide: ThControlBase,
                            useExisting: forwardRef(() => ThTransformControls),
                        },
                    ],
                }]
        }], ctorParameters: () => [{ type: i1.ThObject3D }, { type: i2.ThCanvas }, { type: i3.ThScene }], propDecorators: { object: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGhUcmFuc2Zvcm1Db250cm9scy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC10aHJlZS9zcmMvbGliL2dlbmVyYXRlZC9vdmVycmlkZXMvVGhUcmFuc2Zvcm1Db250cm9scy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSx5REFBeUQ7QUFDekQseUNBQXlDO0FBQ3pDLGlHQUFpRztBQUNqRyxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQW1CLE1BQU0sZUFBZSxDQUFDO0FBRXZHLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGtEQUFrRCxDQUFDO0FBQ3JGLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUNwRCxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQzs7Ozs7QUFnQm5FLE1BQU0sT0FBTyxtQkFJWCxTQUFRLHNCQUFnQztJQUt4QyxZQUNFLE9BQXdCLEVBQ3hCLE1BQWdCLEVBQ04sS0FBYztRQUV4QixLQUFLLENBQUMsT0FBTyxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBRmIsVUFBSyxHQUFMLEtBQUssQ0FBUztRQXVCaEIsZ0JBQVcsR0FBRyxHQUFHLEVBQUU7WUFDM0IsSUFBSSxJQUFJLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxZQUFZLElBQUksSUFBSSxJQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxFQUFFLENBQUM7Z0JBQ3pFLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztZQUN4QyxDQUFDO1FBQ0gsQ0FBQyxDQUFDO1FBRVEsa0JBQWEsR0FBRyxHQUFHLEVBQUU7WUFDN0IsSUFBSSxDQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsQ0FBQztRQUN6QixDQUFDLENBQUM7SUE1QkYsQ0FBQztJQUVNLE9BQU87UUFDWixPQUFPLGlCQUFpQixDQUFDO0lBQzNCLENBQUM7SUFFRCxJQUNXLE1BQU0sQ0FBQyxLQUEyQjtRQUMzQyxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUNqQixJQUFJLENBQUMscUJBQXFCLEVBQUUsQ0FBQztZQUM3QixJQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQztZQUMxQixJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztZQUMxQixJQUFJLEtBQUssRUFBRSxDQUFDO2dCQUNWLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztZQUNyQixDQUFDO2lCQUFNLENBQUM7Z0JBQ04sSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1lBQ3ZCLENBQUM7UUFDSCxDQUFDO0lBQ0gsQ0FBQztJQVlNLFdBQVc7UUFDaEIsSUFBSSxJQUFJLENBQUMsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQztZQUN6QyxJQUFJLENBQUMsS0FBSyxFQUFFLE1BQU0sRUFBRSxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3hDLENBQUM7SUFDSCxDQUFDO0lBRU0sZ0JBQWdCO1FBQ3JCLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ2pCLElBQUksQ0FBQyxLQUFLLEVBQUUsTUFBTSxFQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDM0MsQ0FBQztJQUNILENBQUM7SUFFTSxXQUFXO1FBQ2hCLElBQUksQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO1FBQzdCLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUNyQixJQUFJLENBQUMsWUFBWSxHQUFHLFNBQVMsQ0FBQztJQUNoQyxDQUFDO0lBRVMscUJBQXFCO1FBQzdCLElBQUksSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1lBQ3RCLElBQUksQ0FBQyxZQUFZLENBQUMsbUJBQW1CLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztZQUNqRSxJQUFJLENBQUMsWUFBWSxDQUFDLG1CQUFtQixDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDdkUsQ0FBQztJQUNILENBQUM7SUFFUyxrQkFBa0I7UUFDMUIsSUFBSSxDQUFDLFlBQVksRUFBRSxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQy9ELElBQUksQ0FBQyxZQUFZLEVBQUUsZ0JBQWdCLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUNyRSxDQUFDOzhHQXpFVSxtQkFBbUI7a0dBQW5CLG1CQUFtQiw2RUFQbkI7WUFDVDtnQkFDRSxPQUFPLEVBQUUsYUFBYTtnQkFDdEIsV0FBVyxFQUFFLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxtQkFBbUIsQ0FBQzthQUNuRDtTQUNGLGlEQVBTLGVBQWU7OzJGQVNkLG1CQUFtQjtrQkFYL0IsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsc0JBQXNCO29CQUNoQyxRQUFRLEVBQUUsZUFBZTtvQkFDekIsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07b0JBQy9DLFNBQVMsRUFBRTt3QkFDVDs0QkFDRSxPQUFPLEVBQUUsYUFBYTs0QkFDdEIsV0FBVyxFQUFFLFVBQVUsQ0FBQyxHQUFHLEVBQUUsb0JBQW9CLENBQUM7eUJBQ25EO3FCQUNGO2lCQUNGOzRIQXVCWSxNQUFNO3NCQURoQixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgQHR5cGVzY3JpcHQtZXNsaW50L25hbWluZy1jb252ZW50aW9uICovXG4vKiBlc2xpbnQtZGlzYWJsZSBuby11bmRlcnNjb3JlLWRhbmdsZSAqL1xuLyogZXNsaW50LWRpc2FibGUgQGFuZ3VsYXItZXNsaW50L2NvbXBvbmVudC1zZWxlY3RvciwgQGFuZ3VsYXItZXNsaW50L2NvbXBvbmVudC1jbGFzcy1zdWZmaXgsICAqL1xuaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgZm9yd2FyZFJlZiwgSW5wdXQsIE9uRGVzdHJveSwgVHlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ2FtZXJhLCBPYmplY3QzRCB9IGZyb20gJ3RocmVlJztcbmltcG9ydCB7IFRyYW5zZm9ybUNvbnRyb2xzIH0gZnJvbSAndGhyZWUvZXhhbXBsZXMvanNtL2NvbnRyb2xzL1RyYW5zZm9ybUNvbnRyb2xzLmpzJztcbmltcG9ydCB7IFRoQ29udHJvbEJhc2UgfSBmcm9tICcuLi8uLi9UaENvbnRyb2xCYXNlJztcbmltcG9ydCB7IFRoVHJhbnNmb3JtQ29udHJvbHNHZW4gfSBmcm9tICcuLi9UaFRyYW5zZm9ybUNvbnRyb2xzR2VuJztcbmltcG9ydCB7IFRoT2JqZWN0M0QgfSBmcm9tICcuLi9UaE9iamVjdDNEJztcbmltcG9ydCB7IFRoQ2FudmFzIH0gZnJvbSAnLi4vLi4vVGhDYW52YXMnO1xuaW1wb3J0IHsgVGhTY2VuZSB9IGZyb20gJy4uL1RoU2NlbmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0aC10cmFuc2Zvcm1Db250cm9scycsXG4gIHRlbXBsYXRlOiAnPG5nLWNvbnRlbnQvPicsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBwcm92aWRlcnM6IFtcbiAgICB7XG4gICAgICBwcm92aWRlOiBUaENvbnRyb2xCYXNlLFxuICAgICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gVGhUcmFuc2Zvcm1Db250cm9scyksXG4gICAgfSxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgVGhUcmFuc2Zvcm1Db250cm9sczxcbiAgICBUIGV4dGVuZHMgVHJhbnNmb3JtQ29udHJvbHMgPSBUcmFuc2Zvcm1Db250cm9scyxcbiAgICBUQVJHUyA9IFtvYmplY3Q6IENhbWVyYSwgZG9tRWxlbWVudD86IEhUTUxFbGVtZW50XSxcbiAgPlxuICBleHRlbmRzIFRoVHJhbnNmb3JtQ29udHJvbHNHZW48VCwgVEFSR1M+XG4gIGltcGxlbWVudHMgT25EZXN0cm95XG57XG4gIHByaXZhdGUgdGFyZ2V0T2JqZWN0OiBPYmplY3QzRCB8IHVuZGVmaW5lZDtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBfY2FtZXJhOiBUaE9iamVjdDNEPGFueT4sXG4gICAgY2FudmFzOiBUaENhbnZhcyxcbiAgICBwcm90ZWN0ZWQgc2NlbmU6IFRoU2NlbmUsXG4gICkge1xuICAgIHN1cGVyKF9jYW1lcmEsIGNhbnZhcyk7XG4gIH1cblxuICBwdWJsaWMgZ2V0VHlwZSgpOiBUeXBlPFRyYW5zZm9ybUNvbnRyb2xzPiB7XG4gICAgcmV0dXJuIFRyYW5zZm9ybUNvbnRyb2xzO1xuICB9XG5cbiAgQElucHV0KClcbiAgcHVibGljIHNldCBvYmplY3QodmFsdWU6IE9iamVjdDNEIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHRoaXMuX29ialJlZikge1xuICAgICAgdGhpcy5yZW1vdmVPYmplY3RMaXN0ZW5lcnMoKTtcbiAgICAgIHRoaXMudGFyZ2V0T2JqZWN0ID0gdmFsdWU7XG4gICAgICB0aGlzLmFkZE9iamVjdExpc3RlbmVycygpO1xuICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgIHRoaXMub2JqZWN0QWRkZWQoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMub2JqZWN0UmVtb3ZlZCgpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHByb3RlY3RlZCBvYmplY3RBZGRlZCA9ICgpID0+IHtcbiAgICBpZiAodGhpcy5vYmpSZWYgJiYgdGhpcy50YXJnZXRPYmplY3QgIT0gbnVsbCAmJiB0aGlzLnRhcmdldE9iamVjdC5wYXJlbnQpIHtcbiAgICAgIHRoaXMub2JqUmVmLmF0dGFjaCh0aGlzLnRhcmdldE9iamVjdCk7XG4gICAgfVxuICB9O1xuXG4gIHByb3RlY3RlZCBvYmplY3RSZW1vdmVkID0gKCkgPT4ge1xuICAgIHRoaXMuX29ialJlZj8uZGV0YWNoKCk7XG4gIH07XG5cbiAgcHVibGljIGFkZFRvUGFyZW50KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLl9vYmpSZWYgJiYgIXRoaXMuX29ialJlZi5wYXJlbnQpIHtcbiAgICAgIHRoaXMuc2NlbmU/Lm9ialJlZj8uYWRkKHRoaXMuX29ialJlZik7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIHJlbW92ZUZyb21QYXJlbnQoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuX29ialJlZikge1xuICAgICAgdGhpcy5zY2VuZT8ub2JqUmVmPy5yZW1vdmUodGhpcy5fb2JqUmVmKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5yZW1vdmVPYmplY3RMaXN0ZW5lcnMoKTtcbiAgICB0aGlzLm9iamVjdFJlbW92ZWQoKTtcbiAgICB0aGlzLnRhcmdldE9iamVjdCA9IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHByb3RlY3RlZCByZW1vdmVPYmplY3RMaXN0ZW5lcnMoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMudGFyZ2V0T2JqZWN0KSB7XG4gICAgICB0aGlzLnRhcmdldE9iamVjdC5yZW1vdmVFdmVudExpc3RlbmVyKCdhZGRlZCcsIHRoaXMub2JqZWN0QWRkZWQpO1xuICAgICAgdGhpcy50YXJnZXRPYmplY3QucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVtb3ZlZCcsIHRoaXMub2JqZWN0UmVtb3ZlZCk7XG4gICAgfVxuICB9XG5cbiAgcHJvdGVjdGVkIGFkZE9iamVjdExpc3RlbmVycygpOiB2b2lkIHtcbiAgICB0aGlzLnRhcmdldE9iamVjdD8uYWRkRXZlbnRMaXN0ZW5lcignYWRkZWQnLCB0aGlzLm9iamVjdEFkZGVkKTtcbiAgICB0aGlzLnRhcmdldE9iamVjdD8uYWRkRXZlbnRMaXN0ZW5lcigncmVtb3ZlZCcsIHRoaXMub2JqZWN0UmVtb3ZlZCk7XG4gIH1cbn1cbiJdfQ==