/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix */
import { ChangeDetectionStrategy, Component, forwardRef, } from '@angular/core';
import { PolarGridHelper, } from 'three';
import { ThLineSegments } from './ThLineSegments';
import { ThObject3D } from './ThObject3D';
import * as i0 from "@angular/core";
export class ThPolarGridHelper extends ThLineSegments {
    getType() {
        return PolarGridHelper;
    }
    get type() {
        return this._objRef?.type;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThPolarGridHelper, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.1.2", type: ThPolarGridHelper, selector: "th-polarGridHelper", providers: [
            { provide: ThObject3D, useExisting: forwardRef(() => ThPolarGridHelper) },
        ], usesInheritance: true, ngImport: i0, template: '<ng-content/>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThPolarGridHelper, decorators: [{
            type: Component,
            args: [{
                    selector: 'th-polarGridHelper',
                    template: '<ng-content/>',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    providers: [
                        { provide: ThObject3D, useExisting: forwardRef(() => ThPolarGridHelper) },
                    ],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGhQb2xhckdyaWRIZWxwZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtdGhyZWUvc3JjL2xpYi9nZW5lcmF0ZWQvVGhQb2xhckdyaWRIZWxwZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEseURBQXlEO0FBQ3pELHlDQUF5QztBQUN6QywrRkFBK0Y7QUFDL0YsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixTQUFTLEVBRVQsVUFBVSxHQUNYLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFLTCxlQUFlLEdBQ2hCLE1BQU0sT0FBTyxDQUFDO0FBQ2YsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxjQUFjLENBQUM7O0FBVTFDLE1BQU0sT0FBTyxpQkFVWCxTQUFRLGNBTVQ7SUFDUSxPQUFPO1FBQ1osT0FBTyxlQUFlLENBQUM7SUFDekIsQ0FBQztJQUVELElBQVcsSUFBSTtRQUNiLE9BQU8sSUFBSSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUM7SUFDNUIsQ0FBQzs4R0F2QlUsaUJBQWlCO2tHQUFqQixpQkFBaUIsNkNBSmpCO1lBQ1QsRUFBRSxPQUFPLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRSxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsaUJBQWlCLENBQUMsRUFBRTtTQUMxRSxpREFKUyxlQUFlOzsyRkFNZCxpQkFBaUI7a0JBUjdCLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLG9CQUFvQjtvQkFDOUIsUUFBUSxFQUFFLGVBQWU7b0JBQ3pCLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO29CQUMvQyxTQUFTLEVBQUU7d0JBQ1QsRUFBRSxPQUFPLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRSxVQUFVLENBQUMsR0FBRyxFQUFFLGtCQUFrQixDQUFDLEVBQUU7cUJBQzFFO2lCQUNGIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgQHR5cGVzY3JpcHQtZXNsaW50L25hbWluZy1jb252ZW50aW9uICovXG4vKiBlc2xpbnQtZGlzYWJsZSBuby11bmRlcnNjb3JlLWRhbmdsZSAqL1xuLyogZXNsaW50LWRpc2FibGUgQGFuZ3VsYXItZXNsaW50L2NvbXBvbmVudC1zZWxlY3RvciwgQGFuZ3VsYXItZXNsaW50L2NvbXBvbmVudC1jbGFzcy1zdWZmaXggKi9cbmltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDb21wb25lbnQsXG4gIFR5cGUsXG4gIGZvcndhcmRSZWYsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgQnVmZmVyR2VvbWV0cnksXG4gIENvbG9yUmVwcmVzZW50YXRpb24sXG4gIE1hdGVyaWFsLFxuICBPYmplY3QzREV2ZW50TWFwLFxuICBQb2xhckdyaWRIZWxwZXIsXG59IGZyb20gJ3RocmVlJztcbmltcG9ydCB7IFRoTGluZVNlZ21lbnRzIH0gZnJvbSAnLi9UaExpbmVTZWdtZW50cyc7XG5pbXBvcnQgeyBUaE9iamVjdDNEIH0gZnJvbSAnLi9UaE9iamVjdDNEJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndGgtcG9sYXJHcmlkSGVscGVyJyxcbiAgdGVtcGxhdGU6ICc8bmctY29udGVudC8+JyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHByb3ZpZGVyczogW1xuICAgIHsgcHJvdmlkZTogVGhPYmplY3QzRCwgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gVGhQb2xhckdyaWRIZWxwZXIpIH0sXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIFRoUG9sYXJHcmlkSGVscGVyPFxuICBUIGV4dGVuZHMgUG9sYXJHcmlkSGVscGVyID0gUG9sYXJHcmlkSGVscGVyLFxuICBUQVJHUyA9IFtcbiAgICByYWRpdXM/OiBudW1iZXIsXG4gICAgcmFkaWFscz86IG51bWJlcixcbiAgICBjaXJjbGVzPzogbnVtYmVyLFxuICAgIGRpdmlzaW9ucz86IG51bWJlcixcbiAgICBjb2xvcjE/OiBDb2xvclJlcHJlc2VudGF0aW9uLFxuICAgIGNvbG9yMj86IENvbG9yUmVwcmVzZW50YXRpb24sXG4gIF0sXG4+IGV4dGVuZHMgVGhMaW5lU2VnbWVudHM8XG4gIEJ1ZmZlckdlb21ldHJ5LFxuICBNYXRlcmlhbCB8IE1hdGVyaWFsW10sXG4gIE9iamVjdDNERXZlbnRNYXAsXG4gIFQsXG4gIFRBUkdTXG4+IHtcbiAgcHVibGljIGdldFR5cGUoKTogVHlwZTxQb2xhckdyaWRIZWxwZXI+IHtcbiAgICByZXR1cm4gUG9sYXJHcmlkSGVscGVyO1xuICB9XG5cbiAgcHVibGljIGdldCB0eXBlKCk6IChzdHJpbmcgfCAnUG9sYXJHcmlkSGVscGVyJykgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9vYmpSZWY/LnR5cGU7XG4gIH1cbn1cbiJdfQ==