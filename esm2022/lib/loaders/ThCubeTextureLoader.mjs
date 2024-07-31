import { Directive, Host, Injectable, Pipe } from '@angular/core';
import { CubeTextureLoader } from 'three';
import { ThCallbackLoaderService, ThCallbackLoaderBaseDirective, ThCallbackLoaderBasePipe, } from './ThCallbackLoaderBase';
import * as i0 from "@angular/core";
import * as i1 from "../generated/ThTexture";
export class CubeTextureLoaderService extends ThCallbackLoaderService {
    constructor() {
        super(...arguments);
        this.clazz = CubeTextureLoader;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: CubeTextureLoaderService, deps: null, target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: CubeTextureLoaderService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: CubeTextureLoaderService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }] });
export class ThCubeTextureLoaderPipe extends ThCallbackLoaderBasePipe {
    constructor(service) {
        super();
        this.service = service;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThCubeTextureLoaderPipe, deps: [{ token: CubeTextureLoaderService }], target: i0.ɵɵFactoryTarget.Pipe }); }
    static { this.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "14.0.0", version: "18.1.2", ngImport: i0, type: ThCubeTextureLoaderPipe, name: "loadCubeTexture" }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThCubeTextureLoaderPipe, decorators: [{
            type: Pipe,
            args: [{
                    name: 'loadCubeTexture',
                    pure: true,
                }]
        }], ctorParameters: () => [{ type: CubeTextureLoaderService }] });
