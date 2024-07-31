/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix */
import { ChangeDetectionStrategy, Component, Input, forwardRef, } from '@angular/core';
import { Scene, } from 'three';
import { applyValue } from '../util';
import { ThObject3D } from './ThObject3D';
import * as i0 from "@angular/core";
export class ThScene extends ThObject3D {
    getType() {
        return Scene;
    }
    get isScene() {
        return this._objRef?.isScene;
    }
    set type(value) {
        if (this._objRef) {
            this._objRef.type = value;
        }
    }
    get type() {
        return this._objRef?.type;
    }
    set fog(value) {
        if (this._objRef) {
            this._objRef.fog = value;
        }
    }
    get fog() {
        return this._objRef?.fog;
    }
    set backgroundBlurriness(value) {
        if (this._objRef) {
            this._objRef.backgroundBlurriness = value;
        }
    }
    get backgroundBlurriness() {
        return this._objRef?.backgroundBlurriness;
    }
    set backgroundIntensity(value) {
        if (this._objRef) {
            this._objRef.backgroundIntensity = value;
        }
    }
    get backgroundIntensity() {
        return this._objRef?.backgroundIntensity;
    }
    set overrideMaterial(value) {
        if (this._objRef) {
            this._objRef.overrideMaterial = value;
        }
    }
    get overrideMaterial() {
        return this._objRef?.overrideMaterial;
    }
    set background(value) {
        if (this._objRef) {
            this._objRef.background = applyValue(this._objRef.background, value);
        }
    }
    get background() {
        return this._objRef?.background;
    }
    set backgroundRotation(value) {
        if (this._objRef) {
            this._objRef.backgroundRotation = applyValue(this._objRef.backgroundRotation, value);
        }
    }
    get backgroundRotation() {
        return this._objRef?.backgroundRotation;
    }
    set environment(value) {
        if (this._objRef) {
            this._objRef.environment = value;
        }
    }
    get environment() {
        return this._objRef?.environment;
    }
    set environmentIntensity(value) {
        if (this._objRef) {
            this._objRef.environmentIntensity = value;
        }
    }
    get environmentIntensity() {
        return this._objRef?.environmentIntensity;
    }
    set environmentRotation(value) {
        if (this._objRef) {
            this._objRef.environmentRotation = applyValue(this._objRef.environmentRotation, value);
        }
    }
    get environmentRotation() {
        return this._objRef?.environmentRotation;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThScene, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.1.2", type: ThScene, selector: "th-scene", inputs: { type: "type", fog: "fog", backgroundBlurriness: "backgroundBlurriness", backgroundIntensity: "backgroundIntensity", overrideMaterial: "overrideMaterial", background: "background", backgroundRotation: "backgroundRotation", environment: "environment", environmentIntensity: "environmentIntensity", environmentRotation: "environmentRotation" }, providers: [{ provide: ThObject3D, useExisting: forwardRef(() => ThScene) }], usesInheritance: true, ngImport: i0, template: '<ng-content/>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThScene, decorators: [{
            type: Component,
            args: [{
                    selector: 'th-scene',
                    template: '<ng-content/>',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    providers: [{ provide: ThObject3D, useExisting: forwardRef(() => ThScene) }],
                }]
        }], propDecorators: { type: [{
                type: Input
            }], fog: [{
                type: Input
            }], backgroundBlurriness: [{
                type: Input
            }], backgroundIntensity: [{
                type: Input
            }], overrideMaterial: [{
                type: Input
            }], background: [{
                type: Input
            }], backgroundRotation: [{
                type: Input
            }], environment: [{
                type: Input
            }], environmentIntensity: [{
                type: Input
            }], environmentRotation: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGhTY2VuZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC10aHJlZS9zcmMvbGliL2dlbmVyYXRlZC9UaFNjZW5lLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHlEQUF5RDtBQUN6RCx5Q0FBeUM7QUFDekMsK0ZBQStGO0FBQy9GLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULEtBQUssRUFFTCxVQUFVLEdBQ1gsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQVNMLEtBQUssR0FFTixNQUFNLE9BQU8sQ0FBQztBQUNmLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxTQUFTLENBQUM7QUFDckMsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGNBQWMsQ0FBQzs7QUFRMUMsTUFBTSxPQUFPLE9BQTZDLFNBQVEsVUFJakU7SUFDUSxPQUFPO1FBQ1osT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDO0lBRUQsSUFBVyxPQUFPO1FBQ2hCLE9BQU8sSUFBSSxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUM7SUFDL0IsQ0FBQztJQUNELElBQ1csSUFBSSxDQUFDLEtBQWM7UUFDNUIsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDakIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDO1FBQzVCLENBQUM7SUFDSCxDQUFDO0lBRUQsSUFBVyxJQUFJO1FBQ2IsT0FBTyxJQUFJLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQztJQUM1QixDQUFDO0lBQ0QsSUFDVyxHQUFHLENBQUMsS0FBcUI7UUFDbEMsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDakIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLEdBQUcsS0FBSyxDQUFDO1FBQzNCLENBQUM7SUFDSCxDQUFDO0lBRUQsSUFBVyxHQUFHO1FBQ1osT0FBTyxJQUFJLENBQUMsT0FBTyxFQUFFLEdBQUcsQ0FB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QUMsRUFBRSxPQUFPLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRSxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxpREFGbEUsZUFBZTs7MkZBSWQsT0FBTztrQkFObkIsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsVUFBVTtvQkFDcEIsUUFBUSxFQUFFLGVBQWU7b0JBQ3pCLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO29CQUMvQyxTQUFTLEVBQUUsQ0FBQyxFQUFFLE9BQU8sRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFLFVBQVUsQ0FBQyxHQUFHLEVBQUUsUUFBUSxDQUFDLEVBQUUsQ0FBQztpQkFDN0U7OEJBY1ksSUFBSTtzQkFEZCxLQUFLO2dCQVdLLEdBQUc7c0JBRGIsS0FBSztnQkFXSyxvQkFBb0I7c0JBRDlCLEtBQUs7Z0JBV0ssbUJBQW1CO3NCQUQ3QixLQUFLO2dCQVdLLGdCQUFnQjtzQkFEMUIsS0FBSztnQkFXSyxVQUFVO3NCQURwQixLQUFLO2dCQXVCSyxrQkFBa0I7c0JBRDVCLEtBQUs7Z0JBZUssV0FBVztzQkFEckIsS0FBSztnQkFXSyxvQkFBb0I7c0JBRDlCLEtBQUs7Z0JBV0ssbUJBQW1CO3NCQUQ3QixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgQHR5cGVzY3JpcHQtZXNsaW50L25hbWluZy1jb252ZW50aW9uICovXG4vKiBlc2xpbnQtZGlzYWJsZSBuby11bmRlcnNjb3JlLWRhbmdsZSAqL1xuLyogZXNsaW50LWRpc2FibGUgQGFuZ3VsYXItZXNsaW50L2NvbXBvbmVudC1zZWxlY3RvciwgQGFuZ3VsYXItZXNsaW50L2NvbXBvbmVudC1jbGFzcy1zdWZmaXggKi9cbmltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDb21wb25lbnQsXG4gIElucHV0LFxuICBUeXBlLFxuICBmb3J3YXJkUmVmLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIENvbG9yLFxuICBDb2xvclJlcHJlc2VudGF0aW9uLFxuICBDdWJlVGV4dHVyZSxcbiAgRXVsZXIsXG4gIEV1bGVyT3JkZXIsXG4gIEZvZ0Jhc2UsXG4gIE1hdGVyaWFsLFxuICBPYmplY3QzREV2ZW50TWFwLFxuICBTY2VuZSxcbiAgVGV4dHVyZSxcbn0gZnJvbSAndGhyZWUnO1xuaW1wb3J0IHsgYXBwbHlWYWx1ZSB9IGZyb20gJy4uL3V0aWwnO1xuaW1wb3J0IHsgVGhPYmplY3QzRCB9IGZyb20gJy4vVGhPYmplY3QzRCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3RoLXNjZW5lJyxcbiAgdGVtcGxhdGU6ICc8bmctY29udGVudC8+JyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHByb3ZpZGVyczogW3sgcHJvdmlkZTogVGhPYmplY3QzRCwgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gVGhTY2VuZSkgfV0sXG59KVxuZXhwb3J0IGNsYXNzIFRoU2NlbmU8VCBleHRlbmRzIFNjZW5lID0gU2NlbmUsIFRBUkdTID0gW10+IGV4dGVuZHMgVGhPYmplY3QzRDxcbiAgT2JqZWN0M0RFdmVudE1hcCxcbiAgVCxcbiAgVEFSR1Ncbj4ge1xuICBwdWJsaWMgZ2V0VHlwZSgpOiBUeXBlPFNjZW5lPiB7XG4gICAgcmV0dXJuIFNjZW5lO1xuICB9XG5cbiAgcHVibGljIGdldCBpc1NjZW5lKCk6IHRydWUgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9vYmpSZWY/LmlzU2NlbmU7XG4gIH1cbiAgQElucHV0KClcbiAgcHVibGljIHNldCB0eXBlKHZhbHVlOiAnU2NlbmUnKSB7XG4gICAgaWYgKHRoaXMuX29ialJlZikge1xuICAgICAgdGhpcy5fb2JqUmVmLnR5cGUgPSB2YWx1ZTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgZ2V0IHR5cGUoKTogJ1NjZW5lJyB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX29ialJlZj8udHlwZTtcbiAgfVxuICBASW5wdXQoKVxuICBwdWJsaWMgc2V0IGZvZyh2YWx1ZTogRm9nQmFzZSB8IG51bGwpIHtcbiAgICBpZiAodGhpcy5fb2JqUmVmKSB7XG4gICAgICB0aGlzLl9vYmpSZWYuZm9nID0gdmFsdWU7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGdldCBmb2coKTogKEZvZ0Jhc2UgfCBudWxsKSB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX29ialJlZj8uZm9nO1xuICB9XG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzZXQgYmFja2dyb3VuZEJsdXJyaW5lc3ModmFsdWU6IG51bWJlcikge1xuICAgIGlmICh0aGlzLl9vYmpSZWYpIHtcbiAgICAgIHRoaXMuX29ialJlZi5iYWNrZ3JvdW5kQmx1cnJpbmVzcyA9IHZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBnZXQgYmFja2dyb3VuZEJsdXJyaW5lc3MoKTogbnVtYmVyIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fb2JqUmVmPy5iYWNrZ3JvdW5kQmx1cnJpbmVzcztcbiAgfVxuICBASW5wdXQoKVxuICBwdWJsaWMgc2V0IGJhY2tncm91bmRJbnRlbnNpdHkodmFsdWU6IG51bWJlcikge1xuICAgIGlmICh0aGlzLl9vYmpSZWYpIHtcbiAgICAgIHRoaXMuX29ialJlZi5iYWNrZ3JvdW5kSW50ZW5zaXR5ID0gdmFsdWU7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGdldCBiYWNrZ3JvdW5kSW50ZW5zaXR5KCk6IG51bWJlciB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX29ialJlZj8uYmFja2dyb3VuZEludGVuc2l0eTtcbiAgfVxuICBASW5wdXQoKVxuICBwdWJsaWMgc2V0IG92ZXJyaWRlTWF0ZXJpYWwodmFsdWU6IE1hdGVyaWFsIHwgbnVsbCkge1xuICAgIGlmICh0aGlzLl9vYmpSZWYpIHtcbiAgICAgIHRoaXMuX29ialJlZi5vdmVycmlkZU1hdGVyaWFsID0gdmFsdWU7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGdldCBvdmVycmlkZU1hdGVyaWFsKCk6IChNYXRlcmlhbCB8IG51bGwpIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fb2JqUmVmPy5vdmVycmlkZU1hdGVyaWFsO1xuICB9XG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzZXQgYmFja2dyb3VuZChcbiAgICB2YWx1ZTpcbiAgICAgIHwgQ29sb3JcbiAgICAgIHwgVGV4dHVyZVxuICAgICAgfCBDdWJlVGV4dHVyZVxuICAgICAgfCBudWxsXG4gICAgICB8IFtcbiAgICAgICAgICAuLi5hcmdzOlxuICAgICAgICAgICAgfCBbY29sb3I6IENvbG9yUmVwcmVzZW50YXRpb25dXG4gICAgICAgICAgICB8IFtyOiBudW1iZXIsIGc6IG51bWJlciwgYjogbnVtYmVyXSxcbiAgICAgICAgXSxcbiAgKSB7XG4gICAgaWYgKHRoaXMuX29ialJlZikge1xuICAgICAgdGhpcy5fb2JqUmVmLmJhY2tncm91bmQgPSBhcHBseVZhbHVlPFxuICAgICAgICBDb2xvciB8IFRleHR1cmUgfCBDdWJlVGV4dHVyZSB8IG51bGxcbiAgICAgID4odGhpcy5fb2JqUmVmLmJhY2tncm91bmQsIHZhbHVlKTtcbiAgICB9XG4gIH1cbiAgcHVibGljIGdldCBiYWNrZ3JvdW5kKCk6IChDb2xvciB8IFRleHR1cmUgfCBDdWJlVGV4dHVyZSB8IG51bGwpIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fb2JqUmVmPy5iYWNrZ3JvdW5kO1xuICB9XG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzZXQgYmFja2dyb3VuZFJvdGF0aW9uKFxuICAgIHZhbHVlOiBFdWxlciB8IFt4OiBudW1iZXIsIHk6IG51bWJlciwgejogbnVtYmVyLCBvcmRlcj86IEV1bGVyT3JkZXJdLFxuICApIHtcbiAgICBpZiAodGhpcy5fb2JqUmVmKSB7XG4gICAgICB0aGlzLl9vYmpSZWYuYmFja2dyb3VuZFJvdGF0aW9uID0gYXBwbHlWYWx1ZTxFdWxlcj4oXG4gICAgICAgIHRoaXMuX29ialJlZi5iYWNrZ3JvdW5kUm90YXRpb24sXG4gICAgICAgIHZhbHVlLFxuICAgICAgKTtcbiAgICB9XG4gIH1cbiAgcHVibGljIGdldCBiYWNrZ3JvdW5kUm90YXRpb24oKTogRXVsZXIgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9vYmpSZWY/LmJhY2tncm91bmRSb3RhdGlvbjtcbiAgfVxuICBASW5wdXQoKVxuICBwdWJsaWMgc2V0IGVudmlyb25tZW50KHZhbHVlOiBUZXh0dXJlIHwgbnVsbCkge1xuICAgIGlmICh0aGlzLl9vYmpSZWYpIHtcbiAgICAgIHRoaXMuX29ialJlZi5lbnZpcm9ubWVudCA9IHZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBnZXQgZW52aXJvbm1lbnQoKTogKFRleHR1cmUgfCBudWxsKSB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX29ialJlZj8uZW52aXJvbm1lbnQ7XG4gIH1cbiAgQElucHV0KClcbiAgcHVibGljIHNldCBlbnZpcm9ubWVudEludGVuc2l0eSh2YWx1ZTogbnVtYmVyKSB7XG4gICAgaWYgKHRoaXMuX29ialJlZikge1xuICAgICAgdGhpcy5fb2JqUmVmLmVudmlyb25tZW50SW50ZW5zaXR5ID0gdmFsdWU7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGdldCBlbnZpcm9ubWVudEludGVuc2l0eSgpOiBudW1iZXIgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9vYmpSZWY/LmVudmlyb25tZW50SW50ZW5zaXR5O1xuICB9XG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzZXQgZW52aXJvbm1lbnRSb3RhdGlvbihcbiAgICB2YWx1ZTogRXVsZXIgfCBbeDogbnVtYmVyLCB5OiBudW1iZXIsIHo6IG51bWJlciwgb3JkZXI/OiBFdWxlck9yZGVyXSxcbiAgKSB7XG4gICAgaWYgKHRoaXMuX29ialJlZikge1xuICAgICAgdGhpcy5fb2JqUmVmLmVudmlyb25tZW50Um90YXRpb24gPSBhcHBseVZhbHVlPEV1bGVyPihcbiAgICAgICAgdGhpcy5fb2JqUmVmLmVudmlyb25tZW50Um90YXRpb24sXG4gICAgICAgIHZhbHVlLFxuICAgICAgKTtcbiAgICB9XG4gIH1cbiAgcHVibGljIGdldCBlbnZpcm9ubWVudFJvdGF0aW9uKCk6IEV1bGVyIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fb2JqUmVmPy5lbnZpcm9ubWVudFJvdGF0aW9uO1xuICB9XG59XG4iXX0=