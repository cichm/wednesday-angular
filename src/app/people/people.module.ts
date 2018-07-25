import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

import { PeopleRoutingModule } from './people-routing.module';
import { PeopleComponent } from './people.component';
import { MaterialModule } from '@app/material.module';
import { PeopleService } from '@app/people/people.service';

@NgModule({
  imports: [
    CommonModule,
    PeopleRoutingModule,
    MaterialModule,
    FlexLayoutModule
  ],
  declarations: [PeopleComponent],
  providers: [
    PeopleService
  ]
})
export class PeopleModule { }
