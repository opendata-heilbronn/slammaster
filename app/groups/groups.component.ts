import {Component, OnInit} from '@angular/core';
import {GroupService} from '../repositories/group.service';
import {GroupModel} from '../models/group.model';

@Component({
    selector: 'app-groups',
    templateUrl: './groups.component.html',
    styleUrls: ['./groups.component.css']
})
export class GroupsComponent implements OnInit {

    groups: GroupModel[];
    selectedGroup: GroupModel;

    constructor(private groupService: GroupService) {
    }

    ngOnInit() {
        this.groupService.Read(null).subscribe(result => {
            this.groups = result;
            this.selectedGroup = this.groups[0];
        });

    }

}
