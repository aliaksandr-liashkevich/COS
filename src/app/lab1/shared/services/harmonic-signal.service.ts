import { Injectable } from '@angular/core';
import { HarmonicSignal, HarmonicInputModel, InputModelA, InputModelB, InputModelC, InputModelD } from '../models';

@Injectable({
  providedIn: 'root'
})
export class HarmonicSignalService {

  constructor() { }

  public generateSignalA(N: number, inputA: InputModelA): HarmonicSignal {
    let n = 0;
    const input = new HarmonicInputModel(inputA.A, inputA.f, inputA.fi[n], n, N);

    const lengthXArray = inputA.fi.length;
    const xArray = new Array<Array<number>>(lengthXArray);
    for (let i = 0; i < lengthXArray; i++) {
      xArray[i] = new Array<number>(N);
      input.fi = inputA.fi[i];
      for (n = 0; n < N; n++) {
        input.n = n;
        xArray[i][n] = this._funcHarmonic(input);
      }
    }

    return new HarmonicSignal(
      xArray
    );
  }

  public generateSignalB(N: number, inputB: InputModelB): HarmonicSignal {
    let n = 0;
    const input = new HarmonicInputModel(inputB.A, inputB.f[n], inputB.fi, n, N);

    const lengthXArray = inputB.f.length;
    const xArray = new Array<Array<number>>(lengthXArray);
    for (let i = 0; i < lengthXArray; i++) {
      xArray[i] = new Array<number>(N);
      input.f = inputB.f[i];
      for (n = 0; n < N; n++) {
        input.n = n;
        xArray[i][n] = this._funcHarmonic(input);
      }
    }

    return new HarmonicSignal(
      xArray
    );
  }

  public generateSignalC(N: number, inputC: InputModelC): HarmonicSignal {
    let n = 0;
    const input = new HarmonicInputModel(inputC.A[n], inputC.f, inputC.fi, n, N);

    const lengthXArray = inputC.A.length;
    const xArray = new Array<Array<number>>(lengthXArray);
    for (let i = 0; i < lengthXArray; i++) {
      xArray[i] = new Array<number>(N);
      input.A = inputC.A[i];
      for (n = 0; n < N; n++) {
        input.n = n;
        xArray[i][n] = this._funcHarmonic(input);
      }
    }

    return new HarmonicSignal(
      xArray
    );
  }

  public generateSignalD(N: number, inputD: InputModelD): HarmonicSignal {
    const lengthXArray = inputD.A.length;
    const xArray = new Array<Array<number>>(lengthXArray);
    for (let i = 0; i < lengthXArray; i++) {
      xArray[i] = new Array<number>(N);
      for (let n = 0; n < N; n++) {
        xArray[i][n] = this._funcHarmonicByD(N, n, inputD.fi[i], inputD);
      }
    }
    return new HarmonicSignal(
      xArray
    );
  }

  private _funcHarmonicByD(N: number, n: number, fi: number, input: InputModelD): number {
    const length = input.A.length;
    let sum = 0;
    for (let i = 0; i < length; i++) {
      sum += this._funcHarmonic(new HarmonicInputModel(
        input.A[i], input.f[i], fi, n, N
      ));
    }
    return sum;
  }

  private _funcHarmonic(input: HarmonicInputModel): number {
    return input.A * Math.sin(2 * Math.PI * input.f * input.n / input.N + input.fi);
  }
}
