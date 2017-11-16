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
import {AppComponent} from "./app.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {PoetsComponent} from "./poets/poets.component";
import {EventComponent} from "./event/event.component";
import {NavigationComponent} from "./navigation/navigation.component";
import {PoetService} from "./poets/poet.service";
import {NavigationService} from "./navigation/navigation.service";
import { GroupsComponent } from './groups/groups.component';

// import {ColorPickerModule} from 'angular4-color-picker';

@NgModule({
    declarations: [
        AppComponent,
        DashboardComponent,
        PoetsComponent,
        EventComponent,
        NavigationComponent,
        GroupsComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        MatSidenavModule, MatIconModule, MatTableModule, MatToolbarModule, MatTooltipModule,
        MatInputModule, MatListModule, MatButtonModule,
//    ColorPickerModule,
        HttpClientModule,
        AppRoutingModule
    ],
    providers: [
        PoetService,
        NavigationService
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
