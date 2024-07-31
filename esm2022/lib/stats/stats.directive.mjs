import { Directive, Input } from '@angular/core';
import Stats from 'three/examples/jsm/libs/stats.module.js';
import * as i0 from "@angular/core";
import * as i1 from "../ThEngine.service";
import * as i2 from "../ThCanvas";
export class StatsDirective {
    constructor(engineService, canvas) {
        this.engineService = engineService;
        this.canvas = canvas;
        this.stats = new Stats();
    }
    ngOnDestroy() {
        if (this.renderSubscription) {
            this.renderSubscription.unsubscribe();
        }
    }
    ngOnInit() {
        if (!this.canvas.elementRef) {
            throw new Error('No canvas present');
        }
        const parentElement = this.canvas.elementRef.nativeElement;
        if (parentElement) {
            parentElement.style.position = 'relative';
            this.stats.dom.style.position = 'absolute';
            this.stats.showPanel(0);
            parentElement.appendChild(this.stats.dom);
            this.renderSubscription = this.engineService.beforeRender$.subscribe(() => {
                this.stats.update();
            });
        }
    }
    set thStats(enabled) {
        if (!enabled) {
            this.stats.dom.style.visibility = 'hidden';
        }
        else {
            this.stats.dom.style.visibility = 'visible';
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: StatsDirective, deps: [{ token: i1.ThEngineService }, { token: i2.ThCanvas }], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "18.1.2", type: StatsDirective, selector: "[thStats]", inputs: { thStats: "thStats" }, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: StatsDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[thStats]',
                }]
        }], ctorParameters: () => [{ type: i1.ThEngineService }, { type: i2.ThCanvas }], propDecorators: { thStats: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdHMuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LXRocmVlL3NyYy9saWIvc3RhdHMvc3RhdHMuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFxQixNQUFNLGVBQWUsQ0FBQztBQUVwRSxPQUFPLEtBQUssTUFBTSx5Q0FBeUMsQ0FBQzs7OztBQU81RCxNQUFNLE9BQU8sY0FBYztJQUd6QixZQUNVLGFBQThCLEVBQzlCLE1BQWdCO1FBRGhCLGtCQUFhLEdBQWIsYUFBYSxDQUFpQjtRQUM5QixXQUFNLEdBQU4sTUFBTSxDQUFVO1FBRXhCLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxLQUFLLEVBQUUsQ0FBQztJQUMzQixDQUFDO0lBQ0QsV0FBVztRQUNULElBQUksSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7WUFDNUIsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ3hDLENBQUM7SUFDSCxDQUFDO0lBQ0QsUUFBUTtRQUNOLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsRUFBRSxDQUFDO1lBQzVCLE1BQU0sSUFBSSxLQUFLLENBQUMsbUJBQW1CLENBQUMsQ0FBQztRQUN2QyxDQUFDO1FBRUQsTUFBTSxhQUFhLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDO1FBQzNELElBQUksYUFBYSxFQUFFLENBQUM7WUFDbEIsYUFBYSxDQUFDLEtBQUssQ0FBQyxRQUFRLEdBQUcsVUFBVSxDQUFDO1lBQzFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxRQUFRLEdBQUcsVUFBVSxDQUFDO1lBQzNDLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3hCLGFBQWEsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUMxQyxJQUFJLENBQUMsa0JBQWtCLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLEdBQUcsRUFBRTtnQkFDeEUsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQztZQUN0QixDQUFDLENBQUMsQ0FBQztRQUNMLENBQUM7SUFDSCxDQUFDO0lBRUQsSUFDVyxPQUFPLENBQUMsT0FBZ0I7UUFDakMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ2IsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLFVBQVUsR0FBRyxRQUFRLENBQUM7UUFDN0MsQ0FBQzthQUFNLENBQUM7WUFDTixJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsVUFBVSxHQUFHLFNBQVMsQ0FBQztRQUM5QyxDQUFDO0lBQ0gsQ0FBQzs4R0F0Q1UsY0FBYztrR0FBZCxjQUFjOzsyRkFBZCxjQUFjO2tCQUgxQixTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxXQUFXO2lCQUN0QjsyR0FpQ1ksT0FBTztzQkFEakIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgSW5wdXQsIE9uRGVzdHJveSwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBUaEVuZ2luZVNlcnZpY2UgfSBmcm9tICcuLi9UaEVuZ2luZS5zZXJ2aWNlJztcbmltcG9ydCBTdGF0cyBmcm9tICd0aHJlZS9leGFtcGxlcy9qc20vbGlicy9zdGF0cy5tb2R1bGUuanMnO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBUaENhbnZhcyB9IGZyb20gJy4uL1RoQ2FudmFzJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW3RoU3RhdHNdJyxcbn0pXG5leHBvcnQgY2xhc3MgU3RhdHNEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIHByaXZhdGUgc3RhdHM6IFN0YXRzO1xuICBwcml2YXRlIHJlbmRlclN1YnNjcmlwdGlvbj86IFN1YnNjcmlwdGlvbjtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBlbmdpbmVTZXJ2aWNlOiBUaEVuZ2luZVNlcnZpY2UsXG4gICAgcHJpdmF0ZSBjYW52YXM6IFRoQ2FudmFzLFxuICApIHtcbiAgICB0aGlzLnN0YXRzID0gbmV3IFN0YXRzKCk7XG4gIH1cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgaWYgKHRoaXMucmVuZGVyU3Vic2NyaXB0aW9uKSB7XG4gICAgICB0aGlzLnJlbmRlclN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgIH1cbiAgfVxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMuY2FudmFzLmVsZW1lbnRSZWYpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignTm8gY2FudmFzIHByZXNlbnQnKTtcbiAgICB9XG5cbiAgICBjb25zdCBwYXJlbnRFbGVtZW50ID0gdGhpcy5jYW52YXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50O1xuICAgIGlmIChwYXJlbnRFbGVtZW50KSB7XG4gICAgICBwYXJlbnRFbGVtZW50LnN0eWxlLnBvc2l0aW9uID0gJ3JlbGF0aXZlJztcbiAgICAgIHRoaXMuc3RhdHMuZG9tLnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcbiAgICAgIHRoaXMuc3RhdHMuc2hvd1BhbmVsKDApO1xuICAgICAgcGFyZW50RWxlbWVudC5hcHBlbmRDaGlsZCh0aGlzLnN0YXRzLmRvbSk7XG4gICAgICB0aGlzLnJlbmRlclN1YnNjcmlwdGlvbiA9IHRoaXMuZW5naW5lU2VydmljZS5iZWZvcmVSZW5kZXIkLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgIHRoaXMuc3RhdHMudXBkYXRlKCk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBASW5wdXQoKVxuICBwdWJsaWMgc2V0IHRoU3RhdHMoZW5hYmxlZDogYm9vbGVhbikge1xuICAgIGlmICghZW5hYmxlZCkge1xuICAgICAgdGhpcy5zdGF0cy5kb20uc3R5bGUudmlzaWJpbGl0eSA9ICdoaWRkZW4nO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnN0YXRzLmRvbS5zdHlsZS52aXNpYmlsaXR5ID0gJ3Zpc2libGUnO1xuICAgIH1cbiAgfVxufVxuIl19