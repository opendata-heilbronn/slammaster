import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  slides: any[];


  select (slide: any): void {
    this.slides.forEach(item => item.$selected = false);
    slide.$selected = true;
  }

  constructor() { }

  ngOnInit() {
    this.slides = [
      {
        component: 'intro'
      },
      {
        component: 'poet'
      }
    ]
  }

}
