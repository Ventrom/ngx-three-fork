/**
 * The following code is ported from pmndrs/drei and adapted to work with Angular and ngx-three
 * Many thanks to pmndrs/drei at its contributors!
 */
import { ChangeDetectionStrategy, Component, EventEmitter, inject, Input, Output, SkipSelf, ViewChild, } from '@angular/core';
import { DoubleSide, OrthographicCamera, PerspectiveCamera, Vector3, } from 'three';
import { RAYCASTER } from '../../events/raycaster.service';
import { ThGroup } from '../../generated';
import * as i0 from "@angular/core";
import * as i1 from "../../ThView";
import * as i2 from "../../generated";
import * as i3 from "@angular/common";
import * as i4 from "../../renderer/th-render.directive";
const v1 = new Vector3();
const v2 = new Vector3();
const v3 = new Vector3();
function defaultCalculatePosition(el, camera, size) {
    const objectPos = v1.setFromMatrixPosition(el.matrixWorld);
    objectPos.project(camera);
    const widthHalf = size.width / 2;
    const heightHalf = size.height / 2;
    return [objectPos.x * widthHalf + widthHalf, -(objectPos.y * heightHalf) + heightHalf];
}
function isObjectBehindCamera(el, camera) {
    const objectPos = v1.setFromMatrixPosition(el.matrixWorld);
    const cameraPos = v2.setFromMatrixPosition(camera.matrixWorld);
    const deltaCamObj = objectPos.sub(cameraPos);
    const camDir = camera.getWorldDirection(v3);
    return deltaCamObj.angleTo(camDir) > Math.PI / 2;
}
function isObjectVisible(el, camera, raycaster, occlude) {
    const elPos = v1.setFromMatrixPosition(el.matrixWorld);
    const screenPos = elPos.clone();
    screenPos.project(camera);
    raycaster.setFromCamera(screenPos, camera);
    const intersects = raycaster.intersectObjects(occlude, true);
    if (intersects.length) {
        const intersectionDistance = intersects[0].distance;
        const pointDistance = elPos.distanceTo(raycaster.ray.origin);
        return pointDistance < intersectionDistance;
    }
    return true;
}
function objectScale(el, camera) {
    if (camera instanceof OrthographicCamera) {
        return camera.zoom;
    }
    else if (camera instanceof PerspectiveCamera) {
        const objectPos = v1.setFromMatrixPosition(el.matrixWorld);
        const cameraPos = v2.setFromMatrixPosition(camera.matrixWorld);
        const vFOV = (camera.fov * Math.PI) / 180;
        const dist = objectPos.distanceTo(cameraPos);
        const scaleFOV = 2 * Math.tan(vFOV / 2) * dist;
        return 1 / scaleFOV;
    }
    else {
        return 1;
    }
}
function objectZIndex(el, camera, zIndexRange) {
    if (camera instanceof PerspectiveCamera || camera instanceof OrthographicCamera) {
        const objectPos = v1.setFromMatrixPosition(el.matrixWorld);
        const cameraPos = v2.setFromMatrixPosition(camera.matrixWorld);
        const dist = objectPos.distanceTo(cameraPos);
        const A = (zIndexRange[1] - zIndexRange[0]) / (camera.far - camera.near);
        const B = zIndexRange[1] - A * camera.far;
        return Math.round(A * dist + B);
    }
    return undefined;
}
const epsilon = (value) => (Math.abs(value) < 1e-10 ? 0 : value);
function getCSSMatrix(matrix, multipliers, prepend = '') {
    let matrix3d = 'matrix3d(';
    for (let i = 0; i !== 16; i++) {
        matrix3d += epsilon(multipliers[i] * matrix.elements[i]) + (i !== 15 ? ',' : ')');
    }
    return prepend + matrix3d;
}
const getCameraCSSMatrix = ((multipliers) => (matrix) => getCSSMatrix(matrix, multipliers))([1, -1, 1, 1, 1, -1, 1, 1, 1, -1, 1, 1, 1, -1, 1, 1]);
const getObjectCSSMatrix = ((scaleMultipliers) => (matrix, factor) => getCSSMatrix(matrix, scaleMultipliers(factor), 'translate(-50%,-50%)'))((f) => [1 / f, 1 / f, 1 / f, 1, -1 / f, -1 / f, -1 / f, -1, 1 / f, 1 / f, 1 / f, 1, 1, 1, 1, 1]);
/**
 * A port of the pmndrs/drei Html component
 *
 * Add Html content to any three.js object3d node
 */
