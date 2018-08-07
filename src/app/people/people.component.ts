import {Component, NgZone, OnInit } from '@angular/core';
import { People } from '@app/people/People';
import { PeopleService } from '@app/people/people.service';
import { finalize } from 'rxjs/operators';
import { MatDialog } from "@angular/material";
import { PersonDataDialogComponent } from "@app/person-data-dialog/person-data-dialog.component";
import { Observable } from "rxjs/internal/Observable";
import { Todo, TodosQuery, TodosService } from "@app/todos/state";
import { akitaDevtools, ID } from "@datorama/akita";
import { initialFilters, VISIBILITY_FILTER } from "@app/todos/filter/filter.model";

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent implements OnInit {

  todos$: Observable<Todo[]>;
  activeFilter$: Observable<VISIBILITY_FILTER>;

  filters = initialFilters;

  people: People[];
  isLoading: boolean;
  woman: any;
  man: any;

  constructor(private peopleService: PeopleService, public dialog: MatDialog, private todosQuery: TodosQuery, private ngZone: NgZone, private todosService: TodosService) {
    akitaDevtools(ngZone);
  }

  personDialog(email: string): void {
    this.dialog.open(PersonDataDialogComponent, {
      data: {
        person: this.people.filter(p => p.email == email)[0]
      }
    });
  }

  ngOnInit() {
    const peopleNumber = 16;

    this.isLoading = true;
    this.peopleService.getRandomPeople({ result: peopleNumber })
      .pipe(finalize(() => { this.isLoading = false; }))
      .subscribe((people: People[]) => {
        this.people = people;
        this.woman = people.filter((person) => person.gender == "female");
        this.man = people.filter((person) => person.gender == "male")
      });

    this.todos$ = this.todosQuery.selectVisibleTodos$;
    this.activeFilter$ = this.todosQuery.selectVisibilityFilter$;
  }

  add(input: HTMLInputElement) {
    this.todosService.add(input.value);
    input.value = '';
  }

  complete(todo: Todo) {
    this.todosService.complete(todo);
  }

  delete(id: ID) {
    this.todosService.delete(id);
  }

  changeFilter(filter: VISIBILITY_FILTER) {
    this.todosService.updateFilter(filter);
  }
}
