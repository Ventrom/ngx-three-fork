import { Type } from '@angular/core';
import { BufferGeometry, EdgesGeometry, NormalBufferAttributes } from 'three';
import { ThBufferGeometry } from './ThBufferGeometry';
import * as i0 from "@angular/core";
export declare class ThEdgesGeometry<TBufferGeometry extends BufferGeometry = BufferGeometry, T extends EdgesGeometry<TBufferGeometry> = EdgesGeometry<TBufferGeometry>, TARGS = [geometry?: TBufferGeometry | null, thresholdAngle?: number]> extends ThBufferGeometry<NormalBufferAttributes, T, TARGS> {
    getType(): Type<EdgesGeometry<TBufferGeometry>>;
    get type(): (string | 'EdgesGeometry') | undefined;
    get parameters(): {
        readonly geometry: TBufferGeometry | null;
        readonly thresholdAngle: number;
    } | undefined;
    static ɵfac: i0.ɵɵFactoryDeclaration<ThEdgesGeometry<any, any, any>, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ThEdgesGeometry<any, any, any>, "th-edgesGeometry", never, {}, {}, never, ["*"], false, never>;
}
