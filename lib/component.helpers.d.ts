import { Type } from '@angular/core';
import { ThCamera } from './generated/ThCamera';
import { ThObject3D } from './generated/ThObject3D';
export declare function createThProviderArray(cls: InstanceType<any>, baseCls: InstanceType<any>): void;
/**
 * usage:
 *
 * @Component({
 *  providers: createObj3DProviderArray(forwardRef(() => TheComponent)))
 * })
 * export class TheComponent {
 * ...
 * }
 * @param type the Object3D derived Class to be provided
 */
export declare function createObj3DProviderArray(type: Type<any>): {
    provide: typeof ThObject3D;
    useExisting: Type<any>;
}[];
export declare function createCameraProviderArray(type: Type<any>): ({
    provide: typeof ThObject3D;
    useExisting: Type<any>;
} | {
    provide: typeof ThCamera;
    useExisting: Type<any>;
})[];
