import { Component, Input } from '@angular/core';
import { ThWrapperBase } from './ThWrapperBase';
import * as i0 from "@angular/core";
// eslint-disable-next-line @angular-eslint/component-class-suffix
export class ThObjectBase extends ThWrapperBase {
    constructor(parent) {
        super();
        this.parent = parent;
    }
    addToParent() {
        if (this._objRef &&
            this.parent.objRef &&
            (!this._objRef.parent || this._objRef.parent.uuid !== this.parent.objRef.uuid)) {
            this.parent.objRef.add(this._objRef);
        }
    }
    removeFromParent() {
        this._objRef?.parent?.remove(this._objRef);
    }
    applyObjRef(objRef) {
        if (this._objRef !== objRef || this._objRef?.parent?.uuid !== this.parent.objRef.uuid) {
            this.removeFromParent();
            this._objRef = objRef;
            if (this.autoAddToParent) {
                this.addToParent();
            }
        }
        this.emitObjRefChange();
    }
    attachToParent(newRef, oldRef) {
        if (!this.parent.objRef || (newRef === oldRef && oldRef?.parent?.uuid === this.parent.objRef.uuid)) {
            return;
        }
        // remove old obj from parent
        if (oldRef && oldRef.parent) {
            oldRef.parent.remove(oldRef);
        }
        // add new obj to parent
        if (newRef && (!newRef.parent || (newRef.parent && newRef.parent.uuid !== this.parent.objRef.uuid))) {
            this.parent.objRef.add(newRef);
        }
    }
    // object 3d methods
    set lookAt(vector) {
        Promise.resolve().then(() => {
            // execute next microtick, to assume all
            // position changes already happend,
            // because lookAt triggers a world matrix calculation
            if (!this.objRef) {
                return;
            }
            if (Array.isArray(vector)) {
                this.objRef.lookAt(...vector);
            }
            else {
                this.objRef.lookAt(vector);
            }
        });
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThObjectBase, deps: [{ token: ThObjectBase }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.1.2", type: ThObjectBase, selector: "th-abs-object", inputs: { lookAt: "lookAt" }, usesInheritance: true, ngImport: i0, template: '<ng-content/>', isInline: true }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThObjectBase, decorators: [{
            type: Component,
            args: [{
                    selector: 'th-abs-object',
                    template: '<ng-content/>'
                }]
        }], ctorParameters: () => [{ type: ThObjectBase }], propDecorators: { lookAt: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGhPYmplY3RCYXNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LXRocmVlL3NyYy9saWIvVGhPYmplY3RCYXNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBRXpELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQzs7QUFLaEQsa0VBQWtFO0FBQ2xFLE1BQU0sT0FBTyxZQUFpRCxTQUFRLGFBQXNCO0lBQzFGLFlBQW1CLE1BQXlCO1FBQzFDLEtBQUssRUFBRSxDQUFDO1FBRFMsV0FBTSxHQUFOLE1BQU0sQ0FBbUI7SUFFNUMsQ0FBQztJQUVlLFdBQVc7UUFDekIsSUFDRSxJQUFJLENBQUMsT0FBTztZQUNaLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTTtZQUNsQixDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsSUFBSSxLQUFLLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUM5RSxDQUFDO1lBQ0QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUN2QyxDQUFDO0lBQ0gsQ0FBQztJQUVlLGdCQUFnQjtRQUM5QixJQUFJLENBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzdDLENBQUM7SUFFa0IsV0FBVyxDQUFDLE1BQXFCO1FBQ2xELElBQUksSUFBSSxDQUFDLE9BQU8sS0FBSyxNQUFNLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsSUFBSSxLQUFLLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxDQUFDO1lBQ3RGLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1lBQ3hCLElBQUksQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDO1lBQ3RCLElBQUksSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO2dCQUN6QixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7WUFDckIsQ0FBQztRQUNILENBQUM7UUFDRCxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztJQUMxQixDQUFDO0lBRVMsY0FBYyxDQUFDLE1BQVUsRUFBRSxNQUFVO1FBQzdDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sSUFBSSxDQUFDLE1BQU0sS0FBSyxNQUFNLElBQUksTUFBTSxFQUFFLE1BQU0sRUFBRSxJQUFJLEtBQUssSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQztZQUNuRyxPQUFPO1FBQ1QsQ0FBQztRQUVELDZCQUE2QjtRQUM3QixJQUFJLE1BQU0sSUFBSSxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUM7WUFDNUIsTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDL0IsQ0FBQztRQUVELHdCQUF3QjtRQUN4QixJQUFJLE1BQU0sSUFBSSxDQUFDLENBQUMsTUFBTSxDQUFDLE1BQU0sSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLElBQUksTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEtBQUssSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDO1lBQ3BHLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNqQyxDQUFDO0lBQ0gsQ0FBQztJQUVELG9CQUFvQjtJQUNwQixJQUNXLE1BQU0sQ0FBQyxNQUFtRDtRQUNuRSxPQUFPLENBQUMsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRTtZQUMxQix3Q0FBd0M7WUFDeEMsb0NBQW9DO1lBQ3BDLHFEQUFxRDtZQUNyRCxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO2dCQUNqQixPQUFPO1lBQ1QsQ0FBQztZQUNELElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDO2dCQUMxQixJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxHQUFHLE1BQU0sQ0FBQyxDQUFDO1lBQ2hDLENBQUM7aUJBQU0sQ0FBQztnQkFDTixJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUM3QixDQUFDO1FBQ0gsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDOzhHQTlEVSxZQUFZO2tHQUFaLFlBQVksMEdBSGIsZUFBZTs7MkZBR2QsWUFBWTtrQkFMeEIsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsZUFBZTtvQkFDekIsUUFBUSxFQUFFLGVBQWU7aUJBQzFCOzhFQWtEWSxNQUFNO3NCQURoQixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYmplY3QzRCwgVmVjdG9yMyB9IGZyb20gJ3RocmVlJztcbmltcG9ydCB7IFRoV3JhcHBlckJhc2UgfSBmcm9tICcuL1RoV3JhcHBlckJhc2UnO1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndGgtYWJzLW9iamVjdCcsXG4gIHRlbXBsYXRlOiAnPG5nLWNvbnRlbnQvPidcbn0pXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQGFuZ3VsYXItZXNsaW50L2NvbXBvbmVudC1jbGFzcy1zdWZmaXhcbmV4cG9ydCBjbGFzcyBUaE9iamVjdEJhc2U8VCBleHRlbmRzIE9iamVjdDNELCBBUkdTID0gdW5rbm93bj4gZXh0ZW5kcyBUaFdyYXBwZXJCYXNlPFQsIEFSR1M+IGltcGxlbWVudHMgT25Jbml0IHtcbiAgY29uc3RydWN0b3IocHVibGljIHBhcmVudDogVGhPYmplY3RCYXNlPGFueT4pIHtcbiAgICBzdXBlcigpO1xuICB9XG5cbiAgcHVibGljIG92ZXJyaWRlIGFkZFRvUGFyZW50KCkge1xuICAgIGlmIChcbiAgICAgIHRoaXMuX29ialJlZiAmJlxuICAgICAgdGhpcy5wYXJlbnQub2JqUmVmICYmXG4gICAgICAoIXRoaXMuX29ialJlZi5wYXJlbnQgfHwgdGhpcy5fb2JqUmVmLnBhcmVudC51dWlkICE9PSB0aGlzLnBhcmVudC5vYmpSZWYudXVpZClcbiAgICApIHtcbiAgICAgIHRoaXMucGFyZW50Lm9ialJlZi5hZGQodGhpcy5fb2JqUmVmKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgb3ZlcnJpZGUgcmVtb3ZlRnJvbVBhcmVudCgpIHtcbiAgICB0aGlzLl9vYmpSZWY/LnBhcmVudD8ucmVtb3ZlKHRoaXMuX29ialJlZik7XG4gIH1cblxuICBwcm90ZWN0ZWQgb3ZlcnJpZGUgYXBwbHlPYmpSZWYob2JqUmVmOiBUIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHRoaXMuX29ialJlZiAhPT0gb2JqUmVmIHx8IHRoaXMuX29ialJlZj8ucGFyZW50Py51dWlkICE9PSB0aGlzLnBhcmVudC5vYmpSZWYudXVpZCkge1xuICAgICAgdGhpcy5yZW1vdmVGcm9tUGFyZW50KCk7XG4gICAgICB0aGlzLl9vYmpSZWYgPSBvYmpSZWY7XG4gICAgICBpZiAodGhpcy5hdXRvQWRkVG9QYXJlbnQpIHtcbiAgICAgICAgdGhpcy5hZGRUb1BhcmVudCgpO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLmVtaXRPYmpSZWZDaGFuZ2UoKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBhdHRhY2hUb1BhcmVudChuZXdSZWY/OiBULCBvbGRSZWY/OiBUKSB7XG4gICAgaWYgKCF0aGlzLnBhcmVudC5vYmpSZWYgfHwgKG5ld1JlZiA9PT0gb2xkUmVmICYmIG9sZFJlZj8ucGFyZW50Py51dWlkID09PSB0aGlzLnBhcmVudC5vYmpSZWYudXVpZCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyByZW1vdmUgb2xkIG9iaiBmcm9tIHBhcmVudFxuICAgIGlmIChvbGRSZWYgJiYgb2xkUmVmLnBhcmVudCkge1xuICAgICAgb2xkUmVmLnBhcmVudC5yZW1vdmUob2xkUmVmKTtcbiAgICB9XG5cbiAgICAvLyBhZGQgbmV3IG9iaiB0byBwYXJlbnRcbiAgICBpZiAobmV3UmVmICYmICghbmV3UmVmLnBhcmVudCB8fCAobmV3UmVmLnBhcmVudCAmJiBuZXdSZWYucGFyZW50LnV1aWQgIT09IHRoaXMucGFyZW50Lm9ialJlZi51dWlkKSkpIHtcbiAgICAgIHRoaXMucGFyZW50Lm9ialJlZi5hZGQobmV3UmVmKTtcbiAgICB9XG4gIH1cblxuICAvLyBvYmplY3QgM2QgbWV0aG9kc1xuICBASW5wdXQoKVxuICBwdWJsaWMgc2V0IGxvb2tBdCh2ZWN0b3I6IFZlY3RvcjMgfCBbeDogbnVtYmVyLCB5OiBudW1iZXIsIHo6IG51bWJlcl0pIHtcbiAgICBQcm9taXNlLnJlc29sdmUoKS50aGVuKCgpID0+IHtcbiAgICAgIC8vIGV4ZWN1dGUgbmV4dCBtaWNyb3RpY2ssIHRvIGFzc3VtZSBhbGxcbiAgICAgIC8vIHBvc2l0aW9uIGNoYW5nZXMgYWxyZWFkeSBoYXBwZW5kLFxuICAgICAgLy8gYmVjYXVzZSBsb29rQXQgdHJpZ2dlcnMgYSB3b3JsZCBtYXRyaXggY2FsY3VsYXRpb25cbiAgICAgIGlmICghdGhpcy5vYmpSZWYpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKEFycmF5LmlzQXJyYXkodmVjdG9yKSkge1xuICAgICAgICB0aGlzLm9ialJlZi5sb29rQXQoLi4udmVjdG9yKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMub2JqUmVmLmxvb2tBdCh2ZWN0b3IpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59XG4iXX0=