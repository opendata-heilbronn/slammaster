import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminComponent } from './admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PoetsComponent } from './poets/poets.component';
import { EventComponent } from './event/event.component';
import { GroupsComponent } from './groups/groups.component';
import { GroupViewComponent } from './groups/group-view/group-view.component';
import { GroupResolver } from './groups/group.resolver';

const routes: Routes = [
    {
        path: '',
        component: AdminComponent,
        children: [
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
                children: [
                    {
                        path: ':groupId',
                        component: GroupViewComponent,
                        resolve: {
                            group: GroupResolver
                        }
                    }
                ]
            }
        ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AdminRoutingModule {
}
