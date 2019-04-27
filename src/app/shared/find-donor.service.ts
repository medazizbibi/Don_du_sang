import {Injectable} from '@angular/core';
import {donor} from './donor';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FindDonorService {

  public api = '//localhost:8080/';

  constructor(private http: HttpClient) {
  }

  public getDonors(searchPhrase: string): Observable<donor[]> {
    const obs = this.http.post<donor[]>(this.api + 'donors', searchPhrase);
    return obs;
  }
}





