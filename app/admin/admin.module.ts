import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from "@angular/common/http";

import {
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatSidenavModule,
  MatTableModule,
  MatToolbarModule,
  MatTooltipModule,
  MatButtonModule
} from "@angular/material";
import { FormsModule } from '@angular/forms';
import { ColorPickerModule } from "ngx-color-picker";


import { TemplatesModule } from './../templates/templates.module';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EventComponent } from './event/event.component';
import { PoetsComponent } from './poets/poets.component';
import { GroupsComponent } from './groups/groups.component';
import { GroupViewComponent } from './groups/group-view/group-view.component';
import { AddGroupComponent } from './groups/add-group/add-group.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { NavigationComponent } from './navigation/navigation.component';
import { NavigationService } from './navigation/navigation.service';
import { TitleService } from './navigation/title.service';
import { ExportService } from '../common/services/export.service';
import { DialogService } from '../common/services/dialog.service';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    TemplatesModule,

    MatSidenavModule, MatIconModule, MatTableModule, MatToolbarModule, MatTooltipModule,
    MatInputModule, MatListModule, MatButtonModule,
    ColorPickerModule,
//    ColorPickerModule,
    HttpClientModule,
    FormsModule,
  ],
  declarations: [
    AdminComponent,
    DashboardComponent,
    EventComponent,
    PoetsComponent,
    GroupsComponent, GroupViewComponent, AddGroupComponent,
    ToolbarComponent,
    NavigationComponent
  ],
  providers: [
    NavigationService,
    TitleService,
    ExportService,
    DialogService
  ]
})
export class AdminModule { }
