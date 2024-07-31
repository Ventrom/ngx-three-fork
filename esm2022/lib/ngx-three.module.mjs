import { NgModule } from '@angular/core';
import { RaycasterEventDirective } from './events/raycaster.events.directive';
import { NgxThreeGeneratedModule } from './generated/ngx-three-generated.module';
import { ThDDSLoaderDirective, ThDDSLoaderPipe } from './loaders/compressed-texture/ThDDSLoader';
import { ThKTX2LoaderDirective, ThKTX2LoaderPipe } from './loaders/compressed-texture/ThKTX2Loader';
import { ThKTXLoaderDirective, ThKTXLoaderPipe } from './loaders/compressed-texture/ThKTXLoader';
import { ThPVRLoaderDirective, ThPVRLoaderPipe } from './loaders/compressed-texture/ThPVRLoader';
import { ThEXRLoaderDirective, ThEXRLoaderPipe } from './loaders/data-texture/ThEXRLoader';
import { ThRGBELoaderDirective, ThRGBELoaderPipe } from './loaders/data-texture/ThRGBELoader';
import { ThRGBMLoaderDirective, ThRGBMLoaderPipe } from './loaders/data-texture/ThRGBMLoader';
import { ThTGALoaderDirective, ThTGALoaderPipe } from './loaders/data-texture/ThTGALoader';
import { ThCubeTextureLoaderDirective, ThCubeTextureLoaderPipe } from './loaders/ThCubeTextureLoader';
import { ThGLTFLoaderDirective, ThGLTFLoaderPipe } from './loaders/ThGLTFLoader';
import { ThTextureLoaderDirective, ThTextureLoaderPipe } from './loaders/ThTextureLoader';
import { ClonePipe } from './pipes/clone.pipe';
import { ColorPipe } from './pipes/color.pipe';
import { FogPipe } from './pipes/fog.pipe';
import { Vector2Pipe, Vector3Pipe, Vector4Pipe } from './pipes/vector.pipe';
import { ThRenderDirective } from './renderer/th-render.directive';
import { StatsDirective } from './stats/stats.directive';
import { ThObjLoaderDirective, ThObjLoaderPipe } from './loaders/ThOBJLoader';
import { ThCanvas } from './ThCanvas';
import { ThMaterialBase } from './ThMaterialBase';
import { ThObjectBase } from './ThObjectBase';
import { ThView } from './ThView';
import { ThWrapperBase } from './ThWrapperBase';
import { ThFBXLoaderDirective, ThFBXLoaderPipe } from './loaders/ThFBXLoader';
import { ThLogLuvLoaderDirective, ThLogLuvLoaderPipe } from './loaders/data-texture/ThLogLuvLoader';
import { ThPLYLoaderDirective, ThPLYLoaderPipe } from './loaders/ThPLYLoader';
import { BindPipe } from './pipes/bind.pipe';
import { HtmlComponent } from './extra/web/html.component';
import { CommonModule } from '@angular/common';
import { RefByIdDirective } from './directives/ref-by-id.directive';
import { PlanePipe } from './pipes/plane.pipe';
import { RendererProviderDirective } from './renderer/renderer-providers';
import * as i0 from "@angular/core";
export class NgxThreeModule {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LXRocmVlLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL25neC10aHJlZS9zcmMvbGliL25neC10aHJlZS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUM5RSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUNqRixPQUFPLEVBQUUsb0JBQW9CLEVBQUUsZUFBZSxFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFDakcsT0FBTyxFQUFFLHFCQUFxQixFQUFFLGdCQUFnQixFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFDcEcsT0FBTyxFQUFFLG9CQUFvQixFQUFFLGVBQWUsRUFBRSxNQUFNLDBDQUEwQyxDQUFDO0FBQ2pHLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxlQUFlLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQUNqRyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsZUFBZSxFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFDM0YsT0FBTyxFQUFFLHFCQUFxQixFQUFFLGdCQUFnQixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDOUYsT0FBTyxFQUFFLHFCQUFxQixFQUFFLGdCQUFnQixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDOUYsT0FBTyxFQUFFLG9CQUFvQixFQUFFLGVBQWUsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQzNGLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSx1QkFBdUIsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQ3RHLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ2pGLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDJCQUEyQixDQUFD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QkFBb0I7d0JBQ3BCLGVBQWU7d0JBQ2YscUJBQXFCO3dCQUNyQixnQkFBZ0I7d0JBQ2hCLHFCQUFxQjt3QkFDckIsZ0JBQWdCO3dCQUNoQixvQkFBb0I7d0JBQ3BCLGVBQWU7d0JBQ2YsdUJBQXVCO3dCQUN2QixrQkFBa0I7d0JBQ2xCLGFBQWE7d0JBQ2IsZ0JBQWdCO3dCQUNoQix5QkFBeUI7d0JBQ3pCLFFBQVE7d0JBQ1IsYUFBYTtxQkFDZDtpQkFDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSYXljYXN0ZXJFdmVudERpcmVjdGl2ZSB9IGZyb20gJy4vZXZlbnRzL3JheWNhc3Rlci5ldmVudHMuZGlyZWN0aXZlJztcbmltcG9ydCB7IE5neFRocmVlR2VuZXJhdGVkTW9kdWxlIH0gZnJvbSAnLi9nZW5lcmF0ZWQvbmd4LXRocmVlLWdlbmVyYXRlZC5tb2R1bGUnO1xuaW1wb3J0IHsgVGhERFNMb2FkZXJEaXJlY3RpdmUsIFRoRERTTG9hZGVyUGlwZSB9IGZyb20gJy4vbG9hZGVycy9jb21wcmVzc2VkLXRleHR1cmUvVGhERFNMb2FkZXInO1xuaW1wb3J0IHsgVGhLVFgyTG9hZGVyRGlyZWN0aXZlLCBUaEtUWDJMb2FkZXJQaXBlIH0gZnJvbSAnLi9sb2FkZXJzL2NvbXByZXNzZWQtdGV4dHVyZS9UaEtUWDJMb2FkZXInO1xuaW1wb3J0IHsgVGhLVFhMb2FkZXJEaXJlY3RpdmUsIFRoS1RYTG9hZGVyUGlwZSB9IGZyb20gJy4vbG9hZGVycy9jb21wcmVzc2VkLXRleHR1cmUvVGhLVFhMb2FkZXInO1xuaW1wb3J0IHsgVGhQVlJMb2FkZXJEaXJlY3RpdmUsIFRoUFZSTG9hZGVyUGlwZSB9IGZyb20gJy4vbG9hZGVycy9jb21wcmVzc2VkLXRleHR1cmUvVGhQVlJMb2FkZXInO1xuaW1wb3J0IHsgVGhFWFJMb2FkZXJEaXJlY3RpdmUsIFRoRVhSTG9hZGVyUGlwZSB9IGZyb20gJy4vbG9hZGVycy9kYXRhLXRleHR1cmUvVGhFWFJMb2FkZXInO1xuaW1wb3J0IHsgVGhSR0JFTG9hZGVyRGlyZWN0aXZlLCBUaFJHQkVMb2FkZXJQaXBlIH0gZnJvbSAnLi9sb2FkZXJzL2RhdGEtdGV4dHVyZS9UaFJHQkVMb2FkZXInO1xuaW1wb3J0IHsgVGhSR0JNTG9hZGVyRGlyZWN0aXZlLCBUaFJHQk1Mb2FkZXJQaXBlIH0gZnJvbSAnLi9sb2FkZXJzL2RhdGEtdGV4dHVyZS9UaFJHQk1Mb2FkZXInO1xuaW1wb3J0IHsgVGhUR0FMb2FkZXJEaXJlY3RpdmUsIFRoVEdBTG9hZGVyUGlwZSB9IGZyb20gJy4vbG9hZGVycy9kYXRhLXRleHR1cmUvVGhUR0FMb2FkZXInO1xuaW1wb3J0IHsgVGhDdWJlVGV4dHVyZUxvYWRlckRpcmVjdGl2ZSwgVGhDdWJlVGV4dHVyZUxvYWRlclBpcGUgfSBmcm9tICcuL2xvYWRlcnMvVGhDdWJlVGV4dHVyZUxvYWRlcic7XG5pbXBvcnQgeyBUaEdMVEZMb2FkZXJEaXJlY3RpdmUsIFRoR0xURkxvYWRlclBpcGUgfSBmcm9tICcuL2xvYWRlcnMvVGhHTFRGTG9hZGVyJztcbmltcG9ydCB7IFRoVGV4dHVyZUxvYWRlckRpcmVjdGl2ZSwgVGhUZXh0dXJlTG9hZGVyUGlwZSB9IGZyb20gJy4vbG9hZGVycy9UaFRleHR1cmVMb2FkZXInO1xuaW1wb3J0IHsgQ2xvbmVQaXBlIH0gZnJvbSAnLi9waXBlcy9jbG9uZS5waXBlJztcbmltcG9ydCB7IENvbG9yUGlwZSB9IGZyb20gJy4vcGlwZXMvY29sb3IucGlwZSc7XG5pbXBvcnQgeyBGb2dQaXBlIH0gZnJvbSAnLi9waXBlcy9mb2cucGlwZSc7XG5pbXBvcnQgeyBWZWN0b3IyUGlwZSwgVmVjdG9yM1BpcGUsIFZlY3RvcjRQaXBlIH0gZnJvbSAnLi9waXBlcy92ZWN0b3IucGlwZSc7XG5pbXBvcnQgeyBUaFJlbmRlckRpcmVjdGl2ZSB9IGZyb20gJy4vcmVuZGVyZXIvdGgtcmVuZGVyLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBTdGF0c0RpcmVjdGl2ZSB9IGZyb20gJy4vc3RhdHMvc3RhdHMuZGlyZWN0aXZlJztcbmltcG9ydCB7IFRoT2JqTG9hZGVyRGlyZWN0aXZlLCBUaE9iakxvYWRlclBpcGUgfSBmcm9tICcuL2xvYWRlcnMvVGhPQkpMb2FkZXInO1xuaW1wb3J0IHsgVGhDYW52YXMgfSBmcm9tICcuL1RoQ2FudmFzJztcbmltcG9ydCB7IFRoTWF0ZXJpYWxCYXNlIH0gZnJvbSAnLi9UaE1hdGVyaWFsQmFzZSc7XG5pbXBvcnQgeyBUaE9iamVjdEJhc2UgfSBmcm9tICcuL1RoT2JqZWN0QmFzZSc7XG5pbXBvcnQgeyBUaFZpZXcgfSBmcm9tICcuL1RoVmlldyc7XG5pbXBvcnQgeyBUaFdyYXBwZXJCYXNlIH0gZnJvbSAnLi9UaFdyYXBwZXJCYXNlJztcbmltcG9ydCB7IFRoRkJYTG9hZGVyRGlyZWN0aXZlLCBUaEZCWExvYWRlclBpcGUgfSBmcm9tICcuL2xvYWRlcnMvVGhGQlhMb2FkZXInO1xuaW1wb3J0IHsgVGhMb2dMdXZMb2FkZXJEaXJlY3RpdmUsIFRoTG9nTHV2TG9hZGVyUGlwZSB9IGZyb20gJy4vbG9hZGVycy9kYXRhLXRleHR1cmUvVGhMb2dMdXZMb2FkZXInO1xuaW1wb3J0IHsgVGhQTFlMb2FkZXJEaXJlY3RpdmUsIFRoUExZTG9hZGVyUGlwZSB9IGZyb20gJy4vbG9hZGVycy9UaFBMWUxvYWRlcic7XG5pbXBvcnQgeyBCaW5kUGlwZSB9IGZyb20gJy4vcGlwZXMvYmluZC5waXBlJztcbmltcG9ydCB7IEh0bWxDb21wb25lbnQgfSBmcm9tICcuL2V4dHJhL3dlYi9odG1sLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgUmVmQnlJZERpcmVjdGl2ZSB9IGZyb20gJy4vZGlyZWN0aXZlcy9yZWYtYnktaWQuZGlyZWN0aXZlJztcbmltcG9ydCB7IFBsYW5lUGlwZSB9IGZyb20gJy4vcGlwZXMvcGxhbmUucGlwZSc7XG5pbXBvcnQgeyBSZW5kZXJlclByb3ZpZGVyRGlyZWN0aXZlIH0gZnJvbSAnLi9yZW5kZXJlci9yZW5kZXJlci1wcm92aWRlcnMnO1xuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBUaENhbnZhcyxcbiAgICBUaFZpZXcsXG4gICAgVGhPYmplY3RCYXNlLFxuICAgIFRoTWF0ZXJpYWxCYXNlLFxuICAgIFRoV3JhcHBlckJhc2UsXG4gICAgVGhHTFRGTG9hZGVyRGlyZWN0aXZlLFxuICAgIFRoR0xURkxvYWRlclBpcGUsXG4gICAgVGhPYmpMb2FkZXJQaXBlLFxuICAgIFRoT2JqTG9hZGVyRGlyZWN0aXZlLFxuICAgIFRoRkJYTG9hZGVyRGlyZWN0aXZlLFxuICAgIFRoRkJYTG9hZGVyUGlwZSxcbiAgICBUaFBMWUxvYWRlckRpcmVjdGl2ZSxcbiAgICBUaFBMWUxvYWRlclBpcGUsXG4gICAgUmF5Y2FzdGVyRXZlbnREaXJlY3RpdmUsXG4gICAgQ29sb3JQaXBlLFxuICAgIFZlY3RvcjJQaXBlLFxuICAgIFZlY3RvcjNQaXBlLFxuICAgIFZlY3RvcjRQaXBlLFxuICAgIENsb25lUGlwZSxcbiAgICBGb2dQaXBlLFxuICAgIEJpbmRQaXBlLFxuICAgIFBsYW5lUGlwZSxcbiAgICBTdGF0c0RpcmVjdGl2ZSxcbiAgICBUaFJlbmRlckRpcmVjdGl2ZSxcbiAgICAvLyB0ZXh0dXJlIGxvYWRlcnNcbiAgICBUaFRleHR1cmVMb2FkZXJEaXJlY3RpdmUsXG4gICAgVGhUZXh0dXJlTG9hZGVyUGlwZSxcbiAgICBUaEN1YmVUZXh0dXJlTG9hZGVyRGlyZWN0aXZlLFxuICAgIFRoQ3ViZVRleHR1cmVMb2FkZXJQaXBlLFxuICAgIC8vIGNvbXByZXNzZWQgdGV4dHVyZSBsb2FkZXJzXG4gICAgVGhERFNMb2FkZXJEaXJlY3RpdmUsXG4gICAgVGhERFNMb2FkZXJQaXBlLFxuICAgIFRoS1RYTG9hZGVyRGlyZWN0aXZlLFxuICAgIFRoS1RYTG9hZGVyUGlwZSxcbiAgICBUaEtUWDJMb2FkZXJEaXJlY3RpdmUsXG4gICAgVGhLVFgyTG9hZGVyUGlwZSxcbiAgICBUaFBWUkxvYWRlckRpcmVjdGl2ZSxcbiAgICBUaFBWUkxvYWRlclBpcGUsXG4gICAgLy8gZGF0YSB0ZXh0dXJlIGxvYWRlcnNcbiAgICBUaEVYUkxvYWRlckRpcmVjdGl2ZSxcbiAgICBUaEVYUkxvYWRlclBpcGUsXG4gICAgVGhSR0JFTG9hZGVyRGlyZWN0aXZlLFxuICAgIFRoUkdCRUxvYWRlclBpcGUsXG4gICAgVGhSR0JNTG9hZGVyRGlyZWN0aXZlLFxuICAgIFRoUkdCTUxvYWRlclBpcGUsXG4gICAgVGhUR0FMb2FkZXJEaXJlY3RpdmUsXG4gICAgVGhUR0FMb2FkZXJQaXBlLFxuICAgIFRoTG9nTHV2TG9hZGVyRGlyZWN0aXZlLFxuICAgIFRoTG9nTHV2TG9hZGVyUGlwZSxcbiAgICAvLyBkaXJlY3RpdmVzXG4gICAgUmVmQnlJZERpcmVjdGl2ZSxcbiAgICBSZW5kZXJlclByb3ZpZGVyRGlyZWN0aXZlLFxuICAgIC8vZXh0cmFzXG4gICAgSHRtbENvbXBvbmVudCxcbiAgXSxcbiAgaW1wb3J0czogW05neFRocmVlR2VuZXJhdGVkTW9kdWxlLCBDb21tb25Nb2R1bGVdLFxuICBleHBvcnRzOiBbXG4gICAgTmd4VGhyZWVHZW5lcmF0ZWRNb2R1bGUsXG4gICAgVGhDYW52YXMsXG4gICAgVGhWaWV3LFxuICAgIFRoR0xURkxvYWRlckRpcmVjdGl2ZSxcbiAgICBUaEdMVEZMb2FkZXJQaXBlLFxuICAgIFRoT2JqTG9hZGVyRGlyZWN0aXZlLFxuICAgIFRoT2JqTG9hZGVyUGlwZSxcbiAgICBUaEZCWExvYWRlckRpcmVjdGl2ZSxcbiAgICBUaEZCWExvYWRlclBpcGUsXG4gICAgVGhQTFlMb2FkZXJEaXJlY3RpdmUsXG4gICAgVGhQTFlMb2FkZXJQaXBlLFxuICAgIFJheWNhc3RlckV2ZW50RGlyZWN0aXZlLFxuICAgIENvbG9yUGlwZSxcbiAgICBWZWN0b3IyUGlwZSxcbiAgICBWZWN0b3IzUGlwZSxcbiAgICBWZWN0b3I0UGlwZSxcbiAgICBDbG9uZVBpcGUsXG4gICAgRm9nUGlwZSxcbiAgICBCaW5kUGlwZSxcbiAgICBQbGFuZVBpcGUsXG4gICAgVGhSZW5kZXJEaXJlY3RpdmUsXG4gICAgU3RhdHNEaXJlY3RpdmUsXG4gICAgLy8gdGV4dHVyZSBsb2FkZXJzXG4gICAgVGhUZXh0dXJlTG9hZGVyRGlyZWN0aXZlLFxuICAgIFRoVGV4dHVyZUxvYWRlclBpcGUsXG4gICAgVGhDdWJlVGV4dHVyZUxvYWRlckRpcmVjdGl2ZSxcbiAgICBUaEN1YmVUZXh0dXJlTG9hZGVyUGlwZSxcbiAgICAvLyBjb21wcmVzc2VkIHRleHR1cmUgbG9hZGVyc1xuICAgIFRoRERTTG9hZGVyRGlyZWN0aXZlLFxuICAgIFRoRERTTG9hZGVyUGlwZSxcbiAgICBUaEtUWExvYWRlckRpcmVjdGl2ZSxcbiAgICBUaEtUWExvYWRlclBpcGUsXG4gICAgVGhLVFgyTG9hZGVyRGlyZWN0aXZlLFxuICAgIFRoS1RYMkxvYWRlclBpcGUsXG4gICAgVGhQVlJMb2FkZXJEaXJlY3RpdmUsXG4gICAgVGhQVlJMb2FkZXJQaXBlLFxuICAgIC8vIGRhdGEgdGV4dHVyZSBsb2FkZXJzXG4gICAgVGhFWFJMb2FkZXJEaXJlY3RpdmUsXG4gICAgVGhFWFJMb2FkZXJQaXBlLFxuICAgIFRoUkdCRUxvYWRlckRpcmVjdGl2ZSxcbiAgICBUaFJHQkVMb2FkZXJQaXBlLFxuICAgIFRoUkdCTUxvYWRlckRpcmVjdGl2ZSxcbiAgICBUaFJHQk1Mb2FkZXJQaXBlLFxuICAgIFRoVEdBTG9hZGVyRGlyZWN0aXZlLFxuICAgIFRoVEdBTG9hZGVyUGlwZSxcbiAgICBUaExvZ0x1dkxvYWRlckRpcmVjdGl2ZSxcbiAgICBUaExvZ0x1dkxvYWRlclBpcGUsXG4gICAgLy8gZGlyZWN0aXZlc1xuICAgIFJlZkJ5SWREaXJlY3RpdmUsXG4gICAgUmVuZGVyZXJQcm92aWRlckRpcmVjdGl2ZSxcbiAgICAvLyBleHRyYVxuICAgIEh0bWxDb21wb25lbnQsXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIE5neFRocmVlTW9kdWxlIHt9XG4iXX0=