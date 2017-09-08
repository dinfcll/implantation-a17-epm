//Modules
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//import {routes} from './app-routing.module';

//Components
import { IndexComponent } from './index.component';
import { PageCatComponent } from './page-cat.component';



@NgModule({
  imports:      [ BrowserModule ], // Importation des modules de l'application
  declarations: [ IndexComponent, PageCatComponent ],  // Déclaration des "components" de l'application
  bootstrap:    [ IndexComponent ]
})

export class AppModule { }
