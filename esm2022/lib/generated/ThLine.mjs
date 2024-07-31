/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix */
import { ChangeDetectionStrategy, Component, Input, forwardRef, } from '@angular/core';
import { Line } from 'three';
import { ThObject3D } from './ThObject3D';
import * as i0 from "@angular/core";
export class ThLine extends ThObject3D {
    getType() {
        return Line;
    }
    get isLine() {
        return this._objRef?.isLine;
    }
    get type() {
        return this._objRef?.type;
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThLine, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.1.2", type: ThLine, selector: "th-line", inputs: { geometry: "geometry", material: "material", morphTargetInfluences: "morphTargetInfluences", morphTargetDictionary: "morphTargetDictionary" }, providers: [{ provide: ThObject3D, useExisting: forwardRef(() => ThLine) }], usesInheritance: true, ngImport: i0, template: '<ng-content/>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThLine, decorators: [{
            type: Component,
            args: [{
                    selector: 'th-line',
                    template: '<ng-content/>',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    providers: [{ provide: ThObject3D, useExisting: forwardRef(() => ThLine) }],
                }]
        }], propDecorators: { geometry: [{
                type: Input
            }], material: [{
                type: Input
            }], morphTargetInfluences: [{
                type: Input
            }], morphTargetDictionary: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGhMaW5lLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LXRocmVlL3NyYy9saWIvZ2VuZXJhdGVkL1RoTGluZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSx5REFBeUQ7QUFDekQseUNBQXlDO0FBQ3pDLCtGQUErRjtBQUMvRixPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxLQUFLLEVBRUwsVUFBVSxHQUNYLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBa0IsSUFBSSxFQUE4QixNQUFNLE9BQU8sQ0FBQztBQUN6RSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sY0FBYyxDQUFDOztBQVExQyxNQUFNLE9BQU8sTUFVWCxTQUFRLFVBQStCO0lBQ2hDLE9BQU87UUFDWixPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7SUFFRCxJQUFXLE1BQU07UUFDZixPQUFPLElBQUksQ0FBQyxPQUFPLEVBQUUsTUFBTSxDQUFDO0lBQzlCLENBQUM7SUFDRCxJQUFXLElBQUk7UUFDYixPQUFPLElBQUksQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDO0lBQzVCLENBQUM7SUFDRCxJQUNXLFFBQVEsQ0FBQyxLQUFnQjtRQUNsQyxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUNqQixJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7UUFDaEMsQ0FBQztJQUNILENBQUM7SUFFRCxJQUFXLFFBQVE7UUFDakIsT0FBTyxJQUFJLENBQUMsT0FBTyxFQUFFLFFBQVEsQ0FBQztJQUNoQyxDQUFDO0lBQ0QsSUFDVyxRQUFRLENBQUMsS0FBZ0I7UUFDbEMsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDakIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO1FBQ2hDLENBQUM7SUFDSCxDQUFDO0lBRUQsSUFBVyxRQUFRO1FBQ2pCLE9BQU8sSUFBSSxDQUFDLE9BQU8sRUFBRSxRQUFRLENBQUM7SUFDaEMsQ0FBQztJQUNELElBQ1cscUJBQXFCLENBQUMsS0FBMkI7UUFDMUQsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDakIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxxQkFBcUIsR0FBRyxLQUFLLENBQUM7UUFDN0MsQ0FBQztJQUNILENBQUM7SUFFRCxJQUFXLHFCQUFxQjtRQUM5QixPQUFPLElBQUksQ0FBQyxPQUFPLEVBQUUscUJBQXFCLENBQUM7SUFDN0MsQ0FBQztJQUNELElBQ1cscUJBQXFCLENBQzlCLEtBQTRDO1FBRTVDLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ2pCLElBQUksQ0FBQyxPQUFPLENBQUMscUJBQXFCLEdBQUcsS0FBSyxDQUFDO1FBQzdDLENBQUM7SUFDSCxDQUFDO0lBRUQsSUFBVyxxQkFBcUI7UUFHOUIsT0FBTyxJQUFJLENBQUMsT0FBTyxFQUFFLHFCQUFxQixDQUFDO0lBQzdDLENBQUM7OEdBaEVVLE1BQU07a0dBQU4sTUFBTSwwTEFGTixDQUFDLEVBQUUsT0FBTyxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUUsVUFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsaURBRmpFLGVBQWU7OzJGQUlkLE1BQU07a0JBTmxCLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLFNBQVM7b0JBQ25CLFFBQVEsRUFBRSxlQUFlO29CQUN6QixlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtvQkFDL0MsU0FBUyxFQUFFLENBQUMsRUFBRSxPQUFPLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRSxVQUFVLENBQUMsR0FBRyxFQUFFLE9BQU8sQ0FBQyxFQUFFLENBQUM7aUJBQzVFOzhCQXVCWSxRQUFRO3NCQURsQixLQUFLO2dCQVdLLFFBQVE7c0JBRGxCLEtBQUs7Z0JBV0sscUJBQXFCO3NCQUQvQixLQUFLO2dCQVdLLHFCQUFxQjtzQkFEL0IsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIEB0eXBlc2NyaXB0LWVzbGludC9uYW1pbmctY29udmVudGlvbiAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tdW5kZXJzY29yZS1kYW5nbGUgKi9cbi8qIGVzbGludC1kaXNhYmxlIEBhbmd1bGFyLWVzbGludC9jb21wb25lbnQtc2VsZWN0b3IsIEBhbmd1bGFyLWVzbGludC9jb21wb25lbnQtY2xhc3Mtc3VmZml4ICovXG5pbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ29tcG9uZW50LFxuICBJbnB1dCxcbiAgVHlwZSxcbiAgZm9yd2FyZFJlZixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCdWZmZXJHZW9tZXRyeSwgTGluZSwgTWF0ZXJpYWwsIE9iamVjdDNERXZlbnRNYXAgfSBmcm9tICd0aHJlZSc7XG5pbXBvcnQgeyBUaE9iamVjdDNEIH0gZnJvbSAnLi9UaE9iamVjdDNEJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndGgtbGluZScsXG4gIHRlbXBsYXRlOiAnPG5nLWNvbnRlbnQvPicsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBwcm92aWRlcnM6IFt7IHByb3ZpZGU6IFRoT2JqZWN0M0QsIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IFRoTGluZSkgfV0sXG59KVxuZXhwb3J0IGNsYXNzIFRoTGluZTxcbiAgVEdlb21ldHJ5IGV4dGVuZHMgQnVmZmVyR2VvbWV0cnkgPSBCdWZmZXJHZW9tZXRyeSxcbiAgVE1hdGVyaWFsIGV4dGVuZHMgTWF0ZXJpYWwgfCBNYXRlcmlhbFtdID0gTWF0ZXJpYWwgfCBNYXRlcmlhbFtdLFxuICBURXZlbnRNYXAgZXh0ZW5kcyBPYmplY3QzREV2ZW50TWFwID0gT2JqZWN0M0RFdmVudE1hcCxcbiAgVCBleHRlbmRzIExpbmU8VEdlb21ldHJ5LCBUTWF0ZXJpYWwsIFRFdmVudE1hcD4gPSBMaW5lPFxuICAgIFRHZW9tZXRyeSxcbiAgICBUTWF0ZXJpYWwsXG4gICAgVEV2ZW50TWFwXG4gID4sXG4gIFRBUkdTID0gW2dlb21ldHJ5PzogVEdlb21ldHJ5LCBtYXRlcmlhbD86IFRNYXRlcmlhbF0sXG4+IGV4dGVuZHMgVGhPYmplY3QzRDxURXZlbnRNYXAsIFQsIFRBUkdTPiB7XG4gIHB1YmxpYyBnZXRUeXBlKCk6IFR5cGU8TGluZTxUR2VvbWV0cnksIFRNYXRlcmlhbCwgVEV2ZW50TWFwPj4ge1xuICAgIHJldHVybiBMaW5lO1xuICB9XG5cbiAgcHVibGljIGdldCBpc0xpbmUoKTogdHJ1ZSB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX29ialJlZj8uaXNMaW5lO1xuICB9XG4gIHB1YmxpYyBnZXQgdHlwZSgpOiAoc3RyaW5nIHwgJ0xpbmUnKSB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX29ialJlZj8udHlwZTtcbiAgfVxuICBASW5wdXQoKVxuICBwdWJsaWMgc2V0IGdlb21ldHJ5KHZhbHVlOiBUR2VvbWV0cnkpIHtcbiAgICBpZiAodGhpcy5fb2JqUmVmKSB7XG4gICAgICB0aGlzLl9vYmpSZWYuZ2VvbWV0cnkgPSB2YWx1ZTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgZ2V0IGdlb21ldHJ5KCk6IFRHZW9tZXRyeSB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX29ialJlZj8uZ2VvbWV0cnk7XG4gIH1cbiAgQElucHV0KClcbiAgcHVibGljIHNldCBtYXRlcmlhbCh2YWx1ZTogVE1hdGVyaWFsKSB7XG4gICAgaWYgKHRoaXMuX29ialJlZikge1xuICAgICAgdGhpcy5fb2JqUmVmLm1hdGVyaWFsID0gdmFsdWU7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGdldCBtYXRlcmlhbCgpOiBUTWF0ZXJpYWwgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9vYmpSZWY/Lm1hdGVyaWFsO1xuICB9XG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzZXQgbW9ycGhUYXJnZXRJbmZsdWVuY2VzKHZhbHVlOiBudW1iZXJbXSB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh0aGlzLl9vYmpSZWYpIHtcbiAgICAgIHRoaXMuX29ialJlZi5tb3JwaFRhcmdldEluZmx1ZW5jZXMgPSB2YWx1ZTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgZ2V0IG1vcnBoVGFyZ2V0SW5mbHVlbmNlcygpOiAobnVtYmVyW10gfCB1bmRlZmluZWQpIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fb2JqUmVmPy5tb3JwaFRhcmdldEluZmx1ZW5jZXM7XG4gIH1cbiAgQElucHV0KClcbiAgcHVibGljIHNldCBtb3JwaFRhcmdldERpY3Rpb25hcnkoXG4gICAgdmFsdWU6IHsgW2tleTogc3RyaW5nXTogbnVtYmVyIH0gfCB1bmRlZmluZWQsXG4gICkge1xuICAgIGlmICh0aGlzLl9vYmpSZWYpIHtcbiAgICAgIHRoaXMuX29ialJlZi5tb3JwaFRhcmdldERpY3Rpb25hcnkgPSB2YWx1ZTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgZ2V0IG1vcnBoVGFyZ2V0RGljdGlvbmFyeSgpOlxuICAgIHwgKHsgW2tleTogc3RyaW5nXTogbnVtYmVyIH0gfCB1bmRlZmluZWQpXG4gICAgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9vYmpSZWY/Lm1vcnBoVGFyZ2V0RGljdGlvbmFyeTtcbiAgfVxufVxuIl19