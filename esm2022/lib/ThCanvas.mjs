import { ChangeDetectionStrategy, Component, ContentChildren, ElementRef, forwardRef, inject, Inject, Input, isDevMode, } from '@angular/core';
import { Raycaster, WebGLRenderer } from 'three';
import { RAYCASTER, RaycasterService } from './events/raycaster.service';
import { ThObject3D } from './generated/ThObject3D';
import { ThAnimationLoopService } from './renderer/th-animation-loop.service';
import { ThEngineService } from './ThEngine.service';
import { HOST_ELEMENT, ThView } from './ThView';
import { provideWebGLRenderer, RENDERER_PROVIDERS, WEBGL_RENDERER } from './renderer/renderer-providers';
import * as i0 from "@angular/core";
import * as i1 from "./ThEngine.service";
import * as i2 from "./renderer/th-animation-loop.service";
import * as i3 from "@angular/common";
import * as i4 from "./events/raycaster.service";
function provideDefaultRenderer() {
    return [
        {
            provide: RENDERER_PROVIDERS,
            useFactory: () => {
                const renderers = inject(RENDERER_PROVIDERS, { skipSelf: true, optional: true });
                if (renderers) {
                    return renderers;
                }
                return [provideWebGLRenderer()[0].useValue];
            },
        },
        {
            provide: WEBGL_RENDERER,
            useFactory: () => {
                const webGlRenderer = inject(WEBGL_RENDERER, { skipSelf: true, optional: true });
                if (webGlRenderer) {
                    return webGlRenderer;
                }
                const renderers = inject(RENDERER_PROVIDERS);
                const renderer = renderers[0];
                if (renderers.length === 1 && renderer instanceof WebGLRenderer) {
                    return renderer;
                }
                return undefined;
            },
        },
    ];
}
// eslint-disable-next-line @angular-eslint/component-class-suffix
export class ThCanvas extends ThView {
    static { this.instanceCnt = 0; }
    get obj() {
        return this;
    }
    set views(viewList) {
        this.setViews(viewList);
    }
    get rendererCanvas() {
        return this.engServ.canvas;
    }
    constructor(engServ, animationLoop, raycaster, elementRef) {
        super(engServ, raycaster);
        this.engServ = engServ;
        this.animationLoop = animationLoop;
        this.raycaster = raycaster;
        this.elementRef = elementRef;
        this.isDevMode = isDevMode;
        this.nid = ThCanvas.instanceCnt++;
        /**
         * if true does not use the ThCanvas as view
         * this is esepcially usefull if you have multiple views
         * and want to iterate over all of them with *ngFor
         * use statically (before ngOnInit is triggered)
         */
        this.disableDefaultView = false;
        this.engServ.renderers.forEach((renderer) => this.elementRef.nativeElement.appendChild(renderer.domElement));
    }
    ngAfterContentChecked() {
        this.animationLoop.requestAnimationFrame();
    }
    ngAfterViewInit() {
        this.animationLoop.requestAnimationFrame();
    }
    ngOnInit() {
        this.engServ.resize();
        super.ngOnInit();
        this.setViews();
    }
    setViews(viewList) {
        this.engServ.setViews([]);
        if (!this.disableDefaultView) {
            this.engServ.addView(this);
        }
        viewList?.forEach((v) => this.engServ.addView(v));
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThCanvas, deps: [{ token: i1.ThEngineService }, { token: i2.ThAnimationLoopService }, { token: forwardRef(() => RaycasterService) }, { token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.1.2", type: ThCanvas, selector: "th-canvas", inputs: { disableDefaultView: "disableDefaultView" }, providers: [
            { provide: HOST_ELEMENT, useFactory: () => inject(ElementRef) },
            { provide: ThObject3D, useExisting: forwardRef(() => ThCanvas) },
            ThEngineService,
            ThAnimationLoopService,
            { provide: RAYCASTER, useValue: new Raycaster() },
            forwardRef(() => RaycasterService),
            { provide: ThView, useExisting: forwardRef(() => ThCanvas) },
            // default provider for webgl renderer
            provideDefaultRenderer(),
        ], queries: [{ propertyName: "views", predicate: ThView }], usesInheritance: true, ngImport: i0, template: '<ng-content *ngIf="isDevMode()" ></ng-content>', isInline: true, styles: [":host{display:flex;flex:auto;line-height:0;height:100%}canvas{flex:auto;outline:none;width:100%;height:100%}\n"], dependencies: [{ kind: "directive", type: i3.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThCanvas, decorators: [{
            type: Component,
            args: [{ selector: 'th-canvas', template: '<ng-content *ngIf="isDevMode()" ></ng-content>', changeDetection: ChangeDetectionStrategy.OnPush, providers: [
                        { provide: HOST_ELEMENT, useFactory: () => inject(ElementRef) },
                        { provide: ThObject3D, useExisting: forwardRef(() => ThCanvas) },
                        ThEngineService,
                        ThAnimationLoopService,
                        { provide: RAYCASTER, useValue: new Raycaster() },
                        forwardRef(() => RaycasterService),
                        { provide: ThView, useExisting: forwardRef(() => ThCanvas) },
                        // default provider for webgl renderer
                        provideDefaultRenderer(),
                    ], styles: [":host{display:flex;flex:auto;line-height:0;height:100%}canvas{flex:auto;outline:none;width:100%;height:100%}\n"] }]
        }], ctorParameters: () => [{ type: i1.ThEngineService }, { type: i2.ThAnimationLoopService }, { type: i4.RaycasterService, decorators: [{
                    type: Inject,
                    args: [forwardRef(() => RaycasterService)]
                }] }, { type: i0.ElementRef }], propDecorators: { disableDefaultView: [{
                type: Input
            }], views: [{
                type: ContentChildren,
                args: [ThView]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGhDYW52YXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtdGhyZWUvc3JjL2xpYi9UaENhbnZhcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBR0wsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxlQUFlLEVBQ2YsVUFBVSxFQUNWLFVBQVUsRUFDVixNQUFNLEVBQ04sTUFBTSxFQUNOLEtBQUssRUFDTCxTQUFTLEdBSVYsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFNBQVMsRUFBRSxhQUFhLEVBQUUsTUFBTSxPQUFPLENBQUM7QUFDakQsT0FBTyxFQUFFLFNBQVMsRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQ3pFLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRCxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUM5RSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDckQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsTUFBTSxVQUFVLENBQUM7QUFDaEQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLGtCQUFrQixFQUFFLGNBQWMsRUFBRSxNQUFNLCtCQUErQixDQUFDOzs7Ozs7QUFFekcsU0FBUyxzQkFBc0I7SUFDN0IsT0FBTztRQUNMO1lBQ0UsT0FBTyxFQUFFLGtCQUFrQjtZQUMzQixVQUFVLEVBQUUsR0FBRyxFQUFFO2dCQUNmLE1BQU0sU0FBUyxHQUFHLE1BQU0sQ0FBQyxrQkFBa0IsRUFBRSxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7Z0JBQ2pGLElBQUksU0FBUyxFQUFFLENBQUM7b0JBQ2QsT0FBTyxTQUFTLENBQUM7Z0JBQ25CLENBQUM7Z0JBQ0QsT0FBTyxDQUFFLG9CQUFvQixFQUFFLENBQUMsQ0FBQyxD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QyxHQUFHLEVBQUUsU0FBUyxDQUFDLEVBQUU7d0JBRTVELHNDQUFzQzt3QkFDdEMsc0JBQXNCLEVBQUU7cUJBQ3pCOzswQkFpQ0UsTUFBTTsyQkFBQyxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsZ0JBQWdCLENBQUM7a0VBbEJyQyxrQkFBa0I7c0JBRHhCLEtBQUs7Z0JBUUssS0FBSztzQkFEZixlQUFlO3VCQUFDLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBBZnRlckNvbnRlbnRDaGVja2VkLFxuICBBZnRlclZpZXdJbml0LFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ29tcG9uZW50LFxuICBDb250ZW50Q2hpbGRyZW4sXG4gIEVsZW1lbnRSZWYsXG4gIGZvcndhcmRSZWYsXG4gIGluamVjdCxcbiAgSW5qZWN0LFxuICBJbnB1dCxcbiAgaXNEZXZNb2RlLFxuICBPbkluaXQsXG4gIFF1ZXJ5TGlzdCxcbiAgU3RhdGljUHJvdmlkZXIsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUmF5Y2FzdGVyLCBXZWJHTFJlbmRlcmVyIH0gZnJvbSAndGhyZWUnO1xuaW1wb3J0IHsgUkFZQ0FTVEVSLCBSYXljYXN0ZXJTZXJ2aWNlIH0gZnJvbSAnLi9ldmVudHMvcmF5Y2FzdGVyLnNlcnZpY2UnO1xuaW1wb3J0IHsgVGhPYmplY3QzRCB9IGZyb20gJy4vZ2VuZXJhdGVkL1RoT2JqZWN0M0QnO1xuaW1wb3J0IHsgVGhBbmltYXRpb25Mb29wU2VydmljZSB9IGZyb20gJy4vcmVuZGVyZXIvdGgtYW5pbWF0aW9uLWxvb3Auc2VydmljZSc7XG5pbXBvcnQgeyBUaEVuZ2luZVNlcnZpY2UgfSBmcm9tICcuL1RoRW5naW5lLnNlcnZpY2UnO1xuaW1wb3J0IHsgSE9TVF9FTEVNRU5ULCBUaFZpZXcgfSBmcm9tICcuL1RoVmlldyc7XG5pbXBvcnQgeyBwcm92aWRlV2ViR0xSZW5kZXJlciwgUkVOREVSRVJfUFJPVklERVJTLCBXRUJHTF9SRU5ERVJFUiB9IGZyb20gJy4vcmVuZGVyZXIvcmVuZGVyZXItcHJvdmlkZXJzJztcblxuZnVuY3Rpb24gcHJvdmlkZURlZmF1bHRSZW5kZXJlcigpOiBTdGF0aWNQcm92aWRlcltdIHtcbiAgcmV0dXJuIFtcbiAgICB7XG4gICAgICBwcm92aWRlOiBSRU5ERVJFUl9QUk9WSURFUlMsXG4gICAgICB1c2VGYWN0b3J5OiAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHJlbmRlcmVycyA9IGluamVjdChSRU5ERVJFUl9QUk9WSURFUlMsIHsgc2tpcFNlbGY6IHRydWUsIG9wdGlvbmFsOiB0cnVlIH0pO1xuICAgICAgICBpZiAocmVuZGVyZXJzKSB7XG4gICAgICAgICAgcmV0dXJuIHJlbmRlcmVycztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gWyhwcm92aWRlV2ViR0xSZW5kZXJlcigpWzBdIGFzIGFueSkudXNlVmFsdWVdO1xuICAgICAgfSxcbiAgICB9LFxuICAgIHtcbiAgICAgIHByb3ZpZGU6IFdFQkdMX1JFTkRFUkVSLFxuICAgICAgdXNlRmFjdG9yeTogKCkgPT4ge1xuICAgICAgICBjb25zdCB3ZWJHbFJlbmRlcmVyID0gaW5qZWN0KFdFQkdMX1JFTkRFUkVSLCB7IHNraXBTZWxmOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSB9KTtcbiAgICAgICAgaWYgKHdlYkdsUmVuZGVyZXIpIHtcbiAgICAgICAgICByZXR1cm4gd2ViR2xSZW5kZXJlcjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCByZW5kZXJlcnMgPSBpbmplY3QoUkVOREVSRVJfUFJPVklERVJTKTtcbiAgICAgICAgY29uc3QgcmVuZGVyZXIgPSByZW5kZXJlcnNbMF07XG4gICAgICAgIGlmIChyZW5kZXJlcnMubGVuZ3RoID09PSAxICYmIHJlbmRlcmVyIGluc3RhbmNlb2YgV2ViR0xSZW5kZXJlcikge1xuICAgICAgICAgIHJldHVybiByZW5kZXJlcjtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICB9LFxuICAgIH0sXG4gIF07XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3RoLWNhbnZhcycsXG4gIHN0eWxlVXJsczogWycuL1RoQ2FudmFzLnNjc3MnXSxcbiAgdGVtcGxhdGU6ICc8bmctY29udGVudCAqbmdJZj1cImlzRGV2TW9kZSgpXCIgPjwvbmctY29udGVudD4nLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgcHJvdmlkZXJzOiBbXG4gICAgeyBwcm92aWRlOiBIT1NUX0VMRU1FTlQsIHVzZUZhY3Rvcnk6ICgpID0+IGluamVjdChFbGVtZW50UmVmKSB9LFxuICAgIHsgcHJvdmlkZTogVGhPYmplY3QzRCwgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gVGhDYW52YXMpIH0sXG4gICAgVGhFbmdpbmVTZXJ2aWNlLFxuICAgIFRoQW5pbWF0aW9uTG9vcFNlcnZpY2UsXG4gICAgeyBwcm92aWRlOiBSQVlDQVNURVIsIHVzZVZhbHVlOiBuZXcgUmF5Y2FzdGVyKCkgfSxcbiAgICBmb3J3YXJkUmVmKCgpID0+IFJheWNhc3RlclNlcnZpY2UpLFxuICAgIHsgcHJvdmlkZTogVGhWaWV3LCB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBUaENhbnZhcykgfSxcblxuICAgIC8vIGRlZmF1bHQgcHJvdmlkZXIgZm9yIHdlYmdsIHJlbmRlcmVyXG4gICAgcHJvdmlkZURlZmF1bHRSZW5kZXJlcigpLFxuICBdLFxufSlcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAYW5ndWxhci1lc2xpbnQvY29tcG9uZW50LWNsYXNzLXN1ZmZpeFxuZXhwb3J0IGNsYXNzIFRoQ2FudmFzIGV4dGVuZHMgVGhWaWV3IGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdJbml0LCBBZnRlckNvbnRlbnRDaGVja2VkIHtcbiAgcHVibGljIHJlYWRvbmx5IGlzRGV2TW9kZSA9IGlzRGV2TW9kZTtcbiAgcHJpdmF0ZSBzdGF0aWMgaW5zdGFuY2VDbnQgPSAwO1xuICBwdWJsaWMgcmVhZG9ubHkgbmlkID0gVGhDYW52YXMuaW5zdGFuY2VDbnQrKztcblxuICAvKipcbiAgICogaWYgdHJ1ZSBkb2VzIG5vdCB1c2UgdGhlIFRoQ2FudmFzIGFzIHZpZXdcbiAgICogdGhpcyBpcyBlc2VwY2lhbGx5IHVzZWZ1bGwgaWYgeW91IGhhdmUgbXVsdGlwbGUgdmlld3NcbiAgICogYW5kIHdhbnQgdG8gaXRlcmF0ZSBvdmVyIGFsbCBvZiB0aGVtIHdpdGggKm5nRm9yXG4gICAqIHVzZSBzdGF0aWNhbGx5IChiZWZvcmUgbmdPbkluaXQgaXMgdHJpZ2dlcmVkKVxuICAgKi9cbiAgQElucHV0KClcbiAgcHVibGljIGRpc2FibGVEZWZhdWx0VmlldyA9IGZhbHNlO1xuXG4gIHB1YmxpYyBnZXQgb2JqKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgQENvbnRlbnRDaGlsZHJlbihUaFZpZXcpXG4gIHB1YmxpYyBzZXQgdmlld3Modmlld0xpc3Q6IFF1ZXJ5TGlzdDxUaFZpZXc+KSB7XG4gICAgdGhpcy5zZXRWaWV3cyh2aWV3TGlzdCk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IHJlbmRlcmVyQ2FudmFzKCkge1xuICAgIHJldHVybiB0aGlzLmVuZ1NlcnYuY2FudmFzO1xuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIGVuZ1NlcnY6IFRoRW5naW5lU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgYW5pbWF0aW9uTG9vcDogVGhBbmltYXRpb25Mb29wU2VydmljZSxcbiAgICBASW5qZWN0KGZvcndhcmRSZWYoKCkgPT4gUmF5Y2FzdGVyU2VydmljZSkpXG4gICAgcHJvdGVjdGVkIHJheWNhc3RlcjogUmF5Y2FzdGVyU2VydmljZSxcbiAgICBwdWJsaWMgcmVhZG9ubHkgZWxlbWVudFJlZjogRWxlbWVudFJlZjxIVE1MRWxlbWVudD5cbiAgKSB7XG4gICAgc3VwZXIoZW5nU2VydiwgcmF5Y2FzdGVyKTtcbiAgICB0aGlzLmVuZ1NlcnYucmVuZGVyZXJzLmZvckVhY2goKHJlbmRlcmVyKSA9PiB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5hcHBlbmRDaGlsZChyZW5kZXJlci5kb21FbGVtZW50KSk7XG4gIH1cbiAgbmdBZnRlckNvbnRlbnRDaGVja2VkKCk6IHZvaWQge1xuICAgIHRoaXMuYW5pbWF0aW9uTG9vcC5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKTtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmFuaW1hdGlvbkxvb3AucmVxdWVzdEFuaW1hdGlvbkZyYW1lKCk7XG4gIH1cblxuICBwdWJsaWMgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5lbmdTZXJ2LnJlc2l6ZSgpO1xuXG4gICAgc3VwZXIubmdPbkluaXQoKTtcbiAgICB0aGlzLnNldFZpZXdzKCk7XG4gIH1cblxuICBwcm90ZWN0ZWQgc2V0Vmlld3Modmlld0xpc3Q/OiBRdWVyeUxpc3Q8VGhWaWV3Pikge1xuICAgIHRoaXMuZW5nU2Vydi5zZXRWaWV3cyhbXSk7XG4gICAgaWYgKCF0aGlzLmRpc2FibGVEZWZhdWx0Vmlldykge1xuICAgICAgdGhpcy5lbmdTZXJ2LmFkZFZpZXcodGhpcyk7XG4gICAgfVxuICAgIHZpZXdMaXN0Py5mb3JFYWNoKCh2KSA9PiB0aGlzLmVuZ1NlcnYuYWRkVmlldyh2KSk7XG4gIH1cbn1cbiJdfQ==