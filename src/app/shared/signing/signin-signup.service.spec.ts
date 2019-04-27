import { TestBed } from '@angular/core/testing';

import { SigninSignupService } from './signin-signup.service';

describe('SigninSignupService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SigninSignupService = TestBed.get(SigninSignupService);
    expect(service).toBeTruthy();
  });
});
