import { AfterViewInit, Component, ElementRef, OnInit, ViewChild, inject } from '@angular/core';
import { ExternalLibraryService } from 'src/app/services/external-library.service';
import { ShortCompany } from './interfaces/company.interface';

import { Chart, ChartItem } from 'chart.js/auto';

@Component({
  selector: 'external-library',
  templateUrl: './external-library.component.html',
  styleUrls: ['./external-library.component.css']
})
export class ExternalLibraryComponent implements AfterViewInit {

  public companies: ShortCompany[] = [];
  public prices: number[] = [];
  public names: string[] = [];
  private externalService = inject(ExternalLibraryService);

  @ViewChild('myChart', { static: true })
  chart!: HTMLCanvasElement;


  ngAfterViewInit(): void {

    this.muestra();
  };

  public muestra() {

    if ( this.chart ) {


      new Chart(this.chart, {
        type: 'bar',
        data: {
          labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
          datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            borderWidth: 1
          }]
        },
        options: {
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
      });

    }

    this.externalService.getRequest().subscribe(res => {

      console.log(res);
      this.companies = res;
      res.map(company => {

        this.prices.push(company.price);
        this.names.push(company.symbol);
      });
      console.log(this.prices);
      console.log(this.names);
    });
  };
}
