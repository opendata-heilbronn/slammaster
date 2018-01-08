import { Component, OnInit, ViewContainerRef} from '@angular/core';
import { ColorPickerService } from 'ngx-color-picker';
//import { ColorService } from "";

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {

  primarycolor = '#F00';
  accentcolor = '#0F0';
  backgroundcolor = '#00F';

  //constructor(private colorService: ColorService) { }
  constructor(public vcRef: ViewContainerRef) { }

  ngOnInit() {
    //this.primarycolor = this.colorService.primarycolor;
  }

}
