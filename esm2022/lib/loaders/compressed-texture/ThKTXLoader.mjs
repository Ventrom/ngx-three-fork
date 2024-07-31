import { Directive, Host, Injectable, Pipe } from '@angular/core';
import { KTXLoader } from 'three/examples/jsm/loaders/KTXLoader.js';
import { ThCallbackLoaderService, ThCallbackLoaderBaseDirective, ThCallbackLoaderBasePipe, } from '../ThCallbackLoaderBase';
import * as i0 from "@angular/core";
import * as i1 from "../../generated/ThCompressedTexture";
export class KTXLoaderService extends ThCallbackLoaderService {
    constructor() {
        super(...arguments);
        this.clazz = KTXLoader;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: KTXLoaderService, deps: null, target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: KTXLoaderService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: KTXLoaderService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }] });
export class ThKTXLoaderPipe extends ThCallbackLoaderBasePipe {
    constructor(service) {
        super();
        this.service = service;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThKTXLoaderPipe, deps: [{ token: KTXLoaderService }], target: i0.ɵɵFactoryTarget.Pipe }); }
    static { this.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "14.0.0", version: "18.1.2", ngImport: i0, type: ThKTXLoaderPipe, name: "loadKTXTexture" }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThKTXLoaderPipe, decorators: [{
            type: Pipe,
            args: [{
                    name: 'loadKTXTexture',
                    pure: true,
                }]
        }], ctorParameters: () => [{ type: KTXLoaderService }] });
