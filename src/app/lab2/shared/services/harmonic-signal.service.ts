import { Injectable } from '@angular/core';
import { InputModel, HarmonicSignal } from '../models';
import { Point } from '../models/point';

@Injectable({
  providedIn: 'root'
})
export class HarmonicSignalService {

  constructor() { }

  public generate(input: InputModel): HarmonicSignal {
    const signals = new Array<Array<Point>>(2);
    const K = Math.floor(input.N / 4);
    const length = 2 * input.N - K + 1;

    signals[0] = new Array<Point>(length);
    signals[1] = new Array<Point>(length);

    let i = 0, sum = 0, sumSqr = 0;
    for (let M = K; M <= 2 * input.N; M++) {
      sum = 0, sumSqr = 0;
      for (let n = 0; n <= M; n++) {
        const x = this._funcX(n, input);
        sum += x;
        sumSqr += Math.pow(x, 2);
      }

      signals[0][i] = new Point(
        M,
        this._calculateDeltaA(M, sumSqr)
      );
      signals[1][i] = new Point(
        M,
        this._calculateDeltaB(M, sum, sumSqr)
      );
      i++;
    }

    return new HarmonicSignal(
      signals
    );
  }

  private _funcX(n: number, input: InputModel) {
    return Math.sin(2 * Math.PI * n / input.N + input.fi);
  }

  private _calculateDeltaA(M: number, sumSqr: number) {
    return 0.707 - Math.sqrt(sumSqr / (M + 1));
  }

  private _calculateDeltaB(M: number, sum: number, sumSqr: number) {
    return 0.707 - (Math.sqrt(sumSqr / (M + 1) - Math.pow(sum / (M + 1), 2)));
  }
}
