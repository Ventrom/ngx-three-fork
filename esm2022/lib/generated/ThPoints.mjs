/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix */
import { ChangeDetectionStrategy, Component, Input, forwardRef, } from '@angular/core';
import { Points, } from 'three';
import { ThObject3D } from './ThObject3D';
import * as i0 from "@angular/core";
export class ThPoints extends ThObject3D {
    getType() {
        return Points;
    }
    get isPoints() {
        return this._objRef?.isPoints;
    }
    get type() {
        return this._objRef?.type;
    }
    set morphTargetInfluences(value) {
        if (this._objRef) {
            this._objRef.morphTargetInfluences = value;
        }
    }
    get morphTargetInfluences() {
        return this._objRef?.morphTargetInfluences;
    }
    set morphTargetDictionary(value) {
        if (this._objRef) {
            this._objRef.morphTargetDictionary = value;
        }
    }
    get morphTargetDictionary() {
        return this._objRef?.morphTargetDictionary;
    }
    set geometry(value) {
        if (this._objRef) {
            this._objRef.geometry = value;
        }
    }
    get geometry() {
        return this._objRef?.geometry;
    }
    set material(value) {
        if (this._objRef) {
            this._objRef.material = value;
        }
    }
    get material() {
        return this._objRef?.material;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThPoints, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.1.2", type: ThPoints, selector: "th-points", inputs: { morphTargetInfluences: "morphTargetInfluences", morphTargetDictionary: "morphTargetDictionary", geometry: "geometry", material: "material" }, providers: [{ provide: ThObject3D, useExisting: forwardRef(() => ThPoints) }], usesInheritance: true, ngImport: i0, template: '<ng-content/>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThPoints, decorators: [{
            type: Component,
            args: [{
                    selector: 'th-points',
                    template: '<ng-content/>',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    providers: [{ provide: ThObject3D, useExisting: forwardRef(() => ThPoints) }],
                }]
        }], propDecorators: { morphTargetInfluences: [{
                type: Input
            }], morphTargetDictionary: [{
                type: Input
            }], geometry: [{
                type: Input
            }], material: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGhQb2ludHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtdGhyZWUvc3JjL2xpYi9nZW5lcmF0ZWQvVGhQb2ludHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEseURBQXlEO0FBQ3pELHlDQUF5QztBQUN6QywrRkFBK0Y7QUFDL0YsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixTQUFTLEVBQ1QsS0FBSyxFQUVMLFVBQVUsR0FDWCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBS0wsTUFBTSxHQUNQLE1BQU0sT0FBTyxDQUFDO0FBQ2YsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGNBQWMsQ0FBQzs7QUFRMUMsTUFBTSxPQUFPLFFBVVgsU0FBUSxVQUErQjtJQUNoQyxPQUFPO1FBQ1osT0FBTyxNQUFNLENBQUM7SUFDaEIsQ0FBQztJQUVELElBQVcsUUFBUTtRQUNqQixPQUFPLElBQUksQ0FBQyxPQUFPLEVBQUUsUUFBUSxDQUFDO0lBQ2hDLENBQUM7SUFDRCxJQUFXLElBQUk7UUFDYixPQUFPLElBQUksQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDO0lBQzVCLENBQUM7SUFDRCxJQUNXLHFCQUFxQixDQUFDLEtBQTJCO1FBQzFELElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ2pCLElBQUksQ0FBQyxPQUFPLENBQUMscUJBQXFCLEdBQUcsS0FBSyxDQUFDO1FBQzdDLENBQUM7SUFDSCxDQUFDO0lBRUQsSUFBVyxxQkFBcUI7UUFDOUIsT0FBTyxJQUFJLENBQUMsT0FBTyxFQUFFLHFCQUFxQixDQUFDO0lBQzdDLENBQUM7SUFDRCxJQUNXLHFCQUFxQixDQUM5QixLQUE0QztRQUU1QyxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUNqQixJQUFJLENBQUMsT0FBTyxDQUFDLHFCQUFxQixHQUFHLEtBQUssQ0FBQztRQUM3QyxDQUFDO0lBQ0gsQ0FBQztJQUVELElBQVcscUJBQXFCO1FBRzlCLE9BQU8sSUFBSSxDQUFDLE9BQU8sRUFBRSxxQkFBcUIsQ0FBQztJQUM3QyxDQUFDO0lBQ0QsSUFDVyxRQUFRLENBQUMsS0FBZ0I7UUFDbEMsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDakIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO1FBQ2hDLENBQUM7SUFDSCxDQUFDO0lBRUQsSUFBVyxRQUFRO1FBQ2pCLE9BQU8sSUFBSSxDQUFDLE9BQU8sRUFBRSxRQUFRLENBQUM7SUFDaEMsQ0FBQztJQUNELElBQ1csUUFBUSxDQUFDLEtBQWdCO1FBQ2xDLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ2pCLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztRQUNoQyxDQUFDO0lBQ0gsQ0FBQztJQUVELElBQVcsUUFBUTtRQUNqQixPQUFPLElBQUksQ0FBQyxPQUFPLEVBQUUsUUFBUSxDQUFDO0lBQ2hDLENBQUM7OEdBaEVVLFFBQVE7a0dBQVIsUUFBUSw0TEFGUixDQUFDLEVBQUUsT0FBTyxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUUsVUFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsaURBRm5FLGVBQWU7OzJGQUlkLFFBQVE7a0JBTnBCLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLFdBQVc7b0JBQ3JCLFFBQVEsRUFBRSxlQUFlO29CQUN6QixlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtvQkFDL0MsU0FBUyxFQUFFLENBQUMsRUFBRSxPQUFPLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRSxVQUFVLENBQUMsR0FBRyxFQUFFLFNBQVMsQ0FBQyxFQUFFLENBQUM7aUJBQzlFOzhCQXVCWSxxQkFBcUI7c0JBRC9CLEtBQUs7Z0JBV0sscUJBQXFCO3NCQUQvQixLQUFLO2dCQWVLLFFBQVE7c0JBRGxCLEtBQUs7Z0JBV0ssUUFBUTtzQkFEbEIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIEB0eXBlc2NyaXB0LWVzbGludC9uYW1pbmctY29udmVudGlvbiAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tdW5kZXJzY29yZS1kYW5nbGUgKi9cbi8qIGVzbGludC1kaXNhYmxlIEBhbmd1bGFyLWVzbGludC9jb21wb25lbnQtc2VsZWN0b3IsIEBhbmd1bGFyLWVzbGludC9jb21wb25lbnQtY2xhc3Mtc3VmZml4ICovXG5pbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ29tcG9uZW50LFxuICBJbnB1dCxcbiAgVHlwZSxcbiAgZm9yd2FyZFJlZixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBCdWZmZXJHZW9tZXRyeSxcbiAgTWF0ZXJpYWwsXG4gIE5vcm1hbE9yR0xCdWZmZXJBdHRyaWJ1dGVzLFxuICBPYmplY3QzREV2ZW50TWFwLFxuICBQb2ludHMsXG59IGZyb20gJ3RocmVlJztcbmltcG9ydCB7IFRoT2JqZWN0M0QgfSBmcm9tICcuL1RoT2JqZWN0M0QnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0aC1wb2ludHMnLFxuICB0ZW1wbGF0ZTogJzxuZy1jb250ZW50Lz4nLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgcHJvdmlkZXJzOiBbeyBwcm92aWRlOiBUaE9iamVjdDNELCB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBUaFBvaW50cykgfV0sXG59KVxuZXhwb3J0IGNsYXNzIFRoUG9pbnRzPFxuICBUR2VvbWV0cnkgZXh0ZW5kcyBCdWZmZXJHZW9tZXRyeTxOb3JtYWxPckdMQnVmZmVyQXR0cmlidXRlcz4gPSBCdWZmZXJHZW9tZXRyeSxcbiAgVE1hdGVyaWFsIGV4dGVuZHMgTWF0ZXJpYWwgfCBNYXRlcmlhbFtdID0gTWF0ZXJpYWwgfCBNYXRlcmlhbFtdLFxuICBURXZlbnRNYXAgZXh0ZW5kcyBPYmplY3QzREV2ZW50TWFwID0gT2JqZWN0M0RFdmVudE1hcCxcbiAgVCBleHRlbmRzIFBvaW50czxUR2VvbWV0cnksIFRNYXRlcmlhbCwgVEV2ZW50TWFwPiA9IFBvaW50czxcbiAgICBUR2VvbWV0cnksXG4gICAgVE1hdGVyaWFsLFxuICAgIFRFdmVudE1hcFxuICA+LFxuICBUQVJHUyA9IFtnZW9tZXRyeT86IFRHZW9tZXRyeSwgbWF0ZXJpYWw/OiBUTWF0ZXJpYWxdLFxuPiBleHRlbmRzIFRoT2JqZWN0M0Q8VEV2ZW50TWFwLCBULCBUQVJHUz4ge1xuICBwdWJsaWMgZ2V0VHlwZSgpOiBUeXBlPFBvaW50czxUR2VvbWV0cnksIFRNYXRlcmlhbCwgVEV2ZW50TWFwPj4ge1xuICAgIHJldHVybiBQb2ludHM7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGlzUG9pbnRzKCk6IHRydWUgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9vYmpSZWY/LmlzUG9pbnRzO1xuICB9XG4gIHB1YmxpYyBnZXQgdHlwZSgpOiAoc3RyaW5nIHwgJ1BvaW50cycpIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fb2JqUmVmPy50eXBlO1xuICB9XG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzZXQgbW9ycGhUYXJnZXRJbmZsdWVuY2VzKHZhbHVlOiBudW1iZXJbXSB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh0aGlzLl9vYmpSZWYpIHtcbiAgICAgIHRoaXMuX29ialJlZi5tb3JwaFRhcmdldEluZmx1ZW5jZXMgPSB2YWx1ZTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgZ2V0IG1vcnBoVGFyZ2V0SW5mbHVlbmNlcygpOiAobnVtYmVyW10gfCB1bmRlZmluZWQpIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fb2JqUmVmPy5tb3JwaFRhcmdldEluZmx1ZW5jZXM7XG4gIH1cbiAgQElucHV0KClcbiAgcHVibGljIHNldCBtb3JwaFRhcmdldERpY3Rpb25hcnkoXG4gICAgdmFsdWU6IHsgW2tleTogc3RyaW5nXTogbnVtYmVyIH0gfCB1bmRlZmluZWQsXG4gICkge1xuICAgIGlmICh0aGlzLl9vYmpSZWYpIHtcbiAgICAgIHRoaXMuX29ialJlZi5tb3JwaFRhcmdldERpY3Rpb25hcnkgPSB2YWx1ZTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgZ2V0IG1vcnBoVGFyZ2V0RGljdGlvbmFyeSgpOlxuICAgIHwgKHsgW2tleTogc3RyaW5nXTogbnVtYmVyIH0gfCB1bmRlZmluZWQpXG4gICAgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9vYmpSZWY/Lm1vcnBoVGFyZ2V0RGljdGlvbmFyeTtcbiAgfVxuICBASW5wdXQoKVxuICBwdWJsaWMgc2V0IGdlb21ldHJ5KHZhbHVlOiBUR2VvbWV0cnkpIHtcbiAgICBpZiAodGhpcy5fb2JqUmVmKSB7XG4gICAgICB0aGlzLl9vYmpSZWYuZ2VvbWV0cnkgPSB2YWx1ZTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgZ2V0IGdlb21ldHJ5KCk6IFRHZW9tZXRyeSB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX29ialJlZj8uZ2VvbWV0cnk7XG4gIH1cbiAgQElucHV0KClcbiAgcHVibGljIHNldCBtYXRlcmlhbCh2YWx1ZTogVE1hdGVyaWFsKSB7XG4gICAgaWYgKHRoaXMuX29ialJlZikge1xuICAgICAgdGhpcy5fb2JqUmVmLm1hdGVyaWFsID0gdmFsdWU7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGdldCBtYXRlcmlhbCgpOiBUTWF0ZXJpYWwgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9vYmpSZWY/Lm1hdGVyaWFsO1xuICB9XG59XG4iXX0=