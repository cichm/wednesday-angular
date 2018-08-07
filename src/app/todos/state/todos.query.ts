import { Injectable } from '@angular/core';
import { State, TodosStore } from './todos.store';
import { Todo } from './todo.model';
import { QueryEntity } from '@datorama/akita';
import { combineLatest } from 'rxjs';
import { VISIBILITY_FILTER } from "@app/todos/filter/filter.model";

@Injectable({
  providedIn: 'root'
})
export class TodosQuery extends QueryEntity<State, Todo> {
  selectVisibilityFilter$ = this.select(state => state.ui.filter);

  selectVisibleTodos$ = combineLatest(
    this.selectVisibilityFilter$,
    this.selectAll(),
    this.getVisibleTodos
  );

  constructor(protected store: TodosStore) {
    super(store);
  }

  private getVisibleTodos(filter: any, todos: Todo[]): Todo[] {
    switch (filter) {
      case VISIBILITY_FILTER.SHOW_COMPLETED:
        return todos.filter(t => t.completed);
      case VISIBILITY_FILTER.SHOW_ACTIVE:
        return todos.filter(t => !t.completed);
      default:
        return todos;
    }
  }
}
