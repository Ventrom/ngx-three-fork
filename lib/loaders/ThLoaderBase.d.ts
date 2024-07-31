import { Type } from '@angular/core';
import { Loader } from 'three';
export declare abstract class ThLoader<TData = unknown, TUrl extends string | string[] = string> {
    abstract readonly clazz: Type<Loader<TData, TUrl>>;
    protected crossOrigin?: string;
    protected withCredentials?: boolean;
    setCrossOrigin(cors: string): void;
    setWithCredentials(credentials: boolean): void;
    createLoaderInstance(): Loader<TData, TUrl>;
}
