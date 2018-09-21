import { TestBed } from '@angular/core/testing';

import { ChartConverterService } from './chart-converter.service';

describe('ChartConverterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ChartConverterService = TestBed.get(ChartConverterService);
    expect(service).toBeTruthy();
  });
});
