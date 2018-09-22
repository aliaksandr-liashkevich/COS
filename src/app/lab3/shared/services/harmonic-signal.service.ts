import { Injectable } from '@angular/core';
import { SignalService } from './signal-service';
import { HarmonicInput } from '../models/harmonic-input';

@Injectable({
  providedIn: 'root'
})
export class HarmonicSignalService extends SignalService {
  private input: HarmonicInput;

  constructor() {
    super();
  }

  public init(input: HarmonicInput) {
    this.N = input.N;
    this.length = input.length;
    this.input = input;
    this.generate();
  }

  protected generateBaseSignal(): void {
    this.signal.baseSignal = new Array<number>(this.N);
    for (let i = 0; i < this.N; i++) {
      this.signal.baseSignal[i] = this.input.A * Math.cos(2 * Math.PI * this.input.f * i / this.N + this.input.fi);
    }
  }
}
