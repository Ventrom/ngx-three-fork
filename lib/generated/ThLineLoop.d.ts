import { Type } from '@angular/core';
import { BufferGeometry, LineLoop, Material, Object3DEventMap } from 'three';
import { ThLine } from './ThLine';
import * as i0 from "@angular/core";
export declare class ThLineLoop<TGeometry extends BufferGeometry = BufferGeometry, TMaterial extends Material | Material[] = Material | Material[], TEventMap extends Object3DEventMap = Object3DEventMap, T extends LineLoop<TGeometry, TMaterial, TEventMap> = LineLoop<TGeometry, TMaterial, TEventMap>, TARGS = [geometry?: TGeometry, material?: TMaterial]> extends ThLine<TGeometry, TMaterial, TEventMap, T, TARGS> {
    getType(): Type<LineLoop<TGeometry, TMaterial, TEventMap>>;
    get isLineLoop(): true | undefined;
    get type(): (string | 'LineLoop') | undefined;
    static ɵfac: i0.ɵɵFactoryDeclaration<ThLineLoop<any, any, any, any, any>, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ThLineLoop<any, any, any, any, any>, "th-lineLoop", never, {}, {}, never, ["*"], false, never>;
}
