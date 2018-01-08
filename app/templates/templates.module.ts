import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TemplatesComponent } from './templates.component';
import { KdkTemplatesModule } from './templates-kdk/templates-kdk.module';

@NgModule({
  imports: [
    CommonModule,
    KdkTemplatesModule
  ],
  declarations: [
      TemplatesComponent
  ],
  exports: [
      TemplatesComponent
  ]
})
export class TemplatesModule { }
