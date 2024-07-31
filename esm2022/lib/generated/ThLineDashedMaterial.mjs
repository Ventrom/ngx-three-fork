/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix */
import { ChangeDetectionStrategy, Component, Input, forwardRef, } from '@angular/core';
import { LineDashedMaterial } from 'three';
import { ThLineBasicMaterial } from './ThLineBasicMaterial';
import { ThMaterial } from './ThMaterial';
import * as i0 from "@angular/core";
export class ThLineDashedMaterial extends ThLineBasicMaterial {
    getType() {
        return LineDashedMaterial;
    }
    get isLineDashedMaterial() {
        return this._objRef?.isLineDashedMaterial;
    }
    set type(value) {
        if (this._objRef) {
            this._objRef.type = value;
        }
    }
    get type() {
        return this._objRef?.type;
    }
    set scale(value) {
        if (this._objRef) {
            this._objRef.scale = value;
        }
    }
    get scale() {
        return this._objRef?.scale;
    }
    set dashSize(value) {
        if (this._objRef) {
            this._objRef.dashSize = value;
        }
    }
    get dashSize() {
        return this._objRef?.dashSize;
    }
    set gapSize(value) {
        if (this._objRef) {
            this._objRef.gapSize = value;
        }
    }
    get gapSize() {
        return this._objRef?.gapSize;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThLineDashedMaterial, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.1.2", type: ThLineDashedMaterial, selector: "th-lineDashedMaterial", inputs: { type: "type", scale: "scale", dashSize: "dashSize", gapSize: "gapSize" }, providers: [
            {
                provide: ThMaterial,
                useExisting: forwardRef(() => ThLineDashedMaterial),
            },
        ], usesInheritance: true, ngImport: i0, template: '<ng-content/>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThLineDashedMaterial, decorators: [{
            type: Component,
            args: [{
                    selector: 'th-lineDashedMaterial',
                    template: '<ng-content/>',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    providers: [
                        {
                            provide: ThMaterial,
                            useExisting: forwardRef(() => ThLineDashedMaterial),
                        },
                    ],
                }]
        }], propDecorators: { type: [{
                type: Input
            }], scale: [{
                type: Input
            }], dashSize: [{
                type: Input
            }], gapSize: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGhMaW5lRGFzaGVkTWF0ZXJpYWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtdGhyZWUvc3JjL2xpYi9nZW5lcmF0ZWQvVGhMaW5lRGFzaGVkTWF0ZXJpYWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEseURBQXlEO0FBQ3pELHlDQUF5QztBQUN6QywrRkFBK0Y7QUFDL0YsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixTQUFTLEVBQ1QsS0FBSyxFQUVMLFVBQVUsR0FDWCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsa0JBQWtCLEVBQWdDLE1BQU0sT0FBTyxDQUFDO0FBQ3pFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQzVELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxjQUFjLENBQUM7O0FBYTFDLE1BQU0sT0FBTyxvQkFHWCxTQUFRLG1CQUE2QjtJQUM5QixPQUFPO1FBQ1osT0FBTyxrQkFBa0IsQ0FBQztJQUM1QixDQUFDO0lBRUQsSUFBVyxvQkFBb0I7UUFDN0IsT0FBTyxJQUFJLENBQUMsT0FBTyxFQUFFLG9CQUFvQixDQUFDO0lBQzVDLENBQUM7SUFDRCxJQUNXLElBQUksQ0FBQyxLQUFhO1FBQzNCLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ2pCLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQztRQUM1QixDQUFDO0lBQ0gsQ0FBQztJQUVELElBQVcsSUFBSTtRQUNiLE9BQU8sSUFBSSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUM7SUFDNUIsQ0FBQztJQUNELElBQ1csS0FBSyxDQUFDLEtBQWE7UUFDNUIsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDakIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQzdCLENBQUM7SUFDSCxDQUFDO0lBRUQsSUFBVyxLQUFLO1FBQ2QsT0FBTyxJQUFJLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQztJQUM3QixDQUFDO0lBQ0QsSUFDVyxRQUFRLENBQUMsS0FBYTtRQUMvQixJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUNqQixJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7UUFDaEMsQ0FBQztJQUNILENBQUM7SUFFRCxJQUFXLFFBQVE7UUFDakIsT0FBTyxJQUFJLENBQUMsT0FBTyxFQUFFLFFBQVEsQ0FBQztJQUNoQyxDQUFDO0lBQ0QsSUFDVyxPQUFPLENBQUMsS0FBYTtRQUM5QixJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUNqQixJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7UUFDL0IsQ0FBQztJQUNILENBQUM7SUFFRCxJQUFXLE9BQU87UUFDaEIsT0FBTyxJQUFJLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQztJQUMvQixDQUFDOzhHQWxEVSxvQkFBb0I7a0dBQXBCLG9CQUFvQixvSUFQcEI7WUFDVDtnQkFDRSxPQUFPLEVBQUUsVUFBVTtnQkFDbkIsV0FBVyxFQUFFLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxvQkFBb0IsQ0FBQzthQUNwRDtTQUNGLGlEQVBTLGVBQWU7OzJGQVNkLG9CQUFvQjtrQkFYaEMsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsdUJBQXVCO29CQUNqQyxRQUFRLEVBQUUsZUFBZTtvQkFDekIsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07b0JBQy9DLFNBQVMsRUFBRTt3QkFDVDs0QkFDRSxPQUFPLEVBQUUsVUFBVTs0QkFDbkIsV0FBVyxFQUFFLFVBQVUsQ0FBQyxHQUFHLEVBQUUscUJBQXFCLENBQUM7eUJBQ3BEO3FCQUNGO2lCQUNGOzhCQWFZLElBQUk7c0JBRGQsS0FBSztnQkFXSyxLQUFLO3NCQURmLEtBQUs7Z0JBV0ssUUFBUTtzQkFEbEIsS0FBSztnQkFXSyxPQUFPO3NCQURqQixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgQHR5cGVzY3JpcHQtZXNsaW50L25hbWluZy1jb252ZW50aW9uICovXG4vKiBlc2xpbnQtZGlzYWJsZSBuby11bmRlcnNjb3JlLWRhbmdsZSAqL1xuLyogZXNsaW50LWRpc2FibGUgQGFuZ3VsYXItZXNsaW50L2NvbXBvbmVudC1zZWxlY3RvciwgQGFuZ3VsYXItZXNsaW50L2NvbXBvbmVudC1jbGFzcy1zdWZmaXggKi9cbmltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDb21wb25lbnQsXG4gIElucHV0LFxuICBUeXBlLFxuICBmb3J3YXJkUmVmLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IExpbmVEYXNoZWRNYXRlcmlhbCwgTGluZURhc2hlZE1hdGVyaWFsUGFyYW1ldGVycyB9IGZyb20gJ3RocmVlJztcbmltcG9ydCB7IFRoTGluZUJhc2ljTWF0ZXJpYWwgfSBmcm9tICcuL1RoTGluZUJhc2ljTWF0ZXJpYWwnO1xuaW1wb3J0IHsgVGhNYXRlcmlhbCB9IGZyb20gJy4vVGhNYXRlcmlhbCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3RoLWxpbmVEYXNoZWRNYXRlcmlhbCcsXG4gIHRlbXBsYXRlOiAnPG5nLWNvbnRlbnQvPicsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBwcm92aWRlcnM6IFtcbiAgICB7XG4gICAgICBwcm92aWRlOiBUaE1hdGVyaWFsLFxuICAgICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gVGhMaW5lRGFzaGVkTWF0ZXJpYWwpLFxuICAgIH0sXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIFRoTGluZURhc2hlZE1hdGVyaWFsPFxuICBUIGV4dGVuZHMgTGluZURhc2hlZE1hdGVyaWFsID0gTGluZURhc2hlZE1hdGVyaWFsLFxuICBUQVJHUyA9IC8qIHBhcmFtZXRlcnM/ICovIExpbmVEYXNoZWRNYXRlcmlhbFBhcmFtZXRlcnMsXG4+IGV4dGVuZHMgVGhMaW5lQmFzaWNNYXRlcmlhbDxULCBUQVJHUz4ge1xuICBwdWJsaWMgZ2V0VHlwZSgpOiBUeXBlPExpbmVEYXNoZWRNYXRlcmlhbD4ge1xuICAgIHJldHVybiBMaW5lRGFzaGVkTWF0ZXJpYWw7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGlzTGluZURhc2hlZE1hdGVyaWFsKCk6IHRydWUgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9vYmpSZWY/LmlzTGluZURhc2hlZE1hdGVyaWFsO1xuICB9XG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzZXQgdHlwZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgaWYgKHRoaXMuX29ialJlZikge1xuICAgICAgdGhpcy5fb2JqUmVmLnR5cGUgPSB2YWx1ZTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgZ2V0IHR5cGUoKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fb2JqUmVmPy50eXBlO1xuICB9XG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzZXQgc2NhbGUodmFsdWU6IG51bWJlcikge1xuICAgIGlmICh0aGlzLl9vYmpSZWYpIHtcbiAgICAgIHRoaXMuX29ialJlZi5zY2FsZSA9IHZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBnZXQgc2NhbGUoKTogbnVtYmVyIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fb2JqUmVmPy5zY2FsZTtcbiAgfVxuICBASW5wdXQoKVxuICBwdWJsaWMgc2V0IGRhc2hTaXplKHZhbHVlOiBudW1iZXIpIHtcbiAgICBpZiAodGhpcy5fb2JqUmVmKSB7XG4gICAgICB0aGlzLl9vYmpSZWYuZGFzaFNpemUgPSB2YWx1ZTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgZ2V0IGRhc2hTaXplKCk6IG51bWJlciB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX29ialJlZj8uZGFzaFNpemU7XG4gIH1cbiAgQElucHV0KClcbiAgcHVibGljIHNldCBnYXBTaXplKHZhbHVlOiBudW1iZXIpIHtcbiAgICBpZiAodGhpcy5fb2JqUmVmKSB7XG4gICAgICB0aGlzLl9vYmpSZWYuZ2FwU2l6ZSA9IHZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBnZXQgZ2FwU2l6ZSgpOiBudW1iZXIgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9vYmpSZWY/LmdhcFNpemU7XG4gIH1cbn1cbiJdfQ==