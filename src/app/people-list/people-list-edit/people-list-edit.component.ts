import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";

@Component({
  selector: 'app-people-list-edit',
  templateUrl: './people-list-edit.component.html',
  styleUrls: ['./people-list-edit.component.scss']
})
export class PeopleListEditComponent implements OnInit {
  heroForm: FormGroup;

  @Input() hero: any;
  @Output() saveHero: EventEmitter<any>;

  constructor(private fb: FormBuilder) {
    this.saveHero = new EventEmitter<any>();
    this.heroForm = this.fb.group(
      {
        email: '',
        gender: ''
      }
    );
  }

  ngOnInit() {
    this.heroForm.setValue({
      email: this.hero.email || '',
      gender: this.hero.gender || ''
    });
  }

  onHeroFormSubmit() {
    const dataModel = this.heroForm.value;
    this.saveHero.emit(dataModel);
  }
}
