import { Type } from '@angular/core';
import { BufferGeometry, NormalBufferAttributes, WireframeGeometry } from 'three';
import { ThBufferGeometry } from './ThBufferGeometry';
import * as i0 from "@angular/core";
export declare class ThWireframeGeometry<TBufferGeometry extends BufferGeometry = BufferGeometry, T extends WireframeGeometry<TBufferGeometry> = WireframeGeometry<TBufferGeometry>, TARGS = TBufferGeometry> extends ThBufferGeometry<NormalBufferAttributes, T, TARGS> {
    getType(): Type<WireframeGeometry<TBufferGeometry>>;
    get type(): (string | 'WireframeGeometry') | undefined;
    get parameters(): {
        readonly geometry: TBufferGeometry;
    } | undefined;
    static ɵfac: i0.ɵɵFactoryDeclaration<ThWireframeGeometry<any, any, any>, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ThWireframeGeometry<any, any, any>, "th-wireframeGeometry", never, {}, {}, never, ["*"], false, never>;
}
