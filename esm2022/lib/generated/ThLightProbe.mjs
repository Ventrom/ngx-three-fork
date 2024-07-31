/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix */
import { ChangeDetectionStrategy, Component, Input, forwardRef, } from '@angular/core';
import { LightProbe } from 'three';
import { applyValue } from '../util';
import { ThLight } from './ThLight';
import { ThObject3D } from './ThObject3D';
import * as i0 from "@angular/core";
export class ThLightProbe extends ThLight {
    getType() {
        return LightProbe;
    }
    get isLightProbe() {
        return this._objRef?.isLightProbe;
    }
    set sh(value) {
        if (this._objRef) {
            this._objRef.sh = applyValue(this._objRef.sh, value);
        }
    }
    get sh() {
        return this._objRef?.sh;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThLightProbe, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.1.2", type: ThLightProbe, selector: "th-lightProbe", inputs: { sh: "sh" }, providers: [
            { provide: ThObject3D, useExisting: forwardRef(() => ThLightProbe) },
        ], usesInheritance: true, ngImport: i0, template: '<ng-content/>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThLightProbe, decorators: [{
            type: Component,
            args: [{
                    selector: 'th-lightProbe',
                    template: '<ng-content/>',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    providers: [
                        { provide: ThObject3D, useExisting: forwardRef(() => ThLightProbe) },
                    ],
                }]
        }], propDecorators: { sh: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGhMaWdodFByb2JlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LXRocmVlL3NyYy9saWIvZ2VuZXJhdGVkL1RoTGlnaHRQcm9iZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSx5REFBeUQ7QUFDekQseUNBQXlDO0FBQ3pDLCtGQUErRjtBQUMvRixPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxLQUFLLEVBRUwsVUFBVSxHQUNYLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxVQUFVLEVBQTZDLE1BQU0sT0FBTyxDQUFDO0FBQzlFLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxTQUFTLENBQUM7QUFDckMsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLFdBQVcsQ0FBQztBQUNwQyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sY0FBYyxDQUFDOztBQVUxQyxNQUFNLE9BQU8sWUFHWCxTQUFRLE9BQTBDO0lBQzNDLE9BQU87UUFDWixPQUFPLFVBQVUsQ0FBQztJQUNwQixDQUFDO0lBRUQsSUFBVyxZQUFZO1FBQ3JCLE9BQU8sSUFBSSxDQUFDLE9BQU8sRUFBRSxZQUFZLENBQUM7SUFDcEMsQ0FBQztJQUNELElBQ1csRUFBRSxDQUFDLEtBQXNEO1FBQ2xFLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ2pCLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxHQUFHLFVBQVUsQ0FBc0IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDNUUsQ0FBQztJQUNILENBQUM7SUFDRCxJQUFXLEVBQUU7UUFDWCxPQUFPLElBQUksQ0FBQyxPQUFPLEVBQUUsRUFBRSxDQUFDO0lBQzFCLENBQUM7OEdBbkJVLFlBQVk7a0dBQVosWUFBWSw4REFKWjtZQUNULEVBQUUsT0FBTyxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUUsVUFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDLFlBQVksQ0FBQyxFQUFFO1NBQ3JFLGlEQUpTLGVBQWU7OzJGQU1kLFlBQVk7a0JBUnhCLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLGVBQWU7b0JBQ3pCLFFBQVEsRUFBRSxlQUFlO29CQUN6QixlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtvQkFDL0MsU0FBUyxFQUFFO3dCQUNULEVBQUUsT0FBTyxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUUsVUFBVSxDQUFDLEdBQUcsRUFBRSxhQUFhLENBQUMsRUFBRTtxQkFDckU7aUJBQ0Y7OEJBYVksRUFBRTtzQkFEWixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgQHR5cGVzY3JpcHQtZXNsaW50L25hbWluZy1jb252ZW50aW9uICovXG4vKiBlc2xpbnQtZGlzYWJsZSBuby11bmRlcnNjb3JlLWRhbmdsZSAqL1xuLyogZXNsaW50LWRpc2FibGUgQGFuZ3VsYXItZXNsaW50L2NvbXBvbmVudC1zZWxlY3RvciwgQGFuZ3VsYXItZXNsaW50L2NvbXBvbmVudC1jbGFzcy1zdWZmaXggKi9cbmltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDb21wb25lbnQsXG4gIElucHV0LFxuICBUeXBlLFxuICBmb3J3YXJkUmVmLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IExpZ2h0UHJvYmUsIExpZ2h0U2hhZG93LCBTcGhlcmljYWxIYXJtb25pY3MzLCBWZWN0b3IzIH0gZnJvbSAndGhyZWUnO1xuaW1wb3J0IHsgYXBwbHlWYWx1ZSB9IGZyb20gJy4uL3V0aWwnO1xuaW1wb3J0IHsgVGhMaWdodCB9IGZyb20gJy4vVGhMaWdodCc7XG5pbXBvcnQgeyBUaE9iamVjdDNEIH0gZnJvbSAnLi9UaE9iamVjdDNEJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndGgtbGlnaHRQcm9iZScsXG4gIHRlbXBsYXRlOiAnPG5nLWNvbnRlbnQvPicsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBwcm92aWRlcnM6IFtcbiAgICB7IHByb3ZpZGU6IFRoT2JqZWN0M0QsIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IFRoTGlnaHRQcm9iZSkgfSxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgVGhMaWdodFByb2JlPFxuICBUIGV4dGVuZHMgTGlnaHRQcm9iZSA9IExpZ2h0UHJvYmUsXG4gIFRBUkdTID0gW3NoPzogU3BoZXJpY2FsSGFybW9uaWNzMywgaW50ZW5zaXR5PzogbnVtYmVyXSxcbj4gZXh0ZW5kcyBUaExpZ2h0PExpZ2h0U2hhZG93IHwgdW5kZWZpbmVkLCBULCBUQVJHUz4ge1xuICBwdWJsaWMgZ2V0VHlwZSgpOiBUeXBlPExpZ2h0UHJvYmU+IHtcbiAgICByZXR1cm4gTGlnaHRQcm9iZTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaXNMaWdodFByb2JlKCk6IHRydWUgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9vYmpSZWY/LmlzTGlnaHRQcm9iZTtcbiAgfVxuICBASW5wdXQoKVxuICBwdWJsaWMgc2V0IHNoKHZhbHVlOiBTcGhlcmljYWxIYXJtb25pY3MzIHwgW2NvZWZmaWNpZW50czogVmVjdG9yM1tdXSkge1xuICAgIGlmICh0aGlzLl9vYmpSZWYpIHtcbiAgICAgIHRoaXMuX29ialJlZi5zaCA9IGFwcGx5VmFsdWU8U3BoZXJpY2FsSGFybW9uaWNzMz4odGhpcy5fb2JqUmVmLnNoLCB2YWx1ZSk7XG4gICAgfVxuICB9XG4gIHB1YmxpYyBnZXQgc2goKTogU3BoZXJpY2FsSGFybW9uaWNzMyB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX29ialJlZj8uc2g7XG4gIH1cbn1cbiJdfQ==