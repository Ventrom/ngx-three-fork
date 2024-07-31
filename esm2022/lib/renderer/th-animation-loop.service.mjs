import { Injectable } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "../ThEngine.service";
export class ThAnimationLoopService {
    constructor(engineService, ngZone) {
        this.engineService = engineService;
        this.ngZone = ngZone;
        this.active = true;
        this.destroyed$ = new Subject();
        this.beforeRender$ = this.engineService.beforeRender$;
        this.engineService.resize$.pipe(takeUntil(this.destroyed$)).subscribe(() => this.requestAnimationFrame());
    }
    ngOnDestroy() {
        this.stop();
        this.destroyed$.next();
        this.destroyed$.complete();
    }
    /**
     * start the loop
     */
    start() {
        if (!this.active) {
            this.active = true;
            this.requestAnimationFrame();
        }
    }
    /**
     * stop the loop
     */
    stop() {
        this.active = false;
        if (this.frameId !== undefined) {
            cancelAnimationFrame(this.frameId);
            this.frameId = undefined;
        }
    }
    /**
     *
     * @returns true if the render loop is active
     */
    isActive() {
        return this.active;
    }
    /**
     * trigger an animation frame request
     */
    requestAnimationFrame() {
        if (this.frameId === undefined) {
            this.ngZone.runOutsideAngular(() => (this.frameId = requestAnimationFrame(() => {
                this.frameId = undefined;
                this.engineService.render();
                if (this.active) {
                    this.requestAnimationFrame();
                }
            })));
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThAnimationLoopService, deps: [{ token: i1.ThEngineService }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThAnimationLoopService }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThAnimationLoopService, decorators: [{
            type: Injectable
        }], ctorParameters: () => [{ type: i1.ThEngineService }, { type: i0.NgZone }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGgtYW5pbWF0aW9uLWxvb3Auc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC10aHJlZS9zcmMvbGliL3JlbmRlcmVyL3RoLWFuaW1hdGlvbi1sb29wLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBcUIsTUFBTSxlQUFlLENBQUM7QUFDOUQsT0FBTyxFQUFjLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxNQUFNLENBQUM7OztBQUl0RCxNQUFNLE9BQU8sc0JBQXNCO0lBT2pDLFlBQW9CLGFBQThCLEVBQVUsTUFBYztRQUF0RCxrQkFBYSxHQUFiLGFBQWEsQ0FBaUI7UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBTmxFLFdBQU0sR0FBRyxJQUFJLENBQUM7UUFJZCxlQUFVLEdBQUcsSUFBSSxPQUFPLEVBQVEsQ0FBQztRQUd2QyxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDO1FBQ3RELElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxxQkFBcUIsRUFBRSxDQUFDLENBQUM7SUFDNUcsQ0FBQztJQUNELFdBQVc7UUFDVCxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDWixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDN0IsQ0FBQztJQUVEOztPQUVHO0lBQ0ksS0FBSztRQUNWLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7WUFDakIsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7WUFDbkIsSUFBSSxDQUFDLHFCQUFxQixFQUFFLENBQUM7UUFDL0IsQ0FBQztJQUNILENBQUM7SUFFRDs7T0FFRztJQUNJLElBQUk7UUFDVCxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUNwQixJQUFJLElBQUksQ0FBQyxPQUFPLEtBQUssU0FBUyxFQUFFLENBQUM7WUFDL0Isb0JBQW9CLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQ25DLElBQUksQ0FBQyxPQUFPLEdBQUcsU0FBUyxDQUFDO1FBQzNCLENBQUM7SUFDSCxDQUFDO0lBRUQ7OztPQUdHO0lBQ0ksUUFBUTtRQUNiLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUNyQixDQUFDO0lBRUQ7O09BRUc7SUFDSSxxQkFBcUI7UUFDMUIsSUFBSSxJQUFJLENBQUMsT0FBTyxLQUFLLFNBQVMsRUFBRSxDQUFDO1lBQy9CLElBQUksQ0FBQyxNQUFNLENBQUMsaUJBQWlCLENBQzNCLEdBQUcsRUFBRSxDQUNILENBQUMsSUFBSSxDQUFDLE9BQU8sR0FBRyxxQkFBcUIsQ0FBQyxHQUFHLEVBQUU7Z0JBQ3pDLElBQUksQ0FBQyxPQUFPLEdBQUcsU0FBUyxDQUFDO2dCQUN6QixJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sRUFBRSxDQUFDO2dCQUM1QixJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztvQkFDaEIsSUFBSSxDQUFDLHFCQUFxQixFQUFFLENBQUM7Z0JBQy9CLENBQUM7WUFDSCxDQUFDLENBQUMsQ0FBQyxDQUNOLENBQUM7UUFDSixDQUFDO0lBQ0gsQ0FBQzs4R0E5RFUsc0JBQXNCO2tIQUF0QixzQkFBc0I7OzJGQUF0QixzQkFBc0I7a0JBRGxDLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBOZ1pvbmUsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgU3ViamVjdCwgdGFrZVVudGlsIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBSZW5kZXJTdGF0ZSwgVGhFbmdpbmVTZXJ2aWNlIH0gZnJvbSAnLi4vVGhFbmdpbmUuc2VydmljZSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBUaEFuaW1hdGlvbkxvb3BTZXJ2aWNlIGltcGxlbWVudHMgT25EZXN0cm95IHtcbiAgcHJpdmF0ZSBhY3RpdmUgPSB0cnVlO1xuICBwcml2YXRlIGZyYW1lSWQ/OiBudW1iZXI7XG5cbiAgcHVibGljIHJlYWRvbmx5IGJlZm9yZVJlbmRlciQ6IE9ic2VydmFibGU8UmVuZGVyU3RhdGU+O1xuICBwcml2YXRlIGRlc3Ryb3llZCQgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZW5naW5lU2VydmljZTogVGhFbmdpbmVTZXJ2aWNlLCBwcml2YXRlIG5nWm9uZTogTmdab25lKSB7XG4gICAgdGhpcy5iZWZvcmVSZW5kZXIkID0gdGhpcy5lbmdpbmVTZXJ2aWNlLmJlZm9yZVJlbmRlciQ7XG4gICAgdGhpcy5lbmdpbmVTZXJ2aWNlLnJlc2l6ZSQucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95ZWQkKSkuc3Vic2NyaWJlKCgpID0+IHRoaXMucmVxdWVzdEFuaW1hdGlvbkZyYW1lKCkpO1xuICB9XG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuc3RvcCgpO1xuICAgIHRoaXMuZGVzdHJveWVkJC5uZXh0KCk7XG4gICAgdGhpcy5kZXN0cm95ZWQkLmNvbXBsZXRlKCk7XG4gIH1cblxuICAvKipcbiAgICogc3RhcnQgdGhlIGxvb3BcbiAgICovXG4gIHB1YmxpYyBzdGFydCgpIHtcbiAgICBpZiAoIXRoaXMuYWN0aXZlKSB7XG4gICAgICB0aGlzLmFjdGl2ZSA9IHRydWU7XG4gICAgICB0aGlzLnJlcXVlc3RBbmltYXRpb25GcmFtZSgpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBzdG9wIHRoZSBsb29wXG4gICAqL1xuICBwdWJsaWMgc3RvcCgpIHtcbiAgICB0aGlzLmFjdGl2ZSA9IGZhbHNlO1xuICAgIGlmICh0aGlzLmZyYW1lSWQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUodGhpcy5mcmFtZUlkKTtcbiAgICAgIHRoaXMuZnJhbWVJZCA9IHVuZGVmaW5lZDtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICpcbiAgICogQHJldHVybnMgdHJ1ZSBpZiB0aGUgcmVuZGVyIGxvb3AgaXMgYWN0aXZlXG4gICAqL1xuICBwdWJsaWMgaXNBY3RpdmUoKSB7XG4gICAgcmV0dXJuIHRoaXMuYWN0aXZlO1xuICB9XG5cbiAgLyoqXG4gICAqIHRyaWdnZXIgYW4gYW5pbWF0aW9uIGZyYW1lIHJlcXVlc3RcbiAgICovXG4gIHB1YmxpYyByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKSB7XG4gICAgaWYgKHRoaXMuZnJhbWVJZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLm5nWm9uZS5ydW5PdXRzaWRlQW5ndWxhcihcbiAgICAgICAgKCkgPT5cbiAgICAgICAgICAodGhpcy5mcmFtZUlkID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuZnJhbWVJZCA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIHRoaXMuZW5naW5lU2VydmljZS5yZW5kZXIoKTtcbiAgICAgICAgICAgIGlmICh0aGlzLmFjdGl2ZSkge1xuICAgICAgICAgICAgICB0aGlzLnJlcXVlc3RBbmltYXRpb25GcmFtZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pKVxuICAgICAgKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==