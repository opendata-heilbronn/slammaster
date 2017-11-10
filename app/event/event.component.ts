import { Component, OnInit } from '@angular/core';
//import { ColorService } from "";

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {

  primarycolor:any = "#F00";
  accentcolor = "#0F0";
  backgroundcolor = "#00F";

  //constructor(private colorService: ColorService) { }

  ngOnInit() {
    //this.primarycolor = this.colorService.primarycolor;
  }

}
