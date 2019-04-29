import {Injectable} from '@angular/core';
import {Donor} from '../donor';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FindDonorService {

  public api = '//localhost:8080/';

  constructor(private http: HttpClient) {
  }

  //  public getDonors(searchPhrase: string): Observable<Donor[]> {
  //    const obs = this.http.post<Donor[]>(this.api + 'donors', searchPhrase);
  //    return obs;
  //  }
}





