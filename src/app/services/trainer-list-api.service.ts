import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Subject } from "rxjs/index"
import { catchError } from "rxjs/internal/operators";
import { of } from "rxjs/index"

@Injectable({
  providedIn: "root"
})
export class TrainerListApiService {
  loadingError$ = new Subject<boolean>();
  url = "https://api-proex-2018.herokuapp.com/api/trainer/list";
  // url = "assets/mock/sample.json";

  constructor(private http: HttpClient) {}

  getTrainers(): Observable<any> {
    return this.http.get<any>(this.url).pipe(
      catchError((error) => {
        console.error('エラー', error);
        this.loadingError$.next(true);
        console.log(this.loadingError$);
        return of();
      })
    );
  }
}
