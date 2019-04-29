import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalRequestsComponent } from './personal-requests.component';

describe('PersonalRequestsComponent', () => {
  let component: PersonalRequestsComponent;
  let fixture: ComponentFixture<PersonalRequestsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonalRequestsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
