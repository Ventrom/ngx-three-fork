import { Directive, InjectionToken, Injector, Input, } from '@angular/core';
import { CSS3DRenderer } from 'three/examples/jsm/renderers/CSS3DRenderer.js';
import { CSS2DRenderer } from 'three/examples/jsm/renderers/CSS2DRenderer.js';
import { WebGLRenderer } from 'three';
import * as i0 from "@angular/core";
const RENDERER_DEFAULTS = {
    alpha: true, // transparent background
    antialias: true, // smooth edges
    preserveDrawingBuffer: true,
};
export const RENDERER_PROVIDERS = new InjectionToken('Renderer Providers');
export const CSS3D_RENDERER = new InjectionToken('CSS3DRenderer');
export const CSS2D_RENDERER = new InjectionToken('CSS2DRenderer');
export const WEBGL_RENDERER = new InjectionToken('WebGLRenderer');
export class RendererProviderDirective {
    constructor(viewContainer, templateRef, parentInjector) {
        this.viewContainer = viewContainer;
        this.templateRef = templateRef;
        this.parentInjector = parentInjector;
    }
    getInjectedRenderers() {
        return this.injector?.get(RENDERER_PROVIDERS);
    }
    ngOnChanges(_changes) {
        this.createInjector();
        this.createView();
    }
    createView() {
        if (this.view) {
            this.viewContainer.clear();
        }
        this.view = this.viewContainer.createEmbeddedView(this.templateRef, undefined, { injector: this.injector });
    }
    createInjector() {
        const providers = [];
        if (this.rendererParameters) {
            providers.push(provideWebGLRenderer(this.rendererParameters));
        }
        if (this.css3DParameters) {
            providers.push(provideCSS3dRenderer(this.css3DParameters));
        }
        if (this.css2DParameters) {
            providers.push(provideCSS2dRenderer(this.css2DParameters));
        }
        this.injector = Injector.create({
            parent: this.parentInjector,
            providers,
        });
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: RendererProviderDirective, deps: [{ token: i0.ViewContainerRef }, { token: i0.TemplateRef }, { token: i0.Injector }], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "18.1.2", type: RendererProviderDirective, selector: "ng-template[rendererParameters], ng-template[css2dRendererParameters], ng-template[css3dRendererParameters], ng-template[webgpuRendererParameters]", inputs: { rendererParameters: "rendererParameters", css3DParameters: "css3DParameters", css2DParameters: "css2DParameters" }, usesOnChanges: true, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: RendererProviderDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: 
                    // eslint-disable-next-line max-len
                    'ng-template[rendererParameters], ng-template[css2dRendererParameters], ng-template[css3dRendererParameters], ng-template[webgpuRendererParameters]',
                }]
        }], ctorParameters: () => [{ type: i0.ViewContainerRef }, { type: i0.TemplateRef }, { type: i0.Injector }], propDecorators: { rendererParameters: [{
                type: Input
            }], css3DParameters: [{
                type: Input
            }], css2DParameters: [{
                type: Input
            }] } });