export class ThKTXLoaderDirective extends ThCallbackLoaderBaseDirective {
    constructor(host, zone, service) {
        super(host, zone);
        this.host = host;
        this.zone = zone;
        this.service = service;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThKTXLoaderDirective, deps: [{ token: i1.ThCompressedTexture, host: true }, { token: i0.NgZone }, { token: KTXLoaderService }], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "18.1.2", type: ThKTXLoaderDirective, selector: "[loadKTXTexture]", usesInheritance: true, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThKTXLoaderDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[loadKTXTexture]',
                }]
        }], ctorParameters: () => [{ type: i1.ThCompressedTexture, decorators: [{
                    type: Host
                }] }, { type: i0.NgZone }, { type: KTXLoaderService }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGhLVFhMb2FkZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtdGhyZWUvc3JjL2xpYi9sb2FkZXJzL2NvbXByZXNzZWQtdGV4dHVyZS9UaEtUWExvYWRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxVQUFVLEVBQVUsSUFBSSxFQUFpQixNQUFNLGVBQWUsQ0FBQztBQUN6RixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFFcEUsT0FBTyxFQUNMLHVCQUF1QixFQUN2Qiw2QkFBNkIsRUFDN0Isd0JBQXdCLEdBQ3pCLE1BQU0seUJBQXlCLENBQUM7OztBQU1qQyxNQUFNLE9BQU8sZ0JBQWlCLFNBQVEsdUJBQTBDO0lBSGhGOztRQUlTLFVBQUssR0FBRyxTQUFTLENBQUM7S0FDMUI7OEdBRlksZ0JBQWdCO2tIQUFoQixnQkFBZ0IsY0FGZixNQUFNOzsyRkFFUCxnQkFBZ0I7a0JBSDVCLFVBQVU7bUJBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COztBQVNELE1BQU0sT0FBTyxlQUFnQixTQUFRLHdCQUEyQztJQUM5RSxZQUFzQixPQUF5QjtRQUM3QyxLQUFLLEVBQUUsQ0FBQztRQURZLFlBQU8sR0FBUCxPQUFPLENBQWtCO0lBRS9DLENBQUM7OEdBSFUsZUFBZTs0R0FBZixlQUFlOzsyRkFBZixlQUFlO2tCQUozQixJQUFJO21CQUFDO29CQUNKLElBQUksRUFBRSxnQkFBZ0I7b0JBQ3RCLElBQUksRUFBRSxJQUFJO2lCQUNYOztBQVVELE1BQU0sT0FBTyxvQkFBcUIsU0FBUSw2QkFBZ0Q7SUFDeEYsWUFDb0IsSUFBeUIsRUFDakMsSUFBWSxFQUNaLE9BQXlCO1FBRW5DLEtBQUssQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFKQSxTQUFJLEdBQUosSUFBSSxDQUFxQjtRQUNqQyxTQUFJLEdBQUosSUFBSSxDQUFRO1FBQ1osWUFBTyxHQUFQLE9BQU8sQ0FBa0I7SUFHckMsQ0FBQzs4R0FQVSxvQkFBb0I7a0dBQXBCLG9CQUFvQjs7MkZBQXBCLG9CQUFvQjtrQkFIaEMsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsa0JBQWtCO2lCQUM3Qjs7MEJBR0ksSUFBSSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgSG9zdCwgSW5qZWN0YWJsZSwgTmdab25lLCBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBLVFhMb2FkZXIgfSBmcm9tICd0aHJlZS9leGFtcGxlcy9qc20vbG9hZGVycy9LVFhMb2FkZXIuanMnO1xuaW1wb3J0IHsgVGhDb21wcmVzc2VkVGV4dHVyZSB9IGZyb20gJy4uLy4uL2dlbmVyYXRlZC9UaENvbXByZXNzZWRUZXh0dXJlJztcbmltcG9ydCB7XG4gIFRoQ2FsbGJhY2tMb2FkZXJTZXJ2aWNlLFxuICBUaENhbGxiYWNrTG9hZGVyQmFzZURpcmVjdGl2ZSxcbiAgVGhDYWxsYmFja0xvYWRlckJhc2VQaXBlLFxufSBmcm9tICcuLi9UaENhbGxiYWNrTG9hZGVyQmFzZSc7XG5pbXBvcnQgeyBDb21wcmVzc2VkVGV4dHVyZSB9IGZyb20gJ3RocmVlJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIEtUWExvYWRlclNlcnZpY2UgZXh0ZW5kcyBUaENhbGxiYWNrTG9hZGVyU2VydmljZTxDb21wcmVzc2VkVGV4dHVyZT4ge1xuICBwdWJsaWMgY2xhenogPSBLVFhMb2FkZXI7XG59XG5cbkBQaXBlKHtcbiAgbmFtZTogJ2xvYWRLVFhUZXh0dXJlJyxcbiAgcHVyZTogdHJ1ZSxcbn0pXG5leHBvcnQgY2xhc3MgVGhLVFhMb2FkZXJQaXBlIGV4dGVuZHMgVGhDYWxsYmFja0xvYWRlckJhc2VQaXBlPENvbXByZXNzZWRUZXh0dXJlPiBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgc2VydmljZTogS1RYTG9hZGVyU2VydmljZSkge1xuICAgIHN1cGVyKCk7XG4gIH1cbn1cblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2xvYWRLVFhUZXh0dXJlXScsXG59KVxuZXhwb3J0IGNsYXNzIFRoS1RYTG9hZGVyRGlyZWN0aXZlIGV4dGVuZHMgVGhDYWxsYmFja0xvYWRlckJhc2VEaXJlY3RpdmU8Q29tcHJlc3NlZFRleHR1cmU+IHtcbiAgY29uc3RydWN0b3IoXG4gICAgQEhvc3QoKSBwcm90ZWN0ZWQgaG9zdDogVGhDb21wcmVzc2VkVGV4dHVyZSxcbiAgICBwcm90ZWN0ZWQgem9uZTogTmdab25lLFxuICAgIHByb3RlY3RlZCBzZXJ2aWNlOiBLVFhMb2FkZXJTZXJ2aWNlLFxuICApIHtcbiAgICBzdXBlcihob3N0LCB6b25lKTtcbiAgfVxufVxuIl19