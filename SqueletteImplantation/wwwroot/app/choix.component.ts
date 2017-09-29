import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from "./app.component";




@Component ({
    selector: 'my-choix',
    templateUrl: 'app/html/choix.component.html',
    styleUrls: [ 'app/css/choix.component.css' ]
})

export class ChoixComponent 
{ 
    constructor(private router: Router, private appcomponent: AppComponent) {
        this.appcomponent.UpdateAuthentification();
     }

    NeuroClick(): void 
    {
        this.router.navigateByUrl('/categorie');
    }

    CardioClick(): void
    {
        this.router.navigateByUrl('/categorie');
    }
}