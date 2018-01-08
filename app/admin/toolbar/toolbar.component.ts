import { Component, OnInit } from '@angular/core';
import { NavigationService } from '../navigation/navigation.service';
import { TitleService } from '../navigation/title.service';
import { ExportService } from './../../common/services/export.service';

@Component({
    selector: 'app-toolbar',
    templateUrl: './toolbar.component.html',
    styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
    private projectorWindow = null;

    constructor(
        private navigation: NavigationService,
        private title: TitleService,
        private storageService: ExportService) { }

    ngOnInit() {
    }

    startFullscreen() {
        this.projectorWindow = window.open('#/projector');
    }

    save(): void {
        this.storageService.export([]);
    }

    openNavigation() {
        this.navigation.open();
    }
}
