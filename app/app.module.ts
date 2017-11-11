import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule, Routes, Router, NavigationStart } from '@angular/router';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule, MatIconModule, MatTableModule, MatToolbarModule, MatTooltipModule, MatInputModule } from '@angular/material';
import {ColorPickerModule} from 'angular4-color-picker';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PoetsComponent } from './poets/poets.component';
import { EventComponent } from './event/event.component';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/poets',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    data: { title: 'Dashboard' }
  },
  {
    path: 'event',
    component: EventComponent,
    data: { title: 'Veranstaltung' }
  },
  {
    path: 'poets',
    component: PoetsComponent,
    data: { title: 'Poeten' }
  }
];


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    PoetsComponent,
    EventComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatIconModule, MatTableModule, MatToolbarModule, MatTooltipModule, MatInputModule,
    ColorPickerModule,
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
