import {Injectable} from '@angular/core';
import {Subject} from "rxjs/Subject";
import {BehaviorSubject} from "rxjs/BehaviorSubject";

export enum NavigationState {
    Open,
    Closed
}

@Injectable()
export class NavigationService {

    public navigationState: Subject<NavigationState>;

    constructor() {
        this.navigationState = new BehaviorSubject(NavigationState.Closed);
    }

    public open(): void {
        this.navigationState.next(NavigationState.Open);
    }

    public close(): void {
        this.navigationState.next(NavigationState.Closed);
    }
}
