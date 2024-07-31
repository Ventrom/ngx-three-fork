/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix */
import { ChangeDetectionStrategy, Component, forwardRef, } from '@angular/core';
import { MapControls } from 'three/examples/jsm/controls/MapControls.js';
import { ThControlBase } from '../ThControlBase';
import { ThOrbitControls } from './ThOrbitControls';
import * as i0 from "@angular/core";
export class ThMapControls extends ThOrbitControls {
    getType() {
        return MapControls;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThMapControls, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.1.2", type: ThMapControls, selector: "th-mapControls", providers: [
            { provide: ThControlBase, useExisting: forwardRef(() => ThMapControls) },
        ], usesInheritance: true, ngImport: i0, template: '<ng-content/>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThMapControls, decorators: [{
            type: Component,
            args: [{
                    selector: 'th-mapControls',
                    template: '<ng-content/>',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    providers: [
                        { provide: ThControlBase, useExisting: forwardRef(() => ThMapControls) },
                    ],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGhNYXBDb250cm9scy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC10aHJlZS9zcmMvbGliL2dlbmVyYXRlZC9UaE1hcENvbnRyb2xzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHlEQUF5RDtBQUN6RCx5Q0FBeUM7QUFDekMsK0ZBQStGO0FBQy9GLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUVULFVBQVUsR0FDWCxNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sNENBQTRDLENBQUM7QUFDekUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ2pELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQzs7QUFVcEQsTUFBTSxPQUFPLGFBR1gsU0FBUSxlQUF5QjtJQUMxQixPQUFPO1FBQ1osT0FBTyxXQUFXLENBQUM7SUFDckIsQ0FBQzs4R0FOVSxhQUFhO2tHQUFiLGFBQWEseUNBSmI7WUFDVCxFQUFFLE9BQU8sRUFBRSxhQUFhLEVBQUUsV0FBVyxFQUFFLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxhQUFhLENBQUMsRUFBRTtTQUN6RSxpREFKUyxlQUFlOzsyRkFNZCxhQUFhO2tCQVJ6QixTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxnQkFBZ0I7b0JBQzFCLFFBQVEsRUFBRSxlQUFlO29CQUN6QixlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtvQkFDL0MsU0FBUyxFQUFFO3dCQUNULEVBQUUsT0FBTyxFQUFFLGFBQWEsRUFBRSxXQUFXLEVBQUUsVUFBVSxDQUFDLEdBQUcsRUFBRSxjQUFjLENBQUMsRUFBRTtxQkFDekU7aUJBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBAdHlwZXNjcmlwdC1lc2xpbnQvbmFtaW5nLWNvbnZlbnRpb24gKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vLXVuZGVyc2NvcmUtZGFuZ2xlICovXG4vKiBlc2xpbnQtZGlzYWJsZSBAYW5ndWxhci1lc2xpbnQvY29tcG9uZW50LXNlbGVjdG9yLCBAYW5ndWxhci1lc2xpbnQvY29tcG9uZW50LWNsYXNzLXN1ZmZpeCAqL1xuaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENvbXBvbmVudCxcbiAgVHlwZSxcbiAgZm9yd2FyZFJlZixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDYW1lcmEgfSBmcm9tICd0aHJlZSc7XG5pbXBvcnQgeyBNYXBDb250cm9scyB9IGZyb20gJ3RocmVlL2V4YW1wbGVzL2pzbS9jb250cm9scy9NYXBDb250cm9scy5qcyc7XG5pbXBvcnQgeyBUaENvbnRyb2xCYXNlIH0gZnJvbSAnLi4vVGhDb250cm9sQmFzZSc7XG5pbXBvcnQgeyBUaE9yYml0Q29udHJvbHMgfSBmcm9tICcuL1RoT3JiaXRDb250cm9scyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3RoLW1hcENvbnRyb2xzJyxcbiAgdGVtcGxhdGU6ICc8bmctY29udGVudC8+JyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHByb3ZpZGVyczogW1xuICAgIHsgcHJvdmlkZTogVGhDb250cm9sQmFzZSwgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gVGhNYXBDb250cm9scykgfSxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgVGhNYXBDb250cm9sczxcbiAgVCBleHRlbmRzIE1hcENvbnRyb2xzID0gTWFwQ29udHJvbHMsXG4gIFRBUkdTID0gW29iamVjdDogQ2FtZXJhLCBkb21FbGVtZW50PzogSFRNTEVsZW1lbnRdLFxuPiBleHRlbmRzIFRoT3JiaXRDb250cm9sczxULCBUQVJHUz4ge1xuICBwdWJsaWMgZ2V0VHlwZSgpOiBUeXBlPE1hcENvbnRyb2xzPiB7XG4gICAgcmV0dXJuIE1hcENvbnRyb2xzO1xuICB9XG59XG4iXX0=