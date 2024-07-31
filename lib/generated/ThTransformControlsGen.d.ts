import { Type } from '@angular/core';
import { Camera, MOUSE, Object3D } from 'three';
import { TransformControls, TransformControlsMode } from 'three/examples/jsm/controls/TransformControls.js';
import { ThControlBase } from '../ThControlBase';
import * as i0 from "@angular/core";
export declare class ThTransformControlsGen<T extends TransformControls = TransformControls, TARGS = [object: Camera, domElement?: HTMLElement]> extends ThControlBase<T, TARGS> {
    getType(): Type<TransformControls>;
    set domElement(value: HTMLElement);
    get domElement(): HTMLElement | undefined;
    set camera(value: Camera);
    get camera(): Camera | undefined;
    set object(value: Object3D | undefined);
    get object(): (Object3D | undefined) | undefined;
    set enabled(value: boolean);
    get enabled(): boolean | undefined;
    set axis(value: 'X' | 'Y' | 'Z' | 'E' | 'XY' | 'YZ' | 'XZ' | 'XYZ' | 'XYZE' | null);
    get axis(): ('X' | 'Y' | 'Z' | 'E' | 'XY' | 'YZ' | 'XZ' | 'XYZ' | 'XYZE' | null) | undefined;
    set mode(value: TransformControlsMode);
    get mode(): TransformControlsMode | undefined;
    set translationSnap(value: number | null);
    get translationSnap(): (number | null) | undefined;
    set rotationSnap(value: number | null);
    get rotationSnap(): (number | null) | undefined;
    set space(value: 'world' | 'local');
    get space(): ('world' | 'local') | undefined;
    set size(value: number);
    get size(): number | undefined;
    set dragging(value: boolean);
    get dragging(): boolean | undefined;
    set showX(value: boolean);
    get showX(): boolean | undefined;
    set showY(value: boolean);
    get showY(): boolean | undefined;
    set showZ(value: boolean);
    get showZ(): boolean | undefined;
    get isTransformControls(): true | undefined;
    set mouseButtons(value: {
        LEFT?: MOUSE | null | undefined;
        MIDDLE?: MOUSE | null | undefined;
        RIGHT?: MOUSE | null | undefined;
    });
    get mouseButtons(): {
        LEFT?: MOUSE | null | undefined;
        MIDDLE?: MOUSE | null | undefined;
        RIGHT?: MOUSE | null | undefined;
    } | undefined;
    static ɵfac: i0.ɵɵFactoryDeclaration<ThTransformControlsGen<any, any>, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ThTransformControlsGen<any, any>, "th-transformControlsGen", never, { "domElement": { "alias": "domElement"; "required": false; }; "camera": { "alias": "camera"; "required": false; }; "object": { "alias": "object"; "required": false; }; "enabled": { "alias": "enabled"; "required": false; }; "axis": { "alias": "axis"; "required": false; }; "mode": { "alias": "mode"; "required": false; }; "translationSnap": { "alias": "translationSnap"; "required": false; }; "rotationSnap": { "alias": "rotationSnap"; "required": false; }; "space": { "alias": "space"; "required": false; }; "size": { "alias": "size"; "required": false; }; "dragging": { "alias": "dragging"; "required": false; }; "showX": { "alias": "showX"; "required": false; }; "showY": { "alias": "showY"; "required": false; }; "showZ": { "alias": "showZ"; "required": false; }; "mouseButtons": { "alias": "mouseButtons"; "required": false; }; }, {}, never, ["*"], false, never>;
}
