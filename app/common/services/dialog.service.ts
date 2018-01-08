import { Injectable } from '@angular/core';

declare var node_electron;


@Injectable()
export class DialogService {

  private dialog :any; // = node_electron.remote.dialog;

  showOpenDialog(properties:any) :any[] {
    return this.dialog.showOpenDialog(properties);
  }

  showSaveDialog(properties:any, callback: any) :any[] {
    return this.dialog.showSaveDialog(properties, callback);
  }

  constructor() { }

  
}
