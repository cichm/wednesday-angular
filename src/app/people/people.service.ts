import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {People} from '@app/people/People';
import {catchError, map} from 'rxjs/operators';

const routes = {
  people: (c: RandomPeopleContext) => `/api/?results=${c.result}`
};

export interface RandomPeopleContext {
  result: number;
}

@Injectable()
export class PeopleService {

  constructor(private httpClient: HttpClient) { }

  getRandomPeople(context: RandomPeopleContext): Observable<People[]> {
    return this.httpClient
      .cache()
      .get(routes.people(context))
      .pipe(
        map((body: any) => body.results),
        catchError(() => of('Error, could not load people :-('))
      );
  }
}
