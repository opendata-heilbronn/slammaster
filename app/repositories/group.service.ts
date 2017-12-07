import { Injectable } from '@angular/core';
import { GroupModel } from './../models/group.model';
import { PoetModel } from './../models/poet.model';

import { Guid } from './../guid';
import { Observable } from 'rxjs/Rx';
import { EINPROGRESS } from 'constants';

import { PoetService } from './poet.service';

@Injectable()
export class GroupService {

    private sampleData :GroupModel[];

    private generateSampleData() {
        this.poetService.Read(null).subscribe(poets => {
            this.sampleData = [
                {
                    Id: Guid.newGuid(),
                    Name: "Gruppe 1",
                    Poets: poets
                },
                {
                    Id: Guid.newGuid(),
                    Name: "Gruppe 2",
                    Poets: poets
                }
            ];
        })
    }

    Read(options:any) : Observable<GroupModel[]> {
        return Observable.of(this.sampleData);
    }

    constructor(private poetService: PoetService) {
        this.generateSampleData();
    }
}
