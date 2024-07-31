/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix */
import { ChangeDetectionStrategy, Component, Input, forwardRef, } from '@angular/core';
import { ParametricGeometry } from 'three/examples/jsm/geometries/ParametricGeometry.js';
import { ThBufferGeometry } from './ThBufferGeometry';
import * as i0 from "@angular/core";
export class ThParametricGeometry extends ThBufferGeometry {
    getType() {
        return ParametricGeometry;
    }
    set type(value) {
        if (this._objRef) {
            this._objRef.type = value;
        }
    }
    get type() {
        return this._objRef?.type;
    }
    set parameters(value) {
        if (this._objRef) {
            this._objRef.parameters = value;
        }
    }
    get parameters() {
        return this._objRef?.parameters;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThParametricGeometry, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.1.2", type: ThParametricGeometry, selector: "th-parametricGeometry", inputs: { type: "type", parameters: "parameters" }, providers: [
            {
                provide: ThBufferGeometry,
                useExisting: forwardRef(() => ThParametricGeometry),
            },
        ], usesInheritance: true, ngImport: i0, template: '<ng-content/>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThParametricGeometry, decorators: [{
            type: Component,
            args: [{
                    selector: 'th-parametricGeometry',
                    template: '<ng-content/>',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    providers: [
                        {
                            provide: ThBufferGeometry,
                            useExisting: forwardRef(() => ThParametricGeometry),
                        },
                    ],
                }]
        }], propDecorators: { type: [{
                type: Input
            }], parameters: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGhQYXJhbWV0cmljR2VvbWV0cnkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtdGhyZWUvc3JjL2xpYi9nZW5lcmF0ZWQvVGhQYXJhbWV0cmljR2VvbWV0cnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEseURBQXlEO0FBQ3pELHlDQUF5QztBQUN6QywrRkFBK0Y7QUFDL0YsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixTQUFTLEVBQ1QsS0FBSyxFQUVMLFVBQVUsR0FDWCxNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxxREFBcUQsQ0FBQztBQUN6RixPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQzs7QUFhdEQsTUFBTSxPQUFPLG9CQU9YLFNBQVEsZ0JBQWtEO0lBQ25ELE9BQU87UUFDWixPQUFPLGtCQUFrQixDQUFDO0lBQzVCLENBQUM7SUFFRCxJQUNXLElBQUksQ0FBQyxLQUFhO1FBQzNCLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ2pCLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQztRQUM1QixDQUFDO0lBQ0gsQ0FBQztJQUVELElBQVcsSUFBSTtRQUNiLE9BQU8sSUFBSSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUM7SUFDNUIsQ0FBQztJQUNELElBQ1csVUFBVSxDQUFDLEtBSXJCO1FBQ0MsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDakIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO1FBQ2xDLENBQUM7SUFDSCxDQUFDO0lBRUQsSUFBVyxVQUFVO1FBT25CLE9BQU8sSUFBSSxDQUFDLE9BQU8sRUFBRSxVQUFVLENBQUM7SUFDbEMsQ0FBQzs4R0F6Q1Usb0JBQW9CO2tHQUFwQixvQkFBb0Isb0dBUHBCO1lBQ1Q7Z0JBQ0UsT0FBTyxFQUFFLGdCQUFnQjtnQkFDekIsV0FBVyxFQUFFLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxvQkFBb0IsQ0FBQzthQUNwRDtTQUNGLGlEQVBTLGVBQWU7OzJGQVNkLG9CQUFvQjtrQkFYaEMsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsdUJBQXVCO29CQUNqQyxRQUFRLEVBQUUsZUFBZTtvQkFDekIsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07b0JBQy9DLFNBQVMsRUFBRTt3QkFDVDs0QkFDRSxPQUFPLEVBQUUsZ0JBQWdCOzRCQUN6QixXQUFXLEVBQUUsVUFBVSxDQUFDLEdBQUcsRUFBRSxxQkFBcUIsQ0FBQzt5QkFDcEQ7cUJBQ0Y7aUJBQ0Y7OEJBY1ksSUFBSTtzQkFEZCxLQUFLO2dCQVdLLFVBQVU7c0JBRHBCLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBAdHlwZXNjcmlwdC1lc2xpbnQvbmFtaW5nLWNvbnZlbnRpb24gKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vLXVuZGVyc2NvcmUtZGFuZ2xlICovXG4vKiBlc2xpbnQtZGlzYWJsZSBAYW5ndWxhci1lc2xpbnQvY29tcG9uZW50LXNlbGVjdG9yLCBAYW5ndWxhci1lc2xpbnQvY29tcG9uZW50LWNsYXNzLXN1ZmZpeCAqL1xuaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENvbXBvbmVudCxcbiAgSW5wdXQsXG4gIFR5cGUsXG4gIGZvcndhcmRSZWYsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTm9ybWFsQnVmZmVyQXR0cmlidXRlcywgVmVjdG9yMyB9IGZyb20gJ3RocmVlJztcbmltcG9ydCB7IFBhcmFtZXRyaWNHZW9tZXRyeSB9IGZyb20gJ3RocmVlL2V4YW1wbGVzL2pzbS9nZW9tZXRyaWVzL1BhcmFtZXRyaWNHZW9tZXRyeS5qcyc7XG5pbXBvcnQgeyBUaEJ1ZmZlckdlb21ldHJ5IH0gZnJvbSAnLi9UaEJ1ZmZlckdlb21ldHJ5JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndGgtcGFyYW1ldHJpY0dlb21ldHJ5JyxcbiAgdGVtcGxhdGU6ICc8bmctY29udGVudC8+JyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHByb3ZpZGVyczogW1xuICAgIHtcbiAgICAgIHByb3ZpZGU6IFRoQnVmZmVyR2VvbWV0cnksXG4gICAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBUaFBhcmFtZXRyaWNHZW9tZXRyeSksXG4gICAgfSxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgVGhQYXJhbWV0cmljR2VvbWV0cnk8XG4gIFQgZXh0ZW5kcyBQYXJhbWV0cmljR2VvbWV0cnkgPSBQYXJhbWV0cmljR2VvbWV0cnksXG4gIFRBUkdTID0gW1xuICAgIGZ1bmM/OiAodTogbnVtYmVyLCB2OiBudW1iZXIsIHRhcmdldDogVmVjdG9yMykgPT4gdm9pZCxcbiAgICBzbGljZXM/OiBudW1iZXIsXG4gICAgc3RhY2tzPzogbnVtYmVyLFxuICBdLFxuPiBleHRlbmRzIFRoQnVmZmVyR2VvbWV0cnk8Tm9ybWFsQnVmZmVyQXR0cmlidXRlcywgVCwgVEFSR1M+IHtcbiAgcHVibGljIGdldFR5cGUoKTogVHlwZTxQYXJhbWV0cmljR2VvbWV0cnk+IHtcbiAgICByZXR1cm4gUGFyYW1ldHJpY0dlb21ldHJ5O1xuICB9XG5cbiAgQElucHV0KClcbiAgcHVibGljIHNldCB0eXBlKHZhbHVlOiBzdHJpbmcpIHtcbiAgICBpZiAodGhpcy5fb2JqUmVmKSB7XG4gICAgICB0aGlzLl9vYmpSZWYudHlwZSA9IHZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBnZXQgdHlwZSgpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9vYmpSZWY/LnR5cGU7XG4gIH1cbiAgQElucHV0KClcbiAgcHVibGljIHNldCBwYXJhbWV0ZXJzKHZhbHVlOiB7XG4gICAgZnVuYzogKHU6IG51bWJlciwgdjogbnVtYmVyLCBkZXN0OiBWZWN0b3IzKSA9PiB2b2lkO1xuICAgIHNsaWNlczogbnVtYmVyO1xuICAgIHN0YWNrczogbnVtYmVyO1xuICB9KSB7XG4gICAgaWYgKHRoaXMuX29ialJlZikge1xuICAgICAgdGhpcy5fb2JqUmVmLnBhcmFtZXRlcnMgPSB2YWx1ZTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgZ2V0IHBhcmFtZXRlcnMoKTpcbiAgICB8IHtcbiAgICAgICAgZnVuYzogKHU6IG51bWJlciwgdjogbnVtYmVyLCBkZXN0OiBWZWN0b3IzKSA9PiB2b2lkO1xuICAgICAgICBzbGljZXM6IG51bWJlcjtcbiAgICAgICAgc3RhY2tzOiBudW1iZXI7XG4gICAgICB9XG4gICAgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9vYmpSZWY/LnBhcmFtZXRlcnM7XG4gIH1cbn1cbiJdfQ==