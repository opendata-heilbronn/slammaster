import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProjectorComponent } from './projector.component';

const routes: Routes = [
    {
        path: '',
        component: ProjectorComponent,
        data: {title: 'Projector'}
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ProjectorRoutingModule {
}
