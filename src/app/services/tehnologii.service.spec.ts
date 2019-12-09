import { TestBed } from '@angular/core/testing';

import { TehnologiiService } from './tehnologii.service';

describe('TehnologiiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TehnologiiService = TestBed.get(TehnologiiService);
    expect(service).toBeTruthy();
  });
});
