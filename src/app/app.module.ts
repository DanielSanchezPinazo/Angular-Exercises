import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './components/layout/layout.component';
import { FormsModule } from '@angular/forms';
import { FatherComponent } from './components/component comunication/father/father.component';
import { SonComponent } from './components/component comunication/son/son.component';
import { SidebarComponent } from './components/countries/sidebar/sidebar.component';
import { SeekerComponent } from './components/countries/seeker/seeker.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    FatherComponent,
    SonComponent,
    SidebarComponent,
    SeekerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
