/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix */
import { ChangeDetectionStrategy, Component, forwardRef, } from '@angular/core';
import { CompressedCubeTexture, } from 'three';
import { ThTextureBase } from '../ThTextureBase';
import { ThCompressedTexture } from './ThCompressedTexture';
import * as i0 from "@angular/core";
export class ThCompressedCubeTexture extends ThCompressedTexture {
    getType() {
        return CompressedCubeTexture;
    }
    get isCompressedCubeTexture() {
        return this._objRef?.isCompressedCubeTexture;
    }
    get isCubeTexture() {
        return this._objRef?.isCubeTexture;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThCompressedCubeTexture, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.1.2", type: ThCompressedCubeTexture, selector: "th-compressedCubeTexture", providers: [
            {
                provide: ThTextureBase,
                useExisting: forwardRef(() => ThCompressedCubeTexture),
            },
        ], usesInheritance: true, ngImport: i0, template: '<ng-content/>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThCompressedCubeTexture, decorators: [{
            type: Component,
            args: [{
                    selector: 'th-compressedCubeTexture',
                    template: '<ng-content/>',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    providers: [
                        {
                            provide: ThTextureBase,
                            useExisting: forwardRef(() => ThCompressedCubeTexture),
                        },
                    ],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGhDb21wcmVzc2VkQ3ViZVRleHR1cmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtdGhyZWUvc3JjL2xpYi9nZW5lcmF0ZWQvVGhDb21wcmVzc2VkQ3ViZVRleHR1cmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEseURBQXlEO0FBQ3pELHlDQUF5QztBQUN6QywrRkFBK0Y7QUFDL0YsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixTQUFTLEVBRVQsVUFBVSxHQUNYLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFDTCxxQkFBcUIsR0FHdEIsTUFBTSxPQUFPLENBQUM7QUFDZixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDakQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7O0FBYTVELE1BQU0sT0FBTyx1QkFPWCxTQUFRLG1CQUE2QjtJQUM5QixPQUFPO1FBQ1osT0FBTyxxQkFBcUIsQ0FBQztJQUMvQixDQUFDO0lBRUQsSUFBVyx1QkFBdUI7UUFDaEMsT0FBTyxJQUFJLENBQUMsT0FBTyxFQUFFLHVCQUF1QixDQUFDO0lBQy9DLENBQUM7SUFDRCxJQUFXLGFBQWE7UUFDdEIsT0FBTyxJQUFJLENBQUMsT0FBTyxFQUFFLGFBQWEsQ0FBQztJQUNyQyxDQUFDOzhHQWpCVSx1QkFBdUI7a0dBQXZCLHVCQUF1QixtREFQdkI7WUFDVDtnQkFDRSxPQUFPLEVBQUUsYUFBYTtnQkFDdEIsV0FBVyxFQUFFLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyx1QkFBdUIsQ0FBQzthQUN2RDtTQUNGLGlEQVBTLGVBQWU7OzJGQVNkLHVCQUF1QjtrQkFYbkMsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsMEJBQTBCO29CQUNwQyxRQUFRLEVBQUUsZUFBZTtvQkFDekIsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07b0JBQy9DLFNBQVMsRUFBRTt3QkFDVDs0QkFDRSxPQUFPLEVBQUUsYUFBYTs0QkFDdEIsV0FBVyxFQUFFLFVBQVUsQ0FBQyxHQUFHLEVBQUUsd0JBQXdCLENBQUM7eUJBQ3ZEO3FCQUNGO2lCQUNGIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgQHR5cGVzY3JpcHQtZXNsaW50L25hbWluZy1jb252ZW50aW9uICovXG4vKiBlc2xpbnQtZGlzYWJsZSBuby11bmRlcnNjb3JlLWRhbmdsZSAqL1xuLyogZXNsaW50LWRpc2FibGUgQGFuZ3VsYXItZXNsaW50L2NvbXBvbmVudC1zZWxlY3RvciwgQGFuZ3VsYXItZXNsaW50L2NvbXBvbmVudC1jbGFzcy1zdWZmaXggKi9cbmltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDb21wb25lbnQsXG4gIFR5cGUsXG4gIGZvcndhcmRSZWYsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgQ29tcHJlc3NlZEN1YmVUZXh0dXJlLFxuICBDb21wcmVzc2VkUGl4ZWxGb3JtYXQsXG4gIFRleHR1cmVEYXRhVHlwZSxcbn0gZnJvbSAndGhyZWUnO1xuaW1wb3J0IHsgVGhUZXh0dXJlQmFzZSB9IGZyb20gJy4uL1RoVGV4dHVyZUJhc2UnO1xuaW1wb3J0IHsgVGhDb21wcmVzc2VkVGV4dHVyZSB9IGZyb20gJy4vVGhDb21wcmVzc2VkVGV4dHVyZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3RoLWNvbXByZXNzZWRDdWJlVGV4dHVyZScsXG4gIHRlbXBsYXRlOiAnPG5nLWNvbnRlbnQvPicsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBwcm92aWRlcnM6IFtcbiAgICB7XG4gICAgICBwcm92aWRlOiBUaFRleHR1cmVCYXNlLFxuICAgICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gVGhDb21wcmVzc2VkQ3ViZVRleHR1cmUpLFxuICAgIH0sXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIFRoQ29tcHJlc3NlZEN1YmVUZXh0dXJlPFxuICBUIGV4dGVuZHMgQ29tcHJlc3NlZEN1YmVUZXh0dXJlID0gQ29tcHJlc3NlZEN1YmVUZXh0dXJlLFxuICBUQVJHUyA9IFtcbiAgICBpbWFnZXM6IEFycmF5PHsgd2lkdGg6IG51bWJlcjsgaGVpZ2h0OiBudW1iZXIgfT4sXG4gICAgZm9ybWF0PzogQ29tcHJlc3NlZFBpeGVsRm9ybWF0LFxuICAgIHR5cGU/OiBUZXh0dXJlRGF0YVR5cGUsXG4gIF0sXG4+IGV4dGVuZHMgVGhDb21wcmVzc2VkVGV4dHVyZTxULCBUQVJHUz4ge1xuICBwdWJsaWMgZ2V0VHlwZSgpOiBUeXBlPENvbXByZXNzZWRDdWJlVGV4dHVyZT4ge1xuICAgIHJldHVybiBDb21wcmVzc2VkQ3ViZVRleHR1cmU7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGlzQ29tcHJlc3NlZEN1YmVUZXh0dXJlKCk6IHRydWUgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9vYmpSZWY/LmlzQ29tcHJlc3NlZEN1YmVUZXh0dXJlO1xuICB9XG4gIHB1YmxpYyBnZXQgaXNDdWJlVGV4dHVyZSgpOiB0cnVlIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fb2JqUmVmPy5pc0N1YmVUZXh0dXJlO1xuICB9XG59XG4iXX0=