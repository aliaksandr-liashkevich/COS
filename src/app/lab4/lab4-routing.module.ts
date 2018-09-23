import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignalResultComponent } from './signal-result/signal-result.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/',
    pathMatch: 'full'
  },
  {
    path: 'lab4',
    children: [
      {
        path: '',
        redirectTo: 'harmonic',
        pathMatch: 'full'
      },
      {
        path: 'harmonic',
        component: SignalResultComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Lab4RoutingModule { }
