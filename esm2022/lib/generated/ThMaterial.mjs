/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix */
import { ChangeDetectionStrategy, Component, Input, SkipSelf, } from '@angular/core';
import { Material, } from 'three';
import { ThMaterialBase } from '../ThMaterialBase';
import { applyValue } from '../util';
import * as i0 from "@angular/core";
import * as i1 from "./ThObject3D";
export class ThMaterial extends ThMaterialBase {
    getType() {
        return Material;
    }
    get isMaterial() {
        return this._objRef?.isMaterial;
    }
    set alphaHash(value) {
        if (this._objRef) {
            this._objRef.alphaHash = value;
        }
    }
    get alphaHash() {
        return this._objRef?.alphaHash;
    }
    set alphaToCoverage(value) {
        if (this._objRef) {
            this._objRef.alphaToCoverage = value;
        }
    }
    get alphaToCoverage() {
        return this._objRef?.alphaToCoverage;
    }
    set blendAlpha(value) {
        if (this._objRef) {
            this._objRef.blendAlpha = value;
        }
    }
    get blendAlpha() {
        return this._objRef?.blendAlpha;
    }
    set blendColor(value) {
        if (this._objRef) {
            this._objRef.blendColor = applyValue(this._objRef.blendColor, value);
        }
    }
    get blendColor() {
        return this._objRef?.blendColor;
    }
    set blendDst(value) {
        if (this._objRef) {
            this._objRef.blendDst = value;
        }
    }
    get blendDst() {
        return this._objRef?.blendDst;
    }
    set blendDstAlpha(value) {
        if (this._objRef) {
            this._objRef.blendDstAlpha = value;
        }
    }
    get blendDstAlpha() {
        return this._objRef?.blendDstAlpha;
    }
    set blendEquation(value) {
        if (this._objRef) {
            this._objRef.blendEquation = value;
        }
    }
    get blendEquation() {
        return this._objRef?.blendEquation;
    }
    set blendEquationAlpha(value) {
        if (this._objRef) {
            this._objRef.blendEquationAlpha = value;
        }
    }
    get blendEquationAlpha() {
        return this._objRef?.blendEquationAlpha;
    }
    set blending(value) {
        if (this._objRef) {
            this._objRef.blending = value;
        }
    }
    get blending() {
        return this._objRef?.blending;
    }
    set blendSrc(value) {
        if (this._objRef) {
            this._objRef.blendSrc = value;
        }
    }
    get blendSrc() {
        return this._objRef?.blendSrc;
    }
    set blendSrcAlpha(value) {
        if (this._objRef) {
            this._objRef.blendSrcAlpha = value;
        }
    }
    get blendSrcAlpha() {
        return this._objRef?.blendSrcAlpha;
    }
    set clipIntersection(value) {
        if (this._objRef) {
            this._objRef.clipIntersection = value;
        }
    }
    get clipIntersection() {
        return this._objRef?.clipIntersection;
    }
    set clippingPlanes(value) {
        if (this._objRef) {
            this._objRef.clippingPlanes = value;
        }
    }
    get clippingPlanes() {
        return this._objRef?.clippingPlanes;
    }
    set clipShadows(value) {
        if (this._objRef) {
            this._objRef.clipShadows = value;
        }
    }
    get clipShadows() {
        return this._objRef?.clipShadows;
    }
    set colorWrite(value) {
        if (this._objRef) {
            this._objRef.colorWrite = value;
        }
    }
    get colorWrite() {
        return this._objRef?.colorWrite;
    }
    set defines(value) {
        if (this._objRef) {
            this._objRef.defines = value;
        }
    }
    get defines() {
        return this._objRef?.defines;
    }
    set depthFunc(value) {
        if (this._objRef) {
            this._objRef.depthFunc = value;
        }
    }
    get depthFunc() {
        return this._objRef?.depthFunc;
    }
    set depthTest(value) {
        if (this._objRef) {
            this._objRef.depthTest = value;
        }
    }
    get depthTest() {
        return this._objRef?.depthTest;
    }
    set depthWrite(value) {
        if (this._objRef) {
            this._objRef.depthWrite = value;
        }
    }
    get depthWrite() {
        return this._objRef?.depthWrite;
    }
    set id(value) {
        if (this._objRef) {
            this._objRef.id = value;
        }
    }
    get id() {
        return this._objRef?.id;
    }
    set stencilWrite(value) {
        if (this._objRef) {
            this._objRef.stencilWrite = value;
        }
    }
    get stencilWrite() {
        return this._objRef?.stencilWrite;
    }
    set stencilFunc(value) {
        if (this._objRef) {
            this._objRef.stencilFunc = value;
        }
    }
    get stencilFunc() {
        return this._objRef?.stencilFunc;
    }
    set stencilRef(value) {
        if (this._objRef) {
            this._objRef.stencilRef = value;
        }
    }
    get stencilRef() {
        return this._objRef?.stencilRef;
    }
    set stencilWriteMask(value) {
        if (this._objRef) {
            this._objRef.stencilWriteMask = value;
        }
    }
    get stencilWriteMask() {
        return this._objRef?.stencilWriteMask;
    }
    set stencilFuncMask(value) {
        if (this._objRef) {
            this._objRef.stencilFuncMask = value;
        }
    }
    get stencilFuncMask() {
        return this._objRef?.stencilFuncMask;
    }
    set stencilFail(value) {
        if (this._objRef) {
            this._objRef.stencilFail = value;
        }
    }
    get stencilFail() {
        return this._objRef?.stencilFail;
    }
    set stencilZFail(value) {
        if (this._objRef) {
            this._objRef.stencilZFail = value;
        }
    }
    get stencilZFail() {
        return this._objRef?.stencilZFail;
    }
    set stencilZPass(value) {
        if (this._objRef) {
            this._objRef.stencilZPass = value;
        }
    }
    get stencilZPass() {
        return this._objRef?.stencilZPass;
    }
    set name(value) {
        if (this._objRef) {
            this._objRef.name = value;
        }
    }
    get name() {
        return this._objRef?.name;
    }
    set opacity(value) {
        if (this._objRef) {
            this._objRef.opacity = value;
        }
    }
    get opacity() {
        return this._objRef?.opacity;
    }
    set polygonOffset(value) {
        if (this._objRef) {
            this._objRef.polygonOffset = value;
        }
    }
    get polygonOffset() {
        return this._objRef?.polygonOffset;
    }
    set polygonOffsetFactor(value) {
        if (this._objRef) {
            this._objRef.polygonOffsetFactor = value;
        }
    }
    get polygonOffsetFactor() {
        return this._objRef?.polygonOffsetFactor;
    }
    set polygonOffsetUnits(value) {
        if (this._objRef) {
            this._objRef.polygonOffsetUnits = value;
        }
    }
    get polygonOffsetUnits() {
        return this._objRef?.polygonOffsetUnits;
    }
    set precision(value) {
        if (this._objRef) {
            this._objRef.precision = value;
        }
    }
    get precision() {
        return this._objRef?.precision;
    }
    set premultipliedAlpha(value) {
        if (this._objRef) {
            this._objRef.premultipliedAlpha = value;
        }
    }
    get premultipliedAlpha() {
        return this._objRef?.premultipliedAlpha;
    }
    set forceSinglePass(value) {
        if (this._objRef) {
            this._objRef.forceSinglePass = value;
        }
    }
    get forceSinglePass() {
        return this._objRef?.forceSinglePass;
    }
    set dithering(value) {
        if (this._objRef) {
            this._objRef.dithering = value;
        }
    }
    get dithering() {
        return this._objRef?.dithering;
    }
    set side(value) {
        if (this._objRef) {
            this._objRef.side = value;
        }
    }
    get side() {
        return this._objRef?.side;
    }
    set shadowSide(value) {
        if (this._objRef) {
            this._objRef.shadowSide = value;
        }
    }
    get shadowSide() {
        return this._objRef?.shadowSide;
    }
    set toneMapped(value) {
        if (this._objRef) {
            this._objRef.toneMapped = value;
        }
    }
    get toneMapped() {
        return this._objRef?.toneMapped;
    }
    set transparent(value) {
        if (this._objRef) {
            this._objRef.transparent = value;
        }
    }
    get transparent() {
        return this._objRef?.transparent;
    }
    set type(value) {
        if (this._objRef) {
            this._objRef.type = value;
        }
    }
    get type() {
        return this._objRef?.type;
    }
    set uuid(value) {
        if (this._objRef) {
            this._objRef.uuid = value;
        }
    }
    get uuid() {
        return this._objRef?.uuid;
    }
    set vertexColors(value) {
        if (this._objRef) {
            this._objRef.vertexColors = value;
        }
    }
    get vertexColors() {
        return this._objRef?.vertexColors;
    }
    set visible(value) {
        if (this._objRef) {
            this._objRef.visible = value;
        }
    }
    get visible() {
        return this._objRef?.visible;
    }
    set userData(value) {
        if (this._objRef) {
            this._objRef.userData = value;
        }
    }
    get userData() {
        return this._objRef?.userData;
    }
    set version(value) {
        if (this._objRef) {
            this._objRef.version = value;
        }
    }
    get version() {
        return this._objRef?.version;
    }
    get alphaTest() {
        return this._objRef?.alphaTest;
    }
    set alphaTest(value) {
        if (this._objRef) {
            this._objRef.alphaTest = value;
        }
    }
    set needsUpdate(value) {
        if (this._objRef) {
            this._objRef.needsUpdate = value;
        }
    }
    constructor(hostObject) {
        super(hostObject);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThMaterial, deps: [{ token: i1.ThObject3D, skipSelf: true }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.1.2", type: ThMaterial, selector: "th-material", inputs: { alphaHash: "alphaHash", alphaToCoverage: "alphaToCoverage", blendAlpha: "blendAlpha", blendColor: "blendColor", blendDst: "blendDst", blendDstAlpha: "blendDstAlpha", blendEquation: "blendEquation", blendEquationAlpha: "blendEquationAlpha", blending: "blending", blendSrc: "blendSrc", blendSrcAlpha: "blendSrcAlpha", clipIntersection: "clipIntersection", clippingPlanes: "clippingPlanes", clipShadows: "clipShadows", colorWrite: "colorWrite", defines: "defines", depthFunc: "depthFunc", depthTest: "depthTest", depthWrite: "depthWrite", id: "id", stencilWrite: "stencilWrite", stencilFunc: "stencilFunc", stencilRef: "stencilRef", stencilWriteMask: "stencilWriteMask", stencilFuncMask: "stencilFuncMask", stencilFail: "stencilFail", stencilZFail: "stencilZFail", stencilZPass: "stencilZPass", name: "name", opacity: "opacity", polygonOffset: "polygonOffset", polygonOffsetFactor: "polygonOffsetFactor", polygonOffsetUnits: "polygonOffsetUnits", precision: "precision", premultipliedAlpha: "premultipliedAlpha", forceSinglePass: "forceSinglePass", dithering: "dithering", side: "side", shadowSide: "shadowSide", toneMapped: "toneMapped", transparent: "transparent", type: "type", uuid: "uuid", vertexColors: "vertexColors", visible: "visible", userData: "userData", version: "version", alphaTest: "alphaTest", needsUpdate: "needsUpdate" }, providers: [], usesInheritance: true, ngImport: i0, template: '<ng-content/>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThMaterial, decorators: [{
            type: Component,
            args: [{
                    selector: 'th-material',
                    template: '<ng-content/>',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    providers: [],
                }]
        }], ctorParameters: () => [{ type: i1.ThObject3D, decorators: [{
                    type: SkipSelf
                }] }], propDecorators: { alphaHash: [{
                type: Input
            }], alphaToCoverage: [{
                type: Input
            }], blendAlpha: [{
                type: Input
            }], blendColor: [{
                type: Input
            }], blendDst: [{
                type: Input
            }], blendDstAlpha: [{
                type: Input
            }], blendEquation: [{
                type: Input
            }], blendEquationAlpha: [{
                type: Input
            }], blending: [{
                type: Input
            }], blendSrc: [{
                type: Input
            }], blendSrcAlpha: [{
                type: Input
            }], clipIntersection: [{
                type: Input
            }], clippingPlanes: [{
                type: Input
            }], clipShadows: [{
                type: Input
            }], colorWrite: [{
                type: Input
            }], defines: [{
                type: Input
            }], depthFunc: [{
                type: Input
            }], depthTest: [{
                type: Input
            }], depthWrite: [{
                type: Input
            }], id: [{
                type: Input
            }], stencilWrite: [{
                type: Input
            }], stencilFunc: [{
                type: Input
            }], stencilRef: [{
                type: Input
            }], stencilWriteMask: [{
                type: Input
            }], stencilFuncMask: [{
                type: Input
            }], stencilFail: [{
                type: Input
            }], stencilZFail: [{
                type: Input
            }], stencilZPass: [{
                type: Input
            }], name: [{
                type: Input
            }], opacity: [{
                type: Input
            }], polygonOffset: [{
                type: Input
            }], polygonOffsetFactor: [{
                type: Input
            }], polygonOffsetUnits: [{
                type: Input
            }], precision: [{
                type: Input
            }], premultipliedAlpha: [{
                type: Input
            }], forceSinglePass: [{
                type: Input
            }], dithering: [{
                type: Input
            }], side: [{
                type: Input
            }], shadowSide: [{
                type: Input
            }], toneMapped: [{
                type: Input
            }], transparent: [{
                type: Input
            }], type: [{
                type: Input
            }], uuid: [{
                type: Input
            }], vertexColors: [{
                type: Input
            }], visible: [{
                type: Input
            }], userData: [{
                type: Input
            }], version: [{
                type: Input
            }], alphaTest: [{
                type: Input
            }], needsUpdate: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGhNYXRlcmlhbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC10aHJlZS9zcmMvbGliL2dlbmVyYXRlZC9UaE1hdGVyaWFsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHlEQUF5RDtBQUN6RCx5Q0FBeUM7QUFDekMsK0ZBQStGO0FBQy9GLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULEtBQUssRUFDTCxRQUFRLEdBRVQsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQVFMLFFBQVEsR0FLVCxNQUFNLE9BQU8sQ0FBQztBQUNmLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNuRCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sU0FBUyxDQUFDOzs7QUFTckMsTUFBTSxPQUFPLFVBR1gsU0FBUSxjQUF3QjtJQUN6QixPQUFPO1FBQ1osT0FBTyxRQUFRLENBQUM7SUFDbEIsQ0FBQztJQUVELElBQVcsVUFBVTtRQUNuQixPQUFPLElBQUksQ0FBQyxPQUFPLEVBQUUsVUFBVSxDQUFDO0lBQ2xDLENBQUM7SUFDRCxJQUNXLFNBQVMsQ0FBQyxLQUFjO1FBQ2pDLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ2pCLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztRQUNqQyxDQUFDO0lBQ0gsQ0FBQztJQUVELElBQVcsU0FBUztRQUNsQixPQUFPLElBQUksQ0FBQyxPQUFPLEVBQUUsU0FBUyxDQUFDO0lBQ2pDLENBQUM7SUFDRCxJQUNXLGVBQWUsQ0FBQyxLQUFjO1FBQ3ZDLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ2pCLElBQUksQ0FBQyxPQUFPLENBQUMsZUFBZSxHQUFHLEtBQUssQ0FBQztRQUN2QyxDQUFDO0lBQ0gsQ0FBQztJQUVELElBQVcsZUFBZTtRQUN4QixPQUFPLElBQUksQ0FBQyxPQUFPLEVB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Z0JBV0ssVUFBVTtzQkFEcEIsS0FBSztnQkFXSyxFQUFFO3NCQURaLEtBQUs7Z0JBV0ssWUFBWTtzQkFEdEIsS0FBSztnQkFXSyxXQUFXO3NCQURyQixLQUFLO2dCQVdLLFVBQVU7c0JBRHBCLEtBQUs7Z0JBV0ssZ0JBQWdCO3NCQUQxQixLQUFLO2dCQVdLLGVBQWU7c0JBRHpCLEtBQUs7Z0JBV0ssV0FBVztzQkFEckIsS0FBSztnQkFXSyxZQUFZO3NCQUR0QixLQUFLO2dCQVdLLFlBQVk7c0JBRHRCLEtBQUs7Z0JBV0ssSUFBSTtzQkFEZCxLQUFLO2dCQVdLLE9BQU87c0JBRGpCLEtBQUs7Z0JBV0ssYUFBYTtzQkFEdkIsS0FBSztnQkFXSyxtQkFBbUI7c0JBRDdCLEtBQUs7Z0JBV0ssa0JBQWtCO3NCQUQ1QixLQUFLO2dCQVdLLFNBQVM7c0JBRG5CLEtBQUs7Z0JBV0ssa0JBQWtCO3NCQUQ1QixLQUFLO2dCQVdLLGVBQWU7c0JBRHpCLEtBQUs7Z0JBV0ssU0FBUztzQkFEbkIsS0FBSztnQkFXSyxJQUFJO3NCQURkLEtBQUs7Z0JBV0ssVUFBVTtzQkFEcEIsS0FBSztnQkFXSyxVQUFVO3NCQURwQixLQUFLO2dCQVdLLFdBQVc7c0JBRHJCLEtBQUs7Z0JBV0ssSUFBSTtzQkFEZCxLQUFLO2dCQVdLLElBQUk7c0JBRGQsS0FBSztnQkFXSyxZQUFZO3NCQUR0QixLQUFLO2dCQVdLLE9BQU87c0JBRGpCLEtBQUs7Z0JBV0ssUUFBUTtzQkFEbEIsS0FBSztnQkFXSyxPQUFPO3NCQURqQixLQUFLO2dCQWNLLFNBQVM7c0JBRG5CLEtBQUs7Z0JBUUssV0FBVztzQkFEckIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIEB0eXBlc2NyaXB0LWVzbGludC9uYW1pbmctY29udmVudGlvbiAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tdW5kZXJzY29yZS1kYW5nbGUgKi9cbi8qIGVzbGludC1kaXNhYmxlIEBhbmd1bGFyLWVzbGludC9jb21wb25lbnQtc2VsZWN0b3IsIEBhbmd1bGFyLWVzbGludC9jb21wb25lbnQtY2xhc3Mtc3VmZml4ICovXG5pbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ29tcG9uZW50LFxuICBJbnB1dCxcbiAgU2tpcFNlbGYsXG4gIFR5cGUsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgQmxlbmRpbmcsXG4gIEJsZW5kaW5nRHN0RmFjdG9yLFxuICBCbGVuZGluZ0VxdWF0aW9uLFxuICBCbGVuZGluZ1NyY0ZhY3RvcixcbiAgQ29sb3IsXG4gIENvbG9yUmVwcmVzZW50YXRpb24sXG4gIERlcHRoTW9kZXMsXG4gIE1hdGVyaWFsLFxuICBQbGFuZSxcbiAgU2lkZSxcbiAgU3RlbmNpbEZ1bmMsXG4gIFN0ZW5jaWxPcCxcbn0gZnJvbSAndGhyZWUnO1xuaW1wb3J0IHsgVGhNYXRlcmlhbEJhc2UgfSBmcm9tICcuLi9UaE1hdGVyaWFsQmFzZSc7XG5pbXBvcnQgeyBhcHBseVZhbHVlIH0gZnJvbSAnLi4vdXRpbCc7XG5pbXBvcnQgeyBUaE9iamVjdDNEIH0gZnJvbSAnLi9UaE9iamVjdDNEJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndGgtbWF0ZXJpYWwnLFxuICB0ZW1wbGF0ZTogJzxuZy1jb250ZW50Lz4nLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgcHJvdmlkZXJzOiBbXSxcbn0pXG5leHBvcnQgY2xhc3MgVGhNYXRlcmlhbDxcbiAgVCBleHRlbmRzIE1hdGVyaWFsID0gTWF0ZXJpYWwsXG4gIFRBUkdTID0gW10sXG4+IGV4dGVuZHMgVGhNYXRlcmlhbEJhc2U8VCwgVEFSR1M+IHtcbiAgcHVibGljIGdldFR5cGUoKTogVHlwZTxNYXRlcmlhbD4ge1xuICAgIHJldHVybiBNYXRlcmlhbDtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaXNNYXRlcmlhbCgpOiB0cnVlIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fb2JqUmVmPy5pc01hdGVyaWFsO1xuICB9XG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzZXQgYWxwaGFIYXNoKHZhbHVlOiBib29sZWFuKSB7XG4gICAgaWYgKHRoaXMuX29ialJlZikge1xuICAgICAgdGhpcy5fb2JqUmVmLmFscGhhSGFzaCA9IHZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBnZXQgYWxwaGFIYXNoKCk6IGJvb2xlYW4gfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9vYmpSZWY/LmFscGhhSGFzaDtcbiAgfVxuICBASW5wdXQoKVxuICBwdWJsaWMgc2V0IGFscGhhVG9Db3ZlcmFnZSh2YWx1ZTogYm9vbGVhbikge1xuICAgIGlmICh0aGlzLl9vYmpSZWYpIHtcbiAgICAgIHRoaXMuX29ialJlZi5hbHBoYVRvQ292ZXJhZ2UgPSB2YWx1ZTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgZ2V0IGFscGhhVG9Db3ZlcmFnZSgpOiBib29sZWFuIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fb2JqUmVmPy5hbHBoYVRvQ292ZXJhZ2U7XG4gIH1cbiAgQElucHV0KClcbiAgcHVibGljIHNldCBibGVuZEFscGhhKHZhbHVlOiBudW1iZXIpIHtcbiAgICBpZiAodGhpcy5fb2JqUmVmKSB7XG4gICAgICB0aGlzLl9vYmpSZWYuYmxlbmRBbHBoYSA9IHZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBnZXQgYmxlbmRBbHBoYSgpOiBudW1iZXIgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9vYmpSZWY/LmJsZW5kQWxwaGE7XG4gIH1cbiAgQElucHV0KClcbiAgcHVibGljIHNldCBibGVuZENvbG9yKFxuICAgIHZhbHVlOlxuICAgICAgfCBDb2xvclxuICAgICAgfCBbXG4gICAgICAgICAgLi4uYXJnczpcbiAgICAgICAgICAgIHwgW2NvbG9yOiBDb2xvclJlcHJlc2VudGF0aW9uXVxuICAgICAgICAgICAgfCBbcjogbnVtYmVyLCBnOiBudW1iZXIsIGI6IG51bWJlcl0sXG4gICAgICAgIF0sXG4gICkge1xuICAgIGlmICh0aGlzLl9vYmpSZWYpIHtcbiAgICAgIHRoaXMuX29ialJlZi5ibGVuZENvbG9yID0gYXBwbHlWYWx1ZTxDb2xvcj4oXG4gICAgICAgIHRoaXMuX29ialJlZi5ibGVuZENvbG9yLFxuICAgICAgICB2YWx1ZSxcbiAgICAgICk7XG4gICAgfVxuICB9XG4gIHB1YmxpYyBnZXQgYmxlbmRDb2xvcigpOiBDb2xvciB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX29ialJlZj8uYmxlbmRDb2xvcjtcbiAgfVxuICBASW5wdXQoKVxuICBwdWJsaWMgc2V0IGJsZW5kRHN0KHZhbHVlOiBCbGVuZGluZ0RzdEZhY3Rvcikge1xuICAgIGlmICh0aGlzLl9vYmpSZWYpIHtcbiAgICAgIHRoaXMuX29ialJlZi5ibGVuZERzdCA9IHZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBnZXQgYmxlbmREc3QoKTogQmxlbmRpbmdEc3RGYWN0b3IgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9vYmpSZWY/LmJsZW5kRHN0O1xuICB9XG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzZXQgYmxlbmREc3RBbHBoYSh2YWx1ZTogbnVtYmVyIHwgbnVsbCkge1xuICAgIGlmICh0aGlzLl9vYmpSZWYpIHtcbiAgICAgIHRoaXMuX29ialJlZi5ibGVuZERzdEFscGhhID0gdmFsdWU7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGdldCBibGVuZERzdEFscGhhKCk6IChudW1iZXIgfCBudWxsKSB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX29ialJlZj8uYmxlbmREc3RBbHBoYTtcbiAgfVxuICBASW5wdXQoKVxuICBwdWJsaWMgc2V0IGJsZW5kRXF1YXRpb24odmFsdWU6IEJsZW5kaW5nRXF1YXRpb24pIHtcbiAgICBpZiAodGhpcy5fb2JqUmVmKSB7XG4gICAgICB0aGlzLl9vYmpSZWYuYmxlbmRFcXVhdGlvbiA9IHZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBnZXQgYmxlbmRFcXVhdGlvbigpOiBCbGVuZGluZ0VxdWF0aW9uIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fb2JqUmVmPy5ibGVuZEVxdWF0aW9uO1xuICB9XG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzZXQgYmxlbmRFcXVhdGlvbkFscGhhKHZhbHVlOiBudW1iZXIgfCBudWxsKSB7XG4gICAgaWYgKHRoaXMuX29ialJlZikge1xuICAgICAgdGhpcy5fb2JqUmVmLmJsZW5kRXF1YXRpb25BbHBoYSA9IHZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBnZXQgYmxlbmRFcXVhdGlvbkFscGhhKCk6IChudW1iZXIgfCBudWxsKSB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX29ialJlZj8uYmxlbmRFcXVhdGlvbkFscGhhO1xuICB9XG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzZXQgYmxlbmRpbmcodmFsdWU6IEJsZW5kaW5nKSB7XG4gICAgaWYgKHRoaXMuX29ialJlZikge1xuICAgICAgdGhpcy5fb2JqUmVmLmJsZW5kaW5nID0gdmFsdWU7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGdldCBibGVuZGluZygpOiBCbGVuZGluZyB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX29ialJlZj8uYmxlbmRpbmc7XG4gIH1cbiAgQElucHV0KClcbiAgcHVibGljIHNldCBibGVuZFNyYyh2YWx1ZTogQmxlbmRpbmdTcmNGYWN0b3IgfCBCbGVuZGluZ0RzdEZhY3Rvcikge1xuICAgIGlmICh0aGlzLl9vYmpSZWYpIHtcbiAgICAgIHRoaXMuX29ialJlZi5ibGVuZFNyYyA9IHZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBnZXQgYmxlbmRTcmMoKTogKEJsZW5kaW5nU3JjRmFjdG9yIHwgQmxlbmRpbmdEc3RGYWN0b3IpIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fb2JqUmVmPy5ibGVuZFNyYztcbiAgfVxuICBASW5wdXQoKVxuICBwdWJsaWMgc2V0IGJsZW5kU3JjQWxwaGEodmFsdWU6IG51bWJlciB8IG51bGwpIHtcbiAgICBpZiAodGhpcy5fb2JqUmVmKSB7XG4gICAgICB0aGlzLl9vYmpSZWYuYmxlbmRTcmNBbHBoYSA9IHZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBnZXQgYmxlbmRTcmNBbHBoYSgpOiAobnVtYmVyIHwgbnVsbCkgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9vYmpSZWY/LmJsZW5kU3JjQWxwaGE7XG4gIH1cbiAgQElucHV0KClcbiAgcHVibGljIHNldCBjbGlwSW50ZXJzZWN0aW9uKHZhbHVlOiBib29sZWFuKSB7XG4gICAgaWYgKHRoaXMuX29ialJlZikge1xuICAgICAgdGhpcy5fb2JqUmVmLmNsaXBJbnRlcnNlY3Rpb24gPSB2YWx1ZTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgZ2V0IGNsaXBJbnRlcnNlY3Rpb24oKTogYm9vbGVhbiB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX29ialJlZj8uY2xpcEludGVyc2VjdGlvbjtcbiAgfVxuICBASW5wdXQoKVxuICBwdWJsaWMgc2V0IGNsaXBwaW5nUGxhbmVzKHZhbHVlOiBQbGFuZVtdIHwgbnVsbCkge1xuICAgIGlmICh0aGlzLl9vYmpSZWYpIHtcbiAgICAgIHRoaXMuX29ialJlZi5jbGlwcGluZ1BsYW5lcyA9IHZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBnZXQgY2xpcHBpbmdQbGFuZXMoKTogKFBsYW5lW10gfCBudWxsKSB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX29ialJlZj8uY2xpcHBpbmdQbGFuZXM7XG4gIH1cbiAgQElucHV0KClcbiAgcHVibGljIHNldCBjbGlwU2hhZG93cyh2YWx1ZTogYm9vbGVhbikge1xuICAgIGlmICh0aGlzLl9vYmpSZWYpIHtcbiAgICAgIHRoaXMuX29ialJlZi5jbGlwU2hhZG93cyA9IHZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBnZXQgY2xpcFNoYWRvd3MoKTogYm9vbGVhbiB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX29ialJlZj8uY2xpcFNoYWRvd3M7XG4gIH1cbiAgQElucHV0KClcbiAgcHVibGljIHNldCBjb2xvcldyaXRlKHZhbHVlOiBib29sZWFuKSB7XG4gICAgaWYgKHRoaXMuX29ialJlZikge1xuICAgICAgdGhpcy5fb2JqUmVmLmNvbG9yV3JpdGUgPSB2YWx1ZTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgZ2V0IGNvbG9yV3JpdGUoKTogYm9vbGVhbiB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX29ialJlZj8uY29sb3JXcml0ZTtcbiAgfVxuICBASW5wdXQoKVxuICBwdWJsaWMgc2V0IGRlZmluZXModmFsdWU6IHVuZGVmaW5lZCB8IHsgW2tleTogc3RyaW5nXTogYW55IH0pIHtcbiAgICBpZiAodGhpcy5fb2JqUmVmKSB7XG4gICAgICB0aGlzLl9vYmpSZWYuZGVmaW5lcyA9IHZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBnZXQgZGVmaW5lcygpOiAodW5kZWZpbmVkIHwgeyBba2V5OiBzdHJpbmddOiBhbnkgfSkgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9vYmpSZWY/LmRlZmluZXM7XG4gIH1cbiAgQElucHV0KClcbiAgcHVibGljIHNldCBkZXB0aEZ1bmModmFsdWU6IERlcHRoTW9kZXMpIHtcbiAgICBpZiAodGhpcy5fb2JqUmVmKSB7XG4gICAgICB0aGlzLl9vYmpSZWYuZGVwdGhGdW5jID0gdmFsdWU7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGdldCBkZXB0aEZ1bmMoKTogRGVwdGhNb2RlcyB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX29ialJlZj8uZGVwdGhGdW5jO1xuICB9XG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzZXQgZGVwdGhUZXN0KHZhbHVlOiBib29sZWFuKSB7XG4gICAgaWYgKHRoaXMuX29ialJlZikge1xuICAgICAgdGhpcy5fb2JqUmVmLmRlcHRoVGVzdCA9IHZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBnZXQgZGVwdGhUZXN0KCk6IGJvb2xlYW4gfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9vYmpSZWY/LmRlcHRoVGVzdDtcbiAgfVxuICBASW5wdXQoKVxuICBwdWJsaWMgc2V0IGRlcHRoV3JpdGUodmFsdWU6IGJvb2xlYW4pIHtcbiAgICBpZiAodGhpcy5fb2JqUmVmKSB7XG4gICAgICB0aGlzLl9vYmpSZWYuZGVwdGhXcml0ZSA9IHZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBnZXQgZGVwdGhXcml0ZSgpOiBib29sZWFuIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fb2JqUmVmPy5kZXB0aFdyaXRlO1xuICB9XG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzZXQgaWQodmFsdWU6IG51bWJlcikge1xuICAgIGlmICh0aGlzLl9vYmpSZWYpIHtcbiAgICAgIHRoaXMuX29ialJlZi5pZCA9IHZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBnZXQgaWQoKTogbnVtYmVyIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fb2JqUmVmPy5pZDtcbiAgfVxuICBASW5wdXQoKVxuICBwdWJsaWMgc2V0IHN0ZW5jaWxXcml0ZSh2YWx1ZTogYm9vbGVhbikge1xuICAgIGlmICh0aGlzLl9vYmpSZWYpIHtcbiAgICAgIHRoaXMuX29ialJlZi5zdGVuY2lsV3JpdGUgPSB2YWx1ZTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgZ2V0IHN0ZW5jaWxXcml0ZSgpOiBib29sZWFuIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fb2JqUmVmPy5zdGVuY2lsV3JpdGU7XG4gIH1cbiAgQElucHV0KClcbiAgcHVibGljIHNldCBzdGVuY2lsRnVuYyh2YWx1ZTogU3RlbmNpbEZ1bmMpIHtcbiAgICBpZiAodGhpcy5fb2JqUmVmKSB7XG4gICAgICB0aGlzLl9vYmpSZWYuc3RlbmNpbEZ1bmMgPSB2YWx1ZTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgZ2V0IHN0ZW5jaWxGdW5jKCk6IFN0ZW5jaWxGdW5jIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fb2JqUmVmPy5zdGVuY2lsRnVuYztcbiAgfVxuICBASW5wdXQoKVxuICBwdWJsaWMgc2V0IHN0ZW5jaWxSZWYodmFsdWU6IG51bWJlcikge1xuICAgIGlmICh0aGlzLl9vYmpSZWYpIHtcbiAgICAgIHRoaXMuX29ialJlZi5zdGVuY2lsUmVmID0gdmFsdWU7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGdldCBzdGVuY2lsUmVmKCk6IG51bWJlciB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX29ialJlZj8uc3RlbmNpbFJlZjtcbiAgfVxuICBASW5wdXQoKVxuICBwdWJsaWMgc2V0IHN0ZW5jaWxXcml0ZU1hc2sodmFsdWU6IG51bWJlcikge1xuICAgIGlmICh0aGlzLl9vYmpSZWYpIHtcbiAgICAgIHRoaXMuX29ialJlZi5zdGVuY2lsV3JpdGVNYXNrID0gdmFsdWU7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGdldCBzdGVuY2lsV3JpdGVNYXNrKCk6IG51bWJlciB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX29ialJlZj8uc3RlbmNpbFdyaXRlTWFzaztcbiAgfVxuICBASW5wdXQoKVxuICBwdWJsaWMgc2V0IHN0ZW5jaWxGdW5jTWFzayh2YWx1ZTogbnVtYmVyKSB7XG4gICAgaWYgKHRoaXMuX29ialJlZikge1xuICAgICAgdGhpcy5fb2JqUmVmLnN0ZW5jaWxGdW5jTWFzayA9IHZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBnZXQgc3RlbmNpbEZ1bmNNYXNrKCk6IG51bWJlciB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX29ialJlZj8uc3RlbmNpbEZ1bmNNYXNrO1xuICB9XG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzZXQgc3RlbmNpbEZhaWwodmFsdWU6IFN0ZW5jaWxPcCkge1xuICAgIGlmICh0aGlzLl9vYmpSZWYpIHtcbiAgICAgIHRoaXMuX29ialJlZi5zdGVuY2lsRmFpbCA9IHZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBnZXQgc3RlbmNpbEZhaWwoKTogU3RlbmNpbE9wIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fb2JqUmVmPy5zdGVuY2lsRmFpbDtcbiAgfVxuICBASW5wdXQoKVxuICBwdWJsaWMgc2V0IHN0ZW5jaWxaRmFpbCh2YWx1ZTogU3RlbmNpbE9wKSB7XG4gICAgaWYgKHRoaXMuX29ialJlZikge1xuICAgICAgdGhpcy5fb2JqUmVmLnN0ZW5jaWxaRmFpbCA9IHZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBnZXQgc3RlbmNpbFpGYWlsKCk6IFN0ZW5jaWxPcCB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX29ialJlZj8uc3RlbmNpbFpGYWlsO1xuICB9XG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzZXQgc3RlbmNpbFpQYXNzKHZhbHVlOiBTdGVuY2lsT3ApIHtcbiAgICBpZiAodGhpcy5fb2JqUmVmKSB7XG4gICAgICB0aGlzLl9vYmpSZWYuc3RlbmNpbFpQYXNzID0gdmFsdWU7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGdldCBzdGVuY2lsWlBhc3MoKTogU3RlbmNpbE9wIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fb2JqUmVmPy5zdGVuY2lsWlBhc3M7XG4gIH1cbiAgQElucHV0KClcbiAgcHVibGljIHNldCBuYW1lKHZhbHVlOiBzdHJpbmcpIHtcbiAgICBpZiAodGhpcy5fb2JqUmVmKSB7XG4gICAgICB0aGlzLl9vYmpSZWYubmFtZSA9IHZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBnZXQgbmFtZSgpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9vYmpSZWY/Lm5hbWU7XG4gIH1cbiAgQElucHV0KClcbiAgcHVibGljIHNldCBvcGFjaXR5KHZhbHVlOiBudW1iZXIpIHtcbiAgICBpZiAodGhpcy5fb2JqUmVmKSB7XG4gICAgICB0aGlzLl9vYmpSZWYub3BhY2l0eSA9IHZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBnZXQgb3BhY2l0eSgpOiBudW1iZXIgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9vYmpSZWY/Lm9wYWNpdHk7XG4gIH1cbiAgQElucHV0KClcbiAgcHVibGljIHNldCBwb2x5Z29uT2Zmc2V0KHZhbHVlOiBib29sZWFuKSB7XG4gICAgaWYgKHRoaXMuX29ialJlZikge1xuICAgICAgdGhpcy5fb2JqUmVmLnBvbHlnb25PZmZzZXQgPSB2YWx1ZTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgZ2V0IHBvbHlnb25PZmZzZXQoKTogYm9vbGVhbiB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX29ialJlZj8ucG9seWdvbk9mZnNldDtcbiAgfVxuICBASW5wdXQoKVxuICBwdWJsaWMgc2V0IHBvbHlnb25PZmZzZXRGYWN0b3IodmFsdWU6IG51bWJlcikge1xuICAgIGlmICh0aGlzLl9vYmpSZWYpIHtcbiAgICAgIHRoaXMuX29ialJlZi5wb2x5Z29uT2Zmc2V0RmFjdG9yID0gdmFsdWU7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGdldCBwb2x5Z29uT2Zmc2V0RmFjdG9yKCk6IG51bWJlciB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX29ialJlZj8ucG9seWdvbk9mZnNldEZhY3RvcjtcbiAgfVxuICBASW5wdXQoKVxuICBwdWJsaWMgc2V0IHBvbHlnb25PZmZzZXRVbml0cyh2YWx1ZTogbnVtYmVyKSB7XG4gICAgaWYgKHRoaXMuX29ialJlZikge1xuICAgICAgdGhpcy5fb2JqUmVmLnBvbHlnb25PZmZzZXRVbml0cyA9IHZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBnZXQgcG9seWdvbk9mZnNldFVuaXRzKCk6IG51bWJlciB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX29ialJlZj8ucG9seWdvbk9mZnNldFVuaXRzO1xuICB9XG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzZXQgcHJlY2lzaW9uKHZhbHVlOiAnaGlnaHAnIHwgJ21lZGl1bXAnIHwgJ2xvd3AnIHwgbnVsbCkge1xuICAgIGlmICh0aGlzLl9vYmpSZWYpIHtcbiAgICAgIHRoaXMuX29ialJlZi5wcmVjaXNpb24gPSB2YWx1ZTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgZ2V0IHByZWNpc2lvbigpOiAoJ2hpZ2hwJyB8ICdtZWRpdW1wJyB8ICdsb3dwJyB8IG51bGwpIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fb2JqUmVmPy5wcmVjaXNpb247XG4gIH1cbiAgQElucHV0KClcbiAgcHVibGljIHNldCBwcmVtdWx0aXBsaWVkQWxwaGEodmFsdWU6IGJvb2xlYW4pIHtcbiAgICBpZiAodGhpcy5fb2JqUmVmKSB7XG4gICAgICB0aGlzLl9vYmpSZWYucHJlbXVsdGlwbGllZEFscGhhID0gdmFsdWU7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGdldCBwcmVtdWx0aXBsaWVkQWxwaGEoKTogYm9vbGVhbiB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX29ialJlZj8ucHJlbXVsdGlwbGllZEFscGhhO1xuICB9XG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzZXQgZm9yY2VTaW5nbGVQYXNzKHZhbHVlOiBib29sZWFuKSB7XG4gICAgaWYgKHRoaXMuX29ialJlZikge1xuICAgICAgdGhpcy5fb2JqUmVmLmZvcmNlU2luZ2xlUGFzcyA9IHZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBnZXQgZm9yY2VTaW5nbGVQYXNzKCk6IGJvb2xlYW4gfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9vYmpSZWY/LmZvcmNlU2luZ2xlUGFzcztcbiAgfVxuICBASW5wdXQoKVxuICBwdWJsaWMgc2V0IGRpdGhlcmluZyh2YWx1ZTogYm9vbGVhbikge1xuICAgIGlmICh0aGlzLl9vYmpSZWYpIHtcbiAgICAgIHRoaXMuX29ialJlZi5kaXRoZXJpbmcgPSB2YWx1ZTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgZ2V0IGRpdGhlcmluZygpOiBib29sZWFuIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fb2JqUmVmPy5kaXRoZXJpbmc7XG4gIH1cbiAgQElucHV0KClcbiAgcHVibGljIHNldCBzaWRlKHZhbHVlOiBTaWRlKSB7XG4gICAgaWYgKHRoaXMuX29ialJlZikge1xuICAgICAgdGhpcy5fb2JqUmVmLnNpZGUgPSB2YWx1ZTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgZ2V0IHNpZGUoKTogU2lkZSB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX29ialJlZj8uc2lkZTtcbiAgfVxuICBASW5wdXQoKVxuICBwdWJsaWMgc2V0IHNoYWRvd1NpZGUodmFsdWU6IFNpZGUgfCBudWxsKSB7XG4gICAgaWYgKHRoaXMuX29ialJlZikge1xuICAgICAgdGhpcy5fb2JqUmVmLnNoYWRvd1NpZGUgPSB2YWx1ZTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgZ2V0IHNoYWRvd1NpZGUoKTogKFNpZGUgfCBudWxsKSB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX29ialJlZj8uc2hhZG93U2lkZTtcbiAgfVxuICBASW5wdXQoKVxuICBwdWJsaWMgc2V0IHRvbmVNYXBwZWQodmFsdWU6IGJvb2xlYW4pIHtcbiAgICBpZiAodGhpcy5fb2JqUmVmKSB7XG4gICAgICB0aGlzLl9vYmpSZWYudG9uZU1hcHBlZCA9IHZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBnZXQgdG9uZU1hcHBlZCgpOiBib29sZWFuIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fb2JqUmVmPy50b25lTWFwcGVkO1xuICB9XG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzZXQgdHJhbnNwYXJlbnQodmFsdWU6IGJvb2xlYW4pIHtcbiAgICBpZiAodGhpcy5fb2JqUmVmKSB7XG4gICAgICB0aGlzLl9vYmpSZWYudHJhbnNwYXJlbnQgPSB2YWx1ZTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgZ2V0IHRyYW5zcGFyZW50KCk6IGJvb2xlYW4gfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9vYmpSZWY/LnRyYW5zcGFyZW50O1xuICB9XG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzZXQgdHlwZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgaWYgKHRoaXMuX29ialJlZikge1xuICAgICAgdGhpcy5fb2JqUmVmLnR5cGUgPSB2YWx1ZTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgZ2V0IHR5cGUoKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fb2JqUmVmPy50eXBlO1xuICB9XG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzZXQgdXVpZCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgaWYgKHRoaXMuX29ialJlZikge1xuICAgICAgdGhpcy5fb2JqUmVmLnV1aWQgPSB2YWx1ZTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgZ2V0IHV1aWQoKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fb2JqUmVmPy51dWlkO1xuICB9XG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzZXQgdmVydGV4Q29sb3JzKHZhbHVlOiBib29sZWFuKSB7XG4gICAgaWYgKHRoaXMuX29ialJlZikge1xuICAgICAgdGhpcy5fb2JqUmVmLnZlcnRleENvbG9ycyA9IHZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBnZXQgdmVydGV4Q29sb3JzKCk6IGJvb2xlYW4gfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9vYmpSZWY/LnZlcnRleENvbG9ycztcbiAgfVxuICBASW5wdXQoKVxuICBwdWJsaWMgc2V0IHZpc2libGUodmFsdWU6IGJvb2xlYW4pIHtcbiAgICBpZiAodGhpcy5fb2JqUmVmKSB7XG4gICAgICB0aGlzLl9vYmpSZWYudmlzaWJsZSA9IHZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBnZXQgdmlzaWJsZSgpOiBib29sZWFuIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fb2JqUmVmPy52aXNpYmxlO1xuICB9XG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzZXQgdXNlckRhdGEodmFsdWU6IFJlY29yZDxzdHJpbmcsIGFueT4pIHtcbiAgICBpZiAodGhpcy5fb2JqUmVmKSB7XG4gICAgICB0aGlzLl9vYmpSZWYudXNlckRhdGEgPSB2YWx1ZTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgZ2V0IHVzZXJEYXRhKCk6IFJlY29yZDxzdHJpbmcsIGFueT4gfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9vYmpSZWY/LnVzZXJEYXRhO1xuICB9XG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzZXQgdmVyc2lvbih2YWx1ZTogbnVtYmVyKSB7XG4gICAgaWYgKHRoaXMuX29ialJlZikge1xuICAgICAgdGhpcy5fb2JqUmVmLnZlcnNpb24gPSB2YWx1ZTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgZ2V0IHZlcnNpb24oKTogbnVtYmVyIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fb2JqUmVmPy52ZXJzaW9uO1xuICB9XG4gIHB1YmxpYyBnZXQgYWxwaGFUZXN0KCk6IG51bWJlciB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX29ialJlZj8uYWxwaGFUZXN0O1xuICB9XG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzZXQgYWxwaGFUZXN0KHZhbHVlOiBudW1iZXIpIHtcbiAgICBpZiAodGhpcy5fb2JqUmVmKSB7XG4gICAgICB0aGlzLl9vYmpSZWYuYWxwaGFUZXN0ID0gdmFsdWU7XG4gICAgfVxuICB9XG5cbiAgQElucHV0KClcbiAgcHVibGljIHNldCBuZWVkc1VwZGF0ZSh2YWx1ZTogYm9vbGVhbikge1xuICAgIGlmICh0aGlzLl9vYmpSZWYpIHtcbiAgICAgIHRoaXMuX29ialJlZi5uZWVkc1VwZGF0ZSA9IHZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0cnVjdG9yKEBTa2lwU2VsZigpIGhvc3RPYmplY3Q6IFRoT2JqZWN0M0QpIHtcbiAgICBzdXBlcihob3N0T2JqZWN0KTtcbiAgfVxufVxuIl19