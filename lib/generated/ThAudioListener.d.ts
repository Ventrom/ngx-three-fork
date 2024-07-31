import { Type } from '@angular/core';
import { AudioListener, Object3DEventMap } from 'three';
import { ThObject3D } from './ThObject3D';
import * as i0 from "@angular/core";
export declare class ThAudioListener<T extends AudioListener = AudioListener, TARGS = []> extends ThObject3D<Object3DEventMap, T, TARGS> {
    getType(): Type<AudioListener>;
    get type(): (string | 'AudioListener') | undefined;
    set context(value: AudioContext);
    get context(): AudioContext | undefined;
    set gain(value: GainNode);
    get gain(): GainNode | undefined;
    set filter(value: AudioNode);
    get filter(): AudioNode | undefined;
    set timeDelta(value: number);
    get timeDelta(): number | undefined;
    static ɵfac: i0.ɵɵFactoryDeclaration<ThAudioListener<any, any>, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ThAudioListener<any, any>, "th-audioListener", never, { "context": { "alias": "context"; "required": false; }; "gain": { "alias": "gain"; "required": false; }; "filter": { "alias": "filter"; "required": false; }; "timeDelta": { "alias": "timeDelta"; "required": false; }; }, {}, never, ["*"], false, never>;
}
