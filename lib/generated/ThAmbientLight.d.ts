import { Type } from '@angular/core';
import { AmbientLight, ColorRepresentation } from 'three';
import { ThLight } from './ThLight';
import * as i0 from "@angular/core";
export declare class ThAmbientLight<T extends AmbientLight = AmbientLight, TARGS = [color?: ColorRepresentation, intensity?: number]> extends ThLight<undefined, T, TARGS> {
    getType(): Type<AmbientLight>;
    get isAmbientLight(): true | undefined;
    get type(): (string | 'AmbientLight') | undefined;
    static ɵfac: i0.ɵɵFactoryDeclaration<ThAmbientLight<any, any>, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ThAmbientLight<any, any>, "th-ambientLight", never, {}, {}, never, ["*"], false, never>;
}
