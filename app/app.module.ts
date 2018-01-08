import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {HttpClientModule} from "@angular/common/http";
import {NavigationStart, Router} from "@angular/router";

import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {AppRoutingModule} from "./app-routing.module";

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
import { ColorPickerModule } from "ngx-color-picker";

import { FormsModule } from '@angular/forms';
import { AppComponent } from "./app.component";
import { TemplatesComponent } from './templates/templates.component';

import { AppCommonModule } from './common/common.module';
import { AdminModule } from './admin/admin.module';
import { ProjectorModule } from './projector/projector.module';
import { KdkTemplatesModule } from './templates/templates-kdk/templates-kdk.module';

// import {ColorPickerModule} from 'angular4-color-picker';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        AppRoutingModule,

        AppCommonModule,
        AdminModule,
        ProjectorModule
    ],
    providers: [
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {

    constructor(private router: Router) {
        this.router.events.subscribe(event => {
            if (event instanceof NavigationStart) {
                console.info("navigation start");
            }
        });
    }
}
