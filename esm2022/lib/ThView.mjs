import { Component, ContentChild, EventEmitter, forwardRef, inject, InjectionToken, Input, Output, } from '@angular/core';
import { Raycaster, Vector4 } from 'three';
import { RAYCASTER, RaycasterService } from './events/raycaster.service';
import { ThCamera } from './generated/ThCamera';
import { ThObject3D } from './generated/ThObject3D';
import { ThScene } from './generated/ThScene';
import * as i0 from "@angular/core";
import * as i1 from "./ThEngine.service";
import * as i2 from "./events/raycaster.service";
export const HOST_ELEMENT = new InjectionToken('HOST_ELEMENT');
// eslint-disable-next-line @angular-eslint/component-class-suffix
export class ThView {
    constructor(engServ, raycaster) {
        this.engServ = engServ;
        this.raycaster = raycaster;
        this.hostElement = inject(HOST_ELEMENT);
        /**
         * Emits before the render loop starts for this view (before effectComposer or main render pass, but after setting up the viewPort on the renderer).
         * It emits for every renderer.
         * It can be used to modify the scene, camera or renderer before rendering
         * and to do additional render passes
         *
         * @Note onRender is called before this event (and only once for all renderers)
         */
        this.onCurrentRendererPass = new EventEmitter();
        // -----------------------------------------------------------------------------------------------
        // eslint-disable-next-line @angular-eslint/no-output-on-prefix
        this.onRender = new EventEmitter();
    }
    set contentScene(scene) {
        if (scene) {
            this.scene = scene;
        }
    }
    set effectComposer(effectComposer) {
        this._effectComposer = effectComposer;
        this.configureEffectComposerRenderTarget();
    }
    get effectComposer() {
        return this._effectComposer;
    }
    set camera(camera) {
        this._camera = camera;
        this.initRaycaster();
    }
    get camera() {
        return this._camera;
    }
    set contentCamera(camera) {
        if (camera) {
            this.camera = camera;
        }
    }
    set viewPort(viewPort) {
        this._viewPort = viewPort;
        this.configureEffectComposerRenderTarget();
    }
    get viewPort() {
        return this._viewPort;
    }
    ngOnInit() {
        this.initRaycaster();
    }
    initRaycaster() {
        if (this.camera) {
            this.raycaster.init(this.camera, this.hostElement.nativeElement);
        }
    }
    add(_scene) {
        // nothing to do here
    }
    remove(_scene) {
        // norhing to do
    }
    configureEffectComposerRenderTarget() {
        if (!this.viewPort || !this.effectComposer) {
            return;
        }
        else {
            let width;
            let height;
            if (this.viewPort instanceof Vector4) {
                width = this.viewPort.z;
                height = this.viewPort?.width;
            }
            else {
                width = this.viewPort.width;
                height = this.viewPort.height;
            }
            //TODO: check if pixel ration ha
            this.effectComposer.setSize(width, height);
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThView, deps: [{ token: i1.ThEngineService }, { token: i2.RaycasterService }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.1.2", type: ThView, selector: "th-view", inputs: { scene: "scene", effectComposer: "effectComposer", camera: "camera", shadow: "shadow", viewPort: "viewPort", scissor: "scissor", scissorTest: "scissorTest", clearColor: "clearColor", clearAlpha: "clearAlpha" }, outputs: { onCurrentRendererPass: "onCurrentRendererPass", onRender: "onRender" }, providers: [
            { provide: ThObject3D, useExisting: forwardRef(() => ThView) },
            { provide: RAYCASTER, useValue: new Raycaster() },
            RaycasterService,
        ], queries: [{ propertyName: "contentScene", first: true, predicate: ThScene, descendants: true }, { propertyName: "contentCamera", first: true, predicate: ThCamera, descendants: true }], ngImport: i0, template: '<ng-content/>', isInline: true }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThView, decorators: [{
            type: Component,
            args: [{
                    selector: 'th-view',
                    template: '<ng-content/>',
                    providers: [
                        { provide: ThObject3D, useExisting: forwardRef(() => ThView) },
                        { provide: RAYCASTER, useValue: new Raycaster() },
                        RaycasterService,
                    ],
                }]
        }], ctorParameters: () => [{ type: i1.ThEngineService }, { type: i2.RaycasterService }], propDecorators: { scene: [{
                type: Input
            }], onCurrentRendererPass: [{
                type: Output
            }], contentScene: [{
                type: ContentChild,
                args: [ThScene]
            }], effectComposer: [{
                type: Input
            }], camera: [{
                type: Input
            }], contentCamera: [{
                type: ContentChild,
                args: [ThCamera]
            }], shadow: [{
                type: Input
            }], viewPort: [{
                type: Input
            }], scissor: [{
                type: Input
            }], scissorTest: [{
                type: Input
            }], clearColor: [{
                type: Input
            }], clearAlpha: [{
                type: Input
            }], onRender: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGhWaWV3LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LXRocmVlL3NyYy9saWIvVGhWaWV3LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsWUFBWSxFQUVaLFlBQVksRUFDWixVQUFVLEVBQ1YsTUFBTSxFQUNOLGNBQWMsRUFDZCxLQUFLLEVBRUwsTUFBTSxHQUNQLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBbUIsU0FBUyxFQUFZLE9BQU8sRUFBRSxNQUFNLE9BQU8sQ0FBQztBQUV0RSxPQUFPLEVBQUUsU0FBUyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDekUsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ2hELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRCxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0scUJBQXFCLENBQUM7Ozs7QUFHOUMsTUFBTSxDQUFDLE1BQU0sWUFBWSxHQUFHLElBQUksY0FBYyxDQUEwQixjQUFjLENBQUMsQ0FBQztBQVd4RixrRUFBa0U7QUFDbEUsTUFBTSxPQUFPLE1BQU07SUFRakIsWUFDWSxPQUF3QixFQUN4QixTQUEyQjtRQUQzQixZQUFPLEdBQVAsT0FBTyxDQUFpQjtRQUN4QixjQUFTLEdBQVQsU0FBUyxDQUFrQjtRQVR2QixnQkFBVyxHQUFHLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQztRQWVuRDs7Ozs7OztXQU9HO1FBRUgsMEJBQXFCLEdBQUcsSUFBSSxZQUFZLEVBS3BDLENBQUM7UUEyRUwsa0dBQWtHO1FBRWxHLCtEQUErRDtRQUUvQyxhQUFRLEdBQUcsSUFBSSxZQUFZLEVBSXZDLENBQUM7SUF0R0YsQ0FBQztJQXFCSixJQUNXLFlBQVksQ0FBQyxLQUEwQjtRQUNoRCxJQUFJLEtBQUssRUFBRSxDQUFDO1lBQ1YsSUFBSSxDQUFD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RSxVQUFVLENBQUMsR0FBRyxFQUFFLE9BQU8sQ0FBQyxFQUFFO3dCQUM5RCxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFFLElBQUksU0FBUyxFQUFFLEVBQUU7d0JBQ2pELGdCQUFnQjtxQkFDakI7aUJBQ0Y7bUhBZ0JRLEtBQUs7c0JBRFgsS0FBSztnQkFZTixxQkFBcUI7c0JBRHBCLE1BQU07Z0JBU0ksWUFBWTtzQkFEdEIsWUFBWTt1QkFBQyxPQUFPO2dCQVFWLGNBQWM7c0JBRHhCLEtBQUs7Z0JBV0ssTUFBTTtzQkFEaEIsS0FBSztnQkFXSyxhQUFhO3NCQUR2QixZQUFZO3VCQUFDLFFBQVE7Z0JBYWYsTUFBTTtzQkFEWixLQUFLO2dCQUlLLFFBQVE7c0JBRGxCLEtBQUs7Z0JBV0MsT0FBTztzQkFEYixLQUFLO2dCQVFDLFdBQVc7c0JBRGpCLEtBQUs7Z0JBT04sVUFBVTtzQkFEVCxLQUFLO2dCQU9OLFVBQVU7c0JBRFQsS0FBSztnQkFNVSxRQUFRO3NCQUR2QixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBDb250ZW50Q2hpbGQsXG4gIEVsZW1lbnRSZWYsXG4gIEV2ZW50RW1pdHRlcixcbiAgZm9yd2FyZFJlZixcbiAgaW5qZWN0LFxuICBJbmplY3Rpb25Ub2tlbixcbiAgSW5wdXQsXG4gIE9uSW5pdCxcbiAgT3V0cHV0LFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbG9yLCBPYmplY3QzRCwgUmF5Y2FzdGVyLCBSZW5kZXJlciwgVmVjdG9yNCB9IGZyb20gJ3RocmVlJztcbmltcG9ydCB7IEVmZmVjdENvbXBvc2VyIH0gZnJvbSAndGhyZWUvZXhhbXBsZXMvanNtL3Bvc3Rwcm9jZXNzaW5nL0VmZmVjdENvbXBvc2VyLmpzJztcbmltcG9ydCB7IFJBWUNBU1RFUiwgUmF5Y2FzdGVyU2VydmljZSB9IGZyb20gJy4vZXZlbnRzL3JheWNhc3Rlci5zZXJ2aWNlJztcbmltcG9ydCB7IFRoQ2FtZXJhIH0gZnJvbSAnLi9nZW5lcmF0ZWQvVGhDYW1lcmEnO1xuaW1wb3J0IHsgVGhPYmplY3QzRCB9IGZyb20gJy4vZ2VuZXJhdGVkL1RoT2JqZWN0M0QnO1xuaW1wb3J0IHsgVGhTY2VuZSB9IGZyb20gJy4vZ2VuZXJhdGVkL1RoU2NlbmUnO1xuaW1wb3J0IHsgVGhFbmdpbmVTZXJ2aWNlIH0gZnJvbSAnLi9UaEVuZ2luZS5zZXJ2aWNlJztcblxuZXhwb3J0IGNvbnN0IEhPU1RfRUxFTUVOVCA9IG5ldyBJbmplY3Rpb25Ub2tlbjxFbGVtZW50UmVmPEhUTUxFbGVtZW50Pj4oJ0hPU1RfRUxFTUVOVCcpO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0aC12aWV3JyxcbiAgdGVtcGxhdGU6ICc8bmctY29udGVudC8+JyxcbiAgcHJvdmlkZXJzOiBbXG4gICAgeyBwcm92aWRlOiBUaE9iamVjdDNELCB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBUaFZpZXcpIH0sXG4gICAgeyBwcm92aWRlOiBSQVlDQVNURVIsIHVzZVZhbHVlOiBuZXcgUmF5Y2FzdGVyKCkgfSxcbiAgICBSYXljYXN0ZXJTZXJ2aWNlLFxuICBdLFxufSlcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAYW5ndWxhci1lc2xpbnQvY29tcG9uZW50LWNsYXNzLXN1ZmZpeFxuZXhwb3J0IGNsYXNzIFRoVmlldyBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIHB1YmxpYyByZWFkb25seSBob3N0RWxlbWVudCA9IGluamVjdChIT1NUX0VMRU1FTlQpO1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25hbWluZy1jb252ZW50aW9uLCBuby11bmRlcnNjb3JlLWRhbmdsZSwgaWQtYmxhY2tsaXN0LCBpZC1tYXRjaFxuICBwcm90ZWN0ZWQgX2NhbWVyYT86IFRoQ2FtZXJhO1xuICBwcm90ZWN0ZWQgX3ZpZXdQb3J0PzogVmVjdG9yNCB8IHsgeDogbnVtYmVyOyB5OiBudW1iZXI7IHdpZHRoOiBudW1iZXI7IGhlaWdodDogbnVtYmVyIH07XG5cbiAgcHJvdGVjdGVkIF9lZmZlY3RDb21wb3Nlcj86IEVmZmVjdENvbXBvc2VyO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCBlbmdTZXJ2OiBUaEVuZ2luZVNlcnZpY2UsXG4gICAgcHJvdGVjdGVkIHJheWNhc3RlcjogUmF5Y2FzdGVyU2VydmljZSxcbiAgKSB7fVxuXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzY2VuZT86IFRoU2NlbmU7XG5cbiAgLyoqXG4gICAqIEVtaXRzIGJlZm9yZSB0aGUgcmVuZGVyIGxvb3Agc3RhcnRzIGZvciB0aGlzIHZpZXcgKGJlZm9yZSBlZmZlY3RDb21wb3NlciBvciBtYWluIHJlbmRlciBwYXNzLCBidXQgYWZ0ZXIgc2V0dGluZyB1cCB0aGUgdmlld1BvcnQgb24gdGhlIHJlbmRlcmVyKS5cbiAgICogSXQgZW1pdHMgZm9yIGV2ZXJ5IHJlbmRlcmVyLlxuICAgKiBJdCBjYW4gYmUgdXNlZCB0byBtb2RpZnkgdGhlIHNjZW5lLCBjYW1lcmEgb3IgcmVuZGVyZXIgYmVmb3JlIHJlbmRlcmluZ1xuICAgKiBhbmQgdG8gZG8gYWRkaXRpb25hbCByZW5kZXIgcGFzc2VzXG4gICAqXG4gICAqIEBOb3RlIG9uUmVuZGVyIGlzIGNhbGxlZCBiZWZvcmUgdGhpcyBldmVudCAoYW5kIG9ubHkgb25jZSBmb3IgYWxsIHJlbmRlcmVycylcbiAgICovXG4gIEBPdXRwdXQoKVxuICBvbkN1cnJlbnRSZW5kZXJlclBhc3MgPSBuZXcgRXZlbnRFbWl0dGVyPHtcbiAgICByZW5kZXJlcjogUmVuZGVyZXI7XG4gICAgc2NlbmU6IFRoU2NlbmU7XG4gICAgY2FtZXJhOiBUaENhbWVyYTtcbiAgICBlbmdpbmU6IFRoRW5naW5lU2VydmljZTtcbiAgfT4oKTtcblxuICBAQ29udGVudENoaWxkKFRoU2NlbmUpXG4gIHB1YmxpYyBzZXQgY29udGVudFNjZW5lKHNjZW5lOiBUaFNjZW5lIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHNjZW5lKSB7XG4gICAgICB0aGlzLnNjZW5lID0gc2NlbmU7XG4gICAgfVxuICB9XG5cbiAgQElucHV0KClcbiAgcHVibGljIHNldCBlZmZlY3RDb21wb3NlcihlZmZlY3RDb21wb3NlcjogRWZmZWN0Q29tcG9zZXIgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9lZmZlY3RDb21wb3NlciA9IGVmZmVjdENvbXBvc2VyO1xuICAgIHRoaXMuY29uZmlndXJlRWZmZWN0Q29tcG9zZXJSZW5kZXJUYXJnZXQoKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgZWZmZWN0Q29tcG9zZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2VmZmVjdENvbXBvc2VyO1xuICB9XG5cbiAgQElucHV0KClcbiAgcHVibGljIHNldCBjYW1lcmEoY2FtZXJhOiBUaENhbWVyYSB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX2NhbWVyYSA9IGNhbWVyYTtcbiAgICB0aGlzLmluaXRSYXljYXN0ZXIoKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgY2FtZXJhKCkge1xuICAgIHJldHVybiB0aGlzLl9jYW1lcmE7XG4gIH1cblxuICBAQ29udGVudENoaWxkKFRoQ2FtZXJhKVxuICBwdWJsaWMgc2V0IGNvbnRlbnRDYW1lcmEoY2FtZXJhOiBUaENhbWVyYTxhbnk+IHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKGNhbWVyYSkge1xuICAgICAgdGhpcy5jYW1lcmEgPSBjYW1lcmE7XG4gICAgfVxuICB9XG5cbiAgLy8gcmVuZGVyZXIgcGFyYW1ldGVyc1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvKipcbiAgICogZW5hYmxlIC8gZGlzYWJsZSBzaGFkb3dzXG4gICAqL1xuICBASW5wdXQoKVxuICBwdWJsaWMgc2hhZG93PzogYm9vbGVhbjtcblxuICBASW5wdXQoKVxuICBwdWJsaWMgc2V0IHZpZXdQb3J0KHZpZXdQb3J0OiBWZWN0b3I0IHwgeyB4OiBudW1iZXI7IHk6IG51bWJlcjsgd2lkdGg6IG51bWJlcjsgaGVpZ2h0OiBudW1iZXIgfSB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX3ZpZXdQb3J0ID0gdmlld1BvcnQ7XG4gICAgdGhpcy5jb25maWd1cmVFZmZlY3RDb21wb3NlclJlbmRlclRhcmdldCgpO1xuICB9XG5cbiAgcHVibGljIGdldCB2aWV3UG9ydCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdmlld1BvcnQ7XG4gIH1cblxuICBASW5wdXQoKVxuICBwdWJsaWMgc2Npc3Nvcj86IFZlY3RvcjQgfCB7IHg6IG51bWJlcjsgeTogbnVtYmVyOyB3aWR0aDogbnVtYmVyOyBoZWlnaHQ6IG51bWJlciB9O1xuXG4gIC8qKlxuICAgKiBFbmFibGUgdGhlIHNjaXNzb3IgdGVzdC4gV2hlbiB0aGlzIGlzIGVuYWJsZWQsXG4gICAqIG9ubHkgdGhlIHBpeGVscyB3aXRoaW4gdGhlIGRlZmluZWQgc2Npc3NvciBhcmVhIHdpbGwgYmUgYWZmZWN0ZWQgYnkgZnVydGhlciByZW5kZXJlciBhY3Rpb25zLlxuICAgKi9cbiAgQElucHV0KClcbiAgcHVibGljIHNjaXNzb3JUZXN0PzogYm9vbGVhbjtcblxuICAvKipcbiAgICogU2V0cyB0aGUgY2xlYXIgY29sb3JcbiAgICovXG4gIEBJbnB1dCgpXG4gIGNsZWFyQ29sb3I/OiBDb2xvciB8IHN0cmluZyB8IG51bWJlcjtcblxuICAvKipcbiAgICogYSBmbG9hdCB3aXRoIHRoZSBjdXJyZW50IGNsZWFyIGFscGhhLiBSYW5nZXMgZnJvbSAwIHRvIDEuXG4gICAqL1xuICBASW5wdXQoKVxuICBjbGVhckFscGhhPzogbnVtYmVyO1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAYW5ndWxhci1lc2xpbnQvbm8tb3V0cHV0LW9uLXByZWZpeFxuICBAT3V0cHV0KClcbiAgcHVibGljIHJlYWRvbmx5IG9uUmVuZGVyID0gbmV3IEV2ZW50RW1pdHRlcjx7XG4gICAgcmVuZGVyZXI6IFJlbmRlcmVyW107XG4gICAgc2NlbmU6IFRoU2NlbmU7XG4gICAgY2FtZXJhOiBUaENhbWVyYTtcbiAgfT4oKTtcblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmluaXRSYXljYXN0ZXIoKTtcbiAgfVxuXG4gIHByaXZhdGUgaW5pdFJheWNhc3RlcigpIHtcbiAgICBpZiAodGhpcy5jYW1lcmEpIHtcbiAgICAgIHRoaXMucmF5Y2FzdGVyLmluaXQodGhpcy5jYW1lcmEsIHRoaXMuaG9zdEVsZW1lbnQubmF0aXZlRWxlbWVudCk7XG4gICAgfVxuICB9XG5cbiAgYWRkKF9zY2VuZTogT2JqZWN0M0QpIHtcbiAgICAvLyBub3RoaW5nIHRvIGRvIGhlcmVcbiAgfVxuXG4gIHJlbW92ZShfc2NlbmU6IE9iamVjdDNEKSB7XG4gICAgLy8gbm9yaGluZyB0byBkb1xuICB9XG5cbiAgcHJpdmF0ZSBjb25maWd1cmVFZmZlY3RDb21wb3NlclJlbmRlclRhcmdldCgpIHtcbiAgICBpZiAoIXRoaXMudmlld1BvcnQgfHwgIXRoaXMuZWZmZWN0Q29tcG9zZXIpIHtcbiAgICAgIHJldHVybjtcbiAgICB9IGVsc2Uge1xuICAgICAgbGV0IHdpZHRoOiBudW1iZXI7XG4gICAgICBsZXQgaGVpZ2h0OiBudW1iZXI7XG4gICAgICBpZiAodGhpcy52aWV3UG9ydCBpbnN0YW5jZW9mIFZlY3RvcjQpIHtcbiAgICAgICAgd2lkdGggPSB0aGlzLnZpZXdQb3J0Lno7XG4gICAgICAgIGhlaWdodCA9IHRoaXMudmlld1BvcnQ/LndpZHRoO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgd2lkdGggPSB0aGlzLnZpZXdQb3J0LndpZHRoO1xuICAgICAgICBoZWlnaHQgPSB0aGlzLnZpZXdQb3J0LmhlaWdodDtcbiAgICAgIH1cbiAgICAgIC8vVE9ETzogY2hlY2sgaWYgcGl4ZWwgcmF0aW9uIGhhXG4gICAgICB0aGlzLmVmZmVjdENvbXBvc2VyLnNldFNpemUod2lkdGgsIGhlaWdodCk7XG4gICAgfVxuICB9XG59XG4iXX0=