/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix */
import { ChangeDetectionStrategy, Component, Input, forwardRef, } from '@angular/core';
import { AfterimagePass } from 'three/examples/jsm/postprocessing/AfterimagePass.js';
import { ThPassBase } from '../ThPassBase';
import { ThPass } from './ThPass';
import * as i0 from "@angular/core";
export class ThAfterimagePass extends ThPass {
    getType() {
        return AfterimagePass;
    }
    set shader(value) {
        if (this._objRef) {
            this._objRef.shader = value;
        }
    }
    get shader() {
        return this._objRef?.shader;
    }
    set uniforms(map) {
        if (this._objRef) {
            Object.assign(this._objRef.uniforms, map);
        }
    }
    get uniforms() {
        return this._objRef?.uniforms;
    }
    set textureComp(value) {
        if (this._objRef) {
            this._objRef.textureComp = value;
        }
    }
    get textureComp() {
        return this._objRef?.textureComp;
    }
    set textureOld(value) {
        if (this._objRef) {
            this._objRef.textureOld = value;
        }
    }
    get textureOld() {
        return this._objRef?.textureOld;
    }
    set shaderMaterial(value) {
        if (this._objRef) {
            this._objRef.shaderMaterial = value;
        }
    }
    get shaderMaterial() {
        return this._objRef?.shaderMaterial;
    }
    set compFsQuad(value) {
        if (this._objRef) {
            this._objRef.compFsQuad = value;
        }
    }
    get compFsQuad() {
        return this._objRef?.compFsQuad;
    }
    set copyFsQuad(value) {
        if (this._objRef) {
            this._objRef.copyFsQuad = value;
        }
    }
    get copyFsQuad() {
        return this._objRef?.copyFsQuad;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThAfterimagePass, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.1.2", type: ThAfterimagePass, selector: "th-afterimagePass", inputs: { shader: "shader", uniforms: "uniforms", textureComp: "textureComp", textureOld: "textureOld", shaderMaterial: "shaderMaterial", compFsQuad: "compFsQuad", copyFsQuad: "copyFsQuad" }, providers: [
            { provide: ThPassBase, useExisting: forwardRef(() => ThAfterimagePass) },
        ], usesInheritance: true, ngImport: i0, template: '<ng-content/>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThAfterimagePass, decorators: [{
            type: Component,
            args: [{
                    selector: 'th-afterimagePass',
                    template: '<ng-content/>',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    providers: [
                        { provide: ThPassBase, useExisting: forwardRef(() => ThAfterimagePass) },
                    ],
                }]
        }], propDecorators: { shader: [{
                type: Input
            }], uniforms: [{
                type: Input
            }], textureComp: [{
                type: Input
            }], textureOld: [{
                type: Input
            }], shaderMaterial: [{
                type: Input
            }], compFsQuad: [{
                type: Input
            }], copyFsQuad: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGhBZnRlcmltYWdlUGFzcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC10aHJlZS9zcmMvbGliL2dlbmVyYXRlZC9UaEFmdGVyaW1hZ2VQYXNzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGlEQUFpRDtBQUNqRCx5REFBeUQ7QUFDekQseUNBQXlDO0FBQ3pDLCtGQUErRjtBQUMvRixPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxLQUFLLEVBRUwsVUFBVSxHQUNYLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxxREFBcUQsQ0FBQztBQUVyRixPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxVQUFVLENBQUM7O0FBVWxDLE1BQU0sT0FBTyxnQkFHWCxTQUFRLE1BQWdCO0lBQ2pCLE9BQU87UUFDWixPQUFPLGNBQWMsQ0FBQztJQUN4QixDQUFDO0lBRUQsSUFDVyxNQUFNLENBQUMsS0FBYTtRQUM3QixJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUNqQixJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDOUIsQ0FBQztJQUNILENBQUM7SUFFRCxJQUFXLE1BQU07UUFDZixPQUFPLElBQUksQ0FBQyxPQUFPLEVBQUUsTUFBTSxDQUFDO0lBQzlCLENBQUM7SUFDRCxJQUNXLFFBQVEsQ0FBQyxHQUF1QztRQUN6RCxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUNqQixNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQzVDLENBQUM7SUFDSCxDQUFDO0lBRUQsSUFBVyxRQUFRO1FBQ2pCLE9BQU8sSUFBSSxDQUFDLE9BQU8sRUFBRSxRQUVSLENBQUM7SUFDaEIsQ0FBQztJQUNELElBQ1csV0FBVyxDQUFDLEtBQXdCO1FBQzdDLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ2pCLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQztRQUNuQyxDQUFDO0lBQ0gsQ0FBQztJQUVELElBQVcsV0FBVztRQUNwQixPQUFPLElBQUksQ0FBQyxPQUFPLEVBQUUsV0FBVyxDQUFDO0lBQ25DLENBQUM7SUFDRCxJQUNXLFVBQVUsQ0FBQyxLQUF3QjtRQUM1QyxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUNqQixJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7UUFDbEMsQ0FBQztJQUNILENBQUM7SUFFRCxJQUFXLFVBQVU7UUFDbkIsT0FBTyxJQUFJLENBQUMsT0FBTyxFQUFFLFVBQVUsQ0FBQztJQUNsQyxDQUFDO0lBQ0QsSUFDVyxjQUFjLENBQUMsS0FBcUI7UUFDN0MsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDakIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxjQUFjLEdBQUcsS0FBSyxDQUFDO1FBQ3RDLENBQUM7SUFDSCxDQUFDO0lBRUQsSUFBVyxjQUFjO1FBQ3ZCLE9BQU8sSUFBSSxDQUFDLE9BQU8sRUFBRSxjQUFjLENBQUM7SUFDdEMsQ0FBQztJQUNELElBQ1csVUFBVSxDQUFDLEtBQXFCO1FBQ3pDLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ2pCLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztRQUNsQyxDQUFDO0lBQ0gsQ0FBQztJQUVELElBQVcsVUFBVTtRQUNuQixPQUFPLElBQUksQ0FBQyxPQUFPLEVBQUUsVUFBVSxDQUFDO0lBQ2xDLENBQUM7SUFDRCxJQUNXLFVBQVUsQ0FBQyxLQUFxQjtRQUN6QyxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUNqQixJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7UUFDbEMsQ0FBQztJQUNILENBQUM7SUFFRCxJQUFXLFVBQVU7UUFDbkIsT0FBTyxJQUFJLENBQUMsT0FBTyxFQUFFLFVBQVUsQ0FBQztJQUNsQyxDQUFDOzhHQS9FVSxnQkFBZ0I7a0dBQWhCLGdCQUFnQiw0T0FKaEI7WUFDVCxFQUFFLE9BQU8sRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQyxFQUFFO1NBQ3pFLGlEQUpTLGVBQWU7OzJGQU1kLGdCQUFnQjtrQkFSNUIsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsbUJBQW1CO29CQUM3QixRQUFRLEVBQUUsZUFBZTtvQkFDekIsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07b0JBQy9DLFNBQVMsRUFBRTt3QkFDVCxFQUFFLE9BQU8sRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFLFVBQVUsQ0FBQyxHQUFHLEVBQUUsaUJBQWlCLENBQUMsRUFBRTtxQkFDekU7aUJBQ0Y7OEJBVVksTUFBTTtzQkFEaEIsS0FBSztnQkFXSyxRQUFRO3NCQURsQixLQUFLO2dCQWFLLFdBQVc7c0JBRHJCLEtBQUs7Z0JBV0ssVUFBVTtzQkFEcEIsS0FBSztnQkFXSyxjQUFjO3NCQUR4QixLQUFLO2dCQVdLLFVBQVU7c0JBRHBCLEtBQUs7Z0JBV0ssVUFBVTtzQkFEcEIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIEB0eXBlc2NyaXB0LWVzbGludC9iYW4tdHlwZXMgKi9cbi8qIGVzbGludC1kaXNhYmxlIEB0eXBlc2NyaXB0LWVzbGludC9uYW1pbmctY29udmVudGlvbiAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tdW5kZXJzY29yZS1kYW5nbGUgKi9cbi8qIGVzbGludC1kaXNhYmxlIEBhbmd1bGFyLWVzbGludC9jb21wb25lbnQtc2VsZWN0b3IsIEBhbmd1bGFyLWVzbGludC9jb21wb25lbnQtY2xhc3Mtc3VmZml4ICovXG5pbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ29tcG9uZW50LFxuICBJbnB1dCxcbiAgVHlwZSxcbiAgZm9yd2FyZFJlZixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTaGFkZXJNYXRlcmlhbCwgV2ViR0xSZW5kZXJUYXJnZXQgfSBmcm9tICd0aHJlZSc7XG5pbXBvcnQgeyBBZnRlcmltYWdlUGFzcyB9IGZyb20gJ3RocmVlL2V4YW1wbGVzL2pzbS9wb3N0cHJvY2Vzc2luZy9BZnRlcmltYWdlUGFzcy5qcyc7XG5pbXBvcnQgeyBGdWxsU2NyZWVuUXVhZCB9IGZyb20gJ3RocmVlL2V4YW1wbGVzL2pzbS9wb3N0cHJvY2Vzc2luZy9QYXNzLmpzJztcbmltcG9ydCB7IFRoUGFzc0Jhc2UgfSBmcm9tICcuLi9UaFBhc3NCYXNlJztcbmltcG9ydCB7IFRoUGFzcyB9IGZyb20gJy4vVGhQYXNzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndGgtYWZ0ZXJpbWFnZVBhc3MnLFxuICB0ZW1wbGF0ZTogJzxuZy1jb250ZW50Lz4nLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgcHJvdmlkZXJzOiBbXG4gICAgeyBwcm92aWRlOiBUaFBhc3NCYXNlLCB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBUaEFmdGVyaW1hZ2VQYXNzKSB9LFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBUaEFmdGVyaW1hZ2VQYXNzPFxuICBUIGV4dGVuZHMgQWZ0ZXJpbWFnZVBhc3MgPSBBZnRlcmltYWdlUGFzcyxcbiAgVEFSR1MgPSAvKiBkYW1wPyAqLyBudW1iZXIsXG4+IGV4dGVuZHMgVGhQYXNzPFQsIFRBUkdTPiB7XG4gIHB1YmxpYyBnZXRUeXBlKCk6IFR5cGU8QWZ0ZXJpbWFnZVBhc3M+IHtcbiAgICByZXR1cm4gQWZ0ZXJpbWFnZVBhc3M7XG4gIH1cblxuICBASW5wdXQoKVxuICBwdWJsaWMgc2V0IHNoYWRlcih2YWx1ZTogb2JqZWN0KSB7XG4gICAgaWYgKHRoaXMuX29ialJlZikge1xuICAgICAgdGhpcy5fb2JqUmVmLnNoYWRlciA9IHZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBnZXQgc2hhZGVyKCk6IG9iamVjdCB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX29ialJlZj8uc2hhZGVyO1xuICB9XG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzZXQgdW5pZm9ybXMobWFwOiB7IFtuYW1lOiBzdHJpbmddOiB7IHZhbHVlOiBhbnkgfSB9KSB7XG4gICAgaWYgKHRoaXMuX29ialJlZikge1xuICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLl9vYmpSZWYudW5pZm9ybXMsIG1hcCk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGdldCB1bmlmb3JtcygpOiB7IFtuYW1lOiBzdHJpbmddOiB7IHZhbHVlOiBhbnkgfSB9IHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fb2JqUmVmPy51bmlmb3JtcyBhc1xuICAgICAgfCB7IFtuYW1lOiBzdHJpbmddOiB7IHZhbHVlOiBhbnkgfSB9XG4gICAgICB8IHVuZGVmaW5lZDtcbiAgfVxuICBASW5wdXQoKVxuICBwdWJsaWMgc2V0IHRleHR1cmVDb21wKHZhbHVlOiBXZWJHTFJlbmRlclRhcmdldCkge1xuICAgIGlmICh0aGlzLl9vYmpSZWYpIHtcbiAgICAgIHRoaXMuX29ialJlZi50ZXh0dXJlQ29tcCA9IHZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBnZXQgdGV4dHVyZUNvbXAoKTogV2ViR0xSZW5kZXJUYXJnZXQgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9vYmpSZWY/LnRleHR1cmVDb21wO1xuICB9XG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzZXQgdGV4dHVyZU9sZCh2YWx1ZTogV2ViR0xSZW5kZXJUYXJnZXQpIHtcbiAgICBpZiAodGhpcy5fb2JqUmVmKSB7XG4gICAgICB0aGlzLl9vYmpSZWYudGV4dHVyZU9sZCA9IHZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBnZXQgdGV4dHVyZU9sZCgpOiBXZWJHTFJlbmRlclRhcmdldCB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX29ialJlZj8udGV4dHVyZU9sZDtcbiAgfVxuICBASW5wdXQoKVxuICBwdWJsaWMgc2V0IHNoYWRlck1hdGVyaWFsKHZhbHVlOiBTaGFkZXJNYXRlcmlhbCkge1xuICAgIGlmICh0aGlzLl9vYmpSZWYpIHtcbiAgICAgIHRoaXMuX29ialJlZi5zaGFkZXJNYXRlcmlhbCA9IHZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBnZXQgc2hhZGVyTWF0ZXJpYWwoKTogU2hhZGVyTWF0ZXJpYWwgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9vYmpSZWY/LnNoYWRlck1hdGVyaWFsO1xuICB9XG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzZXQgY29tcEZzUXVhZCh2YWx1ZTogRnVsbFNjcmVlblF1YWQpIHtcbiAgICBpZiAodGhpcy5fb2JqUmVmKSB7XG4gICAgICB0aGlzLl9vYmpSZWYuY29tcEZzUXVhZCA9IHZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBnZXQgY29tcEZzUXVhZCgpOiBGdWxsU2NyZWVuUXVhZCB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX29ialJlZj8uY29tcEZzUXVhZDtcbiAgfVxuICBASW5wdXQoKVxuICBwdWJsaWMgc2V0IGNvcHlGc1F1YWQodmFsdWU6IEZ1bGxTY3JlZW5RdWFkKSB7XG4gICAgaWYgKHRoaXMuX29ialJlZikge1xuICAgICAgdGhpcy5fb2JqUmVmLmNvcHlGc1F1YWQgPSB2YWx1ZTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgZ2V0IGNvcHlGc1F1YWQoKTogRnVsbFNjcmVlblF1YWQgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9vYmpSZWY/LmNvcHlGc1F1YWQ7XG4gIH1cbn1cbiJdfQ==