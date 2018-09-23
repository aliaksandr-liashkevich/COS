import { Signal, InputModel } from '../models';

export abstract class SignalService {
  private sinSpectrum: number[];
  private cosSpectrum: number[];

  protected input: InputModel;
  protected N: number;
  protected length: number;
  protected windowSize: number;

  protected signal: Signal;

  constructor() {
    this.signal = new Signal();
  }

  public getSignal() {
    return this.signal;
  }

  protected generate() {
    this._generateBaseSignal();
    this._generateSinSpectrum(this.signal.baseSignal);
    this._generateCosSpectrum(this.signal.baseSignal);
    this.signal.amplitudeSpectrum = this._getAmplitudeSpectrum();
    this.signal.phaseSpectrum = this._getPhaseSpectrum();
    this.generateSmoothing();
    this._generateSinSpectrum(this.signal.smoothingSignal);
    this._generateCosSpectrum(this.signal.smoothingSignal);
    this.signal.smoothingAmplitudeSpectrum = this._getAmplitudeSpectrum();
    this.signal.smoothingPhaseSpectrum = this._getPhaseSpectrum();
  }

  protected abstract generateSmoothing();

  private _randomNext(n: number) {
    return Math.floor(Math.random() * n);
  }

  private _generateBaseSignal(): void {
    this.signal.baseSignal = new Array<number>(this.N);
    const B = this.input.A / 70;
    for (let i = 0; i < this.N; i++) {
      this.signal.baseSignal[i] = this.input.A * Math.sin(2 * Math.PI * this.input.f * i / this.N + this.input.fi);
      let noise = 0;
      for (let j = 50; j <= 70; j++) {
        noise +=  B * Math.sin(2 * Math.PI * this.input.f * i * j / this.N + this.input.fi) *
          ((this._randomNext(100000) % 2 === 0) ? (1) : (-1));
      }
      this.signal.baseSignal[i] += noise;
    }
  }

  private _getTrigonometricSpectrum(signal: number[], trigonometric: (x: number) => number): number[] {
    const spectrum = new Array<number>(this.length);
    for (let j = 0; j < this.length; j++) {
      let sum = 0;
      for (let i = 0; i < this.N; i++) {
        sum += signal[i] * trigonometric(2 * Math.PI * i * j / this.N);
      }
      spectrum[j] = 2 * sum / this.N;
    }

    return spectrum;
  }

  private _generateSinSpectrum(signal: number[]) {
    this.sinSpectrum = this._getTrigonometricSpectrum(signal, Math.sin);
  }

  private _generateCosSpectrum(signal: number[]) {
    this.cosSpectrum = this._getTrigonometricSpectrum(signal, Math.cos);
  }

  private _getAmplitudeSpectrum(): number[] {
    const amplitudeSpectrum = new Array<number>(this.length);
    for (let j = 0; j < this.length; j++) {
      amplitudeSpectrum[j] = Math.sqrt(Math.pow(this.sinSpectrum[j], 2) + Math.pow(this.cosSpectrum[j], 2));
    }

    return amplitudeSpectrum;
  }

  private _getPhaseSpectrum(): number[] {
    const phaseSpectrum = new Array<number>(this.length);
    for (let j = 0; j < this.length; j++) {
      phaseSpectrum[j] = Math.atan(this.sinSpectrum[j] / this.cosSpectrum[j]);
    }

    return phaseSpectrum;
  }
}
