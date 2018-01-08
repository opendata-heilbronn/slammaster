import {Component, Input} from '@angular/core';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { Observable } from 'rxjs';

@Component({
    selector: 'kdk-intro',
    templateUrl: './intro.component.html',
    styleUrls: ['./intro.component.css']
})
export class KdkIntroComponent implements OnInit {

    showLogo: boolean = true;
    showText: boolean = false;

    constructor() {}

    ngOnInit() {
        const source = Observable.interval(30000);
        const subscribe = source.subscribe(val => {
            this.showLogo = !this.showLogo;
            this.showText = !this.showText;
        });
    }
}
