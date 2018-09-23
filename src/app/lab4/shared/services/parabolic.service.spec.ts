import { TestBed } from '@angular/core/testing';

import { ParabolicService } from './parabolic.service';

describe('ParabolicService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ParabolicService = TestBed.get(ParabolicService);
    expect(service).toBeTruthy();
  });
});
