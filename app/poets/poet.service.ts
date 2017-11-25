import { Injectable } from '@angular/core';
import { PoetModel } from './poet.model';

import { Guid } from './../guid';
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
        Id: Guid.newGuid(),
        Name: "Gandalf",
        Slam: "White Wizard Poetry",
        Image: null
      },
      {
        Id: Guid.newGuid(),
        Name: "Frodo Baggins",
        Slam: "Hobbit Slam",
        Image: null
      }
    ]
  }
}
