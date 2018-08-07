import { TodosStore } from './todos.store';
import { createTodo, Todo } from './todo.model';
import { Injectable } from '@angular/core';
import { ID } from '@datorama/akita';
import { VISIBILITY_FILTER } from "@app/todos/filter/filter.model";

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  constructor(private todosStore: TodosStore) { }

  updateFilter(filter: VISIBILITY_FILTER) {
    this.todosStore.updateRoot({
      ui: {
        filter
      }
    });
  }

  complete({ id, completed }: Todo) {
    this.todosStore.update(id, {
      completed
    });
  }

  add(title: string) {
    const todo = createTodo({ id: Math.random(), title });
    this.todosStore.add(todo);
  }

  delete(id: ID) {
    this.todosStore.remove(id);
  }
}
