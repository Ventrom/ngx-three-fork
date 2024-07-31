/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix */
import { ChangeDetectionStrategy, Component, forwardRef, } from '@angular/core';
import { TextGeometry, } from 'three/examples/jsm/geometries/TextGeometry.js';
import { ThBufferGeometry } from './ThBufferGeometry';
import { ThExtrudeGeometry } from './ThExtrudeGeometry';
import * as i0 from "@angular/core";
export class ThTextGeometry extends ThExtrudeGeometry {
    getType() {
        return TextGeometry;
    }
    get type() {
        return this._objRef?.type;
    }
    get parameters() {
        return this._objRef?.parameters;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThTextGeometry, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.1.2", type: ThTextGeometry, selector: "th-textGeometry", providers: [
            {
                provide: ThBufferGeometry,
                useExisting: forwardRef(() => ThTextGeometry),
            },
        ], usesInheritance: true, ngImport: i0, template: '<ng-content/>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThTextGeometry, decorators: [{
            type: Component,
            args: [{
                    selector: 'th-textGeometry',
                    template: '<ng-content/>',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    providers: [
                        {
                            provide: ThBufferGeometry,
                            useExisting: forwardRef(() => ThTextGeometry),
                        },
                    ],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGhUZXh0R2VvbWV0cnkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtdGhyZWUvc3JjL2xpYi9nZW5lcmF0ZWQvVGhUZXh0R2VvbWV0cnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEseURBQXlEO0FBQ3pELHlDQUF5QztBQUN6QywrRkFBK0Y7QUFDL0YsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixTQUFTLEVBRVQsVUFBVSxHQUNYLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFDTCxZQUFZLEdBRWIsTUFBTSwrQ0FBK0MsQ0FBQztBQUN2RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUN0RCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQzs7QUFheEQsTUFBTSxPQUFPLGNBR1gsU0FBUSxpQkFBMkI7SUFDNUIsT0FBTztRQUNaLE9BQU8sWUFBWSxDQUFDO0lBQ3RCLENBQUM7SUFFRCxJQUFXLElBQUk7UUFDYixPQUFPLElBQUksQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDO0lBQzVCLENBQUM7SUFDRCxJQUFXLFVBQVU7UUFNbkIsT0FBTyxJQUFJLENBQUMsT0FBTyxFQUFFLFVBQVUsQ0FBQztJQUNsQyxDQUFDOzhHQWxCVSxjQUFjO2tHQUFkLGNBQWMsMENBUGQ7WUFDVDtnQkFDRSxPQUFPLEVBQUUsZ0JBQWdCO2dCQUN6QixXQUFXLEVBQUUsVUFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDLGNBQWMsQ0FBQzthQUM5QztTQUNGLGlEQVBTLGVBQWU7OzJGQVNkLGNBQWM7a0JBWDFCLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLGlCQUFpQjtvQkFDM0IsUUFBUSxFQUFFLGVBQWU7b0JBQ3pCLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO29CQUMvQyxTQUFTLEVBQUU7d0JBQ1Q7NEJBQ0UsT0FBTyxFQUFFLGdCQUFnQjs0QkFDekIsV0FBVyxFQUFFLFVBQVUsQ0FBQyxHQUFHLEVBQUUsZUFBZSxDQUFDO3lCQUM5QztxQkFDRjtpQkFDRiIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIEB0eXBlc2NyaXB0LWVzbGludC9uYW1pbmctY29udmVudGlvbiAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tdW5kZXJzY29yZS1kYW5nbGUgKi9cbi8qIGVzbGludC1kaXNhYmxlIEBhbmd1bGFyLWVzbGludC9jb21wb25lbnQtc2VsZWN0b3IsIEBhbmd1bGFyLWVzbGludC9jb21wb25lbnQtY2xhc3Mtc3VmZml4ICovXG5pbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ29tcG9uZW50LFxuICBUeXBlLFxuICBmb3J3YXJkUmVmLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFNoYXBlIH0gZnJvbSAndGhyZWUnO1xuaW1wb3J0IHtcbiAgVGV4dEdlb21ldHJ5LFxuICBUZXh0R2VvbWV0cnlQYXJhbWV0ZXJzLFxufSBmcm9tICd0aHJlZS9leGFtcGxlcy9qc20vZ2VvbWV0cmllcy9UZXh0R2VvbWV0cnkuanMnO1xuaW1wb3J0IHsgVGhCdWZmZXJHZW9tZXRyeSB9IGZyb20gJy4vVGhCdWZmZXJHZW9tZXRyeSc7XG5pbXBvcnQgeyBUaEV4dHJ1ZGVHZW9tZXRyeSB9IGZyb20gJy4vVGhFeHRydWRlR2VvbWV0cnknO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0aC10ZXh0R2VvbWV0cnknLFxuICB0ZW1wbGF0ZTogJzxuZy1jb250ZW50Lz4nLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgcHJvdmlkZXJzOiBbXG4gICAge1xuICAgICAgcHJvdmlkZTogVGhCdWZmZXJHZW9tZXRyeSxcbiAgICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IFRoVGV4dEdlb21ldHJ5KSxcbiAgICB9LFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBUaFRleHRHZW9tZXRyeTxcbiAgVCBleHRlbmRzIFRleHRHZW9tZXRyeSA9IFRleHRHZW9tZXRyeSxcbiAgVEFSR1MgPSBbdGV4dDogc3RyaW5nLCBwYXJhbWV0ZXJzPzogVGV4dEdlb21ldHJ5UGFyYW1ldGVyc10sXG4+IGV4dGVuZHMgVGhFeHRydWRlR2VvbWV0cnk8VCwgVEFSR1M+IHtcbiAgcHVibGljIGdldFR5cGUoKTogVHlwZTxUZXh0R2VvbWV0cnk+IHtcbiAgICByZXR1cm4gVGV4dEdlb21ldHJ5O1xuICB9XG5cbiAgcHVibGljIGdldCB0eXBlKCk6IChzdHJpbmcgfCAnVGV4dEdlb21ldHJ5JykgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9vYmpSZWY/LnR5cGU7XG4gIH1cbiAgcHVibGljIGdldCBwYXJhbWV0ZXJzKCk6XG4gICAgfCB7XG4gICAgICAgIHJlYWRvbmx5IHNoYXBlczogU2hhcGUgfCBTaGFwZVtdO1xuICAgICAgICByZWFkb25seSBvcHRpb25zOiBUZXh0R2VvbWV0cnlQYXJhbWV0ZXJzO1xuICAgICAgfVxuICAgIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fb2JqUmVmPy5wYXJhbWV0ZXJzO1xuICB9XG59XG4iXX0=