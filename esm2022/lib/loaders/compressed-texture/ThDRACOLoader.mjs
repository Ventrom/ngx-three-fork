import { Injectable } from '@angular/core';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js';
import { ThCallbackLoaderService } from '../ThCallbackLoaderBase';
import * as i0 from "@angular/core";
export class DRACOLoaderService extends ThCallbackLoaderService {
    constructor() {
        super(...arguments);
        this.clazz = DRACOLoader;
        this.decoderPath = '';
        this.reuseInstance = true;
    }
    setDecoderPath(path) {
        this.decoderPath = path;
    }
    setDecoderConfig(config) {
        this.decoderConfig = config;
    }
    setWorkerLimit(limit) {
        this.workerLimit = limit;
    }
    setReuseInstance(reuse) {
        this.reuseInstance = reuse;
    }
    createLoaderInstance() {
        if (this.reuseInstance && this.instance) {
            return this.instance;
        }
        const loader = super.createLoaderInstance();
        loader.setDecoderPath(this.decoderPath);
        if (this.decoderConfig) {
            loader.setDecoderConfig(this.decoderConfig);
        }
        if (this.workerLimit) {
            loader.setWorkerLimit(this.workerLimit);
        }
        if (this.reuseInstance) {
            this.instance = loader;
        }
        return loader;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: DRACOLoaderService, deps: null, target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: DRACOLoaderService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: DRACOLoaderService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGhEUkFDT0xvYWRlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC10aHJlZS9zcmMvbGliL2xvYWRlcnMvY29tcHJlc3NlZC10ZXh0dXJlL1RoRFJBQ09Mb2FkZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFDeEUsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0seUJBQXlCLENBQUM7O0FBVWxFLE1BQU0sT0FBTyxrQkFBbUIsU0FBUSx1QkFBdUM7SUFIL0U7O1FBSWtCLFVBQUssR0FBRyxXQUFXLENBQUM7UUFDMUIsZ0JBQVcsR0FBRyxFQUFFLENBQUM7UUFHakIsa0JBQWEsR0FBRyxJQUFJLENBQUM7S0EwQ2hDO0lBdENRLGNBQWMsQ0FBQyxJQUFZO1FBQ2hDLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO0lBQzFCLENBQUM7SUFFTSxnQkFBZ0IsQ0FBQyxNQUEwQjtRQUNoRCxJQUFJLENBQUMsYUFBYSxHQUFHLE1BQU0sQ0FBQztJQUM5QixDQUFDO0lBRU0sY0FBYyxDQUFDLEtBQWE7UUFDakMsSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7SUFDM0IsQ0FBQztJQUVNLGdCQUFnQixDQUFDLEtBQWM7UUFDcEMsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7SUFDN0IsQ0FBQztJQUVNLG9CQUFvQjtRQUN6QixJQUFJLElBQUksQ0FBQyxhQUFhLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1lBQ3hDLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUN2QixDQUFDO1FBRUQsTUFBTSxNQUFNLEdBQUcsS0FBSyxDQUFDLG9CQUFvQixFQUFpQixDQUFDO1FBQzNELE1BQU0sQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBRXhDLElBQUksSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1lBQ3ZCLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDOUMsQ0FBQztRQUVELElBQUksSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1lBQ3JCLE1BQU0sQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQzFDLENBQUM7UUFFRCxJQUFJLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztZQUN2QixJQUFJLENBQUMsUUFBUSxHQUFHLE1BQU0sQ0FBQztRQUN6QixDQUFDO1FBRUQsT0FBTyxNQUFNLENBQUM7SUFDaEIsQ0FBQzs4R0E5Q1Usa0JBQWtCO2tIQUFsQixrQkFBa0IsY0FGakIsTUFBTTs7MkZBRVAsa0JBQWtCO2tCQUg5QixVQUFVO21CQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERSQUNPTG9hZGVyIH0gZnJvbSAndGhyZWUvZXhhbXBsZXMvanNtL2xvYWRlcnMvRFJBQ09Mb2FkZXIuanMnO1xuaW1wb3J0IHsgVGhDYWxsYmFja0xvYWRlclNlcnZpY2UgfSBmcm9tICcuLi9UaENhbGxiYWNrTG9hZGVyQmFzZSc7XG5pbXBvcnQgeyBCdWZmZXJHZW9tZXRyeSB9IGZyb20gJ3RocmVlJztcblxuZXhwb3J0IGludGVyZmFjZSBEUkFDT0RlY29kZXJDb25maWcge1xuICB0eXBlOiAnanMnIHwgJ3dhc20nO1xufVxuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgRFJBQ09Mb2FkZXJTZXJ2aWNlIGV4dGVuZHMgVGhDYWxsYmFja0xvYWRlclNlcnZpY2U8QnVmZmVyR2VvbWV0cnk+IHtcbiAgcHVibGljIHJlYWRvbmx5IGNsYXp6ID0gRFJBQ09Mb2FkZXI7XG4gIHByb3RlY3RlZCBkZWNvZGVyUGF0aCA9ICcnO1xuICBwcm90ZWN0ZWQgZGVjb2RlckNvbmZpZz86IERSQUNPRGVjb2RlckNvbmZpZztcbiAgcHJvdGVjdGVkIHdvcmtlckxpbWl0PzogbnVtYmVyO1xuICBwcm90ZWN0ZWQgcmV1c2VJbnN0YW5jZSA9IHRydWU7XG5cbiAgcHJvdGVjdGVkIGluc3RhbmNlPzogRFJBQ09Mb2FkZXI7XG5cbiAgcHVibGljIHNldERlY29kZXJQYXRoKHBhdGg6IHN0cmluZykge1xuICAgIHRoaXMuZGVjb2RlclBhdGggPSBwYXRoO1xuICB9XG5cbiAgcHVibGljIHNldERlY29kZXJDb25maWcoY29uZmlnOiBEUkFDT0RlY29kZXJDb25maWcpIHtcbiAgICB0aGlzLmRlY29kZXJDb25maWcgPSBjb25maWc7XG4gIH1cblxuICBwdWJsaWMgc2V0V29ya2VyTGltaXQobGltaXQ6IG51bWJlcikge1xuICAgIHRoaXMud29ya2VyTGltaXQgPSBsaW1pdDtcbiAgfVxuXG4gIHB1YmxpYyBzZXRSZXVzZUluc3RhbmNlKHJldXNlOiBib29sZWFuKSB7XG4gICAgdGhpcy5yZXVzZUluc3RhbmNlID0gcmV1c2U7XG4gIH1cblxuICBwdWJsaWMgY3JlYXRlTG9hZGVySW5zdGFuY2UoKTogRFJBQ09Mb2FkZXIge1xuICAgIGlmICh0aGlzLnJldXNlSW5zdGFuY2UgJiYgdGhpcy5pbnN0YW5jZSkge1xuICAgICAgcmV0dXJuIHRoaXMuaW5zdGFuY2U7XG4gICAgfVxuXG4gICAgY29uc3QgbG9hZGVyID0gc3VwZXIuY3JlYXRlTG9hZGVySW5zdGFuY2UoKSBhcyBEUkFDT0xvYWRlcjtcbiAgICBsb2FkZXIuc2V0RGVjb2RlclBhdGgodGhpcy5kZWNvZGVyUGF0aCk7XG5cbiAgICBpZiAodGhpcy5kZWNvZGVyQ29uZmlnKSB7XG4gICAgICBsb2FkZXIuc2V0RGVjb2RlckNvbmZpZyh0aGlzLmRlY29kZXJDb25maWcpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLndvcmtlckxpbWl0KSB7XG4gICAgICBsb2FkZXIuc2V0V29ya2VyTGltaXQodGhpcy53b3JrZXJMaW1pdCk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMucmV1c2VJbnN0YW5jZSkge1xuICAgICAgdGhpcy5pbnN0YW5jZSA9IGxvYWRlcjtcbiAgICB9XG5cbiAgICByZXR1cm4gbG9hZGVyO1xuICB9XG59XG4iXX0=