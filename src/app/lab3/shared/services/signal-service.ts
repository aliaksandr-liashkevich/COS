import { Signal } from '../models';

export abstract class SignalService {
  private sinSpectrum: number[];
  private cosSpectrum: number[];

  protected N: number;
  protected length: number;
  protected signal: Signal;

  constructor() {
    this.signal = new Signal();
  }

  public getSignal() {
    return this.signal;
  }

  protected generate() {
    this.generateBaseSignal();
    this._generateSinSpectrum();
    this._generateCosSpectrum();
    this._generateAmplitudeSpectrum();
    this._generatePhaseSpectrum();
    this._generateRestoreSignal();
    this._generateRestoreNonPhaseSignal();
  }

  protected abstract generateBaseSignal(): void;

  private _getTrigonometricSpectrum(trigonometric: (x: number) => number): number[] {
    const spectrum = new Array<number>(this.length);
    for (let j = 0; j < this.length; j++) {
      let sum = 0;
      for (let i = 0; i < this.N; i++) {
        sum += this.signal.baseSignal[i] * trigonometric(2 * Math.PI * i * j / this.N);
      }
      spectrum[j] = 2 * sum / this.N;
    }

    return spectrum;
  }

  private _generateSinSpectrum() {
    this.sinSpectrum = this._getTrigonometricSpectrum(Math.sin);
  }

  private _generateCosSpectrum() {
    this.cosSpectrum = this._getTrigonometricSpectrum(Math.cos);
  }

  private _generateAmplitudeSpectrum() {
    this.signal.amplitudeSpectrum = new Array<number>(this.length);
    for (let j = 0; j < this.length; j++) {
      this.signal.amplitudeSpectrum[j] = Math.sqrt(Math.pow(this.sinSpectrum[j], 2) + Math.pow(this.cosSpectrum[j], 2));
    }
  }

  private _generatePhaseSpectrum() {
    this.signal.phaseSpectrum = new Array<number>(this.length);
    for (let j = 0; j < this.length; j++) {
      this.signal.phaseSpectrum[j] = Math.atan(this.sinSpectrum[j] / this.cosSpectrum[j]);
    }
  }

  private _generateRestoreSignal() {
    this.signal.restoredSignal = new Array<number>(this.N);
    for (let i = 0; i < this.N; i++) {
      let sum = 0;
      for (let j = 0; j < this.length; j++) {
        sum += this.signal.amplitudeSpectrum[j] * Math.cos(2 * Math.PI * i * j / this.N - this.signal.phaseSpectrum[j]);
      }

      this.signal.restoredSignal[i] = sum;
    }
  }

  private _generateRestoreNonPhaseSignal() {
    this.signal.restoredNonPhasedSignal = new Array<number>(this.N);
    for (let i = 0; i < this.N; i++) {
      let sum = 0;
      for (let j = 0; j < this.length; j++) {
        sum += this.signal.amplitudeSpectrum[j] * Math.cos(2 * Math.PI * i * j / this.N);
      }
      this.signal.restoredNonPhasedSignal[i] = sum;
    }
  }
}
