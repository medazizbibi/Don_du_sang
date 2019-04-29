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
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PersonalInfoComponent } from './personal-info/personal-info.component';
import { PersonalDonationsComponent } from './personal-donations/personal-donations.component';
import { PersonalRequestsComponent } from './personal-requests/personal-requests.component';
import { SigninComponent } from './signin/signin.component';
import { RequestFormComponent } from './request-form/request-form.component';

const appRoutes: Routes = [
  { path: '', component: AppComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'home', component: HomePageComponent},
  { path: 'find-donor', component: SearchDonorComponent},
  { path: 'personal-info', component: PersonalInfoComponent},
  { path: 'personal-donations', component: PersonalDonationsComponent},
  { path: 'personal-requests', component: PersonalRequestsComponent},
  { path: 'signin', component: SigninComponent},
  { path: 'request-form', component: RequestFormComponent}


];

@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    HomePageComponent,
    SearchDonorComponent,
    FooterComponent,
    NavbarComponent,
    PersonalInfoComponent,
    PersonalDonationsComponent,
    PersonalRequestsComponent,
    SigninComponent,
    RequestFormComponent
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
