import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonDataDialogComponent } from './person-data-dialog.component';

describe('PersonDataDialogComponent', () => {
  let component: PersonDataDialogComponent;
  let fixture: ComponentFixture<PersonDataDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonDataDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonDataDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
