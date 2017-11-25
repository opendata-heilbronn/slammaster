import { Component, OnInit } from '@angular/core';
import { PoetModel } from './poet.model';
import { PoetService } from './poet.service';
import { DialogService } from './../services/dialog.service';
import { FsService } from './../services/fs.service';
import { retry } from 'rxjs/operator/retry';
import { Guid } from './../guid';


@Component({
    selector: 'app-poets',
    templateUrl: './poets.component.html',
    styleUrls: ['./poets.component.css']
})
export class PoetsComponent implements OnInit {
  
    poets: PoetModel[];

    selectedPoet: PoetModel;

    selectFile() {
        var file = this.dialogService.showOpenDialog({ properties: ['openFile'] });

        if (file.length == 0)
            return;

        var binary = this.fsService.readFileSync(file[0]);
        this.selectedPoet.Image = new Buffer(binary).toString('base64');
    }

    addPoet () {
        this.selectedPoet = new PoetModel();
        this.selectedPoet.Id = Guid.newGuid();

        this.poets.push(this.selectedPoet);
    }


    clonePoet (poet: PoetModel) {
        this.selectedPoet = new PoetModel();
        this.selectedPoet.Id = Guid.newGuid();
        this.selectedPoet.Name = poet.Name;
        this.selectedPoet.Slam = poet.Slam;
        this.selectedPoet.Image = poet.Image;

        this.poets.push(this.selectedPoet);
    }

    deletePoet (poet: PoetModel) {
        this.poets = this.poets.filter(item => item.Id != poet.Id);
        this.selectedPoet = this.poets[0];
    }


    selectPoet (poet: PoetModel) {
        if (poet == null && this.poets.length > 0) {
            this.selectedPoet = this.poets[0];
            return;
        }

        this.selectedPoet = poet;
    }

    constructor(
        private poetService: PoetService, 
        private dialogService: DialogService,
        private fsService: FsService) { }

    ngOnInit() {
        this.poetService.Read(null).subscribe(result => {
            this.poets = result;
            this.selectedPoet = this.poets[0];
        });
    }
}
