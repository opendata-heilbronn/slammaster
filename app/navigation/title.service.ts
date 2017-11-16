import {Injectable} from '@angular/core';
import {Subject} from "rxjs/Subject";
import {BehaviorSubject} from "rxjs/BehaviorSubject";

@Injectable()
export class TitleService {
    public title: Subject<string>;

    constructor() {
        this.title = new BehaviorSubject("");
    }

    public changeTitle(title: string): void {
        this.title.next(title);
    }
}
