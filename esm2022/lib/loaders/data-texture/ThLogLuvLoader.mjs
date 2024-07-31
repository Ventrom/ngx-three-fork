import { Directive, Host, Injectable, Pipe } from '@angular/core';
import { LogLuvLoader } from 'three/examples/jsm/loaders/LogLuvLoader.js';
import { ThCallbackLoaderBaseDirective, ThCallbackLoaderBasePipe, ThCallbackLoaderService, } from '../ThCallbackLoaderBase';
import * as i0 from "@angular/core";
import * as i1 from "../../generated/ThDataTexture";
export class LogLuvLoaderService extends ThCallbackLoaderService {
    constructor() {
        super(...arguments);
        this.clazz = LogLuvLoader;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: LogLuvLoaderService, deps: null, target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: LogLuvLoaderService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: LogLuvLoaderService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }] });
export class ThLogLuvLoaderPipe extends ThCallbackLoaderBasePipe {
    constructor(service) {
        super();
        this.service = service;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThLogLuvLoaderPipe, deps: [{ token: LogLuvLoaderService }], target: i0.ɵɵFactoryTarget.Pipe }); }
    static { this.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "14.0.0", version: "18.1.2", ngImport: i0, type: ThLogLuvLoaderPipe, name: "loadLogLuvTexture" }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThLogLuvLoaderPipe, decorators: [{
            type: Pipe,
            args: [{
                    name: 'loadLogLuvTexture',
                    pure: true,
                }]
        }], ctorParameters: () => [{ type: LogLuvLoaderService }] });
export class ThLogLuvLoaderDirective extends ThCallbackLoaderBaseDirective {
    constructor(host, zone, service) {
        super(host, zone);
        this.host = host;
        this.zone = zone;
        this.service = service;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThLogLuvLoaderDirective, deps: [{ token: i1.ThDataTexture, host: true }, { token: i0.NgZone }, { token: LogLuvLoaderService }], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "18.1.2", type: ThLogLuvLoaderDirective, selector: "[loadLogLuvTexture]", usesInheritance: true, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThLogLuvLoaderDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[loadLogLuvTexture]',
                }]
        }], ctorParameters: () => [{ type: i1.ThDataTexture, decorators: [{
                    type: Host
                }] }, { type: i0.NgZone }, { type: LogLuvLoaderService }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGhMb2dMdXZMb2FkZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtdGhyZWUvc3JjL2xpYi9sb2FkZXJzL2RhdGEtdGV4dHVyZS9UaExvZ0x1dkxvYWRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxVQUFVLEVBQVUsSUFBSSxFQUFpQixNQUFNLGVBQWUsQ0FBQztBQUV6RixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sNENBQTRDLENBQUM7QUFDMUUsT0FBTyxFQUNMLDZCQUE2QixFQUM3Qix3QkFBd0IsRUFDeEIsdUJBQXVCLEdBQ3hCLE1BQU0seUJBQXlCLENBQUM7OztBQU1qQyxNQUFNLE9BQU8sbUJBQW9CLFNBQVEsdUJBQW9DO0lBSDdFOztRQUlTLFVBQUssR0FBRyxZQUFZLENBQUM7S0FDN0I7OEdBRlksbUJBQW1CO2tIQUFuQixtQkFBbUIsY0FGbEIsTUFBTTs7MkZBRVAsbUJBQW1CO2tCQUgvQixVQUFVO21CQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7QUFTRCxNQUFNLE9BQU8sa0JBQW1CLFNBQVEsd0JBQXFDO0lBQzNFLFlBQXNCLE9BQTRCO1FBQ2hELEtBQUssRUFBRSxDQUFDO1FBRFksWUFBTyxHQUFQLE9BQU8sQ0FBcUI7SUFFbEQsQ0FBQzs4R0FIVSxrQkFBa0I7NEdBQWxCLGtCQUFrQjs7MkZBQWxCLGtCQUFrQjtrQkFKOUIsSUFBSTttQkFBQztvQkFDSixJQUFJLEVBQUUsbUJBQW1CO29CQUN6QixJQUFJLEVBQUUsSUFBSTtpQkFDWDs7QUFVRCxNQUFNLE9BQU8sdUJBQXdCLFNBQVEsNkJBQTBDO0lBQ3JGLFlBQ29CLElBQW1CLEVBQzNCLElBQVksRUFDWixPQUE0QjtRQUV0QyxLQUFLLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBSkEsU0FBSSxHQUFKLElBQUksQ0FBZTtRQUMzQixTQUFJLEdBQUosSUFBSSxDQUFRO1FBQ1osWUFBTyxHQUFQLE9BQU8sQ0FBcUI7SUFHeEMsQ0FBQzs4R0FQVSx1QkFBdUI7a0dBQXZCLHVCQUF1Qjs7MkZBQXZCLHVCQUF1QjtrQkFIbkMsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUscUJBQXFCO2lCQUNoQzs7MEJBR0ksSUFBSSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgSG9zdCwgSW5qZWN0YWJsZSwgTmdab25lLCBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBUaERhdGFUZXh0dXJlIH0gZnJvbSAnLi4vLi4vZ2VuZXJhdGVkL1RoRGF0YVRleHR1cmUnO1xuaW1wb3J0IHsgTG9nTHV2TG9hZGVyIH0gZnJvbSAndGhyZWUvZXhhbXBsZXMvanNtL2xvYWRlcnMvTG9nTHV2TG9hZGVyLmpzJztcbmltcG9ydCB7XG4gIFRoQ2FsbGJhY2tMb2FkZXJCYXNlRGlyZWN0aXZlLFxuICBUaENhbGxiYWNrTG9hZGVyQmFzZVBpcGUsXG4gIFRoQ2FsbGJhY2tMb2FkZXJTZXJ2aWNlLFxufSBmcm9tICcuLi9UaENhbGxiYWNrTG9hZGVyQmFzZSc7XG5pbXBvcnQgeyBEYXRhVGV4dHVyZSB9IGZyb20gJ3RocmVlJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIExvZ0x1dkxvYWRlclNlcnZpY2UgZXh0ZW5kcyBUaENhbGxiYWNrTG9hZGVyU2VydmljZTxEYXRhVGV4dHVyZT4ge1xuICBwdWJsaWMgY2xhenogPSBMb2dMdXZMb2FkZXI7XG59XG5cbkBQaXBlKHtcbiAgbmFtZTogJ2xvYWRMb2dMdXZUZXh0dXJlJyxcbiAgcHVyZTogdHJ1ZSxcbn0pXG5leHBvcnQgY2xhc3MgVGhMb2dMdXZMb2FkZXJQaXBlIGV4dGVuZHMgVGhDYWxsYmFja0xvYWRlckJhc2VQaXBlPERhdGFUZXh0dXJlPiBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgc2VydmljZTogTG9nTHV2TG9hZGVyU2VydmljZSkge1xuICAgIHN1cGVyKCk7XG4gIH1cbn1cblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2xvYWRMb2dMdXZUZXh0dXJlXScsXG59KVxuZXhwb3J0IGNsYXNzIFRoTG9nTHV2TG9hZGVyRGlyZWN0aXZlIGV4dGVuZHMgVGhDYWxsYmFja0xvYWRlckJhc2VEaXJlY3RpdmU8RGF0YVRleHR1cmU+IHtcbiAgY29uc3RydWN0b3IoXG4gICAgQEhvc3QoKSBwcm90ZWN0ZWQgaG9zdDogVGhEYXRhVGV4dHVyZSxcbiAgICBwcm90ZWN0ZWQgem9uZTogTmdab25lLFxuICAgIHByb3RlY3RlZCBzZXJ2aWNlOiBMb2dMdXZMb2FkZXJTZXJ2aWNlLFxuICApIHtcbiAgICBzdXBlcihob3N0LCB6b25lKTtcbiAgfVxufVxuIl19