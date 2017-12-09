import { Component, OnInit } from '@angular/core';
import { NavigationService } from '../navigation/navigation.service';
import { TitleService } from '../navigation/title.service';
import { StorageService } from '../services/storage.service';

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
        private storageService: StorageService) { }

    ngOnInit() {
    }

    startFullscreen() {
        this.projectorWindow = window.open('projector/index.html');
    }

    save(): void {
        this.storageService.save();
    }

    openNavigation() {
        this.navigation.open();
    }
}
