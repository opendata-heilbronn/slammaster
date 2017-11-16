import {Injectable} from '@angular/core';
import {Subject} from "rxjs/Subject";
import {BehaviorSubject} from "rxjs/BehaviorSubject";
import {ActivatedRoute, NavigationEnd, Router} from "@angular/router";

@Injectable()
export class TitleService {
    public title: Subject<string>;

    constructor(private router: Router, private activatedRoute: ActivatedRoute) {
        this.title = new BehaviorSubject("");
        this.router.events
            .filter(event => event instanceof NavigationEnd)
            .map(() => this.activatedRoute)
            .map(route => {
                while(route.firstChild) route = route.firstChild;
                return route;
            })
            .filter(route => route.outlet === 'primary')
            .mergeMap(route => route.data)
            .subscribe(routeData => this.title.next(routeData.title));
    }
}
