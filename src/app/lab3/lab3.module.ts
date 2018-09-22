import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { Lab3RoutingModule } from './lab3-routing.module';
import { SignalResultComponent } from './signal-result/signal-result.component';
import { HarmonicSignalService, PolyharmonicSignalService } from './shared/services';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    Lab3RoutingModule,
    FormsModule,
    SharedModule,
  ],
  providers: [
    HarmonicSignalService,
    PolyharmonicSignalService
  ],
  declarations: [SignalResultComponent]
})
export class Lab3Module { }
