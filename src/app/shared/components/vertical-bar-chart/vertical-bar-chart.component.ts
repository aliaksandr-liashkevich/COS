import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-vertical-bar-chart',
  templateUrl: './vertical-bar-chart.component.html',
  styleUrls: ['./vertical-bar-chart.component.scss']
})
export class VerticalBarChartComponent implements OnInit {
  static Colors = ['royalblue ', 'red', 'seagreen', 'dimgray'];

  @Input()
  public result: any[];

  view: any[] =  [1800, 900];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = '';
  showYAxisLabel = true;
  yAxisLabel = '';

  colorScheme = {
    domain: this.getRandomColors()
  };

  constructor() { }

  ngOnInit() {
  }

  onSelect(event) {
    console.log(event);
  }

  public getRandomColors(): string[] {
    return [
      VerticalBarChartComponent.Colors[Math.floor(Math.random() * VerticalBarChartComponent.Colors.length)],
    ];
  }

}
