import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/internal/operators';

export interface TrainerDetail {
  access: string;
  belonging: string;
  comment: string;
  fee: string;
  hobby: string;
  imagePath: string;
  introduction: string;
  reason: string;
  salesPoint: string;
  trainerId: number;
  trainerName: string;
  trainerNameEn: string;
}

@Injectable({ providedIn: 'root' })
export class TrainerDetailApiService {
  url = '/api/trainer/details/';

  constructor(private http: HttpClient) {}

  getTrainerDetail(id): Observable<TrainerDetail> {
    return this.http.get<TrainerDetail>(this.url + id)
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


  // demo用
  // getTrainerDetail(id): Observable<TrainerDetail> {
  //   return this.http.get<TrainerDetail>(this.url);
  // }
}
