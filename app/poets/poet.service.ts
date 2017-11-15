import { Injectable } from '@angular/core';
import { PoetModel } from './poet.model';

import {Subject} from 'rxjs/Subject';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class PoetService {

  private sampleData :PoetModel[];


  Read(options:any) : Observable<PoetModel[]> {
      var observable = new Subject<PoetModel[]>();

      window.setTimeout(() => {
        observable.next(this.sampleData);
      }, 500);

      return observable;
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
