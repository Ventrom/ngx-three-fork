/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix */
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Vector4, WebGLRenderTarget } from 'three';
import { ThEffectComposerGen } from '../ThEffectComposerGen';
import * as i0 from "@angular/core";
import * as i1 from "../../ThView";
import * as i2 from "../../ThEngine.service";
export class ThEffectComposer extends ThEffectComposerGen {
    constructor(view, engineService) {
        super();
        this.view = view;
        this.engineService = engineService;
    }
    createThreeInstance(args) {
        if (!args) {
            args = new Array(5);
        }
        args[0] = args[0] ?? this.engineService.wegblRenderer;
        args[1] = args[1] ?? this.initRenderTarget();
        return super.createThreeInstance(args);
    }
    initRenderTarget() {
        if (!this.view.viewPort) {
            return;
        }
        else {
            let width;
            let height;
            if (this.view.viewPort instanceof Vector4) {
                width = this.view.viewPort.z;
                height = this.view.viewPort?.width;
            }
            else {
                width = this.view.viewPort.width;
                height = this.view.viewPort.height;
            }
            return new WebGLRenderTarget(width, height);
        }
    }
    addToParent() {
        if (this._objRef) {
            this.view.effectComposer = this._objRef;
        }
    }
    removeFromParent() {
        this.view.effectComposer = undefined;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThEffectComposer, deps: [{ token: i1.ThView }, { token: i2.ThEngineService }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.1.2", type: ThEffectComposer, selector: "th-effectComposer", providers: [], usesInheritance: true, ngImport: i0, template: '<ng-content/>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThEffectComposer, decorators: [{
            type: Component,
            args: [{
                    selector: 'th-effectComposer',
                    template: '<ng-content/>',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    providers: [],
                }]
        }], ctorParameters: () => [{ type: i1.ThView }, { type: i2.ThEngineService }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGhFZmZlY3RDb21wb3Nlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC10aHJlZS9zcmMvbGliL2dlbmVyYXRlZC9vdmVycmlkZXMvVGhFZmZlY3RDb21wb3Nlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSx5REFBeUQ7QUFDekQseUNBQXlDO0FBQ3pDLCtGQUErRjtBQUMvRixPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25FLE9BQU8sRUFBRSxPQUFPLEVBQWlCLGlCQUFpQixFQUFFLE1BQU0sT0FBTyxDQUFDO0FBSWxFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDOzs7O0FBUTdELE1BQU0sT0FBTyxnQkFHWCxTQUFRLG1CQUE2QjtJQUNyQyxZQUNZLElBQVksRUFDWixhQUE4QjtRQUV4QyxLQUFLLEVBQUUsQ0FBQztRQUhFLFNBQUksR0FBSixJQUFJLENBQVE7UUFDWixrQkFBYSxHQUFiLGFBQWEsQ0FBaUI7SUFHMUMsQ0FBQztJQUVNLG1CQUFtQixDQUFDLElBQVk7UUFDckMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO1lBQ1YsSUFBSSxHQUFHLElBQUksS0FBSyxDQUFDLENBQUMsQ0FBVSxDQUFDO1FBQy9CLENBQUM7UUFFRCxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDO1FBQ3RELElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7UUFFN0MsT0FBTyxLQUFLLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDekMsQ0FBQztJQUVPLGdCQUFnQjtRQUN0QixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztZQUN4QixPQUFPO1FBQ1QsQ0FBQzthQUFNLENBQUM7WUFDTixJQUFJLEtBQWEsQ0FBQztZQUNsQixJQUFJLE1BQWMsQ0FBQztZQUNuQixJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxZQUFZLE9BQU8sRUFBRSxDQUFDO2dCQUMxQyxLQUFLLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO2dCQUM3QixNQUFNLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsS0FBSyxDQUFDO1lBQ3JDLENBQUM7aUJBQU0sQ0FBQztnQkFDTixLQUFLLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDO2dCQUNqQyxNQUFNLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDO1lBQ3JDLENBQUM7WUFDRCxPQUFPLElBQUksaUJBQWlCLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQzlDLENBQUM7SUFDSCxDQUFDO0lBRU0sV0FBVztRQUNoQixJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUNqQixJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO1FBQzFDLENBQUM7SUFDSCxDQUFDO0lBRU0sZ0JBQWdCO1FBQ3JCLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxHQUFHLFNBQVMsQ0FBQztJQUN2QyxDQUFDOzhHQS9DVSxnQkFBZ0I7a0dBQWhCLGdCQUFnQiw0Q0FGaEIsRUFBRSxpREFGSCxlQUFlOzsyRkFJZCxnQkFBZ0I7a0JBTjVCLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLG1CQUFtQjtvQkFDN0IsUUFBUSxFQUFFLGVBQWU7b0JBQ3pCLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO29CQUMvQyxTQUFTLEVBQUUsRUFBRTtpQkFDZCIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIEB0eXBlc2NyaXB0LWVzbGludC9uYW1pbmctY29udmVudGlvbiAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tdW5kZXJzY29yZS1kYW5nbGUgKi9cbi8qIGVzbGludC1kaXNhYmxlIEBhbmd1bGFyLWVzbGludC9jb21wb25lbnQtc2VsZWN0b3IsIEBhbmd1bGFyLWVzbGludC9jb21wb25lbnQtY2xhc3Mtc3VmZml4ICovXG5pbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBWZWN0b3I0LCBXZWJHTFJlbmRlcmVyLCBXZWJHTFJlbmRlclRhcmdldCB9IGZyb20gJ3RocmVlJztcbmltcG9ydCB7IEVmZmVjdENvbXBvc2VyIH0gZnJvbSAndGhyZWUvZXhhbXBsZXMvanNtL3Bvc3Rwcm9jZXNzaW5nL0VmZmVjdENvbXBvc2VyLmpzJztcbmltcG9ydCB7IFRoRW5naW5lU2VydmljZSB9IGZyb20gJy4uLy4uL1RoRW5naW5lLnNlcnZpY2UnO1xuaW1wb3J0IHsgVGhWaWV3IH0gZnJvbSAnLi4vLi4vVGhWaWV3JztcbmltcG9ydCB7IFRoRWZmZWN0Q29tcG9zZXJHZW4gfSBmcm9tICcuLi9UaEVmZmVjdENvbXBvc2VyR2VuJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndGgtZWZmZWN0Q29tcG9zZXInLFxuICB0ZW1wbGF0ZTogJzxuZy1jb250ZW50Lz4nLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgcHJvdmlkZXJzOiBbXSxcbn0pXG5leHBvcnQgY2xhc3MgVGhFZmZlY3RDb21wb3NlcjxcbiAgVCBleHRlbmRzIEVmZmVjdENvbXBvc2VyID0gRWZmZWN0Q29tcG9zZXIsXG4gIFRBUkdTIGV4dGVuZHMgYW55W10gPSBbcmVuZGVyZXI6IFdlYkdMUmVuZGVyZXIsIHJlbmRlclRhcmdldD86IFdlYkdMUmVuZGVyVGFyZ2V0XSxcbj4gZXh0ZW5kcyBUaEVmZmVjdENvbXBvc2VyR2VuPFQsIFRBUkdTPiB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCB2aWV3OiBUaFZpZXcsXG4gICAgcHJvdGVjdGVkIGVuZ2luZVNlcnZpY2U6IFRoRW5naW5lU2VydmljZSxcbiAgKSB7XG4gICAgc3VwZXIoKTtcbiAgfVxuXG4gIHB1YmxpYyBjcmVhdGVUaHJlZUluc3RhbmNlKGFyZ3M/OiBUQVJHUyk6IEVmZmVjdENvbXBvc2VyIHtcbiAgICBpZiAoIWFyZ3MpIHtcbiAgICAgIGFyZ3MgPSBuZXcgQXJyYXkoNSkgYXMgVEFSR1M7XG4gICAgfVxuXG4gICAgYXJnc1swXSA9IGFyZ3NbMF0gPz8gdGhpcy5lbmdpbmVTZXJ2aWNlLndlZ2JsUmVuZGVyZXI7XG4gICAgYXJnc1sxXSA9IGFyZ3NbMV0gPz8gdGhpcy5pbml0UmVuZGVyVGFyZ2V0KCk7XG5cbiAgICByZXR1cm4gc3VwZXIuY3JlYXRlVGhyZWVJbnN0YW5jZShhcmdzKTtcbiAgfVxuXG4gIHByaXZhdGUgaW5pdFJlbmRlclRhcmdldCgpIHtcbiAgICBpZiAoIXRoaXMudmlldy52aWV3UG9ydCkge1xuICAgICAgcmV0dXJuO1xuICAgIH0gZWxzZSB7XG4gICAgICBsZXQgd2lkdGg6IG51bWJlcjtcbiAgICAgIGxldCBoZWlnaHQ6IG51bWJlcjtcbiAgICAgIGlmICh0aGlzLnZpZXcudmlld1BvcnQgaW5zdGFuY2VvZiBWZWN0b3I0KSB7XG4gICAgICAgIHdpZHRoID0gdGhpcy52aWV3LnZpZXdQb3J0Lno7XG4gICAgICAgIGhlaWdodCA9IHRoaXMudmlldy52aWV3UG9ydD8ud2lkdGg7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB3aWR0aCA9IHRoaXMudmlldy52aWV3UG9ydC53aWR0aDtcbiAgICAgICAgaGVpZ2h0ID0gdGhpcy52aWV3LnZpZXdQb3J0LmhlaWdodDtcbiAgICAgIH1cbiAgICAgIHJldHVybiBuZXcgV2ViR0xSZW5kZXJUYXJnZXQod2lkdGgsIGhlaWdodCk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGFkZFRvUGFyZW50KCkge1xuICAgIGlmICh0aGlzLl9vYmpSZWYpIHtcbiAgICAgIHRoaXMudmlldy5lZmZlY3RDb21wb3NlciA9IHRoaXMuX29ialJlZjtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgcmVtb3ZlRnJvbVBhcmVudCgpIHtcbiAgICB0aGlzLnZpZXcuZWZmZWN0Q29tcG9zZXIgPSB1bmRlZmluZWQ7XG4gIH1cbn1cbiJdfQ==