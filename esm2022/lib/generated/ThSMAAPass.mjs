/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix */
import { ChangeDetectionStrategy, Component, Input, forwardRef, } from '@angular/core';
import { SMAAPass } from 'three/examples/jsm/postprocessing/SMAAPass.js';
import { ThPassBase } from '../ThPassBase';
import { ThPass } from './ThPass';
import * as i0 from "@angular/core";
export class ThSMAAPass extends ThPass {
    getType() {
        return SMAAPass;
    }
    set edgesRT(value) {
        if (this._objRef) {
            this._objRef.edgesRT = value;
        }
    }
    get edgesRT() {
        return this._objRef?.edgesRT;
    }
    set weightsRT(value) {
        if (this._objRef) {
            this._objRef.weightsRT = value;
        }
    }
    get weightsRT() {
        return this._objRef?.weightsRT;
    }
    set areaTexture(value) {
        if (this._objRef) {
            this._objRef.areaTexture = value;
        }
    }
    get areaTexture() {
        return this._objRef?.areaTexture;
    }
    set searchTexture(value) {
        if (this._objRef) {
            this._objRef.searchTexture = value;
        }
    }
    get searchTexture() {
        return this._objRef?.searchTexture;
    }
    set uniformsEdges(value) {
        if (this._objRef) {
            this._objRef.uniformsEdges = value;
        }
    }
    get uniformsEdges() {
        return this._objRef?.uniformsEdges;
    }
    set materialEdges(value) {
        if (this._objRef) {
            this._objRef.materialEdges = value;
        }
    }
    get materialEdges() {
        return this._objRef?.materialEdges;
    }
    set uniformsWeights(value) {
        if (this._objRef) {
            this._objRef.uniformsWeights = value;
        }
    }
    get uniformsWeights() {
        return this._objRef?.uniformsWeights;
    }
    set materialWeights(value) {
        if (this._objRef) {
            this._objRef.materialWeights = value;
        }
    }
    get materialWeights() {
        return this._objRef?.materialWeights;
    }
    set uniformsBlend(value) {
        if (this._objRef) {
            this._objRef.uniformsBlend = value;
        }
    }
    get uniformsBlend() {
        return this._objRef?.uniformsBlend;
    }
    set materialBlend(value) {
        if (this._objRef) {
            this._objRef.materialBlend = value;
        }
    }
    get materialBlend() {
        return this._objRef?.materialBlend;
    }
    set fsQuad(value) {
        if (this._objRef) {
            this._objRef.fsQuad = value;
        }
    }
    get fsQuad() {
        return this._objRef?.fsQuad;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThSMAAPass, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.1.2", type: ThSMAAPass, selector: "th-sMAAPass", inputs: { edgesRT: "edgesRT", weightsRT: "weightsRT", areaTexture: "areaTexture", searchTexture: "searchTexture", uniformsEdges: "uniformsEdges", materialEdges: "materialEdges", uniformsWeights: "uniformsWeights", materialWeights: "materialWeights", uniformsBlend: "uniformsBlend", materialBlend: "materialBlend", fsQuad: "fsQuad" }, providers: [
            { provide: ThPassBase, useExisting: forwardRef(() => ThSMAAPass) },
        ], usesInheritance: true, ngImport: i0, template: '<ng-content/>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThSMAAPass, decorators: [{
            type: Component,
            args: [{
                    selector: 'th-sMAAPass',
                    template: '<ng-content/>',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    providers: [
                        { provide: ThPassBase, useExisting: forwardRef(() => ThSMAAPass) },
                    ],
                }]
        }], propDecorators: { edgesRT: [{
                type: Input
            }], weightsRT: [{
                type: Input
            }], areaTexture: [{
                type: Input
            }], searchTexture: [{
                type: Input
            }], uniformsEdges: [{
                type: Input
            }], materialEdges: [{
                type: Input
            }], uniformsWeights: [{
                type: Input
            }], materialWeights: [{
                type: Input
            }], uniformsBlend: [{
                type: Input
            }], materialBlend: [{
                type: Input
            }], fsQuad: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGhTTUFBUGFzcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC10aHJlZS9zcmMvbGliL2dlbmVyYXRlZC9UaFNNQUFQYXNzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGlEQUFpRDtBQUNqRCx5REFBeUQ7QUFDekQseUNBQXlDO0FBQ3pDLCtGQUErRjtBQUMvRixPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxLQUFLLEVBRUwsVUFBVSxHQUNYLE1BQU0sZUFBZSxDQUFDO0FBR3ZCLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSwrQ0FBK0MsQ0FBQztBQUN6RSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxVQUFVLENBQUM7O0FBVWxDLE1BQU0sT0FBTyxVQUdYLFNBQVEsTUFBZ0I7SUFDakIsT0FBTztRQUNaLE9BQU8sUUFBUSxDQUFDO0lBQ2xCLENBQUM7SUFFRCxJQUNXLE9BQU8sQ0FBQyxLQUF3QjtRQUN6QyxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUNqQixJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7UUFDL0IsQ0FBQztJQUNILENBQUM7SUFFRCxJQUFXLE9BQU87UUFDaEIsT0FBTyxJQUFJLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQztJQUMvQixDQUFDO0lBQ0QsSUFDVyxTQUFTLENBQUMsS0FBd0I7UUFDM0MsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDakIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1FBQ2pDLENBQUM7SUFDSCxDQUFDO0lBRUQsSUFBVyxTQUFTO1FBQ2xCLE9BQU8sSUFBSSxDQUFDLE9BQU8sRUFBRSxTQUFTLENBQUM7SUFDakMsQ0FBQztJQUNELElBQ1csV0FBVyxDQUFDLEtBQWM7UUFD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QUFVLENBQUMsR0FBRyxFQUFFLENBQUMsVUFBVSxDQUFDLEVBQUU7U0FDbkUsaURBSlMsZUFBZTs7MkZBTWQsVUFBVTtrQkFSdEIsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsYUFBYTtvQkFDdkIsUUFBUSxFQUFFLGVBQWU7b0JBQ3pCLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO29CQUMvQyxTQUFTLEVBQUU7d0JBQ1QsRUFBRSxPQUFPLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRSxVQUFVLENBQUMsR0FBRyxFQUFFLFdBQVcsQ0FBQyxFQUFFO3FCQUNuRTtpQkFDRjs4QkFVWSxPQUFPO3NCQURqQixLQUFLO2dCQVdLLFNBQVM7c0JBRG5CLEtBQUs7Z0JBV0ssV0FBVztzQkFEckIsS0FBSztnQkFXSyxhQUFhO3NCQUR2QixLQUFLO2dCQVdLLGFBQWE7c0JBRHZCLEtBQUs7Z0JBV0ssYUFBYTtzQkFEdkIsS0FBSztnQkFXSyxlQUFlO3NCQUR6QixLQUFLO2dCQVdLLGVBQWU7c0JBRHpCLEtBQUs7Z0JBV0ssYUFBYTtzQkFEdkIsS0FBSztnQkFXSyxhQUFhO3NCQUR2QixLQUFLO2dCQVdLLE1BQU07c0JBRGhCLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBAdHlwZXNjcmlwdC1lc2xpbnQvYmFuLXR5cGVzICovXG4vKiBlc2xpbnQtZGlzYWJsZSBAdHlwZXNjcmlwdC1lc2xpbnQvbmFtaW5nLWNvbnZlbnRpb24gKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vLXVuZGVyc2NvcmUtZGFuZ2xlICovXG4vKiBlc2xpbnQtZGlzYWJsZSBAYW5ndWxhci1lc2xpbnQvY29tcG9uZW50LXNlbGVjdG9yLCBAYW5ndWxhci1lc2xpbnQvY29tcG9uZW50LWNsYXNzLXN1ZmZpeCAqL1xuaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENvbXBvbmVudCxcbiAgSW5wdXQsXG4gIFR5cGUsXG4gIGZvcndhcmRSZWYsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU2hhZGVyTWF0ZXJpYWwsIFRleHR1cmUsIFdlYkdMUmVuZGVyVGFyZ2V0IH0gZnJvbSAndGhyZWUnO1xuaW1wb3J0IHsgRnVsbFNjcmVlblF1YWQgfSBmcm9tICd0aHJlZS9leGFtcGxlcy9qc20vcG9zdHByb2Nlc3NpbmcvUGFzcy5qcyc7XG5pbXBvcnQgeyBTTUFBUGFzcyB9IGZyb20gJ3RocmVlL2V4YW1wbGVzL2pzbS9wb3N0cHJvY2Vzc2luZy9TTUFBUGFzcy5qcyc7XG5pbXBvcnQgeyBUaFBhc3NCYXNlIH0gZnJvbSAnLi4vVGhQYXNzQmFzZSc7XG5pbXBvcnQgeyBUaFBhc3MgfSBmcm9tICcuL1RoUGFzcyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3RoLXNNQUFQYXNzJyxcbiAgdGVtcGxhdGU6ICc8bmctY29udGVudC8+JyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHByb3ZpZGVyczogW1xuICAgIHsgcHJvdmlkZTogVGhQYXNzQmFzZSwgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gVGhTTUFBUGFzcykgfSxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgVGhTTUFBUGFzczxcbiAgVCBleHRlbmRzIFNNQUFQYXNzID0gU01BQVBhc3MsXG4gIFRBUkdTID0gW3dpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyXSxcbj4gZXh0ZW5kcyBUaFBhc3M8VCwgVEFSR1M+IHtcbiAgcHVibGljIGdldFR5cGUoKTogVHlwZTxTTUFBUGFzcz4ge1xuICAgIHJldHVybiBTTUFBUGFzcztcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzZXQgZWRnZXNSVCh2YWx1ZTogV2ViR0xSZW5kZXJUYXJnZXQpIHtcbiAgICBpZiAodGhpcy5fb2JqUmVmKSB7XG4gICAgICB0aGlzLl9vYmpSZWYuZWRnZXNSVCA9IHZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBnZXQgZWRnZXNSVCgpOiBXZWJHTFJlbmRlclRhcmdldCB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX29ialJlZj8uZWRnZXNSVDtcbiAgfVxuICBASW5wdXQoKVxuICBwdWJsaWMgc2V0IHdlaWdodHNSVCh2YWx1ZTogV2ViR0xSZW5kZXJUYXJnZXQpIHtcbiAgICBpZiAodGhpcy5fb2JqUmVmKSB7XG4gICAgICB0aGlzLl9vYmpSZWYud2VpZ2h0c1JUID0gdmFsdWU7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGdldCB3ZWlnaHRzUlQoKTogV2ViR0xSZW5kZXJUYXJnZXQgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9vYmpSZWY/LndlaWdodHNSVDtcbiAgfVxuICBASW5wdXQoKVxuICBwdWJsaWMgc2V0IGFyZWFUZXh0dXJlKHZhbHVlOiBUZXh0dXJlKSB7XG4gICAgaWYgKHRoaXMuX29ialJlZikge1xuICAgICAgdGhpcy5fb2JqUmVmLmFyZWFUZXh0dXJlID0gdmFsdWU7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGdldCBhcmVhVGV4dHVyZSgpOiBUZXh0dXJlIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fb2JqUmVmPy5hcmVhVGV4dHVyZTtcbiAgfVxuICBASW5wdXQoKVxuICBwdWJsaWMgc2V0IHNlYXJjaFRleHR1cmUodmFsdWU6IFRleHR1cmUpIHtcbiAgICBpZiAodGhpcy5fb2JqUmVmKSB7XG4gICAgICB0aGlzLl9vYmpSZWYuc2VhcmNoVGV4dHVyZSA9IHZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBnZXQgc2VhcmNoVGV4dHVyZSgpOiBUZXh0dXJlIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fb2JqUmVmPy5zZWFyY2hUZXh0dXJlO1xuICB9XG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzZXQgdW5pZm9ybXNFZGdlcyh2YWx1ZTogb2JqZWN0KSB7XG4gICAgaWYgKHRoaXMuX29ialJlZikge1xuICAgICAgdGhpcy5fb2JqUmVmLnVuaWZvcm1zRWRnZXMgPSB2YWx1ZTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgZ2V0IHVuaWZvcm1zRWRnZXMoKTogb2JqZWN0IHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fb2JqUmVmPy51bmlmb3Jtc0VkZ2VzO1xuICB9XG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzZXQgbWF0ZXJpYWxFZGdlcyh2YWx1ZTogU2hhZGVyTWF0ZXJpYWwpIHtcbiAgICBpZiAodGhpcy5fb2JqUmVmKSB7XG4gICAgICB0aGlzLl9vYmpSZWYubWF0ZXJpYWxFZGdlcyA9IHZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBnZXQgbWF0ZXJpYWxFZGdlcygpOiBTaGFkZXJNYXRlcmlhbCB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX29ialJlZj8ubWF0ZXJpYWxFZGdlcztcbiAgfVxuICBASW5wdXQoKVxuICBwdWJsaWMgc2V0IHVuaWZvcm1zV2VpZ2h0cyh2YWx1ZTogb2JqZWN0KSB7XG4gICAgaWYgKHRoaXMuX29ialJlZikge1xuICAgICAgdGhpcy5fb2JqUmVmLnVuaWZvcm1zV2VpZ2h0cyA9IHZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBnZXQgdW5pZm9ybXNXZWlnaHRzKCk6IG9iamVjdCB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX29ialJlZj8udW5pZm9ybXNXZWlnaHRzO1xuICB9XG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzZXQgbWF0ZXJpYWxXZWlnaHRzKHZhbHVlOiBTaGFkZXJNYXRlcmlhbCkge1xuICAgIGlmICh0aGlzLl9vYmpSZWYpIHtcbiAgICAgIHRoaXMuX29ialJlZi5tYXRlcmlhbFdlaWdodHMgPSB2YWx1ZTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgZ2V0IG1hdGVyaWFsV2VpZ2h0cygpOiBTaGFkZXJNYXRlcmlhbCB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX29ialJlZj8ubWF0ZXJpYWxXZWlnaHRzO1xuICB9XG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzZXQgdW5pZm9ybXNCbGVuZCh2YWx1ZTogb2JqZWN0KSB7XG4gICAgaWYgKHRoaXMuX29ialJlZikge1xuICAgICAgdGhpcy5fb2JqUmVmLnVuaWZvcm1zQmxlbmQgPSB2YWx1ZTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgZ2V0IHVuaWZvcm1zQmxlbmQoKTogb2JqZWN0IHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fb2JqUmVmPy51bmlmb3Jtc0JsZW5kO1xuICB9XG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzZXQgbWF0ZXJpYWxCbGVuZCh2YWx1ZTogU2hhZGVyTWF0ZXJpYWwpIHtcbiAgICBpZiAodGhpcy5fb2JqUmVmKSB7XG4gICAgICB0aGlzLl9vYmpSZWYubWF0ZXJpYWxCbGVuZCA9IHZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBnZXQgbWF0ZXJpYWxCbGVuZCgpOiBTaGFkZXJNYXRlcmlhbCB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX29ialJlZj8ubWF0ZXJpYWxCbGVuZDtcbiAgfVxuICBASW5wdXQoKVxuICBwdWJsaWMgc2V0IGZzUXVhZCh2YWx1ZTogRnVsbFNjcmVlblF1YWQpIHtcbiAgICBpZiAodGhpcy5fb2JqUmVmKSB7XG4gICAgICB0aGlzLl9vYmpSZWYuZnNRdWFkID0gdmFsdWU7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGdldCBmc1F1YWQoKTogRnVsbFNjcmVlblF1YWQgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9vYmpSZWY/LmZzUXVhZDtcbiAgfVxufVxuIl19