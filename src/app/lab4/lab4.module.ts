import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { Lab4RoutingModule } from './lab4-routing.module';
import { SignalResultComponent } from './signal-result/signal-result.component';
import { SlidingService, ParabolicService, MedianService } from './shared/services';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    Lab4RoutingModule,
    FormsModule,
    SharedModule
  ],
  providers: [
    SlidingService,
    ParabolicService,
    MedianService
  ],
  declarations: [SignalResultComponent]
})
export class Lab4Module { }
