/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix */
import { ChangeDetectionStrategy, Component, forwardRef, } from '@angular/core';
import { LineLoop } from 'three';
import { ThLine } from './ThLine';
import { ThObject3D } from './ThObject3D';
import * as i0 from "@angular/core";
export class ThLineLoop extends ThLine {
    getType() {
        return LineLoop;
    }
    get isLineLoop() {
        return this._objRef?.isLineLoop;
    }
    get type() {
        return this._objRef?.type;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThLineLoop, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.1.2", type: ThLineLoop, selector: "th-lineLoop", providers: [
            { provide: ThObject3D, useExisting: forwardRef(() => ThLineLoop) },
        ], usesInheritance: true, ngImport: i0, template: '<ng-content/>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThLineLoop, decorators: [{
            type: Component,
            args: [{
                    selector: 'th-lineLoop',
                    template: '<ng-content/>',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    providers: [
                        { provide: ThObject3D, useExisting: forwardRef(() => ThLineLoop) },
                    ],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGhMaW5lTG9vcC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC10aHJlZS9zcmMvbGliL2dlbmVyYXRlZC9UaExpbmVMb29wLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHlEQUF5RDtBQUN6RCx5Q0FBeUM7QUFDekMsK0ZBQStGO0FBQy9GLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUVULFVBQVUsR0FDWCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQWtCLFFBQVEsRUFBOEIsTUFBTSxPQUFPLENBQUM7QUFDN0UsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLFVBQVUsQ0FBQztBQUNsQyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sY0FBYyxDQUFDOztBQVUxQyxNQUFNLE9BQU8sVUFVWCxTQUFRLE1BQWlEO0lBQ2xELE9BQU87UUFDWixPQUFPLFFBQVEsQ0FBQztJQUNsQixDQUFDO0lBRUQsSUFBVyxVQUFVO1FBQ25CLE9BQU8sSUFBSSxDQUFDLE9BQU8sRUFBRSxVQUFVLENBQUM7SUFDbEMsQ0FBQztJQUNELElBQVcsSUFBSTtRQUNiLE9BQU8sSUFBSSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUM7SUFDNUIsQ0FBQzs4R0FwQlUsVUFBVTtrR0FBVixVQUFVLHNDQUpWO1lBQ1QsRUFBRSxPQUFPLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRSxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsVUFBVSxDQUFDLEVBQUU7U0FDbkUsaURBSlMsZUFBZTs7MkZBTWQsVUFBVTtrQkFSdEIsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsYUFBYTtvQkFDdkIsUUFBUSxFQUFFLGVBQWU7b0JBQ3pCLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO29CQUMvQyxTQUFTLEVBQUU7d0JBQ1QsRUFBRSxPQUFPLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRSxVQUFVLENBQUMsR0FBRyxFQUFFLFdBQVcsQ0FBQyxFQUFFO3FCQUNuRTtpQkFDRiIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIEB0eXBlc2NyaXB0LWVzbGludC9uYW1pbmctY29udmVudGlvbiAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tdW5kZXJzY29yZS1kYW5nbGUgKi9cbi8qIGVzbGludC1kaXNhYmxlIEBhbmd1bGFyLWVzbGludC9jb21wb25lbnQtc2VsZWN0b3IsIEBhbmd1bGFyLWVzbGludC9jb21wb25lbnQtY2xhc3Mtc3VmZml4ICovXG5pbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ29tcG9uZW50LFxuICBUeXBlLFxuICBmb3J3YXJkUmVmLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJ1ZmZlckdlb21ldHJ5LCBMaW5lTG9vcCwgTWF0ZXJpYWwsIE9iamVjdDNERXZlbnRNYXAgfSBmcm9tICd0aHJlZSc7XG5pbXBvcnQgeyBUaExpbmUgfSBmcm9tICcuL1RoTGluZSc7XG5pbXBvcnQgeyBUaE9iamVjdDNEIH0gZnJvbSAnLi9UaE9iamVjdDNEJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndGgtbGluZUxvb3AnLFxuICB0ZW1wbGF0ZTogJzxuZy1jb250ZW50Lz4nLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgcHJvdmlkZXJzOiBbXG4gICAgeyBwcm92aWRlOiBUaE9iamVjdDNELCB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBUaExpbmVMb29wKSB9LFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBUaExpbmVMb29wPFxuICBUR2VvbWV0cnkgZXh0ZW5kcyBCdWZmZXJHZW9tZXRyeSA9IEJ1ZmZlckdlb21ldHJ5LFxuICBUTWF0ZXJpYWwgZXh0ZW5kcyBNYXRlcmlhbCB8IE1hdGVyaWFsW10gPSBNYXRlcmlhbCB8IE1hdGVyaWFsW10sXG4gIFRFdmVudE1hcCBleHRlbmRzIE9iamVjdDNERXZlbnRNYXAgPSBPYmplY3QzREV2ZW50TWFwLFxuICBUIGV4dGVuZHMgTGluZUxvb3A8VEdlb21ldHJ5LCBUTWF0ZXJpYWwsIFRFdmVudE1hcD4gPSBMaW5lTG9vcDxcbiAgICBUR2VvbWV0cnksXG4gICAgVE1hdGVyaWFsLFxuICAgIFRFdmVudE1hcFxuICA+LFxuICBUQVJHUyA9IFtnZW9tZXRyeT86IFRHZW9tZXRyeSwgbWF0ZXJpYWw/OiBUTWF0ZXJpYWxdLFxuPiBleHRlbmRzIFRoTGluZTxUR2VvbWV0cnksIFRNYXRlcmlhbCwgVEV2ZW50TWFwLCBULCBUQVJHUz4ge1xuICBwdWJsaWMgZ2V0VHlwZSgpOiBUeXBlPExpbmVMb29wPFRHZW9tZXRyeSwgVE1hdGVyaWFsLCBURXZlbnRNYXA+PiB7XG4gICAgcmV0dXJuIExpbmVMb29wO1xuICB9XG5cbiAgcHVibGljIGdldCBpc0xpbmVMb29wKCk6IHRydWUgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9vYmpSZWY/LmlzTGluZUxvb3A7XG4gIH1cbiAgcHVibGljIGdldCB0eXBlKCk6IChzdHJpbmcgfCAnTGluZUxvb3AnKSB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX29ialJlZj8udHlwZTtcbiAgfVxufVxuIl19