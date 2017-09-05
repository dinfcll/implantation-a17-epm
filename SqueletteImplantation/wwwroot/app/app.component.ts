import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<h1>Hello {{name}}</h1>
  <nav>
  <a [routerLink]="['/']">Home</a>
  <a [routerLink]="['/categorie']">Liste des catégories</a>
  </nav>
<router-outlet></router-outlet>`,

})

export class AppComponent  { name = 'Angular'; }
