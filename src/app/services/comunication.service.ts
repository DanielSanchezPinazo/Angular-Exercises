import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComunicationService {

  private fatherMessage: string = "";
  private sonMessage: string = "";
  private father$ = new BehaviorSubject<string>("");
  private son$ = new BehaviorSubject<string>("");

  public getFatherMessage() {

    return this.fatherMessage;
  };

  public setFatherMessage( message: string ) {

    this.fatherMessage = message;
  };

  public getSonMessage() {

    return this.sonMessage;
  };

  public setSonMessage( message: string ) {

    this.sonMessage = message;
  };

  public getFather$() {

    return this.father$.asObservable();
  };

  public setFather$( message: string) {

    this.father$.next( message );
  };

  public getSon$() {

    return this.son$.asObservable();
  };

  public setSon$( message: string) {

    this.son$.next( message );
  };
}
