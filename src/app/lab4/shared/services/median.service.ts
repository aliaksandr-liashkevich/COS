import { Injectable } from '@angular/core';
import { InputModel } from '../models';
import { SignalService } from './signal-service';

@Injectable({
  providedIn: 'root'
})
export class MedianService extends SignalService {

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
    let window = new Array<number>();
    let k = 0;
    for (let i = 0; i <= this.signal.smoothingSignal.length - 1 - this.windowSize; i++) {
      window = [];
      k = 0;
      for (let j = i; j <= i + this.windowSize - 1; j++) {
        window[k] = this.signal.baseSignal[j];
        k++;
      }
      window.sort((a, b) => (
        a - b
      ));
      this.signal.smoothingSignal[i + Math.floor(this.windowSize / 2)] = window[1 + Math.floor(this.windowSize / 2)];
    }
  }
}
