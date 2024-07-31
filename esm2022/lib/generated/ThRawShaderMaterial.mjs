/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix */
import { ChangeDetectionStrategy, Component, forwardRef, } from '@angular/core';
import { RawShaderMaterial } from 'three';
import { ThMaterial } from './ThMaterial';
import { ThShaderMaterial } from './ThShaderMaterial';
import * as i0 from "@angular/core";
export class ThRawShaderMaterial extends ThShaderMaterial {
    getType() {
        return RawShaderMaterial;
    }
    get isRawShaderMaterial() {
        return this._objRef?.isRawShaderMaterial;
    }
    get type() {
        return this._objRef?.type;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThRawShaderMaterial, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.1.2", type: ThRawShaderMaterial, selector: "th-rawShaderMaterial", providers: [
            { provide: ThMaterial, useExisting: forwardRef(() => ThRawShaderMaterial) },
        ], usesInheritance: true, ngImport: i0, template: '<ng-content/>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThRawShaderMaterial, decorators: [{
            type: Component,
            args: [{
                    selector: 'th-rawShaderMaterial',
                    template: '<ng-content/>',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    providers: [
                        { provide: ThMaterial, useExisting: forwardRef(() => ThRawShaderMaterial) },
                    ],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGhSYXdTaGFkZXJNYXRlcmlhbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC10aHJlZS9zcmMvbGliL2dlbmVyYXRlZC9UaFJhd1NoYWRlck1hdGVyaWFsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHlEQUF5RDtBQUN6RCx5Q0FBeUM7QUFDekMsK0ZBQStGO0FBQy9GLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUVULFVBQVUsR0FDWCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsaUJBQWlCLEVBQTRCLE1BQU0sT0FBTyxDQUFDO0FBQ3BFLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFDMUMsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7O0FBVXRELE1BQU0sT0FBTyxtQkFHWCxTQUFRLGdCQUEwQjtJQUMzQixPQUFPO1FBQ1osT0FBTyxpQkFBaUIsQ0FBQztJQUMzQixDQUFDO0lBRUQsSUFBVyxtQkFBbUI7UUFDNUIsT0FBTyxJQUFJLENBQUMsT0FBTyxFQUFFLG1CQUFtQixDQUFDO0lBQzNDLENBQUM7SUFDRCxJQUFXLElBQUk7UUFDYixPQUFPLElBQUksQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDO0lBQzVCLENBQUM7OEdBYlUsbUJBQW1CO2tHQUFuQixtQkFBbUIsK0NBSm5CO1lBQ1QsRUFBRSxPQUFPLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRSxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsbUJBQW1CLENBQUMsRUFBRTtTQUM1RSxpREFKUyxlQUFlOzsyRkFNZCxtQkFBbUI7a0JBUi9CLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLHNCQUFzQjtvQkFDaEMsUUFBUSxFQUFFLGVBQWU7b0JBQ3pCLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO29CQUMvQyxTQUFTLEVBQUU7d0JBQ1QsRUFBRSxPQUFPLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRSxVQUFVLENBQUMsR0FBRyxFQUFFLG9CQUFvQixDQUFDLEVBQUU7cUJBQzVFO2lCQUNGIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgQHR5cGVzY3JpcHQtZXNsaW50L25hbWluZy1jb252ZW50aW9uICovXG4vKiBlc2xpbnQtZGlzYWJsZSBuby11bmRlcnNjb3JlLWRhbmdsZSAqL1xuLyogZXNsaW50LWRpc2FibGUgQGFuZ3VsYXItZXNsaW50L2NvbXBvbmVudC1zZWxlY3RvciwgQGFuZ3VsYXItZXNsaW50L2NvbXBvbmVudC1jbGFzcy1zdWZmaXggKi9cbmltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDb21wb25lbnQsXG4gIFR5cGUsXG4gIGZvcndhcmRSZWYsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUmF3U2hhZGVyTWF0ZXJpYWwsIFNoYWRlck1hdGVyaWFsUGFyYW1ldGVycyB9IGZyb20gJ3RocmVlJztcbmltcG9ydCB7IFRoTWF0ZXJpYWwgfSBmcm9tICcuL1RoTWF0ZXJpYWwnO1xuaW1wb3J0IHsgVGhTaGFkZXJNYXRlcmlhbCB9IGZyb20gJy4vVGhTaGFkZXJNYXRlcmlhbCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3RoLXJhd1NoYWRlck1hdGVyaWFsJyxcbiAgdGVtcGxhdGU6ICc8bmctY29udGVudC8+JyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHByb3ZpZGVyczogW1xuICAgIHsgcHJvdmlkZTogVGhNYXRlcmlhbCwgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gVGhSYXdTaGFkZXJNYXRlcmlhbCkgfSxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgVGhSYXdTaGFkZXJNYXRlcmlhbDxcbiAgVCBleHRlbmRzIFJhd1NoYWRlck1hdGVyaWFsID0gUmF3U2hhZGVyTWF0ZXJpYWwsXG4gIFRBUkdTID0gLyogcGFyYW1ldGVycz8gKi8gU2hhZGVyTWF0ZXJpYWxQYXJhbWV0ZXJzLFxuPiBleHRlbmRzIFRoU2hhZGVyTWF0ZXJpYWw8VCwgVEFSR1M+IHtcbiAgcHVibGljIGdldFR5cGUoKTogVHlwZTxSYXdTaGFkZXJNYXRlcmlhbD4ge1xuICAgIHJldHVybiBSYXdTaGFkZXJNYXRlcmlhbDtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaXNSYXdTaGFkZXJNYXRlcmlhbCgpOiB0cnVlIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fb2JqUmVmPy5pc1Jhd1NoYWRlck1hdGVyaWFsO1xuICB9XG4gIHB1YmxpYyBnZXQgdHlwZSgpOiAnUmF3U2hhZGVyTWF0ZXJpYWwnIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fb2JqUmVmPy50eXBlO1xuICB9XG59XG4iXX0=