/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix */
import { ChangeDetectionStrategy, Component, forwardRef, } from '@angular/core';
import { Bone } from 'three';
import { ThObject3D } from './ThObject3D';
import * as i0 from "@angular/core";
export class ThBone extends ThObject3D {
    getType() {
        return Bone;
    }
    get isBone() {
        return this._objRef?.isBone;
    }
    get type() {
        return this._objRef?.type;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThBone, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.1.2", type: ThBone, selector: "th-bone", providers: [{ provide: ThObject3D, useExisting: forwardRef(() => ThBone) }], usesInheritance: true, ngImport: i0, template: '<ng-content/>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThBone, decorators: [{
            type: Component,
            args: [{
                    selector: 'th-bone',
                    template: '<ng-content/>',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    providers: [{ provide: ThObject3D, useExisting: forwardRef(() => ThBone) }],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGhCb25lLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LXRocmVlL3NyYy9saWIvZ2VuZXJhdGVkL1RoQm9uZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSx5REFBeUQ7QUFDekQseUNBQXlDO0FBQ3pDLCtGQUErRjtBQUMvRixPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFFVCxVQUFVLEdBQ1gsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLElBQUksRUFBb0IsTUFBTSxPQUFPLENBQUM7QUFDL0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGNBQWMsQ0FBQzs7QUFRMUMsTUFBTSxPQUFPLE1BSVgsU0FBUSxVQUErQjtJQUNoQyxPQUFPO1FBQ1osT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBRUQsSUFBVyxNQUFNO1FBQ2YsT0FBTyxJQUFJLENBQUMsT0FBTyxFQUFFLE1BQU0sQ0FBQztJQUM5QixDQUFDO0lBQ0QsSUFBVyxJQUFJO1FBQ2IsT0FBTyxJQUFJLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQztJQUM1QixDQUFDOzhHQWRVLE1BQU07a0dBQU4sTUFBTSxrQ0FGTixDQUFDLEVBQUUsT0FBTyxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUUsVUFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsaURBRmpFLGVBQWU7OzJGQUlkLE1BQU07a0JBTmxCLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLFNBQVM7b0JBQ25CLFFBQVEsRUFBRSxlQUFlO29CQUN6QixlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtvQkFDL0MsU0FBUyxFQUFFLENBQUMsRUFBRSxPQUFPLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRSxVQUFVLENBQUMsR0FBRyxFQUFFLE9BQU8sQ0FBQyxFQUFFLENBQUM7aUJBQzVFIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgQHR5cGVzY3JpcHQtZXNsaW50L25hbWluZy1jb252ZW50aW9uICovXG4vKiBlc2xpbnQtZGlzYWJsZSBuby11bmRlcnNjb3JlLWRhbmdsZSAqL1xuLyogZXNsaW50LWRpc2FibGUgQGFuZ3VsYXItZXNsaW50L2NvbXBvbmVudC1zZWxlY3RvciwgQGFuZ3VsYXItZXNsaW50L2NvbXBvbmVudC1jbGFzcy1zdWZmaXggKi9cbmltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDb21wb25lbnQsXG4gIFR5cGUsXG4gIGZvcndhcmRSZWYsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQm9uZSwgT2JqZWN0M0RFdmVudE1hcCB9IGZyb20gJ3RocmVlJztcbmltcG9ydCB7IFRoT2JqZWN0M0QgfSBmcm9tICcuL1RoT2JqZWN0M0QnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0aC1ib25lJyxcbiAgdGVtcGxhdGU6ICc8bmctY29udGVudC8+JyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHByb3ZpZGVyczogW3sgcHJvdmlkZTogVGhPYmplY3QzRCwgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gVGhCb25lKSB9XSxcbn0pXG5leHBvcnQgY2xhc3MgVGhCb25lPFxuICBURXZlbnRNYXAgZXh0ZW5kcyBPYmplY3QzREV2ZW50TWFwID0gT2JqZWN0M0RFdmVudE1hcCxcbiAgVCBleHRlbmRzIEJvbmU8VEV2ZW50TWFwPiA9IEJvbmU8VEV2ZW50TWFwPixcbiAgVEFSR1MgPSBbXSxcbj4gZXh0ZW5kcyBUaE9iamVjdDNEPFRFdmVudE1hcCwgVCwgVEFSR1M+IHtcbiAgcHVibGljIGdldFR5cGUoKTogVHlwZTxCb25lPFRFdmVudE1hcD4+IHtcbiAgICByZXR1cm4gQm9uZTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaXNCb25lKCk6IHRydWUgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9vYmpSZWY/LmlzQm9uZTtcbiAgfVxuICBwdWJsaWMgZ2V0IHR5cGUoKTogKHN0cmluZyB8ICdCb25lJykgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9vYmpSZWY/LnR5cGU7XG4gIH1cbn1cbiJdfQ==