import { Directive, Host, Injectable, Pipe } from '@angular/core';
import { KTX2Loader } from 'three/examples/jsm/loaders/KTX2Loader.js';
import { ThCallbackLoaderService, ThCallbackLoaderBaseDirective, ThCallbackLoaderBasePipe, } from '../ThCallbackLoaderBase';
import * as i0 from "@angular/core";
import * as i1 from "../../generated/ThTexture";
export class KTX2LoaderService extends ThCallbackLoaderService {
    constructor() {
        super(...arguments);
        this.clazz = KTX2Loader;
        this.transcoderPath = '';
    }
    setDecoderPath(path) {
        this.transcoderPath = path;
    }
    createLoaderInstance() {
        const loader = super.createLoaderInstance();
        loader.setTranscoderPath(this.transcoderPath);
        return loader;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: KTX2LoaderService, deps: null, target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: KTX2LoaderService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: KTX2LoaderService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }] });
export class ThKTX2LoaderPipe extends ThCallbackLoaderBasePipe {
    constructor(service) {
        super();
        this.service = service;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThKTX2LoaderPipe, deps: [{ token: KTX2LoaderService }], target: i0.ɵɵFactoryTarget.Pipe }); }
    static { this.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "14.0.0", version: "18.1.2", ngImport: i0, type: ThKTX2LoaderPipe, name: "loadKTX2Texture" }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThKTX2LoaderPipe, decorators: [{
            type: Pipe,
            args: [{
                    name: 'loadKTX2Texture',
                    pure: true,
                }]
        }], ctorParameters: () => [{ type: KTX2LoaderService }] });
