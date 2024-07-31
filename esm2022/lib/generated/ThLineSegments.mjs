/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix */
import { ChangeDetectionStrategy, Component, forwardRef, } from '@angular/core';
import { LineSegments, } from 'three';
import { ThLine } from './ThLine';
import { ThObject3D } from './ThObject3D';
import * as i0 from "@angular/core";
export class ThLineSegments extends ThLine {
    getType() {
        return LineSegments;
    }
    get isLineSegments() {
        return this._objRef?.isLineSegments;
    }
    get type() {
        return this._objRef?.type;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThLineSegments, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.1.2", type: ThLineSegments, selector: "th-lineSegments", providers: [
            { provide: ThObject3D, useExisting: forwardRef(() => ThLineSegments) },
        ], usesInheritance: true, ngImport: i0, template: '<ng-content/>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThLineSegments, decorators: [{
            type: Component,
            args: [{
                    selector: 'th-lineSegments',
                    template: '<ng-content/>',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    providers: [
                        { provide: ThObject3D, useExisting: forwardRef(() => ThLineSegments) },
                    ],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGhMaW5lU2VnbWVudHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtdGhyZWUvc3JjL2xpYi9nZW5lcmF0ZWQvVGhMaW5lU2VnbWVudHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEseURBQXlEO0FBQ3pELHlDQUF5QztBQUN6QywrRkFBK0Y7QUFDL0YsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixTQUFTLEVBRVQsVUFBVSxHQUNYLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFFTCxZQUFZLEdBR2IsTUFBTSxPQUFPLENBQUM7QUFDZixPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sVUFBVSxDQUFDO0FBQ2xDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxjQUFjLENBQUM7O0FBVTFDLE1BQU0sT0FBTyxjQVVYLFNBQVEsTUFBaUQ7SUFDbEQsT0FBTztRQUNaLE9BQU8sWUFBWSxDQUFDO0lBQ3RCLENBQUM7SUFFRCxJQUFXLGNBQWM7UUFDdkIsT0FBTyxJQUFJLENBQUMsT0FBTyxFQUFFLGNBQWMsQ0FBQztJQUN0QyxDQUFDO0lBQ0QsSUFBVyxJQUFJO1FBQ2IsT0FBTyxJQUFJLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQztJQUM1QixDQUFDOzhHQXBCVSxjQUFjO2tHQUFkLGNBQWMsMENBSmQ7WUFDVCxFQUFFLE9BQU8sRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxjQUFjLENBQUMsRUFBRTtTQUN2RSxpREFKUyxlQUFlOzsyRkFNZCxjQUFjO2tCQVIxQixTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxpQkFBaUI7b0JBQzNCLFFBQVEsRUFBRSxlQUFlO29CQUN6QixlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtvQkFDL0MsU0FBUyxFQUFFO3dCQUNULEVBQUUsT0FBTyxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUUsVUFBVSxDQUFDLEdBQUcsRUFBRSxlQUFlLENBQUMsRUFBRTtxQkFDdkU7aUJBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBAdHlwZXNjcmlwdC1lc2xpbnQvbmFtaW5nLWNvbnZlbnRpb24gKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vLXVuZGVyc2NvcmUtZGFuZ2xlICovXG4vKiBlc2xpbnQtZGlzYWJsZSBAYW5ndWxhci1lc2xpbnQvY29tcG9uZW50LXNlbGVjdG9yLCBAYW5ndWxhci1lc2xpbnQvY29tcG9uZW50LWNsYXNzLXN1ZmZpeCAqL1xuaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENvbXBvbmVudCxcbiAgVHlwZSxcbiAgZm9yd2FyZFJlZixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBCdWZmZXJHZW9tZXRyeSxcbiAgTGluZVNlZ21lbnRzLFxuICBNYXRlcmlhbCxcbiAgT2JqZWN0M0RFdmVudE1hcCxcbn0gZnJvbSAndGhyZWUnO1xuaW1wb3J0IHsgVGhMaW5lIH0gZnJvbSAnLi9UaExpbmUnO1xuaW1wb3J0IHsgVGhPYmplY3QzRCB9IGZyb20gJy4vVGhPYmplY3QzRCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3RoLWxpbmVTZWdtZW50cycsXG4gIHRlbXBsYXRlOiAnPG5nLWNvbnRlbnQvPicsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBwcm92aWRlcnM6IFtcbiAgICB7IHByb3ZpZGU6IFRoT2JqZWN0M0QsIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IFRoTGluZVNlZ21lbnRzKSB9LFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBUaExpbmVTZWdtZW50czxcbiAgVEdlb21ldHJ5IGV4dGVuZHMgQnVmZmVyR2VvbWV0cnkgPSBCdWZmZXJHZW9tZXRyeSxcbiAgVE1hdGVyaWFsIGV4dGVuZHMgTWF0ZXJpYWwgfCBNYXRlcmlhbFtdID0gTWF0ZXJpYWwgfCBNYXRlcmlhbFtdLFxuICBURXZlbnRNYXAgZXh0ZW5kcyBPYmplY3QzREV2ZW50TWFwID0gT2JqZWN0M0RFdmVudE1hcCxcbiAgVCBleHRlbmRzIExpbmVTZWdtZW50czxUR2VvbWV0cnksIFRNYXRlcmlhbCwgVEV2ZW50TWFwPiA9IExpbmVTZWdtZW50czxcbiAgICBUR2VvbWV0cnksXG4gICAgVE1hdGVyaWFsLFxuICAgIFRFdmVudE1hcFxuICA+LFxuICBUQVJHUyA9IFtnZW9tZXRyeT86IFRHZW9tZXRyeSwgbWF0ZXJpYWw/OiBUTWF0ZXJpYWxdLFxuPiBleHRlbmRzIFRoTGluZTxUR2VvbWV0cnksIFRNYXRlcmlhbCwgVEV2ZW50TWFwLCBULCBUQVJHUz4ge1xuICBwdWJsaWMgZ2V0VHlwZSgpOiBUeXBlPExpbmVTZWdtZW50czxUR2VvbWV0cnksIFRNYXRlcmlhbCwgVEV2ZW50TWFwPj4ge1xuICAgIHJldHVybiBMaW5lU2VnbWVudHM7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGlzTGluZVNlZ21lbnRzKCk6IHRydWUgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9vYmpSZWY/LmlzTGluZVNlZ21lbnRzO1xuICB9XG4gIHB1YmxpYyBnZXQgdHlwZSgpOiAoc3RyaW5nIHwgJ0xpbmVTZWdtZW50cycpIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fb2JqUmVmPy50eXBlO1xuICB9XG59XG4iXX0=