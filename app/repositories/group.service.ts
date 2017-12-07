import { Injectable } from '@angular/core';
import { GroupModel } from './../models/group.model';
import { PoetModel } from './../models/poet.model';

import { Guid } from './../guid';
import { Observable } from 'rxjs/Rx';
import { EINPROGRESS } from 'constants';

import { PoetService } from './poet.service';
import { Subject } from 'rxjs/Subject';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class GroupService {

    private data: GroupModel[];
    private subject: Subject<GroupModel[]>;

    constructor(private poetService: PoetService) {
        this.generateSampleData().subscribe(() => {
            this.subject = new BehaviorSubject(this.data);
        });
    }

    Read(options: any): Observable<GroupModel[]> {
        return this.subject;
    }

    ReadGroup(id: string): Observable<GroupModel> {
        const group = this.data.find(g => g.Id === id);
        return group ? Observable.of({...group}) : Observable.throw(new Error('Group not found'));
    }

    AddGroup(group: GroupModel): void {
        this.data.push(group);
    }

    AddPoet(id: string, poet: PoetModel): Observable<GroupModel> {
        const group = this.data.find(g => g.Id === id);
        group.Poets.push(poet);
        return Observable.of(group);

    }

    CreateGroup(name: string): Observable<GroupModel> {
        this.data.push({
            Id: Guid.newGuid(),
            Name: name,
            Poets: []
        });
        return Observable.of(this.data[this.data.length - 1]);
    }

    private generateSampleData() {
        return this.poetService.Read(null).do(poets => {
            this.data = [
                {
                    Id: '766df25e-1036-4621-b005-e592db4e0ee5',
                    Name: 'Gruppe 1',
                    Poets: poets
                },
                {
                    Id: '0e196d32-ca4b-4097-8556-fc9ec5fde5ea',
                    Name: 'Gruppe 2',
                    Poets: poets
                }
            ];
        });
    }
}
