import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignalResultComponent } from './signal-result.component';

describe('SignalResultComponent', () => {
  let component: SignalResultComponent;
  let fixture: ComponentFixture<SignalResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignalResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignalResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
