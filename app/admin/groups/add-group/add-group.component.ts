import {Component, OnInit, ViewChild} from '@angular/core';
import {GroupService} from './../../../common/repositories/group.service';
import {MatInput} from '@angular/material';
import { Router } from '@angular/router';

@Component({
    selector: 'app-add-group',
    templateUrl: './add-group.component.html',
    styleUrls: ['./add-group.component.css']
})
export class AddGroupComponent implements OnInit {
    state: string;

    @ViewChild(MatInput)
    private input: MatInput;

    constructor(private groupService: GroupService, private router: Router) {}

    ngOnInit() {
        this.state = 'button';
    }

    toFormState() {
        this.state = 'form';
    }

    onKey($event: any) {
        if ($event.keyCode === 13) {
            const groupName = this.input.value;
            this.groupService.CreateGroup(groupName).subscribe(group => {
                this.state = 'button';
                this.router.navigate(['/groups', group.Id]);
            });
        } else if ($event.keyCode === 27) {
            this.state = 'button';
        }
    }

}
