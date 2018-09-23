import { Injectable } from '@angular/core';
import { SignalService } from './signal-service';
import { InputModel } from '../models';

@Injectable({
  providedIn: 'root'
})
export class ParabolicService extends SignalService {

  constructor() {
    super();
  }

  public init(N: number, length: number, input: InputModel) {
    this.N = N;
    this.length = length;
    this.input = input;
    this.generate();
  }

  protected generateSmoothing() {
    this.signal.smoothingSignal = new Array<number>(this.N);
    for (let i = 0; i < 7; i++) {
      this.signal.smoothingSignal[i] = 0;
    }
    for (let i = this.signal.smoothingSignal.length - 9; i < this.signal.smoothingSignal.length; i++) {
      this.signal.smoothingSignal[i] = 0;
    }

    for (let i = 7; i <= this.signal.smoothingSignal.length - 8; i++) {
      this.signal.smoothingSignal[i] = (-3 * this.signal.baseSignal[i - 7] -
        6 * this.signal.baseSignal[i - 6] -
        5 * this.signal.baseSignal[i - 5] +
        3 * this.signal.baseSignal[i - 4] +
        21 * this.signal.baseSignal[i - 3] +
        46 * this.signal.baseSignal[i - 2] +
        67 * this.signal.baseSignal[i - 1] +
        74 * this.signal.baseSignal[i] -
        3 * this.signal.baseSignal[i + 7] -
        6 * this.signal.baseSignal[i + 6] -
        5 * this.signal.baseSignal[i + 5] +
        3 * this.signal.baseSignal[i + 4] +
        21 * this.signal.baseSignal[i + 3] +
        46 * this.signal.baseSignal[i + 2] +
        67 * this.signal.baseSignal[i + 1]) / 320;
    }
  }
}
