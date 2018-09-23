import { Injectable } from '@angular/core';
import { SignalService } from './signal-service';
import { InputModel } from '../models';

@Injectable({
  providedIn: 'root'
})
export class SlidingService extends SignalService {

  constructor() {
    super();
  }

  public init(N: number, length: number, windowSize: number, input: InputModel) {
    this.N = N;
    this.length = length;
    this.windowSize = windowSize;
    this.input = input;
    this.generate();
  }

  protected generateSmoothing() {
    this.signal.smoothingSignal = this.signal.baseSignal.slice(0);
    for (let i = 0; i <= this.signal.smoothingSignal.length - 1 - this.windowSize; i++) {
      let sum = 0;
      for (let j = i; j <= i + this.windowSize - 1; j++) {
        sum += this.signal.baseSignal[j];
      }
      this.signal.smoothingSignal[i + Math.floor(this.windowSize / 2)] = sum / this.windowSize;
    }
  }
}
