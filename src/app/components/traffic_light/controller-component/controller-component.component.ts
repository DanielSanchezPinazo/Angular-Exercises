import { Component, inject } from '@angular/core';
import { TrafficService } from 'src/app/services/traffic.service';

@Component({
  selector: 'controller-component',
  templateUrl: './controller-component.component.html',
  styleUrls: ['./controller-component.component.css']
})
export class ControllerComponentComponent {

  private _trafficService = inject( TrafficService );
  public isChecked: boolean = false;
  public value: string = "rojo";

  public selectValue() {

      console.log( this.value );
      this._trafficService.setColor( this.value );
      // this._trafficService.getColor$().subscribe( val => console.log(val));
  };

  public checkOn() {

  if (this.isChecked) {

    console.log("Encendido");
    this._trafficService.setOnOff( true );

  } else {

    console.log("Apagado");
    this._trafficService.setOnOff( false );
  };
};
}
