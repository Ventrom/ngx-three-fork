import { Object3D } from 'three';
import { applyValue, isSettable } from '../util';
class Object3DProxyHandler {
    constructor(target) {
        this.memberMap = new Map();
        this.children = [];
        this.eventListener = {};
        this.loaded = false;
        this.add = (...object) => {
            if (this.objRef) {
                this.objRef.add(...object);
            }
            this.children.push(...object);
            return this;
        };
        this.remove = (...object) => {
            if (this.objRef) {
                this.objRef.remove(...object);
            }
            for (const obj of object) {
                const index = this.children.indexOf(obj);
                if (index >= 0) {
                    this.children = this.children.splice(index, 1);
                }
            }
            return this;
        };
        this.applyToObject3D = (objRef) => {
            this.memberMap.forEach((value, key) => {
                const member = objRef[key];
                if (isSettable(member)) {
                    applyValue(member, value);
                }
                else {
                    objRef[key] = value;
                }
            });
            this.children.forEach((child) => objRef.add(child));
            if (this.objRef?.parent) {
                const parent = this.objRef?.parent;
                parent.remove(this.objRef);
                parent.add(objRef);
            }
        };
        /**
         * Adds a listener to an event type.
         *
         * @param type The type of event to listen to.
         * @param listener The function that gets called when the event is fired.
         */
        this.addEventListener = (type, listener) => {
            let arr = this.eventListener[type];
            if (!arr) {
                arr = [];
                this.eventListener[type] = arr;
            }
            arr.push(listener);
            if (this.objRef) {
                this.objRef.addEventListener(type, listener);
            }
        };
        /**
         * Removes a listener from an event type.
         *
         * @param type The type of the listener that gets removed.
         * @param listener The listener function that gets removed.
         */
        this.removeEventListener = (type, listener) => {
            const arr = this.eventListener[type];
            if (!arr) {
                return;
            }
            const index = arr.indexOf(listener);
            if (index >= 0) {
                arr.splice(index, 1);
            }
        };
        this.objRef = target;
    }
    get(_target, p, _receiver) {
        switch (p) {
            case '__isProxy':
                return true;
            case 'applyToObject3D':
                return this.applyToObject3D;
            case 'objRef':
                if (this.loaded) {
                    return this.objRef;
                }
                else {
                    return undefined;
                }
            case 'add':
                return this.add;
            case 'remove':
                return this.remove;
            case 'children':
                return this.objRef ? this.objRef.children : this.children;
            default: {
                const objKey = p;
                const value = this.objRef[objKey];
                if (value !== undefined) {
                    // this is necessary for complex members
                    // (returned by reference, they might be altered, we have to reapply them to the real object )
                    this.memberMap.set(objKey, value);
                }
                return value;
            }
        }
    }
    set(_target, p, value, _receiver) {
        if (p === 'objRef') {
            if (value) {
                this.applyToObject3D(value);
            }
            this.loaded = true;
            this.objRef = value;
        }
        else {
            // store to the member map
            this.memberMap.set(p, value);
            if (this.objRef) {
                // and apply to the real object if present
                this.objRef[p] = value;
            }
        }
        return true;
    }
}
export function createLazyObject3DProxy(target = new Object3D()) {
    const handler = new Object3DProxyHandler(target);
    return new Proxy(handler, handler);
}
export function isLazyObject3dProxy(object) {
    return (
    // eslint-disable-next-line no-underscore-dangle
    object.__isProxy === true && object.objRef === undefined);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTGF6eU9iamVjdDNkUHJveHkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtdGhyZWUvc3JjL2xpYi9sb2FkZXJzL0xhenlPYmplY3QzZFByb3h5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQVMsTUFBTSxPQUFPLENBQUM7QUFDeEMsT0FBTyxFQUFFLFVBQVUsRUFBRSxVQUFVLEVBQUUsTUFBTSxTQUFTLENBQUM7QUFFakQsTUFBTSxvQkFBb0I7SUFDeEIsWUFBWSxNQUFnQjtRQUtsQixjQUFTLEdBQUcsSUFBSSxHQUFHLEVBQXVCLENBQUM7UUFDM0MsYUFBUSxHQUFlLEVBQUUsQ0FBQztRQUMxQixrQkFBYSxHQUFrRCxFQUFFLENBQUM7UUFDbEUsV0FBTSxHQUFHLEtBQUssQ0FBQztRQW1EekIsUUFBRyxHQUFHLENBQUMsR0FBRyxNQUFrQixFQUFRLEVBQUU7WUFDcEMsSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7Z0JBQ2hCLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsTUFBTSxDQUFDLENBQUM7WUFDN0IsQ0FBQztZQUVELElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsTUFBTSxDQUFDLENBQUM7WUFFOUIsT0FBTyxJQUFJLENBQUM7UUFDZCxDQUFDLENBQUM7UUFFRixXQUFNLEdBQUcsQ0FBQyxHQUFHLE1BQWtCLEVBQVEsRUFBRTtZQUN2QyxJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztnQkFDaEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsR0FBRyxNQUFNLENBQUMsQ0FBQztZQUNoQyxDQUFDO1lBRUQsS0FBSyxNQUFNLEdBQUcsSUFBSSxNQUFNLEVBQUUsQ0FBQztnQkFDekIsTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7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Q0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQW1CLEVBQUUsS0FBSyxDQUFDLENBQUM7WUFDL0MsSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7Z0JBQ2hCLDBDQUEwQztnQkFDekMsSUFBSSxDQUFDLE1BQWMsQ0FBQyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUM7WUFDbEMsQ0FBQztRQUNILENBQUM7UUFDRCxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7Q0FtRkY7QUFTRCxNQUFNLFVBQVUsdUJBQXVCLENBQUMsTUFBTSxHQUFHLElBQUksUUFBUSxFQUFFO0lBQzdELE1BQU0sT0FBTyxHQUFHLElBQUksb0JBQW9CLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDakQsT0FBTyxJQUFJLEtBQUssQ0FBb0IsT0FBdUMsRUFBRSxPQUFPLENBQUMsQ0FBQztBQUN4RixDQUFDO0FBRUQsTUFBTSxVQUFVLG1CQUFtQixDQUFDLE1BQW9DO0lBQ3RFLE9BQU87SUFDTCxnREFBZ0Q7SUFDL0MsTUFBNEIsQ0FBQyxTQUFTLEtBQUssSUFBSSxJQUFLLE1BQTRCLENBQUMsTUFBTSxLQUFLLFNBQVMsQ0FDdkcsQ0FBQztBQUNKLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPYmplY3QzRCwgRXZlbnQgfSBmcm9tICd0aHJlZSc7XG5pbXBvcnQgeyBhcHBseVZhbHVlLCBpc1NldHRhYmxlIH0gZnJvbSAnLi4vdXRpbCc7XG5cbmNsYXNzIE9iamVjdDNEUHJveHlIYW5kbGVyIGltcGxlbWVudHMgUHJveHlIYW5kbGVyPE9iamVjdDNEPiB7XG4gIGNvbnN0cnVjdG9yKHRhcmdldDogT2JqZWN0M0QpIHtcbiAgICB0aGlzLm9ialJlZiA9IHRhcmdldDtcbiAgfVxuXG4gIHByb3RlY3RlZCBvYmpSZWY6IE9iamVjdDNEO1xuICBwcm90ZWN0ZWQgbWVtYmVyTWFwID0gbmV3IE1hcDxrZXlvZiBPYmplY3QzRCwgYW55PigpO1xuICBwcm90ZWN0ZWQgY2hpbGRyZW46IE9iamVjdDNEW10gPSBbXTtcbiAgcHJvdGVjdGVkIGV2ZW50TGlzdGVuZXI6IHsgW2tleTogc3RyaW5nXTogKChldmVudDogRXZlbnQpID0+IHZvaWQpW10gfSA9IHt9O1xuICBwcm90ZWN0ZWQgbG9hZGVkID0gZmFsc2U7XG5cbiAgZ2V0KF90YXJnZXQ6IHVua25vd24sIHA6IGtleW9mIExhenlPYmplY3QzRFByb3h5LCBfcmVjZWl2ZXI6IGFueSk6IGFueSB7XG4gICAgc3dpdGNoIChwKSB7XG4gICAgICBjYXNlICdfX2lzUHJveHknOlxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIGNhc2UgJ2FwcGx5VG9PYmplY3QzRCc6XG4gICAgICAgIHJldHVybiB0aGlzLmFwcGx5VG9PYmplY3QzRDtcbiAgICAgIGNhc2UgJ29ialJlZic6XG4gICAgICAgIGlmICh0aGlzLmxvYWRlZCkge1xuICAgICAgICAgIHJldHVybiB0aGlzLm9ialJlZjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgICBjYXNlICdhZGQnOlxuICAgICAgICByZXR1cm4gdGhpcy5hZGQ7XG4gICAgICBjYXNlICdyZW1vdmUnOlxuICAgICAgICByZXR1cm4gdGhpcy5yZW1vdmU7XG4gICAgICBjYXNlICdjaGlsZHJlbic6XG4gICAgICAgIHJldHVybiB0aGlzLm9ialJlZiA/IHRoaXMub2JqUmVmLmNoaWxkcmVuIDogdGhpcy5jaGlsZHJlbjtcbiAgICAgIGRlZmF1bHQ6IHtcbiAgICAgICAgY29uc3Qgb2JqS2V5ID0gcCBhcyBrZXlvZiBPYmplY3QzRDtcbiAgICAgICAgY29uc3QgdmFsdWUgPSB0aGlzLm9ialJlZltvYmpLZXldO1xuICAgICAgICBpZiAodmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIC8vIHRoaXMgaXMgbmVjZXNzYXJ5IGZvciBjb21wbGV4IG1lbWJlcnNcbiAgICAgICAgICAvLyAocmV0dXJuZWQgYnkgcmVmZXJlbmNlLCB0aGV5IG1pZ2h0IGJlIGFsdGVyZWQsIHdlIGhhdmUgdG8gcmVhcHBseSB0aGVtIHRvIHRoZSByZWFsIG9iamVjdCApXG4gICAgICAgICAgdGhpcy5tZW1iZXJNYXAuc2V0KG9iaktleSwgdmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBzZXQoX3RhcmdldDogdW5rbm93biwgcDoga2V5b2YgTGF6eU9iamVjdDNEUHJveHksIHZhbHVlOiBhbnksIF9yZWNlaXZlcjogYW55KTogYm9vbGVhbiB7XG4gICAgaWYgKHAgPT09ICdvYmpSZWYnKSB7XG4gICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgdGhpcy5hcHBseVRvT2JqZWN0M0QodmFsdWUpO1xuICAgICAgfVxuICAgICAgdGhpcy5sb2FkZWQgPSB0cnVlO1xuICAgICAgdGhpcy5vYmpSZWYgPSB2YWx1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gc3RvcmUgdG8gdGhlIG1lbWJlciBtYXBcbiAgICAgIHRoaXMubWVtYmVyTWFwLnNldChwIGFzIGtleW9mIE9iamVjdDNELCB2YWx1ZSk7XG4gICAgICBpZiAodGhpcy5vYmpSZWYpIHtcbiAgICAgICAgLy8gYW5kIGFwcGx5IHRvIHRoZSByZWFsIG9iamVjdCBpZiBwcmVzZW50XG4gICAgICAgICh0aGlzLm9ialJlZiBhcyBhbnkpW3BdID0gdmFsdWU7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgYWRkID0gKC4uLm9iamVjdDogT2JqZWN0M0RbXSk6IHRoaXMgPT4ge1xuICAgIGlmICh0aGlzLm9ialJlZikge1xuICAgICAgdGhpcy5vYmpSZWYuYWRkKC4uLm9iamVjdCk7XG4gICAgfVxuXG4gICAgdGhpcy5jaGlsZHJlbi5wdXNoKC4uLm9iamVjdCk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICByZW1vdmUgPSAoLi4ub2JqZWN0OiBPYmplY3QzRFtdKTogdGhpcyA9PiB7XG4gICAgaWYgKHRoaXMub2JqUmVmKSB7XG4gICAgICB0aGlzLm9ialJlZi5yZW1vdmUoLi4ub2JqZWN0KTtcbiAgICB9XG5cbiAgICBmb3IgKGNvbnN0IG9iaiBvZiBvYmplY3QpIHtcbiAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5jaGlsZHJlbi5pbmRleE9mKG9iaik7XG4gICAgICBpZiAoaW5kZXggPj0gMCkge1xuICAgICAgICB0aGlzLmNoaWxkcmVuID0gdGhpcy5jaGlsZHJlbi5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIGFwcGx5VG9PYmplY3QzRCA9IChvYmpSZWY6IE9iamVjdDNEKSA9PiB7XG4gICAgdGhpcy5tZW1iZXJNYXAuZm9yRWFjaCgodmFsdWUsIGtleSkgPT4ge1xuICAgICAgY29uc3QgbWVtYmVyID0gKG9ialJlZiBhcyBhbnkpW2tleV07XG4gICAgICBpZiAoaXNTZXR0YWJsZShtZW1iZXIpKSB7XG4gICAgICAgIGFwcGx5VmFsdWUobWVtYmVyLCB2YWx1ZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAob2JqUmVmIGFzIGFueSlba2V5XSA9IHZhbHVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgdGhpcy5jaGlsZHJlbi5mb3JFYWNoKChjaGlsZCkgPT4gb2JqUmVmLmFkZChjaGlsZCkpO1xuXG4gICAgaWYgKHRoaXMub2JqUmVmPy5wYXJlbnQpIHtcbiAgICAgIGNvbnN0IHBhcmVudCA9IHRoaXMub2JqUmVmPy5wYXJlbnQ7XG4gICAgICBwYXJlbnQucmVtb3ZlKHRoaXMub2JqUmVmKTtcbiAgICAgIHBhcmVudC5hZGQob2JqUmVmKTtcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIEFkZHMgYSBsaXN0ZW5lciB0byBhbiBldmVudCB0eXBlLlxuICAgKlxuICAgKiBAcGFyYW0gdHlwZSBUaGUgdHlwZSBvZiBldmVudCB0byBsaXN0ZW4gdG8uXG4gICAqIEBwYXJhbSBsaXN0ZW5lciBUaGUgZnVuY3Rpb24gdGhhdCBnZXRzIGNhbGxlZCB3aGVuIHRoZSBldmVudCBpcyBmaXJlZC5cbiAgICovXG4gIGFkZEV2ZW50TGlzdGVuZXIgPSAodHlwZTogc3RyaW5nLCBsaXN0ZW5lcjogKGV2ZW50OiBFdmVudCkgPT4gdm9pZCk6IHZvaWQgPT4ge1xuICAgIGxldCBhcnIgPSB0aGlzLmV2ZW50TGlzdGVuZXJbdHlwZV07XG4gICAgaWYgKCFhcnIpIHtcbiAgICAgIGFyciA9IFtdO1xuICAgICAgdGhpcy5ldmVudExpc3RlbmVyW3R5cGVdID0gYXJyO1xuICAgIH1cblxuICAgIGFyci5wdXNoKGxpc3RlbmVyKTtcblxuICAgIGlmICh0aGlzLm9ialJlZikge1xuICAgICAgdGhpcy5vYmpSZWYuYWRkRXZlbnRMaXN0ZW5lcih0eXBlLCBsaXN0ZW5lcik7XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBSZW1vdmVzIGEgbGlzdGVuZXIgZnJvbSBhbiBldmVudCB0eXBlLlxuICAgKlxuICAgKiBAcGFyYW0gdHlwZSBUaGUgdHlwZSBvZiB0aGUgbGlzdGVuZXIgdGhhdCBnZXRzIHJlbW92ZWQuXG4gICAqIEBwYXJhbSBsaXN0ZW5lciBUaGUgbGlzdGVuZXIgZnVuY3Rpb24gdGhhdCBnZXRzIHJlbW92ZWQuXG4gICAqL1xuICByZW1vdmVFdmVudExpc3RlbmVyID0gKHR5cGU6IHN0cmluZywgbGlzdGVuZXI6IChldmVudDogRXZlbnQpID0+IHZvaWQpOiB2b2lkID0+IHtcbiAgICBjb25zdCBhcnIgPSB0aGlzLmV2ZW50TGlzdGVuZXJbdHlwZV07XG4gICAgaWYgKCFhcnIpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBpbmRleCA9IGFyci5pbmRleE9mKGxpc3RlbmVyKTtcbiAgICBpZiAoaW5kZXggPj0gMCkge1xuICAgICAgYXJyLnNwbGljZShpbmRleCwgMSk7XG4gICAgfVxuICB9O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIExhenlPYmplY3QzRFByb3h5IGV4dGVuZHMgT2JqZWN0M0Qge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25hbWluZy1jb252ZW50aW9uXG4gIHJlYWRvbmx5IF9faXNQcm94eT86IGJvb2xlYW47XG4gIG9ialJlZj86IE9iamVjdDNEO1xuICBhcHBseVRvT2JqZWN0M0QocmVhbDogT2JqZWN0M0QpOiB2b2lkO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlTGF6eU9iamVjdDNEUHJveHkodGFyZ2V0ID0gbmV3IE9iamVjdDNEKCkpOiBMYXp5T2JqZWN0M0RQcm94eSB7XG4gIGNvbnN0IGhhbmRsZXIgPSBuZXcgT2JqZWN0M0RQcm94eUhhbmRsZXIodGFyZ2V0KTtcbiAgcmV0dXJuIG5ldyBQcm94eTxMYXp5T2JqZWN0M0RQcm94eT4oaGFuZGxlciBhcyB1bmtub3duIGFzIExhenlPYmplY3QzRFByb3h5LCBoYW5kbGVyKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzTGF6eU9iamVjdDNkUHJveHkob2JqZWN0OiBPYmplY3QzRCB8IExhenlPYmplY3QzRFByb3h5KTogb2JqZWN0IGlzIExhenlPYmplY3QzRFByb3h5IHtcbiAgcmV0dXJuIChcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZXJzY29yZS1kYW5nbGVcbiAgICAob2JqZWN0IGFzIExhenlPYmplY3QzRFByb3h5KS5fX2lzUHJveHkgPT09IHRydWUgJiYgKG9iamVjdCBhcyBMYXp5T2JqZWN0M0RQcm94eSkub2JqUmVmID09PSB1bmRlZmluZWRcbiAgKTtcbn1cbiJdfQ==