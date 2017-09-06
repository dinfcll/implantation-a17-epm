//Modules
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {routes} from './app-routing.module';

//Components
import {AppComponent}  from './app.component';
import {PageCatComponent} from './page-cat.component'; //Probablement mon prob


@NgModule({
  imports:      [ BrowserModule, routes ], // Importation des modules de l'application
  declarations: [ AppComponent, PageCatComponent ],  // Déclaration des "components" de l'application
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
