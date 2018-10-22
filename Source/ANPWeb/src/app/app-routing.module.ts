import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnpComponent } from './anp/anp.component';

const routes: Routes = [
  { path: 'home', component: AnpComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  exports: [
    RouterModule
  ],
  imports: [ RouterModule.forRoot(routes) ]
})
export class AppRoutingModule { }