export class ThKTX2LoaderDirective extends ThCallbackLoaderBaseDirective {
    constructor(host, zone, service) {
        super(host, zone);
        this.host = host;
        this.zone = zone;
        this.service = service;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThKTX2LoaderDirective, deps: [{ token: i1.ThTexture, host: true }, { token: i0.NgZone }, { token: KTX2LoaderService }], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "18.1.2", type: ThKTX2LoaderDirective, selector: "[loadKTX2Texture]", usesInheritance: true, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThKTX2LoaderDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[loadKTX2Texture]',
                }]
        }], ctorParameters: () => [{ type: i1.ThTexture, decorators: [{
                    type: Host
                }] }, { type: i0.NgZone }, { type: KTX2LoaderService }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGhLVFgyTG9hZGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LXRocmVlL3NyYy9saWIvbG9hZGVycy9jb21wcmVzc2VkLXRleHR1cmUvVGhLVFgyTG9hZGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBVSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBQ3pGLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQUV0RSxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLDZCQUE2QixFQUM3Qix3QkFBd0IsR0FDekIsTUFBTSx5QkFBeUIsQ0FBQzs7O0FBTWpDLE1BQU0sT0FBTyxpQkFBa0IsU0FBUSx1QkFBMEM7SUFIakY7O1FBSWtCLFVBQUssR0FBRyxVQUFVLENBQUM7UUFFekIsbUJBQWMsR0FBRyxFQUFFLENBQUM7S0FXL0I7SUFUUSxjQUFjLENBQUMsSUFBWTtRQUNoQyxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQztJQUM3QixDQUFDO0lBRU0sb0JBQW9CO1FBQ3pCLE1BQU0sTUFBTSxHQUFHLEtBQUssQ0FBQyxvQkFBb0IsRUFBZ0IsQ0FBQztRQUMxRCxNQUFNLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBQzlDLE9BQU8sTUFBTSxDQUFDO0lBQ2hCLENBQUM7OEdBYlUsaUJBQWlCO2tIQUFqQixpQkFBaUIsY0FGaEIsTUFBTTs7MkZBRVAsaUJBQWlCO2tCQUg3QixVQUFVO21CQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7QUFxQkQsTUFBTSxPQUFPLGdCQUFpQixTQUFRLHdCQUEyQztJQUMvRSxZQUFzQixPQUEwQjtRQUM5QyxLQUFLLEVBQUUsQ0FBQztRQURZLFlBQU8sR0FBUCxPQUFPLENBQW1CO0lBRWhELENBQUM7OEdBSFUsZ0JBQWdCOzRHQUFoQixnQkFBZ0I7OzJGQUFoQixnQkFBZ0I7a0JBSjVCLElBQUk7bUJBQUM7b0JBQ0osSUFBSSxFQUFFLGlCQUFpQjtvQkFDdkIsSUFBSSxFQUFFLElBQUk7aUJBQ1g7O0FBVUQsTUFBTSxPQUFPLHFCQUFzQixTQUFRLDZCQUFnRDtJQUN6RixZQUNvQixJQUFlLEVBQ3ZCLElBQVksRUFDWixPQUEwQjtRQUVwQyxLQUFLLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBSkEsU0FBSSxHQUFKLElBQUksQ0FBVztRQUN2QixTQUFJLEdBQUosSUFBSSxDQUFRO1FBQ1osWUFBTyxHQUFQLE9BQU8sQ0FBbUI7SUFHdEMsQ0FBQzs4R0FQVSxxQkFBcUI7a0dBQXJCLHFCQUFxQjs7MkZBQXJCLHFCQUFxQjtrQkFIakMsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsbUJBQW1CO2lCQUM5Qjs7MEJBR0ksSUFBSSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgSG9zdCwgSW5qZWN0YWJsZSwgTmdab25lLCBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBLVFgyTG9hZGVyIH0gZnJvbSAndGhyZWUvZXhhbXBsZXMvanNtL2xvYWRlcnMvS1RYMkxvYWRlci5qcyc7XG5pbXBvcnQgeyBUaFRleHR1cmUgfSBmcm9tICcuLi8uLi9nZW5lcmF0ZWQvVGhUZXh0dXJlJztcbmltcG9ydCB7XG4gIFRoQ2FsbGJhY2tMb2FkZXJTZXJ2aWNlLFxuICBUaENhbGxiYWNrTG9hZGVyQmFzZURpcmVjdGl2ZSxcbiAgVGhDYWxsYmFja0xvYWRlckJhc2VQaXBlLFxufSBmcm9tICcuLi9UaENhbGxiYWNrTG9hZGVyQmFzZSc7XG5pbXBvcnQgeyBDb21wcmVzc2VkVGV4dHVyZSB9IGZyb20gJ3RocmVlJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIEtUWDJMb2FkZXJTZXJ2aWNlIGV4dGVuZHMgVGhDYWxsYmFja0xvYWRlclNlcnZpY2U8Q29tcHJlc3NlZFRleHR1cmU+IHtcbiAgcHVibGljIHJlYWRvbmx5IGNsYXp6ID0gS1RYMkxvYWRlcjtcblxuICBwcm90ZWN0ZWQgdHJhbnNjb2RlclBhdGggPSAnJztcblxuICBwdWJsaWMgc2V0RGVjb2RlclBhdGgocGF0aDogc3RyaW5nKSB7XG4gICAgdGhpcy50cmFuc2NvZGVyUGF0aCA9IHBhdGg7XG4gIH1cblxuICBwdWJsaWMgY3JlYXRlTG9hZGVySW5zdGFuY2UoKTogS1RYMkxvYWRlciB7XG4gICAgY29uc3QgbG9hZGVyID0gc3VwZXIuY3JlYXRlTG9hZGVySW5zdGFuY2UoKSBhcyBLVFgyTG9hZGVyO1xuICAgIGxvYWRlci5zZXRUcmFuc2NvZGVyUGF0aCh0aGlzLnRyYW5zY29kZXJQYXRoKTtcbiAgICByZXR1cm4gbG9hZGVyO1xuICB9XG59XG5cbkBQaXBlKHtcbiAgbmFtZTogJ2xvYWRLVFgyVGV4dHVyZScsXG4gIHB1cmU6IHRydWUsXG59KVxuZXhwb3J0IGNsYXNzIFRoS1RYMkxvYWRlclBpcGUgZXh0ZW5kcyBUaENhbGxiYWNrTG9hZGVyQmFzZVBpcGU8Q29tcHJlc3NlZFRleHR1cmU+IGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBzZXJ2aWNlOiBLVFgyTG9hZGVyU2VydmljZSkge1xuICAgIHN1cGVyKCk7XG4gIH1cbn1cblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2xvYWRLVFgyVGV4dHVyZV0nLFxufSlcbmV4cG9ydCBjbGFzcyBUaEtUWDJMb2FkZXJEaXJlY3RpdmUgZXh0ZW5kcyBUaENhbGxiYWNrTG9hZGVyQmFzZURpcmVjdGl2ZTxDb21wcmVzc2VkVGV4dHVyZT4ge1xuICBjb25zdHJ1Y3RvcihcbiAgICBASG9zdCgpIHByb3RlY3RlZCBob3N0OiBUaFRleHR1cmUsXG4gICAgcHJvdGVjdGVkIHpvbmU6IE5nWm9uZSxcbiAgICBwcm90ZWN0ZWQgc2VydmljZTogS1RYMkxvYWRlclNlcnZpY2UsXG4gICkge1xuICAgIHN1cGVyKGhvc3QsIHpvbmUpO1xuICB9XG59XG4iXX0=