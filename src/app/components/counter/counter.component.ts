import { Component, ElementRef, OnInit, ViewChild, inject } from '@angular/core';
import { Subscription } from 'rxjs';
import { CounterService } from 'src/app/services/counter.service';

@Component({
  selector: 'counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  public counterService = inject( CounterService );

  public counterNumber: number = 0;
  public active: boolean = false;
  public countUp: boolean = true;

  public setInput: number = 0;

  @ViewChild("stepInput")
  public stepInput?: ElementRef;
  public stepValue: number = 0;

  public subscription!: Subscription;

  ngOnInit(): void {

  };

  getStep() {

    if (this.stepInput) {

      this.stepValue = this.stepInput.nativeElement.value;
    };
  };

  reset() {

    this.counterNumber = 0;
    // this.counterService.setCounter( 0 );
  };

  pause() {

    this.counterService.stop$.next();

    if ( this.subscription ) {

      this.subscription.unsubscribe();
    }

  };

  counterUp() {

    this.countUp = true;
    // this.counterService.setIsUp( true );
  };

  counterDown() {

    this.countUp = false;
    // this.counterService.setIsUp( false );
  };

  counter() {

     this.counterService.setCounterVal( this.setInput );
     this.counterService.setStep( this.stepValue );

    // this.counterService.getCounter$().subscribe( val =>

    //   this.counterNumber = val
    // );



    if ( this.countUp ) {

      this.subscription = this.counterService.counterUp().subscribe( val => this.counterNumber = val)


    };

    if ( this.active === true && !this.countUp ) {


    };


  };

}
