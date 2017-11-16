import { Component, OnInit } from '@angular/core';
import { PoetModel } from './poet.model';
import { PoetService } from './poet.service';
import { DialogService } from './../dialog.service';


@Component({
  selector: 'app-poets',
  templateUrl: './poets.component.html',
  styleUrls: ['./poets.component.css']
})
export class PoetsComponent implements OnInit {


  poets :PoetModel[];

  selectFile() {
    this.dialogService.showOpenDialog({properties: ['openFile', 'openDirectory', 'multiSelections']});
  }

  constructor(private poetService :PoetService, private dialogService :DialogService) { }

  ngOnInit() {
    this.poetService.Read(null).subscribe(result => {
      this.poets = result;
      console.info(this.poets);
    });

  }

}
