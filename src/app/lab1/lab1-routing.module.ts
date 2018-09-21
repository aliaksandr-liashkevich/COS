import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { HarmonicResultComponent } from './harmonic-result/harmonic-result.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/',
    pathMatch: 'full'
  },
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'lab1',
    children: [
      {
        path: '',
        redirectTo: 'harmonic',
        pathMatch: 'full'
      },
      {
        path: 'harmonic',
        component: HarmonicResultComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Lab1RoutingModule { }
