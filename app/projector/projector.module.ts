import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectorRoutingModule } from './projector-routing.module';
import { ProjectorComponent } from './projector.component';
import { TemplatesModule } from '../templates/templates.module';

@NgModule({
  imports: [
    CommonModule,
    ProjectorRoutingModule,
    TemplatesModule,
  ],
  declarations: [
    ProjectorComponent
  ]
})
export class ProjectorModule { }
