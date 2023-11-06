import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject, interval, map, takeUntil } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CounterService {

  private _counter$ = new BehaviorSubject<number>(0);
  private _step$ = new BehaviorSubject<number>(1);
  public stop$ = new Subject<void>();

  public _interval$ = interval( 1000 );

  // Getters & Setters

  public setCounter( value: number ) {

    this._counter$.next( value );
  };

  public getCounter$() {

    return this._counter$.asObservable();
  };

  public setStep( value: number ) {

    this._step$.next( value );
  };

  public getStep$() {

    return this._step$.asObservable();
  };
}
