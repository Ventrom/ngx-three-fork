import { OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Object3D } from 'three';
import { ThObject3D } from '../generated';
import * as i0 from "@angular/core";
export declare class RefByIdDirective implements OnDestroy {
    private host;
    private parent;
    protected subscription?: Subscription;
    protected parentObj?: Object3D;
    protected id?: string;
    constructor(host: ThObject3D, parent: ThObject3D);
    set refById(id: string | undefined);
    applyRef(): void;
    protected findById(parentObj: Object3D, id: string): Object3D | undefined;
    protected setRef(host: ThObject3D, ref: Object3D): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<RefByIdDirective, [{ self: true; }, { skipSelf: true; }]>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<RefByIdDirective, "[refById]", never, { "refById": { "alias": "refById"; "required": false; }; }, {}, never, never, false, never>;
}
