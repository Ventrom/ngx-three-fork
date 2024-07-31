import { Directive, EventEmitter, Host, Input, Output } from '@angular/core';
import { isObserved } from '../util';
import { ThLoader } from './ThLoaderBase';
import * as i0 from "@angular/core";
export class ThCallbackLoaderService extends ThLoader {
    load(...args) {
        const loader = this.createLoaderInstance();
        return loader.load(...args);
    }
}
export class ThCallbackLoaderBasePipe {
    transform(...args) {
        return this.service.load(...args);
    }
}
export class ThCallbackLoaderBaseDirective {
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
        const url = this._url;
        const onProgress = isObserved(this.onProgress$)
            ? (progress) => {
                this.onProgress$?.next(progress);
            }
            : undefined;
        const onLoad = isObserved(this.onLoaded$)
            ? (...args) => {
                this.onLoaded$?.next(args[0]);
            }
            : undefined;
        this.host.objRef = this.zone.runOutsideAngular(() => this.service.load(url, onLoad, onProgress));
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThCallbackLoaderBaseDirective, deps: "invalid", target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "18.1.2", type: ThCallbackLoaderBaseDirective, inputs: { url: "url" }, outputs: { onLoaded: "onLoaded", onProgress: "onProgress" }, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThCallbackLoaderBaseDirective, decorators: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGhDYWxsYmFja0xvYWRlckJhc2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtdGhyZWUvc3JjL2xpYi9sb2FkZXJzL1RoQ2FsbGJhY2tMb2FkZXJCYXNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQWtCLE1BQU0sRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFFNUcsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLFNBQVMsQ0FBQztBQUNyQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7O0FBRTFDLE1BQU0sT0FBZ0IsdUJBR3BCLFNBQVEsUUFBcUI7SUFDdEIsSUFBSSxDQUFDLEdBQUcsSUFBNkM7UUFDMUQsTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLG9CQUFvQixFQUFFLENBQUM7UUFDM0MsT0FBTyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUM7SUFDOUIsQ0FBQztDQUNGO0FBRUQsTUFBTSxPQUFnQix3QkFBd0I7SUFLckMsU0FBUyxDQUFDLEdBQUcsSUFBNkM7UUFDL0QsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDO0lBQ3BDLENBQUM7Q0FDRjtBQUdELE1BQU0sT0FBZ0IsNkJBQTZCO0lBV2pELElBQ0ksR0FBRyxDQUFDLEdBQXFCO1FBQzNCLElBQUksQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFDO1FBQ2hCLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNkLENBQUM7SUFFRCxJQUFJLEdBQUc7UUFDTCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUM7SUFDbkIsQ0FBQztJQUVELElBQWMsUUFBUTtRQUNwQixJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1lBQ3BCLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUN0QyxDQUFDO1FBQ0QsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQ3hCLENBQUM7SUFFRCxJQUFjLFVBQVU7UUFDdEIsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztZQUN0QixJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDeEMsQ0FBQztRQUNELE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQztJQUMxQixDQUFDO0lBRUQsWUFDb0IsSUFBcUIsRUFDN0IsSUFBWTtRQURKLFNBQUksR0FBSixJQUFJLENBQWlCO1FBQzdCLFNBQUksR0FBSixJQUFJLENBQVE7UUFoQ2hCLGdCQUFXLEdBQUcsS0FBSyxDQUFDO0lBaUN6QixDQUFDO0lBRUosUUFBUTtRQUNOLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNaLHVDQUF1QztJQUN6QyxDQUFDO0lBRVMsS0FBSyxDQUFDLElBQUk7UUFDbEIsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztZQUN0QixPQUFPO1FBQ1QsQ0FBQztRQUVELElBQUksSUFBSSxDQUFDLElBQUksS0FBSyxTQUFTLEVBQUUsQ0FBQztZQUM1QixNQUFNLElBQUksS0FBSyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQ2pDLENBQUM7UUFFRCxNQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBRXRCLE1BQU0sVUFBVSxHQUFHLFVBQVUsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDO1lBQzdDLENBQUMsQ0FBQyxDQUFDLFFBQW9DLEVBQUUsRUFBRTtnQkFDdkMsSUFBSSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDbkMsQ0FBQztZQUNILENBQUMsQ0FBQyxTQUFTLENBQUM7UUFFZCxNQUFNLE1BQU0sR0FBRyxVQUFVLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQztZQUN2QyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQVMsRUFBRSxFQUFFO2dCQUNmLElBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2hDLENBQUM7WUFDSCxDQUFDLENBQUMsU0FBUyxDQUFDO1FBRWQsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLEVBQUUsQ0FDakQsSUFBSSxDQUFDLE9BQWdELENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxNQUFPLEVBQUUsVUFBVSxDQUFDLENBQ3RGLENBQUM7SUFDSixDQUFDOzhHQXhFbUIsNkJBQTZCO2tHQUE3Qiw2QkFBNkI7OzJGQUE3Qiw2QkFBNkI7a0JBRGxELFNBQVM7bUJBQUMsRUFBRTs7MEJBcUNSLElBQUk7OERBeEJILEdBQUc7c0JBRE4sS0FBSztnQkFVUSxRQUFRO3NCQUFyQixNQUFNO2dCQU9PLFVBQVU7c0JBQXZCLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIEV2ZW50RW1pdHRlciwgSG9zdCwgSW5wdXQsIE5nWm9uZSwgT25Jbml0LCBPdXRwdXQsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IExvYWRlciB9IGZyb20gJ3RocmVlJztcbmltcG9ydCB7IGlzT2JzZXJ2ZWQgfSBmcm9tICcuLi91dGlsJztcbmltcG9ydCB7IFRoTG9hZGVyIH0gZnJvbSAnLi9UaExvYWRlckJhc2UnO1xuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgVGhDYWxsYmFja0xvYWRlclNlcnZpY2U8XG4gIFREYXRhID0gdW5rbm93bixcbiAgVFVybCBleHRlbmRzIHN0cmluZyB8IHN0cmluZ1tdID0gc3RyaW5nLFxuPiBleHRlbmRzIFRoTG9hZGVyPFREYXRhLCBUVXJsPiB7XG4gIHB1YmxpYyBsb2FkKC4uLmFyZ3M6IFBhcmFtZXRlcnM8TG9hZGVyPFREYXRhLCBUVXJsPlsnbG9hZCddPik6IFJldHVyblR5cGU8TG9hZGVyPFREYXRhLCBUVXJsPlsnbG9hZCddPiB7XG4gICAgY29uc3QgbG9hZGVyID0gdGhpcy5jcmVhdGVMb2FkZXJJbnN0YW5jZSgpO1xuICAgIHJldHVybiBsb2FkZXIubG9hZCguLi5hcmdzKTtcbiAgfVxufVxuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgVGhDYWxsYmFja0xvYWRlckJhc2VQaXBlPFREYXRhID0gdW5rbm93biwgVFVybCBleHRlbmRzIHN0cmluZyB8IHN0cmluZ1tdID0gc3RyaW5nPlxuICBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm1cbntcbiAgcHJvdGVjdGVkIGFic3RyYWN0IHNlcnZpY2U6IFRoQ2FsbGJhY2tMb2FkZXJTZXJ2aWNlPFREYXRhLCBUVXJsPjtcblxuICBwdWJsaWMgdHJhbnNmb3JtKC4uLmFyZ3M6IFBhcmFtZXRlcnM8TG9hZGVyPFREYXRhLCBUVXJsPlsnbG9hZCddPikge1xuICAgIHJldHVybiB0aGlzLnNlcnZpY2UubG9hZCguLi5hcmdzKTtcbiAgfVxufVxuXG5ARGlyZWN0aXZlKHt9KVxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIFRoQ2FsbGJhY2tMb2FkZXJCYXNlRGlyZWN0aXZlPFREYXRhID0gdW5rbm93biwgVFVybCBleHRlbmRzIHN0cmluZyB8IHN0cmluZ1tdID0gc3RyaW5nPlxuICBpbXBsZW1lbnRzIE9uSW5pdFxue1xuICBwcm90ZWN0ZWQgYWJzdHJhY3Qgc2VydmljZTogVGhDYWxsYmFja0xvYWRlclNlcnZpY2U8VERhdGEsIFRVcmw+O1xuXG4gIHByaXZhdGUgaW5pdGlhbGl6ZWQgPSBmYWxzZTtcbiAgcHJpdmF0ZSBfdXJsPzogVFVybDtcblxuICBwcm90ZWN0ZWQgb25Mb2FkZWQkPzogRXZlbnRFbWl0dGVyPFJldHVyblR5cGU8TG9hZGVyPFREYXRhLCBUVXJsPlsnbG9hZCddPj47XG4gIHByb3RlY3RlZCBvblByb2dyZXNzJD86IEV2ZW50RW1pdHRlcjxQcm9ncmVzc0V2ZW50PjtcblxuICBASW5wdXQoKVxuICBzZXQgdXJsKHVybDogVFVybCB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX3VybCA9IHVybDtcbiAgICB0aGlzLmxvYWQoKTtcbiAgfVxuXG4gIGdldCB1cmwoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3VybDtcbiAgfVxuXG4gIEBPdXRwdXQoKSBnZXQgb25Mb2FkZWQoKSB7XG4gICAgaWYgKCF0aGlzLm9uTG9hZGVkJCkge1xuICAgICAgdGhpcy5vbkxvYWRlZCQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLm9uTG9hZGVkJDtcbiAgfVxuXG4gIEBPdXRwdXQoKSBnZXQgb25Qcm9ncmVzcygpIHtcbiAgICBpZiAoIXRoaXMub25Qcm9ncmVzcyQpIHtcbiAgICAgIHRoaXMub25Qcm9ncmVzcyQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLm9uUHJvZ3Jlc3MkO1xuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgQEhvc3QoKSBwcm90ZWN0ZWQgaG9zdDogeyBvYmpSZWY6IGFueSB9LFxuICAgIHByb3RlY3RlZCB6b25lOiBOZ1pvbmUsXG4gICkge31cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmluaXRpYWxpemVkID0gdHJ1ZTtcbiAgICB0aGlzLmxvYWQoKTtcbiAgICAvLyB0aGlzLnpvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4gKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBhc3luYyBsb2FkKCkge1xuICAgIGlmICghdGhpcy5pbml0aWFsaXplZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICh0aGlzLl91cmwgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdtaXNzaW5nIHVybCcpO1xuICAgIH1cblxuICAgIGNvbnN0IHVybCA9IHRoaXMuX3VybDtcblxuICAgIGNvbnN0IG9uUHJvZ3Jlc3MgPSBpc09ic2VydmVkKHRoaXMub25Qcm9ncmVzcyQpXG4gICAgICA/IChwcm9ncmVzczogUHJvZ3Jlc3NFdmVudDxFdmVudFRhcmdldD4pID0+IHtcbiAgICAgICAgICB0aGlzLm9uUHJvZ3Jlc3MkPy5uZXh0KHByb2dyZXNzKTtcbiAgICAgICAgfVxuICAgICAgOiB1bmRlZmluZWQ7XG5cbiAgICBjb25zdCBvbkxvYWQgPSBpc09ic2VydmVkKHRoaXMub25Mb2FkZWQkKVxuICAgICAgPyAoLi4uYXJnczogYW55KSA9PiB7XG4gICAgICAgICAgdGhpcy5vbkxvYWRlZCQ/Lm5leHQoYXJnc1swXSk7XG4gICAgICAgIH1cbiAgICAgIDogdW5kZWZpbmVkO1xuXG4gICAgdGhpcy5ob3N0Lm9ialJlZiA9IHRoaXMuem9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PlxuICAgICAgKHRoaXMuc2VydmljZSBhcyBUaENhbGxiYWNrTG9hZGVyU2VydmljZTxURGF0YSwgVFVybD4pLmxvYWQodXJsLCBvbkxvYWQhLCBvblByb2dyZXNzKSxcbiAgICApO1xuICB9XG59XG4iXX0=