import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoComponent } from './todo.component';
import { TodosComponent } from './todos.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FiltersComponent } from './filter/filters.component';
import {MatButtonModule, MatFormFieldModule, MatInputModule, MatRippleModule, MatSelectModule} from "@angular/material";

@NgModule({
  imports: [CommonModule, ReactiveFormsModule,
    MatFormFieldModule,
    MatSelectModule],
  exports: [TodosComponent, FiltersComponent,


    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatRippleModule],
  declarations: [TodoComponent, TodosComponent, FiltersComponent]
})
export class TodosModule {}
