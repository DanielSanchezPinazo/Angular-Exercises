import { Component, OnInit, inject } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { TrafficService } from 'src/app/services/traffic.service';

@Component({
  selector: 'trafic-light-component',
  templateUrl: './trafic-light.component.html',
  styleUrls: ['./trafic-light.component.css']
})
export class TraficLightComponent implements OnInit {

  private _trafficService = inject( TrafficService );
  public color: string = "";
  public active: boolean = false;
  public basicClass: string = "semaforo";

  public unsuscribe$ = new Subject<void>();

  ngOnInit(): void {

    this.showColor();
  };

  ngOnDestroy(): void {

    this.unsuscribe$.next();
    this.unsuscribe$.complete();
  };

  public showColor() {

    this._trafficService.isActive$()
    .pipe( takeUntil( this.unsuscribe$ )).subscribe(val => this.active = val);

    this._trafficService.getColor$()
    .pipe( takeUntil( this.unsuscribe$ ))
    .subscribe( val => {

      this.color = val;
      // console.log( this.color );
      this.basicClass = `semaforo ${ this.color }`;
    });
  };

}
