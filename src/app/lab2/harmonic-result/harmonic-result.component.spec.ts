import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HarmonicResultComponent } from './harmonic-result.component';

describe('HarmonicResultComponent', () => {
  let component: HarmonicResultComponent;
  let fixture: ComponentFixture<HarmonicResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HarmonicResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HarmonicResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
