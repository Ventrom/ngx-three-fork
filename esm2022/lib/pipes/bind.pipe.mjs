import { Pipe } from '@angular/core';
import * as i0 from "@angular/core";
export class BindPipe {
    transform(methodToBind, instance) {
        return methodToBind.bind(instance);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: BindPipe, deps: [], target: i0.ɵɵFactoryTarget.Pipe }); }
    static { this.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "14.0.0", version: "18.1.2", ngImport: i0, type: BindPipe, name: "bind" }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: BindPipe, decorators: [{
            type: Pipe,
            args: [{
                    name: 'bind'
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmluZC5waXBlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LXRocmVlL3NyYy9saWIvcGlwZXMvYmluZC5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDOztBQUtwRCxNQUFNLE9BQU8sUUFBUTtJQUNuQixTQUFTLENBQUMsWUFBZ0QsRUFBRSxRQUFpQjtRQUMzRSxPQUFPLFlBQVksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDckMsQ0FBQzs4R0FIVSxRQUFROzRHQUFSLFFBQVE7OzJGQUFSLFFBQVE7a0JBSHBCLElBQUk7bUJBQUM7b0JBQ0osSUFBSSxFQUFFLE1BQU07aUJBQ2IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBQaXBlKHtcbiAgbmFtZTogJ2JpbmQnXG59KVxuZXhwb3J0IGNsYXNzIEJpbmRQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG4gIHRyYW5zZm9ybShtZXRob2RUb0JpbmQ6ICguLi5hbnlBcmdzOiB1bmtub3duW10pID0+IHVua25vd24sIGluc3RhbmNlOiB1bmtub3duKSB7XG4gICAgcmV0dXJuIG1ldGhvZFRvQmluZC5iaW5kKGluc3RhbmNlKTtcbiAgfVxufVxuIl19