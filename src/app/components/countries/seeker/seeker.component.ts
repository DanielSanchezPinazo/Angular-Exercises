import { Component, Input, OnDestroy, inject } from '@angular/core';
import { Country } from '../interfaces/country.interface';
import { CountriesService } from 'src/app/services/countries.service';
import { takeUntil } from 'rxjs';

@Component({
  selector: 'countries-seeker',
  templateUrl: './seeker.component.html',
  styleUrls: ['./seeker.component.css']
})
export class SeekerComponent implements OnDestroy {

  @Input()
  public placeholder: string ="";

  @Input()
  public initValue = "";

  @Input()
  public countriesT: Country[] = [];

  private countriesService = inject( CountriesService );

  ngOnDestroy(): void {

    this.countriesService.unsuscribe$.next();
    this.countriesService.unsuscribe$.complete();
  };

  public onKeyPress( searchTerm: string ) {

    // console.log(searchTerm);
    this.countriesService.searchCountry( searchTerm )
    .pipe( takeUntil( this.countriesService.unsuscribe$ ) )
    .subscribe( countries => this.countriesT = countries );
  };
};


