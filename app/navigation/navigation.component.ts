import {Component, OnInit} from '@angular/core';
import {NavigationItem} from "./NavigationItem";

@Component({
    selector: 'app-navigation',
    templateUrl: './navigation.component.html',
    styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

    links: NavigationItem[] = [
        {
            link: '/player',
            text: 'Player'
        },
        {
            link: '/events',
            text: 'Veranstaltungen'
        },
        {
            link: '/groups',
            text: 'Gruppen'
        },
        {
            link: '/poets',
            text: 'Poeten'
        },
        {
            link: '/files',
            text: 'Dateien'
        }
    ];

    constructor() {
    }

    ngOnInit() {
    }

}
