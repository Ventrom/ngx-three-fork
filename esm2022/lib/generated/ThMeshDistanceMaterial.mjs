/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix */
import { ChangeDetectionStrategy, Component, Input, forwardRef, } from '@angular/core';
import { MeshDistanceMaterial, } from 'three';
import { ThMaterial } from './ThMaterial';
import * as i0 from "@angular/core";
export class ThMeshDistanceMaterial extends ThMaterial {
    getType() {
        return MeshDistanceMaterial;
    }
    get isMeshDistanceMaterial() {
        return this._objRef?.isMeshDistanceMaterial;
    }
    set type(value) {
        if (this._objRef) {
            this._objRef.type = value;
        }
    }
    get type() {
        return this._objRef?.type;
    }
    set map(value) {
        if (this._objRef) {
            this._objRef.map = value;
        }
    }
    get map() {
        return this._objRef?.map;
    }
    set alphaMap(value) {
        if (this._objRef) {
            this._objRef.alphaMap = value;
        }
    }
    get alphaMap() {
        return this._objRef?.alphaMap;
    }
    set displacementMap(value) {
        if (this._objRef) {
            this._objRef.displacementMap = value;
        }
    }
    get displacementMap() {
        return this._objRef?.displacementMap;
    }
    set displacementScale(value) {
        if (this._objRef) {
            this._objRef.displacementScale = value;
        }
    }
    get displacementScale() {
        return this._objRef?.displacementScale;
    }
    set displacementBias(value) {
        if (this._objRef) {
            this._objRef.displacementBias = value;
        }
    }
    get displacementBias() {
        return this._objRef?.displacementBias;
    }
    set fog(value) {
        if (this._objRef) {
            this._objRef.fog = value;
        }
    }
    get fog() {
        return this._objRef?.fog;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThMeshDistanceMaterial, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.1.2", type: ThMeshDistanceMaterial, selector: "th-meshDistanceMaterial", inputs: { type: "type", map: "map", alphaMap: "alphaMap", displacementMap: "displacementMap", displacementScale: "displacementScale", displacementBias: "displacementBias", fog: "fog" }, providers: [
            {
                provide: ThMaterial,
                useExisting: forwardRef(() => ThMeshDistanceMaterial),
            },
        ], usesInheritance: true, ngImport: i0, template: '<ng-content/>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThMeshDistanceMaterial, decorators: [{
            type: Component,
            args: [{
                    selector: 'th-meshDistanceMaterial',
                    template: '<ng-content/>',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    providers: [
                        {
                            provide: ThMaterial,
                            useExisting: forwardRef(() => ThMeshDistanceMaterial),
                        },
                    ],
                }]
        }], propDecorators: { type: [{
                type: Input
            }], map: [{
                type: Input
            }], alphaMap: [{
                type: Input
            }], displacementMap: [{
                type: Input
            }], displacementScale: [{
                type: Input
            }], displacementBias: [{
                type: Input
            }], fog: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGhNZXNoRGlzdGFuY2VNYXRlcmlhbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC10aHJlZS9zcmMvbGliL2dlbmVyYXRlZC9UaE1lc2hEaXN0YW5jZU1hdGVyaWFsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHlEQUF5RDtBQUN6RCx5Q0FBeUM7QUFDekMsK0ZBQStGO0FBQy9GLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULEtBQUssRUFFTCxVQUFVLEdBQ1gsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUNMLG9CQUFvQixHQUdyQixNQUFNLE9BQU8sQ0FBQztBQUNmLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxjQUFjLENBQUM7O0FBYTFDLE1BQU0sT0FBTyxzQkFHWCxTQUFRLFVBQW9CO0lBQ3JCLE9BQU87UUFDWixPQUFPLG9CQUFvQixDQUFDO0lBQzlCLENBQUM7SUFFRCxJQUFXLHNCQUFzQjtRQUMvQixPQUFPLElBQUksQ0FBQyxPQUFPLEVBQUUsc0JBQXNCLENBQUM7SUFDOUMsQ0FBQztJQUNELElBQ1csSUFBSSxDQUFDLEtBQWE7UUFDM0IsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDakIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDO1FBQzVCLENBQUM7SUFDSCxDQUFDO0lBRUQsSUFBVyxJQUFJO1FBQ2IsT0FBTyxJQUFJLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQztJQUM1QixDQUFDO0lBQ0QsSUFDVyxHQUFHLENBQUMsS0FBcUI7UUFDbEMsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDakIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLEdBQUcsS0FBSyxDQUFDO1FBQzNCLENBQUM7SUFDSCxDQUFDO0lBRUQsSUFBVyxHQUFHO1FBQ1osT0FBTyxJQUFJLENBQUMsT0FBTyxFQUFFLEdBQUcsQ0FBQztJQUMzQixDQUFDO0lBQ0QsSUFDVyxRQUFRLENBQUMsS0FBcUI7UUFDdkMsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDakIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO1FBQ2hDLENBQUM7SUFDSCxDQUFDO0lBRUQsSUFBVyxRQUFRO1FBQ2pCLE9BQU8sSUFBSSxDQUFDLE9BQU8sRUFBRSxRQUFRLENBQUM7SUFDaEMsQ0FBQztJQUNELElBQ1csZUFBZSxDQUFDLEtBQXFCO1FBQzlDLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ2pCLElBQUksQ0FBQyxPQUFPLENBQUMsZUFBZSxHQUFHLEtBQUssQ0FBQztRQUN2QyxDQUFDO0lBQ0gsQ0FBQztJQUVELElBQVcsZUFBZTtRQUN4QixPQUFPLElBQUksQ0FBQyxPQUFPLEVBQUUsZUFBZSxDQUFDO0lBQ3ZDLENBQUM7SUFDRCxJQUNXLGlCQUFpQixDQUFDLEtBQWE7UUFDeEMsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDakIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxpQkFBaUIsR0FBRyxLQUFLLENBQUM7UUFDekMsQ0FBQztJQUNILENBQUM7SUFFRCxJQUFXLGlCQUFpQjtRQUMxQixPQUFPLElBQUksQ0FBQyxPQUFPLEVBQUUsaUJBQWlCLENBQUM7SUFDekMsQ0FBQztJQUNELElBQ1csZ0JBQWdCLENBQUMsS0FBYTtRQUN2QyxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUNqQixJQUFJLENBQUMsT0FBTyxDQUFDLGdCQUFnQixHQUFHLEtBQUssQ0FBQztRQUN4QyxDQUFDO0lBQ0gsQ0FBQztJQUVELElBQVcsZ0JBQWdCO1FBQ3pCLE9BQU8sSUFBSSxDQUFDLE9BQU8sRUFBRSxnQkFBZ0IsQ0FBQztJQUN4QyxDQUFDO0lBQ0QsSUFDVyxHQUFHLENBQUMsS0FBYztRQUMzQixJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUNqQixJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsR0FBRyxLQUFLLENBQUM7UUFDM0IsQ0FBQztJQUNILENBQUM7SUFFRCxJQUFXLEdBQUc7UUFDWixPQUFPLElBQUksQ0FBQyxPQUFPLEVBQUUsR0FBRyxDQUFDO0lBQzNCLENBQUM7OEdBaEZVLHNCQUFzQjtrR0FBdEIsc0JBQXNCLDRPQVB0QjtZQUNUO2dCQUNFLE9BQU8sRUFBRSxVQUFVO2dCQUNuQixXQUFXLEVBQUUsVUFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDLHNCQUFzQixDQUFDO2FBQ3REO1NBQ0YsaURBUFMsZUFBZTs7MkZBU2Qsc0JBQXNCO2tCQVhsQyxTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSx5QkFBeUI7b0JBQ25DLFFBQVEsRUFBRSxlQUFlO29CQUN6QixlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtvQkFDL0MsU0FBUyxFQUFFO3dCQUNUOzRCQUNFLE9BQU8sRUFBRSxVQUFVOzRCQUNuQixXQUFXLEVBQUUsVUFBVSxDQUFDLEdBQUcsRUFBRSx1QkFBdUIsQ0FBQzt5QkFDdEQ7cUJBQ0Y7aUJBQ0Y7OEJBYVksSUFBSTtzQkFEZCxLQUFLO2dCQVdLLEdBQUc7c0JBRGIsS0FBSztnQkFXSyxRQUFRO3NCQURsQixLQUFLO2dCQVdLLGVBQWU7c0JBRHpCLEtBQUs7Z0JBV0ssaUJBQWlCO3NCQUQzQixLQUFLO2dCQVdLLGdCQUFnQjtzQkFEMUIsS0FBSztnQkFXSyxHQUFHO3NCQURiLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBAdHlwZXNjcmlwdC1lc2xpbnQvbmFtaW5nLWNvbnZlbnRpb24gKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vLXVuZGVyc2NvcmUtZGFuZ2xlICovXG4vKiBlc2xpbnQtZGlzYWJsZSBAYW5ndWxhci1lc2xpbnQvY29tcG9uZW50LXNlbGVjdG9yLCBAYW5ndWxhci1lc2xpbnQvY29tcG9uZW50LWNsYXNzLXN1ZmZpeCAqL1xuaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENvbXBvbmVudCxcbiAgSW5wdXQsXG4gIFR5cGUsXG4gIGZvcndhcmRSZWYsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgTWVzaERpc3RhbmNlTWF0ZXJpYWwsXG4gIE1lc2hEaXN0YW5jZU1hdGVyaWFsUGFyYW1ldGVycyxcbiAgVGV4dHVyZSxcbn0gZnJvbSAndGhyZWUnO1xuaW1wb3J0IHsgVGhNYXRlcmlhbCB9IGZyb20gJy4vVGhNYXRlcmlhbCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3RoLW1lc2hEaXN0YW5jZU1hdGVyaWFsJyxcbiAgdGVtcGxhdGU6ICc8bmctY29udGVudC8+JyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHByb3ZpZGVyczogW1xuICAgIHtcbiAgICAgIHByb3ZpZGU6IFRoTWF0ZXJpYWwsXG4gICAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBUaE1lc2hEaXN0YW5jZU1hdGVyaWFsKSxcbiAgICB9LFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBUaE1lc2hEaXN0YW5jZU1hdGVyaWFsPFxuICBUIGV4dGVuZHMgTWVzaERpc3RhbmNlTWF0ZXJpYWwgPSBNZXNoRGlzdGFuY2VNYXRlcmlhbCxcbiAgVEFSR1MgPSAvKiBwYXJhbWV0ZXJzPyAqLyBNZXNoRGlzdGFuY2VNYXRlcmlhbFBhcmFtZXRlcnMsXG4+IGV4dGVuZHMgVGhNYXRlcmlhbDxULCBUQVJHUz4ge1xuICBwdWJsaWMgZ2V0VHlwZSgpOiBUeXBlPE1lc2hEaXN0YW5jZU1hdGVyaWFsPiB7XG4gICAgcmV0dXJuIE1lc2hEaXN0YW5jZU1hdGVyaWFsO1xuICB9XG5cbiAgcHVibGljIGdldCBpc01lc2hEaXN0YW5jZU1hdGVyaWFsKCk6IHRydWUgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9vYmpSZWY/LmlzTWVzaERpc3RhbmNlTWF0ZXJpYWw7XG4gIH1cbiAgQElucHV0KClcbiAgcHVibGljIHNldCB0eXBlKHZhbHVlOiBzdHJpbmcpIHtcbiAgICBpZiAodGhpcy5fb2JqUmVmKSB7XG4gICAgICB0aGlzLl9vYmpSZWYudHlwZSA9IHZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBnZXQgdHlwZSgpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9vYmpSZWY/LnR5cGU7XG4gIH1cbiAgQElucHV0KClcbiAgcHVibGljIHNldCBtYXAodmFsdWU6IFRleHR1cmUgfCBudWxsKSB7XG4gICAgaWYgKHRoaXMuX29ialJlZikge1xuICAgICAgdGhpcy5fb2JqUmVmLm1hcCA9IHZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBnZXQgbWFwKCk6IChUZXh0dXJlIHwgbnVsbCkgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9vYmpSZWY/Lm1hcDtcbiAgfVxuICBASW5wdXQoKVxuICBwdWJsaWMgc2V0IGFscGhhTWFwKHZhbHVlOiBUZXh0dXJlIHwgbnVsbCkge1xuICAgIGlmICh0aGlzLl9vYmpSZWYpIHtcbiAgICAgIHRoaXMuX29ialJlZi5hbHBoYU1hcCA9IHZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBnZXQgYWxwaGFNYXAoKTogKFRleHR1cmUgfCBudWxsKSB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX29ialJlZj8uYWxwaGFNYXA7XG4gIH1cbiAgQElucHV0KClcbiAgcHVibGljIHNldCBkaXNwbGFjZW1lbnRNYXAodmFsdWU6IFRleHR1cmUgfCBudWxsKSB7XG4gICAgaWYgKHRoaXMuX29ialJlZikge1xuICAgICAgdGhpcy5fb2JqUmVmLmRpc3BsYWNlbWVudE1hcCA9IHZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBnZXQgZGlzcGxhY2VtZW50TWFwKCk6IChUZXh0dXJlIHwgbnVsbCkgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9vYmpSZWY/LmRpc3BsYWNlbWVudE1hcDtcbiAgfVxuICBASW5wdXQoKVxuICBwdWJsaWMgc2V0IGRpc3BsYWNlbWVudFNjYWxlKHZhbHVlOiBudW1iZXIpIHtcbiAgICBpZiAodGhpcy5fb2JqUmVmKSB7XG4gICAgICB0aGlzLl9vYmpSZWYuZGlzcGxhY2VtZW50U2NhbGUgPSB2YWx1ZTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgZ2V0IGRpc3BsYWNlbWVudFNjYWxlKCk6IG51bWJlciB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX29ialJlZj8uZGlzcGxhY2VtZW50U2NhbGU7XG4gIH1cbiAgQElucHV0KClcbiAgcHVibGljIHNldCBkaXNwbGFjZW1lbnRCaWFzKHZhbHVlOiBudW1iZXIpIHtcbiAgICBpZiAodGhpcy5fb2JqUmVmKSB7XG4gICAgICB0aGlzLl9vYmpSZWYuZGlzcGxhY2VtZW50QmlhcyA9IHZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBnZXQgZGlzcGxhY2VtZW50QmlhcygpOiBudW1iZXIgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9vYmpSZWY/LmRpc3BsYWNlbWVudEJpYXM7XG4gIH1cbiAgQElucHV0KClcbiAgcHVibGljIHNldCBmb2codmFsdWU6IGJvb2xlYW4pIHtcbiAgICBpZiAodGhpcy5fb2JqUmVmKSB7XG4gICAgICB0aGlzLl9vYmpSZWYuZm9nID0gdmFsdWU7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGdldCBmb2coKTogYm9vbGVhbiB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX29ialJlZj8uZm9nO1xuICB9XG59XG4iXX0=