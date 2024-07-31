/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix */
import { ChangeDetectionStrategy, Component, forwardRef, } from '@angular/core';
import { AmbientLight } from 'three';
import { ThLight } from './ThLight';
import { ThObject3D } from './ThObject3D';
import * as i0 from "@angular/core";
export class ThAmbientLight extends ThLight {
    getType() {
        return AmbientLight;
    }
    get isAmbientLight() {
        return this._objRef?.isAmbientLight;
    }
    get type() {
        return this._objRef?.type;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThAmbientLight, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.1.2", type: ThAmbientLight, selector: "th-ambientLight", providers: [
            { provide: ThObject3D, useExisting: forwardRef(() => ThAmbientLight) },
        ], usesInheritance: true, ngImport: i0, template: '<ng-content/>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThAmbientLight, decorators: [{
            type: Component,
            args: [{
                    selector: 'th-ambientLight',
                    template: '<ng-content/>',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    providers: [
                        { provide: ThObject3D, useExisting: forwardRef(() => ThAmbientLight) },
                    ],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGhBbWJpZW50TGlnaHQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtdGhyZWUvc3JjL2xpYi9nZW5lcmF0ZWQvVGhBbWJpZW50TGlnaHQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEseURBQXlEO0FBQ3pELHlDQUF5QztBQUN6QywrRkFBK0Y7QUFDL0YsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixTQUFTLEVBRVQsVUFBVSxHQUNYLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxZQUFZLEVBQXVCLE1BQU0sT0FBTyxDQUFDO0FBQzFELE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFDcEMsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGNBQWMsQ0FBQzs7QUFVMUMsTUFBTSxPQUFPLGNBR1gsU0FBUSxPQUE0QjtJQUM3QixPQUFPO1FBQ1osT0FBTyxZQUFZLENBQUM7SUFDdEIsQ0FBQztJQUVELElBQVcsY0FBYztRQUN2QixPQUFPLElBQUksQ0FBQyxPQUFPLEVBQUUsY0FBYyxDQUFDO0lBQ3RDLENBQUM7SUFDRCxJQUFXLElBQUk7UUFDYixPQUFPLElBQUksQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDO0lBQzVCLENBQUM7OEdBYlUsY0FBYztrR0FBZCxjQUFjLDBDQUpkO1lBQ1QsRUFBRSxPQUFPLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRSxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsY0FBYyxDQUFDLEVBQUU7U0FDdkUsaURBSlMsZUFBZTs7MkZBTWQsY0FBYztrQkFSMUIsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsaUJBQWlCO29CQUMzQixRQUFRLEVBQUUsZUFBZTtvQkFDekIsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07b0JBQy9DLFNBQVMsRUFBRTt3QkFDVCxFQUFFLE9BQU8sRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFLFVBQVUsQ0FBQyxHQUFHLEVBQUUsZUFBZSxDQUFDLEVBQUU7cUJBQ3ZFO2lCQUNGIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgQHR5cGVzY3JpcHQtZXNsaW50L25hbWluZy1jb252ZW50aW9uICovXG4vKiBlc2xpbnQtZGlzYWJsZSBuby11bmRlcnNjb3JlLWRhbmdsZSAqL1xuLyogZXNsaW50LWRpc2FibGUgQGFuZ3VsYXItZXNsaW50L2NvbXBvbmVudC1zZWxlY3RvciwgQGFuZ3VsYXItZXNsaW50L2NvbXBvbmVudC1jbGFzcy1zdWZmaXggKi9cbmltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDb21wb25lbnQsXG4gIFR5cGUsXG4gIGZvcndhcmRSZWYsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQW1iaWVudExpZ2h0LCBDb2xvclJlcHJlc2VudGF0aW9uIH0gZnJvbSAndGhyZWUnO1xuaW1wb3J0IHsgVGhMaWdodCB9IGZyb20gJy4vVGhMaWdodCc7XG5pbXBvcnQgeyBUaE9iamVjdDNEIH0gZnJvbSAnLi9UaE9iamVjdDNEJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndGgtYW1iaWVudExpZ2h0JyxcbiAgdGVtcGxhdGU6ICc8bmctY29udGVudC8+JyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHByb3ZpZGVyczogW1xuICAgIHsgcHJvdmlkZTogVGhPYmplY3QzRCwgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gVGhBbWJpZW50TGlnaHQpIH0sXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIFRoQW1iaWVudExpZ2h0PFxuICBUIGV4dGVuZHMgQW1iaWVudExpZ2h0ID0gQW1iaWVudExpZ2h0LFxuICBUQVJHUyA9IFtjb2xvcj86IENvbG9yUmVwcmVzZW50YXRpb24sIGludGVuc2l0eT86IG51bWJlcl0sXG4+IGV4dGVuZHMgVGhMaWdodDx1bmRlZmluZWQsIFQsIFRBUkdTPiB7XG4gIHB1YmxpYyBnZXRUeXBlKCk6IFR5cGU8QW1iaWVudExpZ2h0PiB7XG4gICAgcmV0dXJuIEFtYmllbnRMaWdodDtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaXNBbWJpZW50TGlnaHQoKTogdHJ1ZSB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX29ialJlZj8uaXNBbWJpZW50TGlnaHQ7XG4gIH1cbiAgcHVibGljIGdldCB0eXBlKCk6IChzdHJpbmcgfCAnQW1iaWVudExpZ2h0JykgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9vYmpSZWY/LnR5cGU7XG4gIH1cbn1cbiJdfQ==