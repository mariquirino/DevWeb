import { TestBed } from '@angular/core/testing';

import { ProfDiscService } from './prof-disc.service';

describe('ProfDiscService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProfDiscService = TestBed.get(ProfDiscService);
    expect(service).toBeTruthy();
  });
});
