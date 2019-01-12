import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { HttpErrorResponse } from "@angular/common/http"
import { Observable, throwError } from "rxjs";
import { Subject } from "rxjs/index"
import {catchError, retry} from "rxjs/internal/operators";

@Injectable({
  providedIn: "root"
})
export class TrainerListApiService {
  loadingError$ = new Subject<boolean>();
  url = "https://api-proex-2018.herokuapp.com/api/trainer/list";
  // url = "assets/mock/sample.json";

  constructor(private http: HttpClient) {}

  getTrainers(): Observable<any> {
    return this.http.get<any>(this.url)
      .pipe(
        retry(3),
        catchError(this.handleError)
      );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      alert('通信エラーが発生しました。ブラウザを再読み込みしてください。'));
  };

}
