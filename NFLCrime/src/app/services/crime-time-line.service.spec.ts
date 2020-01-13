import { TestBed } from '@angular/core/testing';

import { CrimeTimeLineService } from './crime-time-line.service';

describe('CrimeTimeLineService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CrimeTimeLineService = TestBed.get(CrimeTimeLineService);
    expect(service).toBeTruthy();
  });
});
