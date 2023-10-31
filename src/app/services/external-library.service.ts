import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Company, ShortCompany } from '../components/external-library/interfaces/company.interface';
import { catchError, map, of, take, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExternalLibraryService {

  private apikey: string = "&apikey=p44c5L4dPWyz3frqDk0Byg6lAenyyUX9";
  private baseUrl: string = "https://financialmodelingprep.com/api/v3/stock-screener?limit=10";
  private url: string = `${ this.baseUrl  }${ this.apikey }`;
  private http = inject( HttpClient );

  public getRequest() {

    return this.http.get<Company[]>( this.url ).pipe(
      // tap( resp => console.log( resp ) ),
      map( companies => companies.map( company =>  {

        return {

          symbol: company.symbol,
          name: company.companyName,
          sector: company.sector,
          industry: company.industry,
          price: company.price,
          exchange: company.exchangeShortName,
          country: company.country,
          volume: company.volume
        }
      })),
      catchError( error => of([]))
      )
  };

}
