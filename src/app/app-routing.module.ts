import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FatherComponent } from './components/component comunication/father/father.component';
import { SidebarComponent } from './components/countries/sidebar/sidebar.component';
import { LightSwitchComponent } from './components/traffic_light/light-switch/light-switch.component';
import { ExternalLibraryComponent } from './components/external-library/external-library.component';

const routes: Routes = [

  {
    path: "comunication",
    component: FatherComponent
  },
  {
    path: "countries-sidebar",
    component: SidebarComponent
  },
  {
    path: "traffic-light",
    component: LightSwitchComponent
  },
  {
    path: "external-library",
    component: ExternalLibraryComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
