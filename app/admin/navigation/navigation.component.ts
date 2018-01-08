import {Component, OnInit, ViewChild} from "@angular/core";
import {NavigationCategory} from "./NavigationCategory";
import {MatSidenav} from "@angular/material";
import {NavigationService, NavigationState} from "./navigation.service";
import {TitleService} from "./title.service";
import {NavigationItem} from "./NavigationItem";

@Component({
    selector: 'app-navigation',
    templateUrl: './navigation.component.html',
    styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
    @ViewChild(MatSidenav)
    private sidenav: MatSidenav;

    links: NavigationCategory[] = [
        {
            name: "Allgemeines",
            items: [
                {
                    link: '/dashboard',
                    text: 'Player'
                }
            ]
        },
        {
            name: "Stammdaten",
            items: [
                {
                    link: '/event',
                    text: 'Veranstaltung'
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
            ]
        }
    ];

    constructor(private navigationService: NavigationService, private titleService: TitleService) {
    }

    ngOnInit() {
        this.navigationService.navigationState.subscribe(nextState => {
            if(nextState === NavigationState.Open) {
                this.sidenav.open();
            } else if(nextState === NavigationState.Closed) {
                this.sidenav.close();
            }
        })
    }

    public onLinkClick(link: NavigationItem): void {
        this.navigationService.close();
    }
}
