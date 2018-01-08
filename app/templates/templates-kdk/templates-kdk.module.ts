import {NgModule} from "@angular/core";
import { CommonModule } from "@angular/common"

import { KdkIntroComponent } from './01-intro/intro.component';
import { KdkTemplatePoetComponent } from './02-poet/kdk-template-poet.component';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        KdkIntroComponent,
        KdkTemplatePoetComponent
    ],
    exports: [
        KdkIntroComponent,
        KdkTemplatePoetComponent
    ]
})
export class KdkTemplatesModule {

    constructor() {
    }
}
