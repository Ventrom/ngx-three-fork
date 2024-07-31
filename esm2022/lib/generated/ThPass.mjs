/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix */
import { ChangeDetectionStrategy, Component, Input, forwardRef, } from '@angular/core';
import { Pass } from 'three/examples/jsm/postprocessing/Pass.js';
import { ThPassBase } from '../ThPassBase';
import * as i0 from "@angular/core";
export class ThPass extends ThPassBase {
    getType() {
        return Pass;
    }
    set isPass(value) {
        if (this._objRef) {
            this._objRef.isPass = value;
        }
    }
    get isPass() {
        return this._objRef?.isPass;
    }
    set enabled(value) {
        if (this._objRef) {
            this._objRef.enabled = value;
        }
    }
    get enabled() {
        return this._objRef?.enabled;
    }
    set needsSwap(value) {
        if (this._objRef) {
            this._objRef.needsSwap = value;
        }
    }
    get needsSwap() {
        return this._objRef?.needsSwap;
    }
    set clear(value) {
        if (this._objRef) {
            this._objRef.clear = value;
        }
    }
    get clear() {
        return this._objRef?.clear;
    }
    set renderToScreen(value) {
        if (this._objRef) {
            this._objRef.renderToScreen = value;
        }
    }
    get renderToScreen() {
        return this._objRef?.renderToScreen;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThPass, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.1.2", type: ThPass, selector: "th-pass", inputs: { isPass: "isPass", enabled: "enabled", needsSwap: "needsSwap", clear: "clear", renderToScreen: "renderToScreen" }, providers: [{ provide: ThPassBase, useExisting: forwardRef(() => ThPass) }], usesInheritance: true, ngImport: i0, template: '<ng-content/>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThPass, decorators: [{
            type: Component,
            args: [{
                    selector: 'th-pass',
                    template: '<ng-content/>',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    providers: [{ provide: ThPassBase, useExisting: forwardRef(() => ThPass) }],
                }]
        }], propDecorators: { isPass: [{
                type: Input
            }], enabled: [{
                type: Input
            }], needsSwap: [{
                type: Input
            }], clear: [{
                type: Input
            }], renderToScreen: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGhQYXNzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LXRocmVlL3NyYy9saWIvZ2VuZXJhdGVkL1RoUGFzcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxpREFBaUQ7QUFDakQseURBQXlEO0FBQ3pELHlDQUF5QztBQUN6QywrRkFBK0Y7QUFDL0YsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixTQUFTLEVBQ1QsS0FBSyxFQUVMLFVBQVUsR0FDWCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFDakUsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFRM0MsTUFBTSxPQUFPLE1BQTBDLFNBQVEsVUFHOUQ7SUFDUSxPQUFPO1FBQ1osT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBRUQsSUFDVyxNQUFNLENBQUMsS0FBYztRQUM5QixJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUNqQixJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDOUIsQ0FBQztJQUNILENBQUM7SUFFRCxJQUFXLE1BQU07UUFDZixPQUFPLElBQUksQ0FBQyxPQUFPLEVBQUUsTUFBTSxDQUFDO0lBQzlCLENBQUM7SUFDRCxJQUNXLE9BQU8sQ0FBQyxLQUFjO1FBQy9CLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ2pCLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztRQUMvQixDQUFDO0lBQ0gsQ0FBQztJQUVELElBQVcsT0FBTztRQUNoQixPQUFPLElBQUksQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDO0lBQy9CLENBQUM7SUFDRCxJQUNXLFNBQVMsQ0FBQyxLQUFjO1FBQ2pDLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ2pCLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztRQUNqQyxDQUFDO0lBQ0gsQ0FBQztJQUVELElBQVcsU0FBUztRQUNsQixPQUFPLElBQUksQ0FBQyxPQUFPLEVBQUUsU0FBUyxDQUFDO0lBQ2pDLENBQUM7SUFDRCxJQUNXLEtBQUssQ0FBQyxLQUFjO1FBQzdCLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ2pCLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUM3QixDQUFDO0lBQ0gsQ0FBQztJQUVELElBQVcsS0FBSztRQUNkLE9BQU8sSUFBSSxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUM7SUFDN0IsQ0FBQztJQUNELElBQ1csY0FBYyxDQUFDLEtBQWM7UUFDdEMsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDakIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxjQUFjLEdBQUcsS0FBSyxDQUFDO1FBQ3RDLENBQUM7SUFDSCxDQUFDO0lBRUQsSUFBVyxjQUFjO1FBQ3ZCLE9BQU8sSUFBSSxDQUFDLE9BQU8sRUFBRSxjQUFjLENBQUM7SUFDdEMsQ0FBQzs4R0F6RFUsTUFBTTtrR0FBTixNQUFNLDhKQUZOLENBQUMsRUFBRSxPQUFPLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRSxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxpREFGakUsZUFBZTs7MkZBSWQsTUFBTTtrQkFObEIsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsU0FBUztvQkFDbkIsUUFBUSxFQUFFLGVBQWU7b0JBQ3pCLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO29CQUMvQyxTQUFTLEVBQUUsQ0FBQyxFQUFFLE9BQU8sRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFLFVBQVUsQ0FBQyxHQUFHLEVBQUUsT0FBTyxDQUFDLEVBQUUsQ0FBQztpQkFDNUU7OEJBVVksTUFBTTtzQkFEaEIsS0FBSztnQkFXSyxPQUFPO3NCQURqQixLQUFLO2dCQVdLLFNBQVM7c0JBRG5CLEtBQUs7Z0JBV0ssS0FBSztzQkFEZixLQUFLO2dCQVdLLGNBQWM7c0JBRHhCLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBAdHlwZXNjcmlwdC1lc2xpbnQvYmFuLXR5cGVzICovXG4vKiBlc2xpbnQtZGlzYWJsZSBAdHlwZXNjcmlwdC1lc2xpbnQvbmFtaW5nLWNvbnZlbnRpb24gKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vLXVuZGVyc2NvcmUtZGFuZ2xlICovXG4vKiBlc2xpbnQtZGlzYWJsZSBAYW5ndWxhci1lc2xpbnQvY29tcG9uZW50LXNlbGVjdG9yLCBAYW5ndWxhci1lc2xpbnQvY29tcG9uZW50LWNsYXNzLXN1ZmZpeCAqL1xuaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENvbXBvbmVudCxcbiAgSW5wdXQsXG4gIFR5cGUsXG4gIGZvcndhcmRSZWYsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUGFzcyB9IGZyb20gJ3RocmVlL2V4YW1wbGVzL2pzbS9wb3N0cHJvY2Vzc2luZy9QYXNzLmpzJztcbmltcG9ydCB7IFRoUGFzc0Jhc2UgfSBmcm9tICcuLi9UaFBhc3NCYXNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndGgtcGFzcycsXG4gIHRlbXBsYXRlOiAnPG5nLWNvbnRlbnQvPicsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBwcm92aWRlcnM6IFt7IHByb3ZpZGU6IFRoUGFzc0Jhc2UsIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IFRoUGFzcykgfV0sXG59KVxuZXhwb3J0IGNsYXNzIFRoUGFzczxUIGV4dGVuZHMgUGFzcyA9IFBhc3MsIFRBUkdTID0gW10+IGV4dGVuZHMgVGhQYXNzQmFzZTxcbiAgVCxcbiAgVEFSR1Ncbj4ge1xuICBwdWJsaWMgZ2V0VHlwZSgpOiBUeXBlPFBhc3M+IHtcbiAgICByZXR1cm4gUGFzcztcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzZXQgaXNQYXNzKHZhbHVlOiBib29sZWFuKSB7XG4gICAgaWYgKHRoaXMuX29ialJlZikge1xuICAgICAgdGhpcy5fb2JqUmVmLmlzUGFzcyA9IHZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBnZXQgaXNQYXNzKCk6IGJvb2xlYW4gfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9vYmpSZWY/LmlzUGFzcztcbiAgfVxuICBASW5wdXQoKVxuICBwdWJsaWMgc2V0IGVuYWJsZWQodmFsdWU6IGJvb2xlYW4pIHtcbiAgICBpZiAodGhpcy5fb2JqUmVmKSB7XG4gICAgICB0aGlzLl9vYmpSZWYuZW5hYmxlZCA9IHZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBnZXQgZW5hYmxlZCgpOiBib29sZWFuIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fb2JqUmVmPy5lbmFibGVkO1xuICB9XG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzZXQgbmVlZHNTd2FwKHZhbHVlOiBib29sZWFuKSB7XG4gICAgaWYgKHRoaXMuX29ialJlZikge1xuICAgICAgdGhpcy5fb2JqUmVmLm5lZWRzU3dhcCA9IHZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBnZXQgbmVlZHNTd2FwKCk6IGJvb2xlYW4gfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9vYmpSZWY/Lm5lZWRzU3dhcDtcbiAgfVxuICBASW5wdXQoKVxuICBwdWJsaWMgc2V0IGNsZWFyKHZhbHVlOiBib29sZWFuKSB7XG4gICAgaWYgKHRoaXMuX29ialJlZikge1xuICAgICAgdGhpcy5fb2JqUmVmLmNsZWFyID0gdmFsdWU7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGdldCBjbGVhcigpOiBib29sZWFuIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fb2JqUmVmPy5jbGVhcjtcbiAgfVxuICBASW5wdXQoKVxuICBwdWJsaWMgc2V0IHJlbmRlclRvU2NyZWVuKHZhbHVlOiBib29sZWFuKSB7XG4gICAgaWYgKHRoaXMuX29ialJlZikge1xuICAgICAgdGhpcy5fb2JqUmVmLnJlbmRlclRvU2NyZWVuID0gdmFsdWU7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGdldCByZW5kZXJUb1NjcmVlbigpOiBib29sZWFuIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fb2JqUmVmPy5yZW5kZXJUb1NjcmVlbjtcbiAgfVxufVxuIl19