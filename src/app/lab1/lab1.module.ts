import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { Lab1RoutingModule } from './lab1-routing.module';
import { HomeComponent } from './home/home.component';
import { HarmonicResultComponent } from './harmonic-result/harmonic-result.component';
import { HarmonicSignalService } from './shared/services';
import { LineChartComponent } from '../shared/components/line-chart/line-chart.component';
import { ChartConverterService } from '../shared/services/chart-converter.service';

@NgModule({
  imports: [
    CommonModule,
    Lab1RoutingModule,
    NgxChartsModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [
    HarmonicSignalService,
    ChartConverterService
  ],
  declarations: [LineChartComponent, HomeComponent, HarmonicResultComponent]
})
export class Lab1Module { }
