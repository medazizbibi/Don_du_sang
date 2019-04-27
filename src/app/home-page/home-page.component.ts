import { Component, OnInit } from '@angular/core';
import {SigninSignupService} from '../shared/signing/signin-signup.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  email: string;
  pasword: string;
  constructor(private signService : SigninSignupService, private router: Router) { }

  ngOnInit() {
  }

  login(): void {
    this.signService.attemptAuth(this.email, this.password).subscribe(
      data => {
        console.log(data);
        /*localStorage.setItem('token', data.token);*/
        // this.tokenStorage.saveToken(data.token);
        this.router.navigate(['home']);
      }
    );
  }
}