export class HtmlComponent extends ThGroup {
    constructor(view, parent) {
        super(parent);
        this.view = view;
        // eslint-disable-next-line @typescript-eslint/naming-convention
        this.DoubleSide = DoubleSide;
        // eslint-disable-next-line @typescript-eslint/naming-convention
        this.FRAGMENT_SHADER = FRAGMENT_SHADER;
        // eslint-disable-next-line @typescript-eslint/naming-convention
        this.VERTEX_SHADER = VERTEX_SHADER;
        this.prepend = false; // Project content behind the canvas (default: false)
        this.center = false; // Adds a -50%/-50% css transform (default: false) [ignored in transform mode]
        this.fullscreen = false; // Aligns to the upper-left corner, fills the screen (default:false) [ignored in transform mode]
        this.eps = 0.001;
        this.sprite = false; // Renders as sprite, but only in transform mode (default=false)
        this.transform = false; // If true, applies matrix3d transformations (default=false)
        this.zIndexRange = [16777271, 0]; // Z-order range (default=[16777271, 0])
        this.onOcclude = new EventEmitter();
        /**
         * Override default positioning function. [ignored in transform mode]
         */
        this.calculatePosition = defaultCalculatePosition;
        this.as = 'div'; // Wrapping element (default: 'div')
        this.pointerEvents = 'auto';
        this.transformInnerStyles = this.computeInnerStyles();
        this.styles = null;
        this.oldZoom = 0;
        this.oldPosition = [0, 0];
        this.notOccluded = true;
        this.raycaster = inject(RAYCASTER);
    }
    ngOnInit() {
        super.ngOnInit();
        this.styles = this.computeStyles();
    }
    ngAfterViewInit() {
        this.el = document.createElement(this.as);
        this.frameSubscription = this.view.onRender.subscribe(() => this.onFrame());
        if (this.transformOuterRef) {
            this.el.appendChild(this.transformOuterRef.nativeElement);
        }
        if (this.el && !this.target) {
            this.appendElement(this.el);
        }
    }
    onResize() {
        this.styles = this.computeStyles();
    }
    ngOnChanges(changes) {
        super.ngOnChanges(changes);
        /*
        if(this.el) {
          if(changes.portal || changes.transform) {
            this.appendElement(this.el);
          }
    
          if(changes.wrapperClass) {
            this.el.className = changes.wrapperClass.currentValue ?? '';
          }
    
          if(changes.pointerEvents) {
            this.transformInnerStyles = this.computeInnerStyles();
          }
        }
        */
    }
    appendElement(el) {
        if (!this.el || !this.objRef || !this.view.hostElement || !this.view.camera) {
            return;
        }
        this.target = this.portal ?? this.view.hostElement.nativeElement;
        this.view.scene?.objRef?.updateMatrixWorld();
        if (this.transform) {
            el.style.cssText = 'position:absolute;top:0;left:0;pointer-events:none;overflow:hidden;';
        }
        else {
            const vec = this.calculatePosition(this.objRef, this.view.camera.objRef, this.getSize());
            el.style.cssText = `position:absolute;top:0;left:0;transform:translate3d(${vec[0]}px,${vec[1]}px,0);transform-origin:0 0;`;
        }
        if (this.target) {
            if (this.prepend) {
                this.target.prepend(el);
            }
            else {
                this.target.appendChild(el);
            }
        }
    }
    onFrame() {
        const camera = this.view.camera?.objRef;
        const scene = this.view.scene?.objRef;
        const group = this._objRef;
        const size = this.getSize();
        if (!camera || !group || !scene || !this.el) {
            return;
        }
        camera.updateMatrixWorld();
        group.updateWorldMatrix(true, false);
        const vec = this.transform ? this.oldPosition : this.calculatePosition(group, camera, size);
        if (this.transform ||
            Math.abs(this.oldZoom - camera.zoom) > this.eps ||
            Math.abs(this.oldPosition[0] - vec[0]) > this.eps ||
            Math.abs(this.oldPosition[1] - vec[1]) > this.eps) {
            const isBehindCamera = isObjectBehindCamera(group, camera);
            let raytraceTarget = false;
            if (typeof this.occlude === 'boolean') {
                if (this.occlude === true) {
                    raytraceTarget = [scene];
                }
            }
            else if (Array.isArray(this.occlude)) {
                raytraceTarget = this.occlude.map((item) => item.objRef ?? item);
            }
            const previouslyVisible = this.notOccluded;
            if (raytraceTarget) {
                this.notOccluded = !isBehindCamera && isObjectVisible(group, camera, this.raycaster, raytraceTarget);
            }
            else {
                this.notOccluded = !isBehindCamera;
            }
            if (previouslyVisible !== this.notOccluded) {
                if (this.onOcclude.length > 0) {
                    this.onOcclude.next(!this.notOccluded);
                }
                else {
                    this.el.style.display = this.notOccluded ? 'block' : 'none';
                }
            }
            this.el.style.zIndex = `${objectZIndex(group, camera, this.zIndexRange)}`;
            if (this.transform) {
                const [widthHalf, heightHalf] = [size.width / 2, size.height / 2];
                const fov = camera.projectionMatrix.elements[5] * heightHalf;
                const { isOrthographicCamera, top, left, bottom, right } = camera;
                const cameraMatrix = getCameraCSSMatrix(camera.matrixWorldInverse);
                const cameraTransform = isOrthographicCamera
                    ? `scale(${fov})translate(${epsilon(-(right + left) / 2)}px,${epsilon((top + bottom) / 2)}px)`
                    : `translateZ(${fov}px)`;
                let matrix = group.matrixWorld;
                if (this.sprite) {
                    matrix = camera.matrixWorldInverse.clone().transpose().copyPosition(matrix).scale(group.scale);
                    matrix.elements[3] = matrix.elements[7] = matrix.elements[11] = 0;
                    matrix.elements[15] = 1;
                }
                this.el.style.width = size.width + 'px';
                this.el.style.height = size.height + 'px';
                this.el.style.perspective = isOrthographicCamera ? '' : `${fov}px`;
                if (this.transformOuterRef && this.transformInnerRef) {
                    // eslint-disable-next-line max-len
                    this.transformOuterRef.nativeElement.style.transform = `${cameraTransform}${cameraMatrix}translate(${widthHalf}px,${heightHalf}px)`;
                    this.transformInnerRef.nativeElement.style.transform = getObjectCSSMatrix(matrix, 1 / ((this.distanceFactor || 10) / 400));
                }
            }
            else {
                const scale = this.distanceFactor === undefined ? 1 : objectScale(group, camera) * this.distanceFactor;
                this.el.style.transform = `translate3d(${vec[0]}px,${vec[1]}px,0) scale(${scale})`;
            }
            this.oldPosition = vec;
            this.oldZoom = camera.zoom;
        }
    }
    ngOnDestroy() {
        this.el?.remove();
        this.frameSubscription?.unsubscribe();
    }
    computeStyles() {
        const size = this.getSize();
        if (this.transform) {
            return {
                position: 'absolute',
                top: 0,
                left: 0,
                width: size.width + 'px',
                height: size.height + 'px',
                transformStyle: 'preserve-3d',
                pointerEvents: 'none',
            };
        }
        else {
            return {
                position: 'absolute',
                transform: this.center ? 'translate3d(-50%,-50%,0)' : 'none',
                ...(this.fullscreen && {
                    top: -size.height / 2 + 'px',
                    left: -size.width / 2 + 'px',
                    width: size.width + 'px',
                    height: size.height + 'px',
                }),
                ...this.style,
            };
        }
    }
    computeInnerStyles() {
        return { position: 'absolute', pointerEvents: this.pointerEvents };
    }
    getSize() {
        return this.view.viewPort ?? this.view.hostElement.nativeElement.getBoundingClientRect() ?? { width: 0, height: 0 };
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: HtmlComponent, deps: [{ token: i1.ThView }, { token: i2.ThObject3D, skipSelf: true }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.1.2", type: HtmlComponent, selector: "th-html", inputs: { prepend: "prepend", center: "center", fullscreen: "fullscreen", portal: "portal", distanceFactor: "distanceFactor", sprite: "sprite", transform: "transform", zIndexRange: "zIndexRange", style: "style", className: "className", occlude: "occlude", calculatePosition: "calculatePosition", as: "as", wrapperClass: "wrapperClass", pointerEvents: "pointerEvents" }, outputs: { onOcclude: "onOcclude" }, viewQueries: [{ propertyName: "transformOuterRef", first: true, predicate: ["outerRef"], descendants: true }, { propertyName: "transformInnerRef", first: true, predicate: ["innerRef"], descendants: true }], usesInheritance: true, usesOnChanges: true, ngImport: i0, template: "<div [ngStyle]=\"styles\" #outerRef *ngIf=\"transform;  else noTransform\" (onResize)=\"onResize()\">\n    <div #innerRef [ngStyle]=\"transformInnerStyles\" >\n        <div [style]=\"style\" [className]=\"className\">\n            <ng-container *ngTemplateOutlet=\"tempOutlet\" ></ng-container>\n        </div>\n    </div>\n</div>\n<ng-template #noTransform>\n    <div [ngStyle]=\"styles\" [className]=\"className\" #outerRef>\n        <ng-container *ngTemplateOutlet=\"tempOutlet\" ></ng-container>\n    </div>\n</ng-template>\n\n<ng-template #tempOutlet>\n    <ng-content></ng-content>\n</ng-template>\n", dependencies: [{ kind: "directive", type: i3.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i3.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }, { kind: "directive", type: i3.NgStyle, selector: "[ngStyle]", inputs: ["ngStyle"] }, { kind: "directive", type: i4.ThRenderDirective, selector: "[beforeRender], [onResize], [renderOnDemand]", inputs: ["renderOnDemand"], outputs: ["beforeRender", "onResize"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: HtmlComponent, decorators: [{
            type: Component,
            args: [{ selector: 'th-html', changeDetection: ChangeDetectionStrategy.OnPush, template: "<div [ngStyle]=\"styles\" #outerRef *ngIf=\"transform;  else noTransform\" (onResize)=\"onResize()\">\n    <div #innerRef [ngStyle]=\"transformInnerStyles\" >\n        <div [style]=\"style\" [className]=\"className\">\n            <ng-container *ngTemplateOutlet=\"tempOutlet\" ></ng-container>\n        </div>\n    </div>\n</div>\n<ng-template #noTransform>\n    <div [ngStyle]=\"styles\" [className]=\"className\" #outerRef>\n        <ng-container *ngTemplateOutlet=\"tempOutlet\" ></ng-container>\n    </div>\n</ng-template>\n\n<ng-template #tempOutlet>\n    <ng-content></ng-content>\n</ng-template>\n" }]
        }], ctorParameters: () => [{ type: i1.ThView }, { type: i2.ThObject3D, decorators: [{
                    type: SkipSelf
                }] }], propDecorators: { prepend: [{
                type: Input
            }], center: [{
                type: Input
            }], fullscreen: [{
                type: Input
            }], portal: [{
                type: Input
            }], distanceFactor: [{
                type: Input
            }], sprite: [{
                type: Input
            }], transform: [{
                type: Input
            }], zIndexRange: [{
                type: Input
            }], style: [{
                type: Input
            }], className: [{
                type: Input
            }], occlude: [{
                type: Input
            }], onOcclude: [{
                type: Output
            }], calculatePosition: [{
                type: Input
            }], as: [{
                type: Input
            }], wrapperClass: [{
                type: Input
            }], pointerEvents: [{
                type: Input
            }], transformOuterRef: [{
                type: ViewChild,
                args: ['outerRef']
            }], transformInnerRef: [{
                type: ViewChild,
                args: ['innerRef']
            }] } });
export const VERTEX_SHADER = /* glsl */ `
/*
  This shader is from the THREE's SpriteMaterial.
  We need to turn the backing plane into a Sprite
  (make it always face the camera) if "transfrom" 
  is false. 
*/
#include <common>
void main() {
  vec2 center = vec2(0., 1.);
  float rotation = 0.0;
  
  // This is somewhat arbitrary, but it seems to work well
  // Need to figure out how to derive this dynamically if it even matters
  float size = 0.03;
  vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
  vec2 scale;
  scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
  scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
  bool isPerspective = isPerspectiveMatrix( projectionMatrix );
  if ( isPerspective ) scale *= - mvPosition.z;
  vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale * size;
  vec2 rotatedPosition;
  rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
  rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
  mvPosition.xy += rotatedPosition;
  gl_Position = projectionMatrix * mvPosition;
}
`;
export const FRAGMENT_SHADER = /* glsl */ `
void main() {
  gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0);
}
`;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHRtbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtdGhyZWUvc3JjL2xpYi9leHRyYS93ZWIvaHRtbC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtdGhyZWUvc3JjL2xpYi9leHRyYS93ZWIvaHRtbC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0dBR0c7QUFFSCxPQUFPLEVBRUwsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFFVCxZQUFZLEVBQ1osTUFBTSxFQUNOLEtBQUssRUFJTCxNQUFNLEVBQ04sUUFBUSxFQUNSLFNBQVMsR0FDVixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBRUwsVUFBVSxFQUdWLGtCQUFrQixFQUNsQixpQkFBaUIsRUFHakIsT0FBTyxHQUNSLE1BQU0sT0FBTyxDQUFDO0FBQ2YsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQzNELE9BQU8sRUFBRSxPQUFPLEVBQWMsTUFBTSxpQkFBaUIsQ0FBQzs7Ozs7O0FBSXRELE1BQU0sRUFBRSxHQUFHLElBQUksT0FBTyxFQUFFLENBQUM7QUFDekIsTUFBTSxFQUFFLEdBQUcsSUFBSSxPQUFPLEVBQUUsQ0FBQztBQUN6QixNQUFNLEVBQUUsR0FBRyxJQUFJLE9BQU8sRUFBRSxDQUFDO0FBRXpCLFNBQVMsd0JBQXdCLENBQUMsRUFBWSxFQUFFLE1BQWMsRUFBRSxJQUF1QztJQUNyRyxNQUFNLFNBQVMsR0FBRyxFQUFFLENBQUMscUJBQXFCLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQzNELFNBQVMsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDMUIsTUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7SUFDakMsTUFBTSxVQUFVLEdBQUcsSUFBSSxDQUFDLE1B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QUMsVUFBVTtnQkFHYixpQkFBaUI7c0JBRHhCLFNBQVM7dUJBQUMsVUFBVTs7QUFrTXZCLE1BQU0sQ0FBQyxNQUFNLGFBQWEsR0FBRyxVQUFVLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0E0QnZDLENBQUM7QUFFRixNQUFNLENBQUMsTUFBTSxlQUFlLEdBQUcsVUFBVSxDQUFDOzs7O0NBSXpDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFRoZSBmb2xsb3dpbmcgY29kZSBpcyBwb3J0ZWQgZnJvbSBwbW5kcnMvZHJlaSBhbmQgYWRhcHRlZCB0byB3b3JrIHdpdGggQW5ndWxhciBhbmQgbmd4LXRocmVlXG4gKiBNYW55IHRoYW5rcyB0byBwbW5kcnMvZHJlaSBhdCBpdHMgY29udHJpYnV0b3JzIVxuICovXG5cbmltcG9ydCB7XG4gIEFmdGVyVmlld0luaXQsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIEV2ZW50RW1pdHRlcixcbiAgaW5qZWN0LFxuICBJbnB1dCxcbiAgT25DaGFuZ2VzLFxuICBPbkRlc3Ryb3ksXG4gIE9uSW5pdCxcbiAgT3V0cHV0LFxuICBTa2lwU2VsZixcbiAgVmlld0NoaWxkLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHtcbiAgQ2FtZXJhLFxuICBEb3VibGVTaWRlLFxuICBNYXRyaXg0LFxuICBPYmplY3QzRCxcbiAgT3J0aG9ncmFwaGljQ2FtZXJhLFxuICBQZXJzcGVjdGl2ZUNhbWVyYSxcbiAgUmF5Y2FzdGVyLFxuICBWZWN0b3IyLFxuICBWZWN0b3IzLFxufSBmcm9tICd0aHJlZSc7XG5pbXBvcnQgeyBSQVlDQVNURVIgfSBmcm9tICcuLi8uLi9ldmVudHMvcmF5Y2FzdGVyLnNlcnZpY2UnO1xuaW1wb3J0IHsgVGhHcm91cCwgVGhPYmplY3QzRCB9IGZyb20gJy4uLy4uL2dlbmVyYXRlZCc7XG5pbXBvcnQgeyBOZ0NoYW5nZXMgfSBmcm9tICcuLi8uLi91dGlsJztcbmltcG9ydCB7IFRoVmlldyB9IGZyb20gJy4uLy4uL1RoVmlldyc7XG5cbmNvbnN0IHYxID0gbmV3IFZlY3RvcjMoKTtcbmNvbnN0IHYyID0gbmV3IFZlY3RvcjMoKTtcbmNvbnN0IHYzID0gbmV3IFZlY3RvcjMoKTtcblxuZnVuY3Rpb24gZGVmYXVsdENhbGN1bGF0ZVBvc2l0aW9uKGVsOiBPYmplY3QzRCwgY2FtZXJhOiBDYW1lcmEsIHNpemU6IHsgd2lkdGg6IG51bWJlcjsgaGVpZ2h0OiBudW1iZXIgfSkge1xuICBjb25zdCBvYmplY3RQb3MgPSB2MS5zZXRGcm9tTWF0cml4UG9zaXRpb24oZWwubWF0cml4V29ybGQpO1xuICBvYmplY3RQb3MucHJvamVjdChjYW1lcmEpO1xuICBjb25zdCB3aWR0aEhhbGYgPSBzaXplLndpZHRoIC8gMjtcbiAgY29uc3QgaGVpZ2h0SGFsZiA9IHNpemUuaGVpZ2h0IC8gMjtcbiAgcmV0dXJuIFtvYmplY3RQb3MueCAqIHdpZHRoSGFsZiArIHdpZHRoSGFsZiwgLShvYmplY3RQb3MueSAqIGhlaWdodEhhbGYpICsgaGVpZ2h0SGFsZl07XG59XG5cbmV4cG9ydCB0eXBlIENhbGN1bGF0ZVBvc2l0aW9uID0gdHlwZW9mIGRlZmF1bHRDYWxjdWxhdGVQb3NpdGlvbjtcblxuZnVuY3Rpb24gaXNPYmplY3RCZWhpbmRDYW1lcmEoZWw6IE9iamVjdDNELCBjYW1lcmE6IENhbWVyYSkge1xuICBjb25zdCBvYmplY3RQb3MgPSB2MS5zZXRGcm9tTWF0cml4UG9zaXRpb24oZWwubWF0cml4V29ybGQpO1xuICBjb25zdCBjYW1lcmFQb3MgPSB2Mi5zZXRGcm9tTWF0cml4UG9zaXRpb24oY2FtZXJhLm1hdHJpeFdvcmxkKTtcbiAgY29uc3QgZGVsdGFDYW1PYmogPSBvYmplY3RQb3Muc3ViKGNhbWVyYVBvcyk7XG4gIGNvbnN0IGNhbURpciA9IGNhbWVyYS5nZXRXb3JsZERpcmVjdGlvbih2Myk7XG4gIHJldHVybiBkZWx0YUNhbU9iai5hbmdsZVRvKGNhbURpcikgPiBNYXRoLlBJIC8gMjtcbn1cblxuZnVuY3Rpb24gaXNPYmplY3RWaXNpYmxlKGVsOiBPYmplY3QzRCwgY2FtZXJhOiBDYW1lcmEsIHJheWNhc3RlcjogUmF5Y2FzdGVyLCBvY2NsdWRlOiBPYmplY3QzRFtdKSB7XG4gIGNvbnN0IGVsUG9zID0gdjEuc2V0RnJvbU1hdHJpeFBvc2l0aW9uKGVsLm1hdHJpeFdvcmxkKTtcbiAgY29uc3Qgc2NyZWVuUG9zID0gZWxQb3MuY2xvbmUoKTtcbiAgc2NyZWVuUG9zLnByb2plY3QoY2FtZXJhKTtcbiAgcmF5Y2FzdGVyLnNldEZyb21DYW1lcmEoc2NyZWVuUG9zIGFzIHVua25vd24gYXMgVmVjdG9yMiwgY2FtZXJhKTtcbiAgY29uc3QgaW50ZXJzZWN0cyA9IHJheWNhc3Rlci5pbnRlcnNlY3RPYmplY3RzKG9jY2x1ZGUsIHRydWUpO1xuICBpZiAoaW50ZXJzZWN0cy5sZW5ndGgpIHtcbiAgICBjb25zdCBpbnRlcnNlY3Rpb25EaXN0YW5jZSA9IGludGVyc2VjdHNbMF0uZGlzdGFuY2U7XG4gICAgY29uc3QgcG9pbnREaXN0YW5jZSA9IGVsUG9zLmRpc3RhbmNlVG8ocmF5Y2FzdGVyLnJheS5vcmlnaW4pO1xuICAgIHJldHVybiBwb2ludERpc3RhbmNlIDwgaW50ZXJzZWN0aW9uRGlzdGFuY2U7XG4gIH1cbiAgcmV0dXJuIHRydWU7XG59XG5cbmZ1bmN0aW9uIG9iamVjdFNjYWxlKGVsOiBPYmplY3QzRCwgY2FtZXJhOiBDYW1lcmEpIHtcbiAgaWYgKGNhbWVyYSBpbnN0YW5jZW9mIE9ydGhvZ3JhcGhpY0NhbWVyYSkge1xuICAgIHJldHVybiBjYW1lcmEuem9vbTtcbiAgfSBlbHNlIGlmIChjYW1lcmEgaW5zdGFuY2VvZiBQZXJzcGVjdGl2ZUNhbWVyYSkge1xuICAgIGNvbnN0IG9iamVjdFBvcyA9IHYxLnNldEZyb21NYXRyaXhQb3NpdGlvbihlbC5tYXRyaXhXb3JsZCk7XG4gICAgY29uc3QgY2FtZXJhUG9zID0gdjIuc2V0RnJvbU1hdHJpeFBvc2l0aW9uKGNhbWVyYS5tYXRyaXhXb3JsZCk7XG4gICAgY29uc3QgdkZPViA9IChjYW1lcmEuZm92ICogTWF0aC5QSSkgLyAxODA7XG4gICAgY29uc3QgZGlzdCA9IG9iamVjdFBvcy5kaXN0YW5jZVRvKGNhbWVyYVBvcyk7XG4gICAgY29uc3Qgc2NhbGVGT1YgPSAyICogTWF0aC50YW4odkZPViAvIDIpICogZGlzdDtcbiAgICByZXR1cm4gMSAvIHNjYWxlRk9WO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiAxO1xuICB9XG59XG5cbmZ1bmN0aW9uIG9iamVjdFpJbmRleChlbDogT2JqZWN0M0QsIGNhbWVyYTogQ2FtZXJhLCB6SW5kZXhSYW5nZTogQXJyYXk8bnVtYmVyPikge1xuICBpZiAoY2FtZXJhIGluc3RhbmNlb2YgUGVyc3BlY3RpdmVDYW1lcmEgfHwgY2FtZXJhIGluc3RhbmNlb2YgT3J0aG9ncmFwaGljQ2FtZXJhKSB7XG4gICAgY29uc3Qgb2JqZWN0UG9zID0gdjEuc2V0RnJvbU1hdHJpeFBvc2l0aW9uKGVsLm1hdHJpeFdvcmxkKTtcbiAgICBjb25zdCBjYW1lcmFQb3MgPSB2Mi5zZXRGcm9tTWF0cml4UG9zaXRpb24oY2FtZXJhLm1hdHJpeFdvcmxkKTtcbiAgICBjb25zdCBkaXN0ID0gb2JqZWN0UG9zLmRpc3RhbmNlVG8oY2FtZXJhUG9zKTtcbiAgICBjb25zdCBBID0gKHpJbmRleFJhbmdlWzFdIC0gekluZGV4UmFuZ2VbMF0pIC8gKGNhbWVyYS5mYXIgLSBjYW1lcmEubmVhcik7XG4gICAgY29uc3QgQiA9IHpJbmRleFJhbmdlWzFdIC0gQSAqIGNhbWVyYS5mYXI7XG4gICAgcmV0dXJuIE1hdGgucm91bmQoQSAqIGRpc3QgKyBCKTtcbiAgfVxuICByZXR1cm4gdW5kZWZpbmVkO1xufVxuXG5jb25zdCBlcHNpbG9uID0gKHZhbHVlOiBudW1iZXIpID0+IChNYXRoLmFicyh2YWx1ZSkgPCAxZS0xMCA/IDAgOiB2YWx1ZSk7XG5cbmZ1bmN0aW9uIGdldENTU01hdHJpeChtYXRyaXg6IE1hdHJpeDQsIG11bHRpcGxpZXJzOiBudW1iZXJbXSwgcHJlcGVuZCA9ICcnKSB7XG4gIGxldCBtYXRyaXgzZCA9ICdtYXRyaXgzZCgnO1xuICBmb3IgKGxldCBpID0gMDsgaSAhPT0gMTY7IGkrKykge1xuICAgIG1hdHJpeDNkICs9IGVwc2lsb24obXVsdGlwbGllcnNbaV0gKiBtYXRyaXguZWxlbWVudHNbaV0pICsgKGkgIT09IDE1ID8gJywnIDogJyknKTtcbiAgfVxuICByZXR1cm4gcHJlcGVuZCArIG1hdHJpeDNkO1xufVxuXG5jb25zdCBnZXRDYW1lcmFDU1NNYXRyaXggPSAoXG4gIChtdWx0aXBsaWVyczogbnVtYmVyW10pID0+IChtYXRyaXg6IE1hdHJpeDQpID0+XG4gICAgZ2V0Q1NTTWF0cml4KG1hdHJpeCwgbXVsdGlwbGllcnMpXG4pKFsxLCAtMSwgMSwgMSwgMSwgLTEsIDEsIDEsIDEsIC0xLCAxLCAxLCAxLCAtMSwgMSwgMV0pO1xuXG5jb25zdCBnZXRPYmplY3RDU1NNYXRyaXggPSAoXG4gIChzY2FsZU11bHRpcGxpZXJzOiAobjogbnVtYmVyKSA9PiBudW1iZXJbXSkgPT4gKG1hdHJpeDogTWF0cml4NCwgZmFjdG9yOiBudW1iZXIpID0+XG4gICAgZ2V0Q1NTTWF0cml4KG1hdHJpeCwgc2NhbGVNdWx0aXBsaWVycyhmYWN0b3IpLCAndHJhbnNsYXRlKC01MCUsLTUwJSknKVxuKSgoZjogbnVtYmVyKSA9PiBbMSAvIGYsIDEgLyBmLCAxIC8gZiwgMSwgLTEgLyBmLCAtMSAvIGYsIC0xIC8gZiwgLTEsIDEgLyBmLCAxIC8gZiwgMSAvIGYsIDEsIDEsIDEsIDEsIDFdKTtcblxudHlwZSBQb2ludGVyRXZlbnRzUHJvcGVydGllcyA9XG4gIHwgJ2F1dG8nXG4gIHwgJ25vbmUnXG4gIHwgJ3Zpc2libGVQYWludGVkJ1xuICB8ICd2aXNpYmxlRmlsbCdcbiAgfCAndmlzaWJsZVN0cm9rZSdcbiAgfCAndmlzaWJsZSdcbiAgfCAncGFpbnRlZCdcbiAgfCAnZmlsbCdcbiAgfCAnc3Ryb2tlJ1xuICB8ICdhbGwnXG4gIHwgJ2luaGVyaXQnO1xuXG4vKipcbiAqIEEgcG9ydCBvZiB0aGUgcG1uZHJzL2RyZWkgSHRtbCBjb21wb25lbnRcbiAqXG4gKiBBZGQgSHRtbCBjb250ZW50IHRvIGFueSB0aHJlZS5qcyBvYmplY3QzZCBub2RlXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3RoLWh0bWwnLFxuICB0ZW1wbGF0ZVVybDogJy4vaHRtbC5jb21wb25lbnQuaHRtbCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBIdG1sQ29tcG9uZW50IGV4dGVuZHMgVGhHcm91cCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95LCBPbkNoYW5nZXMsIEFmdGVyVmlld0luaXQge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25hbWluZy1jb252ZW50aW9uXG4gIHByb3RlY3RlZCByZWFkb25seSBEb3VibGVTaWRlID0gRG91YmxlU2lkZTtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uYW1pbmctY29udmVudGlvblxuICBwcm90ZWN0ZWQgcmVhZG9ubHkgRlJBR01FTlRfU0hBREVSID0gRlJBR01FTlRfU0hBREVSO1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25hbWluZy1jb252ZW50aW9uXG4gIHByb3RlY3RlZCByZWFkb25seSBWRVJURVhfU0hBREVSID0gVkVSVEVYX1NIQURFUjtcblxuICBASW5wdXQoKSBwcmVwZW5kID0gZmFsc2U7IC8vIFByb2plY3QgY29udGVudCBiZWhpbmQgdGhlIGNhbnZhcyAoZGVmYXVsdDogZmFsc2UpXG4gIEBJbnB1dCgpIGNlbnRlciA9IGZhbHNlOyAvLyBBZGRzIGEgLTUwJS8tNTAlIGNzcyB0cmFuc2Zvcm0gKGRlZmF1bHQ6IGZhbHNlKSBbaWdub3JlZCBpbiB0cmFuc2Zvcm0gbW9kZV1cbiAgQElucHV0KCkgZnVsbHNjcmVlbiA9IGZhbHNlOyAvLyBBbGlnbnMgdG8gdGhlIHVwcGVyLWxlZnQgY29ybmVyLCBmaWxscyB0aGUgc2NyZWVuIChkZWZhdWx0OmZhbHNlKSBbaWdub3JlZCBpbiB0cmFuc2Zvcm0gbW9kZV1cbiAgZXBzID0gMC4wMDE7XG4gIEBJbnB1dCgpIHBvcnRhbD86IEhUTUxFbGVtZW50OyAvLyBSZWZlcmVuY2UgdG8gdGFyZ2V0IGNvbnRhaW5lciAoZGVmYXVsdD11bmRlZmluZWQpXG4gIC8qIElmIHNldCAoZGVmYXVsdDogdW5kZWZpbmVkKSwgY2hpbGRyZW4gd2lsbCBiZSBzY2FsZWQgYnlcbiAgICogdGhpcyBmYWN0b3IsIGFuZCBhbHNvIGJ5IGRpc3RhbmNlIHRvIGEgUGVyc3BlY3RpdmVDYW1lcmEgLyB6b29tIGJ5IGEgT3J0aG9ncmFwaGljQ2FtZXJhLlxuICAgKi9cbiAgQElucHV0KCkgZGlzdGFuY2VGYWN0b3I/OiBudW1iZXI7XG4gIEBJbnB1dCgpIHNwcml0ZSA9IGZhbHNlOyAvLyBSZW5kZXJzIGFzIHNwcml0ZSwgYnV0IG9ubHkgaW4gdHJhbnNmb3JtIG1vZGUgKGRlZmF1bHQ9ZmFsc2UpXG4gIEBJbnB1dCgpIHRyYW5zZm9ybSA9IGZhbHNlOyAvLyBJZiB0cnVlLCBhcHBsaWVzIG1hdHJpeDNkIHRyYW5zZm9ybWF0aW9ucyAoZGVmYXVsdD1mYWxzZSlcbiAgQElucHV0KCkgekluZGV4UmFuZ2U6IFtudW1iZXIsIG51bWJlcl0gPSBbMTY3NzcyNzEsIDBdOyAvLyBaLW9yZGVyIHJhbmdlIChkZWZhdWx0PVsxNjc3NzI3MSwgMF0pXG5cbiAgQElucHV0KCkgc3R5bGU/OiBQYXJ0aWFsPENTU1N0eWxlRGVjbGFyYXRpb24+O1xuICBASW5wdXQoKSBjbGFzc05hbWU/OiBzdHJpbmc7XG5cbiAgLy8gT2NjbHVzaW9uIGJhc2VkIG9mZiB3b3JrIGJ5IEplcm9tZSBFdGllbm5lIGFuZCBKYW1lcyBCYWljb2lhbnVcbiAgLy8gaHR0cHM6Ly93d3cueW91dHViZS5jb20vd2F0Y2g/dj1TY1pjVUVER2pKSVxuICAvLyBhcyB3ZWxsIGFzIEpvZSBQZWEgaW4gQ29kZVBlbjogaHR0cHM6Ly9jb2RlcGVuLmlvL3RydXNrdHIvcGVuL1JqektKeFxuICBASW5wdXQoKSBvY2NsdWRlPzogT2JqZWN0M0RbXSB8IFRoT2JqZWN0M0RbXSB8IGJvb2xlYW47XG4gIEBPdXRwdXQoKVxuICBwdWJsaWMgb25PY2NsdWRlID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xuXG4gIC8qKlxuICAgKiBPdmVycmlkZSBkZWZhdWx0IHBvc2l0aW9uaW5nIGZ1bmN0aW9uLiBbaWdub3JlZCBpbiB0cmFuc2Zvcm0gbW9kZV1cbiAgICovXG4gIEBJbnB1dCgpIGNhbGN1bGF0ZVBvc2l0aW9uOiBDYWxjdWxhdGVQb3NpdGlvbiA9IGRlZmF1bHRDYWxjdWxhdGVQb3NpdGlvbjtcbiAgQElucHV0KCkgYXMgPSAnZGl2JzsgLy8gV3JhcHBpbmcgZWxlbWVudCAoZGVmYXVsdDogJ2RpdicpXG4gIEBJbnB1dCgpIHdyYXBwZXJDbGFzcz86IHN0cmluZzsgLy8gVGhlIGNsYXNzTmFtZSBvZiB0aGUgd3JhcHBpbmcgZWxlbWVudCAoZGVmYXVsdDogdW5kZWZpbmVkKVxuICBASW5wdXQoKSBwb2ludGVyRXZlbnRzOiBQb2ludGVyRXZlbnRzUHJvcGVydGllcyA9ICdhdXRvJztcblxuICBwcm90ZWN0ZWQgdHJhbnNmb3JtSW5uZXJTdHlsZXMgPSB0aGlzLmNvbXB1dGVJbm5lclN0eWxlcygpO1xuICBwcm90ZWN0ZWQgc3R5bGVzOiBSZWNvcmQ8c3RyaW5nLCBhbnk+IHwgbnVsbCA9IG51bGw7XG5cbiAgcHJpdmF0ZSBvbGRab29tID0gMDtcbiAgcHJpdmF0ZSBvbGRQb3NpdGlvbiA9IFswLCAwXTtcbiAgcHJpdmF0ZSBub3RPY2NsdWRlZCA9IHRydWU7XG5cbiAgQFZpZXdDaGlsZCgnb3V0ZXJSZWYnKVxuICBwcml2YXRlIHRyYW5zZm9ybU91dGVyUmVmPzogRWxlbWVudFJlZjxIVE1MRGl2RWxlbWVudD47XG4gIEBWaWV3Q2hpbGQoJ2lubmVyUmVmJylcbiAgcHJpdmF0ZSB0cmFuc2Zvcm1Jbm5lclJlZj86IEVsZW1lbnRSZWY8SFRNTERpdkVsZW1lbnQ+O1xuICBwcml2YXRlIGVsPzogSFRNTEVsZW1lbnQ7XG4gIHByaXZhdGUgdGFyZ2V0PzogSFRNTEVsZW1lbnQgfCBudWxsO1xuICBwcml2YXRlIGZyYW1lU3Vic2NyaXB0aW9uPzogU3Vic2NyaXB0aW9uO1xuICBwcml2YXRlIHJheWNhc3RlciA9IGluamVjdChSQVlDQVNURVIpO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgdmlldzogVGhWaWV3LFxuICAgIEBTa2lwU2VsZigpIHBhcmVudDogVGhPYmplY3QzRCxcbiAgKSB7XG4gICAgc3VwZXIocGFyZW50KTtcbiAgfVxuXG4gIHB1YmxpYyBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICBzdXBlci5uZ09uSW5pdCgpO1xuICAgIHRoaXMuc3R5bGVzID0gdGhpcy5jb21wdXRlU3R5bGVzKCk7XG4gIH1cblxuICBwdWJsaWMgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIHRoaXMuZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRoaXMuYXMpO1xuICAgIHRoaXMuZnJhbWVTdWJzY3JpcHRpb24gPSB0aGlzLnZpZXcub25SZW5kZXIuc3Vic2NyaWJlKCgpID0+IHRoaXMub25GcmFtZSgpKTtcbiAgICBpZiAodGhpcy50cmFuc2Zvcm1PdXRlclJlZikge1xuICAgICAgdGhpcy5lbC5hcHBlbmRDaGlsZCh0aGlzLnRyYW5zZm9ybU91dGVyUmVmLm5hdGl2ZUVsZW1lbnQpO1xuICAgIH1cbiAgICBpZiAodGhpcy5lbCAmJiAhdGhpcy50YXJnZXQpIHtcbiAgICAgIHRoaXMuYXBwZW5kRWxlbWVudCh0aGlzLmVsKTtcbiAgICB9XG4gIH1cblxuICBwcm90ZWN0ZWQgb25SZXNpemUoKSB7XG4gICAgdGhpcy5zdHlsZXMgPSB0aGlzLmNvbXB1dGVTdHlsZXMoKTtcbiAgfVxuXG4gIHB1YmxpYyBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBOZ0NoYW5nZXM8SHRtbENvbXBvbmVudD4pOiB2b2lkIHtcbiAgICBzdXBlci5uZ09uQ2hhbmdlcyhjaGFuZ2VzKTtcbiAgICAvKlxuICAgIGlmKHRoaXMuZWwpIHtcbiAgICAgIGlmKGNoYW5nZXMucG9ydGFsIHx8IGNoYW5nZXMudHJhbnNmb3JtKSB7XG4gICAgICAgIHRoaXMuYXBwZW5kRWxlbWVudCh0aGlzLmVsKTtcbiAgICAgIH1cblxuICAgICAgaWYoY2hhbmdlcy53cmFwcGVyQ2xhc3MpIHtcbiAgICAgICAgdGhpcy5lbC5jbGFzc05hbWUgPSBjaGFuZ2VzLndyYXBwZXJDbGFzcy5jdXJyZW50VmFsdWUgPz8gJyc7XG4gICAgICB9XG5cbiAgICAgIGlmKGNoYW5nZXMucG9pbnRlckV2ZW50cykge1xuICAgICAgICB0aGlzLnRyYW5zZm9ybUlubmVyU3R5bGVzID0gdGhpcy5jb21wdXRlSW5uZXJTdHlsZXMoKTtcbiAgICAgIH1cbiAgICB9XG4gICAgKi9cbiAgfVxuXG4gIHByaXZhdGUgYXBwZW5kRWxlbWVudChlbDogSFRNTEVsZW1lbnQpIHtcbiAgICBpZiAoIXRoaXMuZWwgfHwgIXRoaXMub2JqUmVmIHx8ICF0aGlzLnZpZXcuaG9zdEVsZW1lbnQgfHwgIXRoaXMudmlldy5jYW1lcmEpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy50YXJnZXQgPSB0aGlzLnBvcnRhbCA/PyB0aGlzLnZpZXcuaG9zdEVsZW1lbnQubmF0aXZlRWxlbWVudDtcbiAgICB0aGlzLnZpZXcuc2NlbmU/Lm9ialJlZj8udXBkYXRlTWF0cml4V29ybGQoKTtcbiAgICBpZiAodGhpcy50cmFuc2Zvcm0pIHtcbiAgICAgIGVsLnN0eWxlLmNzc1RleHQgPSAncG9zaXRpb246YWJzb2x1dGU7dG9wOjA7bGVmdDowO3BvaW50ZXItZXZlbnRzOm5vbmU7b3ZlcmZsb3c6aGlkZGVuOyc7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHZlYyA9IHRoaXMuY2FsY3VsYXRlUG9zaXRpb24odGhpcy5vYmpSZWYsIHRoaXMudmlldy5jYW1lcmEub2JqUmVmIGFzIENhbWVyYSwgdGhpcy5nZXRTaXplKCkpO1xuICAgICAgZWwuc3R5bGUuY3NzVGV4dCA9IGBwb3NpdGlvbjphYnNvbHV0ZTt0b3A6MDtsZWZ0OjA7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKCR7dmVjWzBdfXB4LCR7dmVjWzFdfXB4LDApO3RyYW5zZm9ybS1vcmlnaW46MCAwO2A7XG4gICAgfVxuICAgIGlmICh0aGlzLnRhcmdldCkge1xuICAgICAgaWYgKHRoaXMucHJlcGVuZCkge1xuICAgICAgICB0aGlzLnRhcmdldC5wcmVwZW5kKGVsKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMudGFyZ2V0LmFwcGVuZENoaWxkKGVsKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwdWJsaWMgb25GcmFtZSgpIHtcbiAgICBjb25zdCBjYW1lcmEgPSB0aGlzLnZpZXcuY2FtZXJhPy5vYmpSZWYgYXMgUGVyc3BlY3RpdmVDYW1lcmEgfCBPcnRob2dyYXBoaWNDYW1lcmEgfCB1bmRlZmluZWQ7XG4gICAgY29uc3Qgc2NlbmUgPSB0aGlzLnZpZXcuc2NlbmU/Lm9ialJlZjtcbiAgICBjb25zdCBncm91cCA9IHRoaXMuX29ialJlZjtcbiAgICBjb25zdCBzaXplID0gdGhpcy5nZXRTaXplKCk7XG4gICAgaWYgKCFjYW1lcmEgfHwgIWdyb3VwIHx8ICFzY2VuZSB8fCAhdGhpcy5lbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNhbWVyYS51cGRhdGVNYXRyaXhXb3JsZCgpO1xuICAgIGdyb3VwLnVwZGF0ZVdvcmxkTWF0cml4KHRydWUsIGZhbHNlKTtcbiAgICBjb25zdCB2ZWMgPSB0aGlzLnRyYW5zZm9ybSA/IHRoaXMub2xkUG9zaXRpb24gOiB0aGlzLmNhbGN1bGF0ZVBvc2l0aW9uKGdyb3VwLCBjYW1lcmEsIHNpemUpO1xuXG4gICAgaWYgKFxuICAgICAgdGhpcy50cmFuc2Zvcm0gfHxcbiAgICAgIE1hdGguYWJzKHRoaXMub2xkWm9vbSAtIGNhbWVyYS56b29tKSA+IHRoaXMuZXBzIHx8XG4gICAgICBNYXRoLmFicyh0aGlzLm9sZFBvc2l0aW9uWzBdIC0gdmVjWzBdKSA+IHRoaXMuZXBzIHx8XG4gICAgICBNYXRoLmFicyh0aGlzLm9sZFBvc2l0aW9uWzFdIC0gdmVjWzFdKSA+IHRoaXMuZXBzXG4gICAgKSB7XG4gICAgICBjb25zdCBpc0JlaGluZENhbWVyYSA9IGlzT2JqZWN0QmVoaW5kQ2FtZXJhKGdyb3VwLCBjYW1lcmEpO1xuICAgICAgbGV0IHJheXRyYWNlVGFyZ2V0OiBudWxsIHwgdW5kZWZpbmVkIHwgYm9vbGVhbiB8IE9iamVjdDNEW10gPSBmYWxzZTtcbiAgICAgIGlmICh0eXBlb2YgdGhpcy5vY2NsdWRlID09PSAnYm9vbGVhbicpIHtcbiAgICAgICAgaWYgKHRoaXMub2NjbHVkZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgIHJheXRyYWNlVGFyZ2V0ID0gW3NjZW5lXTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KHRoaXMub2NjbHVkZSkpIHtcbiAgICAgICAgcmF5dHJhY2VUYXJnZXQgPSB0aGlzLm9jY2x1ZGUubWFwKChpdGVtKSA9PiAoaXRlbSBhcyBQYXJ0aWFsPFRoT2JqZWN0M0Q+KS5vYmpSZWYgPz8gaXRlbSkgYXMgT2JqZWN0M0RbXTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgcHJldmlvdXNseVZpc2libGUgPSB0aGlzLm5vdE9jY2x1ZGVkO1xuICAgICAgaWYgKHJheXRyYWNlVGFyZ2V0KSB7XG4gICAgICAgIHRoaXMubm90T2NjbHVkZWQgPSAhaXNCZWhpbmRDYW1lcmEgJiYgaXNPYmplY3RWaXNpYmxlKGdyb3VwLCBjYW1lcmEsIHRoaXMucmF5Y2FzdGVyLCByYXl0cmFjZVRhcmdldCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLm5vdE9jY2x1ZGVkID0gIWlzQmVoaW5kQ2FtZXJhO1xuICAgICAgfVxuXG4gICAgICBpZiAocHJldmlvdXNseVZpc2libGUgIT09IHRoaXMubm90T2NjbHVkZWQpIHtcbiAgICAgICAgaWYgKHRoaXMub25PY2NsdWRlLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICB0aGlzLm9uT2NjbHVkZS5uZXh0KCF0aGlzLm5vdE9jY2x1ZGVkKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLmVsLnN0eWxlLmRpc3BsYXkgPSB0aGlzLm5vdE9jY2x1ZGVkID8gJ2Jsb2NrJyA6ICdub25lJztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB0aGlzLmVsLnN0eWxlLnpJbmRleCA9IGAke29iamVjdFpJbmRleChncm91cCwgY2FtZXJhLCB0aGlzLnpJbmRleFJhbmdlKX1gO1xuICAgICAgaWYgKHRoaXMudHJhbnNmb3JtKSB7XG4gICAgICAgIGNvbnN0IFt3aWR0aEhhbGYsIGhlaWdodEhhbGZdID0gW3NpemUud2lkdGggLyAyLCBzaXplLmhlaWdodCAvIDJdO1xuICAgICAgICBjb25zdCBmb3YgPSBjYW1lcmEucHJvamVjdGlvbk1hdHJpeC5lbGVtZW50c1s1XSAqIGhlaWdodEhhbGY7XG4gICAgICAgIGNvbnN0IHsgaXNPcnRob2dyYXBoaWNDYW1lcmEsIHRvcCwgbGVmdCwgYm90dG9tLCByaWdodCB9ID0gY2FtZXJhIGFzIE9ydGhvZ3JhcGhpY0NhbWVyYTtcbiAgICAgICAgY29uc3QgY2FtZXJhTWF0cml4ID0gZ2V0Q2FtZXJhQ1NTTWF0cml4KGNhbWVyYS5tYXRyaXhXb3JsZEludmVyc2UpO1xuICAgICAgICBjb25zdCBjYW1lcmFUcmFuc2Zvcm0gPSBpc09ydGhvZ3JhcGhpY0NhbWVyYVxuICAgICAgICAgID8gYHNjYWxlKCR7Zm92fSl0cmFuc2xhdGUoJHtlcHNpbG9uKC0ocmlnaHQgKyBsZWZ0KSAvIDIpfXB4LCR7ZXBzaWxvbigodG9wICsgYm90dG9tKSAvIDIpfXB4KWBcbiAgICAgICAgICA6IGB0cmFuc2xhdGVaKCR7Zm92fXB4KWA7XG4gICAgICAgIGxldCBtYXRyaXggPSBncm91cC5tYXRyaXhXb3JsZDtcbiAgICAgICAgaWYgKHRoaXMuc3ByaXRlKSB7XG4gICAgICAgICAgbWF0cml4ID0gY2FtZXJhLm1hdHJpeFdvcmxkSW52ZXJzZS5jbG9uZSgpLnRyYW5zcG9zZSgpLmNvcHlQb3NpdGlvbihtYXRyaXgpLnNjYWxlKGdyb3VwLnNjYWxlKTtcbiAgICAgICAgICBtYXRyaXguZWxlbWVudHNbM10gPSBtYXRyaXguZWxlbWVudHNbN10gPSBtYXRyaXguZWxlbWVudHNbMTFdID0gMDtcbiAgICAgICAgICBtYXRyaXguZWxlbWVudHNbMTVdID0gMTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmVsLnN0eWxlLndpZHRoID0gc2l6ZS53aWR0aCArICdweCc7XG4gICAgICAgIHRoaXMuZWwuc3R5bGUuaGVpZ2h0ID0gc2l6ZS5oZWlnaHQgKyAncHgnO1xuICAgICAgICB0aGlzLmVsLnN0eWxlLnBlcnNwZWN0aXZlID0gaXNPcnRob2dyYXBoaWNDYW1lcmEgPyAnJyA6IGAke2Zvdn1weGA7XG4gICAgICAgIGlmICh0aGlzLnRyYW5zZm9ybU91dGVyUmVmICYmIHRoaXMudHJhbnNmb3JtSW5uZXJSZWYpIHtcbiAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbWF4LWxlblxuICAgICAgICAgIHRoaXMudHJhbnNmb3JtT3V0ZXJSZWYubmF0aXZlRWxlbWVudC5zdHlsZS50cmFuc2Zvcm0gPSBgJHtjYW1lcmFUcmFuc2Zvcm19JHtjYW1lcmFNYXRyaXh9dHJhbnNsYXRlKCR7d2lkdGhIYWxmfXB4LCR7aGVpZ2h0SGFsZn1weClgO1xuICAgICAgICAgIHRoaXMudHJhbnNmb3JtSW5uZXJSZWYubmF0aXZlRWxlbWVudC5zdHlsZS50cmFuc2Zvcm0gPSBnZXRPYmplY3RDU1NNYXRyaXgoXG4gICAgICAgICAgICBtYXRyaXgsXG4gICAgICAgICAgICAxIC8gKCh0aGlzLmRpc3RhbmNlRmFjdG9yIHx8IDEwKSAvIDQwMCksXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3Qgc2NhbGUgPSB0aGlzLmRpc3RhbmNlRmFjdG9yID09PSB1bmRlZmluZWQgPyAxIDogb2JqZWN0U2NhbGUoZ3JvdXAsIGNhbWVyYSkgKiB0aGlzLmRpc3RhbmNlRmFjdG9yO1xuICAgICAgICB0aGlzLmVsLnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGUzZCgke3ZlY1swXX1weCwke3ZlY1sxXX1weCwwKSBzY2FsZSgke3NjYWxlfSlgO1xuICAgICAgfVxuICAgICAgdGhpcy5vbGRQb3NpdGlvbiA9IHZlYztcbiAgICAgIHRoaXMub2xkWm9vbSA9IGNhbWVyYS56b29tO1xuICAgIH1cbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuZWw/LnJlbW92ZSgpO1xuICAgIHRoaXMuZnJhbWVTdWJzY3JpcHRpb24/LnVuc3Vic2NyaWJlKCk7XG4gIH1cblxuICBwcml2YXRlIGNvbXB1dGVTdHlsZXMoKSB7XG4gICAgY29uc3Qgc2l6ZSA9IHRoaXMuZ2V0U2l6ZSgpO1xuICAgIGlmICh0aGlzLnRyYW5zZm9ybSkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICAgIHRvcDogMCxcbiAgICAgICAgbGVmdDogMCxcbiAgICAgICAgd2lkdGg6IHNpemUud2lkdGggKyAncHgnLFxuICAgICAgICBoZWlnaHQ6IHNpemUuaGVpZ2h0ICsgJ3B4JyxcbiAgICAgICAgdHJhbnNmb3JtU3R5bGU6ICdwcmVzZXJ2ZS0zZCcsXG4gICAgICAgIHBvaW50ZXJFdmVudHM6ICdub25lJyxcbiAgICAgIH07XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgICB0cmFuc2Zvcm06IHRoaXMuY2VudGVyID8gJ3RyYW5zbGF0ZTNkKC01MCUsLTUwJSwwKScgOiAnbm9uZScsXG4gICAgICAgIC4uLih0aGlzLmZ1bGxzY3JlZW4gJiYge1xuICAgICAgICAgIHRvcDogLXNpemUuaGVpZ2h0IC8gMiArICdweCcsXG4gICAgICAgICAgbGVmdDogLXNpemUud2lkdGggLyAyICsgJ3B4JyxcbiAgICAgICAgICB3aWR0aDogc2l6ZS53aWR0aCArICdweCcsXG4gICAgICAgICAgaGVpZ2h0OiBzaXplLmhlaWdodCArICdweCcsXG4gICAgICAgIH0pLFxuICAgICAgICAuLi50aGlzLnN0eWxlLFxuICAgICAgfTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGNvbXB1dGVJbm5lclN0eWxlcygpIHtcbiAgICByZXR1cm4geyBwb3NpdGlvbjogJ2Fic29sdXRlJywgcG9pbnRlckV2ZW50czogdGhpcy5wb2ludGVyRXZlbnRzIH07XG4gIH1cblxuICBwcml2YXRlIGdldFNpemUoKSB7XG4gICAgcmV0dXJuIHRoaXMudmlldy52aWV3UG9ydCA/PyB0aGlzLnZpZXcuaG9zdEVsZW1lbnQubmF0aXZlRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSA/PyB7IHdpZHRoOiAwLCBoZWlnaHQ6IDAgfTtcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgVkVSVEVYX1NIQURFUiA9IC8qIGdsc2wgKi8gYFxuLypcbiAgVGhpcyBzaGFkZXIgaXMgZnJvbSB0aGUgVEhSRUUncyBTcHJpdGVNYXRlcmlhbC5cbiAgV2UgbmVlZCB0byB0dXJuIHRoZSBiYWNraW5nIHBsYW5lIGludG8gYSBTcHJpdGVcbiAgKG1ha2UgaXQgYWx3YXlzIGZhY2UgdGhlIGNhbWVyYSkgaWYgXCJ0cmFuc2Zyb21cIiBcbiAgaXMgZmFsc2UuIFxuKi9cbiNpbmNsdWRlIDxjb21tb24+XG52b2lkIG1haW4oKSB7XG4gIHZlYzIgY2VudGVyID0gdmVjMigwLiwgMS4pO1xuICBmbG9hdCByb3RhdGlvbiA9IDAuMDtcbiAgXG4gIC8vIFRoaXMgaXMgc29tZXdoYXQgYXJiaXRyYXJ5LCBidXQgaXQgc2VlbXMgdG8gd29yayB3ZWxsXG4gIC8vIE5lZWQgdG8gZmlndXJlIG91dCBob3cgdG8gZGVyaXZlIHRoaXMgZHluYW1pY2FsbHkgaWYgaXQgZXZlbiBtYXR0ZXJzXG4gIGZsb2F0IHNpemUgPSAwLjAzO1xuICB2ZWM0IG12UG9zaXRpb24gPSBtb2RlbFZpZXdNYXRyaXggKiB2ZWM0KCAwLjAsIDAuMCwgMC4wLCAxLjAgKTtcbiAgdmVjMiBzY2FsZTtcbiAgc2NhbGUueCA9IGxlbmd0aCggdmVjMyggbW9kZWxNYXRyaXhbIDAgXS54LCBtb2RlbE1hdHJpeFsgMCBdLnksIG1vZGVsTWF0cml4WyAwIF0ueiApICk7XG4gIHNjYWxlLnkgPSBsZW5ndGgoIHZlYzMoIG1vZGVsTWF0cml4WyAxIF0ueCwgbW9kZWxNYXRyaXhbIDEgXS55LCBtb2RlbE1hdHJpeFsgMSBdLnogKSApO1xuICBib29sIGlzUGVyc3BlY3RpdmUgPSBpc1BlcnNwZWN0aXZlTWF0cml4KCBwcm9qZWN0aW9uTWF0cml4ICk7XG4gIGlmICggaXNQZXJzcGVjdGl2ZSApIHNjYWxlICo9IC0gbXZQb3NpdGlvbi56O1xuICB2ZWMyIGFsaWduZWRQb3NpdGlvbiA9ICggcG9zaXRpb24ueHkgLSAoIGNlbnRlciAtIHZlYzIoIDAuNSApICkgKSAqIHNjYWxlICogc2l6ZTtcbiAgdmVjMiByb3RhdGVkUG9zaXRpb247XG4gIHJvdGF0ZWRQb3NpdGlvbi54ID0gY29zKCByb3RhdGlvbiApICogYWxpZ25lZFBvc2l0aW9uLnggLSBzaW4oIHJvdGF0aW9uICkgKiBhbGlnbmVkUG9zaXRpb24ueTtcbiAgcm90YXRlZFBvc2l0aW9uLnkgPSBzaW4oIHJvdGF0aW9uICkgKiBhbGlnbmVkUG9zaXRpb24ueCArIGNvcyggcm90YXRpb24gKSAqIGFsaWduZWRQb3NpdGlvbi55O1xuICBtdlBvc2l0aW9uLnh5ICs9IHJvdGF0ZWRQb3NpdGlvbjtcbiAgZ2xfUG9zaXRpb24gPSBwcm9qZWN0aW9uTWF0cml4ICogbXZQb3NpdGlvbjtcbn1cbmA7XG5cbmV4cG9ydCBjb25zdCBGUkFHTUVOVF9TSEFERVIgPSAvKiBnbHNsICovIGBcbnZvaWQgbWFpbigpIHtcbiAgZ2xfRnJhZ0NvbG9yID0gdmVjNCgwLjAsIDAuMCwgMC4wLCAwLjApO1xufVxuYDtcbiIsIjxkaXYgW25nU3R5bGVdPVwic3R5bGVzXCIgI291dGVyUmVmICpuZ0lmPVwidHJhbnNmb3JtOyAgZWxzZSBub1RyYW5zZm9ybVwiIChvblJlc2l6ZSk9XCJvblJlc2l6ZSgpXCI+XG4gICAgPGRpdiAjaW5uZXJSZWYgW25nU3R5bGVdPVwidHJhbnNmb3JtSW5uZXJTdHlsZXNcIiA+XG4gICAgICAgIDxkaXYgW3N0eWxlXT1cInN0eWxlXCIgW2NsYXNzTmFtZV09XCJjbGFzc05hbWVcIj5cbiAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nVGVtcGxhdGVPdXRsZXQ9XCJ0ZW1wT3V0bGV0XCIgPjwvbmctY29udGFpbmVyPlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbjwvZGl2PlxuPG5nLXRlbXBsYXRlICNub1RyYW5zZm9ybT5cbiAgICA8ZGl2IFtuZ1N0eWxlXT1cInN0eWxlc1wiIFtjbGFzc05hbWVdPVwiY2xhc3NOYW1lXCIgI291dGVyUmVmPlxuICAgICAgICA8bmctY29udGFpbmVyICpuZ1RlbXBsYXRlT3V0bGV0PVwidGVtcE91dGxldFwiID48L25nLWNvbnRhaW5lcj5cbiAgICA8L2Rpdj5cbjwvbmctdGVtcGxhdGU+XG5cbjxuZy10ZW1wbGF0ZSAjdGVtcE91dGxldD5cbiAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG48L25nLXRlbXBsYXRlPlxuIl19