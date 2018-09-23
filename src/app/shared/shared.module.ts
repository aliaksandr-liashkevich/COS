import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LineChartComponent } from './components/line-chart/line-chart.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ChartConverterService } from './services/chart-converter.service';
import { VerticalBarChartComponent } from './components/vertical-bar-chart/vertical-bar-chart.component';

@NgModule({
  imports: [
    CommonModule,
    NgxChartsModule,
    BrowserAnimationsModule,
  ],
  declarations: [
    LineChartComponent,
    VerticalBarChartComponent,
  ],
  providers: [
    ChartConverterService
  ],
  exports: [
    LineChartComponent,
    VerticalBarChartComponent
  ]
})
export class SharedModule { }
