import { Injectable } from '@angular/core';
import { PoetModel } from './poet.model';

import { Observable } from 'rxjs/Rx';

@Injectable()
export class PoetService {

  private sampleData :PoetModel[];


  Read(options:any) : Observable<PoetModel[]> {
      return Observable.of(this.sampleData);
  }


  constructor() {
    this.sampleData = [
      {
        Name: "Gandalf",
        Slam: "White Wizard Poetry"
      },
      {
        Name: "Frodo Baggins",
        Slam: "Hobbit Slam"
      }
    ]
  }
}
