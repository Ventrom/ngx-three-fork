/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix */
import { ChangeDetectionStrategy, Component, Input, SkipSelf, } from '@angular/core';
import { Object3D, } from 'three';
import { ThObjectBase } from '../ThObjectBase';
import { applyValue } from '../util';
import * as i0 from "@angular/core";
export class ThObject3D extends ThObjectBase {
    getType() {
        return Object3D;
    }
    get isObject3D() {
        return this._objRef?.isObject3D;
    }
    get id() {
        return this._objRef?.id;
    }
    set uuid(value) {
        if (this._objRef) {
            this._objRef.uuid = value;
        }
    }
    get uuid() {
        return this._objRef?.uuid;
    }
    set name(value) {
        if (this._objRef) {
            this._objRef.name = value;
        }
    }
    get name() {
        return this._objRef?.name;
    }
    get type() {
        return this._objRef?.type;
    }
    set children(value) {
        if (this._objRef) {
            this._objRef.children = value;
        }
    }
    get children() {
        return this._objRef?.children;
    }
    set up(value) {
        if (this._objRef) {
            this._objRef.up = applyValue(this._objRef.up, value);
        }
    }
    get up() {
        return this._objRef?.up;
    }
    set position(value) {
        if (this._objRef) {
            applyValue(this._objRef.position, value);
        }
    }
    get position() {
        return this._objRef?.position;
    }
    set rotation(value) {
        if (this._objRef) {
            applyValue(this._objRef.rotation, value);
        }
    }
    get rotation() {
        return this._objRef?.rotation;
    }
    set quaternion(value) {
        if (this._objRef) {
            applyValue(this._objRef.quaternion, value);
        }
    }
    get quaternion() {
        return this._objRef?.quaternion;
    }
    set scale(value) {
        if (this._objRef) {
            applyValue(this._objRef.scale, value);
        }
    }
    get scale() {
        return this._objRef?.scale;
    }
    set modelViewMatrix(value) {
        if (this._objRef) {
            applyValue(this._objRef.modelViewMatrix, value);
        }
    }
    get modelViewMatrix() {
        return this._objRef?.modelViewMatrix;
    }
    set normalMatrix(value) {
        if (this._objRef) {
            applyValue(this._objRef.normalMatrix, value);
        }
    }
    get normalMatrix() {
        return this._objRef?.normalMatrix;
    }
    set matrix(value) {
        if (this._objRef) {
            this._objRef.matrix = applyValue(this._objRef.matrix, value);
        }
    }
    get matrix() {
        return this._objRef?.matrix;
    }
    set matrixWorld(value) {
        if (this._objRef) {
            this._objRef.matrixWorld = applyValue(this._objRef.matrixWorld, value);
        }
    }
    get matrixWorld() {
        return this._objRef?.matrixWorld;
    }
    set matrixAutoUpdate(value) {
        if (this._objRef) {
            this._objRef.matrixAutoUpdate = value;
        }
    }
    get matrixAutoUpdate() {
        return this._objRef?.matrixAutoUpdate;
    }
    set matrixWorldAutoUpdate(value) {
        if (this._objRef) {
            this._objRef.matrixWorldAutoUpdate = value;
        }
    }
    get matrixWorldAutoUpdate() {
        return this._objRef?.matrixWorldAutoUpdate;
    }
    set matrixWorldNeedsUpdate(value) {
        if (this._objRef) {
            this._objRef.matrixWorldNeedsUpdate = value;
        }
    }
    get matrixWorldNeedsUpdate() {
        return this._objRef?.matrixWorldNeedsUpdate;
    }
    set layers(value) {
        if (this._objRef) {
            this._objRef.layers = applyValue(this._objRef.layers, value);
        }
    }
    get layers() {
        return this._objRef?.layers;
    }
    set visible(value) {
        if (this._objRef) {
            this._objRef.visible = value;
        }
    }
    get visible() {
        return this._objRef?.visible;
    }
    set castShadow(value) {
        if (this._objRef) {
            this._objRef.castShadow = value;
        }
    }
    get castShadow() {
        return this._objRef?.castShadow;
    }
    set receiveShadow(value) {
        if (this._objRef) {
            this._objRef.receiveShadow = value;
        }
    }
    get receiveShadow() {
        return this._objRef?.receiveShadow;
    }
    set frustumCulled(value) {
        if (this._objRef) {
            this._objRef.frustumCulled = value;
        }
    }
    get frustumCulled() {
        return this._objRef?.frustumCulled;
    }
    set renderOrder(value) {
        if (this._objRef) {
            this._objRef.renderOrder = value;
        }
    }
    get renderOrder() {
        return this._objRef?.renderOrder;
    }
    set animations(value) {
        if (this._objRef) {
            this._objRef.animations = value;
        }
    }
    get animations() {
        return this._objRef?.animations;
    }
    set userData(value) {
        if (this._objRef) {
            this._objRef.userData = value;
        }
    }
    get userData() {
        return this._objRef?.userData;
    }
    set customDepthMaterial(value) {
        if (this._objRef) {
            this._objRef.customDepthMaterial = value;
        }
    }
    get customDepthMaterial() {
        return this._objRef?.customDepthMaterial;
    }
    set customDistanceMaterial(value) {
        if (this._objRef) {
            this._objRef.customDistanceMaterial = value;
        }
    }
    get customDistanceMaterial() {
        return this._objRef?.customDistanceMaterial;
    }
    static { this.DEFAULT_UP = Object3D.DEFAULT_UP; }
    static { this.DEFAULT_MATRIX_AUTO_UPDATE = Object3D.DEFAULT_MATRIX_AUTO_UPDATE; }
    static { this.DEFAULT_MATRIX_WORLD_AUTO_UPDATE = Object3D.DEFAULT_MATRIX_WORLD_AUTO_UPDATE; }
    constructor(parent) {
        super(parent);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThObject3D, deps: [{ token: ThObject3D, skipSelf: true }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.1.2", type: ThObject3D, selector: "th-object3D", inputs: { uuid: "uuid", name: "name", children: "children", up: "up", position: "position", rotation: "rotation", quaternion: "quaternion", scale: "scale", modelViewMatrix: "modelViewMatrix", normalMatrix: "normalMatrix", matrix: "matrix", matrixWorld: "matrixWorld", matrixAutoUpdate: "matrixAutoUpdate", matrixWorldAutoUpdate: "matrixWorldAutoUpdate", matrixWorldNeedsUpdate: "matrixWorldNeedsUpdate", layers: "layers", visible: "visible", castShadow: "castShadow", receiveShadow: "receiveShadow", frustumCulled: "frustumCulled", renderOrder: "renderOrder", animations: "animations", userData: "userData", customDepthMaterial: "customDepthMaterial", customDistanceMaterial: "customDistanceMaterial" }, providers: [], usesInheritance: true, ngImport: i0, template: '<ng-content/>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThObject3D, decorators: [{
            type: Component,
            args: [{
                    selector: 'th-object3D',
                    template: '<ng-content/>',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    providers: [],
                }]
        }], ctorParameters: () => [{ type: ThObject3D, decorators: [{
                    type: SkipSelf
                }] }], propDecorators: { uuid: [{
                type: Input
            }], name: [{
                type: Input
            }], children: [{
                type: Input
            }], up: [{
                type: Input
            }], position: [{
                type: Input
            }], rotation: [{
                type: Input
            }], quaternion: [{
                type: Input
            }], scale: [{
                type: Input
            }], modelViewMatrix: [{
                type: Input
            }], normalMatrix: [{
                type: Input
            }], matrix: [{
                type: Input
            }], matrixWorld: [{
                type: Input
            }], matrixAutoUpdate: [{
                type: Input
            }], matrixWorldAutoUpdate: [{
                type: Input
            }], matrixWorldNeedsUpdate: [{
                type: Input
            }], layers: [{
                type: Input
            }], visible: [{
                type: Input
            }], castShadow: [{
                type: Input
            }], receiveShadow: [{
                type: Input
            }], frustumCulled: [{
                type: Input
            }], renderOrder: [{
                type: Input
            }], animations: [{
                type: Input
            }], userData: [{
                type: Input
            }], customDepthMaterial: [{
                type: Input
            }], customDistanceMaterial: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGhPYmplY3QzRC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC10aHJlZS9zcmMvbGliL2dlbmVyYXRlZC9UaE9iamVjdDNELnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHlEQUF5RDtBQUN6RCx5Q0FBeUM7QUFDekMsK0ZBQStGO0FBQy9GLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULEtBQUssRUFDTCxRQUFRLEdBRVQsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQVFMLFFBQVEsR0FJVCxNQUFNLE9BQU8sQ0FBQztBQUNmLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sU0FBUyxDQUFDOztBQVFyQyxNQUFNLE9BQU8sVUFJWCxTQUFRLFlBQXNCO0lBQ3ZCLE9BQU87UUFDWixPQUFPLFFBQVEsQ0FBQztJQUNsQixDQUFDO0lBRUQsSUFBVyxVQUFVO1FBQ25CLE9BQU8sSUFBSSxDQUFDLE9BQU8sRUFBRSxVQUFVLENBQUM7SUFDbEMsQ0FBQztJQUNELElBQVcsRUFBRTtRQUNYLE9BQU8sSUFBSSxDQUFDLE9BQU8sRUFBRSxFQUFFLENBQUM7SUFDMUIsQ0FBQztJQUNELElBQ1csSUFBSSxDQUFDLEtBQWE7UUFDM0IsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDakIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDO1FBQzVCLENBQUM7SUFDSCxDQUFDO0lBRUQsSUFBVyxJQUFJO1FBQ2IsT0FBTyxJQUFJLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQztJQUM1QixDQUFDO0lBQ0QsSUFDVyxJQUFJLENBQUMsS0FBYTtRQUMzQixJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUNqQixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksR0FBRyxLQUFLLENBQUM7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QUFRO3NCQURsQixLQUFLO2dCQVdLLEVBQUU7c0JBRFosS0FBSztnQkFVSyxRQUFRO3NCQURsQixLQUFLO2dCQVVLLFFBQVE7c0JBRGxCLEtBQUs7Z0JBWUssVUFBVTtzQkFEcEIsS0FBSztnQkFZSyxLQUFLO3NCQURmLEtBQUs7Z0JBVUssZUFBZTtzQkFEekIsS0FBSztnQkErQkssWUFBWTtzQkFEdEIsS0FBSztnQkF3QkssTUFBTTtzQkFEaEIsS0FBSztnQkErQkssV0FBVztzQkFEckIsS0FBSztnQkFrQ0ssZ0JBQWdCO3NCQUQxQixLQUFLO2dCQVdLLHFCQUFxQjtzQkFEL0IsS0FBSztnQkFXSyxzQkFBc0I7c0JBRGhDLEtBQUs7Z0JBV0ssTUFBTTtzQkFEaEIsS0FBSztnQkFVSyxPQUFPO3NCQURqQixLQUFLO2dCQVdLLFVBQVU7c0JBRHBCLEtBQUs7Z0JBV0ssYUFBYTtzQkFEdkIsS0FBSztnQkFXSyxhQUFhO3NCQUR2QixLQUFLO2dCQVdLLFdBQVc7c0JBRHJCLEtBQUs7Z0JBV0ssVUFBVTtzQkFEcEIsS0FBSztnQkFXSyxRQUFRO3NCQURsQixLQUFLO2dCQVdLLG1CQUFtQjtzQkFEN0IsS0FBSztnQkFXSyxzQkFBc0I7c0JBRGhDLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBAdHlwZXNjcmlwdC1lc2xpbnQvbmFtaW5nLWNvbnZlbnRpb24gKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vLXVuZGVyc2NvcmUtZGFuZ2xlICovXG4vKiBlc2xpbnQtZGlzYWJsZSBAYW5ndWxhci1lc2xpbnQvY29tcG9uZW50LXNlbGVjdG9yLCBAYW5ndWxhci1lc2xpbnQvY29tcG9uZW50LWNsYXNzLXN1ZmZpeCAqL1xuaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENvbXBvbmVudCxcbiAgSW5wdXQsXG4gIFNraXBTZWxmLFxuICBUeXBlLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIEFuaW1hdGlvbkNsaXAsXG4gIEV1bGVyLFxuICBFdWxlck9yZGVyLFxuICBMYXllcnMsXG4gIE1hdGVyaWFsLFxuICBNYXRyaXgzLFxuICBNYXRyaXg0LFxuICBPYmplY3QzRCxcbiAgT2JqZWN0M0RFdmVudE1hcCxcbiAgUXVhdGVybmlvbixcbiAgVmVjdG9yMyxcbn0gZnJvbSAndGhyZWUnO1xuaW1wb3J0IHsgVGhPYmplY3RCYXNlIH0gZnJvbSAnLi4vVGhPYmplY3RCYXNlJztcbmltcG9ydCB7IGFwcGx5VmFsdWUgfSBmcm9tICcuLi91dGlsJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndGgtb2JqZWN0M0QnLFxuICB0ZW1wbGF0ZTogJzxuZy1jb250ZW50Lz4nLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgcHJvdmlkZXJzOiBbXSxcbn0pXG5leHBvcnQgY2xhc3MgVGhPYmplY3QzRDxcbiAgVEV2ZW50TWFwIGV4dGVuZHMgT2JqZWN0M0RFdmVudE1hcCA9IE9iamVjdDNERXZlbnRNYXAsXG4gIFQgZXh0ZW5kcyBPYmplY3QzRDxURXZlbnRNYXA+ID0gT2JqZWN0M0Q8VEV2ZW50TWFwPixcbiAgVEFSR1MgPSBbXSxcbj4gZXh0ZW5kcyBUaE9iamVjdEJhc2U8VCwgVEFSR1M+IHtcbiAgcHVibGljIGdldFR5cGUoKTogVHlwZTxPYmplY3QzRDxURXZlbnRNYXA+PiB7XG4gICAgcmV0dXJuIE9iamVjdDNEO1xuICB9XG5cbiAgcHVibGljIGdldCBpc09iamVjdDNEKCk6IHRydWUgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9vYmpSZWY/LmlzT2JqZWN0M0Q7XG4gIH1cbiAgcHVibGljIGdldCBpZCgpOiBudW1iZXIgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9vYmpSZWY/LmlkO1xuICB9XG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzZXQgdXVpZCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgaWYgKHRoaXMuX29ialJlZikge1xuICAgICAgdGhpcy5fb2JqUmVmLnV1aWQgPSB2YWx1ZTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgZ2V0IHV1aWQoKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fb2JqUmVmPy51dWlkO1xuICB9XG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzZXQgbmFtZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgaWYgKHRoaXMuX29ialJlZikge1xuICAgICAgdGhpcy5fb2JqUmVmLm5hbWUgPSB2YWx1ZTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgZ2V0IG5hbWUoKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fb2JqUmVmPy5uYW1lO1xuICB9XG4gIHB1YmxpYyBnZXQgdHlwZSgpOiAoc3RyaW5nIHwgJ09iamVjdDNEJykgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9vYmpSZWY/LnR5cGU7XG4gIH1cbiAgQElucHV0KClcbiAgcHVibGljIHNldCBjaGlsZHJlbih2YWx1ZTogT2JqZWN0M0RbXSkge1xuICAgIGlmICh0aGlzLl9vYmpSZWYpIHtcbiAgICAgIHRoaXMuX29ialJlZi5jaGlsZHJlbiA9IHZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBnZXQgY2hpbGRyZW4oKTogT2JqZWN0M0RbXSB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX29ialJlZj8uY2hpbGRyZW47XG4gIH1cbiAgQElucHV0KClcbiAgcHVibGljIHNldCB1cCh2YWx1ZTogVmVjdG9yMyB8IFt4OiBudW1iZXIsIHk6IG51bWJlciwgejogbnVtYmVyXSkge1xuICAgIGlmICh0aGlzLl9vYmpSZWYpIHtcbiAgICAgIHRoaXMuX29ialJlZi51cCA9IGFwcGx5VmFsdWU8VmVjdG9yMz4odGhpcy5fb2JqUmVmLnVwLCB2YWx1ZSk7XG4gICAgfVxuICB9XG4gIHB1YmxpYyBnZXQgdXAoKTogVmVjdG9yMyB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX29ialJlZj8udXA7XG4gIH1cbiAgQElucHV0KClcbiAgcHVibGljIHNldCBwb3NpdGlvbih2YWx1ZTogVmVjdG9yMyB8IFt4OiBudW1iZXIsIHk6IG51bWJlciwgejogbnVtYmVyXSkge1xuICAgIGlmICh0aGlzLl9vYmpSZWYpIHtcbiAgICAgIGFwcGx5VmFsdWU8VmVjdG9yMz4odGhpcy5fb2JqUmVmLnBvc2l0aW9uLCB2YWx1ZSk7XG4gICAgfVxuICB9XG4gIHB1YmxpYyBnZXQgcG9zaXRpb24oKTogVmVjdG9yMyB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX29ialJlZj8ucG9zaXRpb247XG4gIH1cbiAgQElucHV0KClcbiAgcHVibGljIHNldCByb3RhdGlvbihcbiAgICB2YWx1ZTogRXVsZXIgfCBbeDogbnVtYmVyLCB5OiBudW1iZXIsIHo6IG51bWJlciwgb3JkZXI/OiBFdWxlck9yZGVyXSxcbiAgKSB7XG4gICAgaWYgKHRoaXMuX29ialJlZikge1xuICAgICAgYXBwbHlWYWx1ZTxFdWxlcj4odGhpcy5fb2JqUmVmLnJvdGF0aW9uLCB2YWx1ZSk7XG4gICAgfVxuICB9XG4gIHB1YmxpYyBnZXQgcm90YXRpb24oKTogRXVsZXIgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9vYmpSZWY/LnJvdGF0aW9uO1xuICB9XG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzZXQgcXVhdGVybmlvbihcbiAgICB2YWx1ZTogUXVhdGVybmlvbiB8IFt4OiBudW1iZXIsIHk6IG51bWJlciwgejogbnVtYmVyLCB3OiBudW1iZXJdLFxuICApIHtcbiAgICBpZiAodGhpcy5fb2JqUmVmKSB7XG4gICAgICBhcHBseVZhbHVlPFF1YXRlcm5pb24+KHRoaXMuX29ialJlZi5xdWF0ZXJuaW9uLCB2YWx1ZSk7XG4gICAgfVxuICB9XG4gIHB1YmxpYyBnZXQgcXVhdGVybmlvbigpOiBRdWF0ZXJuaW9uIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fb2JqUmVmPy5xdWF0ZXJuaW9uO1xuICB9XG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzZXQgc2NhbGUodmFsdWU6IFZlY3RvcjMgfCBbeDogbnVtYmVyLCB5OiBudW1iZXIsIHo6IG51bWJlcl0pIHtcbiAgICBpZiAodGhpcy5fb2JqUmVmKSB7XG4gICAgICBhcHBseVZhbHVlPFZlY3RvcjM+KHRoaXMuX29ialJlZi5zY2FsZSwgdmFsdWUpO1xuICAgIH1cbiAgfVxuICBwdWJsaWMgZ2V0IHNjYWxlKCk6IFZlY3RvcjMgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9vYmpSZWY/LnNjYWxlO1xuICB9XG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzZXQgbW9kZWxWaWV3TWF0cml4KFxuICAgIHZhbHVlOlxuICAgICAgfCBNYXRyaXg0XG4gICAgICB8IFtcbiAgICAgICAgICBuMTE6IG51bWJlcixcbiAgICAgICAgICBuMTI6IG51bWJlcixcbiAgICAgICAgICBuMTM6IG51bWJlcixcbiAgICAgICAgICBuMTQ6IG51bWJlcixcbiAgICAgICAgICBuMjE6IG51bWJlcixcbiAgICAgICAgICBuMjI6IG51bWJlcixcbiAgICAgICAgICBuMjM6IG51bWJlcixcbiAgICAgICAgICBuMjQ6IG51bWJlcixcbiAgICAgICAgICBuMzE6IG51bWJlcixcbiAgICAgICAgICBuMzI6IG51bWJlcixcbiAgICAgICAgICBuMzM6IG51bWJlcixcbiAgICAgICAgICBuMzQ6IG51bWJlcixcbiAgICAgICAgICBuNDE6IG51bWJlcixcbiAgICAgICAgICBuNDI6IG51bWJlcixcbiAgICAgICAgICBuNDM6IG51bWJlcixcbiAgICAgICAgICBuNDQ6IG51bWJlcixcbiAgICAgICAgXSxcbiAgKSB7XG4gICAgaWYgKHRoaXMuX29ialJlZikge1xuICAgICAgYXBwbHlWYWx1ZTxNYXRyaXg0Pih0aGlzLl9vYmpSZWYubW9kZWxWaWV3TWF0cml4LCB2YWx1ZSk7XG4gICAgfVxuICB9XG4gIHB1YmxpYyBnZXQgbW9kZWxWaWV3TWF0cml4KCk6IE1hdHJpeDQgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9vYmpSZWY/Lm1vZGVsVmlld01hdHJpeDtcbiAgfVxuICBASW5wdXQoKVxuICBwdWJsaWMgc2V0IG5vcm1hbE1hdHJpeChcbiAgICB2YWx1ZTpcbiAgICAgIHwgTWF0cml4M1xuICAgICAgfCBbXG4gICAgICAgICAgbjExOiBudW1iZXIsXG4gICAgICAgICAgbjEyOiBudW1iZXIsXG4gICAgICAgICAgbjEzOiBudW1iZXIsXG4gICAgICAgICAgbjIxOiBudW1iZXIsXG4gICAgICAgICAgbjIyOiBudW1iZXIsXG4gICAgICAgICAgbjIzOiBudW1iZXIsXG4gICAgICAgICAgbjMxOiBudW1iZXIsXG4gICAgICAgICAgbjMyOiBudW1iZXIsXG4gICAgICAgICAgbjMzOiBudW1iZXIsXG4gICAgICAgIF0sXG4gICkge1xuICAgIGlmICh0aGlzLl9vYmpSZWYpIHtcbiAgICAgIGFwcGx5VmFsdWU8TWF0cml4Mz4odGhpcy5fb2JqUmVmLm5vcm1hbE1hdHJpeCwgdmFsdWUpO1xuICAgIH1cbiAgfVxuICBwdWJsaWMgZ2V0IG5vcm1hbE1hdHJpeCgpOiBNYXRyaXgzIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fb2JqUmVmPy5ub3JtYWxNYXRyaXg7XG4gIH1cbiAgQElucHV0KClcbiAgcHVibGljIHNldCBtYXRyaXgoXG4gICAgdmFsdWU6XG4gICAgICB8IE1hdHJpeDRcbiAgICAgIHwgW1xuICAgICAgICAgIG4xMTogbnVtYmVyLFxuICAgICAgICAgIG4xMjogbnVtYmVyLFxuICAgICAgICAgIG4xMzogbnVtYmVyLFxuICAgICAgICAgIG4xNDogbnVtYmVyLFxuICAgICAgICAgIG4yMTogbnVtYmVyLFxuICAgICAgICAgIG4yMjogbnVtYmVyLFxuICAgICAgICAgIG4yMzogbnVtYmVyLFxuICAgICAgICAgIG4yNDogbnVtYmVyLFxuICAgICAgICAgIG4zMTogbnVtYmVyLFxuICAgICAgICAgIG4zMjogbnVtYmVyLFxuICAgICAgICAgIG4zMzogbnVtYmVyLFxuICAgICAgICAgIG4zNDogbnVtYmVyLFxuICAgICAgICAgIG40MTogbnVtYmVyLFxuICAgICAgICAgIG40MjogbnVtYmVyLFxuICAgICAgICAgIG40MzogbnVtYmVyLFxuICAgICAgICAgIG40NDogbnVtYmVyLFxuICAgICAgICBdLFxuICApIHtcbiAgICBpZiAodGhpcy5fb2JqUmVmKSB7XG4gICAgICB0aGlzLl9vYmpSZWYubWF0cml4ID0gYXBwbHlWYWx1ZTxNYXRyaXg0Pih0aGlzLl9vYmpSZWYubWF0cml4LCB2YWx1ZSk7XG4gICAgfVxuICB9XG4gIHB1YmxpYyBnZXQgbWF0cml4KCk6IE1hdHJpeDQgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9vYmpSZWY/Lm1hdHJpeDtcbiAgfVxuICBASW5wdXQoKVxuICBwdWJsaWMgc2V0IG1hdHJpeFdvcmxkKFxuICAgIHZhbHVlOlxuICAgICAgfCBNYXRyaXg0XG4gICAgICB8IFtcbiAgICAgICAgICBuMTE6IG51bWJlcixcbiAgICAgICAgICBuMTI6IG51bWJlcixcbiAgICAgICAgICBuMTM6IG51bWJlcixcbiAgICAgICAgICBuMTQ6IG51bWJlcixcbiAgICAgICAgICBuMjE6IG51bWJlcixcbiAgICAgICAgICBuMjI6IG51bWJlcixcbiAgICAgICAgICBuMjM6IG51bWJlcixcbiAgICAgICAgICBuMjQ6IG51bWJlcixcbiAgICAgICAgICBuMzE6IG51bWJlcixcbiAgICAgICAgICBuMzI6IG51bWJlcixcbiAgICAgICAgICBuMzM6IG51bWJlcixcbiAgICAgICAgICBuMzQ6IG51bWJlcixcbiAgICAgICAgICBuNDE6IG51bWJlcixcbiAgICAgICAgICBuNDI6IG51bWJlcixcbiAgICAgICAgICBuNDM6IG51bWJlcixcbiAgICAgICAgICBuNDQ6IG51bWJlcixcbiAgICAgICAgXSxcbiAgKSB7XG4gICAgaWYgKHRoaXMuX29ialJlZikge1xuICAgICAgdGhpcy5fb2JqUmVmLm1hdHJpeFdvcmxkID0gYXBwbHlWYWx1ZTxNYXRyaXg0PihcbiAgICAgICAgdGhpcy5fb2JqUmVmLm1hdHJpeFdvcmxkLFxuICAgICAgICB2YWx1ZSxcbiAgICAgICk7XG4gICAgfVxuICB9XG4gIHB1YmxpYyBnZXQgbWF0cml4V29ybGQoKTogTWF0cml4NCB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX29ialJlZj8ubWF0cml4V29ybGQ7XG4gIH1cbiAgQElucHV0KClcbiAgcHVibGljIHNldCBtYXRyaXhBdXRvVXBkYXRlKHZhbHVlOiBib29sZWFuKSB7XG4gICAgaWYgKHRoaXMuX29ialJlZikge1xuICAgICAgdGhpcy5fb2JqUmVmLm1hdHJpeEF1dG9VcGRhdGUgPSB2YWx1ZTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgZ2V0IG1hdHJpeEF1dG9VcGRhdGUoKTogYm9vbGVhbiB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX29ialJlZj8ubWF0cml4QXV0b1VwZGF0ZTtcbiAgfVxuICBASW5wdXQoKVxuICBwdWJsaWMgc2V0IG1hdHJpeFdvcmxkQXV0b1VwZGF0ZSh2YWx1ZTogYm9vbGVhbikge1xuICAgIGlmICh0aGlzLl9vYmpSZWYpIHtcbiAgICAgIHRoaXMuX29ialJlZi5tYXRyaXhXb3JsZEF1dG9VcGRhdGUgPSB2YWx1ZTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgZ2V0IG1hdHJpeFdvcmxkQXV0b1VwZGF0ZSgpOiBib29sZWFuIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fb2JqUmVmPy5tYXRyaXhXb3JsZEF1dG9VcGRhdGU7XG4gIH1cbiAgQElucHV0KClcbiAgcHVibGljIHNldCBtYXRyaXhXb3JsZE5lZWRzVXBkYXRlKHZhbHVlOiBib29sZWFuKSB7XG4gICAgaWYgKHRoaXMuX29ialJlZikge1xuICAgICAgdGhpcy5fb2JqUmVmLm1hdHJpeFdvcmxkTmVlZHNVcGRhdGUgPSB2YWx1ZTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgZ2V0IG1hdHJpeFdvcmxkTmVlZHNVcGRhdGUoKTogYm9vbGVhbiB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX29ialJlZj8ubWF0cml4V29ybGROZWVkc1VwZGF0ZTtcbiAgfVxuICBASW5wdXQoKVxuICBwdWJsaWMgc2V0IGxheWVycyh2YWx1ZTogTGF5ZXJzIHwgW2xheWVyOiBudW1iZXJdKSB7XG4gICAgaWYgKHRoaXMuX29ialJlZikge1xuICAgICAgdGhpcy5fb2JqUmVmLmxheWVycyA9IGFwcGx5VmFsdWU8TGF5ZXJzPih0aGlzLl9vYmpSZWYubGF5ZXJzLCB2YWx1ZSk7XG4gICAgfVxuICB9XG4gIHB1YmxpYyBnZXQgbGF5ZXJzKCk6IExheWVycyB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX29ialJlZj8ubGF5ZXJzO1xuICB9XG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzZXQgdmlzaWJsZSh2YWx1ZTogYm9vbGVhbikge1xuICAgIGlmICh0aGlzLl9vYmpSZWYpIHtcbiAgICAgIHRoaXMuX29ialJlZi52aXNpYmxlID0gdmFsdWU7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGdldCB2aXNpYmxlKCk6IGJvb2xlYW4gfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9vYmpSZWY/LnZpc2libGU7XG4gIH1cbiAgQElucHV0KClcbiAgcHVibGljIHNldCBjYXN0U2hhZG93KHZhbHVlOiBib29sZWFuKSB7XG4gICAgaWYgKHRoaXMuX29ialJlZikge1xuICAgICAgdGhpcy5fb2JqUmVmLmNhc3RTaGFkb3cgPSB2YWx1ZTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgZ2V0IGNhc3RTaGFkb3coKTogYm9vbGVhbiB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX29ialJlZj8uY2FzdFNoYWRvdztcbiAgfVxuICBASW5wdXQoKVxuICBwdWJsaWMgc2V0IHJlY2VpdmVTaGFkb3codmFsdWU6IGJvb2xlYW4pIHtcbiAgICBpZiAodGhpcy5fb2JqUmVmKSB7XG4gICAgICB0aGlzLl9vYmpSZWYucmVjZWl2ZVNoYWRvdyA9IHZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBnZXQgcmVjZWl2ZVNoYWRvdygpOiBib29sZWFuIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fb2JqUmVmPy5yZWNlaXZlU2hhZG93O1xuICB9XG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzZXQgZnJ1c3R1bUN1bGxlZCh2YWx1ZTogYm9vbGVhbikge1xuICAgIGlmICh0aGlzLl9vYmpSZWYpIHtcbiAgICAgIHRoaXMuX29ialJlZi5mcnVzdHVtQ3VsbGVkID0gdmFsdWU7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGdldCBmcnVzdHVtQ3VsbGVkKCk6IGJvb2xlYW4gfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9vYmpSZWY/LmZydXN0dW1DdWxsZWQ7XG4gIH1cbiAgQElucHV0KClcbiAgcHVibGljIHNldCByZW5kZXJPcmRlcih2YWx1ZTogbnVtYmVyKSB7XG4gICAgaWYgKHRoaXMuX29ialJlZikge1xuICAgICAgdGhpcy5fb2JqUmVmLnJlbmRlck9yZGVyID0gdmFsdWU7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGdldCByZW5kZXJPcmRlcigpOiBudW1iZXIgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9vYmpSZWY/LnJlbmRlck9yZGVyO1xuICB9XG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzZXQgYW5pbWF0aW9ucyh2YWx1ZTogQW5pbWF0aW9uQ2xpcFtdKSB7XG4gICAgaWYgKHRoaXMuX29ialJlZikge1xuICAgICAgdGhpcy5fb2JqUmVmLmFuaW1hdGlvbnMgPSB2YWx1ZTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgZ2V0IGFuaW1hdGlvbnMoKTogQW5pbWF0aW9uQ2xpcFtdIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fb2JqUmVmPy5hbmltYXRpb25zO1xuICB9XG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzZXQgdXNlckRhdGEodmFsdWU6IFJlY29yZDxzdHJpbmcsIGFueT4pIHtcbiAgICBpZiAodGhpcy5fb2JqUmVmKSB7XG4gICAgICB0aGlzLl9vYmpSZWYudXNlckRhdGEgPSB2YWx1ZTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgZ2V0IHVzZXJEYXRhKCk6IFJlY29yZDxzdHJpbmcsIGFueT4gfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9vYmpSZWY/LnVzZXJEYXRhO1xuICB9XG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzZXQgY3VzdG9tRGVwdGhNYXRlcmlhbCh2YWx1ZTogTWF0ZXJpYWwgfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodGhpcy5fb2JqUmVmKSB7XG4gICAgICB0aGlzLl9vYmpSZWYuY3VzdG9tRGVwdGhNYXRlcmlhbCA9IHZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBnZXQgY3VzdG9tRGVwdGhNYXRlcmlhbCgpOiAoTWF0ZXJpYWwgfCB1bmRlZmluZWQpIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fb2JqUmVmPy5jdXN0b21EZXB0aE1hdGVyaWFsO1xuICB9XG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzZXQgY3VzdG9tRGlzdGFuY2VNYXRlcmlhbCh2YWx1ZTogTWF0ZXJpYWwgfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodGhpcy5fb2JqUmVmKSB7XG4gICAgICB0aGlzLl9vYmpSZWYuY3VzdG9tRGlzdGFuY2VNYXRlcmlhbCA9IHZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBnZXQgY3VzdG9tRGlzdGFuY2VNYXRlcmlhbCgpOiAoTWF0ZXJpYWwgfCB1bmRlZmluZWQpIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fb2JqUmVmPy5jdXN0b21EaXN0YW5jZU1hdGVyaWFsO1xuICB9XG5cbiAgcHVibGljIHN0YXRpYyByZWFkb25seSBERUZBVUxUX1VQID0gT2JqZWN0M0QuREVGQVVMVF9VUDtcblxuICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IERFRkFVTFRfTUFUUklYX0FVVE9fVVBEQVRFID1cbiAgICBPYmplY3QzRC5ERUZBVUxUX01BVFJJWF9BVVRPX1VQREFURTtcblxuICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IERFRkFVTFRfTUFUUklYX1dPUkxEX0FVVE9fVVBEQVRFID1cbiAgICBPYmplY3QzRC5ERUZBVUxUX01BVFJJWF9XT1JMRF9BVVRPX1VQREFURTtcblxuICBjb25zdHJ1Y3RvcihAU2tpcFNlbGYoKSBwYXJlbnQ6IFRoT2JqZWN0M0QpIHtcbiAgICBzdXBlcihwYXJlbnQpO1xuICB9XG59XG4iXX0=