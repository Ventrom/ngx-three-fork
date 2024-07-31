import { Pipe } from '@angular/core';
import { ThWrapperBase } from '../ThWrapperBase';
import * as i0 from "@angular/core";
/**
 * create a clone of any "cloneable" three.js class (or from it's ngx-three warpper)
 */
export class ClonePipe {
    transform(value) {
        if (!value) {
            return;
        }
        if (value instanceof ThWrapperBase) {
            return value.objRef?.clone();
        }
        else {
            return value.clone();
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ClonePipe, deps: [], target: i0.ɵɵFactoryTarget.Pipe }); }
    static { this.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "14.0.0", version: "18.1.2", ngImport: i0, type: ClonePipe, name: "clone" }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ClonePipe, decorators: [{
            type: Pipe,
            args: [{
                    name: 'clone'
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xvbmUucGlwZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC10aHJlZS9zcmMvbGliL3BpcGVzL2Nsb25lLnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLElBQUksRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFDcEQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGtCQUFrQixDQUFDOztBQUVqRDs7R0FFRztBQUlILE1BQU0sT0FBTyxTQUFTO0lBQ3BCLFNBQVMsQ0FBMkIsS0FBd0M7UUFDMUUsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO1lBQ1gsT0FBTztRQUNULENBQUM7UUFFRCxJQUFJLEtBQUssWUFBWSxhQUFhLEVBQUUsQ0FBQztZQUNuQyxPQUFPLEtBQUssQ0FBQyxNQUFNLEVBQUUsS0FBSyxFQUFFLENBQUM7UUFDL0IsQ0FBQzthQUFNLENBQUM7WUFDTixPQUFPLEtBQUssQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUN2QixDQUFDO0lBQ0gsQ0FBQzs4R0FYVSxTQUFTOzRHQUFULFNBQVM7OzJGQUFULFNBQVM7a0JBSHJCLElBQUk7bUJBQUM7b0JBQ0osSUFBSSxFQUFFLE9BQU87aUJBQ2QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBUaFdyYXBwZXJCYXNlIH0gZnJvbSAnLi4vVGhXcmFwcGVyQmFzZSc7XG5cbi8qKlxuICogY3JlYXRlIGEgY2xvbmUgb2YgYW55IFwiY2xvbmVhYmxlXCIgdGhyZWUuanMgY2xhc3MgKG9yIGZyb20gaXQncyBuZ3gtdGhyZWUgd2FycHBlcilcbiAqL1xuQFBpcGUoe1xuICBuYW1lOiAnY2xvbmUnXG59KVxuZXhwb3J0IGNsYXNzIENsb25lUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuICB0cmFuc2Zvcm08VCBleHRlbmRzIHsgY2xvbmUoKTogVCB9Pih2YWx1ZT86IFRoV3JhcHBlckJhc2U8VCwgYW55PiB8IFQgfCBudWxsKTogVCB8IHVuZGVmaW5lZCB7XG4gICAgaWYgKCF2YWx1ZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICh2YWx1ZSBpbnN0YW5jZW9mIFRoV3JhcHBlckJhc2UpIHtcbiAgICAgIHJldHVybiB2YWx1ZS5vYmpSZWY/LmNsb25lKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB2YWx1ZS5jbG9uZSgpO1xuICAgIH1cbiAgfVxufVxuIl19