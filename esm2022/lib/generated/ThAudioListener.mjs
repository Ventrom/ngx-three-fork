/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix */
import { ChangeDetectionStrategy, Component, Input, forwardRef, } from '@angular/core';
import { AudioListener } from 'three';
import { ThObject3D } from './ThObject3D';
import * as i0 from "@angular/core";
export class ThAudioListener extends ThObject3D {
    getType() {
        return AudioListener;
    }
    get type() {
        return this._objRef?.type;
    }
    set context(value) {
        if (this._objRef) {
            this._objRef.context = value;
        }
    }
    get context() {
        return this._objRef?.context;
    }
    set gain(value) {
        if (this._objRef) {
            this._objRef.gain = value;
        }
    }
    get gain() {
        return this._objRef?.gain;
    }
    set filter(value) {
        if (this._objRef) {
            this._objRef.filter = value;
        }
    }
    get filter() {
        return this._objRef?.filter;
    }
    set timeDelta(value) {
        if (this._objRef) {
            this._objRef.timeDelta = value;
        }
    }
    get timeDelta() {
        return this._objRef?.timeDelta;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThAudioListener, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.1.2", type: ThAudioListener, selector: "th-audioListener", inputs: { context: "context", gain: "gain", filter: "filter", timeDelta: "timeDelta" }, providers: [
            { provide: ThObject3D, useExisting: forwardRef(() => ThAudioListener) },
        ], usesInheritance: true, ngImport: i0, template: '<ng-content/>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThAudioListener, decorators: [{
            type: Component,
            args: [{
                    selector: 'th-audioListener',
                    template: '<ng-content/>',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    providers: [
                        { provide: ThObject3D, useExisting: forwardRef(() => ThAudioListener) },
                    ],
                }]
        }], propDecorators: { context: [{
                type: Input
            }], gain: [{
                type: Input
            }], filter: [{
                type: Input
            }], timeDelta: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGhBdWRpb0xpc3RlbmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LXRocmVlL3NyYy9saWIvZ2VuZXJhdGVkL1RoQXVkaW9MaXN0ZW5lci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSx5REFBeUQ7QUFDekQseUNBQXlDO0FBQ3pDLCtGQUErRjtBQUMvRixPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxLQUFLLEVBRUwsVUFBVSxHQUNYLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBZ0IsYUFBYSxFQUFvQixNQUFNLE9BQU8sQ0FBQztBQUN0RSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sY0FBYyxDQUFDOztBQVUxQyxNQUFNLE9BQU8sZUFHWCxTQUFRLFVBQXNDO0lBQ3ZDLE9BQU87UUFDWixPQUFPLGFBQWEsQ0FBQztJQUN2QixDQUFDO0lBRUQsSUFBVyxJQUFJO1FBQ2IsT0FBTyxJQUFJLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQztJQUM1QixDQUFDO0lBQ0QsSUFDVyxPQUFPLENBQUMsS0FBbUI7UUFDcEMsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDakIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO1FBQy9CLENBQUM7SUFDSCxDQUFDO0lBRUQsSUFBVyxPQUFPO1FBQ2hCLE9BQU8sSUFBSSxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUM7SUFDL0IsQ0FBQztJQUNELElBQ1csSUFBSSxDQUFDLEtBQWU7UUFDN0IsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDakIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDO1FBQzVCLENBQUM7SUFDSCxDQUFDO0lBRUQsSUFBVyxJQUFJO1FBQ2IsT0FBTyxJQUFJLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQztJQUM1QixDQUFDO0lBQ0QsSUFDVyxNQUFNLENBQUMsS0FBZ0I7UUFDaEMsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDakIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQzlCLENBQUM7SUFDSCxDQUFDO0lBRUQsSUFBVyxNQUFNO1FBQ2YsT0FBTyxJQUFJLENBQUMsT0FBTyxFQUFFLE1BQU0sQ0FBQztJQUM5QixDQUFDO0lBQ0QsSUFDVyxTQUFTLENBQUMsS0FBYTtRQUNoQyxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUNqQixJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7UUFDakMsQ0FBQztJQUNILENBQUM7SUFFRCxJQUFXLFNBQVM7UUFDbEIsT0FBTyxJQUFJLENBQUMsT0FBTyxFQUFFLFNBQVMsQ0FBQztJQUNqQyxDQUFDOzhHQWxEVSxlQUFlO2tHQUFmLGVBQWUsbUlBSmY7WUFDVCxFQUFFLE9BQU8sRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxlQUFlLENBQUMsRUFBRTtTQUN4RSxpREFKUyxlQUFlOzsyRkFNZCxlQUFlO2tCQVIzQixTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxrQkFBa0I7b0JBQzVCLFFBQVEsRUFBRSxlQUFlO29CQUN6QixlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtvQkFDL0MsU0FBUyxFQUFFO3dCQUNULEVBQUUsT0FBTyxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUUsVUFBVSxDQUFDLEdBQUcsRUFBRSxnQkFBZ0IsQ0FBQyxFQUFFO3FCQUN4RTtpQkFDRjs4QkFhWSxPQUFPO3NCQURqQixLQUFLO2dCQVdLLElBQUk7c0JBRGQsS0FBSztnQkFXSyxNQUFNO3NCQURoQixLQUFLO2dCQVdLLFNBQVM7c0JBRG5CLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBAdHlwZXNjcmlwdC1lc2xpbnQvbmFtaW5nLWNvbnZlbnRpb24gKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vLXVuZGVyc2NvcmUtZGFuZ2xlICovXG4vKiBlc2xpbnQtZGlzYWJsZSBAYW5ndWxhci1lc2xpbnQvY29tcG9uZW50LXNlbGVjdG9yLCBAYW5ndWxhci1lc2xpbnQvY29tcG9uZW50LWNsYXNzLXN1ZmZpeCAqL1xuaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENvbXBvbmVudCxcbiAgSW5wdXQsXG4gIFR5cGUsXG4gIGZvcndhcmRSZWYsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQXVkaW9Db250ZXh0LCBBdWRpb0xpc3RlbmVyLCBPYmplY3QzREV2ZW50TWFwIH0gZnJvbSAndGhyZWUnO1xuaW1wb3J0IHsgVGhPYmplY3QzRCB9IGZyb20gJy4vVGhPYmplY3QzRCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3RoLWF1ZGlvTGlzdGVuZXInLFxuICB0ZW1wbGF0ZTogJzxuZy1jb250ZW50Lz4nLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgcHJvdmlkZXJzOiBbXG4gICAgeyBwcm92aWRlOiBUaE9iamVjdDNELCB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBUaEF1ZGlvTGlzdGVuZXIpIH0sXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIFRoQXVkaW9MaXN0ZW5lcjxcbiAgVCBleHRlbmRzIEF1ZGlvTGlzdGVuZXIgPSBBdWRpb0xpc3RlbmVyLFxuICBUQVJHUyA9IFtdLFxuPiBleHRlbmRzIFRoT2JqZWN0M0Q8T2JqZWN0M0RFdmVudE1hcCwgVCwgVEFSR1M+IHtcbiAgcHVibGljIGdldFR5cGUoKTogVHlwZTxBdWRpb0xpc3RlbmVyPiB7XG4gICAgcmV0dXJuIEF1ZGlvTGlzdGVuZXI7XG4gIH1cblxuICBwdWJsaWMgZ2V0IHR5cGUoKTogKHN0cmluZyB8ICdBdWRpb0xpc3RlbmVyJykgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9vYmpSZWY/LnR5cGU7XG4gIH1cbiAgQElucHV0KClcbiAgcHVibGljIHNldCBjb250ZXh0KHZhbHVlOiBBdWRpb0NvbnRleHQpIHtcbiAgICBpZiAodGhpcy5fb2JqUmVmKSB7XG4gICAgICB0aGlzLl9vYmpSZWYuY29udGV4dCA9IHZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBnZXQgY29udGV4dCgpOiBBdWRpb0NvbnRleHQgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9vYmpSZWY/LmNvbnRleHQ7XG4gIH1cbiAgQElucHV0KClcbiAgcHVibGljIHNldCBnYWluKHZhbHVlOiBHYWluTm9kZSkge1xuICAgIGlmICh0aGlzLl9vYmpSZWYpIHtcbiAgICAgIHRoaXMuX29ialJlZi5nYWluID0gdmFsdWU7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGdldCBnYWluKCk6IEdhaW5Ob2RlIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fb2JqUmVmPy5nYWluO1xuICB9XG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzZXQgZmlsdGVyKHZhbHVlOiBBdWRpb05vZGUpIHtcbiAgICBpZiAodGhpcy5fb2JqUmVmKSB7XG4gICAgICB0aGlzLl9vYmpSZWYuZmlsdGVyID0gdmFsdWU7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGdldCBmaWx0ZXIoKTogQXVkaW9Ob2RlIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fb2JqUmVmPy5maWx0ZXI7XG4gIH1cbiAgQElucHV0KClcbiAgcHVibGljIHNldCB0aW1lRGVsdGEodmFsdWU6IG51bWJlcikge1xuICAgIGlmICh0aGlzLl9vYmpSZWYpIHtcbiAgICAgIHRoaXMuX29ialJlZi50aW1lRGVsdGEgPSB2YWx1ZTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgZ2V0IHRpbWVEZWx0YSgpOiBudW1iZXIgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9vYmpSZWY/LnRpbWVEZWx0YTtcbiAgfVxufVxuIl19