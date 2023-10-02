import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {

  selectedRoute: string = '';

  constructor(private router: Router) {}

  navigateToRoute() {

    this.router.navigateByUrl(this.selectedRoute);
  }
}
