import {Component} from '@angular/core';
import {NavigationService} from "./navigation/navigation.service";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    projectorWindow = null;

    constructor(private navigation: NavigationService) {}

    startFullscreen() {
        this.projectorWindow = window.open("projector/index.html");
    }

    openNavigation() {
        this.navigation.open();
    }
}
