import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {DashboardComponent} from './dashboard/dashboard.component';
import {PoetsComponent} from './poets/poets.component';
import {EventComponent} from './event/event.component';
import {GroupsComponent} from "./groups/groups.component";
import { GroupViewComponent } from './groups/group-view/group-view.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: '/groups',
        pathMatch: 'full'
    },
    {
        path: 'dashboard',
        component: DashboardComponent,
        data: {title: 'Dashboard'}
    },
    {
        path: 'event',
        component: EventComponent,
        data: {title: 'Veranstaltung'}
    },
    {
        path: 'poets',
        component: PoetsComponent,
        data: {title: 'Poeten'}
    },
    {
        path: 'groups',
        component: GroupsComponent,
        data: {title: 'Gruppen'},
        children: [{
            path: ':groupId',
            component: GroupViewComponent
        }]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
