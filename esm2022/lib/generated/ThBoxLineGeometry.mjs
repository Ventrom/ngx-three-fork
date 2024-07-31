/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix */
import { ChangeDetectionStrategy, Component, forwardRef, } from '@angular/core';
import { BoxLineGeometry } from 'three/examples/jsm/geometries/BoxLineGeometry.js';
import { ThBufferGeometry } from './ThBufferGeometry';
import * as i0 from "@angular/core";
export class ThBoxLineGeometry extends ThBufferGeometry {
    getType() {
        return BoxLineGeometry;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThBoxLineGeometry, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.1.2", type: ThBoxLineGeometry, selector: "th-boxLineGeometry", providers: [
            {
                provide: ThBufferGeometry,
                useExisting: forwardRef(() => ThBoxLineGeometry),
            },
        ], usesInheritance: true, ngImport: i0, template: '<ng-content/>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThBoxLineGeometry, decorators: [{
            type: Component,
            args: [{
                    selector: 'th-boxLineGeometry',
                    template: '<ng-content/>',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    providers: [
                        {
                            provide: ThBufferGeometry,
                            useExisting: forwardRef(() => ThBoxLineGeometry),
                        },
                    ],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGhCb3hMaW5lR2VvbWV0cnkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtdGhyZWUvc3JjL2xpYi9nZW5lcmF0ZWQvVGhCb3hMaW5lR2VvbWV0cnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEseURBQXlEO0FBQ3pELHlDQUF5QztBQUN6QywrRkFBK0Y7QUFDL0YsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixTQUFTLEVBRVQsVUFBVSxHQUNYLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxrREFBa0QsQ0FBQztBQUNuRixPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQzs7QUFhdEQsTUFBTSxPQUFPLGlCQVVYLFNBQVEsZ0JBQWtEO0lBQ25ELE9BQU87UUFDWixPQUFPLGVBQWUsQ0FBQztJQUN6QixDQUFDOzhHQWJVLGlCQUFpQjtrR0FBakIsaUJBQWlCLDZDQVBqQjtZQUNUO2dCQUNFLE9BQU8sRUFBRSxnQkFBZ0I7Z0JBQ3pCLFdBQVcsRUFBRSxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsaUJBQWlCLENBQUM7YUFDakQ7U0FDRixpREFQUyxlQUFlOzsyRkFTZCxpQkFBaUI7a0JBWDdCLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLG9CQUFvQjtvQkFDOUIsUUFBUSxFQUFFLGVBQWU7b0JBQ3pCLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO29CQUMvQyxTQUFTLEVBQUU7d0JBQ1Q7NEJBQ0UsT0FBTyxFQUFFLGdCQUFnQjs0QkFDekIsV0FBVyxFQUFFLFVBQVUsQ0FBQyxHQUFHLEVBQUUsa0JBQWtCLENBQUM7eUJBQ2pEO3FCQUNGO2lCQUNGIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgQHR5cGVzY3JpcHQtZXNsaW50L25hbWluZy1jb252ZW50aW9uICovXG4vKiBlc2xpbnQtZGlzYWJsZSBuby11bmRlcnNjb3JlLWRhbmdsZSAqL1xuLyogZXNsaW50LWRpc2FibGUgQGFuZ3VsYXItZXNsaW50L2NvbXBvbmVudC1zZWxlY3RvciwgQGFuZ3VsYXItZXNsaW50L2NvbXBvbmVudC1jbGFzcy1zdWZmaXggKi9cbmltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDb21wb25lbnQsXG4gIFR5cGUsXG4gIGZvcndhcmRSZWYsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTm9ybWFsQnVmZmVyQXR0cmlidXRlcyB9IGZyb20gJ3RocmVlJztcbmltcG9ydCB7IEJveExpbmVHZW9tZXRyeSB9IGZyb20gJ3RocmVlL2V4YW1wbGVzL2pzbS9nZW9tZXRyaWVzL0JveExpbmVHZW9tZXRyeS5qcyc7XG5pbXBvcnQgeyBUaEJ1ZmZlckdlb21ldHJ5IH0gZnJvbSAnLi9UaEJ1ZmZlckdlb21ldHJ5JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndGgtYm94TGluZUdlb21ldHJ5JyxcbiAgdGVtcGxhdGU6ICc8bmctY29udGVudC8+JyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHByb3ZpZGVyczogW1xuICAgIHtcbiAgICAgIHByb3ZpZGU6IFRoQnVmZmVyR2VvbWV0cnksXG4gICAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBUaEJveExpbmVHZW9tZXRyeSksXG4gICAgfSxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgVGhCb3hMaW5lR2VvbWV0cnk8XG4gIFQgZXh0ZW5kcyBCb3hMaW5lR2VvbWV0cnkgPSBCb3hMaW5lR2VvbWV0cnksXG4gIFRBUkdTID0gW1xuICAgIHdpZHRoPzogbnVtYmVyLFxuICAgIGhlaWdodD86IG51bWJlcixcbiAgICBkZXB0aD86IG51bWJlcixcbiAgICB3aWR0aFNlZ21lbnRzPzogbnVtYmVyLFxuICAgIGhlaWdodFNlZ21lbnRzPzogbnVtYmVyLFxuICAgIGRlcHRoU2VnbWVudHM/OiBudW1iZXIsXG4gIF0sXG4+IGV4dGVuZHMgVGhCdWZmZXJHZW9tZXRyeTxOb3JtYWxCdWZmZXJBdHRyaWJ1dGVzLCBULCBUQVJHUz4ge1xuICBwdWJsaWMgZ2V0VHlwZSgpOiBUeXBlPEJveExpbmVHZW9tZXRyeT4ge1xuICAgIHJldHVybiBCb3hMaW5lR2VvbWV0cnk7XG4gIH1cbn1cbiJdfQ==