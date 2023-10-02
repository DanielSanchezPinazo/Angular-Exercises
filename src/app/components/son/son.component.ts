import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-son',
  templateUrl: './son.component.html',
  styleUrls: ['./son.component.css']
})
export class SonComponent {

  @Input()
  public inputMessage?: string;

  // NO VIEWCHILD
  @Output()
  public outputMessage: EventEmitter<string> = new EventEmitter();

  public emitMessage() {

    this.outputMessage.emit("CHILD USING OUTPUT EVENT");
  }
}
