import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

export interface TrainerList {
  name: string;
  area: string;
}

@Injectable({
  providedIn: "root"
})
export class TrainerListApiService {
  url = "assets/mock/sample.json";

  constructor(private http: HttpClient) {}

  getTrainers(): Observable<TrainerList[]> {
    // つなぎこみ時
    return this.http.get<TrainerList[]>(this.url);
  }
}
