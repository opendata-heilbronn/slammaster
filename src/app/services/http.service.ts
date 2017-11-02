import { Injectable } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import {HttpClient} from '@angular/common/http';

import { BrowserModule } from '@angular/platform-browser';

@Injectable()
export class HttpService
{
 
  constructor(private http: HttpClient )
  {
  }

  Get<T> (url:string, options: any): Promise<T[]>  {
    return new Promise<T[]>((resolve, reject) => {

      this.http.get(url).subscribe(data => {
        var results = data['results'];
        var typed = new Array<T>();

        results.forEach(element => {
          typed.push(element as T);
        });

        resolve(typed);
      });

    });
  }
 
}
