import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export abstract class AbstractApiService {

  constructor(
    protected http: HttpClient
  ) { }

  protected fetch(url: string): Observable<any> {
    return this.http.get<any>(url);
  }

  protected post(url: string, param: any): Observable<any> {
    return this.http.post<any>(url, param);
  }
}
