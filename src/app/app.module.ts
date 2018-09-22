import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { Lab1Module } from './lab1/lab1.module';
import { Lab2Module } from './lab2/lab2.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Lab1Module,
    Lab2Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
