import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError, Subject } from 'rxjs';
import { catchError, retry } from 'rxjs/internal/operators';

export interface ITrainerListRequest extends HttpParams {
  areaIds?: string[];
  skillTagIds?: string[];
}

@Injectable({
  providedIn: 'root'
})
export class TrainerListApiService {
  loadingError$ = new Subject<boolean>();
  url = '/api/trainer/list';

  constructor(private http: HttpClient) {}

  getTrainers(params: ITrainerListRequest): Observable<any> {
    return this.http.get<any>(this.url, {params})
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
  }

}
