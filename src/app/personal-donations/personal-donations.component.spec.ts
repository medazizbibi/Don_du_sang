import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalDonationsComponent } from './personal-donations.component';

describe('PersonalDonationsComponent', () => {
  let component: PersonalDonationsComponent;
  let fixture: ComponentFixture<PersonalDonationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonalDonationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalDonationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
