import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './components/layout/layout.component';
import { FormsModule } from '@angular/forms';
import { FatherComponent } from './components/component comunication/father/father.component';
import { SonComponent } from './components/component comunication/son/son.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    FatherComponent,
    SonComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
