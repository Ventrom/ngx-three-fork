/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix */
import { ChangeDetectionStrategy, Component, Input, forwardRef, } from '@angular/core';
import { Camera, } from 'three';
import { applyValue } from '../util';
import { ThObject3D } from './ThObject3D';
import * as i0 from "@angular/core";
export class ThCamera extends ThObject3D {
    getType() {
        return Camera;
    }
    get isCamera() {
        return this._objRef?.isCamera;
    }
    get type() {
        return this._objRef?.type;
    }
    set layers(value) {
        if (this._objRef) {
            this._objRef.layers = applyValue(this._objRef.layers, value);
        }
    }
    get layers() {
        return this._objRef?.layers;
    }
    set matrixWorldInverse(value) {
        if (this._objRef) {
            this._objRef.matrixWorldInverse = applyValue(this._objRef.matrixWorldInverse, value);
        }
    }
    get matrixWorldInverse() {
        return this._objRef?.matrixWorldInverse;
    }
    set projectionMatrix(value) {
        if (this._objRef) {
            this._objRef.projectionMatrix = applyValue(this._objRef.projectionMatrix, value);
        }
    }
    get projectionMatrix() {
        return this._objRef?.projectionMatrix;
    }
    set projectionMatrixInverse(value) {
        if (this._objRef) {
            this._objRef.projectionMatrixInverse = applyValue(this._objRef.projectionMatrixInverse, value);
        }
    }
    get projectionMatrixInverse() {
        return this._objRef?.projectionMatrixInverse;
    }
    set coordinateSystem(value) {
        if (this._objRef) {
            this._objRef.coordinateSystem = value;
        }
    }
    get coordinateSystem() {
        return this._objRef?.coordinateSystem;
    }
    set viewport(value) {
        if (this._objRef) {
            this._objRef.viewport = applyValue(this._objRef.viewport, value);
        }
    }
    get viewport() {
        return this._objRef?.viewport;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThCamera, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.1.2", type: ThCamera, selector: "th-camera", inputs: { layers: "layers", matrixWorldInverse: "matrixWorldInverse", projectionMatrix: "projectionMatrix", projectionMatrixInverse: "projectionMatrixInverse", coordinateSystem: "coordinateSystem", viewport: "viewport" }, providers: [{ provide: ThObject3D, useExisting: forwardRef(() => ThCamera) }], usesInheritance: true, ngImport: i0, template: '<ng-content/>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThCamera, decorators: [{
            type: Component,
            args: [{
                    selector: 'th-camera',
                    template: '<ng-content/>',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    providers: [{ provide: ThObject3D, useExisting: forwardRef(() => ThCamera) }],
                }]
        }], propDecorators: { layers: [{
                type: Input
            }], matrixWorldInverse: [{
                type: Input
            }], projectionMatrix: [{
                type: Input
            }], projectionMatrixInverse: [{
                type: Input
            }], coordinateSystem: [{
                type: Input
            }], viewport: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGhDYW1lcmEuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtdGhyZWUvc3JjL2xpYi9nZW5lcmF0ZWQvVGhDYW1lcmEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEseURBQXlEO0FBQ3pELHlDQUF5QztBQUN6QywrRkFBK0Y7QUFDL0YsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixTQUFTLEVBQ1QsS0FBSyxFQUVMLFVBQVUsR0FDWCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQ0wsTUFBTSxHQU1QLE1BQU0sT0FBTyxDQUFDO0FBQ2YsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLFNBQVMsQ0FBQztBQUNyQyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sY0FBYyxDQUFDOztBQVExQyxNQUFNLE9BQU8sUUFBZ0QsU0FBUSxVQUlwRTtJQUNRLE9BQU87UUFDWixPQUFPLE1BQU0sQ0FBQztJQUNoQixDQUFDO0lBRUQsSUFBVyxRQUFRO1FBQ2pCLE9BQU8sSUFBSSxDQUFDLE9BQU8sRUFBRSxRQUFRLENBQUM7SUFDaEMsQ0FBQztJQUNELElBQVcsSUFBSTtRQUNiLE9BQU8sSUFBSSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUM7SUFDNUIsQ0FBQztJQUNELElBQ1csTUFBTSxDQUFDLEtBQStCO1FBQy9DLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ2pCLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFHLFVBQVUsQ0FBUyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxLQUFLLENBQUMsQ0FBQztRQUN2RSxDQUFDO0lBQ0gsQ0FBQztJQUNELElBQVcsTUFBTTtRQUNmLE9BQU8sSUFBSSxDQUFDLE9BQU8sRUFBRSxNQUFNLENBQUM7SUFDOUIsQ0FBQztJQUNELElBQ1csa0JBQWtCLENBQzNCLEtBbUJLO1FBRUwsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDakIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxrQkFBa0IsR0FBRyxVQUFVLENBQzFDLElBQUksQ0FBQyxPQUFPLENBQUMsa0JBQWtCLEVBQy9CLEtBQUssQ0FDTixDQUFDO1FBQ0osQ0FBQztJQUNILENBQUM7SUFDRCxJQUFXLGtCQUFrQjtRQUMzQixPQUFPLElBQUksQ0FBQyxPQUFPLEVBQUUsa0JBQWtCLENBQUM7SUFDMUMsQ0FBQztJQUNELElBQ1csZ0JBQWdCLENBQ3pCLEtBbUJLO1FBRUwsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDakIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsR0FBRyxVQUFVLENBQ3hDLElBQUksQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLEVBQzdCLEtBQUssQ0FDTixDQUFDO1FBQ0osQ0FBQztJQUNILENBQUM7SUFDRCxJQUFXLGdCQUFnQjtRQUN6QixPQUFPLElBQUksQ0FBQyxPQUFPLEVBQUUsZ0JBQWdCLENBQUM7SUFDeEMsQ0FBQztJQUNELElBQ1csdUJBQXVCLENBQ2hDLEtBbUJLO1FBRUwsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDakIsSUFBSSxDQUFDLE9BQU8sQ0FBQyx1QkFBdUIsR0FBRyxVQUFVLENBQy9DLElBQUksQ0FBQyxPQUFPLENBQUMsdUJBQXVCLEVBQ3BDLEtBQUssQ0FDTixDQUFDO1FBQ0osQ0FBQztJQUNILENBQUM7SUFDRCxJQUFXLHVCQUF1QjtRQUNoQyxPQUFPLElBQUksQ0FBQyxPQUFPLEVBQUUsdUJBQXVCLENBQUM7SUFDL0MsQ0FBQztJQUNELElBQ1csZ0JBQWdCLENBQUMsS0FBdUI7UUFDakQsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDakIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsR0FBRyxLQUFLLENBQUM7UUFDeEMsQ0FBQztJQUNILENBQUM7SUFFRCxJQUFXLGdCQUFnQjtRQUN6QixPQUFPLElBQUksQ0FBQyxPQUFPLEVBQUUsZ0JBQWdCLENBQUM7SUFDeEMsQ0FBQztJQUNELElBQ1csUUFBUSxDQUNqQixLQUE2RDtRQUU3RCxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUNqQixJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsR0FBRyxVQUFVLENBQ2hDLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUNyQixLQUFLLENBQ04sQ0FBQztRQUNKLENBQUM7SUFDSCxDQUFDO0lBQ0QsSUFBVyxRQUFRO1FBQ2pCLE9BQU8sSUFBSSxDQUFDLE9BQU8sRUFBRSxRQUFRLENBQUM7SUFDaEMsQ0FBQzs4R0FsSlUsUUFBUTtrR0FBUixRQUFRLGtRQUZSLENBQUMsRUFBRSxPQUFPLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRSxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxpREFGbkUsZUFBZTs7MkZBSWQsUUFBUTtrQkFOcEIsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsV0FBVztvQkFDckIsUUFBUSxFQUFFLGVBQWU7b0JBQ3pCLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO29CQUMvQyxTQUFTLEVBQUUsQ0FBQyxFQUFFLE9BQU8sRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFLFVBQVUsQ0FBQyxHQUFHLEVBQUUsU0FBUyxDQUFDLEVBQUUsQ0FBQztpQkFDOUU7OEJBaUJZLE1BQU07c0JBRGhCLEtBQUs7Z0JBVUssa0JBQWtCO3NCQUQ1QixLQUFLO2dCQWtDSyxnQkFBZ0I7c0JBRDFCLEtBQUs7Z0JBa0NLLHVCQUF1QjtzQkFEakMsS0FBSztnQkFrQ0ssZ0JBQWdCO3NCQUQxQixLQUFLO2dCQVdLLFFBQVE7c0JBRGxCLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBAdHlwZXNjcmlwdC1lc2xpbnQvbmFtaW5nLWNvbnZlbnRpb24gKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vLXVuZGVyc2NvcmUtZGFuZ2xlICovXG4vKiBlc2xpbnQtZGlzYWJsZSBAYW5ndWxhci1lc2xpbnQvY29tcG9uZW50LXNlbGVjdG9yLCBAYW5ndWxhci1lc2xpbnQvY29tcG9uZW50LWNsYXNzLXN1ZmZpeCAqL1xuaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENvbXBvbmVudCxcbiAgSW5wdXQsXG4gIFR5cGUsXG4gIGZvcndhcmRSZWYsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgQ2FtZXJhLFxuICBDb29yZGluYXRlU3lzdGVtLFxuICBMYXllcnMsXG4gIE1hdHJpeDQsXG4gIE9iamVjdDNERXZlbnRNYXAsXG4gIFZlY3RvcjQsXG59IGZyb20gJ3RocmVlJztcbmltcG9ydCB7IGFwcGx5VmFsdWUgfSBmcm9tICcuLi91dGlsJztcbmltcG9ydCB7IFRoT2JqZWN0M0QgfSBmcm9tICcuL1RoT2JqZWN0M0QnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0aC1jYW1lcmEnLFxuICB0ZW1wbGF0ZTogJzxuZy1jb250ZW50Lz4nLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgcHJvdmlkZXJzOiBbeyBwcm92aWRlOiBUaE9iamVjdDNELCB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBUaENhbWVyYSkgfV0sXG59KVxuZXhwb3J0IGNsYXNzIFRoQ2FtZXJhPFQgZXh0ZW5kcyBDYW1lcmEgPSBDYW1lcmEsIFRBUkdTID0gW10+IGV4dGVuZHMgVGhPYmplY3QzRDxcbiAgT2JqZWN0M0RFdmVudE1hcCxcbiAgVCxcbiAgVEFSR1Ncbj4ge1xuICBwdWJsaWMgZ2V0VHlwZSgpOiBUeXBlPENhbWVyYT4ge1xuICAgIHJldHVybiBDYW1lcmE7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGlzQ2FtZXJhKCk6IHRydWUgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9vYmpSZWY/LmlzQ2FtZXJhO1xuICB9XG4gIHB1YmxpYyBnZXQgdHlwZSgpOiAoc3RyaW5nIHwgJ0NhbWVyYScpIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fb2JqUmVmPy50eXBlO1xuICB9XG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzZXQgbGF5ZXJzKHZhbHVlOiBMYXllcnMgfCBbbGF5ZXI6IG51bWJlcl0pIHtcbiAgICBpZiAodGhpcy5fb2JqUmVmKSB7XG4gICAgICB0aGlzLl9vYmpSZWYubGF5ZXJzID0gYXBwbHlWYWx1ZTxMYXllcnM+KHRoaXMuX29ialJlZi5sYXllcnMsIHZhbHVlKTtcbiAgICB9XG4gIH1cbiAgcHVibGljIGdldCBsYXllcnMoKTogTGF5ZXJzIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fb2JqUmVmPy5sYXllcnM7XG4gIH1cbiAgQElucHV0KClcbiAgcHVibGljIHNldCBtYXRyaXhXb3JsZEludmVyc2UoXG4gICAgdmFsdWU6XG4gICAgICB8IE1hdHJpeDRcbiAgICAgIHwgW1xuICAgICAgICAgIG4xMTogbnVtYmVyLFxuICAgICAgICAgIG4xMjogbnVtYmVyLFxuICAgICAgICAgIG4xMzogbnVtYmVyLFxuICAgICAgICAgIG4xNDogbnVtYmVyLFxuICAgICAgICAgIG4yMTogbnVtYmVyLFxuICAgICAgICAgIG4yMjogbnVtYmVyLFxuICAgICAgICAgIG4yMzogbnVtYmVyLFxuICAgICAgICAgIG4yNDogbnVtYmVyLFxuICAgICAgICAgIG4zMTogbnVtYmVyLFxuICAgICAgICAgIG4zMjogbnVtYmVyLFxuICAgICAgICAgIG4zMzogbnVtYmVyLFxuICAgICAgICAgIG4zNDogbnVtYmVyLFxuICAgICAgICAgIG40MTogbnVtYmVyLFxuICAgICAgICAgIG40MjogbnVtYmVyLFxuICAgICAgICAgIG40MzogbnVtYmVyLFxuICAgICAgICAgIG40NDogbnVtYmVyLFxuICAgICAgICBdLFxuICApIHtcbiAgICBpZiAodGhpcy5fb2JqUmVmKSB7XG4gICAgICB0aGlzLl9vYmpSZWYubWF0cml4V29ybGRJbnZlcnNlID0gYXBwbHlWYWx1ZTxNYXRyaXg0PihcbiAgICAgICAgdGhpcy5fb2JqUmVmLm1hdHJpeFdvcmxkSW52ZXJzZSxcbiAgICAgICAgdmFsdWUsXG4gICAgICApO1xuICAgIH1cbiAgfVxuICBwdWJsaWMgZ2V0IG1hdHJpeFdvcmxkSW52ZXJzZSgpOiBNYXRyaXg0IHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fb2JqUmVmPy5tYXRyaXhXb3JsZEludmVyc2U7XG4gIH1cbiAgQElucHV0KClcbiAgcHVibGljIHNldCBwcm9qZWN0aW9uTWF0cml4KFxuICAgIHZhbHVlOlxuICAgICAgfCBNYXRyaXg0XG4gICAgICB8IFtcbiAgICAgICAgICBuMTE6IG51bWJlcixcbiAgICAgICAgICBuMTI6IG51bWJlcixcbiAgICAgICAgICBuMTM6IG51bWJlcixcbiAgICAgICAgICBuMTQ6IG51bWJlcixcbiAgICAgICAgICBuMjE6IG51bWJlcixcbiAgICAgICAgICBuMjI6IG51bWJlcixcbiAgICAgICAgICBuMjM6IG51bWJlcixcbiAgICAgICAgICBuMjQ6IG51bWJlcixcbiAgICAgICAgICBuMzE6IG51bWJlcixcbiAgICAgICAgICBuMzI6IG51bWJlcixcbiAgICAgICAgICBuMzM6IG51bWJlcixcbiAgICAgICAgICBuMzQ6IG51bWJlcixcbiAgICAgICAgICBuNDE6IG51bWJlcixcbiAgICAgICAgICBuNDI6IG51bWJlcixcbiAgICAgICAgICBuNDM6IG51bWJlcixcbiAgICAgICAgICBuNDQ6IG51bWJlcixcbiAgICAgICAgXSxcbiAgKSB7XG4gICAgaWYgKHRoaXMuX29ialJlZikge1xuICAgICAgdGhpcy5fb2JqUmVmLnByb2plY3Rpb25NYXRyaXggPSBhcHBseVZhbHVlPE1hdHJpeDQ+KFxuICAgICAgICB0aGlzLl9vYmpSZWYucHJvamVjdGlvbk1hdHJpeCxcbiAgICAgICAgdmFsdWUsXG4gICAgICApO1xuICAgIH1cbiAgfVxuICBwdWJsaWMgZ2V0IHByb2plY3Rpb25NYXRyaXgoKTogTWF0cml4NCB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX29ialJlZj8ucHJvamVjdGlvbk1hdHJpeDtcbiAgfVxuICBASW5wdXQoKVxuICBwdWJsaWMgc2V0IHByb2plY3Rpb25NYXRyaXhJbnZlcnNlKFxuICAgIHZhbHVlOlxuICAgICAgfCBNYXRyaXg0XG4gICAgICB8IFtcbiAgICAgICAgICBuMTE6IG51bWJlcixcbiAgICAgICAgICBuMTI6IG51bWJlcixcbiAgICAgICAgICBuMTM6IG51bWJlcixcbiAgICAgICAgICBuMTQ6IG51bWJlcixcbiAgICAgICAgICBuMjE6IG51bWJlcixcbiAgICAgICAgICBuMjI6IG51bWJlcixcbiAgICAgICAgICBuMjM6IG51bWJlcixcbiAgICAgICAgICBuMjQ6IG51bWJlcixcbiAgICAgICAgICBuMzE6IG51bWJlcixcbiAgICAgICAgICBuMzI6IG51bWJlcixcbiAgICAgICAgICBuMzM6IG51bWJlcixcbiAgICAgICAgICBuMzQ6IG51bWJlcixcbiAgICAgICAgICBuNDE6IG51bWJlcixcbiAgICAgICAgICBuNDI6IG51bWJlcixcbiAgICAgICAgICBuNDM6IG51bWJlcixcbiAgICAgICAgICBuNDQ6IG51bWJlcixcbiAgICAgICAgXSxcbiAgKSB7XG4gICAgaWYgKHRoaXMuX29ialJlZikge1xuICAgICAgdGhpcy5fb2JqUmVmLnByb2plY3Rpb25NYXRyaXhJbnZlcnNlID0gYXBwbHlWYWx1ZTxNYXRyaXg0PihcbiAgICAgICAgdGhpcy5fb2JqUmVmLnByb2plY3Rpb25NYXRyaXhJbnZlcnNlLFxuICAgICAgICB2YWx1ZSxcbiAgICAgICk7XG4gICAgfVxuICB9XG4gIHB1YmxpYyBnZXQgcHJvamVjdGlvbk1hdHJpeEludmVyc2UoKTogTWF0cml4NCB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX29ialJlZj8ucHJvamVjdGlvbk1hdHJpeEludmVyc2U7XG4gIH1cbiAgQElucHV0KClcbiAgcHVibGljIHNldCBjb29yZGluYXRlU3lzdGVtKHZhbHVlOiBDb29yZGluYXRlU3lzdGVtKSB7XG4gICAgaWYgKHRoaXMuX29ialJlZikge1xuICAgICAgdGhpcy5fb2JqUmVmLmNvb3JkaW5hdGVTeXN0ZW0gPSB2YWx1ZTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgZ2V0IGNvb3JkaW5hdGVTeXN0ZW0oKTogQ29vcmRpbmF0ZVN5c3RlbSB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX29ialJlZj8uY29vcmRpbmF0ZVN5c3RlbTtcbiAgfVxuICBASW5wdXQoKVxuICBwdWJsaWMgc2V0IHZpZXdwb3J0KFxuICAgIHZhbHVlOiBWZWN0b3I0IHwgW3g6IG51bWJlciwgeTogbnVtYmVyLCB6OiBudW1iZXIsIHc6IG51bWJlcl0sXG4gICkge1xuICAgIGlmICh0aGlzLl9vYmpSZWYpIHtcbiAgICAgIHRoaXMuX29ialJlZi52aWV3cG9ydCA9IGFwcGx5VmFsdWU8VmVjdG9yNCB8IHVuZGVmaW5lZD4oXG4gICAgICAgIHRoaXMuX29ialJlZi52aWV3cG9ydCxcbiAgICAgICAgdmFsdWUsXG4gICAgICApO1xuICAgIH1cbiAgfVxuICBwdWJsaWMgZ2V0IHZpZXdwb3J0KCk6IFZlY3RvcjQgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9vYmpSZWY/LnZpZXdwb3J0O1xuICB9XG59XG4iXX0=