import { Component, OnInit } from '@angular/core';
import { SlidingService, ParabolicService, MedianService } from '../shared/services';
import { ChartConverterService } from '../../shared/services/chart-converter.service';
import { Signal, InputModel } from '../shared/models';

@Component({
  selector: 'app-signal-result',
  templateUrl: './signal-result.component.html',
  styleUrls: ['./signal-result.component.scss']
})
export class SignalResultComponent implements OnInit {
  tasks = [1, 2, 3];
  taskSelected: any = 1;

  public signals: Array<any>;
  public amplitude: Array<any>;
  public phase: Array<any>;
  public phaseFunc: Array<any>;

  constructor(
    private slidingService: SlidingService,
    private parabolicService: ParabolicService,
    private medianService: MedianService,
    private converter: ChartConverterService
  ) { }

  private _updateData() {
    const N = 360, length = 100;
    let result: Signal;
    if (+this.taskSelected === 1) {
      this.slidingService.init(
        N, length, 5, new InputModel(10, 1, 0)
      );
      result = this.slidingService.getSignal();
    }

    if (+this.taskSelected === 2) {
      this.parabolicService.init(
        N, length, new InputModel(10, 1, 0)
      );
      result = this.parabolicService.getSignal();
    }

    if (+this.taskSelected === 3) {
      this.medianService.init(
        N, length, 9, new InputModel(10, 1, 0)
      );
      result = this.medianService.getSignal();
    }

    console.log(result);

    this.signals = new Array<any>(2);
    const funcX = (x, index) => ((2 * Math.PI * index / 360).toString());
    this.signals[0] = {
      name: 'Base Signal',
      series: this.converter.convertToSingle(result.baseSignal, funcX)
    };
    this.signals[1] = {
      name: 'Smoothing Signal',
      series: this.converter.convertToSingle(result.smoothingSignal, funcX)
    };

    const funcXSpectre = (x, index) => (index.toString());

    this.amplitude = new Array<any>(2);
    this.amplitude[0] = {
      name: 'Amplitude Spectrum',
      series: this.converter.convertToSingle(result.amplitudeSpectrum, funcXSpectre)
    };
    this.amplitude[1] = {
      name: 'Smoothing Amplitude Spectrum',
      series: this.converter.convertToSingle(result.smoothingAmplitudeSpectrum, funcXSpectre)
    };

    this.phase = new Array<any>(2);
    this.phase[0] = this.converter.convertToSingle(result.phaseSpectrum, funcXSpectre);
    this.phase[1] = this.converter.convertToSingle(result.smoothingPhaseSpectrum, funcXSpectre);

    this.phaseFunc = new Array<any>(2);
    this.phaseFunc[0] = {
      name: 'Phase Spectrum',
      series: this.converter.convertToSingle(result.phaseSpectrum, funcXSpectre)
    };
    this.phaseFunc[1] = {
      name: 'Smoothing Phase Spectrum',
      series: this.converter.convertToSingle(result.smoothingPhaseSpectrum, funcXSpectre)
    };
  }

  ngOnInit() {
    this._updateData();
  }

  public onTaskSelected() {
    this._updateData();
  }

}
