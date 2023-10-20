import { Component } from '@angular/core';
import { Region } from '../interfaces/region.type';
import { CountriesService } from 'src/app/services/countries.service';
import { Country } from '../interfaces/country.interface';

@Component({
  selector: 'countries-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  public countriesR: Country[] = [];

  public regions: Region[] = ["Africa", "Americas", "Asia", "Europe", "Oceania"];

  public selectedRegion?: Region;

  constructor( private countriesService: CountriesService ) {}

  searchByRegion( region: Region) {

    this.selectedRegion = region;

    this.countriesService.searchRegion( region )
    .subscribe( countries => {

      this.countriesR = countries;
      // console.log( this.countriesR );
    } );
  };
}
