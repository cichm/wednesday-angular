import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PeopleComponent } from '@app/people/people.component';
import {extract, Route} from '@app/core';

const routes: Routes = [
  Route.withShell([
    { path: 'people', component: PeopleComponent, data: { title: extract('People') }}
  ])
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class PeopleRoutingModule { }
