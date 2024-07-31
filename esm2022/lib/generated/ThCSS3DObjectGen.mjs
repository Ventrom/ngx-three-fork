/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix */
import { ChangeDetectionStrategy, Component, Input, forwardRef, } from '@angular/core';
import { CSS3DObject } from 'three/examples/jsm/renderers/CSS3DRenderer.js';
import { ThObject3D } from './ThObject3D';
import * as i0 from "@angular/core";
export class ThCSS3DObjectGen extends ThObject3D {
    getType() {
        return CSS3DObject;
    }
    set element(value) {
        if (this._objRef) {
            this._objRef.element = value;
        }
    }
    get element() {
        return this._objRef?.element;
    }
    set onBeforeRender(value) {
        if (this._objRef) {
            this._objRef.onBeforeRender = value;
        }
    }
    get onBeforeRender() {
        return this._objRef?.onBeforeRender;
    }
    set onAfterRender(value) {
        if (this._objRef) {
            this._objRef.onAfterRender = value;
        }
    }
    get onAfterRender() {
        return this._objRef?.onAfterRender;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThCSS3DObjectGen, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.1.2", type: ThCSS3DObjectGen, selector: "th-cSS3DObjectGen", inputs: { element: "element", onBeforeRender: "onBeforeRender", onAfterRender: "onAfterRender" }, providers: [
            { provide: ThObject3D, useExisting: forwardRef(() => ThCSS3DObjectGen) },
        ], usesInheritance: true, ngImport: i0, template: '<ng-content/>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThCSS3DObjectGen, decorators: [{
            type: Component,
            args: [{
                    selector: 'th-cSS3DObjectGen',
                    template: '<ng-content/>',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    providers: [
                        { provide: ThObject3D, useExisting: forwardRef(() => ThCSS3DObjectGen) },
                    ],
                }]
        }], propDecorators: { element: [{
                type: Input
            }], onBeforeRender: [{
                type: Input
            }], onAfterRender: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGhDU1MzRE9iamVjdEdlbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC10aHJlZS9zcmMvbGliL2dlbmVyYXRlZC9UaENTUzNET2JqZWN0R2VuLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHlEQUF5RDtBQUN6RCx5Q0FBeUM7QUFDekMsK0ZBQStGO0FBQy9GLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULEtBQUssRUFFTCxVQUFVLEdBQ1gsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLCtDQUErQyxDQUFDO0FBQzVFLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxjQUFjLENBQUM7O0FBVTFDLE1BQU0sT0FBTyxnQkFHWCxTQUFRLFVBQXNDO0lBQ3ZDLE9BQU87UUFDWixPQUFPLFdBQVcsQ0FBQztJQUNyQixDQUFDO0lBRUQsSUFDVyxPQUFPLENBQUMsS0FBa0I7UUFDbkMsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDakIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO1FBQy9CLENBQUM7SUFDSCxDQUFDO0lBRUQsSUFBVyxPQUFPO1FBQ2hCLE9BQU8sSUFBSSxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUM7SUFDL0IsQ0FBQztJQUNELElBQ1csY0FBYyxDQUN2QixLQUFnRTtRQUVoRSxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUNqQixJQUFJLENBQUMsT0FBTyxDQUFDLGNBQWMsR0FBRyxLQUFLLENBQUM7UUFDdEMsQ0FBQztJQUNILENBQUM7SUFFRCxJQUFXLGNBQWM7UUFHdkIsT0FBTyxJQUFJLENBQUMsT0FBTyxFQUFFLGNBQWMsQ0FBQztJQUN0QyxDQUFDO0lBQ0QsSUFDVyxhQUFhLENBQ3RCLEtBQWdFO1FBRWhFLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ2pCLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztRQUNyQyxDQUFDO0lBQ0gsQ0FBQztJQUVELElBQVcsYUFBYTtRQUd0QixPQUFPLElBQUksQ0FBQyxPQUFPLEVBQUUsYUFBYSxDQUFDO0lBQ3JDLENBQUM7OEdBN0NVLGdCQUFnQjtrR0FBaEIsZ0JBQWdCLDhJQUpoQjtZQUNULEVBQUUsT0FBTyxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUUsVUFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDLGdCQUFnQixDQUFDLEVBQUU7U0FDekUsaURBSlMsZUFBZTs7MkZBTWQsZ0JBQWdCO2tCQVI1QixTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxtQkFBbUI7b0JBQzdCLFFBQVEsRUFBRSxlQUFlO29CQUN6QixlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtvQkFDL0MsU0FBUyxFQUFFO3dCQUNULEVBQUUsT0FBTyxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUUsVUFBVSxDQUFDLEdBQUcsRUFBRSxpQkFBaUIsQ0FBQyxFQUFFO3FCQUN6RTtpQkFDRjs4QkFVWSxPQUFPO3NCQURqQixLQUFLO2dCQVdLLGNBQWM7c0JBRHhCLEtBQUs7Z0JBZUssYUFBYTtzQkFEdkIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIEB0eXBlc2NyaXB0LWVzbGludC9uYW1pbmctY29udmVudGlvbiAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tdW5kZXJzY29yZS1kYW5nbGUgKi9cbi8qIGVzbGludC1kaXNhYmxlIEBhbmd1bGFyLWVzbGludC9jb21wb25lbnQtc2VsZWN0b3IsIEBhbmd1bGFyLWVzbGludC9jb21wb25lbnQtY2xhc3Mtc3VmZml4ICovXG5pbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ29tcG9uZW50LFxuICBJbnB1dCxcbiAgVHlwZSxcbiAgZm9yd2FyZFJlZixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDYW1lcmEsIE9iamVjdDNERXZlbnRNYXAsIFNjZW5lIH0gZnJvbSAndGhyZWUnO1xuaW1wb3J0IHsgQ1NTM0RPYmplY3QgfSBmcm9tICd0aHJlZS9leGFtcGxlcy9qc20vcmVuZGVyZXJzL0NTUzNEUmVuZGVyZXIuanMnO1xuaW1wb3J0IHsgVGhPYmplY3QzRCB9IGZyb20gJy4vVGhPYmplY3QzRCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3RoLWNTUzNET2JqZWN0R2VuJyxcbiAgdGVtcGxhdGU6ICc8bmctY29udGVudC8+JyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHByb3ZpZGVyczogW1xuICAgIHsgcHJvdmlkZTogVGhPYmplY3QzRCwgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gVGhDU1MzRE9iamVjdEdlbikgfSxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgVGhDU1MzRE9iamVjdEdlbjxcbiAgVCBleHRlbmRzIENTUzNET2JqZWN0ID0gQ1NTM0RPYmplY3QsXG4gIFRBUkdTID0gLyogZWxlbWVudCAqLyBIVE1MRWxlbWVudCxcbj4gZXh0ZW5kcyBUaE9iamVjdDNEPE9iamVjdDNERXZlbnRNYXAsIFQsIFRBUkdTPiB7XG4gIHB1YmxpYyBnZXRUeXBlKCk6IFR5cGU8Q1NTM0RPYmplY3Q+IHtcbiAgICByZXR1cm4gQ1NTM0RPYmplY3Q7XG4gIH1cblxuICBASW5wdXQoKVxuICBwdWJsaWMgc2V0IGVsZW1lbnQodmFsdWU6IEhUTUxFbGVtZW50KSB7XG4gICAgaWYgKHRoaXMuX29ialJlZikge1xuICAgICAgdGhpcy5fb2JqUmVmLmVsZW1lbnQgPSB2YWx1ZTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgZ2V0IGVsZW1lbnQoKTogSFRNTEVsZW1lbnQgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9vYmpSZWY/LmVsZW1lbnQ7XG4gIH1cbiAgQElucHV0KClcbiAgcHVibGljIHNldCBvbkJlZm9yZVJlbmRlcihcbiAgICB2YWx1ZTogKHJlbmRlcmVyOiB1bmtub3duLCBzY2VuZTogU2NlbmUsIGNhbWVyYTogQ2FtZXJhKSA9PiB2b2lkLFxuICApIHtcbiAgICBpZiAodGhpcy5fb2JqUmVmKSB7XG4gICAgICB0aGlzLl9vYmpSZWYub25CZWZvcmVSZW5kZXIgPSB2YWx1ZTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgZ2V0IG9uQmVmb3JlUmVuZGVyKCk6XG4gICAgfCAoKHJlbmRlcmVyOiB1bmtub3duLCBzY2VuZTogU2NlbmUsIGNhbWVyYTogQ2FtZXJhKSA9PiB2b2lkKVxuICAgIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fb2JqUmVmPy5vbkJlZm9yZVJlbmRlcjtcbiAgfVxuICBASW5wdXQoKVxuICBwdWJsaWMgc2V0IG9uQWZ0ZXJSZW5kZXIoXG4gICAgdmFsdWU6IChyZW5kZXJlcjogdW5rbm93biwgc2NlbmU6IFNjZW5lLCBjYW1lcmE6IENhbWVyYSkgPT4gdm9pZCxcbiAgKSB7XG4gICAgaWYgKHRoaXMuX29ialJlZikge1xuICAgICAgdGhpcy5fb2JqUmVmLm9uQWZ0ZXJSZW5kZXIgPSB2YWx1ZTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgZ2V0IG9uQWZ0ZXJSZW5kZXIoKTpcbiAgICB8ICgocmVuZGVyZXI6IHVua25vd24sIHNjZW5lOiBTY2VuZSwgY2FtZXJhOiBDYW1lcmEpID0+IHZvaWQpXG4gICAgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9vYmpSZWY/Lm9uQWZ0ZXJSZW5kZXI7XG4gIH1cbn1cbiJdfQ==