import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject, catchError, map, of, tap } from 'rxjs';
import { Country } from '../components/countries/interfaces/country.interface';
import { Region } from '../components/countries/interfaces/region.type';

@Injectable({providedIn: 'root'})
export class CountriesService {

  private apiUrl: string = "https://restcountries.com/v3.1";

  public unsuscribe$ = new Subject<void>();

  constructor(private http: HttpClient) { }

  private getCountriesRequest( url: string ) {

    return this.http.get<Country[]>( url )
      .pipe(

        catchError( error => of([])),
      );
  };

  public searchCountry( term: string ): Observable<Country[]> {

    const url = `${this.apiUrl}/name/${term}`;
    return this.getCountriesRequest( url );
  };

  public searchRegion( region: Region ): Observable<Country[]> {

    const url = `${this.apiUrl}/region/${region}`;
    return this.getCountriesRequest( url );
  };
}
