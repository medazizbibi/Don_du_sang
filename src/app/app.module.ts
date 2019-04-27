import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { SignUpComponent } from './sign-up/sign-up.component';
import { HomePageComponent } from './home-page/home-page.component';
import { SearchDonorComponent } from './search-donor/search-donor.component';
import {FindDonorService} from './shared/find-donor.service';

const appRoutes: Routes = [
  { path: '', component: AppComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'home', component: HomePageComponent},
  { path: 'find-donor', component: SearchDonorComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    HomePageComponent,
    SearchDonorComponent
  ],
  imports: [
    BrowserModule,
    MDBBootstrapModule.forRoot(),
    RouterModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
  ],
  exports: [RouterModule],
  schemas: [ NO_ERRORS_SCHEMA ],

  providers: [FindDonorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
