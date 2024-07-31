import { Directive, Host, Injectable, Pipe } from '@angular/core';
import { RGBELoader } from 'three/examples/jsm/loaders/RGBELoader.js';
import { ThCallbackLoaderService, ThCallbackLoaderBaseDirective, ThCallbackLoaderBasePipe, } from '../ThCallbackLoaderBase';
import * as i0 from "@angular/core";
import * as i1 from "../../generated/ThDataTexture";
export class RGBELoaderService extends ThCallbackLoaderService {
    constructor() {
        super(...arguments);
        this.clazz = RGBELoader;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: RGBELoaderService, deps: null, target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: RGBELoaderService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: RGBELoaderService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }] });
export class ThRGBELoaderPipe extends ThCallbackLoaderBasePipe {
    constructor(service) {
        super();
        this.service = service;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThRGBELoaderPipe, deps: [{ token: RGBELoaderService }], target: i0.ɵɵFactoryTarget.Pipe }); }
    static { this.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "14.0.0", version: "18.1.2", ngImport: i0, type: ThRGBELoaderPipe, name: "loadRGBETexture" }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThRGBELoaderPipe, decorators: [{
            type: Pipe,
            args: [{
                    name: 'loadRGBETexture',
                    pure: true,
                }]
        }], ctorParameters: () => [{ type: RGBELoaderService }] });
export class ThRGBELoaderDirective extends ThCallbackLoaderBaseDirective {
    constructor(host, zone, service) {
        super(host, zone);
        this.host = host;
        this.zone = zone;
        this.service = service;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThRGBELoaderDirective, deps: [{ token: i1.ThDataTexture, host: true }, { token: i0.NgZone }, { token: RGBELoaderService }], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "18.1.2", type: ThRGBELoaderDirective, selector: "[loadRGBETexture]", usesInheritance: true, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThRGBELoaderDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[loadRGBETexture]',
                }]
        }], ctorParameters: () => [{ type: i1.ThDataTexture, decorators: [{
                    type: Host
                }] }, { type: i0.NgZone }, { type: RGBELoaderService }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGhSR0JFTG9hZGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LXRocmVlL3NyYy9saWIvbG9hZGVycy9kYXRhLXRleHR1cmUvVGhSR0JFTG9hZGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBVSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBQ3pGLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQUV0RSxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLDZCQUE2QixFQUM3Qix3QkFBd0IsR0FDekIsTUFBTSx5QkFBeUIsQ0FBQzs7O0FBTWpDLE1BQU0sT0FBTyxpQkFBa0IsU0FBUSx1QkFBb0M7SUFIM0U7O1FBSVMsVUFBSyxHQUFHLFVBQVUsQ0FBQztLQUMzQjs4R0FGWSxpQkFBaUI7a0hBQWpCLGlCQUFpQixjQUZoQixNQUFNOzsyRkFFUCxpQkFBaUI7a0JBSDdCLFVBQVU7bUJBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COztBQVNELE1BQU0sT0FBTyxnQkFBaUIsU0FBUSx3QkFBcUM7SUFDekUsWUFBc0IsT0FBMEI7UUFDOUMsS0FBSyxFQUFFLENBQUM7UUFEWSxZQUFPLEdBQVAsT0FBTyxDQUFtQjtJQUVoRCxDQUFDOzhHQUhVLGdCQUFnQjs0R0FBaEIsZ0JBQWdCOzsyRkFBaEIsZ0JBQWdCO2tCQUo1QixJQUFJO21CQUFDO29CQUNKLElBQUksRUFBRSxpQkFBaUI7b0JBQ3ZCLElBQUksRUFBRSxJQUFJO2lCQUNYOztBQVVELE1BQU0sT0FBTyxxQkFBc0IsU0FBUSw2QkFBMEM7SUFDbkYsWUFDb0IsSUFBbUIsRUFDM0IsSUFBWSxFQUNaLE9BQTBCO1FBRXBDLEtBQUssQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFKQSxTQUFJLEdBQUosSUFBSSxDQUFlO1FBQzNCLFNBQUksR0FBSixJQUFJLENBQVE7UUFDWixZQUFPLEdBQVAsT0FBTyxDQUFtQjtJQUd0QyxDQUFDOzhHQVBVLHFCQUFxQjtrR0FBckIscUJBQXFCOzsyRkFBckIscUJBQXFCO2tCQUhqQyxTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxtQkFBbUI7aUJBQzlCOzswQkFHSSxJQUFJIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBIb3N0LCBJbmplY3RhYmxlLCBOZ1pvbmUsIFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJHQkVMb2FkZXIgfSBmcm9tICd0aHJlZS9leGFtcGxlcy9qc20vbG9hZGVycy9SR0JFTG9hZGVyLmpzJztcbmltcG9ydCB7IFRoRGF0YVRleHR1cmUgfSBmcm9tICcuLi8uLi9nZW5lcmF0ZWQvVGhEYXRhVGV4dHVyZSc7XG5pbXBvcnQge1xuICBUaENhbGxiYWNrTG9hZGVyU2VydmljZSxcbiAgVGhDYWxsYmFja0xvYWRlckJhc2VEaXJlY3RpdmUsXG4gIFRoQ2FsbGJhY2tMb2FkZXJCYXNlUGlwZSxcbn0gZnJvbSAnLi4vVGhDYWxsYmFja0xvYWRlckJhc2UnO1xuaW1wb3J0IHsgRGF0YVRleHR1cmUgfSBmcm9tICd0aHJlZSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBSR0JFTG9hZGVyU2VydmljZSBleHRlbmRzIFRoQ2FsbGJhY2tMb2FkZXJTZXJ2aWNlPERhdGFUZXh0dXJlPiB7XG4gIHB1YmxpYyBjbGF6eiA9IFJHQkVMb2FkZXI7XG59XG5cbkBQaXBlKHtcbiAgbmFtZTogJ2xvYWRSR0JFVGV4dHVyZScsXG4gIHB1cmU6IHRydWUsXG59KVxuZXhwb3J0IGNsYXNzIFRoUkdCRUxvYWRlclBpcGUgZXh0ZW5kcyBUaENhbGxiYWNrTG9hZGVyQmFzZVBpcGU8RGF0YVRleHR1cmU+IGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBzZXJ2aWNlOiBSR0JFTG9hZGVyU2VydmljZSkge1xuICAgIHN1cGVyKCk7XG4gIH1cbn1cblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2xvYWRSR0JFVGV4dHVyZV0nLFxufSlcbmV4cG9ydCBjbGFzcyBUaFJHQkVMb2FkZXJEaXJlY3RpdmUgZXh0ZW5kcyBUaENhbGxiYWNrTG9hZGVyQmFzZURpcmVjdGl2ZTxEYXRhVGV4dHVyZT4ge1xuICBjb25zdHJ1Y3RvcihcbiAgICBASG9zdCgpIHByb3RlY3RlZCBob3N0OiBUaERhdGFUZXh0dXJlLFxuICAgIHByb3RlY3RlZCB6b25lOiBOZ1pvbmUsXG4gICAgcHJvdGVjdGVkIHNlcnZpY2U6IFJHQkVMb2FkZXJTZXJ2aWNlLFxuICApIHtcbiAgICBzdXBlcihob3N0LCB6b25lKTtcbiAgfVxufVxuIl19