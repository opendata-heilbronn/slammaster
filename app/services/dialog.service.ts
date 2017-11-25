import { Injectable } from '@angular/core';

declare var electron;


@Injectable()
export class DialogService {

  private dialog :any = electron.remote.dialog;

  showOpenDialog(properties:any) :any[] {
    return this.dialog.showOpenDialog(properties);
  }

  constructor() { }

  
}
