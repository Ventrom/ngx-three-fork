/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix */
import { ChangeDetectionStrategy, Component, Input, forwardRef, } from '@angular/core';
import { Box3Helper, } from 'three';
import { applyValue } from '../util';
import { ThLineSegments } from './ThLineSegments';
import { ThObject3D } from './ThObject3D';
import * as i0 from "@angular/core";
export class ThBox3Helper extends ThLineSegments {
    getType() {
        return Box3Helper;
    }
    get type() {
        return this._objRef?.type;
    }
    set box(value) {
        if (this._objRef) {
            this._objRef.box = applyValue(this._objRef.box, value);
        }
    }
    get box() {
        return this._objRef?.box;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThBox3Helper, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.1.2", type: ThBox3Helper, selector: "th-box3Helper", inputs: { box: "box" }, providers: [
            { provide: ThObject3D, useExisting: forwardRef(() => ThBox3Helper) },
        ], usesInheritance: true, ngImport: i0, template: '<ng-content/>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThBox3Helper, decorators: [{
            type: Component,
            args: [{
                    selector: 'th-box3Helper',
                    template: '<ng-content/>',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    providers: [
                        { provide: ThObject3D, useExisting: forwardRef(() => ThBox3Helper) },
                    ],
                }]
        }], propDecorators: { box: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGhCb3gzSGVscGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LXRocmVlL3NyYy9saWIvZ2VuZXJhdGVkL1RoQm94M0hlbHBlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSx5REFBeUQ7QUFDekQseUNBQXlDO0FBQ3pDLCtGQUErRjtBQUMvRixPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxLQUFLLEVBRUwsVUFBVSxHQUNYLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFFTCxVQUFVLEdBTVgsTUFBTSxPQUFPLENBQUM7QUFDZixPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sU0FBUyxDQUFDO0FBQ3JDLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUNsRCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sY0FBYyxDQUFDOztBQVUxQyxNQUFNLE9BQU8sWUFHWCxTQUFRLGNBTVQ7SUFDUSxPQUFPO1FBQ1osT0FBTyxVQUFVLENBQUM7SUFDcEIsQ0FBQztJQUVELElBQVcsSUFBSTtRQUNiLE9BQU8sSUFBSSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUM7SUFDNUIsQ0FBQztJQUNELElBQ1csR0FBRyxDQUFDLEtBQTBDO1FBQ3ZELElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ2pCLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxHQUFHLFVBQVUsQ0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUMvRCxDQUFDO0lBQ0gsQ0FBQztJQUNELElBQVcsR0FBRztRQUNaLE9BQU8sSUFBSSxDQUFDLE9BQU8sRUFBRSxHQUFHLENBQUM7SUFDM0IsQ0FBQzs4R0F6QlUsWUFBWTtrR0FBWixZQUFZLGdFQUpaO1lBQ1QsRUFBRSxPQUFPLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRSxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsWUFBWSxDQUFDLEVBQUU7U0FDckUsaURBSlMsZUFBZTs7MkZBTWQsWUFBWTtrQkFSeEIsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsZUFBZTtvQkFDekIsUUFBUSxFQUFFLGVBQWU7b0JBQ3pCLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO29CQUMvQyxTQUFTLEVBQUU7d0JBQ1QsRUFBRSxPQUFPLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRSxVQUFVLENBQUMsR0FBRyxFQUFFLGFBQWEsQ0FBQyxFQUFFO3FCQUNyRTtpQkFDRjs4QkFtQlksR0FBRztzQkFEYixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgQHR5cGVzY3JpcHQtZXNsaW50L25hbWluZy1jb252ZW50aW9uICovXG4vKiBlc2xpbnQtZGlzYWJsZSBuby11bmRlcnNjb3JlLWRhbmdsZSAqL1xuLyogZXNsaW50LWRpc2FibGUgQGFuZ3VsYXItZXNsaW50L2NvbXBvbmVudC1zZWxlY3RvciwgQGFuZ3VsYXItZXNsaW50L2NvbXBvbmVudC1jbGFzcy1zdWZmaXggKi9cbmltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDb21wb25lbnQsXG4gIElucHV0LFxuICBUeXBlLFxuICBmb3J3YXJkUmVmLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIEJveDMsXG4gIEJveDNIZWxwZXIsXG4gIEJ1ZmZlckdlb21ldHJ5LFxuICBDb2xvclJlcHJlc2VudGF0aW9uLFxuICBNYXRlcmlhbCxcbiAgT2JqZWN0M0RFdmVudE1hcCxcbiAgVmVjdG9yMyxcbn0gZnJvbSAndGhyZWUnO1xuaW1wb3J0IHsgYXBwbHlWYWx1ZSB9IGZyb20gJy4uL3V0aWwnO1xuaW1wb3J0IHsgVGhMaW5lU2VnbWVudHMgfSBmcm9tICcuL1RoTGluZVNlZ21lbnRzJztcbmltcG9ydCB7IFRoT2JqZWN0M0QgfSBmcm9tICcuL1RoT2JqZWN0M0QnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0aC1ib3gzSGVscGVyJyxcbiAgdGVtcGxhdGU6ICc8bmctY29udGVudC8+JyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHByb3ZpZGVyczogW1xuICAgIHsgcHJvdmlkZTogVGhPYmplY3QzRCwgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gVGhCb3gzSGVscGVyKSB9LFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBUaEJveDNIZWxwZXI8XG4gIFQgZXh0ZW5kcyBCb3gzSGVscGVyID0gQm94M0hlbHBlcixcbiAgVEFSR1MgPSBbYm94OiBCb3gzLCBjb2xvcj86IENvbG9yUmVwcmVzZW50YXRpb25dLFxuPiBleHRlbmRzIFRoTGluZVNlZ21lbnRzPFxuICBCdWZmZXJHZW9tZXRyeSxcbiAgTWF0ZXJpYWwgfCBNYXRlcmlhbFtdLFxuICBPYmplY3QzREV2ZW50TWFwLFxuICBULFxuICBUQVJHU1xuPiB7XG4gIHB1YmxpYyBnZXRUeXBlKCk6IFR5cGU8Qm94M0hlbHBlcj4ge1xuICAgIHJldHVybiBCb3gzSGVscGVyO1xuICB9XG5cbiAgcHVibGljIGdldCB0eXBlKCk6IChzdHJpbmcgfCAnQm94M0hlbHBlcicpIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fb2JqUmVmPy50eXBlO1xuICB9XG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzZXQgYm94KHZhbHVlOiBCb3gzIHwgW21pbjogVmVjdG9yMywgbWF4OiBWZWN0b3IzXSkge1xuICAgIGlmICh0aGlzLl9vYmpSZWYpIHtcbiAgICAgIHRoaXMuX29ialJlZi5ib3ggPSBhcHBseVZhbHVlPEJveDM+KHRoaXMuX29ialJlZi5ib3gsIHZhbHVlKTtcbiAgICB9XG4gIH1cbiAgcHVibGljIGdldCBib3goKTogQm94MyB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX29ialJlZj8uYm94O1xuICB9XG59XG4iXX0=