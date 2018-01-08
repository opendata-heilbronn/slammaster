import {Component, OnInit} from '@angular/core';

import { GroupModel } from './../../common/models/group.model';
import { GroupService } from './../../common/repositories/group.service';

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
            console.log(result);
            this.groups = result;
            this.selectedGroup = this.groups[0];
        });

    }

}
