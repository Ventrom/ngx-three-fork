import { Type } from '@angular/core';
import { AudioListener, PositionalAudio } from 'three';
import { ThAudio } from './ThAudio';
import * as i0 from "@angular/core";
export declare class ThPositionalAudio<T extends PositionalAudio = PositionalAudio, TARGS = AudioListener> extends ThAudio<PannerNode, T, TARGS> {
    getType(): Type<PositionalAudio>;
    set panner(value: PannerNode);
    get panner(): PannerNode | undefined;
    static ɵfac: i0.ɵɵFactoryDeclaration<ThPositionalAudio<any, any>, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ThPositionalAudio<any, any>, "th-positionalAudio", never, { "panner": { "alias": "panner"; "required": false; }; }, {}, never, ["*"], false, never>;
}
