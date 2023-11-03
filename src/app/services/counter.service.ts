import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject, interval, map, takeUntil } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CounterService {

  private _counter: number = 0;
  private _counterVal$ = new BehaviorSubject<number>(0);
  private _step: number = 0;
  // private _isUp: boolean = true;

  public stop$ = new Subject<void>();

  private _interval$ = interval( 1000 );

  // Getters & Setters

  public setCounterVal( value: number ) {

    this._counterVal$.next( value );
  };

  public getCounterVal$() {

    return this._counterVal$.asObservable();
  };

  public setStep( value: number ) {

    this._step = value;
  };

  // public getStep$() {

  //   return this._step$.asObservable();
  // };

  // public setIsUp( value: boolean ) {

  //   this._isUp = value;
  // };

//

  public counterUp(): Observable<number> {

    this._counterVal$.subscribe( val => this._counter = val);

    return this._interval$.pipe(
      takeUntil( this.stop$ ),
      map( () => (this._counter) + this._step )
    );
  };

  public counterDown() {


  };
}
