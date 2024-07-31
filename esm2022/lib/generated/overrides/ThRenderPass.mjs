/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix */
import { ChangeDetectionStrategy, Component, forwardRef } from '@angular/core';
import { ThPassBase } from '../../ThPassBase';
import { ThRenderPassGen } from '../ThRenderPassGen';
import * as i0 from "@angular/core";
import * as i1 from "./ThEffectComposer";
import * as i2 from "../../ThView";
export class ThRenderPass extends ThRenderPassGen {
    constructor(effectComposer, view) {
        super(effectComposer);
        this.effectComposer = effectComposer;
        this.view = view;
    }
    createThreeInstance(args) {
        if (!args) {
            args = new Array(5);
        }
        args[0] = args[0] ?? this.view.scene;
        args[1] = args[1] ?? this.view.camera;
        args[2] = args[2] ?? this.overrideMaterial;
        args[3] = args[3] ?? this.clearColor;
        args[4] = args[4] ?? this.clearAlpha;
        return super.createThreeInstance(args);
    }
    ngAfterContentChecked() {
        if (!this._objRef) {
            return;
        }
        if (this.view.scene && this.view.scene.objRef) {
            this._objRef.scene = this.view.scene.objRef;
        }
        if (this.view.camera && this.view.camera.objRef) {
            this._objRef.camera = this.view.camera.objRef;
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThRenderPass, deps: [{ token: i1.ThEffectComposer }, { token: i2.ThView }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.1.2", type: ThRenderPass, selector: "th-renderPass", providers: [{ provide: ThPassBase, useExisting: forwardRef(() => ThRenderPass) }], usesInheritance: true, ngImport: i0, template: '<ng-content/>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThRenderPass, decorators: [{
            type: Component,
            args: [{
                    selector: 'th-renderPass',
                    template: '<ng-content/>',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    providers: [{ provide: ThPassBase, useExisting: forwardRef(() => ThRenderPass) }],
                }]
        }], ctorParameters: () => [{ type: i1.ThEffectComposer }, { type: i2.ThView }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGhSZW5kZXJQYXNzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LXRocmVlL3NyYy9saWIvZ2VuZXJhdGVkL292ZXJyaWRlcy9UaFJlbmRlclBhc3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEseURBQXlEO0FBQ3pELHlDQUF5QztBQUN6QywrRkFBK0Y7QUFDL0YsT0FBTyxFQUF1Qix1QkFBdUIsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBR3BHLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUU5QyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7Ozs7QUFTckQsTUFBTSxPQUFPLFlBVVgsU0FBUSxlQUF5QjtJQUdqQyxZQUNZLGNBQWdDLEVBQ2xDLElBQVk7UUFFcEIsS0FBSyxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBSFosbUJBQWMsR0FBZCxjQUFjLENBQWtCO1FBQ2xDLFNBQUksR0FBSixJQUFJLENBQVE7SUFHdEIsQ0FBQztJQUVNLG1CQUFtQixDQUFDLElBQVk7UUFDckMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO1lBQ1YsSUFBSSxHQUFHLElBQUksS0FBSyxDQUFDLENBQUMsQ0FBVSxDQUFDO1FBQy9CLENBQUM7UUFFRCxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQ3JDLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDdEMsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsZ0JBQWdCLENBQUM7UUFDM0MsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDO1FBQ3JDLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQztRQUVyQyxPQUFPLEtBQUssQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN6QyxDQUFDO0lBRU0scUJBQXFCO1FBQzFCLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDbEIsT0FBTztRQUNULENBQUM7UUFFRCxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDO1lBQzlDLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQztRQUM5QyxDQUFDO1FBRUQsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQztZQUNoRCxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUM7UUFDaEQsQ0FBQztJQUNILENBQUM7OEdBOUNVLFlBQVk7a0dBQVosWUFBWSx3Q0FGWixDQUFDLEVBQUUsT0FBTyxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUUsVUFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsaURBRnZFLGVBQWU7OzJGQUlkLFlBQVk7a0JBTnhCLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLGVBQWU7b0JBQ3pCLFFBQVEsRUFBRSxlQUFlO29CQUN6QixlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtvQkFDL0MsU0FBUyxFQUFFLENBQUMsRUFBRSxPQUFPLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRSxVQUFVLENBQUMsR0FBRyxFQUFFLGFBQWEsQ0FBQyxFQUFFLENBQUM7aUJBQ2xGIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgQHR5cGVzY3JpcHQtZXNsaW50L25hbWluZy1jb252ZW50aW9uICovXG4vKiBlc2xpbnQtZGlzYWJsZSBuby11bmRlcnNjb3JlLWRhbmdsZSAqL1xuLyogZXNsaW50LWRpc2FibGUgQGFuZ3VsYXItZXNsaW50L2NvbXBvbmVudC1zZWxlY3RvciwgQGFuZ3VsYXItZXNsaW50L2NvbXBvbmVudC1jbGFzcy1zdWZmaXggKi9cbmltcG9ydCB7IEFmdGVyQ29udGVudENoZWNrZWQsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIGZvcndhcmRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENhbWVyYSwgQ29sb3IsIE1hdGVyaWFsLCBTY2VuZSB9IGZyb20gJ3RocmVlJztcbmltcG9ydCB7IFJlbmRlclBhc3MgfSBmcm9tICd0aHJlZS9leGFtcGxlcy9qc20vcG9zdHByb2Nlc3NpbmcvUmVuZGVyUGFzcy5qcyc7XG5pbXBvcnQgeyBUaFBhc3NCYXNlIH0gZnJvbSAnLi4vLi4vVGhQYXNzQmFzZSc7XG5pbXBvcnQgeyBUaFZpZXcgfSBmcm9tICcuLi8uLi9UaFZpZXcnO1xuaW1wb3J0IHsgVGhSZW5kZXJQYXNzR2VuIH0gZnJvbSAnLi4vVGhSZW5kZXJQYXNzR2VuJztcbmltcG9ydCB7IFRoRWZmZWN0Q29tcG9zZXIgfSBmcm9tICcuL1RoRWZmZWN0Q29tcG9zZXInO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0aC1yZW5kZXJQYXNzJyxcbiAgdGVtcGxhdGU6ICc8bmctY29udGVudC8+JyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHByb3ZpZGVyczogW3sgcHJvdmlkZTogVGhQYXNzQmFzZSwgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gVGhSZW5kZXJQYXNzKSB9XSxcbn0pXG5leHBvcnQgY2xhc3MgVGhSZW5kZXJQYXNzPFxuICAgIFQgZXh0ZW5kcyBSZW5kZXJQYXNzID0gUmVuZGVyUGFzcyxcbiAgICBUQVJHUyBleHRlbmRzIGFueVtdID0gW1xuICAgICAgc2NlbmU6IFNjZW5lLFxuICAgICAgY2FtZXJhOiBDYW1lcmEsXG4gICAgICBvdmVycmlkZU1hdGVyaWFsPzogTWF0ZXJpYWwsXG4gICAgICBjbGVhckNvbG9yPzogQ29sb3IsXG4gICAgICBjbGVhckFscGhhPzogbnVtYmVyLFxuICAgIF0sXG4gID5cbiAgZXh0ZW5kcyBUaFJlbmRlclBhc3NHZW48VCwgVEFSR1M+XG4gIGltcGxlbWVudHMgQWZ0ZXJDb250ZW50Q2hlY2tlZFxue1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgZWZmZWN0Q29tcG9zZXI6IFRoRWZmZWN0Q29tcG9zZXIsXG4gICAgcHJpdmF0ZSB2aWV3OiBUaFZpZXcsXG4gICkge1xuICAgIHN1cGVyKGVmZmVjdENvbXBvc2VyKTtcbiAgfVxuXG4gIHB1YmxpYyBjcmVhdGVUaHJlZUluc3RhbmNlKGFyZ3M/OiBUQVJHUyk6IFJlbmRlclBhc3Mge1xuICAgIGlmICghYXJncykge1xuICAgICAgYXJncyA9IG5ldyBBcnJheSg1KSBhcyBUQVJHUztcbiAgICB9XG5cbiAgICBhcmdzWzBdID0gYXJnc1swXSA/PyB0aGlzLnZpZXcuc2NlbmU7XG4gICAgYXJnc1sxXSA9IGFyZ3NbMV0gPz8gdGhpcy52aWV3LmNhbWVyYTtcbiAgICBhcmdzWzJdID0gYXJnc1syXSA/PyB0aGlzLm92ZXJyaWRlTWF0ZXJpYWw7XG4gICAgYXJnc1szXSA9IGFyZ3NbM10gPz8gdGhpcy5jbGVhckNvbG9yO1xuICAgIGFyZ3NbNF0gPSBhcmdzWzRdID8/IHRoaXMuY2xlYXJBbHBoYTtcblxuICAgIHJldHVybiBzdXBlci5jcmVhdGVUaHJlZUluc3RhbmNlKGFyZ3MpO1xuICB9XG5cbiAgcHVibGljIG5nQWZ0ZXJDb250ZW50Q2hlY2tlZCgpIHtcbiAgICBpZiAoIXRoaXMuX29ialJlZikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnZpZXcuc2NlbmUgJiYgdGhpcy52aWV3LnNjZW5lLm9ialJlZikge1xuICAgICAgdGhpcy5fb2JqUmVmLnNjZW5lID0gdGhpcy52aWV3LnNjZW5lLm9ialJlZjtcbiAgICB9XG5cbiAgICBpZiAodGhpcy52aWV3LmNhbWVyYSAmJiB0aGlzLnZpZXcuY2FtZXJhLm9ialJlZikge1xuICAgICAgdGhpcy5fb2JqUmVmLmNhbWVyYSA9IHRoaXMudmlldy5jYW1lcmEub2JqUmVmO1xuICAgIH1cbiAgfVxufVxuIl19