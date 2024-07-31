/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix */
import { ChangeDetectionStrategy, Component, Input, forwardRef, } from '@angular/core';
import { PositionalAudio } from 'three';
import { ThAudio } from './ThAudio';
import { ThObject3D } from './ThObject3D';
import * as i0 from "@angular/core";
export class ThPositionalAudio extends ThAudio {
    getType() {
        return PositionalAudio;
    }
    set panner(value) {
        if (this._objRef) {
            this._objRef.panner = value;
        }
    }
    get panner() {
        return this._objRef?.panner;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThPositionalAudio, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.1.2", type: ThPositionalAudio, selector: "th-positionalAudio", inputs: { panner: "panner" }, providers: [
            { provide: ThObject3D, useExisting: forwardRef(() => ThPositionalAudio) },
        ], usesInheritance: true, ngImport: i0, template: '<ng-content/>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThPositionalAudio, decorators: [{
            type: Component,
            args: [{
                    selector: 'th-positionalAudio',
                    template: '<ng-content/>',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    providers: [
                        { provide: ThObject3D, useExisting: forwardRef(() => ThPositionalAudio) },
                    ],
                }]
        }], propDecorators: { panner: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGhQb3NpdGlvbmFsQXVkaW8uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtdGhyZWUvc3JjL2xpYi9nZW5lcmF0ZWQvVGhQb3NpdGlvbmFsQXVkaW8udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEseURBQXlEO0FBQ3pELHlDQUF5QztBQUN6QywrRkFBK0Y7QUFDL0YsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixTQUFTLEVBQ1QsS0FBSyxFQUVMLFVBQVUsR0FDWCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQWlCLGVBQWUsRUFBRSxNQUFNLE9BQU8sQ0FBQztBQUN2RCxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sV0FBVyxDQUFDO0FBQ3BDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxjQUFjLENBQUM7O0FBVTFDLE1BQU0sT0FBTyxpQkFHWCxTQUFRLE9BQTZCO0lBQzlCLE9BQU87UUFDWixPQUFPLGVBQWUsQ0FBQztJQUN6QixDQUFDO0lBRUQsSUFDVyxNQUFNLENBQUMsS0FBaUI7UUFDakMsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDakIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQzlCLENBQUM7SUFDSCxDQUFDO0lBRUQsSUFBVyxNQUFNO1FBQ2YsT0FBTyxJQUFJLENBQUMsT0FBTyxFQUFFLE1BQU0sQ0FBQztJQUM5QixDQUFDOzhHQWpCVSxpQkFBaUI7a0dBQWpCLGlCQUFpQiwyRUFKakI7WUFDVCxFQUFFLE9BQU8sRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBQyxFQUFFO1NBQzFFLGlEQUpTLGVBQWU7OzJGQU1kLGlCQUFpQjtrQkFSN0IsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsb0JBQW9CO29CQUM5QixRQUFRLEVBQUUsZUFBZTtvQkFDekIsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07b0JBQy9DLFNBQVMsRUFBRTt3QkFDVCxFQUFFLE9BQU8sRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFLFVBQVUsQ0FBQyxHQUFHLEVBQUUsa0JBQWtCLENBQUMsRUFBRTtxQkFDMUU7aUJBQ0Y7OEJBVVksTUFBTTtzQkFEaEIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIEB0eXBlc2NyaXB0LWVzbGludC9uYW1pbmctY29udmVudGlvbiAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tdW5kZXJzY29yZS1kYW5nbGUgKi9cbi8qIGVzbGludC1kaXNhYmxlIEBhbmd1bGFyLWVzbGludC9jb21wb25lbnQtc2VsZWN0b3IsIEBhbmd1bGFyLWVzbGludC9jb21wb25lbnQtY2xhc3Mtc3VmZml4ICovXG5pbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ29tcG9uZW50LFxuICBJbnB1dCxcbiAgVHlwZSxcbiAgZm9yd2FyZFJlZixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBdWRpb0xpc3RlbmVyLCBQb3NpdGlvbmFsQXVkaW8gfSBmcm9tICd0aHJlZSc7XG5pbXBvcnQgeyBUaEF1ZGlvIH0gZnJvbSAnLi9UaEF1ZGlvJztcbmltcG9ydCB7IFRoT2JqZWN0M0QgfSBmcm9tICcuL1RoT2JqZWN0M0QnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0aC1wb3NpdGlvbmFsQXVkaW8nLFxuICB0ZW1wbGF0ZTogJzxuZy1jb250ZW50Lz4nLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgcHJvdmlkZXJzOiBbXG4gICAgeyBwcm92aWRlOiBUaE9iamVjdDNELCB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBUaFBvc2l0aW9uYWxBdWRpbykgfSxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgVGhQb3NpdGlvbmFsQXVkaW88XG4gIFQgZXh0ZW5kcyBQb3NpdGlvbmFsQXVkaW8gPSBQb3NpdGlvbmFsQXVkaW8sXG4gIFRBUkdTID0gLyogbGlzdGVuZXIgKi8gQXVkaW9MaXN0ZW5lcixcbj4gZXh0ZW5kcyBUaEF1ZGlvPFBhbm5lck5vZGUsIFQsIFRBUkdTPiB7XG4gIHB1YmxpYyBnZXRUeXBlKCk6IFR5cGU8UG9zaXRpb25hbEF1ZGlvPiB7XG4gICAgcmV0dXJuIFBvc2l0aW9uYWxBdWRpbztcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzZXQgcGFubmVyKHZhbHVlOiBQYW5uZXJOb2RlKSB7XG4gICAgaWYgKHRoaXMuX29ialJlZikge1xuICAgICAgdGhpcy5fb2JqUmVmLnBhbm5lciA9IHZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBnZXQgcGFubmVyKCk6IFBhbm5lck5vZGUgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9vYmpSZWY/LnBhbm5lcjtcbiAgfVxufVxuIl19