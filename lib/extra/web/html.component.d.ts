/**
 * The following code is ported from pmndrs/drei and adapted to work with Angular and ngx-three
 * Many thanks to pmndrs/drei at its contributors!
 */
import { AfterViewInit, EventEmitter, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { Camera, Object3D } from 'three';
import { ThGroup, ThObject3D } from '../../generated';
import { NgChanges } from '../../util';
import { ThView } from '../../ThView';
import * as i0 from "@angular/core";
declare function defaultCalculatePosition(el: Object3D, camera: Camera, size: {
    width: number;
    height: number;
}): number[];
export type CalculatePosition = typeof defaultCalculatePosition;
type PointerEventsProperties = 'auto' | 'none' | 'visiblePainted' | 'visibleFill' | 'visibleStroke' | 'visible' | 'painted' | 'fill' | 'stroke' | 'all' | 'inherit';
/**
 * A port of the pmndrs/drei Html component
 *
 * Add Html content to any three.js object3d node
 */
export declare class HtmlComponent extends ThGroup implements OnInit, OnDestroy, OnChanges, AfterViewInit {
    private view;
    protected readonly DoubleSide: 2;
    protected readonly FRAGMENT_SHADER = "\nvoid main() {\n  gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0);\n}\n";
    protected readonly VERTEX_SHADER = "\n/*\n  This shader is from the THREE's SpriteMaterial.\n  We need to turn the backing plane into a Sprite\n  (make it always face the camera) if \"transfrom\" \n  is false. \n*/\n#include <common>\nvoid main() {\n  vec2 center = vec2(0., 1.);\n  float rotation = 0.0;\n  \n  // This is somewhat arbitrary, but it seems to work well\n  // Need to figure out how to derive this dynamically if it even matters\n  float size = 0.03;\n  vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );\n  vec2 scale;\n  scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );\n  scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );\n  bool isPerspective = isPerspectiveMatrix( projectionMatrix );\n  if ( isPerspective ) scale *= - mvPosition.z;\n  vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale * size;\n  vec2 rotatedPosition;\n  rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;\n  rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;\n  mvPosition.xy += rotatedPosition;\n  gl_Position = projectionMatrix * mvPosition;\n}\n";
    prepend: boolean;
    center: boolean;
    fullscreen: boolean;
    eps: number;
    portal?: HTMLElement;
    distanceFactor?: number;
    sprite: boolean;
    transform: boolean;
    zIndexRange: [number, number];
    style?: Partial<CSSStyleDeclaration>;
    className?: string;
    occlude?: Object3D[] | ThObject3D[] | boolean;
    onOcclude: EventEmitter<boolean>;
    /**
     * Override default positioning function. [ignored in transform mode]
     */
    calculatePosition: CalculatePosition;
    as: string;
    wrapperClass?: string;
    pointerEvents: PointerEventsProperties;
    protected transformInnerStyles: {
        position: string;
        pointerEvents: PointerEventsProperties;
    };
    protected styles: Record<string, any> | null;
    private oldZoom;
    private oldPosition;
    private notOccluded;
    private transformOuterRef?;
    private transformInnerRef?;
    private el?;
    private target?;
    private frameSubscription?;
    private raycaster;
    constructor(view: ThView, parent: ThObject3D);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    protected onResize(): void;
    ngOnChanges(changes: NgChanges<HtmlComponent>): void;
    private appendElement;
    onFrame(): void;
    ngOnDestroy(): void;
    private computeStyles;
    private computeInnerStyles;
    private getSize;
    static ɵfac: i0.ɵɵFactoryDeclaration<HtmlComponent, [null, { skipSelf: true; }]>;
    static ɵcmp: i0.ɵɵComponentDeclaration<HtmlComponent, "th-html", never, { "prepend": { "alias": "prepend"; "required": false; }; "center": { "alias": "center"; "required": false; }; "fullscreen": { "alias": "fullscreen"; "required": false; }; "portal": { "alias": "portal"; "required": false; }; "distanceFactor": { "alias": "distanceFactor"; "required": false; }; "sprite": { "alias": "sprite"; "required": false; }; "transform": { "alias": "transform"; "required": false; }; "zIndexRange": { "alias": "zIndexRange"; "required": false; }; "style": { "alias": "style"; "required": false; }; "className": { "alias": "className"; "required": false; }; "occlude": { "alias": "occlude"; "required": false; }; "calculatePosition": { "alias": "calculatePosition"; "required": false; }; "as": { "alias": "as"; "required": false; }; "wrapperClass": { "alias": "wrapperClass"; "required": false; }; "pointerEvents": { "alias": "pointerEvents"; "required": false; }; }, { "onOcclude": "onOcclude"; }, never, ["*"], false, never>;
}
export declare const VERTEX_SHADER = "\n/*\n  This shader is from the THREE's SpriteMaterial.\n  We need to turn the backing plane into a Sprite\n  (make it always face the camera) if \"transfrom\" \n  is false. \n*/\n#include <common>\nvoid main() {\n  vec2 center = vec2(0., 1.);\n  float rotation = 0.0;\n  \n  // This is somewhat arbitrary, but it seems to work well\n  // Need to figure out how to derive this dynamically if it even matters\n  float size = 0.03;\n  vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );\n  vec2 scale;\n  scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );\n  scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );\n  bool isPerspective = isPerspectiveMatrix( projectionMatrix );\n  if ( isPerspective ) scale *= - mvPosition.z;\n  vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale * size;\n  vec2 rotatedPosition;\n  rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;\n  rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;\n  mvPosition.xy += rotatedPosition;\n  gl_Position = projectionMatrix * mvPosition;\n}\n";
export declare const FRAGMENT_SHADER = "\nvoid main() {\n  gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0);\n}\n";
export {};
