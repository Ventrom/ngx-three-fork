import { OnDestroy, Type } from '@angular/core';
import { Camera, Object3D } from 'three';
import { TransformControls } from 'three/examples/jsm/controls/TransformControls.js';
import { ThTransformControlsGen } from '../ThTransformControlsGen';
import { ThObject3D } from '../ThObject3D';
import { ThCanvas } from '../../ThCanvas';
import { ThScene } from '../ThScene';
import * as i0 from "@angular/core";
export declare class ThTransformControls<T extends TransformControls = TransformControls, TARGS = [object: Camera, domElement?: HTMLElement]> extends ThTransformControlsGen<T, TARGS> implements OnDestroy {
    protected scene: ThScene;
    private targetObject;
    constructor(_camera: ThObject3D<any>, canvas: ThCanvas, scene: ThScene);
    getType(): Type<TransformControls>;
    set object(value: Object3D | undefined);
    protected objectAdded: () => void;
    protected objectRemoved: () => void;
    addToParent(): void;
    removeFromParent(): void;
    ngOnDestroy(): void;
    protected removeObjectListeners(): void;
    protected addObjectListeners(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ThTransformControls<any, any>, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ThTransformControls<any, any>, "th-transformControls", never, { "object": { "alias": "object"; "required": false; }; }, {}, never, ["*"], false, never>;
}
