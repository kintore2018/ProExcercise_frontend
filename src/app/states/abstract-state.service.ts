import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export abstract class AbstractStateService<T> {

  abstract subject: BehaviorSubject<T>;
  abstract defaultState: T;

  get $(): Observable<T> {
    return this.subject.asObservable();
  }

  public setValue(value: T): void {
    this.subject.next(value);
  }

  public reset(): void {
    this.setValue(this.defaultState);
  }
}
