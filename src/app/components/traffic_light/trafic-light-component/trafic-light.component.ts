import { Component, OnInit, inject } from '@angular/core';
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

  ngOnInit(): void {

    this.showColor();
  };

  public showColor() {

    this._trafficService.isActive$().subscribe(val => this.active = val);

    this._trafficService.getColor$().subscribe( val => {

      this.color = val;
      // console.log( this.color );
      this.basicClass = `semaforo ${ this.color }`;
    });
  };

}
