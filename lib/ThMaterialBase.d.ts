import { Material } from 'three';
import { ThObject3D } from './generated/ThObject3D';
import { ThWrapperBase } from './ThWrapperBase';
import * as i0 from "@angular/core";
export declare class ThMaterialBase<T extends Material, ARGS> extends ThWrapperBase<T, ARGS> {
    protected parent: ThObject3D<any>;
    constructor(parent: ThObject3D<any>);
    addToParent(): void;
    removeFromParent(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ThMaterialBase<any, any>, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ThMaterialBase<any, any>, "th-abs-material", never, {}, {}, never, never, false, never>;
}
