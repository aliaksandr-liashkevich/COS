import { Injectable } from '@angular/core';
import { HarmonicSignal } from '../models';

@Injectable({
  providedIn: 'root'
})
export class HarmonicSignalService {

  constructor() { }

  public static GenerateSignal(): HarmonicSignal {
    return new HarmonicSignal(
      new Array<number>()
    );
  }
}