export class ThCubeTextureLoaderDirective extends ThCallbackLoaderBaseDirective {
    constructor(host, zone, service) {
        super(host, zone);
        this.host = host;
        this.zone = zone;
        this.service = service;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThCubeTextureLoaderDirective, deps: [{ token: i1.ThTexture, host: true }, { token: i0.NgZone }, { token: CubeTextureLoaderService }], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "18.1.2", type: ThCubeTextureLoaderDirective, selector: "[loadCubeTexture]", usesInheritance: true, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThCubeTextureLoaderDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[loadCubeTexture]',
                }]
        }], ctorParameters: () => [{ type: i1.ThTexture, decorators: [{
                    type: Host
                }] }, { type: i0.NgZone }, { type: CubeTextureLoaderService }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGhDdWJlVGV4dHVyZUxvYWRlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC10aHJlZS9zcmMvbGliL2xvYWRlcnMvVGhDdWJlVGV4dHVyZUxvYWRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxVQUFVLEVBQVUsSUFBSSxFQUFpQixNQUFNLGVBQWUsQ0FBQztBQUN6RixPQUFPLEVBQWUsaUJBQWlCLEVBQVcsTUFBTSxPQUFPLENBQUM7QUFFaEUsT0FBTyxFQUNMLHVCQUF1QixFQUN2Qiw2QkFBNkIsRUFDN0Isd0JBQXdCLEdBQ3pCLE1BQU0sd0JBQXdCLENBQUM7OztBQUtoQyxNQUFNLE9BQU8sd0JBQXlCLFNBQVEsdUJBQThDO0lBSDVGOztRQUlTLFVBQUssR0FBRyxpQkFBaUIsQ0FBQztLQUNsQzs4R0FGWSx3QkFBd0I7a0hBQXhCLHdCQUF3QixjQUZ2QixNQUFNOzsyRkFFUCx3QkFBd0I7a0JBSHBDLFVBQVU7bUJBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COztBQVNELE1BQU0sT0FBTyx1QkFBd0IsU0FBUSx3QkFBK0M7SUFDMUYsWUFBc0IsT0FBaUM7UUFDckQsS0FBSyxFQUFFLENBQUM7UUFEWSxZQUFPLEdBQVAsT0FBTyxDQUEwQjtJQUV2RCxDQUFDOzhHQUhVLHVCQUF1Qjs0R0FBdkIsdUJBQXVCOzsyRkFBdkIsdUJBQXVCO2tCQUpuQyxJQUFJO21CQUFDO29CQUNKLElBQUksRUFBRSxpQkFBaUI7b0JBQ3ZCLElBQUksRUFBRSxJQUFJO2lCQUNYOztBQVVELE1BQU0sT0FBTyw0QkFBNkIsU0FBUSw2QkFBb0Q7SUFDcEcsWUFDb0IsSUFBd0IsRUFDaEMsSUFBWSxFQUNaLE9BQWlDO1FBRTNDLEtBQUssQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFKQSxTQUFJLEdBQUosSUFBSSxDQUFvQjtRQUNoQyxTQUFJLEdBQUosSUFBSSxDQUFRO1FBQ1osWUFBTyxHQUFQLE9BQU8sQ0FBMEI7SUFHN0MsQ0FBQzs4R0FQVSw0QkFBNEI7a0dBQTVCLDRCQUE0Qjs7MkZBQTVCLDRCQUE0QjtrQkFIeEMsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsbUJBQW1CO2lCQUM5Qjs7MEJBR0ksSUFBSSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgSG9zdCwgSW5qZWN0YWJsZSwgTmdab25lLCBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDdWJlVGV4dHVyZSwgQ3ViZVRleHR1cmVMb2FkZXIsIFRleHR1cmUgfSBmcm9tICd0aHJlZSc7XG5pbXBvcnQgeyBUaFRleHR1cmUgfSBmcm9tICcuLi9nZW5lcmF0ZWQvVGhUZXh0dXJlJztcbmltcG9ydCB7XG4gIFRoQ2FsbGJhY2tMb2FkZXJTZXJ2aWNlLFxuICBUaENhbGxiYWNrTG9hZGVyQmFzZURpcmVjdGl2ZSxcbiAgVGhDYWxsYmFja0xvYWRlckJhc2VQaXBlLFxufSBmcm9tICcuL1RoQ2FsbGJhY2tMb2FkZXJCYXNlJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIEN1YmVUZXh0dXJlTG9hZGVyU2VydmljZSBleHRlbmRzIFRoQ2FsbGJhY2tMb2FkZXJTZXJ2aWNlPEN1YmVUZXh0dXJlLCBzdHJpbmdbXT4ge1xuICBwdWJsaWMgY2xhenogPSBDdWJlVGV4dHVyZUxvYWRlcjtcbn1cblxuQFBpcGUoe1xuICBuYW1lOiAnbG9hZEN1YmVUZXh0dXJlJyxcbiAgcHVyZTogdHJ1ZSxcbn0pXG5leHBvcnQgY2xhc3MgVGhDdWJlVGV4dHVyZUxvYWRlclBpcGUgZXh0ZW5kcyBUaENhbGxiYWNrTG9hZGVyQmFzZVBpcGU8Q3ViZVRleHR1cmUsIHN0cmluZ1tdPiBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgc2VydmljZTogQ3ViZVRleHR1cmVMb2FkZXJTZXJ2aWNlKSB7XG4gICAgc3VwZXIoKTtcbiAgfVxufVxuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbbG9hZEN1YmVUZXh0dXJlXScsXG59KVxuZXhwb3J0IGNsYXNzIFRoQ3ViZVRleHR1cmVMb2FkZXJEaXJlY3RpdmUgZXh0ZW5kcyBUaENhbGxiYWNrTG9hZGVyQmFzZURpcmVjdGl2ZTxDdWJlVGV4dHVyZSwgc3RyaW5nW10+IHtcbiAgY29uc3RydWN0b3IoXG4gICAgQEhvc3QoKSBwcm90ZWN0ZWQgaG9zdDogVGhUZXh0dXJlPFRleHR1cmU+LFxuICAgIHByb3RlY3RlZCB6b25lOiBOZ1pvbmUsXG4gICAgcHJvdGVjdGVkIHNlcnZpY2U6IEN1YmVUZXh0dXJlTG9hZGVyU2VydmljZSxcbiAgKSB7XG4gICAgc3VwZXIoaG9zdCwgem9uZSk7XG4gIH1cbn1cbiJdfQ==