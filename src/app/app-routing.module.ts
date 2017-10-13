import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';

import { TemplateDrivenComponent } from './template-driven/template-driven.component';
import { ReactiveComponent } from './reactive/reactive.component';

const appRoutes: Routes = [
  { path: '', component: TemplateDrivenComponent },
  { path: 'template-driven', redirectTo: '' },
  { path: 'reactive', component: ReactiveComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule { }
