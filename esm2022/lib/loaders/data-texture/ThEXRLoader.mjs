import { Directive, Host, Injectable, Pipe } from '@angular/core';
import { EXRLoader } from 'three/examples/jsm/loaders/EXRLoader.js';
import { ThCallbackLoaderBaseDirective, ThCallbackLoaderBasePipe, ThCallbackLoaderService, } from '../ThCallbackLoaderBase';
import * as i0 from "@angular/core";
import * as i1 from "../../generated/ThDataTexture";
export class EXRLoaderService extends ThCallbackLoaderService {
    constructor() {
        super(...arguments);
        this.clazz = EXRLoader;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: EXRLoaderService, deps: null, target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: EXRLoaderService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: EXRLoaderService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }] });
export class ThEXRLoaderPipe extends ThCallbackLoaderBasePipe {
    constructor(service) {
        super();
        this.service = service;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThEXRLoaderPipe, deps: [{ token: EXRLoaderService }], target: i0.ɵɵFactoryTarget.Pipe }); }
    static { this.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "14.0.0", version: "18.1.2", ngImport: i0, type: ThEXRLoaderPipe, name: "loadEXRTexture" }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThEXRLoaderPipe, decorators: [{
            type: Pipe,
            args: [{
                    name: 'loadEXRTexture',
                    pure: true,
                }]
        }], ctorParameters: () => [{ type: EXRLoaderService }] });
export class ThEXRLoaderDirective extends ThCallbackLoaderBaseDirective {
    constructor(host, zone, service) {
        super(host, zone);
        this.host = host;
        this.zone = zone;
        this.service = service;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThEXRLoaderDirective, deps: [{ token: i1.ThDataTexture, host: true }, { token: i0.NgZone }, { token: EXRLoaderService }], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "18.1.2", type: ThEXRLoaderDirective, selector: "[loadEXRTexture]", usesInheritance: true, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThEXRLoaderDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[loadEXRTexture]',
                }]
        }], ctorParameters: () => [{ type: i1.ThDataTexture, decorators: [{
                    type: Host
                }] }, { type: i0.NgZone }, { type: EXRLoaderService }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGhFWFJMb2FkZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtdGhyZWUvc3JjL2xpYi9sb2FkZXJzL2RhdGEtdGV4dHVyZS9UaEVYUkxvYWRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxVQUFVLEVBQVUsSUFBSSxFQUFpQixNQUFNLGVBQWUsQ0FBQztBQUN6RixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFFcEUsT0FBTyxFQUNMLDZCQUE2QixFQUM3Qix3QkFBd0IsRUFDeEIsdUJBQXVCLEdBQ3hCLE1BQU0seUJBQXlCLENBQUM7OztBQU1qQyxNQUFNLE9BQU8sZ0JBQWlCLFNBQVEsdUJBQW9DO0lBSDFFOztRQUlTLFVBQUssR0FBRyxTQUFTLENBQUM7S0FDMUI7OEdBRlksZ0JBQWdCO2tIQUFoQixnQkFBZ0IsY0FGZixNQUFNOzsyRkFFUCxnQkFBZ0I7a0JBSDVCLFVBQVU7bUJBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COztBQVNELE1BQU0sT0FBTyxlQUFnQixTQUFRLHdCQUFxQztJQUN4RSxZQUFzQixPQUF5QjtRQUM3QyxLQUFLLEVBQUUsQ0FBQztRQURZLFlBQU8sR0FBUCxPQUFPLENBQWtCO0lBRS9DLENBQUM7OEdBSFUsZUFBZTs0R0FBZixlQUFlOzsyRkFBZixlQUFlO2tCQUozQixJQUFJO21CQUFDO29CQUNKLElBQUksRUFBRSxnQkFBZ0I7b0JBQ3RCLElBQUksRUFBRSxJQUFJO2lCQUNYOztBQVVELE1BQU0sT0FBTyxvQkFBcUIsU0FBUSw2QkFBMEM7SUFDbEYsWUFDb0IsSUFBbUIsRUFDM0IsSUFBWSxFQUNaLE9BQXlCO1FBRW5DLEtBQUssQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFKQSxTQUFJLEdBQUosSUFBSSxDQUFlO1FBQzNCLFNBQUksR0FBSixJQUFJLENBQVE7UUFDWixZQUFPLEdBQVAsT0FBTyxDQUFrQjtJQUdyQyxDQUFDOzhHQVBVLG9CQUFvQjtrR0FBcEIsb0JBQW9COzsyRkFBcEIsb0JBQW9CO2tCQUhoQyxTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxrQkFBa0I7aUJBQzdCOzswQkFHSSxJQUFJIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBIb3N0LCBJbmplY3RhYmxlLCBOZ1pvbmUsIFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEVYUkxvYWRlciB9IGZyb20gJ3RocmVlL2V4YW1wbGVzL2pzbS9sb2FkZXJzL0VYUkxvYWRlci5qcyc7XG5pbXBvcnQgeyBUaERhdGFUZXh0dXJlIH0gZnJvbSAnLi4vLi4vZ2VuZXJhdGVkL1RoRGF0YVRleHR1cmUnO1xuaW1wb3J0IHtcbiAgVGhDYWxsYmFja0xvYWRlckJhc2VEaXJlY3RpdmUsXG4gIFRoQ2FsbGJhY2tMb2FkZXJCYXNlUGlwZSxcbiAgVGhDYWxsYmFja0xvYWRlclNlcnZpY2UsXG59IGZyb20gJy4uL1RoQ2FsbGJhY2tMb2FkZXJCYXNlJztcbmltcG9ydCB7IERhdGFUZXh0dXJlIH0gZnJvbSAndGhyZWUnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgRVhSTG9hZGVyU2VydmljZSBleHRlbmRzIFRoQ2FsbGJhY2tMb2FkZXJTZXJ2aWNlPERhdGFUZXh0dXJlPiB7XG4gIHB1YmxpYyBjbGF6eiA9IEVYUkxvYWRlcjtcbn1cblxuQFBpcGUoe1xuICBuYW1lOiAnbG9hZEVYUlRleHR1cmUnLFxuICBwdXJlOiB0cnVlLFxufSlcbmV4cG9ydCBjbGFzcyBUaEVYUkxvYWRlclBpcGUgZXh0ZW5kcyBUaENhbGxiYWNrTG9hZGVyQmFzZVBpcGU8RGF0YVRleHR1cmU+IGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBzZXJ2aWNlOiBFWFJMb2FkZXJTZXJ2aWNlKSB7XG4gICAgc3VwZXIoKTtcbiAgfVxufVxuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbbG9hZEVYUlRleHR1cmVdJyxcbn0pXG5leHBvcnQgY2xhc3MgVGhFWFJMb2FkZXJEaXJlY3RpdmUgZXh0ZW5kcyBUaENhbGxiYWNrTG9hZGVyQmFzZURpcmVjdGl2ZTxEYXRhVGV4dHVyZT4ge1xuICBjb25zdHJ1Y3RvcihcbiAgICBASG9zdCgpIHByb3RlY3RlZCBob3N0OiBUaERhdGFUZXh0dXJlLFxuICAgIHByb3RlY3RlZCB6b25lOiBOZ1pvbmUsXG4gICAgcHJvdGVjdGVkIHNlcnZpY2U6IEVYUkxvYWRlclNlcnZpY2UsXG4gICkge1xuICAgIHN1cGVyKGhvc3QsIHpvbmUpO1xuICB9XG59XG4iXX0=