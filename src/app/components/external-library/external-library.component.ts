import { AfterViewInit, Component, ViewChild, inject } from '@angular/core';
import { ExternalLibraryService } from 'src/app/services/external-library.service';
import { ShortCompany } from './interfaces/company.interface';

import * as Chartist from 'chartist';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'external-library',
  templateUrl: './external-library.component.html',
  styleUrls: ['./external-library.component.css']
})
export class ExternalLibraryComponent implements AfterViewInit {

  public companies: ShortCompany[] = [];
  public prices: number[] = [];
  public names: string[] = [];
  public volumes: number[] = [];
  private externalService = inject( ExternalLibraryService );
  public data1: any;
  public data2: any;

  private unsuscribe$ = new Subject<void>();

  @ViewChild( 'myChart', { static: true })
  chart!: HTMLCanvasElement;

  ngAfterViewInit(): void {

    this.show();
  };

  ngOnDestroy(): void {

    this.unsuscribe$.next();
    this.unsuscribe$.complete();
  };

  public show() {

    this.externalService.getRequest()
    .pipe( takeUntil( this.unsuscribe$ ))
    .subscribe(res => {

      this.companies = res;
      console.log( this.companies );
      res.map( company => {

        this.prices.push( company.price );
        this.names.push( company.symbol );
        this.volumes.push( company.volume / 1000 );
      });

      console.log( this.prices );
      console.log( this.names );
      console.log( this.volumes );

      this.data1 = {
        // A labels array that can contain any sort of values
        labels:
          this.names,
        // Our series array that contains series objects or in this case series data arrays
        series: [
          this.prices
        ]
      };

      this.data2 = {

        labels:
          this.names,

        series: [
          this.volumes
        ]
      };

      new Chartist.BarChart( '#chart1', this.data1 );
      new Chartist.LineChart( '#chart2', this.data2 );
    });
  };
}
