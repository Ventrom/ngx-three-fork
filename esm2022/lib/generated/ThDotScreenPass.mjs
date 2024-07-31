/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix */
import { ChangeDetectionStrategy, Component, Input, forwardRef, } from '@angular/core';
import { DotScreenPass } from 'three/examples/jsm/postprocessing/DotScreenPass.js';
import { ThPassBase } from '../ThPassBase';
import { ThPass } from './ThPass';
import * as i0 from "@angular/core";
export class ThDotScreenPass extends ThPass {
    getType() {
        return DotScreenPass;
    }
    set uniforms(map) {
        if (this._objRef) {
            Object.assign(this._objRef.uniforms, map);
        }
    }
    get uniforms() {
        return this._objRef?.uniforms;
    }
    set material(value) {
        if (this._objRef) {
            this._objRef.material = value;
        }
    }
    get material() {
        return this._objRef?.material;
    }
    set fsQuad(value) {
        if (this._objRef) {
            this._objRef.fsQuad = value;
        }
    }
    get fsQuad() {
        return this._objRef?.fsQuad;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThDotScreenPass, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.1.2", type: ThDotScreenPass, selector: "th-dotScreenPass", inputs: { uniforms: "uniforms", material: "material", fsQuad: "fsQuad" }, providers: [
            { provide: ThPassBase, useExisting: forwardRef(() => ThDotScreenPass) },
        ], usesInheritance: true, ngImport: i0, template: '<ng-content/>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThDotScreenPass, decorators: [{
            type: Component,
            args: [{
                    selector: 'th-dotScreenPass',
                    template: '<ng-content/>',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    providers: [
                        { provide: ThPassBase, useExisting: forwardRef(() => ThDotScreenPass) },
                    ],
                }]
        }], propDecorators: { uniforms: [{
                type: Input
            }], material: [{
                type: Input
            }], fsQuad: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGhEb3RTY3JlZW5QYXNzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LXRocmVlL3NyYy9saWIvZ2VuZXJhdGVkL1RoRG90U2NyZWVuUGFzcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxpREFBaUQ7QUFDakQseURBQXlEO0FBQ3pELHlDQUF5QztBQUN6QywrRkFBK0Y7QUFDL0YsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixTQUFTLEVBQ1QsS0FBSyxFQUVMLFVBQVUsR0FDWCxNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sb0RBQW9ELENBQUM7QUFFbkYsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sVUFBVSxDQUFDOztBQVVsQyxNQUFNLE9BQU8sZUFHWCxTQUFRLE1BQWdCO0lBQ2pCLE9BQU87UUFDWixPQUFPLGFBQWEsQ0FBQztJQUN2QixDQUFDO0lBRUQsSUFDVyxRQUFRLENBQUMsR0FBdUM7UUFDekQsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDakIsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUM1QyxDQUFDO0lBQ0gsQ0FBQztJQUVELElBQVcsUUFBUTtRQUNqQixPQUFPLElBQUksQ0FBQyxPQUFPLEVBQUUsUUFFUixDQUFDO0lBQ2hCLENBQUM7SUFDRCxJQUNXLFFBQVEsQ0FBQyxLQUFxQjtRQUN2QyxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUNqQixJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7UUFDaEMsQ0FBQztJQUNILENBQUM7SUFFRCxJQUFXLFFBQVE7UUFDakIsT0FBTyxJQUFJLENBQUMsT0FBTyxFQUFFLFFBQVEsQ0FBQztJQUNoQyxDQUFDO0lBQ0QsSUFDVyxNQUFNLENBQUMsS0FBcUI7UUFDckMsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDakIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQzlCLENBQUM7SUFDSCxDQUFDO0lBRUQsSUFBVyxNQUFNO1FBQ2YsT0FBTyxJQUFJLENBQUMsT0FBTyxFQUFFLE1BQU0sQ0FBQztJQUM5QixDQUFDOzhHQXZDVSxlQUFlO2tHQUFmLGVBQWUscUhBSmY7WUFDVCxFQUFFLE9BQU8sRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxlQUFlLENBQUMsRUFBRTtTQUN4RSxpREFKUyxlQUFlOzsyRkFNZCxlQUFlO2tCQVIzQixTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxrQkFBa0I7b0JBQzVCLFFBQVEsRUFBRSxlQUFlO29CQUN6QixlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtvQkFDL0MsU0FBUyxFQUFFO3dCQUNULEVBQUUsT0FBTyxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUUsVUFBVSxDQUFDLEdBQUcsRUFBRSxnQkFBZ0IsQ0FBQyxFQUFFO3FCQUN4RTtpQkFDRjs4QkFVWSxRQUFRO3NCQURsQixLQUFLO2dCQWFLLFFBQVE7c0JBRGxCLEtBQUs7Z0JBV0ssTUFBTTtzQkFEaEIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIEB0eXBlc2NyaXB0LWVzbGludC9iYW4tdHlwZXMgKi9cbi8qIGVzbGludC1kaXNhYmxlIEB0eXBlc2NyaXB0LWVzbGludC9uYW1pbmctY29udmVudGlvbiAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tdW5kZXJzY29yZS1kYW5nbGUgKi9cbi8qIGVzbGludC1kaXNhYmxlIEBhbmd1bGFyLWVzbGludC9jb21wb25lbnQtc2VsZWN0b3IsIEBhbmd1bGFyLWVzbGludC9jb21wb25lbnQtY2xhc3Mtc3VmZml4ICovXG5pbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ29tcG9uZW50LFxuICBJbnB1dCxcbiAgVHlwZSxcbiAgZm9yd2FyZFJlZixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTaGFkZXJNYXRlcmlhbCwgVmVjdG9yMiB9IGZyb20gJ3RocmVlJztcbmltcG9ydCB7IERvdFNjcmVlblBhc3MgfSBmcm9tICd0aHJlZS9leGFtcGxlcy9qc20vcG9zdHByb2Nlc3NpbmcvRG90U2NyZWVuUGFzcy5qcyc7XG5pbXBvcnQgeyBGdWxsU2NyZWVuUXVhZCB9IGZyb20gJ3RocmVlL2V4YW1wbGVzL2pzbS9wb3N0cHJvY2Vzc2luZy9QYXNzLmpzJztcbmltcG9ydCB7IFRoUGFzc0Jhc2UgfSBmcm9tICcuLi9UaFBhc3NCYXNlJztcbmltcG9ydCB7IFRoUGFzcyB9IGZyb20gJy4vVGhQYXNzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndGgtZG90U2NyZWVuUGFzcycsXG4gIHRlbXBsYXRlOiAnPG5nLWNvbnRlbnQvPicsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBwcm92aWRlcnM6IFtcbiAgICB7IHByb3ZpZGU6IFRoUGFzc0Jhc2UsIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IFRoRG90U2NyZWVuUGFzcykgfSxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgVGhEb3RTY3JlZW5QYXNzPFxuICBUIGV4dGVuZHMgRG90U2NyZWVuUGFzcyA9IERvdFNjcmVlblBhc3MsXG4gIFRBUkdTID0gW2NlbnRlcj86IFZlY3RvcjIsIGFuZ2xlPzogbnVtYmVyLCBzY2FsZT86IG51bWJlcl0sXG4+IGV4dGVuZHMgVGhQYXNzPFQsIFRBUkdTPiB7XG4gIHB1YmxpYyBnZXRUeXBlKCk6IFR5cGU8RG90U2NyZWVuUGFzcz4ge1xuICAgIHJldHVybiBEb3RTY3JlZW5QYXNzO1xuICB9XG5cbiAgQElucHV0KClcbiAgcHVibGljIHNldCB1bmlmb3JtcyhtYXA6IHsgW25hbWU6IHN0cmluZ106IHsgdmFsdWU6IGFueSB9IH0pIHtcbiAgICBpZiAodGhpcy5fb2JqUmVmKSB7XG4gICAgICBPYmplY3QuYXNzaWduKHRoaXMuX29ialJlZi51bmlmb3JtcywgbWFwKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgZ2V0IHVuaWZvcm1zKCk6IHsgW25hbWU6IHN0cmluZ106IHsgdmFsdWU6IGFueSB9IH0gfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9vYmpSZWY/LnVuaWZvcm1zIGFzXG4gICAgICB8IHsgW25hbWU6IHN0cmluZ106IHsgdmFsdWU6IGFueSB9IH1cbiAgICAgIHwgdW5kZWZpbmVkO1xuICB9XG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzZXQgbWF0ZXJpYWwodmFsdWU6IFNoYWRlck1hdGVyaWFsKSB7XG4gICAgaWYgKHRoaXMuX29ialJlZikge1xuICAgICAgdGhpcy5fb2JqUmVmLm1hdGVyaWFsID0gdmFsdWU7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGdldCBtYXRlcmlhbCgpOiBTaGFkZXJNYXRlcmlhbCB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX29ialJlZj8ubWF0ZXJpYWw7XG4gIH1cbiAgQElucHV0KClcbiAgcHVibGljIHNldCBmc1F1YWQodmFsdWU6IEZ1bGxTY3JlZW5RdWFkKSB7XG4gICAgaWYgKHRoaXMuX29ialJlZikge1xuICAgICAgdGhpcy5fb2JqUmVmLmZzUXVhZCA9IHZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBnZXQgZnNRdWFkKCk6IEZ1bGxTY3JlZW5RdWFkIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fb2JqUmVmPy5mc1F1YWQ7XG4gIH1cbn1cbiJdfQ==