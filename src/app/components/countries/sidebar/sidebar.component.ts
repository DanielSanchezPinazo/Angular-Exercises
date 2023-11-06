import { Component } from '@angular/core';
import { Region } from '../interfaces/region.type';
import { CountriesService } from 'src/app/services/countries.service';
import { Country } from '../interfaces/country.interface';
import { takeUntil } from 'rxjs';

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

  ngOnDestroy(): void {

    this.countriesService.unsuscribe$.next();
    this.countriesService.unsuscribe$.complete();
  };

  searchByRegion( region: Region) {

    this.selectedRegion = region;

    this.countriesService.searchRegion( region )
    .pipe( takeUntil( this.countriesService.unsuscribe$ ))
    .subscribe( countries => {

      this.countriesR = countries;
      // console.log( this.countriesR );
    } );
  };
}
