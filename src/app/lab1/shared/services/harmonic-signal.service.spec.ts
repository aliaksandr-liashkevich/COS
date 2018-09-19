import { TestBed } from '@angular/core/testing';

import { HarmonicSignalService } from './harmonic-signal.service';

describe('HarmonicSignalService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HarmonicSignalService = TestBed.get(HarmonicSignalService);
    expect(service).toBeTruthy();
  });
});
