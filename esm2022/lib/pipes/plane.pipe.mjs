import { Pipe } from '@angular/core';
import { Plane, Vector3 } from 'three';
import * as i0 from "@angular/core";
/**
 * creates a plane from a normal vector3 and a constant:
 * https://threejs.org/docs/#api/en/math/Plane
 */
export class PlanePipe {
    transform(normal, constant) {
        return new Plane(new Vector3(...normal), constant);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: PlanePipe, deps: [], target: i0.ɵɵFactoryTarget.Pipe }); }
    static { this.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "14.0.0", version: "18.1.2", ngImport: i0, type: PlanePipe, name: "plane" }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: PlanePipe, decorators: [{
            type: Pipe,
            args: [{
                    name: 'plane'
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGxhbmUucGlwZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC10aHJlZS9zcmMvbGliL3BpcGVzL3BsYW5lLnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLElBQUksRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFDcEQsT0FBTyxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsTUFBTSxPQUFPLENBQUM7O0FBRXZDOzs7R0FHRztBQUlILE1BQU0sT0FBTyxTQUFTO0lBQ3BCLFNBQVMsQ0FBQyxNQUFrQyxFQUFFLFFBQWlCO1FBQzdELE9BQU8sSUFBSSxLQUFLLENBQUMsSUFBSSxPQUFPLENBQUMsR0FBRyxNQUFNLENBQUMsRUFBRSxRQUFRLENBQUMsQ0FBQztJQUNyRCxDQUFDOzhHQUhVLFNBQVM7NEdBQVQsU0FBUzs7MkZBQVQsU0FBUztrQkFIckIsSUFBSTttQkFBQztvQkFDSixJQUFJLEVBQUUsT0FBTztpQkFDZCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFBsYW5lLCBWZWN0b3IzIH0gZnJvbSAndGhyZWUnO1xuXG4vKipcbiAqIGNyZWF0ZXMgYSBwbGFuZSBmcm9tIGEgbm9ybWFsIHZlY3RvcjMgYW5kIGEgY29uc3RhbnQ6XG4gKiBodHRwczovL3RocmVlanMub3JnL2RvY3MvI2FwaS9lbi9tYXRoL1BsYW5lXG4gKi9cbkBQaXBlKHtcbiAgbmFtZTogJ3BsYW5lJ1xufSlcbmV4cG9ydCBjbGFzcyBQbGFuZVBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcbiAgdHJhbnNmb3JtKG5vcm1hbDogW251bWJlciwgbnVtYmVyPywgbnVtYmVyP10sIGNvbnN0YW50PzogbnVtYmVyKSB7XG4gICAgcmV0dXJuIG5ldyBQbGFuZShuZXcgVmVjdG9yMyguLi5ub3JtYWwpLCBjb25zdGFudCk7XG4gIH1cbn1cbiJdfQ==