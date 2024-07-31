import { Component, EventEmitter, Input, Output, } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { isLazyObject3dProxy } from './loaders/LazyObject3dProxy';
import { isDisposable } from './util';
import * as i0 from "@angular/core";
// eslint-disable-next-line @angular-eslint/component-class-suffix
export class ThWrapperBase {
    set objRef(ref) {
        this.applyObjRef(ref);
    }
    get objRef() {
        return this._objRef;
    }
    constructor() {
        this.autoAddToParent = true;
        this.autoDispose = true;
        // nothing to do
    }
    addToParent() {
        // nothing to do, implement it in a derived class
    }
    removeFromParent() {
        // nothing to do, implement it in a derived class
    }
    set threeEvents(eventMap) {
        this.removeEvents();
        this.eventListeners = eventMap;
        this.applyEvents();
    }
    get threeEvents() {
        return this.eventListeners;
    }
    get onUpdate() {
        if (!this.updateEmitter) {
            this.updateEmitter = new EventEmitter();
        }
        return this.updateEmitter;
    }
    /**
     * emits the last assigned object ref
     */
    get objRef$() {
        if (!this._objRef$) {
            this._objRef$ = new ReplaySubject(1);
        }
        return this._objRef$;
    }
    ngOnInit() {
        if (!this.objRef) {
            this.objRef = this.createThreeInstance(this.args);
        }
    }
    // Override this
    getType() {
        throw new Error('derive me');
    }
    createThreeInstance(args) {
        if (Array.isArray(args)) {
            return new (this.getType())(...args);
        }
        else {
            return new (this.getType())(args);
        }
    }
    ngOnChanges(changes) {
        // console.log('on changes');
        if (this.objRef && !isLazyObject3dProxy(this.objRef)) {
            // the object is already set and it is no proxy
            // emit the changes
            this.emitPropertyChanges(changes);
            // TODO: request animation frame
            return;
        }
        if (!this.objRef) {
            // no object and no proxy is set --> create an instance
            this.objRef = this.createThreeInstance(changes.args?.currentValue);
        }
        // eslint-disable-next-line guard-for-in
        for (const key in changes) {
            this[key] = changes[key].currentValue;
        }
        this.emitPropertyChanges(changes);
    }
    disposeObjRef() {
        if (isDisposable(this.objRef)) {
            this.objRef.dispose();
        }
    }
    ngOnDestroy() {
        this.removeEvents();
        this.removeFromParent();
        if (this.autoDispose) {
            this.disposeObjRef();
        }
    }
    applyObjRef(objRef) {
        if (this._objRef !== objRef) {
            this.removeFromParent();
            this._objRef = objRef;
            if (this.autoAddToParent) {
                this.addToParent();
            }
        }
        this.emitObjRefChange();
    }
    emitObjRefChange() {
        // only emit change if _objRef is no proxy,
        // and trigger emit over objRef event emitter
        if (this._objRef && !isLazyObject3dProxy(this._objRef)) {
            this._objRef.dispatchEvent?.({
                type: 'loaded',
                object: this._objRef,
            });
            if (this._objRef$) {
                this._objRef$.next(this._objRef);
            }
        }
    }
    emitPropertyChanges(changes) {
        if (this._objRef) {
            this._objRef.dispatchEvent?.({ type: 'changes', changes });
        }
        if (this.updateEmitter) {
            this.updateEmitter.next(changes);
        }
    }
    removeEvents() {
        if (this.eventListeners && this._objRef) {
            for (const entry of Object.entries(this.eventListeners)) {
                this._objRef.removeEventListener(entry[0], entry[1]);
            }
            this.eventListeners = undefined;
        }
    }
    applyEvents() {
        if (this.eventListeners && this._objRef) {
            for (const entry of Object.entries(this.eventListeners)) {
                this._objRef.addEventListener(entry[0], entry[1]);
            }
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThWrapperBase, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.1.2", type: ThWrapperBase, selector: "th-abs-wrapper", inputs: { autoAddToParent: "autoAddToParent", autoDispose: "autoDispose", objRef: "objRef", args: "args", threeEvents: "threeEvents" }, outputs: { onUpdate: "onUpdate", objRef$: "objRef$" }, usesOnChanges: true, ngImport: i0, template: '', isInline: true }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThWrapperBase, decorators: [{
            type: Component,
            args: [{
                    selector: 'th-abs-wrapper',
                    template: '',
                }]
        }], ctorParameters: () => [], propDecorators: { autoAddToParent: [{
                type: Input
            }], autoDispose: [{
                type: Input
            }], objRef: [{
                type: Input
            }], args: [{
                type: Input
            }], threeEvents: [{
                type: Input
            }], onUpdate: [{
                type: Output
            }], objRef$: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGhXcmFwcGVyQmFzZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL25neC10aHJlZS9zcmMvbGliL1RoV3JhcHBlckJhc2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxZQUFZLEVBQ1osS0FBSyxFQUlMLE1BQU0sR0FHUCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQWMsYUFBYSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRWpELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBRWxFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxRQUFRLENBQUM7O0FBV3RDLGtFQUFrRTtBQUNsRSxNQUFNLE9BQU8sYUFBYTtJQVV4QixJQUNJLE1BQU0sQ0FBQyxHQUFrQjtRQUMzQixJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3hCLENBQUM7SUFFRCxJQUFJLE1BQU07UUFDUixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDdEIsQ0FBQztJQUtEO1FBakJPLG9CQUFlLEdBQUcsSUFBSSxDQUFDO1FBR3ZCLGdCQUFXLEdBQUcsSUFBSSxDQUFDO1FBZXhCLGdCQUFnQjtJQUNsQixDQUFDO0lBRUQsV0FBVztRQUNULGlEQUFpRDtJQUNuRCxDQUFDO0lBQ0QsZ0JBQWdCO1FBQ2QsaURBQWlEO0lBQ25ELENBQUM7SUFNRCxJQUNXLFdBQVcsQ0FBQyxRQUFzRjtRQUMzRyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDcEIsSUFBSSxDQUFDLGNBQWMsR0FBRyxRQUFRLENBQUM7UUFDL0IsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3JCLENBQUM7SUFFRCxJQUFXLFdBQVc7UUFDcEIsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDO0lBQzdCLENBQUM7SUFFRCxJQUNXLFFBQVE7UUFDakIsSUFBSSxDQUFDLElBQUksQ0FBQyxh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QyxDQUFDO1lBQ2hFLENBQUM7WUFDRCxJQUFJLENBQUMsY0FBYyxHQUFHLFNBQVMsQ0FBQztRQUNsQyxDQUFDO0lBQ0gsQ0FBQztJQUVPLFdBQVc7UUFDakIsSUFBSSxJQUFJLENBQUMsY0FBYyxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUN4QyxLQUFLLE1BQU0sS0FBSyxJQUFJLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxFQUFFLENBQUM7Z0JBQ3ZELElBQUksQ0FBQyxPQUFlLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzdELENBQUM7UUFDSCxDQUFDO0lBQ0gsQ0FBQzs4R0EvS1UsYUFBYTtrR0FBYixhQUFhLDBRQUhkLEVBQUU7OzJGQUdELGFBQWE7a0JBTHpCLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLGdCQUFnQjtvQkFDMUIsUUFBUSxFQUFFLEVBQUU7aUJBQ2I7d0RBT1EsZUFBZTtzQkFEckIsS0FBSztnQkFJQyxXQUFXO3NCQURqQixLQUFLO2dCQUlGLE1BQU07c0JBRFQsS0FBSztnQkF3QkMsSUFBSTtzQkFEVixLQUFLO2dCQUtLLFdBQVc7c0JBRHJCLEtBQUs7Z0JBWUssUUFBUTtzQkFEbEIsTUFBTTtnQkFZSSxPQUFPO3NCQURqQixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBFdmVudEVtaXR0ZXIsXG4gIElucHV0LFxuICBPbkNoYW5nZXMsXG4gIE9uRGVzdHJveSxcbiAgT25Jbml0LFxuICBPdXRwdXQsXG4gIFNpbXBsZUNoYW5nZXMsXG4gIFR5cGUsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgUmVwbGF5U3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgRXZlbnREaXNwYXRjaGVyLCBFdmVudExpc3RlbmVyLCBPYmplY3QzRCwgT2JqZWN0M0RFdmVudE1hcCwgRXZlbnQgfSBmcm9tICd0aHJlZSc7XG5pbXBvcnQgeyBpc0xhenlPYmplY3QzZFByb3h5IH0gZnJvbSAnLi9sb2FkZXJzL0xhenlPYmplY3QzZFByb3h5JztcbmltcG9ydCB7IFRoV3JhcHBlckxpZmVDeWNsZSB9IGZyb20gJy4vVGhXcmFwcGVyTGlmZUN5Y2xlJztcbmltcG9ydCB7IGlzRGlzcG9zYWJsZSB9IGZyb20gJy4vdXRpbCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgVGhXcmFwcGVyRXZlbnRNYXA8VCA9IE9iamVjdDNEPiBleHRlbmRzIE9iamVjdDNERXZlbnRNYXAge1xuICBjaGFuZ2VzOiB7IGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMgfTtcbiAgbG9hZGVkOiB7IG9iamVjdDogVCB9O1xufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0aC1hYnMtd3JhcHBlcicsXG4gIHRlbXBsYXRlOiAnJyxcbn0pXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQGFuZ3VsYXItZXNsaW50L2NvbXBvbmVudC1jbGFzcy1zdWZmaXhcbmV4cG9ydCBjbGFzcyBUaFdyYXBwZXJCYXNlPFQsIEFSR1MgPSB1bmtub3duPiBpbXBsZW1lbnRzIFRoV3JhcHBlckxpZmVDeWNsZSwgT25DaGFuZ2VzLCBPbkluaXQsIE9uRGVzdHJveSB7XG4gIHByb3RlY3RlZCBfb2JqUmVmPzogVDtcbiAgcHJvdGVjdGVkIF9vYmpSZWYkPzogUmVwbGF5U3ViamVjdDxUPjtcblxuICBASW5wdXQoKVxuICBwdWJsaWMgYXV0b0FkZFRvUGFyZW50ID0gdHJ1ZTtcblxuICBASW5wdXQoKVxuICBwdWJsaWMgYXV0b0Rpc3Bvc2UgPSB0cnVlO1xuXG4gIEBJbnB1dCgpXG4gIHNldCBvYmpSZWYocmVmOiBUIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5hcHBseU9ialJlZihyZWYpO1xuICB9XG5cbiAgZ2V0IG9ialJlZigpIHtcbiAgICByZXR1cm4gdGhpcy5fb2JqUmVmO1xuICB9XG5cbiAgLy8gZW1pdCB0aGUgY2hhbmdlc1xuICBwcm90ZWN0ZWQgdXBkYXRlRW1pdHRlcj86IEV2ZW50RW1pdHRlcjxTaW1wbGVDaGFuZ2VzPjtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICAvLyBub3RoaW5nIHRvIGRvXG4gIH1cblxuICBhZGRUb1BhcmVudCgpOiB2b2lkIHtcbiAgICAvLyBub3RoaW5nIHRvIGRvLCBpbXBsZW1lbnQgaXQgaW4gYSBkZXJpdmVkIGNsYXNzXG4gIH1cbiAgcmVtb3ZlRnJvbVBhcmVudCgpOiB2b2lkIHtcbiAgICAvLyBub3RoaW5nIHRvIGRvLCBpbXBsZW1lbnQgaXQgaW4gYSBkZXJpdmVkIGNsYXNzXG4gIH1cblxuICBASW5wdXQoKVxuICBwdWJsaWMgYXJncz86IEFSR1M7XG5cbiAgcHJvdGVjdGVkIGV2ZW50TGlzdGVuZXJzPzogeyBba2V5OiBFdmVudFsndHlwZSddXTogRXZlbnRMaXN0ZW5lcjxFdmVudCwgRXZlbnRbJ3R5cGUnXSwgVD4gfTtcbiAgQElucHV0KClcbiAgcHVibGljIHNldCB0aHJlZUV2ZW50cyhldmVudE1hcDogeyBba2V5OiBFdmVudFsndHlwZSddXTogRXZlbnRMaXN0ZW5lcjxFdmVudCwgRXZlbnRbJ3R5cGUnXSwgVD4gfSB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMucmVtb3ZlRXZlbnRzKCk7XG4gICAgdGhpcy5ldmVudExpc3RlbmVycyA9IGV2ZW50TWFwO1xuICAgIHRoaXMuYXBwbHlFdmVudHMoKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgdGhyZWVFdmVudHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZXZlbnRMaXN0ZW5lcnM7XG4gIH1cblxuICBAT3V0cHV0KClcbiAgcHVibGljIGdldCBvblVwZGF0ZSgpOiBPYnNlcnZhYmxlPFNpbXBsZUNoYW5nZXM+IHtcbiAgICBpZiAoIXRoaXMudXBkYXRlRW1pdHRlcikge1xuICAgICAgdGhpcy51cGRhdGVFbWl0dGVyID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy51cGRhdGVFbWl0dGVyO1xuICB9XG5cbiAgLyoqXG4gICAqIGVtaXRzIHRoZSBsYXN0IGFzc2lnbmVkIG9iamVjdCByZWZcbiAgICovXG4gIEBPdXRwdXQoKVxuICBwdWJsaWMgZ2V0IG9ialJlZiQoKTogT2JzZXJ2YWJsZTxUPiB7XG4gICAgaWYgKCF0aGlzLl9vYmpSZWYkKSB7XG4gICAgICB0aGlzLl9vYmpSZWYkID0gbmV3IFJlcGxheVN1YmplY3QoMSk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLl9vYmpSZWYkO1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLm9ialJlZikge1xuICAgICAgdGhpcy5vYmpSZWYgPSB0aGlzLmNyZWF0ZVRocmVlSW5zdGFuY2UodGhpcy5hcmdzKTtcbiAgICB9XG4gIH1cblxuICAvLyBPdmVycmlkZSB0aGlzXG4gIHB1YmxpYyBnZXRUeXBlKCk6IFR5cGU8YW55PiB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdkZXJpdmUgbWUnKTtcbiAgfVxuXG4gIHB1YmxpYyBjcmVhdGVUaHJlZUluc3RhbmNlKGFyZ3M/OiB1bmtub3duKSB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkoYXJncykpIHtcbiAgICAgIHJldHVybiBuZXcgKHRoaXMuZ2V0VHlwZSgpKSguLi4oYXJncyBhcyBhbnlbXSkpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gbmV3ICh0aGlzLmdldFR5cGUoKSkoYXJncyk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIC8vIGNvbnNvbGUubG9nKCdvbiBjaGFuZ2VzJyk7XG4gICAgaWYgKHRoaXMub2JqUmVmICYmICFpc0xhenlPYmplY3QzZFByb3h5KHRoaXMub2JqUmVmIGFzIGFueSkpIHtcbiAgICAgIC8vIHRoZSBvYmplY3QgaXMgYWxyZWFkeSBzZXQgYW5kIGl0IGlzIG5vIHByb3h5XG5cbiAgICAgIC8vIGVtaXQgdGhlIGNoYW5nZXNcbiAgICAgIHRoaXMuZW1pdFByb3BlcnR5Q2hhbmdlcyhjaGFuZ2VzKTtcblxuICAgICAgLy8gVE9ETzogcmVxdWVzdCBhbmltYXRpb24gZnJhbWVcblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICghdGhpcy5vYmpSZWYpIHtcbiAgICAgIC8vIG5vIG9iamVjdCBhbmQgbm8gcHJveHkgaXMgc2V0IC0tPiBjcmVhdGUgYW4gaW5zdGFuY2VcbiAgICAgIHRoaXMub2JqUmVmID0gdGhpcy5jcmVhdGVUaHJlZUluc3RhbmNlKGNoYW5nZXMuYXJncz8uY3VycmVudFZhbHVlKTtcbiAgICB9XG5cbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZ3VhcmQtZm9yLWluXG4gICAgZm9yIChjb25zdCBrZXkgaW4gY2hhbmdlcykge1xuICAgICAgKHRoaXMgYXMgYW55KVtrZXldID0gY2hhbmdlc1trZXldLmN1cnJlbnRWYWx1ZTtcbiAgICB9XG4gICAgdGhpcy5lbWl0UHJvcGVydHlDaGFuZ2VzKGNoYW5nZXMpO1xuICB9XG5cbiAgcHVibGljIGRpc3Bvc2VPYmpSZWYoKSB7XG4gICAgaWYgKGlzRGlzcG9zYWJsZSh0aGlzLm9ialJlZikpIHtcbiAgICAgIHRoaXMub2JqUmVmLmRpc3Bvc2UoKTtcbiAgICB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLnJlbW92ZUV2ZW50cygpO1xuICAgIHRoaXMucmVtb3ZlRnJvbVBhcmVudCgpO1xuXG4gICAgaWYgKHRoaXMuYXV0b0Rpc3Bvc2UpIHtcbiAgICAgIHRoaXMuZGlzcG9zZU9ialJlZigpO1xuICAgIH1cbiAgfVxuXG4gIHByb3RlY3RlZCBhcHBseU9ialJlZihvYmpSZWY6IFQgfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodGhpcy5fb2JqUmVmICE9PSBvYmpSZWYpIHtcbiAgICAgIHRoaXMucmVtb3ZlRnJvbVBhcmVudCgpO1xuICAgICAgdGhpcy5fb2JqUmVmID0gb2JqUmVmO1xuICAgICAgaWYgKHRoaXMuYXV0b0FkZFRvUGFyZW50KSB7XG4gICAgICAgIHRoaXMuYWRkVG9QYXJlbnQoKTtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5lbWl0T2JqUmVmQ2hhbmdlKCk7XG4gIH1cblxuICBwcm90ZWN0ZWQgZW1pdE9ialJlZkNoYW5nZSgpIHtcbiAgICAvLyBvbmx5IGVtaXQgY2hhbmdlIGlmIF9vYmpSZWYgaXMgbm8gcHJveHksXG4gICAgLy8gYW5kIHRyaWdnZXIgZW1pdCBvdmVyIG9ialJlZiBldmVudCBlbWl0dGVyXG4gICAgaWYgKHRoaXMuX29ialJlZiAmJiAhaXNMYXp5T2JqZWN0M2RQcm94eSh0aGlzLl9vYmpSZWYgYXMgYW55KSkge1xuICAgICAgKHRoaXMuX29ialJlZiBhcyB1bmtub3duIGFzIE9iamVjdDNEPFRoV3JhcHBlckV2ZW50TWFwPFQ+PikuZGlzcGF0Y2hFdmVudD8uKHtcbiAgICAgICAgdHlwZTogJ2xvYWRlZCcsXG4gICAgICAgIG9iamVjdDogdGhpcy5fb2JqUmVmLFxuICAgICAgfSk7XG4gICAgICBpZiAodGhpcy5fb2JqUmVmJCkge1xuICAgICAgICB0aGlzLl9vYmpSZWYkLm5leHQodGhpcy5fb2JqUmVmKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwcm90ZWN0ZWQgZW1pdFByb3BlcnR5Q2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG4gICAgaWYgKHRoaXMuX29ialJlZikge1xuICAgICAgKHRoaXMuX29ialJlZiBhcyB1bmtub3duIGFzIEV2ZW50RGlzcGF0Y2hlcjxUaFdyYXBwZXJFdmVudE1hcDxUPj4pLmRpc3BhdGNoRXZlbnQ/Lih7IHR5cGU6ICdjaGFuZ2VzJywgY2hhbmdlcyB9KTtcbiAgICB9XG4gICAgaWYgKHRoaXMudXBkYXRlRW1pdHRlcikge1xuICAgICAgdGhpcy51cGRhdGVFbWl0dGVyLm5leHQoY2hhbmdlcyk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSByZW1vdmVFdmVudHMoKSB7XG4gICAgaWYgKHRoaXMuZXZlbnRMaXN0ZW5lcnMgJiYgdGhpcy5fb2JqUmVmKSB7XG4gICAgICBmb3IgKGNvbnN0IGVudHJ5IG9mIE9iamVjdC5lbnRyaWVzKHRoaXMuZXZlbnRMaXN0ZW5lcnMpKSB7XG4gICAgICAgICh0aGlzLl9vYmpSZWYgYXMgYW55KS5yZW1vdmVFdmVudExpc3RlbmVyKGVudHJ5WzBdLCBlbnRyeVsxXSk7XG4gICAgICB9XG4gICAgICB0aGlzLmV2ZW50TGlzdGVuZXJzID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgYXBwbHlFdmVudHMoKSB7XG4gICAgaWYgKHRoaXMuZXZlbnRMaXN0ZW5lcnMgJiYgdGhpcy5fb2JqUmVmKSB7XG4gICAgICBmb3IgKGNvbnN0IGVudHJ5IG9mIE9iamVjdC5lbnRyaWVzKHRoaXMuZXZlbnRMaXN0ZW5lcnMpKSB7XG4gICAgICAgICh0aGlzLl9vYmpSZWYgYXMgYW55KS5hZGRFdmVudExpc3RlbmVyKGVudHJ5WzBdLCBlbnRyeVsxXSk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iXX0=