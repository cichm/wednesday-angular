import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

import { PeopleRoutingModule } from './people-routing.module';
import { PeopleComponent } from './people.component';
import { MaterialModule } from '@app/material.module';
import { PeopleService } from '@app/people/people.service';
import { PersonDataDialogComponent } from "@app/person-data-dialog/person-data-dialog.component";
import { BrowserModule } from "@angular/platform-browser";
import { PeopleTabsModule } from "@app/people-tabs/people-tabs.module";
import { PeopleListModule } from "@app/people-list/people-list.module";

@NgModule({
  imports: [
    CommonModule,
    PeopleRoutingModule,
    MaterialModule,
    FlexLayoutModule,
    BrowserModule,
    PeopleTabsModule,
    PeopleListModule
  ],
  declarations: [
    PeopleComponent,
    PersonDataDialogComponent,
  ],
  providers: [
    PeopleService,
  ],
  entryComponents: [PersonDataDialogComponent],
})
export class PeopleModule { }
