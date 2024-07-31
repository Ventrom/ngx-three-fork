/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix */
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { ThWrapperBase } from '../ThWrapperBase';
import * as i0 from "@angular/core";
export class ThEffectComposerGen extends ThWrapperBase {
    getType() {
        return EffectComposer;
    }
    set renderer(value) {
        if (this._objRef) {
            this._objRef.renderer = value;
        }
    }
    get renderer() {
        return this._objRef?.renderer;
    }
    set renderTarget1(value) {
        if (this._objRef) {
            this._objRef.renderTarget1 = value;
        }
    }
    get renderTarget1() {
        return this._objRef?.renderTarget1;
    }
    set renderTarget2(value) {
        if (this._objRef) {
            this._objRef.renderTarget2 = value;
        }
    }
    get renderTarget2() {
        return this._objRef?.renderTarget2;
    }
    set writeBuffer(value) {
        if (this._objRef) {
            this._objRef.writeBuffer = value;
        }
    }
    get writeBuffer() {
        return this._objRef?.writeBuffer;
    }
    set readBuffer(value) {
        if (this._objRef) {
            this._objRef.readBuffer = value;
        }
    }
    get readBuffer() {
        return this._objRef?.readBuffer;
    }
    set passes(value) {
        if (this._objRef) {
            this._objRef.passes = value;
        }
    }
    get passes() {
        return this._objRef?.passes;
    }
    set copyPass(value) {
        if (this._objRef) {
            this._objRef.copyPass = value;
        }
    }
    get copyPass() {
        return this._objRef?.copyPass;
    }
    set clock(value) {
        if (this._objRef) {
            this._objRef.clock = value;
        }
    }
    get clock() {
        return this._objRef?.clock;
    }
    set renderToScreen(value) {
        if (this._objRef) {
            this._objRef.renderToScreen = value;
        }
    }
    get renderToScreen() {
        return this._objRef?.renderToScreen;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThEffectComposerGen, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.1.2", type: ThEffectComposerGen, selector: "th-effectComposerGen", inputs: { renderer: "renderer", renderTarget1: "renderTarget1", renderTarget2: "renderTarget2", writeBuffer: "writeBuffer", readBuffer: "readBuffer", passes: "passes", copyPass: "copyPass", clock: "clock", renderToScreen: "renderToScreen" }, providers: [], usesInheritance: true, ngImport: i0, template: '<ng-content/>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThEffectComposerGen, decorators: [{
            type: Component,
            args: [{
                    selector: 'th-effectComposerGen',
                    template: '<ng-content/>',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    providers: [],
                }]
        }], propDecorators: { renderer: [{
                type: Input
            }], renderTarget1: [{
                type: Input
            }], renderTarget2: [{
                type: Input
            }], writeBuffer: [{
                type: Input
            }], readBuffer: [{
                type: Input
            }], passes: [{
                type: Input
            }], copyPass: [{
                type: Input
            }], clock: [{
                type: Input
            }], renderToScreen: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGhFZmZlY3RDb21wb3Nlckdlbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC10aHJlZS9zcmMvbGliL2dlbmVyYXRlZC9UaEVmZmVjdENvbXBvc2VyR2VuLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGlEQUFpRDtBQUNqRCx5REFBeUQ7QUFDekQseUNBQXlDO0FBQ3pDLCtGQUErRjtBQUMvRixPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBUSxNQUFNLGVBQWUsQ0FBQztBQUVoRixPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0scURBQXFELENBQUM7QUFHckYsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGtCQUFrQixDQUFDOztBQVFqRCxNQUFNLE9BQU8sbUJBR1gsU0FBUSxhQUF1QjtJQUN4QixPQUFPO1FBQ1osT0FBTyxjQUFjLENBQUM7SUFDeEIsQ0FBQztJQUVELElBQ1csUUFBUSxDQUFDLEtBQW9CO1FBQ3RDLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ2pCLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztRQUNoQyxDQUFDO0lBQ0gsQ0FBQztJQUVELElBQVcsUUFBUTtRQUNqQixPQUFPLElBQUksQ0FBQyxPQUFPLEVBQUUsUUFBUSxDQUFDO0lBQ2hDLENBQUM7SUFDRCxJQUNXLGFBQWEsQ0FBQyxLQUF3QjtRQUMvQyxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUNqQixJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7UUFDckMsQ0FBQztJQUNILENBQUM7SUFFRCxJQUFXLGFBQWE7UUFDdEIsT0FBTyxJQUFJLENBQUMsT0FBTyxFQUFFLGFBQWEsQ0FBQztJQUNyQyxDQUFDO0lBQ0QsSUFDVyxhQUFhLENBQUMsS0FBd0I7UUFDL0MsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDakIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO1FBQ3JDLENBQUM7SUFDSCxDQUFDO0lBRUQsSUFBVyxhQUFhO1FBQ3RCLE9BQU8sSUFBSSxDQUFDLE9BQU8sRUFBRSxhQUFhLENBQUM7SUFDckMsQ0FBQztJQUNELElBQ1csV0FBVyxDQUFDLEtBQXdCO1FBQzdDLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ2pCLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQztRQUNuQyxDQUFDO0lBQ0gsQ0FBQztJQUVELElBQVcsV0FBVztRQUNwQixPQUFPLElBQUksQ0FBQyxPQUFPLEVBQUUsV0FBVyxDQUFDO0lBQ25DLENBQUM7SUFDRCxJQUNXLFVBQVUsQ0FBQyxLQUF3QjtRQUM1QyxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUNqQixJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7UUFDbEMsQ0FBQztJQUNILENBQUM7SUFFRCxJQUFXLFVBQVU7UUFDbkIsT0FBTyxJQUFJLENBQUMsT0FBTyxFQUFFLFVBQVUsQ0FBQztJQUNsQyxDQUFDO0lBQ0QsSUFDVyxNQUFNLENBQUMsS0FBYTtRQUM3QixJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUNqQixJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDOUIsQ0FBQztJQUNILENBQUM7SUFFRCxJQUFXLE1BQU07UUFDZixPQUFPLElBQUksQ0FBQyxPQUFPLEVBQUUsTUFBTSxDQUFDO0lBQzlCLENBQUM7SUFDRCxJQUNXLFFBQVEsQ0FBQyxLQUFpQjtRQUNuQyxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUNqQixJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7UUFDaEMsQ0FBQztJQUNILENBQUM7SUFFRCxJQUFXLFFBQVE7UUFDakIsT0FBTyxJQUFJLENBQUMsT0FBTyxFQUFFLFFBQVEsQ0FBQztJQUNoQyxDQUFDO0lBQ0QsSUFDVyxLQUFLLENBQUMsS0FBWTtRQUMzQixJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUNqQixJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDN0IsQ0FBQztJQUNILENBQUM7SUFFRCxJQUFXLEtBQUs7UUFDZCxPQUFPLElBQUksQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDO0lBQzdCLENBQUM7SUFDRCxJQUNXLGNBQWMsQ0FBQyxLQUFjO1FBQ3RDLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ2pCLElBQUksQ0FBQyxPQUFPLENBQUMsY0FBYyxHQUFHLEtBQUssQ0FBQztRQUN0QyxDQUFDO0lBQ0gsQ0FBQztJQUVELElBQVcsY0FBYztRQUN2QixPQUFPLElBQUksQ0FBQyxPQUFPLEVBQUUsY0FBYyxDQUFDO0lBQ3RDLENBQUM7OEdBakdVLG1CQUFtQjtrR0FBbkIsbUJBQW1CLGlTQUZuQixFQUFFLGlEQUZILGVBQWU7OzJGQUlkLG1CQUFtQjtrQkFOL0IsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsc0JBQXNCO29CQUNoQyxRQUFRLEVBQUUsZUFBZTtvQkFDekIsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07b0JBQy9DLFNBQVMsRUFBRSxFQUFFO2lCQUNkOzhCQVVZLFFBQVE7c0JBRGxCLEtBQUs7Z0JBV0ssYUFBYTtzQkFEdkIsS0FBSztnQkFXSyxhQUFhO3NCQUR2QixLQUFLO2dCQVdLLFdBQVc7c0JBRHJCLEtBQUs7Z0JBV0ssVUFBVTtzQkFEcEIsS0FBSztnQkFXSyxNQUFNO3NCQURoQixLQUFLO2dCQVdLLFFBQVE7c0JBRGxCLEtBQUs7Z0JBV0ssS0FBSztzQkFEZixLQUFLO2dCQVdLLGNBQWM7c0JBRHhCLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBAdHlwZXNjcmlwdC1lc2xpbnQvYmFuLXR5cGVzICovXG4vKiBlc2xpbnQtZGlzYWJsZSBAdHlwZXNjcmlwdC1lc2xpbnQvbmFtaW5nLWNvbnZlbnRpb24gKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vLXVuZGVyc2NvcmUtZGFuZ2xlICovXG4vKiBlc2xpbnQtZGlzYWJsZSBAYW5ndWxhci1lc2xpbnQvY29tcG9uZW50LXNlbGVjdG9yLCBAYW5ndWxhci1lc2xpbnQvY29tcG9uZW50LWNsYXNzLXN1ZmZpeCAqL1xuaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgSW5wdXQsIFR5cGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENsb2NrLCBXZWJHTFJlbmRlclRhcmdldCwgV2ViR0xSZW5kZXJlciB9IGZyb20gJ3RocmVlJztcbmltcG9ydCB7IEVmZmVjdENvbXBvc2VyIH0gZnJvbSAndGhyZWUvZXhhbXBsZXMvanNtL3Bvc3Rwcm9jZXNzaW5nL0VmZmVjdENvbXBvc2VyLmpzJztcbmltcG9ydCB7IFBhc3MgfSBmcm9tICd0aHJlZS9leGFtcGxlcy9qc20vcG9zdHByb2Nlc3NpbmcvUGFzcy5qcyc7XG5pbXBvcnQgeyBTaGFkZXJQYXNzIH0gZnJvbSAndGhyZWUvZXhhbXBsZXMvanNtL3Bvc3Rwcm9jZXNzaW5nL1NoYWRlclBhc3MuanMnO1xuaW1wb3J0IHsgVGhXcmFwcGVyQmFzZSB9IGZyb20gJy4uL1RoV3JhcHBlckJhc2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0aC1lZmZlY3RDb21wb3NlckdlbicsXG4gIHRlbXBsYXRlOiAnPG5nLWNvbnRlbnQvPicsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBwcm92aWRlcnM6IFtdLFxufSlcbmV4cG9ydCBjbGFzcyBUaEVmZmVjdENvbXBvc2VyR2VuPFxuICBUIGV4dGVuZHMgRWZmZWN0Q29tcG9zZXIgPSBFZmZlY3RDb21wb3NlcixcbiAgVEFSR1MgPSBbcmVuZGVyZXI6IFdlYkdMUmVuZGVyZXIsIHJlbmRlclRhcmdldD86IFdlYkdMUmVuZGVyVGFyZ2V0XSxcbj4gZXh0ZW5kcyBUaFdyYXBwZXJCYXNlPFQsIFRBUkdTPiB7XG4gIHB1YmxpYyBnZXRUeXBlKCk6IFR5cGU8RWZmZWN0Q29tcG9zZXI+IHtcbiAgICByZXR1cm4gRWZmZWN0Q29tcG9zZXI7XG4gIH1cblxuICBASW5wdXQoKVxuICBwdWJsaWMgc2V0IHJlbmRlcmVyKHZhbHVlOiBXZWJHTFJlbmRlcmVyKSB7XG4gICAgaWYgKHRoaXMuX29ialJlZikge1xuICAgICAgdGhpcy5fb2JqUmVmLnJlbmRlcmVyID0gdmFsdWU7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGdldCByZW5kZXJlcigpOiBXZWJHTFJlbmRlcmVyIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fb2JqUmVmPy5yZW5kZXJlcjtcbiAgfVxuICBASW5wdXQoKVxuICBwdWJsaWMgc2V0IHJlbmRlclRhcmdldDEodmFsdWU6IFdlYkdMUmVuZGVyVGFyZ2V0KSB7XG4gICAgaWYgKHRoaXMuX29ialJlZikge1xuICAgICAgdGhpcy5fb2JqUmVmLnJlbmRlclRhcmdldDEgPSB2YWx1ZTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgZ2V0IHJlbmRlclRhcmdldDEoKTogV2ViR0xSZW5kZXJUYXJnZXQgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9vYmpSZWY/LnJlbmRlclRhcmdldDE7XG4gIH1cbiAgQElucHV0KClcbiAgcHVibGljIHNldCByZW5kZXJUYXJnZXQyKHZhbHVlOiBXZWJHTFJlbmRlclRhcmdldCkge1xuICAgIGlmICh0aGlzLl9vYmpSZWYpIHtcbiAgICAgIHRoaXMuX29ialJlZi5yZW5kZXJUYXJnZXQyID0gdmFsdWU7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGdldCByZW5kZXJUYXJnZXQyKCk6IFdlYkdMUmVuZGVyVGFyZ2V0IHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fb2JqUmVmPy5yZW5kZXJUYXJnZXQyO1xuICB9XG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzZXQgd3JpdGVCdWZmZXIodmFsdWU6IFdlYkdMUmVuZGVyVGFyZ2V0KSB7XG4gICAgaWYgKHRoaXMuX29ialJlZikge1xuICAgICAgdGhpcy5fb2JqUmVmLndyaXRlQnVmZmVyID0gdmFsdWU7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGdldCB3cml0ZUJ1ZmZlcigpOiBXZWJHTFJlbmRlclRhcmdldCB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX29ialJlZj8ud3JpdGVCdWZmZXI7XG4gIH1cbiAgQElucHV0KClcbiAgcHVibGljIHNldCByZWFkQnVmZmVyKHZhbHVlOiBXZWJHTFJlbmRlclRhcmdldCkge1xuICAgIGlmICh0aGlzLl9vYmpSZWYpIHtcbiAgICAgIHRoaXMuX29ialJlZi5yZWFkQnVmZmVyID0gdmFsdWU7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGdldCByZWFkQnVmZmVyKCk6IFdlYkdMUmVuZGVyVGFyZ2V0IHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fb2JqUmVmPy5yZWFkQnVmZmVyO1xuICB9XG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzZXQgcGFzc2VzKHZhbHVlOiBQYXNzW10pIHtcbiAgICBpZiAodGhpcy5fb2JqUmVmKSB7XG4gICAgICB0aGlzLl9vYmpSZWYucGFzc2VzID0gdmFsdWU7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGdldCBwYXNzZXMoKTogUGFzc1tdIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fb2JqUmVmPy5wYXNzZXM7XG4gIH1cbiAgQElucHV0KClcbiAgcHVibGljIHNldCBjb3B5UGFzcyh2YWx1ZTogU2hhZGVyUGFzcykge1xuICAgIGlmICh0aGlzLl9vYmpSZWYpIHtcbiAgICAgIHRoaXMuX29ialJlZi5jb3B5UGFzcyA9IHZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBnZXQgY29weVBhc3MoKTogU2hhZGVyUGFzcyB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX29ialJlZj8uY29weVBhc3M7XG4gIH1cbiAgQElucHV0KClcbiAgcHVibGljIHNldCBjbG9jayh2YWx1ZTogQ2xvY2spIHtcbiAgICBpZiAodGhpcy5fb2JqUmVmKSB7XG4gICAgICB0aGlzLl9vYmpSZWYuY2xvY2sgPSB2YWx1ZTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgZ2V0IGNsb2NrKCk6IENsb2NrIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fb2JqUmVmPy5jbG9jaztcbiAgfVxuICBASW5wdXQoKVxuICBwdWJsaWMgc2V0IHJlbmRlclRvU2NyZWVuKHZhbHVlOiBib29sZWFuKSB7XG4gICAgaWYgKHRoaXMuX29ialJlZikge1xuICAgICAgdGhpcy5fb2JqUmVmLnJlbmRlclRvU2NyZWVuID0gdmFsdWU7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGdldCByZW5kZXJUb1NjcmVlbigpOiBib29sZWFuIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fb2JqUmVmPy5yZW5kZXJUb1NjcmVlbjtcbiAgfVxufVxuIl19