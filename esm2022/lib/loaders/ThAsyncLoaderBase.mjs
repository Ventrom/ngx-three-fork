import { Directive, EventEmitter, Host, inject, Injectable, Input, Output, } from '@angular/core';
import { ThAnimationLoopService } from '../renderer/th-animation-loop.service';
import { isObserved } from '../util';
import { createLazyObject3DProxy } from './LazyObject3dProxy';
import { ThLoader } from './ThLoaderBase';
import * as i0 from "@angular/core";
export class ThAsyncLoaderService extends ThLoader {
    load(...args) {
        const loader = this.createLoaderInstance();
        return loader.loadAsync(...args);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThAsyncLoaderService, deps: null, target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThAsyncLoaderService }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThAsyncLoaderService, decorators: [{
            type: Injectable
        }] });
export class ThAsyncLoaderBasePipe {
    constructor() {
        this.animationLoop = inject(ThAnimationLoopService);
    }
    transform(...args) {
        return this.service.load(...args).then((response) => {
            this.animationLoop.requestAnimationFrame();
            return response;
        });
    }
}
export class ThAsyncLoaderBaseDirective {
    set url(url) {
        this._url = url;
        this.load();
    }
    get url() {
        return this._url;
    }
    get onLoaded() {
        if (!this.onLoaded$) {
            this.onLoaded$ = new EventEmitter();
        }
        return this.onLoaded$;
    }
    get onProgress() {
        if (!this.onProgress$) {
            this.onProgress$ = new EventEmitter();
        }
        return this.onProgress$;
    }
    constructor(host, zone) {
        this.host = host;
        this.zone = zone;
        this.initialized = false;
        this.animationLoop = inject(ThAnimationLoopService);
        this.proxy = createLazyObject3DProxy();
        host.objRef = this.proxy;
    }
    ngOnInit() {
        this.initialized = true;
        this.load();
        // this.zone.runOutsideAngular(() => );
    }
    async load() {
        if (!this.initialized) {
            return;
        }
        if (this._url === undefined) {
            throw new Error('missing url');
        }
        if (!this.proxy) {
            return;
        }
        const url = this._url;
        const onProgress = isObserved(this.onProgress$)
            ? (progress) => {
                this.zone.run(() => {
                    this.onProgress$?.next(progress);
                });
            }
            : undefined;
        const result = await this.zone.runOutsideAngular(() => this.service.load(url, onProgress));
        this.animationLoop.requestAnimationFrame();
        this.proxy.objRef = this.getRefFromResponse(result);
        // add the new object to the parent and
        // emit a loaded event directly on the three.js object and on objRef$
        this.host.objRef = this.proxy;
        if (this.onLoaded$ && result != null) {
            this.zone.run(() => this.onLoaded$?.next(result));
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThAsyncLoaderBaseDirective, deps: "invalid", target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "18.1.2", type: ThAsyncLoaderBaseDirective, inputs: { url: "url" }, outputs: { onLoaded: "onLoaded", onProgress: "onProgress" }, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThAsyncLoaderBaseDirective, decorators: [{
            type: Directive,
            args: [{}]
        }], ctorParameters: () => [{ type: undefined, decorators: [{
                    type: Host
                }] }, { type: i0.NgZone }], propDecorators: { url: [{
                type: Input
            }], onLoaded: [{
                type: Output
            }], onProgress: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGhBc3luY0xvYWRlckJhc2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtdGhyZWUvc3JjL2xpYi9sb2FkZXJzL1RoQXN5bmNMb2FkZXJCYXNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsWUFBWSxFQUNaLElBQUksRUFDSixNQUFNLEVBQ04sVUFBVSxFQUNWLEtBQUssRUFHTCxNQUFNLEdBRVAsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFDL0UsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLFNBQVMsQ0FBQztBQUNyQyxPQUFPLEVBQUUsdUJBQXVCLEVBQXFCLE1BQU0scUJBQXFCLENBQUM7QUFDakYsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGdCQUFnQixDQUFDOztBQUsxQyxNQUFNLE9BQWdCLG9CQUErRSxTQUFRLFFBRzVHO0lBQ1EsSUFBSSxDQUFDLEdBQUcsSUFBa0Q7UUFDL0QsTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLG9CQUFvQixFQUFFLENBQUM7UUFDM0MsT0FBTyxNQUFNLENBQUMsU0FBUyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUM7SUFDbkMsQ0FBQzs4R0FQbUIsb0JBQW9CO2tIQUFwQixvQkFBb0I7OzJGQUFwQixvQkFBb0I7a0JBRHpDLFVBQVU7O0FBV1gsTUFBTSxPQUFnQixxQkFBcUI7SUFLekM7UUFEUSxrQkFBYSxHQUFHLE1BQU0sQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO0lBQ3hDLENBQUM7SUFFVCxTQUFTLENBQUMsR0FBRyxJQUFrRDtRQUNwRSxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsUUFBUSxFQUFFLEVBQUU7WUFDbEQsSUFBSSxDQUFDLGFBQWEsQ0FBQyxxQkFB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TUFBTSxJQUFJLElBQUksRUFBRSxDQUFDO1lBQ3JDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7UUFDcEQsQ0FBQztJQUNILENBQUM7OEdBMUZtQiwwQkFBMEI7a0dBQTFCLDBCQUEwQjs7MkZBQTFCLDBCQUEwQjtrQkFEL0MsU0FBUzttQkFBQyxFQUFFOzswQkEwQ1IsSUFBSTs4REF4QkgsR0FBRztzQkFETixLQUFLO2dCQVVRLFFBQVE7c0JBQXJCLE1BQU07Z0JBT08sVUFBVTtzQkFBdkIsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIERpcmVjdGl2ZSxcbiAgRXZlbnRFbWl0dGVyLFxuICBIb3N0LFxuICBpbmplY3QsXG4gIEluamVjdGFibGUsXG4gIElucHV0LFxuICBOZ1pvbmUsXG4gIE9uSW5pdCxcbiAgT3V0cHV0LFxuICBQaXBlVHJhbnNmb3JtLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IExvYWRlciB9IGZyb20gJ3RocmVlJztcbmltcG9ydCB7IFRoQW5pbWF0aW9uTG9vcFNlcnZpY2UgfSBmcm9tICcuLi9yZW5kZXJlci90aC1hbmltYXRpb24tbG9vcC5zZXJ2aWNlJztcbmltcG9ydCB7IGlzT2JzZXJ2ZWQgfSBmcm9tICcuLi91dGlsJztcbmltcG9ydCB7IGNyZWF0ZUxhenlPYmplY3QzRFByb3h5LCBMYXp5T2JqZWN0M0RQcm94eSB9IGZyb20gJy4vTGF6eU9iamVjdDNkUHJveHknO1xuaW1wb3J0IHsgVGhMb2FkZXIgfSBmcm9tICcuL1RoTG9hZGVyQmFzZSc7XG5cbnR5cGUgQXdhaXRlZDxUPiA9IFQgZXh0ZW5kcyBQcm9taXNlTGlrZTxpbmZlciBVPiA/IFUgOiBUO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgVGhBc3luY0xvYWRlclNlcnZpY2U8VERhdGEgPSB1bmtub3duLCBUVXJsIGV4dGVuZHMgc3RyaW5nIHwgc3RyaW5nW10gPSBzdHJpbmc+IGV4dGVuZHMgVGhMb2FkZXI8XG4gIFREYXRhLFxuICBUVXJsXG4+IHtcbiAgcHVibGljIGxvYWQoLi4uYXJnczogUGFyYW1ldGVyczxMb2FkZXI8VERhdGEsIFRVcmw+Wydsb2FkQXN5bmMnXT4pOiBSZXR1cm5UeXBlPExvYWRlcjxURGF0YSwgVFVybD5bJ2xvYWRBc3luYyddPiB7XG4gICAgY29uc3QgbG9hZGVyID0gdGhpcy5jcmVhdGVMb2FkZXJJbnN0YW5jZSgpO1xuICAgIHJldHVybiBsb2FkZXIubG9hZEFzeW5jKC4uLmFyZ3MpO1xuICB9XG59XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBUaEFzeW5jTG9hZGVyQmFzZVBpcGU8VERhdGEgPSB1bmtub3duLCBUVXJsIGV4dGVuZHMgc3RyaW5nIHwgc3RyaW5nW10gPSBzdHJpbmc+XG4gIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybVxue1xuICBwcm90ZWN0ZWQgYWJzdHJhY3Qgc2VydmljZTogVGhBc3luY0xvYWRlclNlcnZpY2U8VERhdGEsIFRVcmw+O1xuICBwcml2YXRlIGFuaW1hdGlvbkxvb3AgPSBpbmplY3QoVGhBbmltYXRpb25Mb29wU2VydmljZSk7XG4gIGNvbnN0cnVjdG9yKCkge31cblxuICBwdWJsaWMgdHJhbnNmb3JtKC4uLmFyZ3M6IFBhcmFtZXRlcnM8TG9hZGVyPFREYXRhLCBUVXJsPlsnbG9hZEFzeW5jJ10+KSB7XG4gICAgcmV0dXJuIHRoaXMuc2VydmljZS5sb2FkKC4uLmFyZ3MpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICB0aGlzLmFuaW1hdGlvbkxvb3AucmVxdWVzdEFuaW1hdGlvbkZyYW1lKCk7XG4gICAgICByZXR1cm4gcmVzcG9uc2U7XG4gICAgfSk7XG4gIH1cbn1cblxuQERpcmVjdGl2ZSh7fSlcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBUaEFzeW5jTG9hZGVyQmFzZURpcmVjdGl2ZTxURGF0YSA9IHVua25vd24sIFRVcmwgZXh0ZW5kcyBzdHJpbmcgfCBzdHJpbmdbXSA9IHN0cmluZz5cbiAgaW1wbGVtZW50cyBPbkluaXRcbntcbiAgcHJvdGVjdGVkIGFic3RyYWN0IHNlcnZpY2U6IFRoQXN5bmNMb2FkZXJTZXJ2aWNlPFREYXRhLCBUVXJsPjtcblxuICBwcm90ZWN0ZWQgYWJzdHJhY3QgZ2V0UmVmRnJvbVJlc3BvbnNlKHJlc3BvbnNlOiBBd2FpdGVkPFJldHVyblR5cGU8TG9hZGVyPFREYXRhLCBUVXJsPlsnbG9hZEFzeW5jJ10+Pik6IGFueTtcblxuICBwcm90ZWN0ZWQgaW5pdGlhbGl6ZWQgPSBmYWxzZTtcbiAgcHJvdGVjdGVkIF91cmw/OiBQYXJhbWV0ZXJzPExvYWRlcjxURGF0YSwgVFVybD5bJ2xvYWRBc3luYyddPlswXTtcblxuICBwcm90ZWN0ZWQgb25Mb2FkZWQkPzogRXZlbnRFbWl0dGVyPEF3YWl0ZWQ8UmV0dXJuVHlwZTxMb2FkZXI8VERhdGEsIFRVcmw+Wydsb2FkQXN5bmMnXT4+PjtcbiAgcHJvdGVjdGVkIG9uUHJvZ3Jlc3MkPzogRXZlbnRFbWl0dGVyPFByb2dyZXNzRXZlbnQ+O1xuICBwcm90ZWN0ZWQgcHJveHk6IExhenlPYmplY3QzRFByb3h5O1xuXG4gIHByb3RlY3RlZCBhbmltYXRpb25Mb29wID0gaW5qZWN0KFRoQW5pbWF0aW9uTG9vcFNlcnZpY2UpO1xuXG4gIEBJbnB1dCgpXG4gIHNldCB1cmwodXJsOiBQYXJhbWV0ZXJzPExvYWRlcjxURGF0YSwgVFVybD5bJ2xvYWRBc3luYyddPlswXSB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX3VybCA9IHVybDtcbiAgICB0aGlzLmxvYWQoKTtcbiAgfVxuXG4gIGdldCB1cmwoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3VybDtcbiAgfVxuXG4gIEBPdXRwdXQoKSBnZXQgb25Mb2FkZWQoKSB7XG4gICAgaWYgKCF0aGlzLm9uTG9hZGVkJCkge1xuICAgICAgdGhpcy5vbkxvYWRlZCQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLm9uTG9hZGVkJDtcbiAgfVxuXG4gIEBPdXRwdXQoKSBnZXQgb25Qcm9ncmVzcygpIHtcbiAgICBpZiAoIXRoaXMub25Qcm9ncmVzcyQpIHtcbiAgICAgIHRoaXMub25Qcm9ncmVzcyQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLm9uUHJvZ3Jlc3MkO1xuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgQEhvc3QoKSBwcm90ZWN0ZWQgaG9zdDogeyBvYmpSZWY6IGFueSB9LFxuICAgIHByb3RlY3RlZCB6b25lOiBOZ1pvbmUsXG4gICkge1xuICAgIHRoaXMucHJveHkgPSBjcmVhdGVMYXp5T2JqZWN0M0RQcm94eSgpO1xuICAgIGhvc3Qub2JqUmVmID0gdGhpcy5wcm94eTtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuaW5pdGlhbGl6ZWQgPSB0cnVlO1xuICAgIHRoaXMubG9hZCgpO1xuICAgIC8vIHRoaXMuem9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiApO1xuICB9XG5cbiAgcHJvdGVjdGVkIGFzeW5jIGxvYWQoKSB7XG4gICAgaWYgKCF0aGlzLmluaXRpYWxpemVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX3VybCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ21pc3NpbmcgdXJsJyk7XG4gICAgfVxuXG4gICAgaWYgKCF0aGlzLnByb3h5KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgdXJsID0gdGhpcy5fdXJsO1xuXG4gICAgY29uc3Qgb25Qcm9ncmVzcyA9IGlzT2JzZXJ2ZWQodGhpcy5vblByb2dyZXNzJClcbiAgICAgID8gKHByb2dyZXNzOiBQcm9ncmVzc0V2ZW50PEV2ZW50VGFyZ2V0PikgPT4ge1xuICAgICAgICAgIHRoaXMuem9uZS5ydW4oKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5vblByb2dyZXNzJD8ubmV4dChwcm9ncmVzcyk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIDogdW5kZWZpbmVkO1xuXG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdGhpcy56b25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+XG4gICAgICAodGhpcy5zZXJ2aWNlIGFzIFRoQXN5bmNMb2FkZXJTZXJ2aWNlPFREYXRhLCBUVXJsPikubG9hZCh1cmwsIG9uUHJvZ3Jlc3MpLFxuICAgICk7XG5cbiAgICB0aGlzLmFuaW1hdGlvbkxvb3AucmVxdWVzdEFuaW1hdGlvbkZyYW1lKCk7XG4gICAgdGhpcy5wcm94eS5vYmpSZWYgPSB0aGlzLmdldFJlZkZyb21SZXNwb25zZShyZXN1bHQpO1xuICAgIC8vIGFkZCB0aGUgbmV3IG9iamVjdCB0byB0aGUgcGFyZW50IGFuZFxuICAgIC8vIGVtaXQgYSBsb2FkZWQgZXZlbnQgZGlyZWN0bHkgb24gdGhlIHRocmVlLmpzIG9iamVjdCBhbmQgb24gb2JqUmVmJFxuICAgIHRoaXMuaG9zdC5vYmpSZWYgPSB0aGlzLnByb3h5O1xuXG4gICAgaWYgKHRoaXMub25Mb2FkZWQkICYmIHJlc3VsdCAhPSBudWxsKSB7XG4gICAgICB0aGlzLnpvbmUucnVuKCgpID0+IHRoaXMub25Mb2FkZWQkPy5uZXh0KHJlc3VsdCkpO1xuICAgIH1cbiAgfVxufVxuIl19