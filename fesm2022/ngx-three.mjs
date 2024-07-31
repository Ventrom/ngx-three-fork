import * as i0 from '@angular/core';
import { EventEmitter, Component, Input, Output, ChangeDetectionStrategy, SkipSelf, InjectionToken, inject, Injectable, Directive, Host, forwardRef, Injector, ContentChild, Optional, isDevMode, ElementRef, Inject, ContentChildren, NgModule, Pipe, ViewChild, Self } from '@angular/core';
import * as THREE from 'three';
import { Object3D, Raycaster, Camera, Scene, WebGLRenderer, Clock, Vector4, WebGLRenderTarget, AmbientLight, PerspectiveCamera, ArrayCamera, ArrowHelper, Audio, AudioListener, Line, LineSegments, AxesHelper, Mesh, BatchedMesh, Bone, Box3Helper, BufferGeometry, BoxGeometry, BoxHelper, CameraHelper, Texture, CanvasTexture, CapsuleGeometry, CircleGeometry, CompressedTexture, CompressedArrayTexture, CompressedCubeTexture, CylinderGeometry, ConeGeometry, CubeCamera, CubeTexture, Data3DTexture, DataArrayTexture, DataTexture, DepthTexture, DirectionalLight, DirectionalLightHelper, PolyhedronGeometry, DodecahedronGeometry, EdgesGeometry, ExtrudeGeometry, FramebufferTexture, GridHelper, Group, HemisphereLight, HemisphereLightHelper, IcosahedronGeometry, InstancedBufferGeometry, InstancedMesh, LOD, LatheGeometry, LightProbe, Material, LineBasicMaterial, LineDashedMaterial, LineLoop, MeshBasicMaterial, MeshDepthMaterial, MeshDistanceMaterial, MeshLambertMaterial, MeshMatcapMaterial, MeshNormalMaterial, MeshPhongMaterial, MeshStandardMaterial, MeshPhysicalMaterial, MeshToonMaterial, OctahedronGeometry, OrthographicCamera, PlaneGeometry, PlaneHelper, PointLight, PointLightHelper, Points, PointsMaterial, PolarGridHelper, PositionalAudio, ShaderMaterial, RawShaderMaterial, RectAreaLight, RingGeometry, ShadowMaterial, ShapeGeometry, SkeletonHelper, SkinnedMesh, SphereGeometry, SpotLight, SpotLightHelper, Sprite, SpriteMaterial, StereoCamera, TetrahedronGeometry, TorusGeometry, TorusKnotGeometry, TubeGeometry, VideoTexture, WireframeGeometry, CubeTextureLoader, TextureLoader, Color, Fog, Vector2, Vector3, DoubleSide, Plane } from 'three';
import { ReplaySubject, Subject, takeUntil } from 'rxjs';
import { AfterimagePass } from 'three/examples/jsm/postprocessing/AfterimagePass.js';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { CSS3DRenderer, CSS3DObject } from 'three/examples/jsm/renderers/CSS3DRenderer.js';
import { CSS2DRenderer, CSS2DObject } from 'three/examples/jsm/renderers/CSS2DRenderer.js';
import { Pass } from 'three/examples/jsm/postprocessing/Pass.js';
import { ArcballControls } from 'three/examples/jsm/controls/ArcballControls.js';
import * as i3 from '@angular/common';
import { CommonModule } from '@angular/common';
import { BloomPass } from 'three/examples/jsm/postprocessing/BloomPass.js';
import { BokehPass } from 'three/examples/jsm/postprocessing/BokehPass.js';
import { BoxLineGeometry } from 'three/examples/jsm/geometries/BoxLineGeometry.js';
import { ClearMaskPass, MaskPass } from 'three/examples/jsm/postprocessing/MaskPass.js';
import { ClearPass } from 'three/examples/jsm/postprocessing/ClearPass.js';
import { ConvexGeometry } from 'three/examples/jsm/geometries/ConvexGeometry.js';
import { CubeTexturePass } from 'three/examples/jsm/postprocessing/CubeTexturePass.js';
import { DecalGeometry } from 'three/examples/jsm/geometries/DecalGeometry.js';
import { DotScreenPass } from 'three/examples/jsm/postprocessing/DotScreenPass.js';
import { DragControls } from 'three/examples/jsm/controls/DragControls.js';
import { FilmPass } from 'three/examples/jsm/postprocessing/FilmPass.js';
import { FirstPersonControls } from 'three/examples/jsm/controls/FirstPersonControls.js';
import { FlyControls } from 'three/examples/jsm/controls/FlyControls.js';
import { GlitchPass } from 'three/examples/jsm/postprocessing/GlitchPass.js';
import { HalftonePass } from 'three/examples/jsm/postprocessing/HalftonePass.js';
import { LUTPass } from 'three/examples/jsm/postprocessing/LUTPass.js';
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass.js';
import { MapControls } from 'three/examples/jsm/controls/MapControls.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { OutlinePass } from 'three/examples/jsm/postprocessing/OutlinePass.js';
import { OutputPass } from 'three/examples/jsm/postprocessing/OutputPass.js';
import { ParametricGeometry } from 'three/examples/jsm/geometries/ParametricGeometry.js';
import { PointerLockControls } from 'three/examples/jsm/controls/PointerLockControls.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { RoundedBoxGeometry } from 'three/examples/jsm/geometries/RoundedBoxGeometry.js';
import { SAOPass } from 'three/examples/jsm/postprocessing/SAOPass.js';
import { SMAAPass } from 'three/examples/jsm/postprocessing/SMAAPass.js';
import { SSAARenderPass } from 'three/examples/jsm/postprocessing/SSAARenderPass.js';
import { SSAOPass } from 'three/examples/jsm/postprocessing/SSAOPass.js';
import { SSRPass } from 'three/examples/jsm/postprocessing/SSRPass.js';
import { SavePass } from 'three/examples/jsm/postprocessing/SavePass.js';
import { TAARenderPass } from 'three/examples/jsm/postprocessing/TAARenderPass.js';
import { TeapotGeometry } from 'three/examples/jsm/geometries/TeapotGeometry.js';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry.js';
import { TexturePass } from 'three/examples/jsm/postprocessing/TexturePass.js';
import { TrackballControls } from 'three/examples/jsm/controls/TrackballControls.js';
import { TransformControls } from 'three/examples/jsm/controls/TransformControls.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';
import { DDSLoader } from 'three/examples/jsm/loaders/DDSLoader.js';
import { KTX2Loader } from 'three/examples/jsm/loaders/KTX2Loader.js';
import { KTXLoader } from 'three/examples/jsm/loaders/KTXLoader.js';
import { PVRLoader } from 'three/examples/jsm/loaders/PVRLoader.js';
import { EXRLoader } from 'three/examples/jsm/loaders/EXRLoader.js';
import { RGBELoader } from 'three/examples/jsm/loaders/RGBELoader.js';
import { RGBMLoader } from 'three/examples/jsm/loaders/RGBMLoader.js';
import { TGALoader } from 'three/examples/jsm/loaders/TGALoader.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js';
import Stats from 'three/examples/jsm/libs/stats.module.js';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader.js';
import { LogLuvLoader } from 'three/examples/jsm/loaders/LogLuvLoader.js';
import { PLYLoader } from 'three/examples/jsm/loaders/PLYLoader.js';

function isSettable(obj) {
    return !!(obj && obj.set); // && obj.copy;
}
/**
 * tries to apply the new value to the target.
 * if the new value is 'setter arguments' then it uses set on the target.
 * else it tries to use the 'copy' method of the target if available
 * else it return the newValue as new target
 * if newValue is undefined the old target is returned
 *
 * @param target the target for the new value
 * @param newValue the value to be set
 * @returns the new target(value)
 */
function applyValue(target, newValue) {
    if (isSettable(target)) {
        if (newValue === undefined) {
            return target;
        }
        if (Array.isArray(newValue)) {
            target.set(...newValue);
            return target;
        }
        if (target.copy && newValue) {
            target.copy(newValue);
            return target;
        }
        // just set the value
        if (newValue !== undefined) {
            target.set(newValue);
            return target;
        }
    }
    else {
        // apply the value
        return newValue;
    }
    // nothing to do
    return target;
}
function isDisposable(obj) {
    if (obj && typeof obj.dispose === 'function') {
        return true;
    }
    return false;
}
/**
 * compatibility function for checking if a subject is observed
 * works with RxJs 6.x.x and RxJs 7+
 *
 * @param s the subject
 * @returns true if the subject is observed
 */
function isObserved(s) {
    return (s !== undefined &&
        (s.observed /* <-- needs at least RxJs 7.x.x */ || s.observers?.length > 0) /* <-- for RxJs < 7.x.x */);
}
// This can live anywhere in your codebase:
function applyMixins(derivedCtor, constructors) {
    constructors.forEach((baseCtor) => {
        Object.getOwnPropertyNames(baseCtor.prototype).forEach((name) => {
            Object.defineProperty(derivedCtor.prototype, name, Object.getOwnPropertyDescriptor(baseCtor.prototype, name) || Object.create(null));
        });
    });
}

class Object3DProxyHandler {
    constructor(target) {
        this.memberMap = new Map();
        this.children = [];
        this.eventListener = {};
        this.loaded = false;
        this.add = (...object) => {
            if (this.objRef) {
                this.objRef.add(...object);
            }
            this.children.push(...object);
            return this;
        };
        this.remove = (...object) => {
            if (this.objRef) {
                this.objRef.remove(...object);
            }
            for (const obj of object) {
                const index = this.children.indexOf(obj);
                if (index >= 0) {
                    this.children = this.children.splice(index, 1);
                }
            }
            return this;
        };
        this.applyToObject3D = (objRef) => {
            this.memberMap.forEach((value, key) => {
                const member = objRef[key];
                if (isSettable(member)) {
                    applyValue(member, value);
                }
                else {
                    objRef[key] = value;
                }
            });
            this.children.forEach((child) => objRef.add(child));
            if (this.objRef?.parent) {
                const parent = this.objRef?.parent;
                parent.remove(this.objRef);
                parent.add(objRef);
            }
        };
        /**
         * Adds a listener to an event type.
         *
         * @param type The type of event to listen to.
         * @param listener The function that gets called when the event is fired.
         */
        this.addEventListener = (type, listener) => {
            let arr = this.eventListener[type];
            if (!arr) {
                arr = [];
                this.eventListener[type] = arr;
            }
            arr.push(listener);
            if (this.objRef) {
                this.objRef.addEventListener(type, listener);
            }
        };
        /**
         * Removes a listener from an event type.
         *
         * @param type The type of the listener that gets removed.
         * @param listener The listener function that gets removed.
         */
        this.removeEventListener = (type, listener) => {
            const arr = this.eventListener[type];
            if (!arr) {
                return;
            }
            const index = arr.indexOf(listener);
            if (index >= 0) {
                arr.splice(index, 1);
            }
        };
        this.objRef = target;
    }
    get(_target, p, _receiver) {
        switch (p) {
            case '__isProxy':
                return true;
            case 'applyToObject3D':
                return this.applyToObject3D;
            case 'objRef':
                if (this.loaded) {
                    return this.objRef;
                }
                else {
                    return undefined;
                }
            case 'add':
                return this.add;
            case 'remove':
                return this.remove;
            case 'children':
                return this.objRef ? this.objRef.children : this.children;
            default: {
                const objKey = p;
                const value = this.objRef[objKey];
                if (value !== undefined) {
                    // this is necessary for complex members
                    // (returned by reference, they might be altered, we have to reapply them to the real object )
                    this.memberMap.set(objKey, value);
                }
                return value;
            }
        }
    }
    set(_target, p, value, _receiver) {
        if (p === 'objRef') {
            if (value) {
                this.applyToObject3D(value);
            }
            this.loaded = true;
            this.objRef = value;
        }
        else {
            // store to the member map
            this.memberMap.set(p, value);
            if (this.objRef) {
                // and apply to the real object if present
                this.objRef[p] = value;
            }
        }
        return true;
    }
}
function createLazyObject3DProxy(target = new Object3D()) {
    const handler = new Object3DProxyHandler(target);
    return new Proxy(handler, handler);
}
function isLazyObject3dProxy(object) {
    return (
    // eslint-disable-next-line no-underscore-dangle
    object.__isProxy === true && object.objRef === undefined);
}

// eslint-disable-next-line @angular-eslint/component-class-suffix
class ThWrapperBase {
    set objRef(ref) {
        this.applyObjRef(ref);
    }
    get objRef() {
        return this._objRef;
    }
    constructor() {
        this.autoAddToParent = true;
        this.autoDispose = true;
        // nothing to do
    }
    addToParent() {
        // nothing to do, implement it in a derived class
    }
    removeFromParent() {
        // nothing to do, implement it in a derived class
    }
    set threeEvents(eventMap) {
        this.removeEvents();
        this.eventListeners = eventMap;
        this.applyEvents();
    }
    get threeEvents() {
        return this.eventListeners;
    }
    get onUpdate() {
        if (!this.updateEmitter) {
            this.updateEmitter = new EventEmitter();
        }
        return this.updateEmitter;
    }
    /**
     * emits the last assigned object ref
     */
    get objRef$() {
        if (!this._objRef$) {
            this._objRef$ = new ReplaySubject(1);
        }
        return this._objRef$;
    }
    ngOnInit() {
        if (!this.objRef) {
            this.objRef = this.createThreeInstance(this.args);
        }
    }
    // Override this
    getType() {
        throw new Error('derive me');
    }
    createThreeInstance(args) {
        if (Array.isArray(args)) {
            return new (this.getType())(...args);
        }
        else {
            return new (this.getType())(args);
        }
    }
    ngOnChanges(changes) {
        // console.log('on changes');
        if (this.objRef && !isLazyObject3dProxy(this.objRef)) {
            // the object is already set and it is no proxy
            // emit the changes
            this.emitPropertyChanges(changes);
            // TODO: request animation frame
            return;
        }
        if (!this.objRef) {
            // no object and no proxy is set --> create an instance
            this.objRef = this.createThreeInstance(changes.args?.currentValue);
        }
        // eslint-disable-next-line guard-for-in
        for (const key in changes) {
            this[key] = changes[key].currentValue;
        }
        this.emitPropertyChanges(changes);
    }
    disposeObjRef() {
        if (isDisposable(this.objRef)) {
            this.objRef.dispose();
        }
    }
    ngOnDestroy() {
        this.removeEvents();
        this.removeFromParent();
        if (this.autoDispose) {
            this.disposeObjRef();
        }
    }
    applyObjRef(objRef) {
        if (this._objRef !== objRef) {
            this.removeFromParent();
            this._objRef = objRef;
            if (this.autoAddToParent) {
                this.addToParent();
            }
        }
        this.emitObjRefChange();
    }
    emitObjRefChange() {
        // only emit change if _objRef is no proxy,
        // and trigger emit over objRef event emitter
        if (this._objRef && !isLazyObject3dProxy(this._objRef)) {
            this._objRef.dispatchEvent?.({
                type: 'loaded',
                object: this._objRef,
            });
            if (this._objRef$) {
                this._objRef$.next(this._objRef);
            }
        }
    }
    emitPropertyChanges(changes) {
        if (this._objRef) {
            this._objRef.dispatchEvent?.({ type: 'changes', changes });
        }
        if (this.updateEmitter) {
            this.updateEmitter.next(changes);
        }
    }
    removeEvents() {
        if (this.eventListeners && this._objRef) {
            for (const entry of Object.entries(this.eventListeners)) {
                this._objRef.removeEventListener(entry[0], entry[1]);
            }
            this.eventListeners = undefined;
        }
    }
    applyEvents() {
        if (this.eventListeners && this._objRef) {
            for (const entry of Object.entries(this.eventListeners)) {
                this._objRef.addEventListener(entry[0], entry[1]);
            }
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThWrapperBase, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.1.2", type: ThWrapperBase, selector: "th-abs-wrapper", inputs: { autoAddToParent: "autoAddToParent", autoDispose: "autoDispose", objRef: "objRef", args: "args", threeEvents: "threeEvents" }, outputs: { onUpdate: "onUpdate", objRef$: "objRef$" }, usesOnChanges: true, ngImport: i0, template: '', isInline: true }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThWrapperBase, decorators: [{
            type: Component,
            args: [{
                    selector: 'th-abs-wrapper',
                    template: '',
                }]
        }], ctorParameters: () => [], propDecorators: { autoAddToParent: [{
                type: Input
            }], autoDispose: [{
                type: Input
            }], objRef: [{
                type: Input
            }], args: [{
                type: Input
            }], threeEvents: [{
                type: Input
            }], onUpdate: [{
                type: Output
            }], objRef$: [{
                type: Output
            }] } });

// eslint-disable-next-line @angular-eslint/component-class-suffix
class ThObjectBase extends ThWrapperBase {
    constructor(parent) {
        super();
        this.parent = parent;
    }
    addToParent() {
        if (this._objRef &&
            this.parent.objRef &&
            (!this._objRef.parent || this._objRef.parent.uuid !== this.parent.objRef.uuid)) {
            this.parent.objRef.add(this._objRef);
        }
    }
    removeFromParent() {
        this._objRef?.parent?.remove(this._objRef);
    }
    applyObjRef(objRef) {
        if (this._objRef !== objRef || this._objRef?.parent?.uuid !== this.parent.objRef.uuid) {
            this.removeFromParent();
            this._objRef = objRef;
            if (this.autoAddToParent) {
                this.addToParent();
            }
        }
        this.emitObjRefChange();
    }
    attachToParent(newRef, oldRef) {
        if (!this.parent.objRef || (newRef === oldRef && oldRef?.parent?.uuid === this.parent.objRef.uuid)) {
            return;
        }
        // remove old obj from parent
        if (oldRef && oldRef.parent) {
            oldRef.parent.remove(oldRef);
        }
        // add new obj to parent
        if (newRef && (!newRef.parent || (newRef.parent && newRef.parent.uuid !== this.parent.objRef.uuid))) {
            this.parent.objRef.add(newRef);
        }
    }
    // object 3d methods
    set lookAt(vector) {
        Promise.resolve().then(() => {
            // execute next microtick, to assume all
            // position changes already happend,
            // because lookAt triggers a world matrix calculation
            if (!this.objRef) {
                return;
            }
            if (Array.isArray(vector)) {
                this.objRef.lookAt(...vector);
            }
            else {
                this.objRef.lookAt(vector);
            }
        });
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThObjectBase, deps: [{ token: ThObjectBase }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.1.2", type: ThObjectBase, selector: "th-abs-object", inputs: { lookAt: "lookAt" }, usesInheritance: true, ngImport: i0, template: '<ng-content/>', isInline: true }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThObjectBase, decorators: [{
            type: Component,
            args: [{
                    selector: 'th-abs-object',
                    template: '<ng-content/>'
                }]
        }], ctorParameters: () => [{ type: ThObjectBase }], propDecorators: { lookAt: [{
                type: Input
            }] } });

/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix */
class ThObject3D extends ThObjectBase {
    getType() {
        return Object3D;
    }
    get isObject3D() {
        return this._objRef?.isObject3D;
    }
    get id() {
        return this._objRef?.id;
    }
    set uuid(value) {
        if (this._objRef) {
            this._objRef.uuid = value;
        }
    }
    get uuid() {
        return this._objRef?.uuid;
    }
    set name(value) {
        if (this._objRef) {
            this._objRef.name = value;
        }
    }
    get name() {
        return this._objRef?.name;
    }
    get type() {
        return this._objRef?.type;
    }
    set children(value) {
        if (this._objRef) {
            this._objRef.children = value;
        }
    }
    get children() {
        return this._objRef?.children;
    }
    set up(value) {
        if (this._objRef) {
            this._objRef.up = applyValue(this._objRef.up, value);
        }
    }
    get up() {
        return this._objRef?.up;
    }
    set position(value) {
        if (this._objRef) {
            applyValue(this._objRef.position, value);
        }
    }
    get position() {
        return this._objRef?.position;
    }
    set rotation(value) {
        if (this._objRef) {
            applyValue(this._objRef.rotation, value);
        }
    }
    get rotation() {
        return this._objRef?.rotation;
    }
    set quaternion(value) {
        if (this._objRef) {
            applyValue(this._objRef.quaternion, value);
        }
    }
    get quaternion() {
        return this._objRef?.quaternion;
    }
    set scale(value) {
        if (this._objRef) {
            applyValue(this._objRef.scale, value);
        }
    }
    get scale() {
        return this._objRef?.scale;
    }
    set modelViewMatrix(value) {
        if (this._objRef) {
            applyValue(this._objRef.modelViewMatrix, value);
        }
    }
    get modelViewMatrix() {
        return this._objRef?.modelViewMatrix;
    }
    set normalMatrix(value) {
        if (this._objRef) {
            applyValue(this._objRef.normalMatrix, value);
        }
    }
    get normalMatrix() {
        return this._objRef?.normalMatrix;
    }
    set matrix(value) {
        if (this._objRef) {
            this._objRef.matrix = applyValue(this._objRef.matrix, value);
        }
    }
    get matrix() {
        return this._objRef?.matrix;
    }
    set matrixWorld(value) {
        if (this._objRef) {
            this._objRef.matrixWorld = applyValue(this._objRef.matrixWorld, value);
        }
    }
    get matrixWorld() {
        return this._objRef?.matrixWorld;
    }
    set matrixAutoUpdate(value) {
        if (this._objRef) {
            this._objRef.matrixAutoUpdate = value;
        }
    }
    get matrixAutoUpdate() {
        return this._objRef?.matrixAutoUpdate;
    }
    set matrixWorldAutoUpdate(value) {
        if (this._objRef) {
            this._objRef.matrixWorldAutoUpdate = value;
        }
    }
    get matrixWorldAutoUpdate() {
        return this._objRef?.matrixWorldAutoUpdate;
    }
    set matrixWorldNeedsUpdate(value) {
        if (this._objRef) {
            this._objRef.matrixWorldNeedsUpdate = value;
        }
    }
    get matrixWorldNeedsUpdate() {
        return this._objRef?.matrixWorldNeedsUpdate;
    }
    set layers(value) {
        if (this._objRef) {
            this._objRef.layers = applyValue(this._objRef.layers, value);
        }
    }
    get layers() {
        return this._objRef?.layers;
    }
    set visible(value) {
        if (this._objRef) {
            this._objRef.visible = value;
        }
    }
    get visible() {
        return this._objRef?.visible;
    }
    set castShadow(value) {
        if (this._objRef) {
            this._objRef.castShadow = value;
        }
    }
    get castShadow() {
        return this._objRef?.castShadow;
    }
    set receiveShadow(value) {
        if (this._objRef) {
            this._objRef.receiveShadow = value;
        }
    }
    get receiveShadow() {
        return this._objRef?.receiveShadow;
    }
    set frustumCulled(value) {
        if (this._objRef) {
            this._objRef.frustumCulled = value;
        }
    }
    get frustumCulled() {
        return this._objRef?.frustumCulled;
    }
    set renderOrder(value) {
        if (this._objRef) {
            this._objRef.renderOrder = value;
        }
    }
    get renderOrder() {
        return this._objRef?.renderOrder;
    }
    set animations(value) {
        if (this._objRef) {
            this._objRef.animations = value;
        }
    }
    get animations() {
        return this._objRef?.animations;
    }
    set userData(value) {
        if (this._objRef) {
            this._objRef.userData = value;
        }
    }
    get userData() {
        return this._objRef?.userData;
    }
    set customDepthMaterial(value) {
        if (this._objRef) {
            this._objRef.customDepthMaterial = value;
        }
    }
    get customDepthMaterial() {
        return this._objRef?.customDepthMaterial;
    }
    set customDistanceMaterial(value) {
        if (this._objRef) {
            this._objRef.customDistanceMaterial = value;
        }
    }
    get customDistanceMaterial() {
        return this._objRef?.customDistanceMaterial;
    }
    static { this.DEFAULT_UP = Object3D.DEFAULT_UP; }
    static { this.DEFAULT_MATRIX_AUTO_UPDATE = Object3D.DEFAULT_MATRIX_AUTO_UPDATE; }
    static { this.DEFAULT_MATRIX_WORLD_AUTO_UPDATE = Object3D.DEFAULT_MATRIX_WORLD_AUTO_UPDATE; }
    constructor(parent) {
        super(parent);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThObject3D, deps: [{ token: ThObject3D, skipSelf: true }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.1.2", type: ThObject3D, selector: "th-object3D", inputs: { uuid: "uuid", name: "name", children: "children", up: "up", position: "position", rotation: "rotation", quaternion: "quaternion", scale: "scale", modelViewMatrix: "modelViewMatrix", normalMatrix: "normalMatrix", matrix: "matrix", matrixWorld: "matrixWorld", matrixAutoUpdate: "matrixAutoUpdate", matrixWorldAutoUpdate: "matrixWorldAutoUpdate", matrixWorldNeedsUpdate: "matrixWorldNeedsUpdate", layers: "layers", visible: "visible", castShadow: "castShadow", receiveShadow: "receiveShadow", frustumCulled: "frustumCulled", renderOrder: "renderOrder", animations: "animations", userData: "userData", customDepthMaterial: "customDepthMaterial", customDistanceMaterial: "customDistanceMaterial" }, providers: [], usesInheritance: true, ngImport: i0, template: '<ng-content/>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThObject3D, decorators: [{
            type: Component,
            args: [{
                    selector: 'th-object3D',
                    template: '<ng-content/>',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    providers: [],
                }]
        }], ctorParameters: () => [{ type: ThObject3D, decorators: [{
                    type: SkipSelf
                }] }], propDecorators: { uuid: [{
                type: Input
            }], name: [{
                type: Input
            }], children: [{
                type: Input
            }], up: [{
                type: Input
            }], position: [{
                type: Input
            }], rotation: [{
                type: Input
            }], quaternion: [{
                type: Input
            }], scale: [{
                type: Input
            }], modelViewMatrix: [{
                type: Input
            }], normalMatrix: [{
                type: Input
            }], matrix: [{
                type: Input
            }], matrixWorld: [{
                type: Input
            }], matrixAutoUpdate: [{
                type: Input
            }], matrixWorldAutoUpdate: [{
                type: Input
            }], matrixWorldNeedsUpdate: [{
                type: Input
            }], layers: [{
                type: Input
            }], visible: [{
                type: Input
            }], castShadow: [{
                type: Input
            }], receiveShadow: [{
                type: Input
            }], frustumCulled: [{
                type: Input
            }], renderOrder: [{
                type: Input
            }], animations: [{
                type: Input
            }], userData: [{
                type: Input
            }], customDepthMaterial: [{
                type: Input
            }], customDistanceMaterial: [{
                type: Input
            }] } });

const RAYCASTER = new InjectionToken('A reference to the raycaster object', {
    factory: () => new Raycaster(),
});
class RaycasterService {
    static { this.instanceCnt = 0; }
    constructor() {
        this.raycaster = inject(RAYCASTER);
        this.selected = null;
        this.enabled = true;
        this.groups = [];
        this.paused = false;
        this.maxClickDistance = 23;
        this.nid = RaycasterService.instanceCnt++;
        this.onPointerMove = this.onPointerMove.bind(this);
        this.onPointerDown = this.onPointerDown.bind(this);
        this.onPointerUp = this.onPointerUp.bind(this);
    }
    ngOnDestroy() {
        this.disable();
        this.unsubscribe();
    }
    subscribe() {
        if (!this.canvas) {
            throw new Error('missing canvas');
        }
        this.canvas.addEventListener('pointermove', this.onPointerMove);
        this.canvas.addEventListener('pointerdown', this.onPointerDown);
        this.canvas.addEventListener('pointerup', this.onPointerUp);
    }
    unsubscribe() {
        if (!this.canvas) {
            throw new Error('missing canvas');
        }
        this.canvas.removeEventListener('pointermove', this.onPointerMove);
        this.canvas.removeEventListener('pointerdown', this.onPointerDown);
        this.canvas.removeEventListener('pointerup', this.onPointerUp);
    }
    enable() {
        this.enabled = true;
    }
    disable() {
        this.enabled = false;
    }
    pause() {
        this.paused = true;
    }
    resume() {
        this.paused = false;
    }
    get isEnabled() {
        return this.enabled;
    }
    init(camera, canvas) {
        // console.log('Add camera to raycaster', camera);
        this.camera = camera;
        this.canvas = canvas;
        this.subscribe();
    }
    addEventTarget(target) {
        // console.log('RaycasterService.addGroup', group.name, group);
        this.groups.push(target);
    }
    removeEventTarget(target) {
        const index = this.groups.indexOf(target);
        if (index >= 0) {
            this.groups.splice(index, 1);
        }
    }
    onPointerMove(event /*MouseEvent  & { layerX: number, layerY: number}*/) {
        if (!this.isReady()) {
            return;
        }
        const i = this.getFirstIntersectedGroup(event.layerX, event.layerY, "mouseEnter" /* RaycasterEvent.mouseEnter */);
        if (!this.selected || this.selected !== i?.target) {
            if (this.selected) {
                this.selected.host.objRef?.dispatchEvent({
                    type: "mouseExit" /* RaycasterEvent.mouseExit */,
                    component: this.selected.host,
                });
                this.selected.emitOnMouseExit();
                this.selected = null;
            }
            if (i && i.target) {
                this.selected = i.target;
                const evt = {
                    type: "mouseEnter" /* RaycasterEvent.mouseEnter */,
                    component: i.target.host,
                    ...i,
                };
                this.selected.host.objRef?.dispatchEvent(evt);
                this.selected.emitOnMouseEnter(evt);
            }
        }
    }
    onPointerDown(event) {
        this.maxClickDistance = event.width;
        this.pointerDownEvent = event;
        if (!this.isReady()) {
            return;
        }
        const i = this.getFirstIntersectedGroup(event.layerX, event.layerY, "pointerDown" /* RaycasterEvent.pointerDown */);
        if (i && i.target && i.target.host.objRef) {
            const evt = { type: "pointerDown" /* RaycasterEvent.pointerDown */, component: i.target.host, ...i };
            i.target.host.objRef.dispatchEvent(evt);
            i.target.emitOnPointerDown(evt);
        }
    }
    onPointerUp(event) {
        const downEvent = this.pointerDownEvent;
        this.pointerDownEvent = undefined;
        if (!this.isReady()) {
            return;
        }
        // pointer up
        let i = this.getFirstIntersectedGroup(event.layerX, event.layerY, "pointerUp" /* RaycasterEvent.pointerUp */);
        if (i && i.target && i.target.host.objRef) {
            const evt = { type: "pointerUp" /* RaycasterEvent.pointerUp */, component: i.target.host, ...i };
            i.target.host.objRef.dispatchEvent(evt);
            i.target.emitOnPointerUp(evt);
        }
        // click
        if (this.calcPointerDownUpDinstance(event, downEvent) > this.maxClickDistance) {
            return;
        }
        i = this.getFirstIntersectedGroup(event.layerX, event.layerY, "click" /* RaycasterEvent.click */);
        if (i && i.target && i.target.host.objRef) {
            const evt = { type: "click" /* RaycasterEvent.click */, component: i.target.host, ...i };
            i.target.host.objRef.dispatchEvent(evt);
            i.target.emitOnClick(evt);
        }
    }
    isReady(ignorePaused) {
        return !!(this.enabled &&
            (ignorePaused || !this.paused) &&
            this.camera &&
            this.camera.objRef &&
            this.groups &&
            this.groups.length > 0);
    }
    calcPointerDownUpDinstance(upEvent, downEvent) {
        if (!downEvent) {
            return Number.MAX_VALUE;
        }
        const xDist = upEvent.layerX - downEvent.layerX;
        const yDist = upEvent.layerY - downEvent.layerY;
        return Math.sqrt(xDist * xDist + yDist * yDist);
    }
    getFirstIntersectedGroup(x, y, event) {
        if (!this.camera || !this.canvas || !this.camera.objRef) {
            return;
        }
        x = (x / this.canvas.clientWidth) * 2 - 1;
        y = -(y / this.canvas.clientHeight) * 2 + 1;
        const mouseVector = new THREE.Vector2(x, y);
        this.raycaster.setFromCamera(mouseVector, this.camera.objRef);
        // loop across all groups. Try to find the group with nearest distance.
        let nearestIntersection;
        let nearestGroup;
        for (const group of this.groups) {
            const i = group.host.objRef;
            if (!group[event] || !i) {
                continue;
            }
            const intersection = this.raycaster.intersectObject(i, true);
            if (intersection.length > 0 &&
                (!nearestIntersection || nearestIntersection.distance > intersection[0].distance)) {
                nearestIntersection = intersection[0];
                nearestGroup = group;
            }
        }
        // return the group with nearest distance
        if (nearestGroup && nearestIntersection) {
            return {
                target: nearestGroup,
                ...nearestIntersection,
            };
        }
        else {
            return undefined;
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: RaycasterService, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: RaycasterService }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: RaycasterService, decorators: [{
            type: Injectable
        }], ctorParameters: () => [] });

class RaycasterEventDirective {
    get onMouseEnter() {
        if (!this.mouseEnter) {
            this.mouseEnter = new EventEmitter();
        }
        return this.mouseEnter;
    }
    get onMouseExit() {
        if (!this.mouseExit) {
            this.mouseExit = new EventEmitter();
        }
        return this.mouseExit;
    }
    get onClick() {
        if (!this.click) {
            this.click = new EventEmitter();
        }
        return this.click;
    }
    get onPointerDown() {
        if (!this.pointerDown) {
            this.pointerDown = new EventEmitter();
        }
        return this.pointerDown;
    }
    get onPointerUp() {
        if (!this.pointerUp) {
            this.pointerUp = new EventEmitter();
        }
        return this.pointerUp;
    }
    constructor(host, raycasterService) {
        this.host = host;
        this.raycasterService = raycasterService;
        this.emitOnMouseEnter = this.emitOnMouseEnter.bind(this);
        this.emitOnMouseExit = this.emitOnMouseExit.bind(this);
        this.emitOnClick = this.emitOnClick.bind(this);
    }
    ngAfterViewInit() {
        this.subscribeEvents();
    }
    subscribeEvents() {
        this.raycasterService.addEventTarget(this);
    }
    unSubscribeEvents() {
        this.raycasterService.removeEventTarget(this);
    }
    emitOnMouseExit() {
        this.mouseExit?.emit({
            component: this.host,
            type: "mouseExit" /* RaycasterEvent.mouseExit */,
        });
    }
    emitOnMouseEnter(event) {
        // console.log('RaycasterGroupDirective.onMouseEnter', event);
        this.mouseEnter?.emit(event);
    }
    emitOnClick(event) {
        // console.log('onClick', event);
        this.click?.emit(event);
    }
    emitOnPointerDown(event) {
        // console.log('onClick', event);
        this.pointerDown?.emit(event);
    }
    emitOnPointerUp(event) {
        // console.log('onClick', event);
        this.pointerUp?.emit(event);
    }
    ngOnDestroy() {
        this.unSubscribeEvents();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: RaycasterEventDirective, deps: [{ token: ThObject3D, host: true }, { token: RaycasterService }], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "18.1.2", type: RaycasterEventDirective, selector: "[onClick], [onMouseEnter], [onMouseExit], [onPointerDown], [onPointerUp]", outputs: { onMouseEnter: "onMouseEnter", onMouseExit: "onMouseExit", onClick: "onClick", onPointerDown: "onPointerDown", onPointerUp: "onPointerUp" }, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: RaycasterEventDirective, decorators: [{
            type: Directive,
            args: [{ selector: '[onClick], [onMouseEnter], [onMouseExit], [onPointerDown], [onPointerUp]' }]
        }], ctorParameters: () => [{ type: ThObject3D, decorators: [{
                    type: Host
                }] }, { type: RaycasterService }], propDecorators: { onMouseEnter: [{
                type: Output
            }], onMouseExit: [{
                type: Output
            }], onClick: [{
                type: Output
            }], onPointerDown: [{
                type: Output
            }], onPointerUp: [{
                type: Output
            }] } });

/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix */
class ThEffectComposerGen extends ThWrapperBase {
    getType() {
        return EffectComposer;
    }
    set renderer(value) {
        if (this._objRef) {
            this._objRef.renderer = value;
        }
    }
    get renderer() {
        return this._objRef?.renderer;
    }
    set renderTarget1(value) {
        if (this._objRef) {
            this._objRef.renderTarget1 = value;
        }
    }
    get renderTarget1() {
        return this._objRef?.renderTarget1;
    }
    set renderTarget2(value) {
        if (this._objRef) {
            this._objRef.renderTarget2 = value;
        }
    }
    get renderTarget2() {
        return this._objRef?.renderTarget2;
    }
    set writeBuffer(value) {
        if (this._objRef) {
            this._objRef.writeBuffer = value;
        }
    }
    get writeBuffer() {
        return this._objRef?.writeBuffer;
    }
    set readBuffer(value) {
        if (this._objRef) {
            this._objRef.readBuffer = value;
        }
    }
    get readBuffer() {
        return this._objRef?.readBuffer;
    }
    set passes(value) {
        if (this._objRef) {
            this._objRef.passes = value;
        }
    }
    get passes() {
        return this._objRef?.passes;
    }
    set copyPass(value) {
        if (this._objRef) {
            this._objRef.copyPass = value;
        }
    }
    get copyPass() {
        return this._objRef?.copyPass;
    }
    set clock(value) {
        if (this._objRef) {
            this._objRef.clock = value;
        }
    }
    get clock() {
        return this._objRef?.clock;
    }
    set renderToScreen(value) {
        if (this._objRef) {
            this._objRef.renderToScreen = value;
        }
    }
    get renderToScreen() {
        return this._objRef?.renderToScreen;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThEffectComposerGen, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.1.2", type: ThEffectComposerGen, selector: "th-effectComposerGen", inputs: { renderer: "renderer", renderTarget1: "renderTarget1", renderTarget2: "renderTarget2", writeBuffer: "writeBuffer", readBuffer: "readBuffer", passes: "passes", copyPass: "copyPass", clock: "clock", renderToScreen: "renderToScreen" }, providers: [], usesInheritance: true, ngImport: i0, template: '<ng-content/>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThEffectComposerGen, decorators: [{
            type: Component,
            args: [{
                    selector: 'th-effectComposerGen',
                    template: '<ng-content/>',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    providers: [],
                }]
        }], propDecorators: { renderer: [{
                type: Input
            }], renderTarget1: [{
                type: Input
            }], renderTarget2: [{
                type: Input
            }], writeBuffer: [{
                type: Input
            }], readBuffer: [{
                type: Input
            }], passes: [{
                type: Input
            }], copyPass: [{
                type: Input
            }], clock: [{
                type: Input
            }], renderToScreen: [{
                type: Input
            }] } });

/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix */
class ThCamera extends ThObject3D {
    getType() {
        return Camera;
    }
    get isCamera() {
        return this._objRef?.isCamera;
    }
    get type() {
        return this._objRef?.type;
    }
    set layers(value) {
        if (this._objRef) {
            this._objRef.layers = applyValue(this._objRef.layers, value);
        }
    }
    get layers() {
        return this._objRef?.layers;
    }
    set matrixWorldInverse(value) {
        if (this._objRef) {
            this._objRef.matrixWorldInverse = applyValue(this._objRef.matrixWorldInverse, value);
        }
    }
    get matrixWorldInverse() {
        return this._objRef?.matrixWorldInverse;
    }
    set projectionMatrix(value) {
        if (this._objRef) {
            this._objRef.projectionMatrix = applyValue(this._objRef.projectionMatrix, value);
        }
    }
    get projectionMatrix() {
        return this._objRef?.projectionMatrix;
    }
    set projectionMatrixInverse(value) {
        if (this._objRef) {
            this._objRef.projectionMatrixInverse = applyValue(this._objRef.projectionMatrixInverse, value);
        }
    }
    get projectionMatrixInverse() {
        return this._objRef?.projectionMatrixInverse;
    }
    set coordinateSystem(value) {
        if (this._objRef) {
            this._objRef.coordinateSystem = value;
        }
    }
    get coordinateSystem() {
        return this._objRef?.coordinateSystem;
    }
    set viewport(value) {
        if (this._objRef) {
            this._objRef.viewport = applyValue(this._objRef.viewport, value);
        }
    }
    get viewport() {
        return this._objRef?.viewport;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThCamera, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.1.2", type: ThCamera, selector: "th-camera", inputs: { layers: "layers", matrixWorldInverse: "matrixWorldInverse", projectionMatrix: "projectionMatrix", projectionMatrixInverse: "projectionMatrixInverse", coordinateSystem: "coordinateSystem", viewport: "viewport" }, providers: [{ provide: ThObject3D, useExisting: forwardRef(() => ThCamera) }], usesInheritance: true, ngImport: i0, template: '<ng-content/>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThCamera, decorators: [{
            type: Component,
            args: [{
                    selector: 'th-camera',
                    template: '<ng-content/>',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    providers: [{ provide: ThObject3D, useExisting: forwardRef(() => ThCamera) }],
                }]
        }], propDecorators: { layers: [{
                type: Input
            }], matrixWorldInverse: [{
                type: Input
            }], projectionMatrix: [{
                type: Input
            }], projectionMatrixInverse: [{
                type: Input
            }], coordinateSystem: [{
                type: Input
            }], viewport: [{
                type: Input
            }] } });

/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix */
class ThScene extends ThObject3D {
    getType() {
        return Scene;
    }
    get isScene() {
        return this._objRef?.isScene;
    }
    set type(value) {
        if (this._objRef) {
            this._objRef.type = value;
        }
    }
    get type() {
        return this._objRef?.type;
    }
    set fog(value) {
        if (this._objRef) {
            this._objRef.fog = value;
        }
    }
    get fog() {
        return this._objRef?.fog;
    }
    set backgroundBlurriness(value) {
        if (this._objRef) {
            this._objRef.backgroundBlurriness = value;
        }
    }
    get backgroundBlurriness() {
        return this._objRef?.backgroundBlurriness;
    }
    set backgroundIntensity(value) {
        if (this._objRef) {
            this._objRef.backgroundIntensity = value;
        }
    }
    get backgroundIntensity() {
        return this._objRef?.backgroundIntensity;
    }
    set overrideMaterial(value) {
        if (this._objRef) {
            this._objRef.overrideMaterial = value;
        }
    }
    get overrideMaterial() {
        return this._objRef?.overrideMaterial;
    }
    set background(value) {
        if (this._objRef) {
            this._objRef.background = applyValue(this._objRef.background, value);
        }
    }
    get background() {
        return this._objRef?.background;
    }
    set backgroundRotation(value) {
        if (this._objRef) {
            this._objRef.backgroundRotation = applyValue(this._objRef.backgroundRotation, value);
        }
    }
    get backgroundRotation() {
        return this._objRef?.backgroundRotation;
    }
    set environment(value) {
        if (this._objRef) {
            this._objRef.environment = value;
        }
    }
    get environment() {
        return this._objRef?.environment;
    }
    set environmentIntensity(value) {
        if (this._objRef) {
            this._objRef.environmentIntensity = value;
        }
    }
    get environmentIntensity() {
        return this._objRef?.environmentIntensity;
    }
    set environmentRotation(value) {
        if (this._objRef) {
            this._objRef.environmentRotation = applyValue(this._objRef.environmentRotation, value);
        }
    }
    get environmentRotation() {
        return this._objRef?.environmentRotation;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThScene, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.1.2", type: ThScene, selector: "th-scene", inputs: { type: "type", fog: "fog", backgroundBlurriness: "backgroundBlurriness", backgroundIntensity: "backgroundIntensity", overrideMaterial: "overrideMaterial", background: "background", backgroundRotation: "backgroundRotation", environment: "environment", environmentIntensity: "environmentIntensity", environmentRotation: "environmentRotation" }, providers: [{ provide: ThObject3D, useExisting: forwardRef(() => ThScene) }], usesInheritance: true, ngImport: i0, template: '<ng-content/>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThScene, decorators: [{
            type: Component,
            args: [{
                    selector: 'th-scene',
                    template: '<ng-content/>',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    providers: [{ provide: ThObject3D, useExisting: forwardRef(() => ThScene) }],
                }]
        }], propDecorators: { type: [{
                type: Input
            }], fog: [{
                type: Input
            }], backgroundBlurriness: [{
                type: Input
            }], backgroundIntensity: [{
                type: Input
            }], overrideMaterial: [{
                type: Input
            }], background: [{
                type: Input
            }], backgroundRotation: [{
                type: Input
            }], environment: [{
                type: Input
            }], environmentIntensity: [{
                type: Input
            }], environmentRotation: [{
                type: Input
            }] } });

const RENDERER_DEFAULTS = {
    alpha: true, // transparent background
    antialias: true, // smooth edges
    preserveDrawingBuffer: true,
};
const RENDERER_PROVIDERS = new InjectionToken('Renderer Providers');
const CSS3D_RENDERER = new InjectionToken('CSS3DRenderer');
const CSS2D_RENDERER = new InjectionToken('CSS2DRenderer');
const WEBGL_RENDERER = new InjectionToken('WebGLRenderer');
class RendererProviderDirective {
    constructor(viewContainer, templateRef, parentInjector) {
        this.viewContainer = viewContainer;
        this.templateRef = templateRef;
        this.parentInjector = parentInjector;
    }
    getInjectedRenderers() {
        return this.injector?.get(RENDERER_PROVIDERS);
    }
    ngOnChanges(_changes) {
        this.createInjector();
        this.createView();
    }
    createView() {
        if (this.view) {
            this.viewContainer.clear();
        }
        this.view = this.viewContainer.createEmbeddedView(this.templateRef, undefined, { injector: this.injector });
    }
    createInjector() {
        const providers = [];
        if (this.rendererParameters) {
            providers.push(provideWebGLRenderer(this.rendererParameters));
        }
        if (this.css3DParameters) {
            providers.push(provideCSS3dRenderer(this.css3DParameters));
        }
        if (this.css2DParameters) {
            providers.push(provideCSS2dRenderer(this.css2DParameters));
        }
        this.injector = Injector.create({
            parent: this.parentInjector,
            providers,
        });
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: RendererProviderDirective, deps: [{ token: i0.ViewContainerRef }, { token: i0.TemplateRef }, { token: i0.Injector }], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "18.1.2", type: RendererProviderDirective, selector: "ng-template[rendererParameters], ng-template[css2dRendererParameters], ng-template[css3dRendererParameters], ng-template[webgpuRendererParameters]", inputs: { rendererParameters: "rendererParameters", css3DParameters: "css3DParameters", css2DParameters: "css2DParameters" }, usesOnChanges: true, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: RendererProviderDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: 
                    // eslint-disable-next-line max-len
                    'ng-template[rendererParameters], ng-template[css2dRendererParameters], ng-template[css3dRendererParameters], ng-template[webgpuRendererParameters]',
                }]
        }], ctorParameters: () => [{ type: i0.ViewContainerRef }, { type: i0.TemplateRef }, { type: i0.Injector }], propDecorators: { rendererParameters: [{
                type: Input
            }], css3DParameters: [{
                type: Input
            }], css2DParameters: [{
                type: Input
            }] } });
function provideWebGLRenderer(parameters) {
    const renderer = new WebGLRenderer({ ...RENDERER_DEFAULTS, ...parameters });
    Object.assign(renderer, { ...RENDERER_DEFAULTS, ...parameters });
    const provider = [
        { provide: WEBGL_RENDERER, useValue: renderer },
        {
            provide: RENDERER_PROVIDERS,
            multi: true,
            useExisting: WEBGL_RENDERER,
        },
    ];
    return provider;
}
function provideCSS3dRenderer(parameters) {
    const provider = [
        {
            provide: CSS3D_RENDERER,
            useFactory: () => {
                const renderer = new CSS3DRenderer(parameters);
                const style = renderer.domElement.style;
                style.position = 'absolute';
                style.top = '0px';
                style.bottom = '0px';
                style.left = '0px';
                style.right = '0px';
                style.overflow = 'hidden';
                return renderer;
            },
        },
        { provide: RENDERER_PROVIDERS, multi: true, useExisting: CSS3D_RENDERER },
    ];
    return provider;
}
function provideCSS2dRenderer(parameters) {
    const provider = [
        {
            provide: CSS2D_RENDERER,
            useFactory: () => {
                const renderer = new CSS2DRenderer(parameters);
                const style = renderer.domElement.style;
                style.position = 'absolute';
                style.top = '0px';
                style.bottom = '0px';
                style.left = '0px';
                style.right = '0px';
                style.overflow = 'hidden';
                return renderer;
            },
        },
        { provide: RENDERER_PROVIDERS, multi: true, useExisting: CSS2D_RENDERER },
    ];
    return provider;
}
function provideWebGPURenderer(parameters) {
    const provider = [
        { provide: WEBGL_RENDERER, useValue: new WebGLRenderer(parameters) },
        { provide: RENDERER_PROVIDERS, multi: true, useExisting: WEBGL_RENDERER },
    ];
    return provider;
}

class ThEngineService {
    constructor(ngZone) {
        this.ngZone = ngZone;
        this.hostElement = inject(HOST_ELEMENT);
        this.clock = new Clock();
        this.destroyed$ = new Subject();
        this.resizeEmitter = new EventEmitter();
        this.beforeRenderEmitter = new EventEmitter();
        this.views = [];
        this.beforeRender$ = this.beforeRenderEmitter.pipe(takeUntil(this.destroyed$));
        this.resize$ = this.resizeEmitter.pipe(takeUntil(this.destroyed$));
        const args = this.initRenderer();
        this.renderers = args.renderers;
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        this.canvas = args.canvas;
        this.wegblRenderer = args.mainRenderer;
        this.initResizeObserver();
    }
    ngOnDestroy() {
        if (this.resizeObserver && this.hostElement) {
            this.resizeObserver.unobserve(this.hostElement.nativeElement);
        }
    }
    initResizeObserver() {
        // We have to run this outside angular zones,
        // because it could trigger heavy changeDetection cycles.
        this.ngZone.runOutsideAngular(() => {
            this.initCanvasSize();
            if (!this.resizeObserver) {
                this.resizeObserver = new ResizeObserver(() => {
                    this.resize();
                });
            }
            this.resizeObserver.observe(this.hostElement.nativeElement);
        });
    }
    initCanvasSize() {
        this.canvas?.style.setProperty('width', '100%');
        this.canvas?.style.setProperty('height', '100%');
    }
    initRenderer() {
        const renderers = inject(RENDERER_PROVIDERS);
        let canvas;
        let mainRenderer;
        for (const renderer of renderers) {
            if (renderer.domElement instanceof HTMLCanvasElement) {
                mainRenderer = renderer;
                canvas = mainRenderer.domElement;
            }
        }
        if (!renderers || renderers.length < 1) {
            throw new Error('missing Canvas Renderer');
        }
        return {
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            canvas,
            mainRenderer,
            renderers,
        };
    }
    setViews(views) {
        this.views = views;
    }
    addView(view) {
        this.views.push(view);
        const canvasDimensions = this.calcRendererSize();
        if (canvasDimensions) {
            this.adjustViewDimensions(view, canvasDimensions.width, canvasDimensions.height);
        }
    }
    render() {
        this.beforeRenderEmitter.emit({ engine: this, delta: this.clock.getDelta() });
        for (const view of this.views) {
            this.renderView(view);
        }
    }
    renderView(view) {
        const camera = view.camera;
        const scene = view.scene;
        if (!camera || !scene || !camera.objRef || !scene.objRef) {
            return;
        }
        if (isObserved(view.onRender)) {
            this.ngZone.run(() => view.onRender.emit({
                renderer: this.renderers,
                scene,
                camera,
            }));
        }
        for (const renderer of this.renderers) {
            if (view.effectComposer && !(renderer instanceof WebGLRenderer)) {
                // effect composer needs a webgl renderer
                continue;
            }
            this.applyRendererParametersFromView(view, renderer);
            if (isObserved(view.onCurrentRendererPass)) {
                this.ngZone.run(() => view.onCurrentRendererPass.emit({ renderer, scene, camera, engine: this }));
            }
            if (view.effectComposer) {
                view.effectComposer.render();
                return;
            }
            else {
                renderer.render(scene.objRef, camera.objRef);
            }
        }
    }
    applyRendererParametersFromView(view, renderer) {
        if (view.viewPort && renderer.setViewport) {
            if (view.viewPort instanceof Vector4) {
                renderer.setViewport(view.viewPort);
            }
            else {
                renderer.setViewport(view.viewPort.x, view.viewPort.y, view.viewPort.width, view.viewPort.height);
            }
        }
        if (view.scissor && renderer.setScissor) {
            if (view.scissor instanceof Vector4) {
                renderer.setScissor(view.scissor);
            }
            else {
                renderer.setScissor(view.scissor.x, view.scissor.y, view.scissor.width, view.scissor.height);
            }
        }
        if (view.scissorTest !== undefined && renderer.setScissorTest) {
            renderer.setScissorTest(view.scissorTest);
        }
        if (view.clearColor && renderer.setClearColor) {
            renderer.setClearColor(view.clearColor);
        }
        if (view.clearAlpha !== undefined && renderer.setClearAlpha) {
            renderer.setClearAlpha(view.clearAlpha);
        }
        if (view.shadow !== undefined && renderer.shadowMap) {
            renderer.shadowMap.enabled = true;
        }
    }
    resize() {
        const { width, height } = this.calcRendererSize();
        // this.wegblRenderer?.setSize(width, height, false);
        this.renderers?.forEach((renderer) => renderer.setSize(width, height, false));
        for (const view of this.views) {
            this.adjustViewDimensions(view, width, height);
        }
        this.resizeEmitter.emit({ width, height });
        return true;
    }
    calcRendererSize() {
        // const pixelRatio = window.devicePixelRatio;
        return {
            width: this.hostElement.nativeElement.clientWidth ?? 0 /* * pixelRatio */,
            height: this.hostElement.nativeElement.clientHeight ?? 0 /* * pixelRatio */,
        };
    }
    adjustViewDimensions(view, width, height) {
        if (!view.viewPort) {
            if (view.camera && view.camera.objRef.aspect) {
                view.camera.objRef.aspect = width / height;
                view.camera.objRef.updateProjectionMatrix();
            }
            view.effectComposer?.setSize(width, height);
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThEngineService, deps: [{ token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThEngineService }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThEngineService, decorators: [{
            type: Injectable
        }], ctorParameters: () => [{ type: i0.NgZone }] });

const HOST_ELEMENT = new InjectionToken('HOST_ELEMENT');
// eslint-disable-next-line @angular-eslint/component-class-suffix
class ThView {
    constructor(engServ, raycaster) {
        this.engServ = engServ;
        this.raycaster = raycaster;
        this.hostElement = inject(HOST_ELEMENT);
        /**
         * Emits before the render loop starts for this view (before effectComposer or main render pass, but after setting up the viewPort on the renderer).
         * It emits for every renderer.
         * It can be used to modify the scene, camera or renderer before rendering
         * and to do additional render passes
         *
         * @Note onRender is called before this event (and only once for all renderers)
         */
        this.onCurrentRendererPass = new EventEmitter();
        // -----------------------------------------------------------------------------------------------
        // eslint-disable-next-line @angular-eslint/no-output-on-prefix
        this.onRender = new EventEmitter();
    }
    set contentScene(scene) {
        if (scene) {
            this.scene = scene;
        }
    }
    set effectComposer(effectComposer) {
        this._effectComposer = effectComposer;
        this.configureEffectComposerRenderTarget();
    }
    get effectComposer() {
        return this._effectComposer;
    }
    set camera(camera) {
        this._camera = camera;
        this.initRaycaster();
    }
    get camera() {
        return this._camera;
    }
    set contentCamera(camera) {
        if (camera) {
            this.camera = camera;
        }
    }
    set viewPort(viewPort) {
        this._viewPort = viewPort;
        this.configureEffectComposerRenderTarget();
    }
    get viewPort() {
        return this._viewPort;
    }
    ngOnInit() {
        this.initRaycaster();
    }
    initRaycaster() {
        if (this.camera) {
            this.raycaster.init(this.camera, this.hostElement.nativeElement);
        }
    }
    add(_scene) {
        // nothing to do here
    }
    remove(_scene) {
        // norhing to do
    }
    configureEffectComposerRenderTarget() {
        if (!this.viewPort || !this.effectComposer) {
            return;
        }
        else {
            let width;
            let height;
            if (this.viewPort instanceof Vector4) {
                width = this.viewPort.z;
                height = this.viewPort?.width;
            }
            else {
                width = this.viewPort.width;
                height = this.viewPort.height;
            }
            //TODO: check if pixel ration ha
            this.effectComposer.setSize(width, height);
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThView, deps: [{ token: ThEngineService }, { token: RaycasterService }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.1.2", type: ThView, selector: "th-view", inputs: { scene: "scene", effectComposer: "effectComposer", camera: "camera", shadow: "shadow", viewPort: "viewPort", scissor: "scissor", scissorTest: "scissorTest", clearColor: "clearColor", clearAlpha: "clearAlpha" }, outputs: { onCurrentRendererPass: "onCurrentRendererPass", onRender: "onRender" }, providers: [
            { provide: ThObject3D, useExisting: forwardRef(() => ThView) },
            { provide: RAYCASTER, useValue: new Raycaster() },
            RaycasterService,
        ], queries: [{ propertyName: "contentScene", first: true, predicate: ThScene, descendants: true }, { propertyName: "contentCamera", first: true, predicate: ThCamera, descendants: true }], ngImport: i0, template: '<ng-content/>', isInline: true }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThView, decorators: [{
            type: Component,
            args: [{
                    selector: 'th-view',
                    template: '<ng-content/>',
                    providers: [
                        { provide: ThObject3D, useExisting: forwardRef(() => ThView) },
                        { provide: RAYCASTER, useValue: new Raycaster() },
                        RaycasterService,
                    ],
                }]
        }], ctorParameters: () => [{ type: ThEngineService }, { type: RaycasterService }], propDecorators: { scene: [{
                type: Input
            }], onCurrentRendererPass: [{
                type: Output
            }], contentScene: [{
                type: ContentChild,
                args: [ThScene]
            }], effectComposer: [{
                type: Input
            }], camera: [{
                type: Input
            }], contentCamera: [{
                type: ContentChild,
                args: [ThCamera]
            }], shadow: [{
                type: Input
            }], viewPort: [{
                type: Input
            }], scissor: [{
                type: Input
            }], scissorTest: [{
                type: Input
            }], clearColor: [{
                type: Input
            }], clearAlpha: [{
                type: Input
            }], onRender: [{
                type: Output
            }] } });

/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix */
class ThEffectComposer extends ThEffectComposerGen {
    constructor(view, engineService) {
        super();
        this.view = view;
        this.engineService = engineService;
    }
    createThreeInstance(args) {
        if (!args) {
            args = new Array(5);
        }
        args[0] = args[0] ?? this.engineService.wegblRenderer;
        args[1] = args[1] ?? this.initRenderTarget();
        return super.createThreeInstance(args);
    }
    initRenderTarget() {
        if (!this.view.viewPort) {
            return;
        }
        else {
            let width;
            let height;
            if (this.view.viewPort instanceof Vector4) {
                width = this.view.viewPort.z;
                height = this.view.viewPort?.width;
            }
            else {
                width = this.view.viewPort.width;
                height = this.view.viewPort.height;
            }
            return new WebGLRenderTarget(width, height);
        }
    }
    addToParent() {
        if (this._objRef) {
            this.view.effectComposer = this._objRef;
        }
    }
    removeFromParent() {
        this.view.effectComposer = undefined;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThEffectComposer, deps: [{ token: ThView }, { token: ThEngineService }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.1.2", type: ThEffectComposer, selector: "th-effectComposer", providers: [], usesInheritance: true, ngImport: i0, template: '<ng-content/>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThEffectComposer, decorators: [{
            type: Component,
            args: [{
                    selector: 'th-effectComposer',
                    template: '<ng-content/>',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    providers: [],
                }]
        }], ctorParameters: () => [{ type: ThView }, { type: ThEngineService }] });

// eslint-disable-next-line @angular-eslint/component-class-suffix
class ThPassBase extends ThWrapperBase {
    constructor(effectComposer) {
        super();
        this.effectComposer = effectComposer;
    }
    addToParent() {
        if (this._objRef && this.effectComposer && this.effectComposer.objRef) {
            this.effectComposer.objRef.addPass(this._objRef);
        }
    }
    removeFromParent() {
        if (this._objRef && this.effectComposer && this.effectComposer.objRef) {
            this.effectComposer.objRef.removePass(this._objRef);
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThPassBase, deps: [{ token: ThEffectComposer, optional: true }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.1.2", type: ThPassBase, selector: "th-abs-control", usesInheritance: true, ngImport: i0, template: '', isInline: true }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThPassBase, decorators: [{
            type: Component,
            args: [{
                    selector: 'th-abs-control',
                    template: '',
                }]
        }], ctorParameters: () => [{ type: ThEffectComposer, decorators: [{
                    type: Optional
                }] }] });

/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix */
class ThPass extends ThPassBase {
    getType() {
        return Pass;
    }
    set isPass(value) {
        if (this._objRef) {
            this._objRef.isPass = value;
        }
    }
    get isPass() {
        return this._objRef?.isPass;
    }
    set enabled(value) {
        if (this._objRef) {
            this._objRef.enabled = value;
        }
    }
    get enabled() {
        return this._objRef?.enabled;
    }
    set needsSwap(value) {
        if (this._objRef) {
            this._objRef.needsSwap = value;
        }
    }
    get needsSwap() {
        return this._objRef?.needsSwap;
    }
    set clear(value) {
        if (this._objRef) {
            this._objRef.clear = value;
        }
    }
    get clear() {
        return this._objRef?.clear;
    }
    set renderToScreen(value) {
        if (this._objRef) {
            this._objRef.renderToScreen = value;
        }
    }
    get renderToScreen() {
        return this._objRef?.renderToScreen;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThPass, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.1.2", type: ThPass, selector: "th-pass", inputs: { isPass: "isPass", enabled: "enabled", needsSwap: "needsSwap", clear: "clear", renderToScreen: "renderToScreen" }, providers: [{ provide: ThPassBase, useExisting: forwardRef(() => ThPass) }], usesInheritance: true, ngImport: i0, template: '<ng-content/>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThPass, decorators: [{
            type: Component,
            args: [{
                    selector: 'th-pass',
                    template: '<ng-content/>',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    providers: [{ provide: ThPassBase, useExisting: forwardRef(() => ThPass) }],
                }]
        }], propDecorators: { isPass: [{
                type: Input
            }], enabled: [{
                type: Input
            }], needsSwap: [{
                type: Input
            }], clear: [{
                type: Input
            }], renderToScreen: [{
                type: Input
            }] } });

/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix */
class ThAfterimagePass extends ThPass {
    getType() {
        return AfterimagePass;
    }
    set shader(value) {
        if (this._objRef) {
            this._objRef.shader = value;
        }
    }
    get shader() {
        return this._objRef?.shader;
    }
    set uniforms(map) {
        if (this._objRef) {
            Object.assign(this._objRef.uniforms, map);
        }
    }
    get uniforms() {
        return this._objRef?.uniforms;
    }
    set textureComp(value) {
        if (this._objRef) {
            this._objRef.textureComp = value;
        }
    }
    get textureComp() {
        return this._objRef?.textureComp;
    }
    set textureOld(value) {
        if (this._objRef) {
            this._objRef.textureOld = value;
        }
    }
    get textureOld() {
        return this._objRef?.textureOld;
    }
    set shaderMaterial(value) {
        if (this._objRef) {
            this._objRef.shaderMaterial = value;
        }
    }
    get shaderMaterial() {
        return this._objRef?.shaderMaterial;
    }
    set compFsQuad(value) {
        if (this._objRef) {
            this._objRef.compFsQuad = value;
        }
    }
    get compFsQuad() {
        return this._objRef?.compFsQuad;
    }
    set copyFsQuad(value) {
        if (this._objRef) {
            this._objRef.copyFsQuad = value;
        }
    }
    get copyFsQuad() {
        return this._objRef?.copyFsQuad;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThAfterimagePass, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.1.2", type: ThAfterimagePass, selector: "th-afterimagePass", inputs: { shader: "shader", uniforms: "uniforms", textureComp: "textureComp", textureOld: "textureOld", shaderMaterial: "shaderMaterial", compFsQuad: "compFsQuad", copyFsQuad: "copyFsQuad" }, providers: [
            { provide: ThPassBase, useExisting: forwardRef(() => ThAfterimagePass) },
        ], usesInheritance: true, ngImport: i0, template: '<ng-content/>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThAfterimagePass, decorators: [{
            type: Component,
            args: [{
                    selector: 'th-afterimagePass',
                    template: '<ng-content/>',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    providers: [
                        { provide: ThPassBase, useExisting: forwardRef(() => ThAfterimagePass) },
                    ],
                }]
        }], propDecorators: { shader: [{
                type: Input
            }], uniforms: [{
                type: Input
            }], textureComp: [{
                type: Input
            }], textureOld: [{
                type: Input
            }], shaderMaterial: [{
                type: Input
            }], compFsQuad: [{
                type: Input
            }], copyFsQuad: [{
                type: Input
            }] } });

/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix */
class ThLight extends ThObject3D {
    get isLight() {
        return this._objRef?.isLight;
    }
    get type() {
        return this._objRef?.type;
    }
    set color(value) {
        if (this._objRef) {
            this._objRef.color = applyValue(this._objRef.color, value);
        }
    }
    get color() {
        return this._objRef?.color;
    }
    set intensity(value) {
        if (this._objRef) {
            this._objRef.intensity = value;
        }
    }
    get intensity() {
        return this._objRef?.intensity;
    }
    set shadow(value) {
        if (this._objRef) {
            this._objRef.shadow = value;
        }
    }
    get shadow() {
        return this._objRef?.shadow;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThLight, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.1.2", type: ThLight, selector: "th-light", inputs: { color: "color", intensity: "intensity", shadow: "shadow" }, providers: [{ provide: ThObject3D, useExisting: forwardRef(() => ThLight) }], usesInheritance: true, ngImport: i0, template: '<ng-content/>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThLight, decorators: [{
            type: Component,
            args: [{
                    selector: 'th-light',
                    template: '<ng-content/>',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    providers: [{ provide: ThObject3D, useExisting: forwardRef(() => ThLight) }],
                }]
        }], propDecorators: { color: [{
                type: Input
            }], intensity: [{
                type: Input
            }], shadow: [{
                type: Input
            }] } });

/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix */
class ThAmbientLight extends ThLight {
    getType() {
        return AmbientLight;
    }
    get isAmbientLight() {
        return this._objRef?.isAmbientLight;
    }
    get type() {
        return this._objRef?.type;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThAmbientLight, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.1.2", type: ThAmbientLight, selector: "th-ambientLight", providers: [
            { provide: ThObject3D, useExisting: forwardRef(() => ThAmbientLight) },
        ], usesInheritance: true, ngImport: i0, template: '<ng-content/>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThAmbientLight, decorators: [{
            type: Component,
            args: [{
                    selector: 'th-ambientLight',
                    template: '<ng-content/>',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    providers: [
                        { provide: ThObject3D, useExisting: forwardRef(() => ThAmbientLight) },
                    ],
                }]
        }] });

class ThAnimationLoopService {
    constructor(engineService, ngZone) {
        this.engineService = engineService;
        this.ngZone = ngZone;
        this.active = true;
        this.destroyed$ = new Subject();
        this.beforeRender$ = this.engineService.beforeRender$;
        this.engineService.resize$.pipe(takeUntil(this.destroyed$)).subscribe(() => this.requestAnimationFrame());
    }
    ngOnDestroy() {
        this.stop();
        this.destroyed$.next();
        this.destroyed$.complete();
    }
    /**
     * start the loop
     */
    start() {
        if (!this.active) {
            this.active = true;
            this.requestAnimationFrame();
        }
    }
    /**
     * stop the loop
     */
    stop() {
        this.active = false;
        if (this.frameId !== undefined) {
            cancelAnimationFrame(this.frameId);
            this.frameId = undefined;
        }
    }
    /**
     *
     * @returns true if the render loop is active
     */
    isActive() {
        return this.active;
    }
    /**
     * trigger an animation frame request
     */
    requestAnimationFrame() {
        if (this.frameId === undefined) {
            this.ngZone.runOutsideAngular(() => (this.frameId = requestAnimationFrame(() => {
                this.frameId = undefined;
                this.engineService.render();
                if (this.active) {
                    this.requestAnimationFrame();
                }
            })));
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThAnimationLoopService, deps: [{ token: ThEngineService }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThAnimationLoopService }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThAnimationLoopService, decorators: [{
            type: Injectable
        }], ctorParameters: () => [{ type: ThEngineService }, { type: i0.NgZone }] });

function provideDefaultRenderer() {
    return [
        {
            provide: RENDERER_PROVIDERS,
            useFactory: () => {
                const renderers = inject(RENDERER_PROVIDERS, { skipSelf: true, optional: true });
                if (renderers) {
                    return renderers;
                }
                return [provideWebGLRenderer()[0].useValue];
            },
        },
        {
            provide: WEBGL_RENDERER,
            useFactory: () => {
                const webGlRenderer = inject(WEBGL_RENDERER, { skipSelf: true, optional: true });
                if (webGlRenderer) {
                    return webGlRenderer;
                }
                const renderers = inject(RENDERER_PROVIDERS);
                const renderer = renderers[0];
                if (renderers.length === 1 && renderer instanceof WebGLRenderer) {
                    return renderer;
                }
                return undefined;
            },
        },
    ];
}
// eslint-disable-next-line @angular-eslint/component-class-suffix
class ThCanvas extends ThView {
    static { this.instanceCnt = 0; }
    get obj() {
        return this;
    }
    set views(viewList) {
        this.setViews(viewList);
    }
    get rendererCanvas() {
        return this.engServ.canvas;
    }
    constructor(engServ, animationLoop, raycaster, elementRef) {
        super(engServ, raycaster);
        this.engServ = engServ;
        this.animationLoop = animationLoop;
        this.raycaster = raycaster;
        this.elementRef = elementRef;
        this.isDevMode = isDevMode;
        this.nid = ThCanvas.instanceCnt++;
        /**
         * if true does not use the ThCanvas as view
         * this is esepcially usefull if you have multiple views
         * and want to iterate over all of them with *ngFor
         * use statically (before ngOnInit is triggered)
         */
        this.disableDefaultView = false;
        this.engServ.renderers.forEach((renderer) => this.elementRef.nativeElement.appendChild(renderer.domElement));
    }
    ngAfterContentChecked() {
        this.animationLoop.requestAnimationFrame();
    }
    ngAfterViewInit() {
        this.animationLoop.requestAnimationFrame();
    }
    ngOnInit() {
        this.engServ.resize();
        super.ngOnInit();
        this.setViews();
    }
    setViews(viewList) {
        this.engServ.setViews([]);
        if (!this.disableDefaultView) {
            this.engServ.addView(this);
        }
        viewList?.forEach((v) => this.engServ.addView(v));
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThCanvas, deps: [{ token: ThEngineService }, { token: ThAnimationLoopService }, { token: forwardRef(() => RaycasterService) }, { token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.1.2", type: ThCanvas, selector: "th-canvas", inputs: { disableDefaultView: "disableDefaultView" }, providers: [
            { provide: HOST_ELEMENT, useFactory: () => inject(ElementRef) },
            { provide: ThObject3D, useExisting: forwardRef(() => ThCanvas) },
            ThEngineService,
            ThAnimationLoopService,
            { provide: RAYCASTER, useValue: new Raycaster() },
            forwardRef(() => RaycasterService),
            { provide: ThView, useExisting: forwardRef(() => ThCanvas) },
            // default provider for webgl renderer
            provideDefaultRenderer(),
        ], queries: [{ propertyName: "views", predicate: ThView }], usesInheritance: true, ngImport: i0, template: '<ng-content *ngIf="isDevMode()" ></ng-content>', isInline: true, styles: [":host{display:flex;flex:auto;line-height:0;height:100%}canvas{flex:auto;outline:none;width:100%;height:100%}\n"], dependencies: [{ kind: "directive", type: i3.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThCanvas, decorators: [{
            type: Component,
            args: [{ selector: 'th-canvas', template: '<ng-content *ngIf="isDevMode()" ></ng-content>', changeDetection: ChangeDetectionStrategy.OnPush, providers: [
                        { provide: HOST_ELEMENT, useFactory: () => inject(ElementRef) },
                        { provide: ThObject3D, useExisting: forwardRef(() => ThCanvas) },
                        ThEngineService,
                        ThAnimationLoopService,
                        { provide: RAYCASTER, useValue: new Raycaster() },
                        forwardRef(() => RaycasterService),
                        { provide: ThView, useExisting: forwardRef(() => ThCanvas) },
                        // default provider for webgl renderer
                        provideDefaultRenderer(),
                    ], styles: [":host{display:flex;flex:auto;line-height:0;height:100%}canvas{flex:auto;outline:none;width:100%;height:100%}\n"] }]
        }], ctorParameters: () => [{ type: ThEngineService }, { type: ThAnimationLoopService }, { type: RaycasterService, decorators: [{
                    type: Inject,
                    args: [forwardRef(() => RaycasterService)]
                }] }, { type: i0.ElementRef }], propDecorators: { disableDefaultView: [{
                type: Input
            }], views: [{
                type: ContentChildren,
                args: [ThView]
            }] } });

// eslint-disable-next-line @angular-eslint/component-class-suffix
class ThControlBase extends ThWrapperBase {
    constructor(_camera, canvas) {
        super();
        this._camera = _camera;
        this.canvas = canvas;
        this.renderLoop = inject(ThAnimationLoopService);
    }
    createThreeInstance(args) {
        if (!args) {
            args = [this._camera.objRef, this.canvas?.elementRef.nativeElement];
        }
        const instance = super.createThreeInstance(args);
        this.patchDispatchEvent(instance);
        this.subscribeControlUpdater(instance);
        return instance;
    }
    patchDispatchEvent(dispatcher) {
        if (dispatcher.dispatchEvent) {
            this.origDispatchEventMethod = dispatcher.dispatchEvent;
            const origMethod = this.origDispatchEventMethod;
            dispatcher.dispatchEvent = (event) => {
                origMethod.call(dispatcher, event);
                // request an animation frame after an event was emitted;
                this.renderLoop.requestAnimationFrame();
            };
        }
    }
    ngOnDestroy() {
        super.ngOnDestroy();
        this.unpatchDispatchEvent();
        this.unsubscribeControlUpdater();
    }
    unpatchDispatchEvent() {
        if (this.origDispatchEventMethod && this._objRef) {
            this._objRef.dispatchEvent = this.origDispatchEventMethod;
        }
    }
    subscribeControlUpdater(control) {
        if (control.update !== undefined) {
            this.beforeRenderSubscription = this.renderLoop.beforeRender$.subscribe((state) => {
                control.update(state.delta);
            });
        }
    }
    unsubscribeControlUpdater() {
        if (this.beforeRenderSubscription) {
            this.beforeRenderSubscription.unsubscribe();
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThControlBase, deps: [{ token: ThObject3D }, { token: ThCanvas }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.1.2", type: ThControlBase, selector: "th-abs-control", usesInheritance: true, ngImport: i0, template: '', isInline: true }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThControlBase, decorators: [{
            type: Component,
            args: [{
                    selector: 'th-abs-control',
                    template: '',
                }]
        }], ctorParameters: () => [{ type: ThObject3D }, { type: ThCanvas }] });

/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix */
class ThArcballControls extends ThControlBase {
    getType() {
        return ArcballControls;
    }
    set camera(value) {
        if (this._objRef) {
            this._objRef.camera = value;
        }
    }
    get camera() {
        return this._objRef?.camera;
    }
    set domElement(value) {
        if (this._objRef) {
            this._objRef.domElement = value;
        }
    }
    get domElement() {
        return this._objRef?.domElement;
    }
    set scene(value) {
        if (this._objRef) {
            this._objRef.scene = value;
        }
    }
    get scene() {
        return this._objRef?.scene;
    }
    set focusAnimationTime(value) {
        if (this._objRef) {
            this._objRef.focusAnimationTime = value;
        }
    }
    get focusAnimationTime() {
        return this._objRef?.focusAnimationTime;
    }
    set enabled(value) {
        if (this._objRef) {
            this._objRef.enabled = value;
        }
    }
    get enabled() {
        return this._objRef?.enabled;
    }
    set enablePan(value) {
        if (this._objRef) {
            this._objRef.enablePan = value;
        }
    }
    get enablePan() {
        return this._objRef?.enablePan;
    }
    set enableRotate(value) {
        if (this._objRef) {
            this._objRef.enableRotate = value;
        }
    }
    get enableRotate() {
        return this._objRef?.enableRotate;
    }
    set enableZoom(value) {
        if (this._objRef) {
            this._objRef.enableZoom = value;
        }
    }
    get enableZoom() {
        return this._objRef?.enableZoom;
    }
    set enableGizmos(value) {
        if (this._objRef) {
            this._objRef.enableGizmos = value;
        }
    }
    get enableGizmos() {
        return this._objRef?.enableGizmos;
    }
    set adjustNearFar(value) {
        if (this._objRef) {
            this._objRef.adjustNearFar = value;
        }
    }
    get adjustNearFar() {
        return this._objRef?.adjustNearFar;
    }
    set scaleFactor(value) {
        if (this._objRef) {
            this._objRef.scaleFactor = value;
        }
    }
    get scaleFactor() {
        return this._objRef?.scaleFactor;
    }
    set dampingFactor(value) {
        if (this._objRef) {
            this._objRef.dampingFactor = value;
        }
    }
    get dampingFactor() {
        return this._objRef?.dampingFactor;
    }
    set wMax(value) {
        if (this._objRef) {
            this._objRef.wMax = value;
        }
    }
    get wMax() {
        return this._objRef?.wMax;
    }
    set enableAnimations(value) {
        if (this._objRef) {
            this._objRef.enableAnimations = value;
        }
    }
    get enableAnimations() {
        return this._objRef?.enableAnimations;
    }
    set enableGrid(value) {
        if (this._objRef) {
            this._objRef.enableGrid = value;
        }
    }
    get enableGrid() {
        return this._objRef?.enableGrid;
    }
    set cursorZoom(value) {
        if (this._objRef) {
            this._objRef.cursorZoom = value;
        }
    }
    get cursorZoom() {
        return this._objRef?.cursorZoom;
    }
    set minFov(value) {
        if (this._objRef) {
            this._objRef.minFov = value;
        }
    }
    get minFov() {
        return this._objRef?.minFov;
    }
    set maxFov(value) {
        if (this._objRef) {
            this._objRef.maxFov = value;
        }
    }
    get maxFov() {
        return this._objRef?.maxFov;
    }
    set minDistance(value) {
        if (this._objRef) {
            this._objRef.minDistance = value;
        }
    }
    get minDistance() {
        return this._objRef?.minDistance;
    }
    set maxDistance(value) {
        if (this._objRef) {
            this._objRef.maxDistance = value;
        }
    }
    get maxDistance() {
        return this._objRef?.maxDistance;
    }
    set minZoom(value) {
        if (this._objRef) {
            this._objRef.minZoom = value;
        }
    }
    get minZoom() {
        return this._objRef?.minZoom;
    }
    set maxZoom(value) {
        if (this._objRef) {
            this._objRef.maxZoom = value;
        }
    }
    get maxZoom() {
        return this._objRef?.maxZoom;
    }
    set target(value) {
        if (this._objRef) {
            this._objRef.target = applyValue(this._objRef.target, value);
        }
    }
    get target() {
        return this._objRef?.target;
    }
    set radiusFactor(value) {
        if (this._objRef) {
            this._objRef.radiusFactor = value;
        }
    }
    get radiusFactor() {
        return this._objRef?.radiusFactor;
    }
    set rotateSpeed(value) {
        if (this._objRef) {
            this._objRef.rotateSpeed = value;
        }
    }
    get rotateSpeed() {
        return this._objRef?.rotateSpeed;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThArcballControls, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.1.2", type: ThArcballControls, selector: "th-arcballControls", inputs: { camera: "camera", domElement: "domElement", scene: "scene", focusAnimationTime: "focusAnimationTime", enabled: "enabled", enablePan: "enablePan", enableRotate: "enableRotate", enableZoom: "enableZoom", enableGizmos: "enableGizmos", adjustNearFar: "adjustNearFar", scaleFactor: "scaleFactor", dampingFactor: "dampingFactor", wMax: "wMax", enableAnimations: "enableAnimations", enableGrid: "enableGrid", cursorZoom: "cursorZoom", minFov: "minFov", maxFov: "maxFov", minDistance: "minDistance", maxDistance: "maxDistance", minZoom: "minZoom", maxZoom: "maxZoom", target: "target", radiusFactor: "radiusFactor", rotateSpeed: "rotateSpeed" }, providers: [
            {
                provide: ThControlBase,
                useExisting: forwardRef(() => ThArcballControls),
            },
        ], usesInheritance: true, ngImport: i0, template: '<ng-content/>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThArcballControls, decorators: [{
            type: Component,
            args: [{
                    selector: 'th-arcballControls',
                    template: '<ng-content/>',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    providers: [
                        {
                            provide: ThControlBase,
                            useExisting: forwardRef(() => ThArcballControls),
                        },
                    ],
                }]
        }], propDecorators: { camera: [{
                type: Input
            }], domElement: [{
                type: Input
            }], scene: [{
                type: Input
            }], focusAnimationTime: [{
                type: Input
            }], enabled: [{
                type: Input
            }], enablePan: [{
                type: Input
            }], enableRotate: [{
                type: Input
            }], enableZoom: [{
                type: Input
            }], enableGizmos: [{
                type: Input
            }], adjustNearFar: [{
                type: Input
            }], scaleFactor: [{
                type: Input
            }], dampingFactor: [{
                type: Input
            }], wMax: [{
                type: Input
            }], enableAnimations: [{
                type: Input
            }], enableGrid: [{
                type: Input
            }], cursorZoom: [{
                type: Input
            }], minFov: [{
                type: Input
            }], maxFov: [{
                type: Input
            }], minDistance: [{
                type: Input
            }], maxDistance: [{
                type: Input
            }], minZoom: [{
                type: Input
            }], maxZoom: [{
                type: Input
            }], target: [{
                type: Input
            }], radiusFactor: [{
                type: Input
            }], rotateSpeed: [{
                type: Input
            }] } });

/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix */
class ThPerspectiveCamera extends ThCamera {
    getType() {
        return PerspectiveCamera;
    }
    get isPerspectiveCamera() {
        return this._objRef?.isPerspectiveCamera;
    }
    get type() {
        return this._objRef?.type;
    }
    set zoom(value) {
        if (this._objRef) {
            this._objRef.zoom = value;
        }
    }
    get zoom() {
        return this._objRef?.zoom;
    }
    set fov(value) {
        if (this._objRef) {
            this._objRef.fov = value;
        }
    }
    get fov() {
        return this._objRef?.fov;
    }
    set aspect(value) {
        if (this._objRef) {
            this._objRef.aspect = value;
        }
    }
    get aspect() {
        return this._objRef?.aspect;
    }
    set near(value) {
        if (this._objRef) {
            this._objRef.near = value;
        }
    }
    get near() {
        return this._objRef?.near;
    }
    set far(value) {
        if (this._objRef) {
            this._objRef.far = value;
        }
    }
    get far() {
        return this._objRef?.far;
    }
    set focus(value) {
        if (this._objRef) {
            this._objRef.focus = value;
        }
    }
    get focus() {
        return this._objRef?.focus;
    }
    set view(value) {
        if (this._objRef) {
            this._objRef.view = value;
        }
    }
    get view() {
        return this._objRef?.view;
    }
    set filmGauge(value) {
        if (this._objRef) {
            this._objRef.filmGauge = value;
        }
    }
    get filmGauge() {
        return this._objRef?.filmGauge;
    }
    set filmOffset(value) {
        if (this._objRef) {
            this._objRef.filmOffset = value;
        }
    }
    get filmOffset() {
        return this._objRef?.filmOffset;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThPerspectiveCamera, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.1.2", type: ThPerspectiveCamera, selector: "th-perspectiveCamera", inputs: { zoom: "zoom", fov: "fov", aspect: "aspect", near: "near", far: "far", focus: "focus", view: "view", filmGauge: "filmGauge", filmOffset: "filmOffset" }, providers: [
            { provide: ThObject3D, useExisting: forwardRef(() => ThPerspectiveCamera) },
            { provide: ThCamera, useExisting: forwardRef(() => ThPerspectiveCamera) },
        ], usesInheritance: true, ngImport: i0, template: '<ng-content/>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThPerspectiveCamera, decorators: [{
            type: Component,
            args: [{
                    selector: 'th-perspectiveCamera',
                    template: '<ng-content/>',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    providers: [
                        { provide: ThObject3D, useExisting: forwardRef(() => ThPerspectiveCamera) },
                        { provide: ThCamera, useExisting: forwardRef(() => ThPerspectiveCamera) },
                    ],
                }]
        }], propDecorators: { zoom: [{
                type: Input
            }], fov: [{
                type: Input
            }], aspect: [{
                type: Input
            }], near: [{
                type: Input
            }], far: [{
                type: Input
            }], focus: [{
                type: Input
            }], view: [{
                type: Input
            }], filmGauge: [{
                type: Input
            }], filmOffset: [{
                type: Input
            }] } });

/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix */
class ThArrayCamera extends ThPerspectiveCamera {
    getType() {
        return ArrayCamera;
    }
    get isArrayCamera() {
        return this._objRef?.isArrayCamera;
    }
    set cameras(value) {
        if (this._objRef) {
            this._objRef.cameras = value;
        }
    }
    get cameras() {
        return this._objRef?.cameras;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThArrayCamera, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.1.2", type: ThArrayCamera, selector: "th-arrayCamera", inputs: { cameras: "cameras" }, providers: [
            { provide: ThObject3D, useExisting: forwardRef(() => ThArrayCamera) },
            { provide: ThCamera, useExisting: forwardRef(() => ThArrayCamera) },
        ], usesInheritance: true, ngImport: i0, template: '<ng-content/>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThArrayCamera, decorators: [{
            type: Component,
            args: [{
                    selector: 'th-arrayCamera',
                    template: '<ng-content/>',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    providers: [
                        { provide: ThObject3D, useExisting: forwardRef(() => ThArrayCamera) },
                        { provide: ThCamera, useExisting: forwardRef(() => ThArrayCamera) },
                    ],
                }]
        }], propDecorators: { cameras: [{
                type: Input
            }] } });

/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix */
class ThArrowHelper extends ThObject3D {
    getType() {
        return ArrowHelper;
    }
    get type() {
        return this._objRef?.type;
    }
    set line(value) {
        if (this._objRef) {
            this._objRef.line = value;
        }
    }
    get line() {
        return this._objRef?.line;
    }
    set cone(value) {
        if (this._objRef) {
            this._objRef.cone = value;
        }
    }
    get cone() {
        return this._objRef?.cone;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThArrowHelper, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.1.2", type: ThArrowHelper, selector: "th-arrowHelper", inputs: { line: "line", cone: "cone" }, providers: [
            { provide: ThObject3D, useExisting: forwardRef(() => ThArrowHelper) },
        ], usesInheritance: true, ngImport: i0, template: '<ng-content/>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThArrowHelper, decorators: [{
            type: Component,
            args: [{
                    selector: 'th-arrowHelper',
                    template: '<ng-content/>',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    providers: [
                        { provide: ThObject3D, useExisting: forwardRef(() => ThArrowHelper) },
                    ],
                }]
        }], propDecorators: { line: [{
                type: Input
            }], cone: [{
                type: Input
            }] } });

/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix */
class ThAudio extends ThObject3D {
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

/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix */
class ThAudioListener extends ThObject3D {
    getType() {
        return AudioListener;
    }
    get type() {
        return this._objRef?.type;
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
    set filter(value) {
        if (this._objRef) {
            this._objRef.filter = value;
        }
    }
    get filter() {
        return this._objRef?.filter;
    }
    set timeDelta(value) {
        if (this._objRef) {
            this._objRef.timeDelta = value;
        }
    }
    get timeDelta() {
        return this._objRef?.timeDelta;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThAudioListener, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.1.2", type: ThAudioListener, selector: "th-audioListener", inputs: { context: "context", gain: "gain", filter: "filter", timeDelta: "timeDelta" }, providers: [
            { provide: ThObject3D, useExisting: forwardRef(() => ThAudioListener) },
        ], usesInheritance: true, ngImport: i0, template: '<ng-content/>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThAudioListener, decorators: [{
            type: Component,
            args: [{
                    selector: 'th-audioListener',
                    template: '<ng-content/>',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    providers: [
                        { provide: ThObject3D, useExisting: forwardRef(() => ThAudioListener) },
                    ],
                }]
        }], propDecorators: { context: [{
                type: Input
            }], gain: [{
                type: Input
            }], filter: [{
                type: Input
            }], timeDelta: [{
                type: Input
            }] } });

/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix */
class ThLine extends ThObject3D {
    getType() {
        return Line;
    }
    get isLine() {
        return this._objRef?.isLine;
    }
    get type() {
        return this._objRef?.type;
    }
    set geometry(value) {
        if (this._objRef) {
            this._objRef.geometry = value;
        }
    }
    get geometry() {
        return this._objRef?.geometry;
    }
    set material(value) {
        if (this._objRef) {
            this._objRef.material = value;
        }
    }
    get material() {
        return this._objRef?.material;
    }
    set morphTargetInfluences(value) {
        if (this._objRef) {
            this._objRef.morphTargetInfluences = value;
        }
    }
    get morphTargetInfluences() {
        return this._objRef?.morphTargetInfluences;
    }
    set morphTargetDictionary(value) {
        if (this._objRef) {
            this._objRef.morphTargetDictionary = value;
        }
    }
    get morphTargetDictionary() {
        return this._objRef?.morphTargetDictionary;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThLine, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.1.2", type: ThLine, selector: "th-line", inputs: { geometry: "geometry", material: "material", morphTargetInfluences: "morphTargetInfluences", morphTargetDictionary: "morphTargetDictionary" }, providers: [{ provide: ThObject3D, useExisting: forwardRef(() => ThLine) }], usesInheritance: true, ngImport: i0, template: '<ng-content/>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThLine, decorators: [{
            type: Component,
            args: [{
                    selector: 'th-line',
                    template: '<ng-content/>',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    providers: [{ provide: ThObject3D, useExisting: forwardRef(() => ThLine) }],
                }]
        }], propDecorators: { geometry: [{
                type: Input
            }], material: [{
                type: Input
            }], morphTargetInfluences: [{
                type: Input
            }], morphTargetDictionary: [{
                type: Input
            }] } });

/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix */
class ThLineSegments extends ThLine {
    getType() {
        return LineSegments;
    }
    get isLineSegments() {
        return this._objRef?.isLineSegments;
    }
    get type() {
        return this._objRef?.type;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThLineSegments, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.1.2", type: ThLineSegments, selector: "th-lineSegments", providers: [
            { provide: ThObject3D, useExisting: forwardRef(() => ThLineSegments) },
        ], usesInheritance: true, ngImport: i0, template: '<ng-content/>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThLineSegments, decorators: [{
            type: Component,
            args: [{
                    selector: 'th-lineSegments',
                    template: '<ng-content/>',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    providers: [
                        { provide: ThObject3D, useExisting: forwardRef(() => ThLineSegments) },
                    ],
                }]
        }] });

/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix */
class ThAxesHelper extends ThLineSegments {
    getType() {
        return AxesHelper;
    }
    get type() {
        return this._objRef?.type;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThAxesHelper, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.1.2", type: ThAxesHelper, selector: "th-axesHelper", providers: [
            { provide: ThObject3D, useExisting: forwardRef(() => ThAxesHelper) },
        ], usesInheritance: true, ngImport: i0, template: '<ng-content/>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThAxesHelper, decorators: [{
            type: Component,
            args: [{
                    selector: 'th-axesHelper',
                    template: '<ng-content/>',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    providers: [
                        { provide: ThObject3D, useExisting: forwardRef(() => ThAxesHelper) },
                    ],
                }]
        }] });

/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix */
class ThMesh extends ThObject3D {
    getType() {
        return Mesh;
    }
    get isMesh() {
        return this._objRef?.isMesh;
    }
    get type() {
        return this._objRef?.type;
    }
    set geometry(value) {
        if (this._objRef) {
            this._objRef.geometry = value;
        }
    }
    get geometry() {
        return this._objRef?.geometry;
    }
    set material(value) {
        if (this._objRef) {
            this._objRef.material = value;
        }
    }
    get material() {
        return this._objRef?.material;
    }
    set morphTargetInfluences(value) {
        if (this._objRef) {
            this._objRef.morphTargetInfluences = value;
        }
    }
    get morphTargetInfluences() {
        return this._objRef?.morphTargetInfluences;
    }
    set morphTargetDictionary(value) {
        if (this._objRef) {
            this._objRef.morphTargetDictionary = value;
        }
    }
    get morphTargetDictionary() {
        return this._objRef?.morphTargetDictionary;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThMesh, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.1.2", type: ThMesh, selector: "th-mesh", inputs: { geometry: "geometry", material: "material", morphTargetInfluences: "morphTargetInfluences", morphTargetDictionary: "morphTargetDictionary" }, providers: [{ provide: ThObject3D, useExisting: forwardRef(() => ThMesh) }], usesInheritance: true, ngImport: i0, template: '<ng-content/>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThMesh, decorators: [{
            type: Component,
            args: [{
                    selector: 'th-mesh',
                    template: '<ng-content/>',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    providers: [{ provide: ThObject3D, useExisting: forwardRef(() => ThMesh) }],
                }]
        }], propDecorators: { geometry: [{
                type: Input
            }], material: [{
                type: Input
            }], morphTargetInfluences: [{
                type: Input
            }], morphTargetDictionary: [{
                type: Input
            }] } });

/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix */
class ThBatchedMesh extends ThMesh {
    getType() {
        return BatchedMesh;
    }
    set boundingBox(value) {
        if (this._objRef) {
            this._objRef.boundingBox = applyValue(this._objRef.boundingBox, value);
        }
    }
    get boundingBox() {
        return this._objRef?.boundingBox;
    }
    set boundingSphere(value) {
        if (this._objRef) {
            this._objRef.boundingSphere = applyValue(this._objRef.boundingSphere, value);
        }
    }
    get boundingSphere() {
        return this._objRef?.boundingSphere;
    }
    set customSort(value) {
        if (this._objRef) {
            this._objRef.customSort = value;
        }
    }
    get customSort() {
        return this._objRef?.customSort;
    }
    set perObjectFrustumCulled(value) {
        if (this._objRef) {
            this._objRef.perObjectFrustumCulled = value;
        }
    }
    get perObjectFrustumCulled() {
        return this._objRef?.perObjectFrustumCulled;
    }
    set sortObjects(value) {
        if (this._objRef) {
            this._objRef.sortObjects = value;
        }
    }
    get sortObjects() {
        return this._objRef?.sortObjects;
    }
    get maxGeometryCount() {
        return this._objRef?.maxGeometryCount;
    }
    set isBatchedMesh(value) {
        if (this._objRef) {
            this._objRef.isBatchedMesh = value;
        }
    }
    get isBatchedMesh() {
        return this._objRef?.isBatchedMesh;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThBatchedMesh, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.1.2", type: ThBatchedMesh, selector: "th-batchedMesh", inputs: { boundingBox: "boundingBox", boundingSphere: "boundingSphere", customSort: "customSort", perObjectFrustumCulled: "perObjectFrustumCulled", sortObjects: "sortObjects", isBatchedMesh: "isBatchedMesh" }, providers: [{ provide: ThObject3D, useExisting: forwardRef(() => ThBatchedMesh) }], usesInheritance: true, ngImport: i0, template: '<ng-content/>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThBatchedMesh, decorators: [{
            type: Component,
            args: [{
                    selector: 'th-batchedMesh',
                    template: '<ng-content/>',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    providers: [{ provide: ThObject3D, useExisting: forwardRef(() => ThBatchedMesh) }],
                }]
        }], propDecorators: { boundingBox: [{
                type: Input
            }], boundingSphere: [{
                type: Input
            }], customSort: [{
                type: Input
            }], perObjectFrustumCulled: [{
                type: Input
            }], sortObjects: [{
                type: Input
            }], isBatchedMesh: [{
                type: Input
            }] } });

/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix */
class ThBloomPass extends ThPass {
    getType() {
        return BloomPass;
    }
    set renderTargetX(value) {
        if (this._objRef) {
            this._objRef.renderTargetX = value;
        }
    }
    get renderTargetX() {
        return this._objRef?.renderTargetX;
    }
    set renderTargetY(value) {
        if (this._objRef) {
            this._objRef.renderTargetY = value;
        }
    }
    get renderTargetY() {
        return this._objRef?.renderTargetY;
    }
    set copyUniforms(value) {
        if (this._objRef) {
            this._objRef.copyUniforms = value;
        }
    }
    get copyUniforms() {
        return this._objRef?.copyUniforms;
    }
    set materialCopy(value) {
        if (this._objRef) {
            this._objRef.materialCopy = value;
        }
    }
    get materialCopy() {
        return this._objRef?.materialCopy;
    }
    set convolutionUniforms(value) {
        if (this._objRef) {
            this._objRef.convolutionUniforms = value;
        }
    }
    get convolutionUniforms() {
        return this._objRef?.convolutionUniforms;
    }
    set materialConvolution(value) {
        if (this._objRef) {
            this._objRef.materialConvolution = value;
        }
    }
    get materialConvolution() {
        return this._objRef?.materialConvolution;
    }
    set fsQuad(value) {
        if (this._objRef) {
            this._objRef.fsQuad = value;
        }
    }
    get fsQuad() {
        return this._objRef?.fsQuad;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThBloomPass, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.1.2", type: ThBloomPass, selector: "th-bloomPass", inputs: { renderTargetX: "renderTargetX", renderTargetY: "renderTargetY", copyUniforms: "copyUniforms", materialCopy: "materialCopy", convolutionUniforms: "convolutionUniforms", materialConvolution: "materialConvolution", fsQuad: "fsQuad" }, providers: [
            { provide: ThPassBase, useExisting: forwardRef(() => ThBloomPass) },
        ], usesInheritance: true, ngImport: i0, template: '<ng-content/>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThBloomPass, decorators: [{
            type: Component,
            args: [{
                    selector: 'th-bloomPass',
                    template: '<ng-content/>',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    providers: [
                        { provide: ThPassBase, useExisting: forwardRef(() => ThBloomPass) },
                    ],
                }]
        }], propDecorators: { renderTargetX: [{
                type: Input
            }], renderTargetY: [{
                type: Input
            }], copyUniforms: [{
                type: Input
            }], materialCopy: [{
                type: Input
            }], convolutionUniforms: [{
                type: Input
            }], materialConvolution: [{
                type: Input
            }], fsQuad: [{
                type: Input
            }] } });

/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix */
class ThBokehPass extends ThPass {
    getType() {
        return BokehPass;
    }
    set scene(value) {
        if (this._objRef) {
            this._objRef.scene = value;
        }
    }
    get scene() {
        return this._objRef?.scene;
    }
    set camera(value) {
        if (this._objRef) {
            this._objRef.camera = value;
        }
    }
    get camera() {
        return this._objRef?.camera;
    }
    set renderTargetColor(value) {
        if (this._objRef) {
            this._objRef.renderTargetColor = value;
        }
    }
    get renderTargetColor() {
        return this._objRef?.renderTargetColor;
    }
    set renderTargetDepth(value) {
        if (this._objRef) {
            this._objRef.renderTargetDepth = value;
        }
    }
    get renderTargetDepth() {
        return this._objRef?.renderTargetDepth;
    }
    set materialDepth(value) {
        if (this._objRef) {
            this._objRef.materialDepth = value;
        }
    }
    get materialDepth() {
        return this._objRef?.materialDepth;
    }
    set materialBokeh(value) {
        if (this._objRef) {
            this._objRef.materialBokeh = value;
        }
    }
    get materialBokeh() {
        return this._objRef?.materialBokeh;
    }
    set uniforms(map) {
        if (this._objRef) {
            Object.assign(this._objRef.uniforms, map);
        }
    }
    get uniforms() {
        return this._objRef?.uniforms;
    }
    set fsQuad(value) {
        if (this._objRef) {
            this._objRef.fsQuad = value;
        }
    }
    get fsQuad() {
        return this._objRef?.fsQuad;
    }
    set oldClearColor(value) {
        if (this._objRef) {
            this._objRef.oldClearColor = applyValue(this._objRef.oldClearColor, value);
        }
    }
    get oldClearColor() {
        return this._objRef?.oldClearColor;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThBokehPass, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.1.2", type: ThBokehPass, selector: "th-bokehPass", inputs: { scene: "scene", camera: "camera", renderTargetColor: "renderTargetColor", renderTargetDepth: "renderTargetDepth", materialDepth: "materialDepth", materialBokeh: "materialBokeh", uniforms: "uniforms", fsQuad: "fsQuad", oldClearColor: "oldClearColor" }, providers: [
            { provide: ThPassBase, useExisting: forwardRef(() => ThBokehPass) },
        ], usesInheritance: true, ngImport: i0, template: '<ng-content/>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThBokehPass, decorators: [{
            type: Component,
            args: [{
                    selector: 'th-bokehPass',
                    template: '<ng-content/>',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    providers: [
                        { provide: ThPassBase, useExisting: forwardRef(() => ThBokehPass) },
                    ],
                }]
        }], propDecorators: { scene: [{
                type: Input
            }], camera: [{
                type: Input
            }], renderTargetColor: [{
                type: Input
            }], renderTargetDepth: [{
                type: Input
            }], materialDepth: [{
                type: Input
            }], materialBokeh: [{
                type: Input
            }], uniforms: [{
                type: Input
            }], fsQuad: [{
                type: Input
            }], oldClearColor: [{
                type: Input
            }] } });

/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix */
class ThBone extends ThObject3D {
    getType() {
        return Bone;
    }
    get isBone() {
        return this._objRef?.isBone;
    }
    get type() {
        return this._objRef?.type;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThBone, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.1.2", type: ThBone, selector: "th-bone", providers: [{ provide: ThObject3D, useExisting: forwardRef(() => ThBone) }], usesInheritance: true, ngImport: i0, template: '<ng-content/>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThBone, decorators: [{
            type: Component,
            args: [{
                    selector: 'th-bone',
                    template: '<ng-content/>',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    providers: [{ provide: ThObject3D, useExisting: forwardRef(() => ThBone) }],
                }]
        }] });

/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix */
class ThBox3Helper extends ThLineSegments {
    getType() {
        return Box3Helper;
    }
    get type() {
        return this._objRef?.type;
    }
    set box(value) {
        if (this._objRef) {
            this._objRef.box = applyValue(this._objRef.box, value);
        }
    }
    get box() {
        return this._objRef?.box;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThBox3Helper, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.1.2", type: ThBox3Helper, selector: "th-box3Helper", inputs: { box: "box" }, providers: [
            { provide: ThObject3D, useExisting: forwardRef(() => ThBox3Helper) },
        ], usesInheritance: true, ngImport: i0, template: '<ng-content/>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThBox3Helper, decorators: [{
            type: Component,
            args: [{
                    selector: 'th-box3Helper',
                    template: '<ng-content/>',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    providers: [
                        { provide: ThObject3D, useExisting: forwardRef(() => ThBox3Helper) },
                    ],
                }]
        }], propDecorators: { box: [{
                type: Input
            }] } });

// eslint-disable-next-line @angular-eslint/component-class-suffix
class ThGeometryBase extends ThWrapperBase {
    constructor(parent) {
        super();
        this.parent = parent;
    }
    addToParent() {
        if (!this.parent.objRef) {
            return;
            //throw new Error("parent object doesn't hold a three js object instance");
        }
        this.parent.objRef.geometry = this.objRef;
        if (this.parent.objRef.updateMorphTargets) {
            this.parent.objRef.updateMorphTargets();
        }
    }
    removeFromParent() {
        if (this._objRef && this.parent && this.parent.objRef) {
            this.parent.objRef.geometry = undefined;
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThGeometryBase, deps: [{ token: ThObject3D }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.1.2", type: ThGeometryBase, selector: "th-abs-geometry", usesInheritance: true, ngImport: i0, template: '', isInline: true }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThGeometryBase, decorators: [{
            type: Component,
            args: [{
                    selector: 'th-abs-geometry',
                    template: ''
                }]
        }], ctorParameters: () => [{ type: ThObject3D }] });

/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix */
class ThBufferGeometry extends ThGeometryBase {
    getType() {
        return BufferGeometry;
    }
    set id(value) {
        if (this._objRef) {
            this._objRef.id = value;
        }
    }
    get id() {
        return this._objRef?.id;
    }
    set uuid(value) {
        if (this._objRef) {
            this._objRef.uuid = value;
        }
    }
    get uuid() {
        return this._objRef?.uuid;
    }
    set name(value) {
        if (this._objRef) {
            this._objRef.name = value;
        }
    }
    get name() {
        return this._objRef?.name;
    }
    get type() {
        return this._objRef?.type;
    }
    set index(value) {
        if (this._objRef) {
            this._objRef.index = applyValue(this._objRef.index, value);
        }
    }
    get index() {
        return this._objRef?.index;
    }
    set attributes(value) {
        if (this._objRef) {
            this._objRef.attributes = value;
        }
    }
    get attributes() {
        return this._objRef?.attributes;
    }
    set morphAttributes(value) {
        if (this._objRef) {
            this._objRef.morphAttributes = value;
        }
    }
    get morphAttributes() {
        return this._objRef?.morphAttributes;
    }
    set morphTargetsRelative(value) {
        if (this._objRef) {
            this._objRef.morphTargetsRelative = value;
        }
    }
    get morphTargetsRelative() {
        return this._objRef?.morphTargetsRelative;
    }
    set groups(value) {
        if (this._objRef) {
            this._objRef.groups = value;
        }
    }
    get groups() {
        return this._objRef?.groups;
    }
    set boundingBox(value) {
        if (this._objRef) {
            this._objRef.boundingBox = applyValue(this._objRef.boundingBox, value);
        }
    }
    get boundingBox() {
        return this._objRef?.boundingBox;
    }
    set boundingSphere(value) {
        if (this._objRef) {
            this._objRef.boundingSphere = applyValue(this._objRef.boundingSphere, value);
        }
    }
    get boundingSphere() {
        return this._objRef?.boundingSphere;
    }
    set drawRange(value) {
        if (this._objRef) {
            this._objRef.drawRange = value;
        }
    }
    get drawRange() {
        return this._objRef?.drawRange;
    }
    set userData(value) {
        if (this._objRef) {
            this._objRef.userData = value;
        }
    }
    get userData() {
        return this._objRef?.userData;
    }
    get isBufferGeometry() {
        return this._objRef?.isBufferGeometry;
    }
    constructor(hostObject) {
        super(hostObject);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThBufferGeometry, deps: [{ token: ThObject3D, skipSelf: true }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.1.2", type: ThBufferGeometry, selector: "th-bufferGeometry", inputs: { id: "id", uuid: "uuid", name: "name", index: "index", attributes: "attributes", morphAttributes: "morphAttributes", morphTargetsRelative: "morphTargetsRelative", groups: "groups", boundingBox: "boundingBox", boundingSphere: "boundingSphere", drawRange: "drawRange", userData: "userData" }, providers: [], usesInheritance: true, ngImport: i0, template: '<ng-content/>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThBufferGeometry, decorators: [{
            type: Component,
            args: [{
                    selector: 'th-bufferGeometry',
                    template: '<ng-content/>',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    providers: [],
                }]
        }], ctorParameters: () => [{ type: ThObject3D, decorators: [{
                    type: SkipSelf
                }] }], propDecorators: { id: [{
                type: Input
            }], uuid: [{
                type: Input
            }], name: [{
                type: Input
            }], index: [{
                type: Input
            }], attributes: [{
                type: Input
            }], morphAttributes: [{
                type: Input
            }], morphTargetsRelative: [{
                type: Input
            }], groups: [{
                type: Input
            }], boundingBox: [{
                type: Input
            }], boundingSphere: [{
                type: Input
            }], drawRange: [{
                type: Input
            }], userData: [{
                type: Input
            }] } });

/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix */
class ThBoxGeometry extends ThBufferGeometry {
    getType() {
        return BoxGeometry;
    }
    get type() {
        return this._objRef?.type;
    }
    get parameters() {
        return this._objRef?.parameters;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThBoxGeometry, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.1.2", type: ThBoxGeometry, selector: "th-boxGeometry", providers: [
            { provide: ThBufferGeometry, useExisting: forwardRef(() => ThBoxGeometry) },
        ], usesInheritance: true, ngImport: i0, template: '<ng-content/>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThBoxGeometry, decorators: [{
            type: Component,
            args: [{
                    selector: 'th-boxGeometry',
                    template: '<ng-content/>',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    providers: [
                        { provide: ThBufferGeometry, useExisting: forwardRef(() => ThBoxGeometry) },
                    ],
                }]
        }] });

/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix */
class ThBoxHelper extends ThLineSegments {
    getType() {
        return BoxHelper;
    }
    get type() {
        return this._objRef?.type;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThBoxHelper, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.1.2", type: ThBoxHelper, selector: "th-boxHelper", providers: [
            { provide: ThObject3D, useExisting: forwardRef(() => ThBoxHelper) },
        ], usesInheritance: true, ngImport: i0, template: '<ng-content/>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThBoxHelper, decorators: [{
            type: Component,
            args: [{
                    selector: 'th-boxHelper',
                    template: '<ng-content/>',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    providers: [
                        { provide: ThObject3D, useExisting: forwardRef(() => ThBoxHelper) },
                    ],
                }]
        }] });

/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix */
class ThBoxLineGeometry extends ThBufferGeometry {
    getType() {
        return BoxLineGeometry;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThBoxLineGeometry, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.1.2", type: ThBoxLineGeometry, selector: "th-boxLineGeometry", providers: [
            {
                provide: ThBufferGeometry,
                useExisting: forwardRef(() => ThBoxLineGeometry),
            },
        ], usesInheritance: true, ngImport: i0, template: '<ng-content/>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThBoxLineGeometry, decorators: [{
            type: Component,
            args: [{
                    selector: 'th-boxLineGeometry',
                    template: '<ng-content/>',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    providers: [
                        {
                            provide: ThBufferGeometry,
                            useExisting: forwardRef(() => ThBoxLineGeometry),
                        },
                    ],
                }]
        }] });

/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix */
class ThCSS2DObjectGen extends ThObject3D {
    getType() {
        return CSS2DObject;
    }
    set element(value) {
        if (this._objRef) {
            this._objRef.element = value;
        }
    }
    get element() {
        return this._objRef?.element;
    }
    set center(value) {
        if (this._objRef) {
            this._objRef.center = applyValue(this._objRef.center, value);
        }
    }
    get center() {
        return this._objRef?.center;
    }
    set onBeforeRender(value) {
        if (this._objRef) {
            this._objRef.onBeforeRender = value;
        }
    }
    get onBeforeRender() {
        return this._objRef?.onBeforeRender;
    }
    set onAfterRender(value) {
        if (this._objRef) {
            this._objRef.onAfterRender = value;
        }
    }
    get onAfterRender() {
        return this._objRef?.onAfterRender;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThCSS2DObjectGen, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.1.2", type: ThCSS2DObjectGen, selector: "th-cSS2DObjectGen", inputs: { element: "element", center: "center", onBeforeRender: "onBeforeRender", onAfterRender: "onAfterRender" }, providers: [
            { provide: ThObject3D, useExisting: forwardRef(() => ThCSS2DObjectGen) },
        ], usesInheritance: true, ngImport: i0, template: '<ng-content/>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThCSS2DObjectGen, decorators: [{
            type: Component,
            args: [{
                    selector: 'th-cSS2DObjectGen',
                    template: '<ng-content/>',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    providers: [
                        { provide: ThObject3D, useExisting: forwardRef(() => ThCSS2DObjectGen) },
                    ],
                }]
        }], propDecorators: { element: [{
                type: Input
            }], center: [{
                type: Input
            }], onBeforeRender: [{
                type: Input
            }], onAfterRender: [{
                type: Input
            }] } });

/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix */
class ThCSS3DObjectGen extends ThObject3D {
    getType() {
        return CSS3DObject;
    }
    set element(value) {
        if (this._objRef) {
            this._objRef.element = value;
        }
    }
    get element() {
        return this._objRef?.element;
    }
    set onBeforeRender(value) {
        if (this._objRef) {
            this._objRef.onBeforeRender = value;
        }
    }
    get onBeforeRender() {
        return this._objRef?.onBeforeRender;
    }
    set onAfterRender(value) {
        if (this._objRef) {
            this._objRef.onAfterRender = value;
        }
    }
    get onAfterRender() {
        return this._objRef?.onAfterRender;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThCSS3DObjectGen, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.1.2", type: ThCSS3DObjectGen, selector: "th-cSS3DObjectGen", inputs: { element: "element", onBeforeRender: "onBeforeRender", onAfterRender: "onAfterRender" }, providers: [
            { provide: ThObject3D, useExisting: forwardRef(() => ThCSS3DObjectGen) },
        ], usesInheritance: true, ngImport: i0, template: '<ng-content/>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThCSS3DObjectGen, decorators: [{
            type: Component,
            args: [{
                    selector: 'th-cSS3DObjectGen',
                    template: '<ng-content/>',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    providers: [
                        { provide: ThObject3D, useExisting: forwardRef(() => ThCSS3DObjectGen) },
                    ],
                }]
        }], propDecorators: { element: [{
                type: Input
            }], onBeforeRender: [{
                type: Input
            }], onAfterRender: [{
                type: Input
            }] } });

/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix */
class ThCameraHelper extends ThLineSegments {
    getType() {
        return CameraHelper;
    }
    get type() {
        return this._objRef?.type;
    }
    set camera(value) {
        if (this._objRef) {
            this._objRef.camera = value;
        }
    }
    get camera() {
        return this._objRef?.camera;
    }
    set pointMap(value) {
        if (this._objRef) {
            this._objRef.pointMap = value;
        }
    }
    get pointMap() {
        return this._objRef?.pointMap;
    }
    set matrix(value) {
        if (this._objRef) {
            this._objRef.matrix = applyValue(this._objRef.matrix, value);
        }
    }
    get matrix() {
        return this._objRef?.matrix;
    }
    set matrixAutoUpdate(value) {
        if (this._objRef) {
            this._objRef.matrixAutoUpdate = value;
        }
    }
    get matrixAutoUpdate() {
        return this._objRef?.matrixAutoUpdate;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThCameraHelper, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.1.2", type: ThCameraHelper, selector: "th-cameraHelper", inputs: { camera: "camera", pointMap: "pointMap", matrix: "matrix", matrixAutoUpdate: "matrixAutoUpdate" }, providers: [
            { provide: ThObject3D, useExisting: forwardRef(() => ThCameraHelper) },
        ], usesInheritance: true, ngImport: i0, template: '<ng-content/>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThCameraHelper, decorators: [{
            type: Component,
            args: [{
                    selector: 'th-cameraHelper',
                    template: '<ng-content/>',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    providers: [
                        { provide: ThObject3D, useExisting: forwardRef(() => ThCameraHelper) },
                    ],
                }]
        }], propDecorators: { camera: [{
                type: Input
            }], pointMap: [{
                type: Input
            }], matrix: [{
                type: Input
            }], matrixAutoUpdate: [{
                type: Input
            }] } });

// eslint-disable-next-line @angular-eslint/component-class-suffix
class ThTextureBase extends ThWrapperBase {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThTextureBase, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.1.2", type: ThTextureBase, selector: "th-abs-texture", usesInheritance: true, ngImport: i0, template: '', isInline: true }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThTextureBase, decorators: [{
            type: Component,
            args: [{
                    selector: 'th-abs-texture',
                    template: ''
                }]
        }] });

/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix */
class ThTexture extends ThTextureBase {
    getType() {
        return Texture;
    }
    get isTexture() {
        return this._objRef?.isTexture;
    }
    get id() {
        return this._objRef?.id;
    }
    set uuid(value) {
        if (this._objRef) {
            this._objRef.uuid = value;
        }
    }
    get uuid() {
        return this._objRef?.uuid;
    }
    set name(value) {
        if (this._objRef) {
            this._objRef.name = value;
        }
    }
    get name() {
        return this._objRef?.name;
    }
    set source(value) {
        if (this._objRef) {
            this._objRef.source = value;
        }
    }
    get source() {
        return this._objRef?.source;
    }
    get image() {
        return this._objRef?.image;
    }
    set image(value) {
        if (this._objRef) {
            this._objRef.image = value;
        }
    }
    set mipmaps(value) {
        if (this._objRef) {
            this._objRef.mipmaps = value;
        }
    }
    get mipmaps() {
        return this._objRef?.mipmaps;
    }
    set mapping(value) {
        if (this._objRef) {
            this._objRef.mapping = value;
        }
    }
    get mapping() {
        return this._objRef?.mapping;
    }
    set channel(value) {
        if (this._objRef) {
            this._objRef.channel = value;
        }
    }
    get channel() {
        return this._objRef?.channel;
    }
    set wrapS(value) {
        if (this._objRef) {
            this._objRef.wrapS = value;
        }
    }
    get wrapS() {
        return this._objRef?.wrapS;
    }
    set wrapT(value) {
        if (this._objRef) {
            this._objRef.wrapT = value;
        }
    }
    get wrapT() {
        return this._objRef?.wrapT;
    }
    set magFilter(value) {
        if (this._objRef) {
            this._objRef.magFilter = value;
        }
    }
    get magFilter() {
        return this._objRef?.magFilter;
    }
    set minFilter(value) {
        if (this._objRef) {
            this._objRef.minFilter = value;
        }
    }
    get minFilter() {
        return this._objRef?.minFilter;
    }
    set anisotropy(value) {
        if (this._objRef) {
            this._objRef.anisotropy = value;
        }
    }
    get anisotropy() {
        return this._objRef?.anisotropy;
    }
    set format(value) {
        if (this._objRef) {
            this._objRef.format = value;
        }
    }
    get format() {
        return this._objRef?.format;
    }
    set type(value) {
        if (this._objRef) {
            this._objRef.type = value;
        }
    }
    get type() {
        return this._objRef?.type;
    }
    set internalFormat(value) {
        if (this._objRef) {
            this._objRef.internalFormat = value;
        }
    }
    get internalFormat() {
        return this._objRef?.internalFormat;
    }
    set matrix(value) {
        if (this._objRef) {
            this._objRef.matrix = applyValue(this._objRef.matrix, value);
        }
    }
    get matrix() {
        return this._objRef?.matrix;
    }
    set matrixAutoUpdate(value) {
        if (this._objRef) {
            this._objRef.matrixAutoUpdate = value;
        }
    }
    get matrixAutoUpdate() {
        return this._objRef?.matrixAutoUpdate;
    }
    set offset(value) {
        if (this._objRef) {
            this._objRef.offset = applyValue(this._objRef.offset, value);
        }
    }
    get offset() {
        return this._objRef?.offset;
    }
    set repeat(value) {
        if (this._objRef) {
            this._objRef.repeat = applyValue(this._objRef.repeat, value);
        }
    }
    get repeat() {
        return this._objRef?.repeat;
    }
    set center(value) {
        if (this._objRef) {
            this._objRef.center = applyValue(this._objRef.center, value);
        }
    }
    get center() {
        return this._objRef?.center;
    }
    set rotation(value) {
        if (this._objRef) {
            this._objRef.rotation = value;
        }
    }
    get rotation() {
        return this._objRef?.rotation;
    }
    set generateMipmaps(value) {
        if (this._objRef) {
            this._objRef.generateMipmaps = value;
        }
    }
    get generateMipmaps() {
        return this._objRef?.generateMipmaps;
    }
    set premultiplyAlpha(value) {
        if (this._objRef) {
            this._objRef.premultiplyAlpha = value;
        }
    }
    get premultiplyAlpha() {
        return this._objRef?.premultiplyAlpha;
    }
    set flipY(value) {
        if (this._objRef) {
            this._objRef.flipY = value;
        }
    }
    get flipY() {
        return this._objRef?.flipY;
    }
    set unpackAlignment(value) {
        if (this._objRef) {
            this._objRef.unpackAlignment = value;
        }
    }
    get unpackAlignment() {
        return this._objRef?.unpackAlignment;
    }
    set colorSpace(value) {
        if (this._objRef) {
            this._objRef.colorSpace = value;
        }
    }
    get colorSpace() {
        return this._objRef?.colorSpace;
    }
    set isRenderTargetTexture(value) {
        if (this._objRef) {
            this._objRef.isRenderTargetTexture = value;
        }
    }
    get isRenderTargetTexture() {
        return this._objRef?.isRenderTargetTexture;
    }
    set userData(value) {
        if (this._objRef) {
            this._objRef.userData = value;
        }
    }
    get userData() {
        return this._objRef?.userData;
    }
    set version(value) {
        if (this._objRef) {
            this._objRef.version = value;
        }
    }
    get version() {
        return this._objRef?.version;
    }
    set pmremVersion(value) {
        if (this._objRef) {
            this._objRef.pmremVersion = value;
        }
    }
    get pmremVersion() {
        return this._objRef?.pmremVersion;
    }
    set needsUpdate(value) {
        if (this._objRef) {
            this._objRef.needsUpdate = value;
        }
    }
    set needsPMREMUpdate(value) {
        if (this._objRef) {
            this._objRef.needsPMREMUpdate = value;
        }
    }
    static { this.DEFAULT_ANISOTROPY = Texture.DEFAULT_ANISOTROPY; }
    static { this.DEFAULT_IMAGE = Texture.DEFAULT_IMAGE; }
    static { this.DEFAULT_MAPPING = Texture.DEFAULT_MAPPING; }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThTexture, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.1.2", type: ThTexture, selector: "th-texture", inputs: { uuid: "uuid", name: "name", source: "source", image: "image", mipmaps: "mipmaps", mapping: "mapping", channel: "channel", wrapS: "wrapS", wrapT: "wrapT", magFilter: "magFilter", minFilter: "minFilter", anisotropy: "anisotropy", format: "format", type: "type", internalFormat: "internalFormat", matrix: "matrix", matrixAutoUpdate: "matrixAutoUpdate", offset: "offset", repeat: "repeat", center: "center", rotation: "rotation", generateMipmaps: "generateMipmaps", premultiplyAlpha: "premultiplyAlpha", flipY: "flipY", unpackAlignment: "unpackAlignment", colorSpace: "colorSpace", isRenderTargetTexture: "isRenderTargetTexture", userData: "userData", version: "version", pmremVersion: "pmremVersion", needsUpdate: "needsUpdate", needsPMREMUpdate: "needsPMREMUpdate" }, providers: [
            { provide: ThTextureBase, useExisting: forwardRef(() => ThTexture) },
        ], usesInheritance: true, ngImport: i0, template: '<ng-content/>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThTexture, decorators: [{
            type: Component,
            args: [{
                    selector: 'th-texture',
                    template: '<ng-content/>',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    providers: [
                        { provide: ThTextureBase, useExisting: forwardRef(() => ThTexture) },
                    ],
                }]
        }], propDecorators: { uuid: [{
                type: Input
            }], name: [{
                type: Input
            }], source: [{
                type: Input
            }], image: [{
                type: Input
            }], mipmaps: [{
                type: Input
            }], mapping: [{
                type: Input
            }], channel: [{
                type: Input
            }], wrapS: [{
                type: Input
            }], wrapT: [{
                type: Input
            }], magFilter: [{
                type: Input
            }], minFilter: [{
                type: Input
            }], anisotropy: [{
                type: Input
            }], format: [{
                type: Input
            }], type: [{
                type: Input
            }], internalFormat: [{
                type: Input
            }], matrix: [{
                type: Input
            }], matrixAutoUpdate: [{
                type: Input
            }], offset: [{
                type: Input
            }], repeat: [{
                type: Input
            }], center: [{
                type: Input
            }], rotation: [{
                type: Input
            }], generateMipmaps: [{
                type: Input
            }], premultiplyAlpha: [{
                type: Input
            }], flipY: [{
                type: Input
            }], unpackAlignment: [{
                type: Input
            }], colorSpace: [{
                type: Input
            }], isRenderTargetTexture: [{
                type: Input
            }], userData: [{
                type: Input
            }], version: [{
                type: Input
            }], pmremVersion: [{
                type: Input
            }], needsUpdate: [{
                type: Input
            }], needsPMREMUpdate: [{
                type: Input
            }] } });

/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix */
class ThCanvasTexture extends ThTexture {
    getType() {
        return CanvasTexture;
    }
    get isCanvasTexture() {
        return this._objRef?.isCanvasTexture;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThCanvasTexture, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.1.2", type: ThCanvasTexture, selector: "th-canvasTexture", providers: [
            { provide: ThTextureBase, useExisting: forwardRef(() => ThCanvasTexture) },
        ], usesInheritance: true, ngImport: i0, template: '<ng-content/>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThCanvasTexture, decorators: [{
            type: Component,
            args: [{
                    selector: 'th-canvasTexture',
                    template: '<ng-content/>',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    providers: [
                        { provide: ThTextureBase, useExisting: forwardRef(() => ThCanvasTexture) },
                    ],
                }]
        }] });

/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix */
class ThCapsuleGeometry extends ThBufferGeometry {
    getType() {
        return CapsuleGeometry;
    }
    get type() {
        return this._objRef?.type;
    }
    get parameters() {
        return this._objRef?.parameters;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThCapsuleGeometry, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.1.2", type: ThCapsuleGeometry, selector: "th-capsuleGeometry", providers: [
            {
                provide: ThBufferGeometry,
                useExisting: forwardRef(() => ThCapsuleGeometry),
            },
        ], usesInheritance: true, ngImport: i0, template: '<ng-content/>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThCapsuleGeometry, decorators: [{
            type: Component,
            args: [{
                    selector: 'th-capsuleGeometry',
                    template: '<ng-content/>',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    providers: [
                        {
                            provide: ThBufferGeometry,
                            useExisting: forwardRef(() => ThCapsuleGeometry),
                        },
                    ],
                }]
        }] });

/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix */
class ThCircleGeometry extends ThBufferGeometry {
    getType() {
        return CircleGeometry;
    }
    get type() {
        return this._objRef?.type;
    }
    get parameters() {
        return this._objRef?.parameters;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThCircleGeometry, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.1.2", type: ThCircleGeometry, selector: "th-circleGeometry", providers: [
            {
                provide: ThBufferGeometry,
                useExisting: forwardRef(() => ThCircleGeometry),
            },
        ], usesInheritance: true, ngImport: i0, template: '<ng-content/>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThCircleGeometry, decorators: [{
            type: Component,
            args: [{
                    selector: 'th-circleGeometry',
                    template: '<ng-content/>',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    providers: [
                        {
                            provide: ThBufferGeometry,
                            useExisting: forwardRef(() => ThCircleGeometry),
                        },
                    ],
                }]
        }] });

/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix */
class ThClearMaskPass extends ThPass {
    getType() {
        return ClearMaskPass;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThClearMaskPass, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.1.2", type: ThClearMaskPass, selector: "th-clearMaskPass", providers: [
            { provide: ThPassBase, useExisting: forwardRef(() => ThClearMaskPass) },
        ], usesInheritance: true, ngImport: i0, template: '<ng-content/>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThClearMaskPass, decorators: [{
            type: Component,
            args: [{
                    selector: 'th-clearMaskPass',
                    template: '<ng-content/>',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    providers: [
                        { provide: ThPassBase, useExisting: forwardRef(() => ThClearMaskPass) },
                    ],
                }]
        }] });

/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix */
class ThClearPass extends ThPass {
    getType() {
        return ClearPass;
    }
    set clearColor(value) {
        if (this._objRef) {
            this._objRef.clearColor = value;
        }
    }
    get clearColor() {
        return this._objRef?.clearColor;
    }
    set clearAlpha(value) {
        if (this._objRef) {
            this._objRef.clearAlpha = value;
        }
    }
    get clearAlpha() {
        return this._objRef?.clearAlpha;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThClearPass, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.1.2", type: ThClearPass, selector: "th-clearPass", inputs: { clearColor: "clearColor", clearAlpha: "clearAlpha" }, providers: [
            { provide: ThPassBase, useExisting: forwardRef(() => ThClearPass) },
        ], usesInheritance: true, ngImport: i0, template: '<ng-content/>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThClearPass, decorators: [{
            type: Component,
            args: [{
                    selector: 'th-clearPass',
                    template: '<ng-content/>',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    providers: [
                        { provide: ThPassBase, useExisting: forwardRef(() => ThClearPass) },
                    ],
                }]
        }], propDecorators: { clearColor: [{
                type: Input
            }], clearAlpha: [{
                type: Input
            }] } });

/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix */
class ThCompressedTexture extends ThTexture {
    getType() {
        return CompressedTexture;
    }
    get isCompressedTexture() {
        return this._objRef?.isCompressedTexture;
    }
    get image() {
        return this._objRef?.image;
    }
    set image(value) {
        if (this._objRef) {
            this._objRef.image = value;
        }
    }
    set mipmaps(value) {
        if (this._objRef) {
            this._objRef.mipmaps = value;
        }
    }
    get mipmaps() {
        return this._objRef?.mipmaps;
    }
    set format(value) {
        if (this._objRef) {
            this._objRef.format = value;
        }
    }
    get format() {
        return this._objRef?.format;
    }
    set flipY(value) {
        if (this._objRef) {
            this._objRef.flipY = value;
        }
    }
    get flipY() {
        return this._objRef?.flipY;
    }
    set generateMipmaps(value) {
        if (this._objRef) {
            this._objRef.generateMipmaps = value;
        }
    }
    get generateMipmaps() {
        return this._objRef?.generateMipmaps;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThCompressedTexture, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.1.2", type: ThCompressedTexture, selector: "th-compressedTexture", inputs: { image: "image", mipmaps: "mipmaps", format: "format", flipY: "flipY", generateMipmaps: "generateMipmaps" }, providers: [
            {
                provide: ThTextureBase,
                useExisting: forwardRef(() => ThCompressedTexture),
            },
        ], usesInheritance: true, ngImport: i0, template: '<ng-content/>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThCompressedTexture, decorators: [{
            type: Component,
            args: [{
                    selector: 'th-compressedTexture',
                    template: '<ng-content/>',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    providers: [
                        {
                            provide: ThTextureBase,
                            useExisting: forwardRef(() => ThCompressedTexture),
                        },
                    ],
                }]
        }], propDecorators: { image: [{
                type: Input
            }], mipmaps: [{
                type: Input
            }], format: [{
                type: Input
            }], flipY: [{
                type: Input
            }], generateMipmaps: [{
                type: Input
            }] } });

/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix */
class ThCompressedArrayTexture extends ThCompressedTexture {
    getType() {
        return CompressedArrayTexture;
    }
    get isCompressedArrayTexture() {
        return this._objRef?.isCompressedArrayTexture;
    }
    get image() {
        return this._objRef?.image;
    }
    set image(value) {
        if (this._objRef) {
            this._objRef.image = value;
        }
    }
    set wrapR(value) {
        if (this._objRef) {
            this._objRef.wrapR = value;
        }
    }
    get wrapR() {
        return this._objRef?.wrapR;
    }
    set layerUpdates(value) {
        if (this._objRef) {
            this._objRef.layerUpdates = value;
        }
    }
    get layerUpdates() {
        return this._objRef?.layerUpdates;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThCompressedArrayTexture, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.1.2", type: ThCompressedArrayTexture, selector: "th-compressedArrayTexture", inputs: { image: "image", wrapR: "wrapR", layerUpdates: "layerUpdates" }, providers: [
            {
                provide: ThTextureBase,
                useExisting: forwardRef(() => ThCompressedArrayTexture),
            },
        ], usesInheritance: true, ngImport: i0, template: '<ng-content/>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThCompressedArrayTexture, decorators: [{
            type: Component,
            args: [{
                    selector: 'th-compressedArrayTexture',
                    template: '<ng-content/>',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    providers: [
                        {
                            provide: ThTextureBase,
                            useExisting: forwardRef(() => ThCompressedArrayTexture),
                        },
                    ],
                }]
        }], propDecorators: { image: [{
                type: Input
            }], wrapR: [{
                type: Input
            }], layerUpdates: [{
                type: Input
            }] } });

/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix */
class ThCompressedCubeTexture extends ThCompressedTexture {
    getType() {
        return CompressedCubeTexture;
    }
    get isCompressedCubeTexture() {
        return this._objRef?.isCompressedCubeTexture;
    }
    get isCubeTexture() {
        return this._objRef?.isCubeTexture;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThCompressedCubeTexture, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.1.2", type: ThCompressedCubeTexture, selector: "th-compressedCubeTexture", providers: [
            {
                provide: ThTextureBase,
                useExisting: forwardRef(() => ThCompressedCubeTexture),
            },
        ], usesInheritance: true, ngImport: i0, template: '<ng-content/>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThCompressedCubeTexture, decorators: [{
            type: Component,
            args: [{
                    selector: 'th-compressedCubeTexture',
                    template: '<ng-content/>',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    providers: [
                        {
                            provide: ThTextureBase,
                            useExisting: forwardRef(() => ThCompressedCubeTexture),
                        },
                    ],
                }]
        }] });

/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix */
class ThCylinderGeometry extends ThBufferGeometry {
    getType() {
        return CylinderGeometry;
    }
    get type() {
        return this._objRef?.type;
    }
    get parameters() {
        return this._objRef?.parameters;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThCylinderGeometry, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.1.2", type: ThCylinderGeometry, selector: "th-cylinderGeometry", providers: [
            {
                provide: ThBufferGeometry,
                useExisting: forwardRef(() => ThCylinderGeometry),
            },
        ], usesInheritance: true, ngImport: i0, template: '<ng-content/>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThCylinderGeometry, decorators: [{
            type: Component,
            args: [{
                    selector: 'th-cylinderGeometry',
                    template: '<ng-content/>',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    providers: [
                        {
                            provide: ThBufferGeometry,
                            useExisting: forwardRef(() => ThCylinderGeometry),
                        },
                    ],
                }]
        }] });

/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix */
class ThConeGeometry extends ThCylinderGeometry {
    getType() {
        return ConeGeometry;
    }
    get type() {
        return this._objRef?.type;
    }
    get parameters() {
        return this._objRef?.parameters;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThConeGeometry, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.1.2", type: ThConeGeometry, selector: "th-coneGeometry", providers: [
            {
                provide: ThBufferGeometry,
                useExisting: forwardRef(() => ThConeGeometry),
            },
        ], usesInheritance: true, ngImport: i0, template: '<ng-content/>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThConeGeometry, decorators: [{
            type: Component,
            args: [{
                    selector: 'th-coneGeometry',
                    template: '<ng-content/>',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    providers: [
                        {
                            provide: ThBufferGeometry,
                            useExisting: forwardRef(() => ThConeGeometry),
                        },
                    ],
                }]
        }] });

/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix */
class ThConvexGeometry extends ThBufferGeometry {
    getType() {
        return ConvexGeometry;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThConvexGeometry, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.1.2", type: ThConvexGeometry, selector: "th-convexGeometry", providers: [
            {
                provide: ThBufferGeometry,
                useExisting: forwardRef(() => ThConvexGeometry),
            },
        ], usesInheritance: true, ngImport: i0, template: '<ng-content/>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThConvexGeometry, decorators: [{
            type: Component,
            args: [{
                    selector: 'th-convexGeometry',
                    template: '<ng-content/>',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    providers: [
                        {
                            provide: ThBufferGeometry,
                            useExisting: forwardRef(() => ThConvexGeometry),
                        },
                    ],
                }]
        }] });

/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix */
class ThCubeCamera extends ThObject3D {
    getType() {
        return CubeCamera;
    }
    get type() {
        return this._objRef?.type;
    }
    set renderTarget(value) {
        if (this._objRef) {
            this._objRef.renderTarget = value;
        }
    }
    get renderTarget() {
        return this._objRef?.renderTarget;
    }
    set coordinateSystem(value) {
        if (this._objRef) {
            this._objRef.coordinateSystem = value;
        }
    }
    get coordinateSystem() {
        return this._objRef?.coordinateSystem;
    }
    set activeMipmapLevel(value) {
        if (this._objRef) {
            this._objRef.activeMipmapLevel = value;
        }
    }
    get activeMipmapLevel() {
        return this._objRef?.activeMipmapLevel;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThCubeCamera, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.1.2", type: ThCubeCamera, selector: "th-cubeCamera", inputs: { renderTarget: "renderTarget", coordinateSystem: "coordinateSystem", activeMipmapLevel: "activeMipmapLevel" }, providers: [
            { provide: ThObject3D, useExisting: forwardRef(() => ThCubeCamera) },
        ], usesInheritance: true, ngImport: i0, template: '<ng-content/>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThCubeCamera, decorators: [{
            type: Component,
            args: [{
                    selector: 'th-cubeCamera',
                    template: '<ng-content/>',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    providers: [
                        { provide: ThObject3D, useExisting: forwardRef(() => ThCubeCamera) },
                    ],
                }]
        }], propDecorators: { renderTarget: [{
                type: Input
            }], coordinateSystem: [{
                type: Input
            }], activeMipmapLevel: [{
                type: Input
            }] } });

/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix */
class ThCubeTexture extends ThTexture {
    getType() {
        return CubeTexture;
    }
    get isCubeTexture() {
        return this._objRef?.isCubeTexture;
    }
    get image() {
        return this._objRef?.image;
    }
    set image(value) {
        if (this._objRef) {
            this._objRef.image = value;
        }
    }
    get images() {
        return this._objRef?.images;
    }
    set images(value) {
        if (this._objRef) {
            this._objRef.images = value;
        }
    }
    set mapping(value) {
        if (this._objRef) {
            this._objRef.mapping = value;
        }
    }
    get mapping() {
        return this._objRef?.mapping;
    }
    set flipY(value) {
        if (this._objRef) {
            this._objRef.flipY = value;
        }
    }
    get flipY() {
        return this._objRef?.flipY;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThCubeTexture, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.1.2", type: ThCubeTexture, selector: "th-cubeTexture", inputs: { image: "image", images: "images", mapping: "mapping", flipY: "flipY" }, providers: [
            { provide: ThTextureBase, useExisting: forwardRef(() => ThCubeTexture) },
        ], usesInheritance: true, ngImport: i0, template: '<ng-content/>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThCubeTexture, decorators: [{
            type: Component,
            args: [{
                    selector: 'th-cubeTexture',
                    template: '<ng-content/>',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    providers: [
                        { provide: ThTextureBase, useExisting: forwardRef(() => ThCubeTexture) },
                    ],
                }]
        }], propDecorators: { image: [{
                type: Input
            }], images: [{
                type: Input
            }], mapping: [{
                type: Input
            }], flipY: [{
                type: Input
            }] } });

/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix */
class ThCubeTexturePass extends ThPass {
    getType() {
        return CubeTexturePass;
    }
    set camera(value) {
        if (this._objRef) {
            this._objRef.camera = value;
        }
    }
    get camera() {
        return this._objRef?.camera;
    }
    set cubeShader(value) {
        if (this._objRef) {
            this._objRef.cubeShader = value;
        }
    }
    get cubeShader() {
        return this._objRef?.cubeShader;
    }
    set cubeMesh(value) {
        if (this._objRef) {
            this._objRef.cubeMesh = value;
        }
    }
    get cubeMesh() {
        return this._objRef?.cubeMesh;
    }
    set envMap(value) {
        if (this._objRef) {
            this._objRef.envMap = value;
        }
    }
    get envMap() {
        return this._objRef?.envMap;
    }
    set opacity(value) {
        if (this._objRef) {
            this._objRef.opacity = value;
        }
    }
    get opacity() {
        return this._objRef?.opacity;
    }
    set cubeScene(value) {
        if (this._objRef) {
            this._objRef.cubeScene = value;
        }
    }
    get cubeScene() {
        return this._objRef?.cubeScene;
    }
    set cubeCamera(value) {
        if (this._objRef) {
            this._objRef.cubeCamera = value;
        }
    }
    get cubeCamera() {
        return this._objRef?.cubeCamera;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThCubeTexturePass, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.1.2", type: ThCubeTexturePass, selector: "th-cubeTexturePass", inputs: { camera: "camera", cubeShader: "cubeShader", cubeMesh: "cubeMesh", envMap: "envMap", opacity: "opacity", cubeScene: "cubeScene", cubeCamera: "cubeCamera" }, providers: [
            { provide: ThPassBase, useExisting: forwardRef(() => ThCubeTexturePass) },
        ], usesInheritance: true, ngImport: i0, template: '<ng-content/>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThCubeTexturePass, decorators: [{
            type: Component,
            args: [{
                    selector: 'th-cubeTexturePass',
                    template: '<ng-content/>',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    providers: [
                        { provide: ThPassBase, useExisting: forwardRef(() => ThCubeTexturePass) },
                    ],
                }]
        }], propDecorators: { camera: [{
                type: Input
            }], cubeShader: [{
                type: Input
            }], cubeMesh: [{
                type: Input
            }], envMap: [{
                type: Input
            }], opacity: [{
                type: Input
            }], cubeScene: [{
                type: Input
            }], cubeCamera: [{
                type: Input
            }] } });

/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix */
class ThData3DTexture extends ThTexture {
    getType() {
        return Data3DTexture;
    }
    get isData3DTexture() {
        return this._objRef?.isData3DTexture;
    }
    get image() {
        return this._objRef?.image;
    }
    set image(value) {
        if (this._objRef) {
            this._objRef.image = value;
        }
    }
    set magFilter(value) {
        if (this._objRef) {
            this._objRef.magFilter = value;
        }
    }
    get magFilter() {
        return this._objRef?.magFilter;
    }
    set minFilter(value) {
        if (this._objRef) {
            this._objRef.minFilter = value;
        }
    }
    get minFilter() {
        return this._objRef?.minFilter;
    }
    set wrapR(value) {
        if (this._objRef) {
            this._objRef.wrapR = value;
        }
    }
    get wrapR() {
        return this._objRef?.wrapR;
    }
    set flipY(value) {
        if (this._objRef) {
            this._objRef.flipY = value;
        }
    }
    get flipY() {
        return this._objRef?.flipY;
    }
    set generateMipmaps(value) {
        if (this._objRef) {
            this._objRef.generateMipmaps = value;
        }
    }
    get generateMipmaps() {
        return this._objRef?.generateMipmaps;
    }
    set unpackAlignment(value) {
        if (this._objRef) {
            this._objRef.unpackAlignment = value;
        }
    }
    get unpackAlignment() {
        return this._objRef?.unpackAlignment;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThData3DTexture, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.1.2", type: ThData3DTexture, selector: "th-data3DTexture", inputs: { image: "image", magFilter: "magFilter", minFilter: "minFilter", wrapR: "wrapR", flipY: "flipY", generateMipmaps: "generateMipmaps", unpackAlignment: "unpackAlignment" }, providers: [{ provide: ThTextureBase, useExisting: forwardRef(() => ThData3DTexture) }], usesInheritance: true, ngImport: i0, template: '<ng-content/>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThData3DTexture, decorators: [{
            type: Component,
            args: [{
                    selector: 'th-data3DTexture',
                    template: '<ng-content/>',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    providers: [{ provide: ThTextureBase, useExisting: forwardRef(() => ThData3DTexture) }],
                }]
        }], propDecorators: { image: [{
                type: Input
            }], magFilter: [{
                type: Input
            }], minFilter: [{
                type: Input
            }], wrapR: [{
                type: Input
            }], flipY: [{
                type: Input
            }], generateMipmaps: [{
                type: Input
            }], unpackAlignment: [{
                type: Input
            }] } });

/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix */
class ThDataArrayTexture extends ThTexture {
    getType() {
        return DataArrayTexture;
    }
    get isDataArrayTexture() {
        return this._objRef?.isDataArrayTexture;
    }
    get image() {
        return this._objRef?.image;
    }
    set image(value) {
        if (this._objRef) {
            this._objRef.image = value;
        }
    }
    set magFilter(value) {
        if (this._objRef) {
            this._objRef.magFilter = value;
        }
    }
    get magFilter() {
        return this._objRef?.magFilter;
    }
    set minFilter(value) {
        if (this._objRef) {
            this._objRef.minFilter = value;
        }
    }
    get minFilter() {
        return this._objRef?.minFilter;
    }
    set wrapR(value) {
        if (this._objRef) {
            this._objRef.wrapR = value;
        }
    }
    get wrapR() {
        return this._objRef?.wrapR;
    }
    set generateMipmaps(value) {
        if (this._objRef) {
            this._objRef.generateMipmaps = value;
        }
    }
    get generateMipmaps() {
        return this._objRef?.generateMipmaps;
    }
    set flipY(value) {
        if (this._objRef) {
            this._objRef.flipY = value;
        }
    }
    get flipY() {
        return this._objRef?.flipY;
    }
    set unpackAlignment(value) {
        if (this._objRef) {
            this._objRef.unpackAlignment = value;
        }
    }
    get unpackAlignment() {
        return this._objRef?.unpackAlignment;
    }
    set layerUpdates(value) {
        if (this._objRef) {
            this._objRef.layerUpdates = value;
        }
    }
    get layerUpdates() {
        return this._objRef?.layerUpdates;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThDataArrayTexture, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.1.2", type: ThDataArrayTexture, selector: "th-dataArrayTexture", inputs: { image: "image", magFilter: "magFilter", minFilter: "minFilter", wrapR: "wrapR", generateMipmaps: "generateMipmaps", flipY: "flipY", unpackAlignment: "unpackAlignment", layerUpdates: "layerUpdates" }, providers: [
            {
                provide: ThTextureBase,
                useExisting: forwardRef(() => ThDataArrayTexture),
            },
        ], usesInheritance: true, ngImport: i0, template: '<ng-content/>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThDataArrayTexture, decorators: [{
            type: Component,
            args: [{
                    selector: 'th-dataArrayTexture',
                    template: '<ng-content/>',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    providers: [
                        {
                            provide: ThTextureBase,
                            useExisting: forwardRef(() => ThDataArrayTexture),
                        },
                    ],
                }]
        }], propDecorators: { image: [{
                type: Input
            }], magFilter: [{
                type: Input
            }], minFilter: [{
                type: Input
            }], wrapR: [{
                type: Input
            }], generateMipmaps: [{
                type: Input
            }], flipY: [{
                type: Input
            }], unpackAlignment: [{
                type: Input
            }], layerUpdates: [{
                type: Input
            }] } });

/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix */
class ThDataTexture extends ThTexture {
    getType() {
        return DataTexture;
    }
    get isDataTexture() {
        return this._objRef?.isDataTexture;
    }
    get image() {
        return this._objRef?.image;
    }
    set image(value) {
        if (this._objRef) {
            this._objRef.image = value;
        }
    }
    set magFilter(value) {
        if (this._objRef) {
            this._objRef.magFilter = value;
        }
    }
    get magFilter() {
        return this._objRef?.magFilter;
    }
    set minFilter(value) {
        if (this._objRef) {
            this._objRef.minFilter = value;
        }
    }
    get minFilter() {
        return this._objRef?.minFilter;
    }
    set flipY(value) {
        if (this._objRef) {
            this._objRef.flipY = value;
        }
    }
    get flipY() {
        return this._objRef?.flipY;
    }
    set generateMipmaps(value) {
        if (this._objRef) {
            this._objRef.generateMipmaps = value;
        }
    }
    get generateMipmaps() {
        return this._objRef?.generateMipmaps;
    }
    set unpackAlignment(value) {
        if (this._objRef) {
            this._objRef.unpackAlignment = value;
        }
    }
    get unpackAlignment() {
        return this._objRef?.unpackAlignment;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThDataTexture, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.1.2", type: ThDataTexture, selector: "th-dataTexture", inputs: { image: "image", magFilter: "magFilter", minFilter: "minFilter", flipY: "flipY", generateMipmaps: "generateMipmaps", unpackAlignment: "unpackAlignment" }, providers: [{ provide: ThTextureBase, useExisting: forwardRef(() => ThDataTexture) }], usesInheritance: true, ngImport: i0, template: '<ng-content/>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThDataTexture, decorators: [{
            type: Component,
            args: [{
                    selector: 'th-dataTexture',
                    template: '<ng-content/>',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    providers: [{ provide: ThTextureBase, useExisting: forwardRef(() => ThDataTexture) }],
                }]
        }], propDecorators: { image: [{
                type: Input
            }], magFilter: [{
                type: Input
            }], minFilter: [{
                type: Input
            }], flipY: [{
                type: Input
            }], generateMipmaps: [{
                type: Input
            }], unpackAlignment: [{
                type: Input
            }] } });

/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix */
class ThDecalGeometry extends ThBufferGeometry {
    getType() {
        return DecalGeometry;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThDecalGeometry, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.1.2", type: ThDecalGeometry, selector: "th-decalGeometry", providers: [
            {
                provide: ThBufferGeometry,
                useExisting: forwardRef(() => ThDecalGeometry),
            },
        ], usesInheritance: true, ngImport: i0, template: '<ng-content/>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThDecalGeometry, decorators: [{
            type: Component,
            args: [{
                    selector: 'th-decalGeometry',
                    template: '<ng-content/>',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    providers: [
                        {
                            provide: ThBufferGeometry,
                            useExisting: forwardRef(() => ThDecalGeometry),
                        },
                    ],
                }]
        }] });

/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix */
class ThDepthTexture extends ThTexture {
    getType() {
        return DepthTexture;
    }
    get isDepthTexture() {
        return this._objRef?.isDepthTexture;
    }
    get image() {
        return this._objRef?.image;
    }
    set image(value) {
        if (this._objRef) {
            this._objRef.image = value;
        }
    }
    set flipY(value) {
        if (this._objRef) {
            this._objRef.flipY = value;
        }
    }
    get flipY() {
        return this._objRef?.flipY;
    }
    set magFilter(value) {
        if (this._objRef) {
            this._objRef.magFilter = value;
        }
    }
    get magFilter() {
        return this._objRef?.magFilter;
    }
    set minFilter(value) {
        if (this._objRef) {
            this._objRef.minFilter = value;
        }
    }
    get minFilter() {
        return this._objRef?.minFilter;
    }
    set generateMipmaps(value) {
        if (this._objRef) {
            this._objRef.generateMipmaps = value;
        }
    }
    get generateMipmaps() {
        return this._objRef?.generateMipmaps;
    }
    set format(value) {
        if (this._objRef) {
            this._objRef.format = value;
        }
    }
    get format() {
        return this._objRef?.format;
    }
    set type(value) {
        if (this._objRef) {
            this._objRef.type = value;
        }
    }
    get type() {
        return this._objRef?.type;
    }
    set compareFunction(value) {
        if (this._objRef) {
            this._objRef.compareFunction = value;
        }
    }
    get compareFunction() {
        return this._objRef?.compareFunction;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThDepthTexture, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.1.2", type: ThDepthTexture, selector: "th-depthTexture", inputs: { image: "image", flipY: "flipY", magFilter: "magFilter", minFilter: "minFilter", generateMipmaps: "generateMipmaps", format: "format", type: "type", compareFunction: "compareFunction" }, providers: [
            { provide: ThTextureBase, useExisting: forwardRef(() => ThDepthTexture) },
        ], usesInheritance: true, ngImport: i0, template: '<ng-content/>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThDepthTexture, decorators: [{
            type: Component,
            args: [{
                    selector: 'th-depthTexture',
                    template: '<ng-content/>',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    providers: [
                        { provide: ThTextureBase, useExisting: forwardRef(() => ThDepthTexture) },
                    ],
                }]
        }], propDecorators: { image: [{
                type: Input
            }], flipY: [{
                type: Input
            }], magFilter: [{
                type: Input
            }], minFilter: [{
                type: Input
            }], generateMipmaps: [{
                type: Input
            }], format: [{
                type: Input
            }], type: [{
                type: Input
            }], compareFunction: [{
                type: Input
            }] } });

/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix */
class ThDirectionalLight extends ThLight {
    getType() {
        return DirectionalLight;
    }
    get isDirectionalLight() {
        return this._objRef?.isDirectionalLight;
    }
    get type() {
        return this._objRef?.type;
    }
    set castShadow(value) {
        if (this._objRef) {
            this._objRef.castShadow = value;
        }
    }
    get castShadow() {
        return this._objRef?.castShadow;
    }
    set position(value) {
        if (this._objRef) {
            applyValue(this._objRef.position, value);
        }
    }
    get position() {
        return this._objRef?.position;
    }
    set shadow(value) {
        if (this._objRef) {
            this._objRef.shadow = value;
        }
    }
    get shadow() {
        return this._objRef?.shadow;
    }
    set target(value) {
        if (this._objRef) {
            this._objRef.target = value;
        }
    }
    get target() {
        return this._objRef?.target;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThDirectionalLight, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.1.2", type: ThDirectionalLight, selector: "th-directionalLight", inputs: { castShadow: "castShadow", position: "position", shadow: "shadow", target: "target" }, providers: [
            { provide: ThObject3D, useExisting: forwardRef(() => ThDirectionalLight) },
        ], usesInheritance: true, ngImport: i0, template: '<ng-content/>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThDirectionalLight, decorators: [{
            type: Component,
            args: [{
                    selector: 'th-directionalLight',
                    template: '<ng-content/>',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    providers: [
                        { provide: ThObject3D, useExisting: forwardRef(() => ThDirectionalLight) },
                    ],
                }]
        }], propDecorators: { castShadow: [{
                type: Input
            }], position: [{
                type: Input
            }], shadow: [{
                type: Input
            }], target: [{
                type: Input
            }] } });

/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix */
class ThDirectionalLightHelper extends ThObject3D {
    getType() {
        return DirectionalLightHelper;
    }
    get type() {
        return this._objRef?.type;
    }
    set lightPlane(value) {
        if (this._objRef) {
            this._objRef.lightPlane = value;
        }
    }
    get lightPlane() {
        return this._objRef?.lightPlane;
    }
    set light(value) {
        if (this._objRef) {
            this._objRef.light = value;
        }
    }
    get light() {
        return this._objRef?.light;
    }
    set matrix(value) {
        if (this._objRef) {
            this._objRef.matrix = applyValue(this._objRef.matrix, value);
        }
    }
    get matrix() {
        return this._objRef?.matrix;
    }
    set matrixAutoUpdate(value) {
        if (this._objRef) {
            this._objRef.matrixAutoUpdate = value;
        }
    }
    get matrixAutoUpdate() {
        return this._objRef?.matrixAutoUpdate;
    }
    set color(value) {
        if (this._objRef) {
            this._objRef.color = value;
        }
    }
    get color() {
        return this._objRef?.color;
    }
    set targetLine(value) {
        if (this._objRef) {
            this._objRef.targetLine = value;
        }
    }
    get targetLine() {
        return this._objRef?.targetLine;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThDirectionalLightHelper, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.1.2", type: ThDirectionalLightHelper, selector: "th-directionalLightHelper", inputs: { lightPlane: "lightPlane", light: "light", matrix: "matrix", matrixAutoUpdate: "matrixAutoUpdate", color: "color", targetLine: "targetLine" }, providers: [
            {
                provide: ThObject3D,
                useExisting: forwardRef(() => ThDirectionalLightHelper),
            },
        ], usesInheritance: true, ngImport: i0, template: '<ng-content/>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThDirectionalLightHelper, decorators: [{
            type: Component,
            args: [{
                    selector: 'th-directionalLightHelper',
                    template: '<ng-content/>',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    providers: [
                        {
                            provide: ThObject3D,
                            useExisting: forwardRef(() => ThDirectionalLightHelper),
                        },
                    ],
                }]
        }], propDecorators: { lightPlane: [{
                type: Input
            }], light: [{
                type: Input
            }], matrix: [{
                type: Input
            }], matrixAutoUpdate: [{
                type: Input
            }], color: [{
                type: Input
            }], targetLine: [{
                type: Input
            }] } });

/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix */
class ThPolyhedronGeometry extends ThBufferGeometry {
    getType() {
        return PolyhedronGeometry;
    }
    get type() {
        return this._objRef?.type;
    }
    get parameters() {
        return this._objRef?.parameters;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThPolyhedronGeometry, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.1.2", type: ThPolyhedronGeometry, selector: "th-polyhedronGeometry", providers: [
            {
                provide: ThBufferGeometry,
                useExisting: forwardRef(() => ThPolyhedronGeometry),
            },
        ], usesInheritance: true, ngImport: i0, template: '<ng-content/>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThPolyhedronGeometry, decorators: [{
            type: Component,
            args: [{
                    selector: 'th-polyhedronGeometry',
                    template: '<ng-content/>',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    providers: [
                        {
                            provide: ThBufferGeometry,
                            useExisting: forwardRef(() => ThPolyhedronGeometry),
                        },
                    ],
                }]
        }] });

/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix */
class ThDodecahedronGeometry extends ThPolyhedronGeometry {
    getType() {
        return DodecahedronGeometry;
    }
    get type() {
        return this._objRef?.type;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThDodecahedronGeometry, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.1.2", type: ThDodecahedronGeometry, selector: "th-dodecahedronGeometry", providers: [
            {
                provide: ThBufferGeometry,
                useExisting: forwardRef(() => ThDodecahedronGeometry),
            },
        ], usesInheritance: true, ngImport: i0, template: '<ng-content/>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThDodecahedronGeometry, decorators: [{
            type: Component,
            args: [{
                    selector: 'th-dodecahedronGeometry',
                    template: '<ng-content/>',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    providers: [
                        {
                            provide: ThBufferGeometry,
                            useExisting: forwardRef(() => ThDodecahedronGeometry),
                        },
                    ],
                }]
        }] });

/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix */
class ThDotScreenPass extends ThPass {
    getType() {
        return DotScreenPass;
    }
    set uniforms(map) {
        if (this._objRef) {
            Object.assign(this._objRef.uniforms, map);
        }
    }
    get uniforms() {
        return this._objRef?.uniforms;
    }
    set material(value) {
        if (this._objRef) {
            this._objRef.material = value;
        }
    }
    get material() {
        return this._objRef?.material;
    }
    set fsQuad(value) {
        if (this._objRef) {
            this._objRef.fsQuad = value;
        }
    }
    get fsQuad() {
        return this._objRef?.fsQuad;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThDotScreenPass, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.1.2", type: ThDotScreenPass, selector: "th-dotScreenPass", inputs: { uniforms: "uniforms", material: "material", fsQuad: "fsQuad" }, providers: [
            { provide: ThPassBase, useExisting: forwardRef(() => ThDotScreenPass) },
        ], usesInheritance: true, ngImport: i0, template: '<ng-content/>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThDotScreenPass, decorators: [{
            type: Component,
            args: [{
                    selector: 'th-dotScreenPass',
                    template: '<ng-content/>',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    providers: [
                        { provide: ThPassBase, useExisting: forwardRef(() => ThDotScreenPass) },
                    ],
                }]
        }], propDecorators: { uniforms: [{
                type: Input
            }], material: [{
                type: Input
            }], fsQuad: [{
                type: Input
            }] } });

/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix */
class ThDragControls extends ThControlBase {
    getType() {
        return DragControls;
    }
    set enabled(value) {
        if (this._objRef) {
            this._objRef.enabled = value;
        }
    }
    get enabled() {
        return this._objRef?.enabled;
    }
    set recursive(value) {
        if (this._objRef) {
            this._objRef.recursive = value;
        }
    }
    get recursive() {
        return this._objRef?.recursive;
    }
    set transformGroup(value) {
        if (this._objRef) {
            this._objRef.transformGroup = value;
        }
    }
    get transformGroup() {
        return this._objRef?.transformGroup;
    }
    set mode(value) {
        if (this._objRef) {
            this._objRef.mode = value;
        }
    }
    get mode() {
        return this._objRef?.mode;
    }
    set rotateSpeed(value) {
        if (this._objRef) {
            this._objRef.rotateSpeed = value;
        }
    }
    get rotateSpeed() {
        return this._objRef?.rotateSpeed;
    }
    set activate(value) {
        if (this._objRef) {
            this._objRef.activate = value;
        }
    }
    get activate() {
        return this._objRef?.activate;
    }
    set deactivate(value) {
        if (this._objRef) {
            this._objRef.deactivate = value;
        }
    }
    get deactivate() {
        return this._objRef?.deactivate;
    }
    set dispose(value) {
        if (this._objRef) {
            this._objRef.dispose = value;
        }
    }
    get dispose() {
        return this._objRef?.dispose;
    }
    set getObjects(value) {
        if (this._objRef) {
            this._objRef.getObjects = value;
        }
    }
    get getObjects() {
        return this._objRef?.getObjects;
    }
    set getRaycaster(value) {
        if (this._objRef) {
            this._objRef.getRaycaster = value;
        }
    }
    get getRaycaster() {
        return this._objRef?.getRaycaster;
    }
    set setObjects(value) {
        if (this._objRef) {
            this._objRef.setObjects = value;
        }
    }
    get setObjects() {
        return this._objRef?.setObjects;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThDragControls, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.1.2", type: ThDragControls, selector: "th-dragControls", inputs: { enabled: "enabled", recursive: "recursive", transformGroup: "transformGroup", mode: "mode", rotateSpeed: "rotateSpeed", activate: "activate", deactivate: "deactivate", dispose: "dispose", getObjects: "getObjects", getRaycaster: "getRaycaster", setObjects: "setObjects" }, providers: [
            { provide: ThControlBase, useExisting: forwardRef(() => ThDragControls) },
        ], usesInheritance: true, ngImport: i0, template: '<ng-content/>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThDragControls, decorators: [{
            type: Component,
            args: [{
                    selector: 'th-dragControls',
                    template: '<ng-content/>',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    providers: [
                        { provide: ThControlBase, useExisting: forwardRef(() => ThDragControls) },
                    ],
                }]
        }], propDecorators: { enabled: [{
                type: Input
            }], recursive: [{
                type: Input
            }], transformGroup: [{
                type: Input
            }], mode: [{
                type: Input
            }], rotateSpeed: [{
                type: Input
            }], activate: [{
                type: Input
            }], deactivate: [{
                type: Input
            }], dispose: [{
                type: Input
            }], getObjects: [{
                type: Input
            }], getRaycaster: [{
                type: Input
            }], setObjects: [{
                type: Input
            }] } });

/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix */
class ThEdgesGeometry extends ThBufferGeometry {
    getType() {
        return EdgesGeometry;
    }
    get type() {
        return this._objRef?.type;
    }
    get parameters() {
        return this._objRef?.parameters;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThEdgesGeometry, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.1.2", type: ThEdgesGeometry, selector: "th-edgesGeometry", providers: [
            {
                provide: ThBufferGeometry,
                useExisting: forwardRef(() => ThEdgesGeometry),
            },
        ], usesInheritance: true, ngImport: i0, template: '<ng-content/>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThEdgesGeometry, decorators: [{
            type: Component,
            args: [{
                    selector: 'th-edgesGeometry',
                    template: '<ng-content/>',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    providers: [
                        {
                            provide: ThBufferGeometry,
                            useExisting: forwardRef(() => ThEdgesGeometry),
                        },
                    ],
                }]
        }] });

/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix */
class ThExtrudeGeometry extends ThBufferGeometry {
    getType() {
        return ExtrudeGeometry;
    }
    get type() {
        return this._objRef?.type;
    }
    get parameters() {
        return this._objRef?.parameters;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThExtrudeGeometry, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.1.2", type: ThExtrudeGeometry, selector: "th-extrudeGeometry", providers: [
            {
                provide: ThBufferGeometry,
                useExisting: forwardRef(() => ThExtrudeGeometry),
            },
        ], usesInheritance: true, ngImport: i0, template: '<ng-content/>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThExtrudeGeometry, decorators: [{
            type: Component,
            args: [{
                    selector: 'th-extrudeGeometry',
                    template: '<ng-content/>',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    providers: [
                        {
                            provide: ThBufferGeometry,
                            useExisting: forwardRef(() => ThExtrudeGeometry),
                        },
                    ],
                }]
        }] });

/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix */
class ThFilmPass extends ThPass {
    getType() {
        return FilmPass;
    }
    set uniforms(map) {
        if (this._objRef) {
            Object.assign(this._objRef.uniforms, map);
        }
    }
    get uniforms() {
        return this._objRef?.uniforms;
    }
    set material(value) {
        if (this._objRef) {
            this._objRef.material = value;
        }
    }
    get material() {
        return this._objRef?.material;
    }
    set fsQuad(value) {
        if (this._objRef) {
            this._objRef.fsQuad = value;
        }
    }
    get fsQuad() {
        return this._objRef?.fsQuad;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThFilmPass, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.1.2", type: ThFilmPass, selector: "th-filmPass", inputs: { uniforms: "uniforms", material: "material", fsQuad: "fsQuad" }, providers: [
            { provide: ThPassBase, useExisting: forwardRef(() => ThFilmPass) },
        ], usesInheritance: true, ngImport: i0, template: '<ng-content/>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThFilmPass, decorators: [{
            type: Component,
            args: [{
                    selector: 'th-filmPass',
                    template: '<ng-content/>',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    providers: [
                        { provide: ThPassBase, useExisting: forwardRef(() => ThFilmPass) },
                    ],
                }]
        }], propDecorators: { uniforms: [{
                type: Input
            }], material: [{
                type: Input
            }], fsQuad: [{
                type: Input
            }] } });

/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix */
class ThFirstPersonControls extends ThControlBase {
    getType() {
        return FirstPersonControls;
    }
    set object(value) {
        if (this._objRef) {
            this._objRef.object = value;
        }
    }
    get object() {
        return this._objRef?.object;
    }
    set domElement(value) {
        if (this._objRef) {
            this._objRef.domElement = value;
        }
    }
    get domElement() {
        return this._objRef?.domElement;
    }
    set enabled(value) {
        if (this._objRef) {
            this._objRef.enabled = value;
        }
    }
    get enabled() {
        return this._objRef?.enabled;
    }
    set movementSpeed(value) {
        if (this._objRef) {
            this._objRef.movementSpeed = value;
        }
    }
    get movementSpeed() {
        return this._objRef?.movementSpeed;
    }
    set lookSpeed(value) {
        if (this._objRef) {
            this._objRef.lookSpeed = value;
        }
    }
    get lookSpeed() {
        return this._objRef?.lookSpeed;
    }
    set lookVertical(value) {
        if (this._objRef) {
            this._objRef.lookVertical = value;
        }
    }
    get lookVertical() {
        return this._objRef?.lookVertical;
    }
    set autoForward(value) {
        if (this._objRef) {
            this._objRef.autoForward = value;
        }
    }
    get autoForward() {
        return this._objRef?.autoForward;
    }
    set activeLook(value) {
        if (this._objRef) {
            this._objRef.activeLook = value;
        }
    }
    get activeLook() {
        return this._objRef?.activeLook;
    }
    set heightSpeed(value) {
        if (this._objRef) {
            this._objRef.heightSpeed = value;
        }
    }
    get heightSpeed() {
        return this._objRef?.heightSpeed;
    }
    set heightCoef(value) {
        if (this._objRef) {
            this._objRef.heightCoef = value;
        }
    }
    get heightCoef() {
        return this._objRef?.heightCoef;
    }
    set heightMin(value) {
        if (this._objRef) {
            this._objRef.heightMin = value;
        }
    }
    get heightMin() {
        return this._objRef?.heightMin;
    }
    set heightMax(value) {
        if (this._objRef) {
            this._objRef.heightMax = value;
        }
    }
    get heightMax() {
        return this._objRef?.heightMax;
    }
    set constrainVertical(value) {
        if (this._objRef) {
            this._objRef.constrainVertical = value;
        }
    }
    get constrainVertical() {
        return this._objRef?.constrainVertical;
    }
    set verticalMin(value) {
        if (this._objRef) {
            this._objRef.verticalMin = value;
        }
    }
    get verticalMin() {
        return this._objRef?.verticalMin;
    }
    set verticalMax(value) {
        if (this._objRef) {
            this._objRef.verticalMax = value;
        }
    }
    get verticalMax() {
        return this._objRef?.verticalMax;
    }
    set mouseDragOn(value) {
        if (this._objRef) {
            this._objRef.mouseDragOn = value;
        }
    }
    get mouseDragOn() {
        return this._objRef?.mouseDragOn;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThFirstPersonControls, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.1.2", type: ThFirstPersonControls, selector: "th-firstPersonControls", inputs: { object: "object", domElement: "domElement", enabled: "enabled", movementSpeed: "movementSpeed", lookSpeed: "lookSpeed", lookVertical: "lookVertical", autoForward: "autoForward", activeLook: "activeLook", heightSpeed: "heightSpeed", heightCoef: "heightCoef", heightMin: "heightMin", heightMax: "heightMax", constrainVertical: "constrainVertical", verticalMin: "verticalMin", verticalMax: "verticalMax", mouseDragOn: "mouseDragOn" }, providers: [
            {
                provide: ThControlBase,
                useExisting: forwardRef(() => ThFirstPersonControls),
            },
        ], usesInheritance: true, ngImport: i0, template: '<ng-content/>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThFirstPersonControls, decorators: [{
            type: Component,
            args: [{
                    selector: 'th-firstPersonControls',
                    template: '<ng-content/>',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    providers: [
                        {
                            provide: ThControlBase,
                            useExisting: forwardRef(() => ThFirstPersonControls),
                        },
                    ],
                }]
        }], propDecorators: { object: [{
                type: Input
            }], domElement: [{
                type: Input
            }], enabled: [{
                type: Input
            }], movementSpeed: [{
                type: Input
            }], lookSpeed: [{
                type: Input
            }], lookVertical: [{
                type: Input
            }], autoForward: [{
                type: Input
            }], activeLook: [{
                type: Input
            }], heightSpeed: [{
                type: Input
            }], heightCoef: [{
                type: Input
            }], heightMin: [{
                type: Input
            }], heightMax: [{
                type: Input
            }], constrainVertical: [{
                type: Input
            }], verticalMin: [{
                type: Input
            }], verticalMax: [{
                type: Input
            }], mouseDragOn: [{
                type: Input
            }] } });

/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix */
class ThFlyControls extends ThControlBase {
    getType() {
        return FlyControls;
    }
    set autoForward(value) {
        if (this._objRef) {
            this._objRef.autoForward = value;
        }
    }
    get autoForward() {
        return this._objRef?.autoForward;
    }
    set domElement(value) {
        if (this._objRef) {
            this._objRef.domElement = value;
        }
    }
    get domElement() {
        return this._objRef?.domElement;
    }
    set dragToLook(value) {
        if (this._objRef) {
            this._objRef.dragToLook = value;
        }
    }
    get dragToLook() {
        return this._objRef?.dragToLook;
    }
    set enabled(value) {
        if (this._objRef) {
            this._objRef.enabled = value;
        }
    }
    get enabled() {
        return this._objRef?.enabled;
    }
    set movementSpeed(value) {
        if (this._objRef) {
            this._objRef.movementSpeed = value;
        }
    }
    get movementSpeed() {
        return this._objRef?.movementSpeed;
    }
    set object(value) {
        if (this._objRef) {
            this._objRef.object = value;
        }
    }
    get object() {
        return this._objRef?.object;
    }
    set rollSpeed(value) {
        if (this._objRef) {
            this._objRef.rollSpeed = value;
        }
    }
    get rollSpeed() {
        return this._objRef?.rollSpeed;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThFlyControls, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.1.2", type: ThFlyControls, selector: "th-flyControls", inputs: { autoForward: "autoForward", domElement: "domElement", dragToLook: "dragToLook", enabled: "enabled", movementSpeed: "movementSpeed", object: "object", rollSpeed: "rollSpeed" }, providers: [
            { provide: ThControlBase, useExisting: forwardRef(() => ThFlyControls) },
        ], usesInheritance: true, ngImport: i0, template: '<ng-content/>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThFlyControls, decorators: [{
            type: Component,
            args: [{
                    selector: 'th-flyControls',
                    template: '<ng-content/>',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    providers: [
                        { provide: ThControlBase, useExisting: forwardRef(() => ThFlyControls) },
                    ],
                }]
        }], propDecorators: { autoForward: [{
                type: Input
            }], domElement: [{
                type: Input
            }], dragToLook: [{
                type: Input
            }], enabled: [{
                type: Input
            }], movementSpeed: [{
                type: Input
            }], object: [{
                type: Input
            }], rollSpeed: [{
                type: Input
            }] } });

/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix */
class ThFramebufferTexture extends ThTexture {
    getType() {
        return FramebufferTexture;
    }
    get isFramebufferTexture() {
        return this._objRef?.isFramebufferTexture;
    }
    set magFilter(value) {
        if (this._objRef) {
            this._objRef.magFilter = value;
        }
    }
    get magFilter() {
        return this._objRef?.magFilter;
    }
    set minFilter(value) {
        if (this._objRef) {
            this._objRef.minFilter = value;
        }
    }
    get minFilter() {
        return this._objRef?.minFilter;
    }
    set generateMipmaps(value) {
        if (this._objRef) {
            this._objRef.generateMipmaps = value;
        }
    }
    get generateMipmaps() {
        return this._objRef?.generateMipmaps;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThFramebufferTexture, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.1.2", type: ThFramebufferTexture, selector: "th-framebufferTexture", inputs: { magFilter: "magFilter", minFilter: "minFilter", generateMipmaps: "generateMipmaps" }, providers: [
            {
                provide: ThTextureBase,
                useExisting: forwardRef(() => ThFramebufferTexture),
            },
        ], usesInheritance: true, ngImport: i0, template: '<ng-content/>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThFramebufferTexture, decorators: [{
            type: Component,
            args: [{
                    selector: 'th-framebufferTexture',
                    template: '<ng-content/>',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    providers: [
                        {
                            provide: ThTextureBase,
                            useExisting: forwardRef(() => ThFramebufferTexture),
                        },
                    ],
                }]
        }], propDecorators: { magFilter: [{
                type: Input
            }], minFilter: [{
                type: Input
            }], generateMipmaps: [{
                type: Input
            }] } });

/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix */
class ThGlitchPass extends ThPass {
    getType() {
        return GlitchPass;
    }
    set uniforms(map) {
        if (this._objRef) {
            Object.assign(this._objRef.uniforms, map);
        }
    }
    get uniforms() {
        return this._objRef?.uniforms;
    }
    set material(value) {
        if (this._objRef) {
            this._objRef.material = value;
        }
    }
    get material() {
        return this._objRef?.material;
    }
    set fsQuad(value) {
        if (this._objRef) {
            this._objRef.fsQuad = value;
        }
    }
    get fsQuad() {
        return this._objRef?.fsQuad;
    }
    set goWild(value) {
        if (this._objRef) {
            this._objRef.goWild = value;
        }
    }
    get goWild() {
        return this._objRef?.goWild;
    }
    set curF(value) {
        if (this._objRef) {
            this._objRef.curF = value;
        }
    }
    get curF() {
        return this._objRef?.curF;
    }
    set randX(value) {
        if (this._objRef) {
            this._objRef.randX = value;
        }
    }
    get randX() {
        return this._objRef?.randX;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThGlitchPass, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.1.2", type: ThGlitchPass, selector: "th-glitchPass", inputs: { uniforms: "uniforms", material: "material", fsQuad: "fsQuad", goWild: "goWild", curF: "curF", randX: "randX" }, providers: [
            { provide: ThPassBase, useExisting: forwardRef(() => ThGlitchPass) },
        ], usesInheritance: true, ngImport: i0, template: '<ng-content/>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThGlitchPass, decorators: [{
            type: Component,
            args: [{
                    selector: 'th-glitchPass',
                    template: '<ng-content/>',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    providers: [
                        { provide: ThPassBase, useExisting: forwardRef(() => ThGlitchPass) },
                    ],
                }]
        }], propDecorators: { uniforms: [{
                type: Input
            }], material: [{
                type: Input
            }], fsQuad: [{
                type: Input
            }], goWild: [{
                type: Input
            }], curF: [{
                type: Input
            }], randX: [{
                type: Input
            }] } });

/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix */
class ThGridHelper extends ThLineSegments {
    getType() {
        return GridHelper;
    }
    get type() {
        return this._objRef?.type;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThGridHelper, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.1.2", type: ThGridHelper, selector: "th-gridHelper", providers: [
            { provide: ThObject3D, useExisting: forwardRef(() => ThGridHelper) },
        ], usesInheritance: true, ngImport: i0, template: '<ng-content/>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThGridHelper, decorators: [{
            type: Component,
            args: [{
                    selector: 'th-gridHelper',
                    template: '<ng-content/>',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    providers: [
                        { provide: ThObject3D, useExisting: forwardRef(() => ThGridHelper) },
                    ],
                }]
        }] });

/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix */
class ThGroup extends ThObject3D {
    getType() {
        return Group;
    }
    get isGroup() {
        return this._objRef?.isGroup;
    }
    get type() {
        return this._objRef?.type;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThGroup, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.1.2", type: ThGroup, selector: "th-group", providers: [{ provide: ThObject3D, useExisting: forwardRef(() => ThGroup) }], usesInheritance: true, ngImport: i0, template: '<ng-content/>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThGroup, decorators: [{
            type: Component,
            args: [{
                    selector: 'th-group',
                    template: '<ng-content/>',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    providers: [{ provide: ThObject3D, useExisting: forwardRef(() => ThGroup) }],
                }]
        }] });

/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix */
class ThHalftonePass extends ThPass {
    getType() {
        return HalftonePass;
    }
    set uniforms(map) {
        if (this._objRef) {
            Object.assign(this._objRef.uniforms, map);
        }
    }
    get uniforms() {
        return this._objRef?.uniforms;
    }
    set material(value) {
        if (this._objRef) {
            this._objRef.material = value;
        }
    }
    get material() {
        return this._objRef?.material;
    }
    set fsQuad(value) {
        if (this._objRef) {
            this._objRef.fsQuad = value;
        }
    }
    get fsQuad() {
        return this._objRef?.fsQuad;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThHalftonePass, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.1.2", type: ThHalftonePass, selector: "th-halftonePass", inputs: { uniforms: "uniforms", material: "material", fsQuad: "fsQuad" }, providers: [
            { provide: ThPassBase, useExisting: forwardRef(() => ThHalftonePass) },
        ], usesInheritance: true, ngImport: i0, template: '<ng-content/>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThHalftonePass, decorators: [{
            type: Component,
            args: [{
                    selector: 'th-halftonePass',
                    template: '<ng-content/>',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    providers: [
                        { provide: ThPassBase, useExisting: forwardRef(() => ThHalftonePass) },
                    ],
                }]
        }], propDecorators: { uniforms: [{
                type: Input
            }], material: [{
                type: Input
            }], fsQuad: [{
                type: Input
            }] } });

/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix */
class ThHemisphereLight extends ThLight {
    getType() {
        return HemisphereLight;
    }
    get isHemisphereLight() {
        return this._objRef?.isHemisphereLight;
    }
    get type() {
        return this._objRef?.type;
    }
    set position(value) {
        if (this._objRef) {
            applyValue(this._objRef.position, value);
        }
    }
    get position() {
        return this._objRef?.position;
    }
    set color(value) {
        if (this._objRef) {
            this._objRef.color = applyValue(this._objRef.color, value);
        }
    }
    get color() {
        return this._objRef?.color;
    }
    set groundColor(value) {
        if (this._objRef) {
            this._objRef.groundColor = applyValue(this._objRef.groundColor, value);
        }
    }
    get groundColor() {
        return this._objRef?.groundColor;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThHemisphereLight, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.1.2", type: ThHemisphereLight, selector: "th-hemisphereLight", inputs: { position: "position", color: "color", groundColor: "groundColor" }, providers: [
            { provide: ThObject3D, useExisting: forwardRef(() => ThHemisphereLight) },
        ], usesInheritance: true, ngImport: i0, template: '<ng-content/>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThHemisphereLight, decorators: [{
            type: Component,
            args: [{
                    selector: 'th-hemisphereLight',
                    template: '<ng-content/>',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    providers: [
                        { provide: ThObject3D, useExisting: forwardRef(() => ThHemisphereLight) },
                    ],
                }]
        }], propDecorators: { position: [{
                type: Input
            }], color: [{
                type: Input
            }], groundColor: [{
                type: Input
            }] } });

/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix */
class ThHemisphereLightHelper extends ThObject3D {
    getType() {
        return HemisphereLightHelper;
    }
    get type() {
        return this._objRef?.type;
    }
    set light(value) {
        if (this._objRef) {
            this._objRef.light = value;
        }
    }
    get light() {
        return this._objRef?.light;
    }
    set matrix(value) {
        if (this._objRef) {
            this._objRef.matrix = applyValue(this._objRef.matrix, value);
        }
    }
    get matrix() {
        return this._objRef?.matrix;
    }
    set matrixAutoUpdate(value) {
        if (this._objRef) {
            this._objRef.matrixAutoUpdate = value;
        }
    }
    get matrixAutoUpdate() {
        return this._objRef?.matrixAutoUpdate;
    }
    set material(value) {
        if (this._objRef) {
            this._objRef.material = value;
        }
    }
    get material() {
        return this._objRef?.material;
    }
    set color(value) {
        if (this._objRef) {
            this._objRef.color = value;
        }
    }
    get color() {
        return this._objRef?.color;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThHemisphereLightHelper, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.1.2", type: ThHemisphereLightHelper, selector: "th-hemisphereLightHelper", inputs: { light: "light", matrix: "matrix", matrixAutoUpdate: "matrixAutoUpdate", material: "material", color: "color" }, providers: [
            {
                provide: ThObject3D,
                useExisting: forwardRef(() => ThHemisphereLightHelper),
            },
        ], usesInheritance: true, ngImport: i0, template: '<ng-content/>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThHemisphereLightHelper, decorators: [{
            type: Component,
            args: [{
                    selector: 'th-hemisphereLightHelper',
                    template: '<ng-content/>',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    providers: [
                        {
                            provide: ThObject3D,
                            useExisting: forwardRef(() => ThHemisphereLightHelper),
                        },
                    ],
                }]
        }], propDecorators: { light: [{
                type: Input
            }], matrix: [{
                type: Input
            }], matrixAutoUpdate: [{
                type: Input
            }], material: [{
                type: Input
            }], color: [{
                type: Input
            }] } });

/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix */
class ThIcosahedronGeometry extends ThPolyhedronGeometry {
    getType() {
        return IcosahedronGeometry;
    }
    get type() {
        return this._objRef?.type;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThIcosahedronGeometry, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.1.2", type: ThIcosahedronGeometry, selector: "th-icosahedronGeometry", providers: [
            {
                provide: ThBufferGeometry,
                useExisting: forwardRef(() => ThIcosahedronGeometry),
            },
        ], usesInheritance: true, ngImport: i0, template: '<ng-content/>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThIcosahedronGeometry, decorators: [{
            type: Component,
            args: [{
                    selector: 'th-icosahedronGeometry',
                    template: '<ng-content/>',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    providers: [
                        {
                            provide: ThBufferGeometry,
                            useExisting: forwardRef(() => ThIcosahedronGeometry),
                        },
                    ],
                }]
        }] });

/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix */
class ThInstancedBufferGeometry extends ThBufferGeometry {
    getType() {
        return InstancedBufferGeometry;
    }
    set type(value) {
        if (this._objRef) {
            this._objRef.type = value;
        }
    }
    get type() {
        return this._objRef?.type;
    }
    get isInstancedBufferGeometry() {
        return this._objRef?.isInstancedBufferGeometry;
    }
    set instanceCount(value) {
        if (this._objRef) {
            this._objRef.instanceCount = value;
        }
    }
    get instanceCount() {
        return this._objRef?.instanceCount;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThInstancedBufferGeometry, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.1.2", type: ThInstancedBufferGeometry, selector: "th-instancedBufferGeometry", inputs: { type: "type", instanceCount: "instanceCount" }, providers: [
            {
                provide: ThBufferGeometry,
                useExisting: forwardRef(() => ThInstancedBufferGeometry),
            },
        ], usesInheritance: true, ngImport: i0, template: '<ng-content/>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThInstancedBufferGeometry, decorators: [{
            type: Component,
            args: [{
                    selector: 'th-instancedBufferGeometry',
                    template: '<ng-content/>',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    providers: [
                        {
                            provide: ThBufferGeometry,
                            useExisting: forwardRef(() => ThInstancedBufferGeometry),
                        },
                    ],
                }]
        }], propDecorators: { type: [{
                type: Input
            }], instanceCount: [{
                type: Input
            }] } });

/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix */
class ThInstancedMesh extends ThMesh {
    getType() {
        return InstancedMesh;
    }
    get isInstancedMesh() {
        return this._objRef?.isInstancedMesh;
    }
    set boundingBox(value) {
        if (this._objRef) {
            this._objRef.boundingBox = applyValue(this._objRef.boundingBox, value);
        }
    }
    get boundingBox() {
        return this._objRef?.boundingBox;
    }
    set boundingSphere(value) {
        if (this._objRef) {
            this._objRef.boundingSphere = applyValue(this._objRef.boundingSphere, value);
        }
    }
    get boundingSphere() {
        return this._objRef?.boundingSphere;
    }
    set count(value) {
        if (this._objRef) {
            this._objRef.count = value;
        }
    }
    get count() {
        return this._objRef?.count;
    }
    set instanceColor(value) {
        if (this._objRef) {
            this._objRef.instanceColor = applyValue(this._objRef.instanceColor, value);
        }
    }
    get instanceColor() {
        return this._objRef?.instanceColor;
    }
    set instanceMatrix(value) {
        if (this._objRef) {
            this._objRef.instanceMatrix = applyValue(this._objRef.instanceMatrix, value);
        }
    }
    get instanceMatrix() {
        return this._objRef?.instanceMatrix;
    }
    set morphTexture(value) {
        if (this._objRef) {
            this._objRef.morphTexture = value;
        }
    }
    get morphTexture() {
        return this._objRef?.morphTexture;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThInstancedMesh, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.1.2", type: ThInstancedMesh, selector: "th-instancedMesh", inputs: { boundingBox: "boundingBox", boundingSphere: "boundingSphere", count: "count", instanceColor: "instanceColor", instanceMatrix: "instanceMatrix", morphTexture: "morphTexture" }, providers: [
            { provide: ThObject3D, useExisting: forwardRef(() => ThInstancedMesh) },
        ], usesInheritance: true, ngImport: i0, template: '<ng-content/>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThInstancedMesh, decorators: [{
            type: Component,
            args: [{
                    selector: 'th-instancedMesh',
                    template: '<ng-content/>',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    providers: [
                        { provide: ThObject3D, useExisting: forwardRef(() => ThInstancedMesh) },
                    ],
                }]
        }], propDecorators: { boundingBox: [{
                type: Input
            }], boundingSphere: [{
                type: Input
            }], count: [{
                type: Input
            }], instanceColor: [{
                type: Input
            }], instanceMatrix: [{
                type: Input
            }], morphTexture: [{
                type: Input
            }] } });

/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix */
class ThLOD extends ThObject3D {
    getType() {
        return LOD;
    }
    get isLOD() {
        return this._objRef?.isLOD;
    }
    get type() {
        return this._objRef?.type;
    }
    set levels(value) {
        if (this._objRef) {
            this._objRef.levels = value;
        }
    }
    get levels() {
        return this._objRef?.levels;
    }
    set autoUpdate(value) {
        if (this._objRef) {
            this._objRef.autoUpdate = value;
        }
    }
    get autoUpdate() {
        return this._objRef?.autoUpdate;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThLOD, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.1.2", type: ThLOD, selector: "th-lOD", inputs: { levels: "levels", autoUpdate: "autoUpdate" }, providers: [{ provide: ThObject3D, useExisting: forwardRef(() => ThLOD) }], usesInheritance: true, ngImport: i0, template: '<ng-content/>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThLOD, decorators: [{
            type: Component,
            args: [{
                    selector: 'th-lOD',
                    template: '<ng-content/>',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    providers: [{ provide: ThObject3D, useExisting: forwardRef(() => ThLOD) }],
                }]
        }], propDecorators: { levels: [{
                type: Input
            }], autoUpdate: [{
                type: Input
            }] } });

/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix */
class ThShaderPass extends ThPass {
    getType() {
        return ShaderPass;
    }
    set textureID(value) {
        if (this._objRef) {
            this._objRef.textureID = value;
        }
    }
    get textureID() {
        return this._objRef?.textureID;
    }
    set uniforms(map) {
        if (this._objRef) {
            Object.assign(this._objRef.uniforms, map);
        }
    }
    get uniforms() {
        return this._objRef?.uniforms;
    }
    set material(value) {
        if (this._objRef) {
            this._objRef.material = value;
        }
    }
    get material() {
        return this._objRef?.material;
    }
    set fsQuad(value) {
        if (this._objRef) {
            this._objRef.fsQuad = value;
        }
    }
    get fsQuad() {
        return this._objRef?.fsQuad;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThShaderPass, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.1.2", type: ThShaderPass, selector: "th-shaderPass", inputs: { textureID: "textureID", uniforms: "uniforms", material: "material", fsQuad: "fsQuad" }, providers: [
            { provide: ThPassBase, useExisting: forwardRef(() => ThShaderPass) },
        ], usesInheritance: true, ngImport: i0, template: '<ng-content/>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThShaderPass, decorators: [{
            type: Component,
            args: [{
                    selector: 'th-shaderPass',
                    template: '<ng-content/>',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    providers: [
                        { provide: ThPassBase, useExisting: forwardRef(() => ThShaderPass) },
                    ],
                }]
        }], propDecorators: { textureID: [{
                type: Input
            }], uniforms: [{
                type: Input
            }], material: [{
                type: Input
            }], fsQuad: [{
                type: Input
            }] } });

/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix */
class ThLUTPass extends ThShaderPass {
    getType() {
        return LUTPass;
    }
    set lut(value) {
        if (this._objRef) {
            this._objRef.lut = value;
        }
    }
    get lut() {
        return this._objRef?.lut;
    }
    set intensity(value) {
        if (this._objRef) {
            this._objRef.intensity = value;
        }
    }
    get intensity() {
        return this._objRef?.intensity;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThLUTPass, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.1.2", type: ThLUTPass, selector: "th-lUTPass", inputs: { lut: "lut", intensity: "intensity" }, providers: [
            { provide: ThPassBase, useExisting: forwardRef(() => ThLUTPass) },
        ], usesInheritance: true, ngImport: i0, template: '<ng-content/>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThLUTPass, decorators: [{
            type: Component,
            args: [{
                    selector: 'th-lUTPass',
                    template: '<ng-content/>',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    providers: [
                        { provide: ThPassBase, useExisting: forwardRef(() => ThLUTPass) },
                    ],
                }]
        }], propDecorators: { lut: [{
                type: Input
            }], intensity: [{
                type: Input
            }] } });

/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix */
class ThLatheGeometry extends ThBufferGeometry {
    getType() {
        return LatheGeometry;
    }
    get type() {
        return this._objRef?.type;
    }
    get parameters() {
        return this._objRef?.parameters;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThLatheGeometry, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.1.2", type: ThLatheGeometry, selector: "th-latheGeometry", providers: [
            {
                provide: ThBufferGeometry,
                useExisting: forwardRef(() => ThLatheGeometry),
            },
        ], usesInheritance: true, ngImport: i0, template: '<ng-content/>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThLatheGeometry, decorators: [{
            type: Component,
            args: [{
                    selector: 'th-latheGeometry',
                    template: '<ng-content/>',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    providers: [
                        {
                            provide: ThBufferGeometry,
                            useExisting: forwardRef(() => ThLatheGeometry),
                        },
                    ],
                }]
        }] });

/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix */
class ThLightProbe extends ThLight {
    getType() {
        return LightProbe;
    }
    get isLightProbe() {
        return this._objRef?.isLightProbe;
    }
    set sh(value) {
        if (this._objRef) {
            this._objRef.sh = applyValue(this._objRef.sh, value);
        }
    }
    get sh() {
        return this._objRef?.sh;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThLightProbe, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.1.2", type: ThLightProbe, selector: "th-lightProbe", inputs: { sh: "sh" }, providers: [
            { provide: ThObject3D, useExisting: forwardRef(() => ThLightProbe) },
        ], usesInheritance: true, ngImport: i0, template: '<ng-content/>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThLightProbe, decorators: [{
            type: Component,
            args: [{
                    selector: 'th-lightProbe',
                    template: '<ng-content/>',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    providers: [
                        { provide: ThObject3D, useExisting: forwardRef(() => ThLightProbe) },
                    ],
                }]
        }], propDecorators: { sh: [{
                type: Input
            }] } });

// eslint-disable-next-line @angular-eslint/component-class-suffix
class ThMaterialBase extends ThWrapperBase {
    constructor(parent) {
        super();
        this.parent = parent;
    }
    addToParent() {
        if (!this.parent.objRef) {
            throw new Error("parent object doesn't hold a three js object instance");
        }
        this.parent.objRef.material = this.objRef;
    }
    removeFromParent() {
        if (this._objRef && this.parent && this.parent.objRef) {
            this.parent.objRef.material = undefined;
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThMaterialBase, deps: [{ token: ThObject3D }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.1.2", type: ThMaterialBase, selector: "th-abs-material", usesInheritance: true, ngImport: i0, template: '', isInline: true }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThMaterialBase, decorators: [{
            type: Component,
            args: [{
                    selector: 'th-abs-material',
                    template: ''
                }]
        }], ctorParameters: () => [{ type: ThObject3D }] });

/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix */
class ThMaterial extends ThMaterialBase {
    getType() {
        return Material;
    }
    get isMaterial() {
        return this._objRef?.isMaterial;
    }
    set alphaHash(value) {
        if (this._objRef) {
            this._objRef.alphaHash = value;
        }
    }
    get alphaHash() {
        return this._objRef?.alphaHash;
    }
    set alphaToCoverage(value) {
        if (this._objRef) {
            this._objRef.alphaToCoverage = value;
        }
    }
    get alphaToCoverage() {
        return this._objRef?.alphaToCoverage;
    }
    set blendAlpha(value) {
        if (this._objRef) {
            this._objRef.blendAlpha = value;
        }
    }
    get blendAlpha() {
        return this._objRef?.blendAlpha;
    }
    set blendColor(value) {
        if (this._objRef) {
            this._objRef.blendColor = applyValue(this._objRef.blendColor, value);
        }
    }
    get blendColor() {
        return this._objRef?.blendColor;
    }
    set blendDst(value) {
        if (this._objRef) {
            this._objRef.blendDst = value;
        }
    }
    get blendDst() {
        return this._objRef?.blendDst;
    }
    set blendDstAlpha(value) {
        if (this._objRef) {
            this._objRef.blendDstAlpha = value;
        }
    }
    get blendDstAlpha() {
        return this._objRef?.blendDstAlpha;
    }
    set blendEquation(value) {
        if (this._objRef) {
            this._objRef.blendEquation = value;
        }
    }
    get blendEquation() {
        return this._objRef?.blendEquation;
    }
    set blendEquationAlpha(value) {
        if (this._objRef) {
            this._objRef.blendEquationAlpha = value;
        }
    }
    get blendEquationAlpha() {
        return this._objRef?.blendEquationAlpha;
    }
    set blending(value) {
        if (this._objRef) {
            this._objRef.blending = value;
        }
    }
    get blending() {
        return this._objRef?.blending;
    }
    set blendSrc(value) {
        if (this._objRef) {
            this._objRef.blendSrc = value;
        }
    }
    get blendSrc() {
        return this._objRef?.blendSrc;
    }
    set blendSrcAlpha(value) {
        if (this._objRef) {
            this._objRef.blendSrcAlpha = value;
        }
    }
    get blendSrcAlpha() {
        return this._objRef?.blendSrcAlpha;
    }
    set clipIntersection(value) {
        if (this._objRef) {
            this._objRef.clipIntersection = value;
        }
    }
    get clipIntersection() {
        return this._objRef?.clipIntersection;
    }
    set clippingPlanes(value) {
        if (this._objRef) {
            this._objRef.clippingPlanes = value;
        }
    }
    get clippingPlanes() {
        return this._objRef?.clippingPlanes;
    }
    set clipShadows(value) {
        if (this._objRef) {
            this._objRef.clipShadows = value;
        }
    }
    get clipShadows() {
        return this._objRef?.clipShadows;
    }
    set colorWrite(value) {
        if (this._objRef) {
            this._objRef.colorWrite = value;
        }
    }
    get colorWrite() {
        return this._objRef?.colorWrite;
    }
    set defines(value) {
        if (this._objRef) {
            this._objRef.defines = value;
        }
    }
    get defines() {
        return this._objRef?.defines;
    }
    set depthFunc(value) {
        if (this._objRef) {
            this._objRef.depthFunc = value;
        }
    }
    get depthFunc() {
        return this._objRef?.depthFunc;
    }
    set depthTest(value) {
        if (this._objRef) {
            this._objRef.depthTest = value;
        }
    }
    get depthTest() {
        return this._objRef?.depthTest;
    }
    set depthWrite(value) {
        if (this._objRef) {
            this._objRef.depthWrite = value;
        }
    }
    get depthWrite() {
        return this._objRef?.depthWrite;
    }
    set id(value) {
        if (this._objRef) {
            this._objRef.id = value;
        }
    }
    get id() {
        return this._objRef?.id;
    }
    set stencilWrite(value) {
        if (this._objRef) {
            this._objRef.stencilWrite = value;
        }
    }
    get stencilWrite() {
        return this._objRef?.stencilWrite;
    }
    set stencilFunc(value) {
        if (this._objRef) {
            this._objRef.stencilFunc = value;
        }
    }
    get stencilFunc() {
        return this._objRef?.stencilFunc;
    }
    set stencilRef(value) {
        if (this._objRef) {
            this._objRef.stencilRef = value;
        }
    }
    get stencilRef() {
        return this._objRef?.stencilRef;
    }
    set stencilWriteMask(value) {
        if (this._objRef) {
            this._objRef.stencilWriteMask = value;
        }
    }
    get stencilWriteMask() {
        return this._objRef?.stencilWriteMask;
    }
    set stencilFuncMask(value) {
        if (this._objRef) {
            this._objRef.stencilFuncMask = value;
        }
    }
    get stencilFuncMask() {
        return this._objRef?.stencilFuncMask;
    }
    set stencilFail(value) {
        if (this._objRef) {
            this._objRef.stencilFail = value;
        }
    }
    get stencilFail() {
        return this._objRef?.stencilFail;
    }
    set stencilZFail(value) {
        if (this._objRef) {
            this._objRef.stencilZFail = value;
        }
    }
    get stencilZFail() {
        return this._objRef?.stencilZFail;
    }
    set stencilZPass(value) {
        if (this._objRef) {
            this._objRef.stencilZPass = value;
        }
    }
    get stencilZPass() {
        return this._objRef?.stencilZPass;
    }
    set name(value) {
        if (this._objRef) {
            this._objRef.name = value;
        }
    }
    get name() {
        return this._objRef?.name;
    }
    set opacity(value) {
        if (this._objRef) {
            this._objRef.opacity = value;
        }
    }
    get opacity() {
        return this._objRef?.opacity;
    }
    set polygonOffset(value) {
        if (this._objRef) {
            this._objRef.polygonOffset = value;
        }
    }
    get polygonOffset() {
        return this._objRef?.polygonOffset;
    }
    set polygonOffsetFactor(value) {
        if (this._objRef) {
            this._objRef.polygonOffsetFactor = value;
        }
    }
    get polygonOffsetFactor() {
        return this._objRef?.polygonOffsetFactor;
    }
    set polygonOffsetUnits(value) {
        if (this._objRef) {
            this._objRef.polygonOffsetUnits = value;
        }
    }
    get polygonOffsetUnits() {
        return this._objRef?.polygonOffsetUnits;
    }
    set precision(value) {
        if (this._objRef) {
            this._objRef.precision = value;
        }
    }
    get precision() {
        return this._objRef?.precision;
    }
    set premultipliedAlpha(value) {
        if (this._objRef) {
            this._objRef.premultipliedAlpha = value;
        }
    }
    get premultipliedAlpha() {
        return this._objRef?.premultipliedAlpha;
    }
    set forceSinglePass(value) {
        if (this._objRef) {
            this._objRef.forceSinglePass = value;
        }
    }
    get forceSinglePass() {
        return this._objRef?.forceSinglePass;
    }
    set dithering(value) {
        if (this._objRef) {
            this._objRef.dithering = value;
        }
    }
    get dithering() {
        return this._objRef?.dithering;
    }
    set side(value) {
        if (this._objRef) {
            this._objRef.side = value;
        }
    }
    get side() {
        return this._objRef?.side;
    }
    set shadowSide(value) {
        if (this._objRef) {
            this._objRef.shadowSide = value;
        }
    }
    get shadowSide() {
        return this._objRef?.shadowSide;
    }
    set toneMapped(value) {
        if (this._objRef) {
            this._objRef.toneMapped = value;
        }
    }
    get toneMapped() {
        return this._objRef?.toneMapped;
    }
    set transparent(value) {
        if (this._objRef) {
            this._objRef.transparent = value;
        }
    }
    get transparent() {
        return this._objRef?.transparent;
    }
    set type(value) {
        if (this._objRef) {
            this._objRef.type = value;
        }
    }
    get type() {
        return this._objRef?.type;
    }
    set uuid(value) {
        if (this._objRef) {
            this._objRef.uuid = value;
        }
    }
    get uuid() {
        return this._objRef?.uuid;
    }
    set vertexColors(value) {
        if (this._objRef) {
            this._objRef.vertexColors = value;
        }
    }
    get vertexColors() {
        return this._objRef?.vertexColors;
    }
    set visible(value) {
        if (this._objRef) {
            this._objRef.visible = value;
        }
    }
    get visible() {
        return this._objRef?.visible;
    }
    set userData(value) {
        if (this._objRef) {
            this._objRef.userData = value;
        }
    }
    get userData() {
        return this._objRef?.userData;
    }
    set version(value) {
        if (this._objRef) {
            this._objRef.version = value;
        }
    }
    get version() {
        return this._objRef?.version;
    }
    get alphaTest() {
        return this._objRef?.alphaTest;
    }
    set alphaTest(value) {
        if (this._objRef) {
            this._objRef.alphaTest = value;
        }
    }
    set needsUpdate(value) {
        if (this._objRef) {
            this._objRef.needsUpdate = value;
        }
    }
    constructor(hostObject) {
        super(hostObject);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThMaterial, deps: [{ token: ThObject3D, skipSelf: true }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.1.2", type: ThMaterial, selector: "th-material", inputs: { alphaHash: "alphaHash", alphaToCoverage: "alphaToCoverage", blendAlpha: "blendAlpha", blendColor: "blendColor", blendDst: "blendDst", blendDstAlpha: "blendDstAlpha", blendEquation: "blendEquation", blendEquationAlpha: "blendEquationAlpha", blending: "blending", blendSrc: "blendSrc", blendSrcAlpha: "blendSrcAlpha", clipIntersection: "clipIntersection", clippingPlanes: "clippingPlanes", clipShadows: "clipShadows", colorWrite: "colorWrite", defines: "defines", depthFunc: "depthFunc", depthTest: "depthTest", depthWrite: "depthWrite", id: "id", stencilWrite: "stencilWrite", stencilFunc: "stencilFunc", stencilRef: "stencilRef", stencilWriteMask: "stencilWriteMask", stencilFuncMask: "stencilFuncMask", stencilFail: "stencilFail", stencilZFail: "stencilZFail", stencilZPass: "stencilZPass", name: "name", opacity: "opacity", polygonOffset: "polygonOffset", polygonOffsetFactor: "polygonOffsetFactor", polygonOffsetUnits: "polygonOffsetUnits", precision: "precision", premultipliedAlpha: "premultipliedAlpha", forceSinglePass: "forceSinglePass", dithering: "dithering", side: "side", shadowSide: "shadowSide", toneMapped: "toneMapped", transparent: "transparent", type: "type", uuid: "uuid", vertexColors: "vertexColors", visible: "visible", userData: "userData", version: "version", alphaTest: "alphaTest", needsUpdate: "needsUpdate" }, providers: [], usesInheritance: true, ngImport: i0, template: '<ng-content/>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThMaterial, decorators: [{
            type: Component,
            args: [{
                    selector: 'th-material',
                    template: '<ng-content/>',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    providers: [],
                }]
        }], ctorParameters: () => [{ type: ThObject3D, decorators: [{
                    type: SkipSelf
                }] }], propDecorators: { alphaHash: [{
                type: Input
            }], alphaToCoverage: [{
                type: Input
            }], blendAlpha: [{
                type: Input
            }], blendColor: [{
                type: Input
            }], blendDst: [{
                type: Input
            }], blendDstAlpha: [{
                type: Input
            }], blendEquation: [{
                type: Input
            }], blendEquationAlpha: [{
                type: Input
            }], blending: [{
                type: Input
            }], blendSrc: [{
                type: Input
            }], blendSrcAlpha: [{
                type: Input
            }], clipIntersection: [{
                type: Input
            }], clippingPlanes: [{
                type: Input
            }], clipShadows: [{
                type: Input
            }], colorWrite: [{
                type: Input
            }], defines: [{
                type: Input
            }], depthFunc: [{
                type: Input
            }], depthTest: [{
                type: Input
            }], depthWrite: [{
                type: Input
            }], id: [{
                type: Input
            }], stencilWrite: [{
                type: Input
            }], stencilFunc: [{
                type: Input
            }], stencilRef: [{
                type: Input
            }], stencilWriteMask: [{
                type: Input
            }], stencilFuncMask: [{
                type: Input
            }], stencilFail: [{
                type: Input
            }], stencilZFail: [{
                type: Input
            }], stencilZPass: [{
                type: Input
            }], name: [{
                type: Input
            }], opacity: [{
                type: Input
            }], polygonOffset: [{
                type: Input
            }], polygonOffsetFactor: [{
                type: Input
            }], polygonOffsetUnits: [{
                type: Input
            }], precision: [{
                type: Input
            }], premultipliedAlpha: [{
                type: Input
            }], forceSinglePass: [{
                type: Input
            }], dithering: [{
                type: Input
            }], side: [{
                type: Input
            }], shadowSide: [{
                type: Input
            }], toneMapped: [{
                type: Input
            }], transparent: [{
                type: Input
            }], type: [{
                type: Input
            }], uuid: [{
                type: Input
            }], vertexColors: [{
                type: Input
            }], visible: [{
                type: Input
            }], userData: [{
                type: Input
            }], version: [{
                type: Input
            }], alphaTest: [{
                type: Input
            }], needsUpdate: [{
                type: Input
            }] } });

/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix */
class ThLineBasicMaterial extends ThMaterial {
    getType() {
        return LineBasicMaterial;
    }
    get isLineBasicMaterial() {
        return this._objRef?.isLineBasicMaterial;
    }
    set type(value) {
        if (this._objRef) {
            this._objRef.type = value;
        }
    }
    get type() {
        return this._objRef?.type;
    }
    set color(value) {
        if (this._objRef) {
            this._objRef.color = applyValue(this._objRef.color, value);
        }
    }
    get color() {
        return this._objRef?.color;
    }
    set fog(value) {
        if (this._objRef) {
            this._objRef.fog = value;
        }
    }
    get fog() {
        return this._objRef?.fog;
    }
    set linewidth(value) {
        if (this._objRef) {
            this._objRef.linewidth = value;
        }
    }
    get linewidth() {
        return this._objRef?.linewidth;
    }
    set linecap(value) {
        if (this._objRef) {
            this._objRef.linecap = value;
        }
    }
    get linecap() {
        return this._objRef?.linecap;
    }
    set linejoin(value) {
        if (this._objRef) {
            this._objRef.linejoin = value;
        }
    }
    get linejoin() {
        return this._objRef?.linejoin;
    }
    set map(value) {
        if (this._objRef) {
            this._objRef.map = value;
        }
    }
    get map() {
        return this._objRef?.map;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThLineBasicMaterial, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.1.2", type: ThLineBasicMaterial, selector: "th-lineBasicMaterial", inputs: { type: "type", color: "color", fog: "fog", linewidth: "linewidth", linecap: "linecap", linejoin: "linejoin", map: "map" }, providers: [
            { provide: ThMaterial, useExisting: forwardRef(() => ThLineBasicMaterial) },
        ], usesInheritance: true, ngImport: i0, template: '<ng-content/>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThLineBasicMaterial, decorators: [{
            type: Component,
            args: [{
                    selector: 'th-lineBasicMaterial',
                    template: '<ng-content/>',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    providers: [
                        { provide: ThMaterial, useExisting: forwardRef(() => ThLineBasicMaterial) },
                    ],
                }]
        }], propDecorators: { type: [{
                type: Input
            }], color: [{
                type: Input
            }], fog: [{
                type: Input
            }], linewidth: [{
                type: Input
            }], linecap: [{
                type: Input
            }], linejoin: [{
                type: Input
            }], map: [{
                type: Input
            }] } });

/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix */
class ThLineDashedMaterial extends ThLineBasicMaterial {
    getType() {
        return LineDashedMaterial;
    }
    get isLineDashedMaterial() {
        return this._objRef?.isLineDashedMaterial;
    }
    set type(value) {
        if (this._objRef) {
            this._objRef.type = value;
        }
    }
    get type() {
        return this._objRef?.type;
    }
    set scale(value) {
        if (this._objRef) {
            this._objRef.scale = value;
        }
    }
    get scale() {
        return this._objRef?.scale;
    }
    set dashSize(value) {
        if (this._objRef) {
            this._objRef.dashSize = value;
        }
    }
    get dashSize() {
        return this._objRef?.dashSize;
    }
    set gapSize(value) {
        if (this._objRef) {
            this._objRef.gapSize = value;
        }
    }
    get gapSize() {
        return this._objRef?.gapSize;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThLineDashedMaterial, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.1.2", type: ThLineDashedMaterial, selector: "th-lineDashedMaterial", inputs: { type: "type", scale: "scale", dashSize: "dashSize", gapSize: "gapSize" }, providers: [
            {
                provide: ThMaterial,
                useExisting: forwardRef(() => ThLineDashedMaterial),
            },
        ], usesInheritance: true, ngImport: i0, template: '<ng-content/>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThLineDashedMaterial, decorators: [{
            type: Component,
            args: [{
                    selector: 'th-lineDashedMaterial',
                    template: '<ng-content/>',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    providers: [
                        {
                            provide: ThMaterial,
                            useExisting: forwardRef(() => ThLineDashedMaterial),
                        },
                    ],
                }]
        }], propDecorators: { type: [{
                type: Input
            }], scale: [{
                type: Input
            }], dashSize: [{
                type: Input
            }], gapSize: [{
                type: Input
            }] } });

/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix */
class ThLineLoop extends ThLine {
    getType() {
        return LineLoop;
    }
    get isLineLoop() {
        return this._objRef?.isLineLoop;
    }
    get type() {
        return this._objRef?.type;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThLineLoop, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.1.2", type: ThLineLoop, selector: "th-lineLoop", providers: [
            { provide: ThObject3D, useExisting: forwardRef(() => ThLineLoop) },
        ], usesInheritance: true, ngImport: i0, template: '<ng-content/>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThLineLoop, decorators: [{
            type: Component,
            args: [{
                    selector: 'th-lineLoop',
                    template: '<ng-content/>',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    providers: [
                        { provide: ThObject3D, useExisting: forwardRef(() => ThLineLoop) },
                    ],
                }]
        }] });

/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix */
class ThOrbitControls extends ThControlBase {
    getType() {
        return OrbitControls;
    }
    set object(value) {
        if (this._objRef) {
            this._objRef.object = value;
        }
    }
    get object() {
        return this._objRef?.object;
    }
    set domElement(value) {
        if (this._objRef) {
            this._objRef.domElement = value;
        }
    }
    get domElement() {
        return this._objRef?.domElement;
    }
    set enabled(value) {
        if (this._objRef) {
            this._objRef.enabled = value;
        }
    }
    get enabled() {
        return this._objRef?.enabled;
    }
    set target(value) {
        if (this._objRef) {
            this._objRef.target = applyValue(this._objRef.target, value);
        }
    }
    get target() {
        return this._objRef?.target;
    }
    set center(value) {
        if (this._objRef) {
            this._objRef.center = applyValue(this._objRef.center, value);
        }
    }
    get center() {
        return this._objRef?.center;
    }
    set cursor(value) {
        if (this._objRef) {
            this._objRef.cursor = applyValue(this._objRef.cursor, value);
        }
    }
    get cursor() {
        return this._objRef?.cursor;
    }
    set minDistance(value) {
        if (this._objRef) {
            this._objRef.minDistance = value;
        }
    }
    get minDistance() {
        return this._objRef?.minDistance;
    }
    set maxDistance(value) {
        if (this._objRef) {
            this._objRef.maxDistance = value;
        }
    }
    get maxDistance() {
        return this._objRef?.maxDistance;
    }
    set minZoom(value) {
        if (this._objRef) {
            this._objRef.minZoom = value;
        }
    }
    get minZoom() {
        return this._objRef?.minZoom;
    }
    set maxZoom(value) {
        if (this._objRef) {
            this._objRef.maxZoom = value;
        }
    }
    get maxZoom() {
        return this._objRef?.maxZoom;
    }
    set minTargetRadius(value) {
        if (this._objRef) {
            this._objRef.minTargetRadius = value;
        }
    }
    get minTargetRadius() {
        return this._objRef?.minTargetRadius;
    }
    set maxTargetRadius(value) {
        if (this._objRef) {
            this._objRef.maxTargetRadius = value;
        }
    }
    get maxTargetRadius() {
        return this._objRef?.maxTargetRadius;
    }
    set minPolarAngle(value) {
        if (this._objRef) {
            this._objRef.minPolarAngle = value;
        }
    }
    get minPolarAngle() {
        return this._objRef?.minPolarAngle;
    }
    set maxPolarAngle(value) {
        if (this._objRef) {
            this._objRef.maxPolarAngle = value;
        }
    }
    get maxPolarAngle() {
        return this._objRef?.maxPolarAngle;
    }
    set minAzimuthAngle(value) {
        if (this._objRef) {
            this._objRef.minAzimuthAngle = value;
        }
    }
    get minAzimuthAngle() {
        return this._objRef?.minAzimuthAngle;
    }
    set maxAzimuthAngle(value) {
        if (this._objRef) {
            this._objRef.maxAzimuthAngle = value;
        }
    }
    get maxAzimuthAngle() {
        return this._objRef?.maxAzimuthAngle;
    }
    set enableDamping(value) {
        if (this._objRef) {
            this._objRef.enableDamping = value;
        }
    }
    get enableDamping() {
        return this._objRef?.enableDamping;
    }
    set dampingFactor(value) {
        if (this._objRef) {
            this._objRef.dampingFactor = value;
        }
    }
    get dampingFactor() {
        return this._objRef?.dampingFactor;
    }
    set enableZoom(value) {
        if (this._objRef) {
            this._objRef.enableZoom = value;
        }
    }
    get enableZoom() {
        return this._objRef?.enableZoom;
    }
    set zoomSpeed(value) {
        if (this._objRef) {
            this._objRef.zoomSpeed = value;
        }
    }
    get zoomSpeed() {
        return this._objRef?.zoomSpeed;
    }
    set zoomToCursor(value) {
        if (this._objRef) {
            this._objRef.zoomToCursor = value;
        }
    }
    get zoomToCursor() {
        return this._objRef?.zoomToCursor;
    }
    set enableRotate(value) {
        if (this._objRef) {
            this._objRef.enableRotate = value;
        }
    }
    get enableRotate() {
        return this._objRef?.enableRotate;
    }
    set rotateSpeed(value) {
        if (this._objRef) {
            this._objRef.rotateSpeed = value;
        }
    }
    get rotateSpeed() {
        return this._objRef?.rotateSpeed;
    }
    set enablePan(value) {
        if (this._objRef) {
            this._objRef.enablePan = value;
        }
    }
    get enablePan() {
        return this._objRef?.enablePan;
    }
    set panSpeed(value) {
        if (this._objRef) {
            this._objRef.panSpeed = value;
        }
    }
    get panSpeed() {
        return this._objRef?.panSpeed;
    }
    set screenSpacePanning(value) {
        if (this._objRef) {
            this._objRef.screenSpacePanning = value;
        }
    }
    get screenSpacePanning() {
        return this._objRef?.screenSpacePanning;
    }
    set keyPanSpeed(value) {
        if (this._objRef) {
            this._objRef.keyPanSpeed = value;
        }
    }
    get keyPanSpeed() {
        return this._objRef?.keyPanSpeed;
    }
    set autoRotate(value) {
        if (this._objRef) {
            this._objRef.autoRotate = value;
        }
    }
    get autoRotate() {
        return this._objRef?.autoRotate;
    }
    set autoRotateSpeed(value) {
        if (this._objRef) {
            this._objRef.autoRotateSpeed = value;
        }
    }
    get autoRotateSpeed() {
        return this._objRef?.autoRotateSpeed;
    }
    set keys(value) {
        if (this._objRef) {
            this._objRef.keys = value;
        }
    }
    get keys() {
        return this._objRef?.keys;
    }
    set mouseButtons(value) {
        if (this._objRef) {
            this._objRef.mouseButtons = value;
        }
    }
    get mouseButtons() {
        return this._objRef?.mouseButtons;
    }
    set touches(value) {
        if (this._objRef) {
            this._objRef.touches = value;
        }
    }
    get touches() {
        return this._objRef?.touches;
    }
    set target0(value) {
        if (this._objRef) {
            this._objRef.target0 = applyValue(this._objRef.target0, value);
        }
    }
    get target0() {
        return this._objRef?.target0;
    }
    set position0(value) {
        if (this._objRef) {
            this._objRef.position0 = applyValue(this._objRef.position0, value);
        }
    }
    get position0() {
        return this._objRef?.position0;
    }
    set zoom0(value) {
        if (this._objRef) {
            this._objRef.zoom0 = value;
        }
    }
    get zoom0() {
        return this._objRef?.zoom0;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThOrbitControls, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.1.2", type: ThOrbitControls, selector: "th-orbitControls", inputs: { object: "object", domElement: "domElement", enabled: "enabled", target: "target", center: "center", cursor: "cursor", minDistance: "minDistance", maxDistance: "maxDistance", minZoom: "minZoom", maxZoom: "maxZoom", minTargetRadius: "minTargetRadius", maxTargetRadius: "maxTargetRadius", minPolarAngle: "minPolarAngle", maxPolarAngle: "maxPolarAngle", minAzimuthAngle: "minAzimuthAngle", maxAzimuthAngle: "maxAzimuthAngle", enableDamping: "enableDamping", dampingFactor: "dampingFactor", enableZoom: "enableZoom", zoomSpeed: "zoomSpeed", zoomToCursor: "zoomToCursor", enableRotate: "enableRotate", rotateSpeed: "rotateSpeed", enablePan: "enablePan", panSpeed: "panSpeed", screenSpacePanning: "screenSpacePanning", keyPanSpeed: "keyPanSpeed", autoRotate: "autoRotate", autoRotateSpeed: "autoRotateSpeed", keys: "keys", mouseButtons: "mouseButtons", touches: "touches", target0: "target0", position0: "position0", zoom0: "zoom0" }, providers: [
            { provide: ThControlBase, useExisting: forwardRef(() => ThOrbitControls) },
        ], usesInheritance: true, ngImport: i0, template: '<ng-content/>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThOrbitControls, decorators: [{
            type: Component,
            args: [{
                    selector: 'th-orbitControls',
                    template: '<ng-content/>',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    providers: [
                        { provide: ThControlBase, useExisting: forwardRef(() => ThOrbitControls) },
                    ],
                }]
        }], propDecorators: { object: [{
                type: Input
            }], domElement: [{
                type: Input
            }], enabled: [{
                type: Input
            }], target: [{
                type: Input
            }], center: [{
                type: Input
            }], cursor: [{
                type: Input
            }], minDistance: [{
                type: Input
            }], maxDistance: [{
                type: Input
            }], minZoom: [{
                type: Input
            }], maxZoom: [{
                type: Input
            }], minTargetRadius: [{
                type: Input
            }], maxTargetRadius: [{
                type: Input
            }], minPolarAngle: [{
                type: Input
            }], maxPolarAngle: [{
                type: Input
            }], minAzimuthAngle: [{
                type: Input
            }], maxAzimuthAngle: [{
                type: Input
            }], enableDamping: [{
                type: Input
            }], dampingFactor: [{
                type: Input
            }], enableZoom: [{
                type: Input
            }], zoomSpeed: [{
                type: Input
            }], zoomToCursor: [{
                type: Input
            }], enableRotate: [{
                type: Input
            }], rotateSpeed: [{
                type: Input
            }], enablePan: [{
                type: Input
            }], panSpeed: [{
                type: Input
            }], screenSpacePanning: [{
                type: Input
            }], keyPanSpeed: [{
                type: Input
            }], autoRotate: [{
                type: Input
            }], autoRotateSpeed: [{
                type: Input
            }], keys: [{
                type: Input
            }], mouseButtons: [{
                type: Input
            }], touches: [{
                type: Input
            }], target0: [{
                type: Input
            }], position0: [{
                type: Input
            }], zoom0: [{
                type: Input
            }] } });

/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix */
class ThMapControls extends ThOrbitControls {
    getType() {
        return MapControls;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThMapControls, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.1.2", type: ThMapControls, selector: "th-mapControls", providers: [
            { provide: ThControlBase, useExisting: forwardRef(() => ThMapControls) },
        ], usesInheritance: true, ngImport: i0, template: '<ng-content/>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThMapControls, decorators: [{
            type: Component,
            args: [{
                    selector: 'th-mapControls',
                    template: '<ng-content/>',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    providers: [
                        { provide: ThControlBase, useExisting: forwardRef(() => ThMapControls) },
                    ],
                }]
        }] });

/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix */
class ThMaskPass extends ThPass {
    getType() {
        return MaskPass;
    }
    set scene(value) {
        if (this._objRef) {
            this._objRef.scene = value;
        }
    }
    get scene() {
        return this._objRef?.scene;
    }
    set camera(value) {
        if (this._objRef) {
            this._objRef.camera = value;
        }
    }
    get camera() {
        return this._objRef?.camera;
    }
    set inverse(value) {
        if (this._objRef) {
            this._objRef.inverse = value;
        }
    }
    get inverse() {
        return this._objRef?.inverse;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThMaskPass, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.1.2", type: ThMaskPass, selector: "th-maskPass", inputs: { scene: "scene", camera: "camera", inverse: "inverse" }, providers: [
            { provide: ThPassBase, useExisting: forwardRef(() => ThMaskPass) },
        ], usesInheritance: true, ngImport: i0, template: '<ng-content/>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThMaskPass, decorators: [{
            type: Component,
            args: [{
                    selector: 'th-maskPass',
                    template: '<ng-content/>',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    providers: [
                        { provide: ThPassBase, useExisting: forwardRef(() => ThMaskPass) },
                    ],
                }]
        }], propDecorators: { scene: [{
                type: Input
            }], camera: [{
                type: Input
            }], inverse: [{
                type: Input
            }] } });

/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix */
class ThMeshBasicMaterial extends ThMaterial {
    getType() {
        return MeshBasicMaterial;
    }
    get isMeshBasicMaterial() {
        return this._objRef?.isMeshBasicMaterial;
    }
    set type(value) {
        if (this._objRef) {
            this._objRef.type = value;
        }
    }
    get type() {
        return this._objRef?.type;
    }
    set color(value) {
        if (this._objRef) {
            this._objRef.color = applyValue(this._objRef.color, value);
        }
    }
    get color() {
        return this._objRef?.color;
    }
    set map(value) {
        if (this._objRef) {
            this._objRef.map = value;
        }
    }
    get map() {
        return this._objRef?.map;
    }
    set lightMap(value) {
        if (this._objRef) {
            this._objRef.lightMap = value;
        }
    }
    get lightMap() {
        return this._objRef?.lightMap;
    }
    set lightMapIntensity(value) {
        if (this._objRef) {
            this._objRef.lightMapIntensity = value;
        }
    }
    get lightMapIntensity() {
        return this._objRef?.lightMapIntensity;
    }
    set aoMap(value) {
        if (this._objRef) {
            this._objRef.aoMap = value;
        }
    }
    get aoMap() {
        return this._objRef?.aoMap;
    }
    set aoMapIntensity(value) {
        if (this._objRef) {
            this._objRef.aoMapIntensity = value;
        }
    }
    get aoMapIntensity() {
        return this._objRef?.aoMapIntensity;
    }
    set specularMap(value) {
        if (this._objRef) {
            this._objRef.specularMap = value;
        }
    }
    get specularMap() {
        return this._objRef?.specularMap;
    }
    set alphaMap(value) {
        if (this._objRef) {
            this._objRef.alphaMap = value;
        }
    }
    get alphaMap() {
        return this._objRef?.alphaMap;
    }
    set envMap(value) {
        if (this._objRef) {
            this._objRef.envMap = value;
        }
    }
    get envMap() {
        return this._objRef?.envMap;
    }
    set envMapRotation(value) {
        if (this._objRef) {
            this._objRef.envMapRotation = applyValue(this._objRef.envMapRotation, value);
        }
    }
    get envMapRotation() {
        return this._objRef?.envMapRotation;
    }
    set combine(value) {
        if (this._objRef) {
            this._objRef.combine = value;
        }
    }
    get combine() {
        return this._objRef?.combine;
    }
    set reflectivity(value) {
        if (this._objRef) {
            this._objRef.reflectivity = value;
        }
    }
    get reflectivity() {
        return this._objRef?.reflectivity;
    }
    set refractionRatio(value) {
        if (this._objRef) {
            this._objRef.refractionRatio = value;
        }
    }
    get refractionRatio() {
        return this._objRef?.refractionRatio;
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
    set wireframeLinecap(value) {
        if (this._objRef) {
            this._objRef.wireframeLinecap = value;
        }
    }
    get wireframeLinecap() {
        return this._objRef?.wireframeLinecap;
    }
    set wireframeLinejoin(value) {
        if (this._objRef) {
            this._objRef.wireframeLinejoin = value;
        }
    }
    get wireframeLinejoin() {
        return this._objRef?.wireframeLinejoin;
    }
    set fog(value) {
        if (this._objRef) {
            this._objRef.fog = value;
        }
    }
    get fog() {
        return this._objRef?.fog;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThMeshBasicMaterial, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.1.2", type: ThMeshBasicMaterial, selector: "th-meshBasicMaterial", inputs: { type: "type", color: "color", map: "map", lightMap: "lightMap", lightMapIntensity: "lightMapIntensity", aoMap: "aoMap", aoMapIntensity: "aoMapIntensity", specularMap: "specularMap", alphaMap: "alphaMap", envMap: "envMap", envMapRotation: "envMapRotation", combine: "combine", reflectivity: "reflectivity", refractionRatio: "refractionRatio", wireframe: "wireframe", wireframeLinewidth: "wireframeLinewidth", wireframeLinecap: "wireframeLinecap", wireframeLinejoin: "wireframeLinejoin", fog: "fog" }, providers: [
            { provide: ThMaterial, useExisting: forwardRef(() => ThMeshBasicMaterial) },
        ], usesInheritance: true, ngImport: i0, template: '<ng-content/>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThMeshBasicMaterial, decorators: [{
            type: Component,
            args: [{
                    selector: 'th-meshBasicMaterial',
                    template: '<ng-content/>',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    providers: [
                        { provide: ThMaterial, useExisting: forwardRef(() => ThMeshBasicMaterial) },
                    ],
                }]
        }], propDecorators: { type: [{
                type: Input
            }], color: [{
                type: Input
            }], map: [{
                type: Input
            }], lightMap: [{
                type: Input
            }], lightMapIntensity: [{
                type: Input
            }], aoMap: [{
                type: Input
            }], aoMapIntensity: [{
                type: Input
            }], specularMap: [{
                type: Input
            }], alphaMap: [{
                type: Input
            }], envMap: [{
                type: Input
            }], envMapRotation: [{
                type: Input
            }], combine: [{
                type: Input
            }], reflectivity: [{
                type: Input
            }], refractionRatio: [{
                type: Input
            }], wireframe: [{
                type: Input
            }], wireframeLinewidth: [{
                type: Input
            }], wireframeLinecap: [{
                type: Input
            }], wireframeLinejoin: [{
                type: Input
            }], fog: [{
                type: Input
            }] } });

/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix */
class ThMeshDepthMaterial extends ThMaterial {
    getType() {
        return MeshDepthMaterial;
    }
    get isMeshDepthMaterial() {
        return this._objRef?.isMeshDepthMaterial;
    }
    set type(value) {
        if (this._objRef) {
            this._objRef.type = value;
        }
    }
    get type() {
        return this._objRef?.type;
    }
    set map(value) {
        if (this._objRef) {
            this._objRef.map = value;
        }
    }
    get map() {
        return this._objRef?.map;
    }
    set alphaMap(value) {
        if (this._objRef) {
            this._objRef.alphaMap = value;
        }
    }
    get alphaMap() {
        return this._objRef?.alphaMap;
    }
    set depthPacking(value) {
        if (this._objRef) {
            this._objRef.depthPacking = value;
        }
    }
    get depthPacking() {
        return this._objRef?.depthPacking;
    }
    set displacementMap(value) {
        if (this._objRef) {
            this._objRef.displacementMap = value;
        }
    }
    get displacementMap() {
        return this._objRef?.displacementMap;
    }
    set displacementScale(value) {
        if (this._objRef) {
            this._objRef.displacementScale = value;
        }
    }
    get displacementScale() {
        return this._objRef?.displacementScale;
    }
    set displacementBias(value) {
        if (this._objRef) {
            this._objRef.displacementBias = value;
        }
    }
    get displacementBias() {
        return this._objRef?.displacementBias;
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThMeshDepthMaterial, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.1.2", type: ThMeshDepthMaterial, selector: "th-meshDepthMaterial", inputs: { type: "type", map: "map", alphaMap: "alphaMap", depthPacking: "depthPacking", displacementMap: "displacementMap", displacementScale: "displacementScale", displacementBias: "displacementBias", wireframe: "wireframe", wireframeLinewidth: "wireframeLinewidth", fog: "fog" }, providers: [
            { provide: ThMaterial, useExisting: forwardRef(() => ThMeshDepthMaterial) },
        ], usesInheritance: true, ngImport: i0, template: '<ng-content/>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThMeshDepthMaterial, decorators: [{
            type: Component,
            args: [{
                    selector: 'th-meshDepthMaterial',
                    template: '<ng-content/>',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    providers: [
                        { provide: ThMaterial, useExisting: forwardRef(() => ThMeshDepthMaterial) },
                    ],
                }]
        }], propDecorators: { type: [{
                type: Input
            }], map: [{
                type: Input
            }], alphaMap: [{
                type: Input
            }], depthPacking: [{
                type: Input
            }], displacementMap: [{
                type: Input
            }], displacementScale: [{
                type: Input
            }], displacementBias: [{
                type: Input
            }], wireframe: [{
                type: Input
            }], wireframeLinewidth: [{
                type: Input
            }], fog: [{
                type: Input
            }] } });

/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix */
class ThMeshDistanceMaterial extends ThMaterial {
    getType() {
        return MeshDistanceMaterial;
    }
    get isMeshDistanceMaterial() {
        return this._objRef?.isMeshDistanceMaterial;
    }
    set type(value) {
        if (this._objRef) {
            this._objRef.type = value;
        }
    }
    get type() {
        return this._objRef?.type;
    }
    set map(value) {
        if (this._objRef) {
            this._objRef.map = value;
        }
    }
    get map() {
        return this._objRef?.map;
    }
    set alphaMap(value) {
        if (this._objRef) {
            this._objRef.alphaMap = value;
        }
    }
    get alphaMap() {
        return this._objRef?.alphaMap;
    }
    set displacementMap(value) {
        if (this._objRef) {
            this._objRef.displacementMap = value;
        }
    }
    get displacementMap() {
        return this._objRef?.displacementMap;
    }
    set displacementScale(value) {
        if (this._objRef) {
            this._objRef.displacementScale = value;
        }
    }
    get displacementScale() {
        return this._objRef?.displacementScale;
    }
    set displacementBias(value) {
        if (this._objRef) {
            this._objRef.displacementBias = value;
        }
    }
    get displacementBias() {
        return this._objRef?.displacementBias;
    }
    set fog(value) {
        if (this._objRef) {
            this._objRef.fog = value;
        }
    }
    get fog() {
        return this._objRef?.fog;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThMeshDistanceMaterial, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.1.2", type: ThMeshDistanceMaterial, selector: "th-meshDistanceMaterial", inputs: { type: "type", map: "map", alphaMap: "alphaMap", displacementMap: "displacementMap", displacementScale: "displacementScale", displacementBias: "displacementBias", fog: "fog" }, providers: [
            {
                provide: ThMaterial,
                useExisting: forwardRef(() => ThMeshDistanceMaterial),
            },
        ], usesInheritance: true, ngImport: i0, template: '<ng-content/>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThMeshDistanceMaterial, decorators: [{
            type: Component,
            args: [{
                    selector: 'th-meshDistanceMaterial',
                    template: '<ng-content/>',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    providers: [
                        {
                            provide: ThMaterial,
                            useExisting: forwardRef(() => ThMeshDistanceMaterial),
                        },
                    ],
                }]
        }], propDecorators: { type: [{
                type: Input
            }], map: [{
                type: Input
            }], alphaMap: [{
                type: Input
            }], displacementMap: [{
                type: Input
            }], displacementScale: [{
                type: Input
            }], displacementBias: [{
                type: Input
            }], fog: [{
                type: Input
            }] } });

/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix */
class ThMeshLambertMaterial extends ThMaterial {
    getType() {
        return MeshLambertMaterial;
    }
    get isMeshLambertMaterial() {
        return this._objRef?.isMeshLambertMaterial;
    }
    set type(value) {
        if (this._objRef) {
            this._objRef.type = value;
        }
    }
    get type() {
        return this._objRef?.type;
    }
    set color(value) {
        if (this._objRef) {
            this._objRef.color = applyValue(this._objRef.color, value);
        }
    }
    get color() {
        return this._objRef?.color;
    }
    set bumpMap(value) {
        if (this._objRef) {
            this._objRef.bumpMap = value;
        }
    }
    get bumpMap() {
        return this._objRef?.bumpMap;
    }
    set bumpScale(value) {
        if (this._objRef) {
            this._objRef.bumpScale = value;
        }
    }
    get bumpScale() {
        return this._objRef?.bumpScale;
    }
    set displacementMap(value) {
        if (this._objRef) {
            this._objRef.displacementMap = value;
        }
    }
    get displacementMap() {
        return this._objRef?.displacementMap;
    }
    set displacementScale(value) {
        if (this._objRef) {
            this._objRef.displacementScale = value;
        }
    }
    get displacementScale() {
        return this._objRef?.displacementScale;
    }
    set displacementBias(value) {
        if (this._objRef) {
            this._objRef.displacementBias = value;
        }
    }
    get displacementBias() {
        return this._objRef?.displacementBias;
    }
    set emissive(value) {
        if (this._objRef) {
            this._objRef.emissive = applyValue(this._objRef.emissive, value);
        }
    }
    get emissive() {
        return this._objRef?.emissive;
    }
    set emissiveIntensity(value) {
        if (this._objRef) {
            this._objRef.emissiveIntensity = value;
        }
    }
    get emissiveIntensity() {
        return this._objRef?.emissiveIntensity;
    }
    set emissiveMap(value) {
        if (this._objRef) {
            this._objRef.emissiveMap = value;
        }
    }
    get emissiveMap() {
        return this._objRef?.emissiveMap;
    }
    set flatShading(value) {
        if (this._objRef) {
            this._objRef.flatShading = value;
        }
    }
    get flatShading() {
        return this._objRef?.flatShading;
    }
    set map(value) {
        if (this._objRef) {
            this._objRef.map = value;
        }
    }
    get map() {
        return this._objRef?.map;
    }
    set lightMap(value) {
        if (this._objRef) {
            this._objRef.lightMap = value;
        }
    }
    get lightMap() {
        return this._objRef?.lightMap;
    }
    set lightMapIntensity(value) {
        if (this._objRef) {
            this._objRef.lightMapIntensity = value;
        }
    }
    get lightMapIntensity() {
        return this._objRef?.lightMapIntensity;
    }
    set normalMap(value) {
        if (this._objRef) {
            this._objRef.normalMap = value;
        }
    }
    get normalMap() {
        return this._objRef?.normalMap;
    }
    set normalMapType(value) {
        if (this._objRef) {
            this._objRef.normalMapType = value;
        }
    }
    get normalMapType() {
        return this._objRef?.normalMapType;
    }
    set normalScale(value) {
        if (this._objRef) {
            this._objRef.normalScale = applyValue(this._objRef.normalScale, value);
        }
    }
    get normalScale() {
        return this._objRef?.normalScale;
    }
    set aoMap(value) {
        if (this._objRef) {
            this._objRef.aoMap = value;
        }
    }
    get aoMap() {
        return this._objRef?.aoMap;
    }
    set aoMapIntensity(value) {
        if (this._objRef) {
            this._objRef.aoMapIntensity = value;
        }
    }
    get aoMapIntensity() {
        return this._objRef?.aoMapIntensity;
    }
    set specularMap(value) {
        if (this._objRef) {
            this._objRef.specularMap = value;
        }
    }
    get specularMap() {
        return this._objRef?.specularMap;
    }
    set alphaMap(value) {
        if (this._objRef) {
            this._objRef.alphaMap = value;
        }
    }
    get alphaMap() {
        return this._objRef?.alphaMap;
    }
    set envMap(value) {
        if (this._objRef) {
            this._objRef.envMap = value;
        }
    }
    get envMap() {
        return this._objRef?.envMap;
    }
    set envMapRotation(value) {
        if (this._objRef) {
            this._objRef.envMapRotation = applyValue(this._objRef.envMapRotation, value);
        }
    }
    get envMapRotation() {
        return this._objRef?.envMapRotation;
    }
    set combine(value) {
        if (this._objRef) {
            this._objRef.combine = value;
        }
    }
    get combine() {
        return this._objRef?.combine;
    }
    set reflectivity(value) {
        if (this._objRef) {
            this._objRef.reflectivity = value;
        }
    }
    get reflectivity() {
        return this._objRef?.reflectivity;
    }
    set refractionRatio(value) {
        if (this._objRef) {
            this._objRef.refractionRatio = value;
        }
    }
    get refractionRatio() {
        return this._objRef?.refractionRatio;
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
    set wireframeLinecap(value) {
        if (this._objRef) {
            this._objRef.wireframeLinecap = value;
        }
    }
    get wireframeLinecap() {
        return this._objRef?.wireframeLinecap;
    }
    set wireframeLinejoin(value) {
        if (this._objRef) {
            this._objRef.wireframeLinejoin = value;
        }
    }
    get wireframeLinejoin() {
        return this._objRef?.wireframeLinejoin;
    }
    set fog(value) {
        if (this._objRef) {
            this._objRef.fog = value;
        }
    }
    get fog() {
        return this._objRef?.fog;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThMeshLambertMaterial, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.1.2", type: ThMeshLambertMaterial, selector: "th-meshLambertMaterial", inputs: { type: "type", color: "color", bumpMap: "bumpMap", bumpScale: "bumpScale", displacementMap: "displacementMap", displacementScale: "displacementScale", displacementBias: "displacementBias", emissive: "emissive", emissiveIntensity: "emissiveIntensity", emissiveMap: "emissiveMap", flatShading: "flatShading", map: "map", lightMap: "lightMap", lightMapIntensity: "lightMapIntensity", normalMap: "normalMap", normalMapType: "normalMapType", normalScale: "normalScale", aoMap: "aoMap", aoMapIntensity: "aoMapIntensity", specularMap: "specularMap", alphaMap: "alphaMap", envMap: "envMap", envMapRotation: "envMapRotation", combine: "combine", reflectivity: "reflectivity", refractionRatio: "refractionRatio", wireframe: "wireframe", wireframeLinewidth: "wireframeLinewidth", wireframeLinecap: "wireframeLinecap", wireframeLinejoin: "wireframeLinejoin", fog: "fog" }, providers: [
            {
                provide: ThMaterial,
                useExisting: forwardRef(() => ThMeshLambertMaterial),
            },
        ], usesInheritance: true, ngImport: i0, template: '<ng-content/>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThMeshLambertMaterial, decorators: [{
            type: Component,
            args: [{
                    selector: 'th-meshLambertMaterial',
                    template: '<ng-content/>',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    providers: [
                        {
                            provide: ThMaterial,
                            useExisting: forwardRef(() => ThMeshLambertMaterial),
                        },
                    ],
                }]
        }], propDecorators: { type: [{
                type: Input
            }], color: [{
                type: Input
            }], bumpMap: [{
                type: Input
            }], bumpScale: [{
                type: Input
            }], displacementMap: [{
                type: Input
            }], displacementScale: [{
                type: Input
            }], displacementBias: [{
                type: Input
            }], emissive: [{
                type: Input
            }], emissiveIntensity: [{
                type: Input
            }], emissiveMap: [{
                type: Input
            }], flatShading: [{
                type: Input
            }], map: [{
                type: Input
            }], lightMap: [{
                type: Input
            }], lightMapIntensity: [{
                type: Input
            }], normalMap: [{
                type: Input
            }], normalMapType: [{
                type: Input
            }], normalScale: [{
                type: Input
            }], aoMap: [{
                type: Input
            }], aoMapIntensity: [{
                type: Input
            }], specularMap: [{
                type: Input
            }], alphaMap: [{
                type: Input
            }], envMap: [{
                type: Input
            }], envMapRotation: [{
                type: Input
            }], combine: [{
                type: Input
            }], reflectivity: [{
                type: Input
            }], refractionRatio: [{
                type: Input
            }], wireframe: [{
                type: Input
            }], wireframeLinewidth: [{
                type: Input
            }], wireframeLinecap: [{
                type: Input
            }], wireframeLinejoin: [{
                type: Input
            }], fog: [{
                type: Input
            }] } });

/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix */
class ThMeshMatcapMaterial extends ThMaterial {
    getType() {
        return MeshMatcapMaterial;
    }
    get isMeshMatcapMaterial() {
        return this._objRef?.isMeshMatcapMaterial;
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
    set color(value) {
        if (this._objRef) {
            this._objRef.color = applyValue(this._objRef.color, value);
        }
    }
    get color() {
        return this._objRef?.color;
    }
    set matcap(value) {
        if (this._objRef) {
            this._objRef.matcap = value;
        }
    }
    get matcap() {
        return this._objRef?.matcap;
    }
    set map(value) {
        if (this._objRef) {
            this._objRef.map = value;
        }
    }
    get map() {
        return this._objRef?.map;
    }
    set bumpMap(value) {
        if (this._objRef) {
            this._objRef.bumpMap = value;
        }
    }
    get bumpMap() {
        return this._objRef?.bumpMap;
    }
    set bumpScale(value) {
        if (this._objRef) {
            this._objRef.bumpScale = value;
        }
    }
    get bumpScale() {
        return this._objRef?.bumpScale;
    }
    set normalMap(value) {
        if (this._objRef) {
            this._objRef.normalMap = value;
        }
    }
    get normalMap() {
        return this._objRef?.normalMap;
    }
    set normalMapType(value) {
        if (this._objRef) {
            this._objRef.normalMapType = value;
        }
    }
    get normalMapType() {
        return this._objRef?.normalMapType;
    }
    set normalScale(value) {
        if (this._objRef) {
            this._objRef.normalScale = applyValue(this._objRef.normalScale, value);
        }
    }
    get normalScale() {
        return this._objRef?.normalScale;
    }
    set displacementMap(value) {
        if (this._objRef) {
            this._objRef.displacementMap = value;
        }
    }
    get displacementMap() {
        return this._objRef?.displacementMap;
    }
    set displacementScale(value) {
        if (this._objRef) {
            this._objRef.displacementScale = value;
        }
    }
    get displacementScale() {
        return this._objRef?.displacementScale;
    }
    set displacementBias(value) {
        if (this._objRef) {
            this._objRef.displacementBias = value;
        }
    }
    get displacementBias() {
        return this._objRef?.displacementBias;
    }
    set alphaMap(value) {
        if (this._objRef) {
            this._objRef.alphaMap = value;
        }
    }
    get alphaMap() {
        return this._objRef?.alphaMap;
    }
    set flatShading(value) {
        if (this._objRef) {
            this._objRef.flatShading = value;
        }
    }
    get flatShading() {
        return this._objRef?.flatShading;
    }
    set fog(value) {
        if (this._objRef) {
            this._objRef.fog = value;
        }
    }
    get fog() {
        return this._objRef?.fog;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThMeshMatcapMaterial, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.1.2", type: ThMeshMatcapMaterial, selector: "th-meshMatcapMaterial", inputs: { type: "type", defines: "defines", color: "color", matcap: "matcap", map: "map", bumpMap: "bumpMap", bumpScale: "bumpScale", normalMap: "normalMap", normalMapType: "normalMapType", normalScale: "normalScale", displacementMap: "displacementMap", displacementScale: "displacementScale", displacementBias: "displacementBias", alphaMap: "alphaMap", flatShading: "flatShading", fog: "fog" }, providers: [
            {
                provide: ThMaterial,
                useExisting: forwardRef(() => ThMeshMatcapMaterial),
            },
        ], usesInheritance: true, ngImport: i0, template: '<ng-content/>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThMeshMatcapMaterial, decorators: [{
            type: Component,
            args: [{
                    selector: 'th-meshMatcapMaterial',
                    template: '<ng-content/>',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    providers: [
                        {
                            provide: ThMaterial,
                            useExisting: forwardRef(() => ThMeshMatcapMaterial),
                        },
                    ],
                }]
        }], propDecorators: { type: [{
                type: Input
            }], defines: [{
                type: Input
            }], color: [{
                type: Input
            }], matcap: [{
                type: Input
            }], map: [{
                type: Input
            }], bumpMap: [{
                type: Input
            }], bumpScale: [{
                type: Input
            }], normalMap: [{
                type: Input
            }], normalMapType: [{
                type: Input
            }], normalScale: [{
                type: Input
            }], displacementMap: [{
                type: Input
            }], displacementScale: [{
                type: Input
            }], displacementBias: [{
                type: Input
            }], alphaMap: [{
                type: Input
            }], flatShading: [{
                type: Input
            }], fog: [{
                type: Input
            }] } });

/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix */
class ThMeshNormalMaterial extends ThMaterial {
    getType() {
        return MeshNormalMaterial;
    }
    get isMeshNormalMaterial() {
        return this._objRef?.isMeshNormalMaterial;
    }
    set type(value) {
        if (this._objRef) {
            this._objRef.type = value;
        }
    }
    get type() {
        return this._objRef?.type;
    }
    set bumpMap(value) {
        if (this._objRef) {
            this._objRef.bumpMap = value;
        }
    }
    get bumpMap() {
        return this._objRef?.bumpMap;
    }
    set bumpScale(value) {
        if (this._objRef) {
            this._objRef.bumpScale = value;
        }
    }
    get bumpScale() {
        return this._objRef?.bumpScale;
    }
    set normalMap(value) {
        if (this._objRef) {
            this._objRef.normalMap = value;
        }
    }
    get normalMap() {
        return this._objRef?.normalMap;
    }
    set normalMapType(value) {
        if (this._objRef) {
            this._objRef.normalMapType = value;
        }
    }
    get normalMapType() {
        return this._objRef?.normalMapType;
    }
    set normalScale(value) {
        if (this._objRef) {
            this._objRef.normalScale = applyValue(this._objRef.normalScale, value);
        }
    }
    get normalScale() {
        return this._objRef?.normalScale;
    }
    set displacementMap(value) {
        if (this._objRef) {
            this._objRef.displacementMap = value;
        }
    }
    get displacementMap() {
        return this._objRef?.displacementMap;
    }
    set displacementScale(value) {
        if (this._objRef) {
            this._objRef.displacementScale = value;
        }
    }
    get displacementScale() {
        return this._objRef?.displacementScale;
    }
    set displacementBias(value) {
        if (this._objRef) {
            this._objRef.displacementBias = value;
        }
    }
    get displacementBias() {
        return this._objRef?.displacementBias;
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
    set flatShading(value) {
        if (this._objRef) {
            this._objRef.flatShading = value;
        }
    }
    get flatShading() {
        return this._objRef?.flatShading;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThMeshNormalMaterial, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.1.2", type: ThMeshNormalMaterial, selector: "th-meshNormalMaterial", inputs: { type: "type", bumpMap: "bumpMap", bumpScale: "bumpScale", normalMap: "normalMap", normalMapType: "normalMapType", normalScale: "normalScale", displacementMap: "displacementMap", displacementScale: "displacementScale", displacementBias: "displacementBias", wireframe: "wireframe", wireframeLinewidth: "wireframeLinewidth", flatShading: "flatShading" }, providers: [
            {
                provide: ThMaterial,
                useExisting: forwardRef(() => ThMeshNormalMaterial),
            },
        ], usesInheritance: true, ngImport: i0, template: '<ng-content/>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThMeshNormalMaterial, decorators: [{
            type: Component,
            args: [{
                    selector: 'th-meshNormalMaterial',
                    template: '<ng-content/>',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    providers: [
                        {
                            provide: ThMaterial,
                            useExisting: forwardRef(() => ThMeshNormalMaterial),
                        },
                    ],
                }]
        }], propDecorators: { type: [{
                type: Input
            }], bumpMap: [{
                type: Input
            }], bumpScale: [{
                type: Input
            }], normalMap: [{
                type: Input
            }], normalMapType: [{
                type: Input
            }], normalScale: [{
                type: Input
            }], displacementMap: [{
                type: Input
            }], displacementScale: [{
                type: Input
            }], displacementBias: [{
                type: Input
            }], wireframe: [{
                type: Input
            }], wireframeLinewidth: [{
                type: Input
            }], flatShading: [{
                type: Input
            }] } });

/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix */
class ThMeshPhongMaterial extends ThMaterial {
    getType() {
        return MeshPhongMaterial;
    }
    get isMeshPhongMaterial() {
        return this._objRef?.isMeshPhongMaterial;
    }
    set type(value) {
        if (this._objRef) {
            this._objRef.type = value;
        }
    }
    get type() {
        return this._objRef?.type;
    }
    set color(value) {
        if (this._objRef) {
            this._objRef.color = applyValue(this._objRef.color, value);
        }
    }
    get color() {
        return this._objRef?.color;
    }
    set specular(value) {
        if (this._objRef) {
            this._objRef.specular = applyValue(this._objRef.specular, value);
        }
    }
    get specular() {
        return this._objRef?.specular;
    }
    set shininess(value) {
        if (this._objRef) {
            this._objRef.shininess = value;
        }
    }
    get shininess() {
        return this._objRef?.shininess;
    }
    set map(value) {
        if (this._objRef) {
            this._objRef.map = value;
        }
    }
    get map() {
        return this._objRef?.map;
    }
    set lightMap(value) {
        if (this._objRef) {
            this._objRef.lightMap = value;
        }
    }
    get lightMap() {
        return this._objRef?.lightMap;
    }
    set lightMapIntensity(value) {
        if (this._objRef) {
            this._objRef.lightMapIntensity = value;
        }
    }
    get lightMapIntensity() {
        return this._objRef?.lightMapIntensity;
    }
    set aoMap(value) {
        if (this._objRef) {
            this._objRef.aoMap = value;
        }
    }
    get aoMap() {
        return this._objRef?.aoMap;
    }
    set aoMapIntensity(value) {
        if (this._objRef) {
            this._objRef.aoMapIntensity = value;
        }
    }
    get aoMapIntensity() {
        return this._objRef?.aoMapIntensity;
    }
    set emissive(value) {
        if (this._objRef) {
            this._objRef.emissive = applyValue(this._objRef.emissive, value);
        }
    }
    get emissive() {
        return this._objRef?.emissive;
    }
    set emissiveIntensity(value) {
        if (this._objRef) {
            this._objRef.emissiveIntensity = value;
        }
    }
    get emissiveIntensity() {
        return this._objRef?.emissiveIntensity;
    }
    set emissiveMap(value) {
        if (this._objRef) {
            this._objRef.emissiveMap = value;
        }
    }
    get emissiveMap() {
        return this._objRef?.emissiveMap;
    }
    set bumpMap(value) {
        if (this._objRef) {
            this._objRef.bumpMap = value;
        }
    }
    get bumpMap() {
        return this._objRef?.bumpMap;
    }
    set bumpScale(value) {
        if (this._objRef) {
            this._objRef.bumpScale = value;
        }
    }
    get bumpScale() {
        return this._objRef?.bumpScale;
    }
    set normalMap(value) {
        if (this._objRef) {
            this._objRef.normalMap = value;
        }
    }
    get normalMap() {
        return this._objRef?.normalMap;
    }
    set normalMapType(value) {
        if (this._objRef) {
            this._objRef.normalMapType = value;
        }
    }
    get normalMapType() {
        return this._objRef?.normalMapType;
    }
    set normalScale(value) {
        if (this._objRef) {
            this._objRef.normalScale = applyValue(this._objRef.normalScale, value);
        }
    }
    get normalScale() {
        return this._objRef?.normalScale;
    }
    set displacementMap(value) {
        if (this._objRef) {
            this._objRef.displacementMap = value;
        }
    }
    get displacementMap() {
        return this._objRef?.displacementMap;
    }
    set displacementScale(value) {
        if (this._objRef) {
            this._objRef.displacementScale = value;
        }
    }
    get displacementScale() {
        return this._objRef?.displacementScale;
    }
    set displacementBias(value) {
        if (this._objRef) {
            this._objRef.displacementBias = value;
        }
    }
    get displacementBias() {
        return this._objRef?.displacementBias;
    }
    set specularMap(value) {
        if (this._objRef) {
            this._objRef.specularMap = value;
        }
    }
    get specularMap() {
        return this._objRef?.specularMap;
    }
    set alphaMap(value) {
        if (this._objRef) {
            this._objRef.alphaMap = value;
        }
    }
    get alphaMap() {
        return this._objRef?.alphaMap;
    }
    set envMap(value) {
        if (this._objRef) {
            this._objRef.envMap = value;
        }
    }
    get envMap() {
        return this._objRef?.envMap;
    }
    set envMapRotation(value) {
        if (this._objRef) {
            this._objRef.envMapRotation = applyValue(this._objRef.envMapRotation, value);
        }
    }
    get envMapRotation() {
        return this._objRef?.envMapRotation;
    }
    set combine(value) {
        if (this._objRef) {
            this._objRef.combine = value;
        }
    }
    get combine() {
        return this._objRef?.combine;
    }
    set reflectivity(value) {
        if (this._objRef) {
            this._objRef.reflectivity = value;
        }
    }
    get reflectivity() {
        return this._objRef?.reflectivity;
    }
    set refractionRatio(value) {
        if (this._objRef) {
            this._objRef.refractionRatio = value;
        }
    }
    get refractionRatio() {
        return this._objRef?.refractionRatio;
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
    set wireframeLinecap(value) {
        if (this._objRef) {
            this._objRef.wireframeLinecap = value;
        }
    }
    get wireframeLinecap() {
        return this._objRef?.wireframeLinecap;
    }
    set wireframeLinejoin(value) {
        if (this._objRef) {
            this._objRef.wireframeLinejoin = value;
        }
    }
    get wireframeLinejoin() {
        return this._objRef?.wireframeLinejoin;
    }
    set flatShading(value) {
        if (this._objRef) {
            this._objRef.flatShading = value;
        }
    }
    get flatShading() {
        return this._objRef?.flatShading;
    }
    set metal(value) {
        if (this._objRef) {
            this._objRef.metal = value;
        }
    }
    get metal() {
        return this._objRef?.metal;
    }
    set fog(value) {
        if (this._objRef) {
            this._objRef.fog = value;
        }
    }
    get fog() {
        return this._objRef?.fog;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThMeshPhongMaterial, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.1.2", type: ThMeshPhongMaterial, selector: "th-meshPhongMaterial", inputs: { type: "type", color: "color", specular: "specular", shininess: "shininess", map: "map", lightMap: "lightMap", lightMapIntensity: "lightMapIntensity", aoMap: "aoMap", aoMapIntensity: "aoMapIntensity", emissive: "emissive", emissiveIntensity: "emissiveIntensity", emissiveMap: "emissiveMap", bumpMap: "bumpMap", bumpScale: "bumpScale", normalMap: "normalMap", normalMapType: "normalMapType", normalScale: "normalScale", displacementMap: "displacementMap", displacementScale: "displacementScale", displacementBias: "displacementBias", specularMap: "specularMap", alphaMap: "alphaMap", envMap: "envMap", envMapRotation: "envMapRotation", combine: "combine", reflectivity: "reflectivity", refractionRatio: "refractionRatio", wireframe: "wireframe", wireframeLinewidth: "wireframeLinewidth", wireframeLinecap: "wireframeLinecap", wireframeLinejoin: "wireframeLinejoin", flatShading: "flatShading", metal: "metal", fog: "fog" }, providers: [
            { provide: ThMaterial, useExisting: forwardRef(() => ThMeshPhongMaterial) },
        ], usesInheritance: true, ngImport: i0, template: '<ng-content/>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThMeshPhongMaterial, decorators: [{
            type: Component,
            args: [{
                    selector: 'th-meshPhongMaterial',
                    template: '<ng-content/>',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    providers: [
                        { provide: ThMaterial, useExisting: forwardRef(() => ThMeshPhongMaterial) },
                    ],
                }]
        }], propDecorators: { type: [{
                type: Input
            }], color: [{
                type: Input
            }], specular: [{
                type: Input
            }], shininess: [{
                type: Input
            }], map: [{
                type: Input
            }], lightMap: [{
                type: Input
            }], lightMapIntensity: [{
                type: Input
            }], aoMap: [{
                type: Input
            }], aoMapIntensity: [{
                type: Input
            }], emissive: [{
                type: Input
            }], emissiveIntensity: [{
                type: Input
            }], emissiveMap: [{
                type: Input
            }], bumpMap: [{
                type: Input
            }], bumpScale: [{
                type: Input
            }], normalMap: [{
                type: Input
            }], normalMapType: [{
                type: Input
            }], normalScale: [{
                type: Input
            }], displacementMap: [{
                type: Input
            }], displacementScale: [{
                type: Input
            }], displacementBias: [{
                type: Input
            }], specularMap: [{
                type: Input
            }], alphaMap: [{
                type: Input
            }], envMap: [{
                type: Input
            }], envMapRotation: [{
                type: Input
            }], combine: [{
                type: Input
            }], reflectivity: [{
                type: Input
            }], refractionRatio: [{
                type: Input
            }], wireframe: [{
                type: Input
            }], wireframeLinewidth: [{
                type: Input
            }], wireframeLinecap: [{
                type: Input
            }], wireframeLinejoin: [{
                type: Input
            }], flatShading: [{
                type: Input
            }], metal: [{
                type: Input
            }], fog: [{
                type: Input
            }] } });

/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix */
class ThMeshStandardMaterial extends ThMaterial {
    getType() {
        return MeshStandardMaterial;
    }
    get isMeshStandardMaterial() {
        return this._objRef?.isMeshStandardMaterial;
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
    set color(value) {
        if (this._objRef) {
            this._objRef.color = applyValue(this._objRef.color, value);
        }
    }
    get color() {
        return this._objRef?.color;
    }
    set roughness(value) {
        if (this._objRef) {
            this._objRef.roughness = value;
        }
    }
    get roughness() {
        return this._objRef?.roughness;
    }
    set metalness(value) {
        if (this._objRef) {
            this._objRef.metalness = value;
        }
    }
    get metalness() {
        return this._objRef?.metalness;
    }
    set map(value) {
        if (this._objRef) {
            this._objRef.map = value;
        }
    }
    get map() {
        return this._objRef?.map;
    }
    set lightMap(value) {
        if (this._objRef) {
            this._objRef.lightMap = value;
        }
    }
    get lightMap() {
        return this._objRef?.lightMap;
    }
    set lightMapIntensity(value) {
        if (this._objRef) {
            this._objRef.lightMapIntensity = value;
        }
    }
    get lightMapIntensity() {
        return this._objRef?.lightMapIntensity;
    }
    set aoMap(value) {
        if (this._objRef) {
            this._objRef.aoMap = value;
        }
    }
    get aoMap() {
        return this._objRef?.aoMap;
    }
    set aoMapIntensity(value) {
        if (this._objRef) {
            this._objRef.aoMapIntensity = value;
        }
    }
    get aoMapIntensity() {
        return this._objRef?.aoMapIntensity;
    }
    set emissive(value) {
        if (this._objRef) {
            this._objRef.emissive = applyValue(this._objRef.emissive, value);
        }
    }
    get emissive() {
        return this._objRef?.emissive;
    }
    set emissiveIntensity(value) {
        if (this._objRef) {
            this._objRef.emissiveIntensity = value;
        }
    }
    get emissiveIntensity() {
        return this._objRef?.emissiveIntensity;
    }
    set emissiveMap(value) {
        if (this._objRef) {
            this._objRef.emissiveMap = value;
        }
    }
    get emissiveMap() {
        return this._objRef?.emissiveMap;
    }
    set bumpMap(value) {
        if (this._objRef) {
            this._objRef.bumpMap = value;
        }
    }
    get bumpMap() {
        return this._objRef?.bumpMap;
    }
    set bumpScale(value) {
        if (this._objRef) {
            this._objRef.bumpScale = value;
        }
    }
    get bumpScale() {
        return this._objRef?.bumpScale;
    }
    set normalMap(value) {
        if (this._objRef) {
            this._objRef.normalMap = value;
        }
    }
    get normalMap() {
        return this._objRef?.normalMap;
    }
    set normalMapType(value) {
        if (this._objRef) {
            this._objRef.normalMapType = value;
        }
    }
    get normalMapType() {
        return this._objRef?.normalMapType;
    }
    set normalScale(value) {
        if (this._objRef) {
            this._objRef.normalScale = applyValue(this._objRef.normalScale, value);
        }
    }
    get normalScale() {
        return this._objRef?.normalScale;
    }
    set displacementMap(value) {
        if (this._objRef) {
            this._objRef.displacementMap = value;
        }
    }
    get displacementMap() {
        return this._objRef?.displacementMap;
    }
    set displacementScale(value) {
        if (this._objRef) {
            this._objRef.displacementScale = value;
        }
    }
    get displacementScale() {
        return this._objRef?.displacementScale;
    }
    set displacementBias(value) {
        if (this._objRef) {
            this._objRef.displacementBias = value;
        }
    }
    get displacementBias() {
        return this._objRef?.displacementBias;
    }
    set roughnessMap(value) {
        if (this._objRef) {
            this._objRef.roughnessMap = value;
        }
    }
    get roughnessMap() {
        return this._objRef?.roughnessMap;
    }
    set metalnessMap(value) {
        if (this._objRef) {
            this._objRef.metalnessMap = value;
        }
    }
    get metalnessMap() {
        return this._objRef?.metalnessMap;
    }
    set alphaMap(value) {
        if (this._objRef) {
            this._objRef.alphaMap = value;
        }
    }
    get alphaMap() {
        return this._objRef?.alphaMap;
    }
    set envMap(value) {
        if (this._objRef) {
            this._objRef.envMap = value;
        }
    }
    get envMap() {
        return this._objRef?.envMap;
    }
    set envMapRotation(value) {
        if (this._objRef) {
            this._objRef.envMapRotation = applyValue(this._objRef.envMapRotation, value);
        }
    }
    get envMapRotation() {
        return this._objRef?.envMapRotation;
    }
    set envMapIntensity(value) {
        if (this._objRef) {
            this._objRef.envMapIntensity = value;
        }
    }
    get envMapIntensity() {
        return this._objRef?.envMapIntensity;
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
    set wireframeLinecap(value) {
        if (this._objRef) {
            this._objRef.wireframeLinecap = value;
        }
    }
    get wireframeLinecap() {
        return this._objRef?.wireframeLinecap;
    }
    set wireframeLinejoin(value) {
        if (this._objRef) {
            this._objRef.wireframeLinejoin = value;
        }
    }
    get wireframeLinejoin() {
        return this._objRef?.wireframeLinejoin;
    }
    set flatShading(value) {
        if (this._objRef) {
            this._objRef.flatShading = value;
        }
    }
    get flatShading() {
        return this._objRef?.flatShading;
    }
    set fog(value) {
        if (this._objRef) {
            this._objRef.fog = value;
        }
    }
    get fog() {
        return this._objRef?.fog;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThMeshStandardMaterial, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.1.2", type: ThMeshStandardMaterial, selector: "th-meshStandardMaterial", inputs: { type: "type", defines: "defines", color: "color", roughness: "roughness", metalness: "metalness", map: "map", lightMap: "lightMap", lightMapIntensity: "lightMapIntensity", aoMap: "aoMap", aoMapIntensity: "aoMapIntensity", emissive: "emissive", emissiveIntensity: "emissiveIntensity", emissiveMap: "emissiveMap", bumpMap: "bumpMap", bumpScale: "bumpScale", normalMap: "normalMap", normalMapType: "normalMapType", normalScale: "normalScale", displacementMap: "displacementMap", displacementScale: "displacementScale", displacementBias: "displacementBias", roughnessMap: "roughnessMap", metalnessMap: "metalnessMap", alphaMap: "alphaMap", envMap: "envMap", envMapRotation: "envMapRotation", envMapIntensity: "envMapIntensity", wireframe: "wireframe", wireframeLinewidth: "wireframeLinewidth", wireframeLinecap: "wireframeLinecap", wireframeLinejoin: "wireframeLinejoin", flatShading: "flatShading", fog: "fog" }, providers: [
            {
                provide: ThMaterial,
                useExisting: forwardRef(() => ThMeshStandardMaterial),
            },
        ], usesInheritance: true, ngImport: i0, template: '<ng-content/>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThMeshStandardMaterial, decorators: [{
            type: Component,
            args: [{
                    selector: 'th-meshStandardMaterial',
                    template: '<ng-content/>',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    providers: [
                        {
                            provide: ThMaterial,
                            useExisting: forwardRef(() => ThMeshStandardMaterial),
                        },
                    ],
                }]
        }], propDecorators: { type: [{
                type: Input
            }], defines: [{
                type: Input
            }], color: [{
                type: Input
            }], roughness: [{
                type: Input
            }], metalness: [{
                type: Input
            }], map: [{
                type: Input
            }], lightMap: [{
                type: Input
            }], lightMapIntensity: [{
                type: Input
            }], aoMap: [{
                type: Input
            }], aoMapIntensity: [{
                type: Input
            }], emissive: [{
                type: Input
            }], emissiveIntensity: [{
                type: Input
            }], emissiveMap: [{
                type: Input
            }], bumpMap: [{
                type: Input
            }], bumpScale: [{
                type: Input
            }], normalMap: [{
                type: Input
            }], normalMapType: [{
                type: Input
            }], normalScale: [{
                type: Input
            }], displacementMap: [{
                type: Input
            }], displacementScale: [{
                type: Input
            }], displacementBias: [{
                type: Input
            }], roughnessMap: [{
                type: Input
            }], metalnessMap: [{
                type: Input
            }], alphaMap: [{
                type: Input
            }], envMap: [{
                type: Input
            }], envMapRotation: [{
                type: Input
            }], envMapIntensity: [{
                type: Input
            }], wireframe: [{
                type: Input
            }], wireframeLinewidth: [{
                type: Input
            }], wireframeLinecap: [{
                type: Input
            }], wireframeLinejoin: [{
                type: Input
            }], flatShading: [{
                type: Input
            }], fog: [{
                type: Input
            }] } });

/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix */
class ThMeshPhysicalMaterial extends ThMeshStandardMaterial {
    getType() {
        return MeshPhysicalMaterial;
    }
    get isMeshPhysicalMaterial() {
        return this._objRef?.isMeshPhysicalMaterial;
    }
    set defines(value) {
        if (this._objRef) {
            this._objRef.defines = value;
        }
    }
    get defines() {
        return this._objRef?.defines;
    }
    set type(value) {
        if (this._objRef) {
            this._objRef.type = value;
        }
    }
    get type() {
        return this._objRef?.type;
    }
    set anisotropyRotation(value) {
        if (this._objRef) {
            this._objRef.anisotropyRotation = value;
        }
    }
    get anisotropyRotation() {
        return this._objRef?.anisotropyRotation;
    }
    set anisotropyMap(value) {
        if (this._objRef) {
            this._objRef.anisotropyMap = value;
        }
    }
    get anisotropyMap() {
        return this._objRef?.anisotropyMap;
    }
    set clearcoatMap(value) {
        if (this._objRef) {
            this._objRef.clearcoatMap = value;
        }
    }
    get clearcoatMap() {
        return this._objRef?.clearcoatMap;
    }
    set clearcoatRoughness(value) {
        if (this._objRef) {
            this._objRef.clearcoatRoughness = value;
        }
    }
    get clearcoatRoughness() {
        return this._objRef?.clearcoatRoughness;
    }
    set clearcoatRoughnessMap(value) {
        if (this._objRef) {
            this._objRef.clearcoatRoughnessMap = value;
        }
    }
    get clearcoatRoughnessMap() {
        return this._objRef?.clearcoatRoughnessMap;
    }
    set clearcoatNormalScale(value) {
        if (this._objRef) {
            this._objRef.clearcoatNormalScale = applyValue(this._objRef.clearcoatNormalScale, value);
        }
    }
    get clearcoatNormalScale() {
        return this._objRef?.clearcoatNormalScale;
    }
    set clearcoatNormalMap(value) {
        if (this._objRef) {
            this._objRef.clearcoatNormalMap = value;
        }
    }
    get clearcoatNormalMap() {
        return this._objRef?.clearcoatNormalMap;
    }
    set ior(value) {
        if (this._objRef) {
            this._objRef.ior = value;
        }
    }
    get ior() {
        return this._objRef?.ior;
    }
    get reflectivity() {
        return this._objRef?.reflectivity;
    }
    set reflectivity(value) {
        if (this._objRef) {
            this._objRef.reflectivity = value;
        }
    }
    set iridescenceMap(value) {
        if (this._objRef) {
            this._objRef.iridescenceMap = value;
        }
    }
    get iridescenceMap() {
        return this._objRef?.iridescenceMap;
    }
    set iridescenceIOR(value) {
        if (this._objRef) {
            this._objRef.iridescenceIOR = value;
        }
    }
    get iridescenceIOR() {
        return this._objRef?.iridescenceIOR;
    }
    set iridescenceThicknessRange(value) {
        if (this._objRef) {
            this._objRef.iridescenceThicknessRange = value;
        }
    }
    get iridescenceThicknessRange() {
        return this._objRef?.iridescenceThicknessRange;
    }
    set iridescenceThicknessMap(value) {
        if (this._objRef) {
            this._objRef.iridescenceThicknessMap = value;
        }
    }
    get iridescenceThicknessMap() {
        return this._objRef?.iridescenceThicknessMap;
    }
    set sheenColor(value) {
        if (this._objRef) {
            this._objRef.sheenColor = applyValue(this._objRef.sheenColor, value);
        }
    }
    get sheenColor() {
        return this._objRef?.sheenColor;
    }
    set sheenColorMap(value) {
        if (this._objRef) {
            this._objRef.sheenColorMap = value;
        }
    }
    get sheenColorMap() {
        return this._objRef?.sheenColorMap;
    }
    set sheenRoughness(value) {
        if (this._objRef) {
            this._objRef.sheenRoughness = value;
        }
    }
    get sheenRoughness() {
        return this._objRef?.sheenRoughness;
    }
    set sheenRoughnessMap(value) {
        if (this._objRef) {
            this._objRef.sheenRoughnessMap = value;
        }
    }
    get sheenRoughnessMap() {
        return this._objRef?.sheenRoughnessMap;
    }
    set transmissionMap(value) {
        if (this._objRef) {
            this._objRef.transmissionMap = value;
        }
    }
    get transmissionMap() {
        return this._objRef?.transmissionMap;
    }
    set thickness(value) {
        if (this._objRef) {
            this._objRef.thickness = value;
        }
    }
    get thickness() {
        return this._objRef?.thickness;
    }
    set thicknessMap(value) {
        if (this._objRef) {
            this._objRef.thicknessMap = value;
        }
    }
    get thicknessMap() {
        return this._objRef?.thicknessMap;
    }
    set attenuationDistance(value) {
        if (this._objRef) {
            this._objRef.attenuationDistance = value;
        }
    }
    get attenuationDistance() {
        return this._objRef?.attenuationDistance;
    }
    set attenuationColor(value) {
        if (this._objRef) {
            this._objRef.attenuationColor = applyValue(this._objRef.attenuationColor, value);
        }
    }
    get attenuationColor() {
        return this._objRef?.attenuationColor;
    }
    set specularIntensity(value) {
        if (this._objRef) {
            this._objRef.specularIntensity = value;
        }
    }
    get specularIntensity() {
        return this._objRef?.specularIntensity;
    }
    set specularIntensityMap(value) {
        if (this._objRef) {
            this._objRef.specularIntensityMap = value;
        }
    }
    get specularIntensityMap() {
        return this._objRef?.specularIntensityMap;
    }
    set specularColor(value) {
        if (this._objRef) {
            this._objRef.specularColor = applyValue(this._objRef.specularColor, value);
        }
    }
    get specularColor() {
        return this._objRef?.specularColor;
    }
    set specularColorMap(value) {
        if (this._objRef) {
            this._objRef.specularColorMap = value;
        }
    }
    get specularColorMap() {
        return this._objRef?.specularColorMap;
    }
    get anisotropy() {
        return this._objRef?.anisotropy;
    }
    set anisotropy(value) {
        if (this._objRef) {
            this._objRef.anisotropy = value;
        }
    }
    get clearcoat() {
        return this._objRef?.clearcoat;
    }
    set clearcoat(value) {
        if (this._objRef) {
            this._objRef.clearcoat = value;
        }
    }
    get iridescence() {
        return this._objRef?.iridescence;
    }
    set iridescence(value) {
        if (this._objRef) {
            this._objRef.iridescence = value;
        }
    }
    get dispersion() {
        return this._objRef?.dispersion;
    }
    set dispersion(value) {
        if (this._objRef) {
            this._objRef.dispersion = value;
        }
    }
    get sheen() {
        return this._objRef?.sheen;
    }
    set sheen(value) {
        if (this._objRef) {
            this._objRef.sheen = value;
        }
    }
    get transmission() {
        return this._objRef?.transmission;
    }
    set transmission(value) {
        if (this._objRef) {
            this._objRef.transmission = value;
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThMeshPhysicalMaterial, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.1.2", type: ThMeshPhysicalMaterial, selector: "th-meshPhysicalMaterial", inputs: { defines: "defines", type: "type", anisotropyRotation: "anisotropyRotation", anisotropyMap: "anisotropyMap", clearcoatMap: "clearcoatMap", clearcoatRoughness: "clearcoatRoughness", clearcoatRoughnessMap: "clearcoatRoughnessMap", clearcoatNormalScale: "clearcoatNormalScale", clearcoatNormalMap: "clearcoatNormalMap", ior: "ior", reflectivity: "reflectivity", iridescenceMap: "iridescenceMap", iridescenceIOR: "iridescenceIOR", iridescenceThicknessRange: "iridescenceThicknessRange", iridescenceThicknessMap: "iridescenceThicknessMap", sheenColor: "sheenColor", sheenColorMap: "sheenColorMap", sheenRoughness: "sheenRoughness", sheenRoughnessMap: "sheenRoughnessMap", transmissionMap: "transmissionMap", thickness: "thickness", thicknessMap: "thicknessMap", attenuationDistance: "attenuationDistance", attenuationColor: "attenuationColor", specularIntensity: "specularIntensity", specularIntensityMap: "specularIntensityMap", specularColor: "specularColor", specularColorMap: "specularColorMap", anisotropy: "anisotropy", clearcoat: "clearcoat", iridescence: "iridescence", dispersion: "dispersion", sheen: "sheen", transmission: "transmission" }, providers: [
            {
                provide: ThMaterial,
                useExisting: forwardRef(() => ThMeshPhysicalMaterial),
            },
        ], usesInheritance: true, ngImport: i0, template: '<ng-content/>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThMeshPhysicalMaterial, decorators: [{
            type: Component,
            args: [{
                    selector: 'th-meshPhysicalMaterial',
                    template: '<ng-content/>',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    providers: [
                        {
                            provide: ThMaterial,
                            useExisting: forwardRef(() => ThMeshPhysicalMaterial),
                        },
                    ],
                }]
        }], propDecorators: { defines: [{
                type: Input
            }], type: [{
                type: Input
            }], anisotropyRotation: [{
                type: Input
            }], anisotropyMap: [{
                type: Input
            }], clearcoatMap: [{
                type: Input
            }], clearcoatRoughness: [{
                type: Input
            }], clearcoatRoughnessMap: [{
                type: Input
            }], clearcoatNormalScale: [{
                type: Input
            }], clearcoatNormalMap: [{
                type: Input
            }], ior: [{
                type: Input
            }], reflectivity: [{
                type: Input
            }], iridescenceMap: [{
                type: Input
            }], iridescenceIOR: [{
                type: Input
            }], iridescenceThicknessRange: [{
                type: Input
            }], iridescenceThicknessMap: [{
                type: Input
            }], sheenColor: [{
                type: Input
            }], sheenColorMap: [{
                type: Input
            }], sheenRoughness: [{
                type: Input
            }], sheenRoughnessMap: [{
                type: Input
            }], transmissionMap: [{
                type: Input
            }], thickness: [{
                type: Input
            }], thicknessMap: [{
                type: Input
            }], attenuationDistance: [{
                type: Input
            }], attenuationColor: [{
                type: Input
            }], specularIntensity: [{
                type: Input
            }], specularIntensityMap: [{
                type: Input
            }], specularColor: [{
                type: Input
            }], specularColorMap: [{
                type: Input
            }], anisotropy: [{
                type: Input
            }], clearcoat: [{
                type: Input
            }], iridescence: [{
                type: Input
            }], dispersion: [{
                type: Input
            }], sheen: [{
                type: Input
            }], transmission: [{
                type: Input
            }] } });

/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix */
class ThMeshToonMaterial extends ThMaterial {
    getType() {
        return MeshToonMaterial;
    }
    get isMeshToonMaterial() {
        return this._objRef?.isMeshToonMaterial;
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
    set color(value) {
        if (this._objRef) {
            this._objRef.color = applyValue(this._objRef.color, value);
        }
    }
    get color() {
        return this._objRef?.color;
    }
    set gradientMap(value) {
        if (this._objRef) {
            this._objRef.gradientMap = value;
        }
    }
    get gradientMap() {
        return this._objRef?.gradientMap;
    }
    set map(value) {
        if (this._objRef) {
            this._objRef.map = value;
        }
    }
    get map() {
        return this._objRef?.map;
    }
    set lightMap(value) {
        if (this._objRef) {
            this._objRef.lightMap = value;
        }
    }
    get lightMap() {
        return this._objRef?.lightMap;
    }
    set lightMapIntensity(value) {
        if (this._objRef) {
            this._objRef.lightMapIntensity = value;
        }
    }
    get lightMapIntensity() {
        return this._objRef?.lightMapIntensity;
    }
    set aoMap(value) {
        if (this._objRef) {
            this._objRef.aoMap = value;
        }
    }
    get aoMap() {
        return this._objRef?.aoMap;
    }
    set aoMapIntensity(value) {
        if (this._objRef) {
            this._objRef.aoMapIntensity = value;
        }
    }
    get aoMapIntensity() {
        return this._objRef?.aoMapIntensity;
    }
    set emissive(value) {
        if (this._objRef) {
            this._objRef.emissive = applyValue(this._objRef.emissive, value);
        }
    }
    get emissive() {
        return this._objRef?.emissive;
    }
    set emissiveIntensity(value) {
        if (this._objRef) {
            this._objRef.emissiveIntensity = value;
        }
    }
    get emissiveIntensity() {
        return this._objRef?.emissiveIntensity;
    }
    set emissiveMap(value) {
        if (this._objRef) {
            this._objRef.emissiveMap = value;
        }
    }
    get emissiveMap() {
        return this._objRef?.emissiveMap;
    }
    set bumpMap(value) {
        if (this._objRef) {
            this._objRef.bumpMap = value;
        }
    }
    get bumpMap() {
        return this._objRef?.bumpMap;
    }
    set bumpScale(value) {
        if (this._objRef) {
            this._objRef.bumpScale = value;
        }
    }
    get bumpScale() {
        return this._objRef?.bumpScale;
    }
    set normalMap(value) {
        if (this._objRef) {
            this._objRef.normalMap = value;
        }
    }
    get normalMap() {
        return this._objRef?.normalMap;
    }
    set normalMapType(value) {
        if (this._objRef) {
            this._objRef.normalMapType = value;
        }
    }
    get normalMapType() {
        return this._objRef?.normalMapType;
    }
    set normalScale(value) {
        if (this._objRef) {
            this._objRef.normalScale = applyValue(this._objRef.normalScale, value);
        }
    }
    get normalScale() {
        return this._objRef?.normalScale;
    }
    set displacementMap(value) {
        if (this._objRef) {
            this._objRef.displacementMap = value;
        }
    }
    get displacementMap() {
        return this._objRef?.displacementMap;
    }
    set displacementScale(value) {
        if (this._objRef) {
            this._objRef.displacementScale = value;
        }
    }
    get displacementScale() {
        return this._objRef?.displacementScale;
    }
    set displacementBias(value) {
        if (this._objRef) {
            this._objRef.displacementBias = value;
        }
    }
    get displacementBias() {
        return this._objRef?.displacementBias;
    }
    set alphaMap(value) {
        if (this._objRef) {
            this._objRef.alphaMap = value;
        }
    }
    get alphaMap() {
        return this._objRef?.alphaMap;
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
    set wireframeLinecap(value) {
        if (this._objRef) {
            this._objRef.wireframeLinecap = value;
        }
    }
    get wireframeLinecap() {
        return this._objRef?.wireframeLinecap;
    }
    set wireframeLinejoin(value) {
        if (this._objRef) {
            this._objRef.wireframeLinejoin = value;
        }
    }
    get wireframeLinejoin() {
        return this._objRef?.wireframeLinejoin;
    }
    set fog(value) {
        if (this._objRef) {
            this._objRef.fog = value;
        }
    }
    get fog() {
        return this._objRef?.fog;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThMeshToonMaterial, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.1.2", type: ThMeshToonMaterial, selector: "th-meshToonMaterial", inputs: { type: "type", defines: "defines", color: "color", gradientMap: "gradientMap", map: "map", lightMap: "lightMap", lightMapIntensity: "lightMapIntensity", aoMap: "aoMap", aoMapIntensity: "aoMapIntensity", emissive: "emissive", emissiveIntensity: "emissiveIntensity", emissiveMap: "emissiveMap", bumpMap: "bumpMap", bumpScale: "bumpScale", normalMap: "normalMap", normalMapType: "normalMapType", normalScale: "normalScale", displacementMap: "displacementMap", displacementScale: "displacementScale", displacementBias: "displacementBias", alphaMap: "alphaMap", wireframe: "wireframe", wireframeLinewidth: "wireframeLinewidth", wireframeLinecap: "wireframeLinecap", wireframeLinejoin: "wireframeLinejoin", fog: "fog" }, providers: [
            { provide: ThMaterial, useExisting: forwardRef(() => ThMeshToonMaterial) },
        ], usesInheritance: true, ngImport: i0, template: '<ng-content/>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThMeshToonMaterial, decorators: [{
            type: Component,
            args: [{
                    selector: 'th-meshToonMaterial',
                    template: '<ng-content/>',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    providers: [
                        { provide: ThMaterial, useExisting: forwardRef(() => ThMeshToonMaterial) },
                    ],
                }]
        }], propDecorators: { type: [{
                type: Input
            }], defines: [{
                type: Input
            }], color: [{
                type: Input
            }], gradientMap: [{
                type: Input
            }], map: [{
                type: Input
            }], lightMap: [{
                type: Input
            }], lightMapIntensity: [{
                type: Input
            }], aoMap: [{
                type: Input
            }], aoMapIntensity: [{
                type: Input
            }], emissive: [{
                type: Input
            }], emissiveIntensity: [{
                type: Input
            }], emissiveMap: [{
                type: Input
            }], bumpMap: [{
                type: Input
            }], bumpScale: [{
                type: Input
            }], normalMap: [{
                type: Input
            }], normalMapType: [{
                type: Input
            }], normalScale: [{
                type: Input
            }], displacementMap: [{
                type: Input
            }], displacementScale: [{
                type: Input
            }], displacementBias: [{
                type: Input
            }], alphaMap: [{
                type: Input
            }], wireframe: [{
                type: Input
            }], wireframeLinewidth: [{
                type: Input
            }], wireframeLinecap: [{
                type: Input
            }], wireframeLinejoin: [{
                type: Input
            }], fog: [{
                type: Input
            }] } });

/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix */
class ThOctahedronGeometry extends ThPolyhedronGeometry {
    getType() {
        return OctahedronGeometry;
    }
    get type() {
        return this._objRef?.type;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThOctahedronGeometry, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.1.2", type: ThOctahedronGeometry, selector: "th-octahedronGeometry", providers: [
            {
                provide: ThBufferGeometry,
                useExisting: forwardRef(() => ThOctahedronGeometry),
            },
        ], usesInheritance: true, ngImport: i0, template: '<ng-content/>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThOctahedronGeometry, decorators: [{
            type: Component,
            args: [{
                    selector: 'th-octahedronGeometry',
                    template: '<ng-content/>',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    providers: [
                        {
                            provide: ThBufferGeometry,
                            useExisting: forwardRef(() => ThOctahedronGeometry),
                        },
                    ],
                }]
        }] });

/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix */
class ThOrthographicCamera extends ThCamera {
    getType() {
        return OrthographicCamera;
    }
    get isOrthographicCamera() {
        return this._objRef?.isOrthographicCamera;
    }
    get type() {
        return this._objRef?.type;
    }
    set zoom(value) {
        if (this._objRef) {
            this._objRef.zoom = value;
        }
    }
    get zoom() {
        return this._objRef?.zoom;
    }
    set view(value) {
        if (this._objRef) {
            this._objRef.view = value;
        }
    }
    get view() {
        return this._objRef?.view;
    }
    set left(value) {
        if (this._objRef) {
            this._objRef.left = value;
        }
    }
    get left() {
        return this._objRef?.left;
    }
    set right(value) {
        if (this._objRef) {
            this._objRef.right = value;
        }
    }
    get right() {
        return this._objRef?.right;
    }
    set top(value) {
        if (this._objRef) {
            this._objRef.top = value;
        }
    }
    get top() {
        return this._objRef?.top;
    }
    set bottom(value) {
        if (this._objRef) {
            this._objRef.bottom = value;
        }
    }
    get bottom() {
        return this._objRef?.bottom;
    }
    set near(value) {
        if (this._objRef) {
            this._objRef.near = value;
        }
    }
    get near() {
        return this._objRef?.near;
    }
    set far(value) {
        if (this._objRef) {
            this._objRef.far = value;
        }
    }
    get far() {
        return this._objRef?.far;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThOrthographicCamera, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.1.2", type: ThOrthographicCamera, selector: "th-orthographicCamera", inputs: { zoom: "zoom", view: "view", left: "left", right: "right", top: "top", bottom: "bottom", near: "near", far: "far" }, providers: [
            {
                provide: ThObject3D,
                useExisting: forwardRef(() => ThOrthographicCamera),
            },
            { provide: ThCamera, useExisting: forwardRef(() => ThOrthographicCamera) },
        ], usesInheritance: true, ngImport: i0, template: '<ng-content/>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThOrthographicCamera, decorators: [{
            type: Component,
            args: [{
                    selector: 'th-orthographicCamera',
                    template: '<ng-content/>',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    providers: [
                        {
                            provide: ThObject3D,
                            useExisting: forwardRef(() => ThOrthographicCamera),
                        },
                        { provide: ThCamera, useExisting: forwardRef(() => ThOrthographicCamera) },
                    ],
                }]
        }], propDecorators: { zoom: [{
                type: Input
            }], view: [{
                type: Input
            }], left: [{
                type: Input
            }], right: [{
                type: Input
            }], top: [{
                type: Input
            }], bottom: [{
                type: Input
            }], near: [{
                type: Input
            }], far: [{
                type: Input
            }] } });

/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix */
class ThOutlinePass extends ThPass {
    getType() {
        return OutlinePass;
    }
    set renderScene(value) {
        if (this._objRef) {
            this._objRef.renderScene = value;
        }
    }
    get renderScene() {
        return this._objRef?.renderScene;
    }
    set renderCamera(value) {
        if (this._objRef) {
            this._objRef.renderCamera = value;
        }
    }
    get renderCamera() {
        return this._objRef?.renderCamera;
    }
    set selectedObjects(value) {
        if (this._objRef) {
            this._objRef.selectedObjects = value;
        }
    }
    get selectedObjects() {
        return this._objRef?.selectedObjects;
    }
    set visibleEdgeColor(value) {
        if (this._objRef) {
            this._objRef.visibleEdgeColor = applyValue(this._objRef.visibleEdgeColor, value);
        }
    }
    get visibleEdgeColor() {
        return this._objRef?.visibleEdgeColor;
    }
    set hiddenEdgeColor(value) {
        if (this._objRef) {
            this._objRef.hiddenEdgeColor = applyValue(this._objRef.hiddenEdgeColor, value);
        }
    }
    get hiddenEdgeColor() {
        return this._objRef?.hiddenEdgeColor;
    }
    set edgeGlow(value) {
        if (this._objRef) {
            this._objRef.edgeGlow = value;
        }
    }
    get edgeGlow() {
        return this._objRef?.edgeGlow;
    }
    set usePatternTexture(value) {
        if (this._objRef) {
            this._objRef.usePatternTexture = value;
        }
    }
    get usePatternTexture() {
        return this._objRef?.usePatternTexture;
    }
    set edgeThickness(value) {
        if (this._objRef) {
            this._objRef.edgeThickness = value;
        }
    }
    get edgeThickness() {
        return this._objRef?.edgeThickness;
    }
    set edgeStrength(value) {
        if (this._objRef) {
            this._objRef.edgeStrength = value;
        }
    }
    get edgeStrength() {
        return this._objRef?.edgeStrength;
    }
    set downSampleRatio(value) {
        if (this._objRef) {
            this._objRef.downSampleRatio = value;
        }
    }
    get downSampleRatio() {
        return this._objRef?.downSampleRatio;
    }
    set pulsePeriod(value) {
        if (this._objRef) {
            this._objRef.pulsePeriod = value;
        }
    }
    get pulsePeriod() {
        return this._objRef?.pulsePeriod;
    }
    set resolution(value) {
        if (this._objRef) {
            this._objRef.resolution = applyValue(this._objRef.resolution, value);
        }
    }
    get resolution() {
        return this._objRef?.resolution;
    }
    set patternTexture(value) {
        if (this._objRef) {
            this._objRef.patternTexture = value;
        }
    }
    get patternTexture() {
        return this._objRef?.patternTexture;
    }
    set maskBufferMaterial(value) {
        if (this._objRef) {
            this._objRef.maskBufferMaterial = value;
        }
    }
    get maskBufferMaterial() {
        return this._objRef?.maskBufferMaterial;
    }
    set renderTargetMaskBuffer(value) {
        if (this._objRef) {
            this._objRef.renderTargetMaskBuffer = value;
        }
    }
    get renderTargetMaskBuffer() {
        return this._objRef?.renderTargetMaskBuffer;
    }
    set depthMaterial(value) {
        if (this._objRef) {
            this._objRef.depthMaterial = value;
        }
    }
    get depthMaterial() {
        return this._objRef?.depthMaterial;
    }
    set prepareMaskMaterial(value) {
        if (this._objRef) {
            this._objRef.prepareMaskMaterial = value;
        }
    }
    get prepareMaskMaterial() {
        return this._objRef?.prepareMaskMaterial;
    }
    set renderTargetDepthBuffer(value) {
        if (this._objRef) {
            this._objRef.renderTargetDepthBuffer = value;
        }
    }
    get renderTargetDepthBuffer() {
        return this._objRef?.renderTargetDepthBuffer;
    }
    set renderTargetMaskDownSampleBuffer(value) {
        if (this._objRef) {
            this._objRef.renderTargetMaskDownSampleBuffer = value;
        }
    }
    get renderTargetMaskDownSampleBuffer() {
        return this._objRef?.renderTargetMaskDownSampleBuffer;
    }
    set renderTargetBlurBuffer1(value) {
        if (this._objRef) {
            this._objRef.renderTargetBlurBuffer1 = value;
        }
    }
    get renderTargetBlurBuffer1() {
        return this._objRef?.renderTargetBlurBuffer1;
    }
    set renderTargetBlurBuffer2(value) {
        if (this._objRef) {
            this._objRef.renderTargetBlurBuffer2 = value;
        }
    }
    get renderTargetBlurBuffer2() {
        return this._objRef?.renderTargetBlurBuffer2;
    }
    set edgeDetectionMaterial(value) {
        if (this._objRef) {
            this._objRef.edgeDetectionMaterial = value;
        }
    }
    get edgeDetectionMaterial() {
        return this._objRef?.edgeDetectionMaterial;
    }
    set renderTargetEdgeBuffer1(value) {
        if (this._objRef) {
            this._objRef.renderTargetEdgeBuffer1 = value;
        }
    }
    get renderTargetEdgeBuffer1() {
        return this._objRef?.renderTargetEdgeBuffer1;
    }
    set renderTargetEdgeBuffer2(value) {
        if (this._objRef) {
            this._objRef.renderTargetEdgeBuffer2 = value;
        }
    }
    get renderTargetEdgeBuffer2() {
        return this._objRef?.renderTargetEdgeBuffer2;
    }
    set separableBlurMaterial1(value) {
        if (this._objRef) {
            this._objRef.separableBlurMaterial1 = value;
        }
    }
    get separableBlurMaterial1() {
        return this._objRef?.separableBlurMaterial1;
    }
    set separableBlurMaterial2(value) {
        if (this._objRef) {
            this._objRef.separableBlurMaterial2 = value;
        }
    }
    get separableBlurMaterial2() {
        return this._objRef?.separableBlurMaterial2;
    }
    set overlayMaterial(value) {
        if (this._objRef) {
            this._objRef.overlayMaterial = value;
        }
    }
    get overlayMaterial() {
        return this._objRef?.overlayMaterial;
    }
    set copyUniforms(value) {
        if (this._objRef) {
            this._objRef.copyUniforms = value;
        }
    }
    get copyUniforms() {
        return this._objRef?.copyUniforms;
    }
    set materialCopy(value) {
        if (this._objRef) {
            this._objRef.materialCopy = value;
        }
    }
    get materialCopy() {
        return this._objRef?.materialCopy;
    }
    set oldClearColor(value) {
        if (this._objRef) {
            this._objRef.oldClearColor = applyValue(this._objRef.oldClearColor, value);
        }
    }
    get oldClearColor() {
        return this._objRef?.oldClearColor;
    }
    set oldClearAlpha(value) {
        if (this._objRef) {
            this._objRef.oldClearAlpha = value;
        }
    }
    get oldClearAlpha() {
        return this._objRef?.oldClearAlpha;
    }
    set fsQuad(value) {
        if (this._objRef) {
            this._objRef.fsQuad = value;
        }
    }
    get fsQuad() {
        return this._objRef?.fsQuad;
    }
    set tempPulseColor1(value) {
        if (this._objRef) {
            this._objRef.tempPulseColor1 = applyValue(this._objRef.tempPulseColor1, value);
        }
    }
    get tempPulseColor1() {
        return this._objRef?.tempPulseColor1;
    }
    set tempPulseColor2(value) {
        if (this._objRef) {
            this._objRef.tempPulseColor2 = applyValue(this._objRef.tempPulseColor2, value);
        }
    }
    get tempPulseColor2() {
        return this._objRef?.tempPulseColor2;
    }
    set textureMatrix(value) {
        if (this._objRef) {
            this._objRef.textureMatrix = applyValue(this._objRef.textureMatrix, value);
        }
    }
    get textureMatrix() {
        return this._objRef?.textureMatrix;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThOutlinePass, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.1.2", type: ThOutlinePass, selector: "th-outlinePass", inputs: { renderScene: "renderScene", renderCamera: "renderCamera", selectedObjects: "selectedObjects", visibleEdgeColor: "visibleEdgeColor", hiddenEdgeColor: "hiddenEdgeColor", edgeGlow: "edgeGlow", usePatternTexture: "usePatternTexture", edgeThickness: "edgeThickness", edgeStrength: "edgeStrength", downSampleRatio: "downSampleRatio", pulsePeriod: "pulsePeriod", resolution: "resolution", patternTexture: "patternTexture", maskBufferMaterial: "maskBufferMaterial", renderTargetMaskBuffer: "renderTargetMaskBuffer", depthMaterial: "depthMaterial", prepareMaskMaterial: "prepareMaskMaterial", renderTargetDepthBuffer: "renderTargetDepthBuffer", renderTargetMaskDownSampleBuffer: "renderTargetMaskDownSampleBuffer", renderTargetBlurBuffer1: "renderTargetBlurBuffer1", renderTargetBlurBuffer2: "renderTargetBlurBuffer2", edgeDetectionMaterial: "edgeDetectionMaterial", renderTargetEdgeBuffer1: "renderTargetEdgeBuffer1", renderTargetEdgeBuffer2: "renderTargetEdgeBuffer2", separableBlurMaterial1: "separableBlurMaterial1", separableBlurMaterial2: "separableBlurMaterial2", overlayMaterial: "overlayMaterial", copyUniforms: "copyUniforms", materialCopy: "materialCopy", oldClearColor: "oldClearColor", oldClearAlpha: "oldClearAlpha", fsQuad: "fsQuad", tempPulseColor1: "tempPulseColor1", tempPulseColor2: "tempPulseColor2", textureMatrix: "textureMatrix" }, providers: [
            { provide: ThPassBase, useExisting: forwardRef(() => ThOutlinePass) },
        ], usesInheritance: true, ngImport: i0, template: '<ng-content/>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThOutlinePass, decorators: [{
            type: Component,
            args: [{
                    selector: 'th-outlinePass',
                    template: '<ng-content/>',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    providers: [
                        { provide: ThPassBase, useExisting: forwardRef(() => ThOutlinePass) },
                    ],
                }]
        }], propDecorators: { renderScene: [{
                type: Input
            }], renderCamera: [{
                type: Input
            }], selectedObjects: [{
                type: Input
            }], visibleEdgeColor: [{
                type: Input
            }], hiddenEdgeColor: [{
                type: Input
            }], edgeGlow: [{
                type: Input
            }], usePatternTexture: [{
                type: Input
            }], edgeThickness: [{
                type: Input
            }], edgeStrength: [{
                type: Input
            }], downSampleRatio: [{
                type: Input
            }], pulsePeriod: [{
                type: Input
            }], resolution: [{
                type: Input
            }], patternTexture: [{
                type: Input
            }], maskBufferMaterial: [{
                type: Input
            }], renderTargetMaskBuffer: [{
                type: Input
            }], depthMaterial: [{
                type: Input
            }], prepareMaskMaterial: [{
                type: Input
            }], renderTargetDepthBuffer: [{
                type: Input
            }], renderTargetMaskDownSampleBuffer: [{
                type: Input
            }], renderTargetBlurBuffer1: [{
                type: Input
            }], renderTargetBlurBuffer2: [{
                type: Input
            }], edgeDetectionMaterial: [{
                type: Input
            }], renderTargetEdgeBuffer1: [{
                type: Input
            }], renderTargetEdgeBuffer2: [{
                type: Input
            }], separableBlurMaterial1: [{
                type: Input
            }], separableBlurMaterial2: [{
                type: Input
            }], overlayMaterial: [{
                type: Input
            }], copyUniforms: [{
                type: Input
            }], materialCopy: [{
                type: Input
            }], oldClearColor: [{
                type: Input
            }], oldClearAlpha: [{
                type: Input
            }], fsQuad: [{
                type: Input
            }], tempPulseColor1: [{
                type: Input
            }], tempPulseColor2: [{
                type: Input
            }], textureMatrix: [{
                type: Input
            }] } });

/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix */
class ThOutputPass extends ThPass {
    getType() {
        return OutputPass;
    }
    set uniforms(map) {
        if (this._objRef) {
            Object.assign(this._objRef.uniforms, map);
        }
    }
    get uniforms() {
        return this._objRef?.uniforms;
    }
    set material(value) {
        if (this._objRef) {
            this._objRef.material = value;
        }
    }
    get material() {
        return this._objRef?.material;
    }
    set fsQuad(value) {
        if (this._objRef) {
            this._objRef.fsQuad = value;
        }
    }
    get fsQuad() {
        return this._objRef?.fsQuad;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThOutputPass, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.1.2", type: ThOutputPass, selector: "th-outputPass", inputs: { uniforms: "uniforms", material: "material", fsQuad: "fsQuad" }, providers: [
            { provide: ThPassBase, useExisting: forwardRef(() => ThOutputPass) },
        ], usesInheritance: true, ngImport: i0, template: '<ng-content/>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThOutputPass, decorators: [{
            type: Component,
            args: [{
                    selector: 'th-outputPass',
                    template: '<ng-content/>',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    providers: [
                        { provide: ThPassBase, useExisting: forwardRef(() => ThOutputPass) },
                    ],
                }]
        }], propDecorators: { uniforms: [{
                type: Input
            }], material: [{
                type: Input
            }], fsQuad: [{
                type: Input
            }] } });

/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix */
class ThParametricGeometry extends ThBufferGeometry {
    getType() {
        return ParametricGeometry;
    }
    set type(value) {
        if (this._objRef) {
            this._objRef.type = value;
        }
    }
    get type() {
        return this._objRef?.type;
    }
    set parameters(value) {
        if (this._objRef) {
            this._objRef.parameters = value;
        }
    }
    get parameters() {
        return this._objRef?.parameters;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThParametricGeometry, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.1.2", type: ThParametricGeometry, selector: "th-parametricGeometry", inputs: { type: "type", parameters: "parameters" }, providers: [
            {
                provide: ThBufferGeometry,
                useExisting: forwardRef(() => ThParametricGeometry),
            },
        ], usesInheritance: true, ngImport: i0, template: '<ng-content/>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThParametricGeometry, decorators: [{
            type: Component,
            args: [{
                    selector: 'th-parametricGeometry',
                    template: '<ng-content/>',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    providers: [
                        {
                            provide: ThBufferGeometry,
                            useExisting: forwardRef(() => ThParametricGeometry),
                        },
                    ],
                }]
        }], propDecorators: { type: [{
                type: Input
            }], parameters: [{
                type: Input
            }] } });

/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix */
class ThPlaneGeometry extends ThBufferGeometry {
    getType() {
        return PlaneGeometry;
    }
    get type() {
        return this._objRef?.type;
    }
    get parameters() {
        return this._objRef?.parameters;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThPlaneGeometry, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.1.2", type: ThPlaneGeometry, selector: "th-planeGeometry", providers: [
            {
                provide: ThBufferGeometry,
                useExisting: forwardRef(() => ThPlaneGeometry),
            },
        ], usesInheritance: true, ngImport: i0, template: '<ng-content/>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThPlaneGeometry, decorators: [{
            type: Component,
            args: [{
                    selector: 'th-planeGeometry',
                    template: '<ng-content/>',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    providers: [
                        {
                            provide: ThBufferGeometry,
                            useExisting: forwardRef(() => ThPlaneGeometry),
                        },
                    ],
                }]
        }] });

/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix */
class ThPlaneHelper extends ThLineSegments {
    getType() {
        return PlaneHelper;
    }
    get type() {
        return this._objRef?.type;
    }
    set plane(value) {
        if (this._objRef) {
            this._objRef.plane = applyValue(this._objRef.plane, value);
        }
    }
    get plane() {
        return this._objRef?.plane;
    }
    set size(value) {
        if (this._objRef) {
            this._objRef.size = value;
        }
    }
    get size() {
        return this._objRef?.size;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThPlaneHelper, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.1.2", type: ThPlaneHelper, selector: "th-planeHelper", inputs: { plane: "plane", size: "size" }, providers: [
            { provide: ThObject3D, useExisting: forwardRef(() => ThPlaneHelper) },
        ], usesInheritance: true, ngImport: i0, template: '<ng-content/>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThPlaneHelper, decorators: [{
            type: Component,
            args: [{
                    selector: 'th-planeHelper',
                    template: '<ng-content/>',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    providers: [
                        { provide: ThObject3D, useExisting: forwardRef(() => ThPlaneHelper) },
                    ],
                }]
        }], propDecorators: { plane: [{
                type: Input
            }], size: [{
                type: Input
            }] } });

/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix */
class ThPointLight extends ThLight {
    getType() {
        return PointLight;
    }
    get isPointLight() {
        return this._objRef?.isPointLight;
    }
    set type(value) {
        if (this._objRef) {
            this._objRef.type = value;
        }
    }
    get type() {
        return this._objRef?.type;
    }
    set intensity(value) {
        if (this._objRef) {
            this._objRef.intensity = value;
        }
    }
    get intensity() {
        return this._objRef?.intensity;
    }
    set distance(value) {
        if (this._objRef) {
            this._objRef.distance = value;
        }
    }
    get distance() {
        return this._objRef?.distance;
    }
    set castShadow(value) {
        if (this._objRef) {
            this._objRef.castShadow = value;
        }
    }
    get castShadow() {
        return this._objRef?.castShadow;
    }
    set decay(value) {
        if (this._objRef) {
            this._objRef.decay = value;
        }
    }
    get decay() {
        return this._objRef?.decay;
    }
    set shadow(value) {
        if (this._objRef) {
            this._objRef.shadow = value;
        }
    }
    get shadow() {
        return this._objRef?.shadow;
    }
    set power(value) {
        if (this._objRef) {
            this._objRef.power = value;
        }
    }
    get power() {
        return this._objRef?.power;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThPointLight, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.1.2", type: ThPointLight, selector: "th-pointLight", inputs: { type: "type", intensity: "intensity", distance: "distance", castShadow: "castShadow", decay: "decay", shadow: "shadow", power: "power" }, providers: [
            { provide: ThObject3D, useExisting: forwardRef(() => ThPointLight) },
        ], usesInheritance: true, ngImport: i0, template: '<ng-content/>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThPointLight, decorators: [{
            type: Component,
            args: [{
                    selector: 'th-pointLight',
                    template: '<ng-content/>',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    providers: [
                        { provide: ThObject3D, useExisting: forwardRef(() => ThPointLight) },
                    ],
                }]
        }], propDecorators: { type: [{
                type: Input
            }], intensity: [{
                type: Input
            }], distance: [{
                type: Input
            }], castShadow: [{
                type: Input
            }], decay: [{
                type: Input
            }], shadow: [{
                type: Input
            }], power: [{
                type: Input
            }] } });

/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix */
class ThPointLightHelper extends ThObject3D {
    getType() {
        return PointLightHelper;
    }
    get type() {
        return this._objRef?.type;
    }
    set light(value) {
        if (this._objRef) {
            this._objRef.light = value;
        }
    }
    get light() {
        return this._objRef?.light;
    }
    set matrix(value) {
        if (this._objRef) {
            this._objRef.matrix = applyValue(this._objRef.matrix, value);
        }
    }
    get matrix() {
        return this._objRef?.matrix;
    }
    set color(value) {
        if (this._objRef) {
            this._objRef.color = value;
        }
    }
    get color() {
        return this._objRef?.color;
    }
    set matrixAutoUpdate(value) {
        if (this._objRef) {
            this._objRef.matrixAutoUpdate = value;
        }
    }
    get matrixAutoUpdate() {
        return this._objRef?.matrixAutoUpdate;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThPointLightHelper, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.1.2", type: ThPointLightHelper, selector: "th-pointLightHelper", inputs: { light: "light", matrix: "matrix", color: "color", matrixAutoUpdate: "matrixAutoUpdate" }, providers: [
            { provide: ThObject3D, useExisting: forwardRef(() => ThPointLightHelper) },
        ], usesInheritance: true, ngImport: i0, template: '<ng-content/>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThPointLightHelper, decorators: [{
            type: Component,
            args: [{
                    selector: 'th-pointLightHelper',
                    template: '<ng-content/>',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    providers: [
                        { provide: ThObject3D, useExisting: forwardRef(() => ThPointLightHelper) },
                    ],
                }]
        }], propDecorators: { light: [{
                type: Input
            }], matrix: [{
                type: Input
            }], color: [{
                type: Input
            }], matrixAutoUpdate: [{
                type: Input
            }] } });

/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix */
class ThPointerLockControls extends ThControlBase {
    getType() {
        return PointerLockControls;
    }
    set camera(value) {
        if (this._objRef) {
            this._objRef.camera = value;
        }
    }
    get camera() {
        return this._objRef?.camera;
    }
    set domElement(value) {
        if (this._objRef) {
            this._objRef.domElement = value;
        }
    }
    get domElement() {
        return this._objRef?.domElement;
    }
    set isLocked(value) {
        if (this._objRef) {
            this._objRef.isLocked = value;
        }
    }
    get isLocked() {
        return this._objRef?.isLocked;
    }
    set minPolarAngle(value) {
        if (this._objRef) {
            this._objRef.minPolarAngle = value;
        }
    }
    get minPolarAngle() {
        return this._objRef?.minPolarAngle;
    }
    set maxPolarAngle(value) {
        if (this._objRef) {
            this._objRef.maxPolarAngle = value;
        }
    }
    get maxPolarAngle() {
        return this._objRef?.maxPolarAngle;
    }
    set pointerSpeed(value) {
        if (this._objRef) {
            this._objRef.pointerSpeed = value;
        }
    }
    get pointerSpeed() {
        return this._objRef?.pointerSpeed;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThPointerLockControls, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.1.2", type: ThPointerLockControls, selector: "th-pointerLockControls", inputs: { camera: "camera", domElement: "domElement", isLocked: "isLocked", minPolarAngle: "minPolarAngle", maxPolarAngle: "maxPolarAngle", pointerSpeed: "pointerSpeed" }, providers: [
            {
                provide: ThControlBase,
                useExisting: forwardRef(() => ThPointerLockControls),
            },
        ], usesInheritance: true, ngImport: i0, template: '<ng-content/>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThPointerLockControls, decorators: [{
            type: Component,
            args: [{
                    selector: 'th-pointerLockControls',
                    template: '<ng-content/>',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    providers: [
                        {
                            provide: ThControlBase,
                            useExisting: forwardRef(() => ThPointerLockControls),
                        },
                    ],
                }]
        }], propDecorators: { camera: [{
                type: Input
            }], domElement: [{
                type: Input
            }], isLocked: [{
                type: Input
            }], minPolarAngle: [{
                type: Input
            }], maxPolarAngle: [{
                type: Input
            }], pointerSpeed: [{
                type: Input
            }] } });

/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix */
class ThPoints extends ThObject3D {
    getType() {
        return Points;
    }
    get isPoints() {
        return this._objRef?.isPoints;
    }
    get type() {
        return this._objRef?.type;
    }
    set morphTargetInfluences(value) {
        if (this._objRef) {
            this._objRef.morphTargetInfluences = value;
        }
    }
    get morphTargetInfluences() {
        return this._objRef?.morphTargetInfluences;
    }
    set morphTargetDictionary(value) {
        if (this._objRef) {
            this._objRef.morphTargetDictionary = value;
        }
    }
    get morphTargetDictionary() {
        return this._objRef?.morphTargetDictionary;
    }
    set geometry(value) {
        if (this._objRef) {
            this._objRef.geometry = value;
        }
    }
    get geometry() {
        return this._objRef?.geometry;
    }
    set material(value) {
        if (this._objRef) {
            this._objRef.material = value;
        }
    }
    get material() {
        return this._objRef?.material;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThPoints, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.1.2", type: ThPoints, selector: "th-points", inputs: { morphTargetInfluences: "morphTargetInfluences", morphTargetDictionary: "morphTargetDictionary", geometry: "geometry", material: "material" }, providers: [{ provide: ThObject3D, useExisting: forwardRef(() => ThPoints) }], usesInheritance: true, ngImport: i0, template: '<ng-content/>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThPoints, decorators: [{
            type: Component,
            args: [{
                    selector: 'th-points',
                    template: '<ng-content/>',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    providers: [{ provide: ThObject3D, useExisting: forwardRef(() => ThPoints) }],
                }]
        }], propDecorators: { morphTargetInfluences: [{
                type: Input
            }], morphTargetDictionary: [{
                type: Input
            }], geometry: [{
                type: Input
            }], material: [{
                type: Input
            }] } });

/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix */
class ThPointsMaterial extends ThMaterial {
    getType() {
        return PointsMaterial;
    }
    get isPointsMaterial() {
        return this._objRef?.isPointsMaterial;
    }
    set type(value) {
        if (this._objRef) {
            this._objRef.type = value;
        }
    }
    get type() {
        return this._objRef?.type;
    }
    set color(value) {
        if (this._objRef) {
            this._objRef.color = applyValue(this._objRef.color, value);
        }
    }
    get color() {
        return this._objRef?.color;
    }
    set map(value) {
        if (this._objRef) {
            this._objRef.map = value;
        }
    }
    get map() {
        return this._objRef?.map;
    }
    set alphaMap(value) {
        if (this._objRef) {
            this._objRef.alphaMap = value;
        }
    }
    get alphaMap() {
        return this._objRef?.alphaMap;
    }
    set size(value) {
        if (this._objRef) {
            this._objRef.size = value;
        }
    }
    get size() {
        return this._objRef?.size;
    }
    set sizeAttenuation(value) {
        if (this._objRef) {
            this._objRef.sizeAttenuation = value;
        }
    }
    get sizeAttenuation() {
        return this._objRef?.sizeAttenuation;
    }
    set fog(value) {
        if (this._objRef) {
            this._objRef.fog = value;
        }
    }
    get fog() {
        return this._objRef?.fog;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThPointsMaterial, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.1.2", type: ThPointsMaterial, selector: "th-pointsMaterial", inputs: { type: "type", color: "color", map: "map", alphaMap: "alphaMap", size: "size", sizeAttenuation: "sizeAttenuation", fog: "fog" }, providers: [
            { provide: ThMaterial, useExisting: forwardRef(() => ThPointsMaterial) },
        ], usesInheritance: true, ngImport: i0, template: '<ng-content/>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThPointsMaterial, decorators: [{
            type: Component,
            args: [{
                    selector: 'th-pointsMaterial',
                    template: '<ng-content/>',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    providers: [
                        { provide: ThMaterial, useExisting: forwardRef(() => ThPointsMaterial) },
                    ],
                }]
        }], propDecorators: { type: [{
                type: Input
            }], color: [{
                type: Input
            }], map: [{
                type: Input
            }], alphaMap: [{
                type: Input
            }], size: [{
                type: Input
            }], sizeAttenuation: [{
                type: Input
            }], fog: [{
                type: Input
            }] } });

/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix */
class ThPolarGridHelper extends ThLineSegments {
    getType() {
        return PolarGridHelper;
    }
    get type() {
        return this._objRef?.type;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThPolarGridHelper, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.1.2", type: ThPolarGridHelper, selector: "th-polarGridHelper", providers: [
            { provide: ThObject3D, useExisting: forwardRef(() => ThPolarGridHelper) },
        ], usesInheritance: true, ngImport: i0, template: '<ng-content/>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThPolarGridHelper, decorators: [{
            type: Component,
            args: [{
                    selector: 'th-polarGridHelper',
                    template: '<ng-content/>',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    providers: [
                        { provide: ThObject3D, useExisting: forwardRef(() => ThPolarGridHelper) },
                    ],
                }]
        }] });

/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix */
class ThPositionalAudio extends ThAudio {
    getType() {
        return PositionalAudio;
    }
    set panner(value) {
        if (this._objRef) {
            this._objRef.panner = value;
        }
    }
    get panner() {
        return this._objRef?.panner;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThPositionalAudio, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.1.2", type: ThPositionalAudio, selector: "th-positionalAudio", inputs: { panner: "panner" }, providers: [
            { provide: ThObject3D, useExisting: forwardRef(() => ThPositionalAudio) },
        ], usesInheritance: true, ngImport: i0, template: '<ng-content/>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThPositionalAudio, decorators: [{
            type: Component,
            args: [{
                    selector: 'th-positionalAudio',
                    template: '<ng-content/>',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    providers: [
                        { provide: ThObject3D, useExisting: forwardRef(() => ThPositionalAudio) },
                    ],
                }]
        }], propDecorators: { panner: [{
                type: Input
            }] } });

/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix */
class ThShaderMaterial extends ThMaterial {
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

/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix */
class ThRawShaderMaterial extends ThShaderMaterial {
    getType() {
        return RawShaderMaterial;
    }
    get isRawShaderMaterial() {
        return this._objRef?.isRawShaderMaterial;
    }
    get type() {
        return this._objRef?.type;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThRawShaderMaterial, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.1.2", type: ThRawShaderMaterial, selector: "th-rawShaderMaterial", providers: [
            { provide: ThMaterial, useExisting: forwardRef(() => ThRawShaderMaterial) },
        ], usesInheritance: true, ngImport: i0, template: '<ng-content/>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThRawShaderMaterial, decorators: [{
            type: Component,
            args: [{
                    selector: 'th-rawShaderMaterial',
                    template: '<ng-content/>',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    providers: [
                        { provide: ThMaterial, useExisting: forwardRef(() => ThRawShaderMaterial) },
                    ],
                }]
        }] });

/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix */
class ThRectAreaLight extends ThLight {
    getType() {
        return RectAreaLight;
    }
    get isRectAreaLight() {
        return this._objRef?.isRectAreaLight;
    }
    get type() {
        return this._objRef?.type;
    }
    set width(value) {
        if (this._objRef) {
            this._objRef.width = value;
        }
    }
    get width() {
        return this._objRef?.width;
    }
    set height(value) {
        if (this._objRef) {
            this._objRef.height = value;
        }
    }
    get height() {
        return this._objRef?.height;
    }
    set intensity(value) {
        if (this._objRef) {
            this._objRef.intensity = value;
        }
    }
    get intensity() {
        return this._objRef?.intensity;
    }
    set power(value) {
        if (this._objRef) {
            this._objRef.power = value;
        }
    }
    get power() {
        return this._objRef?.power;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThRectAreaLight, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.1.2", type: ThRectAreaLight, selector: "th-rectAreaLight", inputs: { width: "width", height: "height", intensity: "intensity", power: "power" }, providers: [
            { provide: ThObject3D, useExisting: forwardRef(() => ThRectAreaLight) },
        ], usesInheritance: true, ngImport: i0, template: '<ng-content/>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThRectAreaLight, decorators: [{
            type: Component,
            args: [{
                    selector: 'th-rectAreaLight',
                    template: '<ng-content/>',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    providers: [
                        { provide: ThObject3D, useExisting: forwardRef(() => ThRectAreaLight) },
                    ],
                }]
        }], propDecorators: { width: [{
                type: Input
            }], height: [{
                type: Input
            }], intensity: [{
                type: Input
            }], power: [{
                type: Input
            }] } });

/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix */
class ThRenderPassGen extends ThPass {
    getType() {
        return RenderPass;
    }
    set scene(value) {
        if (this._objRef) {
            this._objRef.scene = value;
        }
    }
    get scene() {
        return this._objRef?.scene;
    }
    set camera(value) {
        if (this._objRef) {
            this._objRef.camera = value;
        }
    }
    get camera() {
        return this._objRef?.camera;
    }
    set overrideMaterial(value) {
        if (this._objRef) {
            this._objRef.overrideMaterial = value;
        }
    }
    get overrideMaterial() {
        return this._objRef?.overrideMaterial;
    }
    set clearColor(value) {
        if (this._objRef) {
            this._objRef.clearColor = applyValue(this._objRef.clearColor, value);
        }
    }
    get clearColor() {
        return this._objRef?.clearColor;
    }
    set clearAlpha(value) {
        if (this._objRef) {
            this._objRef.clearAlpha = value;
        }
    }
    get clearAlpha() {
        return this._objRef?.clearAlpha;
    }
    set clearDepth(value) {
        if (this._objRef) {
            this._objRef.clearDepth = value;
        }
    }
    get clearDepth() {
        return this._objRef?.clearDepth;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThRenderPassGen, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.1.2", type: ThRenderPassGen, selector: "th-renderPassGen", inputs: { scene: "scene", camera: "camera", overrideMaterial: "overrideMaterial", clearColor: "clearColor", clearAlpha: "clearAlpha", clearDepth: "clearDepth" }, providers: [
            { provide: ThPassBase, useExisting: forwardRef(() => ThRenderPassGen) },
        ], usesInheritance: true, ngImport: i0, template: '<ng-content/>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThRenderPassGen, decorators: [{
            type: Component,
            args: [{
                    selector: 'th-renderPassGen',
                    template: '<ng-content/>',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    providers: [
                        { provide: ThPassBase, useExisting: forwardRef(() => ThRenderPassGen) },
                    ],
                }]
        }], propDecorators: { scene: [{
                type: Input
            }], camera: [{
                type: Input
            }], overrideMaterial: [{
                type: Input
            }], clearColor: [{
                type: Input
            }], clearAlpha: [{
                type: Input
            }], clearDepth: [{
                type: Input
            }] } });

/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix */
class ThRingGeometry extends ThBufferGeometry {
    getType() {
        return RingGeometry;
    }
    get type() {
        return this._objRef?.type;
    }
    get parameters() {
        return this._objRef?.parameters;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThRingGeometry, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.1.2", type: ThRingGeometry, selector: "th-ringGeometry", providers: [
            {
                provide: ThBufferGeometry,
                useExisting: forwardRef(() => ThRingGeometry),
            },
        ], usesInheritance: true, ngImport: i0, template: '<ng-content/>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThRingGeometry, decorators: [{
            type: Component,
            args: [{
                    selector: 'th-ringGeometry',
                    template: '<ng-content/>',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    providers: [
                        {
                            provide: ThBufferGeometry,
                            useExisting: forwardRef(() => ThRingGeometry),
                        },
                    ],
                }]
        }] });

/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix */
class ThRoundedBoxGeometry extends ThBoxGeometry {
    getType() {
        return RoundedBoxGeometry;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThRoundedBoxGeometry, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.1.2", type: ThRoundedBoxGeometry, selector: "th-roundedBoxGeometry", providers: [
            {
                provide: ThBufferGeometry,
                useExisting: forwardRef(() => ThRoundedBoxGeometry),
            },
        ], usesInheritance: true, ngImport: i0, template: '<ng-content/>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThRoundedBoxGeometry, decorators: [{
            type: Component,
            args: [{
                    selector: 'th-roundedBoxGeometry',
                    template: '<ng-content/>',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    providers: [
                        {
                            provide: ThBufferGeometry,
                            useExisting: forwardRef(() => ThRoundedBoxGeometry),
                        },
                    ],
                }]
        }] });

/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix */
class ThSAOPass extends ThPass {
    getType() {
        return SAOPass;
    }
    set scene(value) {
        if (this._objRef) {
            this._objRef.scene = value;
        }
    }
    get scene() {
        return this._objRef?.scene;
    }
    set camera(value) {
        if (this._objRef) {
            this._objRef.camera = value;
        }
    }
    get camera() {
        return this._objRef?.camera;
    }
    set originalClearColor(value) {
        if (this._objRef) {
            this._objRef.originalClearColor = applyValue(this._objRef.originalClearColor, value);
        }
    }
    get originalClearColor() {
        return this._objRef?.originalClearColor;
    }
    set oldClearColor(value) {
        if (this._objRef) {
            this._objRef.oldClearColor = applyValue(this._objRef.oldClearColor, value);
        }
    }
    get oldClearColor() {
        return this._objRef?.oldClearColor;
    }
    set oldClearAlpha(value) {
        if (this._objRef) {
            this._objRef.oldClearAlpha = value;
        }
    }
    get oldClearAlpha() {
        return this._objRef?.oldClearAlpha;
    }
    set resolution(value) {
        if (this._objRef) {
            this._objRef.resolution = applyValue(this._objRef.resolution, value);
        }
    }
    get resolution() {
        return this._objRef?.resolution;
    }
    set saoRenderTarget(value) {
        if (this._objRef) {
            this._objRef.saoRenderTarget = value;
        }
    }
    get saoRenderTarget() {
        return this._objRef?.saoRenderTarget;
    }
    set blurIntermediateRenderTarget(value) {
        if (this._objRef) {
            this._objRef.blurIntermediateRenderTarget = value;
        }
    }
    get blurIntermediateRenderTarget() {
        return this._objRef?.blurIntermediateRenderTarget;
    }
    set normalRenderTarget(value) {
        if (this._objRef) {
            this._objRef.normalRenderTarget = value;
        }
    }
    get normalRenderTarget() {
        return this._objRef?.normalRenderTarget;
    }
    set normalMaterial(value) {
        if (this._objRef) {
            this._objRef.normalMaterial = value;
        }
    }
    get normalMaterial() {
        return this._objRef?.normalMaterial;
    }
    set saoMaterial(value) {
        if (this._objRef) {
            this._objRef.saoMaterial = value;
        }
    }
    get saoMaterial() {
        return this._objRef?.saoMaterial;
    }
    set vBlurMaterial(value) {
        if (this._objRef) {
            this._objRef.vBlurMaterial = value;
        }
    }
    get vBlurMaterial() {
        return this._objRef?.vBlurMaterial;
    }
    set hBlurMaterial(value) {
        if (this._objRef) {
            this._objRef.hBlurMaterial = value;
        }
    }
    get hBlurMaterial() {
        return this._objRef?.hBlurMaterial;
    }
    set materialCopy(value) {
        if (this._objRef) {
            this._objRef.materialCopy = value;
        }
    }
    get materialCopy() {
        return this._objRef?.materialCopy;
    }
    set fsQuad(value) {
        if (this._objRef) {
            this._objRef.fsQuad = value;
        }
    }
    get fsQuad() {
        return this._objRef?.fsQuad;
    }
    set params(value) {
        if (this._objRef) {
            this._objRef.params = value;
        }
    }
    get params() {
        return this._objRef?.params;
    }
    static { this.OUTPUT = SAOPass.OUTPUT; }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThSAOPass, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.1.2", type: ThSAOPass, selector: "th-sAOPass", inputs: { scene: "scene", camera: "camera", originalClearColor: "originalClearColor", oldClearColor: "oldClearColor", oldClearAlpha: "oldClearAlpha", resolution: "resolution", saoRenderTarget: "saoRenderTarget", blurIntermediateRenderTarget: "blurIntermediateRenderTarget", normalRenderTarget: "normalRenderTarget", normalMaterial: "normalMaterial", saoMaterial: "saoMaterial", vBlurMaterial: "vBlurMaterial", hBlurMaterial: "hBlurMaterial", materialCopy: "materialCopy", fsQuad: "fsQuad", params: "params" }, providers: [
            { provide: ThPassBase, useExisting: forwardRef(() => ThSAOPass) },
        ], usesInheritance: true, ngImport: i0, template: '<ng-content/>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThSAOPass, decorators: [{
            type: Component,
            args: [{
                    selector: 'th-sAOPass',
                    template: '<ng-content/>',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    providers: [
                        { provide: ThPassBase, useExisting: forwardRef(() => ThSAOPass) },
                    ],
                }]
        }], propDecorators: { scene: [{
                type: Input
            }], camera: [{
                type: Input
            }], originalClearColor: [{
                type: Input
            }], oldClearColor: [{
                type: Input
            }], oldClearAlpha: [{
                type: Input
            }], resolution: [{
                type: Input
            }], saoRenderTarget: [{
                type: Input
            }], blurIntermediateRenderTarget: [{
                type: Input
            }], normalRenderTarget: [{
                type: Input
            }], normalMaterial: [{
                type: Input
            }], saoMaterial: [{
                type: Input
            }], vBlurMaterial: [{
                type: Input
            }], hBlurMaterial: [{
                type: Input
            }], materialCopy: [{
                type: Input
            }], fsQuad: [{
                type: Input
            }], params: [{
                type: Input
            }] } });

/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix */
class ThSMAAPass extends ThPass {
    getType() {
        return SMAAPass;
    }
    set edgesRT(value) {
        if (this._objRef) {
            this._objRef.edgesRT = value;
        }
    }
    get edgesRT() {
        return this._objRef?.edgesRT;
    }
    set weightsRT(value) {
        if (this._objRef) {
            this._objRef.weightsRT = value;
        }
    }
    get weightsRT() {
        return this._objRef?.weightsRT;
    }
    set areaTexture(value) {
        if (this._objRef) {
            this._objRef.areaTexture = value;
        }
    }
    get areaTexture() {
        return this._objRef?.areaTexture;
    }
    set searchTexture(value) {
        if (this._objRef) {
            this._objRef.searchTexture = value;
        }
    }
    get searchTexture() {
        return this._objRef?.searchTexture;
    }
    set uniformsEdges(value) {
        if (this._objRef) {
            this._objRef.uniformsEdges = value;
        }
    }
    get uniformsEdges() {
        return this._objRef?.uniformsEdges;
    }
    set materialEdges(value) {
        if (this._objRef) {
            this._objRef.materialEdges = value;
        }
    }
    get materialEdges() {
        return this._objRef?.materialEdges;
    }
    set uniformsWeights(value) {
        if (this._objRef) {
            this._objRef.uniformsWeights = value;
        }
    }
    get uniformsWeights() {
        return this._objRef?.uniformsWeights;
    }
    set materialWeights(value) {
        if (this._objRef) {
            this._objRef.materialWeights = value;
        }
    }
    get materialWeights() {
        return this._objRef?.materialWeights;
    }
    set uniformsBlend(value) {
        if (this._objRef) {
            this._objRef.uniformsBlend = value;
        }
    }
    get uniformsBlend() {
        return this._objRef?.uniformsBlend;
    }
    set materialBlend(value) {
        if (this._objRef) {
            this._objRef.materialBlend = value;
        }
    }
    get materialBlend() {
        return this._objRef?.materialBlend;
    }
    set fsQuad(value) {
        if (this._objRef) {
            this._objRef.fsQuad = value;
        }
    }
    get fsQuad() {
        return this._objRef?.fsQuad;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThSMAAPass, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.1.2", type: ThSMAAPass, selector: "th-sMAAPass", inputs: { edgesRT: "edgesRT", weightsRT: "weightsRT", areaTexture: "areaTexture", searchTexture: "searchTexture", uniformsEdges: "uniformsEdges", materialEdges: "materialEdges", uniformsWeights: "uniformsWeights", materialWeights: "materialWeights", uniformsBlend: "uniformsBlend", materialBlend: "materialBlend", fsQuad: "fsQuad" }, providers: [
            { provide: ThPassBase, useExisting: forwardRef(() => ThSMAAPass) },
        ], usesInheritance: true, ngImport: i0, template: '<ng-content/>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThSMAAPass, decorators: [{
            type: Component,
            args: [{
                    selector: 'th-sMAAPass',
                    template: '<ng-content/>',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    providers: [
                        { provide: ThPassBase, useExisting: forwardRef(() => ThSMAAPass) },
                    ],
                }]
        }], propDecorators: { edgesRT: [{
                type: Input
            }], weightsRT: [{
                type: Input
            }], areaTexture: [{
                type: Input
            }], searchTexture: [{
                type: Input
            }], uniformsEdges: [{
                type: Input
            }], materialEdges: [{
                type: Input
            }], uniformsWeights: [{
                type: Input
            }], materialWeights: [{
                type: Input
            }], uniformsBlend: [{
                type: Input
            }], materialBlend: [{
                type: Input
            }], fsQuad: [{
                type: Input
            }] } });

/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix */
class ThSSAARenderPass extends ThPass {
    getType() {
        return SSAARenderPass;
    }
    set scene(value) {
        if (this._objRef) {
            this._objRef.scene = value;
        }
    }
    get scene() {
        return this._objRef?.scene;
    }
    set camera(value) {
        if (this._objRef) {
            this._objRef.camera = value;
        }
    }
    get camera() {
        return this._objRef?.camera;
    }
    set sampleLevel(value) {
        if (this._objRef) {
            this._objRef.sampleLevel = value;
        }
    }
    get sampleLevel() {
        return this._objRef?.sampleLevel;
    }
    set unbiased(value) {
        if (this._objRef) {
            this._objRef.unbiased = value;
        }
    }
    get unbiased() {
        return this._objRef?.unbiased;
    }
    set clearColor(value) {
        if (this._objRef) {
            this._objRef.clearColor = value;
        }
    }
    get clearColor() {
        return this._objRef?.clearColor;
    }
    set clearAlpha(value) {
        if (this._objRef) {
            this._objRef.clearAlpha = value;
        }
    }
    get clearAlpha() {
        return this._objRef?.clearAlpha;
    }
    set copyUniforms(value) {
        if (this._objRef) {
            this._objRef.copyUniforms = value;
        }
    }
    get copyUniforms() {
        return this._objRef?.copyUniforms;
    }
    set copyMaterial(value) {
        if (this._objRef) {
            this._objRef.copyMaterial = value;
        }
    }
    get copyMaterial() {
        return this._objRef?.copyMaterial;
    }
    set fsQuad(value) {
        if (this._objRef) {
            this._objRef.fsQuad = value;
        }
    }
    get fsQuad() {
        return this._objRef?.fsQuad;
    }
    set sampleRenderTarget(value) {
        if (this._objRef) {
            this._objRef.sampleRenderTarget = value;
        }
    }
    get sampleRenderTarget() {
        return this._objRef?.sampleRenderTarget;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThSSAARenderPass, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.1.2", type: ThSSAARenderPass, selector: "th-sSAARenderPass", inputs: { scene: "scene", camera: "camera", sampleLevel: "sampleLevel", unbiased: "unbiased", clearColor: "clearColor", clearAlpha: "clearAlpha", copyUniforms: "copyUniforms", copyMaterial: "copyMaterial", fsQuad: "fsQuad", sampleRenderTarget: "sampleRenderTarget" }, providers: [
            { provide: ThPassBase, useExisting: forwardRef(() => ThSSAARenderPass) },
        ], usesInheritance: true, ngImport: i0, template: '<ng-content/>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThSSAARenderPass, decorators: [{
            type: Component,
            args: [{
                    selector: 'th-sSAARenderPass',
                    template: '<ng-content/>',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    providers: [
                        { provide: ThPassBase, useExisting: forwardRef(() => ThSSAARenderPass) },
                    ],
                }]
        }], propDecorators: { scene: [{
                type: Input
            }], camera: [{
                type: Input
            }], sampleLevel: [{
                type: Input
            }], unbiased: [{
                type: Input
            }], clearColor: [{
                type: Input
            }], clearAlpha: [{
                type: Input
            }], copyUniforms: [{
                type: Input
            }], copyMaterial: [{
                type: Input
            }], fsQuad: [{
                type: Input
            }], sampleRenderTarget: [{
                type: Input
            }] } });

/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix */
class ThSSAOPass extends ThPass {
    getType() {
        return SSAOPass;
    }
    set scene(value) {
        if (this._objRef) {
            this._objRef.scene = value;
        }
    }
    get scene() {
        return this._objRef?.scene;
    }
    set camera(value) {
        if (this._objRef) {
            this._objRef.camera = value;
        }
    }
    get camera() {
        return this._objRef?.camera;
    }
    set width(value) {
        if (this._objRef) {
            this._objRef.width = value;
        }
    }
    get width() {
        return this._objRef?.width;
    }
    set height(value) {
        if (this._objRef) {
            this._objRef.height = value;
        }
    }
    get height() {
        return this._objRef?.height;
    }
    set clear(value) {
        if (this._objRef) {
            this._objRef.clear = value;
        }
    }
    get clear() {
        return this._objRef?.clear;
    }
    set kernelRadius(value) {
        if (this._objRef) {
            this._objRef.kernelRadius = value;
        }
    }
    get kernelRadius() {
        return this._objRef?.kernelRadius;
    }
    set kernel(value) {
        if (this._objRef) {
            this._objRef.kernel = value;
        }
    }
    get kernel() {
        return this._objRef?.kernel;
    }
    set noiseTexture(value) {
        if (this._objRef) {
            this._objRef.noiseTexture = value;
        }
    }
    get noiseTexture() {
        return this._objRef?.noiseTexture;
    }
    set output(value) {
        if (this._objRef) {
            this._objRef.output = value;
        }
    }
    get output() {
        return this._objRef?.output;
    }
    set minDistance(value) {
        if (this._objRef) {
            this._objRef.minDistance = value;
        }
    }
    get minDistance() {
        return this._objRef?.minDistance;
    }
    set maxDistance(value) {
        if (this._objRef) {
            this._objRef.maxDistance = value;
        }
    }
    get maxDistance() {
        return this._objRef?.maxDistance;
    }
    set normalRenderTarget(value) {
        if (this._objRef) {
            this._objRef.normalRenderTarget = value;
        }
    }
    get normalRenderTarget() {
        return this._objRef?.normalRenderTarget;
    }
    set ssaoRenderTarget(value) {
        if (this._objRef) {
            this._objRef.ssaoRenderTarget = value;
        }
    }
    get ssaoRenderTarget() {
        return this._objRef?.ssaoRenderTarget;
    }
    set blurRenderTarget(value) {
        if (this._objRef) {
            this._objRef.blurRenderTarget = value;
        }
    }
    get blurRenderTarget() {
        return this._objRef?.blurRenderTarget;
    }
    set ssaoMaterial(value) {
        if (this._objRef) {
            this._objRef.ssaoMaterial = value;
        }
    }
    get ssaoMaterial() {
        return this._objRef?.ssaoMaterial;
    }
    set normalMaterial(value) {
        if (this._objRef) {
            this._objRef.normalMaterial = value;
        }
    }
    get normalMaterial() {
        return this._objRef?.normalMaterial;
    }
    set blurMaterial(value) {
        if (this._objRef) {
            this._objRef.blurMaterial = value;
        }
    }
    get blurMaterial() {
        return this._objRef?.blurMaterial;
    }
    set depthRenderMaterial(value) {
        if (this._objRef) {
            this._objRef.depthRenderMaterial = value;
        }
    }
    get depthRenderMaterial() {
        return this._objRef?.depthRenderMaterial;
    }
    set copyMaterial(value) {
        if (this._objRef) {
            this._objRef.copyMaterial = value;
        }
    }
    get copyMaterial() {
        return this._objRef?.copyMaterial;
    }
    set fsQuad(value) {
        if (this._objRef) {
            this._objRef.fsQuad = value;
        }
    }
    get fsQuad() {
        return this._objRef?.fsQuad;
    }
    set originalClearColor(value) {
        if (this._objRef) {
            this._objRef.originalClearColor = applyValue(this._objRef.originalClearColor, value);
        }
    }
    get originalClearColor() {
        return this._objRef?.originalClearColor;
    }
    static { this.OUTPUT = SSAOPass.OUTPUT; }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThSSAOPass, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.1.2", type: ThSSAOPass, selector: "th-sSAOPass", inputs: { scene: "scene", camera: "camera", width: "width", height: "height", clear: "clear", kernelRadius: "kernelRadius", kernel: "kernel", noiseTexture: "noiseTexture", output: "output", minDistance: "minDistance", maxDistance: "maxDistance", normalRenderTarget: "normalRenderTarget", ssaoRenderTarget: "ssaoRenderTarget", blurRenderTarget: "blurRenderTarget", ssaoMaterial: "ssaoMaterial", normalMaterial: "normalMaterial", blurMaterial: "blurMaterial", depthRenderMaterial: "depthRenderMaterial", copyMaterial: "copyMaterial", fsQuad: "fsQuad", originalClearColor: "originalClearColor" }, providers: [
            { provide: ThPassBase, useExisting: forwardRef(() => ThSSAOPass) },
        ], usesInheritance: true, ngImport: i0, template: '<ng-content/>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThSSAOPass, decorators: [{
            type: Component,
            args: [{
                    selector: 'th-sSAOPass',
                    template: '<ng-content/>',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    providers: [
                        { provide: ThPassBase, useExisting: forwardRef(() => ThSSAOPass) },
                    ],
                }]
        }], propDecorators: { scene: [{
                type: Input
            }], camera: [{
                type: Input
            }], width: [{
                type: Input
            }], height: [{
                type: Input
            }], clear: [{
                type: Input
            }], kernelRadius: [{
                type: Input
            }], kernel: [{
                type: Input
            }], noiseTexture: [{
                type: Input
            }], output: [{
                type: Input
            }], minDistance: [{
                type: Input
            }], maxDistance: [{
                type: Input
            }], normalRenderTarget: [{
                type: Input
            }], ssaoRenderTarget: [{
                type: Input
            }], blurRenderTarget: [{
                type: Input
            }], ssaoMaterial: [{
                type: Input
            }], normalMaterial: [{
                type: Input
            }], blurMaterial: [{
                type: Input
            }], depthRenderMaterial: [{
                type: Input
            }], copyMaterial: [{
                type: Input
            }], fsQuad: [{
                type: Input
            }], originalClearColor: [{
                type: Input
            }] } });

/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix */
class ThSSRPass extends ThPass {
    getType() {
        return SSRPass;
    }
    set width(value) {
        if (this._objRef) {
            this._objRef.width = value;
        }
    }
    get width() {
        return this._objRef?.width;
    }
    set height(value) {
        if (this._objRef) {
            this._objRef.height = value;
        }
    }
    get height() {
        return this._objRef?.height;
    }
    set clear(value) {
        if (this._objRef) {
            this._objRef.clear = value;
        }
    }
    get clear() {
        return this._objRef?.clear;
    }
    set renderer(value) {
        if (this._objRef) {
            this._objRef.renderer = value;
        }
    }
    get renderer() {
        return this._objRef?.renderer;
    }
    set scene(value) {
        if (this._objRef) {
            this._objRef.scene = value;
        }
    }
    get scene() {
        return this._objRef?.scene;
    }
    set camera(value) {
        if (this._objRef) {
            this._objRef.camera = value;
        }
    }
    get camera() {
        return this._objRef?.camera;
    }
    set groundReflector(value) {
        if (this._objRef) {
            this._objRef.groundReflector = value;
        }
    }
    get groundReflector() {
        return this._objRef?.groundReflector;
    }
    set opacity(value) {
        if (this._objRef) {
            this._objRef.opacity = value;
        }
    }
    get opacity() {
        return this._objRef?.opacity;
    }
    set output(value) {
        if (this._objRef) {
            this._objRef.output = value;
        }
    }
    get output() {
        return this._objRef?.output;
    }
    set maxDistance(value) {
        if (this._objRef) {
            this._objRef.maxDistance = value;
        }
    }
    get maxDistance() {
        return this._objRef?.maxDistance;
    }
    set thickness(value) {
        if (this._objRef) {
            this._objRef.thickness = value;
        }
    }
    get thickness() {
        return this._objRef?.thickness;
    }
    set tempColor(value) {
        if (this._objRef) {
            this._objRef.tempColor = applyValue(this._objRef.tempColor, value);
        }
    }
    get tempColor() {
        return this._objRef?.tempColor;
    }
    get selects() {
        return this._objRef?.selects;
    }
    set selects(value) {
        if (this._objRef) {
            this._objRef.selects = value;
        }
    }
    set selective(value) {
        if (this._objRef) {
            this._objRef.selective = value;
        }
    }
    get selective() {
        return this._objRef?.selective;
    }
    get bouncing() {
        return this._objRef?.bouncing;
    }
    set bouncing(value) {
        if (this._objRef) {
            this._objRef.bouncing = value;
        }
    }
    set blur(value) {
        if (this._objRef) {
            this._objRef.blur = value;
        }
    }
    get blur() {
        return this._objRef?.blur;
    }
    get distanceAttenuation() {
        return this._objRef?.distanceAttenuation;
    }
    set distanceAttenuation(value) {
        if (this._objRef) {
            this._objRef.distanceAttenuation = value;
        }
    }
    get fresnel() {
        return this._objRef?.fresnel;
    }
    set fresnel(value) {
        if (this._objRef) {
            this._objRef.fresnel = value;
        }
    }
    get infiniteThick() {
        return this._objRef?.infiniteThick;
    }
    set infiniteThick(value) {
        if (this._objRef) {
            this._objRef.infiniteThick = value;
        }
    }
    set beautyRenderTarget(value) {
        if (this._objRef) {
            this._objRef.beautyRenderTarget = value;
        }
    }
    get beautyRenderTarget() {
        return this._objRef?.beautyRenderTarget;
    }
    set prevRenderTarget(value) {
        if (this._objRef) {
            this._objRef.prevRenderTarget = value;
        }
    }
    get prevRenderTarget() {
        return this._objRef?.prevRenderTarget;
    }
    set normalRenderTarget(value) {
        if (this._objRef) {
            this._objRef.normalRenderTarget = value;
        }
    }
    get normalRenderTarget() {
        return this._objRef?.normalRenderTarget;
    }
    set metalnessRenderTarget(value) {
        if (this._objRef) {
            this._objRef.metalnessRenderTarget = value;
        }
    }
    get metalnessRenderTarget() {
        return this._objRef?.metalnessRenderTarget;
    }
    set ssrRenderTarget(value) {
        if (this._objRef) {
            this._objRef.ssrRenderTarget = value;
        }
    }
    get ssrRenderTarget() {
        return this._objRef?.ssrRenderTarget;
    }
    set blurRenderTarget(value) {
        if (this._objRef) {
            this._objRef.blurRenderTarget = value;
        }
    }
    get blurRenderTarget() {
        return this._objRef?.blurRenderTarget;
    }
    set blurRenderTarget2(value) {
        if (this._objRef) {
            this._objRef.blurRenderTarget2 = value;
        }
    }
    get blurRenderTarget2() {
        return this._objRef?.blurRenderTarget2;
    }
    set ssrMaterial(value) {
        if (this._objRef) {
            this._objRef.ssrMaterial = value;
        }
    }
    get ssrMaterial() {
        return this._objRef?.ssrMaterial;
    }
    set normalMaterial(value) {
        if (this._objRef) {
            this._objRef.normalMaterial = value;
        }
    }
    get normalMaterial() {
        return this._objRef?.normalMaterial;
    }
    set metalnessOnMaterial(value) {
        if (this._objRef) {
            this._objRef.metalnessOnMaterial = value;
        }
    }
    get metalnessOnMaterial() {
        return this._objRef?.metalnessOnMaterial;
    }
    set metalnessOffMaterial(value) {
        if (this._objRef) {
            this._objRef.metalnessOffMaterial = value;
        }
    }
    get metalnessOffMaterial() {
        return this._objRef?.metalnessOffMaterial;
    }
    set blurMaterial(value) {
        if (this._objRef) {
            this._objRef.blurMaterial = value;
        }
    }
    get blurMaterial() {
        return this._objRef?.blurMaterial;
    }
    set blurMaterial2(value) {
        if (this._objRef) {
            this._objRef.blurMaterial2 = value;
        }
    }
    get blurMaterial2() {
        return this._objRef?.blurMaterial2;
    }
    set depthRenderMaterial(value) {
        if (this._objRef) {
            this._objRef.depthRenderMaterial = value;
        }
    }
    get depthRenderMaterial() {
        return this._objRef?.depthRenderMaterial;
    }
    set copyMaterial(value) {
        if (this._objRef) {
            this._objRef.copyMaterial = value;
        }
    }
    get copyMaterial() {
        return this._objRef?.copyMaterial;
    }
    set fsQuad(value) {
        if (this._objRef) {
            this._objRef.fsQuad = value;
        }
    }
    get fsQuad() {
        return this._objRef?.fsQuad;
    }
    set originalClearColor(value) {
        if (this._objRef) {
            this._objRef.originalClearColor = applyValue(this._objRef.originalClearColor, value);
        }
    }
    get originalClearColor() {
        return this._objRef?.originalClearColor;
    }
    static { this.OUTPUT = SSRPass.OUTPUT; }
    set dispose(value) {
        if (this._objRef) {
            this._objRef.dispose = value;
        }
    }
    get dispose() {
        return this._objRef?.dispose;
    }
    set renderPass(value) {
        if (this._objRef) {
            this._objRef.renderPass = value;
        }
    }
    get renderPass() {
        return this._objRef?.renderPass;
    }
    set renderOverride(value) {
        if (this._objRef) {
            this._objRef.renderOverride = value;
        }
    }
    get renderOverride() {
        return this._objRef?.renderOverride;
    }
    set renderMetalness(value) {
        if (this._objRef) {
            this._objRef.renderMetalness = value;
        }
    }
    get renderMetalness() {
        return this._objRef?.renderMetalness;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThSSRPass, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.1.2", type: ThSSRPass, selector: "th-sSRPass", inputs: { width: "width", height: "height", clear: "clear", renderer: "renderer", scene: "scene", camera: "camera", groundReflector: "groundReflector", opacity: "opacity", output: "output", maxDistance: "maxDistance", thickness: "thickness", tempColor: "tempColor", selects: "selects", selective: "selective", bouncing: "bouncing", blur: "blur", distanceAttenuation: "distanceAttenuation", fresnel: "fresnel", infiniteThick: "infiniteThick", beautyRenderTarget: "beautyRenderTarget", prevRenderTarget: "prevRenderTarget", normalRenderTarget: "normalRenderTarget", metalnessRenderTarget: "metalnessRenderTarget", ssrRenderTarget: "ssrRenderTarget", blurRenderTarget: "blurRenderTarget", blurRenderTarget2: "blurRenderTarget2", ssrMaterial: "ssrMaterial", normalMaterial: "normalMaterial", metalnessOnMaterial: "metalnessOnMaterial", metalnessOffMaterial: "metalnessOffMaterial", blurMaterial: "blurMaterial", blurMaterial2: "blurMaterial2", depthRenderMaterial: "depthRenderMaterial", copyMaterial: "copyMaterial", fsQuad: "fsQuad", originalClearColor: "originalClearColor", dispose: "dispose", renderPass: "renderPass", renderOverride: "renderOverride", renderMetalness: "renderMetalness" }, providers: [
            { provide: ThPassBase, useExisting: forwardRef(() => ThSSRPass) },
        ], usesInheritance: true, ngImport: i0, template: '<ng-content/>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThSSRPass, decorators: [{
            type: Component,
            args: [{
                    selector: 'th-sSRPass',
                    template: '<ng-content/>',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    providers: [
                        { provide: ThPassBase, useExisting: forwardRef(() => ThSSRPass) },
                    ],
                }]
        }], propDecorators: { width: [{
                type: Input
            }], height: [{
                type: Input
            }], clear: [{
                type: Input
            }], renderer: [{
                type: Input
            }], scene: [{
                type: Input
            }], camera: [{
                type: Input
            }], groundReflector: [{
                type: Input
            }], opacity: [{
                type: Input
            }], output: [{
                type: Input
            }], maxDistance: [{
                type: Input
            }], thickness: [{
                type: Input
            }], tempColor: [{
                type: Input
            }], selects: [{
                type: Input
            }], selective: [{
                type: Input
            }], bouncing: [{
                type: Input
            }], blur: [{
                type: Input
            }], distanceAttenuation: [{
                type: Input
            }], fresnel: [{
                type: Input
            }], infiniteThick: [{
                type: Input
            }], beautyRenderTarget: [{
                type: Input
            }], prevRenderTarget: [{
                type: Input
            }], normalRenderTarget: [{
                type: Input
            }], metalnessRenderTarget: [{
                type: Input
            }], ssrRenderTarget: [{
                type: Input
            }], blurRenderTarget: [{
                type: Input
            }], blurRenderTarget2: [{
                type: Input
            }], ssrMaterial: [{
                type: Input
            }], normalMaterial: [{
                type: Input
            }], metalnessOnMaterial: [{
                type: Input
            }], metalnessOffMaterial: [{
                type: Input
            }], blurMaterial: [{
                type: Input
            }], blurMaterial2: [{
                type: Input
            }], depthRenderMaterial: [{
                type: Input
            }], copyMaterial: [{
                type: Input
            }], fsQuad: [{
                type: Input
            }], originalClearColor: [{
                type: Input
            }], dispose: [{
                type: Input
            }], renderPass: [{
                type: Input
            }], renderOverride: [{
                type: Input
            }], renderMetalness: [{
                type: Input
            }] } });

/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix */
class ThSavePass extends ThPass {
    getType() {
        return SavePass;
    }
    set textureID(value) {
        if (this._objRef) {
            this._objRef.textureID = value;
        }
    }
    get textureID() {
        return this._objRef?.textureID;
    }
    set renderTarget(value) {
        if (this._objRef) {
            this._objRef.renderTarget = value;
        }
    }
    get renderTarget() {
        return this._objRef?.renderTarget;
    }
    set uniforms(map) {
        if (this._objRef) {
            Object.assign(this._objRef.uniforms, map);
        }
    }
    get uniforms() {
        return this._objRef?.uniforms;
    }
    set material(value) {
        if (this._objRef) {
            this._objRef.material = value;
        }
    }
    get material() {
        return this._objRef?.material;
    }
    set fsQuad(value) {
        if (this._objRef) {
            this._objRef.fsQuad = value;
        }
    }
    get fsQuad() {
        return this._objRef?.fsQuad;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThSavePass, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.1.2", type: ThSavePass, selector: "th-savePass", inputs: { textureID: "textureID", renderTarget: "renderTarget", uniforms: "uniforms", material: "material", fsQuad: "fsQuad" }, providers: [
            { provide: ThPassBase, useExisting: forwardRef(() => ThSavePass) },
        ], usesInheritance: true, ngImport: i0, template: '<ng-content/>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThSavePass, decorators: [{
            type: Component,
            args: [{
                    selector: 'th-savePass',
                    template: '<ng-content/>',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    providers: [
                        { provide: ThPassBase, useExisting: forwardRef(() => ThSavePass) },
                    ],
                }]
        }], propDecorators: { textureID: [{
                type: Input
            }], renderTarget: [{
                type: Input
            }], uniforms: [{
                type: Input
            }], material: [{
                type: Input
            }], fsQuad: [{
                type: Input
            }] } });

/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix */
class ThShadowMaterial extends ThMaterial {
    getType() {
        return ShadowMaterial;
    }
    get isShadowMaterial() {
        return this._objRef?.isShadowMaterial;
    }
    set type(value) {
        if (this._objRef) {
            this._objRef.type = value;
        }
    }
    get type() {
        return this._objRef?.type;
    }
    set color(value) {
        if (this._objRef) {
            this._objRef.color = applyValue(this._objRef.color, value);
        }
    }
    get color() {
        return this._objRef?.color;
    }
    set transparent(value) {
        if (this._objRef) {
            this._objRef.transparent = value;
        }
    }
    get transparent() {
        return this._objRef?.transparent;
    }
    set fog(value) {
        if (this._objRef) {
            this._objRef.fog = value;
        }
    }
    get fog() {
        return this._objRef?.fog;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThShadowMaterial, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.1.2", type: ThShadowMaterial, selector: "th-shadowMaterial", inputs: { type: "type", color: "color", transparent: "transparent", fog: "fog" }, providers: [
            { provide: ThMaterial, useExisting: forwardRef(() => ThShadowMaterial) },
        ], usesInheritance: true, ngImport: i0, template: '<ng-content/>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThShadowMaterial, decorators: [{
            type: Component,
            args: [{
                    selector: 'th-shadowMaterial',
                    template: '<ng-content/>',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    providers: [
                        { provide: ThMaterial, useExisting: forwardRef(() => ThShadowMaterial) },
                    ],
                }]
        }], propDecorators: { type: [{
                type: Input
            }], color: [{
                type: Input
            }], transparent: [{
                type: Input
            }], fog: [{
                type: Input
            }] } });

/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix */
class ThShapeGeometry extends ThBufferGeometry {
    getType() {
        return ShapeGeometry;
    }
    get type() {
        return this._objRef?.type;
    }
    get parameters() {
        return this._objRef?.parameters;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThShapeGeometry, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.1.2", type: ThShapeGeometry, selector: "th-shapeGeometry", providers: [
            {
                provide: ThBufferGeometry,
                useExisting: forwardRef(() => ThShapeGeometry),
            },
        ], usesInheritance: true, ngImport: i0, template: '<ng-content/>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThShapeGeometry, decorators: [{
            type: Component,
            args: [{
                    selector: 'th-shapeGeometry',
                    template: '<ng-content/>',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    providers: [
                        {
                            provide: ThBufferGeometry,
                            useExisting: forwardRef(() => ThShapeGeometry),
                        },
                    ],
                }]
        }] });

/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix */
class ThSkeletonHelper extends ThLineSegments {
    getType() {
        return SkeletonHelper;
    }
    get type() {
        return this._objRef?.type;
    }
    set bones(value) {
        if (this._objRef) {
            this._objRef.bones = value;
        }
    }
    get bones() {
        return this._objRef?.bones;
    }
    set root(value) {
        if (this._objRef) {
            this._objRef.root = value;
        }
    }
    get root() {
        return this._objRef?.root;
    }
    set matrix(value) {
        if (this._objRef) {
            this._objRef.matrix = applyValue(this._objRef.matrix, value);
        }
    }
    get matrix() {
        return this._objRef?.matrix;
    }
    set matrixAutoUpdate(value) {
        if (this._objRef) {
            this._objRef.matrixAutoUpdate = value;
        }
    }
    get matrixAutoUpdate() {
        return this._objRef?.matrixAutoUpdate;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThSkeletonHelper, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.1.2", type: ThSkeletonHelper, selector: "th-skeletonHelper", inputs: { bones: "bones", root: "root", matrix: "matrix", matrixAutoUpdate: "matrixAutoUpdate" }, providers: [
            { provide: ThObject3D, useExisting: forwardRef(() => ThSkeletonHelper) },
        ], usesInheritance: true, ngImport: i0, template: '<ng-content/>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThSkeletonHelper, decorators: [{
            type: Component,
            args: [{
                    selector: 'th-skeletonHelper',
                    template: '<ng-content/>',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    providers: [
                        { provide: ThObject3D, useExisting: forwardRef(() => ThSkeletonHelper) },
                    ],
                }]
        }], propDecorators: { bones: [{
                type: Input
            }], root: [{
                type: Input
            }], matrix: [{
                type: Input
            }], matrixAutoUpdate: [{
                type: Input
            }] } });

/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix */
class ThSkinnedMesh extends ThMesh {
    getType() {
        return SkinnedMesh;
    }
    get isSkinnedMesh() {
        return this._objRef?.isSkinnedMesh;
    }
    get type() {
        return this._objRef?.type;
    }
    set bindMode(value) {
        if (this._objRef) {
            this._objRef.bindMode = value;
        }
    }
    get bindMode() {
        return this._objRef?.bindMode;
    }
    set bindMatrix(value) {
        if (this._objRef) {
            this._objRef.bindMatrix = applyValue(this._objRef.bindMatrix, value);
        }
    }
    get bindMatrix() {
        return this._objRef?.bindMatrix;
    }
    set bindMatrixInverse(value) {
        if (this._objRef) {
            this._objRef.bindMatrixInverse = applyValue(this._objRef.bindMatrixInverse, value);
        }
    }
    get bindMatrixInverse() {
        return this._objRef?.bindMatrixInverse;
    }
    set boundingBox(value) {
        if (this._objRef) {
            this._objRef.boundingBox = applyValue(this._objRef.boundingBox, value);
        }
    }
    get boundingBox() {
        return this._objRef?.boundingBox;
    }
    set boundingSphere(value) {
        if (this._objRef) {
            this._objRef.boundingSphere = applyValue(this._objRef.boundingSphere, value);
        }
    }
    get boundingSphere() {
        return this._objRef?.boundingSphere;
    }
    set skeleton(value) {
        if (this._objRef) {
            this._objRef.skeleton = value;
        }
    }
    get skeleton() {
        return this._objRef?.skeleton;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThSkinnedMesh, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.1.2", type: ThSkinnedMesh, selector: "th-skinnedMesh", inputs: { bindMode: "bindMode", bindMatrix: "bindMatrix", bindMatrixInverse: "bindMatrixInverse", boundingBox: "boundingBox", boundingSphere: "boundingSphere", skeleton: "skeleton" }, providers: [
            { provide: ThObject3D, useExisting: forwardRef(() => ThSkinnedMesh) },
        ], usesInheritance: true, ngImport: i0, template: '<ng-content/>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThSkinnedMesh, decorators: [{
            type: Component,
            args: [{
                    selector: 'th-skinnedMesh',
                    template: '<ng-content/>',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    providers: [
                        { provide: ThObject3D, useExisting: forwardRef(() => ThSkinnedMesh) },
                    ],
                }]
        }], propDecorators: { bindMode: [{
                type: Input
            }], bindMatrix: [{
                type: Input
            }], bindMatrixInverse: [{
                type: Input
            }], boundingBox: [{
                type: Input
            }], boundingSphere: [{
                type: Input
            }], skeleton: [{
                type: Input
            }] } });

/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix */
class ThSphereGeometry extends ThBufferGeometry {
    getType() {
        return SphereGeometry;
    }
    get type() {
        return this._objRef?.type;
    }
    get parameters() {
        return this._objRef?.parameters;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThSphereGeometry, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.1.2", type: ThSphereGeometry, selector: "th-sphereGeometry", providers: [
            {
                provide: ThBufferGeometry,
                useExisting: forwardRef(() => ThSphereGeometry),
            },
        ], usesInheritance: true, ngImport: i0, template: '<ng-content/>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThSphereGeometry, decorators: [{
            type: Component,
            args: [{
                    selector: 'th-sphereGeometry',
                    template: '<ng-content/>',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    providers: [
                        {
                            provide: ThBufferGeometry,
                            useExisting: forwardRef(() => ThSphereGeometry),
                        },
                    ],
                }]
        }] });

/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix */
class ThSpotLight extends ThLight {
    getType() {
        return SpotLight;
    }
    get isSpotLight() {
        return this._objRef?.isSpotLight;
    }
    get type() {
        return this._objRef?.type;
    }
    set position(value) {
        if (this._objRef) {
            applyValue(this._objRef.position, value);
        }
    }
    get position() {
        return this._objRef?.position;
    }
    set target(value) {
        if (this._objRef) {
            this._objRef.target = value;
        }
    }
    get target() {
        return this._objRef?.target;
    }
    set castShadow(value) {
        if (this._objRef) {
            this._objRef.castShadow = value;
        }
    }
    get castShadow() {
        return this._objRef?.castShadow;
    }
    set intensity(value) {
        if (this._objRef) {
            this._objRef.intensity = value;
        }
    }
    get intensity() {
        return this._objRef?.intensity;
    }
    set distance(value) {
        if (this._objRef) {
            this._objRef.distance = value;
        }
    }
    get distance() {
        return this._objRef?.distance;
    }
    set angle(value) {
        if (this._objRef) {
            this._objRef.angle = value;
        }
    }
    get angle() {
        return this._objRef?.angle;
    }
    set decay(value) {
        if (this._objRef) {
            this._objRef.decay = value;
        }
    }
    get decay() {
        return this._objRef?.decay;
    }
    set shadow(value) {
        if (this._objRef) {
            this._objRef.shadow = value;
        }
    }
    get shadow() {
        return this._objRef?.shadow;
    }
    set power(value) {
        if (this._objRef) {
            this._objRef.power = value;
        }
    }
    get power() {
        return this._objRef?.power;
    }
    set penumbra(value) {
        if (this._objRef) {
            this._objRef.penumbra = value;
        }
    }
    get penumbra() {
        return this._objRef?.penumbra;
    }
    set map(value) {
        if (this._objRef) {
            this._objRef.map = value;
        }
    }
    get map() {
        return this._objRef?.map;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThSpotLight, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.1.2", type: ThSpotLight, selector: "th-spotLight", inputs: { position: "position", target: "target", castShadow: "castShadow", intensity: "intensity", distance: "distance", angle: "angle", decay: "decay", shadow: "shadow", power: "power", penumbra: "penumbra", map: "map" }, providers: [
            { provide: ThObject3D, useExisting: forwardRef(() => ThSpotLight) },
        ], usesInheritance: true, ngImport: i0, template: '<ng-content/>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThSpotLight, decorators: [{
            type: Component,
            args: [{
                    selector: 'th-spotLight',
                    template: '<ng-content/>',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    providers: [
                        { provide: ThObject3D, useExisting: forwardRef(() => ThSpotLight) },
                    ],
                }]
        }], propDecorators: { position: [{
                type: Input
            }], target: [{
                type: Input
            }], castShadow: [{
                type: Input
            }], intensity: [{
                type: Input
            }], distance: [{
                type: Input
            }], angle: [{
                type: Input
            }], decay: [{
                type: Input
            }], shadow: [{
                type: Input
            }], power: [{
                type: Input
            }], penumbra: [{
                type: Input
            }], map: [{
                type: Input
            }] } });

/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix */
class ThSpotLightHelper extends ThObject3D {
    getType() {
        return SpotLightHelper;
    }
    get type() {
        return this._objRef?.type;
    }
    set cone(value) {
        if (this._objRef) {
            this._objRef.cone = value;
        }
    }
    get cone() {
        return this._objRef?.cone;
    }
    set light(value) {
        if (this._objRef) {
            this._objRef.light = value;
        }
    }
    get light() {
        return this._objRef?.light;
    }
    set matrix(value) {
        if (this._objRef) {
            this._objRef.matrix = applyValue(this._objRef.matrix, value);
        }
    }
    get matrix() {
        return this._objRef?.matrix;
    }
    set color(value) {
        if (this._objRef) {
            this._objRef.color = value;
        }
    }
    get color() {
        return this._objRef?.color;
    }
    set matrixAutoUpdate(value) {
        if (this._objRef) {
            this._objRef.matrixAutoUpdate = value;
        }
    }
    get matrixAutoUpdate() {
        return this._objRef?.matrixAutoUpdate;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThSpotLightHelper, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.1.2", type: ThSpotLightHelper, selector: "th-spotLightHelper", inputs: { cone: "cone", light: "light", matrix: "matrix", color: "color", matrixAutoUpdate: "matrixAutoUpdate" }, providers: [
            { provide: ThObject3D, useExisting: forwardRef(() => ThSpotLightHelper) },
        ], usesInheritance: true, ngImport: i0, template: '<ng-content/>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThSpotLightHelper, decorators: [{
            type: Component,
            args: [{
                    selector: 'th-spotLightHelper',
                    template: '<ng-content/>',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    providers: [
                        { provide: ThObject3D, useExisting: forwardRef(() => ThSpotLightHelper) },
                    ],
                }]
        }], propDecorators: { cone: [{
                type: Input
            }], light: [{
                type: Input
            }], matrix: [{
                type: Input
            }], color: [{
                type: Input
            }], matrixAutoUpdate: [{
                type: Input
            }] } });

/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix */
class ThSprite extends ThObject3D {
    getType() {
        return Sprite;
    }
    get isSprite() {
        return this._objRef?.isSprite;
    }
    get type() {
        return this._objRef?.type;
    }
    set castShadow(value) {
        if (this._objRef) {
            this._objRef.castShadow = value;
        }
    }
    get castShadow() {
        return this._objRef?.castShadow;
    }
    set geometry(value) {
        if (this._objRef) {
            this._objRef.geometry = value;
        }
    }
    get geometry() {
        return this._objRef?.geometry;
    }
    set material(value) {
        if (this._objRef) {
            this._objRef.material = value;
        }
    }
    get material() {
        return this._objRef?.material;
    }
    set center(value) {
        if (this._objRef) {
            this._objRef.center = applyValue(this._objRef.center, value);
        }
    }
    get center() {
        return this._objRef?.center;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThSprite, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.1.2", type: ThSprite, selector: "th-sprite", inputs: { castShadow: "castShadow", geometry: "geometry", material: "material", center: "center" }, providers: [{ provide: ThObject3D, useExisting: forwardRef(() => ThSprite) }], usesInheritance: true, ngImport: i0, template: '<ng-content/>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThSprite, decorators: [{
            type: Component,
            args: [{
                    selector: 'th-sprite',
                    template: '<ng-content/>',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    providers: [{ provide: ThObject3D, useExisting: forwardRef(() => ThSprite) }],
                }]
        }], propDecorators: { castShadow: [{
                type: Input
            }], geometry: [{
                type: Input
            }], material: [{
                type: Input
            }], center: [{
                type: Input
            }] } });

/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix */
class ThSpriteMaterial extends ThMaterial {
    getType() {
        return SpriteMaterial;
    }
    get isSpriteMaterial() {
        return this._objRef?.isSpriteMaterial;
    }
    set type(value) {
        if (this._objRef) {
            this._objRef.type = value;
        }
    }
    get type() {
        return this._objRef?.type;
    }
    set color(value) {
        if (this._objRef) {
            this._objRef.color = applyValue(this._objRef.color, value);
        }
    }
    get color() {
        return this._objRef?.color;
    }
    set map(value) {
        if (this._objRef) {
            this._objRef.map = value;
        }
    }
    get map() {
        return this._objRef?.map;
    }
    set alphaMap(value) {
        if (this._objRef) {
            this._objRef.alphaMap = value;
        }
    }
    get alphaMap() {
        return this._objRef?.alphaMap;
    }
    set rotation(value) {
        if (this._objRef) {
            this._objRef.rotation = value;
        }
    }
    get rotation() {
        return this._objRef?.rotation;
    }
    set sizeAttenuation(value) {
        if (this._objRef) {
            this._objRef.sizeAttenuation = value;
        }
    }
    get sizeAttenuation() {
        return this._objRef?.sizeAttenuation;
    }
    set transparent(value) {
        if (this._objRef) {
            this._objRef.transparent = value;
        }
    }
    get transparent() {
        return this._objRef?.transparent;
    }
    set fog(value) {
        if (this._objRef) {
            this._objRef.fog = value;
        }
    }
    get fog() {
        return this._objRef?.fog;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThSpriteMaterial, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.1.2", type: ThSpriteMaterial, selector: "th-spriteMaterial", inputs: { type: "type", color: "color", map: "map", alphaMap: "alphaMap", rotation: "rotation", sizeAttenuation: "sizeAttenuation", transparent: "transparent", fog: "fog" }, providers: [
            { provide: ThMaterial, useExisting: forwardRef(() => ThSpriteMaterial) },
        ], usesInheritance: true, ngImport: i0, template: '<ng-content/>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThSpriteMaterial, decorators: [{
            type: Component,
            args: [{
                    selector: 'th-spriteMaterial',
                    template: '<ng-content/>',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    providers: [
                        { provide: ThMaterial, useExisting: forwardRef(() => ThSpriteMaterial) },
                    ],
                }]
        }], propDecorators: { type: [{
                type: Input
            }], color: [{
                type: Input
            }], map: [{
                type: Input
            }], alphaMap: [{
                type: Input
            }], rotation: [{
                type: Input
            }], sizeAttenuation: [{
                type: Input
            }], transparent: [{
                type: Input
            }], fog: [{
                type: Input
            }] } });

/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix */
class ThStereoCamera extends ThCamera {
    getType() {
        return StereoCamera;
    }
    set type(value) {
        if (this._objRef) {
            this._objRef.type = value;
        }
    }
    get type() {
        return this._objRef?.type;
    }
    set aspect(value) {
        if (this._objRef) {
            this._objRef.aspect = value;
        }
    }
    get aspect() {
        return this._objRef?.aspect;
    }
    set eyeSep(value) {
        if (this._objRef) {
            this._objRef.eyeSep = value;
        }
    }
    get eyeSep() {
        return this._objRef?.eyeSep;
    }
    set cameraL(value) {
        if (this._objRef) {
            this._objRef.cameraL = value;
        }
    }
    get cameraL() {
        return this._objRef?.cameraL;
    }
    set cameraR(value) {
        if (this._objRef) {
            this._objRef.cameraR = value;
        }
    }
    get cameraR() {
        return this._objRef?.cameraR;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThStereoCamera, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.1.2", type: ThStereoCamera, selector: "th-stereoCamera", inputs: { type: "type", aspect: "aspect", eyeSep: "eyeSep", cameraL: "cameraL", cameraR: "cameraR" }, providers: [
            { provide: ThObject3D, useExisting: forwardRef(() => ThStereoCamera) },
            { provide: ThCamera, useExisting: forwardRef(() => ThStereoCamera) },
        ], usesInheritance: true, ngImport: i0, template: '<ng-content/>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThStereoCamera, decorators: [{
            type: Component,
            args: [{
                    selector: 'th-stereoCamera',
                    template: '<ng-content/>',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    providers: [
                        { provide: ThObject3D, useExisting: forwardRef(() => ThStereoCamera) },
                        { provide: ThCamera, useExisting: forwardRef(() => ThStereoCamera) },
                    ],
                }]
        }], propDecorators: { type: [{
                type: Input
            }], aspect: [{
                type: Input
            }], eyeSep: [{
                type: Input
            }], cameraL: [{
                type: Input
            }], cameraR: [{
                type: Input
            }] } });

/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix */
class ThTAARenderPass extends ThSSAARenderPass {
    getType() {
        return TAARenderPass;
    }
    set accumulate(value) {
        if (this._objRef) {
            this._objRef.accumulate = value;
        }
    }
    get accumulate() {
        return this._objRef?.accumulate;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThTAARenderPass, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.1.2", type: ThTAARenderPass, selector: "th-tAARenderPass", inputs: { accumulate: "accumulate" }, providers: [
            { provide: ThPassBase, useExisting: forwardRef(() => ThTAARenderPass) },
        ], usesInheritance: true, ngImport: i0, template: '<ng-content/>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThTAARenderPass, decorators: [{
            type: Component,
            args: [{
                    selector: 'th-tAARenderPass',
                    template: '<ng-content/>',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    providers: [
                        { provide: ThPassBase, useExisting: forwardRef(() => ThTAARenderPass) },
                    ],
                }]
        }], propDecorators: { accumulate: [{
                type: Input
            }] } });

/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix */
class ThTeapotGeometry extends ThBufferGeometry {
    getType() {
        return TeapotGeometry;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThTeapotGeometry, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.1.2", type: ThTeapotGeometry, selector: "th-teapotGeometry", providers: [
            {
                provide: ThBufferGeometry,
                useExisting: forwardRef(() => ThTeapotGeometry),
            },
        ], usesInheritance: true, ngImport: i0, template: '<ng-content/>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThTeapotGeometry, decorators: [{
            type: Component,
            args: [{
                    selector: 'th-teapotGeometry',
                    template: '<ng-content/>',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    providers: [
                        {
                            provide: ThBufferGeometry,
                            useExisting: forwardRef(() => ThTeapotGeometry),
                        },
                    ],
                }]
        }] });

/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix */
class ThTetrahedronGeometry extends ThPolyhedronGeometry {
    getType() {
        return TetrahedronGeometry;
    }
    get type() {
        return this._objRef?.type;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThTetrahedronGeometry, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.1.2", type: ThTetrahedronGeometry, selector: "th-tetrahedronGeometry", providers: [
            {
                provide: ThBufferGeometry,
                useExisting: forwardRef(() => ThTetrahedronGeometry),
            },
        ], usesInheritance: true, ngImport: i0, template: '<ng-content/>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThTetrahedronGeometry, decorators: [{
            type: Component,
            args: [{
                    selector: 'th-tetrahedronGeometry',
                    template: '<ng-content/>',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    providers: [
                        {
                            provide: ThBufferGeometry,
                            useExisting: forwardRef(() => ThTetrahedronGeometry),
                        },
                    ],
                }]
        }] });

/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix */
class ThTextGeometry extends ThExtrudeGeometry {
    getType() {
        return TextGeometry;
    }
    get type() {
        return this._objRef?.type;
    }
    get parameters() {
        return this._objRef?.parameters;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThTextGeometry, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.1.2", type: ThTextGeometry, selector: "th-textGeometry", providers: [
            {
                provide: ThBufferGeometry,
                useExisting: forwardRef(() => ThTextGeometry),
            },
        ], usesInheritance: true, ngImport: i0, template: '<ng-content/>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThTextGeometry, decorators: [{
            type: Component,
            args: [{
                    selector: 'th-textGeometry',
                    template: '<ng-content/>',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    providers: [
                        {
                            provide: ThBufferGeometry,
                            useExisting: forwardRef(() => ThTextGeometry),
                        },
                    ],
                }]
        }] });

/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix */
class ThTexturePass extends ThPass {
    getType() {
        return TexturePass;
    }
    set map(value) {
        if (this._objRef) {
            this._objRef.map = value;
        }
    }
    get map() {
        return this._objRef?.map;
    }
    set opacity(value) {
        if (this._objRef) {
            this._objRef.opacity = value;
        }
    }
    get opacity() {
        return this._objRef?.opacity;
    }
    set uniforms(map) {
        if (this._objRef) {
            Object.assign(this._objRef.uniforms, map);
        }
    }
    get uniforms() {
        return this._objRef?.uniforms;
    }
    set material(value) {
        if (this._objRef) {
            this._objRef.material = value;
        }
    }
    get material() {
        return this._objRef?.material;
    }
    set fsQuad(value) {
        if (this._objRef) {
            this._objRef.fsQuad = value;
        }
    }
    get fsQuad() {
        return this._objRef?.fsQuad;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThTexturePass, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.1.2", type: ThTexturePass, selector: "th-texturePass", inputs: { map: "map", opacity: "opacity", uniforms: "uniforms", material: "material", fsQuad: "fsQuad" }, providers: [
            { provide: ThPassBase, useExisting: forwardRef(() => ThTexturePass) },
        ], usesInheritance: true, ngImport: i0, template: '<ng-content/>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThTexturePass, decorators: [{
            type: Component,
            args: [{
                    selector: 'th-texturePass',
                    template: '<ng-content/>',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    providers: [
                        { provide: ThPassBase, useExisting: forwardRef(() => ThTexturePass) },
                    ],
                }]
        }], propDecorators: { map: [{
                type: Input
            }], opacity: [{
                type: Input
            }], uniforms: [{
                type: Input
            }], material: [{
                type: Input
            }], fsQuad: [{
                type: Input
            }] } });

/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix */
class ThTorusGeometry extends ThBufferGeometry {
    getType() {
        return TorusGeometry;
    }
    get type() {
        return this._objRef?.type;
    }
    get parameters() {
        return this._objRef?.parameters;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThTorusGeometry, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.1.2", type: ThTorusGeometry, selector: "th-torusGeometry", providers: [
            {
                provide: ThBufferGeometry,
                useExisting: forwardRef(() => ThTorusGeometry),
            },
        ], usesInheritance: true, ngImport: i0, template: '<ng-content/>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThTorusGeometry, decorators: [{
            type: Component,
            args: [{
                    selector: 'th-torusGeometry',
                    template: '<ng-content/>',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    providers: [
                        {
                            provide: ThBufferGeometry,
                            useExisting: forwardRef(() => ThTorusGeometry),
                        },
                    ],
                }]
        }] });

/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix */
class ThTorusKnotGeometry extends ThBufferGeometry {
    getType() {
        return TorusKnotGeometry;
    }
    get type() {
        return this._objRef?.type;
    }
    get parameters() {
        return this._objRef?.parameters;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThTorusKnotGeometry, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.1.2", type: ThTorusKnotGeometry, selector: "th-torusKnotGeometry", providers: [
            {
                provide: ThBufferGeometry,
                useExisting: forwardRef(() => ThTorusKnotGeometry),
            },
        ], usesInheritance: true, ngImport: i0, template: '<ng-content/>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThTorusKnotGeometry, decorators: [{
            type: Component,
            args: [{
                    selector: 'th-torusKnotGeometry',
                    template: '<ng-content/>',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    providers: [
                        {
                            provide: ThBufferGeometry,
                            useExisting: forwardRef(() => ThTorusKnotGeometry),
                        },
                    ],
                }]
        }] });

/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix */
class ThTrackballControls extends ThControlBase {
    getType() {
        return TrackballControls;
    }
    set object(value) {
        if (this._objRef) {
            this._objRef.object = value;
        }
    }
    get object() {
        return this._objRef?.object;
    }
    set domElement(value) {
        if (this._objRef) {
            this._objRef.domElement = value;
        }
    }
    get domElement() {
        return this._objRef?.domElement;
    }
    set enabled(value) {
        if (this._objRef) {
            this._objRef.enabled = value;
        }
    }
    get enabled() {
        return this._objRef?.enabled;
    }
    set screen(value) {
        if (this._objRef) {
            this._objRef.screen = value;
        }
    }
    get screen() {
        return this._objRef?.screen;
    }
    set rotateSpeed(value) {
        if (this._objRef) {
            this._objRef.rotateSpeed = value;
        }
    }
    get rotateSpeed() {
        return this._objRef?.rotateSpeed;
    }
    set zoomSpeed(value) {
        if (this._objRef) {
            this._objRef.zoomSpeed = value;
        }
    }
    get zoomSpeed() {
        return this._objRef?.zoomSpeed;
    }
    set panSpeed(value) {
        if (this._objRef) {
            this._objRef.panSpeed = value;
        }
    }
    get panSpeed() {
        return this._objRef?.panSpeed;
    }
    set noRotate(value) {
        if (this._objRef) {
            this._objRef.noRotate = value;
        }
    }
    get noRotate() {
        return this._objRef?.noRotate;
    }
    set noZoom(value) {
        if (this._objRef) {
            this._objRef.noZoom = value;
        }
    }
    get noZoom() {
        return this._objRef?.noZoom;
    }
    set noPan(value) {
        if (this._objRef) {
            this._objRef.noPan = value;
        }
    }
    get noPan() {
        return this._objRef?.noPan;
    }
    set noRoll(value) {
        if (this._objRef) {
            this._objRef.noRoll = value;
        }
    }
    get noRoll() {
        return this._objRef?.noRoll;
    }
    set staticMoving(value) {
        if (this._objRef) {
            this._objRef.staticMoving = value;
        }
    }
    get staticMoving() {
        return this._objRef?.staticMoving;
    }
    set dynamicDampingFactor(value) {
        if (this._objRef) {
            this._objRef.dynamicDampingFactor = value;
        }
    }
    get dynamicDampingFactor() {
        return this._objRef?.dynamicDampingFactor;
    }
    set minDistance(value) {
        if (this._objRef) {
            this._objRef.minDistance = value;
        }
    }
    get minDistance() {
        return this._objRef?.minDistance;
    }
    set maxDistance(value) {
        if (this._objRef) {
            this._objRef.maxDistance = value;
        }
    }
    get maxDistance() {
        return this._objRef?.maxDistance;
    }
    set minZoom(value) {
        if (this._objRef) {
            this._objRef.minZoom = value;
        }
    }
    get minZoom() {
        return this._objRef?.minZoom;
    }
    set maxZoom(value) {
        if (this._objRef) {
            this._objRef.maxZoom = value;
        }
    }
    get maxZoom() {
        return this._objRef?.maxZoom;
    }
    set keys(value) {
        if (this._objRef) {
            this._objRef.keys = value;
        }
    }
    get keys() {
        return this._objRef?.keys;
    }
    set mouseButtons(value) {
        if (this._objRef) {
            this._objRef.mouseButtons = value;
        }
    }
    get mouseButtons() {
        return this._objRef?.mouseButtons;
    }
    set target(value) {
        if (this._objRef) {
            this._objRef.target = applyValue(this._objRef.target, value);
        }
    }
    get target() {
        return this._objRef?.target;
    }
    set position0(value) {
        if (this._objRef) {
            this._objRef.position0 = applyValue(this._objRef.position0, value);
        }
    }
    get position0() {
        return this._objRef?.position0;
    }
    set target0(value) {
        if (this._objRef) {
            this._objRef.target0 = applyValue(this._objRef.target0, value);
        }
    }
    get target0() {
        return this._objRef?.target0;
    }
    set up0(value) {
        if (this._objRef) {
            this._objRef.up0 = applyValue(this._objRef.up0, value);
        }
    }
    get up0() {
        return this._objRef?.up0;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThTrackballControls, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.1.2", type: ThTrackballControls, selector: "th-trackballControls", inputs: { object: "object", domElement: "domElement", enabled: "enabled", screen: "screen", rotateSpeed: "rotateSpeed", zoomSpeed: "zoomSpeed", panSpeed: "panSpeed", noRotate: "noRotate", noZoom: "noZoom", noPan: "noPan", noRoll: "noRoll", staticMoving: "staticMoving", dynamicDampingFactor: "dynamicDampingFactor", minDistance: "minDistance", maxDistance: "maxDistance", minZoom: "minZoom", maxZoom: "maxZoom", keys: "keys", mouseButtons: "mouseButtons", target: "target", position0: "position0", target0: "target0", up0: "up0" }, providers: [
            {
                provide: ThControlBase,
                useExisting: forwardRef(() => ThTrackballControls),
            },
        ], usesInheritance: true, ngImport: i0, template: '<ng-content/>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThTrackballControls, decorators: [{
            type: Component,
            args: [{
                    selector: 'th-trackballControls',
                    template: '<ng-content/>',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    providers: [
                        {
                            provide: ThControlBase,
                            useExisting: forwardRef(() => ThTrackballControls),
                        },
                    ],
                }]
        }], propDecorators: { object: [{
                type: Input
            }], domElement: [{
                type: Input
            }], enabled: [{
                type: Input
            }], screen: [{
                type: Input
            }], rotateSpeed: [{
                type: Input
            }], zoomSpeed: [{
                type: Input
            }], panSpeed: [{
                type: Input
            }], noRotate: [{
                type: Input
            }], noZoom: [{
                type: Input
            }], noPan: [{
                type: Input
            }], noRoll: [{
                type: Input
            }], staticMoving: [{
                type: Input
            }], dynamicDampingFactor: [{
                type: Input
            }], minDistance: [{
                type: Input
            }], maxDistance: [{
                type: Input
            }], minZoom: [{
                type: Input
            }], maxZoom: [{
                type: Input
            }], keys: [{
                type: Input
            }], mouseButtons: [{
                type: Input
            }], target: [{
                type: Input
            }], position0: [{
                type: Input
            }], target0: [{
                type: Input
            }], up0: [{
                type: Input
            }] } });

/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix */
class ThTransformControlsGen extends ThControlBase {
    getType() {
        return TransformControls;
    }
    set domElement(value) {
        if (this._objRef) {
            this._objRef.domElement = value;
        }
    }
    get domElement() {
        return this._objRef?.domElement;
    }
    set camera(value) {
        if (this._objRef) {
            this._objRef.camera = value;
        }
    }
    get camera() {
        return this._objRef?.camera;
    }
    set object(value) {
        if (this._objRef) {
            this._objRef.object = value;
        }
    }
    get object() {
        return this._objRef?.object;
    }
    set enabled(value) {
        if (this._objRef) {
            this._objRef.enabled = value;
        }
    }
    get enabled() {
        return this._objRef?.enabled;
    }
    set axis(value) {
        if (this._objRef) {
            this._objRef.axis = value;
        }
    }
    get axis() {
        return this._objRef?.axis;
    }
    set mode(value) {
        if (this._objRef) {
            this._objRef.mode = value;
        }
    }
    get mode() {
        return this._objRef?.mode;
    }
    set translationSnap(value) {
        if (this._objRef) {
            this._objRef.translationSnap = value;
        }
    }
    get translationSnap() {
        return this._objRef?.translationSnap;
    }
    set rotationSnap(value) {
        if (this._objRef) {
            this._objRef.rotationSnap = value;
        }
    }
    get rotationSnap() {
        return this._objRef?.rotationSnap;
    }
    set space(value) {
        if (this._objRef) {
            this._objRef.space = value;
        }
    }
    get space() {
        return this._objRef?.space;
    }
    set size(value) {
        if (this._objRef) {
            this._objRef.size = value;
        }
    }
    get size() {
        return this._objRef?.size;
    }
    set dragging(value) {
        if (this._objRef) {
            this._objRef.dragging = value;
        }
    }
    get dragging() {
        return this._objRef?.dragging;
    }
    set showX(value) {
        if (this._objRef) {
            this._objRef.showX = value;
        }
    }
    get showX() {
        return this._objRef?.showX;
    }
    set showY(value) {
        if (this._objRef) {
            this._objRef.showY = value;
        }
    }
    get showY() {
        return this._objRef?.showY;
    }
    set showZ(value) {
        if (this._objRef) {
            this._objRef.showZ = value;
        }
    }
    get showZ() {
        return this._objRef?.showZ;
    }
    get isTransformControls() {
        return this._objRef?.isTransformControls;
    }
    set mouseButtons(value) {
        if (this._objRef) {
            this._objRef.mouseButtons = value;
        }
    }
    get mouseButtons() {
        return this._objRef?.mouseButtons;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThTransformControlsGen, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.1.2", type: ThTransformControlsGen, selector: "th-transformControlsGen", inputs: { domElement: "domElement", camera: "camera", object: "object", enabled: "enabled", axis: "axis", mode: "mode", translationSnap: "translationSnap", rotationSnap: "rotationSnap", space: "space", size: "size", dragging: "dragging", showX: "showX", showY: "showY", showZ: "showZ", mouseButtons: "mouseButtons" }, providers: [
            {
                provide: ThControlBase,
                useExisting: forwardRef(() => ThTransformControlsGen),
            },
        ], usesInheritance: true, ngImport: i0, template: '<ng-content/>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThTransformControlsGen, decorators: [{
            type: Component,
            args: [{
                    selector: 'th-transformControlsGen',
                    template: '<ng-content/>',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    providers: [
                        {
                            provide: ThControlBase,
                            useExisting: forwardRef(() => ThTransformControlsGen),
                        },
                    ],
                }]
        }], propDecorators: { domElement: [{
                type: Input
            }], camera: [{
                type: Input
            }], object: [{
                type: Input
            }], enabled: [{
                type: Input
            }], axis: [{
                type: Input
            }], mode: [{
                type: Input
            }], translationSnap: [{
                type: Input
            }], rotationSnap: [{
                type: Input
            }], space: [{
                type: Input
            }], size: [{
                type: Input
            }], dragging: [{
                type: Input
            }], showX: [{
                type: Input
            }], showY: [{
                type: Input
            }], showZ: [{
                type: Input
            }], mouseButtons: [{
                type: Input
            }] } });

/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix */
class ThTubeGeometry extends ThBufferGeometry {
    getType() {
        return TubeGeometry;
    }
    get type() {
        return this._objRef?.type;
    }
    get parameters() {
        return this._objRef?.parameters;
    }
    set tangents(value) {
        if (this._objRef) {
            this._objRef.tangents = value;
        }
    }
    get tangents() {
        return this._objRef?.tangents;
    }
    set normals(value) {
        if (this._objRef) {
            this._objRef.normals = value;
        }
    }
    get normals() {
        return this._objRef?.normals;
    }
    set binormals(value) {
        if (this._objRef) {
            this._objRef.binormals = value;
        }
    }
    get binormals() {
        return this._objRef?.binormals;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThTubeGeometry, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.1.2", type: ThTubeGeometry, selector: "th-tubeGeometry", inputs: { tangents: "tangents", normals: "normals", binormals: "binormals" }, providers: [
            {
                provide: ThBufferGeometry,
                useExisting: forwardRef(() => ThTubeGeometry),
            },
        ], usesInheritance: true, ngImport: i0, template: '<ng-content/>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThTubeGeometry, decorators: [{
            type: Component,
            args: [{
                    selector: 'th-tubeGeometry',
                    template: '<ng-content/>',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    providers: [
                        {
                            provide: ThBufferGeometry,
                            useExisting: forwardRef(() => ThTubeGeometry),
                        },
                    ],
                }]
        }], propDecorators: { tangents: [{
                type: Input
            }], normals: [{
                type: Input
            }], binormals: [{
                type: Input
            }] } });

/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix */
class ThUnrealBloomPass extends ThPass {
    getType() {
        return UnrealBloomPass;
    }
    set resolution(value) {
        if (this._objRef) {
            this._objRef.resolution = applyValue(this._objRef.resolution, value);
        }
    }
    get resolution() {
        return this._objRef?.resolution;
    }
    set strength(value) {
        if (this._objRef) {
            this._objRef.strength = value;
        }
    }
    get strength() {
        return this._objRef?.strength;
    }
    set radius(value) {
        if (this._objRef) {
            this._objRef.radius = value;
        }
    }
    get radius() {
        return this._objRef?.radius;
    }
    set threshold(value) {
        if (this._objRef) {
            this._objRef.threshold = value;
        }
    }
    get threshold() {
        return this._objRef?.threshold;
    }
    set clearColor(value) {
        if (this._objRef) {
            this._objRef.clearColor = applyValue(this._objRef.clearColor, value);
        }
    }
    get clearColor() {
        return this._objRef?.clearColor;
    }
    set renderTargetsHorizontal(value) {
        if (this._objRef) {
            this._objRef.renderTargetsHorizontal = value;
        }
    }
    get renderTargetsHorizontal() {
        return this._objRef?.renderTargetsHorizontal;
    }
    set renderTargetsVertical(value) {
        if (this._objRef) {
            this._objRef.renderTargetsVertical = value;
        }
    }
    get renderTargetsVertical() {
        return this._objRef?.renderTargetsVertical;
    }
    set nMips(value) {
        if (this._objRef) {
            this._objRef.nMips = value;
        }
    }
    get nMips() {
        return this._objRef?.nMips;
    }
    set renderTargetBright(value) {
        if (this._objRef) {
            this._objRef.renderTargetBright = value;
        }
    }
    get renderTargetBright() {
        return this._objRef?.renderTargetBright;
    }
    set highPassUniforms(value) {
        if (this._objRef) {
            this._objRef.highPassUniforms = value;
        }
    }
    get highPassUniforms() {
        return this._objRef?.highPassUniforms;
    }
    set materialHighPassFilter(value) {
        if (this._objRef) {
            this._objRef.materialHighPassFilter = value;
        }
    }
    get materialHighPassFilter() {
        return this._objRef?.materialHighPassFilter;
    }
    set separableBlurMaterials(value) {
        if (this._objRef) {
            this._objRef.separableBlurMaterials = value;
        }
    }
    get separableBlurMaterials() {
        return this._objRef?.separableBlurMaterials;
    }
    set compositeMaterial(value) {
        if (this._objRef) {
            this._objRef.compositeMaterial = value;
        }
    }
    get compositeMaterial() {
        return this._objRef?.compositeMaterial;
    }
    set bloomTintColors(value) {
        if (this._objRef) {
            this._objRef.bloomTintColors = value;
        }
    }
    get bloomTintColors() {
        return this._objRef?.bloomTintColors;
    }
    set copyUniforms(value) {
        if (this._objRef) {
            this._objRef.copyUniforms = value;
        }
    }
    get copyUniforms() {
        return this._objRef?.copyUniforms;
    }
    set blendMaterial(value) {
        if (this._objRef) {
            this._objRef.blendMaterial = value;
        }
    }
    get blendMaterial() {
        return this._objRef?.blendMaterial;
    }
    set oldClearColor(value) {
        if (this._objRef) {
            this._objRef.oldClearColor = applyValue(this._objRef.oldClearColor, value);
        }
    }
    get oldClearColor() {
        return this._objRef?.oldClearColor;
    }
    set oldClearAlpha(value) {
        if (this._objRef) {
            this._objRef.oldClearAlpha = value;
        }
    }
    get oldClearAlpha() {
        return this._objRef?.oldClearAlpha;
    }
    set basic(value) {
        if (this._objRef) {
            this._objRef.basic = value;
        }
    }
    get basic() {
        return this._objRef?.basic;
    }
    set fsQuad(value) {
        if (this._objRef) {
            this._objRef.fsQuad = value;
        }
    }
    get fsQuad() {
        return this._objRef?.fsQuad;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThUnrealBloomPass, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.1.2", type: ThUnrealBloomPass, selector: "th-unrealBloomPass", inputs: { resolution: "resolution", strength: "strength", radius: "radius", threshold: "threshold", clearColor: "clearColor", renderTargetsHorizontal: "renderTargetsHorizontal", renderTargetsVertical: "renderTargetsVertical", nMips: "nMips", renderTargetBright: "renderTargetBright", highPassUniforms: "highPassUniforms", materialHighPassFilter: "materialHighPassFilter", separableBlurMaterials: "separableBlurMaterials", compositeMaterial: "compositeMaterial", bloomTintColors: "bloomTintColors", copyUniforms: "copyUniforms", blendMaterial: "blendMaterial", oldClearColor: "oldClearColor", oldClearAlpha: "oldClearAlpha", basic: "basic", fsQuad: "fsQuad" }, providers: [
            { provide: ThPassBase, useExisting: forwardRef(() => ThUnrealBloomPass) },
        ], usesInheritance: true, ngImport: i0, template: '<ng-content/>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThUnrealBloomPass, decorators: [{
            type: Component,
            args: [{
                    selector: 'th-unrealBloomPass',
                    template: '<ng-content/>',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    providers: [
                        { provide: ThPassBase, useExisting: forwardRef(() => ThUnrealBloomPass) },
                    ],
                }]
        }], propDecorators: { resolution: [{
                type: Input
            }], strength: [{
                type: Input
            }], radius: [{
                type: Input
            }], threshold: [{
                type: Input
            }], clearColor: [{
                type: Input
            }], renderTargetsHorizontal: [{
                type: Input
            }], renderTargetsVertical: [{
                type: Input
            }], nMips: [{
                type: Input
            }], renderTargetBright: [{
                type: Input
            }], highPassUniforms: [{
                type: Input
            }], materialHighPassFilter: [{
                type: Input
            }], separableBlurMaterials: [{
                type: Input
            }], compositeMaterial: [{
                type: Input
            }], bloomTintColors: [{
                type: Input
            }], copyUniforms: [{
                type: Input
            }], blendMaterial: [{
                type: Input
            }], oldClearColor: [{
                type: Input
            }], oldClearAlpha: [{
                type: Input
            }], basic: [{
                type: Input
            }], fsQuad: [{
                type: Input
            }] } });

/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix */
class ThVideoTexture extends ThTexture {
    getType() {
        return VideoTexture;
    }
    get isVideoTexture() {
        return this._objRef?.isVideoTexture;
    }
    set magFilter(value) {
        if (this._objRef) {
            this._objRef.magFilter = value;
        }
    }
    get magFilter() {
        return this._objRef?.magFilter;
    }
    set minFilter(value) {
        if (this._objRef) {
            this._objRef.minFilter = value;
        }
    }
    get minFilter() {
        return this._objRef?.minFilter;
    }
    set generateMipmaps(value) {
        if (this._objRef) {
            this._objRef.generateMipmaps = value;
        }
    }
    get generateMipmaps() {
        return this._objRef?.generateMipmaps;
    }
    set needsUpdate(value) {
        if (this._objRef) {
            this._objRef.needsUpdate = value;
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThVideoTexture, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.1.2", type: ThVideoTexture, selector: "th-videoTexture", inputs: { magFilter: "magFilter", minFilter: "minFilter", generateMipmaps: "generateMipmaps", needsUpdate: "needsUpdate" }, providers: [
            { provide: ThTextureBase, useExisting: forwardRef(() => ThVideoTexture) },
        ], usesInheritance: true, ngImport: i0, template: '<ng-content/>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThVideoTexture, decorators: [{
            type: Component,
            args: [{
                    selector: 'th-videoTexture',
                    template: '<ng-content/>',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    providers: [
                        { provide: ThTextureBase, useExisting: forwardRef(() => ThVideoTexture) },
                    ],
                }]
        }], propDecorators: { magFilter: [{
                type: Input
            }], minFilter: [{
                type: Input
            }], generateMipmaps: [{
                type: Input
            }], needsUpdate: [{
                type: Input
            }] } });

/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix */
class ThWireframeGeometry extends ThBufferGeometry {
    getType() {
        return WireframeGeometry;
    }
    get type() {
        return this._objRef?.type;
    }
    get parameters() {
        return this._objRef?.parameters;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThWireframeGeometry, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.1.2", type: ThWireframeGeometry, selector: "th-wireframeGeometry", providers: [
            {
                provide: ThBufferGeometry,
                useExisting: forwardRef(() => ThWireframeGeometry),
            },
        ], usesInheritance: true, ngImport: i0, template: '<ng-content/>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThWireframeGeometry, decorators: [{
            type: Component,
            args: [{
                    selector: 'th-wireframeGeometry',
                    template: '<ng-content/>',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    providers: [
                        {
                            provide: ThBufferGeometry,
                            useExisting: forwardRef(() => ThWireframeGeometry),
                        },
                    ],
                }]
        }] });

/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix */
class ThCSS2DObject extends ThCSS2DObjectGen {
    constructor() {
        super(...arguments);
        this.elementRef = inject(ElementRef);
    }
    getType() {
        return CSS2DObject;
    }
    createThreeInstance(args) {
        return super.createThreeInstance(args ?? this.elementRef?.nativeElement);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThCSS2DObject, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.1.2", type: ThCSS2DObject, selector: "th-cSS2DObject", providers: [{ provide: ThObject3D, useExisting: forwardRef(() => ThCSS2DObject) }], usesInheritance: true, ngImport: i0, template: '<ng-content/>', isInline: true, styles: [":host{display:inline-block}\n"], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThCSS2DObject, decorators: [{
            type: Component,
            args: [{ selector: 'th-cSS2DObject', template: '<ng-content/>', changeDetection: ChangeDetectionStrategy.OnPush, providers: [{ provide: ThObject3D, useExisting: forwardRef(() => ThCSS2DObject) }], styles: [":host{display:inline-block}\n"] }]
        }] });

/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix */
class ThCSS3DObject extends ThCSS3DObjectGen {
    constructor() {
        super(...arguments);
        this.elementRef = inject(ElementRef);
    }
    getType() {
        return CSS3DObject;
    }
    createThreeInstance(args) {
        return super.createThreeInstance(args ?? this.elementRef?.nativeElement);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThCSS3DObject, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.1.2", type: ThCSS3DObject, selector: "th-cSS3DObject", providers: [{ provide: ThObject3D, useExisting: forwardRef(() => ThCSS3DObject) }], usesInheritance: true, ngImport: i0, template: '<ng-content/>', isInline: true, styles: [":host{display:inline-block}\n"], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThCSS3DObject, decorators: [{
            type: Component,
            args: [{ selector: 'th-cSS3DObject', template: '<ng-content/>', changeDetection: ChangeDetectionStrategy.OnPush, providers: [{ provide: ThObject3D, useExisting: forwardRef(() => ThCSS3DObject) }], styles: [":host{display:inline-block}\n"] }]
        }] });

/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix */
class ThRenderPass extends ThRenderPassGen {
    constructor(effectComposer, view) {
        super(effectComposer);
        this.effectComposer = effectComposer;
        this.view = view;
    }
    createThreeInstance(args) {
        if (!args) {
            args = new Array(5);
        }
        args[0] = args[0] ?? this.view.scene;
        args[1] = args[1] ?? this.view.camera;
        args[2] = args[2] ?? this.overrideMaterial;
        args[3] = args[3] ?? this.clearColor;
        args[4] = args[4] ?? this.clearAlpha;
        return super.createThreeInstance(args);
    }
    ngAfterContentChecked() {
        if (!this._objRef) {
            return;
        }
        if (this.view.scene && this.view.scene.objRef) {
            this._objRef.scene = this.view.scene.objRef;
        }
        if (this.view.camera && this.view.camera.objRef) {
            this._objRef.camera = this.view.camera.objRef;
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThRenderPass, deps: [{ token: ThEffectComposer }, { token: ThView }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.1.2", type: ThRenderPass, selector: "th-renderPass", providers: [{ provide: ThPassBase, useExisting: forwardRef(() => ThRenderPass) }], usesInheritance: true, ngImport: i0, template: '<ng-content/>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThRenderPass, decorators: [{
            type: Component,
            args: [{
                    selector: 'th-renderPass',
                    template: '<ng-content/>',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    providers: [{ provide: ThPassBase, useExisting: forwardRef(() => ThRenderPass) }],
                }]
        }], ctorParameters: () => [{ type: ThEffectComposer }, { type: ThView }] });

/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix,  */
class ThTransformControls extends ThTransformControlsGen {
    constructor(_camera, canvas, scene) {
        super(_camera, canvas);
        this.scene = scene;
        this.objectAdded = () => {
            if (this.objRef && this.targetObject != null && this.targetObject.parent) {
                this.objRef.attach(this.targetObject);
            }
        };
        this.objectRemoved = () => {
            this._objRef?.detach();
        };
    }
    getType() {
        return TransformControls;
    }
    set object(value) {
        if (this._objRef) {
            this.removeObjectListeners();
            this.targetObject = value;
            this.addObjectListeners();
            if (value) {
                this.objectAdded();
            }
            else {
                this.objectRemoved();
            }
        }
    }
    addToParent() {
        if (this._objRef && !this._objRef.parent) {
            this.scene?.objRef?.add(this._objRef);
        }
    }
    removeFromParent() {
        if (this._objRef) {
            this.scene?.objRef?.remove(this._objRef);
        }
    }
    ngOnDestroy() {
        this.removeObjectListeners();
        this.objectRemoved();
        this.targetObject = undefined;
    }
    removeObjectListeners() {
        if (this.targetObject) {
            this.targetObject.removeEventListener('added', this.objectAdded);
            this.targetObject.removeEventListener('removed', this.objectRemoved);
        }
    }
    addObjectListeners() {
        this.targetObject?.addEventListener('added', this.objectAdded);
        this.targetObject?.addEventListener('removed', this.objectRemoved);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThTransformControls, deps: [{ token: ThObject3D }, { token: ThCanvas }, { token: ThScene }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.1.2", type: ThTransformControls, selector: "th-transformControls", inputs: { object: "object" }, providers: [
            {
                provide: ThControlBase,
                useExisting: forwardRef(() => ThTransformControls),
            },
        ], usesInheritance: true, ngImport: i0, template: '<ng-content/>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThTransformControls, decorators: [{
            type: Component,
            args: [{
                    selector: 'th-transformControls',
                    template: '<ng-content/>',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    providers: [
                        {
                            provide: ThControlBase,
                            useExisting: forwardRef(() => ThTransformControls),
                        },
                    ],
                }]
        }], ctorParameters: () => [{ type: ThObject3D }, { type: ThCanvas }, { type: ThScene }], propDecorators: { object: [{
                type: Input
            }] } });

class NgxThreeGeneratedModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: NgxThreeGeneratedModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "18.1.2", ngImport: i0, type: NgxThreeGeneratedModule, declarations: [ThTransformControlsGen,
            ThTransformControls,
            ThArcballControls,
            ThDragControls,
            ThFirstPersonControls,
            ThFlyControls,
            ThOrbitControls,
            ThMapControls,
            ThPointerLockControls,
            ThTrackballControls,
            ThAudio,
            ThAudioListener,
            ThPositionalAudio,
            ThArrayCamera,
            ThCamera,
            ThCubeCamera,
            ThOrthographicCamera,
            ThPerspectiveCamera,
            ThStereoCamera,
            ThObject3D,
            ThArrowHelper,
            ThAxesHelper,
            ThBox3Helper,
            ThBoxHelper,
            ThCameraHelper,
            ThDirectionalLightHelper,
            ThGridHelper,
            ThHemisphereLightHelper,
            ThPlaneHelper,
            ThPointLightHelper,
            ThPolarGridHelper,
            ThSkeletonHelper,
            ThSpotLightHelper,
            ThAmbientLight,
            ThDirectionalLight,
            ThHemisphereLight,
            ThLightProbe,
            ThPointLight,
            ThRectAreaLight,
            ThSpotLight,
            ThBatchedMesh,
            ThBone,
            ThGroup,
            ThInstancedMesh,
            ThLine,
            ThLineLoop,
            ThLineSegments,
            ThLOD,
            ThMesh,
            ThPoints,
            ThSkinnedMesh,
            ThSprite,
            ThScene,
            ThCSS3DObjectGen,
            ThCSS3DObject,
            ThCSS2DObjectGen,
            ThCSS2DObject,
            ThLineBasicMaterial,
            ThLineDashedMaterial,
            ThMaterial,
            ThMeshBasicMaterial,
            ThMeshDepthMaterial,
            ThMeshDistanceMaterial,
            ThMeshLambertMaterial,
            ThMeshMatcapMaterial,
            ThMeshNormalMaterial,
            ThMeshPhongMaterial,
            ThMeshPhysicalMaterial,
            ThMeshStandardMaterial,
            ThMeshToonMaterial,
            ThPointsMaterial,
            ThRawShaderMaterial,
            ThShaderMaterial,
            ThShadowMaterial,
            ThSpriteMaterial,
            ThBufferGeometry,
            ThInstancedBufferGeometry,
            ThBoxGeometry,
            ThCapsuleGeometry,
            ThCircleGeometry,
            ThConeGeometry,
            ThCylinderGeometry,
            ThDodecahedronGeometry,
            ThEdgesGeometry,
            ThExtrudeGeometry,
            ThIcosahedronGeometry,
            ThLatheGeometry,
            ThOctahedronGeometry,
            ThPlaneGeometry,
            ThPolyhedronGeometry,
            ThRingGeometry,
            ThShapeGeometry,
            ThSphereGeometry,
            ThTetrahedronGeometry,
            ThTorusGeometry,
            ThTorusKnotGeometry,
            ThTubeGeometry,
            ThWireframeGeometry,
            ThBoxLineGeometry,
            ThConvexGeometry,
            ThDecalGeometry,
            ThParametricGeometry,
            ThRoundedBoxGeometry,
            ThTeapotGeometry,
            ThTextGeometry,
            ThPass,
            ThEffectComposerGen,
            ThEffectComposer,
            ThAfterimagePass,
            ThBloomPass,
            ThBokehPass,
            ThClearPass,
            ThCubeTexturePass,
            ThDotScreenPass,
            ThFilmPass,
            ThGlitchPass,
            ThHalftonePass,
            ThLUTPass,
            ThMaskPass,
            ThClearMaskPass,
            ThOutlinePass,
            ThOutputPass,
            ThRenderPassGen,
            ThRenderPass,
            ThSAOPass,
            ThSMAAPass,
            ThSSAARenderPass,
            ThSSAOPass,
            ThSSRPass,
            ThSavePass,
            ThShaderPass,
            ThTAARenderPass,
            ThTexturePass,
            ThUnrealBloomPass,
            ThCanvasTexture,
            ThCompressedArrayTexture,
            ThCompressedCubeTexture,
            ThCompressedTexture,
            ThCubeTexture,
            ThData3DTexture,
            ThDataArrayTexture,
            ThDataTexture,
            ThDepthTexture,
            ThFramebufferTexture,
            ThTexture,
            ThVideoTexture], exports: [ThTransformControlsGen,
            ThTransformControls,
            ThArcballControls,
            ThDragControls,
            ThFirstPersonControls,
            ThFlyControls,
            ThOrbitControls,
            ThMapControls,
            ThPointerLockControls,
            ThTrackballControls,
            ThAudio,
            ThAudioListener,
            ThPositionalAudio,
            ThArrayCamera,
            ThCamera,
            ThCubeCamera,
            ThOrthographicCamera,
            ThPerspectiveCamera,
            ThStereoCamera,
            ThObject3D,
            ThArrowHelper,
            ThAxesHelper,
            ThBox3Helper,
            ThBoxHelper,
            ThCameraHelper,
            ThDirectionalLightHelper,
            ThGridHelper,
            ThHemisphereLightHelper,
            ThPlaneHelper,
            ThPointLightHelper,
            ThPolarGridHelper,
            ThSkeletonHelper,
            ThSpotLightHelper,
            ThAmbientLight,
            ThDirectionalLight,
            ThHemisphereLight,
            ThLightProbe,
            ThPointLight,
            ThRectAreaLight,
            ThSpotLight,
            ThBatchedMesh,
            ThBone,
            ThGroup,
            ThInstancedMesh,
            ThLine,
            ThLineLoop,
            ThLineSegments,
            ThLOD,
            ThMesh,
            ThPoints,
            ThSkinnedMesh,
            ThSprite,
            ThScene,
            ThCSS3DObjectGen,
            ThCSS3DObject,
            ThCSS2DObjectGen,
            ThCSS2DObject,
            ThLineBasicMaterial,
            ThLineDashedMaterial,
            ThMaterial,
            ThMeshBasicMaterial,
            ThMeshDepthMaterial,
            ThMeshDistanceMaterial,
            ThMeshLambertMaterial,
            ThMeshMatcapMaterial,
            ThMeshNormalMaterial,
            ThMeshPhongMaterial,
            ThMeshPhysicalMaterial,
            ThMeshStandardMaterial,
            ThMeshToonMaterial,
            ThPointsMaterial,
            ThRawShaderMaterial,
            ThShaderMaterial,
            ThShadowMaterial,
            ThSpriteMaterial,
            ThBufferGeometry,
            ThInstancedBufferGeometry,
            ThBoxGeometry,
            ThCapsuleGeometry,
            ThCircleGeometry,
            ThConeGeometry,
            ThCylinderGeometry,
            ThDodecahedronGeometry,
            ThEdgesGeometry,
            ThExtrudeGeometry,
            ThIcosahedronGeometry,
            ThLatheGeometry,
            ThOctahedronGeometry,
            ThPlaneGeometry,
            ThPolyhedronGeometry,
            ThRingGeometry,
            ThShapeGeometry,
            ThSphereGeometry,
            ThTetrahedronGeometry,
            ThTorusGeometry,
            ThTorusKnotGeometry,
            ThTubeGeometry,
            ThWireframeGeometry,
            ThBoxLineGeometry,
            ThConvexGeometry,
            ThDecalGeometry,
            ThParametricGeometry,
            ThRoundedBoxGeometry,
            ThTeapotGeometry,
            ThTextGeometry,
            ThPass,
            ThEffectComposerGen,
            ThEffectComposer,
            ThAfterimagePass,
            ThBloomPass,
            ThBokehPass,
            ThClearPass,
            ThCubeTexturePass,
            ThDotScreenPass,
            ThFilmPass,
            ThGlitchPass,
            ThHalftonePass,
            ThLUTPass,
            ThMaskPass,
            ThClearMaskPass,
            ThOutlinePass,
            ThOutputPass,
            ThRenderPassGen,
            ThRenderPass,
            ThSAOPass,
            ThSMAAPass,
            ThSSAARenderPass,
            ThSSAOPass,
            ThSSRPass,
            ThSavePass,
            ThShaderPass,
            ThTAARenderPass,
            ThTexturePass,
            ThUnrealBloomPass,
            ThCanvasTexture,
            ThCompressedArrayTexture,
            ThCompressedCubeTexture,
            ThCompressedTexture,
            ThCubeTexture,
            ThData3DTexture,
            ThDataArrayTexture,
            ThDataTexture,
            ThDepthTexture,
            ThFramebufferTexture,
            ThTexture,
            ThVideoTexture] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: NgxThreeGeneratedModule }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: NgxThreeGeneratedModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        ThTransformControlsGen,
                        ThTransformControls,
                        ThArcballControls,
                        ThDragControls,
                        ThFirstPersonControls,
                        ThFlyControls,
                        ThOrbitControls,
                        ThMapControls,
                        ThPointerLockControls,
                        ThTrackballControls,
                        ThAudio,
                        ThAudioListener,
                        ThPositionalAudio,
                        ThArrayCamera,
                        ThCamera,
                        ThCubeCamera,
                        ThOrthographicCamera,
                        ThPerspectiveCamera,
                        ThStereoCamera,
                        ThObject3D,
                        ThArrowHelper,
                        ThAxesHelper,
                        ThBox3Helper,
                        ThBoxHelper,
                        ThCameraHelper,
                        ThDirectionalLightHelper,
                        ThGridHelper,
                        ThHemisphereLightHelper,
                        ThPlaneHelper,
                        ThPointLightHelper,
                        ThPolarGridHelper,
                        ThSkeletonHelper,
                        ThSpotLightHelper,
                        ThAmbientLight,
                        ThDirectionalLight,
                        ThHemisphereLight,
                        ThLightProbe,
                        ThPointLight,
                        ThRectAreaLight,
                        ThSpotLight,
                        ThBatchedMesh,
                        ThBone,
                        ThGroup,
                        ThInstancedMesh,
                        ThLine,
                        ThLineLoop,
                        ThLineSegments,
                        ThLOD,
                        ThMesh,
                        ThPoints,
                        ThSkinnedMesh,
                        ThSprite,
                        ThScene,
                        ThCSS3DObjectGen,
                        ThCSS3DObject,
                        ThCSS2DObjectGen,
                        ThCSS2DObject,
                        ThLineBasicMaterial,
                        ThLineDashedMaterial,
                        ThMaterial,
                        ThMeshBasicMaterial,
                        ThMeshDepthMaterial,
                        ThMeshDistanceMaterial,
                        ThMeshLambertMaterial,
                        ThMeshMatcapMaterial,
                        ThMeshNormalMaterial,
                        ThMeshPhongMaterial,
                        ThMeshPhysicalMaterial,
                        ThMeshStandardMaterial,
                        ThMeshToonMaterial,
                        ThPointsMaterial,
                        ThRawShaderMaterial,
                        ThShaderMaterial,
                        ThShadowMaterial,
                        ThSpriteMaterial,
                        ThBufferGeometry,
                        ThInstancedBufferGeometry,
                        ThBoxGeometry,
                        ThCapsuleGeometry,
                        ThCircleGeometry,
                        ThConeGeometry,
                        ThCylinderGeometry,
                        ThDodecahedronGeometry,
                        ThEdgesGeometry,
                        ThExtrudeGeometry,
                        ThIcosahedronGeometry,
                        ThLatheGeometry,
                        ThOctahedronGeometry,
                        ThPlaneGeometry,
                        ThPolyhedronGeometry,
                        ThRingGeometry,
                        ThShapeGeometry,
                        ThSphereGeometry,
                        ThTetrahedronGeometry,
                        ThTorusGeometry,
                        ThTorusKnotGeometry,
                        ThTubeGeometry,
                        ThWireframeGeometry,
                        ThBoxLineGeometry,
                        ThConvexGeometry,
                        ThDecalGeometry,
                        ThParametricGeometry,
                        ThRoundedBoxGeometry,
                        ThTeapotGeometry,
                        ThTextGeometry,
                        ThPass,
                        ThEffectComposerGen,
                        ThEffectComposer,
                        ThAfterimagePass,
                        ThBloomPass,
                        ThBokehPass,
                        ThClearPass,
                        ThCubeTexturePass,
                        ThDotScreenPass,
                        ThFilmPass,
                        ThGlitchPass,
                        ThHalftonePass,
                        ThLUTPass,
                        ThMaskPass,
                        ThClearMaskPass,
                        ThOutlinePass,
                        ThOutputPass,
                        ThRenderPassGen,
                        ThRenderPass,
                        ThSAOPass,
                        ThSMAAPass,
                        ThSSAARenderPass,
                        ThSSAOPass,
                        ThSSRPass,
                        ThSavePass,
                        ThShaderPass,
                        ThTAARenderPass,
                        ThTexturePass,
                        ThUnrealBloomPass,
                        ThCanvasTexture,
                        ThCompressedArrayTexture,
                        ThCompressedCubeTexture,
                        ThCompressedTexture,
                        ThCubeTexture,
                        ThData3DTexture,
                        ThDataArrayTexture,
                        ThDataTexture,
                        ThDepthTexture,
                        ThFramebufferTexture,
                        ThTexture,
                        ThVideoTexture,
                    ],
                    exports: [
                        ThTransformControlsGen,
                        ThTransformControls,
                        ThArcballControls,
                        ThDragControls,
                        ThFirstPersonControls,
                        ThFlyControls,
                        ThOrbitControls,
                        ThMapControls,
                        ThPointerLockControls,
                        ThTrackballControls,
                        ThAudio,
                        ThAudioListener,
                        ThPositionalAudio,
                        ThArrayCamera,
                        ThCamera,
                        ThCubeCamera,
                        ThOrthographicCamera,
                        ThPerspectiveCamera,
                        ThStereoCamera,
                        ThObject3D,
                        ThArrowHelper,
                        ThAxesHelper,
                        ThBox3Helper,
                        ThBoxHelper,
                        ThCameraHelper,
                        ThDirectionalLightHelper,
                        ThGridHelper,
                        ThHemisphereLightHelper,
                        ThPlaneHelper,
                        ThPointLightHelper,
                        ThPolarGridHelper,
                        ThSkeletonHelper,
                        ThSpotLightHelper,
                        ThAmbientLight,
                        ThDirectionalLight,
                        ThHemisphereLight,
                        ThLightProbe,
                        ThPointLight,
                        ThRectAreaLight,
                        ThSpotLight,
                        ThBatchedMesh,
                        ThBone,
                        ThGroup,
                        ThInstancedMesh,
                        ThLine,
                        ThLineLoop,
                        ThLineSegments,
                        ThLOD,
                        ThMesh,
                        ThPoints,
                        ThSkinnedMesh,
                        ThSprite,
                        ThScene,
                        ThCSS3DObjectGen,
                        ThCSS3DObject,
                        ThCSS2DObjectGen,
                        ThCSS2DObject,
                        ThLineBasicMaterial,
                        ThLineDashedMaterial,
                        ThMaterial,
                        ThMeshBasicMaterial,
                        ThMeshDepthMaterial,
                        ThMeshDistanceMaterial,
                        ThMeshLambertMaterial,
                        ThMeshMatcapMaterial,
                        ThMeshNormalMaterial,
                        ThMeshPhongMaterial,
                        ThMeshPhysicalMaterial,
                        ThMeshStandardMaterial,
                        ThMeshToonMaterial,
                        ThPointsMaterial,
                        ThRawShaderMaterial,
                        ThShaderMaterial,
                        ThShadowMaterial,
                        ThSpriteMaterial,
                        ThBufferGeometry,
                        ThInstancedBufferGeometry,
                        ThBoxGeometry,
                        ThCapsuleGeometry,
                        ThCircleGeometry,
                        ThConeGeometry,
                        ThCylinderGeometry,
                        ThDodecahedronGeometry,
                        ThEdgesGeometry,
                        ThExtrudeGeometry,
                        ThIcosahedronGeometry,
                        ThLatheGeometry,
                        ThOctahedronGeometry,
                        ThPlaneGeometry,
                        ThPolyhedronGeometry,
                        ThRingGeometry,
                        ThShapeGeometry,
                        ThSphereGeometry,
                        ThTetrahedronGeometry,
                        ThTorusGeometry,
                        ThTorusKnotGeometry,
                        ThTubeGeometry,
                        ThWireframeGeometry,
                        ThBoxLineGeometry,
                        ThConvexGeometry,
                        ThDecalGeometry,
                        ThParametricGeometry,
                        ThRoundedBoxGeometry,
                        ThTeapotGeometry,
                        ThTextGeometry,
                        ThPass,
                        ThEffectComposerGen,
                        ThEffectComposer,
                        ThAfterimagePass,
                        ThBloomPass,
                        ThBokehPass,
                        ThClearPass,
                        ThCubeTexturePass,
                        ThDotScreenPass,
                        ThFilmPass,
                        ThGlitchPass,
                        ThHalftonePass,
                        ThLUTPass,
                        ThMaskPass,
                        ThClearMaskPass,
                        ThOutlinePass,
                        ThOutputPass,
                        ThRenderPassGen,
                        ThRenderPass,
                        ThSAOPass,
                        ThSMAAPass,
                        ThSSAARenderPass,
                        ThSSAOPass,
                        ThSSRPass,
                        ThSavePass,
                        ThShaderPass,
                        ThTAARenderPass,
                        ThTexturePass,
                        ThUnrealBloomPass,
                        ThCanvasTexture,
                        ThCompressedArrayTexture,
                        ThCompressedCubeTexture,
                        ThCompressedTexture,
                        ThCubeTexture,
                        ThData3DTexture,
                        ThDataArrayTexture,
                        ThDataTexture,
                        ThDepthTexture,
                        ThFramebufferTexture,
                        ThTexture,
                        ThVideoTexture,
                    ],
                }]
        }] });

class ThLoader {
    setCrossOrigin(cors) {
        this.crossOrigin = cors;
    }
    setWithCredentials(credentials) {
        this.withCredentials = credentials;
    }
    createLoaderInstance() {
        const loader = new this.clazz();
        if (this.crossOrigin) {
            loader.setCrossOrigin(this.crossOrigin);
        }
        if (this.withCredentials !== undefined) {
            loader.setWithCredentials(this.withCredentials);
        }
        return loader;
    }
}

class ThCallbackLoaderService extends ThLoader {
    load(...args) {
        const loader = this.createLoaderInstance();
        return loader.load(...args);
    }
}
class ThCallbackLoaderBasePipe {
    transform(...args) {
        return this.service.load(...args);
    }
}
class ThCallbackLoaderBaseDirective {
    set url(url) {
        this._url = url;
        this.load();
    }
    get url() {
        return this._url;
    }
    get onLoaded() {
        if (!this.onLoaded$) {
            this.onLoaded$ = new EventEmitter();
        }
        return this.onLoaded$;
    }
    get onProgress() {
        if (!this.onProgress$) {
            this.onProgress$ = new EventEmitter();
        }
        return this.onProgress$;
    }
    constructor(host, zone) {
        this.host = host;
        this.zone = zone;
        this.initialized = false;
    }
    ngOnInit() {
        this.initialized = true;
        this.load();
        // this.zone.runOutsideAngular(() => );
    }
    async load() {
        if (!this.initialized) {
            return;
        }
        if (this._url === undefined) {
            throw new Error('missing url');
        }
        const url = this._url;
        const onProgress = isObserved(this.onProgress$)
            ? (progress) => {
                this.onProgress$?.next(progress);
            }
            : undefined;
        const onLoad = isObserved(this.onLoaded$)
            ? (...args) => {
                this.onLoaded$?.next(args[0]);
            }
            : undefined;
        this.host.objRef = this.zone.runOutsideAngular(() => this.service.load(url, onLoad, onProgress));
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThCallbackLoaderBaseDirective, deps: "invalid", target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "18.1.2", type: ThCallbackLoaderBaseDirective, inputs: { url: "url" }, outputs: { onLoaded: "onLoaded", onProgress: "onProgress" }, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThCallbackLoaderBaseDirective, decorators: [{
            type: Directive,
            args: [{}]
        }], ctorParameters: () => [{ type: undefined, decorators: [{
                    type: Host
                }] }, { type: i0.NgZone }], propDecorators: { url: [{
                type: Input
            }], onLoaded: [{
                type: Output
            }], onProgress: [{
                type: Output
            }] } });

class DDSLoaderService extends ThCallbackLoaderService {
    constructor() {
        super(...arguments);
        this.clazz = DDSLoader;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: DDSLoaderService, deps: null, target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: DDSLoaderService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: DDSLoaderService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }] });
class ThDDSLoaderPipe extends ThCallbackLoaderBasePipe {
    constructor(service) {
        super();
        this.service = service;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThDDSLoaderPipe, deps: [{ token: DDSLoaderService }], target: i0.ɵɵFactoryTarget.Pipe }); }
    static { this.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "14.0.0", version: "18.1.2", ngImport: i0, type: ThDDSLoaderPipe, name: "loadDDSTexture" }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThDDSLoaderPipe, decorators: [{
            type: Pipe,
            args: [{
                    name: 'loadDDSTexture',
                    pure: true,
                }]
        }], ctorParameters: () => [{ type: DDSLoaderService }] });
class ThDDSLoaderDirective extends ThCallbackLoaderBaseDirective {
    constructor(host, zone, service) {
        super(host, zone);
        this.host = host;
        this.zone = zone;
        this.service = service;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThDDSLoaderDirective, deps: [{ token: ThCompressedTexture, host: true }, { token: i0.NgZone }, { token: DDSLoaderService }], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "18.1.2", type: ThDDSLoaderDirective, selector: "[loadDDSTexture]", usesInheritance: true, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThDDSLoaderDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[loadDDSTexture]',
                }]
        }], ctorParameters: () => [{ type: ThCompressedTexture, decorators: [{
                    type: Host
                }] }, { type: i0.NgZone }, { type: DDSLoaderService }] });

class KTX2LoaderService extends ThCallbackLoaderService {
    constructor() {
        super(...arguments);
        this.clazz = KTX2Loader;
        this.transcoderPath = '';
    }
    setDecoderPath(path) {
        this.transcoderPath = path;
    }
    createLoaderInstance() {
        const loader = super.createLoaderInstance();
        loader.setTranscoderPath(this.transcoderPath);
        return loader;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: KTX2LoaderService, deps: null, target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: KTX2LoaderService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: KTX2LoaderService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }] });
class ThKTX2LoaderPipe extends ThCallbackLoaderBasePipe {
    constructor(service) {
        super();
        this.service = service;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThKTX2LoaderPipe, deps: [{ token: KTX2LoaderService }], target: i0.ɵɵFactoryTarget.Pipe }); }
    static { this.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "14.0.0", version: "18.1.2", ngImport: i0, type: ThKTX2LoaderPipe, name: "loadKTX2Texture" }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThKTX2LoaderPipe, decorators: [{
            type: Pipe,
            args: [{
                    name: 'loadKTX2Texture',
                    pure: true,
                }]
        }], ctorParameters: () => [{ type: KTX2LoaderService }] });
class ThKTX2LoaderDirective extends ThCallbackLoaderBaseDirective {
    constructor(host, zone, service) {
        super(host, zone);
        this.host = host;
        this.zone = zone;
        this.service = service;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThKTX2LoaderDirective, deps: [{ token: ThTexture, host: true }, { token: i0.NgZone }, { token: KTX2LoaderService }], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "18.1.2", type: ThKTX2LoaderDirective, selector: "[loadKTX2Texture]", usesInheritance: true, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThKTX2LoaderDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[loadKTX2Texture]',
                }]
        }], ctorParameters: () => [{ type: ThTexture, decorators: [{
                    type: Host
                }] }, { type: i0.NgZone }, { type: KTX2LoaderService }] });

class KTXLoaderService extends ThCallbackLoaderService {
    constructor() {
        super(...arguments);
        this.clazz = KTXLoader;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: KTXLoaderService, deps: null, target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: KTXLoaderService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: KTXLoaderService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }] });
class ThKTXLoaderPipe extends ThCallbackLoaderBasePipe {
    constructor(service) {
        super();
        this.service = service;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThKTXLoaderPipe, deps: [{ token: KTXLoaderService }], target: i0.ɵɵFactoryTarget.Pipe }); }
    static { this.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "14.0.0", version: "18.1.2", ngImport: i0, type: ThKTXLoaderPipe, name: "loadKTXTexture" }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThKTXLoaderPipe, decorators: [{
            type: Pipe,
            args: [{
                    name: 'loadKTXTexture',
                    pure: true,
                }]
        }], ctorParameters: () => [{ type: KTXLoaderService }] });
class ThKTXLoaderDirective extends ThCallbackLoaderBaseDirective {
    constructor(host, zone, service) {
        super(host, zone);
        this.host = host;
        this.zone = zone;
        this.service = service;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThKTXLoaderDirective, deps: [{ token: ThCompressedTexture, host: true }, { token: i0.NgZone }, { token: KTXLoaderService }], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "18.1.2", type: ThKTXLoaderDirective, selector: "[loadKTXTexture]", usesInheritance: true, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThKTXLoaderDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[loadKTXTexture]',
                }]
        }], ctorParameters: () => [{ type: ThCompressedTexture, decorators: [{
                    type: Host
                }] }, { type: i0.NgZone }, { type: KTXLoaderService }] });

class PVRLoaderService extends ThCallbackLoaderService {
    constructor() {
        super(...arguments);
        this.clazz = PVRLoader;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: PVRLoaderService, deps: null, target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: PVRLoaderService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: PVRLoaderService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }] });
class ThPVRLoaderPipe extends ThCallbackLoaderBasePipe {
    constructor(service) {
        super();
        this.service = service;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThPVRLoaderPipe, deps: [{ token: PVRLoaderService }], target: i0.ɵɵFactoryTarget.Pipe }); }
    static { this.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "14.0.0", version: "18.1.2", ngImport: i0, type: ThPVRLoaderPipe, name: "loadPVRTexture" }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThPVRLoaderPipe, decorators: [{
            type: Pipe,
            args: [{
                    name: 'loadPVRTexture',
                    pure: true,
                }]
        }], ctorParameters: () => [{ type: PVRLoaderService }] });
class ThPVRLoaderDirective extends ThCallbackLoaderBaseDirective {
    constructor(host, zone, service) {
        super(host, zone);
        this.host = host;
        this.zone = zone;
        this.service = service;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThPVRLoaderDirective, deps: [{ token: ThCompressedTexture, host: true }, { token: i0.NgZone }, { token: PVRLoaderService }], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "18.1.2", type: ThPVRLoaderDirective, selector: "[loadPVRTexture]", usesInheritance: true, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThPVRLoaderDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[loadPVRTexture]',
                }]
        }], ctorParameters: () => [{ type: ThCompressedTexture, decorators: [{
                    type: Host
                }] }, { type: i0.NgZone }, { type: PVRLoaderService }] });

class EXRLoaderService extends ThCallbackLoaderService {
    constructor() {
        super(...arguments);
        this.clazz = EXRLoader;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: EXRLoaderService, deps: null, target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: EXRLoaderService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: EXRLoaderService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }] });
class ThEXRLoaderPipe extends ThCallbackLoaderBasePipe {
    constructor(service) {
        super();
        this.service = service;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThEXRLoaderPipe, deps: [{ token: EXRLoaderService }], target: i0.ɵɵFactoryTarget.Pipe }); }
    static { this.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "14.0.0", version: "18.1.2", ngImport: i0, type: ThEXRLoaderPipe, name: "loadEXRTexture" }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThEXRLoaderPipe, decorators: [{
            type: Pipe,
            args: [{
                    name: 'loadEXRTexture',
                    pure: true,
                }]
        }], ctorParameters: () => [{ type: EXRLoaderService }] });
class ThEXRLoaderDirective extends ThCallbackLoaderBaseDirective {
    constructor(host, zone, service) {
        super(host, zone);
        this.host = host;
        this.zone = zone;
        this.service = service;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThEXRLoaderDirective, deps: [{ token: ThDataTexture, host: true }, { token: i0.NgZone }, { token: EXRLoaderService }], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "18.1.2", type: ThEXRLoaderDirective, selector: "[loadEXRTexture]", usesInheritance: true, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThEXRLoaderDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[loadEXRTexture]',
                }]
        }], ctorParameters: () => [{ type: ThDataTexture, decorators: [{
                    type: Host
                }] }, { type: i0.NgZone }, { type: EXRLoaderService }] });

class RGBELoaderService extends ThCallbackLoaderService {
    constructor() {
        super(...arguments);
        this.clazz = RGBELoader;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: RGBELoaderService, deps: null, target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: RGBELoaderService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: RGBELoaderService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }] });
class ThRGBELoaderPipe extends ThCallbackLoaderBasePipe {
    constructor(service) {
        super();
        this.service = service;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThRGBELoaderPipe, deps: [{ token: RGBELoaderService }], target: i0.ɵɵFactoryTarget.Pipe }); }
    static { this.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "14.0.0", version: "18.1.2", ngImport: i0, type: ThRGBELoaderPipe, name: "loadRGBETexture" }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThRGBELoaderPipe, decorators: [{
            type: Pipe,
            args: [{
                    name: 'loadRGBETexture',
                    pure: true,
                }]
        }], ctorParameters: () => [{ type: RGBELoaderService }] });
class ThRGBELoaderDirective extends ThCallbackLoaderBaseDirective {
    constructor(host, zone, service) {
        super(host, zone);
        this.host = host;
        this.zone = zone;
        this.service = service;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThRGBELoaderDirective, deps: [{ token: ThDataTexture, host: true }, { token: i0.NgZone }, { token: RGBELoaderService }], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "18.1.2", type: ThRGBELoaderDirective, selector: "[loadRGBETexture]", usesInheritance: true, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThRGBELoaderDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[loadRGBETexture]',
                }]
        }], ctorParameters: () => [{ type: ThDataTexture, decorators: [{
                    type: Host
                }] }, { type: i0.NgZone }, { type: RGBELoaderService }] });

class RGBMLoaderService extends ThCallbackLoaderService {
    constructor() {
        super(...arguments);
        this.clazz = RGBMLoader;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: RGBMLoaderService, deps: null, target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: RGBMLoaderService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: RGBMLoaderService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }] });
class ThRGBMLoaderPipe extends ThCallbackLoaderBasePipe {
    constructor(service) {
        super();
        this.service = service;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThRGBMLoaderPipe, deps: [{ token: RGBMLoaderService }], target: i0.ɵɵFactoryTarget.Pipe }); }
    static { this.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "14.0.0", version: "18.1.2", ngImport: i0, type: ThRGBMLoaderPipe, name: "loadRGBMTexture" }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThRGBMLoaderPipe, decorators: [{
            type: Pipe,
            args: [{
                    name: 'loadRGBMTexture',
                    pure: true,
                }]
        }], ctorParameters: () => [{ type: RGBMLoaderService }] });
class ThRGBMLoaderDirective extends ThCallbackLoaderBaseDirective {
    constructor(host, zone, service) {
        super(host, zone);
        this.host = host;
        this.zone = zone;
        this.service = service;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThRGBMLoaderDirective, deps: [{ token: ThDataTexture, host: true }, { token: i0.NgZone }, { token: RGBMLoaderService }], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "18.1.2", type: ThRGBMLoaderDirective, selector: "[loadRGBMTexture]", usesInheritance: true, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThRGBMLoaderDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[loadRGBMTexture]',
                }]
        }], ctorParameters: () => [{ type: ThDataTexture, decorators: [{
                    type: Host
                }] }, { type: i0.NgZone }, { type: RGBMLoaderService }] });

class TGALoaderService extends ThCallbackLoaderService {
    constructor() {
        super(...arguments);
        this.clazz = TGALoader;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: TGALoaderService, deps: null, target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: TGALoaderService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: TGALoaderService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }] });
class ThTGALoaderPipe extends ThCallbackLoaderBasePipe {
    constructor(service) {
        super();
        this.service = service;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThTGALoaderPipe, deps: [{ token: TGALoaderService }], target: i0.ɵɵFactoryTarget.Pipe }); }
    static { this.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "14.0.0", version: "18.1.2", ngImport: i0, type: ThTGALoaderPipe, name: "loadTGATexture" }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThTGALoaderPipe, decorators: [{
            type: Pipe,
            args: [{
                    name: 'loadTGATexture',
                    pure: true,
                }]
        }], ctorParameters: () => [{ type: TGALoaderService }] });
class ThTGALoaderDirective extends ThCallbackLoaderBaseDirective {
    constructor(host, zone, service) {
        super(host, zone);
        this.host = host;
        this.zone = zone;
        this.service = service;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThTGALoaderDirective, deps: [{ token: ThDataTexture, host: true }, { token: i0.NgZone }, { token: TGALoaderService }], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "18.1.2", type: ThTGALoaderDirective, selector: "[loadTGATexture]", usesInheritance: true, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThTGALoaderDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[loadTGATexture]',
                }]
        }], ctorParameters: () => [{ type: ThDataTexture, decorators: [{
                    type: Host
                }] }, { type: i0.NgZone }, { type: TGALoaderService }] });

class CubeTextureLoaderService extends ThCallbackLoaderService {
    constructor() {
        super(...arguments);
        this.clazz = CubeTextureLoader;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: CubeTextureLoaderService, deps: null, target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: CubeTextureLoaderService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: CubeTextureLoaderService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }] });
class ThCubeTextureLoaderPipe extends ThCallbackLoaderBasePipe {
    constructor(service) {
        super();
        this.service = service;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThCubeTextureLoaderPipe, deps: [{ token: CubeTextureLoaderService }], target: i0.ɵɵFactoryTarget.Pipe }); }
    static { this.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "14.0.0", version: "18.1.2", ngImport: i0, type: ThCubeTextureLoaderPipe, name: "loadCubeTexture" }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThCubeTextureLoaderPipe, decorators: [{
            type: Pipe,
            args: [{
                    name: 'loadCubeTexture',
                    pure: true,
                }]
        }], ctorParameters: () => [{ type: CubeTextureLoaderService }] });
class ThCubeTextureLoaderDirective extends ThCallbackLoaderBaseDirective {
    constructor(host, zone, service) {
        super(host, zone);
        this.host = host;
        this.zone = zone;
        this.service = service;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThCubeTextureLoaderDirective, deps: [{ token: ThTexture, host: true }, { token: i0.NgZone }, { token: CubeTextureLoaderService }], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "18.1.2", type: ThCubeTextureLoaderDirective, selector: "[loadCubeTexture]", usesInheritance: true, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThCubeTextureLoaderDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[loadCubeTexture]',
                }]
        }], ctorParameters: () => [{ type: ThTexture, decorators: [{
                    type: Host
                }] }, { type: i0.NgZone }, { type: CubeTextureLoaderService }] });

class ThAsyncLoaderService extends ThLoader {
    load(...args) {
        const loader = this.createLoaderInstance();
        return loader.loadAsync(...args);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThAsyncLoaderService, deps: null, target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThAsyncLoaderService }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThAsyncLoaderService, decorators: [{
            type: Injectable
        }] });
class ThAsyncLoaderBasePipe {
    constructor() {
        this.animationLoop = inject(ThAnimationLoopService);
    }
    transform(...args) {
        return this.service.load(...args).then((response) => {
            this.animationLoop.requestAnimationFrame();
            return response;
        });
    }
}
class ThAsyncLoaderBaseDirective {
    set url(url) {
        this._url = url;
        this.load();
    }
    get url() {
        return this._url;
    }
    get onLoaded() {
        if (!this.onLoaded$) {
            this.onLoaded$ = new EventEmitter();
        }
        return this.onLoaded$;
    }
    get onProgress() {
        if (!this.onProgress$) {
            this.onProgress$ = new EventEmitter();
        }
        return this.onProgress$;
    }
    constructor(host, zone) {
        this.host = host;
        this.zone = zone;
        this.initialized = false;
        this.animationLoop = inject(ThAnimationLoopService);
        this.proxy = createLazyObject3DProxy();
        host.objRef = this.proxy;
    }
    ngOnInit() {
        this.initialized = true;
        this.load();
        // this.zone.runOutsideAngular(() => );
    }
    async load() {
        if (!this.initialized) {
            return;
        }
        if (this._url === undefined) {
            throw new Error('missing url');
        }
        if (!this.proxy) {
            return;
        }
        const url = this._url;
        const onProgress = isObserved(this.onProgress$)
            ? (progress) => {
                this.zone.run(() => {
                    this.onProgress$?.next(progress);
                });
            }
            : undefined;
        const result = await this.zone.runOutsideAngular(() => this.service.load(url, onProgress));
        this.animationLoop.requestAnimationFrame();
        this.proxy.objRef = this.getRefFromResponse(result);
        // add the new object to the parent and
        // emit a loaded event directly on the three.js object and on objRef$
        this.host.objRef = this.proxy;
        if (this.onLoaded$ && result != null) {
            this.zone.run(() => this.onLoaded$?.next(result));
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThAsyncLoaderBaseDirective, deps: "invalid", target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "18.1.2", type: ThAsyncLoaderBaseDirective, inputs: { url: "url" }, outputs: { onLoaded: "onLoaded", onProgress: "onProgress" }, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThAsyncLoaderBaseDirective, decorators: [{
            type: Directive,
            args: [{}]
        }], ctorParameters: () => [{ type: undefined, decorators: [{
                    type: Host
                }] }, { type: i0.NgZone }], propDecorators: { url: [{
                type: Input
            }], onLoaded: [{
                type: Output
            }], onProgress: [{
                type: Output
            }] } });

class DRACOLoaderService extends ThCallbackLoaderService {
    constructor() {
        super(...arguments);
        this.clazz = DRACOLoader;
        this.decoderPath = '';
        this.reuseInstance = true;
    }
    setDecoderPath(path) {
        this.decoderPath = path;
    }
    setDecoderConfig(config) {
        this.decoderConfig = config;
    }
    setWorkerLimit(limit) {
        this.workerLimit = limit;
    }
    setReuseInstance(reuse) {
        this.reuseInstance = reuse;
    }
    createLoaderInstance() {
        if (this.reuseInstance && this.instance) {
            return this.instance;
        }
        const loader = super.createLoaderInstance();
        loader.setDecoderPath(this.decoderPath);
        if (this.decoderConfig) {
            loader.setDecoderConfig(this.decoderConfig);
        }
        if (this.workerLimit) {
            loader.setWorkerLimit(this.workerLimit);
        }
        if (this.reuseInstance) {
            this.instance = loader;
        }
        return loader;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: DRACOLoaderService, deps: null, target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: DRACOLoaderService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: DRACOLoaderService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }] });

class GLTFLoaderService extends ThAsyncLoaderService {
    constructor(dracoLoaderService) {
        super();
        this.dracoLoaderService = dracoLoaderService;
        this.clazz = GLTFLoader;
    }
    createLoaderInstance() {
        const loader = super.createLoaderInstance();
        loader.setDRACOLoader(this.dracoLoaderService.createLoaderInstance());
        return loader;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: GLTFLoaderService, deps: [{ token: DRACOLoaderService }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: GLTFLoaderService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: GLTFLoaderService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: () => [{ type: DRACOLoaderService }] });
class ThGLTFLoaderPipe extends ThAsyncLoaderBasePipe {
    constructor(service) {
        super();
        this.service = service;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThGLTFLoaderPipe, deps: [{ token: GLTFLoaderService }], target: i0.ɵɵFactoryTarget.Pipe }); }
    static { this.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "14.0.0", version: "18.1.2", ngImport: i0, type: ThGLTFLoaderPipe, name: "loadGLTF" }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThGLTFLoaderPipe, decorators: [{
            type: Pipe,
            args: [{
                    name: 'loadGLTF',
                    pure: true,
                }]
        }], ctorParameters: () => [{ type: GLTFLoaderService }] });
class ThGLTFLoaderDirective extends ThAsyncLoaderBaseDirective {
    constructor(host, zone, service) {
        super(host, zone);
        this.host = host;
        this.zone = zone;
        this.service = service;
    }
    getRefFromResponse(response) {
        return response.scene;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThGLTFLoaderDirective, deps: [{ token: ThObject3D, host: true }, { token: i0.NgZone }, { token: GLTFLoaderService }], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "18.1.2", type: ThGLTFLoaderDirective, selector: "[loadGLTF]", usesInheritance: true, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThGLTFLoaderDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[loadGLTF]',
                }]
        }], ctorParameters: () => [{ type: ThObject3D, decorators: [{
                    type: Host
                }] }, { type: i0.NgZone }, { type: GLTFLoaderService }] });

class TextureLoaderService extends ThCallbackLoaderService {
    constructor() {
        super(...arguments);
        this.clazz = TextureLoader;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: TextureLoaderService, deps: null, target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: TextureLoaderService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: TextureLoaderService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }] });
class ThTextureLoaderPipe extends ThCallbackLoaderBasePipe {
    constructor(service) {
        super();
        this.service = service;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThTextureLoaderPipe, deps: [{ token: TextureLoaderService }], target: i0.ɵɵFactoryTarget.Pipe }); }
    static { this.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "14.0.0", version: "18.1.2", ngImport: i0, type: ThTextureLoaderPipe, name: "loadTexture" }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThTextureLoaderPipe, decorators: [{
            type: Pipe,
            args: [{
                    name: 'loadTexture',
                    pure: true,
                }]
        }], ctorParameters: () => [{ type: TextureLoaderService }] });
class ThTextureLoaderDirective extends ThCallbackLoaderBaseDirective {
    constructor(host, zone, service) {
        super(host, zone);
        this.host = host;
        this.zone = zone;
        this.service = service;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThTextureLoaderDirective, deps: [{ token: ThTexture, host: true }, { token: i0.NgZone }, { token: TextureLoaderService }], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "18.1.2", type: ThTextureLoaderDirective, selector: "[loadTexture]", usesInheritance: true, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThTextureLoaderDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[loadTexture]',
                }]
        }], ctorParameters: () => [{ type: ThTexture, decorators: [{
                    type: Host
                }] }, { type: i0.NgZone }, { type: TextureLoaderService }] });

/**
 * create a clone of any "cloneable" three.js class (or from it's ngx-three warpper)
 */
class ClonePipe {
    transform(value) {
        if (!value) {
            return;
        }
        if (value instanceof ThWrapperBase) {
            return value.objRef?.clone();
        }
        else {
            return value.clone();
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ClonePipe, deps: [], target: i0.ɵɵFactoryTarget.Pipe }); }
    static { this.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "14.0.0", version: "18.1.2", ngImport: i0, type: ClonePipe, name: "clone" }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ClonePipe, decorators: [{
            type: Pipe,
            args: [{
                    name: 'clone'
                }]
        }] });

/**
 * constructs a color of it's constructor parameters
 */
class ColorPipe {
    /* ContructorProperties does not support multiple constructors --> */
    transform(args) {
        if (Array.isArray(args)) {
            return new Color(...args);
        }
        else {
            return new Color(args);
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ColorPipe, deps: [], target: i0.ɵɵFactoryTarget.Pipe }); }
    static { this.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "14.0.0", version: "18.1.2", ngImport: i0, type: ColorPipe, name: "color" }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ColorPipe, decorators: [{
            type: Pipe,
            args: [{
                    name: 'color',
                    pure: true
                }]
        }] });

class FogPipe {
    transform(args) {
        return new Fog(...args);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: FogPipe, deps: [], target: i0.ɵɵFactoryTarget.Pipe }); }
    static { this.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "14.0.0", version: "18.1.2", ngImport: i0, type: FogPipe, name: "fog" }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: FogPipe, decorators: [{
            type: Pipe,
            args: [{
                    name: 'fog',
                    pure: true
                }]
        }] });

/**
 * transform arrays to vectors
 */
class Vector2Pipe {
    transform(args) {
        return new Vector2(...args);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: Vector2Pipe, deps: [], target: i0.ɵɵFactoryTarget.Pipe }); }
    static { this.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "14.0.0", version: "18.1.2", ngImport: i0, type: Vector2Pipe, name: "vector2" }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: Vector2Pipe, decorators: [{
            type: Pipe,
            args: [{
                    name: 'vector2',
                    pure: true
                }]
        }] });
class Vector3Pipe {
    transform(args) {
        return new Vector3(...args);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: Vector3Pipe, deps: [], target: i0.ɵɵFactoryTarget.Pipe }); }
    static { this.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "14.0.0", version: "18.1.2", ngImport: i0, type: Vector3Pipe, name: "vector3" }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: Vector3Pipe, decorators: [{
            type: Pipe,
            args: [{
                    name: 'vector3',
                    pure: true
                }]
        }] });
class Vector4Pipe {
    transform(args) {
        return new Vector4(...args);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: Vector4Pipe, deps: [], target: i0.ɵɵFactoryTarget.Pipe }); }
    static { this.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "14.0.0", version: "18.1.2", ngImport: i0, type: Vector4Pipe, name: "vector4" }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: Vector4Pipe, decorators: [{
            type: Pipe,
            args: [{
                    name: 'vector4',
                    pure: true
                }]
        }] });

class ThRenderDirective {
    constructor(engineService, animationLoopService) {
        this.engineService = engineService;
        this.animationLoopService = animationLoopService;
    }
    get beforeRender() {
        return this.engineService.beforeRender$;
    }
    get onResize() {
        return this.engineService.resize$;
    }
    set renderOnDemand(onDemand) {
        if (onDemand) {
            this.animationLoopService.stop();
        }
        else {
            this.animationLoopService.start();
        }
    }
    get renderOnDemand() {
        return !this.animationLoopService.isActive();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThRenderDirective, deps: [{ token: ThEngineService }, { token: ThAnimationLoopService }], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "18.1.2", type: ThRenderDirective, selector: "[beforeRender], [onResize], [renderOnDemand]", inputs: { renderOnDemand: "renderOnDemand" }, outputs: { beforeRender: "beforeRender", onResize: "onResize" }, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThRenderDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[beforeRender], [onResize], [renderOnDemand]'
                }]
        }], ctorParameters: () => [{ type: ThEngineService }, { type: ThAnimationLoopService }], propDecorators: { beforeRender: [{
                type: Output
            }], onResize: [{
                type: Output
            }], renderOnDemand: [{
                type: Input
            }] } });

class StatsDirective {
    constructor(engineService, canvas) {
        this.engineService = engineService;
        this.canvas = canvas;
        this.stats = new Stats();
    }
    ngOnDestroy() {
        if (this.renderSubscription) {
            this.renderSubscription.unsubscribe();
        }
    }
    ngOnInit() {
        if (!this.canvas.elementRef) {
            throw new Error('No canvas present');
        }
        const parentElement = this.canvas.elementRef.nativeElement;
        if (parentElement) {
            parentElement.style.position = 'relative';
            this.stats.dom.style.position = 'absolute';
            this.stats.showPanel(0);
            parentElement.appendChild(this.stats.dom);
            this.renderSubscription = this.engineService.beforeRender$.subscribe(() => {
                this.stats.update();
            });
        }
    }
    set thStats(enabled) {
        if (!enabled) {
            this.stats.dom.style.visibility = 'hidden';
        }
        else {
            this.stats.dom.style.visibility = 'visible';
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: StatsDirective, deps: [{ token: ThEngineService }, { token: ThCanvas }], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "18.1.2", type: StatsDirective, selector: "[thStats]", inputs: { thStats: "thStats" }, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: StatsDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[thStats]',
                }]
        }], ctorParameters: () => [{ type: ThEngineService }, { type: ThCanvas }], propDecorators: { thStats: [{
                type: Input
            }] } });

class OBJLoaderService extends ThAsyncLoaderService {
    constructor() {
        super(...arguments);
        this.clazz = OBJLoader;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: OBJLoaderService, deps: null, target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: OBJLoaderService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: OBJLoaderService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }] });
class ThObjLoaderPipe extends ThAsyncLoaderBasePipe {
    constructor(service) {
        super();
        this.service = service;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThObjLoaderPipe, deps: [{ token: OBJLoaderService }], target: i0.ɵɵFactoryTarget.Pipe }); }
    static { this.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "14.0.0", version: "18.1.2", ngImport: i0, type: ThObjLoaderPipe, name: "loadObj" }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThObjLoaderPipe, decorators: [{
            type: Pipe,
            args: [{
                    name: 'loadObj',
                    pure: true,
                }]
        }], ctorParameters: () => [{ type: OBJLoaderService }] });
class ThObjLoaderDirective extends ThAsyncLoaderBaseDirective {
    constructor(host, zone, service) {
        super(host, zone);
        this.host = host;
        this.zone = zone;
        this.service = service;
    }
    getRefFromResponse(response) {
        return response;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThObjLoaderDirective, deps: [{ token: ThObject3D, host: true }, { token: i0.NgZone }, { token: OBJLoaderService }], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "18.1.2", type: ThObjLoaderDirective, selector: "[loadObj]", usesInheritance: true, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThObjLoaderDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[loadObj]',
                }]
        }], ctorParameters: () => [{ type: ThObject3D, decorators: [{
                    type: Host
                }] }, { type: i0.NgZone }, { type: OBJLoaderService }] });

class FBXLoaderService extends ThAsyncLoaderService {
    constructor() {
        super(...arguments);
        this.clazz = FBXLoader;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: FBXLoaderService, deps: null, target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: FBXLoaderService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: FBXLoaderService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }] });
class ThFBXLoaderPipe extends ThAsyncLoaderBasePipe {
    constructor(service) {
        super();
        this.service = service;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThFBXLoaderPipe, deps: [{ token: FBXLoaderService }], target: i0.ɵɵFactoryTarget.Pipe }); }
    static { this.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "14.0.0", version: "18.1.2", ngImport: i0, type: ThFBXLoaderPipe, name: "loadFBX" }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThFBXLoaderPipe, decorators: [{
            type: Pipe,
            args: [{
                    name: 'loadFBX',
                    pure: true,
                }]
        }], ctorParameters: () => [{ type: FBXLoaderService }] });
class ThFBXLoaderDirective extends ThAsyncLoaderBaseDirective {
    constructor(host, zone, service) {
        super(host, zone);
        this.host = host;
        this.zone = zone;
        this.service = service;
    }
    getRefFromResponse(response) {
        return response;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThFBXLoaderDirective, deps: [{ token: ThObject3D, host: true }, { token: i0.NgZone }, { token: FBXLoaderService }], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "18.1.2", type: ThFBXLoaderDirective, selector: "[loadFBX]", usesInheritance: true, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThFBXLoaderDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[loadFBX]',
                }]
        }], ctorParameters: () => [{ type: ThObject3D, decorators: [{
                    type: Host
                }] }, { type: i0.NgZone }, { type: FBXLoaderService }] });

class LogLuvLoaderService extends ThCallbackLoaderService {
    constructor() {
        super(...arguments);
        this.clazz = LogLuvLoader;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: LogLuvLoaderService, deps: null, target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: LogLuvLoaderService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: LogLuvLoaderService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }] });
class ThLogLuvLoaderPipe extends ThCallbackLoaderBasePipe {
    constructor(service) {
        super();
        this.service = service;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThLogLuvLoaderPipe, deps: [{ token: LogLuvLoaderService }], target: i0.ɵɵFactoryTarget.Pipe }); }
    static { this.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "14.0.0", version: "18.1.2", ngImport: i0, type: ThLogLuvLoaderPipe, name: "loadLogLuvTexture" }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThLogLuvLoaderPipe, decorators: [{
            type: Pipe,
            args: [{
                    name: 'loadLogLuvTexture',
                    pure: true,
                }]
        }], ctorParameters: () => [{ type: LogLuvLoaderService }] });
class ThLogLuvLoaderDirective extends ThCallbackLoaderBaseDirective {
    constructor(host, zone, service) {
        super(host, zone);
        this.host = host;
        this.zone = zone;
        this.service = service;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThLogLuvLoaderDirective, deps: [{ token: ThDataTexture, host: true }, { token: i0.NgZone }, { token: LogLuvLoaderService }], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "18.1.2", type: ThLogLuvLoaderDirective, selector: "[loadLogLuvTexture]", usesInheritance: true, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThLogLuvLoaderDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[loadLogLuvTexture]',
                }]
        }], ctorParameters: () => [{ type: ThDataTexture, decorators: [{
                    type: Host
                }] }, { type: i0.NgZone }, { type: LogLuvLoaderService }] });

/*
          Generated, modifications will get overwritten
        */

class PLYLoaderService extends ThAsyncLoaderService {
    constructor() {
        super(...arguments);
        this.clazz = PLYLoader;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: PLYLoaderService, deps: null, target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: PLYLoaderService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: PLYLoaderService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }] });
class ThPLYLoaderPipe extends ThAsyncLoaderBasePipe {
    constructor(service) {
        super();
        this.service = service;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThPLYLoaderPipe, deps: [{ token: PLYLoaderService }], target: i0.ɵɵFactoryTarget.Pipe }); }
    static { this.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "14.0.0", version: "18.1.2", ngImport: i0, type: ThPLYLoaderPipe, name: "loadPLY" }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThPLYLoaderPipe, decorators: [{
            type: Pipe,
            args: [{
                    name: 'loadPLY',
                    pure: true,
                }]
        }], ctorParameters: () => [{ type: PLYLoaderService }] });
class ThPLYLoaderDirective extends ThAsyncLoaderBaseDirective {
    constructor(host, zone, service) {
        super(host, zone);
        this.host = host;
        this.zone = zone;
        this.service = service;
    }
    getRefFromResponse(response) {
        response.computeVertexNormals();
        return response;
    }
    async load() {
        if (!this.initialized) {
            return;
        }
        if (this._url === undefined) {
            throw new Error('missing url');
        }
        const url = this._url;
        const onProgress = isObserved(this.onProgress$)
            ? (progress) => {
                this.onProgress$?.next(progress);
            }
            : undefined;
        const result = await this.zone.runOutsideAngular(() => this.service.load(url, onProgress));
        // add the new object to the parent and
        // emit a loaded event directly on the three.js object and on objRef$
        this.host.objRef = this.getRefFromResponse(result);
        if (this.onLoaded$ && result !== undefined) {
            this.onLoaded$?.next(result);
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThPLYLoaderDirective, deps: [{ token: ThBufferGeometry, host: true }, { token: i0.NgZone }, { token: PLYLoaderService }], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "18.1.2", type: ThPLYLoaderDirective, selector: "[loadPLY]", usesInheritance: true, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ThPLYLoaderDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[loadPLY]',
                }]
        }], ctorParameters: () => [{ type: ThBufferGeometry, decorators: [{
                    type: Host
                }] }, { type: i0.NgZone }, { type: PLYLoaderService }] });

class BindPipe {
    transform(methodToBind, instance) {
        return methodToBind.bind(instance);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: BindPipe, deps: [], target: i0.ɵɵFactoryTarget.Pipe }); }
    static { this.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "14.0.0", version: "18.1.2", ngImport: i0, type: BindPipe, name: "bind" }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: BindPipe, decorators: [{
            type: Pipe,
            args: [{
                    name: 'bind'
                }]
        }] });

/**
 * The following code is ported from pmndrs/drei and adapted to work with Angular and ngx-three
 * Many thanks to pmndrs/drei at its contributors!
 */
const v1 = new Vector3();
const v2 = new Vector3();
const v3 = new Vector3();
function defaultCalculatePosition(el, camera, size) {
    const objectPos = v1.setFromMatrixPosition(el.matrixWorld);
    objectPos.project(camera);
    const widthHalf = size.width / 2;
    const heightHalf = size.height / 2;
    return [objectPos.x * widthHalf + widthHalf, -(objectPos.y * heightHalf) + heightHalf];
}
function isObjectBehindCamera(el, camera) {
    const objectPos = v1.setFromMatrixPosition(el.matrixWorld);
    const cameraPos = v2.setFromMatrixPosition(camera.matrixWorld);
    const deltaCamObj = objectPos.sub(cameraPos);
    const camDir = camera.getWorldDirection(v3);
    return deltaCamObj.angleTo(camDir) > Math.PI / 2;
}
function isObjectVisible(el, camera, raycaster, occlude) {
    const elPos = v1.setFromMatrixPosition(el.matrixWorld);
    const screenPos = elPos.clone();
    screenPos.project(camera);
    raycaster.setFromCamera(screenPos, camera);
    const intersects = raycaster.intersectObjects(occlude, true);
    if (intersects.length) {
        const intersectionDistance = intersects[0].distance;
        const pointDistance = elPos.distanceTo(raycaster.ray.origin);
        return pointDistance < intersectionDistance;
    }
    return true;
}
function objectScale(el, camera) {
    if (camera instanceof OrthographicCamera) {
        return camera.zoom;
    }
    else if (camera instanceof PerspectiveCamera) {
        const objectPos = v1.setFromMatrixPosition(el.matrixWorld);
        const cameraPos = v2.setFromMatrixPosition(camera.matrixWorld);
        const vFOV = (camera.fov * Math.PI) / 180;
        const dist = objectPos.distanceTo(cameraPos);
        const scaleFOV = 2 * Math.tan(vFOV / 2) * dist;
        return 1 / scaleFOV;
    }
    else {
        return 1;
    }
}
function objectZIndex(el, camera, zIndexRange) {
    if (camera instanceof PerspectiveCamera || camera instanceof OrthographicCamera) {
        const objectPos = v1.setFromMatrixPosition(el.matrixWorld);
        const cameraPos = v2.setFromMatrixPosition(camera.matrixWorld);
        const dist = objectPos.distanceTo(cameraPos);
        const A = (zIndexRange[1] - zIndexRange[0]) / (camera.far - camera.near);
        const B = zIndexRange[1] - A * camera.far;
        return Math.round(A * dist + B);
    }
    return undefined;
}
const epsilon = (value) => (Math.abs(value) < 1e-10 ? 0 : value);
function getCSSMatrix(matrix, multipliers, prepend = '') {
    let matrix3d = 'matrix3d(';
    for (let i = 0; i !== 16; i++) {
        matrix3d += epsilon(multipliers[i] * matrix.elements[i]) + (i !== 15 ? ',' : ')');
    }
    return prepend + matrix3d;
}
const getCameraCSSMatrix = ((multipliers) => (matrix) => getCSSMatrix(matrix, multipliers))([1, -1, 1, 1, 1, -1, 1, 1, 1, -1, 1, 1, 1, -1, 1, 1]);
const getObjectCSSMatrix = ((scaleMultipliers) => (matrix, factor) => getCSSMatrix(matrix, scaleMultipliers(factor), 'translate(-50%,-50%)'))((f) => [1 / f, 1 / f, 1 / f, 1, -1 / f, -1 / f, -1 / f, -1, 1 / f, 1 / f, 1 / f, 1, 1, 1, 1, 1]);
/**
 * A port of the pmndrs/drei Html component
 *
 * Add Html content to any three.js object3d node
 */
class HtmlComponent extends ThGroup {
    constructor(view, parent) {
        super(parent);
        this.view = view;
        // eslint-disable-next-line @typescript-eslint/naming-convention
        this.DoubleSide = DoubleSide;
        // eslint-disable-next-line @typescript-eslint/naming-convention
        this.FRAGMENT_SHADER = FRAGMENT_SHADER;
        // eslint-disable-next-line @typescript-eslint/naming-convention
        this.VERTEX_SHADER = VERTEX_SHADER;
        this.prepend = false; // Project content behind the canvas (default: false)
        this.center = false; // Adds a -50%/-50% css transform (default: false) [ignored in transform mode]
        this.fullscreen = false; // Aligns to the upper-left corner, fills the screen (default:false) [ignored in transform mode]
        this.eps = 0.001;
        this.sprite = false; // Renders as sprite, but only in transform mode (default=false)
        this.transform = false; // If true, applies matrix3d transformations (default=false)
        this.zIndexRange = [16777271, 0]; // Z-order range (default=[16777271, 0])
        this.onOcclude = new EventEmitter();
        /**
         * Override default positioning function. [ignored in transform mode]
         */
        this.calculatePosition = defaultCalculatePosition;
        this.as = 'div'; // Wrapping element (default: 'div')
        this.pointerEvents = 'auto';
        this.transformInnerStyles = this.computeInnerStyles();
        this.styles = null;
        this.oldZoom = 0;
        this.oldPosition = [0, 0];
        this.notOccluded = true;
        this.raycaster = inject(RAYCASTER);
    }
    ngOnInit() {
        super.ngOnInit();
        this.styles = this.computeStyles();
    }
    ngAfterViewInit() {
        this.el = document.createElement(this.as);
        this.frameSubscription = this.view.onRender.subscribe(() => this.onFrame());
        if (this.transformOuterRef) {
            this.el.appendChild(this.transformOuterRef.nativeElement);
        }
        if (this.el && !this.target) {
            this.appendElement(this.el);
        }
    }
    onResize() {
        this.styles = this.computeStyles();
    }
    ngOnChanges(changes) {
        super.ngOnChanges(changes);
        /*
        if(this.el) {
          if(changes.portal || changes.transform) {
            this.appendElement(this.el);
          }
    
          if(changes.wrapperClass) {
            this.el.className = changes.wrapperClass.currentValue ?? '';
          }
    
          if(changes.pointerEvents) {
            this.transformInnerStyles = this.computeInnerStyles();
          }
        }
        */
    }
    appendElement(el) {
        if (!this.el || !this.objRef || !this.view.hostElement || !this.view.camera) {
            return;
        }
        this.target = this.portal ?? this.view.hostElement.nativeElement;
        this.view.scene?.objRef?.updateMatrixWorld();
        if (this.transform) {
            el.style.cssText = 'position:absolute;top:0;left:0;pointer-events:none;overflow:hidden;';
        }
        else {
            const vec = this.calculatePosition(this.objRef, this.view.camera.objRef, this.getSize());
            el.style.cssText = `position:absolute;top:0;left:0;transform:translate3d(${vec[0]}px,${vec[1]}px,0);transform-origin:0 0;`;
        }
        if (this.target) {
            if (this.prepend) {
                this.target.prepend(el);
            }
            else {
                this.target.appendChild(el);
            }
        }
    }
    onFrame() {
        const camera = this.view.camera?.objRef;
        const scene = this.view.scene?.objRef;
        const group = this._objRef;
        const size = this.getSize();
        if (!camera || !group || !scene || !this.el) {
            return;
        }
        camera.updateMatrixWorld();
        group.updateWorldMatrix(true, false);
        const vec = this.transform ? this.oldPosition : this.calculatePosition(group, camera, size);
        if (this.transform ||
            Math.abs(this.oldZoom - camera.zoom) > this.eps ||
            Math.abs(this.oldPosition[0] - vec[0]) > this.eps ||
            Math.abs(this.oldPosition[1] - vec[1]) > this.eps) {
            const isBehindCamera = isObjectBehindCamera(group, camera);
            let raytraceTarget = false;
            if (typeof this.occlude === 'boolean') {
                if (this.occlude === true) {
                    raytraceTarget = [scene];
                }
            }
            else if (Array.isArray(this.occlude)) {
                raytraceTarget = this.occlude.map((item) => item.objRef ?? item);
            }
            const previouslyVisible = this.notOccluded;
            if (raytraceTarget) {
                this.notOccluded = !isBehindCamera && isObjectVisible(group, camera, this.raycaster, raytraceTarget);
            }
            else {
                this.notOccluded = !isBehindCamera;
            }
            if (previouslyVisible !== this.notOccluded) {
                if (this.onOcclude.length > 0) {
                    this.onOcclude.next(!this.notOccluded);
                }
                else {
                    this.el.style.display = this.notOccluded ? 'block' : 'none';
                }
            }
            this.el.style.zIndex = `${objectZIndex(group, camera, this.zIndexRange)}`;
            if (this.transform) {
                const [widthHalf, heightHalf] = [size.width / 2, size.height / 2];
                const fov = camera.projectionMatrix.elements[5] * heightHalf;
                const { isOrthographicCamera, top, left, bottom, right } = camera;
                const cameraMatrix = getCameraCSSMatrix(camera.matrixWorldInverse);
                const cameraTransform = isOrthographicCamera
                    ? `scale(${fov})translate(${epsilon(-(right + left) / 2)}px,${epsilon((top + bottom) / 2)}px)`
                    : `translateZ(${fov}px)`;
                let matrix = group.matrixWorld;
                if (this.sprite) {
                    matrix = camera.matrixWorldInverse.clone().transpose().copyPosition(matrix).scale(group.scale);
                    matrix.elements[3] = matrix.elements[7] = matrix.elements[11] = 0;
                    matrix.elements[15] = 1;
                }
                this.el.style.width = size.width + 'px';
                this.el.style.height = size.height + 'px';
                this.el.style.perspective = isOrthographicCamera ? '' : `${fov}px`;
                if (this.transformOuterRef && this.transformInnerRef) {
                    // eslint-disable-next-line max-len
                    this.transformOuterRef.nativeElement.style.transform = `${cameraTransform}${cameraMatrix}translate(${widthHalf}px,${heightHalf}px)`;
                    this.transformInnerRef.nativeElement.style.transform = getObjectCSSMatrix(matrix, 1 / ((this.distanceFactor || 10) / 400));
                }
            }
            else {
                const scale = this.distanceFactor === undefined ? 1 : objectScale(group, camera) * this.distanceFactor;
                this.el.style.transform = `translate3d(${vec[0]}px,${vec[1]}px,0) scale(${scale})`;
            }
            this.oldPosition = vec;
            this.oldZoom = camera.zoom;
        }
    }
    ngOnDestroy() {
        this.el?.remove();
        this.frameSubscription?.unsubscribe();
    }
    computeStyles() {
        const size = this.getSize();
        if (this.transform) {
            return {
                position: 'absolute',
                top: 0,
                left: 0,
                width: size.width + 'px',
                height: size.height + 'px',
                transformStyle: 'preserve-3d',
                pointerEvents: 'none',
            };
        }
        else {
            return {
                position: 'absolute',
                transform: this.center ? 'translate3d(-50%,-50%,0)' : 'none',
                ...(this.fullscreen && {
                    top: -size.height / 2 + 'px',
                    left: -size.width / 2 + 'px',
                    width: size.width + 'px',
                    height: size.height + 'px',
                }),
                ...this.style,
            };
        }
    }
    computeInnerStyles() {
        return { position: 'absolute', pointerEvents: this.pointerEvents };
    }
    getSize() {
        return this.view.viewPort ?? this.view.hostElement.nativeElement.getBoundingClientRect() ?? { width: 0, height: 0 };
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: HtmlComponent, deps: [{ token: ThView }, { token: ThObject3D, skipSelf: true }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.1.2", type: HtmlComponent, selector: "th-html", inputs: { prepend: "prepend", center: "center", fullscreen: "fullscreen", portal: "portal", distanceFactor: "distanceFactor", sprite: "sprite", transform: "transform", zIndexRange: "zIndexRange", style: "style", className: "className", occlude: "occlude", calculatePosition: "calculatePosition", as: "as", wrapperClass: "wrapperClass", pointerEvents: "pointerEvents" }, outputs: { onOcclude: "onOcclude" }, viewQueries: [{ propertyName: "transformOuterRef", first: true, predicate: ["outerRef"], descendants: true }, { propertyName: "transformInnerRef", first: true, predicate: ["innerRef"], descendants: true }], usesInheritance: true, usesOnChanges: true, ngImport: i0, template: "<div [ngStyle]=\"styles\" #outerRef *ngIf=\"transform;  else noTransform\" (onResize)=\"onResize()\">\n    <div #innerRef [ngStyle]=\"transformInnerStyles\" >\n        <div [style]=\"style\" [className]=\"className\">\n            <ng-container *ngTemplateOutlet=\"tempOutlet\" ></ng-container>\n        </div>\n    </div>\n</div>\n<ng-template #noTransform>\n    <div [ngStyle]=\"styles\" [className]=\"className\" #outerRef>\n        <ng-container *ngTemplateOutlet=\"tempOutlet\" ></ng-container>\n    </div>\n</ng-template>\n\n<ng-template #tempOutlet>\n    <ng-content></ng-content>\n</ng-template>\n", dependencies: [{ kind: "directive", type: i3.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i3.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }, { kind: "directive", type: i3.NgStyle, selector: "[ngStyle]", inputs: ["ngStyle"] }, { kind: "directive", type: ThRenderDirective, selector: "[beforeRender], [onResize], [renderOnDemand]", inputs: ["renderOnDemand"], outputs: ["beforeRender", "onResize"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: HtmlComponent, decorators: [{
            type: Component,
            args: [{ selector: 'th-html', changeDetection: ChangeDetectionStrategy.OnPush, template: "<div [ngStyle]=\"styles\" #outerRef *ngIf=\"transform;  else noTransform\" (onResize)=\"onResize()\">\n    <div #innerRef [ngStyle]=\"transformInnerStyles\" >\n        <div [style]=\"style\" [className]=\"className\">\n            <ng-container *ngTemplateOutlet=\"tempOutlet\" ></ng-container>\n        </div>\n    </div>\n</div>\n<ng-template #noTransform>\n    <div [ngStyle]=\"styles\" [className]=\"className\" #outerRef>\n        <ng-container *ngTemplateOutlet=\"tempOutlet\" ></ng-container>\n    </div>\n</ng-template>\n\n<ng-template #tempOutlet>\n    <ng-content></ng-content>\n</ng-template>\n" }]
        }], ctorParameters: () => [{ type: ThView }, { type: ThObject3D, decorators: [{
                    type: SkipSelf
                }] }], propDecorators: { prepend: [{
                type: Input
            }], center: [{
                type: Input
            }], fullscreen: [{
                type: Input
            }], portal: [{
                type: Input
            }], distanceFactor: [{
                type: Input
            }], sprite: [{
                type: Input
            }], transform: [{
                type: Input
            }], zIndexRange: [{
                type: Input
            }], style: [{
                type: Input
            }], className: [{
                type: Input
            }], occlude: [{
                type: Input
            }], onOcclude: [{
                type: Output
            }], calculatePosition: [{
                type: Input
            }], as: [{
                type: Input
            }], wrapperClass: [{
                type: Input
            }], pointerEvents: [{
                type: Input
            }], transformOuterRef: [{
                type: ViewChild,
                args: ['outerRef']
            }], transformInnerRef: [{
                type: ViewChild,
                args: ['innerRef']
            }] } });
const VERTEX_SHADER = /* glsl */ `
/*
  This shader is from the THREE's SpriteMaterial.
  We need to turn the backing plane into a Sprite
  (make it always face the camera) if "transfrom" 
  is false. 
*/
#include <common>
void main() {
  vec2 center = vec2(0., 1.);
  float rotation = 0.0;
  
  // This is somewhat arbitrary, but it seems to work well
  // Need to figure out how to derive this dynamically if it even matters
  float size = 0.03;
  vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
  vec2 scale;
  scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
  scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
  bool isPerspective = isPerspectiveMatrix( projectionMatrix );
  if ( isPerspective ) scale *= - mvPosition.z;
  vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale * size;
  vec2 rotatedPosition;
  rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
  rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
  mvPosition.xy += rotatedPosition;
  gl_Position = projectionMatrix * mvPosition;
}
`;
const FRAGMENT_SHADER = /* glsl */ `
void main() {
  gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0);
}
`;

class RefByIdDirective {
    constructor(host, parent) {
        this.host = host;
        this.parent = parent;
        this.host.autoAddToParent = false;
        this.host.autoDispose = false;
        this.host.objRef = createLazyObject3DProxy();
    }
    set refById(id) {
        this.id = id;
        this.subscription?.unsubscribe();
        this.subscription = this.parent.objRef$.subscribe((obj) => {
            this.parentObj = obj;
            this.applyRef();
        });
    }
    applyRef() {
        if (!this.parentObj || this.id === undefined) {
            return;
        }
        const ref = this.findById(this.parentObj, this.id);
        if (ref) {
            this.setRef(this.host, ref);
        }
    }
    findById(parentObj, id) {
        if ((parentObj.name ?? parentObj.uuid) === id) {
            return parentObj;
        }
        for (const child of parentObj.children) {
            const object = this.findById(child, id);
            if (object !== undefined) {
                return object;
            }
        }
        return undefined;
    }
    setRef(host, ref) {
        const objRef = host.objRef;
        if (!objRef) {
            return;
        }
        if (isLazyObject3dProxy(objRef)) {
            objRef.objRef = ref;
            host.objRef = objRef;
        }
    }
    ngOnDestroy() {
        this.subscription?.unsubscribe();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: RefByIdDirective, deps: [{ token: ThObject3D, self: true }, { token: ThObject3D, skipSelf: true }], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "18.1.2", type: RefByIdDirective, selector: "[refById]", inputs: { refById: "refById" }, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: RefByIdDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[refById]'
                }]
        }], ctorParameters: () => [{ type: ThObject3D, decorators: [{
                    type: Self
                }] }, { type: ThObject3D, decorators: [{
                    type: SkipSelf
                }] }], propDecorators: { refById: [{
                type: Input
            }] } });

/**
 * creates a plane from a normal vector3 and a constant:
 * https://threejs.org/docs/#api/en/math/Plane
 */
class PlanePipe {
    transform(normal, constant) {
        return new Plane(new Vector3(...normal), constant);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: PlanePipe, deps: [], target: i0.ɵɵFactoryTarget.Pipe }); }
    static { this.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "14.0.0", version: "18.1.2", ngImport: i0, type: PlanePipe, name: "plane" }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: PlanePipe, decorators: [{
            type: Pipe,
            args: [{
                    name: 'plane'
                }]
        }] });

class NgxThreeModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: NgxThreeModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "18.1.2", ngImport: i0, type: NgxThreeModule, declarations: [ThCanvas,
            ThView,
            ThObjectBase,
            ThMaterialBase,
            ThWrapperBase,
            ThGLTFLoaderDirective,
            ThGLTFLoaderPipe,
            ThObjLoaderPipe,
            ThObjLoaderDirective,
            ThFBXLoaderDirective,
            ThFBXLoaderPipe,
            ThPLYLoaderDirective,
            ThPLYLoaderPipe,
            RaycasterEventDirective,
            ColorPipe,
            Vector2Pipe,
            Vector3Pipe,
            Vector4Pipe,
            ClonePipe,
            FogPipe,
            BindPipe,
            PlanePipe,
            StatsDirective,
            ThRenderDirective,
            // texture loaders
            ThTextureLoaderDirective,
            ThTextureLoaderPipe,
            ThCubeTextureLoaderDirective,
            ThCubeTextureLoaderPipe,
            // compressed texture loaders
            ThDDSLoaderDirective,
            ThDDSLoaderPipe,
            ThKTXLoaderDirective,
            ThKTXLoaderPipe,
            ThKTX2LoaderDirective,
            ThKTX2LoaderPipe,
            ThPVRLoaderDirective,
            ThPVRLoaderPipe,
            // data texture loaders
            ThEXRLoaderDirective,
            ThEXRLoaderPipe,
            ThRGBELoaderDirective,
            ThRGBELoaderPipe,
            ThRGBMLoaderDirective,
            ThRGBMLoaderPipe,
            ThTGALoaderDirective,
            ThTGALoaderPipe,
            ThLogLuvLoaderDirective,
            ThLogLuvLoaderPipe,
            // directives
            RefByIdDirective,
            RendererProviderDirective,
            //extras
            HtmlComponent], imports: [NgxThreeGeneratedModule, CommonModule], exports: [NgxThreeGeneratedModule,
            ThCanvas,
            ThView,
            ThGLTFLoaderDirective,
            ThGLTFLoaderPipe,
            ThObjLoaderDirective,
            ThObjLoaderPipe,
            ThFBXLoaderDirective,
            ThFBXLoaderPipe,
            ThPLYLoaderDirective,
            ThPLYLoaderPipe,
            RaycasterEventDirective,
            ColorPipe,
            Vector2Pipe,
            Vector3Pipe,
            Vector4Pipe,
            ClonePipe,
            FogPipe,
            BindPipe,
            PlanePipe,
            ThRenderDirective,
            StatsDirective,
            // texture loaders
            ThTextureLoaderDirective,
            ThTextureLoaderPipe,
            ThCubeTextureLoaderDirective,
            ThCubeTextureLoaderPipe,
            // compressed texture loaders
            ThDDSLoaderDirective,
            ThDDSLoaderPipe,
            ThKTXLoaderDirective,
            ThKTXLoaderPipe,
            ThKTX2LoaderDirective,
            ThKTX2LoaderPipe,
            ThPVRLoaderDirective,
            ThPVRLoaderPipe,
            // data texture loaders
            ThEXRLoaderDirective,
            ThEXRLoaderPipe,
            ThRGBELoaderDirective,
            ThRGBELoaderPipe,
            ThRGBMLoaderDirective,
            ThRGBMLoaderPipe,
            ThTGALoaderDirective,
            ThTGALoaderPipe,
            ThLogLuvLoaderDirective,
            ThLogLuvLoaderPipe,
            // directives
            RefByIdDirective,
            RendererProviderDirective,
            // extra
            HtmlComponent] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: NgxThreeModule, imports: [NgxThreeGeneratedModule, CommonModule, NgxThreeGeneratedModule] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: NgxThreeModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        ThCanvas,
                        ThView,
                        ThObjectBase,
                        ThMaterialBase,
                        ThWrapperBase,
                        ThGLTFLoaderDirective,
                        ThGLTFLoaderPipe,
                        ThObjLoaderPipe,
                        ThObjLoaderDirective,
                        ThFBXLoaderDirective,
                        ThFBXLoaderPipe,
                        ThPLYLoaderDirective,
                        ThPLYLoaderPipe,
                        RaycasterEventDirective,
                        ColorPipe,
                        Vector2Pipe,
                        Vector3Pipe,
                        Vector4Pipe,
                        ClonePipe,
                        FogPipe,
                        BindPipe,
                        PlanePipe,
                        StatsDirective,
                        ThRenderDirective,
                        // texture loaders
                        ThTextureLoaderDirective,
                        ThTextureLoaderPipe,
                        ThCubeTextureLoaderDirective,
                        ThCubeTextureLoaderPipe,
                        // compressed texture loaders
                        ThDDSLoaderDirective,
                        ThDDSLoaderPipe,
                        ThKTXLoaderDirective,
                        ThKTXLoaderPipe,
                        ThKTX2LoaderDirective,
                        ThKTX2LoaderPipe,
                        ThPVRLoaderDirective,
                        ThPVRLoaderPipe,
                        // data texture loaders
                        ThEXRLoaderDirective,
                        ThEXRLoaderPipe,
                        ThRGBELoaderDirective,
                        ThRGBELoaderPipe,
                        ThRGBMLoaderDirective,
                        ThRGBMLoaderPipe,
                        ThTGALoaderDirective,
                        ThTGALoaderPipe,
                        ThLogLuvLoaderDirective,
                        ThLogLuvLoaderPipe,
                        // directives
                        RefByIdDirective,
                        RendererProviderDirective,
                        //extras
                        HtmlComponent,
                    ],
                    imports: [NgxThreeGeneratedModule, CommonModule],
                    exports: [
                        NgxThreeGeneratedModule,
                        ThCanvas,
                        ThView,
                        ThGLTFLoaderDirective,
                        ThGLTFLoaderPipe,
                        ThObjLoaderDirective,
                        ThObjLoaderPipe,
                        ThFBXLoaderDirective,
                        ThFBXLoaderPipe,
                        ThPLYLoaderDirective,
                        ThPLYLoaderPipe,
                        RaycasterEventDirective,
                        ColorPipe,
                        Vector2Pipe,
                        Vector3Pipe,
                        Vector4Pipe,
                        ClonePipe,
                        FogPipe,
                        BindPipe,
                        PlanePipe,
                        ThRenderDirective,
                        StatsDirective,
                        // texture loaders
                        ThTextureLoaderDirective,
                        ThTextureLoaderPipe,
                        ThCubeTextureLoaderDirective,
                        ThCubeTextureLoaderPipe,
                        // compressed texture loaders
                        ThDDSLoaderDirective,
                        ThDDSLoaderPipe,
                        ThKTXLoaderDirective,
                        ThKTXLoaderPipe,
                        ThKTX2LoaderDirective,
                        ThKTX2LoaderPipe,
                        ThPVRLoaderDirective,
                        ThPVRLoaderPipe,
                        // data texture loaders
                        ThEXRLoaderDirective,
                        ThEXRLoaderPipe,
                        ThRGBELoaderDirective,
                        ThRGBELoaderPipe,
                        ThRGBMLoaderDirective,
                        ThRGBMLoaderPipe,
                        ThTGALoaderDirective,
                        ThTGALoaderPipe,
                        ThLogLuvLoaderDirective,
                        ThLogLuvLoaderPipe,
                        // directives
                        RefByIdDirective,
                        RendererProviderDirective,
                        // extra
                        HtmlComponent,
                    ],
                }]
        }] });

function createThProviderArray(cls, baseCls) {
    const providers = [];
    if (ThObject3D.isPrototypeOf(baseCls) || Object3D === baseCls) {
        providers.push({ provide: ThObject3D, useExisting: forwardRef(() => cls) });
        if (ThCamera.isPrototypeOf(baseCls) || ThCamera === baseCls) {
            providers.push({ provide: ThCamera, useExisting: forwardRef(() => cls) });
        }
    }
}
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
function createObj3DProviderArray(type) {
    return [{ provide: ThObject3D, useExisting: forwardRef(() => type) }];
}
function createCameraProviderArray(type) {
    return [
        { provide: ThObject3D, useExisting: forwardRef(() => type) },
        { provide: ThCamera, useExisting: forwardRef(() => type) }
    ];
}

/*
 * Public API Surface of ngx-three
 */

/**
 * Generated bundle index. Do not edit.
 */

export { BindPipe, CSS2D_RENDERER, CSS3D_RENDERER, ClonePipe, ColorPipe, CubeTextureLoaderService, DDSLoaderService, DRACOLoaderService, EXRLoaderService, FBXLoaderService, FRAGMENT_SHADER, FogPipe, GLTFLoaderService, HOST_ELEMENT, HtmlComponent, KTX2LoaderService, KTXLoaderService, LogLuvLoaderService, NgxThreeGeneratedModule, NgxThreeModule, OBJLoaderService, PLYLoaderService, PVRLoaderService, PlanePipe, RENDERER_PROVIDERS, RGBELoaderService, RGBMLoaderService, RaycasterEventDirective, RefByIdDirective, RendererProviderDirective, StatsDirective, TGALoaderService, TextureLoaderService, ThAfterimagePass, ThAmbientLight, ThAnimationLoopService, ThArcballControls, ThArrayCamera, ThArrowHelper, ThAsyncLoaderBaseDirective, ThAsyncLoaderBasePipe, ThAsyncLoaderService, ThAudio, ThAudioListener, ThAxesHelper, ThBatchedMesh, ThBloomPass, ThBokehPass, ThBone, ThBox3Helper, ThBoxGeometry, ThBoxHelper, ThBoxLineGeometry, ThBufferGeometry, ThCSS2DObject, ThCSS2DObjectGen, ThCSS3DObject, ThCSS3DObjectGen, ThCallbackLoaderBaseDirective, ThCallbackLoaderBasePipe, ThCallbackLoaderService, ThCamera, ThCameraHelper, ThCanvas, ThCanvasTexture, ThCapsuleGeometry, ThCircleGeometry, ThClearMaskPass, ThClearPass, ThCompressedArrayTexture, ThCompressedCubeTexture, ThCompressedTexture, ThConeGeometry, ThConvexGeometry, ThCubeCamera, ThCubeTexture, ThCubeTextureLoaderDirective, ThCubeTextureLoaderPipe, ThCubeTexturePass, ThCylinderGeometry, ThDDSLoaderDirective, ThDDSLoaderPipe, ThData3DTexture, ThDataArrayTexture, ThDataTexture, ThDecalGeometry, ThDepthTexture, ThDirectionalLight, ThDirectionalLightHelper, ThDodecahedronGeometry, ThDotScreenPass, ThDragControls, ThEXRLoaderDirective, ThEXRLoaderPipe, ThEdgesGeometry, ThEffectComposer, ThEffectComposerGen, ThEngineService, ThExtrudeGeometry, ThFBXLoaderDirective, ThFBXLoaderPipe, ThFilmPass, ThFirstPersonControls, ThFlyControls, ThFramebufferTexture, ThGLTFLoaderDirective, ThGLTFLoaderPipe, ThGlitchPass, ThGridHelper, ThGroup, ThHalftonePass, ThHemisphereLight, ThHemisphereLightHelper, ThIcosahedronGeometry, ThInstancedBufferGeometry, ThInstancedMesh, ThKTX2LoaderDirective, ThKTX2LoaderPipe, ThKTXLoaderDirective, ThKTXLoaderPipe, ThLOD, ThLUTPass, ThLatheGeometry, ThLight, ThLightProbe, ThLine, ThLineBasicMaterial, ThLineDashedMaterial, ThLineLoop, ThLineSegments, ThLogLuvLoaderDirective, ThLogLuvLoaderPipe, ThMapControls, ThMaskPass, ThMaterial, ThMesh, ThMeshBasicMaterial, ThMeshDepthMaterial, ThMeshDistanceMaterial, ThMeshLambertMaterial, ThMeshMatcapMaterial, ThMeshNormalMaterial, ThMeshPhongMaterial, ThMeshPhysicalMaterial, ThMeshStandardMaterial, ThMeshToonMaterial, ThObjLoaderDirective, ThObjLoaderPipe, ThObject3D, ThOctahedronGeometry, ThOrbitControls, ThOrthographicCamera, ThOutlinePass, ThOutputPass, ThPLYLoaderDirective, ThPLYLoaderPipe, ThPVRLoaderDirective, ThPVRLoaderPipe, ThParametricGeometry, ThPass, ThPerspectiveCamera, ThPlaneGeometry, ThPlaneHelper, ThPointLight, ThPointLightHelper, ThPointerLockControls, ThPoints, ThPointsMaterial, ThPolarGridHelper, ThPolyhedronGeometry, ThPositionalAudio, ThRGBELoaderDirective, ThRGBELoaderPipe, ThRGBMLoaderDirective, ThRGBMLoaderPipe, ThRawShaderMaterial, ThRectAreaLight, ThRenderDirective, ThRenderPass, ThRenderPassGen, ThRingGeometry, ThRoundedBoxGeometry, ThSAOPass, ThSMAAPass, ThSSAARenderPass, ThSSAOPass, ThSSRPass, ThSavePass, ThScene, ThShaderMaterial, ThShaderPass, ThShadowMaterial, ThShapeGeometry, ThSkeletonHelper, ThSkinnedMesh, ThSphereGeometry, ThSpotLight, ThSpotLightHelper, ThSprite, ThSpriteMaterial, ThStereoCamera, ThTAARenderPass, ThTGALoaderDirective, ThTGALoaderPipe, ThTeapotGeometry, ThTetrahedronGeometry, ThTextGeometry, ThTexture, ThTextureLoaderDirective, ThTextureLoaderPipe, ThTexturePass, ThTorusGeometry, ThTorusKnotGeometry, ThTrackballControls, ThTransformControls, ThTransformControlsGen, ThTubeGeometry, ThUnrealBloomPass, ThVideoTexture, ThView, ThWireframeGeometry, VERTEX_SHADER, Vector2Pipe, Vector3Pipe, Vector4Pipe, WEBGL_RENDERER, createCameraProviderArray, createLazyObject3DProxy, createObj3DProviderArray, createThProviderArray, isLazyObject3dProxy, provideCSS2dRenderer, provideCSS3dRenderer, provideWebGLRenderer, provideWebGPURenderer };
//# sourceMappingURL=ngx-three.mjs.map
