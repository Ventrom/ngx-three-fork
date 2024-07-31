import { Subject } from 'rxjs';
export interface ThSettable {
    set(...args: any): this;
    copy?(value: any): this;
}
export declare function isSettable(obj: any): obj is ThSettable;
/**
 * tries to apply the new value to the target.
 * if the new value is 'setter arguments' then it uses set on the target.
 * else it tries to use the 'copy' method of the target if available
 * else it return the newValue as new target
 * if newValue is undefined the old target is returned
 *
 * @param target the target for the new value
 * @param newValue the value to be set
 * @returns the new target(value)
 */
export declare function applyValue<T>(target: T, newValue?: any[] | T): T;
export declare function isDisposable(obj: any): obj is {
    dispose: () => void;
};
/**
 * compatibility function for checking if a subject is observed
 * works with RxJs 6.x.x and RxJs 7+
 *
 * @param s the subject
 * @returns true if the subject is observed
 */
export declare function isObserved<T = any>(s?: Subject<T>): s is Subject<T>;
export declare function applyMixins(derivedCtor: any, constructors: any[]): void;
type MarkFunctionProperties<Component> = {
    [Key in keyof Component]: Component[Key] extends Function ? never : Key;
};
type ExcludeFunctionPropertyNames<T> = MarkFunctionProperties<T>[keyof T];
type ExcludeFunctions<T> = Pick<T, ExcludeFunctionPropertyNames<T>>;
export type NgChanges<Component, Props = ExcludeFunctions<Component>> = {
    [Key in keyof Props]?: {
        previousValue: Props[Key];
        currentValue: Props[Key];
        firstChange: boolean;
        isFirstChange(): boolean;
    };
};
export {};
