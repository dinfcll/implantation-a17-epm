//Modules
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {routes} from './app-routing.module';
import {HttpModule} from '@angular/http';

//Components
import {AppComponent} from './app.component';
import { IndexComponent } from './index.component';
import { PageCatComponent } from './page-cat.component';
import {ChoixComponent} from './choix.component';



@NgModule({
  imports:      [ BrowserModule, routes, HttpModule ], // Importation des modules de l'application
  declarations: [ IndexComponent, PageCatComponent, AppComponent, ChoixComponent ],  // Déclaration des "components" de l'application
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
