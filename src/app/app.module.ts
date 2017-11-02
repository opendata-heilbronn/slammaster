import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import { RouterModule, Routes, Router, NavigationStart } from '@angular/router';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatIconModule, MatTableModule, MatToolbarModule, MatTooltipModule} from '@angular/material';

import {ServicesModule} from './services/services.module';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { SvnHttpInterceptor } from './svn-http-interceptor';


const appRoutes: Routes = [
  { path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    data: { title: 'Dashboard' }
  }
];



@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatIconModule, MatTableModule, MatToolbarModule, MatTooltipModule,
    HttpClientModule,
    ServicesModule,
    RouterModule.forRoot(
      appRoutes,
      {
        enableTracing: false
      }
    )
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: SvnHttpInterceptor,
      multi: true,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 

  constructor(private router: Router) {
     this.router.events.subscribe(event => {
      if(event instanceof NavigationStart) {
        console.info("navigation start");
      }
     });
  }
}
