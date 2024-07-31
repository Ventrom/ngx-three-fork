import { BufferGeometry, NormalOrGLBufferAttributes } from 'three';
import { ThObject3D } from './generated/ThObject3D';
import { ThWrapperBase } from './ThWrapperBase';
import * as i0 from "@angular/core";
export declare class ThGeometryBase<T extends BufferGeometry<NormalOrGLBufferAttributes>, ARGS> extends ThWrapperBase<T, ARGS> {
    protected parent: ThObject3D;
    constructor(parent: ThObject3D);
    addToParent(): void;
    removeFromParent(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ThGeometryBase<any, any>, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ThGeometryBase<any, any>, "th-abs-geometry", never, {}, {}, never, never, false, never>;
}
