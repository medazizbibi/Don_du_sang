import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SigninSignupService {

  public api = '//localhost:8080';

  constructor(private http: HttpClient) {}

  public attemptAuth(email: string, password: string): Observable<any> {
    const credentials = {email: email, password: password};
    console.log('attempAuth ::');
    return this.http.post(this.api + '/api/auth/signin', credentials);
  }

  public signUp(firstName: string, lastName: string, email: string, password: string, address: string, city: string, zipCode: number, phoneNumber: number, height: string, weight: string): Observable<any> {
    const person = {firstName: firstName, lastName: lastName, email: email, password: password, address: address, city: city, zipCode: zipCode, phoneNumber: phoneNumber, height: height, weight: weight};
    return this.http.post(this.api + '/api/auth/signup', person);
  }
}

