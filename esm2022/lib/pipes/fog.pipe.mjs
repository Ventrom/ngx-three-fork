import { Pipe } from '@angular/core';
import { Fog } from 'three';
import * as i0 from "@angular/core";
export class FogPipe {
    transform(args) {
        return new Fog(...args);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: FogPipe, deps: [], target: i0.ɵɵFactoryTarget.Pipe }); }
    static { this.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "14.0.0", version: "18.1.2", ngImport: i0, type: FogPipe, name: "fog" }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: FogPipe, decorators: [{
            type: Pipe,
            args: [{
                    name: 'fog',
                    pure: true
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9nLnBpcGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtdGhyZWUvc3JjL2xpYi9waXBlcy9mb2cucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsSUFBSSxFQUFpQixNQUFNLGVBQWUsQ0FBQztBQUNwRCxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sT0FBTyxDQUFDOztBQU01QixNQUFNLE9BQU8sT0FBTztJQUNsQixTQUFTLENBQUMsSUFBdUM7UUFDL0MsT0FBTyxJQUFJLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDO0lBQzFCLENBQUM7OEdBSFUsT0FBTzs0R0FBUCxPQUFPOzsyRkFBUCxPQUFPO2tCQUpuQixJQUFJO21CQUFDO29CQUNKLElBQUksRUFBRSxLQUFLO29CQUNYLElBQUksRUFBRSxJQUFJO2lCQUNYIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9nIH0gZnJvbSAndGhyZWUnO1xuXG5AUGlwZSh7XG4gIG5hbWU6ICdmb2cnLFxuICBwdXJlOiB0cnVlXG59KVxuZXhwb3J0IGNsYXNzIEZvZ1BpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcbiAgdHJhbnNmb3JtKGFyZ3M6IENvbnN0cnVjdG9yUGFyYW1ldGVyczx0eXBlb2YgRm9nPik6IEZvZyB7XG4gICAgcmV0dXJuIG5ldyBGb2coLi4uYXJncyk7XG4gIH1cbn1cbiJdfQ==