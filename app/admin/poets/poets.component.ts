import { Component, OnInit } from '@angular/core';
import { DialogService } from './../../common/services/dialog.service';
import { FsService } from './../../common/services/fs.service';
import { Guid } from './../../common/guid';


import { PoetModel } from './../../common/models/poet.model';
import { PoetService } from './../../common/repositories/poet.service';

@Component({
    selector: 'app-poets',
    templateUrl: './poets.component.html',
    styleUrls: ['./poets.component.css']
})
export class PoetsComponent implements OnInit {

    poets: PoetModel[] = [];

    selectedPoet: PoetModel;

    selectFile() {
        const file = this.dialogService.showOpenDialog({ properties: ['openFile'] });

        if (file.length === 0)
            return;

        const binary = this.fsService.readFileSync(file[0]);
        this.selectedPoet.Image = new Buffer(binary).toString('base64');
    }

    addPoet() {
        /*
        this.selectedPoet = {
            Id: Guid.newGuid()
        };
        
        this.poets.push(this.selectedPoet);
        */
    }


    clonePoet(poet: PoetModel) {
        this.selectedPoet = new PoetModel();
        this.selectedPoet.Id = Guid.newGuid();
        this.selectedPoet.Name = poet.Name;
        this.selectedPoet.Slam = poet.Slam;
        this.selectedPoet.Image = poet.Image;

        this.poets.push(this.selectedPoet);
    }

    deletePoet(poet: PoetModel) {
        this.poets = this.poets.filter(item => item.Id !== poet.Id);
        this.selectedPoet = this.poets[0];
    }


    selectPoet(poet: PoetModel): void {
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
            console.log(result);
            this.poets = result;
            this.selectedPoet = this.poets[0];
        });
    }
}
