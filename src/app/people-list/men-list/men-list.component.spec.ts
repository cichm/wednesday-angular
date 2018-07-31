import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenListComponent } from './men-list.component';

describe('MenListComponent', () => {
  let component: MenListComponent;
  let fixture: ComponentFixture<MenListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
