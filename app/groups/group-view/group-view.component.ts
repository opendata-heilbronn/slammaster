import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GroupService } from '../../repositories/group.service';
import { GroupModel } from '../../models/group.model';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-group-view',
  templateUrl: './group-view.component.html',
  styleUrls: ['./group-view.component.css']
})
export class GroupViewComponent implements OnInit {

    group: Observable<GroupModel>;

    constructor(private activatedRoute: ActivatedRoute, private groupService: GroupService) {}

    ngOnInit() {
        this.group = this.activatedRoute.params
            .do(p => console.log('params', p))
            .map(params => params.groupId)
            .flatMap(groupId => groupId ? this.groupService.ReadGroup(groupId) : Observable.of(null))
            .do(group => console.log(group))
            .catch(err => Observable.of(null));
    }
}
