/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix */
import { ChangeDetectionStrategy, Component, Input, forwardRef, } from '@angular/core';
import { DragControls, } from 'three/examples/jsm/controls/DragControls.js';
import { ThControlBase } from '../ThControlBase';
import * as i0 from "@angular/core";
export class ThDragControls extends ThControlBase {
    getType() {
        return DragControls;
    }
    set enabled(value) {
        if (this._objRef) {
            this._objRef.enabled = value;
        }
    }
    get enabled() {
        return this._objRef?.enabled;
    }
    set recursive(value) {
        if (this._objRef) {
            this._objRef.recursive = value;
        }
    }
    get recursive() {
        return this._objRef?.recursive;
    }
    set transformGroup(value) {
        if (this._objRef) {
            this._objRef.transformGroup = value;
        }
    }
    get transformGroup() {
        return this._objRef?.transformGroup;
    }
    set mode(value) {
        if (this._objRef) {
            this._objRef.mode = value;
        }
    }
    get mode() {
        return this._objRef?.mode;
    }
    set rotateSpeed(value) {
        if (this._objRef) {
            this._objRef.rotateSpeed = value;
        }
    }
    get rotateSpeed() {
        return this._objRef?.rotateSpeed;
    }
    set activate(value) {
        if (this._objRef) {
            this._objRef.activate = value;
        }
    }
    get activate() {
        return this._objRef?.activate;
    }
    set deactivate(value) {
        if (this._objRef) {
            this._objRef.deactivate = value;
        }
    }
    get deactivate() {
        return this._objRef?.deactivate;
    }
    set dispose(value) {
        if (this._objRef) {
            this._objRef.dispose = value;
        }
    }
    get dispose() {
        return this._objRef?.dispose;
    }
    set getObjects(value) {
        if (this._objRef) {
            this._objRef.getObjects = value;
        }
    }
    get getObjects() {
        return this._objRef?.getObjects;
    }
    set getRaycaster(value) {
        if (this._objRef) {
            this._objRef.getRaycaster = value;
        }
    }
    get getRaycaster() {
        return this._objRef?.getRaycaster;
    }
    set setObjects(value) {
        if (this._objRef) {
            this._objRef.setObjects = value;
        }
    }
    get setObjects() {
        return this._objRef?.setObjects;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThDragControls, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.1.2", type: ThDragControls, selector: "th-dragControls", inputs: { enabled: "enabled", recursive: "recursive", transformGroup: "transformGroup", mode: "mode", rotateSpeed: "rotateSpeed", activate: "activate", deactivate: "deactivate", dispose: "dispose", getObjects: "getObjects", getRaycaster: "getRaycaster", setObjects: "setObjects" }, providers: [
            { provide: ThControlBase, useExisting: forwardRef(() => ThDragControls) },
        ], usesInheritance: true, ngImport: i0, template: '<ng-content/>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThDragControls, decorators: [{
            type: Component,
            args: [{
                    selector: 'th-dragControls',
                    template: '<ng-content/>',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    providers: [
                        { provide: ThControlBase, useExisting: forwardRef(() => ThDragControls) },
                    ],
                }]
        }], propDecorators: { enabled: [{
                type: Input
            }], recursive: [{
                type: Input
            }], transformGroup: [{
                type: Input
            }], mode: [{
                type: Input
            }], rotateSpeed: [{
                type: Input
            }], activate: [{
                type: Input
            }], deactivate: [{
                type: Input
            }], dispose: [{
                type: Input
            }], getObjects: [{
                type: Input
            }], getRaycaster: [{
                type: Input
            }], setObjects: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGhEcmFnQ29udHJvbHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtdGhyZWUvc3JjL2xpYi9nZW5lcmF0ZWQvVGhEcmFnQ29udHJvbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEseURBQXlEO0FBQ3pELHlDQUF5QztBQUN6QywrRkFBK0Y7QUFDL0YsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixTQUFTLEVBQ1QsS0FBSyxFQUVMLFVBQVUsR0FDWCxNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQ0wsWUFBWSxHQUViLE1BQU0sNkNBQTZDLENBQUM7QUFDckQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGtCQUFrQixDQUFDOztBQVVqRCxNQUFNLE9BQU8sY0FHWCxTQUFRLGFBQXVCO0lBQ3hCLE9BQU87UUFDWixPQUFPLFlBQVksQ0FBQztJQUN0QixDQUFDO0lBRUQsSUFDVyxPQUFPLENBQUMsS0FBYztRQUMvQixJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUNqQixJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7UUFDL0IsQ0FBQztJQUNILENBQUM7SUFFRCxJQUFXLE9BQU87UUFDaEIsT0FBTyxJQUFJLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQztJQUMvQixDQUFDO0lBQ0QsSUFDVyxTQUFTLENBQUMsS0FBYztRQUNqQyxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUNqQixJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7UUFDakMsQ0FBQztJQUNILENBQUM7SUFFRCxJQUFXLFNBQVM7UUFDbEIsT0FBTyxJQUFJLENBQUMsT0FBTyxFQUFFLFNBQVMsQ0FBQztJQUNqQyxDQUFDO0lBQ0QsSUFDVyxjQUFjLENBQUMsS0FBYztRQUN0QyxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUNqQixJQUFJLENB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RSxpREFKUyxlQUFlOzsyRkFNZCxjQUFjO2tCQVIxQixTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxpQkFBaUI7b0JBQzNCLFFBQVEsRUFBRSxlQUFlO29CQUN6QixlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtvQkFDL0MsU0FBUyxFQUFFO3dCQUNULEVBQUUsT0FBTyxFQUFFLGFBQWEsRUFBRSxXQUFXLEVBQUUsVUFBVSxDQUFDLEdBQUcsRUFBRSxlQUFlLENBQUMsRUFBRTtxQkFDMUU7aUJBQ0Y7OEJBVVksT0FBTztzQkFEakIsS0FBSztnQkFXSyxTQUFTO3NCQURuQixLQUFLO2dCQVdLLGNBQWM7c0JBRHhCLEtBQUs7Z0JBV0ssSUFBSTtzQkFEZCxLQUFLO2dCQVdLLFdBQVc7c0JBRHJCLEtBQUs7Z0JBV0ssUUFBUTtzQkFEbEIsS0FBSztnQkFXSyxVQUFVO3NCQURwQixLQUFLO2dCQVdLLE9BQU87c0JBRGpCLEtBQUs7Z0JBV0ssVUFBVTtzQkFEcEIsS0FBSztnQkFXSyxZQUFZO3NCQUR0QixLQUFLO2dCQVdLLFVBQVU7c0JBRHBCLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBAdHlwZXNjcmlwdC1lc2xpbnQvbmFtaW5nLWNvbnZlbnRpb24gKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vLXVuZGVyc2NvcmUtZGFuZ2xlICovXG4vKiBlc2xpbnQtZGlzYWJsZSBAYW5ndWxhci1lc2xpbnQvY29tcG9uZW50LXNlbGVjdG9yLCBAYW5ndWxhci1lc2xpbnQvY29tcG9uZW50LWNsYXNzLXN1ZmZpeCAqL1xuaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENvbXBvbmVudCxcbiAgSW5wdXQsXG4gIFR5cGUsXG4gIGZvcndhcmRSZWYsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ2FtZXJhLCBPYmplY3QzRCwgUmF5Y2FzdGVyIH0gZnJvbSAndGhyZWUnO1xuaW1wb3J0IHtcbiAgRHJhZ0NvbnRyb2xzLFxuICBEcmFnQ29udHJvbHNNb2RlLFxufSBmcm9tICd0aHJlZS9leGFtcGxlcy9qc20vY29udHJvbHMvRHJhZ0NvbnRyb2xzLmpzJztcbmltcG9ydCB7IFRoQ29udHJvbEJhc2UgfSBmcm9tICcuLi9UaENvbnRyb2xCYXNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndGgtZHJhZ0NvbnRyb2xzJyxcbiAgdGVtcGxhdGU6ICc8bmctY29udGVudC8+JyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHByb3ZpZGVyczogW1xuICAgIHsgcHJvdmlkZTogVGhDb250cm9sQmFzZSwgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gVGhEcmFnQ29udHJvbHMpIH0sXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIFRoRHJhZ0NvbnRyb2xzPFxuICBUIGV4dGVuZHMgRHJhZ0NvbnRyb2xzID0gRHJhZ0NvbnRyb2xzLFxuICBUQVJHUyA9IFtvYmplY3RzOiBPYmplY3QzRFtdLCBjYW1lcmE6IENhbWVyYSwgZG9tRWxlbWVudD86IEhUTUxFbGVtZW50XSxcbj4gZXh0ZW5kcyBUaENvbnRyb2xCYXNlPFQsIFRBUkdTPiB7XG4gIHB1YmxpYyBnZXRUeXBlKCk6IFR5cGU8RHJhZ0NvbnRyb2xzPiB7XG4gICAgcmV0dXJuIERyYWdDb250cm9scztcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzZXQgZW5hYmxlZCh2YWx1ZTogYm9vbGVhbikge1xuICAgIGlmICh0aGlzLl9vYmpSZWYpIHtcbiAgICAgIHRoaXMuX29ialJlZi5lbmFibGVkID0gdmFsdWU7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGdldCBlbmFibGVkKCk6IGJvb2xlYW4gfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9vYmpSZWY/LmVuYWJsZWQ7XG4gIH1cbiAgQElucHV0KClcbiAgcHVibGljIHNldCByZWN1cnNpdmUodmFsdWU6IGJvb2xlYW4pIHtcbiAgICBpZiAodGhpcy5fb2JqUmVmKSB7XG4gICAgICB0aGlzLl9vYmpSZWYucmVjdXJzaXZlID0gdmFsdWU7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGdldCByZWN1cnNpdmUoKTogYm9vbGVhbiB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX29ialJlZj8ucmVjdXJzaXZlO1xuICB9XG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzZXQgdHJhbnNmb3JtR3JvdXAodmFsdWU6IGJvb2xlYW4pIHtcbiAgICBpZiAodGhpcy5fb2JqUmVmKSB7XG4gICAgICB0aGlzLl9vYmpSZWYudHJhbnNmb3JtR3JvdXAgPSB2YWx1ZTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgZ2V0IHRyYW5zZm9ybUdyb3VwKCk6IGJvb2xlYW4gfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9vYmpSZWY/LnRyYW5zZm9ybUdyb3VwO1xuICB9XG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzZXQgbW9kZSh2YWx1ZTogRHJhZ0NvbnRyb2xzTW9kZSkge1xuICAgIGlmICh0aGlzLl9vYmpSZWYpIHtcbiAgICAgIHRoaXMuX29ialJlZi5tb2RlID0gdmFsdWU7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGdldCBtb2RlKCk6IERyYWdDb250cm9sc01vZGUgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9vYmpSZWY/Lm1vZGU7XG4gIH1cbiAgQElucHV0KClcbiAgcHVibGljIHNldCByb3RhdGVTcGVlZCh2YWx1ZTogbnVtYmVyKSB7XG4gICAgaWYgKHRoaXMuX29ialJlZikge1xuICAgICAgdGhpcy5fb2JqUmVmLnJvdGF0ZVNwZWVkID0gdmFsdWU7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGdldCByb3RhdGVTcGVlZCgpOiBudW1iZXIgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9vYmpSZWY/LnJvdGF0ZVNwZWVkO1xuICB9XG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzZXQgYWN0aXZhdGUodmFsdWU6ICgpID0+IHZvaWQpIHtcbiAgICBpZiAodGhpcy5fb2JqUmVmKSB7XG4gICAgICB0aGlzLl9vYmpSZWYuYWN0aXZhdGUgPSB2YWx1ZTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgZ2V0IGFjdGl2YXRlKCk6ICgoKSA9PiB2b2lkKSB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX29ialJlZj8uYWN0aXZhdGU7XG4gIH1cbiAgQElucHV0KClcbiAgcHVibGljIHNldCBkZWFjdGl2YXRlKHZhbHVlOiAoKSA9PiB2b2lkKSB7XG4gICAgaWYgKHRoaXMuX29ialJlZikge1xuICAgICAgdGhpcy5fb2JqUmVmLmRlYWN0aXZhdGUgPSB2YWx1ZTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgZ2V0IGRlYWN0aXZhdGUoKTogKCgpID0+IHZvaWQpIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fb2JqUmVmPy5kZWFjdGl2YXRlO1xuICB9XG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzZXQgZGlzcG9zZSh2YWx1ZTogKCkgPT4gdm9pZCkge1xuICAgIGlmICh0aGlzLl9vYmpSZWYpIHtcbiAgICAgIHRoaXMuX29ialJlZi5kaXNwb3NlID0gdmFsdWU7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGdldCBkaXNwb3NlKCk6ICgoKSA9PiB2b2lkKSB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX29ialJlZj8uZGlzcG9zZTtcbiAgfVxuICBASW5wdXQoKVxuICBwdWJsaWMgc2V0IGdldE9iamVjdHModmFsdWU6ICgpID0+IE9iamVjdDNEW10pIHtcbiAgICBpZiAodGhpcy5fb2JqUmVmKSB7XG4gICAgICB0aGlzLl9vYmpSZWYuZ2V0T2JqZWN0cyA9IHZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBnZXQgZ2V0T2JqZWN0cygpOiAoKCkgPT4gT2JqZWN0M0RbXSkgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9vYmpSZWY/LmdldE9iamVjdHM7XG4gIH1cbiAgQElucHV0KClcbiAgcHVibGljIHNldCBnZXRSYXljYXN0ZXIodmFsdWU6ICgpID0+IFJheWNhc3Rlcikge1xuICAgIGlmICh0aGlzLl9vYmpSZWYpIHtcbiAgICAgIHRoaXMuX29ialJlZi5nZXRSYXljYXN0ZXIgPSB2YWx1ZTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgZ2V0IGdldFJheWNhc3RlcigpOiAoKCkgPT4gUmF5Y2FzdGVyKSB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX29ialJlZj8uZ2V0UmF5Y2FzdGVyO1xuICB9XG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzZXQgc2V0T2JqZWN0cyh2YWx1ZTogKG9iamVjdHM6IHJlYWRvbmx5IE9iamVjdDNEW10pID0+IHZvaWQpIHtcbiAgICBpZiAodGhpcy5fb2JqUmVmKSB7XG4gICAgICB0aGlzLl9vYmpSZWYuc2V0T2JqZWN0cyA9IHZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBnZXQgc2V0T2JqZWN0cygpOlxuICAgIHwgKChvYmplY3RzOiByZWFkb25seSBPYmplY3QzRFtdKSA9PiB2b2lkKVxuICAgIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fb2JqUmVmPy5zZXRPYmplY3RzO1xuICB9XG59XG4iXX0=