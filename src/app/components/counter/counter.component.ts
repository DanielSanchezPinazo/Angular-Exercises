import { Component, OnDestroy, inject } from '@angular/core';
import { Subject, scan, takeUntil } from 'rxjs';
import { CounterService } from 'src/app/services/counter.service';

@Component({
  selector: 'counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnDestroy {

  public counterService = inject( CounterService );

  public counterNumber: number = 0;
  public active: boolean = true;
  public countUp: boolean = true;
  public setInput: number = 0;
  public stepValue: number = 1;
  public currentValue: number = 0;
  public state: string = "Start";

  ngOnDestroy(): void {

    this.counterService.stop$.complete();
  };

  reset() {

    this.currentValue = 0;
    this.counterService.stop$.next();
    this.counter();
  };

  pause() {

    this.state = "Continue"
    this.currentValue = this.counterNumber;
    this.counterService.stop$.next();
  };

  counterUp() {

    this.countUp = true;
  };

  counterDown() {

    this.countUp = false;
  };

  isUp() {

    if ( this.active && this.countUp ) {

      this.counterService._interval$.pipe(
        takeUntil( this.counterService.stop$ ),
        scan( (acc, _ ) => acc + parseInt(this.stepValue.toString()), parseInt(this.counterNumber.toString()))
      ).subscribe( val => this.counterNumber = val);
    };

    if ( this.active && !this.countUp ) {

      this.counterService._interval$.pipe(
        takeUntil( this.counterService.stop$ ),
        scan( (acc, _ ) => acc - parseInt(this.stepValue.toString()), parseInt(this.counterNumber.toString()) )
      ).subscribe( val => this.counterNumber = val);
    };
  };

  counter() {

    if ( this.currentValue === 0 ) {

      this.counterService.setCounter( this.setInput );

    } else {

      this.counterService.setCounter( this.currentValue );
    };

    this.counterService.setStep( this.stepValue );

    this.counterService.getCounter$().pipe(
      takeUntil( this.counterService.stop$ )).subscribe( val => this.counterNumber = val);
    this.counterService.getStep$().pipe(
      takeUntil( this.counterService.stop$ )).subscribe( val => this.stepValue = val );

    this.isUp();
  };

}
