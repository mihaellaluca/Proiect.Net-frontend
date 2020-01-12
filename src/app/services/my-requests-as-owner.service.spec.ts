import { TestBed } from '@angular/core/testing';

import { MyRequestsAsOwnerService } from './my-requests-as-owner.service';

describe('MyRequestsAsOwnerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MyRequestsAsOwnerService = TestBed.get(MyRequestsAsOwnerService);
    expect(service).toBeTruthy();
  });
});

