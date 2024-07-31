import { Directive, Host, Injectable, Pipe } from '@angular/core';
import { TextureLoader } from 'three';
import { ThCallbackLoaderService, ThCallbackLoaderBaseDirective, ThCallbackLoaderBasePipe, } from './ThCallbackLoaderBase';
import * as i0 from "@angular/core";
import * as i1 from "../generated/ThTexture";
export class TextureLoaderService extends ThCallbackLoaderService {
    constructor() {
        super(...arguments);
        this.clazz = TextureLoader;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: TextureLoaderService, deps: null, target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: TextureLoaderService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: TextureLoaderService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }] });
export class ThTextureLoaderPipe extends ThCallbackLoaderBasePipe {
    constructor(service) {
        super();
        this.service = service;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThTextureLoaderPipe, deps: [{ token: TextureLoaderService }], target: i0.ɵɵFactoryTarget.Pipe }); }
    static { this.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "14.0.0", version: "18.1.2", ngImport: i0, type: ThTextureLoaderPipe, name: "loadTexture" }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThTextureLoaderPipe, decorators: [{
            type: Pipe,
            args: [{
                    name: 'loadTexture',
                    pure: true,
                }]
        }], ctorParameters: () => [{ type: TextureLoaderService }] });
export class ThTextureLoaderDirective extends ThCallbackLoaderBaseDirective {
    constructor(host, zone, service) {
        super(host, zone);
        this.host = host;
        this.zone = zone;
        this.service = service;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThTextureLoaderDirective, deps: [{ token: i1.ThTexture, host: true }, { token: i0.NgZone }, { token: TextureLoaderService }], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "18.1.2", type: ThTextureLoaderDirective, selector: "[loadTexture]", usesInheritance: true, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThTextureLoaderDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[loadTexture]',
                }]
        }], ctorParameters: () => [{ type: i1.ThTexture, decorators: [{
                    type: Host
                }] }, { type: i0.NgZone }, { type: TextureLoaderService }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGhUZXh0dXJlTG9hZGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LXRocmVlL3NyYy9saWIvbG9hZGVycy9UaFRleHR1cmVMb2FkZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFVLElBQUksRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFDekYsT0FBTyxFQUFXLGFBQWEsRUFBRSxNQUFNLE9BQU8sQ0FBQztBQUUvQyxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLDZCQUE2QixFQUM3Qix3QkFBd0IsR0FDekIsTUFBTSx3QkFBd0IsQ0FBQzs7O0FBS2hDLE1BQU0sT0FBTyxvQkFBcUIsU0FBUSx1QkFBZ0M7SUFIMUU7O1FBSVMsVUFBSyxHQUFHLGFBQWEsQ0FBQztLQUM5Qjs4R0FGWSxvQkFBb0I7a0hBQXBCLG9CQUFvQixjQUZuQixNQUFNOzsyRkFFUCxvQkFBb0I7a0JBSGhDLFVBQVU7bUJBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COztBQVNELE1BQU0sT0FBTyxtQkFBb0IsU0FBUSx3QkFBaUM7SUFDeEUsWUFBc0IsT0FBNkI7UUFDakQsS0FBSyxFQUFFLENBQUM7UUFEWSxZQUFPLEdBQVAsT0FBTyxDQUFzQjtJQUVuRCxDQUFDOzhHQUhVLG1CQUFtQjs0R0FBbkIsbUJBQW1COzsyRkFBbkIsbUJBQW1CO2tCQUovQixJQUFJO21CQUFDO29CQUNKLElBQUksRUFBRSxhQUFhO29CQUNuQixJQUFJLEVBQUUsSUFBSTtpQkFDWDs7QUFVRCxNQUFNLE9BQU8sd0JBQXlCLFNBQVEsNkJBQXNDO0lBQ2xGLFlBQ29CLElBQXdCLEVBQ2hDLElBQVksRUFDWixPQUE2QjtRQUV2QyxLQUFLLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBSkEsU0FBSSxHQUFKLElBQUksQ0FBb0I7UUFDaEMsU0FBSSxHQUFKLElBQUksQ0FBUTtRQUNaLFlBQU8sR0FBUCxPQUFPLENBQXNCO0lBR3pDLENBQUM7OEdBUFUsd0JBQXdCO2tHQUF4Qix3QkFBd0I7OzJGQUF4Qix3QkFBd0I7a0JBSHBDLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLGVBQWU7aUJBQzFCOzswQkFHSSxJQUFJIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBIb3N0LCBJbmplY3RhYmxlLCBOZ1pvbmUsIFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFRleHR1cmUsIFRleHR1cmVMb2FkZXIgfSBmcm9tICd0aHJlZSc7XG5pbXBvcnQgeyBUaFRleHR1cmUgfSBmcm9tICcuLi9nZW5lcmF0ZWQvVGhUZXh0dXJlJztcbmltcG9ydCB7XG4gIFRoQ2FsbGJhY2tMb2FkZXJTZXJ2aWNlLFxuICBUaENhbGxiYWNrTG9hZGVyQmFzZURpcmVjdGl2ZSxcbiAgVGhDYWxsYmFja0xvYWRlckJhc2VQaXBlLFxufSBmcm9tICcuL1RoQ2FsbGJhY2tMb2FkZXJCYXNlJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIFRleHR1cmVMb2FkZXJTZXJ2aWNlIGV4dGVuZHMgVGhDYWxsYmFja0xvYWRlclNlcnZpY2U8VGV4dHVyZT4ge1xuICBwdWJsaWMgY2xhenogPSBUZXh0dXJlTG9hZGVyO1xufVxuXG5AUGlwZSh7XG4gIG5hbWU6ICdsb2FkVGV4dHVyZScsXG4gIHB1cmU6IHRydWUsXG59KVxuZXhwb3J0IGNsYXNzIFRoVGV4dHVyZUxvYWRlclBpcGUgZXh0ZW5kcyBUaENhbGxiYWNrTG9hZGVyQmFzZVBpcGU8VGV4dHVyZT4gaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcbiAgY29uc3RydWN0b3IocHJvdGVjdGVkIHNlcnZpY2U6IFRleHR1cmVMb2FkZXJTZXJ2aWNlKSB7XG4gICAgc3VwZXIoKTtcbiAgfVxufVxuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbbG9hZFRleHR1cmVdJyxcbn0pXG5leHBvcnQgY2xhc3MgVGhUZXh0dXJlTG9hZGVyRGlyZWN0aXZlIGV4dGVuZHMgVGhDYWxsYmFja0xvYWRlckJhc2VEaXJlY3RpdmU8VGV4dHVyZT4ge1xuICBjb25zdHJ1Y3RvcihcbiAgICBASG9zdCgpIHByb3RlY3RlZCBob3N0OiBUaFRleHR1cmU8VGV4dHVyZT4sXG4gICAgcHJvdGVjdGVkIHpvbmU6IE5nWm9uZSxcbiAgICBwcm90ZWN0ZWQgc2VydmljZTogVGV4dHVyZUxvYWRlclNlcnZpY2UsXG4gICkge1xuICAgIHN1cGVyKGhvc3QsIHpvbmUpO1xuICB9XG59XG4iXX0=