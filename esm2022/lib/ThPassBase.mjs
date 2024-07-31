import { Component, Optional } from '@angular/core';
import { ThWrapperBase } from './ThWrapperBase';
import * as i0 from "@angular/core";
import * as i1 from "./generated/overrides/ThEffectComposer";
// eslint-disable-next-line @angular-eslint/component-class-suffix
export class ThPassBase extends ThWrapperBase {
    constructor(effectComposer) {
        super();
        this.effectComposer = effectComposer;
    }
    addToParent() {
        if (this._objRef && this.effectComposer && this.effectComposer.objRef) {
            this.effectComposer.objRef.addPass(this._objRef);
        }
    }
    removeFromParent() {
        if (this._objRef && this.effectComposer && this.effectComposer.objRef) {
            this.effectComposer.objRef.removePass(this._objRef);
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThPassBase, deps: [{ token: i1.ThEffectComposer, optional: true }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.1.2", type: ThPassBase, selector: "th-abs-control", usesInheritance: true, ngImport: i0, template: '', isInline: true }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThPassBase, decorators: [{
            type: Component,
            args: [{
                    selector: 'th-abs-control',
                    template: '',
                }]
        }], ctorParameters: () => [{ type: i1.ThEffectComposer, decorators: [{
                    type: Optional
                }] }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGhQYXNzQmFzZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL25neC10aHJlZS9zcmMvbGliL1RoUGFzc0Jhc2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHNUQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGlCQUFpQixDQUFDOzs7QUFLaEQsa0VBQWtFO0FBQ2xFLE1BQU0sT0FBTyxVQUFrRCxTQUFRLGFBQXNCO0lBQzNGLFlBQWtDLGNBQWlDO1FBQ2pFLEtBQUssRUFBRSxDQUFDO1FBRHdCLG1CQUFjLEdBQWQsY0FBYyxDQUFtQjtJQUVuRSxDQUFDO0lBRU0sV0FBVztRQUNoQixJQUFJLElBQUksQ0FBQyxPQUFPLElBQUksSUFBSSxDQUFDLGNBQWMsSUFBSSxJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sRUFBRSxDQUFDO1lBQ3RFLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDbkQsQ0FBQztJQUNILENBQUM7SUFFTSxnQkFBZ0I7UUFDckIsSUFBSSxJQUFJLENBQUMsT0FBTyxJQUFJLElBQUksQ0FBQyxjQUFjLElBQUksSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLEVBQUUsQ0FBQztZQUN0RSxJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3RELENBQUM7SUFDSCxDQUFDOzhHQWZVLFVBQVU7a0dBQVYsVUFBVSw2RUFIWCxFQUFFOzsyRkFHRCxVQUFVO2tCQUx0QixTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxnQkFBZ0I7b0JBQzFCLFFBQVEsRUFBRSxFQUFFO2lCQUNiOzswQkFHYyxRQUFRIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIE9wdGlvbmFsIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBUaEVmZmVjdENvbXBvc2VyIH0gZnJvbSAnLi9nZW5lcmF0ZWQvb3ZlcnJpZGVzL1RoRWZmZWN0Q29tcG9zZXInO1xuaW1wb3J0IHsgUGFzcyB9IGZyb20gJ3RocmVlL2V4YW1wbGVzL2pzbS9wb3N0cHJvY2Vzc2luZy9QYXNzLmpzJztcbmltcG9ydCB7IFRoV3JhcHBlckJhc2UgfSBmcm9tICcuL1RoV3JhcHBlckJhc2UnO1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndGgtYWJzLWNvbnRyb2wnLFxuICB0ZW1wbGF0ZTogJycsXG59KVxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEBhbmd1bGFyLWVzbGludC9jb21wb25lbnQtY2xhc3Mtc3VmZml4XG5leHBvcnQgY2xhc3MgVGhQYXNzQmFzZTxUIGV4dGVuZHMgUGFzcyA9IFBhc3MsIEFSR1MgPSB1bmtub3duPiBleHRlbmRzIFRoV3JhcHBlckJhc2U8VCwgQVJHUz4gaW1wbGVtZW50cyBPbkluaXQge1xuICBjb25zdHJ1Y3RvcihAT3B0aW9uYWwoKSBwcm90ZWN0ZWQgZWZmZWN0Q29tcG9zZXI/OiBUaEVmZmVjdENvbXBvc2VyKSB7XG4gICAgc3VwZXIoKTtcbiAgfVxuXG4gIHB1YmxpYyBhZGRUb1BhcmVudCgpIHtcbiAgICBpZiAodGhpcy5fb2JqUmVmICYmIHRoaXMuZWZmZWN0Q29tcG9zZXIgJiYgdGhpcy5lZmZlY3RDb21wb3Nlci5vYmpSZWYpIHtcbiAgICAgIHRoaXMuZWZmZWN0Q29tcG9zZXIub2JqUmVmLmFkZFBhc3ModGhpcy5fb2JqUmVmKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgcmVtb3ZlRnJvbVBhcmVudCgpIHtcbiAgICBpZiAodGhpcy5fb2JqUmVmICYmIHRoaXMuZWZmZWN0Q29tcG9zZXIgJiYgdGhpcy5lZmZlY3RDb21wb3Nlci5vYmpSZWYpIHtcbiAgICAgIHRoaXMuZWZmZWN0Q29tcG9zZXIub2JqUmVmLnJlbW92ZVBhc3ModGhpcy5fb2JqUmVmKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==