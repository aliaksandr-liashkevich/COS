import { Component, OnInit } from '@angular/core';
import { HarmonicSignalService } from '../shared/services';
import { InputModelA, HarmonicSignal, InputModelB, InputModelC, InputModelD } from '../shared/models';
import { ChartConverterService } from '../../shared/services/chart-converter.service';

@Component({
  selector: 'app-harmonic-result',
  templateUrl: './harmonic-result.component.html',
  styleUrls: ['./harmonic-result.component.scss']
})
export class HarmonicResultComponent implements OnInit {
  tasks = [1, 2, 3, 4];
  taskSelected: any = 1;

  resultMulti: Array<Array<any>>;

  constructor(
    private service: HarmonicSignalService,
    private converter: ChartConverterService
  ) { }

  ngOnInit() {
    this.updateData();
  }

  public onTaskSelected() {
    this.updateData();
  }

  private updateData() {
    const pi = Math.PI;
    const N = 512;

    let result: HarmonicSignal;
    switch (+this.taskSelected) {
      case this.tasks[0]: {
        const inputA = new InputModelA(9, 4, [pi / 3, 3 * pi / 4, 2 * pi, pi, pi / 6]);
        result = this.service.generateSignalA(N, inputA);
        break;
      }
      case this.tasks[1]: {
        const inputB = new InputModelB(7, [4, 8, 2, 1, 9], pi / 6);
        result = this.service.generateSignalB(N, inputB);
        break;
      }
      case this.tasks[2]: {
        const inputC = new InputModelC([2, 3, 6, 5, 1], 1, pi / 2);
        result = this.service.generateSignalC(N, inputC);
        break;
      }
      case this.tasks[3]: {
        const inputD = new InputModelD(
          [7, 7, 7, 7, 7],
          [1, 2, 3, 4, 5],
          [pi, pi / 4, 0, 3 * pi / 4, pi / 2]
        );
        result = this.service.generateSignalD(N, inputD);
        break;
      }
      default: {
        result = null;
      }
    }

    this.resultMulti = new Array<Array<any>>(result.xArray.length);
    for (let i = 0; i < result.xArray.length; i++) {
      this.resultMulti[i] = this.converter.convert(`Model ${i + 1}`, result.xArray[i]);
    }
  }

}

