import { Type } from '@angular/core';
import { BufferGeometry, Object3DEventMap, Sprite, SpriteMaterial, Vector2 } from 'three';
import { ThObject3D } from './ThObject3D';
import * as i0 from "@angular/core";
export declare class ThSprite<TEventMap extends Object3DEventMap = Object3DEventMap, T extends Sprite<TEventMap> = Sprite<TEventMap>, TARGS = SpriteMaterial> extends ThObject3D<TEventMap, T, TARGS> {
    getType(): Type<Sprite<TEventMap>>;
    get isSprite(): true | undefined;
    get type(): (string | 'Sprite') | undefined;
    set castShadow(value: false);
    get castShadow(): false | undefined;
    set geometry(value: BufferGeometry);
    get geometry(): BufferGeometry | undefined;
    set material(value: SpriteMaterial);
    get material(): SpriteMaterial | undefined;
    set center(value: Vector2 | [x: number, y: number]);
    get center(): Vector2 | undefined;
    static ɵfac: i0.ɵɵFactoryDeclaration<ThSprite<any, any, any>, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ThSprite<any, any, any>, "th-sprite", never, { "castShadow": { "alias": "castShadow"; "required": false; }; "geometry": { "alias": "geometry"; "required": false; }; "material": { "alias": "material"; "required": false; }; "center": { "alias": "center"; "required": false; }; }, {}, never, ["*"], false, never>;
}
