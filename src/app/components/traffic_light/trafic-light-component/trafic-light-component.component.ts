import { Component, ElementRef, OnInit, ViewChild, inject } from '@angular/core';
import { TrafficService } from 'src/app/services/traffic.service';

@Component({
  selector: 'trafic-light-component',
  templateUrl: './trafic-light-component.component.html',
  styleUrls: ['./trafic-light-component.component.css']
})
export class TraficLightComponentComponent implements OnInit {

  @ViewChild( "semaforo", { static: true } )
  trafficLight!: ElementRef;

  private _trafficService = inject( TrafficService );
  public color: string = "";
  // public basicClass: string = "semaforo";

  ngOnInit(): void {

    this.showColor();
  };

  public showColor() {

    this._trafficService.getOnOff$().subscribe(val => { return val });
//! si este log da false, por qué se enciende en rojo el semaforo???

    if ( this._trafficService.getOnOff$().subscribe() ) {

    // console.log( this._trafficService.getColor$().subscribe(val => console.log(val)) );
//! porque este get no es dinamico???
      this._trafficService.getColor$().subscribe( val => this.color = val );
      console.log( this.color );
      this.trafficLight.nativeElement.classList.add( this.color );
    };


  };

}
