import { Directive, Host, Injectable, Pipe } from '@angular/core';
import { PLYLoader } from 'three/examples/jsm/loaders/PLYLoader.js';
import { ThAsyncLoaderBaseDirective, ThAsyncLoaderBasePipe, ThAsyncLoaderService } from './ThAsyncLoaderBase';
import { isObserved } from '../util';
import * as i0 from "@angular/core";
import * as i1 from "../generated";
export class PLYLoaderService extends ThAsyncLoaderService {
    constructor() {
        super(...arguments);
        this.clazz = PLYLoader;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: PLYLoaderService, deps: null, target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: PLYLoaderService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: PLYLoaderService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }] });
export class ThPLYLoaderPipe extends ThAsyncLoaderBasePipe {
    constructor(service) {
        super();
        this.service = service;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThPLYLoaderPipe, deps: [{ token: PLYLoaderService }], target: i0.ɵɵFactoryTarget.Pipe }); }
    static { this.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "14.0.0", version: "18.1.2", ngImport: i0, type: ThPLYLoaderPipe, name: "loadPLY" }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThPLYLoaderPipe, decorators: [{
            type: Pipe,
            args: [{
                    name: 'loadPLY',
                    pure: true,
                }]
        }], ctorParameters: () => [{ type: PLYLoaderService }] });
