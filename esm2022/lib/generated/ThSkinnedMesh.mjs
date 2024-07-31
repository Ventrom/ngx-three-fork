/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix */
import { ChangeDetectionStrategy, Component, Input, forwardRef, } from '@angular/core';
import { SkinnedMesh, } from 'three';
import { applyValue } from '../util';
import { ThMesh } from './ThMesh';
import { ThObject3D } from './ThObject3D';
import * as i0 from "@angular/core";
export class ThSkinnedMesh extends ThMesh {
    getType() {
        return SkinnedMesh;
    }
    get isSkinnedMesh() {
        return this._objRef?.isSkinnedMesh;
    }
    get type() {
        return this._objRef?.type;
    }
    set bindMode(value) {
        if (this._objRef) {
            this._objRef.bindMode = value;
        }
    }
    get bindMode() {
        return this._objRef?.bindMode;
    }
    set bindMatrix(value) {
        if (this._objRef) {
            this._objRef.bindMatrix = applyValue(this._objRef.bindMatrix, value);
        }
    }
    get bindMatrix() {
        return this._objRef?.bindMatrix;
    }
    set bindMatrixInverse(value) {
        if (this._objRef) {
            this._objRef.bindMatrixInverse = applyValue(this._objRef.bindMatrixInverse, value);
        }
    }
    get bindMatrixInverse() {
        return this._objRef?.bindMatrixInverse;
    }
    set boundingBox(value) {
        if (this._objRef) {
            this._objRef.boundingBox = applyValue(this._objRef.boundingBox, value);
        }
    }
    get boundingBox() {
        return this._objRef?.boundingBox;
    }
    set boundingSphere(value) {
        if (this._objRef) {
            this._objRef.boundingSphere = applyValue(this._objRef.boundingSphere, value);
        }
    }
    get boundingSphere() {
        return this._objRef?.boundingSphere;
    }
    set skeleton(value) {
        if (this._objRef) {
            this._objRef.skeleton = value;
        }
    }
    get skeleton() {
        return this._objRef?.skeleton;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThSkinnedMesh, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.1.2", type: ThSkinnedMesh, selector: "th-skinnedMesh", inputs: { bindMode: "bindMode", bindMatrix: "bindMatrix", bindMatrixInverse: "bindMatrixInverse", boundingBox: "boundingBox", boundingSphere: "boundingSphere", skeleton: "skeleton" }, providers: [
            { provide: ThObject3D, useExisting: forwardRef(() => ThSkinnedMesh) },
        ], usesInheritance: true, ngImport: i0, template: '<ng-content/>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThSkinnedMesh, decorators: [{
            type: Component,
            args: [{
                    selector: 'th-skinnedMesh',
                    template: '<ng-content/>',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    providers: [
                        { provide: ThObject3D, useExisting: forwardRef(() => ThSkinnedMesh) },
                    ],
                }]
        }], propDecorators: { bindMode: [{
                type: Input
            }], bindMatrix: [{
                type: Input
            }], bindMatrixInverse: [{
                type: Input
            }], boundingBox: [{
                type: Input
            }], boundingSphere: [{
                type: Input
            }], skeleton: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGhTa2lubmVkTWVzaC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC10aHJlZS9zcmMvbGliL2dlbmVyYXRlZC9UaFNraW5uZWRNZXNoLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHlEQUF5RDtBQUN6RCx5Q0FBeUM7QUFDekMsK0ZBQStGO0FBQy9GLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULEtBQUssRUFFTCxVQUFVLEdBQ1gsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQVFMLFdBQVcsR0FHWixNQUFNLE9BQU8sQ0FBQztBQUNmLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxTQUFTLENBQUM7QUFDckMsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLFVBQVUsQ0FBQztBQUNsQyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sY0FBYyxDQUFDOztBQVUxQyxNQUFNLE9BQU8sYUFjWCxTQUFRLE1BQWlEO0lBQ2xELE9BQU87UUFDWixPQUFPLFdBQVcsQ0FBQztJQUNyQixDQUFDO0lBRUQsSUFBVyxhQUFhO1FBQ3RCLE9BQU8sSUFBSSxDQUFDLE9BQU8sRUFBRSxhQUFhLENBQUM7SUFDckMsQ0FBQztJQUNELElBQVcsSUFBSTtRQUNiLE9BQU8sSUFBSSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUM7SUFDNUIsQ0FBQztJQUNELElBQ1csUUFBUSxDQUFDLEtBQWU7UUFDakMsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDakIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO1FBQ2hDLENBQUM7SUFDSCxDQUFDO0lBRUQsSUFBVyxRQUFRO1FBQ2pCLE9BQU8sSUFBSSxDQUFDLE9BQU8sRUFBRSxRQUFRLENBQUM7SUFDaEMsQ0FBQztJQUNELElBQ1csVUFBVSxDQUNuQixLQW1CSztRQUVMLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ2pCLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FDbEMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLEVBQ3ZCLEtBQUssQ0FDTixDQUFDO1FBQ0osQ0FBQztJQUNILENBQUM7SUFDRCxJQUFXLFVBQVU7UUFDbkIsT0FBTyxJQUFJLENBQUMsT0FBTyxFQUFFLFVBQVUsQ0FBQztJQUNsQyxDQUFDO0lBQ0QsSUFDVyxpQkFBaUIsQ0FDMUIsS0FtQks7UUFFTCxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUNqQixJQUFJLENBQUMsT0FBTyxDQUFDLGlCQUFpQixHQUFHLFVBQVUsQ0FDekMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxpQkFBaUIsRUFDOUIsS0FBSyxDQUNOLENBQUM7UUFDSixDQUFDO0lBQ0gsQ0FBQztJQUNELElBQVcsaUJBQWlCO1FBQzFCLE9BQU8sSUFBSSxDQUFDLE9BQU8sRUFBRSxpQkFBaUIsQ0FBQztJQUN6QyxDQUFDO0lBQ0QsSUFDVyxXQUFXLENBQUMsS0FBMEM7UUFDL0QsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDakIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLEdBQUcsVUFBVSxDQUNuQyxJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsRUFDeEIsS0FBSyxDQUNOLENBQUM7UUFDSixDQUFDO0lBQ0gsQ0FBQztJQUNELElBQVcsV0FBVztRQUNwQixPQUFPLElBQUksQ0FBQyxPQUFPLEVBQUUsV0FBVyxDQUFDO0lBQ25DLENBQUM7SUFDRCxJQUNXLGNBQWMsQ0FBQyxLQUFpRDtRQUN6RSxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUNqQixJQUFJLENBQUMsT0FBTyxDQUFDLGNBQWMsR0FBRyxVQUFVLENBQ3RDLElBQUksQ0FBQyxPQUFPLENBQUMsY0FBYyxFQUMzQixLQUFLLENBQ04sQ0FBQztRQUNKLENBQUM7SUFDSCxDQUFDO0lBQ0QsSUFBVyxjQUFjO1FBQ3ZCLE9BQU8sSUFBSSxDQUFDLE9BQU8sRUFBRSxjQUFjLENBQUM7SUFDdEMsQ0FBQztJQUNELElBQ1csUUFBUSxDQUFDLEtBQWU7UUFDakMsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDakIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO1FBQ2hDLENBQUM7SUFDSCxDQUFDO0lBRUQsSUFBVyxRQUFRO1FBQ2pCLE9BQU8sSUFBSSxDQUFDLE9BQU8sRUFBRSxRQUFRLENBQUM7SUFDaEMsQ0FBQzs4R0F0SVUsYUFBYTtrR0FBYixhQUFhLGlPQUpiO1lBQ1QsRUFBRSxPQUFPLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRSxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsYUFBYSxDQUFDLEVBQUU7U0FDdEUsaURBSlMsZUFBZTs7MkZBTWQsYUFBYTtrQkFSekIsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsZ0JBQWdCO29CQUMxQixRQUFRLEVBQUUsZUFBZTtvQkFDekIsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07b0JBQy9DLFNBQVMsRUFBRTt3QkFDVCxFQUFFLE9BQU8sRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFLFVBQVUsQ0FBQyxHQUFHLEVBQUUsY0FBYyxDQUFDLEVBQUU7cUJBQ3RFO2lCQUNGOzhCQTJCWSxRQUFRO3NCQURsQixLQUFLO2dCQVdLLFVBQVU7c0JBRHBCLEtBQUs7Z0JBa0NLLGlCQUFpQjtzQkFEM0IsS0FBSztnQkFrQ0ssV0FBVztzQkFEckIsS0FBSztnQkFhSyxjQUFjO3NCQUR4QixLQUFLO2dCQWFLLFFBQVE7c0JBRGxCLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBAdHlwZXNjcmlwdC1lc2xpbnQvbmFtaW5nLWNvbnZlbnRpb24gKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vLXVuZGVyc2NvcmUtZGFuZ2xlICovXG4vKiBlc2xpbnQtZGlzYWJsZSBAYW5ndWxhci1lc2xpbnQvY29tcG9uZW50LXNlbGVjdG9yLCBAYW5ndWxhci1lc2xpbnQvY29tcG9uZW50LWNsYXNzLXN1ZmZpeCAqL1xuaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENvbXBvbmVudCxcbiAgSW5wdXQsXG4gIFR5cGUsXG4gIGZvcndhcmRSZWYsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgQmluZE1vZGUsXG4gIEJveDMsXG4gIEJ1ZmZlckdlb21ldHJ5LFxuICBNYXRlcmlhbCxcbiAgTWF0cml4NCxcbiAgT2JqZWN0M0RFdmVudE1hcCxcbiAgU2tlbGV0b24sXG4gIFNraW5uZWRNZXNoLFxuICBTcGhlcmUsXG4gIFZlY3RvcjMsXG59IGZyb20gJ3RocmVlJztcbmltcG9ydCB7IGFwcGx5VmFsdWUgfSBmcm9tICcuLi91dGlsJztcbmltcG9ydCB7IFRoTWVzaCB9IGZyb20gJy4vVGhNZXNoJztcbmltcG9ydCB7IFRoT2JqZWN0M0QgfSBmcm9tICcuL1RoT2JqZWN0M0QnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0aC1za2lubmVkTWVzaCcsXG4gIHRlbXBsYXRlOiAnPG5nLWNvbnRlbnQvPicsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBwcm92aWRlcnM6IFtcbiAgICB7IHByb3ZpZGU6IFRoT2JqZWN0M0QsIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IFRoU2tpbm5lZE1lc2gpIH0sXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIFRoU2tpbm5lZE1lc2g8XG4gIFRHZW9tZXRyeSBleHRlbmRzIEJ1ZmZlckdlb21ldHJ5ID0gQnVmZmVyR2VvbWV0cnksXG4gIFRNYXRlcmlhbCBleHRlbmRzIE1hdGVyaWFsIHwgTWF0ZXJpYWxbXSA9IE1hdGVyaWFsIHwgTWF0ZXJpYWxbXSxcbiAgVEV2ZW50TWFwIGV4dGVuZHMgT2JqZWN0M0RFdmVudE1hcCA9IE9iamVjdDNERXZlbnRNYXAsXG4gIFQgZXh0ZW5kcyBTa2lubmVkTWVzaDxUR2VvbWV0cnksIFRNYXRlcmlhbCwgVEV2ZW50TWFwPiA9IFNraW5uZWRNZXNoPFxuICAgIFRHZW9tZXRyeSxcbiAgICBUTWF0ZXJpYWwsXG4gICAgVEV2ZW50TWFwXG4gID4sXG4gIFRBUkdTID0gW1xuICAgIGdlb21ldHJ5PzogVEdlb21ldHJ5LFxuICAgIG1hdGVyaWFsPzogVE1hdGVyaWFsLFxuICAgIHVzZVZlcnRleFRleHR1cmU/OiBib29sZWFuLFxuICBdLFxuPiBleHRlbmRzIFRoTWVzaDxUR2VvbWV0cnksIFRNYXRlcmlhbCwgVEV2ZW50TWFwLCBULCBUQVJHUz4ge1xuICBwdWJsaWMgZ2V0VHlwZSgpOiBUeXBlPFNraW5uZWRNZXNoPFRHZW9tZXRyeSwgVE1hdGVyaWFsLCBURXZlbnRNYXA+PiB7XG4gICAgcmV0dXJuIFNraW5uZWRNZXNoO1xuICB9XG5cbiAgcHVibGljIGdldCBpc1NraW5uZWRNZXNoKCk6IHRydWUgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9vYmpSZWY/LmlzU2tpbm5lZE1lc2g7XG4gIH1cbiAgcHVibGljIGdldCB0eXBlKCk6IChzdHJpbmcgfCAnU2tpbm5lZE1lc2gnKSB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX29ialJlZj8udHlwZTtcbiAgfVxuICBASW5wdXQoKVxuICBwdWJsaWMgc2V0IGJpbmRNb2RlKHZhbHVlOiBCaW5kTW9kZSkge1xuICAgIGlmICh0aGlzLl9vYmpSZWYpIHtcbiAgICAgIHRoaXMuX29ialJlZi5iaW5kTW9kZSA9IHZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBnZXQgYmluZE1vZGUoKTogQmluZE1vZGUgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9vYmpSZWY/LmJpbmRNb2RlO1xuICB9XG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzZXQgYmluZE1hdHJpeChcbiAgICB2YWx1ZTpcbiAgICAgIHwgTWF0cml4NFxuICAgICAgfCBbXG4gICAgICAgICAgbjExOiBudW1iZXIsXG4gICAgICAgICAgbjEyOiBudW1iZXIsXG4gICAgICAgICAgbjEzOiBudW1iZXIsXG4gICAgICAgICAgbjE0OiBudW1iZXIsXG4gICAgICAgICAgbjIxOiBudW1iZXIsXG4gICAgICAgICAgbjIyOiBudW1iZXIsXG4gICAgICAgICAgbjIzOiBudW1iZXIsXG4gICAgICAgICAgbjI0OiBudW1iZXIsXG4gICAgICAgICAgbjMxOiBudW1iZXIsXG4gICAgICAgICAgbjMyOiBudW1iZXIsXG4gICAgICAgICAgbjMzOiBudW1iZXIsXG4gICAgICAgICAgbjM0OiBudW1iZXIsXG4gICAgICAgICAgbjQxOiBudW1iZXIsXG4gICAgICAgICAgbjQyOiBudW1iZXIsXG4gICAgICAgICAgbjQzOiBudW1iZXIsXG4gICAgICAgICAgbjQ0OiBudW1iZXIsXG4gICAgICAgIF0sXG4gICkge1xuICAgIGlmICh0aGlzLl9vYmpSZWYpIHtcbiAgICAgIHRoaXMuX29ialJlZi5iaW5kTWF0cml4ID0gYXBwbHlWYWx1ZTxNYXRyaXg0PihcbiAgICAgICAgdGhpcy5fb2JqUmVmLmJpbmRNYXRyaXgsXG4gICAgICAgIHZhbHVlLFxuICAgICAgKTtcbiAgICB9XG4gIH1cbiAgcHVibGljIGdldCBiaW5kTWF0cml4KCk6IE1hdHJpeDQgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9vYmpSZWY/LmJpbmRNYXRyaXg7XG4gIH1cbiAgQElucHV0KClcbiAgcHVibGljIHNldCBiaW5kTWF0cml4SW52ZXJzZShcbiAgICB2YWx1ZTpcbiAgICAgIHwgTWF0cml4NFxuICAgICAgfCBbXG4gICAgICAgICAgbjExOiBudW1iZXIsXG4gICAgICAgICAgbjEyOiBudW1iZXIsXG4gICAgICAgICAgbjEzOiBudW1iZXIsXG4gICAgICAgICAgbjE0OiBudW1iZXIsXG4gICAgICAgICAgbjIxOiBudW1iZXIsXG4gICAgICAgICAgbjIyOiBudW1iZXIsXG4gICAgICAgICAgbjIzOiBudW1iZXIsXG4gICAgICAgICAgbjI0OiBudW1iZXIsXG4gICAgICAgICAgbjMxOiBudW1iZXIsXG4gICAgICAgICAgbjMyOiBudW1iZXIsXG4gICAgICAgICAgbjMzOiBudW1iZXIsXG4gICAgICAgICAgbjM0OiBudW1iZXIsXG4gICAgICAgICAgbjQxOiBudW1iZXIsXG4gICAgICAgICAgbjQyOiBudW1iZXIsXG4gICAgICAgICAgbjQzOiBudW1iZXIsXG4gICAgICAgICAgbjQ0OiBudW1iZXIsXG4gICAgICAgIF0sXG4gICkge1xuICAgIGlmICh0aGlzLl9vYmpSZWYpIHtcbiAgICAgIHRoaXMuX29ialJlZi5iaW5kTWF0cml4SW52ZXJzZSA9IGFwcGx5VmFsdWU8TWF0cml4ND4oXG4gICAgICAgIHRoaXMuX29ialJlZi5iaW5kTWF0cml4SW52ZXJzZSxcbiAgICAgICAgdmFsdWUsXG4gICAgICApO1xuICAgIH1cbiAgfVxuICBwdWJsaWMgZ2V0IGJpbmRNYXRyaXhJbnZlcnNlKCk6IE1hdHJpeDQgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9vYmpSZWY/LmJpbmRNYXRyaXhJbnZlcnNlO1xuICB9XG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzZXQgYm91bmRpbmdCb3godmFsdWU6IEJveDMgfCBbbWluOiBWZWN0b3IzLCBtYXg6IFZlY3RvcjNdKSB7XG4gICAgaWYgKHRoaXMuX29ialJlZikge1xuICAgICAgdGhpcy5fb2JqUmVmLmJvdW5kaW5nQm94ID0gYXBwbHlWYWx1ZTxCb3gzPihcbiAgICAgICAgdGhpcy5fb2JqUmVmLmJvdW5kaW5nQm94LFxuICAgICAgICB2YWx1ZSxcbiAgICAgICk7XG4gICAgfVxuICB9XG4gIHB1YmxpYyBnZXQgYm91bmRpbmdCb3goKTogQm94MyB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX29ialJlZj8uYm91bmRpbmdCb3g7XG4gIH1cbiAgQElucHV0KClcbiAgcHVibGljIHNldCBib3VuZGluZ1NwaGVyZSh2YWx1ZTogU3BoZXJlIHwgW2NlbnRlcjogVmVjdG9yMywgcmFkaXVzOiBudW1iZXJdKSB7XG4gICAgaWYgKHRoaXMuX29ialJlZikge1xuICAgICAgdGhpcy5fb2JqUmVmLmJvdW5kaW5nU3BoZXJlID0gYXBwbHlWYWx1ZTxTcGhlcmU+KFxuICAgICAgICB0aGlzLl9vYmpSZWYuYm91bmRpbmdTcGhlcmUsXG4gICAgICAgIHZhbHVlLFxuICAgICAgKTtcbiAgICB9XG4gIH1cbiAgcHVibGljIGdldCBib3VuZGluZ1NwaGVyZSgpOiBTcGhlcmUgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9vYmpSZWY/LmJvdW5kaW5nU3BoZXJlO1xuICB9XG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzZXQgc2tlbGV0b24odmFsdWU6IFNrZWxldG9uKSB7XG4gICAgaWYgKHRoaXMuX29ialJlZikge1xuICAgICAgdGhpcy5fb2JqUmVmLnNrZWxldG9uID0gdmFsdWU7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGdldCBza2VsZXRvbigpOiBTa2VsZXRvbiB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX29ialJlZj8uc2tlbGV0b247XG4gIH1cbn1cbiJdfQ==