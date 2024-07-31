import { Directive, Input, Self, SkipSelf } from '@angular/core';
import { createLazyObject3DProxy, isLazyObject3dProxy } from '../loaders/LazyObject3dProxy';
import * as i0 from "@angular/core";
import * as i1 from "../generated";
export class RefByIdDirective {
    constructor(host, parent) {
        this.host = host;
        this.parent = parent;
        this.host.autoAddToParent = false;
        this.host.autoDispose = false;
        this.host.objRef = createLazyObject3DProxy();
    }
    set refById(id) {
        this.id = id;
        this.subscription?.unsubscribe();
        this.subscription = this.parent.objRef$.subscribe((obj) => {
            this.parentObj = obj;
            this.applyRef();
        });
    }
    applyRef() {
        if (!this.parentObj || this.id === undefined) {
            return;
        }
        const ref = this.findById(this.parentObj, this.id);
        if (ref) {
            this.setRef(this.host, ref);
        }
    }
    findById(parentObj, id) {
        if ((parentObj.name ?? parentObj.uuid) === id) {
            return parentObj;
        }
        for (const child of parentObj.children) {
            const object = this.findById(child, id);
            if (object !== undefined) {
                return object;
            }
        }
        return undefined;
    }
    setRef(host, ref) {
        const objRef = host.objRef;
        if (!objRef) {
            return;
        }
        if (isLazyObject3dProxy(objRef)) {
            objRef.objRef = ref;
            host.objRef = objRef;
        }
    }
    ngOnDestroy() {
        this.subscription?.unsubscribe();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: RefByIdDirective, deps: [{ token: i1.ThObject3D, self: true }, { token: i1.ThObject3D, skipSelf: true }], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "18.1.2", type: RefByIdDirective, selector: "[refById]", inputs: { refById: "refById" }, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: RefByIdDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[refById]'
                }]
        }], ctorParameters: () => [{ type: i1.ThObject3D, decorators: [{
                    type: Self
                }] }, { type: i1.ThObject3D, decorators: [{
                    type: SkipSelf
                }] }], propDecorators: { refById: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVmLWJ5LWlkLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC10aHJlZS9zcmMvbGliL2RpcmVjdGl2ZXMvcmVmLWJ5LWlkLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBYSxJQUFJLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBSTVFLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDhCQUE4QixDQUFDOzs7QUFLNUYsTUFBTSxPQUFPLGdCQUFnQjtJQUkzQixZQUE0QixJQUFnQixFQUFzQixNQUFrQjtRQUF4RCxTQUFJLEdBQUosSUFBSSxDQUFZO1FBQXNCLFdBQU0sR0FBTixNQUFNLENBQVk7UUFDbEYsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLEdBQUcsS0FBSyxDQUFDO1FBQ2xDLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQztRQUM5QixJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyx1QkFBdUIsRUFBRSxDQUFDO0lBQy9DLENBQUM7SUFFRCxJQUNJLE9BQU8sQ0FBQyxFQUFzQjtRQUNoQyxJQUFJLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQztRQUNiLElBQUksQ0FBQyxZQUFZLEVBQUUsV0FBVyxFQUFFLENBQUM7UUFDakMsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRTtZQUN4RCxJQUFJLENBQUMsU0FBUyxHQUFHLEdBQUcsQ0FBQztZQUNyQixJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDbEIsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsUUFBUTtRQUNOLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxJQUFJLElBQUksQ0FBQyxFQUFFLEtBQUssU0FBUyxFQUFFLENBQUM7WUFDN0MsT0FBTztRQUNULENBQUM7UUFFRCxNQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ25ELElBQUksR0FBRyxFQUFFLENBQUM7WUFDUixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDOUIsQ0FBQztJQUNILENBQUM7SUFFUyxRQUFRLENBQUMsU0FBbUIsRUFBRSxFQUFVO1FBQ2hELElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxJQUFJLFNBQVMsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQztZQUM5QyxPQUFPLFNBQVMsQ0FBQztRQUNuQixDQUFDO1FBRUQsS0FBSyxNQUFNLEtBQUssSUFBSSxTQUFTLENBQUMsUUFBUSxFQUFFLENBQUM7WUFDdkMsTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUM7WUFDeEMsSUFBSSxNQUFNLEtBQUssU0FBUyxFQUFFLENBQUM7Z0JBQ3pCLE9BQU8sTUFBTSxDQUFDO1lBQ2hCLENBQUM7UUFDSCxDQUFDO1FBQ0QsT0FBTyxTQUFTLENBQUM7SUFDbkIsQ0FBQztJQUVTLE1BQU0sQ0FBQyxJQUFnQixFQUFFLEdBQWE7UUFDOUMsTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUMzQixJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7WUFDWixPQUFPO1FBQ1QsQ0FBQztRQUNELElBQUksbUJBQW1CLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQztZQUNoQyxNQUFNLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQztZQUNwQixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUN2QixDQUFDO0lBQ0gsQ0FBQztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsWUFBWSxFQUFFLFdBQVcsRUFBRSxDQUFDO0lBQ25DLENBQUM7OEdBMURVLGdCQUFnQjtrR0FBaEIsZ0JBQWdCOzsyRkFBaEIsZ0JBQWdCO2tCQUg1QixTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxXQUFXO2lCQUN0Qjs7MEJBS2MsSUFBSTs7MEJBQThCLFFBQVE7eUNBT25ELE9BQU87c0JBRFYsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgSW5wdXQsIE9uRGVzdHJveSwgU2VsZiwgU2tpcFNlbGYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgT2JqZWN0M0QgfSBmcm9tICd0aHJlZSc7XG5pbXBvcnQgeyBUaE9iamVjdDNEIH0gZnJvbSAnLi4vZ2VuZXJhdGVkJztcbmltcG9ydCB7IGNyZWF0ZUxhenlPYmplY3QzRFByb3h5LCBpc0xhenlPYmplY3QzZFByb3h5IH0gZnJvbSAnLi4vbG9hZGVycy9MYXp5T2JqZWN0M2RQcm94eSc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tyZWZCeUlkXSdcbn0pXG5leHBvcnQgY2xhc3MgUmVmQnlJZERpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XG4gIHByb3RlY3RlZCBzdWJzY3JpcHRpb24/OiBTdWJzY3JpcHRpb247XG4gIHByb3RlY3RlZCBwYXJlbnRPYmo/OiBPYmplY3QzRDtcbiAgcHJvdGVjdGVkIGlkPzogc3RyaW5nO1xuICBjb25zdHJ1Y3RvcihAU2VsZigpIHByaXZhdGUgaG9zdDogVGhPYmplY3QzRCwgQFNraXBTZWxmKCkgcHJpdmF0ZSBwYXJlbnQ6IFRoT2JqZWN0M0QpIHtcbiAgICB0aGlzLmhvc3QuYXV0b0FkZFRvUGFyZW50ID0gZmFsc2U7XG4gICAgdGhpcy5ob3N0LmF1dG9EaXNwb3NlID0gZmFsc2U7XG4gICAgdGhpcy5ob3N0Lm9ialJlZiA9IGNyZWF0ZUxhenlPYmplY3QzRFByb3h5KCk7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgcmVmQnlJZChpZDogc3RyaW5nIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5pZCA9IGlkO1xuICAgIHRoaXMuc3Vic2NyaXB0aW9uPy51bnN1YnNjcmliZSgpO1xuICAgIHRoaXMuc3Vic2NyaXB0aW9uID0gdGhpcy5wYXJlbnQub2JqUmVmJC5zdWJzY3JpYmUoKG9iaikgPT4ge1xuICAgICAgdGhpcy5wYXJlbnRPYmogPSBvYmo7XG4gICAgICB0aGlzLmFwcGx5UmVmKCk7XG4gICAgfSk7XG4gIH1cblxuICBhcHBseVJlZigpIHtcbiAgICBpZiAoIXRoaXMucGFyZW50T2JqIHx8IHRoaXMuaWQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHJlZiA9IHRoaXMuZmluZEJ5SWQodGhpcy5wYXJlbnRPYmosIHRoaXMuaWQpO1xuICAgIGlmIChyZWYpIHtcbiAgICAgIHRoaXMuc2V0UmVmKHRoaXMuaG9zdCwgcmVmKTtcbiAgICB9XG4gIH1cblxuICBwcm90ZWN0ZWQgZmluZEJ5SWQocGFyZW50T2JqOiBPYmplY3QzRCwgaWQ6IHN0cmluZyk6IE9iamVjdDNEIHwgdW5kZWZpbmVkIHtcbiAgICBpZiAoKHBhcmVudE9iai5uYW1lID8/IHBhcmVudE9iai51dWlkKSA9PT0gaWQpIHtcbiAgICAgIHJldHVybiBwYXJlbnRPYmo7XG4gICAgfVxuXG4gICAgZm9yIChjb25zdCBjaGlsZCBvZiBwYXJlbnRPYmouY2hpbGRyZW4pIHtcbiAgICAgIGNvbnN0IG9iamVjdCA9IHRoaXMuZmluZEJ5SWQoY2hpbGQsIGlkKTtcbiAgICAgIGlmIChvYmplY3QgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm4gb2JqZWN0O1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9XG5cbiAgcHJvdGVjdGVkIHNldFJlZihob3N0OiBUaE9iamVjdDNELCByZWY6IE9iamVjdDNEKSB7XG4gICAgY29uc3Qgb2JqUmVmID0gaG9zdC5vYmpSZWY7XG4gICAgaWYgKCFvYmpSZWYpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKGlzTGF6eU9iamVjdDNkUHJveHkob2JqUmVmKSkge1xuICAgICAgb2JqUmVmLm9ialJlZiA9IHJlZjtcbiAgICAgIGhvc3Qub2JqUmVmID0gb2JqUmVmO1xuICAgIH1cbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuc3Vic2NyaXB0aW9uPy51bnN1YnNjcmliZSgpO1xuICB9XG59XG4iXX0=