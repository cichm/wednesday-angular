import { Component, OnInit } from '@angular/core';
import { People } from '@app/people/People';
import { PeopleService } from '@app/people/people.service';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent implements OnInit {

  people: People[];
  isLoading: boolean;

  constructor(private peopleService: PeopleService) { }

  ngOnInit() {
    this.isLoading = true;
    this.peopleService.getRandomPeople({ result: 6 })
      .pipe(finalize(() => { this.isLoading = false; }))
      .subscribe((people: People[]) => { this.people = people; });
  }
}
