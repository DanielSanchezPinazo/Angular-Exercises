import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TrafficService {

  private _onOff$ = new BehaviorSubject<boolean>(false);
  public _color$ = new BehaviorSubject<string>("rojo");

  public setOnOff( value: boolean ) {

    this._onOff$.next( value );
  };

  public getOnOff$() {

    return this._onOff$.asObservable();
  };

  public setColor( value: string ) {

    this._color$.next( value );
  };

  public getColor$() {

    return this._color$.asObservable();
  };
}
