import { Component, OnInit } from '@angular/core';
import { PolyharmonicSignalService, HarmonicSignalService } from '../shared/services';
import { ChartConverterService } from '../../shared/services/chart-converter.service';
import { HarmonicInput, Signal, PolyharmonicInput } from '../shared/models';

@Component({
  selector: 'app-signal-result',
  templateUrl: './signal-result.component.html',
  styleUrls: ['./signal-result.component.scss']
})
export class SignalResultComponent implements OnInit {
  tasks = [1, 2];
  taskSelected: any = 1;

  public signals: Array<any>;
  public amplitude: Array<any>;
  public phase: Array<any>;

  constructor(
    private harmonicService: HarmonicSignalService,
    private polyharmonicService: PolyharmonicSignalService,
    private converter: ChartConverterService
  ) { }

  private _updateData() {
    const N = 360, length = 100;
    let result: Signal;
    if (+this.taskSelected === 1) {
      this.harmonicService.init(new HarmonicInput(
        50, 1, - Math.PI / 3, N, length
      ));
      result = this.harmonicService.getSignal();
    }

    if (+this.taskSelected === 2) {
      const pi = Math.PI;
      this.polyharmonicService.init(new PolyharmonicInput(
        [1, 5, 7, 8, 9, 10, 17],
        1,
        [pi / 6, pi / 4, pi / 3, pi / 2, 3 * pi / 4, pi],
        N,
        length
      ));
      result = this.polyharmonicService.getSignal();
    }

    console.log(result);

    this.signals = new Array<any>(3);
    const funcX = (x, index) => ((2 * Math.PI * index / 360).toString());
    this.signals[0] = {
      name: 'Base Signal',
      series: this.converter.convertToSingle(result.baseSignal, funcX)
    };
    this.signals[1] = {
      name: 'Restore Signal',
      series: this.converter.convertToSingle(result.restoredSignal, funcX)
    };
    this.signals[2] = {
      name: 'Restore NonPhasedSignal',
      series: this.converter.convertToSingle(result.restoredNonPhasedSignal, funcX)
    };

    const funcXSpectre = (x, index) => (index.toString());

    this.amplitude = new Array<any>(1);
    this.amplitude[0] = {
      name: 'Amplitude',
      series: this.converter.convertToSingle(result.amplitudeSpectrum, funcXSpectre)
    };

    this.phase = new Array<any>(1);
    this.phase[0] = {
      name: 'Phase',
      series: this.converter.convertToSingle(result.phaseSpectrum, funcXSpectre)
    };
  }

  ngOnInit() {
    this._updateData();
  }

  public onTaskSelected() {
    this._updateData();
  }

}
