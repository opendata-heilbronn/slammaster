import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {DashboardComponent} from './dashboard/dashboard.component';
import {PoetsComponent} from './poets/poets.component';
import {EventComponent} from './event/event.component';
import {GroupsComponent} from "./groups/groups.component";

const routes: Routes = [
    {
        path: '',
        redirectTo: '/poets',
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
        component: GroupsComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
