import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Lab1RoutingModule } from './lab1-routing.module';
import { HomeComponent } from './home/home.component';

@NgModule({
  imports: [
    CommonModule,
    Lab1RoutingModule
  ],
  declarations: [HomeComponent]
})
export class Lab1Module { }
