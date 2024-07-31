import { Component, inject } from '@angular/core';
import { ThAnimationLoopService } from './renderer/th-animation-loop.service';
import { ThWrapperBase } from './ThWrapperBase';
import * as i0 from "@angular/core";
import * as i1 from "./generated/ThObject3D";
import * as i2 from "./ThCanvas";
// eslint-disable-next-line @angular-eslint/component-class-suffix
export class ThControlBase extends ThWrapperBase {
    constructor(_camera, canvas) {
        super();
        this._camera = _camera;
        this.canvas = canvas;
        this.renderLoop = inject(ThAnimationLoopService);
    }
    createThreeInstance(args) {
        if (!args) {
            args = [this._camera.objRef, this.canvas?.elementRef.nativeElement];
        }
        const instance = super.createThreeInstance(args);
        this.patchDispatchEvent(instance);
        this.subscribeControlUpdater(instance);
        return instance;
    }
    patchDispatchEvent(dispatcher) {
        if (dispatcher.dispatchEvent) {
            this.origDispatchEventMethod = dispatcher.dispatchEvent;
            const origMethod = this.origDispatchEventMethod;
            dispatcher.dispatchEvent = (event) => {
                origMethod.call(dispatcher, event);
                // request an animation frame after an event was emitted;
                this.renderLoop.requestAnimationFrame();
            };
        }
    }
    ngOnDestroy() {
        super.ngOnDestroy();
        this.unpatchDispatchEvent();
        this.unsubscribeControlUpdater();
    }
    unpatchDispatchEvent() {
        if (this.origDispatchEventMethod && this._objRef) {
            this._objRef.dispatchEvent = this.origDispatchEventMethod;
        }
    }
    subscribeControlUpdater(control) {
        if (control.update !== undefined) {
            this.beforeRenderSubscription = this.renderLoop.beforeRender$.subscribe((state) => {
                control.update(state.delta);
            });
        }
    }
    unsubscribeControlUpdater() {
        if (this.beforeRenderSubscription) {
            this.beforeRenderSubscription.unsubscribe();
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThControlBase, deps: [{ token: i1.ThObject3D }, { token: i2.ThCanvas }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.1.2", type: ThControlBase, selector: "th-abs-control", usesInheritance: true, ngImport: i0, template: '', isInline: true }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThControlBase, decorators: [{
            type: Component,
            args: [{
                    selector: 'th-abs-control',
                    template: '',
                }]
        }], ctorParameters: () => [{ type: i1.ThObject3D }, { type: i2.ThCanvas }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGhDb250cm9sQmFzZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL25neC10aHJlZS9zcmMvbGliL1RoQ29udHJvbEJhc2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQWEsTUFBTSxlQUFlLENBQUM7QUFJN0QsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFFOUUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGlCQUFpQixDQUFDOzs7O0FBS2hELGtFQUFrRTtBQUNsRSxNQUFNLE9BQU8sYUFBdUIsU0FBUSxhQUFzQjtJQUtoRSxZQUNZLE9BQXdCLEVBQ3hCLE1BQWlCO1FBRTNCLEtBQUssRUFBRSxDQUFDO1FBSEUsWUFBTyxHQUFQLE9BQU8sQ0FBaUI7UUFDeEIsV0FBTSxHQUFOLE1BQU0sQ0FBVztRQUpuQixlQUFVLEdBQUcsTUFBTSxDQUFDLHNCQUFzQixDQUFDLENBQUM7SUFPdEQsQ0FBQztJQUVNLG1CQUFtQixDQUFDLElBQW9CO1FBQzdDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUNWLElBQUksR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNLEVBQUUsVUFBVSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQ3RFLENBQUM7UUFDRCxNQUFNLFFBQVEsR0FBNkIsS0FBSyxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzNFLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNsQyxJQUFJLENBQUMsdUJBQXVCLENBQUMsUUFBZSxDQUFDLENBQUM7UUFDOUMsT0FBTyxRQUFRLENBQUM7SUFDbEIsQ0FBQztJQUVTLGtCQUFrQixDQUFDLFVBQW9DO1FBQy9ELElBQUksVUFBVSxDQUFDLGFBQWEsRUFBRSxDQUFDO1lBQzdCLElBQUksQ0FBQyx1QkFBdUIsR0FBRyxVQUFVLENBQUMsYUFBYSxDQUFDO1lBQ3hELE1BQU0sVUFBVSxHQUFHLElBQUksQ0FBQyx1QkFBdUIsQ0FBQztZQUNoRCxVQUFVLENBQUMsYUFBYSxHQUFHLENBQUMsS0FBSyxFQUFFLEVBQUU7Z0JBQ25DLFVBQVUsQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLEtBQUssQ0FBQyxDQUFDO2dCQUNuQyx5REFBeUQ7Z0JBQ3pELElBQUksQ0FBQyxVQUFVLENBQUMscUJBQXFCLEVBQUUsQ0FBQztZQUMxQyxDQUFDLENBQUM7UUFDSixDQUFDO0lBQ0gsQ0FBQztJQUVNLFdBQVc7UUFDaEIsS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxvQkFBb0IsRUFBRSxDQUFDO1FBQzVCLElBQUksQ0FBQyx5QkFBeUIsRUFBRSxDQUFDO0lBQ25DLENBQUM7SUFFUyxvQkFBb0I7UUFDNUIsSUFBSSxJQUFJLENBQUMsdUJBQXVCLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ2hELElBQUksQ0FBQyxPQUFzQyxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsdUJBQXVCLENBQUM7UUFDNUYsQ0FBQztJQUNILENBQUM7SUFFUyx1QkFBdUIsQ0FBQyxPQUE0QztRQUM1RSxJQUFJLE9BQU8sQ0FBQyxNQUFNLEtBQUssU0FBUyxFQUFFLENBQUM7WUFDakMsSUFBSSxDQUFDLHdCQUF3QixHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEtBQUssRUFBRSxFQUFFO2dCQUNoRixPQUFPLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUM5QixDQUFDLENBQUMsQ0FBQztRQUNMLENBQUM7SUFDSCxDQUFDO0lBRVMseUJBQXlCO1FBQ2pDLElBQUksSUFBSSxDQUFDLHdCQUF3QixFQUFFLENBQUM7WUFDbEMsSUFBSSxDQUFDLHdCQUF3QixDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQzlDLENBQUM7SUFDSCxDQUFDOzhHQTFEVSxhQUFhO2tHQUFiLGFBQWEsNkVBSGQsRUFBRTs7MkZBR0QsYUFBYTtrQkFMekIsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsZ0JBQWdCO29CQUMxQixRQUFRLEVBQUUsRUFBRTtpQkFDYiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgaW5qZWN0LCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgRXZlbnREaXNwYXRjaGVyIH0gZnJvbSAndGhyZWUnO1xuaW1wb3J0IHsgVGhPYmplY3QzRCB9IGZyb20gJy4vZ2VuZXJhdGVkL1RoT2JqZWN0M0QnO1xuaW1wb3J0IHsgVGhBbmltYXRpb25Mb29wU2VydmljZSB9IGZyb20gJy4vcmVuZGVyZXIvdGgtYW5pbWF0aW9uLWxvb3Auc2VydmljZSc7XG5pbXBvcnQgeyBUaENhbnZhcyB9IGZyb20gJy4vVGhDYW52YXMnO1xuaW1wb3J0IHsgVGhXcmFwcGVyQmFzZSB9IGZyb20gJy4vVGhXcmFwcGVyQmFzZSc7XG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0aC1hYnMtY29udHJvbCcsXG4gIHRlbXBsYXRlOiAnJyxcbn0pXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQGFuZ3VsYXItZXNsaW50L2NvbXBvbmVudC1jbGFzcy1zdWZmaXhcbmV4cG9ydCBjbGFzcyBUaENvbnRyb2xCYXNlPFQsIEFSR1M+IGV4dGVuZHMgVGhXcmFwcGVyQmFzZTxULCBBUkdTPiBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XG4gIHByb3RlY3RlZCBvcmlnRGlzcGF0Y2hFdmVudE1ldGhvZD86IEV2ZW50RGlzcGF0Y2hlclsnZGlzcGF0Y2hFdmVudCddO1xuICBwcm90ZWN0ZWQgYmVmb3JlUmVuZGVyU3Vic2NyaXB0aW9uPzogU3Vic2NyaXB0aW9uO1xuICBwcm90ZWN0ZWQgcmVuZGVyTG9vcCA9IGluamVjdChUaEFuaW1hdGlvbkxvb3BTZXJ2aWNlKTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgX2NhbWVyYTogVGhPYmplY3QzRDxhbnk+LFxuICAgIHByb3RlY3RlZCBjYW52YXM/OiBUaENhbnZhcyxcbiAgKSB7XG4gICAgc3VwZXIoKTtcbiAgfVxuXG4gIHB1YmxpYyBjcmVhdGVUaHJlZUluc3RhbmNlKGFyZ3M/OiBJdGVyYWJsZTxhbnk+KSB7XG4gICAgaWYgKCFhcmdzKSB7XG4gICAgICBhcmdzID0gW3RoaXMuX2NhbWVyYS5vYmpSZWYsIHRoaXMuY2FudmFzPy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnRdO1xuICAgIH1cbiAgICBjb25zdCBpbnN0YW5jZTogUGFydGlhbDxFdmVudERpc3BhdGNoZXI+ID0gc3VwZXIuY3JlYXRlVGhyZWVJbnN0YW5jZShhcmdzKTtcbiAgICB0aGlzLnBhdGNoRGlzcGF0Y2hFdmVudChpbnN0YW5jZSk7XG4gICAgdGhpcy5zdWJzY3JpYmVDb250cm9sVXBkYXRlcihpbnN0YW5jZSBhcyBhbnkpO1xuICAgIHJldHVybiBpbnN0YW5jZTtcbiAgfVxuXG4gIHByb3RlY3RlZCBwYXRjaERpc3BhdGNoRXZlbnQoZGlzcGF0Y2hlcjogUGFydGlhbDxFdmVudERpc3BhdGNoZXI+KSB7XG4gICAgaWYgKGRpc3BhdGNoZXIuZGlzcGF0Y2hFdmVudCkge1xuICAgICAgdGhpcy5vcmlnRGlzcGF0Y2hFdmVudE1ldGhvZCA9IGRpc3BhdGNoZXIuZGlzcGF0Y2hFdmVudDtcbiAgICAgIGNvbnN0IG9yaWdNZXRob2QgPSB0aGlzLm9yaWdEaXNwYXRjaEV2ZW50TWV0aG9kO1xuICAgICAgZGlzcGF0Y2hlci5kaXNwYXRjaEV2ZW50ID0gKGV2ZW50KSA9PiB7XG4gICAgICAgIG9yaWdNZXRob2QuY2FsbChkaXNwYXRjaGVyLCBldmVudCk7XG4gICAgICAgIC8vIHJlcXVlc3QgYW4gYW5pbWF0aW9uIGZyYW1lIGFmdGVyIGFuIGV2ZW50IHdhcyBlbWl0dGVkO1xuICAgICAgICB0aGlzLnJlbmRlckxvb3AucmVxdWVzdEFuaW1hdGlvbkZyYW1lKCk7XG4gICAgICB9O1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICBzdXBlci5uZ09uRGVzdHJveSgpO1xuICAgIHRoaXMudW5wYXRjaERpc3BhdGNoRXZlbnQoKTtcbiAgICB0aGlzLnVuc3Vic2NyaWJlQ29udHJvbFVwZGF0ZXIoKTtcbiAgfVxuXG4gIHByb3RlY3RlZCB1bnBhdGNoRGlzcGF0Y2hFdmVudCgpIHtcbiAgICBpZiAodGhpcy5vcmlnRGlzcGF0Y2hFdmVudE1ldGhvZCAmJiB0aGlzLl9vYmpSZWYpIHtcbiAgICAgICh0aGlzLl9vYmpSZWYgYXMgdW5rbm93biBhcyBFdmVudERpc3BhdGNoZXIpLmRpc3BhdGNoRXZlbnQgPSB0aGlzLm9yaWdEaXNwYXRjaEV2ZW50TWV0aG9kO1xuICAgIH1cbiAgfVxuXG4gIHByb3RlY3RlZCBzdWJzY3JpYmVDb250cm9sVXBkYXRlcihjb250cm9sOiB7IHVwZGF0ZTogKGRlbHRhOiBudW1iZXIpID0+IHZvaWQgfSkge1xuICAgIGlmIChjb250cm9sLnVwZGF0ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmJlZm9yZVJlbmRlclN1YnNjcmlwdGlvbiA9IHRoaXMucmVuZGVyTG9vcC5iZWZvcmVSZW5kZXIkLnN1YnNjcmliZSgoc3RhdGUpID0+IHtcbiAgICAgICAgY29udHJvbC51cGRhdGUoc3RhdGUuZGVsdGEpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgcHJvdGVjdGVkIHVuc3Vic2NyaWJlQ29udHJvbFVwZGF0ZXIoKSB7XG4gICAgaWYgKHRoaXMuYmVmb3JlUmVuZGVyU3Vic2NyaXB0aW9uKSB7XG4gICAgICB0aGlzLmJlZm9yZVJlbmRlclN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgIH1cbiAgfVxufVxuIl19