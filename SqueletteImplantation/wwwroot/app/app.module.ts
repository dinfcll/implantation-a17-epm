import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { IndexComponent } from './index.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent,
                  IndexComponent],
  bootstrap:    [ AppComponent,
                  IndexComponent ]
})
export class AppModule { }
