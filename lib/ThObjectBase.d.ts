import { OnInit } from '@angular/core';
import { Object3D, Vector3 } from 'three';
import { ThWrapperBase } from './ThWrapperBase';
import * as i0 from "@angular/core";
export declare class ThObjectBase<T extends Object3D, ARGS = unknown> extends ThWrapperBase<T, ARGS> implements OnInit {
    parent: ThObjectBase<any>;
    constructor(parent: ThObjectBase<any>);
    addToParent(): void;
    removeFromParent(): void;
    protected applyObjRef(objRef: T | undefined): void;
    protected attachToParent(newRef?: T, oldRef?: T): void;
    set lookAt(vector: Vector3 | [x: number, y: number, z: number]);
    static ɵfac: i0.ɵɵFactoryDeclaration<ThObjectBase<any, any>, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ThObjectBase<any, any>, "th-abs-object", never, { "lookAt": { "alias": "lookAt"; "required": false; }; }, {}, never, ["*"], false, never>;
}
