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
import { FormsModule } from '@angular/forms';
import {AppComponent} from "./app.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {PoetsComponent} from "./poets/poets.component";
import {EventComponent} from "./event/event.component";
import {NavigationComponent} from "./navigation/navigation.component";
import { GroupsComponent } from './groups/groups.component';
import { ToolbarComponent } from './toolbar/toolbar.component';

import {PoetService} from "./poets/poet.service";

import {NavigationService} from "./navigation/navigation.service";
import {TitleService} from "./navigation/title.service";
import { DialogService } from './services/dialog.service';
import { FsService } from './services/fs.service';

// import {ColorPickerModule} from 'angular4-color-picker';

@NgModule({
    declarations: [
        AppComponent,
        DashboardComponent,
        PoetsComponent,
        EventComponent,
        NavigationComponent,
        GroupsComponent,
        ToolbarComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        MatSidenavModule, MatIconModule, MatTableModule, MatToolbarModule, MatTooltipModule,
        MatInputModule, MatListModule, MatButtonModule,
//    ColorPickerModule,
        HttpClientModule,
        AppRoutingModule,
        FormsModule
    ],
    providers: [
        PoetService,
        NavigationService,
        TitleService,
        DialogService,
        FsService
    ],
    bootstrap: [AppComponent]
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
