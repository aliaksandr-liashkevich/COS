import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HarmonicResultComponent } from './harmonic-result/harmonic-result.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/',
    pathMatch: 'full'
  },
  {
    path: 'lab2',
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
export class Lab2RoutingModule { }
