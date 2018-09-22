import { TestBed } from '@angular/core/testing';

import { PolyharmonicSignalService } from './polyharmonic-signal.service';

describe('PolyharmonicSignalService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PolyharmonicSignalService = TestBed.get(PolyharmonicSignalService);
    expect(service).toBeTruthy();
  });
});
