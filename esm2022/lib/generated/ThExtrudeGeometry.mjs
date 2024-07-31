/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix */
import { ChangeDetectionStrategy, Component, forwardRef, } from '@angular/core';
import { ExtrudeGeometry, } from 'three';
import { ThBufferGeometry } from './ThBufferGeometry';
import * as i0 from "@angular/core";
export class ThExtrudeGeometry extends ThBufferGeometry {
    getType() {
        return ExtrudeGeometry;
    }
    get type() {
        return this._objRef?.type;
    }
    get parameters() {
        return this._objRef?.parameters;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThExtrudeGeometry, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.1.2", type: ThExtrudeGeometry, selector: "th-extrudeGeometry", providers: [
            {
                provide: ThBufferGeometry,
                useExisting: forwardRef(() => ThExtrudeGeometry),
            },
        ], usesInheritance: true, ngImport: i0, template: '<ng-content/>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThExtrudeGeometry, decorators: [{
            type: Component,
            args: [{
                    selector: 'th-extrudeGeometry',
                    template: '<ng-content/>',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    providers: [
                        {
                            provide: ThBufferGeometry,
                            useExisting: forwardRef(() => ThExtrudeGeometry),
                        },
                    ],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGhFeHRydWRlR2VvbWV0cnkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtdGhyZWUvc3JjL2xpYi9nZW5lcmF0ZWQvVGhFeHRydWRlR2VvbWV0cnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEseURBQXlEO0FBQ3pELHlDQUF5QztBQUN6QywrRkFBK0Y7QUFDL0YsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixTQUFTLEVBRVQsVUFBVSxHQUNYLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFDTCxlQUFlLEdBSWhCLE1BQU0sT0FBTyxDQUFDO0FBQ2YsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7O0FBYXRELE1BQU0sT0FBTyxpQkFHWCxTQUFRLGdCQUFrRDtJQUNuRCxPQUFPO1FBQ1osT0FBTyxlQUFlLENBQUM7SUFDekIsQ0FBQztJQUVELElBQVcsSUFBSTtRQUNiLE9BQU8sSUFBSSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUM7SUFDNUIsQ0FBQztJQUNELElBQVcsVUFBVTtRQU1uQixPQUFPLElBQUksQ0FBQyxPQUFPLEVBQUUsVUFBVSxDQUFDO0lBQ2xDLENBQUM7OEdBbEJVLGlCQUFpQjtrR0FBakIsaUJBQWlCLDZDQVBqQjtZQUNUO2dCQUNFLE9BQU8sRUFBRSxnQkFBZ0I7Z0JBQ3pCLFdBQVcsRUFBRSxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsaUJBQWlCLENBQUM7YUFDakQ7U0FDRixpREFQUyxlQUFlOzsyRkFTZCxpQkFBaUI7a0JBWDdCLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLG9CQUFvQjtvQkFDOUIsUUFBUSxFQUFFLGVBQWU7b0JBQ3pCLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO29CQUMvQyxTQUFTLEVBQUU7d0JBQ1Q7NEJBQ0UsT0FBTyxFQUFFLGdCQUFnQjs0QkFDekIsV0FBVyxFQUFFLFVBQVUsQ0FBQyxHQUFHLEVBQUUsa0JBQWtCLENBQUM7eUJBQ2pEO3FCQUNGO2lCQUNGIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgQHR5cGVzY3JpcHQtZXNsaW50L25hbWluZy1jb252ZW50aW9uICovXG4vKiBlc2xpbnQtZGlzYWJsZSBuby11bmRlcnNjb3JlLWRhbmdsZSAqL1xuLyogZXNsaW50LWRpc2FibGUgQGFuZ3VsYXItZXNsaW50L2NvbXBvbmVudC1zZWxlY3RvciwgQGFuZ3VsYXItZXNsaW50L2NvbXBvbmVudC1jbGFzcy1zdWZmaXggKi9cbmltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDb21wb25lbnQsXG4gIFR5cGUsXG4gIGZvcndhcmRSZWYsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgRXh0cnVkZUdlb21ldHJ5LFxuICBFeHRydWRlR2VvbWV0cnlPcHRpb25zLFxuICBOb3JtYWxCdWZmZXJBdHRyaWJ1dGVzLFxuICBTaGFwZSxcbn0gZnJvbSAndGhyZWUnO1xuaW1wb3J0IHsgVGhCdWZmZXJHZW9tZXRyeSB9IGZyb20gJy4vVGhCdWZmZXJHZW9tZXRyeSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3RoLWV4dHJ1ZGVHZW9tZXRyeScsXG4gIHRlbXBsYXRlOiAnPG5nLWNvbnRlbnQvPicsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBwcm92aWRlcnM6IFtcbiAgICB7XG4gICAgICBwcm92aWRlOiBUaEJ1ZmZlckdlb21ldHJ5LFxuICAgICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gVGhFeHRydWRlR2VvbWV0cnkpLFxuICAgIH0sXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIFRoRXh0cnVkZUdlb21ldHJ5PFxuICBUIGV4dGVuZHMgRXh0cnVkZUdlb21ldHJ5ID0gRXh0cnVkZUdlb21ldHJ5LFxuICBUQVJHUyA9IFtzaGFwZXM/OiBTaGFwZSB8IFNoYXBlW10sIG9wdGlvbnM/OiBFeHRydWRlR2VvbWV0cnlPcHRpb25zXSxcbj4gZXh0ZW5kcyBUaEJ1ZmZlckdlb21ldHJ5PE5vcm1hbEJ1ZmZlckF0dHJpYnV0ZXMsIFQsIFRBUkdTPiB7XG4gIHB1YmxpYyBnZXRUeXBlKCk6IFR5cGU8RXh0cnVkZUdlb21ldHJ5PiB7XG4gICAgcmV0dXJuIEV4dHJ1ZGVHZW9tZXRyeTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgdHlwZSgpOiAoc3RyaW5nIHwgJ0V4dHJ1ZGVHZW9tZXRyeScpIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fb2JqUmVmPy50eXBlO1xuICB9XG4gIHB1YmxpYyBnZXQgcGFyYW1ldGVycygpOlxuICAgIHwge1xuICAgICAgICByZWFkb25seSBzaGFwZXM6IFNoYXBlIHwgU2hhcGVbXTtcbiAgICAgICAgcmVhZG9ubHkgb3B0aW9uczogRXh0cnVkZUdlb21ldHJ5T3B0aW9ucztcbiAgICAgIH1cbiAgICB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX29ialJlZj8ucGFyYW1ldGVycztcbiAgfVxufVxuIl19