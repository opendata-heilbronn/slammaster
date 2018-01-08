import {Component, Input} from '@angular/core';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
    selector: 'templates',
    templateUrl: './templates.component.html',
    styleUrls: ['./templates.component.css']
})
export class TemplatesComponent implements OnInit {

    @Input('s')
    slide: any = null;

    constructor() {}

    ngOnInit() {
        console.log(this.slide);
    }
}
