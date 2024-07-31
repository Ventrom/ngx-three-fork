/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix */
import { ChangeDetectionStrategy, Component, Input, forwardRef, } from '@angular/core';
import { HalftonePass, } from 'three/examples/jsm/postprocessing/HalftonePass.js';
import { ThPassBase } from '../ThPassBase';
import { ThPass } from './ThPass';
import * as i0 from "@angular/core";
export class ThHalftonePass extends ThPass {
    getType() {
        return HalftonePass;
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThHalftonePass, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.1.2", type: ThHalftonePass, selector: "th-halftonePass", inputs: { uniforms: "uniforms", material: "material", fsQuad: "fsQuad" }, providers: [
            { provide: ThPassBase, useExisting: forwardRef(() => ThHalftonePass) },
        ], usesInheritance: true, ngImport: i0, template: '<ng-content/>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThHalftonePass, decorators: [{
            type: Component,
            args: [{
                    selector: 'th-halftonePass',
                    template: '<ng-content/>',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    providers: [
                        { provide: ThPassBase, useExisting: forwardRef(() => ThHalftonePass) },
                    ],
                }]
        }], propDecorators: { uniforms: [{
                type: Input
            }], material: [{
                type: Input
            }], fsQuad: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGhIYWxmdG9uZVBhc3MuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtdGhyZWUvc3JjL2xpYi9nZW5lcmF0ZWQvVGhIYWxmdG9uZVBhc3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsaURBQWlEO0FBQ2pELHlEQUF5RDtBQUN6RCx5Q0FBeUM7QUFDekMsK0ZBQStGO0FBQy9GLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULEtBQUssRUFFTCxVQUFVLEdBQ1gsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUNMLFlBQVksR0FFYixNQUFNLG1EQUFtRCxDQUFDO0FBRTNELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLFVBQVUsQ0FBQzs7QUFVbEMsTUFBTSxPQUFPLGNBR1gsU0FBUSxNQUFnQjtJQUNqQixPQUFPO1FBQ1osT0FBTyxZQUFZLENBQUM7SUFDdEIsQ0FBQztJQUVELElBQ1csUUFBUSxDQUFDLEdBQXVDO1FBQ3pELElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ2pCLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDNUMsQ0FBQztJQUNILENBQUM7SUFFRCxJQUFXLFFBQVE7UUFDakIsT0FBTyxJQUFJLENBQUMsT0FBTyxFQUFFLFFBRVIsQ0FBQztJQUNoQixDQUFDO0lBQ0QsSUFDVyxRQUFRLENBQUMsS0FBcUI7UUFDdkMsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDakIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO1FBQ2hDLENBQUM7SUFDSCxDQUFDO0lBRUQsSUFBVyxRQUFRO1FBQ2pCLE9BQU8sSUFBSSxDQUFDLE9BQU8sRUFBRSxRQUFRLENBQUM7SUFDaEMsQ0FBQztJQUNELElBQ1csTUFBTSxDQUFDLEtBQXFCO1FBQ3JDLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ2pCLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUM5QixDQUFDO0lBQ0gsQ0FBQztJQUVELElBQVcsTUFBTTtRQUNmLE9BQU8sSUFBSSxDQUFDLE9BQU8sRUFBRSxNQUFNLENBQUM7SUFDOUIsQ0FBQzs4R0F2Q1UsY0FBYztrR0FBZCxjQUFjLG9IQUpkO1lBQ1QsRUFBRSxPQUFPLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRSxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsY0FBYyxDQUFDLEVBQUU7U0FDdkUsaURBSlMsZUFBZTs7MkZBTWQsY0FBYztrQkFSMUIsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsaUJBQWlCO29CQUMzQixRQUFRLEVBQUUsZUFBZTtvQkFDekIsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07b0JBQy9DLFNBQVMsRUFBRTt3QkFDVCxFQUFFLE9BQU8sRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFLFVBQVUsQ0FBQyxHQUFHLEVBQUUsZUFBZSxDQUFDLEVBQUU7cUJBQ3ZFO2lCQUNGOzhCQVVZLFFBQVE7c0JBRGxCLEtBQUs7Z0JBYUssUUFBUTtzQkFEbEIsS0FBSztnQkFXSyxNQUFNO3NCQURoQixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgQHR5cGVzY3JpcHQtZXNsaW50L2Jhbi10eXBlcyAqL1xuLyogZXNsaW50LWRpc2FibGUgQHR5cGVzY3JpcHQtZXNsaW50L25hbWluZy1jb252ZW50aW9uICovXG4vKiBlc2xpbnQtZGlzYWJsZSBuby11bmRlcnNjb3JlLWRhbmdsZSAqL1xuLyogZXNsaW50LWRpc2FibGUgQGFuZ3VsYXItZXNsaW50L2NvbXBvbmVudC1zZWxlY3RvciwgQGFuZ3VsYXItZXNsaW50L2NvbXBvbmVudC1jbGFzcy1zdWZmaXggKi9cbmltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDb21wb25lbnQsXG4gIElucHV0LFxuICBUeXBlLFxuICBmb3J3YXJkUmVmLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFNoYWRlck1hdGVyaWFsIH0gZnJvbSAndGhyZWUnO1xuaW1wb3J0IHtcbiAgSGFsZnRvbmVQYXNzLFxuICBIYWxmdG9uZVBhc3NQYXJhbWV0ZXJzLFxufSBmcm9tICd0aHJlZS9leGFtcGxlcy9qc20vcG9zdHByb2Nlc3NpbmcvSGFsZnRvbmVQYXNzLmpzJztcbmltcG9ydCB7IEZ1bGxTY3JlZW5RdWFkIH0gZnJvbSAndGhyZWUvZXhhbXBsZXMvanNtL3Bvc3Rwcm9jZXNzaW5nL1Bhc3MuanMnO1xuaW1wb3J0IHsgVGhQYXNzQmFzZSB9IGZyb20gJy4uL1RoUGFzc0Jhc2UnO1xuaW1wb3J0IHsgVGhQYXNzIH0gZnJvbSAnLi9UaFBhc3MnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0aC1oYWxmdG9uZVBhc3MnLFxuICB0ZW1wbGF0ZTogJzxuZy1jb250ZW50Lz4nLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgcHJvdmlkZXJzOiBbXG4gICAgeyBwcm92aWRlOiBUaFBhc3NCYXNlLCB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBUaEhhbGZ0b25lUGFzcykgfSxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgVGhIYWxmdG9uZVBhc3M8XG4gIFQgZXh0ZW5kcyBIYWxmdG9uZVBhc3MgPSBIYWxmdG9uZVBhc3MsXG4gIFRBUkdTID0gW3dpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyLCBwYXJhbXM6IEhhbGZ0b25lUGFzc1BhcmFtZXRlcnNdLFxuPiBleHRlbmRzIFRoUGFzczxULCBUQVJHUz4ge1xuICBwdWJsaWMgZ2V0VHlwZSgpOiBUeXBlPEhhbGZ0b25lUGFzcz4ge1xuICAgIHJldHVybiBIYWxmdG9uZVBhc3M7XG4gIH1cblxuICBASW5wdXQoKVxuICBwdWJsaWMgc2V0IHVuaWZvcm1zKG1hcDogeyBbbmFtZTogc3RyaW5nXTogeyB2YWx1ZTogYW55IH0gfSkge1xuICAgIGlmICh0aGlzLl9vYmpSZWYpIHtcbiAgICAgIE9iamVjdC5hc3NpZ24odGhpcy5fb2JqUmVmLnVuaWZvcm1zLCBtYXApO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBnZXQgdW5pZm9ybXMoKTogeyBbbmFtZTogc3RyaW5nXTogeyB2YWx1ZTogYW55IH0gfSB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX29ialJlZj8udW5pZm9ybXMgYXNcbiAgICAgIHwgeyBbbmFtZTogc3RyaW5nXTogeyB2YWx1ZTogYW55IH0gfVxuICAgICAgfCB1bmRlZmluZWQ7XG4gIH1cbiAgQElucHV0KClcbiAgcHVibGljIHNldCBtYXRlcmlhbCh2YWx1ZTogU2hhZGVyTWF0ZXJpYWwpIHtcbiAgICBpZiAodGhpcy5fb2JqUmVmKSB7XG4gICAgICB0aGlzLl9vYmpSZWYubWF0ZXJpYWwgPSB2YWx1ZTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgZ2V0IG1hdGVyaWFsKCk6IFNoYWRlck1hdGVyaWFsIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fb2JqUmVmPy5tYXRlcmlhbDtcbiAgfVxuICBASW5wdXQoKVxuICBwdWJsaWMgc2V0IGZzUXVhZCh2YWx1ZTogRnVsbFNjcmVlblF1YWQpIHtcbiAgICBpZiAodGhpcy5fb2JqUmVmKSB7XG4gICAgICB0aGlzLl9vYmpSZWYuZnNRdWFkID0gdmFsdWU7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGdldCBmc1F1YWQoKTogRnVsbFNjcmVlblF1YWQgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9vYmpSZWY/LmZzUXVhZDtcbiAgfVxufVxuIl19