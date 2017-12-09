import { Injectable } from '@angular/core';
import { GroupModel } from '../models/group.model';
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { GroupService } from '../repositories/group.service';

@Injectable()
export class GroupResolver implements Resolve<GroupModel> {

    constructor(private groupService: GroupService, private router: Router) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<GroupModel> {
        return this.groupService.ReadGroup(route.params.groupId).map(group => {
            if (group) return group;

            this.router.navigateByUrl('/groups');
            return null;
        });
    }
}
