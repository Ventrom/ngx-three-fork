import { Pipe } from '@angular/core';
import { Vector2, Vector3, Vector4 } from 'three';
import * as i0 from "@angular/core";
/**
 * transform arrays to vectors
 */
export class Vector2Pipe {
    transform(args) {
        return new Vector2(...args);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: Vector2Pipe, deps: [], target: i0.ɵɵFactoryTarget.Pipe }); }
    static { this.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "14.0.0", version: "18.1.2", ngImport: i0, type: Vector2Pipe, name: "vector2" }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: Vector2Pipe, decorators: [{
            type: Pipe,
            args: [{
                    name: 'vector2',
                    pure: true
                }]
        }] });
export class Vector3Pipe {
    transform(args) {
        return new Vector3(...args);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: Vector3Pipe, deps: [], target: i0.ɵɵFactoryTarget.Pipe }); }
    static { this.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "14.0.0", version: "18.1.2", ngImport: i0, type: Vector3Pipe, name: "vector3" }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: Vector3Pipe, decorators: [{
            type: Pipe,
            args: [{
                    name: 'vector3',
                    pure: true
                }]
        }] });
export class Vector4Pipe {
    transform(args) {
        return new Vector4(...args);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: Vector4Pipe, deps: [], target: i0.ɵɵFactoryTarget.Pipe }); }
    static { this.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "14.0.0", version: "18.1.2", ngImport: i0, type: Vector4Pipe, name: "vector4" }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: Vector4Pipe, decorators: [{
            type: Pipe,
            args: [{
                    name: 'vector4',
                    pure: true
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVjdG9yLnBpcGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtdGhyZWUvc3JjL2xpYi9waXBlcy92ZWN0b3IucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsSUFBSSxFQUFpQixNQUFNLGVBQWUsQ0FBQztBQUNwRCxPQUFPLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxPQUFPLENBQUM7O0FBRWxEOztHQUVHO0FBS0gsTUFBTSxPQUFPLFdBQVc7SUFDdEIsU0FBUyxDQUFDLElBQTJDO1FBQ25ELE9BQU8sSUFBSSxPQUFPLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQztJQUM5QixDQUFDOzhHQUhVLFdBQVc7NEdBQVgsV0FBVzs7MkZBQVgsV0FBVztrQkFKdkIsSUFBSTttQkFBQztvQkFDSixJQUFJLEVBQUUsU0FBUztvQkFDZixJQUFJLEVBQUUsSUFBSTtpQkFDWDs7QUFXRCxNQUFNLE9BQU8sV0FBVztJQUN0QixTQUFTLENBQUMsSUFBMkM7UUFDbkQsT0FBTyxJQUFJLE9BQU8sQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDO0lBQzlCLENBQUM7OEdBSFUsV0FBVzs0R0FBWCxXQUFXOzsyRkFBWCxXQUFXO2tCQUp2QixJQUFJO21CQUFDO29CQUNKLElBQUksRUFBRSxTQUFTO29CQUNmLElBQUksRUFBRSxJQUFJO2lCQUNYOztBQVdELE1BQU0sT0FBTyxXQUFXO0lBQ3RCLFNBQVMsQ0FBQyxJQUEyQztRQUNuRCxPQUFPLElBQUksT0FBTyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUM7SUFDOUIsQ0FBQzs4R0FIVSxXQUFXOzRHQUFYLFdBQVc7OzJGQUFYLFdBQVc7a0JBSnZCLElBQUk7bUJBQUM7b0JBQ0osSUFBSSxFQUFFLFNBQVM7b0JBQ2YsSUFBSSxFQUFFLElBQUk7aUJBQ1giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBWZWN0b3IyLCBWZWN0b3IzLCBWZWN0b3I0IH0gZnJvbSAndGhyZWUnO1xuXG4vKipcbiAqIHRyYW5zZm9ybSBhcnJheXMgdG8gdmVjdG9yc1xuICovXG5AUGlwZSh7XG4gIG5hbWU6ICd2ZWN0b3IyJyxcbiAgcHVyZTogdHJ1ZVxufSlcbmV4cG9ydCBjbGFzcyBWZWN0b3IyUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuICB0cmFuc2Zvcm0oYXJnczogQ29uc3RydWN0b3JQYXJhbWV0ZXJzPHR5cGVvZiBWZWN0b3IyPik6IFZlY3RvcjIge1xuICAgIHJldHVybiBuZXcgVmVjdG9yMiguLi5hcmdzKTtcbiAgfVxufVxuXG5AUGlwZSh7XG4gIG5hbWU6ICd2ZWN0b3IzJyxcbiAgcHVyZTogdHJ1ZVxufSlcbmV4cG9ydCBjbGFzcyBWZWN0b3IzUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuICB0cmFuc2Zvcm0oYXJnczogQ29uc3RydWN0b3JQYXJhbWV0ZXJzPHR5cGVvZiBWZWN0b3IzPik6IFZlY3RvcjMge1xuICAgIHJldHVybiBuZXcgVmVjdG9yMyguLi5hcmdzKTtcbiAgfVxufVxuXG5AUGlwZSh7XG4gIG5hbWU6ICd2ZWN0b3I0JyxcbiAgcHVyZTogdHJ1ZVxufSlcbmV4cG9ydCBjbGFzcyBWZWN0b3I0UGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuICB0cmFuc2Zvcm0oYXJnczogQ29uc3RydWN0b3JQYXJhbWV0ZXJzPHR5cGVvZiBWZWN0b3I0Pik6IFZlY3RvcjQge1xuICAgIHJldHVybiBuZXcgVmVjdG9yNCguLi5hcmdzKTtcbiAgfVxufVxuIl19