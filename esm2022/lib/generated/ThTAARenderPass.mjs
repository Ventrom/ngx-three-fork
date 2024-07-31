/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix */
import { ChangeDetectionStrategy, Component, Input, forwardRef, } from '@angular/core';
import { TAARenderPass } from 'three/examples/jsm/postprocessing/TAARenderPass.js';
import { ThPassBase } from '../ThPassBase';
import { ThSSAARenderPass } from './ThSSAARenderPass';
import * as i0 from "@angular/core";
export class ThTAARenderPass extends ThSSAARenderPass {
    getType() {
        return TAARenderPass;
    }
    set accumulate(value) {
        if (this._objRef) {
            this._objRef.accumulate = value;
        }
    }
    get accumulate() {
        return this._objRef?.accumulate;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThTAARenderPass, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.1.2", type: ThTAARenderPass, selector: "th-tAARenderPass", inputs: { accumulate: "accumulate" }, providers: [
            { provide: ThPassBase, useExisting: forwardRef(() => ThTAARenderPass) },
        ], usesInheritance: true, ngImport: i0, template: '<ng-content/>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThTAARenderPass, decorators: [{
            type: Component,
            args: [{
                    selector: 'th-tAARenderPass',
                    template: '<ng-content/>',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    providers: [
                        { provide: ThPassBase, useExisting: forwardRef(() => ThTAARenderPass) },
                    ],
                }]
        }], propDecorators: { accumulate: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGhUQUFSZW5kZXJQYXNzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LXRocmVlL3NyYy9saWIvZ2VuZXJhdGVkL1RoVEFBUmVuZGVyUGFzcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxpREFBaUQ7QUFDakQseURBQXlEO0FBQ3pELHlDQUF5QztBQUN6QywrRkFBK0Y7QUFDL0YsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixTQUFTLEVBQ1QsS0FBSyxFQUVMLFVBQVUsR0FDWCxNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sb0RBQW9ELENBQUM7QUFDbkYsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQzs7QUFVdEQsTUFBTSxPQUFPLGVBUVgsU0FBUSxnQkFBMEI7SUFDM0IsT0FBTztRQUNaLE9BQU8sYUFBYSxDQUFDO0lBQ3ZCLENBQUM7SUFFRCxJQUNXLFVBQVUsQ0FBQyxLQUFjO1FBQ2xDLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ2pCLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztRQUNsQyxDQUFDO0lBQ0gsQ0FBQztJQUVELElBQVcsVUFBVTtRQUNuQixPQUFPLElBQUksQ0FBQyxPQUFPLEVBQUUsVUFBVSxDQUFDO0lBQ2xDLENBQUM7OEdBdEJVLGVBQWU7a0dBQWYsZUFBZSxpRkFKZjtZQUNULEVBQUUsT0FBTyxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUUsVUFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDLGVBQWUsQ0FBQyxFQUFFO1NBQ3hFLGlEQUpTLGVBQWU7OzJGQU1kLGVBQWU7a0JBUjNCLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLGtCQUFrQjtvQkFDNUIsUUFBUSxFQUFFLGVBQWU7b0JBQ3pCLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO29CQUMvQyxTQUFTLEVBQUU7d0JBQ1QsRUFBRSxPQUFPLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRSxVQUFVLENBQUMsR0FBRyxFQUFFLGdCQUFnQixDQUFDLEVBQUU7cUJBQ3hFO2lCQUNGOzhCQWVZLFVBQVU7c0JBRHBCLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBAdHlwZXNjcmlwdC1lc2xpbnQvYmFuLXR5cGVzICovXG4vKiBlc2xpbnQtZGlzYWJsZSBAdHlwZXNjcmlwdC1lc2xpbnQvbmFtaW5nLWNvbnZlbnRpb24gKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vLXVuZGVyc2NvcmUtZGFuZ2xlICovXG4vKiBlc2xpbnQtZGlzYWJsZSBAYW5ndWxhci1lc2xpbnQvY29tcG9uZW50LXNlbGVjdG9yLCBAYW5ndWxhci1lc2xpbnQvY29tcG9uZW50LWNsYXNzLXN1ZmZpeCAqL1xuaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENvbXBvbmVudCxcbiAgSW5wdXQsXG4gIFR5cGUsXG4gIGZvcndhcmRSZWYsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ2FtZXJhLCBDb2xvclJlcHJlc2VudGF0aW9uLCBTY2VuZSB9IGZyb20gJ3RocmVlJztcbmltcG9ydCB7IFRBQVJlbmRlclBhc3MgfSBmcm9tICd0aHJlZS9leGFtcGxlcy9qc20vcG9zdHByb2Nlc3NpbmcvVEFBUmVuZGVyUGFzcy5qcyc7XG5pbXBvcnQgeyBUaFBhc3NCYXNlIH0gZnJvbSAnLi4vVGhQYXNzQmFzZSc7XG5pbXBvcnQgeyBUaFNTQUFSZW5kZXJQYXNzIH0gZnJvbSAnLi9UaFNTQUFSZW5kZXJQYXNzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndGgtdEFBUmVuZGVyUGFzcycsXG4gIHRlbXBsYXRlOiAnPG5nLWNvbnRlbnQvPicsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBwcm92aWRlcnM6IFtcbiAgICB7IHByb3ZpZGU6IFRoUGFzc0Jhc2UsIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IFRoVEFBUmVuZGVyUGFzcykgfSxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgVGhUQUFSZW5kZXJQYXNzPFxuICBUIGV4dGVuZHMgVEFBUmVuZGVyUGFzcyA9IFRBQVJlbmRlclBhc3MsXG4gIFRBUkdTID0gW1xuICAgIHNjZW5lOiBTY2VuZSxcbiAgICBjYW1lcmE6IENhbWVyYSxcbiAgICBjbGVhckNvbG9yPzogQ29sb3JSZXByZXNlbnRhdGlvbixcbiAgICBjbGVhckFscGhhPzogbnVtYmVyLFxuICBdLFxuPiBleHRlbmRzIFRoU1NBQVJlbmRlclBhc3M8VCwgVEFSR1M+IHtcbiAgcHVibGljIGdldFR5cGUoKTogVHlwZTxUQUFSZW5kZXJQYXNzPiB7XG4gICAgcmV0dXJuIFRBQVJlbmRlclBhc3M7XG4gIH1cblxuICBASW5wdXQoKVxuICBwdWJsaWMgc2V0IGFjY3VtdWxhdGUodmFsdWU6IGJvb2xlYW4pIHtcbiAgICBpZiAodGhpcy5fb2JqUmVmKSB7XG4gICAgICB0aGlzLl9vYmpSZWYuYWNjdW11bGF0ZSA9IHZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBnZXQgYWNjdW11bGF0ZSgpOiBib29sZWFuIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fb2JqUmVmPy5hY2N1bXVsYXRlO1xuICB9XG59XG4iXX0=