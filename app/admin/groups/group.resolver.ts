import { Injectable } from '@angular/core';
import { GroupModel } from './../../common/models/group.model';
import { GroupService } from './../../common/repositories/group.service';

import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

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
