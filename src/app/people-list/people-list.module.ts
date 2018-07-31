import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from "@angular/forms";
import { WomanListComponent } from "@app/people-list/woman-list/woman-list.component";
import { MenListComponent } from "@app/people-list/men-list/men-list.component";
import { PeopleListEditComponent } from "@app/people-list/people-list-edit/people-list-edit.component";

@NgModule({
  imports: [ CommonModule, ReactiveFormsModule ],
  declarations: [ WomanListComponent, MenListComponent, PeopleListEditComponent ],
  exports: [ WomanListComponent, MenListComponent, PeopleListEditComponent ]
})
export class PeopleListModule { }
