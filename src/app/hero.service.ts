import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, of } from "rxjs";

import { Hero } from "./hero";
import { HEROES } from "./mock";

@Injectable({
  providedIn: "root"
})
export class HeroService {
  constructor(
    private http: HttpClient
  ) {}

  public getTrainers(): Observable<Hero[]> {
    return of(HEROES);

    // つなぎこみ時
    // return this.http.get(URL);
  }
}


//同期処理と非同期処理（ovservable, promise）の関連づけを考慮する必要あり
//非同期で値を操作したい場合はofを触る
//一個しかキャッチできないものがpromiss（sucsess, eroor）
//ずっとものが流れ続けるものがobservable（常にデータの状態を監視している）
