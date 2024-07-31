import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js';
import { ThCallbackLoaderService } from '../ThCallbackLoaderBase';
import { BufferGeometry } from 'three';
import * as i0 from "@angular/core";
export interface DRACODecoderConfig {
    type: 'js' | 'wasm';
}
export declare class DRACOLoaderService extends ThCallbackLoaderService<BufferGeometry> {
    readonly clazz: typeof DRACOLoader;
    protected decoderPath: string;
    protected decoderConfig?: DRACODecoderConfig;
    protected workerLimit?: number;
    protected reuseInstance: boolean;
    protected instance?: DRACOLoader;
    setDecoderPath(path: string): void;
    setDecoderConfig(config: DRACODecoderConfig): void;
    setWorkerLimit(limit: number): void;
    setReuseInstance(reuse: boolean): void;
    createLoaderInstance(): DRACOLoader;
    static ɵfac: i0.ɵɵFactoryDeclaration<DRACOLoaderService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<DRACOLoaderService>;
}
