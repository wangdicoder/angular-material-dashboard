import { TestBed } from '@angular/core/testing';

import { AmplifyService } from './amplify.service';

describe('AmplifyService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AmplifyService = TestBed.get(AmplifyService);
    expect(service).toBeTruthy();
  });
});
