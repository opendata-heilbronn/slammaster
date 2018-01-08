import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GroupService } from './../../../common/repositories/group.service';
import { GroupModel } from './../../../common/models/group.model';
import { Observable } from 'rxjs/Observable';
import { AbstractControl, NgModel } from '@angular/forms';

@Component({
  selector: 'app-group-view',
  templateUrl: './group-view.component.html',
  styleUrls: ['./group-view.component.css']
})
export class GroupViewComponent {
    group: GroupModel;

    @ViewChild(NgModel)
    model: NgModel;

    constructor(private activatedRoute: ActivatedRoute, private groupService: GroupService, private router: Router) {}

    ngOnInit() {
        this.activatedRoute.data.subscribe(({group}) => this.group = group);
    }

    save() {
        this.groupService.SaveGroup(this.group);
        this.model.control.markAsPristine();
    }
}
