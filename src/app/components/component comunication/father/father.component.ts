import { Component, OnInit, inject } from '@angular/core';
import { Subject } from 'rxjs';
import { ComunicationService } from 'src/app/services/comunication.service';

@Component({
  selector: 'app-father',
  templateUrl: './father.component.html',
  styleUrls: ['./father.component.css']
})
export class FatherComponent implements OnInit {

  public fatherMessage: string = "";
  public sonMessage: string = "";
  public fatherService = inject( ComunicationService );
  public message$ = "";
  private unsubscribe$ = new Subject<void>();

  ngOnInit(): void {

    this.getMessage$();
  };

  public sendMessage() {

    this.fatherMessage = "PARENT USING INPUT PROPERTY";
  };

  public receiveMessage($event: string) {

    this.sonMessage = $event;
  };

  public serviceMessage() {

    this.fatherService.setSonMessage("PARENT USING SERVICE");
    this.fatherMessage = this.fatherService.getSonMessage();
    // console.log(this.fatherService.getSonMessage());
  };

  public getMessage$() {

    this.fatherService.getFather$().subscribe( message => {
    this.message$ = message; });
  };

  public sendMessage$() {

    this.fatherService.setSon$("PARENT USING SUBJECT");
  };

  public unsuscribe$() {

    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  };
}
