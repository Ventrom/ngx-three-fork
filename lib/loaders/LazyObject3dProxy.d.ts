import { Object3D } from 'three';
export interface LazyObject3DProxy extends Object3D {
    readonly __isProxy?: boolean;
    objRef?: Object3D;
    applyToObject3D(real: Object3D): void;
}
export declare function createLazyObject3DProxy(target?: Object3D<import("three").Object3DEventMap>): LazyObject3DProxy;
export declare function isLazyObject3dProxy(object: Object3D | LazyObject3DProxy): object is LazyObject3DProxy;
