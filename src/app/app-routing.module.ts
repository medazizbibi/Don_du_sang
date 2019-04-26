import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AppComponent} from './app.component';
import {SignUpComponent} from './sign-up/sign-up.component';

const appRoutes: Routes = [
  { path: '', component: AppComponent },
  { path: 'sign-up', component: SignUpComponent }
];


@NgModule({
  imports: [
    RouterModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
