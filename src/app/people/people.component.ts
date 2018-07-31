import { Component, OnInit } from '@angular/core';
import { People } from '@app/people/People';
import { PeopleService } from '@app/people/people.service';
import { finalize } from 'rxjs/operators';
import { MatDialog } from "@angular/material";
import { PersonDataDialogComponent } from "@app/person-data-dialog/person-data-dialog.component";

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent implements OnInit {

  people: People[];
  isLoading: boolean;
  woman: any;
  man: any;

  constructor(private peopleService: PeopleService, public dialog: MatDialog) { }

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
  }
}
