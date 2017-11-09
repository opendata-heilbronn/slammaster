import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule, Routes, Router, NavigationStart} from '@angular/router';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
    MatSidenavModule, MatIconModule, MatTableModule, MatToolbarModule, MatTooltipModule,
    MatListModule
} from '@angular/material';

import {AppComponent} from './app.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {PoetsComponent} from './poets/poets.component';
import {NavigationComponent} from './navigation/navigation.component';

const appRoutes: Routes = [
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    },
    {
        path: 'dashboard',
        component: DashboardComponent,
        data: {title: 'Dashboard'}
    }
];


@NgModule({
    declarations: [
        AppComponent,
        DashboardComponent,
        PoetsComponent,
        NavigationComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        MatIconModule,
        MatTableModule,
        MatToolbarModule,
        MatTooltipModule,
        MatSidenavModule,
        MatListModule,
        HttpClientModule,
        RouterModule.forRoot(
            appRoutes,
            {
                enableTracing: false
            }
        )
    ],
    providers: [],
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
