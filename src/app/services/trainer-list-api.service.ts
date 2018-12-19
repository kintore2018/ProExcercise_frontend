import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

// export interface TrainerList {
//   name: string;
//   area: string;
// }

@Injectable({
  providedIn: "root"
})
export class TrainerListApiService {
  url = "/api/trainer/list";

  constructor(private http: HttpClient) {}

  getTrainers(): Observable<any> {
    // つなぎこみ時
    return this.http.get<any>(this.url);
  }
}
