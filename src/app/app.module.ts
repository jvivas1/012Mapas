import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {HttpModule} from '@angular/http';
import { AgmCoreModule } from '@agm/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';


//Servicios
import {MapasService} from './services/mapas.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    HttpModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBAs0MN_hLXlgag3YnSUX9dQ0kxo5f7rk4'
    })
  ],
  providers: [MapasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
