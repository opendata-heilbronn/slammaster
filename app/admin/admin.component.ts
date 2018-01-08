import {Component, OnInit} from '@angular/core';
import { window } from 'rxjs/operators/window';

@Component({
    selector: 'app-admin',
    templateUrl: './admin.component.html',
    styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
    projectorWindow = null;

    constructor() {}
    
    ngOnInit(): void {
    }
}
