import { Directive, Host, Injectable, Pipe } from '@angular/core';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { ThAsyncLoaderBaseDirective, ThAsyncLoaderBasePipe, ThAsyncLoaderService } from './ThAsyncLoaderBase';
import * as i0 from "@angular/core";
import * as i1 from "./compressed-texture/ThDRACOLoader";
import * as i2 from "../generated/ThObject3D";
export class GLTFLoaderService extends ThAsyncLoaderService {
    constructor(dracoLoaderService) {
        super();
        this.dracoLoaderService = dracoLoaderService;
        this.clazz = GLTFLoader;
    }
    createLoaderInstance() {
        const loader = super.createLoaderInstance();
        loader.setDRACOLoader(this.dracoLoaderService.createLoaderInstance());
        return loader;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: GLTFLoaderService, deps: [{ token: i1.DRACOLoaderService }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: GLTFLoaderService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: GLTFLoaderService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: () => [{ type: i1.DRACOLoaderService }] });
export class ThGLTFLoaderPipe extends ThAsyncLoaderBasePipe {
    constructor(service) {
        super();
        this.service = service;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThGLTFLoaderPipe, deps: [{ token: GLTFLoaderService }], target: i0.ɵɵFactoryTarget.Pipe }); }
    static { this.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "14.0.0", version: "18.1.2", ngImport: i0, type: ThGLTFLoaderPipe, name: "loadGLTF" }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThGLTFLoaderPipe, decorators: [{
            type: Pipe,
            args: [{
                    name: 'loadGLTF',
                    pure: true,
                }]
        }], ctorParameters: () => [{ type: GLTFLoaderService }] });
