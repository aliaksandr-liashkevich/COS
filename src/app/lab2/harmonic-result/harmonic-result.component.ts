import { Component, OnInit } from '@angular/core';
import { HarmonicSignalService } from '../shared/services';
import { ChartConverterService } from '../../shared/services/chart-converter.service';
import { InputModel } from '../shared/models';

@Component({
  selector: 'app-harmonic-result',
  templateUrl: './harmonic-result.component.html',
  styleUrls: ['./harmonic-result.component.scss']
})
export class HarmonicResultComponent implements OnInit {
  public result: Array<any>;

  constructor(
    private service: HarmonicSignalService,
    private converter: ChartConverterService
  ) { }

  ngOnInit() {
    const input = new InputModel(128, Math.PI / 2);
    const res = this.service.generate(input);

    const names = ['Model 1', 'Model 2'];
    this.result = this.converter.convertMultiOnlyForLab2(names, res.signals);
  }

}
