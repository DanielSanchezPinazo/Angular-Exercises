import { Component, inject } from '@angular/core';
import { TrafficService } from 'src/app/services/traffic.service';

@Component({
  selector: 'controller-component',
  templateUrl: './controller.component.html',
  styleUrls: ['./controller.component.css']
})
export class ControllerComponent {

  private _trafficService = inject( TrafficService );
  public isChecked: boolean = false;
  public value: string = "rojo";

  public selectValue() {

      // console.log( this.value );
      this._trafficService.setColor( this.value );
      // this._trafficService.getColor$().subscribe( val => console.log(val));
  };

  public turnOnOff() {

  if (this.isChecked) {

    console.log("Encendido");
    this._trafficService.toggleTrafficLight( true );

  } else {

    console.log("Apagado");
    this._trafficService.toggleTrafficLight( false );
  };
};
}
