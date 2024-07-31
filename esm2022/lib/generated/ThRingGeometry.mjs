/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix */
import { ChangeDetectionStrategy, Component, forwardRef, } from '@angular/core';
import { RingGeometry } from 'three';
import { ThBufferGeometry } from './ThBufferGeometry';
import * as i0 from "@angular/core";
export class ThRingGeometry extends ThBufferGeometry {
    getType() {
        return RingGeometry;
    }
    get type() {
        return this._objRef?.type;
    }
    get parameters() {
        return this._objRef?.parameters;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThRingGeometry, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.1.2", type: ThRingGeometry, selector: "th-ringGeometry", providers: [
            {
                provide: ThBufferGeometry,
                useExisting: forwardRef(() => ThRingGeometry),
            },
        ], usesInheritance: true, ngImport: i0, template: '<ng-content/>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThRingGeometry, decorators: [{
            type: Component,
            args: [{
                    selector: 'th-ringGeometry',
                    template: '<ng-content/>',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    providers: [
                        {
                            provide: ThBufferGeometry,
                            useExisting: forwardRef(() => ThRingGeometry),
                        },
                    ],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGhSaW5nR2VvbWV0cnkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtdGhyZWUvc3JjL2xpYi9nZW5lcmF0ZWQvVGhSaW5nR2VvbWV0cnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEseURBQXlEO0FBQ3pELHlDQUF5QztBQUN6QywrRkFBK0Y7QUFDL0YsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixTQUFTLEVBRVQsVUFBVSxHQUNYLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBMEIsWUFBWSxFQUFFLE1BQU0sT0FBTyxDQUFDO0FBQzdELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLG9CQUFvQixDQUFDOztBQWF0RCxNQUFNLE9BQU8sY0FVWCxTQUFRLGdCQUFrRDtJQUNuRCxPQUFPO1FBQ1osT0FBTyxZQUFZLENBQUM7SUFDdEIsQ0FBQztJQUVELElBQVcsSUFBSTtRQUNiLE9BQU8sSUFBSSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUM7SUFDNUIsQ0FBQztJQUNELElBQVcsVUFBVTtRQVVuQixPQUFPLElBQUksQ0FBQyxPQUFPLEVBQUUsVUFBVSxDQUFDO0lBQ2xDLENBQUM7OEdBN0JVLGNBQWM7a0dBQWQsY0FBYywwQ0FQZDtZQUNUO2dCQUNFLE9BQU8sRUFBRSxnQkFBZ0I7Z0JBQ3pCLFdBQVcsRUFBRSxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsY0FBYyxDQUFDO2FBQzlDO1NBQ0YsaURBUFMsZUFBZTs7MkZBU2QsY0FBYztrQkFYMUIsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsaUJBQWlCO29CQUMzQixRQUFRLEVBQUUsZUFBZTtvQkFDekIsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07b0JBQy9DLFNBQVMsRUFBRTt3QkFDVDs0QkFDRSxPQUFPLEVBQUUsZ0JBQWdCOzRCQUN6QixXQUFXLEVBQUUsVUFBVSxDQUFDLEdBQUcsRUFBRSxlQUFlLENBQUM7eUJBQzlDO3FCQUNGO2lCQUNGIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgQHR5cGVzY3JpcHQtZXNsaW50L25hbWluZy1jb252ZW50aW9uICovXG4vKiBlc2xpbnQtZGlzYWJsZSBuby11bmRlcnNjb3JlLWRhbmdsZSAqL1xuLyogZXNsaW50LWRpc2FibGUgQGFuZ3VsYXItZXNsaW50L2NvbXBvbmVudC1zZWxlY3RvciwgQGFuZ3VsYXItZXNsaW50L2NvbXBvbmVudC1jbGFzcy1zdWZmaXggKi9cbmltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDb21wb25lbnQsXG4gIFR5cGUsXG4gIGZvcndhcmRSZWYsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTm9ybWFsQnVmZmVyQXR0cmlidXRlcywgUmluZ0dlb21ldHJ5IH0gZnJvbSAndGhyZWUnO1xuaW1wb3J0IHsgVGhCdWZmZXJHZW9tZXRyeSB9IGZyb20gJy4vVGhCdWZmZXJHZW9tZXRyeSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3RoLXJpbmdHZW9tZXRyeScsXG4gIHRlbXBsYXRlOiAnPG5nLWNvbnRlbnQvPicsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBwcm92aWRlcnM6IFtcbiAgICB7XG4gICAgICBwcm92aWRlOiBUaEJ1ZmZlckdlb21ldHJ5LFxuICAgICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gVGhSaW5nR2VvbWV0cnkpLFxuICAgIH0sXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIFRoUmluZ0dlb21ldHJ5PFxuICBUIGV4dGVuZHMgUmluZ0dlb21ldHJ5ID0gUmluZ0dlb21ldHJ5LFxuICBUQVJHUyA9IFtcbiAgICBpbm5lclJhZGl1cz86IG51bWJlcixcbiAgICBvdXRlclJhZGl1cz86IG51bWJlcixcbiAgICB0aGV0YVNlZ21lbnRzPzogbnVtYmVyLFxuICAgIHBoaVNlZ21lbnRzPzogbnVtYmVyLFxuICAgIHRoZXRhU3RhcnQ/OiBudW1iZXIsXG4gICAgdGhldGFMZW5ndGg/OiBudW1iZXIsXG4gIF0sXG4+IGV4dGVuZHMgVGhCdWZmZXJHZW9tZXRyeTxOb3JtYWxCdWZmZXJBdHRyaWJ1dGVzLCBULCBUQVJHUz4ge1xuICBwdWJsaWMgZ2V0VHlwZSgpOiBUeXBlPFJpbmdHZW9tZXRyeT4ge1xuICAgIHJldHVybiBSaW5nR2VvbWV0cnk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IHR5cGUoKTogKHN0cmluZyB8ICdSaW5nR2VvbWV0cnknKSB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX29ialJlZj8udHlwZTtcbiAgfVxuICBwdWJsaWMgZ2V0IHBhcmFtZXRlcnMoKTpcbiAgICB8IHtcbiAgICAgICAgcmVhZG9ubHkgaW5uZXJSYWRpdXM6IG51bWJlcjtcbiAgICAgICAgcmVhZG9ubHkgb3V0ZXJSYWRpdXM6IG51bWJlcjtcbiAgICAgICAgcmVhZG9ubHkgdGhldGFTZWdtZW50czogbnVtYmVyO1xuICAgICAgICByZWFkb25seSBwaGlTZWdtZW50czogbnVtYmVyO1xuICAgICAgICByZWFkb25seSB0aGV0YVN0YXJ0OiBudW1iZXI7XG4gICAgICAgIHJlYWRvbmx5IHRoZXRhTGVuZ3RoOiBudW1iZXI7XG4gICAgICB9XG4gICAgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9vYmpSZWY/LnBhcmFtZXRlcnM7XG4gIH1cbn1cbiJdfQ==