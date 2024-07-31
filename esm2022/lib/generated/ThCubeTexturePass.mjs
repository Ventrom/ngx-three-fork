/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix */
import { ChangeDetectionStrategy, Component, Input, forwardRef, } from '@angular/core';
import { CubeTexturePass } from 'three/examples/jsm/postprocessing/CubeTexturePass.js';
import { ThPassBase } from '../ThPassBase';
import { ThPass } from './ThPass';
import * as i0 from "@angular/core";
export class ThCubeTexturePass extends ThPass {
    getType() {
        return CubeTexturePass;
    }
    set camera(value) {
        if (this._objRef) {
            this._objRef.camera = value;
        }
    }
    get camera() {
        return this._objRef?.camera;
    }
    set cubeShader(value) {
        if (this._objRef) {
            this._objRef.cubeShader = value;
        }
    }
    get cubeShader() {
        return this._objRef?.cubeShader;
    }
    set cubeMesh(value) {
        if (this._objRef) {
            this._objRef.cubeMesh = value;
        }
    }
    get cubeMesh() {
        return this._objRef?.cubeMesh;
    }
    set envMap(value) {
        if (this._objRef) {
            this._objRef.envMap = value;
        }
    }
    get envMap() {
        return this._objRef?.envMap;
    }
    set opacity(value) {
        if (this._objRef) {
            this._objRef.opacity = value;
        }
    }
    get opacity() {
        return this._objRef?.opacity;
    }
    set cubeScene(value) {
        if (this._objRef) {
            this._objRef.cubeScene = value;
        }
    }
    get cubeScene() {
        return this._objRef?.cubeScene;
    }
    set cubeCamera(value) {
        if (this._objRef) {
            this._objRef.cubeCamera = value;
        }
    }
    get cubeCamera() {
        return this._objRef?.cubeCamera;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThCubeTexturePass, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.1.2", type: ThCubeTexturePass, selector: "th-cubeTexturePass", inputs: { camera: "camera", cubeShader: "cubeShader", cubeMesh: "cubeMesh", envMap: "envMap", opacity: "opacity", cubeScene: "cubeScene", cubeCamera: "cubeCamera" }, providers: [
            { provide: ThPassBase, useExisting: forwardRef(() => ThCubeTexturePass) },
        ], usesInheritance: true, ngImport: i0, template: '<ng-content/>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThCubeTexturePass, decorators: [{
            type: Component,
            args: [{
                    selector: 'th-cubeTexturePass',
                    template: '<ng-content/>',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    providers: [
                        { provide: ThPassBase, useExisting: forwardRef(() => ThCubeTexturePass) },
                    ],
                }]
        }], propDecorators: { camera: [{
                type: Input
            }], cubeShader: [{
                type: Input
            }], cubeMesh: [{
                type: Input
            }], envMap: [{
                type: Input
            }], opacity: [{
                type: Input
            }], cubeScene: [{
                type: Input
            }], cubeCamera: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGhDdWJlVGV4dHVyZVBhc3MuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtdGhyZWUvc3JjL2xpYi9nZW5lcmF0ZWQvVGhDdWJlVGV4dHVyZVBhc3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsaURBQWlEO0FBQ2pELHlEQUF5RDtBQUN6RCx5Q0FBeUM7QUFDekMsK0ZBQStGO0FBQy9GLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULEtBQUssRUFFTCxVQUFVLEdBQ1gsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHNEQUFzRCxDQUFDO0FBQ3ZGLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLFVBQVUsQ0FBQzs7QUFVbEMsTUFBTSxPQUFPLGlCQUdYLFNBQVEsTUFBZ0I7SUFDakIsT0FBTztRQUNaLE9BQU8sZUFBZSxDQUFDO0lBQ3pCLENBQUM7SUFFRCxJQUNXLE1BQU0sQ0FBQyxLQUF3QjtRQUN4QyxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUNqQixJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDOUIsQ0FBQztJQUNILENBQUM7SUFFRCxJQUFXLE1BQU07UUFDZixPQUFPLElBQUksQ0FBQyxPQUFPLEVBQUUsTUFBTSxDQUFDO0lBQzlCLENBQUM7SUFDRCxJQUNXLFVBQVUsQ0FBQyxLQUFhO1FBQ2pDLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ2pCLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztRQUNsQyxDQUFDO0lBQ0gsQ0FBQztJQUVELElBQVcsVUFBVTtRQUNuQixPQUFPLElBQUksQ0FBQyxPQUFPLEVBQUUsVUFBVSxDQUFDO0lBQ2xDLENBQUM7SUFDRCxJQUNXLFFBQVEsQ0FBQyxLQUFXO1FBQzdCLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ2pCLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztRQUNoQyxDQUFDO0lBQ0gsQ0FBQztJQUVELElBQVcsUUFBUTtRQUNqQixPQUFPLElBQUksQ0FBQyxPQUFPLEVBQUUsUUFBUSxDQUFDO0lBQ2hDLENBQUM7SUFDRCxJQUNXLE1BQU0sQ0FBQyxLQUFrQjtRQUNsQyxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUNqQixJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDOUIsQ0FBQztJQUNILENBQUM7SUFFRCxJQUFXLE1BQU07UUFDZixPQUFPLElBQUksQ0FBQyxPQUFPLEVBQUUsTUFBTSxDQUFDO0lBQzlCLENBQUM7SUFDRCxJQUNXLE9BQU8sQ0FBQyxLQUFhO1FBQzlCLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ2pCLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztRQUMvQixDQUFDO0lBQ0gsQ0FBQztJQUVELElBQVcsT0FBTztRQUNoQixPQUFPLElBQUksQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDO0lBQy9CLENBQUM7SUFDRCxJQUNXLFNBQVMsQ0FBQyxLQUFZO1FBQy9CLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ2pCLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztRQUNqQyxDQUFDO0lBQ0gsQ0FBQztJQUVELElBQVcsU0FBUztRQUNsQixPQUFPLElBQUksQ0FBQyxPQUFPLEVBQUUsU0FBUyxDQUFDO0lBQ2pDLENBQUM7SUFDRCxJQUNXLFVBQVUsQ0FBQyxLQUF3QjtRQUM1QyxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUNqQixJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7UUFDbEMsQ0FBQztJQUNILENBQUM7SUFFRCxJQUFXLFVBQVU7UUFDbkIsT0FBTyxJQUFJLENBQUMsT0FBTyxFQUFFLFVBQVUsQ0FBQztJQUNsQyxDQUFDOzhHQTdFVSxpQkFBaUI7a0dBQWpCLGlCQUFpQixtTkFKakI7WUFDVCxFQUFFLE9BQU8sRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBQyxFQUFFO1NBQzFFLGlEQUpTLGVBQWU7OzJGQU1kLGlCQUFpQjtrQkFSN0IsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsb0JBQW9CO29CQUM5QixRQUFRLEVBQUUsZUFBZTtvQkFDekIsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07b0JBQy9DLFNBQVMsRUFBRTt3QkFDVCxFQUFFLE9BQU8sRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFLFVBQVUsQ0FBQyxHQUFHLEVBQUUsa0JBQWtCLENBQUMsRUFBRTtxQkFDMUU7aUJBQ0Y7OEJBVVksTUFBTTtzQkFEaEIsS0FBSztnQkFXSyxVQUFVO3NCQURwQixLQUFLO2dCQVdLLFFBQVE7c0JBRGxCLEtBQUs7Z0JBV0ssTUFBTTtzQkFEaEIsS0FBSztnQkFXSyxPQUFPO3NCQURqQixLQUFLO2dCQVdLLFNBQVM7c0JBRG5CLEtBQUs7Z0JBV0ssVUFBVTtzQkFEcEIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIEB0eXBlc2NyaXB0LWVzbGludC9iYW4tdHlwZXMgKi9cbi8qIGVzbGludC1kaXNhYmxlIEB0eXBlc2NyaXB0LWVzbGludC9uYW1pbmctY29udmVudGlvbiAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tdW5kZXJzY29yZS1kYW5nbGUgKi9cbi8qIGVzbGludC1kaXNhYmxlIEBhbmd1bGFyLWVzbGludC9jb21wb25lbnQtc2VsZWN0b3IsIEBhbmd1bGFyLWVzbGludC9jb21wb25lbnQtY2xhc3Mtc3VmZml4ICovXG5pbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ29tcG9uZW50LFxuICBJbnB1dCxcbiAgVHlwZSxcbiAgZm9yd2FyZFJlZixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDdWJlVGV4dHVyZSwgTWVzaCwgUGVyc3BlY3RpdmVDYW1lcmEsIFNjZW5lIH0gZnJvbSAndGhyZWUnO1xuaW1wb3J0IHsgQ3ViZVRleHR1cmVQYXNzIH0gZnJvbSAndGhyZWUvZXhhbXBsZXMvanNtL3Bvc3Rwcm9jZXNzaW5nL0N1YmVUZXh0dXJlUGFzcy5qcyc7XG5pbXBvcnQgeyBUaFBhc3NCYXNlIH0gZnJvbSAnLi4vVGhQYXNzQmFzZSc7XG5pbXBvcnQgeyBUaFBhc3MgfSBmcm9tICcuL1RoUGFzcyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3RoLWN1YmVUZXh0dXJlUGFzcycsXG4gIHRlbXBsYXRlOiAnPG5nLWNvbnRlbnQvPicsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBwcm92aWRlcnM6IFtcbiAgICB7IHByb3ZpZGU6IFRoUGFzc0Jhc2UsIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IFRoQ3ViZVRleHR1cmVQYXNzKSB9LFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBUaEN1YmVUZXh0dXJlUGFzczxcbiAgVCBleHRlbmRzIEN1YmVUZXh0dXJlUGFzcyA9IEN1YmVUZXh0dXJlUGFzcyxcbiAgVEFSR1MgPSBbY2FtZXJhOiBQZXJzcGVjdGl2ZUNhbWVyYSwgZW52TWFwPzogQ3ViZVRleHR1cmUsIG9wYWNpdHk/OiBudW1iZXJdLFxuPiBleHRlbmRzIFRoUGFzczxULCBUQVJHUz4ge1xuICBwdWJsaWMgZ2V0VHlwZSgpOiBUeXBlPEN1YmVUZXh0dXJlUGFzcz4ge1xuICAgIHJldHVybiBDdWJlVGV4dHVyZVBhc3M7XG4gIH1cblxuICBASW5wdXQoKVxuICBwdWJsaWMgc2V0IGNhbWVyYSh2YWx1ZTogUGVyc3BlY3RpdmVDYW1lcmEpIHtcbiAgICBpZiAodGhpcy5fb2JqUmVmKSB7XG4gICAgICB0aGlzLl9vYmpSZWYuY2FtZXJhID0gdmFsdWU7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGdldCBjYW1lcmEoKTogUGVyc3BlY3RpdmVDYW1lcmEgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9vYmpSZWY/LmNhbWVyYTtcbiAgfVxuICBASW5wdXQoKVxuICBwdWJsaWMgc2V0IGN1YmVTaGFkZXIodmFsdWU6IG9iamVjdCkge1xuICAgIGlmICh0aGlzLl9vYmpSZWYpIHtcbiAgICAgIHRoaXMuX29ialJlZi5jdWJlU2hhZGVyID0gdmFsdWU7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGdldCBjdWJlU2hhZGVyKCk6IG9iamVjdCB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX29ialJlZj8uY3ViZVNoYWRlcjtcbiAgfVxuICBASW5wdXQoKVxuICBwdWJsaWMgc2V0IGN1YmVNZXNoKHZhbHVlOiBNZXNoKSB7XG4gICAgaWYgKHRoaXMuX29ialJlZikge1xuICAgICAgdGhpcy5fb2JqUmVmLmN1YmVNZXNoID0gdmFsdWU7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGdldCBjdWJlTWVzaCgpOiBNZXNoIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fb2JqUmVmPy5jdWJlTWVzaDtcbiAgfVxuICBASW5wdXQoKVxuICBwdWJsaWMgc2V0IGVudk1hcCh2YWx1ZTogQ3ViZVRleHR1cmUpIHtcbiAgICBpZiAodGhpcy5fb2JqUmVmKSB7XG4gICAgICB0aGlzLl9vYmpSZWYuZW52TWFwID0gdmFsdWU7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGdldCBlbnZNYXAoKTogQ3ViZVRleHR1cmUgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9vYmpSZWY/LmVudk1hcDtcbiAgfVxuICBASW5wdXQoKVxuICBwdWJsaWMgc2V0IG9wYWNpdHkodmFsdWU6IG51bWJlcikge1xuICAgIGlmICh0aGlzLl9vYmpSZWYpIHtcbiAgICAgIHRoaXMuX29ialJlZi5vcGFjaXR5ID0gdmFsdWU7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGdldCBvcGFjaXR5KCk6IG51bWJlciB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX29ialJlZj8ub3BhY2l0eTtcbiAgfVxuICBASW5wdXQoKVxuICBwdWJsaWMgc2V0IGN1YmVTY2VuZSh2YWx1ZTogU2NlbmUpIHtcbiAgICBpZiAodGhpcy5fb2JqUmVmKSB7XG4gICAgICB0aGlzLl9vYmpSZWYuY3ViZVNjZW5lID0gdmFsdWU7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGdldCBjdWJlU2NlbmUoKTogU2NlbmUgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9vYmpSZWY/LmN1YmVTY2VuZTtcbiAgfVxuICBASW5wdXQoKVxuICBwdWJsaWMgc2V0IGN1YmVDYW1lcmEodmFsdWU6IFBlcnNwZWN0aXZlQ2FtZXJhKSB7XG4gICAgaWYgKHRoaXMuX29ialJlZikge1xuICAgICAgdGhpcy5fb2JqUmVmLmN1YmVDYW1lcmEgPSB2YWx1ZTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgZ2V0IGN1YmVDYW1lcmEoKTogUGVyc3BlY3RpdmVDYW1lcmEgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9vYmpSZWY/LmN1YmVDYW1lcmE7XG4gIH1cbn1cbiJdfQ==