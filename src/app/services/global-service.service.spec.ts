import { TestBed } from '@angular/core/testing';

import { GlobalService } from './global-service.service';

describe('GlobalServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GlobalService = TestBed.get(GlobalService);
    expect(service).toBeTruthy();
  });
});
