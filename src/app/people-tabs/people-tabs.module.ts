import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PeopleTabsRoutingModule } from './people-tabs-routing.module';
import { PeopleTabsComponent } from "@app/people-tabs/people-tabs.component";
import { PeopleTabComponent } from "@app/people-tab/people-tab.component";

@NgModule({
  imports: [CommonModule, PeopleTabsRoutingModule],
  declarations: [PeopleTabsComponent, PeopleTabComponent],
  exports: [PeopleTabsComponent, PeopleTabComponent]
})
export class PeopleTabsModule { }