export class ThGLTFLoaderDirective extends ThAsyncLoaderBaseDirective {
    constructor(host, zone, service) {
        super(host, zone);
        this.host = host;
        this.zone = zone;
        this.service = service;
    }
    getRefFromResponse(response) {
        return response.scene;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThGLTFLoaderDirective, deps: [{ token: i2.ThObject3D, host: true }, { token: i0.NgZone }, { token: GLTFLoaderService }], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "18.1.2", type: ThGLTFLoaderDirective, selector: "[loadGLTF]", usesInheritance: true, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThGLTFLoaderDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[loadGLTF]',
                }]
        }], ctorParameters: () => [{ type: i2.ThObject3D, decorators: [{
                    type: Host
                }] }, { type: i0.NgZone }, { type: GLTFLoaderService }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGhHTFRGTG9hZGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LXRocmVlL3NyYy9saWIvbG9hZGVycy9UaEdMVEZMb2FkZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFVLElBQUksRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFDekYsT0FBTyxFQUFRLFVBQVUsRUFBRSxNQUFNLDBDQUEwQyxDQUFDO0FBRzVFLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxxQkFBcUIsRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHFCQUFxQixDQUFDOzs7O0FBSzlHLE1BQU0sT0FBTyxpQkFBa0IsU0FBUSxvQkFBMEI7SUFHL0QsWUFBc0Isa0JBQXNDO1FBQzFELEtBQUssRUFBRSxDQUFDO1FBRFksdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFvQjtRQUZyRCxVQUFLLEdBQUcsVUFBVSxDQUFDO0lBSTFCLENBQUM7SUFFTSxvQkFBb0I7UUFDekIsTUFBTSxNQUFNLEdBQUcsS0FBSyxDQUFDLG9CQUFvQixFQUFnQixDQUFDO1FBQzFELE1BQU0sQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLG9CQUFvQixFQUFFLENBQUMsQ0FBQztRQUN0RSxPQUFPLE1BQU0sQ0FBQztJQUNoQixDQUFDOzhHQVhVLGlCQUFpQjtrSEFBakIsaUJBQWlCLGNBRmhCLE1BQU07OzJGQUVQLGlCQUFpQjtrQkFIN0IsVUFBVTttQkFBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7O0FBbUJELE1BQU0sT0FBTyxnQkFBaUIsU0FBUSxxQkFBMkI7SUFDL0QsWUFBc0IsT0FBMEI7UUFDOUMsS0FBSyxFQUFFLENBQUM7UUFEWSxZQUFPLEdBQVAsT0FBTyxDQUFtQjtJQUVoRCxDQUFDOzhHQUhVLGdCQUFnQjs0R0FBaEIsZ0JBQWdCOzsyRkFBaEIsZ0JBQWdCO2tCQUo1QixJQUFJO21CQUFDO29CQUNKLElBQUksRUFBRSxVQUFVO29CQUNoQixJQUFJLEVBQUUsSUFBSTtpQkFDWDs7QUFVRCxNQUFNLE9BQU8scUJBQXNCLFNBQVEsMEJBQWdDO0lBQ3pFLFlBQ29CLElBQWdCLEVBQ3hCLElBQVksRUFDWixPQUEwQjtRQUVwQyxLQUFLLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBSkEsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUN4QixTQUFJLEdBQUosSUFBSSxDQUFRO1FBQ1osWUFBTyxHQUFQLE9BQU8sQ0FBbUI7SUFHdEMsQ0FBQztJQUVTLGtCQUFrQixDQUFDLFFBQWM7UUFDekMsT0FBTyxRQUFRLENBQUMsS0FBSyxDQUFDO0lBQ3hCLENBQUM7OEdBWFUscUJBQXFCO2tHQUFyQixxQkFBcUI7OzJGQUFyQixxQkFBcUI7a0JBSGpDLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLFlBQVk7aUJBQ3ZCOzswQkFHSSxJQUFJIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBIb3N0LCBJbmplY3RhYmxlLCBOZ1pvbmUsIFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEdMVEYsIEdMVEZMb2FkZXIgfSBmcm9tICd0aHJlZS9leGFtcGxlcy9qc20vbG9hZGVycy9HTFRGTG9hZGVyLmpzJztcbmltcG9ydCB7IFRoT2JqZWN0M0QgfSBmcm9tICcuLi9nZW5lcmF0ZWQvVGhPYmplY3QzRCc7XG5pbXBvcnQgeyBEUkFDT0xvYWRlclNlcnZpY2UgfSBmcm9tICcuL2NvbXByZXNzZWQtdGV4dHVyZS9UaERSQUNPTG9hZGVyJztcbmltcG9ydCB7IFRoQXN5bmNMb2FkZXJCYXNlRGlyZWN0aXZlLCBUaEFzeW5jTG9hZGVyQmFzZVBpcGUsIFRoQXN5bmNMb2FkZXJTZXJ2aWNlIH0gZnJvbSAnLi9UaEFzeW5jTG9hZGVyQmFzZSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBHTFRGTG9hZGVyU2VydmljZSBleHRlbmRzIFRoQXN5bmNMb2FkZXJTZXJ2aWNlPEdMVEY+IHtcbiAgcHVibGljIGNsYXp6ID0gR0xURkxvYWRlcjtcblxuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgZHJhY29Mb2FkZXJTZXJ2aWNlOiBEUkFDT0xvYWRlclNlcnZpY2UpIHtcbiAgICBzdXBlcigpO1xuICB9XG5cbiAgcHVibGljIGNyZWF0ZUxvYWRlckluc3RhbmNlKCk6IEdMVEZMb2FkZXIge1xuICAgIGNvbnN0IGxvYWRlciA9IHN1cGVyLmNyZWF0ZUxvYWRlckluc3RhbmNlKCkgYXMgR0xURkxvYWRlcjtcbiAgICBsb2FkZXIuc2V0RFJBQ09Mb2FkZXIodGhpcy5kcmFjb0xvYWRlclNlcnZpY2UuY3JlYXRlTG9hZGVySW5zdGFuY2UoKSk7XG4gICAgcmV0dXJuIGxvYWRlcjtcbiAgfVxufVxuXG5AUGlwZSh7XG4gIG5hbWU6ICdsb2FkR0xURicsXG4gIHB1cmU6IHRydWUsXG59KVxuZXhwb3J0IGNsYXNzIFRoR0xURkxvYWRlclBpcGUgZXh0ZW5kcyBUaEFzeW5jTG9hZGVyQmFzZVBpcGU8R0xURj4gaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcbiAgY29uc3RydWN0b3IocHJvdGVjdGVkIHNlcnZpY2U6IEdMVEZMb2FkZXJTZXJ2aWNlKSB7XG4gICAgc3VwZXIoKTtcbiAgfVxufVxuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbbG9hZEdMVEZdJyxcbn0pXG5leHBvcnQgY2xhc3MgVGhHTFRGTG9hZGVyRGlyZWN0aXZlIGV4dGVuZHMgVGhBc3luY0xvYWRlckJhc2VEaXJlY3RpdmU8R0xURj4ge1xuICBjb25zdHJ1Y3RvcihcbiAgICBASG9zdCgpIHByb3RlY3RlZCBob3N0OiBUaE9iamVjdDNELFxuICAgIHByb3RlY3RlZCB6b25lOiBOZ1pvbmUsXG4gICAgcHJvdGVjdGVkIHNlcnZpY2U6IEdMVEZMb2FkZXJTZXJ2aWNlLFxuICApIHtcbiAgICBzdXBlcihob3N0LCB6b25lKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBnZXRSZWZGcm9tUmVzcG9uc2UocmVzcG9uc2U6IEdMVEYpIHtcbiAgICByZXR1cm4gcmVzcG9uc2Uuc2NlbmU7XG4gIH1cbn1cbiJdfQ==