import { TestBed } from '@angular/core/testing';

import { SlidingService } from './sliding.service';

describe('SlidingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SlidingService = TestBed.get(SlidingService);
    expect(service).toBeTruthy();
  });
});