export function provideWebGLRenderer(parameters) {
    const renderer = new WebGLRenderer({ ...RENDERER_DEFAULTS, ...parameters });
    Object.assign(renderer, { ...RENDERER_DEFAULTS, ...parameters });
    const provider = [
        { provide: WEBGL_RENDERER, useValue: renderer },
        {
            provide: RENDERER_PROVIDERS,
            multi: true,
            useExisting: WEBGL_RENDERER,
        },
    ];
    return provider;
}
export function provideCSS3dRenderer(parameters) {
    const provider = [
        {
            provide: CSS3D_RENDERER,
            useFactory: () => {
                const renderer = new CSS3DRenderer(parameters);
                const style = renderer.domElement.style;
                style.position = 'absolute';
                style.top = '0px';
                style.bottom = '0px';
                style.left = '0px';
                style.right = '0px';
                style.overflow = 'hidden';
                return renderer;
            },
        },
        { provide: RENDERER_PROVIDERS, multi: true, useExisting: CSS3D_RENDERER },
    ];
    return provider;
}
export function provideCSS2dRenderer(parameters) {
    const provider = [
        {
            provide: CSS2D_RENDERER,
            useFactory: () => {
                const renderer = new CSS2DRenderer(parameters);
                const style = renderer.domElement.style;
                style.position = 'absolute';
                style.top = '0px';
                style.bottom = '0px';
                style.left = '0px';
                style.right = '0px';
                style.overflow = 'hidden';
                return renderer;
            },
        },
        { provide: RENDERER_PROVIDERS, multi: true, useExisting: CSS2D_RENDERER },
    ];
    return provider;
}
export function provideWebGPURenderer(parameters) {
    const provider = [
        { provide: WEBGL_RENDERER, useValue: new WebGLRenderer(parameters) },
        { provide: RENDERER_PROVIDERS, multi: true, useExisting: WEBGL_RENDERER },
    ];
    return provider;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVuZGVyZXItcHJvdmlkZXJzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LXRocmVlL3NyYy9saWIvcmVuZGVyZXIvcmVuZGVyZXItcHJvdmlkZXJzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFDTCxTQUFTLEVBRVQsY0FBYyxFQUNkLFFBQVEsRUFDUixLQUFLLEdBT04sTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFtQixhQUFhLEVBQUUsTUFBTSwrQ0FBK0MsQ0FBQztBQUMvRixPQUFPLEVBQW1CLGFBQWEsRUFBRSxNQUFNLCtDQUErQyxDQUFDO0FBRS9GLE9BQU8sRUFBWSxhQUFhLEVBQTJCLE1BQU0sT0FBTyxDQUFDOztBQUV6RSxNQUFNLGlCQUFpQixHQUE0QjtJQUNqRCxLQUFLLEVBQUUsSUFBSSxFQUFFLHlCQUF5QjtJQUN0QyxTQUFTLEVBQUUsSUFBSSxFQUFFLGVBQWU7SUFDaEMscUJBQXFCLEVBQUUsSUFBSTtDQUM1QixDQUFDO0FBSUYsTUFBTSxDQUFDLE1BQU0sa0JBQWtCLEdBQUcsSUFBSSxjQUFjLENBQWEsb0JBQW9CLENBQUMsQ0FBQztBQUN2RixNQUFNLENBQUMsTUFBTSxjQUFjLEdBQUcsSUFBSSxjQUFjLENBQWdCLGVBQWUsQ0FBQyxDQUFDO0FBQ2pGLE1BQU0sQ0FBQyxNQUFNLGNBQWMsR0FBRyxJQUFJLGNBQWMsQ0FBZ0IsZUFBZSxDQUFDLENBQUM7QUFDakYsTUFBTSxDQUFDLE1BQU0sY0FBYyxHQUFHLElBQUksY0FBYyxDQUFnQixlQUFlLENBQUMsQ0FBQztBQU9qRixNQUFNLE9BQU8seUJBQXlCO0lBYXBDLFlBQ1UsYUFBK0IsRUFDL0IsV0FBaUMsRUFDakMsY0FBd0I7UUFGeEIsa0JBQWEsR0FBYixhQUFhLENBQWtCO1FBQy9CLGdCQUFXLEdBQVgsV0FBVyxDQUFzQjtRQUNqQyxtQkFBYyxHQUFkLGNBQWMsQ0FBVTtJQUMvQixDQUFD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O1FBQzNCLEVBQUUsT0FBTyxFQUFFLGNBQWMsRUFBRSxRQUFRLEVBQUUsSUFBSSxhQUFhLENBQUMsVUFBVSxDQUFDLEVBQUU7UUFDcEUsRUFBRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsY0FBYyxFQUFFO0tBQzFFLENBQUM7SUFDRixPQUFPLFFBQVEsQ0FBQztBQUNsQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBEaXJlY3RpdmUsXHJcbiAgRW1iZWRkZWRWaWV3UmVmLFxyXG4gIEluamVjdGlvblRva2VuLFxyXG4gIEluamVjdG9yLFxyXG4gIElucHV0LFxyXG4gIE9uQ2hhbmdlcyxcclxuICBQcm92aWRlcixcclxuICBTaW1wbGVDaGFuZ2VzLFxyXG4gIFN0YXRpY1Byb3ZpZGVyLFxyXG4gIFRlbXBsYXRlUmVmLFxyXG4gIFZpZXdDb250YWluZXJSZWYsXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENTUzNEUGFyYW1ldGVycywgQ1NTM0RSZW5kZXJlciB9IGZyb20gJ3RocmVlL2V4YW1wbGVzL2pzbS9yZW5kZXJlcnMvQ1NTM0RSZW5kZXJlci5qcyc7XHJcbmltcG9ydCB7IENTUzJEUGFyYW1ldGVycywgQ1NTMkRSZW5kZXJlciB9IGZyb20gJ3RocmVlL2V4YW1wbGVzL2pzbS9yZW5kZXJlcnMvQ1NTMkRSZW5kZXJlci5qcyc7XHJcblxyXG5pbXBvcnQgeyBSZW5kZXJlciwgV2ViR0xSZW5kZXJlciwgV2ViR0xSZW5kZXJlclBhcmFtZXRlcnMgfSBmcm9tICd0aHJlZSc7XHJcblxyXG5jb25zdCBSRU5ERVJFUl9ERUZBVUxUUzogV2ViR0xSZW5kZXJlclBhcmFtZXRlcnMgPSB7XHJcbiAgYWxwaGE6IHRydWUsIC8vIHRyYW5zcGFyZW50IGJhY2tncm91bmRcclxuICBhbnRpYWxpYXM6IHRydWUsIC8vIHNtb290aCBlZGdlc1xyXG4gIHByZXNlcnZlRHJhd2luZ0J1ZmZlcjogdHJ1ZSxcclxufTtcclxuXHJcbmV4cG9ydCB0eXBlIFRoUmVuZGVyZXJQYXJhbWV0ZXJzID0gUGFydGlhbDxXZWJHTFJlbmRlcmVyUGFyYW1ldGVycz47XHJcblxyXG5leHBvcnQgY29uc3QgUkVOREVSRVJfUFJPVklERVJTID0gbmV3IEluamVjdGlvblRva2VuPFJlbmRlcmVyW10+KCdSZW5kZXJlciBQcm92aWRlcnMnKTtcclxuZXhwb3J0IGNvbnN0IENTUzNEX1JFTkRFUkVSID0gbmV3IEluamVjdGlvblRva2VuPENTUzNEUmVuZGVyZXI+KCdDU1MzRFJlbmRlcmVyJyk7XHJcbmV4cG9ydCBjb25zdCBDU1MyRF9SRU5ERVJFUiA9IG5ldyBJbmplY3Rpb25Ub2tlbjxDU1MyRFJlbmRlcmVyPignQ1NTMkRSZW5kZXJlcicpO1xyXG5leHBvcnQgY29uc3QgV0VCR0xfUkVOREVSRVIgPSBuZXcgSW5qZWN0aW9uVG9rZW48V2ViR0xSZW5kZXJlcj4oJ1dlYkdMUmVuZGVyZXInKTtcclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gIHNlbGVjdG9yOlxyXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG1heC1sZW5cclxuICAgICduZy10ZW1wbGF0ZVtyZW5kZXJlclBhcmFtZXRlcnNdLCBuZy10ZW1wbGF0ZVtjc3MyZFJlbmRlcmVyUGFyYW1ldGVyc10sIG5nLXRlbXBsYXRlW2NzczNkUmVuZGVyZXJQYXJhbWV0ZXJzXSwgbmctdGVtcGxhdGVbd2ViZ3B1UmVuZGVyZXJQYXJhbWV0ZXJzXScsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBSZW5kZXJlclByb3ZpZGVyRGlyZWN0aXZlIGltcGxlbWVudHMgT25DaGFuZ2VzIHtcclxuICBASW5wdXQoKVxyXG4gIHJlbmRlcmVyUGFyYW1ldGVycz86IFRoUmVuZGVyZXJQYXJhbWV0ZXJzO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIGNzczNEUGFyYW1ldGVycz86IENTUzNEUGFyYW1ldGVycztcclxuXHJcbiAgQElucHV0KClcclxuICBjc3MyRFBhcmFtZXRlcnM/OiBDU1MyRFBhcmFtZXRlcnM7XHJcblxyXG4gIHByaXZhdGUgdmlldz86IEVtYmVkZGVkVmlld1JlZjx1bmtub3duPjtcclxuICBwcml2YXRlIGluamVjdG9yPzogSW5qZWN0b3I7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSB2aWV3Q29udGFpbmVyOiBWaWV3Q29udGFpbmVyUmVmLFxyXG4gICAgcHJpdmF0ZSB0ZW1wbGF0ZVJlZjogVGVtcGxhdGVSZWY8dW5rbm93bj4sXHJcbiAgICBwcml2YXRlIHBhcmVudEluamVjdG9yOiBJbmplY3RvcixcclxuICApIHt9XHJcblxyXG4gIHB1YmxpYyBnZXRJbmplY3RlZFJlbmRlcmVycygpIHtcclxuICAgIHJldHVybiB0aGlzLmluamVjdG9yPy5nZXQoUkVOREVSRVJfUFJPVklERVJTKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBuZ09uQ2hhbmdlcyhfY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xyXG4gICAgdGhpcy5jcmVhdGVJbmplY3RvcigpO1xyXG4gICAgdGhpcy5jcmVhdGVWaWV3KCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNyZWF0ZVZpZXcoKSB7XHJcbiAgICBpZiAodGhpcy52aWV3KSB7XHJcbiAgICAgIHRoaXMudmlld0NvbnRhaW5lci5jbGVhcigpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMudmlldyA9IHRoaXMudmlld0NvbnRhaW5lci5jcmVhdGVFbWJlZGRlZFZpZXcodGhpcy50ZW1wbGF0ZVJlZiwgdW5kZWZpbmVkLCB7IGluamVjdG9yOiB0aGlzLmluamVjdG9yIH0pO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjcmVhdGVJbmplY3RvcigpIHtcclxuICAgIGNvbnN0IHByb3ZpZGVyczogU3RhdGljUHJvdmlkZXJbXSA9IFtdO1xyXG4gICAgaWYgKHRoaXMucmVuZGVyZXJQYXJhbWV0ZXJzKSB7XHJcbiAgICAgIHByb3ZpZGVycy5wdXNoKHByb3ZpZGVXZWJHTFJlbmRlcmVyKHRoaXMucmVuZGVyZXJQYXJhbWV0ZXJzKSk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMuY3NzM0RQYXJhbWV0ZXJzKSB7XHJcbiAgICAgIHByb3ZpZGVycy5wdXNoKHByb3ZpZGVDU1MzZFJlbmRlcmVyKHRoaXMuY3NzM0RQYXJhbWV0ZXJzKSk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMuY3NzMkRQYXJhbWV0ZXJzKSB7XHJcbiAgICAgIHByb3ZpZGVycy5wdXNoKHByb3ZpZGVDU1MyZFJlbmRlcmVyKHRoaXMuY3NzMkRQYXJhbWV0ZXJzKSk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5pbmplY3RvciA9IEluamVjdG9yLmNyZWF0ZSh7XHJcbiAgICAgIHBhcmVudDogdGhpcy5wYXJlbnRJbmplY3RvcixcclxuICAgICAgcHJvdmlkZXJzLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcHJvdmlkZVdlYkdMUmVuZGVyZXIocGFyYW1ldGVycz86IFRoUmVuZGVyZXJQYXJhbWV0ZXJzKSB7XHJcbiAgY29uc3QgcmVuZGVyZXIgPSBuZXcgV2ViR0xSZW5kZXJlcih7IC4uLlJFTkRFUkVSX0RFRkFVTFRTLCAuLi5wYXJhbWV0ZXJzIH0pO1xyXG5cclxuICBPYmplY3QuYXNzaWduKHJlbmRlcmVyLCB7IC4uLlJFTkRFUkVSX0RFRkFVTFRTLCAuLi5wYXJhbWV0ZXJzIH0pO1xyXG4gIGNvbnN0IHByb3ZpZGVyOiBQcm92aWRlcltdID0gW1xyXG4gICAgeyBwcm92aWRlOiBXRUJHTF9SRU5ERVJFUiwgdXNlVmFsdWU6IHJlbmRlcmVyIH0sXHJcbiAgICB7XHJcbiAgICAgIHByb3ZpZGU6IFJFTkRFUkVSX1BST1ZJREVSUyxcclxuICAgICAgbXVsdGk6IHRydWUsXHJcbiAgICAgIHVzZUV4aXN0aW5nOiBXRUJHTF9SRU5ERVJFUixcclxuICAgIH0sXHJcbiAgXTtcclxuICByZXR1cm4gcHJvdmlkZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBwcm92aWRlQ1NTM2RSZW5kZXJlcihwYXJhbWV0ZXJzPzogQ1NTM0RQYXJhbWV0ZXJzKSB7XHJcbiAgY29uc3QgcHJvdmlkZXI6IFByb3ZpZGVyW10gPSBbXHJcbiAgICB7XHJcbiAgICAgIHByb3ZpZGU6IENTUzNEX1JFTkRFUkVSLFxyXG4gICAgICB1c2VGYWN0b3J5OiAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgcmVuZGVyZXIgPSBuZXcgQ1NTM0RSZW5kZXJlcihwYXJhbWV0ZXJzKTtcclxuICAgICAgICBjb25zdCBzdHlsZSA9IHJlbmRlcmVyLmRvbUVsZW1lbnQuc3R5bGU7XHJcbiAgICAgICAgc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xyXG4gICAgICAgIHN0eWxlLnRvcCA9ICcwcHgnO1xyXG4gICAgICAgIHN0eWxlLmJvdHRvbSA9ICcwcHgnO1xyXG4gICAgICAgIHN0eWxlLmxlZnQgPSAnMHB4JztcclxuICAgICAgICBzdHlsZS5yaWdodCA9ICcwcHgnO1xyXG4gICAgICAgIHN0eWxlLm92ZXJmbG93ID0gJ2hpZGRlbic7XHJcbiAgICAgICAgcmV0dXJuIHJlbmRlcmVyO1xyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICAgIHsgcHJvdmlkZTogUkVOREVSRVJfUFJPVklERVJTLCBtdWx0aTogdHJ1ZSwgdXNlRXhpc3Rpbmc6IENTUzNEX1JFTkRFUkVSIH0sXHJcbiAgXTtcclxuICByZXR1cm4gcHJvdmlkZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBwcm92aWRlQ1NTMmRSZW5kZXJlcihwYXJhbWV0ZXJzPzogQ1NTMkRQYXJhbWV0ZXJzKSB7XHJcbiAgY29uc3QgcHJvdmlkZXI6IFByb3ZpZGVyW10gPSBbXHJcbiAgICB7XHJcbiAgICAgIHByb3ZpZGU6IENTUzJEX1JFTkRFUkVSLFxyXG4gICAgICB1c2VGYWN0b3J5OiAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgcmVuZGVyZXIgPSBuZXcgQ1NTMkRSZW5kZXJlcihwYXJhbWV0ZXJzKTtcclxuICAgICAgICBjb25zdCBzdHlsZSA9IHJlbmRlcmVyLmRvbUVsZW1lbnQuc3R5bGU7XHJcbiAgICAgICAgc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xyXG4gICAgICAgIHN0eWxlLnRvcCA9ICcwcHgnO1xyXG4gICAgICAgIHN0eWxlLmJvdHRvbSA9ICcwcHgnO1xyXG4gICAgICAgIHN0eWxlLmxlZnQgPSAnMHB4JztcclxuICAgICAgICBzdHlsZS5yaWdodCA9ICcwcHgnO1xyXG4gICAgICAgIHN0eWxlLm92ZXJmbG93ID0gJ2hpZGRlbic7XHJcbiAgICAgICAgcmV0dXJuIHJlbmRlcmVyO1xyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICAgIHsgcHJvdmlkZTogUkVOREVSRVJfUFJPVklERVJTLCBtdWx0aTogdHJ1ZSwgdXNlRXhpc3Rpbmc6IENTUzJEX1JFTkRFUkVSIH0sXHJcbiAgXTtcclxuICByZXR1cm4gcHJvdmlkZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBwcm92aWRlV2ViR1BVUmVuZGVyZXIocGFyYW1ldGVycz86IFdlYkdMUmVuZGVyZXJQYXJhbWV0ZXJzKSB7XHJcbiAgY29uc3QgcHJvdmlkZXI6IFByb3ZpZGVyW10gPSBbXHJcbiAgICB7IHByb3ZpZGU6IFdFQkdMX1JFTkRFUkVSLCB1c2VWYWx1ZTogbmV3IFdlYkdMUmVuZGVyZXIocGFyYW1ldGVycykgfSxcclxuICAgIHsgcHJvdmlkZTogUkVOREVSRVJfUFJPVklERVJTLCBtdWx0aTogdHJ1ZSwgdXNlRXhpc3Rpbmc6IFdFQkdMX1JFTkRFUkVSIH0sXHJcbiAgXTtcclxuICByZXR1cm4gcHJvdmlkZXI7XHJcbn1cclxuIl19