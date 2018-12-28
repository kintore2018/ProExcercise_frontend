import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

// export interface TrainerList {
//   name: swwtring;
//   area: string;
// }

@Injectable({
  providedIn: "root"
})
export class TrainerListApiService {
  url = "https://api-proex-2018.herokuapp.com/api/trainer/list";
  // url = "assets/mock/sample.json";

  constructor(private http: HttpClient) {}

  getTrainers(): Observable<any> {
    return this.http.get<any>(this.url);
  }
}
