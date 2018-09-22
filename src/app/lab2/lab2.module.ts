import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Lab2RoutingModule } from './lab2-routing.module';
import { HarmonicResultComponent } from './harmonic-result/harmonic-result.component';
import { HarmonicSignalService } from './shared/services';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    Lab2RoutingModule,
    SharedModule
  ],
  providers: [
    HarmonicSignalService,
  ],
  declarations: [HarmonicResultComponent]
})
export class Lab2Module { }
