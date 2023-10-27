import { Component, OnInit, ViewChild, inject } from '@angular/core';
import { ExternalLibraryService } from 'src/app/services/external-library.service';
import { ShortCompany } from './interfaces/company.interface';


@Component({
  selector: 'external-library',
  templateUrl: './external-library.component.html',
  styleUrls: ['./external-library.component.css']
})
export class ExternalLibraryComponent implements OnInit {

  public companies: ShortCompany[] = [];
  public prices: number[] = [];
  public names: string[] = [];
  private externalService = inject( ExternalLibraryService );


  ngOnInit(): void {

    this.muestra();
  };

  muestra() {

    this.externalService.getRequest().subscribe( res =>{

        console.log(res);
        this.companies = res;
        res.map( company => {

          this.prices.push( company.price );
          this.names.push( company.symbol );
        });
        console.log(this.prices);
        console.log(this.names);
      });
  };
}
