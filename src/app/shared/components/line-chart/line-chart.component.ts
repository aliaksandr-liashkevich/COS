import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss']
})
export class LineChartComponent implements OnInit {
  static Colors = ['royalblue ', 'red', 'seagreen', 'dimgray'];

  @Input()
  result: any[];
  view: any[] = [1100, 650];

  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = '';
  showYAxisLabel = true;
  yAxisLabel = '';
  yScaleMin = 0;
  yScaleMax = 0;

  colorScheme = {
    domain: this.getRandomColors()
  };

  // line, area
  autoScale = true;

  constructor() {
  }

  ngOnInit() {
  }

  public getRandomColors(): string[] {
    return [
      LineChartComponent.Colors[Math.floor(Math.random() * LineChartComponent.Colors.length)]
    ];
  }

}
