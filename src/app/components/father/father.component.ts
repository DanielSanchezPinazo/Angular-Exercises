import { Component } from '@angular/core';

@Component({
  selector: 'app-father',
  templateUrl: './father.component.html',
  styleUrls: ['./father.component.css']
})
export class FatherComponent {

  public fatherMessage: string = "";
  public sonMessage: string = "";
  // public outputMessage: EventEmitter<string> = new EventEmitter();

  public sendMessage() {

    // this.outputMessage.emit("Parent Using Input Property")
    this.fatherMessage = "PARENT USING INPUT PROPERTY";
  }

  public receiveMessage($event: string) {

    this.sonMessage = $event;
  }
}
