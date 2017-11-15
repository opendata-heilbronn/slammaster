import { Component, OnInit } from '@angular/core';
import { PoetModel } from './poet.model';
import { PoetService } from './poet.service';

@Component({
  selector: 'app-poets',
  templateUrl: './poets.component.html',
  styleUrls: ['./poets.component.css']
})
export class PoetsComponent implements OnInit {

  poets :PoetModel[];

  constructor(private poetService :PoetService) { }

  ngOnInit() {
    this.poetService.Read(null).subscribe(result => {
      this.poets = result;
      console.info(this.poets);
    });

  }

}
