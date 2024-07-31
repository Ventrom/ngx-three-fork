import { Pipe } from '@angular/core';
import { Color } from 'three';
import * as i0 from "@angular/core";
/**
 * constructs a color of it's constructor parameters
 */
export class ColorPipe {
    /* ContructorProperties does not support multiple constructors --> */
    transform(args) {
        if (Array.isArray(args)) {
            return new Color(...args);
        }
        else {
            return new Color(args);
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ColorPipe, deps: [], target: i0.ɵɵFactoryTarget.Pipe }); }
    static { this.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "14.0.0", version: "18.1.2", ngImport: i0, type: ColorPipe, name: "color" }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ColorPipe, decorators: [{
            type: Pipe,
            args: [{
                    name: 'color',
                    pure: true
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sb3IucGlwZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC10aHJlZS9zcmMvbGliL3BpcGVzL2NvbG9yLnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLElBQUksRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFDcEQsT0FBTyxFQUFFLEtBQUssRUFBdUIsTUFBTSxPQUFPLENBQUM7O0FBRW5EOztHQUVHO0FBS0gsTUFBTSxPQUFPLFNBQVM7SUFDcEIscUVBQXFFO0lBQ3JFLFNBQVMsQ0FBQyxJQUE2RDtRQUNyRSxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQztZQUN4QixPQUFPLElBQUksS0FBSyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUM7UUFDNUIsQ0FBQzthQUFNLENBQUM7WUFDTixPQUFPLElBQUksS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3pCLENBQUM7SUFDSCxDQUFDOzhHQVJVLFNBQVM7NEdBQVQsU0FBUzs7MkZBQVQsU0FBUztrQkFKckIsSUFBSTttQkFBQztvQkFDSixJQUFJLEVBQUUsT0FBTztvQkFDYixJQUFJLEVBQUUsSUFBSTtpQkFDWCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbG9yLCBDb2xvclJlcHJlc2VudGF0aW9uIH0gZnJvbSAndGhyZWUnO1xuXG4vKipcbiAqIGNvbnN0cnVjdHMgYSBjb2xvciBvZiBpdCdzIGNvbnN0cnVjdG9yIHBhcmFtZXRlcnNcbiAqL1xuQFBpcGUoe1xuICBuYW1lOiAnY29sb3InLFxuICBwdXJlOiB0cnVlXG59KVxuZXhwb3J0IGNsYXNzIENvbG9yUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuICAvKiBDb250cnVjdG9yUHJvcGVydGllcyBkb2VzIG5vdCBzdXBwb3J0IG11bHRpcGxlIGNvbnN0cnVjdG9ycyAtLT4gKi9cbiAgdHJhbnNmb3JtKGFyZ3M6IENvbG9yUmVwcmVzZW50YXRpb24gfCBbcjogbnVtYmVyLCBnOiBudW1iZXIsIGI6IG51bWJlcl0pOiBDb2xvciB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkoYXJncykpIHtcbiAgICAgIHJldHVybiBuZXcgQ29sb3IoLi4uYXJncyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBuZXcgQ29sb3IoYXJncyk7XG4gICAgfVxuICB9XG59XG4iXX0=