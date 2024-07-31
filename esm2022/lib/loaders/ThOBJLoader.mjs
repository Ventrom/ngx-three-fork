import { Directive, Host, Injectable, Pipe } from '@angular/core';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js';
import { ThAsyncLoaderBaseDirective, ThAsyncLoaderBasePipe, ThAsyncLoaderService } from './ThAsyncLoaderBase';
import * as i0 from "@angular/core";
import * as i1 from "../generated/ThObject3D";
export class OBJLoaderService extends ThAsyncLoaderService {
    constructor() {
        super(...arguments);
        this.clazz = OBJLoader;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: OBJLoaderService, deps: null, target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: OBJLoaderService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: OBJLoaderService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }] });
export class ThObjLoaderPipe extends ThAsyncLoaderBasePipe {
    constructor(service) {
        super();
        this.service = service;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThObjLoaderPipe, deps: [{ token: OBJLoaderService }], target: i0.ɵɵFactoryTarget.Pipe }); }
    static { this.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "14.0.0", version: "18.1.2", ngImport: i0, type: ThObjLoaderPipe, name: "loadObj" }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThObjLoaderPipe, decorators: [{
            type: Pipe,
            args: [{
                    name: 'loadObj',
                    pure: true,
                }]
        }], ctorParameters: () => [{ type: OBJLoaderService }] });
export class ThObjLoaderDirective extends ThAsyncLoaderBaseDirective {
    constructor(host, zone, service) {
        super(host, zone);
        this.host = host;
        this.zone = zone;
        this.service = service;
    }
    getRefFromResponse(response) {
        return response;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThObjLoaderDirective, deps: [{ token: i1.ThObject3D, host: true }, { token: i0.NgZone }, { token: OBJLoaderService }], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "18.1.2", type: ThObjLoaderDirective, selector: "[loadObj]", usesInheritance: true, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThObjLoaderDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[loadObj]',
                }]
        }], ctorParameters: () => [{ type: i1.ThObject3D, decorators: [{
                    type: Host
                }] }, { type: i0.NgZone }, { type: OBJLoaderService }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGhPQkpMb2FkZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtdGhyZWUvc3JjL2xpYi9sb2FkZXJzL1RoT0JKTG9hZGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBVSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBR3pGLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztBQUNwRSxPQUFPLEVBQUUsMEJBQTBCLEVBQUUscUJBQXFCLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQzs7O0FBTTlHLE1BQU0sT0FBTyxnQkFBaUIsU0FBUSxvQkFBMkI7SUFIakU7O1FBSVMsVUFBSyxHQUFHLFNBQVMsQ0FBQztLQUMxQjs4R0FGWSxnQkFBZ0I7a0hBQWhCLGdCQUFnQixjQUZmLE1BQU07OzJGQUVQLGdCQUFnQjtrQkFINUIsVUFBVTttQkFBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7O0FBU0QsTUFBTSxPQUFPLGVBQWdCLFNBQVEscUJBQTRCO0lBQy9ELFlBQXNCLE9BQXlCO1FBQzdDLEtBQUssRUFBRSxDQUFDO1FBRFksWUFBTyxHQUFQLE9BQU8sQ0FBa0I7SUFFL0MsQ0FBQzs4R0FIVSxlQUFlOzRHQUFmLGVBQWU7OzJGQUFmLGVBQWU7a0JBSjNCLElBQUk7bUJBQUM7b0JBQ0osSUFBSSxFQUFFLFNBQVM7b0JBQ2YsSUFBSSxFQUFFLElBQUk7aUJBQ1g7O0FBVUQsTUFBTSxPQUFPLG9CQUFxQixTQUFRLDBCQUFpQztJQUN6RSxZQUNvQixJQUFnQixFQUN4QixJQUFZLEVBQ1osT0FBeUI7UUFFbkMsS0FBSyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztRQUpBLFNBQUksR0FBSixJQUFJLENBQVk7UUFDeEIsU0FBSSxHQUFKLElBQUksQ0FBUTtRQUNaLFlBQU8sR0FBUCxPQUFPLENBQWtCO0lBR3JDLENBQUM7SUFFUyxrQkFBa0IsQ0FBQyxRQUFlO1FBQzFDLE9BQU8sUUFBUSxDQUFDO0lBQ2xCLENBQUM7OEdBWFUsb0JBQW9CO2tHQUFwQixvQkFBb0I7OzJGQUFwQixvQkFBb0I7a0JBSGhDLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLFdBQVc7aUJBQ3RCOzswQkFHSSxJQUFJIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBIb3N0LCBJbmplY3RhYmxlLCBOZ1pvbmUsIFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgVGhPYmplY3QzRCB9IGZyb20gJy4uL2dlbmVyYXRlZC9UaE9iamVjdDNEJztcbmltcG9ydCB7IE9CSkxvYWRlciB9IGZyb20gJ3RocmVlL2V4YW1wbGVzL2pzbS9sb2FkZXJzL09CSkxvYWRlci5qcyc7XG5pbXBvcnQgeyBUaEFzeW5jTG9hZGVyQmFzZURpcmVjdGl2ZSwgVGhBc3luY0xvYWRlckJhc2VQaXBlLCBUaEFzeW5jTG9hZGVyU2VydmljZSB9IGZyb20gJy4vVGhBc3luY0xvYWRlckJhc2UnO1xuaW1wb3J0IHsgR3JvdXAgfSBmcm9tICd0aHJlZSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBPQkpMb2FkZXJTZXJ2aWNlIGV4dGVuZHMgVGhBc3luY0xvYWRlclNlcnZpY2U8R3JvdXA+IHtcbiAgcHVibGljIGNsYXp6ID0gT0JKTG9hZGVyO1xufVxuXG5AUGlwZSh7XG4gIG5hbWU6ICdsb2FkT2JqJyxcbiAgcHVyZTogdHJ1ZSxcbn0pXG5leHBvcnQgY2xhc3MgVGhPYmpMb2FkZXJQaXBlIGV4dGVuZHMgVGhBc3luY0xvYWRlckJhc2VQaXBlPEdyb3VwPiBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgc2VydmljZTogT0JKTG9hZGVyU2VydmljZSkge1xuICAgIHN1cGVyKCk7XG4gIH1cbn1cblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2xvYWRPYmpdJyxcbn0pXG5leHBvcnQgY2xhc3MgVGhPYmpMb2FkZXJEaXJlY3RpdmUgZXh0ZW5kcyBUaEFzeW5jTG9hZGVyQmFzZURpcmVjdGl2ZTxHcm91cD4ge1xuICBjb25zdHJ1Y3RvcihcbiAgICBASG9zdCgpIHByb3RlY3RlZCBob3N0OiBUaE9iamVjdDNELFxuICAgIHByb3RlY3RlZCB6b25lOiBOZ1pvbmUsXG4gICAgcHJvdGVjdGVkIHNlcnZpY2U6IE9CSkxvYWRlclNlcnZpY2UsXG4gICkge1xuICAgIHN1cGVyKGhvc3QsIHpvbmUpO1xuICB9XG5cbiAgcHJvdGVjdGVkIGdldFJlZkZyb21SZXNwb25zZShyZXNwb25zZTogR3JvdXApIHtcbiAgICByZXR1cm4gcmVzcG9uc2U7XG4gIH1cbn1cbiJdfQ==