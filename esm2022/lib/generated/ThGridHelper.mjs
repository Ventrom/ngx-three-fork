/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix */
import { ChangeDetectionStrategy, Component, forwardRef, } from '@angular/core';
import { GridHelper, } from 'three';
import { ThLineSegments } from './ThLineSegments';
import { ThObject3D } from './ThObject3D';
import * as i0 from "@angular/core";
export class ThGridHelper extends ThLineSegments {
    getType() {
        return GridHelper;
    }
    get type() {
        return this._objRef?.type;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThGridHelper, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.1.2", type: ThGridHelper, selector: "th-gridHelper", providers: [
            { provide: ThObject3D, useExisting: forwardRef(() => ThGridHelper) },
        ], usesInheritance: true, ngImport: i0, template: '<ng-content/>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThGridHelper, decorators: [{
            type: Component,
            args: [{
                    selector: 'th-gridHelper',
                    template: '<ng-content/>',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    providers: [
                        { provide: ThObject3D, useExisting: forwardRef(() => ThGridHelper) },
                    ],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGhHcmlkSGVscGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LXRocmVlL3NyYy9saWIvZ2VuZXJhdGVkL1RoR3JpZEhlbHBlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSx5REFBeUQ7QUFDekQseUNBQXlDO0FBQ3pDLCtGQUErRjtBQUMvRixPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFFVCxVQUFVLEdBQ1gsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUdMLFVBQVUsR0FHWCxNQUFNLE9BQU8sQ0FBQztBQUNmLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUNsRCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sY0FBYyxDQUFDOztBQVUxQyxNQUFNLE9BQU8sWUFRWCxTQUFRLGNBTVQ7SUFDUSxPQUFPO1FBQ1osT0FBTyxVQUFVLENBQUM7SUFDcEIsQ0FBQztJQUVELElBQVcsSUFBSTtRQUNiLE9BQU8sSUFBSSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUM7SUFDNUIsQ0FBQzs4R0FyQlUsWUFBWTtrR0FBWixZQUFZLHdDQUpaO1lBQ1QsRUFBRSxPQUFPLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRSxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsWUFBWSxDQUFDLEVBQUU7U0FDckUsaURBSlMsZUFBZTs7MkZBTWQsWUFBWTtrQkFSeEIsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsZUFBZTtvQkFDekIsUUFBUSxFQUFFLGVBQWU7b0JBQ3pCLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO29CQUMvQyxTQUFTLEVBQUU7d0JBQ1QsRUFBRSxPQUFPLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRSxVQUFVLENBQUMsR0FBRyxFQUFFLGFBQWEsQ0FBQyxFQUFFO3FCQUNyRTtpQkFDRiIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIEB0eXBlc2NyaXB0LWVzbGludC9uYW1pbmctY29udmVudGlvbiAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tdW5kZXJzY29yZS1kYW5nbGUgKi9cbi8qIGVzbGludC1kaXNhYmxlIEBhbmd1bGFyLWVzbGludC9jb21wb25lbnQtc2VsZWN0b3IsIEBhbmd1bGFyLWVzbGludC9jb21wb25lbnQtY2xhc3Mtc3VmZml4ICovXG5pbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ29tcG9uZW50LFxuICBUeXBlLFxuICBmb3J3YXJkUmVmLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIEJ1ZmZlckdlb21ldHJ5LFxuICBDb2xvclJlcHJlc2VudGF0aW9uLFxuICBHcmlkSGVscGVyLFxuICBMaW5lQmFzaWNNYXRlcmlhbCxcbiAgT2JqZWN0M0RFdmVudE1hcCxcbn0gZnJvbSAndGhyZWUnO1xuaW1wb3J0IHsgVGhMaW5lU2VnbWVudHMgfSBmcm9tICcuL1RoTGluZVNlZ21lbnRzJztcbmltcG9ydCB7IFRoT2JqZWN0M0QgfSBmcm9tICcuL1RoT2JqZWN0M0QnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0aC1ncmlkSGVscGVyJyxcbiAgdGVtcGxhdGU6ICc8bmctY29udGVudC8+JyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHByb3ZpZGVyczogW1xuICAgIHsgcHJvdmlkZTogVGhPYmplY3QzRCwgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gVGhHcmlkSGVscGVyKSB9LFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBUaEdyaWRIZWxwZXI8XG4gIFQgZXh0ZW5kcyBHcmlkSGVscGVyID0gR3JpZEhlbHBlcixcbiAgVEFSR1MgPSBbXG4gICAgc2l6ZT86IG51bWJlcixcbiAgICBkaXZpc2lvbnM/OiBudW1iZXIsXG4gICAgY29sb3IxPzogQ29sb3JSZXByZXNlbnRhdGlvbixcbiAgICBjb2xvcjI/OiBDb2xvclJlcHJlc2VudGF0aW9uLFxuICBdLFxuPiBleHRlbmRzIFRoTGluZVNlZ21lbnRzPFxuICBCdWZmZXJHZW9tZXRyeSxcbiAgTGluZUJhc2ljTWF0ZXJpYWwsXG4gIE9iamVjdDNERXZlbnRNYXAsXG4gIFQsXG4gIFRBUkdTXG4+IHtcbiAgcHVibGljIGdldFR5cGUoKTogVHlwZTxHcmlkSGVscGVyPiB7XG4gICAgcmV0dXJuIEdyaWRIZWxwZXI7XG4gIH1cblxuICBwdWJsaWMgZ2V0IHR5cGUoKTogKHN0cmluZyB8ICdHcmlkSGVscGVyJykgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9vYmpSZWY/LnR5cGU7XG4gIH1cbn1cbiJdfQ==