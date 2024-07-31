/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix */
import { ChangeDetectionStrategy, Component, Input, forwardRef, } from '@angular/core';
import { Audio } from 'three';
import { ThObject3D } from './ThObject3D';
import * as i0 from "@angular/core";
export class ThAudio extends ThObject3D {
    getType() {
        return Audio;
    }
    get type() {
        return this._objRef?.type;
    }
    set listener(value) {
        if (this._objRef) {
            this._objRef.listener = value;
        }
    }
    get listener() {
        return this._objRef?.listener;
    }
    set context(value) {
        if (this._objRef) {
            this._objRef.context = value;
        }
    }
    get context() {
        return this._objRef?.context;
    }
    set gain(value) {
        if (this._objRef) {
            this._objRef.gain = value;
        }
    }
    get gain() {
        return this._objRef?.gain;
    }
    set autoplay(value) {
        if (this._objRef) {
            this._objRef.autoplay = value;
        }
    }
    get autoplay() {
        return this._objRef?.autoplay;
    }
    set buffer(value) {
        if (this._objRef) {
            this._objRef.buffer = value;
        }
    }
    get buffer() {
        return this._objRef?.buffer;
    }
    set detune(value) {
        if (this._objRef) {
            this._objRef.detune = value;
        }
    }
    get detune() {
        return this._objRef?.detune;
    }
    set loop(value) {
        if (this._objRef) {
            this._objRef.loop = value;
        }
    }
    get loop() {
        return this._objRef?.loop;
    }
    set loopStart(value) {
        if (this._objRef) {
            this._objRef.loopStart = value;
        }
    }
    get loopStart() {
        return this._objRef?.loopStart;
    }
    set loopEnd(value) {
        if (this._objRef) {
            this._objRef.loopEnd = value;
        }
    }
    get loopEnd() {
        return this._objRef?.loopEnd;
    }
    set offset(value) {
        if (this._objRef) {
            this._objRef.offset = value;
        }
    }
    get offset() {
        return this._objRef?.offset;
    }
    set duration(value) {
        if (this._objRef) {
            this._objRef.duration = value;
        }
    }
    get duration() {
        return this._objRef?.duration;
    }
    set playbackRate(value) {
        if (this._objRef) {
            this._objRef.playbackRate = value;
        }
    }
    get playbackRate() {
        return this._objRef?.playbackRate;
    }
    set isPlaying(value) {
        if (this._objRef) {
            this._objRef.isPlaying = value;
        }
    }
    get isPlaying() {
        return this._objRef?.isPlaying;
    }
    set hasPlaybackControl(value) {
        if (this._objRef) {
            this._objRef.hasPlaybackControl = value;
        }
    }
    get hasPlaybackControl() {
        return this._objRef?.hasPlaybackControl;
    }
    set sourceType(value) {
        if (this._objRef) {
            this._objRef.sourceType = value;
        }
    }
    get sourceType() {
        return this._objRef?.sourceType;
    }
    set source(value) {
        if (this._objRef) {
            this._objRef.source = value;
        }
    }
    get source() {
        return this._objRef?.source;
    }
    set filters(value) {
        if (this._objRef) {
            this._objRef.filters = value;
        }
    }
    get filters() {
        return this._objRef?.filters;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThAudio, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.1.2", type: ThAudio, selector: "th-audio", inputs: { listener: "listener", context: "context", gain: "gain", autoplay: "autoplay", buffer: "buffer", detune: "detune", loop: "loop", loopStart: "loopStart", loopEnd: "loopEnd", offset: "offset", duration: "duration", playbackRate: "playbackRate", isPlaying: "isPlaying", hasPlaybackControl: "hasPlaybackControl", sourceType: "sourceType", source: "source", filters: "filters" }, providers: [{ provide: ThObject3D, useExisting: forwardRef(() => ThAudio) }], usesInheritance: true, ngImport: i0, template: '<ng-content/>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThAudio, decorators: [{
            type: Component,
            args: [{
                    selector: 'th-audio',
                    template: '<ng-content/>',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    providers: [{ provide: ThObject3D, useExisting: forwardRef(() => ThAudio) }],
                }]
        }], propDecorators: { listener: [{
                type: Input
            }], context: [{
                type: Input
            }], gain: [{
                type: Input
            }], autoplay: [{
                type: Input
            }], buffer: [{
                type: Input
            }], detune: [{
                type: Input
            }], loop: [{
                type: Input
            }], loopStart: [{
                type: Input
            }], loopEnd: [{
                type: Input
            }], offset: [{
                type: Input
            }], duration: [{
                type: Input
            }], playbackRate: [{
                type: Input
            }], isPlaying: [{
                type: Input
            }], hasPlaybackControl: [{
                type: Input
            }], sourceType: [{
                type: Input
            }], source: [{
                type: Input
            }], filters: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGhBdWRpby5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC10aHJlZS9zcmMvbGliL2dlbmVyYXRlZC9UaEF1ZGlvLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHlEQUF5RDtBQUN6RCx5Q0FBeUM7QUFDekMsK0ZBQStGO0FBQy9GLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULEtBQUssRUFFTCxVQUFVLEdBQ1gsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLEtBQUssRUFBaUQsTUFBTSxPQUFPLENBQUM7QUFDN0UsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGNBQWMsQ0FBQzs7QUFRMUMsTUFBTSxPQUFPLE9BSVgsU0FBUSxVQUFzQztJQUN2QyxPQUFPO1FBQ1osT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDO0lBRUQsSUFBVyxJQUFJO1FBQ2IsT0FBTyxJQUFJLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQztJQUM1QixDQUFDO0lBQ0QsSUFDVyxRQUFRLENBQUMsS0FBb0I7UUFDdEMsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDakIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO1FBQ2hDLENBQUM7SUFDSCxDQUFDO0lBRUQsSUFBVyxRQUFRO1FBQ2pCLE9BQU8sSUFBSSxDQUFDLE9BQU8sRUFBRSxRQUFRLENBQUM7SUFDaEMsQ0FBQztJQUNELElBQ1csT0FBTyxDQUFDLEtBQW1CO1FBQ3BDLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ2pCLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztRQUMvQixDQUFDO0lBQ0gsQ0FBQztJQUVELElBQVcsT0FBTztRQUNoQixPQUFPLElBQUksQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDO0lBQy9CLENBQUM7SUFDRCxJQUNXLElBQUksQ0FBQyxLQUFl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c0JBRGhCLEtBQUs7Z0JBV0ssT0FBTztzQkFEakIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIEB0eXBlc2NyaXB0LWVzbGludC9uYW1pbmctY29udmVudGlvbiAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tdW5kZXJzY29yZS1kYW5nbGUgKi9cbi8qIGVzbGludC1kaXNhYmxlIEBhbmd1bGFyLWVzbGludC9jb21wb25lbnQtc2VsZWN0b3IsIEBhbmd1bGFyLWVzbGludC9jb21wb25lbnQtY2xhc3Mtc3VmZml4ICovXG5pbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ29tcG9uZW50LFxuICBJbnB1dCxcbiAgVHlwZSxcbiAgZm9yd2FyZFJlZixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBdWRpbywgQXVkaW9Db250ZXh0LCBBdWRpb0xpc3RlbmVyLCBPYmplY3QzREV2ZW50TWFwIH0gZnJvbSAndGhyZWUnO1xuaW1wb3J0IHsgVGhPYmplY3QzRCB9IGZyb20gJy4vVGhPYmplY3QzRCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3RoLWF1ZGlvJyxcbiAgdGVtcGxhdGU6ICc8bmctY29udGVudC8+JyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHByb3ZpZGVyczogW3sgcHJvdmlkZTogVGhPYmplY3QzRCwgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gVGhBdWRpbykgfV0sXG59KVxuZXhwb3J0IGNsYXNzIFRoQXVkaW88XG4gIE5vZGVUeXBlIGV4dGVuZHMgQXVkaW9Ob2RlID0gR2Fpbk5vZGUsXG4gIFQgZXh0ZW5kcyBBdWRpbzxOb2RlVHlwZT4gPSBBdWRpbzxOb2RlVHlwZT4sXG4gIFRBUkdTID0gLyogbGlzdGVuZXIgKi8gQXVkaW9MaXN0ZW5lcixcbj4gZXh0ZW5kcyBUaE9iamVjdDNEPE9iamVjdDNERXZlbnRNYXAsIFQsIFRBUkdTPiB7XG4gIHB1YmxpYyBnZXRUeXBlKCk6IFR5cGU8QXVkaW88Tm9kZVR5cGU+PiB7XG4gICAgcmV0dXJuIEF1ZGlvO1xuICB9XG5cbiAgcHVibGljIGdldCB0eXBlKCk6IChzdHJpbmcgfCAnQXVkaW8nKSB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX29ialJlZj8udHlwZTtcbiAgfVxuICBASW5wdXQoKVxuICBwdWJsaWMgc2V0IGxpc3RlbmVyKHZhbHVlOiBBdWRpb0xpc3RlbmVyKSB7XG4gICAgaWYgKHRoaXMuX29ialJlZikge1xuICAgICAgdGhpcy5fb2JqUmVmLmxpc3RlbmVyID0gdmFsdWU7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGdldCBsaXN0ZW5lcigpOiBBdWRpb0xpc3RlbmVyIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fb2JqUmVmPy5saXN0ZW5lcjtcbiAgfVxuICBASW5wdXQoKVxuICBwdWJsaWMgc2V0IGNvbnRleHQodmFsdWU6IEF1ZGlvQ29udGV4dCkge1xuICAgIGlmICh0aGlzLl9vYmpSZWYpIHtcbiAgICAgIHRoaXMuX29ialJlZi5jb250ZXh0ID0gdmFsdWU7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGdldCBjb250ZXh0KCk6IEF1ZGlvQ29udGV4dCB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX29ialJlZj8uY29udGV4dDtcbiAgfVxuICBASW5wdXQoKVxuICBwdWJsaWMgc2V0IGdhaW4odmFsdWU6IEdhaW5Ob2RlKSB7XG4gICAgaWYgKHRoaXMuX29ialJlZikge1xuICAgICAgdGhpcy5fb2JqUmVmLmdhaW4gPSB2YWx1ZTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgZ2V0IGdhaW4oKTogR2Fpbk5vZGUgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9vYmpSZWY/LmdhaW47XG4gIH1cbiAgQElucHV0KClcbiAgcHVibGljIHNldCBhdXRvcGxheSh2YWx1ZTogYm9vbGVhbikge1xuICAgIGlmICh0aGlzLl9vYmpSZWYpIHtcbiAgICAgIHRoaXMuX29ialJlZi5hdXRvcGxheSA9IHZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBnZXQgYXV0b3BsYXkoKTogYm9vbGVhbiB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX29ialJlZj8uYXV0b3BsYXk7XG4gIH1cbiAgQElucHV0KClcbiAgcHVibGljIHNldCBidWZmZXIodmFsdWU6IEF1ZGlvQnVmZmVyIHwgbnVsbCkge1xuICAgIGlmICh0aGlzLl9vYmpSZWYpIHtcbiAgICAgIHRoaXMuX29ialJlZi5idWZmZXIgPSB2YWx1ZTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgZ2V0IGJ1ZmZlcigpOiAoQXVkaW9CdWZmZXIgfCBudWxsKSB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX29ialJlZj8uYnVmZmVyO1xuICB9XG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzZXQgZGV0dW5lKHZhbHVlOiBudW1iZXIpIHtcbiAgICBpZiAodGhpcy5fb2JqUmVmKSB7XG4gICAgICB0aGlzLl9vYmpSZWYuZGV0dW5lID0gdmFsdWU7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGdldCBkZXR1bmUoKTogbnVtYmVyIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fb2JqUmVmPy5kZXR1bmU7XG4gIH1cbiAgQElucHV0KClcbiAgcHVibGljIHNldCBsb29wKHZhbHVlOiBib29sZWFuKSB7XG4gICAgaWYgKHRoaXMuX29ialJlZikge1xuICAgICAgdGhpcy5fb2JqUmVmLmxvb3AgPSB2YWx1ZTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgZ2V0IGxvb3AoKTogYm9vbGVhbiB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX29ialJlZj8ubG9vcDtcbiAgfVxuICBASW5wdXQoKVxuICBwdWJsaWMgc2V0IGxvb3BTdGFydCh2YWx1ZTogbnVtYmVyKSB7XG4gICAgaWYgKHRoaXMuX29ialJlZikge1xuICAgICAgdGhpcy5fb2JqUmVmLmxvb3BTdGFydCA9IHZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBnZXQgbG9vcFN0YXJ0KCk6IG51bWJlciB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX29ialJlZj8ubG9vcFN0YXJ0O1xuICB9XG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzZXQgbG9vcEVuZCh2YWx1ZTogbnVtYmVyKSB7XG4gICAgaWYgKHRoaXMuX29ialJlZikge1xuICAgICAgdGhpcy5fb2JqUmVmLmxvb3BFbmQgPSB2YWx1ZTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgZ2V0IGxvb3BFbmQoKTogbnVtYmVyIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fb2JqUmVmPy5sb29wRW5kO1xuICB9XG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzZXQgb2Zmc2V0KHZhbHVlOiBudW1iZXIpIHtcbiAgICBpZiAodGhpcy5fb2JqUmVmKSB7XG4gICAgICB0aGlzLl9vYmpSZWYub2Zmc2V0ID0gdmFsdWU7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGdldCBvZmZzZXQoKTogbnVtYmVyIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fb2JqUmVmPy5vZmZzZXQ7XG4gIH1cbiAgQElucHV0KClcbiAgcHVibGljIHNldCBkdXJhdGlvbih2YWx1ZTogbnVtYmVyIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHRoaXMuX29ialJlZikge1xuICAgICAgdGhpcy5fb2JqUmVmLmR1cmF0aW9uID0gdmFsdWU7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGdldCBkdXJhdGlvbigpOiAobnVtYmVyIHwgdW5kZWZpbmVkKSB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX29ialJlZj8uZHVyYXRpb247XG4gIH1cbiAgQElucHV0KClcbiAgcHVibGljIHNldCBwbGF5YmFja1JhdGUodmFsdWU6IG51bWJlcikge1xuICAgIGlmICh0aGlzLl9vYmpSZWYpIHtcbiAgICAgIHRoaXMuX29ialJlZi5wbGF5YmFja1JhdGUgPSB2YWx1ZTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgZ2V0IHBsYXliYWNrUmF0ZSgpOiBudW1iZXIgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9vYmpSZWY/LnBsYXliYWNrUmF0ZTtcbiAgfVxuICBASW5wdXQoKVxuICBwdWJsaWMgc2V0IGlzUGxheWluZyh2YWx1ZTogYm9vbGVhbikge1xuICAgIGlmICh0aGlzLl9vYmpSZWYpIHtcbiAgICAgIHRoaXMuX29ialJlZi5pc1BsYXlpbmcgPSB2YWx1ZTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgZ2V0IGlzUGxheWluZygpOiBib29sZWFuIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fb2JqUmVmPy5pc1BsYXlpbmc7XG4gIH1cbiAgQElucHV0KClcbiAgcHVibGljIHNldCBoYXNQbGF5YmFja0NvbnRyb2wodmFsdWU6IGJvb2xlYW4pIHtcbiAgICBpZiAodGhpcy5fb2JqUmVmKSB7XG4gICAgICB0aGlzLl9vYmpSZWYuaGFzUGxheWJhY2tDb250cm9sID0gdmFsdWU7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGdldCBoYXNQbGF5YmFja0NvbnRyb2woKTogYm9vbGVhbiB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX29ialJlZj8uaGFzUGxheWJhY2tDb250cm9sO1xuICB9XG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzZXQgc291cmNlVHlwZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgaWYgKHRoaXMuX29ialJlZikge1xuICAgICAgdGhpcy5fb2JqUmVmLnNvdXJjZVR5cGUgPSB2YWx1ZTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgZ2V0IHNvdXJjZVR5cGUoKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fb2JqUmVmPy5zb3VyY2VUeXBlO1xuICB9XG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzZXQgc291cmNlKHZhbHVlOiBBdWRpb1NjaGVkdWxlZFNvdXJjZU5vZGUgfCBudWxsKSB7XG4gICAgaWYgKHRoaXMuX29ialJlZikge1xuICAgICAgdGhpcy5fb2JqUmVmLnNvdXJjZSA9IHZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBnZXQgc291cmNlKCk6IChBdWRpb1NjaGVkdWxlZFNvdXJjZU5vZGUgfCBudWxsKSB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX29ialJlZj8uc291cmNlO1xuICB9XG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzZXQgZmlsdGVycyh2YWx1ZTogQXVkaW9Ob2RlW10pIHtcbiAgICBpZiAodGhpcy5fb2JqUmVmKSB7XG4gICAgICB0aGlzLl9vYmpSZWYuZmlsdGVycyA9IHZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBnZXQgZmlsdGVycygpOiBBdWRpb05vZGVbXSB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX29ialJlZj8uZmlsdGVycztcbiAgfVxufVxuIl19