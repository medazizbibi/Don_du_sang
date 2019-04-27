import { Component, OnInit } from '@angular/core';
import {SigninSignupService} from '../shared/signing/signin-signup.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  firstName: string;
  lastName: string;
  email: string;
  password: string;
  address: string;
  city: string;
  zipCode: number;
  phoneNumber: number;
  height: string;
  weight: string;

  constructor(private signService: SigninSignupService, private router : Router) {
  }

  ngOnInit() {
  }

  signIn() {
    this.signService.attemptAuth(this.email, this.password).subscribe(
      data => {
        console.log(data);
        /*localStorage.setItem('token', data.token);*/
        // this.token.saveToken(data.token);
        this.router.navigate(['home']);
      }
    );
  }

  signup(): void {
    this.signService.signUp(this.firstName, this.lastName, this.email, this.password, this.address, this.city, this.zipCode, this.phoneNumber, this.height, this.weight).subscribe(result => {
        this.signIn();
      }
    );
  }
}
