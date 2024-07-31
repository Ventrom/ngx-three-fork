/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix */
import { ChangeDetectionStrategy, Component, ElementRef, forwardRef, inject } from '@angular/core';
import { CSS3DObject } from 'three/examples/jsm/renderers/CSS3DRenderer.js';
import { ThObject3D } from '../ThObject3D';
import { ThCSS3DObjectGen } from '../ThCSS3DObjectGen';
import * as i0 from "@angular/core";
export class ThCSS3DObject extends ThCSS3DObjectGen {
    constructor() {
        super(...arguments);
        this.elementRef = inject(ElementRef);
    }
    getType() {
        return CSS3DObject;
    }
    createThreeInstance(args) {
        return super.createThreeInstance(args ?? this.elementRef?.nativeElement);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThCSS3DObject, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.1.2", type: ThCSS3DObject, selector: "th-cSS3DObject", providers: [{ provide: ThObject3D, useExisting: forwardRef(() => ThCSS3DObject) }], usesInheritance: true, ngImport: i0, template: '<ng-content/>', isInline: true, styles: [":host{display:inline-block}\n"], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThCSS3DObject, decorators: [{
            type: Component,
            args: [{ selector: 'th-cSS3DObject', template: '<ng-content/>', changeDetection: ChangeDetectionStrategy.OnPush, providers: [{ provide: ThObject3D, useExisting: forwardRef(() => ThCSS3DObject) }], styles: [":host{display:inline-block}\n"] }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGhDU1MzRE9iamVjdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC10aHJlZS9zcmMvbGliL2dlbmVyYXRlZC9vdmVycmlkZXMvVGhDU1MzRE9iamVjdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSx5REFBeUQ7QUFDekQseUNBQXlDO0FBQ3pDLCtGQUErRjtBQUMvRixPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFRLE1BQU0sZUFBZSxDQUFDO0FBQ3pHLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSwrQ0FBK0MsQ0FBQztBQUM1RSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHFCQUFxQixDQUFDOztBQWV2RCxNQUFNLE9BQU8sYUFHWCxTQUFRLGdCQUEwQjtJQWhCcEM7O1FBaUJFLGVBQVUsR0FBRyxNQUFNLENBQUMsVUFBVSxDQUFDLENBQUM7S0FTakM7SUFQUSxPQUFPO1FBQ1osT0FBTyxXQUFXLENBQUM7SUFDckIsQ0FBQztJQUVlLG1CQUFtQixDQUFDLElBQWM7UUFDaEQsT0FBTyxLQUFLLENBQUMsbUJBQW1CLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUUsYUFBYSxDQUFDLENBQUM7SUFDM0UsQ0FBQzs4R0FaVSxhQUFhO2tHQUFiLGFBQWEseUNBRmIsQ0FBQyxFQUFFLE9BQU8sRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxhQUFhLENBQUMsRUFBRSxDQUFDLGlEQVR4RSxlQUFlOzsyRkFXZCxhQUFhO2tCQWJ6QixTQUFTOytCQUNFLGdCQUFnQixZQUNoQixlQUFlLG1CQUNSLHVCQUF1QixDQUFDLE1BQU0sYUFRcEMsQ0FBQyxFQUFFLE9BQU8sRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFLFVBQVUsQ0FBQyxHQUFHLEVBQUUsY0FBYyxDQUFDLEVBQUUsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIEB0eXBlc2NyaXB0LWVzbGludC9uYW1pbmctY29udmVudGlvbiAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tdW5kZXJzY29yZS1kYW5nbGUgKi9cbi8qIGVzbGludC1kaXNhYmxlIEBhbmd1bGFyLWVzbGludC9jb21wb25lbnQtc2VsZWN0b3IsIEBhbmd1bGFyLWVzbGludC9jb21wb25lbnQtY2xhc3Mtc3VmZml4ICovXG5pbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBmb3J3YXJkUmVmLCBpbmplY3QsIFR5cGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENTUzNET2JqZWN0IH0gZnJvbSAndGhyZWUvZXhhbXBsZXMvanNtL3JlbmRlcmVycy9DU1MzRFJlbmRlcmVyLmpzJztcbmltcG9ydCB7IFRoT2JqZWN0M0QgfSBmcm9tICcuLi9UaE9iamVjdDNEJztcbmltcG9ydCB7IFRoQ1NTM0RPYmplY3RHZW4gfSBmcm9tICcuLi9UaENTUzNET2JqZWN0R2VuJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndGgtY1NTM0RPYmplY3QnLFxuICB0ZW1wbGF0ZTogJzxuZy1jb250ZW50Lz4nLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgc3R5bGVzOiBbXG4gICAgYFxuICAgICAgOmhvc3Qge1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICB9XG4gICAgYCxcbiAgXSxcbiAgcHJvdmlkZXJzOiBbeyBwcm92aWRlOiBUaE9iamVjdDNELCB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBUaENTUzNET2JqZWN0KSB9XSxcbn0pXG5leHBvcnQgY2xhc3MgVGhDU1MzRE9iamVjdDxcbiAgVCBleHRlbmRzIENTUzNET2JqZWN0ID0gQ1NTM0RPYmplY3QsXG4gIFRBUkdTID0gLyogZWxlbWVudCAqLyBIVE1MRWxlbWVudCxcbj4gZXh0ZW5kcyBUaENTUzNET2JqZWN0R2VuPFQsIFRBUkdTPiB7XG4gIGVsZW1lbnRSZWYgPSBpbmplY3QoRWxlbWVudFJlZik7XG5cbiAgcHVibGljIGdldFR5cGUoKTogVHlwZTxDU1MzRE9iamVjdD4ge1xuICAgIHJldHVybiBDU1MzRE9iamVjdDtcbiAgfVxuXG4gIHB1YmxpYyBvdmVycmlkZSBjcmVhdGVUaHJlZUluc3RhbmNlKGFyZ3M/OiB1bmtub3duKSB7XG4gICAgcmV0dXJuIHN1cGVyLmNyZWF0ZVRocmVlSW5zdGFuY2UoYXJncyA/PyB0aGlzLmVsZW1lbnRSZWY/Lm5hdGl2ZUVsZW1lbnQpO1xuICB9XG59XG4iXX0=