export class ThPLYLoaderDirective extends ThAsyncLoaderBaseDirective {
    constructor(host, zone, service) {
        super(host, zone);
        this.host = host;
        this.zone = zone;
        this.service = service;
    }
    getRefFromResponse(response) {
        response.computeVertexNormals();
        return response;
    }
    async load() {
        if (!this.initialized) {
            return;
        }
        if (this._url === undefined) {
            throw new Error('missing url');
        }
        const url = this._url;
        const onProgress = isObserved(this.onProgress$)
            ? (progress) => {
                this.onProgress$?.next(progress);
            }
            : undefined;
        const result = await this.zone.runOutsideAngular(() => this.service.load(url, onProgress));
        // add the new object to the parent and
        // emit a loaded event directly on the three.js object and on objRef$
        this.host.objRef = this.getRefFromResponse(result);
        if (this.onLoaded$ && result !== undefined) {
            this.onLoaded$?.next(result);
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThPLYLoaderDirective, deps: [{ token: i1.ThBufferGeometry, host: true }, { token: i0.NgZone }, { token: PLYLoaderService }], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "18.1.2", type: ThPLYLoaderDirective, selector: "[loadPLY]", usesInheritance: true, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThPLYLoaderDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[loadPLY]',
                }]
        }], ctorParameters: () => [{ type: i1.ThBufferGeometry, decorators: [{
                    type: Host
                }] }, { type: i0.NgZone }, { type: PLYLoaderService }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGhQTFlMb2FkZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtdGhyZWUvc3JjL2xpYi9sb2FkZXJzL1RoUExZTG9hZGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBVSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBRXpGLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztBQUNwRSxPQUFPLEVBQUUsMEJBQTBCLEVBQUUscUJBQXFCLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUc5RyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sU0FBUyxDQUFDOzs7QUFLckMsTUFBTSxPQUFPLGdCQUFpQixTQUFRLG9CQUFvQztJQUgxRTs7UUFJUyxVQUFLLEdBQUcsU0FBUyxDQUFDO0tBQzFCOzhHQUZZLGdCQUFnQjtrSEFBaEIsZ0JBQWdCLGNBRmYsTUFBTTs7MkZBRVAsZ0JBQWdCO2tCQUg1QixVQUFVO21CQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7QUFTRCxNQUFNLE9BQU8sZUFBZ0IsU0FBUSxxQkFBcUM7SUFDeEUsWUFBc0IsT0FBeUI7UUFDN0MsS0FBSyxFQUFFLENBQUM7UUFEWSxZQUFPLEdBQVAsT0FBTyxDQUFrQjtJQUUvQyxDQUFDOzhHQUhVLGVBQWU7NEdBQWYsZUFBZTs7MkZBQWYsZUFBZTtrQkFKM0IsSUFBSTttQkFBQztvQkFDSixJQUFJLEVBQUUsU0FBUztvQkFDZixJQUFJLEVBQUUsSUFBSTtpQkFDWDs7QUFVRCxNQUFNLE9BQU8sb0JBQXFCLFNBQVEsMEJBQTBDO0lBQ2xGLFlBQ29CLElBQXNCLEVBQzlCLElBQVksRUFDWixPQUF5QjtRQUVuQyxLQUFLLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBSkEsU0FBSSxHQUFKLElBQUksQ0FBa0I7UUFDOUIsU0FBSSxHQUFKLElBQUksQ0FBUTtRQUNaLFlBQU8sR0FBUCxPQUFPLENBQWtCO0lBR3JDLENBQUM7SUFFUyxrQkFBa0IsQ0FBQyxRQUF3QjtRQUNuRCxRQUFRLENBQUMsb0JBQW9CLEVBQUUsQ0FBQztRQUNoQyxPQUFPLFFBQVEsQ0FBQztJQUNsQixDQUFDO0lBRVMsS0FBSyxDQUFDLElBQUk7UUFDbEIsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztZQUN0QixPQUFPO1FBQ1QsQ0FBQztRQUVELElBQUksSUFBSSxDQUFDLElBQUksS0FBSyxTQUFTLEVBQUUsQ0FBQztZQUM1QixNQUFNLElBQUksS0FBSyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQ2pDLENBQUM7UUFFRCxNQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBRXRCLE1BQU0sVUFBVSxHQUFHLFVBQVUsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDO1lBQzdDLENBQUMsQ0FBQyxDQUFDLFFBQW9DLEVBQUUsRUFBRTtnQkFDdkMsSUFBSSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDbkMsQ0FBQztZQUNILENBQUMsQ0FBQyxTQUFTLENBQUM7UUFFZCxNQUFNLE1BQU0sR0FBRyxNQUFNLElBQUksQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLFVBQVUsQ0FBQyxDQUFDLENBQUM7UUFFM0YsdUNBQXVDO1FBQ3ZDLHFFQUFxRTtRQUNyRSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsa0JBQWtCLENBQUMsTUFBTSxDQUFDLENBQUM7UUFFbkQsSUFBSSxJQUFJLENBQUMsU0FBUyxJQUFJLE1BQU0sS0FBSyxTQUFTLEVBQUUsQ0FBQztZQUMzQyxJQUFJLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUMvQixDQUFDO0lBQ0gsQ0FBQzs4R0F4Q1Usb0JBQW9CO2tHQUFwQixvQkFBb0I7OzJGQUFwQixvQkFBb0I7a0JBSGhDLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLFdBQVc7aUJBQ3RCOzswQkFHSSxJQUFJIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBIb3N0LCBJbmplY3RhYmxlLCBOZ1pvbmUsIFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgUExZTG9hZGVyIH0gZnJvbSAndGhyZWUvZXhhbXBsZXMvanNtL2xvYWRlcnMvUExZTG9hZGVyLmpzJztcbmltcG9ydCB7IFRoQXN5bmNMb2FkZXJCYXNlRGlyZWN0aXZlLCBUaEFzeW5jTG9hZGVyQmFzZVBpcGUsIFRoQXN5bmNMb2FkZXJTZXJ2aWNlIH0gZnJvbSAnLi9UaEFzeW5jTG9hZGVyQmFzZSc7XG5pbXBvcnQgeyBCdWZmZXJHZW9tZXRyeSB9IGZyb20gJ3RocmVlJztcbmltcG9ydCB7IFRoQnVmZmVyR2VvbWV0cnkgfSBmcm9tICcuLi9nZW5lcmF0ZWQnO1xuaW1wb3J0IHsgaXNPYnNlcnZlZCB9IGZyb20gJy4uL3V0aWwnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgUExZTG9hZGVyU2VydmljZSBleHRlbmRzIFRoQXN5bmNMb2FkZXJTZXJ2aWNlPEJ1ZmZlckdlb21ldHJ5PiB7XG4gIHB1YmxpYyBjbGF6eiA9IFBMWUxvYWRlcjtcbn1cblxuQFBpcGUoe1xuICBuYW1lOiAnbG9hZFBMWScsXG4gIHB1cmU6IHRydWUsXG59KVxuZXhwb3J0IGNsYXNzIFRoUExZTG9hZGVyUGlwZSBleHRlbmRzIFRoQXN5bmNMb2FkZXJCYXNlUGlwZTxCdWZmZXJHZW9tZXRyeT4gaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcbiAgY29uc3RydWN0b3IocHJvdGVjdGVkIHNlcnZpY2U6IFBMWUxvYWRlclNlcnZpY2UpIHtcbiAgICBzdXBlcigpO1xuICB9XG59XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tsb2FkUExZXScsXG59KVxuZXhwb3J0IGNsYXNzIFRoUExZTG9hZGVyRGlyZWN0aXZlIGV4dGVuZHMgVGhBc3luY0xvYWRlckJhc2VEaXJlY3RpdmU8QnVmZmVyR2VvbWV0cnk+IHtcbiAgY29uc3RydWN0b3IoXG4gICAgQEhvc3QoKSBwcm90ZWN0ZWQgaG9zdDogVGhCdWZmZXJHZW9tZXRyeSxcbiAgICBwcm90ZWN0ZWQgem9uZTogTmdab25lLFxuICAgIHByb3RlY3RlZCBzZXJ2aWNlOiBQTFlMb2FkZXJTZXJ2aWNlLFxuICApIHtcbiAgICBzdXBlcihob3N0LCB6b25lKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBnZXRSZWZGcm9tUmVzcG9uc2UocmVzcG9uc2U6IEJ1ZmZlckdlb21ldHJ5KSB7XG4gICAgcmVzcG9uc2UuY29tcHV0ZVZlcnRleE5vcm1hbHMoKTtcbiAgICByZXR1cm4gcmVzcG9uc2U7XG4gIH1cblxuICBwcm90ZWN0ZWQgYXN5bmMgbG9hZCgpIHtcbiAgICBpZiAoIXRoaXMuaW5pdGlhbGl6ZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5fdXJsID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignbWlzc2luZyB1cmwnKTtcbiAgICB9XG5cbiAgICBjb25zdCB1cmwgPSB0aGlzLl91cmw7XG5cbiAgICBjb25zdCBvblByb2dyZXNzID0gaXNPYnNlcnZlZCh0aGlzLm9uUHJvZ3Jlc3MkKVxuICAgICAgPyAocHJvZ3Jlc3M6IFByb2dyZXNzRXZlbnQ8RXZlbnRUYXJnZXQ+KSA9PiB7XG4gICAgICAgICAgdGhpcy5vblByb2dyZXNzJD8ubmV4dChwcm9ncmVzcyk7XG4gICAgICAgIH1cbiAgICAgIDogdW5kZWZpbmVkO1xuXG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdGhpcy56b25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHRoaXMuc2VydmljZS5sb2FkKHVybCwgb25Qcm9ncmVzcykpO1xuXG4gICAgLy8gYWRkIHRoZSBuZXcgb2JqZWN0IHRvIHRoZSBwYXJlbnQgYW5kXG4gICAgLy8gZW1pdCBhIGxvYWRlZCBldmVudCBkaXJlY3RseSBvbiB0aGUgdGhyZWUuanMgb2JqZWN0IGFuZCBvbiBvYmpSZWYkXG4gICAgdGhpcy5ob3N0Lm9ialJlZiA9IHRoaXMuZ2V0UmVmRnJvbVJlc3BvbnNlKHJlc3VsdCk7XG5cbiAgICBpZiAodGhpcy5vbkxvYWRlZCQgJiYgcmVzdWx0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMub25Mb2FkZWQkPy5uZXh0KHJlc3VsdCk7XG4gICAgfVxuICB9XG59XG4iXX0=