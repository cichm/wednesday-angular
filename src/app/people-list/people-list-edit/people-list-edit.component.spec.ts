import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeopleListEditComponent } from './people-list-edit.component';

describe('PeopleListEditComponent', () => {
  let component: PeopleListEditComponent;
  let fixture: ComponentFixture<PeopleListEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeopleListEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeopleListEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
