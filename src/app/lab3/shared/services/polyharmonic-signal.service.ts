import { Injectable } from '@angular/core';
import { SignalService } from './signal-service';
import { PolyharmonicInput } from '../models/polyharmonic-input';

@Injectable({
  providedIn: 'root'
})
export class PolyharmonicSignalService extends SignalService {
  private input: PolyharmonicInput;

  constructor() {
    super();
  }

  public init(input: PolyharmonicInput) {
    this.N = input.N;
    this.length = input.length;
    this.input = input;
    this.generate();
  }

  private _randomNext(n: number) {
    return Math.floor(Math.random() * n);
  }

  protected generateBaseSignal(): void {
    this.signal.baseSignal = new Array<number>(this.N);
    for (let i = 0; i < this.N; i++) {
      let sum = 0;
      for (let j = 0; j < 29; j++) {
        sum += this.input.A[this._randomNext(7)] * Math.cos(2 * Math.PI * this.input.f * i / this.N + this.input.fi[this._randomNext(6)]);
      }
      this.signal.baseSignal[i] = sum;
    }
  }
}
