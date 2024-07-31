import { Directive, Input, Output } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../ThEngine.service";
import * as i2 from "./th-animation-loop.service";
export class ThRenderDirective {
    constructor(engineService, animationLoopService) {
        this.engineService = engineService;
        this.animationLoopService = animationLoopService;
    }
    get beforeRender() {
        return this.engineService.beforeRender$;
    }
    get onResize() {
        return this.engineService.resize$;
    }
    set renderOnDemand(onDemand) {
        if (onDemand) {
            this.animationLoopService.stop();
        }
        else {
            this.animationLoopService.start();
        }
    }
    get renderOnDemand() {
        return !this.animationLoopService.isActive();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThRenderDirective, deps: [{ token: i1.ThEngineService }, { token: i2.ThAnimationLoopService }], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "18.1.2", type: ThRenderDirective, selector: "[beforeRender], [onResize], [renderOnDemand]", inputs: { renderOnDemand: "renderOnDemand" }, outputs: { beforeRender: "beforeRender", onResize: "onResize" }, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThRenderDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[beforeRender], [onResize], [renderOnDemand]'
                }]
        }], ctorParameters: () => [{ type: i1.ThEngineService }, { type: i2.ThAnimationLoopService }], propDecorators: { beforeRender: [{
                type: Output
            }], onResize: [{
                type: Output
            }], renderOnDemand: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGgtcmVuZGVyLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC10aHJlZS9zcmMvbGliL3JlbmRlcmVyL3RoLXJlbmRlci5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7O0FBT3pELE1BQU0sT0FBTyxpQkFBaUI7SUFDNUIsWUFBb0IsYUFBOEIsRUFBVSxvQkFBNEM7UUFBcEYsa0JBQWEsR0FBYixhQUFhLENBQWlCO1FBQVUseUJBQW9CLEdBQXBCLG9CQUFvQixDQUF3QjtJQUFHLENBQUM7SUFFNUcsSUFDVyxZQUFZO1FBQ3JCLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUM7SUFDMUMsQ0FBQztJQUVELElBQ1csUUFBUTtRQUNqQixPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDO0lBQ3BDLENBQUM7SUFFRCxJQUNXLGNBQWMsQ0FBQyxRQUFpQjtRQUN6QyxJQUFJLFFBQVEsRUFBRSxDQUFDO1lBQ2IsSUFBSSxDQUFDLG9CQUFvQixDQUFDLElBQUksRUFBRSxDQUFDO1FBQ25DLENBQUM7YUFBTSxDQUFDO1lBQ04sSUFBSSxDQUFDLG9CQUFvQixDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ3BDLENBQUM7SUFDSCxDQUFDO0lBRUQsSUFBVyxjQUFjO1FBQ3ZCLE9BQU8sQ0FBQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDL0MsQ0FBQzs4R0F4QlUsaUJBQWlCO2tHQUFqQixpQkFBaUI7OzJGQUFqQixpQkFBaUI7a0JBSDdCLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLDhDQUE4QztpQkFDekQ7eUhBS1ksWUFBWTtzQkFEdEIsTUFBTTtnQkFNSSxRQUFRO3NCQURsQixNQUFNO2dCQU1JLGNBQWM7c0JBRHhCLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIElucHV0LCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFRoRW5naW5lU2VydmljZSB9IGZyb20gJy4uL1RoRW5naW5lLnNlcnZpY2UnO1xuaW1wb3J0IHsgVGhBbmltYXRpb25Mb29wU2VydmljZSB9IGZyb20gJy4vdGgtYW5pbWF0aW9uLWxvb3Auc2VydmljZSc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tiZWZvcmVSZW5kZXJdLCBbb25SZXNpemVdLCBbcmVuZGVyT25EZW1hbmRdJ1xufSlcbmV4cG9ydCBjbGFzcyBUaFJlbmRlckRpcmVjdGl2ZSB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZW5naW5lU2VydmljZTogVGhFbmdpbmVTZXJ2aWNlLCBwcml2YXRlIGFuaW1hdGlvbkxvb3BTZXJ2aWNlOiBUaEFuaW1hdGlvbkxvb3BTZXJ2aWNlKSB7fVxuXG4gIEBPdXRwdXQoKVxuICBwdWJsaWMgZ2V0IGJlZm9yZVJlbmRlcigpIHtcbiAgICByZXR1cm4gdGhpcy5lbmdpbmVTZXJ2aWNlLmJlZm9yZVJlbmRlciQ7XG4gIH1cblxuICBAT3V0cHV0KClcbiAgcHVibGljIGdldCBvblJlc2l6ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5lbmdpbmVTZXJ2aWNlLnJlc2l6ZSQ7XG4gIH1cblxuICBASW5wdXQoKVxuICBwdWJsaWMgc2V0IHJlbmRlck9uRGVtYW5kKG9uRGVtYW5kOiBib29sZWFuKSB7XG4gICAgaWYgKG9uRGVtYW5kKSB7XG4gICAgICB0aGlzLmFuaW1hdGlvbkxvb3BTZXJ2aWNlLnN0b3AoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5hbmltYXRpb25Mb29wU2VydmljZS5zdGFydCgpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBnZXQgcmVuZGVyT25EZW1hbmQoKSB7XG4gICAgcmV0dXJuICF0aGlzLmFuaW1hdGlvbkxvb3BTZXJ2aWNlLmlzQWN0aXZlKCk7XG4gIH1cbn1cbiJdfQ==