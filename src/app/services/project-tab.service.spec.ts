import { TestBed } from '@angular/core/testing';

import { ProjectTabService } from './project-tab.service';

describe('ProjectTabService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProjectTabService = TestBed.get(ProjectTabService);
    expect(service).toBeTruthy();
  });
});
