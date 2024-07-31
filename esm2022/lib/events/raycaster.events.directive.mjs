import { Directive, EventEmitter, Host, Output } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../generated/ThObject3D";
import * as i2 from "./raycaster.service";
export class RaycasterEventDirective {
    get onMouseEnter() {
        if (!this.mouseEnter) {
            this.mouseEnter = new EventEmitter();
        }
        return this.mouseEnter;
    }
    get onMouseExit() {
        if (!this.mouseExit) {
            this.mouseExit = new EventEmitter();
        }
        return this.mouseExit;
    }
    get onClick() {
        if (!this.click) {
            this.click = new EventEmitter();
        }
        return this.click;
    }
    get onPointerDown() {
        if (!this.pointerDown) {
            this.pointerDown = new EventEmitter();
        }
        return this.pointerDown;
    }
    get onPointerUp() {
        if (!this.pointerUp) {
            this.pointerUp = new EventEmitter();
        }
        return this.pointerUp;
    }
    constructor(host, raycasterService) {
        this.host = host;
        this.raycasterService = raycasterService;
        this.emitOnMouseEnter = this.emitOnMouseEnter.bind(this);
        this.emitOnMouseExit = this.emitOnMouseExit.bind(this);
        this.emitOnClick = this.emitOnClick.bind(this);
    }
    ngAfterViewInit() {
        this.subscribeEvents();
    }
    subscribeEvents() {
        this.raycasterService.addEventTarget(this);
    }
    unSubscribeEvents() {
        this.raycasterService.removeEventTarget(this);
    }
    emitOnMouseExit() {
        this.mouseExit?.emit({
            component: this.host,
            type: "mouseExit" /* RaycasterEvent.mouseExit */,
        });
    }
    emitOnMouseEnter(event) {
        // console.log('RaycasterGroupDirective.onMouseEnter', event);
        this.mouseEnter?.emit(event);
    }
    emitOnClick(event) {
        // console.log('onClick', event);
        this.click?.emit(event);
    }
    emitOnPointerDown(event) {
        // console.log('onClick', event);
        this.pointerDown?.emit(event);
    }
    emitOnPointerUp(event) {
        // console.log('onClick', event);
        this.pointerUp?.emit(event);
    }
    ngOnDestroy() {
        this.unSubscribeEvents();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: RaycasterEventDirective, deps: [{ token: i1.ThObject3D, host: true }, { token: i2.RaycasterService }], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "18.1.2", type: RaycasterEventDirective, selector: "[onClick], [onMouseEnter], [onMouseExit], [onPointerDown], [onPointerUp]", outputs: { onMouseEnter: "onMouseEnter", onMouseExit: "onMouseExit", onClick: "onClick", onPointerDown: "onPointerDown", onPointerUp: "onPointerUp" }, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: RaycasterEventDirective, decorators: [{
            type: Directive,
            args: [{ selector: '[onClick], [onMouseEnter], [onMouseExit], [onPointerDown], [onPointerUp]' }]
        }], ctorParameters: () => [{ type: i1.ThObject3D, decorators: [{
                    type: Host
                }] }, { type: i2.RaycasterService }], propDecorators: { onMouseEnter: [{
                type: Output
            }], onMouseExit: [{
                type: Output
            }], onClick: [{
                type: Output
            }], onPointerDown: [{
                type: Output
            }], onPointerUp: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmF5Y2FzdGVyLmV2ZW50cy5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtdGhyZWUvc3JjL2xpYi9ldmVudHMvcmF5Y2FzdGVyLmV2ZW50cy5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFpQixTQUFTLEVBQUUsWUFBWSxFQUFFLElBQUksRUFBYSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7QUFZaEcsTUFBTSxPQUFPLHVCQUF1QjtJQUNsQyxJQUFjLFlBQVk7UUFDeEIsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztZQUNyQixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksWUFBWSxFQUFzQixDQUFDO1FBQzNELENBQUM7UUFDRCxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUM7SUFDekIsQ0FBQztJQUdELElBQWMsV0FBVztRQUl2QixJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1lBQ3BCLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxZQUFZLEVBRzdCLENBQUM7UUFDUCxDQUFDO1FBQ0QsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQ3hCLENBQUM7SUFNRCxJQUFjLE9BQU87UUFDbkIsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUNoQixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksWUFBWSxFQUFzQixDQUFDO1FBQ3RELENBQUM7UUFDRCxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDcEIsQ0FBQztJQUdELElBQWMsYUFBYTtRQUN6QixJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1lBQ3RCLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxZQUFZLEVBQXNCLENBQUM7UUFDNUQsQ0FBQztRQUNELE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQztJQUMxQixDQUFDO0lBR0QsSUFBYyxXQUFXO1FBQ3ZCLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7WUFDcEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLFlBQVksRUFBc0IsQ0FBQztRQUMxRCxDQUFDO1FBQ0QsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQ3hCLENBQUM7SUFHRCxZQUMwQixJQUFzRCxFQUN0RSxnQkFBa0M7UUFEbEIsU0FBSSxHQUFKLElBQUksQ0FBa0Q7UUFDdEUscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUUxQyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN6RCxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3ZELElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDakQsQ0FBQztJQUVELGVBQWU7UUFDYixJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7SUFDekIsQ0FBQztJQUVPLGVBQWU7UUFDckIsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM3QyxDQUFDO0lBRU8saUJBQWlCO1FBQ3ZCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNoRCxDQUFDO0lBRU0sZUFBZTtRQUNwQixJQUFJLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQztZQUNuQixTQUFTLEVBQUUsSUFBSSxDQUFDLElBQUk7WUFDcEIsSUFBSSw0Q0FBMEI7U0FDL0IsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVNLGdCQUFnQixDQUFDLEtBQXlCO1FBQy9DLDhEQUE4RDtRQUM5RCxJQUFJLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMvQixDQUFDO0lBRU0sV0FBVyxDQUFDLEtBQXlCO1FBQzFDLGlDQUFpQztRQUNqQyxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMxQixDQUFDO0lBRU0saUJBQWlCLENBQUMsS0FBeUI7UUFDaEQsaUNBQWlDO1FBQ2pDLElBQUksQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2hDLENBQUM7SUFFTSxlQUFlLENBQUMsS0FBeUI7UUFDOUMsaUNBQWlDO1FBQ2pDLElBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzlCLENBQUM7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7SUFDM0IsQ0FBQzs4R0FwR1UsdUJBQXVCO2tHQUF2Qix1QkFBdUI7OzJGQUF2Qix1QkFBdUI7a0JBRG5DLFNBQVM7bUJBQUMsRUFBRSxRQUFRLEVBQUUsMEVBQTBFLEVBQUU7OzBCQW9EOUYsSUFBSTt3RUFsRE8sWUFBWTtzQkFBekIsTUFBTTtnQkFRTyxXQUFXO3NCQUF4QixNQUFNO2dCQWlCTyxPQUFPO3NCQUFwQixNQUFNO2dCQVFPLGFBQWE7c0JBQTFCLE1BQU07Z0JBUU8sV0FBVztzQkFBeEIsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFmdGVyVmlld0luaXQsIERpcmVjdGl2ZSwgRXZlbnRFbWl0dGVyLCBIb3N0LCBPbkRlc3Ryb3ksIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSW50ZXJzZWN0aW9uLCBPYmplY3QzREV2ZW50TWFwIH0gZnJvbSAndGhyZWUnO1xuaW1wb3J0IHsgVGhPYmplY3QzRCB9IGZyb20gJy4uL2dlbmVyYXRlZC9UaE9iamVjdDNEJztcblxuaW1wb3J0IHsgUmF5Y2FzdGVyRXZlbnQsIFJheWNhc3RlckV2ZW50TWFwLCBSYXljYXN0ZXJTZXJ2aWNlIH0gZnJvbSAnLi9yYXljYXN0ZXIuc2VydmljZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgUmF5Y2FzdGVyRW1pdEV2ZW50IGV4dGVuZHMgSW50ZXJzZWN0aW9uIHtcbiAgdHlwZTogUmF5Y2FzdGVyRXZlbnQ7XG4gIGNvbXBvbmVudDogVGhPYmplY3QzRDxSYXljYXN0ZXJFdmVudE1hcCAmIE9iamVjdDNERXZlbnRNYXA+O1xufVxuXG5ARGlyZWN0aXZlKHsgc2VsZWN0b3I6ICdbb25DbGlja10sIFtvbk1vdXNlRW50ZXJdLCBbb25Nb3VzZUV4aXRdLCBbb25Qb2ludGVyRG93bl0sIFtvblBvaW50ZXJVcF0nIH0pXG5leHBvcnQgY2xhc3MgUmF5Y2FzdGVyRXZlbnREaXJlY3RpdmUgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3kge1xuICBAT3V0cHV0KCkgZ2V0IG9uTW91c2VFbnRlcigpOiBFdmVudEVtaXR0ZXI8UmF5Y2FzdGVyRW1pdEV2ZW50PiB7XG4gICAgaWYgKCF0aGlzLm1vdXNlRW50ZXIpIHtcbiAgICAgIHRoaXMubW91c2VFbnRlciA9IG5ldyBFdmVudEVtaXR0ZXI8UmF5Y2FzdGVyRW1pdEV2ZW50PigpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5tb3VzZUVudGVyO1xuICB9XG4gIHByb3RlY3RlZCBtb3VzZUVudGVyPzogRXZlbnRFbWl0dGVyPFJheWNhc3RlckVtaXRFdmVudD47XG5cbiAgQE91dHB1dCgpIGdldCBvbk1vdXNlRXhpdCgpOiBFdmVudEVtaXR0ZXI8e1xuICAgIGNvbXBvbmVudDogVGhPYmplY3QzRDxPYmplY3QzREV2ZW50TWFwICYgUmF5Y2FzdGVyRXZlbnRNYXA+O1xuICAgIHR5cGU6IFJheWNhc3RlckV2ZW50O1xuICB9PiB7XG4gICAgaWYgKCF0aGlzLm1vdXNlRXhpdCkge1xuICAgICAgdGhpcy5tb3VzZUV4aXQgPSBuZXcgRXZlbnRFbWl0dGVyPHtcbiAgICAgICAgY29tcG9uZW50OiBUaE9iamVjdDNEPE9iamVjdDNERXZlbnRNYXAgJiBSYXljYXN0ZXJFdmVudE1hcD47XG4gICAgICAgIHR5cGU6IFJheWNhc3RlckV2ZW50O1xuICAgICAgfT4oKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMubW91c2VFeGl0O1xuICB9XG4gIHByb3RlY3RlZCBtb3VzZUV4aXQ/OiBFdmVudEVtaXR0ZXI8e1xuICAgIGNvbXBvbmVudDogVGhPYmplY3QzRDxPYmplY3QzREV2ZW50TWFwICYgUmF5Y2FzdGVyRXZlbnRNYXA+O1xuICAgIHR5cGU6IFJheWNhc3RlckV2ZW50O1xuICB9PjtcblxuICBAT3V0cHV0KCkgZ2V0IG9uQ2xpY2soKTogRXZlbnRFbWl0dGVyPFJheWNhc3RlckVtaXRFdmVudD4ge1xuICAgIGlmICghdGhpcy5jbGljaykge1xuICAgICAgdGhpcy5jbGljayA9IG5ldyBFdmVudEVtaXR0ZXI8UmF5Y2FzdGVyRW1pdEV2ZW50PigpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5jbGljaztcbiAgfVxuICBwcm90ZWN0ZWQgY2xpY2s/OiBFdmVudEVtaXR0ZXI8UmF5Y2FzdGVyRW1pdEV2ZW50PjtcblxuICBAT3V0cHV0KCkgZ2V0IG9uUG9pbnRlckRvd24oKTogRXZlbnRFbWl0dGVyPFJheWNhc3RlckVtaXRFdmVudD4ge1xuICAgIGlmICghdGhpcy5wb2ludGVyRG93bikge1xuICAgICAgdGhpcy5wb2ludGVyRG93biA9IG5ldyBFdmVudEVtaXR0ZXI8UmF5Y2FzdGVyRW1pdEV2ZW50PigpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5wb2ludGVyRG93bjtcbiAgfVxuICBwcm90ZWN0ZWQgcG9pbnRlckRvd24/OiBFdmVudEVtaXR0ZXI8UmF5Y2FzdGVyRW1pdEV2ZW50PjtcblxuICBAT3V0cHV0KCkgZ2V0IG9uUG9pbnRlclVwKCk6IEV2ZW50RW1pdHRlcjxSYXljYXN0ZXJFbWl0RXZlbnQ+IHtcbiAgICBpZiAoIXRoaXMucG9pbnRlclVwKSB7XG4gICAgICB0aGlzLnBvaW50ZXJVcCA9IG5ldyBFdmVudEVtaXR0ZXI8UmF5Y2FzdGVyRW1pdEV2ZW50PigpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5wb2ludGVyVXA7XG4gIH1cbiAgcHJvdGVjdGVkIHBvaW50ZXJVcD86IEV2ZW50RW1pdHRlcjxSYXljYXN0ZXJFbWl0RXZlbnQ+O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIEBIb3N0KCkgcHVibGljIHJlYWRvbmx5IGhvc3Q6IFRoT2JqZWN0M0Q8UmF5Y2FzdGVyRXZlbnRNYXAgJiBPYmplY3QzREV2ZW50TWFwPixcbiAgICBwcml2YXRlIHJheWNhc3RlclNlcnZpY2U6IFJheWNhc3RlclNlcnZpY2UsXG4gICkge1xuICAgIHRoaXMuZW1pdE9uTW91c2VFbnRlciA9IHRoaXMuZW1pdE9uTW91c2VFbnRlci5iaW5kKHRoaXMpO1xuICAgIHRoaXMuZW1pdE9uTW91c2VFeGl0ID0gdGhpcy5lbWl0T25Nb3VzZUV4aXQuYmluZCh0aGlzKTtcbiAgICB0aGlzLmVtaXRPbkNsaWNrID0gdGhpcy5lbWl0T25DbGljay5iaW5kKHRoaXMpO1xuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgIHRoaXMuc3Vic2NyaWJlRXZlbnRzKCk7XG4gIH1cblxuICBwcml2YXRlIHN1YnNjcmliZUV2ZW50cygpIHtcbiAgICB0aGlzLnJheWNhc3RlclNlcnZpY2UuYWRkRXZlbnRUYXJnZXQodGhpcyk7XG4gIH1cblxuICBwcml2YXRlIHVuU3Vic2NyaWJlRXZlbnRzKCkge1xuICAgIHRoaXMucmF5Y2FzdGVyU2VydmljZS5yZW1vdmVFdmVudFRhcmdldCh0aGlzKTtcbiAgfVxuXG4gIHB1YmxpYyBlbWl0T25Nb3VzZUV4aXQoKSB7XG4gICAgdGhpcy5tb3VzZUV4aXQ/LmVtaXQoe1xuICAgICAgY29tcG9uZW50OiB0aGlzLmhvc3QsXG4gICAgICB0eXBlOiBSYXljYXN0ZXJFdmVudC5tb3VzZUV4aXQsXG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgZW1pdE9uTW91c2VFbnRlcihldmVudDogUmF5Y2FzdGVyRW1pdEV2ZW50KSB7XG4gICAgLy8gY29uc29sZS5sb2coJ1JheWNhc3Rlckdyb3VwRGlyZWN0aXZlLm9uTW91c2VFbnRlcicsIGV2ZW50KTtcbiAgICB0aGlzLm1vdXNlRW50ZXI/LmVtaXQoZXZlbnQpO1xuICB9XG5cbiAgcHVibGljIGVtaXRPbkNsaWNrKGV2ZW50OiBSYXljYXN0ZXJFbWl0RXZlbnQpIHtcbiAgICAvLyBjb25zb2xlLmxvZygnb25DbGljaycsIGV2ZW50KTtcbiAgICB0aGlzLmNsaWNrPy5lbWl0KGV2ZW50KTtcbiAgfVxuXG4gIHB1YmxpYyBlbWl0T25Qb2ludGVyRG93bihldmVudDogUmF5Y2FzdGVyRW1pdEV2ZW50KSB7XG4gICAgLy8gY29uc29sZS5sb2coJ29uQ2xpY2snLCBldmVudCk7XG4gICAgdGhpcy5wb2ludGVyRG93bj8uZW1pdChldmVudCk7XG4gIH1cblxuICBwdWJsaWMgZW1pdE9uUG9pbnRlclVwKGV2ZW50OiBSYXljYXN0ZXJFbWl0RXZlbnQpIHtcbiAgICAvLyBjb25zb2xlLmxvZygnb25DbGljaycsIGV2ZW50KTtcbiAgICB0aGlzLnBvaW50ZXJVcD8uZW1pdChldmVudCk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLnVuU3Vic2NyaWJlRXZlbnRzKCk7XG4gIH1cbn1cbiJdfQ==