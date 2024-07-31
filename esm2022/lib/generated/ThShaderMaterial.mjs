/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix */
import { ChangeDetectionStrategy, Component, Input, forwardRef, } from '@angular/core';
import { ShaderMaterial, } from 'three';
import { ThMaterial } from './ThMaterial';
import * as i0 from "@angular/core";
export class ThShaderMaterial extends ThMaterial {
    getType() {
        return ShaderMaterial;
    }
    get isShaderMaterial() {
        return this._objRef?.isShaderMaterial;
    }
    set type(value) {
        if (this._objRef) {
            this._objRef.type = value;
        }
    }
    get type() {
        return this._objRef?.type;
    }
    set defines(value) {
        if (this._objRef) {
            this._objRef.defines = value;
        }
    }
    get defines() {
        return this._objRef?.defines;
    }
    set uniforms(value) {
        if (this._objRef) {
            this._objRef.uniforms = value;
        }
    }
    get uniforms() {
        return this._objRef?.uniforms;
    }
    set uniformsGroups(value) {
        if (this._objRef) {
            this._objRef.uniformsGroups = value;
        }
    }
    get uniformsGroups() {
        return this._objRef?.uniformsGroups;
    }
    set vertexShader(value) {
        if (this._objRef) {
            this._objRef.vertexShader = value;
        }
    }
    get vertexShader() {
        return this._objRef?.vertexShader;
    }
    set fragmentShader(value) {
        if (this._objRef) {
            this._objRef.fragmentShader = value;
        }
    }
    get fragmentShader() {
        return this._objRef?.fragmentShader;
    }
    set linewidth(value) {
        if (this._objRef) {
            this._objRef.linewidth = value;
        }
    }
    get linewidth() {
        return this._objRef?.linewidth;
    }
    set wireframe(value) {
        if (this._objRef) {
            this._objRef.wireframe = value;
        }
    }
    get wireframe() {
        return this._objRef?.wireframe;
    }
    set wireframeLinewidth(value) {
        if (this._objRef) {
            this._objRef.wireframeLinewidth = value;
        }
    }
    get wireframeLinewidth() {
        return this._objRef?.wireframeLinewidth;
    }
    set fog(value) {
        if (this._objRef) {
            this._objRef.fog = value;
        }
    }
    get fog() {
        return this._objRef?.fog;
    }
    set lights(value) {
        if (this._objRef) {
            this._objRef.lights = value;
        }
    }
    get lights() {
        return this._objRef?.lights;
    }
    set clipping(value) {
        if (this._objRef) {
            this._objRef.clipping = value;
        }
    }
    get clipping() {
        return this._objRef?.clipping;
    }
    set extensions(value) {
        if (this._objRef) {
            this._objRef.extensions = value;
        }
    }
    get extensions() {
        return this._objRef?.extensions;
    }
    set defaultAttributeValues(value) {
        if (this._objRef) {
            this._objRef.defaultAttributeValues = value;
        }
    }
    get defaultAttributeValues() {
        return this._objRef?.defaultAttributeValues;
    }
    set index0AttributeName(value) {
        if (this._objRef) {
            this._objRef.index0AttributeName = value;
        }
    }
    get index0AttributeName() {
        return this._objRef?.index0AttributeName;
    }
    set uniformsNeedUpdate(value) {
        if (this._objRef) {
            this._objRef.uniformsNeedUpdate = value;
        }
    }
    get uniformsNeedUpdate() {
        return this._objRef?.uniformsNeedUpdate;
    }
    set glslVersion(value) {
        if (this._objRef) {
            this._objRef.glslVersion = value;
        }
    }
    get glslVersion() {
        return this._objRef?.glslVersion;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThShaderMaterial, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.1.2", type: ThShaderMaterial, selector: "th-shaderMaterial", inputs: { type: "type", defines: "defines", uniforms: "uniforms", uniformsGroups: "uniformsGroups", vertexShader: "vertexShader", fragmentShader: "fragmentShader", linewidth: "linewidth", wireframe: "wireframe", wireframeLinewidth: "wireframeLinewidth", fog: "fog", lights: "lights", clipping: "clipping", extensions: "extensions", defaultAttributeValues: "defaultAttributeValues", index0AttributeName: "index0AttributeName", uniformsNeedUpdate: "uniformsNeedUpdate", glslVersion: "glslVersion" }, providers: [
            { provide: ThMaterial, useExisting: forwardRef(() => ThShaderMaterial) },
        ], usesInheritance: true, ngImport: i0, template: '<ng-content/>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThShaderMaterial, decorators: [{
            type: Component,
            args: [{
                    selector: 'th-shaderMaterial',
                    template: '<ng-content/>',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    providers: [
                        { provide: ThMaterial, useExisting: forwardRef(() => ThShaderMaterial) },
                    ],
                }]
        }], propDecorators: { type: [{
                type: Input
            }], defines: [{
                type: Input
            }], uniforms: [{
                type: Input
            }], uniformsGroups: [{
                type: Input
            }], vertexShader: [{
                type: Input
            }], fragmentShader: [{
                type: Input
            }], linewidth: [{
                type: Input
            }], wireframe: [{
                type: Input
            }], wireframeLinewidth: [{
                type: Input
            }], fog: [{
                type: Input
            }], lights: [{
                type: Input
            }], clipping: [{
                type: Input
            }], extensions: [{
                type: Input
            }], defaultAttributeValues: [{
                type: Input
            }], index0AttributeName: [{
                type: Input
            }], uniformsNeedUpdate: [{
                type: Input
            }], glslVersion: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGhTaGFkZXJNYXRlcmlhbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC10aHJlZS9zcmMvbGliL2dlbmVyYXRlZC9UaFNoYWRlck1hdGVyaWFsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHlEQUF5RDtBQUN6RCx5Q0FBeUM7QUFDekMsK0ZBQStGO0FBQy9GLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULEtBQUssRUFFTCxVQUFVLEdBQ1gsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUdMLGNBQWMsR0FHZixNQUFNLE9BQU8sQ0FBQztBQUNmLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxjQUFjLENBQUM7O0FBVTFDLE1BQU0sT0FBTyxnQkFHWCxTQUFRLFVBQW9CO0lBQ3JCLE9BQU87UUFDWixPQUFPLGNBQWMsQ0FBQztJQUN4QixDQUFDO0lBRUQsSUFBVyxnQkFBZ0I7UUFDekIsT0FBTyxJQUFJLENBQUMsT0FBTyxFQUFFLGdCQUFnQixDQUFDO0lBQ3hDLENBQUM7SUFDRCxJQUNXLElBQUksQ0FBQyxLQUFhO1FBQzNCLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ2pCLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQztRQUM1QixDQUFDO0lBQ0gsQ0FBQztJQUVELElBQVcsSUFBSTtRQUNiLE9BQU8sSUFBSSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUM7SUFDNUIsQ0FBQztJQUNELElBQ1csT0FBTyxDQUFDLEtBQTZCO1FBQzlDLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ2pCLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztRQUMvQixDQUFDO0lBQ0gsQ0FBQztJQUVELElBQVcsT0FBTztRQUNoQixPQUFPLElBQUksQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDO0lBQy9CLENBQUM7SUFD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RHBCLEtBQUs7Z0JBbUJLLHNCQUFzQjtzQkFEaEMsS0FBSztnQkFXSyxtQkFBbUI7c0JBRDdCLEtBQUs7Z0JBV0ssa0JBQWtCO3NCQUQ1QixLQUFLO2dCQVdLLFdBQVc7c0JBRHJCLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBAdHlwZXNjcmlwdC1lc2xpbnQvbmFtaW5nLWNvbnZlbnRpb24gKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vLXVuZGVyc2NvcmUtZGFuZ2xlICovXG4vKiBlc2xpbnQtZGlzYWJsZSBAYW5ndWxhci1lc2xpbnQvY29tcG9uZW50LXNlbGVjdG9yLCBAYW5ndWxhci1lc2xpbnQvY29tcG9uZW50LWNsYXNzLXN1ZmZpeCAqL1xuaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENvbXBvbmVudCxcbiAgSW5wdXQsXG4gIFR5cGUsXG4gIGZvcndhcmRSZWYsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgR0xTTFZlcnNpb24sXG4gIElVbmlmb3JtLFxuICBTaGFkZXJNYXRlcmlhbCxcbiAgU2hhZGVyTWF0ZXJpYWxQYXJhbWV0ZXJzLFxuICBVbmlmb3Jtc0dyb3VwLFxufSBmcm9tICd0aHJlZSc7XG5pbXBvcnQgeyBUaE1hdGVyaWFsIH0gZnJvbSAnLi9UaE1hdGVyaWFsJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndGgtc2hhZGVyTWF0ZXJpYWwnLFxuICB0ZW1wbGF0ZTogJzxuZy1jb250ZW50Lz4nLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgcHJvdmlkZXJzOiBbXG4gICAgeyBwcm92aWRlOiBUaE1hdGVyaWFsLCB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBUaFNoYWRlck1hdGVyaWFsKSB9LFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBUaFNoYWRlck1hdGVyaWFsPFxuICBUIGV4dGVuZHMgU2hhZGVyTWF0ZXJpYWwgPSBTaGFkZXJNYXRlcmlhbCxcbiAgVEFSR1MgPSAvKiBwYXJhbWV0ZXJzPyAqLyBTaGFkZXJNYXRlcmlhbFBhcmFtZXRlcnMsXG4+IGV4dGVuZHMgVGhNYXRlcmlhbDxULCBUQVJHUz4ge1xuICBwdWJsaWMgZ2V0VHlwZSgpOiBUeXBlPFNoYWRlck1hdGVyaWFsPiB7XG4gICAgcmV0dXJuIFNoYWRlck1hdGVyaWFsO1xuICB9XG5cbiAgcHVibGljIGdldCBpc1NoYWRlck1hdGVyaWFsKCk6IHRydWUgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9vYmpSZWY/LmlzU2hhZGVyTWF0ZXJpYWw7XG4gIH1cbiAgQElucHV0KClcbiAgcHVibGljIHNldCB0eXBlKHZhbHVlOiBzdHJpbmcpIHtcbiAgICBpZiAodGhpcy5fb2JqUmVmKSB7XG4gICAgICB0aGlzLl9vYmpSZWYudHlwZSA9IHZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBnZXQgdHlwZSgpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9vYmpSZWY/LnR5cGU7XG4gIH1cbiAgQElucHV0KClcbiAgcHVibGljIHNldCBkZWZpbmVzKHZhbHVlOiB7IFtrZXk6IHN0cmluZ106IGFueSB9KSB7XG4gICAgaWYgKHRoaXMuX29ialJlZikge1xuICAgICAgdGhpcy5fb2JqUmVmLmRlZmluZXMgPSB2YWx1ZTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgZ2V0IGRlZmluZXMoKTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX29ialJlZj8uZGVmaW5lcztcbiAgfVxuICBASW5wdXQoKVxuICBwdWJsaWMgc2V0IHVuaWZvcm1zKHZhbHVlOiB7IFt1bmlmb3JtOiBzdHJpbmddOiBJVW5pZm9ybSB9KSB7XG4gICAgaWYgKHRoaXMuX29ialJlZikge1xuICAgICAgdGhpcy5fb2JqUmVmLnVuaWZvcm1zID0gdmFsdWU7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGdldCB1bmlmb3JtcygpOiB7IFt1bmlmb3JtOiBzdHJpbmddOiBJVW5pZm9ybSB9IHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fb2JqUmVmPy51bmlmb3JtcztcbiAgfVxuICBASW5wdXQoKVxuICBwdWJsaWMgc2V0IHVuaWZvcm1zR3JvdXBzKHZhbHVlOiBVbmlmb3Jtc0dyb3VwW10pIHtcbiAgICBpZiAodGhpcy5fb2JqUmVmKSB7XG4gICAgICB0aGlzLl9vYmpSZWYudW5pZm9ybXNHcm91cHMgPSB2YWx1ZTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgZ2V0IHVuaWZvcm1zR3JvdXBzKCk6IFVuaWZvcm1zR3JvdXBbXSB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX29ialJlZj8udW5pZm9ybXNHcm91cHM7XG4gIH1cbiAgQElucHV0KClcbiAgcHVibGljIHNldCB2ZXJ0ZXhTaGFkZXIodmFsdWU6IHN0cmluZykge1xuICAgIGlmICh0aGlzLl9vYmpSZWYpIHtcbiAgICAgIHRoaXMuX29ialJlZi52ZXJ0ZXhTaGFkZXIgPSB2YWx1ZTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgZ2V0IHZlcnRleFNoYWRlcigpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9vYmpSZWY/LnZlcnRleFNoYWRlcjtcbiAgfVxuICBASW5wdXQoKVxuICBwdWJsaWMgc2V0IGZyYWdtZW50U2hhZGVyKHZhbHVlOiBzdHJpbmcpIHtcbiAgICBpZiAodGhpcy5fb2JqUmVmKSB7XG4gICAgICB0aGlzLl9vYmpSZWYuZnJhZ21lbnRTaGFkZXIgPSB2YWx1ZTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgZ2V0IGZyYWdtZW50U2hhZGVyKCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX29ialJlZj8uZnJhZ21lbnRTaGFkZXI7XG4gIH1cbiAgQElucHV0KClcbiAgcHVibGljIHNldCBsaW5ld2lkdGgodmFsdWU6IG51bWJlcikge1xuICAgIGlmICh0aGlzLl9vYmpSZWYpIHtcbiAgICAgIHRoaXMuX29ialJlZi5saW5ld2lkdGggPSB2YWx1ZTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgZ2V0IGxpbmV3aWR0aCgpOiBudW1iZXIgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9vYmpSZWY/LmxpbmV3aWR0aDtcbiAgfVxuICBASW5wdXQoKVxuICBwdWJsaWMgc2V0IHdpcmVmcmFtZSh2YWx1ZTogYm9vbGVhbikge1xuICAgIGlmICh0aGlzLl9vYmpSZWYpIHtcbiAgICAgIHRoaXMuX29ialJlZi53aXJlZnJhbWUgPSB2YWx1ZTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgZ2V0IHdpcmVmcmFtZSgpOiBib29sZWFuIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fb2JqUmVmPy53aXJlZnJhbWU7XG4gIH1cbiAgQElucHV0KClcbiAgcHVibGljIHNldCB3aXJlZnJhbWVMaW5ld2lkdGgodmFsdWU6IG51bWJlcikge1xuICAgIGlmICh0aGlzLl9vYmpSZWYpIHtcbiAgICAgIHRoaXMuX29ialJlZi53aXJlZnJhbWVMaW5ld2lkdGggPSB2YWx1ZTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgZ2V0IHdpcmVmcmFtZUxpbmV3aWR0aCgpOiBudW1iZXIgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9vYmpSZWY/LndpcmVmcmFtZUxpbmV3aWR0aDtcbiAgfVxuICBASW5wdXQoKVxuICBwdWJsaWMgc2V0IGZvZyh2YWx1ZTogYm9vbGVhbikge1xuICAgIGlmICh0aGlzLl9vYmpSZWYpIHtcbiAgICAgIHRoaXMuX29ialJlZi5mb2cgPSB2YWx1ZTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgZ2V0IGZvZygpOiBib29sZWFuIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fb2JqUmVmPy5mb2c7XG4gIH1cbiAgQElucHV0KClcbiAgcHVibGljIHNldCBsaWdodHModmFsdWU6IGJvb2xlYW4pIHtcbiAgICBpZiAodGhpcy5fb2JqUmVmKSB7XG4gICAgICB0aGlzLl9vYmpSZWYubGlnaHRzID0gdmFsdWU7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGdldCBsaWdodHMoKTogYm9vbGVhbiB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX29ialJlZj8ubGlnaHRzO1xuICB9XG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzZXQgY2xpcHBpbmcodmFsdWU6IGJvb2xlYW4pIHtcbiAgICBpZiAodGhpcy5fb2JqUmVmKSB7XG4gICAgICB0aGlzLl9vYmpSZWYuY2xpcHBpbmcgPSB2YWx1ZTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgZ2V0IGNsaXBwaW5nKCk6IGJvb2xlYW4gfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9vYmpSZWY/LmNsaXBwaW5nO1xuICB9XG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzZXQgZXh0ZW5zaW9ucyh2YWx1ZToge1xuICAgIGNsaXBDdWxsRGlzdGFuY2U6IGJvb2xlYW47XG4gICAgbXVsdGlEcmF3OiBib29sZWFuO1xuICB9KSB7XG4gICAgaWYgKHRoaXMuX29ialJlZikge1xuICAgICAgdGhpcy5fb2JqUmVmLmV4dGVuc2lvbnMgPSB2YWx1ZTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgZ2V0IGV4dGVuc2lvbnMoKTpcbiAgICB8IHtcbiAgICAgICAgY2xpcEN1bGxEaXN0YW5jZTogYm9vbGVhbjtcbiAgICAgICAgbXVsdGlEcmF3OiBib29sZWFuO1xuICAgICAgfVxuICAgIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fb2JqUmVmPy5leHRlbnNpb25zO1xuICB9XG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzZXQgZGVmYXVsdEF0dHJpYnV0ZVZhbHVlcyh2YWx1ZTogYW55KSB7XG4gICAgaWYgKHRoaXMuX29ialJlZikge1xuICAgICAgdGhpcy5fb2JqUmVmLmRlZmF1bHRBdHRyaWJ1dGVWYWx1ZXMgPSB2YWx1ZTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgZ2V0IGRlZmF1bHRBdHRyaWJ1dGVWYWx1ZXMoKTogYW55IHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fb2JqUmVmPy5kZWZhdWx0QXR0cmlidXRlVmFsdWVzO1xuICB9XG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzZXQgaW5kZXgwQXR0cmlidXRlTmFtZSh2YWx1ZTogc3RyaW5nIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHRoaXMuX29ialJlZikge1xuICAgICAgdGhpcy5fb2JqUmVmLmluZGV4MEF0dHJpYnV0ZU5hbWUgPSB2YWx1ZTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgZ2V0IGluZGV4MEF0dHJpYnV0ZU5hbWUoKTogKHN0cmluZyB8IHVuZGVmaW5lZCkgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9vYmpSZWY/LmluZGV4MEF0dHJpYnV0ZU5hbWU7XG4gIH1cbiAgQElucHV0KClcbiAgcHVibGljIHNldCB1bmlmb3Jtc05lZWRVcGRhdGUodmFsdWU6IGJvb2xlYW4pIHtcbiAgICBpZiAodGhpcy5fb2JqUmVmKSB7XG4gICAgICB0aGlzLl9vYmpSZWYudW5pZm9ybXNOZWVkVXBkYXRlID0gdmFsdWU7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGdldCB1bmlmb3Jtc05lZWRVcGRhdGUoKTogYm9vbGVhbiB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX29ialJlZj8udW5pZm9ybXNOZWVkVXBkYXRlO1xuICB9XG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzZXQgZ2xzbFZlcnNpb24odmFsdWU6IEdMU0xWZXJzaW9uIHwgbnVsbCkge1xuICAgIGlmICh0aGlzLl9vYmpSZWYpIHtcbiAgICAgIHRoaXMuX29ialJlZi5nbHNsVmVyc2lvbiA9IHZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBnZXQgZ2xzbFZlcnNpb24oKTogKEdMU0xWZXJzaW9uIHwgbnVsbCkgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9vYmpSZWY/Lmdsc2xWZXJzaW9uO1xuICB9XG59XG4iXX0=