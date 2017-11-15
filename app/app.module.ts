import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {RouterModule, Routes, Router, NavigationStart} from '@angular/router'

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';

import { 
  MatSidenavModule, MatIconModule, MatTableModule, MatToolbarModule, MatTooltipModule, 
  MatInputModule, MatListModule
} from '@angular/material';

// import {ColorPickerModule} from 'angular4-color-picker';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PoetsComponent } from './poets/poets.component';
import { EventComponent } from './event/event.component';
import { NavigationComponent } from './navigation/navigation.component'; 

import { PoetModel } from './poets/poet.model';
import { PoetService } from './poets/poet.service';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    PoetsComponent,
    EventComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSidenavModule, MatIconModule, MatTableModule, MatToolbarModule, MatTooltipModule, 
    MatInputModule, MatListModule,
//    ColorPickerModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    PoetService
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
