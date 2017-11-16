import { Component, OnInit } from '@angular/core';
import { PoetModel } from './poet.model';
import { PoetService } from './poet.service';

declare var electron;

@Component({
  selector: 'app-poets',
  templateUrl: './poets.component.html',
  styleUrls: ['./poets.component.css']
})
export class PoetsComponent implements OnInit {


  poets :PoetModel[];

  selectFile() {
    let dialog = electron.remote.dialog;
    dialog.showOpenDialog({properties: ['openFile', 'openDirectory', 'multiSelections']})
  }

  constructor(private poetService :PoetService) { }

  ngOnInit() {
    this.poetService.Read(null).subscribe(result => {
      this.poets = result;
      console.info(this.poets);
    });

  }

}
