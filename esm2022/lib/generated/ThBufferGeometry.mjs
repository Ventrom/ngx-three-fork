/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix */
import { ChangeDetectionStrategy, Component, Input, SkipSelf, } from '@angular/core';
import { BufferGeometry, } from 'three';
import { ThGeometryBase } from '../ThGeometryBase';
import { applyValue } from '../util';
import * as i0 from "@angular/core";
import * as i1 from "./ThObject3D";
export class ThBufferGeometry extends ThGeometryBase {
    getType() {
        return BufferGeometry;
    }
    set id(value) {
        if (this._objRef) {
            this._objRef.id = value;
        }
    }
    get id() {
        return this._objRef?.id;
    }
    set uuid(value) {
        if (this._objRef) {
            this._objRef.uuid = value;
        }
    }
    get uuid() {
        return this._objRef?.uuid;
    }
    set name(value) {
        if (this._objRef) {
            this._objRef.name = value;
        }
    }
    get name() {
        return this._objRef?.name;
    }
    get type() {
        return this._objRef?.type;
    }
    set index(value) {
        if (this._objRef) {
            this._objRef.index = applyValue(this._objRef.index, value);
        }
    }
    get index() {
        return this._objRef?.index;
    }
    set attributes(value) {
        if (this._objRef) {
            this._objRef.attributes = value;
        }
    }
    get attributes() {
        return this._objRef?.attributes;
    }
    set morphAttributes(value) {
        if (this._objRef) {
            this._objRef.morphAttributes = value;
        }
    }
    get morphAttributes() {
        return this._objRef?.morphAttributes;
    }
    set morphTargetsRelative(value) {
        if (this._objRef) {
            this._objRef.morphTargetsRelative = value;
        }
    }
    get morphTargetsRelative() {
        return this._objRef?.morphTargetsRelative;
    }
    set groups(value) {
        if (this._objRef) {
            this._objRef.groups = value;
        }
    }
    get groups() {
        return this._objRef?.groups;
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
    set drawRange(value) {
        if (this._objRef) {
            this._objRef.drawRange = value;
        }
    }
    get drawRange() {
        return this._objRef?.drawRange;
    }
    set userData(value) {
        if (this._objRef) {
            this._objRef.userData = value;
        }
    }
    get userData() {
        return this._objRef?.userData;
    }
    get isBufferGeometry() {
        return this._objRef?.isBufferGeometry;
    }
    constructor(hostObject) {
        super(hostObject);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThBufferGeometry, deps: [{ token: i1.ThObject3D, skipSelf: true }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.1.2", type: ThBufferGeometry, selector: "th-bufferGeometry", inputs: { id: "id", uuid: "uuid", name: "name", index: "index", attributes: "attributes", morphAttributes: "morphAttributes", morphTargetsRelative: "morphTargetsRelative", groups: "groups", boundingBox: "boundingBox", boundingSphere: "boundingSphere", drawRange: "drawRange", userData: "userData" }, providers: [], usesInheritance: true, ngImport: i0, template: '<ng-content/>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThBufferGeometry, decorators: [{
            type: Component,
            args: [{
                    selector: 'th-bufferGeometry',
                    template: '<ng-content/>',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    providers: [],
                }]
        }], ctorParameters: () => [{ type: i1.ThObject3D, decorators: [{
                    type: SkipSelf
                }] }], propDecorators: { id: [{
                type: Input
            }], uuid: [{
                type: Input
            }], name: [{
                type: Input
            }], index: [{
                type: Input
            }], attributes: [{
                type: Input
            }], morphAttributes: [{
                type: Input
            }], morphTargetsRelative: [{
                type: Input
            }], groups: [{
                type: Input
            }], boundingBox: [{
                type: Input
            }], boundingSphere: [{
                type: Input
            }], drawRange: [{
                type: Input
            }], userData: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGhCdWZmZXJHZW9tZXRyeS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC10aHJlZS9zcmMvbGliL2dlbmVyYXRlZC9UaEJ1ZmZlckdlb21ldHJ5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHlEQUF5RDtBQUN6RCx5Q0FBeUM7QUFDekMsK0ZBQStGO0FBQy9GLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULEtBQUssRUFDTCxRQUFRLEdBRVQsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUdMLGNBQWMsR0FPZixNQUFNLE9BQU8sQ0FBQztBQUNmLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNuRCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sU0FBUyxDQUFDOzs7QUFTckMsTUFBTSxPQUFPLGdCQUlYLFNBQVEsY0FBd0I7SUFDekIsT0FBTztRQUNaLE9BQU8sY0FBYyxDQUFDO0lBQ3hCLENBQUM7SUFFRCxJQUNXLEVBQUUsQ0FBQyxLQUFhO1FBQ3pCLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ2pCLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxHQUFHLEtBQUssQ0FBQztRQUMxQixDQUFDO0lBQ0gsQ0FBQztJQUVELElBQVcsRUFBRTtRQUNYLE9BQU8sSUFBSSxDQUFDLE9BQU8sRUFBRSxFQUFFLENBQUM7SUFDMUIsQ0FBQztJQUNELElBQ1csSUFBSSxDQUFDLEtBQWE7UUFDM0IsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDakIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDO1FBQzVCLENBQUM7SUFDSCxDQUFDO0lBRUQsSUFBVyxJQUFJO1FBQ2IsT0FBTyxJQUFJLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQztJQUM1QixDQUFDO0lBQ0QsSUFDVyxJQUFJLENBQUMsS0FBYTtRQUMzQixJ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QkFlSyxTQUFTO3NCQURuQixLQUFLO2dCQVdLLFFBQVE7c0JBRGxCLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBAdHlwZXNjcmlwdC1lc2xpbnQvbmFtaW5nLWNvbnZlbnRpb24gKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vLXVuZGVyc2NvcmUtZGFuZ2xlICovXG4vKiBlc2xpbnQtZGlzYWJsZSBAYW5ndWxhci1lc2xpbnQvY29tcG9uZW50LXNlbGVjdG9yLCBAYW5ndWxhci1lc2xpbnQvY29tcG9uZW50LWNsYXNzLXN1ZmZpeCAqL1xuaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENvbXBvbmVudCxcbiAgSW5wdXQsXG4gIFNraXBTZWxmLFxuICBUeXBlLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIEJveDMsXG4gIEJ1ZmZlckF0dHJpYnV0ZSxcbiAgQnVmZmVyR2VvbWV0cnksXG4gIEdlb21ldHJ5R3JvdXAsXG4gIEludGVybGVhdmVkQnVmZmVyQXR0cmlidXRlLFxuICBOb3JtYWxCdWZmZXJBdHRyaWJ1dGVzLFxuICBOb3JtYWxPckdMQnVmZmVyQXR0cmlidXRlcyxcbiAgU3BoZXJlLFxuICBWZWN0b3IzLFxufSBmcm9tICd0aHJlZSc7XG5pbXBvcnQgeyBUaEdlb21ldHJ5QmFzZSB9IGZyb20gJy4uL1RoR2VvbWV0cnlCYXNlJztcbmltcG9ydCB7IGFwcGx5VmFsdWUgfSBmcm9tICcuLi91dGlsJztcbmltcG9ydCB7IFRoT2JqZWN0M0QgfSBmcm9tICcuL1RoT2JqZWN0M0QnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0aC1idWZmZXJHZW9tZXRyeScsXG4gIHRlbXBsYXRlOiAnPG5nLWNvbnRlbnQvPicsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBwcm92aWRlcnM6IFtdLFxufSlcbmV4cG9ydCBjbGFzcyBUaEJ1ZmZlckdlb21ldHJ5PFxuICBBdHRyaWJ1dGVzIGV4dGVuZHMgTm9ybWFsT3JHTEJ1ZmZlckF0dHJpYnV0ZXMgPSBOb3JtYWxCdWZmZXJBdHRyaWJ1dGVzLFxuICBUIGV4dGVuZHMgQnVmZmVyR2VvbWV0cnk8QXR0cmlidXRlcz4gPSBCdWZmZXJHZW9tZXRyeTxBdHRyaWJ1dGVzPixcbiAgVEFSR1MgPSBbXSxcbj4gZXh0ZW5kcyBUaEdlb21ldHJ5QmFzZTxULCBUQVJHUz4ge1xuICBwdWJsaWMgZ2V0VHlwZSgpOiBUeXBlPEJ1ZmZlckdlb21ldHJ5PEF0dHJpYnV0ZXM+PiB7XG4gICAgcmV0dXJuIEJ1ZmZlckdlb21ldHJ5O1xuICB9XG5cbiAgQElucHV0KClcbiAgcHVibGljIHNldCBpZCh2YWx1ZTogbnVtYmVyKSB7XG4gICAgaWYgKHRoaXMuX29ialJlZikge1xuICAgICAgdGhpcy5fb2JqUmVmLmlkID0gdmFsdWU7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGdldCBpZCgpOiBudW1iZXIgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9vYmpSZWY/LmlkO1xuICB9XG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzZXQgdXVpZCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgaWYgKHRoaXMuX29ialJlZikge1xuICAgICAgdGhpcy5fb2JqUmVmLnV1aWQgPSB2YWx1ZTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgZ2V0IHV1aWQoKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fb2JqUmVmPy51dWlkO1xuICB9XG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzZXQgbmFtZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgaWYgKHRoaXMuX29ialJlZikge1xuICAgICAgdGhpcy5fb2JqUmVmLm5hbWUgPSB2YWx1ZTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgZ2V0IG5hbWUoKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fb2JqUmVmPy5uYW1lO1xuICB9XG4gIHB1YmxpYyBnZXQgdHlwZSgpOiAoc3RyaW5nIHwgJ0J1ZmZlckdlb21ldHJ5JykgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9vYmpSZWY/LnR5cGU7XG4gIH1cbiAgQElucHV0KClcbiAgcHVibGljIHNldCBpbmRleChcbiAgICB2YWx1ZTpcbiAgICAgIHwgQnVmZmVyQXR0cmlidXRlXG4gICAgICB8IG51bGxcbiAgICAgIHwgW3ZhbHVlOiBBcnJheUxpa2U8bnVtYmVyPiB8IEFycmF5QnVmZmVyVmlldywgb2Zmc2V0PzogbnVtYmVyXSxcbiAgKSB7XG4gICAgaWYgKHRoaXMuX29ialJlZikge1xuICAgICAgdGhpcy5fb2JqUmVmLmluZGV4ID0gYXBwbHlWYWx1ZTxCdWZmZXJBdHRyaWJ1dGUgfCBudWxsPihcbiAgICAgICAgdGhpcy5fb2JqUmVmLmluZGV4LFxuICAgICAgICB2YWx1ZSxcbiAgICAgICk7XG4gICAgfVxuICB9XG4gIHB1YmxpYyBnZXQgaW5kZXgoKTogKEJ1ZmZlckF0dHJpYnV0ZSB8IG51bGwpIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fb2JqUmVmPy5pbmRleDtcbiAgfVxuICBASW5wdXQoKVxuICBwdWJsaWMgc2V0IGF0dHJpYnV0ZXModmFsdWU6IEF0dHJpYnV0ZXMpIHtcbiAgICBpZiAodGhpcy5fb2JqUmVmKSB7XG4gICAgICB0aGlzLl9vYmpSZWYuYXR0cmlidXRlcyA9IHZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBnZXQgYXR0cmlidXRlcygpOiBBdHRyaWJ1dGVzIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fb2JqUmVmPy5hdHRyaWJ1dGVzO1xuICB9XG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzZXQgbW9ycGhBdHRyaWJ1dGVzKHZhbHVlOiB7XG4gICAgW25hbWU6IHN0cmluZ106IEFycmF5PEJ1ZmZlckF0dHJpYnV0ZSB8IEludGVybGVhdmVkQnVmZmVyQXR0cmlidXRlPjsgLy8gVE9ETyBSZXBsYWNlIGZvciAnUmVjb3JkPD4nXG4gIH0pIHtcbiAgICBpZiAodGhpcy5fb2JqUmVmKSB7XG4gICAgICB0aGlzLl9vYmpSZWYubW9ycGhBdHRyaWJ1dGVzID0gdmFsdWU7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGdldCBtb3JwaEF0dHJpYnV0ZXMoKTpcbiAgICB8IHtcbiAgICAgICAgW25hbWU6IHN0cmluZ106IEFycmF5PEJ1ZmZlckF0dHJpYnV0ZSB8IEludGVybGVhdmVkQnVmZmVyQXR0cmlidXRlPjsgLy8gVE9ETyBSZXBsYWNlIGZvciAnUmVjb3JkPD4nXG4gICAgICB9XG4gICAgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9vYmpSZWY/Lm1vcnBoQXR0cmlidXRlcztcbiAgfVxuICBASW5wdXQoKVxuICBwdWJsaWMgc2V0IG1vcnBoVGFyZ2V0c1JlbGF0aXZlKHZhbHVlOiBib29sZWFuKSB7XG4gICAgaWYgKHRoaXMuX29ialJlZikge1xuICAgICAgdGhpcy5fb2JqUmVmLm1vcnBoVGFyZ2V0c1JlbGF0aXZlID0gdmFsdWU7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGdldCBtb3JwaFRhcmdldHNSZWxhdGl2ZSgpOiBib29sZWFuIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fb2JqUmVmPy5tb3JwaFRhcmdldHNSZWxhdGl2ZTtcbiAgfVxuICBASW5wdXQoKVxuICBwdWJsaWMgc2V0IGdyb3Vwcyh2YWx1ZTogR2VvbWV0cnlHcm91cFtdKSB7XG4gICAgaWYgKHRoaXMuX29ialJlZikge1xuICAgICAgdGhpcy5fb2JqUmVmLmdyb3VwcyA9IHZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBnZXQgZ3JvdXBzKCk6IEdlb21ldHJ5R3JvdXBbXSB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX29ialJlZj8uZ3JvdXBzO1xuICB9XG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzZXQgYm91bmRpbmdCb3godmFsdWU6IEJveDMgfCBudWxsIHwgW21pbjogVmVjdG9yMywgbWF4OiBWZWN0b3IzXSkge1xuICAgIGlmICh0aGlzLl9vYmpSZWYpIHtcbiAgICAgIHRoaXMuX29ialJlZi5ib3VuZGluZ0JveCA9IGFwcGx5VmFsdWU8Qm94MyB8IG51bGw+KFxuICAgICAgICB0aGlzLl9vYmpSZWYuYm91bmRpbmdCb3gsXG4gICAgICAgIHZhbHVlLFxuICAgICAgKTtcbiAgICB9XG4gIH1cbiAgcHVibGljIGdldCBib3VuZGluZ0JveCgpOiAoQm94MyB8IG51bGwpIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fb2JqUmVmPy5ib3VuZGluZ0JveDtcbiAgfVxuICBASW5wdXQoKVxuICBwdWJsaWMgc2V0IGJvdW5kaW5nU3BoZXJlKFxuICAgIHZhbHVlOiBTcGhlcmUgfCBudWxsIHwgW2NlbnRlcjogVmVjdG9yMywgcmFkaXVzOiBudW1iZXJdLFxuICApIHtcbiAgICBpZiAodGhpcy5fb2JqUmVmKSB7XG4gICAgICB0aGlzLl9vYmpSZWYuYm91bmRpbmdTcGhlcmUgPSBhcHBseVZhbHVlPFNwaGVyZSB8IG51bGw+KFxuICAgICAgICB0aGlzLl9vYmpSZWYuYm91bmRpbmdTcGhlcmUsXG4gICAgICAgIHZhbHVlLFxuICAgICAgKTtcbiAgICB9XG4gIH1cbiAgcHVibGljIGdldCBib3VuZGluZ1NwaGVyZSgpOiAoU3BoZXJlIHwgbnVsbCkgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9vYmpSZWY/LmJvdW5kaW5nU3BoZXJlO1xuICB9XG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzZXQgZHJhd1JhbmdlKHZhbHVlOiB7IHN0YXJ0OiBudW1iZXI7IGNvdW50OiBudW1iZXIgfSkge1xuICAgIGlmICh0aGlzLl9vYmpSZWYpIHtcbiAgICAgIHRoaXMuX29ialJlZi5kcmF3UmFuZ2UgPSB2YWx1ZTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgZ2V0IGRyYXdSYW5nZSgpOiB7IHN0YXJ0OiBudW1iZXI7IGNvdW50OiBudW1iZXIgfSB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX29ialJlZj8uZHJhd1JhbmdlO1xuICB9XG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzZXQgdXNlckRhdGEodmFsdWU6IFJlY29yZDxzdHJpbmcsIGFueT4pIHtcbiAgICBpZiAodGhpcy5fb2JqUmVmKSB7XG4gICAgICB0aGlzLl9vYmpSZWYudXNlckRhdGEgPSB2YWx1ZTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgZ2V0IHVzZXJEYXRhKCk6IFJlY29yZDxzdHJpbmcsIGFueT4gfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9vYmpSZWY/LnVzZXJEYXRhO1xuICB9XG4gIHB1YmxpYyBnZXQgaXNCdWZmZXJHZW9tZXRyeSgpOiB0cnVlIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fb2JqUmVmPy5pc0J1ZmZlckdlb21ldHJ5O1xuICB9XG5cbiAgY29uc3RydWN0b3IoQFNraXBTZWxmKCkgaG9zdE9iamVjdDogVGhPYmplY3QzRCkge1xuICAgIHN1cGVyKGhvc3RPYmplY3QpO1xuICB9XG59XG4iXX0=