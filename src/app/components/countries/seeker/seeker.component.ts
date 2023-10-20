import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { Country } from '../interfaces/country.interface';
import { CountriesService } from 'src/app/services/countries.service';
import { tap } from 'rxjs';

@Component({
  selector: 'countries-seeker',
  templateUrl: './seeker.component.html',
  styleUrls: ['./seeker.component.css']
})
export class SeekerComponent {

  @Input()
  public placeholder: string ="";

  @Input()
  public initValue = "";

  @Input()
  public countriesT: Country[] = [];

  private countriesService = inject( CountriesService );

  public onKeyPress( searchTerm: string ) {

    // console.log(searchTerm);
    this.countriesService.searchCountry( searchTerm ).subscribe(

      countries => this.countriesT = countries
    );
  };
};


