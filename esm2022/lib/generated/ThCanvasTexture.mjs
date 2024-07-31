/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix */
import { ChangeDetectionStrategy, Component, forwardRef, } from '@angular/core';
import { CanvasTexture, } from 'three';
import { ThTextureBase } from '../ThTextureBase';
import { ThTexture } from './ThTexture';
import * as i0 from "@angular/core";
export class ThCanvasTexture extends ThTexture {
    getType() {
        return CanvasTexture;
    }
    get isCanvasTexture() {
        return this._objRef?.isCanvasTexture;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThCanvasTexture, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.1.2", type: ThCanvasTexture, selector: "th-canvasTexture", providers: [
            { provide: ThTextureBase, useExisting: forwardRef(() => ThCanvasTexture) },
        ], usesInheritance: true, ngImport: i0, template: '<ng-content/>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThCanvasTexture, decorators: [{
            type: Component,
            args: [{
                    selector: 'th-canvasTexture',
                    template: '<ng-content/>',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    providers: [
                        { provide: ThTextureBase, useExisting: forwardRef(() => ThCanvasTexture) },
                    ],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGhDYW52YXNUZXh0dXJlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LXRocmVlL3NyYy9saWIvZ2VuZXJhdGVkL1RoQ2FudmFzVGV4dHVyZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSx5REFBeUQ7QUFDekQseUNBQXlDO0FBQ3pDLCtGQUErRjtBQUMvRixPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFFVCxVQUFVLEdBQ1gsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUNMLGFBQWEsR0FRZCxNQUFNLE9BQU8sQ0FBQztBQUNmLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUNqRCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sYUFBYSxDQUFDOztBQVV4QyxNQUFNLE9BQU8sZUFhWCxTQUFRLFNBQW1CO0lBQ3BCLE9BQU87UUFDWixPQUFPLGFBQWEsQ0FBQztJQUN2QixDQUFDO0lBRUQsSUFBVyxlQUFlO1FBQ3hCLE9BQU8sSUFBSSxDQUFDLE9BQU8sRUFBRSxlQUFlLENBQUM7SUFDdkMsQ0FBQzs4R0FwQlUsZUFBZTtrR0FBZixlQUFlLDJDQUpmO1lBQ1QsRUFBRSxPQUFPLEVBQUUsYUFBYSxFQUFFLFdBQVcsRUFBRSxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsZUFBZSxDQUFDLEVBQUU7U0FDM0UsaURBSlMsZUFBZTs7MkZBTWQsZUFBZTtrQkFSM0IsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsa0JBQWtCO29CQUM1QixRQUFRLEVBQUUsZUFBZTtvQkFDekIsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07b0JBQy9DLFNBQVMsRUFBRTt3QkFDVCxFQUFFLE9BQU8sRUFBRSxhQUFhLEVBQUUsV0FBVyxFQUFFLFVBQVUsQ0FBQyxHQUFHLEVBQUUsZ0JBQWdCLENBQUMsRUFBRTtxQkFDM0U7aUJBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBAdHlwZXNjcmlwdC1lc2xpbnQvbmFtaW5nLWNvbnZlbnRpb24gKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vLXVuZGVyc2NvcmUtZGFuZ2xlICovXG4vKiBlc2xpbnQtZGlzYWJsZSBAYW5ndWxhci1lc2xpbnQvY29tcG9uZW50LXNlbGVjdG9yLCBAYW5ndWxhci1lc2xpbnQvY29tcG9uZW50LWNsYXNzLXN1ZmZpeCAqL1xuaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENvbXBvbmVudCxcbiAgVHlwZSxcbiAgZm9yd2FyZFJlZixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBDYW52YXNUZXh0dXJlLFxuICBNYWduaWZpY2F0aW9uVGV4dHVyZUZpbHRlcixcbiAgTWFwcGluZyxcbiAgTWluaWZpY2F0aW9uVGV4dHVyZUZpbHRlcixcbiAgT2Zmc2NyZWVuQ2FudmFzLFxuICBQaXhlbEZvcm1hdCxcbiAgVGV4dHVyZURhdGFUeXBlLFxuICBXcmFwcGluZyxcbn0gZnJvbSAndGhyZWUnO1xuaW1wb3J0IHsgVGhUZXh0dXJlQmFzZSB9IGZyb20gJy4uL1RoVGV4dHVyZUJhc2UnO1xuaW1wb3J0IHsgVGhUZXh0dXJlIH0gZnJvbSAnLi9UaFRleHR1cmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0aC1jYW52YXNUZXh0dXJlJyxcbiAgdGVtcGxhdGU6ICc8bmctY29udGVudC8+JyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHByb3ZpZGVyczogW1xuICAgIHsgcHJvdmlkZTogVGhUZXh0dXJlQmFzZSwgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gVGhDYW52YXNUZXh0dXJlKSB9LFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBUaENhbnZhc1RleHR1cmU8XG4gIFQgZXh0ZW5kcyBDYW52YXNUZXh0dXJlID0gQ2FudmFzVGV4dHVyZSxcbiAgVEFSR1MgPSBbXG4gICAgY2FudmFzOiBUZXhJbWFnZVNvdXJjZSB8IE9mZnNjcmVlbkNhbnZhcyxcbiAgICBtYXBwaW5nPzogTWFwcGluZyxcbiAgICB3cmFwUz86IFdyYXBwaW5nLFxuICAgIHdyYXBUPzogV3JhcHBpbmcsXG4gICAgbWFnRmlsdGVyPzogTWFnbmlmaWNhdGlvblRleHR1cmVGaWx0ZXIsXG4gICAgbWluRmlsdGVyPzogTWluaWZpY2F0aW9uVGV4dHVyZUZpbHRlcixcbiAgICBmb3JtYXQ/OiBQaXhlbEZvcm1hdCxcbiAgICB0eXBlPzogVGV4dHVyZURhdGFUeXBlLFxuICAgIGFuaXNvdHJvcHk/OiBudW1iZXIsXG4gIF0sXG4+IGV4dGVuZHMgVGhUZXh0dXJlPFQsIFRBUkdTPiB7XG4gIHB1YmxpYyBnZXRUeXBlKCk6IFR5cGU8Q2FudmFzVGV4dHVyZT4ge1xuICAgIHJldHVybiBDYW52YXNUZXh0dXJlO1xuICB9XG5cbiAgcHVibGljIGdldCBpc0NhbnZhc1RleHR1cmUoKTogdHJ1ZSB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX29ialJlZj8uaXNDYW52YXNUZXh0dXJlO1xuICB9XG59XG4iXX0=