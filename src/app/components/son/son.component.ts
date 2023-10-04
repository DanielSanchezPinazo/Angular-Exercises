import { Component, Input, Output, EventEmitter, OnInit, inject } from '@angular/core';
import { ComunicationService } from 'src/app/services/comunication.service';

@Component({
  selector: 'app-son',
  templateUrl: './son.component.html',
  styleUrls: ['./son.component.css']
})
export class SonComponent implements OnInit {

  @Input()
  public inputMessage?: string;

  // NO VIEWCHILD
  @Output()
  public outputMessage: EventEmitter<string> = new EventEmitter();

  public sonMessage: string = "";
  public fatherMessage: string = "";
  public sonService = inject(ComunicationService);
  public message$ = "";

  ngOnInit(): void {

    this.getMessage$();
  };

  public emitMessage() {

    this.outputMessage.emit("CHILD USING OUTPUT EVENT");
  };

  public serviceMessage() {

    this.sonService.setFatherMessage("CHILD USING SERVICE");
    this.outputMessage.emit(this.sonService.getFatherMessage());
    // console.log(this.sonService.getFatherMessage());
  };

  public getMessage$() {

    this.sonService.getSon$().subscribe( message => {
    this.message$ = message; });
  };

  public sendMessage$() {

    this.sonService.setFather$("CHILD USING SUBJECT");
  };
}
